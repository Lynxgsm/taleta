<?php defined('BASEPATH') or exit('No direct script access allowed');

class reservation extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->model('Model_reservation');
        $this->load->model('Model_etudiant');
        $this->load->model('Model_matiere');
        $this->load->model('Model_tuteur');
        header("Access-Control-Allow-Origin: *"); // CORS Origin enabled
    }

    public function getAll()
    {
        $data = $this->Model_reservation->get_all();
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result[] = array('id' => $row->ID, 'matiere' => $row->matiere);
            }

            echo json_encode($result);
        }
    }

    public function get(){
        $id = $this->input->get('id');
        $data = $this->Model_reservation->get_one($id);
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result = array('id' => intval($row->ID), 'title' => "Cours de " . $this->Model_matiere->get_one($row->IDMatiere)->result()[0]->matiere, 'start' => $row->startDate, 'end' => $row->endDate, 'adresse' => $row->adresse, 'attente' => $row->attente, 'accord' => intval($row->accord), 'en_attente' => intval($row->en_attente), 'tuteur_attente'=>intval($row->tuteur_attente),'etudiant' => $this->Model_etudiant->get_one($row->IDEtudiant)->result()[0], 'matiere' => $this->Model_matiere->get_one($row->IDMatiere)->result()[0]);
            }

            echo json_encode($result);
        }
    }

    public function getTuteurReservation()
    {
        $id = $this->input->get('id');
        $accord = $this->input->get('accord');
        $data = $this->Model_reservation->get_tuteur($id);
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result[] = array('id' => intval($row->ID), 'title' => "Cours de " . $this->Model_matiere->get_one($row->IDMatiere)->result()[0]->matiere, 'start' => $row->startDate, 'end' => $row->endDate, 'adresse' => $row->adresse, 'attente' => $row->attente, 'accord' => intval($row->accord), 'en_attente' => intval($row->en_attente), 'tuteur_attente'=>intval($row->tuteur_attente), 'etudiant' => $this->Model_etudiant->get_one($row->IDEtudiant)->result()[0], 'matiere' => $this->Model_matiere->get_one($row->IDMatiere)->result()[0]);
            }

            echo json_encode($result);
        }
    }

    public function getEtudiantReservation()
    {
        $id = $this->input->get('id');
        $data = $this->Model_reservation->get_etudiant($id);
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result[] = array('id' => intval($row->ID), 'title' => "Cours de " . $this->Model_matiere->get_one($row->IDMatiere)->result()[0]->matiere, 'start' => $row->startDate, 'end' => $row->endDate, 'adresse' => $row->adresse, 'attente' => $row->attente, 'accord' => intval($row->accord), 'en_attente' => intval($row->en_attente), 'tuteur' => $this->Model_tuteur->get_one($row->IDTuteur)->result()[0], 'matiere' => $this->Model_matiere->get_one($row->IDMatiere)->result()[0]);
            }

            echo json_encode($result);
        }
    }

    public function insert()
    {
        $IDMatiere = $this->input->post('IDMatiere');
        $IDEtudiant = $this->input->post('IDEtudiant');
        $IDTuteur = $this->input->post('IDTuteur');
        $IDNiveau = $this->input->post('IDNiveau');
        $startDate = $this->input->post('startDate');
        $endDate = $this->input->post('endDate');
        $adresse = $this->input->post('adresse');
        $attente = $this->input->post('attente');

        $data = array(
            'IDEtudiant' => $IDEtudiant,
            'IDTuteur' => $IDTuteur,
            'IDMatiere' => $IDMatiere,
            'IDNiveau' => $IDNiveau,
            'startDate' => $startDate,
            'endDate' => $endDate,
            'adresse' => $adresse,
            'attente' => $attente,
            'accord' => 0,
            'en_attente'=>1,
            'tuteur_attente'=>0
        );

        $this->Model_reservation->insert($data);

        echo json_encode(array('result'=>true));
    }

    public function accept()
    {
        $id = $this->input->post('id');
        $data = $this->Model_reservation->accept($id);
        echo json_encode(array('validated' => true, 'id' => $this->input->post('id')));
    }

    public function delete()
    {
        $id = $this->input->get('id');
        $this->Model_reservation->delete($id);
        $check = $this->Model_reservation->get_one($id);
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

        $this->Model_reservation->update($id, $data);
        echo json_encode(array('result' => 'success'));
    }

    public function payement_done(){
        
    }
}
