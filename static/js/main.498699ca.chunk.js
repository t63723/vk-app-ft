(this["webpackJsonpvk-apps-ft"]=this["webpackJsonpvk-apps-ft"]||[]).push([[0],{182:function(e,t,n){e.exports=n(293)},293:function(e,t,n){"use strict";n.r(t);n(183),n(209),n(211),n(212),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(234),n(235),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251);var a=n(0),c=n.n(a),r=n(64),o=n.n(r),i=n(39),s=n.n(i),u=n(65),l=n.n(u),p=n(95),f=n(49),m=n(103),h=n.n(m),d=n(102),b=n.n(d),y=(n(260),n(96)),v=n.n(y),E=n(97),g=n.n(E),j=n(99),O=n.n(j),k=n(100),_=n.n(k),w=n(98),A=n.n(w),I=n(101),S=n.n(I),U=n(104),K=function(e){var t,n={userId:e},a={method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json",Accept:"application/json","X-Requested-With":"XMLHttpRequest"},mode:"cors"};return fetch("https://physical-transformation.online/api/v1/member/topic/",a).then((function(e){return e.json()})).then((function(e){return t=e.result})).catch((function(e){return console.log(e)})),console.log(t),t},T=function(e){var t=e.id,n=(e.go,e.fetchedUser);return c.a.createElement(v.a,{id:t},c.a.createElement(g.a,null,"Physical Transformation"),c.a.createElement(A.a,null,c.a.createElement(U.a,{href:"https://physical-transformation.online/",target:"_blank"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0430\u0439\u0442"),n&&c.a.createElement(O.a,{title:"User Data Fetched with VK Bridge"},c.a.createElement(_.a,{before:n.photo_200?c.a.createElement(S.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name),K(n.id)))))},V=function(){var e=Object(a.useState)("home"),t=Object(f.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(null),i=Object(f.a)(o,2),u=i[0],m=i[1],d=Object(a.useState)(c.a.createElement(b.a,{size:"large"})),y=Object(f.a)(d,2),v=y[0],E=y[1];Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,m(t),E(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var c=document.createAttribute("scheme");c.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);return c.a.createElement(h.a,{activePanel:n,popout:v},c.a.createElement(T,{id:"home",fetchedUser:u,go:function(e){r(e.currentTarget.dataset.to)}}))};s.a.send("VKWebAppInit"),o.a.render(c.a.createElement(V,null),document.getElementById("root"))}},[[182,1,2]]]);
//# sourceMappingURL=main.498699ca.chunk.js.map