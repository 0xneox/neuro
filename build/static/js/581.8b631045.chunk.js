"use strict";(self.webpackChunkneurolov_webapp=self.webpackChunkneurolov_webapp||[]).push([[581],{2999:(e,t,a)=>{a.d(t,{A:()=>d});a(5043);var i=a(6867),r=a(3216),o=a(2774),n=a(579);const l=i.Ay.div`
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
`,d=()=>{const e=(0,r.Zp)(),t=(0,r.zy)(),a=[{path:"/home",icon:o.rQ8,label:"Home"},{path:"/quest",icon:o.KP4,label:"Quest"},{path:"/leaderboard",icon:o.v$b,label:"Leaderboard"},{path:"/invite",icon:o.M5n,label:"Invite"},{path:"/profile",icon:o.x$1,label:"Profile"}];return(0,n.jsx)(l,{children:a.map((a=>(0,n.jsxs)(s,{active:t.pathname===a.path,onClick:()=>e(a.path),children:[(0,n.jsx)(a.icon,{}),(0,n.jsx)(c,{children:a.label})]},a.path)))})}},4634:(e,t,a)=>{a.d(t,{A:()=>n});var i=a(5043),r=a(9628);const o=a(6213).A.create({baseURL:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SENTRY_DSN:"YourSentryDSN",REACT_APP_TELEGRAM_BOT_NAME:"Neurolov"}.REACT_APP_API_BASE_URL,headers:{"Content-Type":"application/json"}});o.interceptors.request.use((e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e}),(e=>Promise.reject(e)));const n=()=>{const[e,t]=(0,i.useState)(!1),[a,n]=(0,i.useState)(null),l=(0,i.useCallback)((async function(e,a){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t(!0),n(null);try{return(await o({method:e,url:a,data:i,...l})).data}catch(x){var s,c,d,p;throw n((null===(s=x.response)||void 0===s||null===(c=s.data)||void 0===c?void 0:c.message)||"An error occurred"),r.oR.error((null===(d=x.response)||void 0===d||null===(p=d.data)||void 0===p?void 0:p.message)||"An error occurred"),x}finally{t(!1)}}),[]);return{get:(0,i.useCallback)(((e,t)=>l("get",e,null,t)),[l]),post:(0,i.useCallback)(((e,t,a)=>l("post",e,t,a)),[l]),put:(0,i.useCallback)(((e,t,a)=>l("put",e,t,a)),[l]),delete:(0,i.useCallback)(((e,t)=>l("delete",e,null,t)),[l]),authenticateTelegram:(0,i.useCallback)((async e=>{t(!0),n(null);try{return(await o.post("/auth/telegram",e)).data}catch(c){var a,i,l,s;throw n((null===(a=c.response)||void 0===a||null===(i=a.data)||void 0===i?void 0:i.message)||"Authentication failed"),r.oR.error((null===(l=c.response)||void 0===l||null===(s=l.data)||void 0===s?void 0:s.message)||"Authentication failed"),c}finally{t(!1)}}),[]),loading:e,error:a}}},7921:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Y});var i=a(5043),r=a(6867),o=a(2332),n=a(4193),l=a(2774),s=a(3216),c=a(2999);const d=a.p+"static/media/trophy.35f3aaa009dd62e4af8d.png";var p=a(2833),x=a(8374),h=a(2573),g=a(2206),u=a(4634),A=a(579);const m=(0,r.Ay)(o.P.div)`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  color: #ffffff;
  background-color: #000033;
  background-image: url(${p});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
`,f=r.Ay.div`
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
`,y=r.Ay.img`
  height: 20px;
  width: auto;
`,b=(0,r.Ay)(y)`
  height: 30px; // Increased size for the right logo
`,v=r.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px 20px;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`,k=r.Ay.h1`
  font-size: 28px;
  text-align: center;
  margin-bottom: 10px;
`,j=r.Ay.p`
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
  opacity: 0.8;
`,w=r.Ay.img`
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
`,S=r.Ay.div`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`,C=r.Ay.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`,E=r.Ay.button`
  background-color: ${e=>e.active?"#3d85c6":"transparent"};
  color: white;
  border: 1px solid #3d85c6;
  padding: 8px 16px;
  margin: 0 5px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${e=>e.active?"#3d85c6":"rgba(61, 133, 198, 0.2)"};
  }
`,R=(0,r.Ay)(C)`
  margin-bottom: 10px;
`,T=r.Ay.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  width: 100%;
`,D=(0,r.Ay)(o.P.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`,N=r.Ay.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid ${e=>e.borderColor};
`,P=r.Ay.span`
  font-size: 12px;
  margin-top: 5px;
