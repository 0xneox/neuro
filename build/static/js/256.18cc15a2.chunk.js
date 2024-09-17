"use strict";(self.webpackChunkneurolov_webapp=self.webpackChunkneurolov_webapp||[]).push([[256],{2999:(e,t,r)=>{r.d(t,{A:()=>u});r(5043);var n=r(6867),a=r(3216),i=r(2774),o=r(579);const c=n.Ay.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to right, #071665, #0348B2, #0870DE);
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  z-index: 1000;
`,s=n.Ay.div`
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
`,l=n.Ay.div`
  font-size: 12px;
  margin-top: 4px;
`,u=()=>{const e=(0,a.Zp)(),t=(0,a.zy)(),r=[{path:"/home",icon:i.rQ8,label:"Home"},{path:"/quest",icon:i.KP4,label:"Quest"},{path:"/leaderboard",icon:i.v$b,label:"Leaderboard"},{path:"/invite",icon:i.YXz,label:"Invite"},{path:"/profile",icon:i.x$1,label:"Profile"},{path:"/settings",icon:i.Pcn,label:"Settings"}];return(0,o.jsx)(c,{children:r.map((r=>(0,o.jsxs)(s,{active:t.pathname===r.path,onClick:()=>e(r.path),children:[(0,o.jsx)(r.icon,{}),(0,o.jsx)(l,{children:r.label})]},r.path)))})}},2256:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var n=r(5043),a=r(6867),i=r(2332),o=r(4193),c=r(2999);const s=r.p+"static/media/trophy.3fadcf4d75076a228b075fff23b43752.svg";var l=r(925),u=r(6387),d=r(2573),p=r(7479),f=r(579);const m=(0,a.Ay)(i.P.div)`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  color: #ffffff;
  background-color: #000033;
  background-image: url(${l});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
`,x=a.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  position: absolute;
  top: 0;
`,h=a.Ay.img`
  height: 40px;
  width: auto;
`,A=a.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px; // To account for the fixed header
`,v=a.Ay.h1`
  font-size: 28px;
  text-align: center;
  margin-bottom: 10px;
`,y=a.Ay.p`
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
  opacity: 0.8;
`,g=a.Ay.img`
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
`,w=a.Ay.div`
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
`,b=a.Ay.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  width: 100%;
`,P=(0,a.Ay)(i.P.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`,k=a.Ay.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid ${e=>e.borderColor};
`,E=a.Ay.span`
  font-size: 14px;
  margin-top: 5px;
`,j=a.Ay.table`
  width: 100%;
  border-collapse: collapse;
`,z=(0,a.Ay)(i.P.tr)`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,S=a.Ay.td`
  padding: 10px 5px;
  font-size: 14px;
`,R=[{_id:"1",username:"Player1",avatar:p,computePower:5e3},{_id:"2",username:"Player2",avatar:p,computePower:4500},{_id:"3",username:"Player3",avatar:p,computePower:4e3},{_id:"4",username:"Player4",avatar:p,computePower:3500},{_id:"5",username:"Player5",avatar:p,computePower:3e3},{_id:"6",username:"Player6",avatar:p,computePower:2500},{_id:"7",username:"Player7",avatar:p,computePower:2e3},{_id:"8",username:"Player8",avatar:p,computePower:1500},{_id:"9",username:"Player9",avatar:p,computePower:1e3},{_id:"10",username:"Player10",avatar:p,computePower:500}],C=()=>{const[e,t]=(0,n.useState)(86400),[r,a]=(0,n.useState)(R);(0,n.useEffect)((()=>{const e=setInterval((()=>{t((e=>e>0?e-1:86400))}),1e3);return()=>clearInterval(e)}),[]);return(0,f.jsxs)(m,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,f.jsxs)(x,{children:[(0,f.jsx)(h,{src:u,alt:"New Logo"}),(0,f.jsx)(h,{src:d,alt:"Neurolov Logo"})]}),(0,f.jsxs)(A,{children:[(0,f.jsx)(v,{children:"Wall of Fame"}),(0,f.jsx)(y,{children:"Play game daily and stand a chance to win rewards!"}),(0,f.jsx)(g,{src:s,alt:"Trophy"}),(0,f.jsxs)(w,{children:["The leaderboard will reset in: ",(e=>{const t=Math.floor(e/3600),r=Math.floor(e%3600/60),n=e%60;return`${t.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`})(e)]}),(0,f.jsx)(b,{children:r.slice(0,3).map(((e,t)=>(0,f.jsxs)(P,{initial:{scale:0},animate:{scale:1},transition:{delay:.2*t},children:[(0,f.jsx)(k,{src:e.avatar,alt:e.username,borderColor:["gold","silver","#cd7f32"][t]}),(0,f.jsx)(E,{children:e.username})]},e._id)))}),(0,f.jsx)(j,{children:(0,f.jsx)(o.N,{children:r.map(((e,t)=>(0,f.jsxs)(z,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{delay:.1*t},children:[(0,f.jsx)(S,{children:t+1}),(0,f.jsx)(S,{children:e.username}),(0,f.jsx)(S,{children:e.computePower.toLocaleString()})]},e._id)))})})]}),(0,f.jsx)(c.A,{})]})}},925:(e,t,r)=>{e.exports=r.p+"static/media/bg5.46d030a9df38a64b5377.jpg"},2573:(e,t,r)=>{e.exports=r.p+"static/media/logo1.6708ad68fc8bcd8770a0.png"},6387:e=>{e.exports="data:image/png;base64,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"},7479:(e,t,r)=>{e.exports=r.p+"static/media/second.3eda13f42d197e1af8cf.png"},4193:(e,t,r)=>{r.d(t,{N:()=>x});var n=r(9930),a=r(5043),i=r(602),o=r(7188);var c=r(9674),s=r(4930),l=0;function u(){var e=l;return l++,e}var d=function(e){var t=e.children,r=e.initial,i=e.isPresent,o=e.onExitComplete,l=e.custom,d=e.presenceAffectsLayout,f=(0,s.M)(p),m=(0,s.M)(u),x=(0,a.useMemo)((function(){return{id:m,initial:r,isPresent:i,custom:l,onExitComplete:function(e){var t,r;f.set(e,!0);try{for(var a=(0,n.Ju)(f.values()),i=a.next();!i.done;i=a.next()){if(!i.value)return}}catch(c){t={error:c}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}null===o||void 0===o||o()},register:function(e){return f.set(e,!1),function(){return f.delete(e)}}}}),d?void 0:[i]);return(0,a.useMemo)((function(){f.forEach((function(e,t){return f.set(t,!1)}))}),[i]),a.useEffect((function(){!i&&!f.size&&(null===o||void 0===o||o())}),[i]),a.createElement(c.t.Provider,{value:x},t)};function p(){return new Map}var f=r(2190);function m(e){return e.key||""}var x=function(e){var t=e.children,r=e.custom,c=e.initial,s=void 0===c||c,l=e.onExitComplete,u=e.exitBeforeEnter,p=e.presenceAffectsLayout,x=void 0===p||p,h=(0,n.zs)(function(){var e=(0,a.useRef)(!1),t=(0,n.zs)((0,a.useState)(0),2),r=t[0],c=t[1];(0,o.l)((function(){return e.current=!0}));var s=(0,a.useCallback)((function(){!e.current&&c(r+1)}),[r]);return[(0,a.useCallback)((function(){return i.Ay.postRender(s)}),[s]),r]}(),1),A=h[0],v=(0,a.useContext)(f.L).forceRender;v&&(A=v);var y=(0,a.useRef)(!0),g=(0,a.useRef)(!0);(0,a.useEffect)((function(){return function(){g.current=!1}}),[]);var w=function(e){var t=[];return a.Children.forEach(e,(function(e){(0,a.isValidElement)(e)&&t.push(e)})),t}(t),b=(0,a.useRef)(w),P=(0,a.useRef)(new Map).current,k=(0,a.useRef)(new Set).current;if(function(e,t){e.forEach((function(e){var r=m(e);t.set(r,e)}))}(w,P),y.current)return y.current=!1,a.createElement(a.Fragment,null,w.map((function(e){return a.createElement(d,{key:m(e),isPresent:!0,initial:!!s&&void 0,presenceAffectsLayout:x},e)})));for(var E=(0,n.fX)([],(0,n.zs)(w),!1),j=b.current.map(m),z=w.map(m),S=j.length,R=0;R<S;R++){var C=j[R];-1===z.indexOf(C)?k.add(C):k.delete(C)}return u&&k.size&&(E=[]),k.forEach((function(e){if(-1===z.indexOf(e)){var t=P.get(e);if(t){var n=j.indexOf(e);E.splice(n,0,a.createElement(d,{key:m(t),isPresent:!1,onExitComplete:function(){P.delete(e),k.delete(e);var t=b.current.findIndex((function(t){return t.key===e}));if(b.current.splice(t,1),!k.size){if(b.current=w,!1===g.current)return;A(),l&&l()}},custom:r,presenceAffectsLayout:x},t))}}})),E=E.map((function(e){var t=e.key;return k.has(t)?e:a.createElement(d,{key:m(e),isPresent:!0,presenceAffectsLayout:x},e)})),b.current=E,a.createElement(a.Fragment,null,k.size?E:E.map((function(e){return(0,a.cloneElement)(e)})))}}}]);
//# sourceMappingURL=256.18cc15a2.chunk.js.map