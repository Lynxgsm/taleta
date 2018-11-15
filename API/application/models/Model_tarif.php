<?php defined('BASEPATH') or exit('No direct script access allowed');

class Model_tarif extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
        $this->table = "tarif";
    }

    public function get_all()
    {
        return $this->db->query('SELECT t.ID, t.max, t.min, m.ID AS IDMatiere, m.matiere, n.ID AS IDNiveau, n.niveau FROM matiere m, niveau n, tarif t WHERE t.IDNiveau = n.ID AND t.IDMatiere = m.ID');
    }

    public function insert($niveau, $matiere, $min, $max)
    {
        $data = array(
            "IDNiveau" => $niveau,
            "IDMatiere" => $matiere,
            "Min" => $min,
            "Max" => $max,
        );

        return $this->db->insert($this->table, $data);
    }

    public function check_min_max($niveau, $matiere)
    {
        return $this->db->query('SELECT min, max FROM tarif WHERE IDNiveau="' . $niveau . '" AND IDMatiere="' . $matiere . '"');
    }

    public function get($id_tuteur, $id_matiere, $id_niveau)
    {
        return $this->db->query('SELECT * FROM pricing WHERE IDTuteur='.$id_tuteur.' AND IDMatiere="'.$id_matiere.'" AND IDNiveau="'.$id_niveau.'"');
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
