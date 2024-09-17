"use strict";(self.webpackChunkneurolov_webapp=self.webpackChunkneurolov_webapp||[]).push([[678],{2999:(e,r,t)=>{t.d(r,{A:()=>d});t(5043);var n=t(6867),i=t(3216),a=t(2774),o=t(579);const s=n.Ay.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to right, #071665, #0348B2, #0870DE);
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  z-index: 1000;
`,l=n.Ay.div`
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
`,c=n.Ay.div`
  font-size: 12px;
  margin-top: 4px;
`,d=()=>{const e=(0,i.Zp)(),r=(0,i.zy)(),t=[{path:"/home",icon:a.rQ8,label:"Home"},{path:"/quest",icon:a.KP4,label:"Quest"},{path:"/leaderboard",icon:a.v$b,label:"Leaderboard"},{path:"/invite",icon:a.YXz,label:"Invite"},{path:"/profile",icon:a.x$1,label:"Profile"},{path:"/settings",icon:a.Pcn,label:"Settings"}];return(0,o.jsx)(s,{children:t.map((t=>(0,o.jsxs)(l,{active:r.pathname===t.path,onClick:()=>e(t.path),children:[(0,o.jsx)(t.icon,{}),(0,o.jsx)(c,{children:t.label})]},t.path)))})}},4634:(e,r,t)=>{t.d(r,{A:()=>a});var n=t(5043),i=t(9628);const a=e=>{const[r,t]=(0,n.useState)(null),[a,o]=(0,n.useState)(!1),[s,l]=(0,n.useState)(null);return{execute:(0,n.useCallback)((async function(){try{o(!0),l(null);const r=await e(...arguments);return t(r),r}catch(r){throw l(r),i.oR.error("An error occurred. Please try again later."),console.error("API Error:",r),r}finally{o(!1)}}),[e]),data:r,loading:a,error:s}}},7678:(e,r,t)=>{t.r(r),t.d(r,{default:()=>O});var n=t(5043),i=t(6867),a=t(2332),o=t(4193),s=t(9621),l=t(4634),c=t(2999),d=t(2774),f=t(3846),u=t(7479),p=t(6387),x=t(2573),h=t(925),v=t(579);const g=(0,i.Ay)(a.P.div)`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  color: #ffffff;
  background: linear-gradient(180deg, #000033 0%, #000066 100%);
  background-image: url(${h});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
`,m=i.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 1000;
`,A=i.Ay.img`
  height: 40px;
  width: auto;
`,y=i.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px 70px;
  overflow-y: auto;
`,b=i.Ay.h1`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`,w=i.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`,j=i.Ay.div`
  display: flex;
  align-items: center;
`,k=i.Ay.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`,E=i.Ay.span`
  font-size: 18px;
  font-weight: bold;
`,R=i.Ay.span`
  font-size: 14px;
  opacity: 0.8;
`,z=i.Ay.div`
  display: flex;
  align-items: center;
`,C=(0,i.Ay)(d.YXz)`
  margin-right: 5px;
`,S=i.Ay.div`
  width: 100%;
  margin-bottom: 30px;
`,B=i.Ay.h3`
  font-size: 18px;
  margin-bottom: 15px;
  text-align: center;
`,N=(0,i.Ay)(a.P.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,P=i.Ay.div`
  display: flex;
  align-items: center;
`,Q=i.Ay.span`
  font-size: 16px;
`,V=(0,i.Ay)(a.P.button)`
  background: #3d85c6;
  color: #ffffff;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
`,K=i.Ay.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`,X=i.Ay.div`
  width: 100%;
  margin-bottom: 20px;
`,Z=i.Ay.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,H=i.Ay.span`
  font-size: 14px;
  opacity: 0.8;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,L=i.Ay.div`
  display: flex;
  gap: 10px;
`,Y=(0,i.Ay)(a.P.button)`
  background: #3d85c6;
  color: #ffffff;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,D=i.Ay.div`
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
`,U=i.Ay.div`
  width: 100%;
`,F=i.Ay.h3`
  font-size: 18px;
  margin-bottom: 15px;
`,I=i.Ay.p`
  text-align: center;
  opacity: 0.8;
`,O=()=>{const{user:e}=(0,f.A)(),[r,t]=(0,n.useState)(""),[i,a]=(0,n.useState)(null),{execute:h}=(0,l.A)(s.e$),{execute:O}=(0,l.A)(s.N7),{execute:T}=(0,l.A)(s.t0);(0,n.useEffect)((()=>{(async()=>{if(null!==e&&void 0!==e&&e.referralCode)t(e.referralCode);else try{const{referralCode:e}=await h();t(e)}catch(r){console.error("Failed to generate referral code:",r)}})(),(async()=>{try{const e=await T();a(e)}catch(e){console.error("Failed to fetch referral stats:",e)}})()}),[e,h,T]);const G=()=>{navigator.clipboard.writeText(`https://t.me/OfficialNeroBot?start=${r}`)};return(0,v.jsxs)(g,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,v.jsxs)(m,{children:[(0,v.jsx)(A,{src:p,alt:"New Logo"}),(0,v.jsx)(A,{src:x,alt:"Neurolov Logo"})]}),(0,v.jsxs)(y,{children:[(0,v.jsx)(b,{children:"Refer and Earn"}),(0,v.jsxs)(w,{children:[(0,v.jsxs)(j,{children:[(0,v.jsx)(k,{src:(null===e||void 0===e?void 0:e.avatar)||u,alt:"User Avatar"}),(0,v.jsxs)("div",{children:[(0,v.jsx)(E,{children:(null===e||void 0===e?void 0:e.username)||"User"}),(0,v.jsxs)(R,{children:["CP ",(null===e||void 0===e?void 0:e.cpLevel)||1]})]})]}),(0,v.jsxs)(z,{children:[(0,v.jsx)(C,{})," ",(null===i||void 0===i?void 0:i.totalReferrals)||0," Referrals"]})]}),(0,v.jsxs)(S,{children:[(0,v.jsx)(B,{children:"Referral Rewards"}),(0,v.jsx)(o.N,{children:[{id:1,friends:1,reward:1e4},{id:2,friends:3,reward:5e4},{id:3,friends:5,reward:15e4}].map((e=>(0,v.jsxs)(N,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[(0,v.jsxs)(P,{children:[(0,v.jsx)(C,{}),(0,v.jsxs)(Q,{children:["Invite ",e.friends," friend",e.friends>1?"s":""]})]}),(0,v.jsxs)(Q,{children:[e.reward.toLocaleString()," XP"]}),(0,v.jsx)(V,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>(async e=>{console.log(`Claiming reward ${e}`)})(e.id),disabled:(null===i||void 0===i?void 0:i.totalReferrals)<e.friends,children:(null===i||void 0===i?void 0:i.totalReferrals)>=e.friends?"Claim":"Locked"})]},e.id)))})]}),(0,v.jsxs)(K,{children:[(null===i||void 0===i?void 0:i.totalReferrals)||0," Users"]}),(0,v.jsx)(X,{children:(0,v.jsxs)(Z,{children:[(0,v.jsxs)(H,{children:["https://t.me/OfficialNeroBot?start=",r]}),(0,v.jsxs)(L,{children:[(0,v.jsxs)(Y,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:G,children:[(0,v.jsx)(d.paH,{}),"Copy"]}),(0,v.jsxs)(Y,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>{navigator.share?navigator.share({title:"Join me on Neurolov!",text:"Use my referral code to get started!",url:`https://t.me/OfficialNeroBot?start=${r}`}).catch(console.error):G()},children:[(0,v.jsx)(d.eb3,{}),"Share"]})]})]})}),(0,v.jsx)(D,{children:"Invite and get 0.5% Bonus for each friend"}),(0,v.jsxs)(U,{children:[(0,v.jsx)(F,{children:"My Referrals:"}),null!==i&&void 0!==i&&i.referrals&&i.referrals.length>0?i.referrals.map(((e,r)=>(0,v.jsxs)(N,{children:[(0,v.jsxs)(j,{children:[(0,v.jsx)(k,{src:e.avatar||u,alt:e.username}),(0,v.jsx)(E,{children:e.username})]}),(0,v.jsxs)(R,{children:["CP ",e.cpLevel]})]},r))):(0,v.jsx)(I,{children:"You don't have referrals yet \ud83d\ude22"})]})]}),(0,v.jsx)(c.A,{})]})}},925:(e,r,t)=>{e.exports=t.p+"static/media/bg5.46d030a9df38a64b5377.jpg"},2573:(e,r,t)=>{e.exports=t.p+"static/media/logo1.6708ad68fc8bcd8770a0.png"},6387:e=>{e.exports="data:image/png;base64,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"},7479:(e,r,t)=>{e.exports=t.p+"static/media/second.3eda13f42d197e1af8cf.png"},4193:(e,r,t)=>{t.d(r,{N:()=>h});var n=t(9930),i=t(5043),a=t(602),o=t(7188);var s=t(9674),l=t(4930),c=0;function d(){var e=c;return c++,e}var f=function(e){var r=e.children,t=e.initial,a=e.isPresent,o=e.onExitComplete,c=e.custom,f=e.presenceAffectsLayout,p=(0,l.M)(u),x=(0,l.M)(d),h=(0,i.useMemo)((function(){return{id:x,initial:t,isPresent:a,custom:c,onExitComplete:function(e){var r,t;p.set(e,!0);try{for(var i=(0,n.Ju)(p.values()),a=i.next();!a.done;a=i.next()){if(!a.value)return}}catch(s){r={error:s}}finally{try{a&&!a.done&&(t=i.return)&&t.call(i)}finally{if(r)throw r.error}}null===o||void 0===o||o()},register:function(e){return p.set(e,!1),function(){return p.delete(e)}}}}),f?void 0:[a]);return(0,i.useMemo)((function(){p.forEach((function(e,r){return p.set(r,!1)}))}),[a]),i.useEffect((function(){!a&&!p.size&&(null===o||void 0===o||o())}),[a]),i.createElement(s.t.Provider,{value:h},r)};function u(){return new Map}var p=t(2190);function x(e){return e.key||""}var h=function(e){var r=e.children,t=e.custom,s=e.initial,l=void 0===s||s,c=e.onExitComplete,d=e.exitBeforeEnter,u=e.presenceAffectsLayout,h=void 0===u||u,v=(0,n.zs)(function(){var e=(0,i.useRef)(!1),r=(0,n.zs)((0,i.useState)(0),2),t=r[0],s=r[1];(0,o.l)((function(){return e.current=!0}));var l=(0,i.useCallback)((function(){!e.current&&s(t+1)}),[t]);return[(0,i.useCallback)((function(){return a.Ay.postRender(l)}),[l]),t]}(),1),g=v[0],m=(0,i.useContext)(p.L).forceRender;m&&(g=m);var A=(0,i.useRef)(!0),y=(0,i.useRef)(!0);(0,i.useEffect)((function(){return function(){y.current=!1}}),[]);var b=function(e){var r=[];return i.Children.forEach(e,(function(e){(0,i.isValidElement)(e)&&r.push(e)})),r}(r),w=(0,i.useRef)(b),j=(0,i.useRef)(new Map).current,k=(0,i.useRef)(new Set).current;if(function(e,r){e.forEach((function(e){var t=x(e);r.set(t,e)}))}(b,j),A.current)return A.current=!1,i.createElement(i.Fragment,null,b.map((function(e){return i.createElement(f,{key:x(e),isPresent:!0,initial:!!l&&void 0,presenceAffectsLayout:h},e)})));for(var E=(0,n.fX)([],(0,n.zs)(b),!1),R=w.current.map(x),z=b.map(x),C=R.length,S=0;S<C;S++){var B=R[S];-1===z.indexOf(B)?k.add(B):k.delete(B)}return d&&k.size&&(E=[]),k.forEach((function(e){if(-1===z.indexOf(e)){var r=j.get(e);if(r){var n=R.indexOf(e);E.splice(n,0,i.createElement(f,{key:x(r),isPresent:!1,onExitComplete:function(){j.delete(e),k.delete(e);var r=w.current.findIndex((function(r){return r.key===e}));if(w.current.splice(r,1),!k.size){if(w.current=b,!1===y.current)return;g(),c&&c()}},custom:t,presenceAffectsLayout:h},r))}}})),E=E.map((function(e){var r=e.key;return k.has(r)?e:i.createElement(f,{key:x(e),isPresent:!0,presenceAffectsLayout:h},e)})),w.current=E,i.createElement(i.Fragment,null,k.size?E:E.map((function(e){return(0,i.cloneElement)(e)})))}}}]);
//# sourceMappingURL=678.29912cc2.chunk.js.map