<?php defined('BASEPATH') or exit('No direct script access allowed');

class Model_team extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
        $this->table = "team";
    }

    public function get_all()
    {
        return $this->db->get($this->table);
    }

    public function insert($data)
    {
        return $this->db->insert($this->table, $data);
    }

    public function get_one($id)
    {
        return $this->db->where('ID', $id)->get($this->table);
    }

    public function check_min_max($niveau, $matiere)
    {
        return $this->db->query('SELECT min, max FROM tarif WHERE IDNiveau="' . $niveau . '" AND IDMatiere="' . $matiere . '"');
    }

    public function get($id_tuteur, $id_matiere, $id_niveau)
    {
        return $this->db->query('SELECT * FROM pricing WHERE IDTuteur=' . $id_tuteur . ' AND IDMatiere="' . $id_matiere . '" AND IDNiveau="' . $id_niveau . '"');
    }

    public function delete($id)
    {
        return $this->db->where("ID", $id)->delete($this->table);
    }

    public function update($data)
    {
        return $this->db->update($data, $this->table)->where("id", $id);
    }
}
