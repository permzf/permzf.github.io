<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/TEP.ico");
         document.title = '您不要我了么?QwQ';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '您又回来啦!^_^';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
