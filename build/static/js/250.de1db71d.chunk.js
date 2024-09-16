"use strict";(self.webpackChunkneurolov_webapp=self.webpackChunkneurolov_webapp||[]).push([[250],{2999:(e,i,n)=>{n.d(i,{A:()=>d});n(5043);var t=n(6867),r=n(3216),o=n(2774),s=n(579);const a=t.Ay.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to right, #071665, #0348B2, #0870DE);
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  z-index: 1000;
`,l=t.Ay.div`
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
`,c=t.Ay.div`
  font-size: 12px;
  margin-top: 4px;
`,d=()=>{const e=(0,r.Zp)(),i=(0,r.zy)(),n=[{path:"/home",icon:o.rQ8,label:"Home"},{path:"/quest",icon:o.KP4,label:"Quest"},{path:"/leaderboard",icon:o.v$b,label:"Leaderboard"},{path:"/invite",icon:o.M5n,label:"Invite"},{path:"/profile",icon:o.x$1,label:"Profile"}];return(0,s.jsx)(a,{children:n.map((n=>(0,s.jsxs)(l,{active:i.pathname===n.path,onClick:()=>e(n.path),children:[(0,s.jsx)(n.icon,{}),(0,s.jsx)(c,{children:n.label})]},n.path)))})}},83:(e,i,n)=>{n.r(i),n.d(i,{default:()=>N});var t=n(5043),r=n(6867),o=n(2332),s=n(4193),a=n(3216),l=n(2774),c=n(6213),d=n(2999),h=n(8374),p=n(2573);const u=n.p+"static/media/settings_bg.15f32c21feda79e201fb.png";var x=n(579);const y={body:"#f0f0f0",text:"#333333",background:`url(${u})`},m={body:"#333333",text:"#f0f0f0",background:`linear-gradient(180deg, #000033 0%, #000066 100%), url(${u})`},g=(0,r.Ay)(o.P.div)`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  color: ${e=>e.theme.text};
  background: ${e=>e.theme.background};
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
`,f=r.Ay.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`,j=r.Ay.img`
  height: 20px;
  width: auto;
`,b=(0,r.Ay)(j)`
  height: 30px; // Increased size for the right logo
`,A=r.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 100px 20px 70px;
  overflow-y: auto;
`,v=r.Ay.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`,w=r.Ay.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin-right: 15px;
`,k=r.Ay.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,C=r.Ay.label`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: rgba(61, 133, 198, 0.8);
  color: white;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,T=r.Ay.input`
  display: none;
`,P=r.Ay.div`
  flex: 1;
`,S=r.Ay.h2`
  margin: 0;
  font-size: 20px;
`,I=r.Ay.p`
  margin: 5px 0 0;
  font-size: 14px;
`,D=(0,r.Ay)(o.P.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
`,L=r.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`,E=r.Ay.span`
  display: flex;
  align-items: center;
  font-size: 16px;
`,U=r.Ay.span`
  margin-right: 10px;
`,Y=(0,r.Ay)(o.P.div)`
  width: 50px;
  height: 24px;
  background-color: ${e=>e.isOn?"rgba(0, 200, 83, 0.8)":"rgba(204, 204, 204, 0.8)"};
  display: flex;
  justify-content: ${e=>e.isOn?"flex-end":"flex-start"};
  border-radius: 50px;
  padding: 2px;
  cursor: pointer;
`,B=(0,r.Ay)(o.P.div)`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
`,V=r.Ay.select`
  background: rgba(255, 255, 255, 0.2);
  color: ${e=>e.theme.text};
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
`,z=(0,r.Ay)(o.P.button)`
  background: rgba(61, 133, 198, 0.8);
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 50%;
  margin-top: 10px;
  font-size: 14px;
`,R=((0,r.Ay)(z)`
  background: rgba(211, 47, 47, 0.8);
`,(0,r.Ay)(o.P.button)`
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  color: ${e=>e.theme.text};
  font-size: 24px;
  cursor: pointer;
  z-index: 1001;
`,(0,r.Ay)(o.P.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1002;
`),W=(0,r.Ay)(o.P.div)`
  background-color: ${e=>e.theme.body};
  color: ${e=>e.theme.text};
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
`,N=()=>{const[e,i]=(0,t.useState)({name:"Sam A",avatar:"https://facts.net/wp-content/uploads/2023/06/Sam-Bankman-Fried.webp",xp:15e4,cpLevel:5}),[n,o]=((0,a.Zp)(),(0,t.useState)(!0)),[u,N]=(0,t.useState)(!0),[Q,O]=(0,t.useState)(!0),[Z,K]=(0,t.useState)("English"),[H,F]=(0,t.useState)(!0),[G,X]=(0,t.useState)(!1),[q,M]=(0,t.useState)(!1),J=(0,t.useRef)(null),$=H?m:y,_=e=>()=>e((e=>!e));return(0,x.jsx)(r.NP,{theme:$,children:(0,x.jsxs)(g,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,x.jsxs)(f,{children:[(0,x.jsx)(j,{src:h,alt:"Left Logo"}),(0,x.jsx)(b,{src:p,alt:"Right Logo"})]}),(0,x.jsxs)(A,{children:[(0,x.jsxs)(v,{children:[(0,x.jsxs)(w,{children:[(0,x.jsx)(k,{src:e.avatar,alt:e.name}),(0,x.jsx)(C,{htmlFor:"avatar-upload",children:(0,x.jsx)(l.p5B,{})}),(0,x.jsx)(T,{id:"avatar-upload",type:"file",accept:"image/*",onChange:async e=>{const n=e.target.files[0];if(n){const e=new FormData;e.append("avatar",n);try{const n=await c.A.post("/api/user/avatar",e,{headers:{"Content-Type":"multipart/form-data"}});i((e=>({...e,avatar:n.data.avatarUrl})))}catch(t){console.error("Error uploading avatar:",t)}}},ref:J})]}),(0,x.jsxs)(P,{children:[(0,x.jsx)(S,{children:e.name}),(0,x.jsxs)(I,{children:["XP: ",e.xp," | CP Level: ",e.cpLevel]})]})]}),(0,x.jsxs)(s.N,{children:[(0,x.jsx)(D,{children:(0,x.jsxs)(L,{children:[(0,x.jsxs)(E,{children:[(0,x.jsx)(U,{children:(0,x.jsx)(l.jNV,{})}),"Alert Notifications"]}),(0,x.jsx)(Y,{isOn:n,onClick:_(o),children:(0,x.jsx)(B,{layout:!0,transition:{type:"spring",stiffness:700,damping:30}})})]})}),(0,x.jsx)(D,{children:(0,x.jsxs)(L,{children:[(0,x.jsxs)(E,{children:[(0,x.jsx)(U,{children:(0,x.jsx)(l.FZ2,{})}),"Sound"]}),(0,x.jsx)(Y,{isOn:u,onClick:_(N),children:(0,x.jsx)(B,{layout:!0,transition:{type:"spring",stiffness:700,damping:30}})})]})}),(0,x.jsx)(D,{children:(0,x.jsxs)(L,{children:[(0,x.jsxs)(E,{children:[(0,x.jsx)(U,{children:(0,x.jsx)(l.Y4J,{})}),"Vibration"]}),(0,x.jsx)(Y,{isOn:Q,onClick:_(O),children:(0,x.jsx)(B,{layout:!0,transition:{type:"spring",stiffness:700,damping:30}})})]})}),(0,x.jsx)(D,{children:(0,x.jsxs)(L,{children:[(0,x.jsxs)(E,{children:[(0,x.jsx)(U,{children:(0,x.jsx)(l.f35,{})}),"Language"]}),(0,x.jsxs)(V,{value:Z,onChange:e=>K(e.target.value),children:[(0,x.jsx)("option",{value:"English",children:"English"}),(0,x.jsx)("option",{value:"Russian",children:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"})]})]})}),(0,x.jsx)(D,{children:(0,x.jsxs)(L,{children:[(0,x.jsxs)(E,{children:[(0,x.jsx)(U,{children:H?(0,x.jsx)(l.V6H,{}):(0,x.jsx)(l.wQq,{})}),H?"Dark Mode":"Light Mode"]}),(0,x.jsx)(Y,{isOn:H,onClick:()=>{F(!H)},children:(0,x.jsx)(B,{layout:!0,transition:{type:"spring",stiffness:700,damping:30}})})]})}),(0,x.jsx)(D,{children:(0,x.jsxs)(L,{children:[(0,x.jsxs)(E,{children:[(0,x.jsx)(U,{children:(0,x.jsx)(l.SMR,{})}),"Privacy Policy"]}),(0,x.jsx)(z,{onClick:()=>X(!0),children:"View"})]})}),(0,x.jsx)(D,{children:(0,x.jsxs)(L,{children:[(0,x.jsxs)(E,{children:[(0,x.jsx)(U,{children:(0,x.jsx)(l.MTc,{})}),"Terms of Service"]}),(0,x.jsx)(z,{onClick:()=>M(!0),children:"View"})]})}),(0,x.jsx)(D,{children:(0,x.jsxs)(L,{children:[(0,x.jsxs)(E,{children:[(0,x.jsx)(U,{children:(0,x.jsx)(l.hFS,{})}),"Help"]}),(0,x.jsx)(z,{onClick:()=>window.open("https://t.me/neurolov9","_blank"),children:"Join"})]})})]})]}),(0,x.jsx)(d.A,{}),G&&(0,x.jsx)(R,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>X(!1),children:(0,x.jsxs)(W,{onClick:e=>e.stopPropagation(),children:[(0,x.jsx)("h3",{children:"Privacy Policy"}),(0,x.jsx)("h4",{children:"Last updated: 11-09-2024"}),(0,x.jsx)("h4",{children:"1. Introduction"}),(0,x.jsx)("h4",{children:'Welcome to NeuroLov Compute App ("we," "our," or "us"), a Telegram micro application developed by Orlov Innovations, Limited ("Company"), based in Dubai. This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information when you use our tap-to-earn game cum application ("App") within the Telegram platform.'}),(0,x.jsx)("h4",{children:"2. Information We Collect"}),(0,x.jsx)("h4",{children:"2.1 Information Provided by Telegram"}),(0,x.jsx)("h4",{children:"We may receive certain information from Telegram when you use our App, including:"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:"Your Telegram user ID"}),(0,x.jsx)("li",{children:"Your username"}),(0,x.jsx)("li",{children:"Your profile picture"})]}),(0,x.jsx)("h4",{children:"2.2 Information You Provide"}),(0,x.jsx)("h4",{children:"We may collect information you provide directly through the App, such as:"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:"Game progress and scores"}),(0,x.jsx)("li",{children:"In-app purchase information"}),(0,x.jsx)("li",{children:"Communication with our support team"})]}),(0,x.jsx)("h4",{children:"2.3 Automatically Collected Information"}),(0,x.jsx)("h4",{children:"We may automatically collect certain information about your device and usage of the App, including:"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:"Device type and operating system"}),(0,x.jsx)("li",{children:"App usage statistics"}),(0,x.jsx)("li",{children:"Error logs and crash reports"})]}),(0,x.jsx)("h4",{children:"3. How We Use Your Information"}),(0,x.jsx)("h4",{children:"We use the collected information for the following purposes:"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:"To provide and maintain our App"}),(0,x.jsx)("li",{children:"To improve user experience and App functionality"}),(0,x.jsx)("li",{children:"To process in-app transactions"}),(0,x.jsx)("li",{children:"To communicate with you about the App"}),(0,x.jsx)("li",{children:"To prevent fraud and ensure the security of our App"}),(0,x.jsx)("li",{children:"To comply with legal obligations"})]}),(0,x.jsx)("h4",{children:"4. Data Sharing and Disclosure"}),(0,x.jsx)("h4",{children:"We do not sell your personal information. We may share your information in the following circumstances:"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:"With service providers who assist in App operations"}),(0,x.jsx)("li",{children:"When required by law or to protect our rights"}),(0,x.jsx)("li",{children:"In the event of a merger, acquisition, or sale of assets"})]}),(0,x.jsx)("h4",{children:"5. Data Security"}),(0,x.jsx)("h4",{children:"We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure."}),(0,x.jsx)("h4",{children:"6. Your Rights"}),(0,x.jsx)("h4",{children:"Depending on your location, you may have certain rights regarding your personal information, including:"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:"Access to your data"}),(0,x.jsx)("li",{children:"Correction of inaccurate data"}),(0,x.jsx)("li",{children:"Deletion of your data"}),(0,x.jsx)("li",{children:"Restriction of processing"}),(0,x.jsx)("li",{children:"Data portability"})]}),(0,x.jsx)("h4",{children:"To exercise these rights, please contact us using the information provided in Section 10."}),(0,x.jsx)("h4",{children:"7. Children's Privacy"}),(0,x.jsx)("h4",{children:"Our App is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately."}),(0,x.jsx)("h4",{children:"8. Changes to This Privacy Policy"}),(0,x.jsx)("h4",{children:'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.'}),(0,x.jsx)("h4",{children:"9. Third-Party Links and Services"}),(0,x.jsx)("h4",{children:"Our App may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read the privacy policies of any third-party services you access through our App."}),(0,x.jsx)("h4",{children:"10. Contact Us"}),(0,x.jsx)("h4",{children:"If you have any questions about this Privacy Policy or our data practices, please contact us at:"}),(0,x.jsx)("h4",{children:"Orlov Innovations, Limited Dubai, United Arab Emirates Email: support@neurolov.ai"}),(0,x.jsx)("h4",{children:"11. Consent"}),(0,x.jsx)("h4",{children:"By using NeuroLov Compute App, you consent to the collection and use of your information as described in this Privacy Policy."}),(0,x.jsx)(z,{onClick:()=>X(!1),children:"Close"})]})}),q&&(0,x.jsx)(R,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>M(!1),children:(0,x.jsxs)(W,{onClick:e=>e.stopPropagation(),children:[(0,x.jsx)("h2",{children:"TOS"}),(0,x.jsx)("h4",{children:"Last Updated: 11-09-2024"}),(0,x.jsx)("h4",{children:"1. Acceptance of Terms"}),(0,x.jsx)("h4",{children:'Welcome to NeuroLov Compute App ("App"), a Telegram micro application developed by Orlov Innovations, Limited ("Company," "we," "us," or "our"), based in Dubai. By accessing or using our App, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.'}),(0,x.jsx)("h4",{children:"2. Changes to Terms"}),(0,x.jsx)("h4",{children:'We reserve the right to modify these Terms at any time. We will notify users of any changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of the App after any changes constitutes your acceptance of the new Terms.'}),(0,x.jsx)("h4",{children:"3. Use of the App"}),(0,x.jsx)("h4",{children:"3.1. Eligibility: You must be at least 13 years old to use this App. By using the App, you represent and warrant that you meet this eligibility requirement."}),(0,x.jsx)("h4",{children:"3.2. User Account: To use certain features of the App, you may need to create a user account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account."}),(0,x.jsx)("h4",{children:"3.3. Prohibited Conduct: You agree not to:"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:"Use the App for any illegal purpose or in violation of any local, state, national, or international law"}),(0,x.jsx)("li",{children:"Violate or encourage others to violate the rights of third parties, including intellectual property rights"}),(0,x.jsx)("li",{children:"Attempt to gain unauthorized access to the App or its related systems or networks"}),(0,x.jsx)("li",{children:"Use any automated means or interface not provided by us to access the App or extract data"}),(0,x.jsx)("li",{children:"Engage in any conduct that restricts or inhibits any other user from using or enjoying the App"})]}),(0,x.jsx)("h4",{children:"4. Intellectual Property"}),(0,x.jsx)("h4",{children:"The App and its original content, features, and functionality are owned by the Company and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws."}),(0,x.jsx)("h4",{children:"5. User-Generated Content"}),(0,x.jsx)("h4",{children:'5.1. You retain ownership of any content you submit, post, or display on or through the App ("User Content").'}),(0,x.jsx)("h4",{children:"5.2. By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content in connection with the App."}),(0,x.jsx)("h4",{children:"6. Privacy"}),(0,x.jsx)("h4",{children:"Your use of the App is also governed by our Privacy Policy, which is incorporated into these Terms by reference."}),(0,x.jsx)("h4",{children:"7. Disclaimers"}),(0,x.jsx)("h4",{children:'7.1. The App is provided on an "AS IS" and "AS AVAILABLE" basis. We disclaim all warranties of any kind, whether express or implied.'}),(0,x.jsx)("h4",{children:"7.2. We do not warrant that the App will be uninterrupted, secure, or error-free."}),(0,x.jsx)("h4",{children:"8. Limitation of Liability"}),(0,x.jsx)("h4",{children:"To the fullest extent permitted by applicable law, the Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the App."}),(0,x.jsx)("h4",{children:"9. Indemnification"}),(0,x.jsx)("h4",{children:"You agree to indemnify, defend, and hold harmless the Company and its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses arising from your use of the App or your violation of these Terms."}),(0,x.jsx)("h4",{children:"10. Governing Law"}),(0,x.jsx)("h4",{children:"These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions."}),(0,x.jsx)("h4",{children:"11. Dispute Resolution"}),(0,x.jsx)("h4",{children:"Any dispute arising out of or relating to these Terms or the App shall be resolved through binding arbitration in Dubai, United Arab Emirates, in accordance with the rules of the Dubai International Arbitration Centre."}),(0,x.jsx)("h4",{children:"12. Severability"}),(0,x.jsx)("h4",{children:"If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect and enforceable."}),(0,x.jsx)("h4",{children:"13. Entire Agreement"}),(0,x.jsx)("h4",{children:"These Terms constitute the entire agreement between you and the Company regarding the use of the App, superseding any prior agreements between you and the Company relating to your use of the App."}),(0,x.jsx)("h4",{children:"14. Contact Us"}),(0,x.jsx)("h4",{children:"If you have any questions about these Terms, please contact us at:"}),(0,x.jsx)("h4",{children:"Orlov Innovations, Limited"}),(0,x.jsx)("h4",{children:"Dubai, United Arab Emirates"}),(0,x.jsx)("h4",{children:"Email: support@neurolov.ai "}),(0,x.jsx)(z,{onClick:()=>M(!1),children:"Close"})]})})]})})}},8374:e=>{e.exports="data:image/png;base64,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"},2573:(e,i,n)=>{e.exports=n.p+"static/media/logo1.6708ad68fc8bcd8770a0.png"}}]);
//# sourceMappingURL=250.de1db71d.chunk.js.map