`,B=r.Ay.table`
  width: 100%;
  border-collapse: collapse;
`,z=(0,r.Ay)(o.P.tr)`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,K=r.Ay.td`
  padding: 8px 5px;
  font-size: 14px;
`,Q=r.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`,Z=r.Ay.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #45a049;
  }

  svg {
    margin-right: 8px;
  }
`,V=()=>{const e=(0,s.Zp)(),[t,a]=(0,i.useState)(86400),[r,o]=(0,i.useState)("daily"),[p,V]=(0,i.useState)("global"),[Y,H]=(0,i.useState)([]),[I,U]=(0,i.useState)(null),X=(0,u.A)();(0,i.useEffect)((()=>{const e=setInterval((()=>{a((e=>e>0?e-1:86400))}),1e3);return()=>clearInterval(e)}),[]),(0,i.useEffect)((()=>{(async()=>{try{const e=await X.get(`/api/leaderboard/${r}?type=${p}`);H(e.data)}catch(e){console.error("Error fetching leaderboard data:",e)}})(),(async()=>{try{const e=await X.get(`/api/leaderboard/position/${r}`);U(e.data.position)}catch(e){console.error("Error fetching user position:",e)}})()}),[X,r,p]);const F=(0,i.useCallback)((e=>{const t=Math.floor(e/3600),a=Math.floor(e%3600/60),i=e%60;return`${t.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`}),[]);return(0,A.jsxs)(m,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,A.jsxs)(f,{children:[(0,A.jsx)(y,{src:x,alt:"Neurolov Logo"}),(0,A.jsx)(b,{src:h,alt:"Neurolov Logo"})]}),(0,A.jsxs)(v,{children:[(0,A.jsx)(k,{children:"Wall of Fame"}),(0,A.jsx)(j,{children:"Play daily and win rewards!"}),(0,A.jsx)(w,{src:d,alt:"Trophy"}),(0,A.jsxs)(S,{children:["Resets in: ",F(t)]}),(0,A.jsxs)(R,{children:[(0,A.jsxs)(E,{active:"global"===p,onClick:()=>V("global"),children:[(0,A.jsx)(l.f35,{})," Global"]}),(0,A.jsxs)(E,{active:"friends"===p,onClick:()=>V("friends"),children:[(0,A.jsx)(l.M5n,{})," Friends"]})]}),(0,A.jsxs)(C,{children:[(0,A.jsx)(E,{active:"daily"===r,onClick:()=>o("daily"),children:"Daily"}),(0,A.jsx)(E,{active:"weekly"===r,onClick:()=>o("weekly"),children:"Weekly"}),(0,A.jsx)(E,{active:"allTime"===r,onClick:()=>o("allTime"),children:"All Time"})]}),(0,A.jsx)(T,{children:Y.slice(0,3).map(((e,t)=>(0,A.jsxs)(D,{initial:{scale:0},animate:{scale:1},transition:{delay:.2*t},children:[(0,A.jsx)(N,{src:e.avatar||g,alt:e.username,borderColor:["gold","silver","#cd7f32"][t]}),(0,A.jsx)(P,{children:e.username}),(0,A.jsxs)("div",{children:[e.rewards," XP"]})]},e._id)))}),(0,A.jsx)(B,{children:(0,A.jsx)(n.N,{children:Y.slice(3).map(((e,t)=>(0,A.jsxs)(z,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{delay:.05*t},children:[(0,A.jsx)(K,{children:t+4}),(0,A.jsx)(K,{children:e.username}),(0,A.jsxs)(K,{children:[e.rewards.toLocaleString()," XP"]})]},e._id)))})}),I&&(0,A.jsxs)("div",{children:["Your Position: ",I]}),(0,A.jsxs)(Q,{children:[(0,A.jsxs)(Z,{onClick:()=>e("/quest"),children:[(0,A.jsx)(l.gZZ,{})," Complete a Quest"]}),(0,A.jsxs)(Z,{onClick:()=>e("/achievements",{state:{highlight:"7dayStreak"}}),children:[(0,A.jsx)(l.gUT,{})," Maintain 7-Day Streak"]})]})]}),(0,A.jsx)(c.A,{})]})},Y=i.memo(V)},2206:(e,t,a)=>{e.exports=a.p+"static/media/sam.d0ce2880254a8c7adb35.webp"},2833:(e,t,a)=>{e.exports=a.p+"static/media/background_image.44c2af1e36706d574c25.png"},8374:e=>{e.exports="data:image/png;base64,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"},2573:(e,t,a)=>{e.exports=a.p+"static/media/logo1.6708ad68fc8bcd8770a0.png"}}]);
//# sourceMappingURL=581.8b631045.chunk.js.map