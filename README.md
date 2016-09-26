# scroll_slider
Для подключения слайдера к странице необходимо добавить следующие библиотеки js:
1. jQuery
2. Scroll Magic
3. TweenMax
4. animation.gsap (идет в комплекте с Scroll Magic в папке plugins)
5. slider_main.js (основной скрипт с настройкой слайдера, с эффектами слайдов и адаптивностью)

HTML:

```
    <div class="scroll-slider">
        <div id="pinContainer" data-panel-width="910" data-panel-height="680">
            <div class="slider-wrapper"><!-- Создает отступ от края окна -->
                <div id="slideContainer">

                    <section class="panel n1">
                        <a href="#" target="_blank"><img src="img/img_1.jpg"></a>
                    </section>
                    <section class="panel n2">
                        <a href="#" target="_blank"><img src="img/img_2.jpg"></a>
                    </section>
                    <section class="panel n3">
                        <a href="#" target="_blank"><img src="img/img_3.jpg"></a>
                    </section>
                    <section class="panel n4">
                        <a href="#" target="_blank"><img src="img/img_4.jpg"></a>
                    </section>
                    <section class="panel n5">
                        <a href="#" target="_blank"><img src="img/img_5.jpg"></a>
                    </section>
          
                </div>
            </div>
        </div>
    </div>
```
