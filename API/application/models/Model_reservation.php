<?php defined('BASEPATH') or exit('No direct script access allowed');

class Model_reservation extends CI_Model
{

    public function __construct()
    {
        parent::__construct();
        $this->table = "reservation";
    }

    public function get_all()
    {
        return $this->db->get($this->table);
    }

    public function get_one($id){
        return $this->db->query("SELECT * FROM reservation WHERE ID=" . $id);
    }

    public function get_tuteur($id)
    {
        return $this->db->query("SELECT * FROM reservation WHERE IDTuteur=" . $id);
    }

    public function get_etudiant($id)
    {
        return $this->db->query("SELECT * FROM reservation WHERE IDEtudiant='" . $id . "'");
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
        return $this->db->update($this->table, $data)->where("id", $id);
    }

    public function accept($id)
    {
        $data = array(
            'accord'=>1,
            'en_attente'=>0,
            'tuteur_attente'=>1
        );

        return $this->db->where('ID', $id)->update($this->table, $data);
    }

    public function payement_done($id)
    {
        $data = array(
            'en_attente'=>0,
            'tuteur_attente'=>0
        );

        return $this->db->where('ID', $id)->update($this->table, $data);
    }
}
