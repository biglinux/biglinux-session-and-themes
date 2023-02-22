//REFRESH
$(document).on('click', '#btnClick', function(){ 
    //$("#desktop-tab-content").load(location.href+" #desktop-tab-content>*","");
    location.href="index.sh.htm?checked_refresh=checked";  
});

//APLICAR MARCA E ATIVA/DESATIVA CSS
$(document).ready(function(){
    // Set div display to Classic
    $(".show-classic").click(function(){
        $("#myDivClassic").css("display", "block");
        $("#myDivNew").css("display", "none");
        $("#myDivModern").css("display", "none");
        $("#myDivKunity").css("display", "none");
        $("#myDivNextg").css("display", "none");
        $("#myDivDeskx").css("display", "none");
        
        $('a[id$="linkClassic"]').toggleClass("disabled-link");
        $('a[id$="linkNew"]').removeClass("disabled-link");
        $('a[id$="linkModern"]').removeClass("disabled-link");
        $('a[id$="linkKunity"]').removeClass("disabled-link");
        $('a[id$="linkNextg"]').removeClass("disabled-link");
        $('a[id$="linkDesk-x"]').removeClass("disabled-link");
    });
    // Set div display to New
    $(".show-new").click(function(){
        $("#myDivClassic").css("display", "none");
        $("#myDivNew").css("display", "block");
        $("#myDivModern").css("display", "none");
        $("#myDivKunity").css("display", "none");
        $("#myDivNextg").css("display", "none");
        $("#myDivDeskx").css("display", "none");
        
        $('a[id$="linkClassic"]').removeClass("disabled-link");
        $('a[id$="linkNew"]').toggleClass("disabled-link");
        $('a[id$="linkModern"]').removeClass("disabled-link");
        $('a[id$="linkKunity"]').removeClass("disabled-link");
        $('a[id$="linkNextg"]').removeClass("disabled-link");
        $('a[id$="linkDesk-x"]').removeClass("disabled-link");
    });
    // Set div display to Modern
    $(".show-modern").click(function(){
        $("#myDivClassic").css("display", "none");
        $("#myDivNew").css("display", "none");
        $("#myDivModern").css("display", "block");
        $("#myDivKunity").css("display", "none");
        $("#myDivNextg").css("display", "none");
        $("#myDivDeskx").css("display", "none");
        
        $('a[id$="linkClassic"]').removeClass("disabled-link");
        $('a[id$="linkNew"]').removeClass("disabled-link");
        $('a[id$="linkModern"]').toggleClass("disabled-link");
        $('a[id$="linkKunity"]').removeClass("disabled-link");
        $('a[id$="linkNextg"]').removeClass("disabled-link");
        $('a[id$="linkDesk-x"]').removeClass("disabled-link");
    });
    // Set div display Kunity
    $(".show-kunity").click(function(){
        $("#myDivClassic").css("display", "none");
        $("#myDivNew").css("display", "none");
        $("#myDivModern").css("display", "none");
        $("#myDivKunity").css("display", "block");
        $("#myDivNextg").css("display", "none");
        $("#myDivDeskx").css("display", "none");
        
        $('a[id$="linkClassic"]').removeClass("disabled-link");
        $('a[id$="linkNew"]').removeClass("disabled-link");
        $('a[id$="linkModern"]').removeClass("disabled-link");
        $('a[id$="linkKunity"]').toggleClass("disabled-link");
        $('a[id$="linkNextg"]').removeClass("disabled-link");
        $('a[id$="linkDesk-x"]').removeClass("disabled-link");
    });
    // Set div display Nextg
    $(".show-nextg").click(function(){
        $("#myDivClassic").css("display", "none");
        $("#myDivNew").css("display", "none");
        $("#myDivModern").css("display", "none");
        $("#myDivKunity").css("display", "none");
        $("#myDivNextg").css("display", "block");
        $("#myDivDeskx").css("display", "none");
        
        $('a[id$="linkClassic"]').removeClass("disabled-link");
        $('a[id$="linkNew"]').removeClass("disabled-link");
        $('a[id$="linkModern"]').removeClass("disabled-link");
        $('a[id$="linkKunity"]').removeClass("disabled-link");
        $('a[id$="linkNextg"]').toggleClass("disabled-link");
        $('a[id$="linkDesk-x"]').removeClass("disabled-link");
    });
    // Set div display Desk-x
    $(".show-desk-x").click(function(){
        $("#myDivClassic").css("display", "none");
        $("#myDivNew").css("display", "none");
        $("#myDivModern").css("display", "none");
        $("#myDivKunity").css("display", "none");
        $("#myDivNextg").css("display", "none");
        $("#myDivDeskx").css("display", "block");
        
        $('a[id$="linkClassic"]').removeClass("disabled-link");
        $('a[id$="linkNew"]').removeClass("disabled-link");
        $('a[id$="linkModern"]').removeClass("disabled-link");
        $('a[id$="linkKunity"]').removeClass("disabled-link");
        $('a[id$="linkNextg"]').removeClass("disabled-link");
        $('a[id$="linkDesk-x"]').toggleClass("disabled-link");
    });
});
//APLICAR MARCA E ATIVA/DESATIVA CSS FIM

$(function () {
  var tab = $("li label");
  tab.on("click", function (event) {
    tab_content = $(this).attr("id");
    $('div[id$="tab-content"]').removeClass("active");
    $(tab_content).addClass("active");
  });
});

// PRINCIAL TABS
$(function () {
  var tab = $(".tabs h3 a");
  tab.on("click", function (event) {
    event.preventDefault();
    tab.removeClass("active");
    $(this).addClass("active");
    tab_content = $(this).attr("href");
    $('div[id$="tab-content"]').removeClass("active");
    $(tab_content).addClass("active");
  });
});

// SLIDESHOW
$(function () {
  $("#slideshow > div:gt(0)").hide();
  setInterval(function () {
    $("#slideshow > div:first")
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo("#slideshow");
  }, 3850);
});

// CUSTOM JQUERY FUNCTION FOR SWAPPING CLASSES
(function ($) {
  "use strict";
  $.fn.swapClass = function (remove, add) {
    this.removeClass(remove).addClass(add);
    return this;
  };
})(jQuery);

// SHOW/HIDE PANEL ROUTINE (needs better methods)
$(function () {
  $(".agree,.forgot, #toggle-terms, .log-in, .sign-up").on(
    "click",
    function (event) {
      event.preventDefault();
      var terms = $(".terms"),
        recovery = $(".recovery"),
        close = $("#toggle-terms"),
        arrow = $(".tabs-content .fa");
      if (
        $(this).hasClass("agree") ||
        $(this).hasClass("log-in") ||
        ($(this).is("#toggle-terms") && terms.hasClass("open"))
      ) {
        if (terms.hasClass("open")) {
          terms.swapClass("open", "closed");
          close.swapClass("open", "closed");
          arrow.swapClass("active", "inactive");
        } else {
          if ($(this).hasClass("log-in")) {
            return;
          }
          terms.swapClass("closed", "open").scrollTop(0);
          close.swapClass("closed", "open");
          arrow.swapClass("inactive", "active");
        }
      } else if (
        $(this).hasClass("forgot") ||
        $(this).hasClass("sign-up") ||
        $(this).is("#toggle-terms")
      ) {
        if (recovery.hasClass("open")) {
          recovery.swapClass("open", "closed");
          close.swapClass("open", "closed");
          arrow.swapClass("active", "inactive");
        } else {
          if ($(this).hasClass("sign-up")) {
            return;
          }
          recovery.swapClass("closed", "open");
          close.swapClass("closed", "open");
          arrow.swapClass("inactive", "active");
        }
      }
    }
  );
});

