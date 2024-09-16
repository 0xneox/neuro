"use strict";(self.webpackChunkneurolov_webapp=self.webpackChunkneurolov_webapp||[]).push([[472],{2999:(e,o,r)=>{r.d(o,{A:()=>c});r(5043);var a=r(6867),t=r(3216),n=r(2774),i=r(579);const s=a.Ay.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to right, #071665, #0348B2, #0870DE);
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  z-index: 1000;
`,l=a.Ay.div`
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
`,d=a.Ay.div`
  font-size: 12px;
  margin-top: 4px;
`,c=()=>{const e=(0,t.Zp)(),o=(0,t.zy)(),r=[{path:"/home",icon:n.rQ8,label:"Home"},{path:"/quest",icon:n.KP4,label:"Quest"},{path:"/leaderboard",icon:n.v$b,label:"Leaderboard"},{path:"/invite",icon:n.M5n,label:"Invite"},{path:"/profile",icon:n.x$1,label:"Profile"}];return(0,i.jsx)(s,{children:r.map((r=>(0,i.jsxs)(l,{active:o.pathname===r.path,onClick:()=>e(r.path),children:[(0,i.jsx)(r.icon,{}),(0,i.jsx)(d,{children:r.label})]},r.path)))})}},4634:(e,o,r)=>{r.d(o,{A:()=>i});var a=r(5043),t=r(9628);const n=r(6213).A.create({baseURL:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SENTRY_DSN:"YourSentryDSN",REACT_APP_TELEGRAM_BOT_NAME:"Neurolov"}.REACT_APP_API_BASE_URL,headers:{"Content-Type":"application/json"}});n.interceptors.request.use((e=>{const o=localStorage.getItem("token");return o&&(e.headers.Authorization=`Bearer ${o}`),e}),(e=>Promise.reject(e)));const i=()=>{const[e,o]=(0,a.useState)(!1),[r,i]=(0,a.useState)(null),s=(0,a.useCallback)((async function(e,r){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};o(!0),i(null);try{return(await n({method:e,url:r,data:a,...s})).data}catch(u){var l,d,c,p;throw i((null===(l=u.response)||void 0===l||null===(d=l.data)||void 0===d?void 0:d.message)||"An error occurred"),t.oR.error((null===(c=u.response)||void 0===c||null===(p=c.data)||void 0===p?void 0:p.message)||"An error occurred"),u}finally{o(!1)}}),[]);return{get:(0,a.useCallback)(((e,o)=>s("get",e,null,o)),[s]),post:(0,a.useCallback)(((e,o,r)=>s("post",e,o,r)),[s]),put:(0,a.useCallback)(((e,o,r)=>s("put",e,o,r)),[s]),delete:(0,a.useCallback)(((e,o)=>s("delete",e,null,o)),[s]),authenticateTelegram:(0,a.useCallback)((async e=>{o(!0),i(null);try{return(await n.post("/auth/telegram",e)).data}catch(d){var r,a,s,l;throw i((null===(r=d.response)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.message)||"Authentication failed"),t.oR.error((null===(s=d.response)||void 0===s||null===(l=s.data)||void 0===l?void 0:l.message)||"Authentication failed"),d}finally{o(!1)}}),[]),loading:e,error:r}}},6472:(e,o,r)=>{r.r(o),r.d(o,{default:()=>A});var a=r(5043),t=r(4505),n=r(4634),i=r(2774),s=r(2999),l=r(6867),d=r(579);const c=l.i7`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`,p=l.i7`
  0% { box-shadow: 0 0 5px #ffd700; }
  50% { box-shadow: 0 0 20px #ffd700, 0 0 30px #ffd700; }
  100% { box-shadow: 0 0 5px #ffd700; }
`,u=l.Ay.div`
  padding: 20px;
  color: #ffffff;
  background-color: #000033;
  min-height: 100vh;
  animation: ${c} 0.3s ease-out;
  display: flex;
  flex-direction: column;
`,x=l.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,f=l.Ay.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
`,h=l.Ay.div`
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
`),b=l.Ay.div`
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
`,v=l.Ay.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 15px;
`,y=l.Ay.button`
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
`,A=()=>{const[e,o]=(0,a.useState)([]),{execute:r,loading:l,error:c}=(0,n.A)(t.$_),{execute:p}=(0,n.A)(t.af);(0,a.useEffect)((()=>{r().then(o)}),[r]);return l?(0,d.jsx)(u,{children:"Loading achievements..."}):c?(0,d.jsxs)(u,{children:["Error loading achievements: ",c.message]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(u,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,d.jsxs)(x,{children:[(0,d.jsxs)(f,{children:["7 Daily Quest ",(0,d.jsx)(i.Vr3,{})]}),(0,d.jsx)(h,{children:"350 XP earned"})]}),(0,d.jsx)(g,{children:e.map((e=>(0,d.jsxs)(b,{children:[(0,d.jsxs)(m,{children:[e.xpReward,"XP"]}),(0,d.jsxs)(v,{children:[e.progress,"/",e.required]}),(0,d.jsx)(y,{onClick:()=>(async e=>{try{await p(e);const a=await r();o(a)}catch(c){console.error("Failed to claim achievement:",c)}})(e.id),disabled:e.claimed||e.progress<e.required,children:"Collect"})]},e.id)))})]}),(0,d.jsx)(s.A,{})]})}}}]);
//# sourceMappingURL=472.0ecf3529.chunk.js.map