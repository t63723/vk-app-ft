(this["webpackJsonpvk-apps-ft"]=this["webpackJsonpvk-apps-ft"]||[]).push([[0],{181:function(e,t,n){e.exports=n(292)},292:function(e,t,n){"use strict";n.r(t);n(182),n(208),n(210),n(211),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(233),n(234),n(235),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250);var a=n(0),r=n.n(a),c=n(66),s=n.n(c),i=n(38),o=n.n(i),u=n(39),p=n.n(u),l=n(51),f=n(45),h=n(103),m=n.n(h),d=n(102),b=n.n(d),v=(n(259),function(){var e=Object(l.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://physical-transformation.online/api/v1/member/topic/",a={userId:t},r={method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json",Accept:"application/json","X-Requested-With":"XMLHttpRequest"},mode:"cors"},e.next=5,fetch("https://physical-transformation.online/api/v1/member/topic/",r).then((function(e){return e.json()})).then((function(e){n=e.result})).catch((function(e){return console.log(e)}));case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j=n(97),y=n.n(j),E=n(98),O=n.n(E),g=n(100),k=n.n(g),w=n(101),x=n.n(w),S=n(99),T=n.n(S),A=n(67),I=function(e){var t=e.id,n=(e.go,e.fetchedUser),a=e.vkTopic;return r.a.createElement(y.a,{id:t},r.a.createElement(O.a,null,"Physical Transformation"),r.a.createElement(T.a,null,r.a.createElement(A.a,{href:"https://physical-transformation.online/",target:"_blank"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0430\u0439\u0442"),n&&r.a.createElement(k.a,{title:"User Data Fetched with VK Bridge"},r.a.createElement(x.a,null,r.a.createElement(A.a,{href:a},"\u0422\u0432\u043e\u044f \u0442\u0435\u043c\u0430")))))},U=function(){var e=Object(a.useState)("home"),t=Object(f.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),i=Object(f.a)(s,2),u=i[0],h=i[1],d=Object(a.useState)(r.a.createElement(b.a,{size:"large"})),j=Object(f.a)(d,2),y=j[0],E=j[1],O=Object(a.useState)(null),g=Object(f.a)(O,2),k=g[0],w=g[1];Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:return t=e.sent,h(t),E(null),e.next=7,v(t.id);case 7:n=e.sent,w(n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var r=document.createAttribute("scheme");r.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),function(){e.apply(this,arguments)}()}),[]);return r.a.createElement(m.a,{activePanel:n,popout:y},r.a.createElement(I,{id:"home",fetchedUser:u,go:function(e){c(e.currentTarget.dataset.to)},vkTopic:k}))};o.a.send("VKWebAppInit"),s.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[181,1,2]]]);
//# sourceMappingURL=main.fb986139.chunk.js.map