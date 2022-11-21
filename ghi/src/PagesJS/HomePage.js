import $ from "jquery";

//Based on the Scroller function from @sallar
var $content = $("header .content"),
  $blur = $("header .overlay"),
  wHeight = $(window).height();

$(window).on("resize", function () {
  wHeight = $(window).height();
});

window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

function Scroller() {
  this.latestKnownScrollY = 0;
  this.ticking = false;
}

Scroller.prototype = {
  init: function () {
    window.addEventListener("scroll", this.onScroll.bind(this), false);
    $blur.css(
      "background-image",
      $("header:first-of-type").css("background-image")
    );
  },

  onScroll: function () {
    this.latestKnownScrollY = window.scrollY;
    this.requestTick();
  },

  requestTick: function () {
    if (!this.ticking) {
      window.requestAnimFrame(this.update.bind(this));
    }
    this.ticking = true;
  },

  update: function () {
    var currentScrollY = this.latestKnownScrollY;
    this.ticking = false;

    var slowScroll = currentScrollY / 2,
      blurScroll = currentScrollY * 2,
      opaScroll = 1.4 - currentScrollY / 400;
    if (currentScrollY > wHeight) $("nav").css("position", "fixed");
    else $("nav").css("position", "absolute");

    $content.css({
      transform: "translateY(" + slowScroll + "px)",
      "-moz-transform": "translateY(" + slowScroll + "px)",
      "-webkit-transform": "translateY(" + slowScroll + "px)",
      opacity: opaScroll,
    });

    $blur.css({
      opacity: blurScroll / wHeight,
    });
  },
};

var scroller = new Scroller();
scroller.init();

// nightmode

$(".theme-switch").on("click", () => {
  $("section").toggleClass("light-theme");
});

function HomePage() {
  return (
    <div>
      <header>
        <div className="content">
          <hgroup>
            <h1>LOGO</h1>
          </hgroup>
        </div>
        <div className="overlay" />
      </header>
      <section className="site">
        <div className="container">
          <div className="theme-switch">
            <div className="switch" />
          </div>
          <blockquote>
            “I invented nothing new. I simply assembled the discoveries of other
            men behind whom were centuries of work. Had I worked fifty or ten or
            even five years before, I would have failed. So it is with every new
            thing. Progress happens when all the factors that make for it are
            ready, and then it is inevitable. To teach that a comparatively few
            men are responsible for the greatest forward steps of mankind is the
            worst sort of nonsense.” ― Henry Ford
          </blockquote>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
