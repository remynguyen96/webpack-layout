import '../scss/.demo.scss';
// import '../scss/app.scss';
import imagesH from  '../images/mobile/m_header.jpg';

import images1 from  '../images/mobile/m_article1.jpg';

import images2 from  '../images/mobile/m_article2.jpg';

import images3 from  '../images/mobile/m_article3.jpg';

import images4 from  '../images/mobile/m_article4.jpg';

import images5 from  '../images/mobile/m_article5.jpg';

import images6 from  '../images/mobile/m_article6.jpg';

import imagesF from  '../images/mobile/m_footer.jpg';


const screenWidth = window.innerWidth;
if(screenWidth <= 599) {
  const cpPar2 = document.querySelector('.cp2-mid');
  const cpContent = document.querySelector('.cp2-mid-text');
  const cpImg = document.querySelector('.cp2-mid-img');
    cpPar2.appendChild(cpImg);
    cpPar2.appendChild(cpContent);
  const changeH = document.querySelector('.header img');

  const changeImages1 = document.querySelector('.intro-img');

  const changeImages2 = document.querySelector('.intro-img2');

  const changeImages3 = document.querySelector('.intro-img2');

  const changeImages4 = document.querySelector('.cp2-fullpage-img');

  const changeImages6 = document.querySelector('.part3-fullpage');

  const changeF = document.querySelector('.fullpage-footer');

  function loadImage(el,img) {
    const image = new Image();
    image.onload = function() {
        el.src = this.src;
    };
    image.src = img;
  }

  loadImage(changeH,imagesH);
  loadImage(changeImages1,images1);
  loadImage(changeImages2,images2);
  loadImage(changeImages4,images5);
  loadImage(changeImages6,images6);
  loadImage(changeF,imagesF);

    const article = document.querySelector(".cp2-fullpage-2");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    img1.src = images3;
    img2.src = images4;
    article.append(img1);
    article.append(img2);

}
