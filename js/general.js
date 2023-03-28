/*---------------------------------------------------------------------*/ ;
(function($) {

    /*================= Global Variable Start =================*/
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var IEbellow9 = !$.support.leadingWhitespace;
    var iPhoneAndiPad = /iPhone|iPod/i.test(navigator.userAgent);
    var isIE = navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0;

    function isIEver() {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
    }
    
    var ww = document.body.clientWidth,
        wh = document.body.clientHeight;
    var mobilePort = 800,
        ipadView = 1024,
        wideScreen = 1600;

    /*================= Global Variable End =================*/


    /*================= On Document Load Start =================*/
    $(document).ready(function() {
       
        // Back to Top function
        if ($("#backtotop").length) {
            $(window).scroll(function() {
                if ($(window).scrollTop() > 120) {
                    $('#backtotop').fadeIn('250').css('display', 'block');
                } else {
                    $('#backtotop').fadeOut('250');
                }
            });
            $('#backtotop').click(function() {
                $('html, body').animate({
                    scrollTop: 0
                }, '200');
                return false;
            });
        };

        // For device checking
        if (isMobile == false) {
        };




    });
    /*================= On Document Load End =================*/



    /*================= On Window Load Start =================*/
    $(window).load(function() {
    });
    /*================= On Document Load End =================*/


    function getWidth() {
        ww = document.body.clientWidth;
        if (ww > wideScreen) {
            $('body').removeClass('device').addClass('desktop widerDesktop');
        }
        if (ww > mobilePort && ww <= wideScreen) {
            $('body').removeClass('device widerDesktop').addClass('desktop');
        }
        if (ww <= mobilePort) {
            $('body').removeClass('desktop widerDesktop').addClass('device');
        }
        if (ww > 767 && ww < 1025) {
            $('body').addClass('ipad');
        } else {
            $('body').removeClass('ipad');
        }
    }

})(jQuery);


function validate() {
    return false;
};










// header 1

$(document).ready(function() {

// tab style2 start

const tabs = document.querySelectorAll(".tab2 .tab");
const tabContent = document.querySelectorAll(".tab2 .tab-content");

let tabNo = 0;
let contentNo = 0;

tabs.forEach((tab) => {
  tab.dataset.id = tabNo;
  tabNo++;
  tab.addEventListener("click", function () {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
      tab.classList.add("non-active");
    });
    this.classList.remove("non-active");
    this.classList.add("active");
    tabContent.forEach((content) => {
      content.classList.add("hidden");
      if (content.dataset.id === tab.dataset.id) {
          content.classList.remove("hidden");
      }
    });
  });
});

tabContent.forEach((content) => {
  content.dataset.id = contentNo;
  contentNo++;
});

// tab style2 close


// tab style3 start
$(function() {
$('.tab-title').on('click', function(e) {
    e.preventDefault();
    var _self = $(this);
    $('.tab3 .tab').removeClass('active');
    _self.parent().addClass('active');
  });
});

// tab style3 close






// header menu

var navItems = document.querySelectorAll(".bottom-nav-item");

navItems.forEach(function(e, i) {
  e.addEventListener("click", function(e) {
    navItems.forEach(function(e2, i2) {
      e2.classList.remove("active");
    });
    this.classList.add("active");
  });
});

$('.scrollTo').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

$('.home-sl').owlCarousel({
        loop:true,
        margin:40,
        nav:false,
        dots: true,
        items:1,
        autoplay: true
       
})


$('.gallery').owlCarousel({
        loop:true,
        margin:40,
        nav:true,
        dots: false,
        autoplay: true,
        responsive:{
            0:{
                items:1,
                margin:20,
      
            },
            767:{
                margin:40,
                items:2,
            },
            1024:{
                margin:40,
                items:3,
            }
    
        }
})

$('.ourTour').owlCarousel({
        loop:true,
        margin:40,
        nav:true,
        dots: false,
        autoplay: true,
        responsive:{
            0:{
                items:1,
                margin:20,
      
            },
            767:{
                margin:40,
                items:5,
            }
    
        }
})

$('.testimonials').owlCarousel({
        loop:true,
        margin:40,
        nav:true,
        dots: false,
        autoplay: true,
        responsive:{
            0:{
                items:1,
                margin:20,
      
            },
            767:{
                margin:40,
                items:2,
            },
            1024:{
                margin:40,
                items:3,
            }
    
        }
})

});



// popups

if( $(".pgallery .item a").length){
$('.pgallery .item').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small></small>';
            }
        }
    });
}
    


$(document).ready(function() {

  // search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let extraArrow = document.querySelector(".extra-arrow");
extraArrow.onclick = function() {
 navLinks.classList.toggle("show4");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

});



jQuery(window).scroll(function () {
    var sc = jQuery(window).scrollTop()
    if (sc > 0) {
        jQuery("header").addClass("navbar-scroll")
    } 
    else {
        jQuery("header").removeClass("navbar-scroll")
    }
});