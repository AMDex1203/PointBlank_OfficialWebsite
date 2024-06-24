<?php
defined('BASEPATH') or exit('No direct script access allowed');

Class Home extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        $this->load->model('main/home_model', 'home');
    }

    function index()
    {
        $data['title'] = 'Evo SpaceGrid || Home';

        $data['content'] = 'main/home_content';
        $this->load->view('main/layout/wrapper', $data, FALSE);
    }
}
?>