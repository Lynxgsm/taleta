<?php defined('BASEPATH') or exit('No direct script access allowed');

class Model_capacite extends CI_Model
{

    public function __construct()
    {
        parent::__construct();
        $this->table = "pricing";
    }

    public function get_all()
    {
        return $this->db->get($this->table);
    }

    public function get_one($id)
    {
        return $this->db->query('SELECT c.ID, c.prix, n.ID AS IDNiveau, n.niveau, m.ID AS IDMatiere, m.matiere FROM pricing c, niveau n, matiere m, tuteur t WHERE c.IDNiveau = n.ID AND c.IDMatiere = m.ID AND c.IDTuteur = t.ID AND t.ID=' . $id);
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
