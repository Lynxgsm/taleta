<?php defined('BASEPATH') or exit('No direct script access allowed');

class message extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->model('Model_message');
        header("Access-Control-Allow-Origin: *"); // CORS Origin enabled
    }

    public function getAll()
    {
        $data = $this->Model_message->get_all();
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result[] = array('id' => $row->ID,
                    'nom' => $row->nom,
                    'prenom' => $row->prenom,
                    'message' => $row->message,
                    'email' => $row->adresse,
                    'objet' => $row->objet,
                    'lu' => intval($row->lu));
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
        $nom = $this->input->post('nom');
        $prenom = $this->input->post('prenom');
        $objet = $this->input->post('objet');
        $message = $this->input->post('message');
        $email = $this->input->post('email');

        $data = array(
            'nom' => $nom,
            'prenom' => $prenom,
            'objet' => $objet,
            'message' => $message,
            'adresse' => $email,
        );

        $this->Model_message->insert($data);
        echo json_encode(array('result' => true));
    }

    public function delete()
    {
        $id = $this->input->post('id');
        $this->Model_message->delete($id);
        $check = $this->Model_message->get($id);
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
