(this["webpackJsonpblink-chat"]=this["webpackJsonpblink-chat"]||[]).push([[0],{126:function(e,t,a){"use strict";a.r(t);var d=a(0),c=a.n(d),n=a(23),i=a.n(n),u=(a(65),a(3)),s=a(7),l=(a(66),a(1)),r=a(24),o=Object(l.atom)({key:"conversationsList",default:[]}),b=Object(l.atomFamily)({key:"conversation",default:{}}),m=Object(l.atom)({key:"currentConversationState",default:null}),f=a(15),p=a(11),x=a.n(p),_=a(57),T=a.n(_);x.a.extend(T.a);var v=function(e){var t=e.id,a=Object(l.useRecoilValue)(b(t)),d=Object(l.useRecoilState)(m),n=Object(f.a)(d,2),i=n[0],u=n[1],s=x()(a.last_updated);return c.a.createElement("button",{className:"conversation".concat(i===a.id?" active":""),onClick:function(){if(i===a.id)return null;u(a.id)}},c.a.createElement("h2",null,a.name),c.a.createElement("p",null,a.messages[a.messages.length-1].text),c.a.createElement("span",{className:"time"},s.isToday()?s.format("HH:mm"):s.format("D MMM YYYY")))},g=Object(l.selector)({key:"sortedConversationsList",get:function(e){var t=e.get,a=t(o).map((function(e){return t(b(e))}));return Object(s.a)(a).sort((function(e,t){return new Date(t.last_updated).getTime()-new Date(e.last_updated).getTime()}))}}),E=a(14),O=function(){var e=Object(l.useRecoilValue)(g),t=function(){var t=e.map((function(e){return c.a.createElement(v,{key:e.id,id:e.id})}));return c.a.createElement(c.a.Fragment,null,t)};return c.a.createElement("div",{className:"sidebar"},c.a.createElement(E.a,{className:"conversations-list"},c.a.createElement(t,null)))},j=(a(123),a(59)),h=function(){var e=Object(l.useRecoilValue)(m),t=Object(l.useRecoilValue)(b(e)),a=Object(d.useState)(""),n=Object(f.a)(a,2),i=n[0],r=n[1],o=Object(l.useRecoilCallback)((function(a){var d=a.set;return function(a){a.preventDefault();var c=(new Date).toString();d(b(e),Object(u.a)(Object(u.a)({},t),{},{last_updated:c,messages:[].concat(Object(s.a)(t.messages),[{id:Object(j.v4)(),text:i,last_updated:c}])})),r("")}}));return c.a.createElement("div",{className:"input-wrapper"},c.a.createElement("form",{onSubmit:o},c.a.createElement("input",{key:"input-wrapper-key",type:"text",placeholder:"Type a message",value:i,onChange:function(e){return r(e.target.value)}}),c.a.createElement("button",{type:"submit",disabled:!i},"Submit")))},k=function(){var e=Object(l.useRecoilValue)(m),t=Object(l.useRecoilValue)(b(e)),a=Object(d.useRef)();return Object(d.useEffect)((function(){a.current&&(a.current.scrollTop=a.current.scrollHeight)}),[t]),c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,{className:"messages",scrollableNodeProps:{ref:a}},t.messages.map((function(e){return c.a.createElement("div",{key:e.id,className:"message"},c.a.createElement("div",{className:"time"},x()(e.last_updated).format("dddd DD MMM YYYY HH:mm:ss")),c.a.createElement("p",null,e.text))}))),c.a.createElement(h,null))},w=function(){var e=Object(l.useRecoilValue)(m);return c.a.createElement("div",{className:"chat"},e?c.a.createElement(k,null):c.a.createElement("div",{className:"no-conversation-indicator"},"Select a conversation from the list."))},y=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(l.RecoilRoot,{initializeState:function(e){var t=e.set;t(o,(function(){return r.map((function(e){return e.id}))})),r.forEach((function(e){t(b(e.id),(function(){var t=Object(s.a)(e.messages).sort((function(e,t){return new Date(e.last_updated).getTime()-new Date(t.last_updated).getTime()}));return Object(u.a)(Object(u.a)({},e),{},{messages:t})}))}))}},c.a.createElement(O,null),c.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},24:function(e){e.exports=JSON.parse('[{"id":"5f58bcd7a88fab5f34df94d6","name":"eiusmod nostrud sunt","last_updated":"2020-05-04T03:37:18","messages":[{"id":"5f58bcd7352396fffbae8b6e","text":"Lorem labore ea et","last_updated":"2020-02-16T04:35:16"},{"id":"5f58bcd7d95151eaa14ab8aa","text":"ex excepteur deserunt laboris","last_updated":"2020-08-18T11:16:45"},{"id":"5f58bcd7f7745918c2252086","text":"dolore sunt reprehenderit cupidatat","last_updated":"2020-03-23T10:06:33"}]},{"id":"5f58bcd7200c90cfaac93778","name":"laborum irure enim","last_updated":"2020-01-18T02:37:10","messages":[{"id":"5f58bcd7fd44c584cdc6a3c3","text":"nostrud eiusmod non ut","last_updated":"2020-07-13T03:56:26"},{"id":"5f58bcd7d5f9b5ff7c3f4216","text":"voluptate nulla commodo reprehenderit","last_updated":"2020-01-02T11:50:36"},{"id":"5f58bcd7e7211b14921efa23","text":"quis laboris fugiat est","last_updated":"2020-02-11T06:04:03"},{"id":"5f58bcd759c87fa1b24db871","text":"et aliqua nisi laborum","last_updated":"2020-09-07T10:33:39"},{"id":"5f58bcd7587a80c99f3a28e6","text":"deserunt excepteur in eu","last_updated":"2020-02-08T01:22:02"},{"id":"5f58bcd7bb6ee157a6ee7be4","text":"amet sunt veniam aute","last_updated":"2020-06-02T11:14:29"},{"id":"5f58bcd76bf97a358212baab","text":"laboris commodo do aliqua","last_updated":"2020-04-19T10:27:37"}]},{"id":"5f58bcd7c23d93722017ccb6","name":"ex cupidatat elit","last_updated":"2020-05-15T06:24:26","messages":[{"id":"5f58bcd72dfebe40537c379e","text":"amet sint laborum ut","last_updated":"2020-05-14T12:24:10"},{"id":"5f58bcd7b449b1cfae268ee1","text":"nostrud adipisicing Lorem aute","last_updated":"2020-07-31T04:26:38"},{"id":"5f58bcd7357fd38a634ada62","text":"proident nisi in nulla","last_updated":"2020-07-13T12:50:37"},{"id":"5f58bcd744483b63148b8620","text":"exercitation Lorem cillum elit","last_updated":"2020-07-25T07:29:04"},{"id":"5f58bcd7bf8843d460502aad","text":"qui sint irure sunt","last_updated":"2020-02-24T03:21:14"}]},{"id":"5f58bcd7e81abbc8cde13cde","name":"ut officia aliqua","last_updated":"2020-02-23T11:08:58","messages":[{"id":"5f58bcd7a34519f19acd17ab","text":"anim dolor laboris nulla","last_updated":"2020-03-31T08:52:51"},{"id":"5f58bcd78cc10cd1c1eab267","text":"deserunt reprehenderit deserunt eiusmod","last_updated":"2020-03-04T02:50:41"},{"id":"5f58bcd7b1bd2b6c9c60103a","text":"cillum occaecat et culpa","last_updated":"2020-04-06T10:26:35"},{"id":"5f58bcd7a42c13c4c10de5b6","text":"veniam et eiusmod eu","last_updated":"2020-06-27T01:06:41"},{"id":"5f58bcd7334d5227c8db9520","text":"incididunt ullamco irure ut","last_updated":"2020-03-08T05:36:47"},{"id":"5f58bcd750b3180330f4600f","text":"voluptate est eiusmod culpa","last_updated":"2020-07-26T11:58:12"},{"id":"5f58bcd76fbc7df84b0a3cf4","text":"ipsum esse cupidatat sit","last_updated":"2020-04-11T06:57:03"},{"id":"5f58bcd79c0390617f81a01f","text":"nostrud ut deserunt aute","last_updated":"2020-04-29T06:29:58"},{"id":"5f58bcd72564603b846a41ac","text":"nisi do tempor non","last_updated":"2020-02-16T03:05:41"}]},{"id":"5f58bcd7a3d6fed0fd68b7a9","name":"consequat amet cupidatat","last_updated":"2020-04-08T06:45:00","messages":[{"id":"5f58bcd7c34da3af332cc958","text":"tempor elit sit incididunt","last_updated":"2020-06-15T06:40:25"},{"id":"5f58bcd706ac7b83822c692f","text":"laboris commodo id anim","last_updated":"2020-04-08T06:26:18"},{"id":"5f58bcd7e0a785e3e5516e47","text":"quis dolore occaecat irure","last_updated":"2020-07-10T06:56:34"},{"id":"5f58bcd79d24061ede254048","text":"irure dolor nulla ullamco","last_updated":"2020-02-14T02:14:32"},{"id":"5f58bcd7a6bf2527d1bde8cd","text":"mollit ipsum occaecat aute","last_updated":"2020-03-25T05:35:35"},{"id":"5f58bcd79cac300d1980db1b","text":"ad cillum occaecat cupidatat","last_updated":"2020-08-01T07:23:38"},{"id":"5f58bcd75e712600083cd4e6","text":"incididunt excepteur qui magna","last_updated":"2020-04-17T04:37:53"},{"id":"5f58bcd7e99102f90e2c9130","text":"labore aute ad laborum","last_updated":"2020-03-15T10:43:57"},{"id":"5f58bcd7f7f92c4b24287bbd","text":"ad esse sunt dolor","last_updated":"2020-05-16T11:17:31"},{"id":"5f58bcd7494bcc51e9df2d4e","text":"nisi pariatur quis ut","last_updated":"2020-01-21T05:19:04"}]}]')},60:function(e,t,a){e.exports=a(126)},65:function(e,t,a){},66:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.09768129.chunk.js.map