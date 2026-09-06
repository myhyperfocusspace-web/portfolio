const frames=[...document.querySelectorAll('.hero-frame')];
const bars=[...document.querySelectorAll('.hero-progress i')];
if(frames.length){
  let index=0;
  const showFrame=(next)=>{
    frames.forEach((frame,i)=>frame.classList.toggle('active',i===next));
    bars.forEach((bar,i)=>bar.classList.toggle('active',i===next));
  };
  showFrame(0);
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    setInterval(()=>{index=(index+1)%frames.length;showFrame(index)},3500);
  }
}

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.08});
document.querySelectorAll('.reveal,.asset-reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.asset-frame img').forEach(img=>{
  const markMissing=()=>img.closest('.asset-frame')?.classList.add('asset-missing');
  if(img.complete && !img.naturalWidth) markMissing();
  img.addEventListener('error',markMissing,{once:true});
});
