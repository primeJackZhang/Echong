//二维码
$(".header .download").hover(function() {
	$(this).children(".qr-code").css({
		"display": "block"
	});
}, function() {
	
	$(this).children(".qr-code").css({
		"display": "none"
	});
});
//nav颜色切换
$(".header .head-bottom .nav-item").hover(function() {
	$(this).children("a").addClass("labelColor").next().css({
		"display": "block"
	});
}, function() {
	$(this).children("a").removeClass("labelColor").next().css({
		"display": "none"
	});
});

$(function() {
	$(window).scroll(function() {
		var t = $("body").scrollTop();
		if(t > 600) {
			$(".goTop").css({"display":"block"});
		} else {
			$(".goTop").fadeOut();
		}

	});
	$(".goTop").click(function() {
		$("body").animate({scrollTop:0});
	});
}());

//顶部导航定位
headFixed();
$(window).scroll(function() {
	headFixed();
});

function headFixed() {
	var top = $(window).scrollTop();
	if(top >= 170) {
		$(".header .head-bottom").addClass("head-bottom-fixed");
	} else {
		$(".header .head-bottom").removeClass("head-bottom-fixed");
	}
	var width = $(document).innerWidth();
	if(width<1250){
		$(" .m-newItem .bd .slick-prev").css({"left":0}).next().css({"right":0});
	}
}
//banner箭头
$(".banner .pag-ct p").hover(function() {
	$(this).css({
		"background": "rgba(177,158,122,1)"
	});
}, function() {
	$(this).css({
		"background": "rgba(177,158,122,0.4)"
	});
});
//banner分页
$(".banner .pagination .item").click(function() {
	bannerIndex = $(this).index();
	bannerCut(currentImg, bannerIndex);
});
$(".banner .arrow-left").click(function() {
	if(bannerIndex > 0) bannerIndex--;
	else bannerIndex = 4;

	bannerCut(currentImg, bannerIndex);
});
$(".banner .arrow-right").click(function() {
	if(bannerIndex < 4) bannerIndex++;
	else bannerIndex = 0;
	bannerCut(currentImg, bannerIndex);
});

//banner轮播
var bannerIndex = 0;
var currentImg = 0;
var Time = setInterval(bannerimg, 3000);

function bannerimg() {
	if(bannerIndex < 4) bannerIndex++;
	else {
		bannerIndex = 0
	}
	bannerCut(currentImg, bannerIndex);
}
$(".banner .banner-ct").hover(function() {
	clearInterval(Time);
}, function() {
	Time = setInterval(bannerimg, 3000);
});

function bannerCut(current, id) {
	currentImg = bannerIndex;
	$(".banner .banner-img .img").eq(id).fadeIn();
	$(".banner .banner-img .img").eq(current).fadeOut();
	$(".banner .pagination .item").eq(id).css({
		"background": "#DFCEAD"
	}).children().css({
		"background": "#A7936E"
	});
	$(".banner .pagination .item").eq(current).css({
		"background": "transparent"
	}).children().css({
		"background": "transparent"
	});
}
//新品首发btn
var clone0 = $(".itemList li").eq(0).clone();
var clone1 = $(".itemList li").eq(1).clone();
var clone2 = $(".itemList li").eq(2).clone();
var clone3 = $(".itemList li").eq(3).clone();
$(".bd-box .itemList").append(clone0, clone1, clone2, clone3);
var pos = 0;
$(".slick-next").click(function() {
	
	if(pos>=4) {
		pos = 0;
		$(".itemList").stop().css({
			left: 0
		});
	}
	pos++;
	$(".itemList").stop().animate({
		left: -pos * 1090
	}, 500);
})
$(".slick-prev").click(function() {
		pos--;
		if(pos <0) {
			pos = 3;
			$(".itemList").stop().css({
				left: -4 * 1090
			});
			$(".itemList").stop().animate({
				left: -pos * 1090
			});
		}
		
		$(".itemList").stop().animate({
			left: -pos * 1090
		}, 500);
	})

	/*新品首发换图区域*/
$(".itemList li").hover(function() {
	$(this).children().eq(0).children().eq(0).children().eq(0).children().eq(0).stop().animate({
		opacity: 0
	}, 200);
	$(this).children().eq(0).children().eq(0).children().eq(0).children().eq(1).stop().animate({
		opacity: 1
	}, 200);
	$(this).children().eq(0).children().eq(1).css({
		background: "#f4f0ea"
	});
}, function() {
	$(this).children().eq(0).children().eq(0).children().eq(0).children().eq(0).stop().animate({
		opacity: 1
	}, 200);
	$(this).children().eq(0).children().eq(0).children().eq(0).children().eq(1).stop().animate({
		opacity: 0
	}, 200);
	$(this).children().eq(0).children().eq(1).css({
		background: "#fff"
	});
})

//新品首发换图区域
$(".itemList li").hover(function() {
		$(this).children().eq(0).children().eq(0).children().eq(0).children().eq(0).stop().animate({
			opacity: 0
		}, 200);
		$(this).children().eq(0).children().eq(0).children().eq(0).children().eq(1).stop().animate({
			opacity: 1
		}, 200);
		$(this).children().eq(0).children().eq(1).css({
			background: "#f4f0ea"
		});
	}, function() {
		$(this).children().eq(0).children().eq(0).children().eq(0).children().eq(0).stop().animate({
			opacity: 1
		}, 200);
		$(this).children().eq(0).children().eq(0).children().eq(0).children().eq(1).stop().animate({
			opacity: 0
		}, 200);
		$(this).children().eq(0).children().eq(1).css({
			background: "#fff"
		});
	})
	//新品首发图片切换
var tabList = document.getElementById("tabList");
var tabli = tabList.children[0].children;
var m_product = document.getElementById("m-product");
var show = m_product.children;
var taba = tabList.getElementsByTagName("a");
for(var i = 0; i < tabli.length; i++) {
	tabli[i].index = i;
	tabli[i].onclick = function() {
		for(var j = 0; j < tabli.length; j++) {
			taba[j].className = "item";
			show[j].className = "product-box";
		}
		taba[this.index].className = "tab-sel";
		show[this.index].className = "product-show";
	}
}

var swiper = new Swiper('.swiper-container', {
				autoplay: 1000,
				loop: true,
				slidesPerView: 3,
				autoplayDisableOnInteraction: false,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				paginationClickable: true,
				spaceBetween: 12
			});

			$('.wrap').hover(function() {
				swiper.stopAutoplay();
			}, function() {
				swiper.startAutoplay();
			});
			
$(".foot-content .follow-us .icon-wangyi").hover(function(){
	$(".foot-content .follow-us .yi").css({"display":"block"});
},function(){
	$(".foot-content .follow-us .yi").css({"display":"none"});
});
$(".foot-content .follow-us .icon-weixin").hover(function(){
	$(".foot-content .follow-us .weixin").css({"display":"block"});
},function(){
	$(".foot-content .follow-us .weixin").css({"display":"none"});
});