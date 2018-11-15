<?php defined('BASEPATH') or exit('No direct script access allowed');

class tarif extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->model('Model_tarif');
        header("Access-Control-Allow-Origin: *"); // CORS Origin enabled
    }

    public function getAll()
    {
        $data = $this->Model_tarif->get_all();
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result[] = array('id' => intval($row->ID), 'niveau' => array('id' => $row->IDNiveau, 'niveau' => $row->niveau), 'matiere' => array('id' => $row->IDMatiere, 'niveau' => $row->matiere), "max" => intval($row->max), "min" => intval($row->min));
            }

            echo json_encode($result);
        }
    }

    public function checkMinMax()
    {
        $niveau = $this->input->get('niveau');
        $matiere = $this->input->get('matiere');

        $data = $this->Model_tarif->check_min_max($niveau, $matiere);
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result = array("max" => intval($row->max), "min" => intval($row->min));
            }

            echo json_encode($result);
        } else {
            echo json_encode(array('max' => intval(10000000000000), 'min' => intval(0)));
        }
    }

    public function get()
    {
        $id = $this->input->get('id');
        $data = $this->Model_tarif->get_one($id);
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result = array('id' => $row->ID, 'niveau' => $row->niveau);
            }

            echo json_encode($result);
        }
    }

    public function insert()
    {
        $niveau = $this->input->post('niveau');
        $tuteur = $this->input->post('tuteur');
        $matiere = $this->input->post('matiere');

        $exists = $this->Model_tarif->get($tuteur, $matiere, $niveau);

        $data = array(
            'niveau' => $niveau,
            'matiere' => $matiere,
            'tuteur' => $tuteur,
        );

        if ($exists->num_rows() > 0) {
            $this->Model_tarif->delete($exists->result()[0]->ID);
        }

        // $this->Model_tarif->insert($data);
    }

    public function delete()
    {
        $id = $this->input->get('id');
        $this->Model_tarif->delete($id);
        $check = $this->Model_tarif->get_one($id);
        if ($check->num_rows() < 1) {
            echo json_encode(array('result' => 'success'));
        } else {
            echo json_encode(array('result' => 'error'));
        }
    }

    public function update()
    {
        $id = $this->input->get('id');
        $libelle = $this->input->get('niveau');
        $data = array(
            'niveau' => $libelle,
        );

        $this->Model_tarif->update($id, $data);
        echo json_encode(array('result' => 'success'));
    }
}
