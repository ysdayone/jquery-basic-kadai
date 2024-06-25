$(function(){
  //id属性がchange-colorのボタンがクリックされたら
  $('#change-color').on('click',function(){
    if ($('#target').css('color','red'));
  });

  //id属性がchange-textのボタンがクリックされたら
  $('#change-text').on('click',function(){
    if($('#target').text() === 'こんにちは'){
      $('#target').text('こんばんわ');
    }else if($('#target').text() === 'こんばんわ'){
      $('#target').text('おはようございます');
    }else if($('#target').text() === 'おはようございます'){
      $('#target').text('こんにちは');
    }
  });

  //id属性がfade-outのボタンがクリックされたら
  $('#fade-out').on('click',function(){
    $('#target').fadeOut(1000);
  });

  //id属性がfade-inのボタンがクリックされたら
  $('#fade-in').on('click',function(){
    $('#target').fadeIn(1000);
  });
});