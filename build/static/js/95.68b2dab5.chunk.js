"use strict";(self.webpackChunkneurolov_webapp=self.webpackChunkneurolov_webapp||[]).push([[95],{4634:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(5043),i=r(9628);const n=r(6213).A.create({baseURL:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SENTRY_DSN:"YourSentryDSN",REACT_APP_TELEGRAM_BOT_NAME:"Neurolov"}.REACT_APP_API_BASE_URL,headers:{"Content-Type":"application/json"}});n.interceptors.request.use((e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e}),(e=>Promise.reject(e)));const o=()=>{const[e,t]=(0,a.useState)(!1),[r,o]=(0,a.useState)(null),s=(0,a.useCallback)((async function(e,r){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t(!0),o(null);try{return(await n({method:e,url:r,data:a,...s})).data}catch(p){var l,d,c,f;throw o((null===(l=p.response)||void 0===l||null===(d=l.data)||void 0===d?void 0:d.message)||"An error occurred"),i.oR.error((null===(c=p.response)||void 0===c||null===(f=c.data)||void 0===f?void 0:f.message)||"An error occurred"),p}finally{t(!1)}}),[]);return{get:(0,a.useCallback)(((e,t)=>s("get",e,null,t)),[s]),post:(0,a.useCallback)(((e,t,r)=>s("post",e,t,r)),[s]),put:(0,a.useCallback)(((e,t,r)=>s("put",e,t,r)),[s]),delete:(0,a.useCallback)(((e,t)=>s("delete",e,null,t)),[s]),authenticateTelegram:(0,a.useCallback)((async e=>{t(!0),o(null);try{return(await n.post("/auth/telegram",e)).data}catch(d){var r,a,s,l;throw o((null===(r=d.response)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.message)||"Authentication failed"),i.oR.error((null===(s=d.response)||void 0===s||null===(l=s.data)||void 0===l?void 0:l.message)||"Authentication failed"),d}finally{t(!1)}}),[]),loading:e,error:r}}},1648:(e,t,r)=>{r.r(t),r.d(t,{default:()=>I});var a=r(5043),i=r(6867),n=r(2332),o=r(4193),s=r(2774),l=r(1151),d=r.n(l),c=r(3216),f=r(4634),p=r(3846);const g=r.p+"static/media/fan.102207f01dbe68278b9c21aa134ede42.svg";var u=r(8374);const h=r.p+"static/media/bird.37f2662d7eaf948311cc.png";var x=r(2833),A=r(579);const m=i.Ay.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url(${e=>e.backgroundImage});
  background-size: cover;
  background-position: center;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  position: relative;
  overflow: hidden;
`,v=i.Ay.header`
  text-align: center;
  margin-bottom: 20px;
`,b=i.Ay.img`
  height: 20px;
`,y=i.Ay.div`
  background: linear-gradient(135deg, #ff00ff, #00ffff);
  border-radius: 15px;
  padding: 2px;
  margin-bottom: 20px;
`,w=i.Ay.div`
  background: #000033;
  border-radius: 13px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,j=i.Ay.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff00ff, #00ffff);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  overflow: hidden;
`,S=i.Ay.h2`
  font-size: 20px;
  margin: 5px 0;
  color: #00ffff;
`,k=i.Ay.p`
  font-size: 14px;
  margin: 5px 0;
  color: #ff00ff;
`,R=i.Ay.p`
  font-size: 14px;
  margin: 5px 0;
  color: #ffffff;
`,C=(0,i.Ay)(n.P.div)`
  width: 150px;
  height: 150px;
  margin: 20px auto;
`,E=(0,i.Ay)(n.P.img)`
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 10px #00ffff);
`,T=i.Ay.div`
  font-size: 36px;
  font-weight: bold;
  color: #00ffff;
  text-align: center;
  margin-bottom: 10px;
`,P=i.Ay.div`
  width: 100%;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
`,N=i.Ay.div`
  width: ${e=>e.progress}%;
  height: 100%;
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  transition: width 0.5s ease-in-out;
`,B=i.Ay.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00ffff;
  margin-bottom: 20px;
`,D=i.Ay.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 15px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
`,K=i.Ay.h3`
  font-size: 18px;
  color: #00ffff;
  margin-bottom: 10px;
`,X=i.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`,z=(0,i.Ay)(n.P.button)`
  width: 100%;
  padding: 10px;
  background: linear-gradient(45deg, #ff00ff, #00ffff);
  border: none;
  border-radius: 20px;
  color: #0a0e1f;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
`,V=(0,i.Ay)(n.P.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 14, 31, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,Q=i.Ay.div`
  text-align: center;
`,U=i.Ay.img`
  margin-bottom: 20px;
`,Z=i.Ay.h2`
  font-size: 24px;
  color: #00ffff;
  margin-bottom: 10px;
`,H=i.Ay.p`
  font-size: 36px;
  color: #ff00ff;
  font-weight: bold;
`;const I=function(){const[e,t]=(0,a.useState)(!1),[r,i]=(0,a.useState)(!1),[n,l]=(0,a.useState)(!1),[I,Y]=(0,a.useState)(86400),[F,G]=(0,a.useState)(0),[O,L]=(0,a.useState)(null),M=(0,c.Zp)(),W=(0,a.useRef)(null),q=(0,f.A)(),{user:_,updateUser:J}=(0,p.A)();return(0,a.useEffect)((()=>{const e=setInterval((()=>{Y((e=>Math.max(e-1,0))),G((e=>Math.min(e+100/86400,100)))}),1e3);return()=>clearInterval(e)}),[]),_?(0,A.jsxs)(m,{backgroundImage:x,children:[(0,A.jsx)(v,{children:(0,A.jsx)(b,{src:u,alt:"Neurolov"})}),(0,A.jsx)(y,{children:(0,A.jsxs)(w,{children:[(0,A.jsx)(j,{children:_.avatarUrl?(0,A.jsx)("img",{src:_.avatarUrl,alt:_.username,style:{width:"100%",height:"100%",objectFit:"cover"}}):_.username.charAt(0)}),(0,A.jsx)(S,{children:_.username}),(0,A.jsx)(k,{children:"Welcome to Compute App"}),(0,A.jsxs)(R,{children:["You have ",_.xp," XP"]})]})}),(0,A.jsx)(C,{animate:{rotate:360},transition:{duration:20,repeat:1/0,ease:"linear"},children:(0,A.jsx)(E,{src:g,alt:"Fan",ref:W})}),(0,A.jsx)(T,{children:_.xp}),(0,A.jsx)(P,{children:(0,A.jsx)(N,{progress:F})}),(0,A.jsxs)(B,{children:[(0,A.jsx)(s.w_X,{style:{marginRight:"5px"}}),"Next Reward: ",(e=>{const t=Math.floor(e/3600),r=Math.floor(e%3600/60),a=e%60;return`${t.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`})(I)]}),(0,A.jsxs)(D,{children:[(0,A.jsx)(K,{children:"Daily Reward"}),(0,A.jsxs)(X,{children:[(0,A.jsx)("span",{children:"XP Boost:"}),(0,A.jsx)("span",{children:"500 XP"})]}),(0,A.jsxs)(X,{children:[(0,A.jsx)("span",{children:"Achievement Progress:"}),(0,A.jsx)("span",{children:"+25%"})]}),(0,A.jsx)(z,{onClick:async()=>{if(!e)try{const e=await q.post("/api/users/claim-daily-xp");t(!0),i(!0),J({..._,xp:_.xp+e.xpGained}),W.current&&W.current.animate([{transform:"rotate(0deg)"},{transform:"rotate(720deg)"}],{duration:1e3,easing:"ease-out"}),setTimeout((()=>{l(!0),i(!1)}),1500),setTimeout((()=>{l(!1),M("/home",{state:{animate:!0}})}),4500)}catch(r){console.error("Error claiming daily XP:",r),L("Failed to claim reward. Please try again later.")}},disabled:e,whileHover:{scale:1.05},whileTap:{scale:.95},children:e?"Claimed":"Claim Reward"})]}),r&&(0,A.jsx)(d(),{}),(0,A.jsx)(o.N,{children:n&&(0,A.jsx)(V,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:(0,A.jsxs)(Q,{children:[(0,A.jsx)(U,{src:h,alt:"Success"}),(0,A.jsx)(Z,{children:"Claim Successful!"}),(0,A.jsx)(H,{children:"500 XP"})]})})})]}):(0,A.jsx)("div",{children:"Loading..."})}},2833:(e,t,r)=>{e.exports=r.p+"static/media/background_image.44c2af1e36706d574c25.png"},8374:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAAOCAYAAADDsVnmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWaSURBVHgBvRi7chs3cI+JZ1yeZ1xQTqHjTFK5CNWkNdUlVeQyVSj/gKgmKU2lcUm5z4yo/ICpKulEt2mkpEvhIZpMGDnyHR+SLZIHZPcOEJcQcBQ9Hu9oxQOw2AX2fRcopWoAEAVB0AYPGBrEDtIleq6KP1XwA9GdIr3Q9Fv0i+POEjkhp2GyOQjij3SnUAC4N8SfGttP+7rmDg76BtEUnZFDFMfhBOROAEFNQXZOBTP4Q03Ttrq6c9Sv3BMO/kmRrtm560RLgxOVQ6tgg4E6m+up5XBsBLK5yHcoQ8Dmtpbw72lHcfF6ihh79rW0EsAhK4ZbQDmOowfxeQ9RPXjzRq6dncu1v1+rtR7iX2eq/Oe/vc9+P6t67tIo4o3rLwxhCeZR0KBLOYgjNnQ9kzcKDx5pmtDDg0PVIZPv43I4r2OHkcgxmtZ+DqSgE+tuhkeoPE50LRSNU1LyGFIVqXcYO6M0gKFERN8aShwjh7Fan13K4/Kv/xheXX0Hgh0fb5UHwZYeHpWs9SYSfA+rwS6GbMWD+yvwSZasbzC+AY639TwZ4frCKs8EVcZzF7FC+/UeodcixAN4D5hM5FN1icYZ5QaBERplnHbVSHYVjuVA0nyghmmoLtJMhk6rz41sladuF3D975ccBPuutPERYJmBFkDn8a4eRvRPpy2TPgTkRt2nOkj1Su/ZhLmRah5FReCBci9Gw8h6ZhSKlgtMs1NZ6VfLm/2vypswRmcYSYFrilCO1KPw4DqK9tk9XdmqBnnNJKBa2S2xDYf6mS75YlmY88sQrYVhAb2ADweRNa6x5z3ToHDQc9tsaiVnLCVpNTNMhlgvx9Of+htrwqz3v1kTMpZP1CDFCML0N0jhTjx5pGXzKHI5B099e5k8mBtIsINHkBvJVrSAm0Ce0LMwXlYIbXAp04Jv6UIa67oBifTaof7lyj4t4MXXvoQVQI6mIaYuVHxupE9GN+V8mswoggAGeW1SiYzYcps9X0eRDghTe7LoyXhxxtReIuGe3kiXpfy5De8HK6WsJVFH4Ktnzz1tq1c+eTJrFgcOEuHbCxd41ilunqgApiqYzjLFLhhpNkDHQRI1QRlT/J2pAZMtUDY5FNUacrZQRxZPedc6LzkO34R5GG5ZG11K3NVF+x7kxZjwXkGv70spETuDgNvBNtLySBXsue7bZKWWoki7CQnWvawBwGZgSE25bJWf9SKzHDV7IVzKlsQoA2wiiK40viGjzZ4bOnrqZo3fnwwU2WfQl+4aBmwpM5BVnxK9J9HFWNgvglqgmfMZyMwLz7rp3iqMxu44O+x5x1VHdaTy7q0LK0D/O6wxQ9U1KQybgPXpO3V8/8dXrfuNV63h+fREjmSVWm4yEnZ64r+fv1iQodOXmaO6s8WW9zhtCfzwGD5sQTd14obi9NhEareIiVXkKUUcsDVehMkQPVpntSt7/4G5U7Y90VrY+ATjdBcbgCQzUvb+IyM5lg15mTbUCNZ1q63UAHe9nT0GN+yxc7Z85yEDCXArgi5LLSmPBldeb+k3eoMGYrX4daKpZdGBjrXimlrBRmkCLA/ynK0Lc0PUrYakCYtpqw75iythC+bGIZpdjwiidTU+xAte/1A5hbfpNkZHkhmCIiVrq7HwDKl7kwou5ACu0idJ5+FpwR261vShTccjKHEwEZBHkk2TsGdSeMQQ2HyV8TIGF5quDnnU1DUtzW9aHlTkHE2YG2KHy0Gkl9I9cDtfotc2rVS8UlNz/uzzjryabgTj2S8YNbGiuoRfFPAFNsYG4iUEajP57WF7CRvujMJ0bhwCXTBJke3A/xExgvwdw/5YWtMkvst1XDy1J9J+anEF4ksXrZp/7Exch1+2rmlqsPhloVNwT6oFvm5S+GQQhF+fRAB38e9uknQqtza21kWozyXs9f8BK4Az0mXNlKUAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=95.68b2dab5.chunk.js.map