// フォント源ノ角ゴシック
(function(d) {
    var config = {
      kitId: 'bfe4vuf',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

//  ローディング 
$(function(){
    //ローディングエリアを取得
    var loading = $('#loading');
    //ローディングエリアを隠す処理
    var inHidden = function(){
      loading.fadeOut(1000); //1000msかけてフェードアウト
    };
    //1000ms後にloadingFunc開始
    setTimeout(inHidden,1000);
  });
  
  $(function(){
      $(window).scroll(function (){
          $('.fadein').each(function(){
              var elemPos = $(this).offset().top;
              var scroll = $(window).scrollTop();
              var windowHeight = $(window).height();
              if (scroll > elemPos - windowHeight + 200){
                  $(this).addClass('scrollin');
              }
          });
      });
  });