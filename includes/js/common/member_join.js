		function usrInsert(frm) {
			var nform = document.frm;
			var sno = '';
			var par_sno = '';
			if ((null_check(document.getElementById('userid1')) == false)||(null_check(document.getElementById('userid2')) == false)){
				showMessageIDchk('이메일 아이디를 입력하세요.');
				return;
			}
			if (document.getElementById('actCheckIDYN').value == "0"){
				showMessageIDchk('사용하실 수 없는 아이디입니다.');
				return;
			}	
			
			if (document.getElementById('usertype_B').checked){
				//14세 이상 일경우
				if (null_check(document.getElementById('sno')) == false){
					showMessageNM1chk('실명확인하세요.');
					return;
				}
				if (null_check(document.getElementById('usernm')) == false){
					showMessageNM1chk('실명확인하세요.');
					return;
				}
				if (null_check(document.getElementById('birthdate')) == false){
					showMessageNM1chk('실명확인하세요.');
					return;
				}
			}else if (document.getElementById('usertype_A').checked){
				//어린이 일경우 
				if (null_check(document.getElementById('sno')) == false){
					showMessageNM1chk('실명확인하세요.');
					return;
				}
				if (null_check(document.getElementById('usernm')) == false){
					showMessageNM1chk('실명확인하세요.');
					return;
				}
				if (null_check(document.getElementById('birthdate')) == false){
					showMessageNM1chk('실명확인하세요.');
					return;
				}
				if (null_check(document.getElementById('parentsno')) == false){
					showMessageNM2chk('부모님 실명확인하세요.');
					return;
				}
				if (null_check(document.getElementById('parentnm')) == false){
					showMessageNM2chk('부모님 실명확인하세요.');
					return;
				}
				if (null_check(document.getElementById('parentbirthdate')) == false){
					showMessageNM2chk('부모님 실명확인하세요.');
					return;
				}
				var b1 = document.getElementById('birthdate').value.substr(0,4) ;
				var b2 = document.getElementById('parentbirthdate').value.substr(0,4);
				if ((b1 == b2) || (b2 - b1 < 15))
				{
					showMessageNM2chk('정확한 부모님 실명이 필요합니다.');
					return;
				}
				
			}
			if (null_check(document.getElementById('pwd1')) == false){
				showMessagePWDchk('비밀번호를 입력하세요.');
				document.getElementById('pwd1').focus();
				return;
			}
			if (null_check(document.getElementById('pwd2')) == false){
				showMessagePWDchk('확인 비밀번호를 입력하세요.');
				document.getElementById('pwd2').focus();
				return;
			}
			
			if (document.getElementById('pwd1').value != document.getElementById('pwd2').value){
				showMessagePWDchk('비밀번호가 일치하지 않습니다.');
				return;
			}
			
			if (chkPassword(document.getElementById('userid1'),document.getElementById('pwd1'),document.getElementById('pwd2')) == false){
				return;
			}
			showMessagePWDchk('');   
			
			if (null_check(document.getElementById('mobile2')) == false){
				showMessageMobilechk('휴대전화 번호를 입력하세요.');
				document.getElementById('mobile2').focus();
				return;
			}
			if (null_check(document.getElementById('mobile3')) == false){
				showMessageMobilechk('휴대전화 번호를 입력하세요.');
				document.getElementById('mobile3').focus();
				return;
			}
			showMessageMobilechk('');
			
			if (!document.getElementById('policy1').checked){
				showMessagePolicy1chk('이용약관에 동의가 필요합니다.');
				return;
			}
			showMessagePolicy1chk('');
			
			if (!document.getElementById('policy2').checked){		
				showMessagePolicy2chk('개인정보 수집 및 이용에 동의가 필요합니다.');
				return;				
			}
			showMessagePolicy2chk('');
			
			document.sfrm.target='hiddenprocess';
			document.sfrm.action='/member/action/register';
			document.sfrm.submit();

		}
		
		function selDivUserType(typeval){
			//실명확인 유형에 따른 레이어 컨트롤
			if (typeval == 'A'){ // 어린이
				document.getElementById('layer_usrtypeA').style.display = "block";
			}else{
				document.getElementById('layer_usrtypeA').style.display = "none";
			}
		}

		function selDivRealType1(typeval){
			// 실명인지 아이핀 인증인지...
			if (typeval == 'N'){ // 주민번호 
				document.getElementById('layer_realname1').style.display = "block";
				document.getElementById('layer_ipin1').style.display = "none";
				//showMessageNM1chk('');
			}else if (typeval == 'I'){ // 아이핀 
				document.getElementById('layer_realname1').style.display = "none";
				document.getElementById('layer_ipin1').style.display = "block";
				//showMessageNM1chk('');;
			}
		}
		
		
		function selDivRealType2(typeval){
			// 실명인지 아이핀 인증인지...
			if (typeval == 'N'){ // 주민번호 
				document.getElementById('layer_realname2').style.display = "block";
				document.getElementById('layer_ipin2').style.display = "none";
				//showMessageNM2chk('');
			}else if (typeval == 'I'){ // 아이핀 
				document.getElementById('layer_realname2').style.display = "none";
				document.getElementById('layer_ipin2').style.display = "block";
				//showMessageNM2chk('');;
			}
		}
		
		function chkMemberID(){
			//회원 아이디 체크
			showMessageIDchk('');
			if (null_check(document.getElementById('userid1'))== false){
				// 아이가 없는경우..
				showMessageIDchk('아이디를 입력해주세요.');
				return;
			}else{
				if (null_check(document.getElementById('userid2'))== false){
					// 아이가 없는경우..
					showMessageIDchk('이메일 아이디를 입력하세요.');
					return;
				}else{
					var email = '';					
					var regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
					email =  document.getElementById('userid1').value + '@'+ document.getElementById('userid2').value;
					if (!regExp.test(email)){
						showMessageIDchk('이메일을 정확히 입력하세요.');
						return;
					}else{
						document.sfrm.target='hiddenprocess';
						document.sfrm.action='/member/action/checkid';
						document.sfrm.submit();
					}
				}
			} 
		}
		
		function checkEMail(val){
			//
		}
		
		function setMailAddress(val){
			if (val == 'usr'){
				document.getElementById('userid2').value = "";
				document.getElementById('userid2').focus();
				document.getElementById('userid2').readOnly = false;
			}else{
				document.getElementById('userid2').value = val;
				document.getElementById('userid2').readOnly = true;
			}
		}
		
		function showMessageIDchk(msg){
			//ID 체크 메세지 보여주기
			if (msg != ""){
				document.getElementById('layer_result_msg1').style.display = "block";
				document.getElementById('result_label1').innerHTML = msg;
			}else{
				document.getElementById('layer_result_msg1').style.display = "none";
				document.getElementById('result_label1').innerHTML = "";
			}
		}
		

		function showMessageNM1chk(msg){
			//실명인증 체크 메세지 보여주기
			if (msg != ""){
				document.getElementById('layer_result_msg2').style.display = "block";
				document.getElementById('result_label2').innerHTML = msg;
				
			}else{
				document.getElementById('layer_result_msg2').style.display = "none";
				document.getElementById('result_label2').innerHTML = "";
			}
		}

		function showMessageNM2chk(msg){
			//실명인증 체크 메세지 보여주기
			if (msg != ""){
				document.getElementById('layer_result_msg3').style.display = "block";
				document.getElementById('result_label3').innerHTML = msg;
				
			}else{
				document.getElementById('layer_result_msg3').style.display = "none";
				document.getElementById('result_label3').innerHTML = "";
			}
		}		
		
		function showMessagePWDchk(msg){
			//ID 체크 메세지 보여주기
			if (msg != ""){
				document.getElementById('layer_result_msg4').style.display = "block";
				document.getElementById('result_label4').innerHTML = "<span style='color:#ff004f;'>"+msg+"</span>";
				
			}else{
				document.getElementById('layer_result_msg4').style.display = "none";
				document.getElementById('result_label4').innerHTML = "<span style='color:#666666;'>* 영문,숫자를 혼용하여 4~12자리로 입력해 주세요.</span>";
			}
		}
		
		function showMessagePolicy1chk(msg){
			//약관동의 체크 메세지 보여주기
			if (msg != ""){
				document.getElementById('layer_result_msg5').style.display = "block";
				document.getElementById('result_label5').innerHTML = msg;
				
			}else{
				document.getElementById('layer_result_msg5').style.display = "none";
				document.getElementById('result_label5').innerHTML = "";
			}
		}
		
		function showMessagePolicy2chk(msg){
			//약관동의 체크 메세지 보여주기
			if (msg != ""){
				document.getElementById('layer_result_msg6').style.display = "block";
				document.getElementById('result_label6').innerHTML = msg;
				
			}else{
				document.getElementById('layer_result_msg6').style.display = "none";
				document.getElementById('result_label6').innerHTML = "";
			}
		}
		
		function showMessageMobilechk(msg){
			//모바일 체크 보여주기
			if (msg != ""){
				document.getElementById('layer_result_msg7').style.display = "block";
				document.getElementById('result_label7').innerHTML = msg;
				
			}else{
				document.getElementById('layer_result_msg7').style.display = "none";
				document.getElementById('result_label7').innerHTML = "";
			}
		}
			
		function chkPassword(ObjUserID, ObjUserPassWord, objUserPassWordRe)
		{
		 
	    if(ObjUserPassWord.value != objUserPassWordRe.value)
	    {
	        showMessagePWDchk("입력하신 비밀번호와 비밀번호확인이 일치하지 않습니다");
	        return false;
	    }
	 
	    if((ObjUserPassWord.value.length<4)||(ObjUserPassWord.value.length>12))
	    {
	        showMessagePWDchk("비밀번호는 문자, 숫자, 특수문자의 조합으로 6~16자리로 입력해주세요.");
	        return false;
	    }
	 
	    if(!ObjUserPassWord.value.match(/([a-zA-Z0-9].*)|(.*[a-zA-Z0-9])/))
	    {
	        showMessagePWDchk("비밀번호는 문자, 숫자, 특수문자의 조합으로 4~12자리로 입력해주세요.2");
	        return false;
	    }
	    
	    if(ObjUserID.value.indexOf(ObjUserPassWord) > -1)
	    {
	        showMessagePWDchk("비밀번호에 아이디를 사용할 수 없습니다.");
	        return false;
	    }
	    
	    var SamePass_0 = 0; //동일문자 카운트
	    var SamePass_1 = 0; //연속성(+) 카운드
	    var SamePass_2 = 0; //연속성(-) 카운드
	 
	
	    
	    var chr_pass_0;
	    var chr_pass_1;
	 
	    var chr_pass_2;
	
	    
	    for(var i=0; i < ObjUserPassWord.value.length; i++)
	    {
	        chr_pass_0 = ObjUserPassWord.value.charAt(i);
	        chr_pass_1 = ObjUserPassWord.value.charAt(i+1);
	        
	        //동일문자 카운트
	        if(chr_pass_0 == chr_pass_1)
	        {
	            SamePass_0 = SamePass_0 + 1
	        }
	        
	       
	        chr_pass_2 = ObjUserPassWord.value.charAt(i+2);
	        //연속성(+) 카운드
	 
	        if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == 1 && chr_pass_1.charCodeAt(0) - chr_pass_2.charCodeAt(0) == 1)
	        {
	            SamePass_1 = SamePass_1 + 1
	        }
	        
	        //연속성(-) 카운드
	        if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == -1 && chr_pass_1.charCodeAt(0) - chr_pass_2.charCodeAt(0) == -1)
	        {
	            SamePass_2 = SamePass_2 + 1
	        }
	    }
	    if(SamePass_0 > 1)
	    {
	        showMessagePWDchk("동일문자를 3번 이상 사용할 수 없습니다.");
	        return false;
	    }
	   
	    if(SamePass_1 > 1 || SamePass_2 > 1 )
	    {
	        showMessagePWDchk("연속된 문자열(123 또는 321, abc, cba 등)을\n 3자 이상 사용 할 수 없습니다.");
	        return false;
	    }
	 		return true;
		}
	
	window.name ="Parent_window";

 function fnIpin1Popup(){
		window.open('', 'popupIPIN1', 'width=450, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes,location=no, scrollbar=no');
		document.vnoform3.target = "popupIPIN1";
		document.vnoform3.action = "https://cert.vno.co.kr/ipin.cb";
		document.vnoform3.submit();
 }
	
 function fnIpin2Popup(){
		window.open('', 'popupIPIN2', 'width=450, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes,location=no, scrollbar=no');
		document.vnoform4.target = "popupIPIN2";
		document.vnoform4.action = "https://cert.vno.co.kr/ipin.cb";
		document.vnoform4.submit();
 }
	
	
	function fnNMChk1Popup(){
		window.open('', 'popupNMCHK1', 'width=450, height=350, toolbar=no,directories=no,scrollbars=no,resizable=no,status=no,menubar=no,top=0,left=0');
		document.vnoform1.action = "https://cert.namecheck.co.kr/NiceID/certnc_input.asp";
		document.vnoform1.target = "popupNMCHK1";
		document.vnoform1.submit();
	}

	
	function fnNMChk2Popup(){
		window.open('', 'popupNMCHK2', 'width=450, height=350, toolbar=no,directories=no,scrollbars=no,resizable=no,status=no,menubar=no,top=0,left=0');
		document.vnoform2.action = "https://cert.namecheck.co.kr/NiceID/certnc_input.asp";
		document.vnoform2.target = "popupNMCHK2";
		document.vnoform2.submit();
	}