// DISPLAY MSSG
$(function () {
  $(".recovery .button").on("click", function (event) {
    event.preventDefault();
    $(".recovery .mssg").addClass("animate");
    setTimeout(function () {
      $(".recovery").swapClass("open", "closed");
      $("#toggle-terms").swapClass("open", "closed");
      $(".tabs-content .fa").swapClass("active", "inactive");
      $(".recovery .mssg").removeClass("animate");
    }, 2500);
  });
});

// DISABLE SUBMIT FOR DEMO
$(function () {
  $(".button").on("click", function (event) {
    $(this).stop();
    event.preventDefault();
    return false;
  });
});




$(document).on("click", "#point-container", function () {
  var show = $(this).data("show");
  $(show).removeClass("hide").siblings().addClass("hide");
});







//NEW ACTION
$(function () {
  $(".menu-link").click(function () {
    $(".menu-link").removeClass("is-active");
    $(this).addClass("is-active");
  });
});

$(function () {
  $(".main-header-link").click(function () {
    $(".main-header-link").removeClass("is-active");
    $(this).addClass("is-active");
  });
});

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdowns.forEach((c) => c.classList.remove("is-active"));
    dropdown.classList.add("is-active");
  });
});

$(".search-bar input")
  .focus(function () {
    $(".header").addClass("wide");
  })
  .blur(function () {
    $(".header").removeClass("wide");
  });

$(document).click(function (e) {
  var container = $(".status-button");
  var dd = $(".dropdown");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    dd.removeClass("is-active");
  }
});

$(document).click(function (e) {
  var container = $(".status-button2");
  var dd = $(".dropdown");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    dd.removeClass("is-active");
  }
});

$(function () {
  $(".dropdown").on("click", function (e) {
    $(".content-wrapper").addClass("overlay");
    e.stopPropagation();
  });
  $(document).on("click", function (e) {
    if ($(e.target).is(".dropdown") === false) {
      $(".content-wrapper").removeClass("overlay");
    }
  });
});

$(function () {
  $(".status-button:not(.open)").on("click", function (e) {
    $(".overlay-app").addClass("is-active");
  });
  $(".pop-up .close").click(function () {
    $(".overlay-app").removeClass("is-active");
  });
});

$(".status-button:not(.open)").click(function () {
  $(".pop-up").addClass("visible");
});

$(".pop-up .close").click(function () {
  $(".pop-up").removeClass("visible");
});

$(function () {
  $(".status-button2:not(.open)").on("click", function (e) {
    $(".overlay-app").addClass("is-active");
  });
  $(".pop-up2 .close").click(function () {
    $(".overlay-app").removeClass("is-active");
  });
});

$(".status-button2:not(.open)").click(function () {
  $(".pop-up2").addClass("visible");
});

$(".pop-up2 .close").click(function () {
  $(".pop-up2").removeClass("visible");
});

// MODAL TEMA APLICADO
$(document).click(function (e) {
  var container = $(".status-button-themeapply");
  var dd = $(".dropdown");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    dd.removeClass("is-active");
  }
});

$(function () {
  $(".status-button-themeapply:not(.open)").on("click", function (e) {
    $(".overlay-app").addClass("is-active");
  });
  $(".pop-up-themeapply .close").click(function () {
    $(".overlay-app").removeClass("is-active");
  });
});

$(".status-button-themeapply:not(.open)").click(function () {
  $(".pop-up-themeapply").addClass("visible");
});

$(".pop-up-themeapply .close").click(function () {
  $(".pop-up-themeapply").removeClass("visible");
});
// MODAL TEMA APLICADO FIM

// MODAL DESKTOP APLICADO
$(document).click(function (e) {
  var container = $(".status-button-desktopapply");
  var dd = $(".dropdown");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    dd.removeClass("is-active");
  }
});

$(function () {
  $(".status-button-desktopapply:not(.open)").on("click", function (e) {
    $(".overlay-app").addClass("is-active");
  });
  $(".pop-up-desktopapply .close").click(function () {
    $(".overlay-app").removeClass("is-active");
  });
});

$(".status-button-desktopapply:not(.open)").click(function () {
  $(".pop-up-desktopapply").addClass("visible");
});

$(".pop-up-desktopapply .close").click(function () {
  $(".pop-up-desktopapply").removeClass("visible");
});
// MODAL DESKTOP APLICADO FIM

// MODAL CLASSIC
$(document).click(function (e) {
  var container = $(".status-button-classic");
  var dd = $(".dropdown");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    dd.removeClass("is-active");
  }
});

$(function () {
  $(".status-button-classic:not(.open)").on("click", function (e) {
    $(".overlay-app").addClass("is-active");
  });
  $(".pop-up-classic .close").click(function () {
    $(".overlay-app").removeClass("is-active");
  });
});

$(".status-button-classic:not(.open)").click(function () {
  $(".pop-up-classic").addClass("visible");
});

$(".pop-up-classic .close").click(function () {
  $(".pop-up-classic").removeClass("visible");
});
// MODAL CLASSIC FIM

// MODAL NEW
$(document).click(function (e) {
  var container = $(".status-button-new");
  var dd = $(".dropdown");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    dd.removeClass("is-active");
  }
});

$(function () {
  $(".status-button-new:not(.open)").on("click", function (e) {
    $(".overlay-app").addClass("is-active");
  });
  $(".pop-up-new .close").click(function () {
    $(".overlay-app").removeClass("is-active");
  });
});

$(".status-button-new:not(.open)").click(function () {
  $(".pop-up-new").addClass("visible");
});

$(".pop-up-new .close").click(function () {
  $(".pop-up-new").removeClass("visible");
});
// MODAL NEW FIM

// MODAL MODERN
$(document).click(function (e) {
  var container = $(".status-button-modern");
  var dd = $(".dropdown");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    dd.removeClass("is-active");
  }
});

$(function () {
  $(".status-button-modern:not(.open)").on("click", function (e) {
    $(".overlay-app").addClass("is-active");
  });
  $(".pop-up-modern .close").click(function () {
    $(".overlay-app").removeClass("is-active");
  });
});

$(".status-button-modern:not(.open)").click(function () {
  $(".pop-up-modern").addClass("visible");
});

$(".pop-up-modern .close").click(function () {
  $(".pop-up-modern").removeClass("visible");
});
// MODAL MODERN FIM

// MODAL KUNITY
$(document).click(function (e) {
  var container = $(".status-button-kunity");
  var dd = $(".dropdown");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    dd.removeClass("is-active");
  }
});

$(function () {
  $(".status-button-kunity:not(.open)").on("click", function (e) {
    $(".overlay-app").addClass("is-active");
  });
  $(".pop-up-kunity .close").click(function () {
    $(".overlay-app").removeClass("is-active");
  });
});

