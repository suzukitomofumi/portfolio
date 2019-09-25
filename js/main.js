$(document).ready(function(){
// 実績のポップアップ部分 

    $('.popup-modal').magnificPopup({
      type: 'inline',
      preloader: false
    });
    //閉じるリンクの設定
    $(document).on('click', '.popup-modal-dismiss', function (e) { 
      e.preventDefault();
      $.magnificPopup.close();
    })
// 実績のポップアップ終了



// タイプライター
  $(".type").t({
    speed : 50, // スピード デフォルト75 数値が低くなるごとに速くなる
    speed_vary : true, // スピードがランダムに変化 デフォルト false
    blink : true, // カーソルが点滅 デフォルト false
    mistype: 20, // 打ち間違いの演出 英数字のみ 打ち間違いの確率を数値で指定 デフォルト false
  })
// タイプライター終了
  


// ハンバーグメニュー
  $(".offcanvas-right").hiraku({
    btn:"#offcanvas-btn-right",
    direction:"right"
  })
    $('a[href^="#"]').click(function() {

      // 画面のロックを解除する
      $('body').css('position', 'static');
      $('body').css('overflow', 'scroll');
      $('body').css('overflow-y', 'scroll');

      // メニューを閉じる
      $('.js-hiraku-offcanvas-open').hide();
      $('.js-hiraku-offcanvas-body-right').removeAttr('style');

      // ヘッダーの表示を切り替える
      $('header').removeAttr('style');
      $('.hiraku-open-btn').removeAttr('style');
      $('.open-btn').show();
      $('.close-btn').hide();

      // classを初期化する
      $('body').removeClass('js-hiraku-offcanvas-body-right');
      $('.hiraku-open-btn').removeClass('js-hiraku-offcanvas-btn-active');
      $('.hiraku-open-btn').attr({'aria-expanded' : 'false'});
      $('.js-hiraku-offcanvas').removeClass('js-hiraku-offcanvas-open');
      $('.js-hiraku-offcanvas-sidebar').removeClass('active');

      // styleを初期化
      $('html').removeAttr('style');
      $('body').removeAttr('style');
      $('header').removeAttr('style');
      $('.hiraku-open-btn').removeAttr('style');
      $('.close-btn').removeAttr('style');
      $('.js-hiraku-offcanvas').removeAttr('style');
    });
    // ハンバーグメニュー終了
    // floating
    jQuery(window).on("scroll", function($) {
      if (jQuery(this).scrollTop() > 100) {
        jQuery('.floating').show();
      } else {
        jQuery('.floating').hide();
      }
    });
    
    jQuery('.floating').click(function () {
      jQuery('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
    // floating終了
});