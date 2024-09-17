"use strict";(self.webpackChunkneurolov_webapp=self.webpackChunkneurolov_webapp||[]).push([[202],{2999:(e,i,n)=>{n.d(i,{A:()=>d});n(5043);var t=n(6867),r=n(3216),a=n(2774),o=n(579);const s=t.Ay.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to right, #071665, #0348B2, #0870DE);
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  z-index: 1000;
`,c=t.Ay.div`
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
`,l=t.Ay.div`
  font-size: 12px;
  margin-top: 4px;
`,d=()=>{const e=(0,r.Zp)(),i=(0,r.zy)(),n=[{path:"/home",icon:a.rQ8,label:"Home"},{path:"/quest",icon:a.KP4,label:"Quest"},{path:"/leaderboard",icon:a.v$b,label:"Leaderboard"},{path:"/invite",icon:a.YXz,label:"Invite"},{path:"/profile",icon:a.x$1,label:"Profile"},{path:"/settings",icon:a.Pcn,label:"Settings"}];return(0,o.jsx)(s,{children:n.map((n=>(0,o.jsxs)(c,{active:i.pathname===n.path,onClick:()=>e(n.path),children:[(0,o.jsx)(n.icon,{}),(0,o.jsx)(l,{children:n.label})]},n.path)))})}},4634:(e,i,n)=>{n.d(i,{A:()=>a});var t=n(5043),r=n(9628);const a=e=>{const[i,n]=(0,t.useState)(null),[a,o]=(0,t.useState)(!1),[s,c]=(0,t.useState)(null);return{execute:(0,t.useCallback)((async function(){try{o(!0),c(null);const i=await e(...arguments);return n(i),i}catch(i){throw c(i),r.oR.error("An error occurred. Please try again later."),console.error("API Error:",i),i}finally{o(!1)}}),[e]),data:i,loading:a,error:s}}},2202:(e,i,n)=>{n.r(i),n.d(i,{default:()=>Z});var t=n(5043),r=n(6867),a=n(2332),o=n(4193),s=n(3846),c=n(9621),l=n(4634),d=n(2999),u=n(2774),p=n(6387),x=n(2573),f=n(925),h=n(579);const y=(0,r.Ay)(a.P.div)`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  color: #ffffff;
  background: linear-gradient(180deg, #000033 0%, #000066 100%);
  background-image: url(${f});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
`,g=r.Ay.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`,A=r.Ay.img`
  height: 40px;
  width: auto;
`,m=r.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 80px 20px 70px;
  overflow-y: auto;
`,v=r.Ay.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`,j=r.Ay.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
`,b=r.Ay.div`
  flex: 1;
`,k=r.Ay.h2`
  margin: 0;
  font-size: 20px;
`,w=r.Ay.p`
  margin: 5px 0 0;
  font-size: 14px;
  opacity: 0.8;
`,E=(0,r.Ay)(a.P.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
`,C=r.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`,S=r.Ay.span`
  display: flex;
  align-items: center;
  font-size: 16px;
`,R=r.Ay.span`
  margin-right: 10px;
`,z=(0,r.Ay)(a.P.div)`
  width: 50px;
  height: 24px;
  background-color: ${e=>e.isOn?"#00c853":"#ccc"};
  display: flex;
  justify-content: ${e=>e.isOn?"flex-end":"flex-start"};
  border-radius: 50px;
  padding: 2px;
  cursor: pointer;
`,P=(0,r.Ay)(a.P.div)`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
`,V=r.Ay.select`
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
`,Q=(0,r.Ay)(a.P.button)`
  background: ${e=>e.danger?"#d32f2f":"#3d85c6"};
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
`,Z=()=>{const{user:e,logout:i}=(0,s.A)(),[n,r]=(0,t.useState)(!0),[a,f]=(0,t.useState)(!0),[Z,B]=(0,t.useState)("English"),[N,D]=(0,t.useState)(!0),{execute:K,loading:L,error:X}=(0,l.A)(c.Xx),F=e=>()=>e((e=>!e));return(0,h.jsxs)(y,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,h.jsxs)(g,{children:[(0,h.jsx)(A,{src:p,alt:"Left Logo"}),(0,h.jsx)(A,{src:x,alt:"Right Logo"})]}),(0,h.jsxs)(m,{children:[(0,h.jsxs)(v,{children:[(0,h.jsx)(j,{src:null===e||void 0===e?void 0:e.avatar,alt:null===e||void 0===e?void 0:e.username}),(0,h.jsxs)(b,{children:[(0,h.jsx)(k,{children:null===e||void 0===e?void 0:e.username}),(0,h.jsxs)(w,{children:["Level: ",null===e||void 0===e?void 0:e.level]})]})]}),(0,h.jsxs)(o.N,{children:[(0,h.jsx)(E,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:(0,h.jsxs)(C,{children:[(0,h.jsxs)(S,{children:[(0,h.jsx)(R,{children:(0,h.jsx)(u.jNV,{})}),"Alert Notifications"]}),(0,h.jsx)(z,{isOn:n,onClick:F(r),children:(0,h.jsx)(P,{layout:!0,transition:{type:"spring",stiffness:700,damping:30}})})]})}),(0,h.jsx)(E,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:(0,h.jsxs)(C,{children:[(0,h.jsxs)(S,{children:[(0,h.jsx)(R,{children:(0,h.jsx)(u.FZ2,{})}),"Sound & Vibration"]}),(0,h.jsx)(z,{isOn:a,onClick:F(f),children:(0,h.jsx)(P,{layout:!0,transition:{type:"spring",stiffness:700,damping:30}})})]})}),(0,h.jsx)(E,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:(0,h.jsxs)(C,{children:[(0,h.jsxs)(S,{children:[(0,h.jsx)(R,{children:(0,h.jsx)(u.f35,{})}),"Change Language"]}),(0,h.jsxs)(V,{value:Z,onChange:e=>B(e.target.value),children:[(0,h.jsx)("option",{value:"English",children:"English"}),(0,h.jsx)("option",{value:"Spanish",children:"Espa\xf1ol"}),(0,h.jsx)("option",{value:"French",children:"Fran\xe7ais"})]})]})}),(0,h.jsx)(E,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:(0,h.jsxs)(C,{children:[(0,h.jsxs)(S,{children:[(0,h.jsx)(R,{children:(0,h.jsx)(u.Ny1,{})}),"Profile Visibility and Data Sharing"]}),(0,h.jsx)(z,{isOn:N,onClick:F(D),children:(0,h.jsx)(P,{layout:!0,transition:{type:"spring",stiffness:700,damping:30}})})]})}),(0,h.jsx)(E,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:(0,h.jsx)(C,{children:(0,h.jsxs)(S,{children:[(0,h.jsx)(R,{children:(0,h.jsx)(u.gZZ,{})}),"Frequently Asked Questions"]})})}),(0,h.jsx)(E,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:(0,h.jsx)(C,{children:(0,h.jsxs)(S,{children:[(0,h.jsx)(R,{children:(0,h.jsx)(u.SMR,{})}),"Privacy Policy"]})})}),(0,h.jsx)(E,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:(0,h.jsx)(C,{children:(0,h.jsxs)(S,{children:[(0,h.jsx)(R,{children:(0,h.jsx)(u.MTc,{})}),"Terms of Service"]})})})]}),(0,h.jsxs)(Q,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>{i()},children:[(0,h.jsx)(R,{children:(0,h.jsx)(u.axc,{})}),"Logout Account"]}),(0,h.jsxs)(Q,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>{},danger:!0,children:[(0,h.jsx)(R,{children:(0,h.jsx)(u.qbC,{})}),"Delete Account"]})]}),(0,h.jsx)(d.A,{})]})}},925:(e,i,n)=>{e.exports=n.p+"static/media/bg5.46d030a9df38a64b5377.jpg"},2573:(e,i,n)=>{e.exports=n.p+"static/media/logo1.6708ad68fc8bcd8770a0.png"},6387:e=>{e.exports="data:image/png;base64,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"},4193:(e,i,n)=>{n.d(i,{N:()=>h});var t=n(9930),r=n(5043),a=n(602),o=n(7188);var s=n(9674),c=n(4930),l=0;function d(){var e=l;return l++,e}var u=function(e){var i=e.children,n=e.initial,a=e.isPresent,o=e.onExitComplete,l=e.custom,u=e.presenceAffectsLayout,x=(0,c.M)(p),f=(0,c.M)(d),h=(0,r.useMemo)((function(){return{id:f,initial:n,isPresent:a,custom:l,onExitComplete:function(e){var i,n;x.set(e,!0);try{for(var r=(0,t.Ju)(x.values()),a=r.next();!a.done;a=r.next()){if(!a.value)return}}catch(s){i={error:s}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(i)throw i.error}}null===o||void 0===o||o()},register:function(e){return x.set(e,!1),function(){return x.delete(e)}}}}),u?void 0:[a]);return(0,r.useMemo)((function(){x.forEach((function(e,i){return x.set(i,!1)}))}),[a]),r.useEffect((function(){!a&&!x.size&&(null===o||void 0===o||o())}),[a]),r.createElement(s.t.Provider,{value:h},i)};function p(){return new Map}var x=n(2190);function f(e){return e.key||""}var h=function(e){var i=e.children,n=e.custom,s=e.initial,c=void 0===s||s,l=e.onExitComplete,d=e.exitBeforeEnter,p=e.presenceAffectsLayout,h=void 0===p||p,y=(0,t.zs)(function(){var e=(0,r.useRef)(!1),i=(0,t.zs)((0,r.useState)(0),2),n=i[0],s=i[1];(0,o.l)((function(){return e.current=!0}));var c=(0,r.useCallback)((function(){!e.current&&s(n+1)}),[n]);return[(0,r.useCallback)((function(){return a.Ay.postRender(c)}),[c]),n]}(),1),g=y[0],A=(0,r.useContext)(x.L).forceRender;A&&(g=A);var m=(0,r.useRef)(!0),v=(0,r.useRef)(!0);(0,r.useEffect)((function(){return function(){v.current=!1}}),[]);var j=function(e){var i=[];return r.Children.forEach(e,(function(e){(0,r.isValidElement)(e)&&i.push(e)})),i}(i),b=(0,r.useRef)(j),k=(0,r.useRef)(new Map).current,w=(0,r.useRef)(new Set).current;if(function(e,i){e.forEach((function(e){var n=f(e);i.set(n,e)}))}(j,k),m.current)return m.current=!1,r.createElement(r.Fragment,null,j.map((function(e){return r.createElement(u,{key:f(e),isPresent:!0,initial:!!c&&void 0,presenceAffectsLayout:h},e)})));for(var E=(0,t.fX)([],(0,t.zs)(j),!1),C=b.current.map(f),S=j.map(f),R=C.length,z=0;z<R;z++){var P=C[z];-1===S.indexOf(P)?w.add(P):w.delete(P)}return d&&w.size&&(E=[]),w.forEach((function(e){if(-1===S.indexOf(e)){var i=k.get(e);if(i){var t=C.indexOf(e);E.splice(t,0,r.createElement(u,{key:f(i),isPresent:!1,onExitComplete:function(){k.delete(e),w.delete(e);var i=b.current.findIndex((function(i){return i.key===e}));if(b.current.splice(i,1),!w.size){if(b.current=j,!1===v.current)return;g(),l&&l()}},custom:n,presenceAffectsLayout:h},i))}}})),E=E.map((function(e){var i=e.key;return w.has(i)?e:r.createElement(u,{key:f(e),isPresent:!0,presenceAffectsLayout:h},e)})),b.current=E,r.createElement(r.Fragment,null,w.size?E:E.map((function(e){return(0,r.cloneElement)(e)})))}}}]);
//# sourceMappingURL=202.53e5fa8c.chunk.js.map