$(".status-button-kunity:not(.open)").click(function () {
  $(".pop-up-kunity").addClass("visible");
});

$(".pop-up-kunity .close").click(function () {
  $(".pop-up-kunity").removeClass("visible");
});
// MODAL KUNITY FIM

// MODAL NEXTG
$(document).click(function (e) {
  var container = $(".status-button-nextg");
  var dd = $(".dropdown");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    dd.removeClass("is-active");
  }
});

$(function () {
  $(".status-button-nextg:not(.open)").on("click", function (e) {
    $(".overlay-app").addClass("is-active");
  });
  $(".pop-up-nextg .close").click(function () {
    $(".overlay-app").removeClass("is-active");
  });
});

$(".status-button-nextg:not(.open)").click(function () {
  $(".pop-up-nextg").addClass("visible");
});

$(".pop-up-nextg .close").click(function () {
  $(".pop-up-nextg").removeClass("visible");
});
// MODAL NEXTG FIM

// MODAL DESK-X
$(document).click(function (e) {
  var container = $(".status-button-desk-x");
  var dd = $(".dropdown");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    dd.removeClass("is-active");
  }
});

$(function () {
  $(".status-button-desk-x:not(.open)").on("click", function (e) {
    $(".overlay-app").addClass("is-active");
  });
  $(".pop-up-desk-x .close").click(function () {
    $(".overlay-app").removeClass("is-active");
  });
});

$(".status-button-desk-x:not(.open)").click(function () {
  $(".pop-up-desk-x").addClass("visible");
});

$(".pop-up-desk-x .close").click(function () {
  $(".pop-up-desk-x").removeClass("visible");
});
// MODAL NEXTG FIM


const toggleButton = document.querySelector(".dark-light");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  _run('/usr/share/bigbashview/bcc/shell/setbgcolor.sh "' + document.body.classList.contains('light-mode') + '"');
});



