var slider = (function () {
  var getSlick = function (cssSelect) {
    $(cssSelect).slick({
      arrows: false,
      adaptiveHeight: true,
      dots: true,
      autoplay: true,
      infinite: true,
      fade: true,
      lazyLoad: 'progressive',
      cssEase: 'linear',

      responsive: [{
        breakpoint: 600,
        settings: {
          arrows: false,
          autoplay: false,
          adaptiveHeight: true,
          dots: true
        }
      }]
    });
  };

  return {
    getSlick: getSlick
  };
}());


slider.getSlick('#img-wrapper');
