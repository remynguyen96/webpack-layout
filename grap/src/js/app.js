import '../scss/app.scss';
//Arrow Frequently Questions
const questions = document.querySelectorAll('.question');
questions.forEach((question) => {
  question.onclick = () => {
    if(question.classList.contains('openQuestion')) {
      question.classList.remove('openQuestion');
      question.removeAttribute('style');
    } else {
      question.classList.add('openQuestion');
      setTimeout(() => {
        question.style.height = question.offsetHeight+"px";
      },100)
    }
  }
});
//Slider How It Works
let index = 0;
const sliders = document.querySelectorAll('.works-listItem');
const videoMedia = document.querySelectorAll('.works-media');
const arrVideo = Array.from(videoMedia);
sliders.forEach((slider, key) => {
  slider.onclick = () => {
    index = key;
    openImage(slider);
  };
});
//Open Image Slider
function openImage(item) {
  let idVideo = item.getAttribute('data-video');
  let video = arrVideo.find((videoItem) => {
    return  videoItem.getAttribute('id') === idVideo;
  });
  if(!item.classList.contains('activeOpen')) {
    sliders.forEach((slider) => {
      slider.classList.remove('activeOpen');
    });
    videoMedia.forEach((videoItem) => {
      videoItem.classList.remove('activeVideo');
    });
    item.classList.add('activeOpen');
    video.classList.add('activeVideo');
  }
}
function autoPlay() {
  index++;
  index = (index > sliders.length) ? 1 : index;
  openImage(sliders[index-1]);
}
//Autoplay
let playDestop = setInterval(() => {
  autoPlay();
}, 2000);
let playMobie;
//Responsive Css

const contactForm = document.querySelector('.contact_form');
const reason = document.querySelector('.reason');
function responsive() {
  const titleWorks = document.querySelector('h4.title-items');
  const descriptionWorks = document.querySelector('p.description-items');
  if( window.innerWidth <= 768) {
    reason.style.marginTop = (contactForm.offsetHeight-20) + "px";
    let title = document.createElement('h4');
    let description = document.createElement('p');
    let workList = document.querySelector('.works-infomation');
    title.className = 'title-items';
    description.className = 'description-items';

    if(!titleWorks && !descriptionWorks) {
      workList.appendChild(title);
      workList.appendChild(description);
      title.textContent = sliders[0].children[0].textContent;
      description.textContent = sliders[0].children[1].textContent;
      clearInterval(playDestop);

      playMobie = setInterval(() => {
        index++;
        index = (index > sliders.length) ? 1 : index;
        openImage(sliders[index-1]);
        title.style.opacity = '0';
        title.style.transform = 'translateX(12px)';
        description.style.opacity = '0';
        description.style.transform = 'translateX(12px)';
        setTimeout(() => {
          title.style.opacity = '1';
          title.style.transform = 'translateX(0)';
          description.style.opacity = '1';
          description.style.transform = 'translateX(0)';
          title.textContent = sliders[index-1].children[0].textContent;
          description.textContent = sliders[index-1].children[1].textContent;
        },300)
      }, 2000);
    }
  } else {
    if(titleWorks && descriptionWorks) {
      titleWorks.remove();
      descriptionWorks.remove();
      clearInterval(playMobie)
      playDestop = setInterval(() => {
        autoPlay();
      }, 2000);
    }
  }
}
window.onload = () => {
  videoMedia[0].classList.add('activeVideo');
  responsive();
};
window.onresize = () => {
  responsive();
};