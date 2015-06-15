<?php
class Login extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		//	$this->load->driver('session');  autoloaded by autolaoad.php
			$this->load->helper('cookie');
			$this->load->model('member_model');
		
	}

	public function index()
	{

		$this->login();
	}

	/**********************************************/
	// Method Name : show_login
	// Description : Log-in controller
	// Last Date   : 2015.03.12
	/**********************************************/

	function login()
	{

		$returnURL = $this->input->get('returnURL');
		$inputted_id = $this->input->post('inputEmail1');
		$inputted_password = $this->input->post('inputPassword1');
		$testuseraccount = $this->config->item('testaccount');
		
		$loginCheckResult = $this->member_model->login_check(array('inputted_id'=>$inputted_id, 'inputted_password'=>$inputted_password));

		switch($loginCheckResult)
		{
			case 1:
				$this->session->set_userdata('is_login', true); //세션생성
				echo "<SCRIPT LANGUAGE='javascript'>";  	
				echo "parent.location.href='".$returnURL."'";
				echo "</SCRIPT>";
				break;
			case 2:
				echo "<SCRIPT LANGUAGE='javascript'>";  	
				echo "parent.showMessage('존재하지 않는 아이디입니다.');";
				echo "</SCRIPT>";
				break;
			case 3:
				echo "<SCRIPT LANGUAGE='javascript'>";  	
				echo "parent.showMessage('비밀번호가 일치하지 않습니다.');";
				echo "</SCRIPT>";
				break;
		}		
	}
}
?>