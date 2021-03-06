$(function(){


$('#lang').click(function(){
  $('.lang').toggleClass('active');
})



  var swiper1 = new Swiper('.main_slide', {
    centeredSlides: true,
		slidesPerView: 'auto',
    spaceBetween: 150,
    autoplay:true,
    loop: true,
    pagination: {
      el: '.main_wrap .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.main_wrap .btn.next',
      prevEl: '.main_wrap .btn.prev',
    },
    on:{
      slideChangeTransitionEnd:function(){
        idx = this.realIndex+1; //swiper의 this
        $('#mainWrap').removeClass('bg1 bg2 bg3 bg4 bg5 bg6');
        $('#mainWrap').addClass('bg'+idx);
      }
    }
  });
  




    $('.pro_tab li').mouseover(function() {
      idx = $(this).index()+1;
      $('.pro_tab li').removeClass('active');
      $(this).addClass('active');

      $(".pro_item").removeClass('active');
      $('#proItem'+idx).addClass('active');

    })





  // 앨범 슬라이드
  var mySwiper = new Swiper('.album_slide', {
      slidesPerView: 'auto', 
      loop: true, 
      pagination: {
          el: '.album-swiper-pagination',
          clickable : true, 
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },

      centeredSlides: true,

      spaceBetween: 80,
  })



 
  var mySwiper = new Swiper('.video_slide', {
    direction:'vertical',
    slidesPerView: 3,
    spaceBetween: 10,
    simulateTouch: false,
    loop: true,
    navigation: {
      nextEl: '.video_thumb .btn.next',
      prevEl: '.video_thumb .btn.prev',
  },
  })


  $('.video_slide .swiper-slide').click(function(){
    src= $(this).data('iframe');

    $('.video_slide .swiper-slide').removeClass('active');
    $(this).addClass('active');

    $('.video_con iframe').remove();
    $('.video_con').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+src+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  })




  var offset = $( '.header .gnb' ).offset();
  console.log(offset);

  $( window ).scroll( function() {
    if ( $( document ).scrollTop() > offset.top ) {
      $( '.header .gnb' ).addClass( 'fixed' );
    }else {
      $( '.header .gnb' ).removeClass( 'fixed' );
    }
  });



  $('.gnb_menu>ul>li').hover(function(){ 
    $('.header').addClass('on') 
    if($(this).find('ul').length) {
      $('.header').addClass('hov')
    }else {
      $('.header').removeClass('hov')
      $('.depth2').removeClass('show') 
    }
    $('.depth2').removeClass('show') 
    $(this).find('.depth2').addClass('show')
  })

  $('.header').mouseleave(function(){
   $('.header').removeClass('hov on') 
    $('.depth2').removeClass('show')
  })









  var mySwiper = new Swiper('.bp_banner', {
    centeredSlides: true,
		slidesPerView: 'auto',
    spaceBetween: 150,
    // autoplay:true,
    loop: true,
    pagination: {
      el: '.banner .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.banner .btn.next',
      prevEl: '.banner .btn.prev',
    }
  });

});
