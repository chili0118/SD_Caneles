$('.carousel').slick({
  slidesToShow: 1,  //可以控制每個輪播有幾張圖片
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 2000,
  fade: true,
  arrows: false,
  cssEase: 'linear'
});

// ABOUT
"use strict";
// https://www.google.com/search?q=auto+and+manual+slider&oq=auto+and+manual+slider&aqs=chrome..69i57j0i7i30.24341j0j7&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:a32e4f99,vid:bW8X-tt5AZQ

var slides = document.querySelectorAll(".slide");
var aboutBtns = document.querySelectorAll(".aboutBtn");
let currentSlide = 1;
let rumFirstViewClicked = document.querySelector('.icon4') //預覽放大icon

// JavaScript for image slider manual navigation
var manualNav = function (manual) {
  // 都先去除 class name .active
  slides.forEach((slide) => {
    slide.classList.remove("active");
    aboutBtns.forEach((aboutBtn) => {
      aboutBtn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  aboutBtns[manual].classList.add("active");
  // click aboutBtns 同時slides[i]和aboutBtns[i]加上active
};
aboutBtns.forEach((aboutBtn, i) => {
  aboutBtn.addEventListener("click", () => {
    // forEach 去找被點擊的按鈕
    manualNav(i); // i帶入函式的參數manual，slides[i]，加上active的class name
    currentSlide = i; //更新目前頁面的變數值
  });
});
// JavaScript for image slider autoplay navigation
var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      //先刪除先前的active
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      aboutBtns[i].classList.add("active");
      i++;

      if (slides.length === i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 5000);
  };
  repeater();
};
function ifrumFirstViewClicked() {
  //預覽放大icon click取消改成mouseover icon放大樣式取消
  rumFirstViewClicked.addEventListener('mouseover', () => {
    rumFirstViewClicked.classList.remove("firstView")
    console.log(rumFirstViewClicked)
  })
}
// 呼叫函式
repeat();
ifrumFirstViewClicked()//預覽放大icon click後 icon放大樣式取消

// const buttons = document.querySelectorAll("[data-about-btn]");

// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         const offset = button.dataset.aboutBtn === "next" ? 1 : -1;
//         const slides = button.closest("[data-about-box]").querySelector("[data-about-slides]");
//         // 如果是next的話，return value 1，或-1

//         const activeSlide = slides.querySelector("[data-about-active]");
//         let newIndex = [...slides.children].indexOf(activeSlide) + offset;
//         console.log('offset', offset);
//         // console.log('newIndex', newIndex);

//         if (newIndex < 0) {
//             newIndex = 1;
//         }
//         if (newIndex >= slides.children.length) {
//             newIndex = 0;
//         }
//         slides.children[newIndex].dataset.aboutActive = true;
//         delete activeSlide.dataset.aboutActive;
//     });
// });

// FAQ

$('.faq-header').click(function () {
  $(this).parent('li').toggleClass('faq-active').find('.faq-text').slideToggle();
});

const shops = [
  {
    title: 'bubble-1',
    shopName: '海點麵包坊',
    img: './images/banner-5.jpg',
    logo: './images/dessert_logo-05.png',
  },
  {
    title: 'bubble-2',
    shopName: '鑽品咖啡館',
    img: './images/shops-2.jpg',
    logo: './images/dessert_logo-02.png',
  },
  {
    title: 'bubble-3',
    shopName: 'Happy Cake',
    img: './images/shops-3.jpg',
    logo: './images/dessert_logo-03.png',
  },
  {
    title: 'bubble-4',
    shopName: 'MJ 甜品',
    img: './images/shops-4.jpg',
    logo: './images/dessert_logo-04.png',
  },
  {
    title: 'bubble-5',
    shopName: '蕾妮亞甜點實驗室',
    img: './images/shops-5.jpg',
    logo: './images/dessert_logo-06.png',
  },
  {
    title: 'bubble-6',
    shopName: 'Canelé',
    img: './images/shops-6.jpg',
    logo: './images/dessert_logo-10.png',
  },
];
let bubblesShops = document.querySelector('.bubbles-shops');

function shopsImages(shops) {
  let htmlContent = ``;
  for (let i = 0; i < shops.length; i++) {
    htmlContent += `
            <a href="" class='bubbles ${shops[i].title}'>
            <svg width="0" height="0" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid slice">
        <g>
          <defs>
            <clipPath id="bubble-clip" clipPathUnits="objectBoundingBox" transform="scale(0.0025,0.0025)">
              <path>
                <animate attributeName="d" dur="2000ms" repeatCount="indefinite" values="M455.5,335.5Q421,421,335.5,451Q250,481,164.5,451Q79,421,57,335.5Q35,250,65,172.5Q95,95,172.5,64.5Q250,34,336.5,55.5Q423,77,456.5,163.5Q490,250,455.5,335.5Z;
            M436.5,321.5Q393,393,321.5,430.5Q250,468,170,439Q90,410,58,330Q26,250,59,171Q92,92,171,59.5Q250,27,336,52.5Q422,78,451,164Q480,250,436.5,321.5Z;
            M431,321.5Q393,393,321.5,432Q250,471,174,436.5Q98,402,50.5,326Q3,250,47,170.5Q91,91,170.5,63Q250,35,331.5,61Q413,87,441,168.5Q469,250,431,321.5Z;
            M445,335Q420,420,335,460Q250,500,171.5,453.5Q93,407,50.5,328.5Q8,250,49.5,170.5Q91,91,170.5,53.5Q250,16,327,56Q404,96,437,173Q470,250,445,335Z;
            M455.5,335.5Q421,421,335.5,451Q250,481,164.5,451Q79,421,57,335.5Q35,250,65,172.5Q95,95,172.5,64.5Q250,34,336.5,55.5Q423,77,456.5,163.5Q490,250,455.5,335.5Z"></animate>
              </path>
            </clipPath>
          </defs>
        </g>
      </svg>
      <div class="bubble-img-container">
        <img src="${shops[i].img}">
        <div class="shop-info-container">
          <div class="shop-logo-container">
            <img src="${shops[i].logo}" alt="shop-logo">
          </div>
          <h3 class="shop-name-item">${shops[i].shopName}</h3>
        </div>
      </div>
    </a>  
    `;
  }
  return htmlContent;
}

bubblesShops.innerHTML = shopsImages(shops);

$(function() {
  /* 按下GoTop按鈕時的事件 */
  $('#top').click(function(){
      $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
      return false;
  });
  
  /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
  $(window).scroll(function() {
      if ( $(this).scrollTop() > 400){
          $('#top').fadeIn();
      } else {
          $('#top').fadeOut();
      }
  });
});