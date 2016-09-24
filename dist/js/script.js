$(document).ready(function () {
    // Инициализация
    var controller = new ScrollMagic.Controller();

    
    // Определение движения панелей слайдера
    var wipeAnimation = new TimelineMax()
        // Анимация - шаг 1
        .to("#slideContainer", 1, {
            x: "-10%", ease: Linear.easeNone
        })
    
        // анимация - шаг 2 
        .to("#slideContainer", 1, {
            x: "-20%", ease: Linear.easeNone
        })
   
    
        .to("#slideContainer", 1, {
            x: "-30%", ease: Linear.easeNone
        })


        .to("#slideContainer", 1, {
            x: "-40%", ease: Linear.easeNone
        })
    
       .to("#slideContainer", 1, {
            x: "-50%", ease: Linear.easeNone
        })
    
       .to("#slideContainer", 1, {
            x: "-60%", ease: Linear.easeNone
        })
       .to("#slideContainer", 1, {
            x: "-70%", ease: Linear.easeNone
        })
    
   .to("#slideContainer", 1, {
            x: "-80%", ease: Linear.easeNone
        });
  

    // Создание сцены в pin и настройка анимации
    new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "600%"
        })
        .setPin("#pinContainer")
    //.addIndicators() // инидикаторы триггеров (нужен плагин)
        .setTween(wipeAnimation)
        .addTo(controller);
    
    // Эффекты ссылок
    var $panel = $('.panel');
    var $slideContainer = $('#slideContainer'); 
    $panel.mouseenter(function(){
        $(this).siblings().fadeTo(300, 0.8);
        $(this).fadeTo (300, 1);
    });
    $slideContainer.mouseleave (function (){
        $(this).find($panel).fadeTo (300, 1);
    });
    
    
}); // /document.ready