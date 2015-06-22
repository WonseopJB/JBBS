<!-- 

=============Top Menu====================== 
* top menu css files : '<?= BOOT_STRAP_DIR ?>/dist/css/bootstrap.min.cs' and '<?= CSS_DIR ?>/carousel.css'

-->
<style type="text/css">
   .nav-up   {
    top: -50px;
    transition:0.2s;
   }
</style>

<script type="text/javascript">
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#scrollNav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#scrollNav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#scrollNav').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
}
</script>

	<div class="navbar-wrapper">
      <div class="container">
        <nav id='scrollNav' style='border:1px solid red;' class="navbar navbar-inverse navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
              <div style='float:left; border:0px solid red; width:15%'>
				  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				  </button>
			  </div>	
              <div>
					<a class="navbar-brand" style="border:0px solid blue;" href="/main">BEAUTY SKETCH</a>
			  </div>
			  <div id="magnifying_glass" class="navbar-toggle collapsed" style="float:right; position:relative; width:30px; height:30px; border:1px solid red;">	
			  </div>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li><a href="#">Sketch</a></li>
                <li><a href="#about">Contest</a></li>
                <li class="active"><a href="/best">Bests</a></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="caret"></span></a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">AboutUs</a></li>
					<li><a href="#">Contact</a></li>
                    <li class="divider"></li>
                    <li class="dropdown-header">Nav header</li>
                    <li><a href="#">Separated link</a></li>
                    <li><a data-toggle="modal" data-target="#myModal">log in</a></li>
                  </ul>
                </li>
              </ul>      
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title">Log in</h4>
          </div>
          <form class="form-horizontal" role="form" action="<?=site_url('/login?returnURL='.rawurlencode($returnURL))?>" method='post'>
          <div class="modal-body">
          <div class="form-group">
            <label for="inputEmail1" class="col-lg-2 control-label">Email</label>
            <div class="col-lg-10">
              <input type="email" class="form-control" id="inputEmail1" name="inputEmail1" placeholder="Email">
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword1" class="col-lg-2 control-label">Password</label>
            <div class="col-lg-10">
              <input type="password" class="form-control" id="inputPassword1" name="inputPassword1" placeholder="Password">
            </div>
          </div>
          <div class="form-group">
            <div class="col-lg-offset-2 col-lg-10">
              <div class="checkbox">
                <label>
                  <input type="checkbox"> Remember me
                </label>
              </div>
            </div>
           </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>    
        <button type="submit" class="btn btn-primary">Sign in</button>  
          </div>
           </form>

        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
