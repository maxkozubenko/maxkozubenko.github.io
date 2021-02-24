"use strict";

$(document).ready(function(){
  $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 1158,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
});

let flag = true;
$( ".header_category" ).click(function() {
  if(flag == true)
  {
    $(".header_dropcontent").hide();
    $(".header_secondmenu").hide();
    flag = false;
  }else {
    $(".header_dropcontent").show();
    flag = true;
  }
});

let flag2 = true;

$(".header_secondmenu").hide();

$(document).ready(function() {
  //прикрепляем клик по заголовкам acc-head
    $('.header_dropitem').on('click', f_acc);
});

function f_acc(){
//скрываем все кроме того, что должны открыть
  $('.header_secondmenu').not($(this).next()).slideUp(1000);
// открываем или скрываем блок под заголовоком, по которому кликнули
    $(this).next().slideToggle(1000);
}