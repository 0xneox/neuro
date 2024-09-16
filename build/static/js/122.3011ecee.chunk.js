"use strict";(self.webpackChunkneurolov_webapp=self.webpackChunkneurolov_webapp||[]).push([[122],{2999:(e,a,t)=>{t.d(a,{A:()=>p});t(5043);var i=t(6867),r=t(3216),o=t(2774),n=t(579);const l=i.Ay.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to right, #071665, #0348B2, #0870DE);
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  z-index: 1000;
`,s=i.Ay.div`
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
`,c=i.Ay.div`
  font-size: 12px;
  margin-top: 4px;
`,p=()=>{const e=(0,r.Zp)(),a=(0,r.zy)(),t=[{path:"/home",icon:o.rQ8,label:"Home"},{path:"/quest",icon:o.KP4,label:"Quest"},{path:"/leaderboard",icon:o.v$b,label:"Leaderboard"},{path:"/invite",icon:o.M5n,label:"Invite"},{path:"/profile",icon:o.x$1,label:"Profile"}];return(0,n.jsx)(l,{children:t.map((t=>(0,n.jsxs)(s,{active:a.pathname===t.path,onClick:()=>e(t.path),children:[(0,n.jsx)(t.icon,{}),(0,n.jsx)(c,{children:t.label})]},t.path)))})}},3122:(e,a,t)=>{t.r(a),t.d(a,{default:()=>L});var i=t(5043),r=t(6867),o=t(2332),n=t(4193),l=t(2774),s=t(3216),c=t(6213),p=t(2999),d=t(2206),x=t(2833),g=t(8374),h=t(2573),u=t(579);const f=(0,r.Ay)(o.P.div)`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  color: #ffffff;
  background-color: #000033;
  background-image: url(${x});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,m=r.Ay.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`,A=r.Ay.img`
  height: 20px;
  width: auto;
`,b=(0,r.Ay)(A)`
  height: 30px;
`,y=r.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 80px 20px 70px;
  overflow-y: auto;
  margin-top: 60px;
`,v=(0,r.Ay)(o.P.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  margin-bottom: 20px;
`,w=r.Ay.div`
  position: relative;
  margin-bottom: 15px;
`,j=(0,r.Ay)(o.P.img)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`,k=r.Ay.label`
  position: absolute;
  bottom: 0;
  right: 0;
  background: #3b82f6;
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,C=r.Ay.input`
  display: none;
`,Q=(0,r.Ay)(o.P.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`,R=r.Ay.h2`
  margin: 0;
  font-size: 24px;
  display: flex;
  align-items: center;
`,z=r.Ay.span`
  font-size: 14px;
  opacity: 0.8;
`,P=r.Ay.span`
  font-size: 16px;
  color: #ffd700;
  margin-top: 5px;
`,S=(0,r.Ay)(o.P.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 30px;
`,B=(0,r.Ay)(o.P.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
  text-align: center;
`,V=r.Ay.h3`
  margin: 0;
  font-size: 24px;
`,Z=r.Ay.p`
  margin: 5px 0 0;
  font-size: 12px;
  opacity: 0.8;
`,D=r.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`,E=(0,r.Ay)(o.P.button)`
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  padding: 15px 20px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,K=(0,r.Ay)(o.P.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  border-radius: 10px;
  z-index: 1000;
`,L=()=>{const e=(0,s.Zp)(),[a,t]=(0,i.useState)(!1),[r,o]=(0,i.useState)({username:"",id:"",cpLevel:0,avatar:d,xp:0,nlov:0,computePower:0,totalQuests:0,referrals:0,friends:0,achievement:""});(0,i.useEffect)((()=>{(async()=>{try{const e=await c.A.get("/api/user/profile");o(e.data)}catch(e){console.error("Error fetching user data:",e)}})()}),[]);const x=(0,i.useCallback)((()=>{t(!0),setTimeout((()=>t(!1)),2e3)}),[]);return(0,u.jsxs)(f,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,u.jsxs)(m,{children:[(0,u.jsx)(A,{src:g,alt:"Left Logo"}),(0,u.jsx)(b,{src:h,alt:"Right Logo"})]}),(0,u.jsxs)(y,{children:[(0,u.jsxs)(v,{children:[(0,u.jsxs)(w,{children:[(0,u.jsx)(j,{src:r.avatar,alt:r.username}),(0,u.jsx)(k,{htmlFor:"avatar-upload",children:(0,u.jsx)(l.p5B,{})}),(0,u.jsx)(C,{id:"avatar-upload",type:"file",accept:"image/*",onChange:async e=>{const a=e.target.files[0];if(a){const e=new FormData;e.append("avatar",a);try{const a=await c.A.post("/api/user/avatar",e,{headers:{"Content-Type":"multipart/form-data"}});o((e=>({...e,avatar:a.data.avatarUrl})))}catch(t){console.error("Error uploading avatar:",t)}}}})]}),(0,u.jsxs)(Q,{children:[(0,u.jsx)(R,{children:r.username}),(0,u.jsxs)(z,{children:["ID: ",r.id]}),(0,u.jsx)(P,{children:r.achievement})]})]}),(0,u.jsx)(S,{children:[{value:r.cpLevel,label:"CP Level"},{value:r.xp.toLocaleString(),label:"XP"},{value:r.nlov.toLocaleString(),label:"NLOV"},{value:r.computePower,label:"Compute Power"},{value:r.totalQuests,label:"Quests Completed"},{value:r.referrals,label:"Referrals"},{value:r.friends,label:"Friends"},{value:`${r.cpLevel}`,label:"Current CP Level"}].map(((e,a)=>(0,u.jsxs)(B,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[(0,u.jsx)(V,{children:e.value}),(0,u.jsx)(Z,{children:e.label})]},a)))}),(0,u.jsxs)(D,{children:[(0,u.jsxs)(E,{onClick:async()=>{try{const e=await c.A.post("/api/user/upgrade");o((a=>({...a,...e.data})))}catch(e){console.error("Error upgrading user:",e)}},children:[(0,u.jsx)(l.Q44,{style:{marginRight:"10px"}}),"Upgrade"]}),(0,u.jsxs)(E,{onClick:()=>e("/settings"),children:[(0,u.jsx)(l.Pcn,{style:{marginRight:"10px"}}),"Settings"]}),(0,u.jsxs)(E,{onClick:x,children:[(0,u.jsx)(l.lcY,{style:{marginRight:"10px"}}),"Wallet"]})]})]}),(0,u.jsx)(p.A,{}),(0,u.jsx)(n.N,{children:a&&(0,u.jsx)(K,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.3},children:"Coming Soon!"})})]})}},2206:(e,a,t)=>{e.exports=t.p+"static/media/sam.d0ce2880254a8c7adb35.webp"},2833:(e,a,t)=>{e.exports=t.p+"static/media/background_image.44c2af1e36706d574c25.png"},8374:e=>{e.exports="data:image/png;base64,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"},2573:(e,a,t)=>{e.exports=t.p+"static/media/logo1.6708ad68fc8bcd8770a0.png"}}]);
//# sourceMappingURL=122.3011ecee.chunk.js.map