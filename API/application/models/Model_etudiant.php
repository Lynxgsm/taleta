<?php defined('BASEPATH') or exit('No direct script access allowed');

class Model_etudiant extends CI_Model
{

    public function __construct()
    {
        parent::__construct();
        $this->table = "etudiant";
    }

    public function get_all()
    {
        return $this->db->query("SELECT t.ID AS ID, t.nom, t.prenom, t.adresse, t.email, t.password, t.date_naissance, t.tel, t.photo, v.nom AS ville, p.nom AS pays, n.niveau AS niveau FROM etudiant t, pays p, ville v, niveau n WHERE t.IDPays = p.ID AND t.IDVille = v.ID AND t.IDNiveau = n.ID");
    }

    public function get_one($id)
    {
        return $this->db->where("id", $id)->get($this->table);
    }

    public function get_info($id)
    {
        return $this->db->query("SELECT t.ID AS ID, t.nom, t.prenom, t.adresse, t.email, t.password, t.date_naissance, t.tel, t.photo, v.nom AS ville, p.nom AS pays, n.niveau AS niveau FROM etudiant t, pays p, ville v, niveau n WHERE t.IDPays = p.ID AND t.IDVille = v.ID AND t.IDNiveau = n.ID AND t.ID='" . $id . "'");
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

    public function login($username, $password)
    {
        return $this->db->query('SELECT * FROM etudiant WHERE email="' . $username . '" AND password="' . $password . '"');
    }

    public function check_mail_exists($mail)
    {
        return $this->db->query('SELECT email FROM etudiant WHERE email="' . $mail . '"');
    }
}
