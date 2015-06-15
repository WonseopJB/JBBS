<?php
class Best extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
			$this->load->helper('cookie');
			$this->load->library('session');
	}

	public function index()
	{

		$data['uid'] = $this->session->userdata('uid');
		$data['visit'] = $this->input->cookie('visit');
		$this->show_best($data);
	}

	/**********************************************/
	// Method Name : show_best
	// Description : Best메인화면
	// Last Date : 2015.03.10
	/**********************************************/

	function show_best($data)
	{
		$data['returnURL']= 'best';
		$data['header']= $this->load->view('header_view', $data, true); 
		$data['topMenu']= $this->load->view('/best/best_top_menu_view', $data, true);
		$this->load->view('best/best_main_view', $data);
	}
}
?>