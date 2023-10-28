window.addEventListener('load', function () {

    const mediaQuery = window.matchMedia("(max-width: 1150px)");
    const mediaQuery750 = window.matchMedia("(max-width: 750px)");





    //anim first screan 
    function firstScrean() {
        let bgImage = document.querySelector('.front-sec__bg-img')

        if (bgImage != null) {
            let container = document.querySelector('.front-sec')
            let heightContainer = container.offsetHeight
            let windowHeight = window.innerHeight
            let maxScrollValue = heightContainer - windowHeight
            console.log(window.scrollY)

            window.addEventListener("scroll", function (event) {
                let skrillValue = window.scrollY
                let currentSkrollValue = skrillValue / +maxScrollValue

                if (currentSkrollValue <= 1) {
                    if (mediaQuery750.matches) {
                        currentSkrollValue = currentSkrollValue / 2
                        bgImage.style.transform = `scale(${1.5 - currentSkrollValue})`
                    }
                    else {
                        bgImage.style.transform = `scale(${2 - currentSkrollValue})`
                    }
                }
                else {
                    if (mediaQuery750.matches) {
                        currentSkrollValue = currentSkrollValue / 2
                        bgImage.style.transform = `scale(${1})`
                    }
                    else {
                        bgImage.style.transform = `scale(${1})`
                    }
                }



            });

        }
    }
    firstScrean()


    //flex sec change
    let flexRow1 = 0
    let flexRow2 = 1
    let flexRow3 = null

    function flexFunction() {
        let lensBtn = document.querySelectorAll('.filtr-row2-v1 .flexibility-sec__btn')
        let closeBtn = document.querySelectorAll('.filtr-row2-v2 .flexibility-sec__btn')
        let angleBtn = document.querySelectorAll('.filtr-row2-v3 .flexibility-sec__btn')

        if (lensBtn.length > 0 && closeBtn.length > 0 && angleBtn.length > 0) {

            for (let i = 0; i < lensBtn.length; i++) {
                lensBtn[i].addEventListener('click', function () {
                    for (let x = 0; x < lensBtn.length; x++) {
                        lensBtn[x].classList.remove('flexibility-sec__btn_active')
                    }
                    lensBtn[i].classList.add('flexibility-sec__btn_active')
                    flexRow1 = i

                    imageFlexChange()
                })
            }

            for (let i = 0; i < closeBtn.length; i++) {
                closeBtn[i].addEventListener('click', function () {
                    for (let x = 0; x < closeBtn.length; x++) {
                        closeBtn[x].classList.remove('flexibility-sec__btn_active')
                    }
                    closeBtn[i].classList.add('flexibility-sec__btn_active')
                    flexRow2 = i

                    imageFlexChange()
                })
            }

            for (let i = 0; i < angleBtn.length; i++) {
                angleBtn[i].addEventListener('click', function () {

                    if (angleBtn[i].classList.contains('flexibility-sec__btn_active')) {
                        angleBtn[i].classList.remove('flexibility-sec__btn_active')
                        flexRow3 = null
                    }
                    else {

                        for (let x = 0; x < angleBtn.length; x++) {
                            angleBtn[x].classList.remove('flexibility-sec__btn_active')
                        }

                        angleBtn[i].classList.add('flexibility-sec__btn_active')
                        flexRow3 = i
                    }

                    imageFlexChange()
                })
            }
        }
    }

    flexFunction()


    //flext image current
    function imageFlexChange() {
        let img = document.querySelector('.flexibility-sec__img')

        if (img != null) {

            if (flexRow1 == 0 && flexRow2 == 1 && flexRow3 == null) {
                img.src = 'img/_src/flex/anamorphic, close-up 2.jpg'
            }

            else if (flexRow1 == 0 && flexRow2 == 1 && flexRow3 == 0) {
                img.src = 'img/_src/flex/anamorphic, close-up, high angle 2.jpg'
            }

            else if (flexRow1 == 0 && flexRow2 == 1 && flexRow3 == 1) {
                img.src = 'img/_src/flex/anamorphic, close-up, low angle 2.jpg'
            }

            else if (flexRow1 == 0 && flexRow2 == 0 && flexRow3 == null) {
                img.src = 'img/_src/flex/anamorphic, extreme close-up 2.jpg'
            }

            else if (flexRow1 == 0 && flexRow2 == 0 && flexRow3 == 0) {
                img.src = 'img/_src/flex/anamorphic, extreme close-up, high angle 2.jpg'
            }

            else if (flexRow1 == 0 && flexRow2 == 0 && flexRow3 == 1) {
                img.src = 'img/_src/flex/anamorphic, extreme close-up, low angle 2.jpg'
            }

            else if (flexRow1 == 0 && flexRow2 == 2 && flexRow3 == null) {
                img.src = 'img/_src/flex/anamorphic, medium 2.jpg'
            }

            else if (flexRow1 == 0 && flexRow2 == 2 && flexRow3 == 0) {
                img.src = 'img/_src/flex/anamorphic, medium, high angle 2.jpg'
            }

            else if (flexRow1 == 0 && flexRow2 == 2 && flexRow3 == 1) {
                img.src = 'img/_src/flex/anamorphic, medium, low angle 2.jpg'
            }

            else if (flexRow1 == 1 && flexRow2 == 1 && flexRow3 == null) {
                img.src = 'img/_src/flex/spherical, close-up 2.jpg'
            }

            else if (flexRow1 == 1 && flexRow2 == 1 && flexRow3 == 0) {
                img.src = 'img/_src/flex/spherical, close-up, high angle 2.jpg'
            }

            else if (flexRow1 == 1 && flexRow2 == 1 && flexRow3 == 1) {
                img.src = 'img/_src/flex/spherical, close-up, low angle 2.jpg'
            }

            else if (flexRow1 == 1 && flexRow2 == 0 && flexRow3 == null) {
                img.src = 'img/_src/flex/spherical, extreme close-up 2.jpg'
            }

            else if (flexRow1 == 1 && flexRow2 == 0 && flexRow3 == 0) {
                img.src = 'img/_src/flex/spherical, extreme close-up, high angle 2.jpg'
            }

            else if (flexRow1 == 1 && flexRow2 == 0 && flexRow3 == 1) {
                img.src = 'img/_src/flex/spherical, extreme close-up, low angle 2.jpg'
            }

            else if (flexRow1 == 1 && flexRow2 == 2 && flexRow3 == null) {
                img.src = 'img/_src/flex/spherical, medium 2.jpg'
            }

            else if (flexRow1 == 1 && flexRow2 == 2 && flexRow3 == 0) {
                img.src = 'img/_src/flex/spherical, medium, high angle 2.jpg'
            }

            else if (flexRow1 == 1 && flexRow2 == 2 && flexRow3 == 1) {
                img.src = 'img/_src/flex/spherical, medium, low angle 2.jpg'
            }

            // console.log(flexRow1, flexRow2, flexRow3)
        }
    }
    imageFlexChange()



    //fixed change image anim

    function fixedChangeImage() {
        let imgBody = document.querySelector('.previews-body')
        if (imgBody != null) {

            let allTextElements = document.querySelectorAll('.previews-sec__element')
            let allImages = document.querySelectorAll('.previews-body .previews-sec__fixed-image-wrapper')
            let imageContainer = document.querySelector('.previews-body .previews-sec__fixed-container')
            let windowHeight = allTextElements[0].offsetHeight
            let imageContainerHeight = imageContainer.offsetHeight
            let distanceToBlock = allTextElements[0].getBoundingClientRect().top + window.scrollY;
            let distanceToBlock2 = allTextElements[1].getBoundingClientRect().top + window.scrollY;
            let cofPaddingValue = (windowHeight - imageContainerHeight) / 2

            imageContainer.style.top = `calc(50% - ${imageContainerHeight / 2}px)`
            imgBody.style.height = `calc(100% - ${cofPaddingValue + cofPaddingValue}px)`

            window.addEventListener("scroll", function (event) {
                let skrillValue = window.scrollY

                let vwStart = +distanceToBlock + +cofPaddingValue
                let vw1 = window.scrollY - vwStart
                let currentTranslateY_1 = imageContainerHeight - vw1


                let vwStart2 = +distanceToBlock2 + +cofPaddingValue
                let vw2 = window.scrollY - vwStart2
                let currentTranslateY_2 = imageContainerHeight - vw2

                if (currentTranslateY_1 <= 0) {
                    currentTranslateY_1 = 0
                }
                else if (currentTranslateY_1 >= imageContainerHeight) {
                    currentTranslateY_1 = imageContainerHeight
                }
                else {
                    currentTranslateY_1 = imageContainerHeight - vw1
                }


                if (currentTranslateY_2 <= 0) {
                    currentTranslateY_2 = 0
                }
                else if (currentTranslateY_2 >= imageContainerHeight) {
                    currentTranslateY_2 = imageContainerHeight
                }
                else {
                    currentTranslateY_2 = imageContainerHeight - vw2
                }

                if (skrillValue >= vwStart) {
                    allImages[1].querySelector('.fixed-image-wrapper__box').style.transform = `translateY(${currentTranslateY_1}px)`
                    allImages[0].style.zIndex = 2
                    allImages[1].style.zIndex = 3
                    allImages[2].style.zIndex = 1
                }
                else {
                    allImages[1].querySelector('.fixed-image-wrapper__box').style.transform = `translateY(${imageContainerHeight}px)`
                    allImages[1].querySelector('.fixed-image-wrapper__box').style.transform = `translateY(${currentTranslateY_1}px)`

                }

                if (skrillValue >= vwStart2) {
                    allImages[2].querySelector('.fixed-image-wrapper__box').style.transform = `translateY(${currentTranslateY_2}px)`
                    allImages[0].style.zIndex = 2
                    allImages[1].style.zIndex = 3
                    allImages[2].style.zIndex = 5
                }

                else {
                    allImages[2].querySelector('.fixed-image-wrapper__box').style.transform = `translateY(${imageContainerHeight}px)`

                }
            });

        }
    }

    if (mediaQuery.matches) {

    }
    else {
        fixedChangeImage()
    }





    //filtr script
    function filtrScript() {
        let allBodyElements = document.querySelectorAll('.swipe-anim-container');

        allBodyElements.forEach(function (element) {
            let controlElement = element.querySelector('.swipe-anim-container__line-controll');
            let rect = element.getBoundingClientRect();
            let distanceFromLeftElement = rect.x;
            let controlElementWidth = element.clientWidth;
            let activeElement = element.querySelector('.swipe-anim-container__active');

            let isDragging = false;
            let startX;

            let movableElement = controlElement;

            movableElement.addEventListener("mouseenter", function () {
                document.addEventListener("mousemove", onMouseMove);
            });

            document.addEventListener("mouseleave", function () {
                document.removeEventListener("mousemove", onMouseMove);
            });

            function onMouseMove(event) {
                if (isDragging) {
                    var deltaX = event.clientX - startX;
                    var newLeft = movableElement.offsetLeft + deltaX;
                    movableElement.style.left = newLeft + "px";

                    let currentWidth = startX - distanceFromLeftElement;
                    activeElement.style.width = currentWidth + 'px';

                    if (currentWidth >= controlElementWidth) {
                        currentWidth = controlElementWidth - 15;
                        movableElement.style.left = currentWidth + "px";
                    } else if (currentWidth <= 10) {
                        currentWidth = 10;
                        movableElement.style.left = 8 + "px";
                    } else {
                        activeElement.style.width = currentWidth + 'px';
                        startX = event.clientX;
                        movableElement.style.left = newLeft + "px";
                    }
                }
            }

            movableElement.addEventListener("mousedown", function (event) {
                isDragging = true;
                startX = event.clientX;
                distanceFromLeft = startX - movableElement.getBoundingClientRect().left;
                event.preventDefault();
            });

            document.addEventListener("mouseup", function () {
                isDragging = false;
                document.removeEventListener("mousemove", onMouseMove);
            });
        });
    }


    function filtrScriptMob() {
        let allBodyElements = document.querySelectorAll('.swipe-anim-container');

        allBodyElements.forEach(function (element) {
            let controlElement = element.querySelector('.swipe-anim-container__line-controll');
            let rect = element.getBoundingClientRect();
            let distanceFromLeftElement = rect.x;
            let controlElementWidth = element.clientWidth;
            let activeElement = element.querySelector('.swipe-anim-container__active');

            let isDragging = false;
            let startX;

            let movableElement = controlElement;

            let bodyContainerWidth = element.offsetWidth
            let oneProcent = bodyContainerWidth / 100

            console.log(bodyContainerWidth, oneProcent)

            movableElement.addEventListener("touchstart", function (event) {
                isDragging = true;
                startX = event.touches[0].clientX;
                distanceFromLeftElement = startX - movableElement.getBoundingClientRect().left;
                event.preventDefault();
            });

            document.addEventListener("touchend", function (event) {
                isDragging = false;
            });

            document.addEventListener("touchmove", function (event) {
                if (isDragging) {
                    var deltaX = event.touches[0].clientX - startX;
                    var newLeft = movableElement.offsetLeft + deltaX;
                    let currentWidth = startX - distanceFromLeftElement;


                    if (currentWidth >= controlElementWidth - 40) {
                        currentWidth = controlElementWidth - 50;
                        movableElement.style.left = currentWidth - 2 + "px";
                    } else if (currentWidth <= 30) {
                        currentWidth = 30;
                        movableElement.style.left = 28 + "px";
                    } else {
                        let currentProcent = newLeft / oneProcent
                        activeElement.style.width = currentProcent + '%';
                        startX = event.touches[0].clientX;
                        movableElement.style.left = newLeft + "px";
                    }
                }


            });



            // document.addEventListener("touchend", function (event) {
            //     let leftSize = controlElement.style.left
            //     let startX = event;

            //     console.log(leftSize, startX.target.offsetLeft)
            //     activeElement.style.width = leftSize + 'px';
            // });
        });
    }


    if (mediaQuery.matches) {
        filtrScriptMob()
    }
    else {
        filtrScript()
    }





    //sliders
    var swiper1 = new Swiper(".swiper-img", {
        spaceBetween: 0,

        thumbs: {
            swiper: swiper2,
        },
        navigation: {
            nextEl: ".xs2 .swiper-button-next",
            prevEl: ".xs2 .swiper-button-prev",
        },

        breakpoints: {

            1150: {
                navigation: {
                    nextEl: ".xs1 .swiper-button-next",
                    prevEl: ".xs1 .swiper-button-prev",
                },
            },

            750: {
                navigation: {
                    nextEl: ".xs2 .swiper-button-next",
                    prevEl: ".xs2 .swiper-button-prev",
                },
            },


        },
    });


    //slider
    var swiper = new Swiper(".swiper-nav", {
        spaceBetween: 20,
        slidesPerView: 2,
        freeMode: true,

        watchSlidesProgress: true,
        thumbs: {
            // swiper: swiper,
            swiper: swiper3
        },

        breakpoints: {
            // when window width is >= 320px
            320: {
                spaceBetween: 14,
                slidesPerView: 3,
            },

            410: {
                spaceBetween: 20,
                slidesPerView: 3,
            },

            550: {
                spaceBetween: 20,
                slidesPerView: 4,
            },
            // when window width is >= 480px
            750: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            980: {
                spaceBetween: 20,
                slidesPerView: 4,
            },
            // when window width is >= 1150
            1150: {
                spaceBetween: 20,
                slidesPerView: 7,
            }
        }
    });
    var swiper2 = new Swiper(".swiper-img", {
        spaceBetween: 0,
        navigation: {
            nextEl: ".xs2 .swiper-button-next",
            prevEl: ".xs2 .swiper-button-prev",
        },

        thumbs: {
            swiper: swiper
        },

        breakpoints: {
            250: {
                simulateTouch: false

            },
            750: {


            },
            1150: {
                navigation: {
                    nextEl: ".xs1 .swiper-button-next",
                    prevEl: ".xs1 .swiper-button-prev",
                },
            }
        },
    });

    if (mediaQuery750.matches) {
        var swiper3 = new Swiper(".swiper-text", {
            spaceBetween: 0,
            thumbs: {
                swiper: swiper
            },
            navigation: {
                nextEl: ".swiper-text__controll-wrapper .swiper-button-next",
                prevEl: ".swiper-text__controll-wrapper .swiper-button-prev",
            },
        });
        swiper3.controller.control = swiper2;
        swiper2.controller.control = swiper3;
    }
    else {
    }



    if (mediaQuery.matches) {
        var swipe4 = new Swiper(".swiper-price", {
            slidesPerView: 1,
            centeredSlides: true,
            slidesPerView: "auto",
            initialSlide: 1,
            autoHeight: false,
            spaceBetween: 32,
        });
    }
    else if (mediaQuery750.matches) {

    }
    else {

    }


    //mob meny
    function mobMeny() {
        let burger = document.querySelector('.header__burger')
        let header = document.querySelector('.header')
        let mobMeny = document.querySelector('.mob-meny')

        if (burger != null) {
            burger.addEventListener('click', function () {
                mobMeny.classList.toggle('mob-meny_active')
                header.classList.toggle('header_active')
            })
        }
    }
    mobMeny()





}, false);


