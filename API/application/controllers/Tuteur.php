<?php defined('BASEPATH') or exit('No direct script access allowed');

class tuteur extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->library('email');
        $this->load->model('Model_tuteur');
        $this->load->model('Model_pays');
        $this->load->model('Model_ville');
        $this->load->model('Model_quartier');
        $this->load->model('Model_tuteur_login');
        header("Access-Control-Allow-Origin: *"); // CORS Origin enabled
    }

    public function getAll()
    {
        $data = $this->Model_tuteur->get_all();
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result[] = array('id' => intval($row->ID),
                    'nom' => $row->nom,
                    'prenom' => $row->prenom,
                    'date_naissance' => $row->date_naissance,
                    'description' => $row->description,
                    'email' => $row->email,
                    'tel' => $row->tel,
                    'adresse' => $row->adresse,
                    'pays' => array('ID' => $this->Model_pays->get_one($row->IDPays)->result()[0]->ID, 'pays' => $this->Model_pays->get_one($row->IDPays)->result()[0]->nom),
                    'ville' => array('ID' => $this->Model_ville->get_one($row->IDVille)->result()[0]->ID, 'ville' => $this->Model_ville->get_one($row->IDVille)->result()[0]->nom),
                    'CV' => $row->CV,
                    'validation' => intval($row->validated),
                    'lettre_motivation' => $row->lettre_motivation);
            }

            echo json_encode($result);
        }
    }

    public function get()
    {
        $id = $this->input->get('id');
        $data = $this->Model_tuteur->get_info($id);
        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result = array(
                    'id' => $row->ID,
                    'nom' => $row->nom,
                    'prenom' => $row->prenom,
                    'adresse' => $row->adresse,
                    'description' => $row->description,
                    'email' => $row->email,
                    'password' => $row->password,
                    'date_naissance' => $row->date_naissance,
                    'tel' => $row->tel,
                    'validated' => intval($row->validated),
                    'pays' => $row->pays,
                    'ville' => $row->ville,
                    'cv' => $row->CV,
                    'cin' => $row->CIN,
                    'lettre_motivation' => $row->lettre_motivation,
                );
            }

            echo json_encode($result);
        }
    }

    public function getTuteurMatiere()
    {
        $id = $this->input->get('id');
        $data = $this->Model_tuteur->get_matiere($id);

        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result[] = array('matiere' => $row->matiere, 'niveau' => $row->niveau);
            }

            echo json_encode($result);
        } else {
            echo json_encode(array());
        }
    }

    public function insert()
    {
        $nom = $this->input->post('nom');
        $prenom = $this->input->post('prenom');
        $email = $this->input->post('email');
        $tel = $this->input->post('tel');
        $adresse = $this->input->post('adresse');
        $pays = "";
        $ville = $this->input->post('ville');
        $quartier = $this->input->post('quartier');
        $password = $this->input->post('password');
        $date_naissance = $this->input->post('date_naissance');
        $description = $this->input->post('description');

        $data = array(
            'nom' => $nom,
            'prenom' => $prenom,
            'email' => $email,
            'tel' => $tel,
            'adresse' => $adresse,
            'photo' => '',
            'description' => $description,
            'validated' => 0,
            'cv' => '',
            'lettre_motivation' => '',
            'cin' => '',
            'IDPays' => "TCHAD",
            'IDVille' => $ville,
            'IDQuartier' => $this->Model_quartier->get_id($quartier)->result()[0]->ID,
            'password' => md5($password),
            'date_naissance' => $date_naissance,
        );

        $result = $this->Model_tuteur->insert($data);
        $insert_id = $this->db->insert_id();

        echo json_encode(array('result' => $result, 'id' => $insert_id));
    }

    public function delete()
    {
        $id = $this->input->get('id');
        $this->Model_tuteur->delete($id);
        $check = $this->Model_tuteur->get_one($id);
        if ($check->num_rows() < 1) {
            echo json_encode(array('result' => 'success'));
        } else {
            echo json_encode(array('result' => 'error'));
        }
    }

    public function sendEmail2()
    {

    }

    public function sendEmail()
    {
        $config['protocol'] = 'smtp';
        $config['smtp_host']='ssl://smtp.gmail.com';
        $config['smtp_port']=465;
        $config['smtp_user'] = "kazekageoftheball@gmail.com";
        $config['smtp_pass']="tc2010n6st";
        $config['mail_type']="html";
        $config['charset']="iso-8859-1";
        $config['wordwrap']=TRUE;
    
        $this->email->initialize($config);
        $this->email->from('kazekageoftheball@gmail.com', 'Your Name');
        $this->email->to('aili.fida.ac@gmail.com');
        $this->email->subject('Email Test');
        $this->email->message('Testing the email class.');

        $this->email->send();
        echo $this->email->print_debugger();
    }

    public function accept_tuteur()
    {
        $id = $this->input->post('id');
        $data = array(
            'validated' => 1,
        );

        $this->Model_tuteur->update($id, $data);

        echo json_encode(array('result' => true, 'id' => $id, 'f' => $this->input->post('id')));
    }

    public function uploadFile()
    {
        $file_element_name = 'file';
        $type = $this->input->post('type');
        $id = $this->input->post('id');
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

                if ($type === 'cv') {
                    $data = array(
                        'cv' => $filename,
                    );
                } elseif ($type === 'cin') {
                    $data = array(
                        'cin' => $filename,
                    );
                } else {
                    $data = array(
                        'lettre_motivation' => $filename,
                    );
                }

                $this->Model_tuteur->update($id, $data);
            }
        }

        echo json_encode(array('message' => $msg, 'filename' => $filename, 'filetype' => $fileType, 'type' => $type));
    }

    public function update()
    {
        $id = $this->input->post('id');
        $nom = $this->input->post('nom');

        $data = array(
            'nom' => $nom,
        );

        $this->Model_tuteur->update($id, $data);
        echo json_encode(array('result' => 'success'));
    }

    public function insertProfilePic()
    {
        $id = $this->input->post('id');
        $status = "";
        $msg = "";
        $file_id = "";
        $filename = "";
        $file_element_name = 'file';

        if ($status !== "error") {
            $config['upload_path'] = './files';
            $config['allowed_types'] = 'png|jpeg|jpg|avi|mp4|mpeg';
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

        $this->Model_tuteur->update($id, array('photo' => $filename));

        echo json_encode(array("filename" => $filename, 'status' => $status, 'message' => $msg, 'file_id' => $file_id));
    }

    public function insertCV()
    {
        $id = $this->input->post('id');
        $status = "";
        $msg = "";
        $file_id = "";
        $filename = "";
        $file_element_name = 'file';

        if ($status !== "error") {
            $config['upload_path'] = './files';
            $config['allowed_types'] = 'pdf';
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

        $this->Model_tuteur->update($id, array('CV' => $filename));

        echo json_encode(array("filename" => $filename, 'status' => $status, 'message' => $msg, 'file_id' => $file_id));
    }

    public function insertMotivationLetter()
    {
        $id = $this->input->post('id');
        $status = "";
        $msg = "";
        $file_id = "";
        $filename = "";
        $file_element_name = 'file';

        if ($status !== "error") {
            $config['upload_path'] = './files';
            $config['allowed_types'] = 'pdf';
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

        $this->Model_tuteur->update($id, array('lettre_motivation' => $filename));

        echo json_encode(array("filename" => $filename, 'status' => $status, 'message' => $msg, 'file_id' => $file_id));
    }

    public function login()
    {
        $username = $this->input->post('email');
        $password = md5($this->input->post('password'));
        $data = $this->Model_tuteur->login($username, $password);

        if ($data->num_rows() > 0) {
            echo json_encode(array(
                'logged' => true,
                'tuteur_id' => intval($data->result()[0]->ID),
                'message' => "Bienvenue, " . $data->result()[0]->nom,
                'authorized' => intval($data->result()[0]->validated)));
        } else {
            echo json_encode(array('logged' => false, 'message' => "Le nom d'utilisateur et le mot de passe ne correspondent pas."));
        }
    }

    public function signup()
    {
        $username = $this->input->post('username');
        $password = md5($this->input->post('password'));

        echo json_encode(array("pass" => $password));
    }

    public function searchTuteur()
    {
        $matiere = $this->input->get('matiere');
        $niveau = $this->input->get('niveau');
        $localisation = $this->input->get('localisation');
        $date_cours = $this->input->get('date_cours');
        $result = [];

        $data = $this->Model_tuteur->searchTuteur($matiere, $niveau, $date_cours, $localisation);

        if ($data->num_rows() > 0) {
            foreach ($data->result() as $row) {
                $result[] = array(
                    'id' => $row->ID_tuteur,
                    'nom' => $row->nom,
                    'prenom' => $row->prenom,
                    'adresse' => $row->adresse,
                    'description' => $row->description,
                    'email' => $row->email,
                    'date_naissance' => $row->date_naissance,
                    'tel' => $row->tel,
                    'pays' => $row->pays,
                    'ville' => $row->ville,
                    'CV' => $row->CV,
                );
            }
        }

        echo json_encode($result);
    }
}
