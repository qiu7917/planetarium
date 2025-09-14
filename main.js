$(function () {
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $('.toggle-btn').on('click', function () {
        if ($('header').hasClass('open')) {
            $('header').removeClass('open');
        } else {
            $('header').addClass('open');
        }
    });

    $('nav a').on('click', function () {
        $('header').removeClass('open');
    });

    $('.mask').on('click', function () {
        $('header').removeClass('open');
    });
});

/*=================================================
ローディング
===================================================*/

$(window).on("load", function () {
    setTimeout(function () {
        $(".loading-area").removeClass("loaded");
    }, 2500);
});



/*=================================================
スムーススクロール
===================================================*/

$(function () {
    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");

        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, 800, "swing");
        return false;
    });
});

/*=================================================
slick
===================================================*/
$(".slide-items").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "15%",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                centerPadding: 0,
                slidesToShow: 1,
            },
        },
    ],
});

/*=================================================
フェードイン
===================================================*/
$(window).on('load scroll', function () {
    $(".fadein").each(function () {
        let scroll = $(window).scrollTop();
        let target = $(this).offset().top;
        let windowHeight = $(window).height();

        if (scroll > target - windowHeight + 200) {
            $(this).addClass("show");
        }
    });
});


/*=================================================
ズームイン
===================================================*/
$(window).on('load scroll', function () {
    $(".zoomin").each(function () {
        let scroll = $(window).scrollTop();
        let target = $(this).offset().top;
        let windowHeight = $(window).height();

        console.log("scroll:", scroll, "target:", target);

        if (scroll > target - windowHeight + 200) {
            $(this).addClass("zoomshow");
            console.log("zoomshow added to", this);
        }
    });
});



