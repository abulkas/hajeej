
	$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 86){
		  $("#banner").addClass("shrink");
		  $(".navbar-brand span").addClass("white");
		}
		else
		{
			$("#banner").removeClass("shrink");
			$(".navbar-brand span").removeClass("white");
		}
	});