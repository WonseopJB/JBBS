<script id='code_1'>
//<!--[CDATA[ 
 $(function() {
/* =Swipe function=
	  $("#intro_div").swipe( {
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
//			$("#title").text("You swiped " + direction + " with " + fingerCount + " fingers"); // Basic use
			$("#title").text("Welcome to BeautySketch");
			$('#intro_div').fadeOut(2000);
        },
        threshold:0,
        fingers:'all'
      });
*/

	$("#intro_div").fadeOut(500);

    });
//]]-->
</script>
<div class='container'>

<div id='intro_div' class='box' style='border:px solid red;position: absolute; z-index:99; display: table; border:0px solid red; width:100%; left:0%; height:100%; background-color: white;'>
	<!-- 1 -->
	<div style="border:0px solid red; display: table-cell; vertical-align: middle; padding-bottom:0px; width:100%; height:100%; margin-top:0%; left:0%; list-style: none" >
		<div id='title' style="border:0px solid blue; margin:0 auto; width: 70%; background-color: white; height:auto; vertical-align:middle; text-align:center">
			<p><b>Sketch your beautiful life!<?=$visit ?></b></p>
		</div>
		<div style="border:0px solid blue; margin:0 auto; margin-top:10%; margin-bottom:15%; width: 100px; height: 100px; background: orange; -moz-border-radius: 50px; -webkit-border-radius: 50px; border-radius: 50px; text-align:center;">
		</div>
		<div style="border:0px solid blue; margin:0 auto; width: 70%; background-color: white; height:auto; vertical-align:middle; text-align:center">
			<p><b>beautiful sketch</b></p>
		</div>
	</div>
</div>
</div>

