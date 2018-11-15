<?php defined('BASEPATH') or exit('No direct script access allowed');

class pays extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->model('Model_pays');
        $this->load->model('Model_ville');
        header("Access-Control-Allow-Origin: *"); // CORS Origin enabled
    }

    public function getAll()
    {
        $data = $this->Model_pays->get_all();
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result[] = array('id' => $row->ID, 'pays' => $row->nom);
            }

            echo json_encode($result);
        }
    }

    public function getForAdmin()
    {
        $data = $this->Model_pays->get_all();

        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $villes = array();
                $ville = $this->Model_ville->get_by_pays($row->ID);
                if ($ville->num_rows() > 0) {
                    foreach ($ville->result() as $v) {
                        $villes[] = array('id' => $v->ID, 'ville' => $v->nom);
                    }
                }

                $result[] = array('id' => $row->ID, 'pays' => $row->nom, 'villes' => $villes);
            }

            echo json_encode($result);
        }
    }

    public function get()
    {
        $id = $this->input->get('id');
        $data = $this->Model_pays->get_one($id);
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result = array('id' => $row->ID, 'pays' => $row->pays);
            }

            echo json_encode($result);
        }
    }

    public function insert()
    {
        $id = $this->input->post('id');
        $pays = $this->input->post('pays');

        $data = array(
            'ID' => $id,
            'pays' => $pays,
        );

        $this->Model_pays->insert($data);

        echo json_encode(array('message' => true));
    }

    public function delete()
    {
        $id = $this->input->get('id');
        $this->Model_pays->delete($id);
        $check = $this->Model_pays->get_one($id);
        if ($check->num_rows() < 1) {
            echo json_encode(array('result' => 'success'));
        } else {
            echo json_encode(array('result' => 'error'));
        }
    }

    public function update()
    {
        $id = $this->input->get('id');
        $libelle = $this->input->get('libelle');
        $data = array(
            'libelle' => $libelle,
        );

        $this->Model_pays->update($id, $data);
        echo json_encode(array('result' => 'success'));
    }
}
