window.onscroll = function () {
  growShrinkLogo()
};

function growShrinkLogo() {
  var Logo = document.getElementById("Logo")
  var fixed = document.getElementById("fixed-button")
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    Logo.style.height = '48px';
    Logo.style.width = '90px';
    fixed.style.visibility = 'visible';
  } else {
    Logo.style.width = '170px';
    Logo.style.height = '89px';
    fixed.style.visibility = 'hidden';
  }
}

$(document).ready(function () {
  redirect();
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
});

$(window).bind('hashchange', function () {
  redirect();
});

function redirect() {
  var page_url = window.location.href;
  var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
  $('.animated-icon2').removeClass('open');

  if (!page_url.includes("#")) {
    $("#main").load("main-page.html");
    $('html, body').stop().animate({
      scrollTop: 0
    }, 1000);
  }
  else if (page_id === "fotografia-biznesowa") {
    $("#main").load("biznesowa.html");
    $('html, body').stop().animate({
      scrollTop: 0
    }, 500);
  }
  else if (page_id === "fotografia-medyczna") {
    $("#main").load("medyczna.html");
    $('html, body').stop().animate({
      scrollTop: 0
    }, 500);
  }
  else if (page_id === "film") {
    $("#main").load("film.html");
    $('html, body').stop().animate({
      scrollTop: 0
    }, 500);
  }
}

function animateToOnas() {
  loadMain();
  sleep(100).then(() => {
    closeDropdownMenu();
    $('html, body').stop().animate({
      scrollTop: $("#scroll-oNas").offset().top - 86
    }, 1000);
  })
}

function animateToNaszeProjekty() {
  if (!window.location.href.includes("#")) {
    $('html, body').stop().animate({
      scrollTop: $("#scroll-naszeProjekty").offset().top - 110
    }, 1000);
  }
}

function animateToLogo() {
  loadMain();
  sleep(100).then(() => {
    closeNavbarAndDropdown();
    $('html, body').stop().animate({
      scrollTop: 0
    }, 1000);
  })
}

function animateToKontakt() {
  loadMain();
  sleep(100).then(() => {
    closeDropdownMenu();
    $('html, body').stop().animate({
      scrollTop: $("#scroll-kontakt").offset().top - 86
    }, 1000);
  })
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function loadMain() {
  $('.animated-icon2').removeClass('open');
  if (window.location.href.includes("#")) {
    $("#main").load("main-page.html");
    var page_url = window.location.href.substring(0, window.location.href.lastIndexOf("/"));
    history.pushState({}, null, page_url)
  }
}

function toBiznesowa() {
  var page_url = window.location.href.substring(0, window.location.href.lastIndexOf("#"));
  window.location.href = page_url + "#fotografia-biznesowa";
  closeNavbarAndDropdown();
  $("#main").load("biznesowa.html");
  $('html, body').stop().animate({
    scrollTop: 0
  }, 500);
};

function toMedyczna() {
  var page_url = window.location.href.substring(0, window.location.href.lastIndexOf("#"));
  window.location.href = page_url + "#fotografia-medyczna";
  closeNavbarAndDropdown();
  $("#main").load("medyczna.html");
  $('html, body').stop().animate({
    scrollTop: 0
  }, 500);
};

function toFilm() {
  var page_url = window.location.href.substring(0, window.location.href.lastIndexOf("#"));
  window.location.href = page_url + "#film";
  closeNavbarAndDropdown();
  $("#main").load("film.html");
  $('html, body').stop().animate({
    scrollTop: 0
  }, 500);
};

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
  // captionText.innerHTML = dots[slideIndex - 1].alt;
}

function closeNavbarAndDropdown() {
  if ($(".navbar-collapse").hasClass("show")) {
    $(".navbar-collapse").removeClass('show');
    $(".dropdown-toggle").dropdown('toggle');
  }
  closeDropdownMenu();
}

function closeDropdownMenu() {
  if ($(".dropdown-menu").hasClass("show")) {
    $(".dropdown-menu").removeClass('show');
  }
}

function toTop(){
  $('html, body').stop().animate({
    scrollTop: 0
  }, 800);
    closeNavbarAndDropdown();
}

//  // Cache selectors
// var lastId,
//     topMenu = $("#top-menu"),
//     topMenuHeight = topMenu.outerHeight()+15,
//     // All list items
//     menuItems = topMenu.find("a"),
//     // Anchors corresponding to menu items
//     scrollItems = menuItems.map(function(){
//       var item = $($(this).attr("href"));
//       if (item.length) { return item; }
//     });

// // Bind click handler to menu items
// // so we can get a fancy scroll animation
// menuItems.click(function(e){
//   var href = $(this).attr("href"),
//       offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
//   $('html, body').stop().animate({ 
//       scrollTop: offsetTop 
//   }, 1000);
//   e.preventDefault();
// });

// // Bind to scroll
// $(window).scroll(function(){
//    // Get container scroll position
//    var fromTop = $(this).scrollTop()+topMenuHeight;

//    // Get id of current scroll item
//    var cur = scrollItems.map(function(){
//      if ($(this).offset().top < fromTop)
//        return this;
//    });
//    // Get the id of the current element
//    cur = cur[cur.length-1];
//    var id = cur && cur.length ? cur[0].id : "";

//    if (lastId !== id) {
//        lastId = id;
//        // Set/remove active class
//        menuItems
//          .parent().removeClass("active")
//          .end().filter("[href='#"+id+"']").parent().addClass("active");
//    }                   
// });