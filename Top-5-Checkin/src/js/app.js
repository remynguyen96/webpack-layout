import '../scss/app.scss';
import cover from  '../images/mobile/m_cover.jpg';
import images1 from  '../images/mobile/m_1-ca-phe-hoai-co.jpg';
import images1_1 from  '../images/mobile/m_1-ca-phe-hoai-co-1.jpg';

import images2 from  '../images/mobile/m_2-duong-pho.jpg';
import images2_1 from  '../images/mobile/m_2-duong-pho-1.jpg';

import images3 from  '../images/mobile/m_3-homestay.jpg';
import images3_1 from  '../images/mobile/m_3-homestay-1.jpg';
import images3_2 from  '../images/mobile/m_3-homestay-2.jpg';
import images3_3 from  '../images/mobile/m_3-homestay-3.jpg';

import images4 from  '../images/mobile/m_4-cam-trai-bien.jpg';

import images5 from  '../images/mobile/m_5-phuot-nui.jpg';
import images5_1 from  '../images/mobile/m_5-phuot-nui-1.jpg';
import images5_2 from  '../images/mobile/m_5-phuot-nui-2.jpg';

import imagesPS from  '../images/mobile/m_ps.jpg';

import imagesTable1 from  '../images/mobile/m_table-1.jpg';
import imagesTable2 from  '../images/mobile/m-table-2.jpg';
import imagesTable3 from  '../images/mobile/m-table-3.jpg';

const screenWidth = window.innerWidth;
if(screenWidth <= 599) {
  const changeCover = document.querySelector('.header img');

  const changeImages1 = document.querySelector('.part1 .title');
  const changeImages1_1 = document.querySelector('.part1 .intro2');
  const changeImagesTable1 = document.querySelector('.part1 footer img');


  const changeImages2 = document.querySelector('.part2 .title');
  const changeImages2_1 = document.querySelector('.part2 .fullpage');
  const changeImagesTable2 = document.querySelector('.part2 footer img');


  const changeImages3 = document.querySelector('.part3 .title');
  const changeImages3_1 = document.querySelector('.part3 footer img');
  const changeImages3_2 = document.querySelector('.part3 .fullpage1');
  const changeImages3_3 = document.querySelector('.part3 .altImage');


  const changeImages4 = document.querySelector('.part4 .title');
  const changeImagesTable3 = document.querySelector('.part4 footer img');


  const changeImages5 = document.querySelector('.part5 .title');
  const changeImages5_1 = document.querySelector('.part5 footer img');
  const changeImages5_2 = document.querySelector('.part5 .fullpage1');

  const changeImagesPS = document.querySelector('.footer img');

  function loadImage(el,img) {
    const image = new Image();
    image.onload = function() {
        el.src = this.src;
    };
    image.src = img;
  }

  loadImage(changeCover,cover);
  loadImage(changeImages1,images1);
  loadImage(changeImages1_1,images1_1);
  loadImage(changeImagesTable1,imagesTable1);
  loadImage(changeImages2,images2);
  loadImage(changeImages2_1,images2_1);
  loadImage(changeImagesTable2,imagesTable2);
  loadImage(changeImages3,images3);
  loadImage(changeImages3_1,images3_1);
  loadImage(changeImages3_2,images3_2);
  loadImage(changeImages4,images4);
  loadImage(changeImagesTable3,imagesTable3);
  loadImage(changeImages5,images5);
  loadImage(changeImages5_1,images5_1);
  loadImage(changeImages5_2,images5_2);
  loadImage(changeImagesPS,imagesPS);

  var img = document.createElement("img");
  img.src = images3_3;
  changeImages3_3.append(img);

}
