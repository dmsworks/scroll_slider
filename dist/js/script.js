$(document).ready(function () {
    // Инициализация
    var controller = new ScrollMagic.Controller();


    // Определение движения панелей слайдера
    var wipeAnimation = new TimelineMax()
        // Анимация - шаг 1
    .to("#slideContainer", 1, {
            x: "-10%",
            ease: Linear.easeNone
        })

    // анимация - шаг 2 
    .to("#slideContainer", 1, {
        x: "-20%",
        ease: Linear.easeNone
    })


    .to("#slideContainer", 1, {
        x: "-30%",
        ease: Linear.easeNone
    })


    .to("#slideContainer", 1, {
        x: "-40%",
        ease: Linear.easeNone
    })

    .to("#slideContainer", 1, {
        x: "-50%",
        ease: Linear.easeNone
    })

    .to("#slideContainer", 1, {
            x: "-60%",
            ease: Linear.easeNone
        })
        .to("#slideContainer", 1, {
            x: "-70%",
            ease: Linear.easeNone
        })

    .to("#slideContainer", 1, {
        x: "-80%",
        ease: Linear.easeNone
    })
    
    .to("#slideContainer", 1, {
        x: "-90%",
        ease: Linear.easeNone
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
    var $panel = $('#slideContainer .panel');
    var $slideContainer = $('#slideContainer');
    $panel.mouseenter(function () {
        $(this).siblings().fadeTo(300, 0.8);
        $(this).fadeTo(300, 1);
    });
    $slideContainer.mouseleave(function () {
        $(this).find($panel).fadeTo(300, 1);
    });

    // расчет ширины контейнера
    var $numSlides = $('#slideContainer .panel').length;
    var $panelWidth = $('#pinContainer').attr('data-panel-width');
    var $panelHeight = $('#pinContainer').attr('data-panel-height');
    var $panelMargin = $('#slideContainer .panel').outerWidth(true) - $('#slideContainer .panel').width();

    var $containerWidth = ($panelWidth * $numSlides) + ($panelMargin * $numSlides);
    console.log ($containerWidth);
    /* для размещения 5-и панелей с шириной в 910px и отступом в 20px*5 -> 910*5 + 20*5 = 4650px*/
    $('#slideContainer').css('width', '' + $containerWidth + 'px');
    $('#pinContainer').css('height', '' + $panelHeight + 'px');


    // адаптивное изменение размеров слайдов
    var $windowWidth = $(window).width();

    function calcSize() {
        $windowWidth = $(window).width();
        if ($windowWidth < 960 && $windowWidth > 600) {
            $panelWidth = $('#pinContainer').attr('data-panel-width')*0.6;
            $panelHeight = $('#pinContainer').attr('data-panel-height')*0.7;   
            
            $('#slideContainer .panel').css('width', '' + $panelWidth + 'px');
            $('#slideContainer .panel').css('height', '' + $panelHeight + 'px');
            $containerWidth = ($panelWidth * $numSlides) + ($panelMargin * $numSlides); $('#slideContainer').css('width', '' + $containerWidth + 'px'); $('#pinContainer').css('height', '' + $panelHeight + 'px');
        }
         if ($windowWidth < 600) {
            $panelWidth = $('#pinContainer').attr('data-panel-width')*0.4;
            $panelHeight = $('#pinContainer').attr('data-panel-height')*0.5;
             
            $('#slideContainer .panel').css('width', '' + $panelWidth + 'px');
            $('#slideContainer .panel').css('height', '' + $panelHeight + 'px');
            $containerWidth = ($panelWidth * $numSlides) + ($panelMargin * $numSlides); $('#slideContainer').css('width', '' + $containerWidth + 'px'); $('#pinContainer').css('height', '' + $panelHeight + 'px'); 
        }
        if ($windowWidth > 960) {
            $panelWidth = $('#pinContainer').attr('data-panel-width');
            $panelHeight = $('#pinContainer').attr('data-panel-height');
        
            $('#slideContainer .panel').css('width', '' + $panelWidth + 'px');
            $('#slideContainer .panel').css('height', '' + $panelHeight + 'px');
            $containerWidth = ($panelWidth * $numSlides) + ($panelMargin * $numSlides); $('#slideContainer').css('width', '' + $containerWidth + 'px'); $('#pinContainer').css('height', '' + $panelHeight + 'px'); 
        }
    }
    calcSize();
    $(window).resize(function (){
         calcSize();
    });

}); // /document.ready