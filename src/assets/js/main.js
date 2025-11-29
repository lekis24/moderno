$(function() {



  var mixer = mixitup('.product__inner-box');

  $(".rate-star").rateYo({
    rating: 3.5,
    spacing: "3px",
    readOnly: "True",
    starWidth: "12px",
    numStars: 5,
    minValue: 0,
    maxValue: 5,
    normalFill: 'grey',
    ratedFill: 'orange',
  });
  $('.product__slider-inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });
});