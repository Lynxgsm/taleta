<?php defined('BASEPATH') or exit('No direct script access allowed');

class Model_niveau extends CI_Model
{

    public function __construct()
    {
        parent::__construct();
        $this->table = "niveau";
    }

    public function get_all()
    {
        return $this->db->order_by('ID', 'ASC')->get($this->table);
    }

    public function get_niveau_by_mention($id)
    {
        return $this->db->query('SELECT * FROM ');
    }

    public function get_all_villes()
    {
        return $this->db->query("SELECT * FROM ville");
    }

    public function insert($nom, $prenom, $mail, $phone)
    {
        $data = array(
            "Nom" => $nom,
            "Prenom" => $prenom,
            "Email" => $mail,
            "Phone" => $phone,
        );

        return $this->db->insert($this->table, $data);
    }

    public function getDetails($id)
    {
        return $this->db->query('SELECT * FROM circuit WHERE ID=' . $id);
    }

    public function getItineraire($id)
    {
        return $this->db->query('SELECT o.Duration, o.Description, v.Ville, v.ImageUrl, v.Description FROM circuit c, circuitorder o, ville v WHERE o.IDCircuit=c.ID AND o.IDVille=v.ID AND c.ID=' . $id . ' ORDER BY o.CircuitOrder');
    }

    public function questionStatsByAdvertiser($idAdvertiser, $dateDebut, $dateFin)
    {
        return $this->db->query("SELECT q.question, q.idQuestion, u.dateAnswer, q.idAdvertiser, COUNT(q.question) AS compte FROM questions q, userreplies u WHERE u.idQuestion=q.idQuestion AND q.idAdvertiser=" . $idAdvertiser . " AND u.dateAnswer BETWEEN '" . $dateDebut . "' AND '" . $dateFin . "' GROUP BY q.idQuestion");
    }

    public function questionStatsDefaultByAdvertiser($idAdvertiser)
    {
        return $this->db->query("SELECT q.question, q.idQuestion, u.dateAnswer, q.idAdvertiser, COUNT(q.question) AS compte FROM questions q, userreplies u WHERE u.idQuestion=q.idQuestion AND q.idAdvertiser=" . $idAdvertiser . " AND u.dateAnswer GROUP BY q.idQuestion");
    }

    public function questionStatsByIDByAdvertiser($idQuestion, $dateDebut, $dateFin)
    {
        return $this->db->query("SELECT q.question, q.idQuestion, u.dateAnswer, q.idAdvertiser, COUNT(q.question) AS compte FROM questions q, userreplies u WHERE u.idQuestion=q.idQuestion AND q.idAdvertiser=" . $idAdvertiser . " AND q.idQuestion=" . $idQuestion . " AND u.dateAnswer BETWEEN '" . $dateDebut . "' AND '" . $dateFin . "'");
    }
}