//ICON iconNumLock_text
if ($('#n0').is(":checked")) {
  $("#n0").on("change",function(){
    
    if(this.checked) {
      $("#iconNumLock_text").attr("d", "m 176.19921,47.475585 c -36.58489,0 -66.03905,29.452207 -66.03905,66.037115 v 284.97266 c 0,36.5849 29.45416,66.03906 66.03905,66.03906 h 223.60158 c 36.58489,0 66.03905,-29.45416 66.03905,-66.03906 V 113.5127 c 0,-36.584908 -29.45416,-66.037115 -66.03905,-66.037115 z M 182,94.946288 h 40 c 6.59998,0 12,5.400012 12,12.000002 v 40 c 0,6.6 -5.40002,12 -12,12 h -40 c -6.61999,0 -12,-5.4 -12,-12 v -40 c 0,-6.59999 5.38001,-12.000002 12,-12.000002 z m 86,0 h 40 c 6.59998,0 12,5.400012 12,12.000002 v 40 c 0,6.6 -5.40002,12 -12,12 h -40 c -6.61999,0 -12,-5.4 -12,-12 v -40 c 0,-6.59999 5.38001,-12.000002 12,-12.000002 z m 86,0 h 40 c 6.59998,0 12,5.400012 12,12.000002 v 40 c 0,6.6 -5.40002,12 -12,12 h -40 c -6.61999,0 -12,-5.4 -12,-12 v -40 c 0,-6.59999 5.38001,-12.000002 12,-12.000002 z M 182,180.94629 h 40 c 6.59998,0 12,5.40002 12,12 v 40 c 0,6.6 -5.40002,12 -12,12 h -40 c -6.61999,0 -12,-5.4 -12,-12 v -40 c 0,-6.59998 5.38001,-12 12,-12 z m 86,0 h 40 c 6.59998,0 12,5.40002 12,12 v 40 c 0,6.6 -5.40002,12 -12,12 h -40 c -6.61999,0 -12,-5.4 -12,-12 v -40 c 0,-6.59998 5.38001,-12 12,-12 z m 86,0 h 40 c 6.59998,0 12,5.40002 12,12 v 40 c 0,6.6 -5.40002,12 -12,12 h -40 c -6.61999,0 -12,-5.4 -12,-12 v -40 c 0,-6.59998 5.38001,-12 12,-12 z m -172,86 h 40 c 6.59998,0 12,5.40002 12,12 v 40 c 0,6.6 -5.40002,12 -12,12 h -40 c -6.61999,0 -12,-5.4 -12,-12 v -40 c 0,-6.59998 5.38001,-12 12,-12 z m 86,0 h 40 c 6.59998,0 12,5.40002 12,12 v 40 c 0,6.6 -5.40002,12 -12,12 h -40 c -6.61999,0 -12,-5.4 -12,-12 v -40 c 0,-6.59998 5.38001,-12 12,-12 z m 86,0.25 h 40 c 6.59998,0 12,5.40002 12,12 v 125.85547 c 0,6.59998 -5.40002,12 -12,12 h -40 c -6.61999,0 -12,-5.40002 -12,-12 V 279.19629 c 0,-6.59998 5.38001,-12 12,-12 z m -172,85.75 h 40 c 6.59998,0 12,5.40002 12,12 v 40 c 0,6.6 -5.40002,12 -12,12 h -40 c -6.61999,0 -12,-5.4 -12,-12 v -40 c 0,-6.59998 5.38001,-12 12,-12 z m 86,0 h 40 c 6.59998,0 12,5.40002 12,12 v 40 c 0,6.6 -5.40002,12 -12,12 h -40 c -6.61999,0 -12,-5.4 -12,-12 v -40 c 0,-6.59998 5.38001,-12 12,-12 z");      
    } else {    
      $("#iconNumLock_text").attr("d", "M512 448H64c-35.35 0-64-28.65-64-64V128c0-35.35 28.65-64 64-64h448c35.35 0 64 28.65 64 64v256C576 419.3 547.3 448 512 448zM128 180v-40C128 133.4 122.6 128 116 128h-40C69.38 128 64 133.4 64 140v40C64 186.6 69.38 192 76 192h40C122.6 192 128 186.6 128 180zM224 180v-40C224 133.4 218.6 128 212 128h-40C165.4 128 160 133.4 160 140v40C160 186.6 165.4 192 172 192h40C218.6 192 224 186.6 224 180zM320 180v-40C320 133.4 314.6 128 308 128h-40C261.4 128 256 133.4 256 140v40C256 186.6 261.4 192 268 192h40C314.6 192 320 186.6 320 180zM416 180v-40C416 133.4 410.6 128 404 128h-40C357.4 128 352 133.4 352 140v40C352 186.6 357.4 192 364 192h40C410.6 192 416 186.6 416 180zM512 180v-40C512 133.4 506.6 128 500 128h-40C453.4 128 448 133.4 448 140v40C448 186.6 453.4 192 460 192h40C506.6 192 512 186.6 512 180zM128 276v-40C128 229.4 122.6 224 116 224h-40C69.38 224 64 229.4 64 236v40C64 282.6 69.38 288 76 288h40C122.6 288 128 282.6 128 276zM224 276v-40C224 229.4 218.6 224 212 224h-40C165.4 224 160 229.4 160 236v40C160 282.6 165.4 288 172 288h40C218.6 288 224 282.6 224 276zM320 276v-40C320 229.4 314.6 224 308 224h-40C261.4 224 256 229.4 256 236v40C256 282.6 261.4 288 268 288h40C314.6 288 320 282.6 320 276zM416 276v-40C416 229.4 410.6 224 404 224h-40C357.4 224 352 229.4 352 236v40C352 282.6 357.4 288 364 288h40C410.6 288 416 282.6 416 276zM512 276v-40C512 229.4 506.6 224 500 224h-40C453.4 224 448 229.4 448 236v40C448 282.6 453.4 288 460 288h40C506.6 288 512 282.6 512 276zM128 372v-40C128 325.4 122.6 320 116 320h-40C69.38 320 64 325.4 64 332v40C64 378.6 69.38 384 76 384h40C122.6 384 128 378.6 128 372zM416 372v-40C416 325.4 410.6 320 404 320h-232C165.4 320 160 325.4 160 332v40C160 378.6 165.4 384 172 384h232C410.6 384 416 378.6 416 372zM512 372v-40C512 325.4 506.6 320 500 320h-40C453.4 320 448 325.4 448 332v40C448 378.6 453.4 384 460 384h40C506.6 384 512 378.6 512 372z");
    }
    
  });
} else {
  $("#n0").on("change",function(){
    
    if(this.checked) {
      $("#iconNumLock_text").attr("d", "m 176.19921,47.475585 c -36.58489,0 -66.03905,29.452207 -66.03905,66.037115 v 284.97266 c 0,36.5849 29.45416,66.03906 66.03905,66.03906 h 223.60158 c 36.58489,0 66.03905,-29.45416 66.03905,-66.03906 V 113.5127 c 0,-36.584908 -29.45416,-66.037115 -66.03905,-66.037115 z M 182,94.946288 h 40 c 6.59998,0 12,5.400012 12,12.000002 v 40 c 0,6.6 -5.40002,12 -12,12 h -40 c -6.61999,0 -12,-5.4 -12,-12 v -40 c 0,-6.59999 5.38001,-12.000002 12,-12.000002 z m 86,0 h 40 c 6.59998,0 12,5.400012 12,12.000002 v 40 c 0,6.6 -5.40002,12 -12,12 h -40 c -6.61999,0 -12,-5.4 -12,-12 v -40 c 0,-6.59999 5.38001,-12.000002 12,-12.000002 z m 86,0 h 40 c 6.59998,0 12,5.400012 12,12.000002 v 40 c 0,6.6 -5.40002,12 -12,12 h -40 c -6.61999,0 -12,-5.4 -12,-12 v -40 c 0,-6.59999 5.38001,-12.000002 12,-12.000002 z M 182,180.94629 h 40 c 6.59998,0 12,5.40002 12,12 v 40 c 0,6.6 -5.40002,12 -12,12 h -40 c -6.61999,0 -12,-5.4 -12,-12 v -40 c 0,-6.59998 5.38001,-12 12,-12 z m 86,0 h 40 c 6.59998,0 12,5.40002 12,12 v 40 c 0,6.6 -5.40002,12 -12,12 h -40 c -6.61999,0 -12,-5.4 -12,-12 v -40 c 0,-6.59998 5.38001,-12 12,-12 z m 86,0 h 40 c 6.59998,0 12,5.40002 12,12 v 40 c 0,6.6 -5.40002,12 -12,12 h -40 c -6.61999,0 -12,-5.4 -12,-12 v -40 c 0,-6.59998 5.38001,-12 12,-12 z m -172,86 h 40 c 6.59998,0 12,5.40002 12,12 v 40 c 0,6.6 -5.40002,12 -12,12 h -40 c -6.61999,0 -12,-5.4 -12,-12 v -40 c 0,-6.59998 5.38001,-12 12,-12 z m 86,0 h 40 c 6.59998,0 12,5.40002 12,12 v 40 c 0,6.6 -5.40002,12 -12,12 h -40 c -6.61999,0 -12,-5.4 -12,-12 v -40 c 0,-6.59998 5.38001,-12 12,-12 z m 86,0.25 h 40 c 6.59998,0 12,5.40002 12,12 v 125.85547 c 0,6.59998 -5.40002,12 -12,12 h -40 c -6.61999,0 -12,-5.40002 -12,-12 V 279.19629 c 0,-6.59998 5.38001,-12 12,-12 z m -172,85.75 h 40 c 6.59998,0 12,5.40002 12,12 v 40 c 0,6.6 -5.40002,12 -12,12 h -40 c -6.61999,0 -12,-5.4 -12,-12 v -40 c 0,-6.59998 5.38001,-12 12,-12 z m 86,0 h 40 c 6.59998,0 12,5.40002 12,12 v 40 c 0,6.6 -5.40002,12 -12,12 h -40 c -6.61999,0 -12,-5.4 -12,-12 v -40 c 0,-6.59998 5.38001,-12 12,-12 z");      
    } else {    
      $("#iconNumLock_text").attr("d", "M512 448H64c-35.35 0-64-28.65-64-64V128c0-35.35 28.65-64 64-64h448c35.35 0 64 28.65 64 64v256C576 419.3 547.3 448 512 448zM128 180v-40C128 133.4 122.6 128 116 128h-40C69.38 128 64 133.4 64 140v40C64 186.6 69.38 192 76 192h40C122.6 192 128 186.6 128 180zM224 180v-40C224 133.4 218.6 128 212 128h-40C165.4 128 160 133.4 160 140v40C160 186.6 165.4 192 172 192h40C218.6 192 224 186.6 224 180zM320 180v-40C320 133.4 314.6 128 308 128h-40C261.4 128 256 133.4 256 140v40C256 186.6 261.4 192 268 192h40C314.6 192 320 186.6 320 180zM416 180v-40C416 133.4 410.6 128 404 128h-40C357.4 128 352 133.4 352 140v40C352 186.6 357.4 192 364 192h40C410.6 192 416 186.6 416 180zM512 180v-40C512 133.4 506.6 128 500 128h-40C453.4 128 448 133.4 448 140v40C448 186.6 453.4 192 460 192h40C506.6 192 512 186.6 512 180zM128 276v-40C128 229.4 122.6 224 116 224h-40C69.38 224 64 229.4 64 236v40C64 282.6 69.38 288 76 288h40C122.6 288 128 282.6 128 276zM224 276v-40C224 229.4 218.6 224 212 224h-40C165.4 224 160 229.4 160 236v40C160 282.6 165.4 288 172 288h40C218.6 288 224 282.6 224 276zM320 276v-40C320 229.4 314.6 224 308 224h-40C261.4 224 256 229.4 256 236v40C256 282.6 261.4 288 268 288h40C314.6 288 320 282.6 320 276zM416 276v-40C416 229.4 410.6 224 404 224h-40C357.4 224 352 229.4 352 236v40C352 282.6 357.4 288 364 288h40C410.6 288 416 282.6 416 276zM512 276v-40C512 229.4 506.6 224 500 224h-40C453.4 224 448 229.4 448 236v40C448 282.6 453.4 288 460 288h40C506.6 288 512 282.6 512 276zM128 372v-40C128 325.4 122.6 320 116 320h-40C69.38 320 64 325.4 64 332v40C64 378.6 69.38 384 76 384h40C122.6 384 128 378.6 128 372zM416 372v-40C416 325.4 410.6 320 404 320h-232C165.4 320 160 325.4 160 332v40C160 378.6 165.4 384 172 384h232C410.6 384 416 378.6 416 372zM512 372v-40C512 325.4 506.6 320 500 320h-40C453.4 320 448 325.4 448 332v40C448 378.6 453.4 384 460 384h40C506.6 384 512 378.6 512 372z");
    }
    
  });
}


