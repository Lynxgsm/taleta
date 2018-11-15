<?php defined('BASEPATH') or exit('No direct script access allowed');

class capacite extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Model_capacite');
        $this->load->database();
        header("Access-Control-Allow-Origin: *"); // CORS Origin enabled
    }

    public function getAll()
    {
        $data = $this->Model_capacite->get_all();
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result[] = array('id' => $row->ID, 'etudiant' => $row->libelle);
            }

            echo json_encode($result);
        }
    }

    public function get()
    {
        $id = $this->input->get('id');
        $data = $this->Model_capacite->get_one($id);
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result[] = array('id' => $row->ID, 'prix' => $row->prix, 'matiere' => array('ID' => $row->IDMatiere, 'matiere' => $row->matiere), 'niveau' => array('ID' => $row->IDNiveau, 'niveau' => $row->niveau));
            }

            echo json_encode($result);
        }
    }

    public function insert()
    {
        $tuteur = $this->input->post('IDTuteur');
        $matiere = $this->input->post('IDMatiere');
        $niveau = $this->input->post('IDNiveau');
        $prix = $this->input->post('prix');

        $data = array(
            'IDTuteur' => $tuteur,
            'IDMatiere' => $matiere,
            'IDNiveau' => $niveau,
            'prix' => $prix,
        );

        $this->Model_capacite->insert($data);

        echo json_encode(array('message' => 'Le tarif a été fixé.'));
    }

    public function delete()
    {
        $id = $this->input->post('id');
        $this->Model_capacite->delete($id);
        $check = $this->Model_capacite->get_one($id);
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

        $this->Model_capacite->update($id, $data);
        echo json_encode(array('result' => 'success'));
    }
}
