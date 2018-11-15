<?php defined('BASEPATH') or exit('No direct script access allowed');

class admin extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Model_admin');
        $this->load->database();
        header("Access-Control-Allow-Origin: *"); // CORS Origin enabled
    }

    public function getAll()
    {
        $data = $this->Model_admin->get_all();
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result[] = array('id' => $row->ID, 'etudiant' => $row->libelle);
            }

            echo json_encode($result);
        }
    }

    public function changePassword()
    {
        $id = $this->input->post('id');
        $username = $this->input->post('username');
        $password = md5($this->input->post('password'));
        $newpassword = md5($this->input->post('newpassword'));

        $getone = $this->Model_admin->get($id);

        if ($getone->result()[0]->password == $password) {
            $change = array(
                'username' => $username,
                'password' => $newpassword,
            );
            $data = $this->Model_admin->update($id, $change);
            echo json_encode(array('result' => true));
        } else {
            echo json_encode(array('result' => false));
        }
    }

    public function get()
    {
        $id = $this->input->get('id');
        $data = $this->Model_admin->get_one($id);
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result[] = array('id' => $row->ID, 'prix' => $row->prix, 'matiere' => array('ID' => $row->IDMatiere, 'matiere' => $row->matiere), 'niveau' => array('ID' => $row->IDNiveau, 'niveau' => $row->niveau));
            }

            echo json_encode($result);
        }
    }

    public function insert()
    {
        $username = $this->input->post('username');
        $password = md5($this->input->post('password'));

        $data = array(
            'username' => $username,
            'password' => $password,
        );

        $this->Model_admin->insert($data);

        echo json_encode(array('message' => 'Inserted'));
    }

    public function delete()
    {
        $id = $this->input->post('id');
        $this->Model_admin->delete($id);
        $check = $this->Model_admin->get_one($id);
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

        $this->Model_admin->update($id, $data);
        echo json_encode(array('result' => 'success'));
    }

    public function login()
    {
        $username = $this->input->post('username');
        $password = md5($this->input->post('password'));
        $data = $this->Model_admin->login($username, $password);

        if ($data->num_rows() > 0) {
            echo json_encode(array(
                'logged' => true,
                'password' => $password,
                'username' => $username,
                'id' => intval($data->result()[0]->ID),
                'message' => "Connexion acceptée",
                'authorized' => intval(1)));
        } else {
            echo json_encode(array('logged' => false, 'message' => "Le nom d'utilisateur et le mot de passe ne correspondent pas.", 'password' => $password, 'username' => $username));
        }
    }
}
