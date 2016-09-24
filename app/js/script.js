$(document).ready(function () {
    // Инициализация
    var controller = new ScrollMagic.Controller();

    
    // Определение движения панелей слайдера
    var wipeAnimation = new TimelineMax()
        // Анимация к 2 панели
        .to("#slideContainer", 1, {
            x: "-25%"
        })
        .to("#slideContainer", 0.5, {
            z: 0
        }) 
        // анимация к 3 панели
        
        .to("#slideContainer", 1, {
            x: "-50%"
        })
        .to("#slideContainer", 0.5, {
            z: 0
        })
        // анимация к 4 панели
        .to("#slideContainer", 1, {
            x: "-75%"
        })
        .to("#slideContainer", 0.5, {
            z: 0
        });

    // Создание сцены в pin и настройка анимации
    new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "400%"
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