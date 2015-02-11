$(function(){

  $("#q1").animate( { opacity: 'show',}, { duration: 1500, easing: 'swing', } );


  //---------------         Q1からQ2へスクロールstart           -----------------------

  //enterkey をおされたときの処理
  $('#name').keypress( function ( e ) {
    if ( e.which == 13 ) {
      //Q2を表示させる
      $("#q2").animate( { opacity: 'show',}, { duration: 1500, easing: 'swing', } );
      //Q2へスクロール
      $("html,body").animate({ scrollTop: $('#q2').offset().top }, 'slow', 'swing', function(){
        //$("#q2").animate( { opacity: 'show',}, { duration: 1500, easing: 'swing', } )
        //Q2にフォーカスをあてる
        $("input[type=text]#sex").focus();
      });
      //Q1を半透明にする
      $("#q1").animate( { opacity: '0.5',}, { duration: 1000, easing: 'swing', } );
      return false;
    }
  } );
  //次へをおされたとき
  $("#q1_next_button").click(function(){
    $("#q2").animate( { opacity: 'show',}, { duration: 1500, easing: 'swing', } );
    $("html,body").animate({ scrollTop: $('#q2').offset().top }, 'slow', 'swing', function(){
      $("input[type=text]#sex").focus();
    });
    $("#q1").animate( { opacity: '0.5',}, { duration: 1500, easing: 'swing', } );
  });

  //---------------         Q1からQ2へスクロールend           -----------------------



  //---------------         Q2からQ3へスクロールstart           -----------------------

  //enterkey をおされたときの処理
  $('#sex').keypress( function ( e ) {
    if ( e.which == 13 ) {
      //Q3へスクロール
      $("#q3").animate( { opacity: 'show',}, { duration: 1500, easing: 'swing', } );
      $("html,body").animate({ scrollTop: $('#q3').offset().top }, 'slow', 'swing', function(){
        //$("#q2").animate( { opacity: 'show',}, { duration: 1500, easing: 'swing', } )
        $("input[type=text]#pref").focus();
      });
      return false;
    }
  } );
  //次へをおされたとき
  $("#q2_next_button").click(function(){
    $("#q3").animate( { opacity: 'show',}, { duration: 1500, easing: 'swing', } );
    $("html,body").animate({ scrollTop: $('#q3').offset().top }, 'slow', 'swing', function(){
      $("input[type=text]#pref").focus();
    });

  });
  //---------------         Q2からQ3へスクロールend           -----------------------




  //---------------         Q3からQ4へスクロールstart           -----------------------

  //enterkey をおされたときの処理
  $('#pref').keypress( function ( e ) {
    if ( e.which == 13 ) {
      //Q4へスクロール
      $("#q4").animate( { opacity: 'show',}, { duration: 1500, easing: 'swing', } );
      $("html,body").animate({ scrollTop: $('#q4').offset().top }, 'slow', 'swing', function(){
        //$("#q2").animate( { opacity: 'show',}, { duration: 1500, easing: 'swing', } )
        $("input[type=text]#birth").focus();
      });
      return false;
    }
  } );
  //次へをおされたとき
  $("#q3_next_button").click(function(){
    $("#q4").animate( { opacity: 'show',}, { duration: 1500, easing: 'swing', } );
    $("html,body").animate({ scrollTop: $('#q4').offset().top }, 'slow', 'swing', function(){
      $("input[type=text]#birth").focus();
    });

  });
  //---------------         Q3からQ4へスクロールend           -----------------------



    //---------------         Q4からQ5へスクロールstart           -----------------------

    //enterkey をおされたときの処理
    $('#birth').keypress( function ( e ) {
      if ( e.which == 13 ) {
        //Q5へスクロール
        $("#q5").animate( { opacity: 'show',}, { duration: 1500, easing: 'swing', } );
        $("html,body").animate({ scrollTop: $('#q5').offset().top }, 'slow', 'swing', function(){
          //$("#q2").animate( { opacity: 'show',}, { duration: 1500, easing: 'swing', } )
          $("input[type=text]#food").focus();
        });
        return false;
      }
    } );
    //次へをおされたとき
    $("#q4_next_button").click(function(){
      $("#q5").animate( { opacity: 'show',}, { duration: 1500, easing: 'swing', } );
      $("html,body").animate({ scrollTop: $('#q5').offset().top }, 'slow', 'swing', function(){
        $("input[type=text]#food").focus();
      });

    });
    //---------------         Q4からQ5へスクロールend           -----------------------



    //---------------         Q5からQ6へスクロールstart           -----------------------

    //enterkey をおされたときの処理
    $('#food').keypress( function ( e ) {
      if ( e.which == 13 ) {
        //Q6へスクロール
        $("#q6").animate( { opacity: 'show',}, { duration: 1500, easing: 'swing', } );
        $("html,body").animate({ scrollTop: $('#q6').offset().top }, 'slow', 'swing', function(){
          //$("#q2").animate( { opacity: 'show',}, { duration: 1500, easing: 'swing', } )
          $("input[type=text]#goodbad").focus();
        });
        return false;
      }
    } );
    //次へをおされたとき
    $("#q5_next_button").click(function(){
      $("#q6").animate( { opacity: 'show',}, { duration: 1500, easing: 'swing', } );
      $("html,body").animate({ scrollTop: $('#q6').offset().top }, 'slow', 'swing', function(){
        $("input[type=text]#goodbad").focus();
      });

    });
    //---------------         Q5からQ6へスクロールend           -----------------------

    //---------------         Q6からQ7へスクロールstart           -----------------------

    //enterkey をおされたときの処理
    $('#goodbad').keypress( function ( e ) {
      if ( e.which == 13 ) {
        //Q7へスクロール
        $("#q7").animate( { opacity: 'show',}, { duration: 1500, easing: 'swing', } );
        $("html,body").animate({ scrollTop: $('#q7').offset().top }, 'slow', 'swing', function(){
          //$("#q2").animate( { opacity: 'show',}, { duration: 1500, easing: 'swing', } )
          $("input[type=text]#family").focus();
        });
        return false;
      }
    } );
    //次へをおされたとき
    $("#q6_next_button").click(function(){
      $("#q7").animate( { opacity: 'show',}, { duration: 1500, easing: 'swing', } );
      $("html,body").animate({ scrollTop: $('#q7').offset().top }, 'slow', 'swing', function(){
        $("input[type=text]#family").focus();
      });

    });
    //---------------         Q6からQ7へスクロールend           -----------------------


    //---------------         Q7から確認へスクロールstart           -----------------------

    //enterkey をおされたときの処理
    $('#family').keypress( function ( e ) {
      if ( e.which == 13 ) {
        //Q7へスクロール
        $("#confirm").animate( { opacity: 'show',}, { duration: 1500, easing: 'swing', } );
        $("html,body").animate({ scrollTop: $('#confirm').offset().top }, 'slow', 'swing', function(){
          //$("#q2").animate( { opacity: 'show',}, { duration: 1500, easing: 'swing', } )
          //$("input[type=text]#family").focus();
        });
        return false;
      }
    } );
    //次へをおされたとき
    $("#q7_next_button").click(function(){
      $("#confirm").animate( { opacity: 'show',}, { duration: 1500, easing: 'swing', } );
      $("html,body").animate({ scrollTop: $('#confirm').offset().top }, 'slow', 'swing', function(){
        //$("input[type=text]#family").focus();
      });

    });
    //---------------         Q7から確認へスクロールend           -----------------------



});



/*
$(function(){
  var elements = "input[type=text]";
  $(elements).keypress(function(e) {
    var c = e.which ? e.which : e.keyCode;
    if (c == 13) {
      var index = $(elements).index(this);
      $(elements + ":gt(" + index + "):first").focus();
      e.preventDefault();
    }
  });
});

$( '#name' ).keypress( function ( e ) {
  if ( e.which == 13 )
  {
    // ここに処理を記述
    return false;
  }
} );
*/
