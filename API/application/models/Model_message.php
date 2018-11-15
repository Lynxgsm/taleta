<?php defined('BASEPATH') or exit('No direct script access allowed');

class Model_message extends CI_Model
{

    public function __construct()
    {
        parent::__construct();
        $this->table = "message";
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
        return $this->db->where("ID", $id)->delete($this->table);
    }
}
