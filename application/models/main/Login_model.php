<?php
defined('BASEPATH') or exit('No direct script access allowed');

Class Login_model extends CI_Model
{
    function __construct()
    {
        parent::__construct();
        $this->load->database();
    }
}
?>