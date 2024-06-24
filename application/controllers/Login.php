<?php
defined('BASEPATH') or exit('No direct script access allowed');

Class Login extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        $this->load->model('main/login_model', 'login');
    }

    function index()
    {
        $data['title'] = 'Evo SpaceGrid || Login';

        $data['content'] = 'main/login_content';
        $this->load->view('main/layout/design_data', $data, FALSE);
    }
}
?>