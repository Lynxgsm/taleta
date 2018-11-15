<?php defined('BASEPATH') or exit('No direct script access allowed');

class team extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->model('Model_team');
        header("Access-Control-Allow-Origin: *"); // CORS Origin enabled
    }

    public function getAll()
    {
        $data = $this->Model_team->get_all();
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result[] = array(
                    'id' => intval($row->ID),
                    'nom' => $row->nom,
                    'prenom' => $row->prenom,
                    "photo" => $row->photo,
                    "fonction" => $row->fonction,
                    "description" => $row->description,
                    "tel" => $row->tel,
                    "skype" => $row->skypeUrl,
                    "facebook" => $row->facebookUrl,
                    "linkedin" => $row->linkedInUrl,
                );
            }

            echo json_encode($result);
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
        $nom = $this->input->post('nom');
        $prenom = $this->input->post('prenom');
        $fonction = $this->input->post('fonction');
        $description = $this->input->post('description');
        $linkedIn = $this->input->post('linkedIn');
        $skype = $this->input->post('skype');
        $facebook = $this->input->post('facebook');
        $email = $this->input->post('email');

        $data = array(
            'nom' => $nom,
            'prenom' => $prenom,
            'fonction' => $fonction,
            'description' => $description,
            'linkedInUrl' => $linkedIn,
            'facebookUrl' => $facebook,
            'skypeUrl' => $skype,
            'email' => $email,
            'photo' => $this->uploadFile('photo'),
        );

        $exists = $this->Model_team->insert($data);

        echo json_encode(array('result' => true));
    }

    public function delete()
    {
        $id = $this->input->post('id');
        $this->Model_team->delete($id);
        $check = $this->Model_team->get_one($id);
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

    public function uploadFile($file_element_name)
    {
        $status = "";
        $fileType = "";
        $filename = "";

        if ($status !== "error") {
            $config['upload_path'] = './files';
            $config['allowed_types'] = 'png|jpeg|jpg|pdf';
            $config['encrypt_name'] = true;

            $this->load->library('upload', $config);

            if (!$this->upload->do_upload($file_element_name)) {
                $status = 'error';
                $msg = $this->upload->display_errors('', '');
            } else {
                $status = "status";
                $msg = "uploaded";
                $data = $this->upload->data();
                $fileType = pathinfo($data['file_name'], PATHINFO_EXTENSION);
                $filename = $data['file_name'];
            }
        }

        return $filename;
    }

}
