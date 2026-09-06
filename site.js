const driveThumb=id=>`https://drive.google.com/thumbnail?id=${id}&sz=w2400`;

document.querySelectorAll('img[data-drive]').forEach(img=>{
  img.src=driveThumb(img.dataset.drive);
  img.loading=img.closest('.hero')?'eager':'lazy';
  img.decoding='async';
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.08,rootMargin:'0px 0px -3% 0px'});

document.querySelectorAll('.reveal,.reveal-img').forEach(el=>observer.observe(el));

const nav=document.querySelector('.nav');
let lastY=window.scrollY;
window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  nav.style.transform=y>lastY&&y>140?'translateY(-100%)':'translateY(0)';
  lastY=y;
},{passive:true});
nav.style.transition='transform .28s ease';
