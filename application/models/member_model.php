<?php
class Member_model extends CI_Model
{
	function __construct()
	{
		parent::__construct();
	}


	/**
	 * 로그인 체크
	 * -----------------
	 * 1 : 성공
	 * 2 : 아이디 없음
	 * 3 : 비밀번호 불일치
	 * -----------------
	 */

	public function login_check($inputted_account)
	{ 

		$arr = array('email' => $inputted_account['inputted_id']);
		$query = $this->db->get_where('userinfo',$arr);

		if($query->num_rows() == '0') {
			$result = 2; //아이디가 존재 하지 않음 
		}
		else if ($query->num_rows() == '1') {
			$confirmed_account = $query->row();
			if(($confirmed_account->email == $inputted_account['inputted_id']) && (password_verify($inputted_account['inputted_password'], $confirmed_account->password))){
				$result = 1; // 확인성공 
			}
			else{
				$result = 3; // 비밀번호 불일치 
			}
		}
		else{
		}				
		return $result;
	}
	
}

?>