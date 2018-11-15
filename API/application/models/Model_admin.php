<?php defined('BASEPATH') or exit('No direct script access allowed');

class Model_admin extends CI_Model
{

    public function __construct()
    {
        parent::__construct();
        $this->table = "admin";
    }

    public function get_all()
    {
        return $this->db->get($this->table);
    }

    public function get($id)
    {
        return $this->db->where('ID', $id)->get($this->table);
    }

    public function insert($data)
    {
        return $this->db->insert($this->table, $data);
    }

    public function delete($id)
    {
        return $this->db->where("id", $id)->delete($this->table);
    }

    public function update($id, $data)
    {
        return $this->db->where('id', $id)->update($this->table, $data);
    }

    public function login($username, $password)
    {
        $data = array(
            "username" => $username,
            "password" => $password,
        );

        return $this->db->query('SELECT * FROM admin WHERE username="' . $username . '" AND password="' . $password . '"');
    }
}