//ICON iconLock_the_workspace
if ($('#l0').is(":checked")) {
  $("#l0").on("change",function(){
    
    if(this.checked) {    
      $("#iconLock_the_workspace").attr("d", "M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z");
    } else {
      $("#iconLock_the_workspace").attr("d", "M352 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H288V144C288 64.47 352.5 0 432 0C511.5 0 576 64.47 576 144V192C576 209.7 561.7 224 544 224C526.3 224 512 209.7 512 192V144C512 99.82 476.2 64 432 64C387.8 64 352 99.82 352 144V192z");      
    }
    
  });
} else {
  $("#l0").on("change",function(){
    if(this.checked) {    
      $("#iconLock_the_workspace").attr("d", "M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z");
    } else {
      $("#iconLock_the_workspace").attr("d", "M352 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H288V144C288 64.47 352.5 0 432 0C511.5 0 576 64.47 576 144V192C576 209.7 561.7 224 544 224C526.3 224 512 209.7 512 192V144C512 99.82 476.2 64 432 64C387.8 64 352 99.82 352 144V192z");      
    }
    
  });
}
 
 
 
//ICON iconled_keyboard
if ($('#led0').is(":checked")) {
  $("#led0").on("change",function(){
    if(this.checked) {    
      $("#iconled_keyboard").attr("d", "M512 64H64C28.65 64 0 92.65 0 128v256c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V128C576 92.65 547.3 64 512 64zM528 384c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V128c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V384zM140 152h-24c-6.656 0-12 5.344-12 12v24c0 6.656 5.344 12 12 12h24c6.656 0 12-5.344 12-12v-24C152 157.3 146.7 152 140 152zM196 200h24c6.656 0 12-5.344 12-12v-24c0-6.656-5.344-12-12-12h-24c-6.656 0-12 5.344-12 12v24C184 194.7 189.3 200 196 200zM276 200h24c6.656 0 12-5.344 12-12v-24c0-6.656-5.344-12-12-12h-24c-6.656 0-12 5.344-12 12v24C264 194.7 269.3 200 276 200zM356 200h24c6.656 0 12-5.344 12-12v-24c0-6.656-5.344-12-12-12h-24c-6.656 0-12 5.344-12 12v24C344 194.7 349.3 200 356 200zM460 152h-24c-6.656 0-12 5.344-12 12v24c0 6.656 5.344 12 12 12h24c6.656 0 12-5.344 12-12v-24C472 157.3 466.7 152 460 152zM140 232h-24c-6.656 0-12 5.344-12 12v24c0 6.656 5.344 12 12 12h24c6.656 0 12-5.344 12-12v-24C152 237.3 146.7 232 140 232zM196 280h24c6.656 0 12-5.344 12-12v-24c0-6.656-5.344-12-12-12h-24c-6.656 0-12 5.344-12 12v24C184 274.7 189.3 280 196 280zM276 280h24c6.656 0 12-5.344 12-12v-24c0-6.656-5.344-12-12-12h-24c-6.656 0-12 5.344-12 12v24C264 274.7 269.3 280 276 280zM356 280h24c6.656 0 12-5.344 12-12v-24c0-6.656-5.344-12-12-12h-24c-6.656 0-12 5.344-12 12v24C344 274.7 349.3 280 356 280zM460 232h-24c-6.656 0-12 5.344-12 12v24c0 6.656 5.344 12 12 12h24c6.656 0 12-5.344 12-12v-24C472 237.3 466.7 232 460 232zM400 320h-224C167.1 320 160 327.1 160 336V352c0 8.875 7.125 16 16 16h224c8.875 0 16-7.125 16-16v-16C416 327.1 408.9 320 400 320z");
    } else {
      $("#iconled_keyboard").attr("d", "M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm16 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V144zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16H400c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336zM272 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM368 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V240zM464 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16z");      
    }
    
  });
} else {
  $("#led0").on("change",function(){
    if(this.checked) {    
      $("#iconled_keyboard").attr("d", "M512 64H64C28.65 64 0 92.65 0 128v256c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V128C576 92.65 547.3 64 512 64zM528 384c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V128c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V384zM140 152h-24c-6.656 0-12 5.344-12 12v24c0 6.656 5.344 12 12 12h24c6.656 0 12-5.344 12-12v-24C152 157.3 146.7 152 140 152zM196 200h24c6.656 0 12-5.344 12-12v-24c0-6.656-5.344-12-12-12h-24c-6.656 0-12 5.344-12 12v24C184 194.7 189.3 200 196 200zM276 200h24c6.656 0 12-5.344 12-12v-24c0-6.656-5.344-12-12-12h-24c-6.656 0-12 5.344-12 12v24C264 194.7 269.3 200 276 200zM356 200h24c6.656 0 12-5.344 12-12v-24c0-6.656-5.344-12-12-12h-24c-6.656 0-12 5.344-12 12v24C344 194.7 349.3 200 356 200zM460 152h-24c-6.656 0-12 5.344-12 12v24c0 6.656 5.344 12 12 12h24c6.656 0 12-5.344 12-12v-24C472 157.3 466.7 152 460 152zM140 232h-24c-6.656 0-12 5.344-12 12v24c0 6.656 5.344 12 12 12h24c6.656 0 12-5.344 12-12v-24C152 237.3 146.7 232 140 232zM196 280h24c6.656 0 12-5.344 12-12v-24c0-6.656-5.344-12-12-12h-24c-6.656 0-12 5.344-12 12v24C184 274.7 189.3 280 196 280zM276 280h24c6.656 0 12-5.344 12-12v-24c0-6.656-5.344-12-12-12h-24c-6.656 0-12 5.344-12 12v24C264 274.7 269.3 280 276 280zM356 280h24c6.656 0 12-5.344 12-12v-24c0-6.656-5.344-12-12-12h-24c-6.656 0-12 5.344-12 12v24C344 274.7 349.3 280 356 280zM460 232h-24c-6.656 0-12 5.344-12 12v24c0 6.656 5.344 12 12 12h24c6.656 0 12-5.344 12-12v-24C472 237.3 466.7 232 460 232zM400 320h-224C167.1 320 160 327.1 160 336V352c0 8.875 7.125 16 16 16h224c8.875 0 16-7.125 16-16v-16C416 327.1 408.9 320 400 320z");
    } else {
      $("#iconled_keyboard").attr("d", "M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm16 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V144zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16H400c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336zM272 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM368 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V240zM464 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16z");      
    }
    
  });
} 
 
 
//ICON iconBrowser_acceleration
if ($('#r0').is(":checked")) {
  $("#r0").on("change",function(){
    
    if(this.checked) {    
      $("#iconBrowser_acceleration").attr("d", "M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM304.7 310.4L381.3 163.1C387.4 151.3 382.8 136.8 371.1 130.7C359.3 124.6 344.8 129.2 338.7 140.9L262.1 288.3C260.1 288.1 258.1 287.1 255.1 287.1C220.7 287.1 191.1 316.7 191.1 352C191.1 387.3 220.7 416 255.1 416C291.3 416 320 387.3 320 352C320 336.1 314.2 321.6 304.7 310.4L304.7 310.4z");
    } else {
      $("#iconBrowser_acceleration").attr("d", "M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM280 292.7V88C280 74.75 269.3 64 256 64C242.7 64 232 74.75 232 88V292.7C208.5 302.1 192 325.1 192 352C192 387.3 220.7 416 256 416C291.3 416 320 387.3 320 352C320 325.1 303.5 302.1 280 292.7z");      
    }
    
  });
} else {
  $("#r0").on("change",function(){
    if(this.checked) {    
      $("#iconBrowser_acceleration").attr("d", "M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM304.7 310.4L381.3 163.1C387.4 151.3 382.8 136.8 371.1 130.7C359.3 124.6 344.8 129.2 338.7 140.9L262.1 288.3C260.1 288.1 258.1 287.1 255.1 287.1C220.7 287.1 191.1 316.7 191.1 352C191.1 387.3 220.7 416 255.1 416C291.3 416 320 387.3 320 352C320 336.1 314.2 321.6 304.7 310.4L304.7 310.4z");
    } else {
      $("#iconBrowser_acceleration").attr("d", "M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM280 292.7V88C280 74.75 269.3 64 256 64C242.7 64 232 74.75 232 88V292.7C208.5 302.1 192 325.1 192 352C192 387.3 220.7 416 256 416C291.3 416 320 387.3 320 352C320 325.1 303.5 302.1 280 292.7z");      
    }
    
  });
}


