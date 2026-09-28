(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const hd=$('.hd'),nav=$('.hd nav'),btn=$('.burger-btn');
btn&&btn.addEventListener('click',()=>{nav.classList.toggle('open');btn.textContent=nav.classList.contains('open')?'Schließen':'Menü'});
let pend=$$('.rv,.wipe');
const count=el=>{const t=+el.dataset.count,s=performance.now();const f=n=>{const k=Math.max(0,Math.min(1,(n-s)/1400));el.textContent=Math.round(t*(1-Math.pow(1-k,3)));k<1&&requestAnimationFrame(f)};requestAnimationFrame(f)};
const hero=$('.hero,.phero'),pin=$('.pin'),track=$('.pin .track'),big=$('.big .bgimg,.bigcta .bgimg'),rdd=$('.road'),tl=$('.tl'),steps=$$('.story .step'),imgs=$$('.story .sticky img');
function tick(){
  const y=scrollY,H=innerHeight;
  hd&&hd.classList.toggle('solid',y>40);rdd&&rdd.style.setProperty('--sp',(y/Math.max(1,document.documentElement.scrollHeight-H)).toFixed(3));
  pend=pend.filter(el=>{if(el.getBoundingClientRect().top>H*.88)return true;el.classList.add('in');$$('[data-count]',el).forEach(count);return false});
  if(reduce)return;
  if(hero){const p=Math.min(1,y/(hero.offsetHeight||1));hero.style.setProperty('--hp',p.toFixed(3))}
  if(pin&&track&&innerWidth>760){const r=pin.getBoundingClientRect(),max=pin.offsetHeight-H,p=Math.min(1,Math.max(0,-r.top/max));const dist=track.scrollWidth-innerWidth+80;track.style.transform=`translateX(${-p*dist}px)`;pin.style.setProperty('--hx',p.toFixed(3))}
  if(big){const r=big.parentElement.getBoundingClientRect();big.style.setProperty('--py',((r.top+r.height/2-H/2)*-.15).toFixed(1))}
  if(tl){const r=tl.getBoundingClientRect();tl.style.setProperty('--tp',Math.min(1,Math.max(0,(H*.6-r.top)/r.height)).toFixed(3))}
  if(steps.length){let a=0;steps.forEach((s,i)=>{if(s.getBoundingClientRect().top<H*.55)a=i});steps.forEach((s,i)=>s.classList.toggle('on',i===a));imgs.forEach((m,i)=>m.classList.toggle('on',i===a))}
}
addEventListener('scroll',()=>requestAnimationFrame(tick),{passive:true});addEventListener('resize',tick);tick();
if(!reduce&&matchMedia('(hover:hover)').matches){
  $$('.card').forEach(c=>{c.addEventListener('pointermove',e=>{const b=c.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;c.style.transform=`perspective(900px) rotateY(${x*8}deg) rotateX(${-y*8}deg)`});c.addEventListener('pointerleave',()=>c.style.transform='')});
  $$('.b.mag').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')});
  const fol=$('.follow');if(fol){const im=$('img',fol);$$('.mi[data-img]').forEach(m=>{m.addEventListener('pointerenter',()=>{im.src=m.dataset.img;fol.classList.add('on')});m.addEventListener('pointerleave',()=>fol.classList.remove('on'))});addEventListener('pointermove',e=>{fol.style.left=e.clientX+'px';fol.style.top=e.clientY+'px'})}
}
$$('.tabs button').forEach(t=>t.addEventListener('click',()=>{$$('.tabs button').forEach(x=>x.classList.toggle('on',x===t));const c=t.dataset.cat;$$('.mi').forEach(m=>m.classList.toggle('hide',c!=='alle'&&m.dataset.cat!==c))}));
$$('[data-hours]').forEach(el=>{const h=JSON.parse(el.dataset.hours),d=new Date(),wd=(d.getDay()+6)%7,now=d.getHours()+d.getMinutes()/60,t=h[wd];const open=t&&now>=t[0]&&now<t[1];const st=$('.status',el);if(st){st.classList.toggle('open',!!open);st.lastChild.textContent=open?` Jetzt geöffnet · bis ${t[1]} Uhr`:' Gerade geschlossen'}const rows=$$('.hours span:nth-child(odd)',el);rows[wd]&&(rows[wd].classList.add('today'),rows[wd].nextElementSibling.classList.add('today'))});
$$('form[data-demo]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();f.innerHTML='<div class="full" style="padding:30px 0;text-align:center"><div class="disp" style="font-size:54px">Danke!</div><p style="color:var(--mut)">Das ist eine Beispielseite von Kiezmedia – das Formular ist nur zur Ansicht.</p></div>'}));
})();
