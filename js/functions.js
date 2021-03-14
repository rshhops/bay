//Timer
var today = new Date(),
    tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
	tomorrow = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 0, 0, 0);
function GetCount() {
    dateNow = new Date();
    amount = tomorrow.getTime() - dateNow.getTime();
    delete dateNow;
    if (amount < 0) {
        $('.countdown').html('<div><span>0</span><span>0</span></div><div><span>0</span><span>0</span></div><div><span>0</span><span>0</span></div>'); 
    } else {
		hours = 0;
		hours1 = 0;
		hours2 = 0;
		mins = 0;
		mins1 = 0;
		mins2 = 0;
		secs = 0;
		secs1 = 0;
		secs2 = 0;
		out = "";
		amount = Math.floor(amount / 1e3); 
		amount = amount % 86400;
		hours = Math.floor(amount / 3600);
		hours1 = (hours >= 10) ? hours.toString().charAt(0) : '0';
		hours2 = (hours >= 10) ? hours.toString().charAt(1) : hours.toString().charAt(0);
		amount = amount % 3600;
		mins = Math.floor(amount / 60);
		mins1 = (mins >= 10) ? mins.toString().charAt(0) : '0';
		mins2 = (mins >= 10) ? mins.toString().charAt(1) : mins.toString().charAt(0);
		amount = amount % 60;
		secs = Math.floor(amount);
		secs1 = (secs >= 10) ? secs.toString().charAt(0) : '0';
		secs2 = (secs >= 10) ? secs.toString().charAt(1) : secs.toString().charAt(0);

        $('.countdown').html('<div><span>' + hours1 + '</span><span>' + hours2 + '</span><p>Часов</p></div><div><span>' + mins1 + '</span><span>' + mins2 + '</span><p>Минут</p></div><div><span>'+ secs1 + '</span><span>'+ secs2 + '</span><p>Секунд</p></div>'); 
        setTimeout("GetCount()", 1000);
    }
}

$(document).ready(function(){
	$('.video-block .preview div').on('click',function(){
		$(this).parent().fadeOut(function(){remove();});
		$('.video-block').append('<iframe src="https://www.youtube.com/embed/2tP0k44VDKM?autoplay=1" frameborder="0" allowfullscreen></iframe>');
	});
	
	GetCount();
});

//Scrolling
jQuery().ready(function() {
	$('#select-collor').change(function(){
		if($(this).val() == 'цвет:белый'){
			$('#form-img').attr('src', 'img/product3_w.png');		
		} else {
			$('#form-img').attr('src', 'img/product3.png');	
		}
	});
	
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});


//Reviews Slider
(function() {
	var flexslider = {vars:{}};
	
	function getGridSize() {
		return (window.innerWidth < 639) ? 1 : (window.innerWidth < 1169) ? 1 : 2;
	}

	function getItemWidth() {
		return (window.innerWidth < 639) ? 300 : (window.innerWidth < 1169) ? 470 : 470;
	}
		 
		$(window).load(function() {
		$('.reviews-slider').flexslider({
			animation: "slide", 
			itemWidth: getItemWidth(),
			prevText: '',
			nextText: '',
			itemMargin: 0,
			minItems: getGridSize(),
			maxItems: getGridSize()
		});
		$('.product-slider').flexslider({
			animation: "slide",
			prevText: '',
			nextText: '',
			controlNav: false,
		});
		function ready(player_id) {
			var froogaloop = $f(player_id);
			froogaloop.addEvent('play', function(data) {
			  $('.flexslider').flexslider("pause");
			});
			froogaloop.addEvent('pause', function(data) {
			  $('.flexslider').flexslider("play");
			});
		  }
	});
		 
		  // check grid size on resize event
	$(window).resize(function() { 
		var gridSize = getGridSize();
		flexslider.vars.minItems = gridSize;
		flexslider.vars.maxItems = gridSize;
	});
}());
