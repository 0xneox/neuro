"use strict";(self.webpackChunkneurolov_webapp=self.webpackChunkneurolov_webapp||[]).push([[122],{2999:(e,i,a)=>{a.d(i,{A:()=>d});a(5043);var t=a(6867),r=a(3216),n=a(2774),o=a(579);const s=t.Ay.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to right, #071665, #0348B2, #0870DE);
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  z-index: 1000;
`,p=t.Ay.div`
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
`,d=()=>{const e=(0,r.Zp)(),i=(0,r.zy)(),a=[{path:"/home",icon:n.rQ8,label:"Home"},{path:"/quest",icon:n.KP4,label:"Quest"},{path:"/leaderboard",icon:n.v$b,label:"Leaderboard"},{path:"/invite",icon:n.YXz,label:"Invite"},{path:"/profile",icon:n.x$1,label:"Profile"},{path:"/settings",icon:n.Pcn,label:"Settings"}];return(0,o.jsx)(s,{children:a.map((a=>(0,o.jsxs)(p,{active:i.pathname===a.path,onClick:()=>e(a.path),children:[(0,o.jsx)(a.icon,{}),(0,o.jsx)(l,{children:a.label})]},a.path)))})}},3122:(e,i,a)=>{a.r(i),a.d(i,{default:()=>C});a(5043);var t=a(6867),r=a(2332),n=a(108),o=a(1653),s=a(2185),p=a(6026),l=a(6150),d=a(168),c=a(2774),x=a(2999),h=a(7479),f=a(925),g=a(6387),A=a(2573),m=a(579);const b=(0,t.Ay)(r.P.div)`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  color: #ffffff;
  background-color: #000033;
  background-image: url(${f});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
`,u=t.Ay.header`
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
`,v=t.Ay.img`
  height: 40px;
  width: auto;
`,y=t.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 80px 20px 70px;
  overflow-y: auto;
`,w=(0,t.Ay)(r.P.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  margin-bottom: 20px;
`,j=t.Ay.div`
  display: flex;
  align-items: center;
`,k=(0,t.Ay)(r.P.img)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
`,z=(0,t.Ay)(r.P.div)`
  display: flex;
  flex-direction: column;
`,P=t.Ay.h2`
  margin: 0;
  font-size: 20px;
`,K=t.Ay.span`
  font-size: 14px;
  opacity: 0.8;
`,Q=t.Ay.span`
  font-size: 14px;
  opacity: 0.8;
`,H=(0,t.Ay)(r.P.div)`
  display: flex;
  gap: 10px;
`,S=(0,t.Ay)(r.P.button)`
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
`,T=(0,t.Ay)(r.P.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 30px;
`,B=(0,t.Ay)(r.P.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
  text-align: center;
`,D=t.Ay.h3`
  margin: 0;
  font-size: 24px;
`,R=t.Ay.p`
  margin: 5px 0 0;
  font-size: 12px;
  opacity: 0.8;
`,V=(0,t.Ay)(r.P.div)`
  height: 200px;
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
`,Z=(0,t.Ay)(r.P.h3)`
  margin-bottom: 15px;
  font-size: 18px;
  padding-left: 15px;
`,C=()=>{const e={username:"John Doe",id:"5856722860",cpLevel:"5",avatar:h,xp:15e3,computePower:250,totalTaps:5e3,referrals:10},i={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:100}}},a={hover:{rotate:[0,-1,1,-1,1,0],transition:{duration:.5,repeat:1/0,repeatType:"reverse"}}};return(0,m.jsxs)(b,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{when:"beforeChildren",staggerChildren:.2}}},initial:"hidden",animate:"visible",children:[(0,m.jsxs)(u,{children:[(0,m.jsx)(v,{src:g,alt:"Left Logo"}),(0,m.jsx)(v,{src:A,alt:"Right Logo"})]}),(0,m.jsxs)(y,{children:[(0,m.jsxs)(w,{variants:i,children:[(0,m.jsxs)(j,{children:[(0,m.jsx)(k,{src:e.avatar,alt:e.username,whileHover:{scale:1.1},whileTap:{scale:.9}}),(0,m.jsxs)(z,{variants:a,whileHover:"hover",children:[(0,m.jsx)(P,{children:e.username}),(0,m.jsxs)(K,{children:["ID: ",e.id]}),(0,m.jsxs)(Q,{children:["CP Level: ",e.cpLevel]})]})]}),(0,m.jsxs)(H,{children:[(0,m.jsx)(S,{whileHover:{scale:1.05},whileTap:{scale:.95},children:"Join Channel"}),(0,m.jsxs)(S,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,m.jsx)(c.YXz,{})," ",e.referrals]})]})]}),(0,m.jsx)(T,{variants:i,children:[{value:e.xp.toLocaleString(),label:"XP"},{value:e.computePower,label:"Compute Power"},{value:e.totalTaps.toLocaleString(),label:"Total Taps"}].map(((e,i)=>(0,m.jsxs)(B,{whileHover:{scale:1.05,rotate:[0,2,-2,0]},transition:{type:"spring",stiffness:300},children:[(0,m.jsx)(D,{children:e.value}),(0,m.jsx)(R,{children:e.label})]},i)))}),(0,m.jsx)(Z,{variants:i,children:"Activity Graph"}),(0,m.jsx)(V,{variants:i,whileHover:{scale:1.02},transition:{type:"spring",stiffness:300},children:(0,m.jsx)(n.u,{width:"100%",height:"100%",children:(0,m.jsxs)(o.b,{data:[{name:"Mon",xp:1e3},{name:"Tue",xp:1500},{name:"Wed",xp:1200},{name:"Thu",xp:1800},{name:"Fri",xp:2e3},{name:"Sat",xp:1700},{name:"Sun",xp:1900}],children:[(0,m.jsx)(s.W,{dataKey:"name",stroke:"#ffffff"}),(0,m.jsx)(p.h,{stroke:"#ffffff"}),(0,m.jsx)(l.m,{}),(0,m.jsx)(d.N,{type:"monotone",dataKey:"xp",stroke:"#8884d8",strokeWidth:2})]})})})]}),(0,m.jsx)(x.A,{})]})}},925:(e,i,a)=>{e.exports=a.p+"static/media/bg5.46d030a9df38a64b5377.jpg"},2573:(e,i,a)=>{e.exports=a.p+"static/media/logo1.6708ad68fc8bcd8770a0.png"},6387:e=>{e.exports="data:image/png;base64,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"},7479:(e,i,a)=>{e.exports=a.p+"static/media/second.3eda13f42d197e1af8cf.png"}}]);
//# sourceMappingURL=122.9bb1ba90.chunk.js.map