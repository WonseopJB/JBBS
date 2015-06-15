<!-- Header -->
<?php echo $header; ?>
<!-- Intro page -->
<?php echo $intro; ?>
<body>
<!-- Top menu -->
<?php echo $topMenu; ?>

    <!-- Marketing messaging and featurettes
    ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->
	
	<style contenteditable="" scoped="">
	.div_menu_button{
		border: 0px solid red;
		text-align: center;
		margin-top: 20px;
	}
	</style>

    <div class="container marketing" style='border: 0px solid red; margin-top: 0px'>
		<div class='div_menu_button'>		
			<a href="#"><button type="button" class="btn btn-lg btn-default" style='width: 80%'>SKETCH</button></a>
		</div>
		<div class='div_menu_button'>
			<a href="#"><button type="button" class="btn btn-lg btn-primary" style='width: 80%'>CONTEST</button></a>
		</div>
		<div class='div_menu_button'>
			<a href="/best"><button type="button" class="btn btn-lg btn-success" style='width: 80%'>BEST</button></a>
		</div>
		<div class='div_menu_button'>
			<a href="#"><button type="button" class="btn btn-lg btn-info" style='width: 80%'>PERSONAL FILE</button></a>
		</div>
		<?php 
		if(!$this->session->userdata('is_login')){
		?>
		<div class='div_menu_button' data-toggle="modal" data-target="#myModal">
			<button type="button" class="btn btn-lg btn-warning" style='width: 80%'>LOG IN</button>
		</div>
		<?php
		}
		?> 
		<div class='div_menu_button'>
			<a href="#"><button type="button" class="btn btn-lg btn-danger" style='width: 80%'>QUIT</button></a>
		</div>
      <!-- FOOTER -->
      <footer>
        <p class="pull-right"><a href="#">Back to top</a></p>
        <p>&copy; 2014 BEAUTY SKETCH, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
      <?=$_SERVER['HTTP_HOST']?>
	  <?=$_SERVER['REMOTE_ADDR']?>
<!--  <?=$_SERVER['HTTP_USER_AGENT']?> -->

	  </footer>

    </div><!-- /.container -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    
    <script src="<?= BOOT_STRAP_DIR ?>/dist/js/bootstrap.min.js"></script>
    <script src="<?= BOOT_STRAP_DIR ?>/docs/assets/js/docs.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="<?= BOOT_STRAP_DIR ?>/docs/assets/js/ie10-viewport-bug-workaround.js"></script>
  </body>
</html>
