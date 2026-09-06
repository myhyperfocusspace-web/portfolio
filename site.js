const drive = id => `https://drive.google.com/thumbnail?id=${id}&sz=w2000`;

const assetMap = {
  'assets/home/dark-fantasy-hero.jpg': drive('1ZelXgvLtUguFe-Me6suYg3udL1a-R-CM'),
  'assets/home/mapro-hero.jpg': drive('1g-1VAVBaD-iq4WPNCFctRdqXX4oKEfEa'),
  'assets/home/aashirvaad-hero.jpg': drive('17S3UYicuaefXSWv2rdUUl5aFY-v36j9v'),
  'assets/home/bingo-hero.jpg': drive('12fOqO3rKVgrru8zaBS6rZKO8tjBN_hr4'),

  'assets/dark-fantasy/hero.jpg': drive('1ZelXgvLtUguFe-Me6suYg3udL1a-R-CM'),
  'assets/dark-fantasy/reaction-hero.jpg': drive('1n56JCS5JhWM9lzmpS9JsjQ81TzTF4066'),
  'assets/dark-fantasy/social-01.jpg': drive('1CSt6z_qOs1Rc5w5RBrlIbt6HXDsbLf3l'),
  'assets/dark-fantasy/social-02.jpg': drive('1n56JCS5JhWM9lzmpS9JsjQ81TzTF4066'),
  'assets/dark-fantasy/social-03.jpg': drive('1Y-Ea18v_VZutBNQLYxPTzctenwYXDk9u'),
  'assets/dark-fantasy/social-04.jpg': drive('1wyLBY3bJv6qH4e5NusHMrIxTB2Vhixmw'),

  'assets/mapro/range-hero.jpg': drive('1g-1VAVBaD-iq4WPNCFctRdqXX4oKEfEa'),
  'assets/mapro/strawberry-chunky.jpg': drive('1m-SQkOwfZQ0yAsmPEd-xXKXf-txPNXf0'),
  'assets/mapro/strawberry-benefits.jpg': drive('13k2OsyRGGPGae82ugBbX73_QTnC_UZt4'),
  'assets/mapro/mix-fruit.jpg': drive('1cTajXYqDSzvfEmlLTZ9BdtnrVCsXrWg9'),
  'assets/mapro/mazaana-classic-trio.jpg': drive('14124xiAbyxgvWpVTWeXlvuEsiiaO0T4z'),
  'assets/mapro/chocolate-paan.jpg': drive('1_q7KneuHdbLXZiSa4EAyZfJgh9HI_INO'),
  'assets/mapro/nutrition.jpg': drive('1tx30YkfY6JOsBtQBBqPWkqNwpKu6cY4y'),
  'assets/mapro/pack-details.jpg': drive('1QR5zWt7avCsxEMHrLmRzVX35PNOYb-Ww'),
  'assets/mapro/ingredients.jpg': drive('1Gs77JIKaO73xwVx4Io4NpC-bVcEwxkqI'),
  'assets/mapro/traceability.jpg': drive('14124xiAbyxgvWpVTWeXlvuEsiiaO0T4z'),

  'assets/aashirvaad/storyboard-final.jpg': drive('1NLyPCpR2bmfGAK_M_qi96efIsug0zV7C'),
  'assets/aashirvaad/drip-bridge.jpg': drive('1afHVXJepjTv3Rer5lXbxCfdAciRJg4mf'),
  'assets/aashirvaad/ribbon-reveal.jpg': drive('1PBKB6kEh3PEjBAgB9Wb-Ewe2SZ40q2W7'),
  'assets/aashirvaad/offer-pack.jpg': drive('1WNDpfMXCWThMlIBHy2iN8zYm-lzUHIl9'),
  'assets/aashirvaad/end-frame.jpg': drive('1WNDpfMXCWThMlIBHy2iN8zYm-lzUHIl9'),
  'assets/aashirvaad/feedback-01.jpg': drive('1NLyPCpR2bmfGAK_M_qi96efIsug0zV7C'),
  'assets/aashirvaad/feedback-02.jpg': drive('17S3UYicuaefXSWv2rdUUl5aFY-v36j9v'),
  'assets/aashirvaad/feedback-03.jpg': drive('1afHVXJepjTv3Rer5lXbxCfdAciRJg4mf'),
  'assets/aashirvaad/feedback-04.jpg': drive('1PBKB6kEh3PEjBAgB9Wb-Ewe2SZ40q2W7'),

  'assets/bingo/hero.jpg': drive('12fOqO3rKVgrru8zaBS6rZKO8tjBN_hr4'),
  'assets/bingo/social-01.jpg': drive('1zKRK00S4cd6yuA-cRkZ6m4P_cBSppsey'),
  'assets/bingo/social-02.jpg': drive('1--X-NWX3FCDXXb9ncF4MZ4g1ZVEp7RsT'),
  'assets/bingo/social-03.jpg': drive('1zKjnNb2zX7GoNvLCYNFVsj4EPAOUd8JO'),
  'assets/bingo/social-04.jpg': drive('1xu5dOlqkkGSdEfztr91X8hF0MVqQe4if'),

  'assets/archive/fabelle-web.jpg': drive('1ugJZabOfZxPe34TY_XFSiKrxmbQ-G5lr'),
  'assets/archive/fabelle-sunbean.jpg': drive('1XN8t58GQK44cECtJJhTymeGUn447TAxq'),
  'assets/archive/itc-gifting.jpg': drive('1q6yLAmmY9ilWSNuNbmD0Z_eAiAEAk-uV'),
  'assets/archive/tvara.jpg': drive('1LXqchMJQf3kEPidBu9P7BRkS_TBcqVJi'),
  'assets/archive/gan-ai.jpg': drive('1Og8xLz9utmHzsm2MnwI2VM5JKtjyhY3t'),
  'assets/archive/ultra-mintz.jpg': drive('1EnSglgjiLkQ1C1Am5T82dQSMlaxb0Vv2'),

  'assets/archive/fabelle-web-01.jpg': drive('1ugJZabOfZxPe34TY_XFSiKrxmbQ-G5lr'),
  'assets/archive/fabelle-web-02.jpg': drive('1shDz0empQetPuaFWRuR808qlL7OaQsFS'),
  'assets/archive/sunbean-01.jpg': drive('1XN8t58GQK44cECtJJhTymeGUn447TAxq'),
  'assets/archive/sunbean-02.jpg': drive('1vNEMA_PATyNehwBi7R3TvXevJnyAExwu'),
  'assets/archive/sunbean-03.jpg': drive('15gNOzxywLapXUWIU4LkyeVRe-TA-409L'),
  'assets/archive/sunbean-04.jpg': drive('15gNOzxywLapXUWIU4LkyeVRe-TA-409L'),
  'assets/archive/sunbean-booking.jpg': drive('15gNOzxywLapXUWIU4LkyeVRe-TA-409L'),
  'assets/archive/gifting-query.jpg': drive('1q6yLAmmY9ilWSNuNbmD0Z_eAiAEAk-uV'),
  'assets/archive/gifting-query-mobile.jpg': drive('1q6yLAmmY9ilWSNuNbmD0Z_eAiAEAk-uV'),
  'assets/archive/gifting-senses.jpg': drive('1KmGdAe_uMf8u8fyHpwv64OuhivPiTRbH'),
  'assets/archive/gifting-fabelle.jpg': drive('1Cg7r0B2Ko6YsOuVz-2akIPsXq4DUtGFv'),
  'assets/archive/tvara-01.jpg': drive('1xRwo5bvhf9tJtLCjHKpkIylRg-y9_4fz'),
  'assets/archive/tvara-02.jpg': drive('1-vxvdejMGNCnEOKUU5ZiSXsPCPB6Bqy1'),
  'assets/archive/tvara-03.jpg': drive('1LXqchMJQf3kEPidBu9P7BRkS_TBcqVJi'),
  'assets/archive/ultra-01.jpg': drive('1EnSglgjiLkQ1C1Am5T82dQSMlaxb0Vv2'),
  'assets/archive/ultra-02.jpg': drive('1EnSglgjiLkQ1C1Am5T82dQSMlaxb0Vv2'),
  'assets/archive/ultra-03.jpg': drive('1EnSglgjiLkQ1C1Am5T82dQSMlaxb0Vv2'),
  'assets/archive/gan-01.jpg': drive('1Og8xLz9utmHzsm2MnwI2VM5JKtjyhY3t'),
  'assets/archive/gan-02.jpg': drive('1DH-JU0XaCW0OVtN2bdpsu_0l2VooQcGh'),
  'assets/archive/gan-03.jpg': drive('1V_TtCi5X5bRPtdIfn_AVyecCYBX7xIyh'),
  'assets/archive/gan-04.jpg': drive('1-jYRP6npUsTrtSZLR6EdnS0Ppu02R9mQ'),
  'assets/archive/gan-05.jpg': drive('1nyMo6BRi59zEiaatI2kud6Qs3LITG0O8'),
  'assets/archive/scripts-storyboard.jpg': drive('1HgOzsfoKXIJWU1byKT_qvPciEkA78dsz'),
  'assets/archive/scripts-page.jpg': drive('1o1AEcfsSGaQ8PVr2pVeAoYrT7dljpWS3'),
  'assets/archive/earlier-01.jpg': drive('1N49c8pKC9CSWlqnYHZC-RtD8v6LrUYnF'),
  'assets/archive/earlier-02.jpg': drive('1VBpN1LMVGwr2px7MEDafyvWaFPiqQHrM'),
  'assets/archive/earlier-03.jpg': drive('1TnMV28xKCFyBe--qwZ45LOGYlQmvltCH')
};