//ICON iconPerformance
if ($('#p0').is(":checked")) {
  $("#p0").on("change",function(){
    
    if(this.checked) {    
      $("#iconPerformance").attr("d", "M 189.08008 28.507812 A 160.40764 160.37256 0 0 0 28.671875 188.88086 A 160.40764 160.37256 0 0 0 189.08008 349.25391 A 160.40764 160.37256 0 0 0 349.48828 188.88086 A 160.40764 160.37256 0 0 0 189.08008 28.507812 z M 189.08008 40.511719 A 148.40028 148.36783 0 0 1 337.48047 188.88086 A 148.40028 148.36783 0 0 1 189.08008 337.25 A 148.40028 148.36783 0 0 1 40.681641 188.88086 A 148.40028 148.36783 0 0 1 189.08008 40.511719 z M 189.08203 69.164062 C 188.06097 69.164062 187.0471 69.179188 186.03711 69.205078 C 166.72921 69.693408 148.54708 74.824278 132.57617 83.529297 C 130.79299 84.50228 129.03628 85.516155 127.30859 86.574219 C 94.138519 106.9328 71.703423 143.14719 70.660156 184.58203 C 70.630676 185.59201 70.617188 186.60937 70.617188 187.62305 C 70.617188 188.64412 70.630374 189.65799 70.660156 190.66797 C 71.148501 210.08316 76.335095 228.3603 85.128906 244.38672 C 86.098189 246.1699 87.123985 247.92619 88.189453 249.64648 C 92.887875 257.26754 98.425504 264.31955 104.67773 270.66797 L 131.55859 243.78711 C 117.40786 229.29602 108.6875 209.47624 108.6875 187.62305 C 108.6875 143.22857 144.68014 107.23633 189.08203 107.23633 C 206.72884 107.23633 223.0553 112.92387 236.31445 122.57227 C 237.33466 123.38272 238.35327 124.24786 239.37305 125.10742 L 266.44531 98.035156 C 261.55485 93.806719 256.33921 89.94439 250.80273 86.548828 C 249.07506 85.487064 247.31443 84.472986 245.53125 83.5 C 229.57512 74.817186 211.41615 69.693408 192.12305 69.205078 C 191.11305 69.178999 190.0957 69.164063 189.08203 69.164062 z M 279.55273 111.31445 L 252.50195 138.36523 C 252.85432 138.79446 253.20635 139.16742 253.55859 139.61133 C 257.97213 145.52381 261.58585 152.06493 264.25 159.07422 L 301.125 149.19336 C 298.92756 142.80778 296.20979 136.66139 293.00195 130.81836 C 292.02899 129.03888 291.01252 127.28432 289.94336 125.55664 C 286.84482 120.5379 283.34336 115.80059 279.55273 111.31445 z M 305.73828 167.27344 L 268.78906 177.17383 C 269.2331 180.59483 269.4707 184.08107 269.4707 187.62305 C 269.4707 192.06871 269.0903 196.4243 268.39648 200.67383 L 305.28711 210.55859 C 306.58518 203.96898 307.35655 197.19171 307.50781 190.26172 C 307.53351 189.38493 307.54297 188.50354 307.54297 187.62305 C 307.54297 186.4725 307.52368 185.31914 307.49023 184.17969 C 307.32473 178.4271 306.69932 172.79366 305.73828 167.27344 z M 188.72852 171.85352 C 178.19577 171.90269 170.24565 181.36285 172.01562 191.74414 C 173.39188 199.80479 180.46075 205.80238 188.63867 205.84766 C 191.45057 205.86429 194.08966 205.20216 196.41016 204.03125 L 246.01367 239.4082 C 247.0984 240.18135 248.60114 239.98371 249.44922 238.95703 C 250.29993 237.92983 250.20825 236.42041 249.24219 235.5 L 205.12305 193.48438 C 205.80417 191.07648 205.96931 188.46549 205.49023 185.80273 C 204.0422 177.75392 196.90502 171.81784 188.72852 171.85352 z M 188.85938 182.72656 C 190.28772 182.74659 191.61824 183.26435 192.66211 184.13086 C 193.88724 185.13799 194.72574 186.618 194.87305 188.32227 C 195.16411 191.68919 192.66104 194.66232 189.29688 194.95312 C 187.63145 195.09712 186.06663 194.55949 184.87109 193.57227 C 183.6457 192.56235 182.80944 191.08124 182.66211 189.37695 C 182.37131 186.0128 184.87799 183.03882 188.24219 182.74805 C 188.44968 182.73028 188.65532 182.72392 188.85938 182.72656 z M 263.27734 218.61719 C 259.33177 228.05434 253.64112 236.58025 246.60352 243.78711 L 273.47656 270.66406 C 279.89526 264.14917 285.56396 256.89357 290.34375 249.04688 C 291.39812 247.3155 292.40706 245.55445 293.36523 243.76758 C 296.00604 238.88468 298.26762 233.77594 300.21094 228.51367 L 263.27734 218.61719 z");
    } else {
      $("#iconPerformance").attr("d", "M 188.97656 28.603516 C 100.38546 28.603198 28.568095 100.40483 28.568359 188.97656 C 28.568095 277.5483 100.38546 349.34993 188.97656 349.34961 C 277.56767 349.3499 349.38503 277.54829 349.38477 188.97656 C 349.38503 100.40485 277.56767 28.603221 188.97656 28.603516 z M 188.97656 40.607422 C 270.93634 40.607358 337.37767 107.03472 337.37695 188.97656 C 337.37767 270.91841 270.93634 337.34576 188.97656 337.3457 C 107.01755 337.3447 40.577407 270.91766 40.578125 188.97656 C 40.577407 107.03548 107.01755 40.608423 188.97656 40.607422 z M 188.97852 69.259766 C 187.95744 69.259766 186.9436 69.274891 185.93359 69.300781 C 166.62569 69.789111 148.44354 74.919981 132.47266 83.625 C 130.68948 84.597983 128.93278 85.611858 127.20508 86.669922 C 94.035036 107.0285 71.599904 143.24289 70.556641 184.67773 C 70.526404 185.68771 70.513672 186.70507 70.513672 187.71875 C 70.513672 188.73982 70.524893 189.75369 70.556641 190.76367 C 71.044993 210.17886 76.231602 228.456 85.025391 244.48242 C 85.994688 246.2656 87.020489 248.0219 88.085938 249.74219 C 92.784381 257.36325 98.321972 264.41525 104.57422 270.76367 L 131.45508 243.88281 C 117.30438 229.39173 108.58398 209.57194 108.58398 187.71875 C 108.58398 143.32427 144.57663 107.33203 188.97852 107.33203 C 206.62532 107.33203 222.95179 113.01957 236.21094 122.66797 C 237.23115 123.47842 238.24978 124.34358 239.26953 125.20312 L 266.3418 98.130859 C 261.45135 93.902422 256.23574 90.040093 250.69922 86.644531 C 248.97156 85.582767 247.21092 84.56869 245.42773 83.595703 C 229.47159 74.912889 211.31262 69.789111 192.01953 69.300781 C 191.00953 69.274703 189.99218 69.259766 188.97852 69.259766 z M 188.61133 108.41602 C 187.27757 108.42017 186.17633 109.4576 186.08789 110.78906 L 182.0625 171.58008 C 179.77679 172.59858 177.66444 174.14394 175.92578 176.2168 C 170.67027 182.48259 170.68206 191.76551 175.94531 198.02344 C 182.72696 206.08264 195.08273 206.13145 201.92383 198.125 C 207.23437 191.90677 207.31658 182.63891 202.11523 176.32812 C 200.32759 174.15748 198.12932 172.55232 195.74414 171.51953 L 191.15625 110.76562 C 191.05571 109.43738 189.94492 108.4101 188.61328 108.41602 L 188.61133 108.41602 z M 279.44922 111.41016 L 252.39844 138.46094 C 252.75069 138.89017 253.10283 139.26312 253.45508 139.70703 C 257.86862 145.61951 261.48233 152.16063 264.14648 159.16992 L 301.02148 149.28906 C 298.82403 142.90348 296.10631 136.75709 292.89844 130.91406 C 291.92551 129.13458 290.909 127.38002 289.83984 125.65234 C 286.74131 120.6336 283.23982 115.89629 279.44922 111.41016 z M 305.63281 167.36914 L 268.68555 177.26953 C 269.12957 180.69053 269.36719 184.17677 269.36719 187.71875 C 269.36719 192.16441 268.98678 196.52 268.29297 200.76953 L 305.18359 210.6543 C 306.48167 204.06468 307.25304 197.28741 307.4043 190.35742 C 307.43075 189.48063 307.4375 188.59924 307.4375 187.71875 C 307.4375 186.5682 307.4184 185.41485 307.38477 184.27539 C 307.21922 178.5228 306.59383 172.88936 305.63281 167.36914 z M 189.00195 180.98633 C 190.57083 180.99334 192.13552 181.59786 193.32422 182.79688 C 194.50113 183.98394 195.09051 185.53156 195.09766 187.08203 C 195.10522 188.66994 194.50388 190.2585 193.28906 191.46289 C 190.89099 193.84013 187.00236 193.81988 184.625 191.42188 C 183.45202 190.23873 182.86052 188.69107 182.85742 187.14062 C 182.84608 185.5547 183.44538 183.96412 184.66016 182.75977 C 185.86014 181.57011 187.43308 180.97931 189.00195 180.98633 z M 263.17383 218.71289 C 259.22827 228.15004 253.53763 236.67595 246.5 243.88281 L 273.37305 270.75977 C 279.79174 264.24488 285.46045 256.98927 290.24023 249.14258 C 291.29461 247.4112 292.30357 245.65015 293.26172 243.86328 C 295.90255 238.98038 298.1641 233.87164 300.10742 228.60938 L 263.17383 218.71289 z");      
    }
    
  });
} else {
  $("#p0").on("change",function(){
    if(this.checked) {    
      $("#iconPerformance").attr("d", "M 189.08008 28.507812 A 160.40764 160.37256 0 0 0 28.671875 188.88086 A 160.40764 160.37256 0 0 0 189.08008 349.25391 A 160.40764 160.37256 0 0 0 349.48828 188.88086 A 160.40764 160.37256 0 0 0 189.08008 28.507812 z M 189.08008 40.511719 A 148.40028 148.36783 0 0 1 337.48047 188.88086 A 148.40028 148.36783 0 0 1 189.08008 337.25 A 148.40028 148.36783 0 0 1 40.681641 188.88086 A 148.40028 148.36783 0 0 1 189.08008 40.511719 z M 189.08203 69.164062 C 188.06097 69.164062 187.0471 69.179188 186.03711 69.205078 C 166.72921 69.693408 148.54708 74.824278 132.57617 83.529297 C 130.79299 84.50228 129.03628 85.516155 127.30859 86.574219 C 94.138519 106.9328 71.703423 143.14719 70.660156 184.58203 C 70.630676 185.59201 70.617188 186.60937 70.617188 187.62305 C 70.617188 188.64412 70.630374 189.65799 70.660156 190.66797 C 71.148501 210.08316 76.335095 228.3603 85.128906 244.38672 C 86.098189 246.1699 87.123985 247.92619 88.189453 249.64648 C 92.887875 257.26754 98.425504 264.31955 104.67773 270.66797 L 131.55859 243.78711 C 117.40786 229.29602 108.6875 209.47624 108.6875 187.62305 C 108.6875 143.22857 144.68014 107.23633 189.08203 107.23633 C 206.72884 107.23633 223.0553 112.92387 236.31445 122.57227 C 237.33466 123.38272 238.35327 124.24786 239.37305 125.10742 L 266.44531 98.035156 C 261.55485 93.806719 256.33921 89.94439 250.80273 86.548828 C 249.07506 85.487064 247.31443 84.472986 245.53125 83.5 C 229.57512 74.817186 211.41615 69.693408 192.12305 69.205078 C 191.11305 69.178999 190.0957 69.164063 189.08203 69.164062 z M 279.55273 111.31445 L 252.50195 138.36523 C 252.85432 138.79446 253.20635 139.16742 253.55859 139.61133 C 257.97213 145.52381 261.58585 152.06493 264.25 159.07422 L 301.125 149.19336 C 298.92756 142.80778 296.20979 136.66139 293.00195 130.81836 C 292.02899 129.03888 291.01252 127.28432 289.94336 125.55664 C 286.84482 120.5379 283.34336 115.80059 279.55273 111.31445 z M 305.73828 167.27344 L 268.78906 177.17383 C 269.2331 180.59483 269.4707 184.08107 269.4707 187.62305 C 269.4707 192.06871 269.0903 196.4243 268.39648 200.67383 L 305.28711 210.55859 C 306.58518 203.96898 307.35655 197.19171 307.50781 190.26172 C 307.53351 189.38493 307.54297 188.50354 307.54297 187.62305 C 307.54297 186.4725 307.52368 185.31914 307.49023 184.17969 C 307.32473 178.4271 306.69932 172.79366 305.73828 167.27344 z M 188.72852 171.85352 C 178.19577 171.90269 170.24565 181.36285 172.01562 191.74414 C 173.39188 199.80479 180.46075 205.80238 188.63867 205.84766 C 191.45057 205.86429 194.08966 205.20216 196.41016 204.03125 L 246.01367 239.4082 C 247.0984 240.18135 248.60114 239.98371 249.44922 238.95703 C 250.29993 237.92983 250.20825 236.42041 249.24219 235.5 L 205.12305 193.48438 C 205.80417 191.07648 205.96931 188.46549 205.49023 185.80273 C 204.0422 177.75392 196.90502 171.81784 188.72852 171.85352 z M 188.85938 182.72656 C 190.28772 182.74659 191.61824 183.26435 192.66211 184.13086 C 193.88724 185.13799 194.72574 186.618 194.87305 188.32227 C 195.16411 191.68919 192.66104 194.66232 189.29688 194.95312 C 187.63145 195.09712 186.06663 194.55949 184.87109 193.57227 C 183.6457 192.56235 182.80944 191.08124 182.66211 189.37695 C 182.37131 186.0128 184.87799 183.03882 188.24219 182.74805 C 188.44968 182.73028 188.65532 182.72392 188.85938 182.72656 z M 263.27734 218.61719 C 259.33177 228.05434 253.64112 236.58025 246.60352 243.78711 L 273.47656 270.66406 C 279.89526 264.14917 285.56396 256.89357 290.34375 249.04688 C 291.39812 247.3155 292.40706 245.55445 293.36523 243.76758 C 296.00604 238.88468 298.26762 233.77594 300.21094 228.51367 L 263.27734 218.61719 z");
    } else {
      $("#iconPerformance").attr("d", "M 188.97656 28.603516 C 100.38546 28.603198 28.568095 100.40483 28.568359 188.97656 C 28.568095 277.5483 100.38546 349.34993 188.97656 349.34961 C 277.56767 349.3499 349.38503 277.54829 349.38477 188.97656 C 349.38503 100.40485 277.56767 28.603221 188.97656 28.603516 z M 188.97656 40.607422 C 270.93634 40.607358 337.37767 107.03472 337.37695 188.97656 C 337.37767 270.91841 270.93634 337.34576 188.97656 337.3457 C 107.01755 337.3447 40.577407 270.91766 40.578125 188.97656 C 40.577407 107.03548 107.01755 40.608423 188.97656 40.607422 z M 188.97852 69.259766 C 187.95744 69.259766 186.9436 69.274891 185.93359 69.300781 C 166.62569 69.789111 148.44354 74.919981 132.47266 83.625 C 130.68948 84.597983 128.93278 85.611858 127.20508 86.669922 C 94.035036 107.0285 71.599904 143.24289 70.556641 184.67773 C 70.526404 185.68771 70.513672 186.70507 70.513672 187.71875 C 70.513672 188.73982 70.524893 189.75369 70.556641 190.76367 C 71.044993 210.17886 76.231602 228.456 85.025391 244.48242 C 85.994688 246.2656 87.020489 248.0219 88.085938 249.74219 C 92.784381 257.36325 98.321972 264.41525 104.57422 270.76367 L 131.45508 243.88281 C 117.30438 229.39173 108.58398 209.57194 108.58398 187.71875 C 108.58398 143.32427 144.57663 107.33203 188.97852 107.33203 C 206.62532 107.33203 222.95179 113.01957 236.21094 122.66797 C 237.23115 123.47842 238.24978 124.34358 239.26953 125.20312 L 266.3418 98.130859 C 261.45135 93.902422 256.23574 90.040093 250.69922 86.644531 C 248.97156 85.582767 247.21092 84.56869 245.42773 83.595703 C 229.47159 74.912889 211.31262 69.789111 192.01953 69.300781 C 191.00953 69.274703 189.99218 69.259766 188.97852 69.259766 z M 188.61133 108.41602 C 187.27757 108.42017 186.17633 109.4576 186.08789 110.78906 L 182.0625 171.58008 C 179.77679 172.59858 177.66444 174.14394 175.92578 176.2168 C 170.67027 182.48259 170.68206 191.76551 175.94531 198.02344 C 182.72696 206.08264 195.08273 206.13145 201.92383 198.125 C 207.23437 191.90677 207.31658 182.63891 202.11523 176.32812 C 200.32759 174.15748 198.12932 172.55232 195.74414 171.51953 L 191.15625 110.76562 C 191.05571 109.43738 189.94492 108.4101 188.61328 108.41602 L 188.61133 108.41602 z M 279.44922 111.41016 L 252.39844 138.46094 C 252.75069 138.89017 253.10283 139.26312 253.45508 139.70703 C 257.86862 145.61951 261.48233 152.16063 264.14648 159.16992 L 301.02148 149.28906 C 298.82403 142.90348 296.10631 136.75709 292.89844 130.91406 C 291.92551 129.13458 290.909 127.38002 289.83984 125.65234 C 286.74131 120.6336 283.23982 115.89629 279.44922 111.41016 z M 305.63281 167.36914 L 268.68555 177.26953 C 269.12957 180.69053 269.36719 184.17677 269.36719 187.71875 C 269.36719 192.16441 268.98678 196.52 268.29297 200.76953 L 305.18359 210.6543 C 306.48167 204.06468 307.25304 197.28741 307.4043 190.35742 C 307.43075 189.48063 307.4375 188.59924 307.4375 187.71875 C 307.4375 186.5682 307.4184 185.41485 307.38477 184.27539 C 307.21922 178.5228 306.59383 172.88936 305.63281 167.36914 z M 189.00195 180.98633 C 190.57083 180.99334 192.13552 181.59786 193.32422 182.79688 C 194.50113 183.98394 195.09051 185.53156 195.09766 187.08203 C 195.10522 188.66994 194.50388 190.2585 193.28906 191.46289 C 190.89099 193.84013 187.00236 193.81988 184.625 191.42188 C 183.45202 190.23873 182.86052 188.69107 182.85742 187.14062 C 182.84608 185.5547 183.44538 183.96412 184.66016 182.75977 C 185.86014 181.57011 187.43308 180.97931 189.00195 180.98633 z M 263.17383 218.71289 C 259.22827 228.15004 253.53763 236.67595 246.5 243.88281 L 273.37305 270.75977 C 279.79174 264.24488 285.46045 256.98927 290.24023 249.14258 C 291.29461 247.4112 292.30357 245.65015 293.26172 243.86328 C 295.90255 238.98038 298.1641 233.87164 300.10742 228.60938 L 263.17383 218.71289 z");      
    }
    
  });
}





