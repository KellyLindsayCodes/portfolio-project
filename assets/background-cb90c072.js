import{S as v,P as S,c as b,W as y,C,d as L,B as M,a as x,b as E,O as q,g as l,e as m}from"./OrbitControls-861794c3.js";const s=new v,t={width:window.innerWidth,height:window.innerHeight},h=new S(16777215,1,100);h.position.set(0,10,10);h.intensity=1.25;s.add(h);const a=new b(45,t.width/t.height,.1,100);a.position.z=20;s.add(a);const c=document.querySelector(".webgl");c.width=t.width;c.height=t.height;const f=new y({canvas:c}),k=new C(R()),T=new L({map:k,side:M}),G=new x(25,64,64),P=new E(G,T);s.add(P);function R(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d"),o=n.createRadialGradient(128,128,0,128,128,128);return o.addColorStop(0,"darkred"),o.addColorStop(1,"darkblue"),n.fillStyle=o,n.fillRect(0,0,e.width,e.height),e}const i=new q(a,c);i.enableDamping=!0;i.enablePan=!1;i.enableZoom=!1;i.autoRotate=!0;i.autoRotateSpeed=5;window.addEventListener("resize",()=>{t.width=window.innerWidth,t.height=window.innerHeight,a.aspect=t.width/t.height,a.updateProjectionMatrix(),f.setSize(t.width,t.height)});const p=()=>{i.update(),f.render(s,a),window.requestAnimationFrame(p)};p();const u=l.timeline({defaults:{duration:1}});u.fromTo("nav",{y:"-100%"},{y:"0%"});u.fromTo(".title",{opacity:0},{opacity:1});u.fromTo("footer",{opacity:0},{opacity:1});let w=!1,d=[];window.addEventListener("mousedown",()=>w=!0);window.addEventListener("mouseup",()=>w=!1);window.addEventListener("mousemove",e=>{if(w){d=[Math.round(e.pageX/t.width*255),Math.round(e.pageY/t.height*255),150];let n=new m(`rgb(${d.join(",")})`);l.to(mesh.material.color,{r:n.r,g:n.g,b:n.b})}});window.addEventListener("touchmove",e=>{{d=[Math.round(e.touches[0].pageX/t.width*255),Math.round(e.touches[0].pageY/t.height*255),150];let n=new m(`rgb(${d.join(",")})`);l.to(mesh.material.color,{r:n.r,g:n.g,b:n.b})}});const W=document.querySelector(".menu-toggle"),z=document.querySelector(".menu");W.addEventListener("click",()=>{z.classList.toggle("show-menu")});const B=document.querySelectorAll("[data-carousel-button]");B.forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.carouselButton==="next"?1:-1,o=e.closest("[data-carousel]").querySelector("[data-slides]"),g=o.querySelector("[data-active]");let r=[...o.children].indexOf(g)+n;r<0&&(r=o.children.length-1),r>=o.children.length&&(r=0),o.children[r].dataset.active=!0,delete g.dataset.active})});
