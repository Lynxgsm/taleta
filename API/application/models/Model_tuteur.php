<?php defined('BASEPATH') or exit('No direct script access allowed');

class Model_tuteur extends CI_Model
{

    public function __construct()
    {
        parent::__construct();
        $this->table = "tuteur";
    }

    public function get_all()
    {
        return $this->db->get($this->table);
    }

    public function get_one($id)
    {
        return $this->db->where("id", $id)->get($this->table);
    }

    public function get_matiere($id)
    {
        return $this->db->query('SELECT m.matiere, n.niveau FROM matiere m, niveau n, tuteur t, pricing p WHERE p.IDTuteur=t.ID AND p.IDMatiere = m.ID AND p.IDNiveau = n.ID AND t.ID=' . $id);
    }

    public function get_info($id)
    {
        return $this->db->query("SELECT t.ID AS ID, t.nom, t.validated, t.prenom, t.adresse, t.email, t.password, t.date_naissance, t.tel, t.CV, t.lettre_motivation, t.CIN, v.nom AS ville, p.nom AS pays, t.CV, t.lettre_motivation, t.description FROM tuteur t, pays p, ville v WHERE t.IDPays = p.ID AND t.IDVille = v.ID AND t.ID=" . $id);
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

    public function searchTuteur($matiere, $niveau, $date, $ville)
    {
        return $this->db->query("SELECT DISTINCT t.ID AS ID_tuteur, t.nom, t.prenom, t.adresse, t.description, t.email, t.date_naissance, t.tel, p.nom AS pays, l.nom AS ville, t.CV FROM matiere m, tuteur t, notation n, niveau v, pays p, ville l, evenement e, pricing r WHERE t.IDPays = p.ID AND t.IDVille = l.ID AND n.IDEvenement = e.ID AND e.IDTuteur = t.ID AND r.IDTuteur = t.ID AND r.IDNiveau = v.ID AND r.IDMatiere = m.ID AND m.ID = '" . $matiere . "' AND v.ID = '" . $niveau . "' AND '" . $date . "' NOT BETWEEN e.startDate AND e.endDate AND l.nom = '" . $ville . "'");
    }

    public function login($username, $password)
    {
        $data = array(
            "email" => $username,
            "password" => $password,
        );

        return $this->db->query('SELECT * FROM tuteur WHERE email="' . $username . '" AND password="' . $password . '"');
    }
}
