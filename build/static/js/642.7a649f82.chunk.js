"use strict";(self.webpackChunkneurolov_webapp=self.webpackChunkneurolov_webapp||[]).push([[642],{2999:(e,t,n)=>{n.d(t,{A:()=>d});n(5043);var i=n(6867),r=n(3216),a=n(2774),o=n(579);const s=i.Ay.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to right, #071665, #0348B2, #0870DE);
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  z-index: 1000;
`,c=i.Ay.div`
  color: ${e=>e.active?"#ffffff":"rgba(255, 255, 255, 0.6)"};
  font-size: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    transform: translateY(-3px);
  }
`,l=i.Ay.div`
  font-size: 12px;
  margin-top: 4px;
`,d=()=>{const e=(0,r.Zp)(),t=(0,r.zy)(),n=[{path:"/home",icon:a.rQ8,label:"Home"},{path:"/quest",icon:a.KP4,label:"Quest"},{path:"/leaderboard",icon:a.v$b,label:"Leaderboard"},{path:"/invite",icon:a.YXz,label:"Invite"},{path:"/profile",icon:a.x$1,label:"Profile"},{path:"/settings",icon:a.Pcn,label:"Settings"}];return(0,o.jsx)(s,{children:n.map((n=>(0,o.jsxs)(c,{active:t.pathname===n.path,onClick:()=>e(n.path),children:[(0,o.jsx)(n.icon,{}),(0,o.jsx)(l,{children:n.label})]},n.path)))})}},4634:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(5043),r=n(9628);const a=e=>{const[t,n]=(0,i.useState)(null),[a,o]=(0,i.useState)(!1),[s,c]=(0,i.useState)(null);return{execute:(0,i.useCallback)((async function(){try{o(!0),c(null);const t=await e(...arguments);return n(t),t}catch(t){throw c(t),r.oR.error("An error occurred. Please try again later."),console.error("API Error:",t),t}finally{o(!1)}}),[e]),data:t,loading:a,error:s}}},1197:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ce});var i=n(5043),r=n(6867),a=n(2332),o=n(3846),s=n(9621),c=n(4634),l=n(4193),d=n(579);const p=(0,r.Ay)(a.P.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,f=(0,r.Ay)(a.P.div)`
  background: ${e=>e.theme.colors.background};
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  color: ${e=>e.theme.colors.text};
`,u=e=>{let{level:t,onClose:n}=e;return(0,d.jsx)(l.N,{children:(0,d.jsx)(p,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:n,children:(0,d.jsxs)(f,{initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.5,opacity:0},onClick:e=>e.stopPropagation(),children:[(0,d.jsx)("h2",{children:"Level Up!"}),(0,d.jsxs)("p",{children:["Congratulations! You've reached level ",t,"!"]}),(0,d.jsx)(a.P.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:n,children:"Continue"})]})})})};var h=n(2774);const x=n.p+"static/media/newfan.997bfe2ec12ce09a2156.png";var g=n(7479);const v=n.p+"static/media/breath_1.424d4904bbdc525c2ea9b5d18c2584a8.svg";var A=n(925);var b=n(2573);var m=n(1728),y=n(2999);const w=r.i7`
  0% { opacity: 1; transform: translateY(0) scale(1); }
  100% { opacity: 0; transform: translateY(-50px) scale(1.5); }
`,k=r.i7`
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.05); opacity: 0.5; }
`,j=r.i7`
  from { left: -30%; }
  to { left: 100%; }
`,C=r.i7`
  to { background-color: rgb(77, 124, 255); }
`,z=r.i7`
  to { fill: rgba(77, 124, 255, 0.642); }
`,E=r.Ay.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #000033;
  background-image: url(${A});
  background-size: cover;
  background-position: center;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  user-select: none;
  overflow: hidden;
`,R=r.Ay.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`,B=r.Ay.img`
  height: 40px;
  width: auto;
`,S=r.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
`,I=r.Ay.div`
  display: flex;
  align-items: center;
`,X=r.Ay.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`,N=r.Ay.div`
  display: flex;
  flex-direction: column;
`,P=r.Ay.span`
  font-size: 14px;
  font-weight: bold;
`,V=r.Ay.span`
  font-size: 12px;
  color: #bbb;
`,Q=r.Ay.div`
  display: flex;
  gap: 10px;
`,M=r.Ay.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2563eb;
  }
`,U=r.Ay.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
`,D=r.Ay.div`
  text-align: center;
  margin-bottom: 20px;
`,Y=r.Ay.div`
  font-size: 36px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`,L=r.Ay.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`,H=r.Ay.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,T=(0,r.Ay)(M)`
  background-color: rgba(255, 255, 255, 0.1);

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`,Z=r.Ay.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin-bottom: 60px;
`,G=r.Ay.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`,K=(0,r.Ay)(a.P.img)`
  width: 90%;
  height: 90%;
  object-fit: contain;
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
`,F=(0,r.Ay)(a.P.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  animation: ${k} 4s infinite ease-in-out;
`,O=r.Ay.div`
  position: absolute;
  animation: ${w} 1s forwards;
  pointer-events: none;
  font-size: 18px;
  font-weight: bold;
  color: #4ade80;
`,q=r.Ay.div`
  position: absolute;
  bottom: -50px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,J=r.Ay.div`
  height: 2px;
  width: 300px;
  background: rgb(44, 44, 44);
  position: relative;
  overflow: hidden;
`,W=r.Ay.div`
  background: linear-gradient(
    87deg,
    rgb(0, 0, 0) 0%,
    rgba(0, 0, 0, 0.14) 30%,
    rgba(0, 0, 0, 0.14) 70%,
    rgb(0, 0, 0) 100%
  );
  position: absolute;
  inset: 0px;
`,$=r.Ay.div`
  width: 70px;
  height: 100%;
  position: absolute;
  left: -20%;
  top: 0px;
  background: linear-gradient(
    87deg,
    rgba(0, 0, 0, 0) 0%,
    rgb(0, 204, 255) 40%,
    rgb(0, 204, 255) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  animation: ${j} 2s infinite ease-in-out;
`,_=r.Ay.label`
  position: relative;
  display: inline-block;
`,ee=r.Ay.input`
  display: none;
`,te=r.Ay.div`
  position: relative;
  background-image: linear-gradient(#ffffff 33%, #414751 58%, #837b52, #c5baa1, #c3adaa);
  border-radius: 50px;
  padding: 6px;
  border: none;
  outline: none;
  box-shadow: 0.1em 0 0 #2726267f inset, -0.1em 0 0 #27262600 inset, 0 0.1em 0 #afa490 inset, 0 -0.1em 0 #ffffff3f, 0 0.2em 0.5em #0000007f, 0 -0.1em 0 #151616 inset, -0.1em -0.2em 0 #ffffff7f inset;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s ease-in-out;

  &::before {
    position: absolute;
    content: "";
    width: 4.1rem;
    height: 4.1rem;
    border-radius: inherit;
    background-color: #606060;
    z-index: -1;
    transition: background-image .3s ease-in-out;
  }

  ${ee}:checked + & {
    box-shadow: none;
  }

  ${ee}:checked + &::before {
    background-image: rgb(77, 124, 255);
    animation: ${C} .3s linear alternate-reverse infinite;
  }
`,ne=r.Ay.span`
  width: 4rem;
  height: 4rem;
  display: inline-block;

  svg {
    height: 100%;
    width: 100%;
    fill: #000000;
    transition: fill .3s ease-in-out;
  }

  ${ee}:checked + ${te} & svg {
    fill: rgb(77, 124, 255);
    animation: ${z} .3s linear alternate-reverse infinite;
  }
`,ie=r.Ay.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`,re=r.Ay.div`
  text-align: center;
`,ae=r.Ay.div`
  font-size: 24px;
  font-weight: bold;
`,oe=r.Ay.div`
  font-size: 12px;
  color: #bbb;
`,se=(r.Ay.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,r.i7`
  100% {
    background-size: 120% 100%;
  }
`),ce=(r.Ay.div`
  width: 80px;
  height: 40px;
  border: 2px solid #22f49e;
  border-right-color: transparent;
  padding: 3px;
  background: repeating-linear-gradient(90deg, #22f49e 0 10px, #0000 0 15px)
    left/0% 100% no-repeat content-box content-box;
  position: relative;
  animation: ${se} 2s infinite steps(6);

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: 100%;
    width: 10px;
    background: linear-gradient(
          #0000 calc(50% - 7px),
          #22f49e 0 calc(50% - 5px),
          #0000 0 calc(50% + 5px),
          #22f49e 0 calc(50% + 7px),
          #0000 0
        )
        left / 100% 100%,
      linear-gradient(#22f49e calc(50% - 5px), #0000 0 calc(50% + 5px), #22f49e 0)
        left / 2px 100%,
      linear-gradient(#0000 calc(50% - 5px), #22f49e 0 calc(50% + 5px), #0000 0)
        right/2px 100%;
    background-repeat: no-repeat;
  }
`,r.Ay.svg`
  position: absolute;
  left: 22px;
  fill: rgba(37, 37, 37, 0.774);
`,()=>{const{user:e,updateUser:t}=(0,o.A)(),{settings:n}=(0,m.t)(),[r,a]=(0,i.useState)(!1),[l,p]=(0,i.useState)((null===e||void 0===e?void 0:e.totalTaps)||0),[f,A]=(0,i.useState)(!1),[w,k]=(0,i.useState)(0),[j,C]=(0,i.useState)([]),[z,se]=(0,i.useState)(0),[ce,le]=(0,i.useState)(!1),de=(0,i.useRef)(null),pe=(0,i.useRef)(0),fe=(0,i.useRef)(null),[ue,he]=(0,i.useState)(!1),{execute:xe,loading:ge}=(0,c.A)(s.C6),{execute:ve}=(0,c.A)(s.EP),Ae=(0,i.useCallback)((()=>{pe.current+=360,de.current&&(de.current.style.transform=`rotate(${pe.current}deg)`)}),[]),be=(0,i.useCallback)((async()=>{if(ge||f)return;if(l>=1e3)return A(!0),void k(420);he(!0);const e=fe.current.getBoundingClientRect(),i=e.width/2,r=e.height/2,o=.8*Math.min(i,r),s=2*Math.random()*Math.PI,c=i+o*Math.cos(s),d=r+o*Math.sin(s),u=i+o*Math.cos(s+Math.PI),h=r+o*Math.sin(s+Math.PI);C((e=>[...e,{id:Date.now(),startX:c,startY:d,translateX:u-c,translateY:h-d}])),p((e=>e+1)),se((e=>Math.min(e+10,100))),n.hapticFeedbackEnabled&&(e=>{if(window.navigator.vibrate)switch(e){case"tap":default:window.navigator.vibrate(50);break;case"cooldown":window.navigator.vibrate([100,30,100]);break;case"claim":window.navigator.vibrate([50,50,50]);break;case"bonus":window.navigator.vibrate([100,50,100,50,100]);break;case"quest":window.navigator.vibrate([50,100,50,100])}})("tap"),Ae();try{const e=await xe();e.levelUp&&(a(!0),t(e.user))}catch(x){console.error("Tap failed:",x)}}),[ge,f,l,xe,n.hapticFeedbackEnabled,t,Ae]),me=(0,i.useCallback)((()=>{f||(le((e=>!e)),ce||(se(100),setTimeout((()=>{se((e=>Math.max(e-50,0))),le(!1)}),3e3)))}),[f,ce]);return(0,i.useEffect)((()=>{if(f){const e=setInterval((()=>{k((t=>t<=1?(clearInterval(e),A(!1),p(0),0):t-1))}),1e3);return()=>clearInterval(e)}}),[f]),(0,i.useEffect)((()=>{const e=setInterval((()=>{C((e=>e.filter((e=>Date.now()-e.id<1e3)))),se((e=>Math.max(e-1,0)))}),100);return()=>clearInterval(e)}),[]),(0,d.jsxs)(E,{children:[(0,d.jsxs)(R,{children:[(0,d.jsx)(B,{src:"data:image/png;base64,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",alt:"Left Logo"}),(0,d.jsx)(B,{src:b,alt:"Right Logo"})]}),(0,d.jsxs)(S,{children:[(0,d.jsxs)(I,{children:[(0,d.jsx)(X,{src:(null===e||void 0===e?void 0:e.avatar)||g,alt:"User Avatar"}),(0,d.jsxs)(N,{children:[(0,d.jsxs)(P,{children:["ID: ",(null===e||void 0===e?void 0:e.id)||"5856722860"]}),(0,d.jsxs)(V,{children:["CP Level: ",(null===e||void 0===e?void 0:e.cpLevel)||"1"]})]})]}),(0,d.jsxs)(Q,{children:[(0,d.jsx)(M,{children:"Join Channel"}),(0,d.jsxs)(M,{children:[(0,d.jsx)(h.YXz,{})," ",(null===e||void 0===e?void 0:e.referrals)||0]})]})]}),(0,d.jsxs)(U,{onClick:be,children:[(0,d.jsx)(D,{children:(0,d.jsxs)(Y,{children:[(0,d.jsx)(L,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHlSURBVHgB7VRNTttQEJ55fpBU3fgG9RHIukJKNpXoyjkB6QnanoByAugJCicImyTdmcRILGNOgG+AJX4U4rwZ5lkyCgHygsKChT/J9puZ5/ne/LwBqFDhowNdGwbnHCzqJnXI2g3MSrk7Zr8+Af8l2yIUOMA5RTyjy/ln84Z+ze+pX5vw0XZnwmX+NDiAwPvACz95lDzbyPAbkZL7qU5gHUIG3BPWYF6Xk7cvn6RIpUQHHn5BouHO9sapy587QqQfBTGrf/IeIvIRznRqdbVbGjNiAFQ0QwtWgJOwPHV/ZECcp9+3dSF3I/aBKYA3wtk0r6HdwoyBbGozCf94lXSuDFur/ohDeAc4I7T3sHZDV4DU7ccUPbHFvPc/5p/loXpnNB6c8e5ahJCbpv0gwpE0TbNU2xpKSv8QcseSbd5yJFfIhxyGy9w5J411XNN0KUtfoTpkMhcT453YGvai6ZbS6BN6B5YMc9XaaWG6zJ+zSz9p2JWut2MrI6aOhOrXPLLy4dTfSMvINJq20SoQfQrrRNiLzVghJFx0I9iRlqFWDTszSzIbGWtzIO5CrVTj21d8ddo4a4gg7c/QsWRSs7+iyDg3W5/v8qCwl2lkOBbpxEwhg3XRH83CQZw37bq48BUqVHhPPADtx/KskrySCgAAAABJRU5ErkJggg==",alt:"NLOV"}),(null===e||void 0===e?void 0:e.tokenBalance)||5e3," NLOV"]})}),(0,d.jsxs)(H,{children:[(0,d.jsx)(T,{children:"Daily Code"}),(0,d.jsx)(T,{children:"Check-in"})]}),(0,d.jsxs)(Z,{ref:fe,children:[(0,d.jsx)(F,{src:v,alt:"Breathing Light",animate:{opacity:f?.8:.4,scale:f?[1,1.1,1]:1},transition:{duration:f?2:0,repeat:f?1/0:0}}),(0,d.jsx)(G,{children:(0,d.jsx)(K,{ref:de,src:x,alt:"Fan"})}),j.map((e=>(0,d.jsx)(O,{style:{left:e.startX,top:e.startY,"--translateX":`${e.translateX}px`,"--translateY":`${e.translateY}px`},children:"+1"},e.id))),(0,d.jsxs)(q,{children:[(0,d.jsxs)(J,{children:[(0,d.jsx)($,{}),(0,d.jsx)(W,{})]}),(0,d.jsxs)(_,{className:"switch",children:[(0,d.jsx)(ee,{type:"checkbox",checked:ce,onChange:me,disabled:f}),(0,d.jsx)(te,{className:"button",children:(0,d.jsx)(ne,{className:"icon",children:(0,d.jsx)("svg",{xmlSpace:"preserve",viewBox:"0 0 463 463",xmlns:"http://www.w3.org/2000/svg",id:"Capa_1",version:"1.1",fill:"#000000",children:(0,d.jsxs)("g",{children:[(0,d.jsx)("path",{d:"M259.476,280.364V247.5c0-12.958-10.542-23.5-23.5-23.5s-23.5,10.542-23.5,23.5v29.672 c0,35.757-13.173,70.087-37.094,96.665l-32.981,36.646c-2.771,3.079-2.521,7.821,0.558,10.593c3.078,2.771,7.82,2.521,10.592-0.558 l32.981-36.646c26.403-29.338,40.944-67.231,40.944-106.7V247.5c0-4.687,3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5v32.864 c0,44.003-16.301,86.167-45.901,118.727l-32.149,35.364c-2.786,3.064-2.56,7.809,0.505,10.595c1.437,1.307,3.242,1.95,5.042,1.95 c2.04,0,4.072-0.827,5.552-2.455l32.148-35.364C241.789,373.854,259.476,328.106,259.476,280.364z"}),(0,d.jsx)("path",{d:"M291.476,247.5c0-30.603-24.897-55.5-55.5-55.5s-55.5,24.897-55.5,55.5v29.672c0,27.839-10.256,54.566-28.879,75.258 l-23.447,26.053c-2.771,3.079-2.521,7.821,0.558,10.593c3.079,2.771,7.82,2.519,10.592-0.558l23.447-26.053 c21.106-23.451,32.73-53.742,32.73-85.293V247.5c0-22.332,18.168-40.5,40.5-40.5c22.332,0,40.5,18.168,40.5,40.5v32.864 c0,51.979-19.256,101.789-54.223,140.252l-27.125,29.839c-2.787,3.064-2.561,7.809,0.504,10.595c1.437,1.307,3.242,1.95,5.042,1.95 c2.04,0,4.072-0.827,5.552-2.455l27.126-29.839c37.481-41.23,58.123-94.622,58.123-150.342V247.5z"}),(0,d.jsx)("path",{d:"M323.476,247.5c0-48.248-39.252-87.5-87.5-87.5s-87.5,39.252-87.5,87.5v29.672c0,19.92-7.339,39.045-20.665,53.851 l-21.112,23.458c-2.771,3.079-2.521,7.821,0.558,10.593c3.078,2.771,7.821,2.519,10.592-0.558l21.112-23.458 c15.809-17.565,24.515-40.254,24.515-63.886V247.5c0-39.977,32.523-72.5,72.5-72.5s72.5,32.523,72.5,72.5v32.864 c0,59.958-22.212,117.412-62.545,161.777l-7.507,8.258c-2.786,3.065-2.56,7.809,0.505,10.595c1.437,1.306,3.243,1.95,5.042,1.95 c2.04,0,4.072-0.827,5.552-2.455l7.506-8.258c42.848-47.133,66.446-108.169,66.446-171.867V247.5z"})]})})})})]})]})]}),(0,d.jsxs)(ie,{children:[(0,d.jsxs)(re,{children:[(0,d.jsx)(ae,{children:l}),(0,d.jsx)(oe,{children:"Total Taps"})]}),(0,d.jsxs)(re,{children:[(0,d.jsx)(ae,{children:(null===e||void 0===e?void 0:e.cpLevel)||1}),(0,d.jsx)(oe,{children:"CP Level"})]}),f&&(0,d.jsxs)(re,{children:[(0,d.jsxs)(ae,{children:[Math.floor(w/60),":",w%60<10?"0":"",w%60]}),(0,d.jsx)(oe,{children:"Cooldown"})]})]})]}),(0,d.jsx)(y.A,{}),r&&(0,d.jsx)(u,{level:null===e||void 0===e?void 0:e.cpLevel,onClose:()=>a(!1)})]})})},925:(e,t,n)=>{e.exports=n.p+"static/media/bg5.46d030a9df38a64b5377.jpg"},2573:(e,t,n)=>{e.exports=n.p+"static/media/logo1.6708ad68fc8bcd8770a0.png"},7479:(e,t,n)=>{e.exports=n.p+"static/media/second.3eda13f42d197e1af8cf.png"},4193:(e,t,n)=>{n.d(t,{N:()=>x});var i=n(9930),r=n(5043),a=n(602),o=n(7188);var s=n(9674),c=n(4930),l=0;function d(){var e=l;return l++,e}var p=function(e){var t=e.children,n=e.initial,a=e.isPresent,o=e.onExitComplete,l=e.custom,p=e.presenceAffectsLayout,u=(0,c.M)(f),h=(0,c.M)(d),x=(0,r.useMemo)((function(){return{id:h,initial:n,isPresent:a,custom:l,onExitComplete:function(e){var t,n;u.set(e,!0);try{for(var r=(0,i.Ju)(u.values()),a=r.next();!a.done;a=r.next()){if(!a.value)return}}catch(s){t={error:s}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}null===o||void 0===o||o()},register:function(e){return u.set(e,!1),function(){return u.delete(e)}}}}),p?void 0:[a]);return(0,r.useMemo)((function(){u.forEach((function(e,t){return u.set(t,!1)}))}),[a]),r.useEffect((function(){!a&&!u.size&&(null===o||void 0===o||o())}),[a]),r.createElement(s.t.Provider,{value:x},t)};function f(){return new Map}var u=n(2190);function h(e){return e.key||""}var x=function(e){var t=e.children,n=e.custom,s=e.initial,c=void 0===s||s,l=e.onExitComplete,d=e.exitBeforeEnter,f=e.presenceAffectsLayout,x=void 0===f||f,g=(0,i.zs)(function(){var e=(0,r.useRef)(!1),t=(0,i.zs)((0,r.useState)(0),2),n=t[0],s=t[1];(0,o.l)((function(){return e.current=!0}));var c=(0,r.useCallback)((function(){!e.current&&s(n+1)}),[n]);return[(0,r.useCallback)((function(){return a.Ay.postRender(c)}),[c]),n]}(),1),v=g[0],A=(0,r.useContext)(u.L).forceRender;A&&(v=A);var b=(0,r.useRef)(!0),m=(0,r.useRef)(!0);(0,r.useEffect)((function(){return function(){m.current=!1}}),[]);var y=function(e){var t=[];return r.Children.forEach(e,(function(e){(0,r.isValidElement)(e)&&t.push(e)})),t}(t),w=(0,r.useRef)(y),k=(0,r.useRef)(new Map).current,j=(0,r.useRef)(new Set).current;if(function(e,t){e.forEach((function(e){var n=h(e);t.set(n,e)}))}(y,k),b.current)return b.current=!1,r.createElement(r.Fragment,null,y.map((function(e){return r.createElement(p,{key:h(e),isPresent:!0,initial:!!c&&void 0,presenceAffectsLayout:x},e)})));for(var C=(0,i.fX)([],(0,i.zs)(y),!1),z=w.current.map(h),E=y.map(h),R=z.length,B=0;B<R;B++){var S=z[B];-1===E.indexOf(S)?j.add(S):j.delete(S)}return d&&j.size&&(C=[]),j.forEach((function(e){if(-1===E.indexOf(e)){var t=k.get(e);if(t){var i=z.indexOf(e);C.splice(i,0,r.createElement(p,{key:h(t),isPresent:!1,onExitComplete:function(){k.delete(e),j.delete(e);var t=w.current.findIndex((function(t){return t.key===e}));if(w.current.splice(t,1),!j.size){if(w.current=y,!1===m.current)return;v(),l&&l()}},custom:n,presenceAffectsLayout:x},t))}}})),C=C.map((function(e){var t=e.key;return j.has(t)?e:r.createElement(p,{key:h(e),isPresent:!0,presenceAffectsLayout:x},e)})),w.current=C,r.createElement(r.Fragment,null,j.size?C:C.map((function(e){return(0,r.cloneElement)(e)})))}}}]);
//# sourceMappingURL=642.7a649f82.chunk.js.map