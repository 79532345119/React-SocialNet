(this["webpackJsonpreact-kamasutra"]=this["webpackJsonpreact-kamasutra"]||[]).push([[3],{294:function(e,a,t){},295:function(e,a,t){"use strict";t.r(a);t(294);var n=t(0),s=t.n(n),m=t(11),r=function(e){var a="/messages/"+e.id;return s.a.createElement("div",{className:"dialogs__item"},s.a.createElement(m.b,{to:a},e.name))},c=function(e){return s.a.createElement("div",{className:"message__items__item"},e.message)},i=t(10),l=t(83),u=t(122),o=t(13),d=t(37),g=Object(d.a)(50),b=Object(u.a)({form:"dialogAddMessageForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement(l.a,{component:o.b,name:"newMessageBody",placeholder:"Enter your message here",validate:[d.b,g]}),s.a.createElement("div",null,s.a.createElement("button",{className:"btn"},"SEND")))})),E=function(e){var a=e.messagesPage,t=a.dialogs.map((function(e){return s.a.createElement(r,{key:e.id,name:e.name,id:e.id})})),n=a.messages.map((function(e){return s.a.createElement(c,{key:e.id,message:e.message})}));if(!e.isAuth)return s.a.createElement(i.a,{to:"/login"});return s.a.createElement("div",{className:"messages"},s.a.createElement("div",{className:"dialogs"},t),s.a.createElement("div",{className:"message__items"},s.a.createElement("div",null,n),s.a.createElement(b,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})))},f=t(91),v=t(12),p=t(63),_=t(9);a.default=Object(_.d)(Object(v.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{sendMessage:function(a){e(Object(f.b)(a))}}})),p.a)(E)}}]);
//# sourceMappingURL=3.85f8a001.chunk.js.map