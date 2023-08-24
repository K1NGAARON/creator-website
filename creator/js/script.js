// STICKY LARGE MENU
$(document).scroll(function () {
    const header = $('.header');
    const logo = $('.header .logo');

    if ($(this).scrollTop() > header.height()) {
        $(logo).attr("src","/branding/logo/logo-black.png");
        header.addClass('active');
    } else {
        $(logo).attr("src","/branding/logo/logo-black.png");
        header.removeClass('active');
    }
});

// SMALL MENU
$("#menu-toggle").click(function() {
    $(".small-menu-wrapper").toggle("active");
});

function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
};

// CREATE LOGO SECTION
const target = document.querySelector('.logos > .row > .wrapper');
const logos = [
    {
        img: '/img/clients/cfl-logo.png',
        client: 'Cashflow For Life'
    },
    {
        img: '/img/clients/fa-logo.png',
        client: 'Freedom Academy'
    },
    {
        img: '/img/clients/sunday-logo.png',
        client: 'Sunday'
    },
    {
        img: '/img/clients/klimatherm-logo.png',
        client: 'Klimatherm'
    },
    {
        img: '/img/clients/tvh.png',
        client: 'TVH',
    },
    {
        img: '/img/clients/lansweeper.png',
        client: 'Lansweeper',
    },
    {
        img: '/img/clients/kordekor-logo.png',
        client: 'Kordekor',
    },
];


function createLogos() {
    if (target) {
        shuffleArray(logos);
        for (let i = 0; i < 5; i++) {
            const template = `
                <div class="item">
                    <img src="${logos[i].img}" alt="${logos[i].client}">
                </div>
            `;
            target.insertAdjacentHTML("beforeend", template);
        };
    }
};

// $(document).ready(createLogos);

function closeAccordion(e) {
    $('.accordion-head').removeClass('active');
    $('.accordion-body').removeClass('active');
    $('.accordion-head').children('.icon').removeClass('active');
    $('.accordion-head').children('.icon').children('i').removeClass('fa-minus');
    $('.accordion-head').children('.icon').children('i').addClass('fa-plus');

};

$('.accordion-item').click(function () {
    closeAccordion();

    $(this).children('.accordion-head').toggleClass('active');
    $(this).children('.accordion-head').siblings('.accordion-body').toggleClass('active');
    $(this).children('.accordion-head').children('.icon').toggleClass('active');

    $(this).children('.accordion-head').children('.icon').children('i').removeClass('fa-plus');
    $(this).children('.accordion-head').children('.icon').children('i').addClass('fa-minus');
});