<?php defined('BASEPATH') or exit('No direct script access allowed');

class cours extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        header("Access-Control-Allow-Origin: *"); // CORS Origin enabled
    }

    public function getAll()
    {
        $data = $this->Model_etudiant->get_all();
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
        $data = $this->Model_etudiant->get_one($id);
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result = array('id' => $row->ID, 'etudiant' => $row->libelle);
            }

            echo json_encode($result);
        }
    }

    public function insert()
    {
        $nom = $this->input->post('nom');
        $prenom = $this->input->post('prenom');
        $date_naissance = $this->input->post('date_naissance');
        $mail = $this->input->post('mail');
        $tel = $this->input->post('tel');
        $niveau = $this->input->post('niveau');
        $adresse = $this->input->post('adresse');
        $pays = $this->input->post('IDPays');
        $ville = $this->input->post('IDVille');

        $data = array(
            'nom' => $nom || "",
            'prenom' => $prenom || "",
            'date_naissance' => $date_naissance || "",
            'mail' => $mail || "",
            'tel' => $tel || "",
            'IDNiveau' => $niveau || "",
            'adresse' => $adresse || "",
            'IDPays' => $pays || "",
            'IDVille' => $ville || "",
        );

        $this->Model_etudiant->insert($data);
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
}
