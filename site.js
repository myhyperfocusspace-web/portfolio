const loopWords=['direction','production','delivery'];
const loopEl=document.querySelector('.word-loop');
if(loopEl){let i=0;setInterval(()=>{i=(i+1)%loopWords.length;loopEl.animate([{opacity:0,transform:'translateY(6px)'},{opacity:1,transform:'translateY(0)'}],{duration:350,easing:'ease-out'});loopEl.textContent=loopWords[i]},1500)}

const preview=document.querySelector('.work-preview');
const previewArt=preview?.querySelector('.preview-art');
const rows=document.querySelectorAll('.work-row[data-preview]');
if(preview&&previewArt&&window.matchMedia('(pointer:fine)').matches){
  rows.forEach(row=>{
    row.addEventListener('mouseenter',()=>{previewArt.className='preview-art '+row.dataset.preview;preview.classList.add('show')});
    row.addEventListener('mousemove',e=>{preview.style.left=e.clientX+'px';preview.style.top=e.clientY+'px'});
    row.addEventListener('mouseleave',()=>preview.classList.remove('show'));
  });
}

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
