  //loadされたとき
  $(window).on('load', function(){
    console.log('loadイベントが発生しました');
    });


  $(function(){
  //scrpllされたとき
   $(window).on('scroll', () => {
    console.log('scrollイベントが発生しました');
    });
  });