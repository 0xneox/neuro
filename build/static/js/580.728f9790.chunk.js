"use strict";(self.webpackChunkneurolov_webapp=self.webpackChunkneurolov_webapp||[]).push([[580],{2999:(e,t,a)=>{a.d(t,{A:()=>d});a(5043);var i=a(6867),o=a(3216),n=a(2774),r=a(579);const s=i.Ay.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to right, #071665, #0348B2, #0870DE);
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  z-index: 1000;
`,l=i.Ay.div`
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
`,d=()=>{const e=(0,o.Zp)(),t=(0,o.zy)(),a=[{path:"/home",icon:n.rQ8,label:"Home"},{path:"/quest",icon:n.KP4,label:"Quest"},{path:"/leaderboard",icon:n.v$b,label:"Leaderboard"},{path:"/invite",icon:n.M5n,label:"Invite"},{path:"/profile",icon:n.x$1,label:"Profile"}];return(0,r.jsx)(s,{children:a.map((a=>(0,r.jsxs)(l,{active:t.pathname===a.path,onClick:()=>e(a.path),children:[(0,r.jsx)(a.icon,{}),(0,r.jsx)(c,{children:a.label})]},a.path)))})}},4634:(e,t,a)=>{a.d(t,{A:()=>r});var i=a(5043),o=a(9628);const n=a(6213).A.create({baseURL:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SENTRY_DSN:"YourSentryDSN",REACT_APP_TELEGRAM_BOT_NAME:"Neurolov"}.REACT_APP_API_BASE_URL,headers:{"Content-Type":"application/json"}});n.interceptors.request.use((e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e}),(e=>Promise.reject(e)));const r=()=>{const[e,t]=(0,i.useState)(!1),[a,r]=(0,i.useState)(null),s=(0,i.useCallback)((async function(e,a){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t(!0),r(null);try{return(await n({method:e,url:a,data:i,...s})).data}catch(h){var l,c,d,p;throw r((null===(l=h.response)||void 0===l||null===(c=l.data)||void 0===c?void 0:c.message)||"An error occurred"),o.oR.error((null===(d=h.response)||void 0===d||null===(p=d.data)||void 0===p?void 0:p.message)||"An error occurred"),h}finally{t(!1)}}),[]);return{get:(0,i.useCallback)(((e,t)=>s("get",e,null,t)),[s]),post:(0,i.useCallback)(((e,t,a)=>s("post",e,t,a)),[s]),put:(0,i.useCallback)(((e,t,a)=>s("put",e,t,a)),[s]),delete:(0,i.useCallback)(((e,t)=>s("delete",e,null,t)),[s]),authenticateTelegram:(0,i.useCallback)((async e=>{t(!0),r(null);try{return(await n.post("/auth/telegram",e)).data}catch(c){var a,i,s,l;throw r((null===(a=c.response)||void 0===a||null===(i=a.data)||void 0===i?void 0:i.message)||"Authentication failed"),o.oR.error((null===(s=c.response)||void 0===s||null===(l=s.data)||void 0===l?void 0:l.message)||"Authentication failed"),c}finally{t(!1)}}),[]),loading:e,error:a}}},8580:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var i=a(5043),o=a(6867),n=a(2332),r=a(4193),s=a(2774),l=a(3216),c=a(4634),d=a(3846);var p=a(2999);const h=a.p+"static/media/fan_2.bb83e407ab92b891d653a7fd239cf5a9.svg";const u=a.p+"static/media/fan_3.c5f4006ddccc7c46cbff9eec9d2b90a2.svg";const f=a.p+"static/media/breath_1.424d4904bbdc525c2ea9b5d18c2584a8.svg";var x=a(8374),g=a(2573),b=a(2833),A=a(579);const m=o.DU`
  * {
    box-sizing: border-box;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }
`,v=o.i7`
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.03); opacity: 0.5; }
`,y=o.i7`
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
`,w=o.Ay.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url(${b});
  background-size: cover;
  background-position: center;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  position: relative;
  touch-action: manipulation;
`,j=(o.Ay.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  opacity: ${e=>e.isVisible?.5:0};
  transition: opacity 0.3s ease;
`,o.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 3;
`),k=o.Ay.img`
  height: 20px;
  width: auto;
`,C=(0,o.Ay)(k)`
  height: 30px;
`,R=o.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  z-index: 2;
`,S=o.Ay.span`
  font-size: 14px;
  font-weight: bold;
`,T=o.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 2;
`,P=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 255, 255, 0.1);
  padding: 5px 10px;
  border-radius: 10px;
`,E=o.Ay.div`
  font-size: 20px;
  font-weight: bold;
  color: #00ffff;
`,z=o.Ay.div`
  font-size: 12px;
  color: #ffffff;
`,B=o.Ay.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;
`,D=(0,o.Ay)(n.P.img)`
  width: 70%;
  height: 70%;
  object-fit: contain;
`,M=(0,o.Ay)(n.P.img)`
  position: absolute;
  width: 100%;
  height: 100%;

  transform: translate(-50%, -50%);
  animation: ${v} 4s infinite ease-in-out;
  opacity: ${e=>Math.min(.3+.7*e.intensity,1)};
  filter: hue-rotate(${e=>e.hue}deg) saturate(${e=>100+100*e.intensity}%);
`,H=o.Ay.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 10px 20px;
  z-index: 5;
`,N=(0,o.Ay)(n.P.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px 15px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Q=o.Ay.div`
  position: absolute;
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  color: #00ffff;
  font-size: 16px;
  font-weight: bold;
  pointer-events: none;
  animation: ${y} 1s forwards;
`,K=o.Ay.div`
  width: 100%;
  padding: 0 20px;
  margin-bottom: 10px;
`,X=o.Ay.div`
  width: 100%;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  overflow: hidden;
`,V=o.Ay.div`
  width: ${e=>e.progress}%;
  height: 100%;
  background: linear-gradient(to right, #8B5CF6, #EC4899);
  transition: width 0.3s ease-out;
`,U=o.Ay.div`
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  margin-top: 5px;
`,Z=(0,o.Ay)(N)`
  position: absolute;
  bottom: 70px;
  right: 20px;
  z-index: 5;
`,Y=(0,o.Ay)(n.P.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.9);
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  z-index: 1000;
`,F=o.Ay.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;function L(){const{user:e,updateUser:t}=(0,d.A)(),[a,o]=(0,i.useState)(0),[n,b]=(0,i.useState)(!1),[v,y]=(0,i.useState)(!1),[L,I]=(0,i.useState)(0),[O,G]=(0,i.useState)(0),[_,q]=(0,i.useState)(!1),[W,J]=(0,i.useState)(1),[$,ee]=(0,i.useState)(!1),[te,ae]=(0,i.useState)([]),ie=(0,i.useRef)(null),oe=(0,i.useRef)(Date.now()),ne=(0,i.useRef)(null),re=(0,i.useRef)(0),se=((0,l.Zp)(),(0,c.A)()),le=(0,i.useCallback)((async e=>{if(e.preventDefault(),n)return;const a=Date.now();oe.current=a;try{const e=await se.post("/tap"),{compute:i,totalTaps:n,computePower:r,cooldownEndTime:s}=e.user;t({compute:i,totalTaps:n,computePower:r}),I((e=>{const t=e+1;return t>=500&&ce(),t})),o((e=>Math.min(e+2,100))),G((e=>Math.min(e+200,1e5))),ee(!0);const l=r,c=Math.random()*Math.PI*2,d=20+20*Math.random(),p=50+Math.sin(c)*d,h=50+Math.cos(c)*d,u=re.current++;if(ae((e=>[...e,{id:u,top:p,left:h,xp:l}])),setTimeout((()=>{ae((e=>e.filter((e=>e.id!==u))))}),1e3),(e=>{if(window.navigator.vibrate)switch(e){case"tap":default:window.navigator.vibrate(50);break;case"cooldown":window.navigator.vibrate([100,30,100]);break;case"claim":window.navigator.vibrate([50,50,50]);break;case"bonus":window.navigator.vibrate([100,50,100,50,100]);break;case"quest":window.navigator.vibrate([50,100,50,100])}})("tap"),s){b(!0);const e=new Date(s)-a;ne.current=setTimeout((()=>{b(!1)}),e)}}catch(i){console.error("Error during tap:",i)}}),[n,se,t]),ce=(0,i.useCallback)((()=>{b(!0),I(0),o(0),G(0),ee(!1),ne.current=setTimeout((()=>{b(!1)}),5e3)}),[]),de=(0,i.useCallback)((async()=>{if(!n&&!_&&O>=5e4)try{const e=await se.post("/boost");q(!0),o(100),G(1e5),I((e=>e+100)),setTimeout((()=>{q(!1),o((e=>Math.max(e-50,0))),G((e=>Math.max(e-5e4,0)))}),3e3),J((e=>{const t=[0,1,1,2,3,5,8,13,21,34];return t[Math.min(e+1,t.length-1)]})),t(e.user)}catch(e){console.error("Error during boost:",e)}}),[n,_,O,se,t]),pe=(0,i.useCallback)((async()=>{try{const e=await se.post("/upgrade");t(e.user)}catch(e){console.error("Error during upgrade:",e)}}),[se,t]);(0,i.useEffect)((()=>()=>{ne.current&&clearTimeout(ne.current)}),[]);const he=(0,i.useCallback)((e=>e>=25e3?u:h),[]),ue=(0,i.useCallback)((e=>e>=1e4&&e<25e3?`hue-rotate(${90+(e-1e4)/15e3*270}deg)`:e>=25e3?"hue-rotate(360deg)":"none"),[]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(m,{}),(0,A.jsxs)(w,{children:[(0,A.jsxs)(j,{children:[(0,A.jsx)(k,{src:x,alt:"Left Logo"}),(0,A.jsx)(C,{src:g,alt:"Right Logo"})]}),(0,A.jsxs)(R,{children:[(0,A.jsx)(S,{children:e.name}),(0,A.jsxs)("div",{children:["CP: ",e.cpLevel]})]}),(0,A.jsxs)(T,{children:[(0,A.jsxs)(P,{children:[(0,A.jsx)(E,{children:e.xp}),(0,A.jsx)(z,{children:"XP"})]}),(0,A.jsxs)(P,{children:[(0,A.jsx)(E,{children:Math.round(O)}),(0,A.jsx)(z,{children:"RPM"})]})]}),(0,A.jsxs)(B,{onTouchStart:le,onClick:le,children:[(0,A.jsx)(M,{src:f,alt:"Breathing Light",intensity:n?1:L/500,hue:n?0:180-L/500*180}),(0,A.jsx)(D,{ref:ie,src:he(e.xp),alt:"Fan",animate:{rotate:a>0?360:0},transition:{duration:a>0?Math.max(.1,1-a/100):0,ease:"linear",repeat:a>0?1/0:0},style:{filter:ue(e.xp)}}),te.map((e=>(0,A.jsxs)(Q,{top:e.top,left:e.left,children:["+",e.xp]},e.id)))]}),(0,A.jsxs)(K,{children:[(0,A.jsx)(X,{children:(0,A.jsx)(V,{progress:(500-L)/5})}),(0,A.jsxs)(U,{children:[(0,A.jsx)(s.lHQ,{})," ",500-L," Taps Remaining"]})]}),(0,A.jsxs)(H,{children:[(0,A.jsxs)(N,{onClick:de,disabled:n||_||O<5e4,whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,A.jsx)(s.lHQ,{})," Boost (",W,")"]}),(0,A.jsxs)(N,{onClick:pe,whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,A.jsx)(s.Pcn,{})," Upgrade"]})]}),(0,A.jsx)(Z,{onClick:()=>y(!0),whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,A.jsx)(s.__w,{})}),(0,A.jsx)(r.N,{children:v&&(0,A.jsxs)(Y,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.3},children:[(0,A.jsx)("h3",{children:"How to Play"}),(0,A.jsxs)("ul",{children:[(0,A.jsx)("li",{children:"Tap the fan to spin it and earn XP!"}),(0,A.jsx)("li",{children:"Each tap increases the fan's RPM and your XP."}),(0,A.jsx)("li",{children:"You can tap continuously for up to 500 taps."}),(0,A.jsx)("li",{children:"After reaching 500 taps, there's a 5-second cooling period."}),(0,A.jsx)("li",{children:"The fan will slow down if you don't tap for 0.5 seconds."}),(0,A.jsx)("li",{children:"Reach new CP levels by earning XP."}),(0,A.jsx)("li",{children:"The fan color changes at 10,000 XP and upgrades at 25,000 XP."}),(0,A.jsx)("li",{children:"Use the Boost button when RPM reaches 50k for a temporary speed increase to 100k RPM."}),(0,A.jsx)("li",{children:"Boost count increases according to the Fibonacci series, giving more XP each time."})]}),(0,A.jsx)(F,{onClick:()=>y(!1),children:"\xd7"})]})}),(0,A.jsx)(p.A,{})]})]})}const I=i.memo(L)},2833:(e,t,a)=>{e.exports=a.p+"static/media/background_image.44c2af1e36706d574c25.png"},8374:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAAOCAYAAADDsVnmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWaSURBVHgBvRi7chs3cI+JZ1yeZ1xQTqHjTFK5CNWkNdUlVeQyVSj/gKgmKU2lcUm5z4yo/ICpKulEt2mkpEvhIZpMGDnyHR+SLZIHZPcOEJcQcBQ9Hu9oxQOw2AX2fRcopWoAEAVB0AYPGBrEDtIleq6KP1XwA9GdIr3Q9Fv0i+POEjkhp2GyOQjij3SnUAC4N8SfGttP+7rmDg76BtEUnZFDFMfhBOROAEFNQXZOBTP4Q03Ttrq6c9Sv3BMO/kmRrtm560RLgxOVQ6tgg4E6m+up5XBsBLK5yHcoQ8Dmtpbw72lHcfF6ihh79rW0EsAhK4ZbQDmOowfxeQ9RPXjzRq6dncu1v1+rtR7iX2eq/Oe/vc9+P6t67tIo4o3rLwxhCeZR0KBLOYgjNnQ9kzcKDx5pmtDDg0PVIZPv43I4r2OHkcgxmtZ+DqSgE+tuhkeoPE50LRSNU1LyGFIVqXcYO6M0gKFERN8aShwjh7Fan13K4/Kv/xheXX0Hgh0fb5UHwZYeHpWs9SYSfA+rwS6GbMWD+yvwSZasbzC+AY639TwZ4frCKs8EVcZzF7FC+/UeodcixAN4D5hM5FN1icYZ5QaBERplnHbVSHYVjuVA0nyghmmoLtJMhk6rz41sladuF3D975ccBPuutPERYJmBFkDn8a4eRvRPpy2TPgTkRt2nOkj1Su/ZhLmRah5FReCBci9Gw8h6ZhSKlgtMs1NZ6VfLm/2vypswRmcYSYFrilCO1KPw4DqK9tk9XdmqBnnNJKBa2S2xDYf6mS75YlmY88sQrYVhAb2ADweRNa6x5z3ToHDQc9tsaiVnLCVpNTNMhlgvx9Of+htrwqz3v1kTMpZP1CDFCML0N0jhTjx5pGXzKHI5B099e5k8mBtIsINHkBvJVrSAm0Ce0LMwXlYIbXAp04Jv6UIa67oBifTaof7lyj4t4MXXvoQVQI6mIaYuVHxupE9GN+V8mswoggAGeW1SiYzYcps9X0eRDghTe7LoyXhxxtReIuGe3kiXpfy5De8HK6WsJVFH4Ktnzz1tq1c+eTJrFgcOEuHbCxd41ilunqgApiqYzjLFLhhpNkDHQRI1QRlT/J2pAZMtUDY5FNUacrZQRxZPedc6LzkO34R5GG5ZG11K3NVF+x7kxZjwXkGv70spETuDgNvBNtLySBXsue7bZKWWoki7CQnWvawBwGZgSE25bJWf9SKzHDV7IVzKlsQoA2wiiK40viGjzZ4bOnrqZo3fnwwU2WfQl+4aBmwpM5BVnxK9J9HFWNgvglqgmfMZyMwLz7rp3iqMxu44O+x5x1VHdaTy7q0LK0D/O6wxQ9U1KQybgPXpO3V8/8dXrfuNV63h+fREjmSVWm4yEnZ64r+fv1iQodOXmaO6s8WW9zhtCfzwGD5sQTd14obi9NhEareIiVXkKUUcsDVehMkQPVpntSt7/4G5U7Y90VrY+ATjdBcbgCQzUvb+IyM5lg15mTbUCNZ1q63UAHe9nT0GN+yxc7Z85yEDCXArgi5LLSmPBldeb+k3eoMGYrX4daKpZdGBjrXimlrBRmkCLA/ynK0Lc0PUrYakCYtpqw75iythC+bGIZpdjwiidTU+xAte/1A5hbfpNkZHkhmCIiVrq7HwDKl7kwou5ACu0idJ5+FpwR261vShTccjKHEwEZBHkk2TsGdSeMQQ2HyV8TIGF5quDnnU1DUtzW9aHlTkHE2YG2KHy0Gkl9I9cDtfotc2rVS8UlNz/uzzjryabgTj2S8YNbGiuoRfFPAFNsYG4iUEajP57WF7CRvujMJ0bhwCXTBJke3A/xExgvwdw/5YWtMkvst1XDy1J9J+anEF4ksXrZp/7Exch1+2rmlqsPhloVNwT6oFvm5S+GQQhF+fRAB38e9uknQqtza21kWozyXs9f8BK4Az0mXNlKUAAAAASUVORK5CYII="},2573:(e,t,a)=>{e.exports=a.p+"static/media/logo1.6708ad68fc8bcd8770a0.png"}}]);
//# sourceMappingURL=580.728f9790.chunk.js.map