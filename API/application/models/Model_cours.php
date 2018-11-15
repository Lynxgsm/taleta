<?php defined('BASEPATH') or exit('No direct script access allowed');

class Model_cours extends CI_Model
{

    public function __construct()
    {
        parent::__construct();
        $this->table = "cours";
    }

    public function get_all()
    {
        return $this->db->get($this->table);
    }

    public function get_one($id)
    {
        return $this->db->where("id", $id)->get($this->table);
    }

    public function insert($data)
    {
        return $this->db->insert($data, $this->table);
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
