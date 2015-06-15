

 	function policy_pp(){
			  surl ="/main/policy";
	 		  window.open(surl, "POLICY_PP", "scrollbars=auto,location=no,directories=no, width=700px, height=600px, menubar=no, toolbar=no,status=no, left=100,top=100");			
	}
	
 	function privacy_pp(){
			  surl ="/main/privacy";
	 		  window.open(surl, "PRIVACY_PP", "scrollbars=auto,location=no,directories=no, width=700px, height=600px, menubar=no, toolbar=no,status=no, left=150,top=150");			
	}
	
 	function order_policy_pp(){
			  surl ="/main/orderpolicy";
	 		  window.open(surl, "ORDERPOLICY_PP", "scrollbars=auto,location=no,directories=no, width=700px, height=600px, menubar=no, toolbar=no,status=no, left=100,top=100");			
	}

 	function myticket_pp(ticketno){
			  surl ="/mypage/ticket/"+ticketno
	 		  window.open(surl, "TICKET_PP", "scrollbars=auto,location=no,directories=no, width=710px, height=636px, menubar=no, toolbar=no,status=no, left=200,top=200");			
	}

 	function mycoupon_pp(){
			  surl ="/mypage/coupon/pp";
	 		  window.open(surl, "COUPON_PP", "scrollbars=auto,location=no,directories=no, width=710px, height=636px, menubar=no, toolbar=no,status=no, left=200,top=200");			
	}

	function MM_swapImgRestore() { //v3.0
	  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
	}
	function MM_preloadImages() { //v3.0
	  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
	    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
	    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
	}
	
	function MM_findObj(n, d) { //v4.01
	  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
	    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
	  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
	  if(!x && d.getElementById) x=d.getElementById(n); return x;
	}
	
	function MM_swapImage() { //v3.0
	  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
	   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
	}
	
/**
 * 레이어 ID 영역 숨김 또는 펼침
 *
 * @param id
 */
function showHide( id ) {
    if ( document.getElementById(id).style.visibility == 'hidden') {
    		centerLayerMove(id);
        document.getElementById(id).style.visibility = 'visible';
    }
    else {
        document.getElementById(id).style.visibility = 'hidden';
    }
}

/**
 *  레이어창 가운데로 보내기
 *
 * @param id
 */

function centerLayerMove(strLayerid){                          
          var obj_centerLayer=document.getElementById(strLayerid);
          var bodywidth=document.documentElement.clientWidth;     
          var bodyheight=document.documentElement.clientHeight;   
          var divWidth=obj_centerLayer.offsetWidth;               
          var divHeight=obj_centerLayer.offsetHeight;             
          if(typeof document.body.style.maxHeight!="undefined"){  
                  var bodyWidth=document.body.clientWidth;        
                  bodyHeight=document.body.clientHeight;          
                  if(!!(window.attachEvent && !window.opera)){    
                          pageLeft=document.documentElement.scrollLeft;
                          pageTop=document.documentElement.scrollTop;  
                  }else{                                               
                          pageLeft=window.pageXOffset;                 
                          pageTop=window.pageYOffset;                  
                  }                                                    
          }else{                                                       
                  pageLeft=document.documentElement.scrollLeft;        
                  pageTop=document.documentElement.scrollTop;          
          }                                                            
          var divLeft=pageLeft,divTop=pageTop;                         
          if(bodyWidth > divWidth){                                    
                  divLeft=pageLeft+Math.ceil((bodyWidth-divWidth)/2);  
          }                                                            
          if(bodyHeight > divHeight){                                  
                  divTop=pageTop+Math.ceil((bodyHeight-divHeight)/2);  
          }                                                            
          obj_centerLayer.style.left=divLeft+"px";                     
          obj_centerLayer.style.top=divTop+"px";                       
          if(obj_centerLayer.style.display==""){                       
                  setTimeout(function(){centerLayerMove(strLayerid);},100);                                 
          }                                                                                                 
  }      
	
		
	
	function null_check(str){
			var nidV = str.value.trim();
			var nidN = nidV.indexOf(" ");
			
			if (nidV=="")
			{
				return false;
			}
	
			if ( nidN > 0 ) {			
				str.value = "";
				return false; 
			}
	}
	
		
	function chkNumberKey(key)
	{
	 
	    if ((key >= 48 && key <= 57) // 키보드 상단 숫자키
	       || (key >= 96 && key <= 105) // 키패드 숫자키
	       || key == 8  // 백스페이스 키
	       || key == 37 // 왼쪽 화살표 키
	       || key == 39 // 오른쪽 화살표 키
	       || key == 46 // DEL 키
	       || key == 13 // 엔터 키
	 
	       || key == 9  // Tab 키
	       ) {
	           return true;
	      } else {
	          // alert(key);
	          return false;
	     }
	}
	
		
	String.prototype.trim = function() {   
	       return this.replace(/^\s+|\s+$/g,"");   
	}   
	     
	String.prototype.ltrim = function() {   
	       return this.replace(/^\s+/,"");      
	}   
	      
	String.prototype.rtrim = function() {   
	       return this.replace(/\s+$/,"");      
	}   
	
//add comma
	function display_comma(value) {
		
		var src;
		var i;
		var factor;
		var su;
		var Spacesize = 0;
		
		var String_val = value.toString();
		
		factor = String_val.length % 3;
		su = (String_val.length - factor) /3;
		src = String_val.substring(0,factor);
		
		for(i=0; i<su ; i++)
		{
		   if ((factor==0)&&(i==0))
		    {
		         src += String_val.substring(factor+(3*i), factor+3+(3*i));
		    }
		    else 
		    {
		        if ( String_val.substring(factor+(3*i) - 1, factor+(3*i)) != "-" ) src +=",";
		        src += String_val.substring(factor+(3*i), factor+3+(3*i));
		    }
		}
		return src;
	}
	
	
	function chkBusinessNo(el) {
  
    var a = new Array;
    var b = new Array(1,3,7,1,3,7,1,3,5);
    var sum = 0;

    for (i = 0; i < 10; i++) a[i] = el.substr(i,1);
    for (i = 0; i < 9;  i++) sum = sum + (a[i] * b[i]);

    sum = sum + ((a[8] * 5) / 10);
    y = (sum - (sum % 1)) % 10;

    if (y == 0)
        z = 0;
    else
        z = 10 - y;

    if (z != a[9]) {
        return false;
    }

    return true;

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