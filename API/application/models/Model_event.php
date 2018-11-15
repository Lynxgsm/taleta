<?php defined('BASEPATH') or exit('No direct script access allowed');

class Model_event extends CI_Model
{

    public function __construct()
    {
        parent::__construct();
        $this->table = "evenement";
    }

    public function get_all()
    {
        return $this->db->get($this->table);
    }

    public function get($id)
    {
        return $this->db->where("IDTuteur", $id)->get($this->table);
    }

    public function insert($data)
    {
        return $this->db->insert($this->table, $data);
    }

    public function delete($id)
    {
        return $this->db->where("id", $id)->delete($this->table);
    }

    public function update($data)
    {
        return $this->db->update($data, $this->table)->where("id", $id);
    }
}
