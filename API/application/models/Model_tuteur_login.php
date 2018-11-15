<?php defined('BASEPATH') or exit('No direct script access allowed');

class Model_tuteur_login extends CI_Model
{

    public function __construct()
    {
        parent::__construct();
        $this->table = "tuteur_login";
    }

    public function login($username, $password)
    {
        $data = array(
            "email" => $username,
            "password" => $password,
        );

        return $this->db->query('SELECT * FROM tuteur_login WHERE username="' . $username . '" AND password="' . $password . '"');
    }
}
