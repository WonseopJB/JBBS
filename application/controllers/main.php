<?php
class Main extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
			$this->load->helper('cookie');
		//	$this->load->driver('session');  autoloaded by autolaoad.php
	}

	public function index()
	{

		$data['uid']= $this->session->userdata('id');
		$data['visit']= $this->input->cookie('visit');
		$this->show_main($data);
	}

	/**********************************************/
	// Method Name : show_main
	// Description : 메인화면
	// Last Date : 2015.03.11
	/**********************************************/

	function show_main($data)
	{
//		var_dump(session_id());

		$data['returnURL']= 'main';
		$data['header']= $this->load->view('header_view', $data, true); 
		$data['intro']= $this->load->view('main/intro_view', $data, true);
		$data['topMenu']= $this->load->view('top_menu_view', $data, true);

		$this->load->view('main/main_view', $data); 
		
	}

}
?>