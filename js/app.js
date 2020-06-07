$(function(){
  // スクロールしたらトップボタンを表示
  var appeartop = false;
  var scrltop = false;
  var scrlmerit = false;
  var scrlinterview = false;
  var scrlcourse = false;
  var pagetop = $('#js-page_top');
  var pagemerit = $('#js-page_merit');
  var pageinterview = $('#js-page_interview');
  var pagecourse = $('#js-page_course');

  $(window).scroll(function(){
    //スマホ用トップページリンク
    if ($(this).scrollTop() > 0) {  //スクロールしたら
      if (appeartop == false) {
        appeartop = true;
        pagetop.stop().animate({
          'opacity': '0.8'
        }, 500); //0.5秒かけて現れる
      }
    } else {                      //トップに戻ったら
      if (appeartop) {
        appeartop = false;
        pagetop.stop().animate({
          'opacity': '0'
        }, 500); //0.5秒かけて隠れる
      }
    }

    //PC用ページリンク
    //ページトップ
    if ($(this).scrollTop() >= 0 && $(this).scrollTop() < pagemerit.offset().top - 300) {
      if (scrltop == false) {
        scrltop = true;
        $('.top_jump').css('background-color', '#e4008f');
      }
    } else {
      if (scrltop) {
        scrltop = false;
        $('.top_jump').css('background-color', '#ffffff');
      }
    }
    //メリット
    if ($(this).scrollTop() >= pagemerit.offset().top - 300 && $(this).scrollTop() < pageinterview.offset().top - 300) {
      if (scrlmerit == false) {
        scrlmerit = true;
        $('.merit_jump').css('background-color', '#e4008f');
      }
    } else {
      if (scrlmerit) {
        scrlmerit = false;
        $('.merit_jump').css('background-color', '#ffffff');
      }
    }
    //お客様の声
    if ($(this).scrollTop() >= pageinterview.offset().top - 300 && $(this).scrollTop() < pagecourse.offset().top - 300) {
      if (scrlinterview == false) {
        scrlinterview = true;
        $('.interview_jump').css('background-color', '#e4008f');
      }
    } else {
      if (scrlinterview) {
        scrlinterview = false;
        $('.interview_jump').css('background-color', '#ffffff');
      }
    }
    //コース紹介
    if ($(this).scrollTop() >= pagecourse.offset().top - 300) {
      if (scrlcourse == false) {
        scrlcourse = true;
        $('.course_jump').css('background-color', '#e4008f');
      }
    } else {
      if (scrlcourse) {
        scrlcourse = false;
        $('.course_jump').css('background-color', '#ffffff');
      }
    }
  });

  // #で始まるa要素をクリックした場合に処理
  $('a[href^="#"]').click(function(){
    // スクロールの速度（ミリ秒）
    var speed = 500;
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    var href= $(this).attr("href");
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    var position = target.offset().top - 70;
    // スムーススクロール linear（等速） or swing（変速）
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  // 自動スライド
  var mySwiper = new Swiper ('.swiper-container', {
      // オプションパラメータ(一部のみ抜粋)
      loop: true,
      speed: 500,
      slidesPerView: 2,
      spaceBetween: 5,
      centeredSlides : true,
      direction: 'horizontal',
      effect: 'slide',

      // スライダーの自動再生
      autoplay: {
        delay: 3000,
        stopOnLast: false,
        disableOnInteraction: false
      },

      breakpoints: {
        600: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 10
        }
      }
    });

  // アコーディオン
  $('#js-menu_link').each(function(){
    $('.plan_up_contents').on('click',function(){
      // アコーディオンの状態を取得
      var onFlag = $(this).hasClass('on');

      // アコーディオンの初期化
      $('.plan_up_contents').removeClass('on');
      $(".plan_down_contents").slideUp();
      // $(".plan_up_text").css("text-decoration", "none");

      // アコーディオンを開いていなければ開く
      if(!(onFlag)){
        $(this).addClass('on');
        $("+.plan_down_contents",this).slideDown();
        // $(".plan_up_text",this).css("text-decoration", "underline");
      }
      return false;
    });

  });
});
