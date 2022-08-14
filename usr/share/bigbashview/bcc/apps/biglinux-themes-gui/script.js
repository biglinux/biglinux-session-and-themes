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






