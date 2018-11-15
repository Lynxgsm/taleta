<?php defined('BASEPATH') or exit('No direct script access allowed');

class etudiant extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->model('Model_etudiant');
        $this->load->model('Model_quartier');
        $this->load->model('Model_ville');
        $this->load->helper('string');
        header("Access-Control-Allow-Origin: *"); // CORS Origin enabled
    }

    public function getAll()
    {
        $data = $this->Model_etudiant->get_all();
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result[] = array('id' => $row->ID,
                    'nom' => $row->nom,
                    'prenom' => $row->prenom,
                    'date_naissance' => $row->date_naissance,
                    'email' => $row->email,
                    'password' => $row->password,
                    'tel' => $row->tel,
                    'photo' => $row->photo,
                    'niveau' => $row->niveau,
                    'pays' => $row->pays,
                    'quartier' => $row->quartier,
                    'ville' => $row->ville,
                    'adresse' => $row->adresse);
            }

            echo json_encode($result);
        }
    }

    public function get()
    {
        $id = $this->input->get('id');
        $data = $this->Model_etudiant->get_info($id);

        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result = array(
                    'id' => $row->ID,
                    'nom' => $row->nom,
                    'prenom' => $row->prenom,
                    'date_naissance' => $row->date_naissance,
                    'email' => $row->email,
                    'password' => $row->password,
                    'tel' => $row->tel,
                    'photo' => $row->photo,
                    'niveau' => $row->niveau,
                    'pays' => $row->pays,
                    'ville' => $row->ville,
                    'adresse' => $row->adresse,
                );
            }

            echo json_encode($result);
        }
    }

    public function insert()
    {
        $nom = $this->input->post('nom');
        $prenom = $this->input->post('prenom');
        $mail = $this->input->post('email');
        $niveau = $this->input->post('niveau');
        $date_naissance = $this->input->post('date_naissance');
        $password = md5($this->input->post('password'));
        $tel = $this->input->post('tel');
        $ville = $this->input->post('ville');
        $quartier = $this->input->post('quartier');
        $adresse = $this->input->post('adresse');

        $data = array(
            'ID' => random_string('alnum', 10),
            'nom' => strtoupper($nom),
            'prenom' => isset($prenom) ? $prenom : '',
            'date_naissance' => $date_naissance,
            'email' => $mail,
            'IDNiveau' => $niveau,
            'adresse' => $adresse,
            'IDPays' => "TCHAD",
            'tel' => '',
            'password' => $password,
            'IDVille' => $ville,
            'IDQuartier' => $this->Model_quartier->get_id($quartier)->result()[0]->ID,
            'photo' => '',
        );

        $this->Model_etudiant->insert($data);
        echo json_encode(array('result' => true));
    }

    public function delete()
    {
        $id = $this->input->get('id');
        $this->Model_etudiant->delete($id);
        $check = $this->Model_etudiant->get_one($id);
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

        $this->Model_etudiant->update($id, $data);
        echo json_encode(array('result' => 'success'));
    }

    public function login()
    {
        $username = $this->input->post('email');
        $password = md5($this->input->post('password'));
        $data = $this->Model_etudiant->login($username, $password);

        if ($data->num_rows() > 0) {
            echo json_encode(array(
                'logged' => true,
                'user_id' => $data->result()[0]->ID,
                'message' => "Bienvenue, " . $data->result()[0]->nom));
        } else {
            echo json_encode(array('logged' => false, 'message' => "Le nom d'utilisateur et le mot de passe ne correspondent pas."));
        }
    }

    public function checkIfMailExists()
    {
        $data = $this->Model_etudiant->check_mail_exists($this->input->get('email'));
        if ($data->num_rows() > 0) {
            echo json_encode(array("result" => true));
        } else {
            echo json_encode(array("result" => false));
        }
    }
}
