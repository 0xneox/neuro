"use strict";(self.webpackChunkneurolov_webapp=self.webpackChunkneurolov_webapp||[]).push([[849],{2999:(e,i,t)=>{t.d(i,{A:()=>s});t(5043);var o=t(6867),n=t(3216),r=t(2774),c=t(579);const a=o.Ay.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to right, #071665, #0348B2, #0870DE);
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  z-index: 1000;
`,d=o.Ay.div`
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
`,l=o.Ay.div`
  font-size: 12px;
  margin-top: 4px;
`,s=()=>{const e=(0,n.Zp)(),i=(0,n.zy)(),t=[{path:"/home",icon:r.rQ8,label:"Home"},{path:"/quest",icon:r.KP4,label:"Quest"},{path:"/leaderboard",icon:r.v$b,label:"Leaderboard"},{path:"/invite",icon:r.YXz,label:"Invite"},{path:"/profile",icon:r.x$1,label:"Profile"},{path:"/settings",icon:r.Pcn,label:"Settings"}];return(0,c.jsx)(a,{children:t.map((t=>(0,c.jsxs)(d,{active:i.pathname===t.path,onClick:()=>e(t.path),children:[(0,c.jsx)(t.icon,{}),(0,c.jsx)(l,{children:t.label})]},t.path)))})}},4634:(e,i,t)=>{t.d(i,{A:()=>r});var o=t(5043),n=t(9628);const r=e=>{const[i,t]=(0,o.useState)(null),[r,c]=(0,o.useState)(!1),[a,d]=(0,o.useState)(null);return{execute:(0,o.useCallback)((async function(){try{c(!0),d(null);const i=await e(...arguments);return t(i),i}catch(i){throw d(i),n.oR.error("An error occurred. Please try again later."),console.error("API Error:",i),i}finally{c(!1)}}),[e]),data:i,loading:r,error:a}}},6849:(e,i,t)=>{t.r(i),t.d(i,{default:()=>D});var o=t(5043),n=t(6867),r=t(9621),c=t(4634),a=t(2774),d=t(2999),l=t(6387),s=t(2573),p=t(925),x=t(579);const h=n.Ay.div`
  padding: 20px;
  color: #ffffff;
  background-color: #000033;
  background-image: url(${p});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,g=n.Ay.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`,m=n.Ay.img`
  height: 40px;
  width: auto;
`,f=n.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 60px; // Add padding to account for the fixed header
`,u=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,A=n.Ay.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
`,y=n.Ay.div`
  background-color: #3d85c6;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
`,b=n.Ay.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 5px;
  margin-bottom: 20px;
`,j=n.Ay.button`
  flex: 1;
  padding: 10px;
  border: none;
  background-color: ${e=>e.active?"#3d85c6":"transparent"};
  color: white;
  border-radius: 20px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
`,k=n.Ay.div`
  flex-grow: 1;
`,v=n.Ay.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,w=n.Ay.div`
  display: flex;
  align-items: center;
`,C=n.Ay.div`
  width: 40px;
  height: 40px;
  background-color: #3d85c6;
  border-radius: 50%;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`,S=n.Ay.div``,z=n.Ay.h3`
  margin: 0;
  font-size: 16px;
`,V=n.Ay.p`
  margin: 5px 0 0;
  font-size: 14px;
  color: #888;
`,B=n.Ay.button`
  background-color: ${e=>e.claimed?"#888":e.locked?"#d32f2f":"#00c853"};
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  cursor: ${e=>e.claimed||e.locked?"default":"pointer"};
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: ${e=>e.claimed||e.locked?"none":"scale(1.05)"};
  }
`,Q=n.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 18px;
  color: #ffffff;
`,R=n.Ay.div`
  color: #ff6b6b;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
`,U=[{id:1,title:"Follow on Twitter",description:"Follow the official Twitter account",icon:(0,x.jsx)(a.feZ,{}),claimed:!1,locked:!1},{id:2,title:"Retweet Tweet",description:"Retweet the latest announcement tweet",icon:(0,x.jsx)(a.feZ,{}),claimed:!1,locked:!1},{id:3,title:"Join Discord",description:"Join the official Discord server",icon:(0,x.jsx)(a.O4U,{}),claimed:!1,locked:!1},{id:4,title:"Greet in Discord",description:"Say hello in the introduction channel",icon:(0,x.jsx)(a.O4U,{}),claimed:!1,locked:!1},{id:5,title:"Join Telegram Group",description:"Join the official Telegram group",icon:(0,x.jsx)(a.hFS,{}),claimed:!1,locked:!1},{id:6,title:"Invite a Friend",description:"Invite a friend to the game",icon:(0,x.jsx)(a.A7C,{}),claimed:!1,locked:!1},{id:7,title:"Daily Login",description:"Log in for 7 consecutive days",icon:(0,x.jsx)(a.A7C,{}),claimed:!1,locked:!1},{id:8,title:"Upgrade GPU",description:"Upgrade your GPU once",icon:(0,x.jsx)(a.A7C,{}),claimed:!1,locked:!0},{id:9,title:"Tap 100 Times",description:"Tap the GPU 100 times",icon:(0,x.jsx)(a.A7C,{}),claimed:!1,locked:!1},{id:10,title:"Earn 1000 NLOV",description:"Earn a total of 1000 NLOV",icon:(0,x.jsx)(a.A7C,{}),claimed:!1,locked:!0}],G=[{id:1,title:"Beginner Miner",description:"Tap the GPU for the first time",icon:"\ud83c\udfc6",progress:1,required:1,claimed:!0},{id:2,title:"Social Butterfly",description:"Complete all social quests",icon:"\ud83e\udd8b",progress:3,required:5,claimed:!1},{id:3,title:"Upgrade Master",description:"Upgrade the GPU 10 times",icon:"\ud83d\ude80",progress:3,required:10,claimed:!1},{id:4,title:"NLOV Millionaire",description:"Earn 100,000 NLOV",icon:"\ud83d\udcb0",progress:25e3,required:1e5,claimed:!1}],D=()=>{const[e,i]=(0,o.useState)("quest"),[t,n]=(0,o.useState)(U),[p,D]=(0,o.useState)(G),{execute:E,loading:Z,error:T}=(0,c.A)(r.GM),{execute:F,loading:K}=(0,c.A)(r.TG),{execute:N,loading:L,error:P}=(0,c.A)(r.$_),{execute:X,loading:q}=(0,c.A)(r.af);(0,o.useEffect)((()=>{}),[]);const Y=()=>Z?(0,x.jsx)(Q,{children:"Loading quests..."}):T?(0,x.jsx)(R,{children:"Failed to load quests. Please try again later."}):t.map((e=>(0,x.jsxs)(v,{children:[(0,x.jsxs)(w,{children:[(0,x.jsx)(C,{children:e.icon}),(0,x.jsxs)(S,{children:[(0,x.jsx)(z,{children:e.title}),(0,x.jsx)(V,{children:e.description})]})]}),(0,x.jsx)(B,{claimed:e.claimed,locked:e.locked,onClick:()=>!e.claimed&&!e.locked&&(async e=>{try{n(t.map((i=>i.id===e?{...i,claimed:!0}:i)))}catch(i){console.error("Failed to claim quest:",i)}})(e.id),children:e.claimed?"Claimed":e.locked?"Locked":"Claim"})]},e.id))),H=()=>L?(0,x.jsx)(Q,{children:"Loading achievements..."}):P?(0,x.jsx)(R,{children:"Failed to load achievements. Please try again later."}):p.map((e=>(0,x.jsxs)(v,{children:[(0,x.jsxs)(w,{children:[(0,x.jsx)(C,{children:e.icon}),(0,x.jsxs)(S,{children:[(0,x.jsx)(z,{children:e.title}),(0,x.jsx)(V,{children:e.description})]})]}),(0,x.jsx)(B,{claimed:e.claimed,onClick:()=>!e.claimed&&(async e=>{try{D(p.map((i=>i.id===e?{...i,claimed:!0}:i)))}catch(i){console.error("Failed to claim achievement:",i)}})(e.id),children:e.claimed?"Claimed":"Claim"})]},e.id)));return(0,x.jsxs)(h,{children:[(0,x.jsxs)(g,{children:[(0,x.jsx)(m,{src:l,alt:"Logo"}),(0,x.jsx)(d.A,{}),(0,x.jsx)(m,{src:s,alt:"Logo"})]}),(0,x.jsxs)(f,{children:[(0,x.jsxs)(u,{children:[(0,x.jsxs)(A,{children:["Current Quest",(0,x.jsx)(a.Vr3,{style:{marginLeft:"5px"}})]}),(0,x.jsx)(y,{children:"XP Earned: 5000"})]}),(0,x.jsxs)(b,{children:[(0,x.jsxs)(j,{active:"quest"===e,onClick:()=>i("quest"),children:[(0,x.jsx)(a.BJb,{style:{marginRight:"5px"}})," Quests"]}),(0,x.jsxs)(j,{active:"achievement"===e,onClick:()=>i("achievement"),children:[(0,x.jsx)(a.SBv,{style:{marginRight:"5px"}})," Achievements"]})]}),(0,x.jsx)(k,{children:"quest"===e?Y():"achievement"===e?H():void 0})]})]})}},925:(e,i,t)=>{e.exports=t.p+"static/media/bg5.46d030a9df38a64b5377.jpg"},2573:(e,i,t)=>{e.exports=t.p+"static/media/logo1.6708ad68fc8bcd8770a0.png"},6387:e=>{e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=849.08b22f34.chunk.js.map