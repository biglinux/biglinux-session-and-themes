$(function () {
  var tab = $("li label");
  tab.on("click", function (event) {
    //event.preventDefault();
    //tab.removeClass("active");
    //$(this).addClass("active");
    tab_content = $(this).attr("id");
    //alert(tab_content);
    $('div[id$="tab-content"]').removeClass("active");
    $(tab_content).addClass("active");
  });
});



/* LOGIN - MAIN.JS - dp 2017 */
// LOGIN TABS
$(function () {
  var tab = $(".tabs h3 a");
  tab.on("click", function (event) {
    event.preventDefault();
    tab.removeClass("active");
    $(this).addClass("active");
    tab_content = $(this).attr("href");
    
    alert(tab_content);
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
// I'll optimize when time permits.
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


const toggleButton = document.querySelector(".dark-light");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  _run('/usr/share/bigbashview/bcc/shell/setbgcolor.sh "' + document.body.classList.contains('light-mode') + '"');
});
