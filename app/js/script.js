$(document).ready(function () {
    // Инициализация
    var controller = new ScrollMagic.Controller();

    
    // Определение движения панелей слайдера
    var wipeAnimation = new TimelineMax()
        // Анимация к 2 панели
        .to("#slideContainer", 1, {
            x: "-20%", 
        })
       
        // анимация к 3 панели
        
        .to("#slideContainer", 1, {
            x: "-40%"
        })
   
        // анимация к 4 панели
        .to("#slideContainer", 1, {
            x: "-60%"
        })

       // анимация к 5 панели
        .to("#slideContainer", 1, {
            x: "-80%"
        })
  

    // Создание сцены в pin и настройка анимации
    new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "450%"
        })
        .on('start', function () {
        $('.wrapper').addClass('in')
    })
        .on('leave', function () {
        $('.wrapper').removeClass('in')
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