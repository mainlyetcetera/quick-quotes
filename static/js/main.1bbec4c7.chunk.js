(this["webpackJsonpquick-quotes"]=this["webpackJsonpquick-quotes"]||[]).push([[0],{26:function(t,e,n){},28:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(19),s=n.n(r),a=n(7),o=(n(26),n(21)),i=n(8),u=n.n(i),j=n(11),l=n(9),b=(n(28),n(0)),h=function(){return Object(b.jsxs)("header",{children:[Object(b.jsx)("h1",{children:"QuickQuotes"}),Object(b.jsx)("h2",{children:"Welcome!"}),Object(b.jsx)(a.b,{className:"navigation",to:"/favorites",children:"To Favorites"}),Object(b.jsx)(a.b,{className:"navigation",to:"/",children:"To Home"})]})},O=(n(38),function(t){var e=t.quote,n=t.favoriteQuote;return Object(b.jsxs)("div",{children:[!e&&Object(b.jsx)("h3",{children:"Something clever will go here soon..."}),e&&Object(b.jsxs)("section",{children:[Object(b.jsx)("h3",{children:e}),Object(b.jsx)(a.b,{className:"details-btn",to:"/details",children:"Get Details Here!"}),Object(b.jsx)("button",{onClick:function(){return n()},children:"Favorite this!"})]})]})}),f=(n(39),function(){var t=Object(j.a)(u.a.mark((function t(e){var n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:if((n=t.sent).ok){t.next=5;break}throw n;case 5:return t.next=7,n.json();case 7:return c=t.sent,t.abrupt("return",c);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),x=function(t){return t[0].toUpperCase()+t.slice(1,t.length)},d=function(t){var e=t.chooseCategory,n=t.generateQuote,r=Object(c.useState)([]),s=Object(l.a)(r,2),a=s[0],o=s[1],i=Object(c.useState)(!0),h=Object(l.a)(i,2),O=h[0],d=h[1];Object(c.useEffect)((function(){(function(){var t=Object(j.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.quotable.io/tags",t.next=3,f("https://api.quotable.io/tags");case 3:e=t.sent,o(e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{children:[Object(b.jsxs)("select",{onChange:function(t){return function(t){e(t.target.value),""!==t.target.value?d(!1):d(!0)}(t)},children:[Object(b.jsx)("option",{value:"",children:"Please pick a category"}),a.map((function(t){var e=t.name,n=t.quoteCount,c=t._id;return n?Object(b.jsx)("option",{value:e,children:x(e)},c):null}))]}),Object(b.jsx)("button",{className:"select-btn",onClick:function(t){return function(t){t.preventDefault(),n()}(t)},disabled:O,children:"Get quote!"})]})})},v=(n(40),function(t){var e=t.info,n=t.favoriteQuote,c=e.content,r=e.author,s=e.tags;return Object(b.jsxs)("section",{children:[Object(b.jsxs)("article",{children:["Quote: ",c]}),Object(b.jsxs)("article",{children:["Author: ",r]}),Object(b.jsxs)("article",{children:["Categories: ",s]}),Object(b.jsx)(a.b,{to:"/",children:"Return"}),Object(b.jsx)("button",{onClick:function(){return n()},children:"Favorite this!"})]})}),p=(n(41),function(t){var e=t.favorites,n=t.removeQuote,c=e.map((function(t){var e=t.content,c=t.author,r=t.tags;return Object(b.jsxs)("section",{className:"favorite",children:[Object(b.jsxs)("article",{children:["Quote: ",e]}),Object(b.jsxs)("article",{children:["Author: ",c]}),Object(b.jsxs)("article",{children:["Categories: ",r]}),Object(b.jsx)("button",{className:"remove-button",onClick:function(t){return n(e)},children:"Remove from Favorites"})]})}));return Object(b.jsx)("section",{children:c})}),m=function(t){var e=t.status,n=t.text;return Object(b.jsxs)("section",{children:[Object(b.jsx)("article",{children:"Sorry!"}),Object(b.jsx)("article",{children:"Something went wrong!"}),Object(b.jsx)("article",{children:e}),Object(b.jsx)("article",{children:n})]})},g=(n(42),function(){return Object(b.jsx)("footer",{children:Object(b.jsx)("p",{children:"quotes in tab by iconsmind.com from the Noun Project"})})}),k=n(2),q=(n(43),function(){var t=Object(c.useState)(null),e=Object(l.a)(t,2),n=e[0],r=e[1],s=Object(c.useState)({tags:[],content:"",author:""}),a=Object(l.a)(s,2),i=a[0],x=a[1],q=Object(c.useState)(null),w=Object(l.a)(q,2),Q=w[0],C=w[1],S=Object(c.useState)(null),y=Object(l.a)(S,2),N=y[0],F=y[1],T=Object(c.useState)([]),A=Object(l.a)(T,2),D=A[0],E=A[1],G=function(t){r(t)},H=function(){var t=Object(j.a)(u.a.mark((function t(){var e,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="https://api.quotable.io/random?tags=".concat(n),t.next=4,f(e);case 4:c=t.sent,x({tags:c.tags,content:c.content,author:c.author}),C(c.content),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),F({status:t.t0.status,text:t.t0.statusText});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),J=function(){var t=D.find((function(t){return t.content===i.content}));!t&&E([].concat(Object(o.a)(D),[i])),!t&&alert("success!")},P=function(t){var e=D.filter((function(e){return e.content!==t}));E(e)};return Object(b.jsxs)("main",{children:[Object(b.jsx)(h,{}),Object(b.jsx)(k.a,{exact:!0,path:"/details",render:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(v,{info:i,favoriteQuote:J}),Object(b.jsx)(g,{})]})}}),Object(b.jsx)(k.a,{exact:!0,path:"/favorites",render:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{favorites:D,removeQuote:P}),Object(b.jsx)(g,{})]})}}),Object(b.jsx)(k.a,{exact:!0,path:"/",render:function(){return N?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{status:N.status,text:N.text}),Object(b.jsx)(g,{})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{chooseCategory:G,generateQuote:H}),Object(b.jsx)(O,{quote:Q,favoriteQuote:J}),Object(b.jsx)(g,{})]})}})]})});s.a.render(Object(b.jsx)(a.a,{children:Object(b.jsx)(q,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.1bbec4c7.chunk.js.map