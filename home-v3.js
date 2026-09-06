const driveThumb=(id,size='w2400')=>`https://drive.google.com/thumbnail?id=${id}&sz=${size}`;

document.querySelectorAll('img[data-drive]').forEach(img=>{
  img.src=driveThumb(img.dataset.drive,img.dataset.size||'w2400');
  img.loading=img.closest('.hero')?'eager':'lazy';
  img.decoding='async';
});

const intro=document.querySelector('.micro-intro');
if(intro){
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced) intro.remove();
  else setTimeout(()=>intro.classList.add('is-done'),900);
}

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:.08,rootMargin:'0px 0px -3% 0px'});
document.querySelectorAll('.mask-reveal,.fade-up').forEach(el=>revealObserver.observe(el));

const reelFrames=[...document.querySelectorAll('.reel-frame')];
const reelDots=[...document.querySelectorAll('.reel-dots i')];
if(reelFrames.length){
  let index=0;
  const show=(next)=>{
    const current=index;
    reelFrames.forEach((frame,i)=>{
      frame.classList.toggle('active',i===next);
      frame.classList.toggle('leaving',i===current && current!==next);
    });
    reelDots.forEach((dot,i)=>dot.classList.toggle('active',i===next));
    index=next;
    window.setTimeout(()=>reelFrames.forEach((frame,i)=>{if(i!==index)frame.classList.remove('leaving')}),900);
  };
  show(0);
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    window.setInterval(()=>show((index+1)%reelFrames.length),3300);
  }
}

const setLayer=(selector,index)=>{
  const layers=[...document.querySelectorAll(selector)];
  layers.forEach((layer,i)=>layer.classList.toggle('active',i===index));
};

const dfSteps=[...document.querySelectorAll('.df-step')];
if(dfSteps.length){
  setLayer('.df-visual img',0);
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const i=Number(entry.target.dataset.image||0);
        setLayer('.df-visual img',i);
      }
    });
  },{rootMargin:'-34% 0px -34% 0px',threshold:0});
  dfSteps.forEach(step=>obs.observe(step));
}

const aashSteps=[...document.querySelectorAll('.aash-step')];
if(aashSteps.length){
  setLayer('.aash-media img',0);
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const i=Number(entry.target.dataset.image||0);
        setLayer('.aash-media img',i);
      }
    });
  },{rootMargin:'-32% 0px -42% 0px',threshold:0});
  aashSteps.forEach(step=>obs.observe(step));
}

const nav=document.querySelector('.site-nav');
let lastY=window.scrollY;
window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  if(nav) nav.classList.toggle('is-hidden',y>lastY && y>160);
  lastY=y;
},{passive:true});

const parallaxEls=[...document.querySelectorAll('[data-parallax]')];
let ticking=false;
const updateParallax=()=>{
  const vh=window.innerHeight;
  parallaxEls.forEach(el=>{
    const rect=el.getBoundingClientRect();
    const center=rect.top+rect.height/2;
    const progress=(center-vh/2)/vh;
    const amount=Number(el.dataset.parallax||3);
    const base=el.classList.contains('one')?-3:2.4;
    el.style.transform=`translate3d(0,${progress*amount*10}px,0) rotate(${base}deg)`;
  });
  ticking=false;
};
window.addEventListener('scroll',()=>{
  if(!ticking){requestAnimationFrame(updateParallax);ticking=true}
},{passive:true});
updateParallax();

const menuToggle=document.querySelector('.menu-toggle');
const mobileMenu=document.querySelector('.mobile-menu');
if(menuToggle&&mobileMenu){
  const close=()=>{mobileMenu.classList.remove('open');document.body.classList.remove('menu-open');menuToggle.setAttribute('aria-expanded','false')};
  menuToggle.addEventListener('click',()=>{
    const open=!mobileMenu.classList.contains('open');
    mobileMenu.classList.toggle('open',open);
    document.body.classList.toggle('menu-open',open);
    menuToggle.setAttribute('aria-expanded',String(open));
  });
  mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
}

// The standalone V3 preview only contains the redesigned homepage.
// Keep detailed case-study links functional by routing them to the existing V2 pages.
if(location.hostname.includes('prem-parekh-portfolio-v3')){
  const legacyBase='https://prem-parekh-portfolio-v2.vercel.app/';
  document.querySelectorAll('a[href]').forEach(a=>{
    const href=a.getAttribute('href');
    if(href && !href.startsWith('http') && href.includes('.html')) a.href=legacyBase+href;
  });
}