document.querySelectorAll('img').forEach(img => {
  const original = img.getAttribute('src');
  if (assetMap[original]) img.src = assetMap[original];
  img.loading = img.closest('.hero-reel,.case-cover-v2') ? 'eager' : 'lazy';
  img.decoding = 'async';
  const frame = img.closest('.asset-frame');
  const loaded = () => {
    frame?.classList.remove('asset-missing');
    const fallback = frame?.querySelector('.asset-fallback');
    if (fallback) fallback.style.display = 'none';
  };
  const missing = () => frame?.classList.add('asset-missing');
  img.addEventListener('load', loaded, { once: true });
  img.addEventListener('error', missing, { once: true });
  if (img.complete && img.naturalWidth) loaded();
});

const frames=[...document.querySelectorAll('.hero-frame')];
const bars=[...document.querySelectorAll('.hero-progress i')];
if(frames.length){
  let index=0;
  const showFrame=next=>{
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

// Keep employer labels factual even when responsibilities spanned several functions.
document.querySelectorAll('.exp-row').forEach(row=>{
  const company=row.querySelector('.exp-company')?.textContent.trim();
  const role=row.querySelector('.exp-role');
  if(!role) return;
  if(company==='JuiceLabs.ai') role.textContent='Creative Strategy + GenAI Production';
  if(company==='Gan.ai') role.textContent='Creative Strategist';
});
