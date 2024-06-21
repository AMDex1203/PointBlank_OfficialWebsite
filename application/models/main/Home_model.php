<?php
defined('BASEPATH') or exit('No direct script access allowed');

Class Home_model extends CI_Model
{
    function __construct()
    {
        parent::__construct();
        $this->load->database();
    }
}
?>