"use strict";(self.webpackChunkneurolov_webapp=self.webpackChunkneurolov_webapp||[]).push([[472],{2999:(e,r,o)=>{o.d(r,{A:()=>c});o(5043);var n=o(6867),a=o(3216),t=o(2774),i=o(579);const s=n.Ay.div`
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
`,d=n.Ay.div`
  font-size: 12px;
  margin-top: 4px;
`,c=()=>{const e=(0,a.Zp)(),r=(0,a.zy)(),o=[{path:"/home",icon:t.rQ8,label:"Home"},{path:"/quest",icon:t.KP4,label:"Quest"},{path:"/leaderboard",icon:t.v$b,label:"Leaderboard"},{path:"/invite",icon:t.YXz,label:"Invite"},{path:"/profile",icon:t.x$1,label:"Profile"},{path:"/settings",icon:t.Pcn,label:"Settings"}];return(0,i.jsx)(s,{children:o.map((o=>(0,i.jsxs)(l,{active:r.pathname===o.path,onClick:()=>e(o.path),children:[(0,i.jsx)(o.icon,{}),(0,i.jsx)(d,{children:o.label})]},o.path)))})}},4634:(e,r,o)=>{o.d(r,{A:()=>t});var n=o(5043),a=o(9628);const t=e=>{const[r,o]=(0,n.useState)(null),[t,i]=(0,n.useState)(!1),[s,l]=(0,n.useState)(null);return{execute:(0,n.useCallback)((async function(){try{i(!0),l(null);const r=await e(...arguments);return o(r),r}catch(r){throw l(r),a.oR.error("An error occurred. Please try again later."),console.error("API Error:",r),r}finally{i(!1)}}),[e]),data:r,loading:t,error:s}}},6472:(e,r,o)=>{o.r(r),o.d(r,{default:()=>w});var n=o(5043),a=o(9621),t=o(4634),i=o(2774),s=o(2999),l=o(6867),d=o(579);const c=l.i7`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`,p=l.i7`
  0% { box-shadow: 0 0 5px #ffd700; }
  50% { box-shadow: 0 0 20px #ffd700, 0 0 30px #ffd700; }
  100% { box-shadow: 0 0 5px #ffd700; }
`,x=l.Ay.div`
  padding: 20px;
  color: #ffffff;
  background-color: #000033;
  min-height: 100vh;
  animation: ${c} 0.3s ease-out;
  display: flex;
  flex-direction: column;
`,f=l.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,u=l.Ay.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
`,b=l.Ay.div`
  background-color: #3d85c6;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
`,g=(l.Ay.div`
  width: 150px;
  height: 150px;
  background-color: gold;
  border-radius: 50%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  animation: ${p} 2s ease-in-out infinite;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`,l.Ay.div`
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  margin: 20px 0;
`,l.Ay.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 5px;
  margin: 20px 0;
`,l.Ay.button`
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
`,l.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  overflow-y: auto;
  padding-right: 10px;
  flex-grow: 1;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3d85c6;
    border-radius: 10px;
  }
`),h=l.Ay.div`
  background-color: rgba(61, 133, 198, 0.1);
  border-radius: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(61, 133, 198, 0.3);
  }
`,m=l.Ay.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`,y=l.Ay.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 15px;
`,v=l.Ay.button`
  background-color: #00c853;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #00e676;
    transform: scale(1.05);
  }

  ${e=>e.disabled&&l.AH`
    background-color: #888;
    cursor: not-allowed;
    &:hover {
      transform: none;
    }
  `}
`,w=()=>{const[e,r]=(0,n.useState)([]),{execute:o,loading:l,error:c}=(0,t.A)(a.$_),{execute:p}=(0,t.A)(a.af);(0,n.useEffect)((()=>{o().then(r)}),[o]);return l?(0,d.jsx)(x,{children:"Loading achievements..."}):c?(0,d.jsxs)(x,{children:["Error loading achievements: ",c.message]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(x,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,d.jsxs)(f,{children:[(0,d.jsxs)(u,{children:["7 Daily Quest ",(0,d.jsx)(i.Vr3,{})]}),(0,d.jsx)(b,{children:"350 XP earned"})]}),(0,d.jsx)(g,{children:e.map((e=>(0,d.jsxs)(h,{children:[(0,d.jsxs)(m,{children:[e.xpReward,"XP"]}),(0,d.jsxs)(y,{children:[e.progress,"/",e.required]}),(0,d.jsx)(v,{onClick:()=>(async e=>{try{await p(e);const n=await o();r(n)}catch(c){console.error("Failed to claim achievement:",c)}})(e.id),disabled:e.claimed||e.progress<e.required,children:"Collect"})]},e.id)))})]}),(0,d.jsx)(s.A,{})]})}}}]);
//# sourceMappingURL=472.ecfc64bf.chunk.js.map