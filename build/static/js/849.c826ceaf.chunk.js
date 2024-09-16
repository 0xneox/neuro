"use strict";(self.webpackChunkneurolov_webapp=self.webpackChunkneurolov_webapp||[]).push([[849],{2999:(e,i,t)=>{t.d(i,{A:()=>d});t(5043);var a=t(6867),r=t(3216),n=t(2774),o=t(579);const s=a.Ay.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to right, #071665, #0348B2, #0870DE);
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  z-index: 1000;
`,c=a.Ay.div`
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
`,l=a.Ay.div`
  font-size: 12px;
  margin-top: 4px;
`,d=()=>{const e=(0,r.Zp)(),i=(0,r.zy)(),t=[{path:"/home",icon:n.rQ8,label:"Home"},{path:"/quest",icon:n.KP4,label:"Quest"},{path:"/leaderboard",icon:n.v$b,label:"Leaderboard"},{path:"/invite",icon:n.M5n,label:"Invite"},{path:"/profile",icon:n.x$1,label:"Profile"}];return(0,o.jsx)(s,{children:t.map((t=>(0,o.jsxs)(c,{active:i.pathname===t.path,onClick:()=>e(t.path),children:[(0,o.jsx)(t.icon,{}),(0,o.jsx)(l,{children:t.label})]},t.path)))})}},4634:(e,i,t)=>{t.d(i,{A:()=>o});var a=t(5043),r=t(9628);const n=t(6213).A.create({baseURL:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SENTRY_DSN:"YourSentryDSN",REACT_APP_TELEGRAM_BOT_NAME:"Neurolov"}.REACT_APP_API_BASE_URL,headers:{"Content-Type":"application/json"}});n.interceptors.request.use((e=>{const i=localStorage.getItem("token");return i&&(e.headers.Authorization=`Bearer ${i}`),e}),(e=>Promise.reject(e)));const o=()=>{const[e,i]=(0,a.useState)(!1),[t,o]=(0,a.useState)(null),s=(0,a.useCallback)((async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};i(!0),o(null);try{return(await n({method:e,url:t,data:a,...s})).data}catch(x){var c,l,d,p;throw o((null===(c=x.response)||void 0===c||null===(l=c.data)||void 0===l?void 0:l.message)||"An error occurred"),r.oR.error((null===(d=x.response)||void 0===d||null===(p=d.data)||void 0===p?void 0:p.message)||"An error occurred"),x}finally{i(!1)}}),[]);return{get:(0,a.useCallback)(((e,i)=>s("get",e,null,i)),[s]),post:(0,a.useCallback)(((e,i,t)=>s("post",e,i,t)),[s]),put:(0,a.useCallback)(((e,i,t)=>s("put",e,i,t)),[s]),delete:(0,a.useCallback)(((e,i)=>s("delete",e,null,i)),[s]),authenticateTelegram:(0,a.useCallback)((async e=>{i(!0),o(null);try{return(await n.post("/auth/telegram",e)).data}catch(l){var t,a,s,c;throw o((null===(t=l.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message)||"Authentication failed"),r.oR.error((null===(s=l.response)||void 0===s||null===(c=s.data)||void 0===c?void 0:c.message)||"Authentication failed"),l}finally{i(!1)}}),[]),loading:e,error:t}}},6849:(e,i,t)=>{t.r(i),t.d(i,{default:()=>K});var a=t(5043),r=t(6867),n=t(2332),o=t(4193),s=t(2774),c=t(2999),l=t(8374),d=t(2573),p=t(2833),x=t(4634),u=t(579);const h=r.Ay.div`
  padding: 20px;
  color: #ffffff;
  background-color: #000033;
  background-image: url(${p});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,g=r.Ay.header`
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
`,m=r.Ay.img`
  height: 20px;
  width: auto;
`,A=(0,r.Ay)(m)`
  height: 30px; // Increased size for the right logo
`,f=r.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`,y=r.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,b=r.Ay.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
`,v=r.Ay.div`
  background-color: #3d85c6;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
`,k=r.Ay.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 5px;
  margin-bottom: 20px;
`,j=r.Ay.button`
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
  cursor: pointer;
`,w=r.Ay.div`
  flex-grow: 1;
`,S=(0,r.Ay)(n.P.div)`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,C=r.Ay.div`
  display: flex;
  align-items: center;
  flex: 1;
`,E=r.Ay.div`
  width: 40px;
  height: 40px;
  background-color: #3d85c6;
  border-radius: 50%;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`,R=r.Ay.div`
  flex: 1;
`,z=r.Ay.p`
  margin: 5px 0 0;
  font-size: 14px;
  color: #bbb;
`,T=(0,r.Ay)(n.P.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 255, 0, 0.8);
  color: white;
  padding: 20px;
  border-radius: 10px;
  font-size: 18px;
  z-index: 1000;
`,B=r.Ay.h3`
  margin: 0;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,N=r.Ay.span`
  background-color: #4caf50;
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  margin-right: 10px;
`,Q=r.Ay.span`
  flex: 1;
`,D=r.Ay.button`
  background-color: ${e=>e.claimed?"#888":e.locked?"#d32f2f":"#00c853"};
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 12px;
  cursor: ${e=>e.claimed||e.locked?"default":"pointer"};
  transition: background-color 0.3s ease, transform 0.3s ease;
  min-width: 80px;
  text-align: center;

  &:hover {
    transform: ${e=>e.claimed||e.locked?"none":"scale(1.05)"};
  }
`,P=()=>{const[e,i]=(0,a.useState)("quest"),[t,r]=(0,a.useState)([]),[n,p]=(0,a.useState)([]),[P,K]=(0,a.useState)(!1),[V,Z]=(0,a.useState)(0),H=(0,x.A)();(0,a.useEffect)((()=>{(async()=>{try{const[e,i]=await Promise.all([H.get("/api/quests"),H.get("/api/achievements")]);r(e),p(i)}catch(e){console.error("Error fetching data:",e)}})()}),[H]);const X=(0,a.useCallback)((async e=>{try{const i=await H.post(`/api/quests/${e}/claim`);r((i=>i.map((i=>i.id===e?{...i,claimed:!0}:i)))),Z((e=>e+i.xpGained)),K(!0),setTimeout((()=>K(!1)),2e3)}catch(i){console.error("Error claiming quest:",i)}}),[H]),Y=(0,a.useCallback)((async e=>{try{const i=await H.post(`/api/achievements/${e}/claim`);p((i=>i.map((i=>i.id===e?{...i,claimed:!0}:i)))),Z((e=>e+i.xpGained)),K(!0),setTimeout((()=>K(!1)),2e3)}catch(i){console.error("Error claiming achievement:",i)}}),[H]);return(0,u.jsxs)(h,{children:[(0,u.jsxs)(g,{children:[(0,u.jsx)(m,{src:l,alt:"Logo"}),(0,u.jsx)(A,{src:d,alt:"Logo"})]}),(0,u.jsxs)(f,{children:[(0,u.jsxs)(y,{children:[(0,u.jsxs)(b,{children:["Current Quest",(0,u.jsx)(s.Vr3,{style:{marginLeft:"5px"}})]}),(0,u.jsxs)(v,{children:["XP Earned: ",V]})]}),(0,u.jsxs)(k,{children:[(0,u.jsxs)(j,{active:"quest"===e,onClick:()=>i("quest"),children:[(0,u.jsx)(s.BJb,{style:{marginRight:"5px"}})," Quests"]}),(0,u.jsxs)(j,{active:"achievement"===e,onClick:()=>i("achievement"),children:[(0,u.jsx)(s.SBv,{style:{marginRight:"5px"}})," Achievements"]})]}),(0,u.jsx)(w,{children:(0,u.jsx)(o.N,{children:"quest"===e?t.map((e=>(0,u.jsxs)(S,{animate:{opacity:1},initial:{opacity:0},exit:{opacity:0},children:[(0,u.jsxs)(C,{children:[(0,u.jsx)(E,{children:e.icon}),(0,u.jsxs)(R,{children:[(0,u.jsxs)(B,{children:[(0,u.jsxs)(N,{children:[e.xp," XP"]}),(0,u.jsx)(Q,{children:e.title})]}),(0,u.jsx)(z,{children:e.description})]})]}),(0,u.jsx)(D,{claimed:e.claimed,locked:e.locked,onClick:()=>!e.claimed&&!e.locked&&X(e.id),children:e.claimed?"Claimed":e.locked?"Locked":"Claim"})]},e.id))):n.map((e=>(0,u.jsxs)(S,{animate:{opacity:1},initial:{opacity:0},exit:{opacity:0},children:[(0,u.jsxs)(C,{children:[(0,u.jsx)(E,{children:e.icon}),(0,u.jsxs)(R,{children:[(0,u.jsxs)(B,{children:[(0,u.jsx)(N,{children:e.level}),(0,u.jsx)(Q,{children:e.title})]}),(0,u.jsx)(z,{children:e.description})]})]}),(0,u.jsx)(D,{claimed:e.claimed,onClick:()=>!e.claimed&&Y(e.id),children:e.claimed?"Claimed":`${e.progress}/${e.required}`})]},e.id)))})})]}),(0,u.jsx)(o.N,{children:P&&(0,u.jsx)(T,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:50},children:"quest"===e?"Quest claimed successfully!":"Achievement unlocked!"})}),(0,u.jsx)(c.A,{})]})},K=a.memo(P)},2833:(e,i,t)=>{e.exports=t.p+"static/media/background_image.44c2af1e36706d574c25.png"},8374:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAAOCAYAAADDsVnmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWaSURBVHgBvRi7chs3cI+JZ1yeZ1xQTqHjTFK5CNWkNdUlVeQyVSj/gKgmKU2lcUm5z4yo/ICpKulEt2mkpEvhIZpMGDnyHR+SLZIHZPcOEJcQcBQ9Hu9oxQOw2AX2fRcopWoAEAVB0AYPGBrEDtIleq6KP1XwA9GdIr3Q9Fv0i+POEjkhp2GyOQjij3SnUAC4N8SfGttP+7rmDg76BtEUnZFDFMfhBOROAEFNQXZOBTP4Q03Ttrq6c9Sv3BMO/kmRrtm560RLgxOVQ6tgg4E6m+up5XBsBLK5yHcoQ8Dmtpbw72lHcfF6ihh79rW0EsAhK4ZbQDmOowfxeQ9RPXjzRq6dncu1v1+rtR7iX2eq/Oe/vc9+P6t67tIo4o3rLwxhCeZR0KBLOYgjNnQ9kzcKDx5pmtDDg0PVIZPv43I4r2OHkcgxmtZ+DqSgE+tuhkeoPE50LRSNU1LyGFIVqXcYO6M0gKFERN8aShwjh7Fan13K4/Kv/xheXX0Hgh0fb5UHwZYeHpWs9SYSfA+rwS6GbMWD+yvwSZasbzC+AY639TwZ4frCKs8EVcZzF7FC+/UeodcixAN4D5hM5FN1icYZ5QaBERplnHbVSHYVjuVA0nyghmmoLtJMhk6rz41sladuF3D975ccBPuutPERYJmBFkDn8a4eRvRPpy2TPgTkRt2nOkj1Su/ZhLmRah5FReCBci9Gw8h6ZhSKlgtMs1NZ6VfLm/2vypswRmcYSYFrilCO1KPw4DqK9tk9XdmqBnnNJKBa2S2xDYf6mS75YlmY88sQrYVhAb2ADweRNa6x5z3ToHDQc9tsaiVnLCVpNTNMhlgvx9Of+htrwqz3v1kTMpZP1CDFCML0N0jhTjx5pGXzKHI5B099e5k8mBtIsINHkBvJVrSAm0Ce0LMwXlYIbXAp04Jv6UIa67oBifTaof7lyj4t4MXXvoQVQI6mIaYuVHxupE9GN+V8mswoggAGeW1SiYzYcps9X0eRDghTe7LoyXhxxtReIuGe3kiXpfy5De8HK6WsJVFH4Ktnzz1tq1c+eTJrFgcOEuHbCxd41ilunqgApiqYzjLFLhhpNkDHQRI1QRlT/J2pAZMtUDY5FNUacrZQRxZPedc6LzkO34R5GG5ZG11K3NVF+x7kxZjwXkGv70spETuDgNvBNtLySBXsue7bZKWWoki7CQnWvawBwGZgSE25bJWf9SKzHDV7IVzKlsQoA2wiiK40viGjzZ4bOnrqZo3fnwwU2WfQl+4aBmwpM5BVnxK9J9HFWNgvglqgmfMZyMwLz7rp3iqMxu44O+x5x1VHdaTy7q0LK0D/O6wxQ9U1KQybgPXpO3V8/8dXrfuNV63h+fREjmSVWm4yEnZ64r+fv1iQodOXmaO6s8WW9zhtCfzwGD5sQTd14obi9NhEareIiVXkKUUcsDVehMkQPVpntSt7/4G5U7Y90VrY+ATjdBcbgCQzUvb+IyM5lg15mTbUCNZ1q63UAHe9nT0GN+yxc7Z85yEDCXArgi5LLSmPBldeb+k3eoMGYrX4daKpZdGBjrXimlrBRmkCLA/ynK0Lc0PUrYakCYtpqw75iythC+bGIZpdjwiidTU+xAte/1A5hbfpNkZHkhmCIiVrq7HwDKl7kwou5ACu0idJ5+FpwR261vShTccjKHEwEZBHkk2TsGdSeMQQ2HyV8TIGF5quDnnU1DUtzW9aHlTkHE2YG2KHy0Gkl9I9cDtfotc2rVS8UlNz/uzzjryabgTj2S8YNbGiuoRfFPAFNsYG4iUEajP57WF7CRvujMJ0bhwCXTBJke3A/xExgvwdw/5YWtMkvst1XDy1J9J+anEF4ksXrZp/7Exch1+2rmlqsPhloVNwT6oFvm5S+GQQhF+fRAB38e9uknQqtza21kWozyXs9f8BK4Az0mXNlKUAAAAASUVORK5CYII="},2573:(e,i,t)=>{e.exports=t.p+"static/media/logo1.6708ad68fc8bcd8770a0.png"}}]);
//# sourceMappingURL=849.c826ceaf.chunk.js.map