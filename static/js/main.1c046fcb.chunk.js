(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{246:function(e,t){},255:function(e,t){},273:function(e,t){},275:function(e,t){},294:function(e,t){},295:function(e,t){},358:function(e,t){},360:function(e,t){},393:function(e,t){},395:function(e,t){},396:function(e,t){},401:function(e,t){},403:function(e,t){},409:function(e,t){},411:function(e,t){},424:function(e,t){},436:function(e,t){},439:function(e,t){},444:function(e,t){},452:function(e,t){},461:function(e,t){},463:function(e,t){},533:function(e,t,n){},534:function(e,t,n){"use strict";n.r(t);var c,o,r,a,i,s,l,b,j,u,d,x,p,h,O,f,g=n(2),y=n(85),w=n.n(y),m=n(13),v=n(17),C=n.n(v),A=n(43),S=n(59),T=n(15),E=n(58),k=n(69),N=n.n(k),_=n(220),M=n.n(_),I=n(70),D=n(221),H={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(m.a)(Object(m.a)({},H),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(m.a)(Object(m.a)({},H),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(m.a)(Object(m.a)({},e),{},{account:t.payload.account});default:return e}},R={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(m.a)(Object(m.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(m.a)(Object(m.a)({},R),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},K=Object(I.b)({blockchain:L,data:F}),P=[D.a],W=Object(I.c)(I.a.apply(void 0,P)),z=Object(I.d)(K,W),U=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},Y=function(){return function(){var e=Object(A.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,z.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(U("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},B=function(e){return{type:"CONNECTION_FAILED",payload:e}},G=function(e){return function(){var t=Object(A.a)(C.a.mark((function t(n){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(Y());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},q=n(16),Q=(q.a.div(c||(c=Object(T.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),q.a.div(o||(o=Object(T.a)(["\n  height: 8px;\n  width: 8px;\n"])))),X=q.a.div(r||(r=Object(T.a)(["\n  height: 8px;\n  width: 16px;\n"]))),J=q.a.div(a||(a=Object(T.a)(["\n  height: 14px;\n  width: 24px;\n"]))),V=q.a.div(i||(i=Object(T.a)(["\n  height: 20px;\n  width: 32px;\n"]))),Z=q.a.div(s||(s=Object(T.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),$=q.a.p(l||(l=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),ee=(q.a.p(b||(b=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"]))),q.a.p(j||(j=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 13px;\n  line-height: 1.3;\n"])))),te=(q.a.div(u||(u=Object(T.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(1)),ne=function(e,t){return e.length>t?"".concat(e.substring(0,t),"..."):e},ce="#a3a3c2",oe="3px solid ".concat(ce),re={fontSize:"13px",textAlign:"center"},ae={fontSize:"13px",textAlign:"justify"},ie={fontSize:"13px",textAlign:"left"},se={fontSize:"10px",textAlign:"center"},le=q.a.button(d||(d=Object(T.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -0px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 5px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 5px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),be=q.a.button(x||(x=Object(T.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 13px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),je=q.a.div(p||(p=Object(T.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 40%;\n"]))),ue=(q.a.img(h||(h=Object(T.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),q.a.img(O||(O=Object(T.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.5);\n  border: ",";\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 150px;\n  transition: width 0.5s;\n"])),oe)),de=q.a.a(f||(f=Object(T.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"]))),xe={backgroundColor:ce,border:"none",color:"white",padding:"3px 15px",textAlign:"center",display:"inline-block",fontSize:"13px",margin:"4px 24px",cursor:"pointer",borderRadius:"9px"};var pe=function(){var e,t,n=Object(E.b)(),c=Object(E.c)((function(e){return e.blockchain})),o=Object(E.c)((function(e){return e.data})),r=Object(g.useState)(!1),a=Object(S.a)(r,2),i=a[0],s=a[1],l=Object(g.useState)("Click MINT to get your NFT."),b=Object(S.a)(l,2),j=b[0],u=b[1],d=Object(g.useState)(1),x=Object(S.a)(d,2),p=x[0],h=x[1],O=Object(g.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),f=Object(S.a)(O,2),y=f[0],w=f[1],v=Object(g.useState)("about"),T=Object(S.a)(v,2),k=T[0],_=T[1],I=function(){""!==c.account&&null!==c.smartContract&&n(Y(c.account))},D=function(){var e=Object(A.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,w(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.useEffect)((function(){D()}),[]),Object(g.useEffect)((function(){I()}),[c.account]),Object(te.jsx)("div",{style:{display:"flex",padding:"0px 50px",width:"100%",flexDirection:"row",justifyContent:"center"},children:Object(te.jsxs)("div",{style:{display:"flex",padding:"0px 50px",width:"100%",maxWidth:"800px",flexDirection:"column",alignItems:"center"},children:[Object(te.jsx)("div",{id:"rectangleBg",style:{position:"absolute",zIndex:-1,width:"100%",height:"130px",backgroundColor:ce}}),Object(te.jsx)(ue,{style:{marginTop:"20px"},alt:"example",src:"/config/images/50gif.gif"}),Object(te.jsx)("img",{src:"/config/images/main logo.svg",alt:"Hello Hollow main logo",height:"87",width:"300"}),Object(te.jsxs)("div",{style:{display:"flex"},children:[Object(te.jsx)("button",{style:Object(m.a)(Object(m.a)({},xe),{},{backgroundColor:"about"===k?"#7c7c8b":"#a3a3c2"}),onClick:function(){return _("about")},children:"About"}),Object(te.jsx)("button",{style:Object(m.a)(Object(m.a)({},xe),{},{backgroundColor:"How to Mint"===k?"#7c7c8b":"#a3a3c2"}),onClick:function(){return _("How to Mint")},children:"How to Mint"}),Object(te.jsx)("button",{style:Object(m.a)(Object(m.a)({},xe),{},{backgroundColor:"Stories"===k?"#7c7c8b":"#a3a3c2"}),onClick:function(){return _("Stories")},children:"Stories"})]}),Object(te.jsx)(J,{}),(t=k,console.log(t),"about"===t?Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(X,{}),Object(te.jsx)("p",{style:re,children:"Hi there!"}),Object(te.jsx)(J,{}),Object(te.jsx)("p",{style:ae,children:"We are a collection of 10,000 unique HH NFTs placed on the Ethereum blockchain as collectibles. Your mints will be gas-efficient, as HH is based on a low gas ERC721 contract (yay!). Originally conceptualized as a set of mini stories, HH will instead make its debut on the NFT platform as we want to reach out to people who are unafraid to step into the future. Let's have our stories reach the hearts of many after - forever embedded into the blockchain."}),Object(te.jsx)(J,{}),Object(te.jsx)("p",{style:re,children:"Come join Hollow's adventures now:"})]}):"How to Mint"===t?Object(te.jsxs)("div",{style:{width:"100%"},children:[Object(te.jsx)(X,{}),Object(te.jsx)("p",{style:re,children:"Everything is simple here."}),Object(te.jsx)(J,{}),Object(te.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap"},children:[Object(te.jsx)("p",{style:Object(m.a)(Object(m.a)({},ie),{},{marginRight:"8px"}),children:"1."}),Object(te.jsxs)("p",{style:ie,children:["Download metamask wallet. It\u2019s ",Object(te.jsx)("a",{href:"https://metamask.io/download/",children:"free"}),"! Put ethereum in it - enough for  NFT price + gas fees. \xa0(Gas fees are like postage fees when you mail stuff. It\u2019s payment for the service. Check ",Object(te.jsx)("a",{href:"https://etherscan.io/gastracker",children:"here"})," to track gas prices.)"]})]}),Object(te.jsx)(Q,{}),Object(te.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap"},children:[Object(te.jsx)("p",{style:Object(m.a)(Object(m.a)({},ie),{},{marginRight:"8px"}),children:"2."}),Object(te.jsx)("p",{style:ie,children:"Click on the yellow \xa0\u201cCONNECT\u201d\xa0 button below and follow metamask's prompts. That\u2019s it. Now you\u2019re the proud owner of our NFT."})]})]}):"Stories"===t?Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(X,{}),Object(te.jsx)("p",{style:re,children:"You are here at our beginning."}),Object(te.jsx)(J,{}),Object(te.jsxs)("p",{style:ae,children:["We\u2019re working on our first story to share with the community.  Here\u2019s a little sneak peak: the title is, \u2018 Secret to Longevity\u2019. What do you think Hollow might discover? \u2014 Oh golly we can\u2019t wait to tell you!",Object(te.jsx)(J,{})]}),Object(te.jsx)("p",{style:ae,children:"It\u2019s going to be a casual style picture-book. We\u2019re just small dreamers hoping that others will like our little tales. Well, in the meantime you may find us at our socials below."}),Object(te.jsx)(X,{}),Object(te.jsx)("p",{style:re,children:"Instagram: @hh.hellohollow"}),Object(te.jsx)("p",{style:re,children:"Twitter  : @hellohollow_hh"}),Object(te.jsx)(J,{}),Object(te.jsx)("p",{style:re,children:"See you there!"})]}):void 0),Object(te.jsxs)(je,{flex:1,style:{width:"100%"},test:!0,children:[Object(te.jsx)(V,{}),Object(te.jsxs)(Z,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:1,borderRadius:30,border:oe,boxShadow:"0px 5px 11px 2px rgba(0,0,0,0)"},children:[Object(te.jsxs)($,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[o.totalSupply," / ",y.MAX_SUPPLY]}),Object(te.jsx)(ee,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(te.jsx)(de,{target:"_blank",href:y.SCAN_LINK,children:ne(y.CONTRACT_ADDRESS,15)})}),Object(te.jsx)(X,{}),Number(o.totalSupply)>=y.MAX_SUPPLY?Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)($,{style:{textAlign:"center",color:"var(--accent-text)"},children:"All HH have been sold out here, but"}),Object(te.jsxs)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still get your ",y.NFT_NAME," on"]}),Object(te.jsx)(X,{}),Object(te.jsx)(de,{target:"_blank",href:y.MARKETPLACE_LINK,children:y.MARKETPLACE})]}):Object(te.jsxs)(te.Fragment,{children:[Object(te.jsxs)($,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",y.SYMBOL," is currently ",(e=o.totalSupply,e<2e3?"0.02":e<5e3?"0.03":e<7500?"0.04":e<MAX_SUPPLY?"0.05":"0.06")," ",y.NETWORK.SYMBOL,"."]}),Object(te.jsx)(Q,{}),Object(te.jsxs)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:[" ",Object(te.jsx)("br",{}),"Only the first 20% are 0.02 ETH! ",Object(te.jsx)("br",{}),Object(te.jsx)("br",{}),"Subsequently, each HH NFT shall be valued as such:",Object(te.jsx)("br",{}),"21-50%     0.03 ETH ",Object(te.jsx)("br",{}),"51-75%     0.04 ETH ",Object(te.jsx)("br",{}),"75-100%    0.05 ETH ",Object(te.jsx)("br",{}),Object(te.jsx)("br",{}),Object(te.jsx)("br",{})]}),Object(te.jsx)(X,{}),""===c.account||null===c.smartContract?Object(te.jsxs)(Z,{ai:"center",jc:"center",children:[Object(te.jsxs)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",y.NETWORK.NAME," network to begin:"]}),Object(te.jsx)(X,{}),Object(te.jsx)(le,{onClick:function(e){e.preventDefault(),n(function(){var e=Object(A.a)(C.a.mark((function e(t){var n,c,o,r,a,i,s,l,b;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return o=e.sent,e.next=12,o.json();case 12:if(r=e.sent,a=window,!(i=a.ethereum)||!i.isMetaMask){e.next=33;break}return N.a.setProvider(i),s=new M.a(i),e.prev=18,e.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,i.request({method:"net_version"});case 24:e.sent==r.NETWORK.ID?(b=new N.a(c,r.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:b,web3:s}}),i.on("accountsChanged",(function(e){t(G(e[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):t(B("Change network to ".concat(r.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t(B("Something went wrong."));case 31:e.next=34;break;case 33:t(B("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()),I()},children:"CONNECT"}),""!==c.errorMsg?Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(X,{}),Object(te.jsx)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(te.jsx)(J,{}),Object(te.jsxs)(Z,{ai:"center",jc:"center",fd:"row",children:[Object(te.jsx)(be,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=p-1;e<1&&(e=1),h(e)}()},children:"-"}),Object(te.jsx)(J,{}),Object(te.jsx)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:p}),Object(te.jsx)(J,{}),Object(te.jsx)(be,{disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=p+1;e>10&&(e=10),h(e)}()},children:"+"})]}),Object(te.jsx)(X,{}),Object(te.jsx)(Z,{ai:"center",jc:"center",fd:"row",children:Object(te.jsx)(le,{disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=y.WEI_COST,t=y.GAS_LIMIT,o=String(e*p),r=String(t*p);console.log("Cost: ",o),console.log("Gas limit: ",r),u("Minting your ".concat(y.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(p).send({gasLimit:String(r),to:y.CONTRACT_ADDRESS,from:c.account,value:o}).once("error",(function(e){console.log(e),u("Sorry, something went wrong please try again later."),s(!1)})).then((function(e){console.log(e),u("WOW, the ".concat(y.NFT_NAME," is yours! Visit Opensea.io to view it.")),s(!1),n(Y(c.account))}))}(),I()},children:i?"BUSY":"MINT"})})]})]}),Object(te.jsx)(J,{})]}),Object(te.jsx)(Q,{})]}),Object(te.jsx)(Q,{}),Object(te.jsxs)(Z,{jc:"center",ai:"center",style:{width:"100%"},children:[Object(te.jsx)(ee,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(te.jsxs)("p",{style:se,children:["Check that you are connected to the correct network (",y.NETWORK.NAME," Mainnet) and address."]})}),Object(te.jsx)(ee,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(te.jsxs)("p",{style:se,children:["We have set the gas limit to ",y.GAS_LIMIT," for your NFT-minting to be a success."]})}),Object(te.jsx)(V,{})]})]})})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,538)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))};n(533);w.a.render(Object(te.jsx)(E.a,{store:z,children:Object(te.jsx)(pe,{})}),document.getElementById("root")),he()}},[[534,1,2]]]);
//# sourceMappingURL=main.1c046fcb.chunk.js.map