var slider = (function () {
  var getSlick = function (cssSelect) {
    $(cssSelect).slick({
      autoplay: true,
      dots: true,
      infinite: true,
      fade: true,
      cssEase: 'linear',
      mobileFirst: true,
      lazyLoad: 'progressive'
    });
  };

  return {
    getSlick: getSlick
  };
}());


slider.getSlick('#img-wrapper');
