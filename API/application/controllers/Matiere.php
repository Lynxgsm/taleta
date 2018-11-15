<?php defined('BASEPATH') or exit('No direct script access allowed');

class matiere extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->model('Model_matiere');
        header("Access-Control-Allow-Origin: *"); // CORS Origin enabled
    }

    public function getAll()
    {
        $data = $this->Model_matiere->get_all();
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result[] = array('id' => $row->ID, 'matiere' => $row->matiere);
            }

            echo json_encode($result);
        }
    }

    public function get()
    {
        $id = $this->input->get('id');
        $data = $this->Model_matiere->get_one($id);
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result = array('id' => $row->ID, 'matiere' => $row->matiere);
            }

            echo json_encode($result);
        }
    }

    public function insert()
    {
        $matiere = $this->input->get('matiere');
        $data = array(
            'matiere' => $matiere,
        );

        $this->Model_matiere->insert($data);
    }

    public function delete()
    {
        $id = $this->input->get('id');
        $this->Model_matiere->delete($id);
        $check = $this->Model_matiere->get_one($id);
        if ($check->num_rows() < 1) {
            echo json_encode(array('result' => 'success'));
        } else {
            echo json_encode(array('result' => 'error'));
        }
    }

    public function update()
    {
        $id = $this->input->get('id');
        $matiere = $this->input->get('matiere');
        $data = array(
            'matiere' => $matiere,
        );

        $this->Model_matiere->update($id, $data);
        echo json_encode(array('result' => 'success'));
    }
}
