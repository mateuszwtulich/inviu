window.onscroll = function() {
    growShrinkLogo()
  };
  
  function growShrinkLogo() {
    var Logo = document.getElementById("Logo")
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      Logo.style.height = '48px';
      Logo.style.width = '90px';
    } else {
      Logo.style.width = '170px';      
      Logo.style.height = '89px';
    }
  }

  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 98
        }, 1000);
    }
});

 $(document).ready(function($) {
  var page_url = window.location.href;
  var page_id = page_url.substring(page_url.lastIndexOf("#")+1);
  window.console.log(page_url);

    $('html, body').stop().animate({
        scrollTop: $("#scroll-" + page_id).offset().top - 98
    }, 1000);

  });
 
  //$(document).ready(function($) {
    //   $('menu li a').click(function() {
    //          if ( ($(this).hasClass('menu-link-class')) && (!$(this).parent().hasClass('dropdown'))){
    //              $(this).closest('.nav-bar').removeClass('nav-open');
    //          }
    //      });
    //  });
    
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