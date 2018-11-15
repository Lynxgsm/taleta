<?php defined('BASEPATH') or exit('No direct script access allowed');

class ville extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->model('Model_ville');
        header("Access-Control-Allow-Origin: *"); // CORS Origin enabled
    }

    public function getAll()
    {
        $data = $this->Model_ville->get_all();
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result[] = array('id' => $row->ID, 'ville' => $row->nom);
            }

            echo json_encode($result);
        }
    }

    public function get()
    {
        $id = $this->input->get('id');
        $data = $this->Model_ville->get_one($id);
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result = array('id' => $row->ID, 'ville' => $row->nom);
            }

            echo json_encode($result);
        }
    }

    // public function change(){
    //     echo json_encode(array("password"=>md5($this->input->get('pass'))));
    // }

    public function getByPays()
    {
        $id = $this->input->get('id');
        $data = $this->Model_ville->get_by_pays($id);
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result[] = array('id' => $row->ID, 'ville' => $row->nom);
            }

            echo json_encode($result);
        }
    }

    public function insert()
    {
        $nom = $this->input->post('id');
        $prenom = $this->input->post('ville');

        $data = array(
            'ID' => $ID,
            'ville' => $ville || "",
        );

        $this->Model_ville->insert($data);
    }

    public function delete()
    {
        $id = $this->input->get('id');
        $this->Model_ville->delete($id);
        $check = $this->Model_ville->get_one($id);
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

        $this->Model_ville->update($id, $data);
        echo json_encode(array('result' => 'success'));
    }
}
