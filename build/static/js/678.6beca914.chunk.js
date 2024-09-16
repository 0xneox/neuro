"use strict";(self.webpackChunkneurolov_webapp=self.webpackChunkneurolov_webapp||[]).push([[678],{2999:(e,t,r)=>{r.d(t,{A:()=>c});r(5043);var o=r(6867),n=r(3216),i=r(2774),a=r(579);const s=o.Ay.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to right, #071665, #0348B2, #0870DE);
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  z-index: 1000;
`,l=o.Ay.div`
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
`,d=o.Ay.div`
  font-size: 12px;
  margin-top: 4px;
`,c=()=>{const e=(0,n.Zp)(),t=(0,n.zy)(),r=[{path:"/home",icon:i.rQ8,label:"Home"},{path:"/quest",icon:i.KP4,label:"Quest"},{path:"/leaderboard",icon:i.v$b,label:"Leaderboard"},{path:"/invite",icon:i.M5n,label:"Invite"},{path:"/profile",icon:i.x$1,label:"Profile"}];return(0,a.jsx)(s,{children:r.map((r=>(0,a.jsxs)(l,{active:t.pathname===r.path,onClick:()=>e(r.path),children:[(0,a.jsx)(r.icon,{}),(0,a.jsx)(d,{children:r.label})]},r.path)))})}},4634:(e,t,r)=>{r.d(t,{A:()=>a});var o=r(5043),n=r(9628);const i=r(6213).A.create({baseURL:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SENTRY_DSN:"YourSentryDSN",REACT_APP_TELEGRAM_BOT_NAME:"Neurolov"}.REACT_APP_API_BASE_URL,headers:{"Content-Type":"application/json"}});i.interceptors.request.use((e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e}),(e=>Promise.reject(e)));const a=()=>{const[e,t]=(0,o.useState)(!1),[r,a]=(0,o.useState)(null),s=(0,o.useCallback)((async function(e,r){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t(!0),a(null);try{return(await i({method:e,url:r,data:o,...s})).data}catch(x){var l,d,c,p;throw a((null===(l=x.response)||void 0===l||null===(d=l.data)||void 0===d?void 0:d.message)||"An error occurred"),n.oR.error((null===(c=x.response)||void 0===c||null===(p=c.data)||void 0===p?void 0:p.message)||"An error occurred"),x}finally{t(!1)}}),[]);return{get:(0,o.useCallback)(((e,t)=>s("get",e,null,t)),[s]),post:(0,o.useCallback)(((e,t,r)=>s("post",e,t,r)),[s]),put:(0,o.useCallback)(((e,t,r)=>s("put",e,t,r)),[s]),delete:(0,o.useCallback)(((e,t)=>s("delete",e,null,t)),[s]),authenticateTelegram:(0,o.useCallback)((async e=>{t(!0),a(null);try{return(await i.post("/auth/telegram",e)).data}catch(d){var r,o,s,l;throw a((null===(r=d.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.message)||"Authentication failed"),n.oR.error((null===(s=d.response)||void 0===s||null===(l=s.data)||void 0===l?void 0:l.message)||"Authentication failed"),d}finally{t(!1)}}),[]),loading:e,error:r}}},7678:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ee});var o=r(5043),n=r(6867),i=r(2332),a=r(4193),s=r(2774),l=r(2999),d=r(8374),c=r(2573),p=r(2206),x=r(2833),h=r(4634),g=r(579);const u=(0,o.lazy)((()=>r.e(724).then(r.bind(r,5724)))),m=(0,n.Ay)(i.P.div)`
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
`,f=n.Ay.div`
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
`,b=n.Ay.img`
  height: 20px;
  width: auto;
`,A=(0,n.Ay)(b)`
  height: 30px;
`,y=n.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px 20px;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`,v=n.Ay.h1`
  font-size: 28px;
  text-align: center;
  margin-bottom: 10px;
`,w=n.Ay.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
  opacity: 0.8;
`,j=n.Ay.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
  width: 100%;
`,k=n.Ay.input`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 16px;
  outline: none;
`,C=n.Ay.button`
  background-color: #3d85c6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2a5db0;
  }
`,S=n.Ay.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,R=n.Ay.button`
  background-color: ${e=>e.color};
  color: white;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`,E=n.Ay.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin-top: 30px;
  width: 100%;
  text-align: center;
`,z=n.Ay.h2`
  font-size: 24px;
  margin-bottom: 10px;
`,N=n.Ay.p`
  font-size: 36px;
  font-weight: bold;
  color: #4caf50;
`,P=n.Ay.p`
  font-size: 14px;
  margin-top: 20px;
  text-align: center;
  opacity: 0.8;
`,T=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  margin-bottom: 20px;
  width: 100%;
`,B=n.Ay.div`
  display: flex;
  align-items: center;
`,D=n.Ay.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`,Y=n.Ay.div`
  display: flex;
  flex-direction: column;
`,Q=n.Ay.span`
  font-size: 14px;
  font-weight: bold;
`,X=n.Ay.div`
  display: flex;
  gap: 10px;
`,K=n.Ay.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`,U=n.Ay.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin-top: 30px;
  width: 100%;
`,V=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`,Z=n.Ay.span`
  font-weight: bold;
`,H=n.Ay.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`,I=(0,n.Ay)(K)`
  width: 100%;
  margin-top: 10px;
`,O=(0,n.Ay)(i.P.div)`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  width: 100%;
`,F=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: none;
  }
`,L=n.Ay.span`
  font-weight: bold;
`,G=n.Ay.span`
  color: #4caf50;
`,M=(0,n.Ay)(i.P.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,q=n.Ay.div`
  background-color: #000033;
  padding: 20px;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  position: relative;
`,W=n.Ay.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`,_={twitter:"#1DA1F2",telegram:"#0088cc",facebook:"#3b5998",whatsapp:"#25D366"},J={twitter:(0,g.jsx)(s.feZ,{}),telegram:(0,g.jsx)(s.hFS,{}),facebook:(0,g.jsx)(s.iYk,{}),whatsapp:(0,g.jsx)(s.EcP,{})},$=()=>{const[e,t]=(0,o.useState)(""),[r,n]=(0,o.useState)(0),[i,x]=(0,o.useState)(!1),[$,ee]=(0,o.useState)(!1),[te,re]=(0,o.useState)(!1),[oe,ne]=(0,o.useState)({name:"",avatar:p}),[ie]=(0,o.useState)([{level:"Primary",percentage:"10%"},{level:"Secondary",percentage:"5%"},{level:"Tertiary",percentage:"2.5%"}]),[ae,se]=(0,o.useState)([]),[le,de]=(0,o.useState)(""),ce=(0,h.A)();(0,o.useEffect)((()=>{(async()=>{try{const[e,r,o]=await Promise.all([ce.get("/api/user"),ce.get("/api/referrals/stats"),ce.get("/api/friends")]);ne(e),n(r.referralXP),se(r.topReferrals),de(r.referralCode),t(`https://t.me/Neurolov?start=${r.referralCode}`)}catch(e){console.error("Error fetching data:",e)}})()}),[ce]);const pe=(0,o.useCallback)((()=>{navigator.clipboard.writeText(e).then((()=>{x(!0),setTimeout((()=>x(!1)),2e3)}))}),[e]),xe=(0,o.useCallback)((t=>{const r="Join%20me%20on%20Neurolov%20Compute%20Bot!",o="Join me on Neurolov Compute Bot!",n={twitter:`https://twitter.com/intent/tweet?text=${"Join%20me%20on%20Neurolov%20Compute%20Bot!"}&url=${encodeURIComponent(e)}`,telegram:`https://t.me/share/url?url=${encodeURIComponent(e)}&text=${r}`,facebook:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(e)}`,whatsapp:`https://wa.me/?text=${encodeURIComponent(`${o} ${e}`)}`};n[t]&&window.open(n[t],"_blank")}),[e]),he=(0,o.useCallback)((()=>ee((e=>!e))),[]);return(0,g.jsxs)(m,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,g.jsxs)(f,{children:[(0,g.jsx)(b,{src:d,alt:"Neurolov Logo"}),(0,g.jsx)(A,{src:c,alt:"Neurolov Logo"})]}),(0,g.jsxs)(y,{children:[(0,g.jsx)(v,{children:"Invite Friends"}),(0,g.jsx)(w,{children:"Share your referral link and earn rewards when your friends join!"}),(0,g.jsxs)(T,{children:[(0,g.jsxs)(B,{children:[(0,g.jsx)(D,{src:oe.avatar,alt:"User Avatar"}),(0,g.jsx)(Y,{children:(0,g.jsx)(Q,{children:oe.name})})]}),(0,g.jsxs)(X,{children:[(0,g.jsx)(K,{onClick:()=>window.open("https://t.me/neurolov9","_blank"),children:"Join Channel"}),(0,g.jsxs)(K,{children:[(0,g.jsx)(s.YXz,{})," ",ae.length]})]})]}),(0,g.jsxs)(j,{children:[(0,g.jsx)(k,{value:e,readOnly:!0}),(0,g.jsxs)(C,{onClick:pe,children:[(0,g.jsx)(s.paH,{style:{marginRight:"5px"}}),i?"Copied!":"Copy Link"]})]}),(0,g.jsx)(S,{children:Object.entries(_).map((e=>{let[t,r]=e;return(0,g.jsx)(R,{color:r,onClick:()=>xe(t),children:J[t]},t)}))}),(0,g.jsxs)(K,{onClick:he,style:{width:"100%",marginTop:"20px"},children:[(0,g.jsx)(s.YXz,{style:{marginRight:"5px"}})," Open Friends List (",ae.length,")"]}),(0,g.jsx)(a.N,{children:$&&(0,g.jsx)(O,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:ae.map(((e,t)=>(0,g.jsxs)(F,{children:[(0,g.jsx)(L,{children:e.name}),(0,g.jsxs)(G,{children:[e.reward," XP"]})]},t)))})}),(0,g.jsxs)(U,{children:[(0,g.jsx)(v,{children:"Referral Rewards"}),ie.map(((e,t)=>(0,g.jsxs)(V,{children:[(0,g.jsxs)(Z,{children:[e.level," Referrals"]}),(0,g.jsxs)(H,{children:[(0,g.jsx)(s.lHQ,{style:{marginRight:"5px",color:"yellow"}}),e.percentage," of earned XP"]})]},t))),(0,g.jsx)(I,{onClick:()=>re(!0),children:"Learn more"})]}),(0,g.jsxs)(E,{children:[(0,g.jsx)(z,{children:"Your Referral Earnings"}),(0,g.jsxs)(N,{children:[r," XP"]})]}),(0,g.jsxs)(P,{children:[(0,g.jsx)(s.YXz,{style:{marginRight:"5px"}}),"Earn XP by inviting friends and through their earnings!"]})]}),(0,g.jsx)(l.A,{}),(0,g.jsx)(a.N,{children:te&&(0,g.jsx)(M,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:(0,g.jsxs)(q,{children:[(0,g.jsx)(W,{onClick:()=>re(!1),children:(0,g.jsx)(s.QCr,{})}),(0,g.jsx)(o.Suspense,{fallback:(0,g.jsx)("div",{children:"Loading..."}),children:(0,g.jsx)(u,{})})]})})})]})},ee=o.memo($)},2206:(e,t,r)=>{e.exports=r.p+"static/media/sam.d0ce2880254a8c7adb35.webp"},2833:(e,t,r)=>{e.exports=r.p+"static/media/background_image.44c2af1e36706d574c25.png"},8374:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAAOCAYAAADDsVnmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWaSURBVHgBvRi7chs3cI+JZ1yeZ1xQTqHjTFK5CNWkNdUlVeQyVSj/gKgmKU2lcUm5z4yo/ICpKulEt2mkpEvhIZpMGDnyHR+SLZIHZPcOEJcQcBQ9Hu9oxQOw2AX2fRcopWoAEAVB0AYPGBrEDtIleq6KP1XwA9GdIr3Q9Fv0i+POEjkhp2GyOQjij3SnUAC4N8SfGttP+7rmDg76BtEUnZFDFMfhBOROAEFNQXZOBTP4Q03Ttrq6c9Sv3BMO/kmRrtm560RLgxOVQ6tgg4E6m+up5XBsBLK5yHcoQ8Dmtpbw72lHcfF6ihh79rW0EsAhK4ZbQDmOowfxeQ9RPXjzRq6dncu1v1+rtR7iX2eq/Oe/vc9+P6t67tIo4o3rLwxhCeZR0KBLOYgjNnQ9kzcKDx5pmtDDg0PVIZPv43I4r2OHkcgxmtZ+DqSgE+tuhkeoPE50LRSNU1LyGFIVqXcYO6M0gKFERN8aShwjh7Fan13K4/Kv/xheXX0Hgh0fb5UHwZYeHpWs9SYSfA+rwS6GbMWD+yvwSZasbzC+AY639TwZ4frCKs8EVcZzF7FC+/UeodcixAN4D5hM5FN1icYZ5QaBERplnHbVSHYVjuVA0nyghmmoLtJMhk6rz41sladuF3D975ccBPuutPERYJmBFkDn8a4eRvRPpy2TPgTkRt2nOkj1Su/ZhLmRah5FReCBci9Gw8h6ZhSKlgtMs1NZ6VfLm/2vypswRmcYSYFrilCO1KPw4DqK9tk9XdmqBnnNJKBa2S2xDYf6mS75YlmY88sQrYVhAb2ADweRNa6x5z3ToHDQc9tsaiVnLCVpNTNMhlgvx9Of+htrwqz3v1kTMpZP1CDFCML0N0jhTjx5pGXzKHI5B099e5k8mBtIsINHkBvJVrSAm0Ce0LMwXlYIbXAp04Jv6UIa67oBifTaof7lyj4t4MXXvoQVQI6mIaYuVHxupE9GN+V8mswoggAGeW1SiYzYcps9X0eRDghTe7LoyXhxxtReIuGe3kiXpfy5De8HK6WsJVFH4Ktnzz1tq1c+eTJrFgcOEuHbCxd41ilunqgApiqYzjLFLhhpNkDHQRI1QRlT/J2pAZMtUDY5FNUacrZQRxZPedc6LzkO34R5GG5ZG11K3NVF+x7kxZjwXkGv70spETuDgNvBNtLySBXsue7bZKWWoki7CQnWvawBwGZgSE25bJWf9SKzHDV7IVzKlsQoA2wiiK40viGjzZ4bOnrqZo3fnwwU2WfQl+4aBmwpM5BVnxK9J9HFWNgvglqgmfMZyMwLz7rp3iqMxu44O+x5x1VHdaTy7q0LK0D/O6wxQ9U1KQybgPXpO3V8/8dXrfuNV63h+fREjmSVWm4yEnZ64r+fv1iQodOXmaO6s8WW9zhtCfzwGD5sQTd14obi9NhEareIiVXkKUUcsDVehMkQPVpntSt7/4G5U7Y90VrY+ATjdBcbgCQzUvb+IyM5lg15mTbUCNZ1q63UAHe9nT0GN+yxc7Z85yEDCXArgi5LLSmPBldeb+k3eoMGYrX4daKpZdGBjrXimlrBRmkCLA/ynK0Lc0PUrYakCYtpqw75iythC+bGIZpdjwiidTU+xAte/1A5hbfpNkZHkhmCIiVrq7HwDKl7kwou5ACu0idJ5+FpwR261vShTccjKHEwEZBHkk2TsGdSeMQQ2HyV8TIGF5quDnnU1DUtzW9aHlTkHE2YG2KHy0Gkl9I9cDtfotc2rVS8UlNz/uzzjryabgTj2S8YNbGiuoRfFPAFNsYG4iUEajP57WF7CRvujMJ0bhwCXTBJke3A/xExgvwdw/5YWtMkvst1XDy1J9J+anEF4ksXrZp/7Exch1+2rmlqsPhloVNwT6oFvm5S+GQQhF+fRAB38e9uknQqtza21kWozyXs9f8BK4Az0mXNlKUAAAAASUVORK5CYII="},2573:(e,t,r)=>{e.exports=r.p+"static/media/logo1.6708ad68fc8bcd8770a0.png"}}]);
//# sourceMappingURL=678.6beca914.chunk.js.map