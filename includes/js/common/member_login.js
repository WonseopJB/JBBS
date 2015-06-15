	function showMessage(msg){
		if (msg != ""){
			document.getElementById('layer_result_msg').style.display = "block";
			document.getElementById('result_label').innerHTML = msg;
			return;
		}else{
			document.getElementById('layer_result_msg').style.display = "none";
			document.getElementById('result_label').innerHTML = "";
			return;
		}
	}
	
	
	function showResultID(msg){
		if (msg != ""){
			document.getElementById('layer_resultid').style.display = "block";
			document.getElementById('result_id').innerHTML = msg;
			return;
		}else{
			document.getElementById('layer_resultid').style.display = "none";
			document.getElementById('result_id').innerHTML = "";
			return;
		}
	}
	
	
	function doSearchID(frm){
		showMessage('');
    if(!frm.usernm2.value){
			showMessage('이름을 입력해주세요.');
      frm.usernm2.focus();
      return;
    }
    if(!frm.sno1.value){
			showMessage('주민등록번호(외국인 등록번호)를 입력해주세요.');
      frm.sno1.focus();
      return;
    }
    if(!frm.sno2.value){
			showMessage('주민등록번호(외국인 등록번호)를 입력해주세요.');
      frm.sno2.focus();
      return;
    }
		frm.action="/member/action/search/id";
		frm.target="hiddenprocess";
		frm.submit();
	}
	
	
	function doSearchPW(frm){
		showMessage('');
    if(!frm.usernm.value){
			showMessage('이름을 입력해주세요.');
      frm.usernm.focus();
      return;
    }
    if(!frm.user_id1.value){
			showMessage('아이디를 입력해주세요.');
      frm.user_id1.focus();
      return;
    }
    if(!frm.user_id2.value){
			showMessage('아이디를 입력해주세요.');
      frm.user_id2.focus();
      return;
    }
		frm.action="/member/action/search/pw";
		frm.target="hiddenprocess";
		frm.submit();
	}
	
	
	function doLogin(frm){
		showMessage('');
    if(!frm.user_id1.value){
			showMessage('아이디를 입력해주세요.');
      frm.user_id1.focus();
      return;
    }
    if(!frm.user_id2.value){
			showMessage('아이디를 입력해주세요.');
      frm.user_id2.focus();
      return;
    }
    if(!frm.user_pw.value){
			showMessage('비밀번호를 입력해주세요.');
      frm.user_pw.focus();
      return;
    }
		frm.action="/member/action/login";
		frm.target="hiddenprocess";
		frm.submit();
	}
	
			
	function chkSocialNo(){
		var temp1 = '';
		var temp2 = '';
		showMessage('');
		// 내국인 주민번호 or 외국인등록번호
		sNO = document.getElementById('sno1').value + document.getElementById('sno2').value;
		temp1 = document.getElementById('sno1').value;
		temp2 = document.getElementById('sno2').value;
		
	  if(sNO.length < 13)
	  {
	   		showMessage("주민등록번호(외국인 등록번호)가 유효하지 않습니다. 다시 입력하세요");
		   return false;
	  }
	  
	  if((temp2.charAt(0) <= "4") || ((targt == 1) || (targt == 2))) //내국인
	  {
		   for(i=0,sum=0; i<12; i++)
		   {
		    sum += (((i%8) + 2) * (sNO.charAt(i) - "0"));
		   }
		   
		   sum = 11 - (sum % 11);
		   sum = sum % 10;
		 
		   if(sum != sNO.charAt(12))
		   {
		    showMessage("주민등록번호가 유효하지 않습니다. 다시 입력하세요");
		    return false;
		   }
	  }
	  if(temp2.charAt(0) > "4") //외국인
	  {
	   if (chkForeignNo(sNO) == false){
	    showMessage("외국인등록 번호가 유효하지 않습니다. 다시 입력하세요");
	    return false;
	  	}
	  }
	} 

	function chkForeignNo(reg_no){
		//외국인등록번호 체크
	  var sum = 0;
	  var odd = 0;
	 
	  var buf = new Array(13);
	  
	  for (i = 0; i < 13; i++)
	   buf[i] = parseInt(reg_no.charAt(i));
	  
	  odd = buf[7]*10 + buf[8];    
	  
	  if (odd%2 != 0) 
	   return false;
	  if ((buf[11] != 6)&&(buf[11] != 7)&&(buf[11] != 8)&&(buf[11] != 9))
	   return false;
	   
	  var multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
	  
	  for (i = 0, sum = 0; i < 12; i++) 
	   sum += (buf[i] *= multipliers[i]);
	 
	  sum=11-(sum%11);    
	  if (sum>=10) sum-=10;
	  sum += 2;
	  if (sum>=10) sum-=10;
	  
	  if ( sum != buf[12]) 
	   return false;
	  else  
	   return true;
	}
	
	function setLayerSearchTab(val){
		if (val=='name'){
			document.getElementById('layer_tabnameOn').style.display = "block";
			document.getElementById('layer_tabnameOff').style.display = "none";
			document.getElementById('layer_tabipinOn').style.display = "none";
			document.getElementById('layer_tabipinOff').style.display = "block";
			
			document.getElementById('layer_realname').style.display = "block";
			document.getElementById('layer_ipin').style.display = "none";
			document.getElementById('layer_resultid').style.display = "none";
			
		}
		if (val=='ipin'){
			document.getElementById('layer_tabnameOn').style.display = "none";
			document.getElementById('layer_tabnameOff').style.display = "block";
			document.getElementById('layer_tabipinOn').style.display = "block";
			document.getElementById('layer_tabipinOff').style.display = "none";
			
			document.getElementById('layer_realname').style.display = "none";
			document.getElementById('layer_ipin').style.display = "block";
			document.getElementById('layer_resultid').style.display = "none";
		}
		
	}
	
	
	function fnNCPopup(){
			window.open('', 'popupNMCHK', 'width=450, height=350, toolbar=no,directories=no,scrollbars=no,resizable=no,status=no,menubar=no,top=0,left=0');
			document.vnoform1.action = "https://cert.namecheck.co.kr/NiceID/certnc_input.asp";
			document.vnoform1.target = "popupNMCHK";
			document.vnoform1.submit();
	}
	
	function fnIpinPopup(){
			window.open('', 'popupIPIN2', 'width=450, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes,location=no, scrollbar=no');
			document.vnoform2.target = "popupIPIN2";
			document.vnoform2.action = "https://cert.vno.co.kr/ipin.cb";
			document.vnoform2.submit();
	} 
	