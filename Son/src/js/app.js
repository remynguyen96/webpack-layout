// import scss from  '../scss/app.scss';
import scss from  '../scss/author.scss';
import imageCover from  '../images/m_cover.jpg';
import images1 from  '../images/m_title_1.jpg';
import images2 from  '../images/m_title_2.jpg';
import images3 from  '../images/m_title_3.jpg';
import images4 from  '../images/m_title_4.jpg';
import images5 from  '../images/m_title_5.jpg';

const screenWidth = window.innerWidth;
if(screenWidth <= 599) {

  const cover = document.querySelector('.cover img');
  const title1 = document.querySelector('.IMGtitle1');
  const title2 = document.querySelector('.IMGtitle2');
  const title3 = document.querySelector('.IMGtitle3');
  const title4 = document.querySelector('.IMGtitle4');
  const title5 = document.querySelector('.IMGtitle5');
  const part1 = document.querySelectorAll('.part1');
  const divContent1 = document.querySelectorAll('.part1 div');

  const coverImage = new Image();
  coverImage.onload = function() {
      cover.src = this.src;
  };
  coverImage.src = imageCover;
  const title1Image = new Image();
  title1Image.onload = function() {
      title1.src = this.src;
  };
  title1Image.src = images1;

  const title2Image = new Image();
  title2Image.onload = function() {
      title2.src = this.src;
  };
  title2Image.src = images2;

  const title3Image = new Image();
  title3Image.onload = function() {
      title3.src = this.src;
  };
  title3Image.src = images3;

  const title4Image = new Image();
  title4Image.onload = function() {
      title4.src = this.src;
  };
  title4Image.src = images4;
  const title5Image = new Image();
  title5Image.onload = function() {
    title5.src = this.src;
  };
  title5Image.src = images5;

  part1.forEach((part,key) => {
    part.appendChild(divContent1[key]);
  });

}
