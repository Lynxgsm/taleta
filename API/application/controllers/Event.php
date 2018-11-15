<?php defined('BASEPATH') or exit('No direct script access allowed');

class event extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->model('Model_event');
        header("Access-Control-Allow-Origin: *"); // CORS Origin enabled
    }

    public function getAll()
    {
        $data = $this->Model_event->get_all();
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result[] = array('id' => intval($row->ID),
                    'nom' => $row->nom,
                    'prenom' => $row->prenom,
                    'date_naissance' => $row->date_naissance,
                    'mail' => $row->mail,
                    'tel' => $row->tel,
                    'adresse' => $row->adresse,
                    'pays' => $row->IDPays,
                    'ville' => $row->IDVille,
                    'CV' => $row->CV,
                    'lettre_motivation' => $row->lettre_motivation);
            }

            echo json_encode($result);
        }
    }

    public function get()
    {
        $id = $this->input->get('id');
        $data = $this->Model_event->get($id);
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result[] = array(
                    'id' => $row->ID,
                    'user_id' => $row->IDEtudiant,
                    'title' => $row->description,
                    'start' => $row->startDate,
                    'end' => $row->endDate,
                );
            }

            echo json_encode($result);
        }
    }

    public function insert()
    {
        $id = $this->input->post('id');
        $description = $this->input->post('description');
        $validation = $this->input->post('validation');
        $startDate = $this->input->post('startDate') . " " . $this->input->post('timeBefore');
        $endDate = $this->input->post('endDate') . " " . $this->input->post('timeAfter');

        $data = array(
            'IDTuteur' => $id,
            'description' => $description,
            'startDate' => $startDate,
            'endDate' => $endDate,
            'validation' => $validation || 1,
        );

        if ($this->Model_event->insert($data)) {
            echo json_encode(array("message" => "L'évènement a bien été enregistré.", "result" => true));
        } else {
            echo json_encode(array("message" => "L'évènement n'a pas été enregistré.Veuillez réessayer.", "result" => false));
        }
    }

    public function insertAssets($filename)
    {

    }

    public function delete()
    {
        $id = $this->input->get('id');
        $this->Model_event->delete($id);
        $check = $this->Model_event->get_one($id);
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

        $this->Model_event->update($id, $data);
        echo json_encode(array('result' => 'success'));
    }
}
