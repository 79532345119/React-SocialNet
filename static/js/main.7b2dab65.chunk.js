(this["webpackJsonpreact-kamasutra"]=this["webpackJsonpreact-kamasutra"]||[]).push([[0],{128:function(e,t,n){e.exports=n.p+"static/media/Ripple-1s-200px.a80c5d39.svg"},13:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return m}));var a=n(89),r=n(0),s=n.n(r),o=n(83),c=n(28),u=n.n(c),i=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),o=n.touched&&n.error;return s.a.createElement("div",{className:u.a.formControl+" "+(o?u.a.error:"")},s.a.createElement("div",null,s.a.createElement("textarea",Object.assign({},t,r))),o&&s.a.createElement("span",null,n.error))},l=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),o=n.touched&&n.error;return s.a.createElement("div",{className:u.a.formControl+" "+(o?u.a.error:"")},s.a.createElement("div",null,s.a.createElement("input",Object.assign({},t,r))),o&&s.a.createElement("span",null,n.error))},m=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return s.a.createElement("div",null,s.a.createElement(o.a,Object.assign({placeholder:e,name:t,validators:n,component:a},r,{text:c})))}},155:function(e,t,n){e.exports=n(293)},238:function(e,t,n){},239:function(e,t,n){},240:function(e,t,n){},245:function(e,t,n){},246:function(e,t,n){},247:function(e,t,n){},248:function(e,t,n){},249:function(e,t,n){},28:function(e,t,n){e.exports={formControl:"formsControls_formControl__2gXSH",btn:"formsControls_btn__EkWpK",error:"formsControls_error__2n2zS",formSummaryError:"formsControls_formSummaryError__1sdOZ"}},287:function(e,t,n){},288:function(e,t,n){},289:function(e,t,n){},290:function(e,t,n){},291:function(e,t,n){},292:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);n(90),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(9),r=n(91),s=n(7),o=n.n(s),c=n(15),u=n(43),i=n(5),l=n(29),m=n(124).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"63a35e59-4989-4619-99e4-f77b746495a2"}}),p={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return m.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollowUser:function(e){return m.delete("/follow/".concat(e)).then((function(e){return e.data}))},followUser:function(e){return m.post("/follow/".concat(e),{}).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Old method. PLS use profileAPI object"),f.getProfile(e)}},f={getProfile:function(e){return m.get("/profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return m.get("/profile/status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return m.put("/profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),m.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return m.put("/profile",e).then((function(e){return e.data}))}},d=function(){return m.get("/auth/me").then((function(e){return e.data}))},h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return m.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},E=function(){return m.delete("/auth/login").then((function(e){return e.data}))},g=function(){return m.get("/security/get-captcha-url").then((function(e){return e.data}))},b={posts:[{id:1,message:"Hi, this is first post from myPosts.js",likesCount:0},{id:2,message:"Hi, this is second post from myPosts.js",likesCount:0},{id:3,message:"YOOOOHOOO",likesCount:0}],profile:null,status:""},v=function(e){return{type:"SET_STATUS",status:e}},O=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[n]),newPostText:""});case"SET_USER_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"SAVE_PHOTO_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}},w={},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return e},j=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),a):e}))},y={users:[],pageSize:10,totalUsersQuantity:0,currentPage:1,isFetching:!0,isFollowingInProgress:[]},N=function(e){return{type:"FOLLOW",userId:e}},C=function(e){return{type:"UNFOLLOW",userId:e}},_=function(e){return{type:"SETUSERS",users:e}},k=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},A=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_IN_PROGRESS",isFetching:e,userId:t}},T=function(){var e=Object(c.a)(o.a.mark((function e(t,n,a,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(A(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&t(r(n)),t(A(!1,n));case 7:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:j(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:j(e.users,t.userId,"id",{followed:!1})});case"SETUSERS":return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(i.a)(Object(i.a)({},e),{},{totalUsersQuantity:t.count});case"TOGGLE_IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_IN_PROGRESS":return Object(i.a)(Object(i.a)({},e),{},{isFollowingInProgress:t.isFetching?[].concat(Object(u.a)(e.isFollowingInProgress),[t.userId]):e.isFollowingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},I={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},F=function(e,t,n,a){return{type:"SET_USER_DATA",data:{userId:e,email:t,login:n,isAuth:a}}},x=function(e){return{type:"GET_CAPTCHA_URL_SUCCESS",data:{captchaUrl:e}}},M=function(){return function(){var e=Object(c.a)(o.a.mark((function e(t){var n,a,r,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:0===(n=e.sent).resultCode&&(a=n.data,r=a.id,s=a.email,c=a.login,t(F(r,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){return function(){var e=Object(c.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:n=e.sent,a=n.url,t(x(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":case"GET_CAPTCHA_URL_SUCCESS":return Object(i.a)(Object(i.a)({},e),t.data);default:return e}},G=n(125),R=n(123),z=Object(a.c)({messagesPage:r.a,profilePage:S,sidebar:P,usersPage:U,auth:D,form:R.a}),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,H=Object(a.e)(z,B(Object(a.a)(G.a)));window.store=H;var Q=H,W=n(0),q=n.n(W),J=n(61),V=n.n(J),K=n(10),X=(n(238),n(239),n(24)),Y=n(25),Z=n(27),$=n(26),ee=n(11),te=(n(240),function(e){return q.a.createElement("header",{className:"header"},q.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVBOvEYhBKycb7fFt36eBUcKFzyoOawQ6E0Q&usqp=CAU",alt:"site logo is here"}),q.a.createElement("div",{className:"loginBlock"},e.isAuth?q.a.createElement("div",null,e.login," * ",q.a.createElement("button",{onClick:e.logout},"Log out")):q.a.createElement(ee.b,{to:"/login"},"Login")))}),ne=n(12),ae=function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){return Object(X.a)(this,n),t.apply(this,arguments)}return Object(Y.a)(n,[{key:"componentDidMount",value:function(){this.props.authorizeMe()}},{key:"render",value:function(){return q.a.createElement(te,this.props)}}]),n}(q.a.Component),re=Object(ne.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{authorizeMe:M,logout:function(){return function(){var e=Object(c.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:0===e.sent.resultCode&&t(F(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ae),se=(n(245),function(){return q.a.createElement("nav",{className:"sideBar"},q.a.createElement("div",{className:"sideBar__item"},q.a.createElement(ee.b,{to:"/profile"},"Profile")),q.a.createElement("div",{className:"sideBar__item"},q.a.createElement(ee.b,{to:"/messages"},"Messages")),q.a.createElement("div",{className:"sideBar__item"},q.a.createElement(ee.b,{to:"/news"},"News")),q.a.createElement("div",{className:"sideBar__item"},q.a.createElement(ee.b,{to:"/music"},"Music")),q.a.createElement("div",{className:"sideBar__item"},q.a.createElement(ee.b,{to:"settings"},"Settings")),q.a.createElement("div",{className:"sideBar__item"},q.a.createElement(ee.b,{to:"/users"},"Users")),q.a.createElement("div",{className:"sideBar__item"},q.a.createElement(ee.b,{to:"/login"},"Login")))}),oe=(n(246),n(129)),ce=(n(247),n(128)),ue=n.n(ce),ie=function(){return q.a.createElement("div",{style:{backgroundColor:"red"}},q.a.createElement("img",{src:ue.a,alt:"loading in progress"}))},le=(n(248),function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){var e;Object(X.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={editMode:!1,status:e.props.status},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(Y.a)(n,[{key:"activateEditMode",value:function(){this.props.isOwner&&this.setState({editMode:!0})}},{key:"deactivateEditMode",value:function(){this.setState({editMode:!1}),this.props.updateStatus(this.state.status)}},{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return q.a.createElement("div",{className:"status"},!this.state.editMode&&q.a.createElement("div",null,q.a.createElement("span",{onDoubleClick:this.activateEditMode.bind(this)},this.props.status||"too lazy to add status. Or Young?")),this.state.editMode&&q.a.createElement("div",null,q.a.createElement("input",{className:"status",onChange:this.onStatusChange,autoFocus:!0,onBlur:this.deactivateEditMode.bind(this),value:this.state.status})))}}]),n}(q.a.Component)),me=n(122),pe=n(13),fe=n(28),de=n.n(fe),he=(n(249),Object(me.a)({form:"editProfile"})((function(e){var t=e.handleSubmit,n=e.profile,a=e.error;return q.a.createElement("form",{className:"profileDataForm",onSubmit:t},q.a.createElement("div",null,q.a.createElement("button",null,"Save and Exit")),a&&q.a.createElement("div",{className:de.a.formSummaryError},a),q.a.createElement("div",{className:"userAboutItem"},q.a.createElement("b",null,"Full name"),": ",Object(pe.c)("Full name","fullName",[],pe.a)),q.a.createElement("div",{className:"userAboutItem"},q.a.createElement("b",null,"Looking for a job"),": ",Object(pe.c)("","lookingForAJob",[],pe.a,{type:"checkbox"})),q.a.createElement("div",{className:"userAboutItem"},q.a.createElement("b",null,"My professional skills"),": ",Object(pe.c)("My professional skills","lookingForAJobDescription",[],pe.b)),q.a.createElement("div",{className:"userAboutItem"},q.a.createElement("b",null,"About me"),": ",Object(pe.c)("About me","aboutMe",[],pe.b)),q.a.createElement("div",null,q.a.createElement("b",null,"CONTACTS"),": ",Object.keys(n.contacts).map((function(e){return q.a.createElement("div",{className:"userContactsItem",key:e},q.a.createElement("b",null,e,":")," ",Object(pe.c)(e,"contacts."+e,[],pe.a))}))))}))),Ee=function(e){var t=e.contactTitle,n=e.contactValue;return q.a.createElement("div",{className:"userContactsItem"},q.a.createElement("b",null,t),": ",n)},ge=function(e){var t=e.profile,n=e.isOwner,a=e.goToEditMode,r=t.contacts;return q.a.createElement("div",{className:"profileData"},n&&q.a.createElement("div",null,q.a.createElement("button",{onClick:a},"Edit")),q.a.createElement("div",{className:"userAbout"},q.a.createElement("div",{className:"userAboutItemName"},t.fullName),q.a.createElement("div",{className:"userAboutItemHeading"},"About me:"),q.a.createElement("div",{className:"userAboutItem"},t.aboutMe),q.a.createElement("div",{className:"userAboutItem"},t.lookingForAJob?"Looking for a job":""),q.a.createElement("div",{className:"userAboutItem"},t.lookingForAJobDescription)),q.a.createElement("div",{className:"contacts"},q.a.createElement("b",null,"CONTACTS"),": ",Object.keys(r).map((function(e){return q.a.createElement(Ee,{key:e,contactTitle:e,contactValue:r[e]})}))))},be=function(e){var t=Object(W.useState)(!1),n=Object(oe.a)(t,2),a=n[0],r=n[1];if(!e.profile)return q.a.createElement(ie,null);return q.a.createElement("div",{className:"profileInfo"},q.a.createElement("div",{className:"mainUserPhoto"},q.a.createElement("img",{src:e.profile.photos.large?e.profile.photos.large:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR01mUdp62kN2vyu7FWyXLNKdhJSrjnnHsdfQ&usqp=CAU"alt="my profile logo',alt:"users logo if any"}),e.isOwner&&q.a.createElement("input",{className:"savePhoto",type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}})),q.a.createElement(le,{status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner}),a?q.a.createElement(he,{initialValues:e.profile,profile:e.profile,onSubmit:function(t){e.saveProfile(t).then((function(){r(!1)}))}}):q.a.createElement(ge,{goToEditMode:function(){r(!0)},profile:e.profile,isOwner:e.isOwner}))},ve=n(83),Oe=(n(287),n(288),function(e){return q.a.createElement("div",{className:"postItem"},q.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFp3uCMFT-t3WKaunzc5iJMMNDiwDmz4q4CA&usqp=CAU",alt:"\u0447\u044c\u044f-\u0442\u043e \u0430\u0432\u0430"}),e.message,q.a.createElement("span",null," * like: ",e.like," *"))}),Se=n(37),we=Object(Se.a)(30),Pe=Object(me.a)({form:"ProfileAddNewPostForm"})((function(e){return q.a.createElement("form",{onSubmit:e.handleSubmit},q.a.createElement(ve.a,{component:pe.b,name:"newPostText",placeholder:"What are you thinking about?",validate:[Se.b,we]}),q.a.createElement("div",null,q.a.createElement("button",{className:"btn"},"ADD POST")))})),je=function(e){var t=e.posts.map((function(e){return q.a.createElement(Oe,{key:e.id,message:e.message,like:e.likesCount})}));return q.a.createElement("div",null,q.a.createElement("h3",null,"My posts"),q.a.createElement(Pe,{onSubmit:function(t){e.addPost(t.newPostText)}}),q.a.createElement("div",{className:"newPost"},t))},ye=Object(ne.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}}))(je),Ne=function(e){return q.a.createElement("div",{className:"content"},q.a.createElement(be,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,isOwner:e.isOwner,saveProfile:e.saveProfile}),q.a.createElement(ye,{store:e.store}))},Ce=n(63),_e=function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){return Object(X.a)(this,n),t.apply(this,arguments)}return Object(Y.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserID),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return q.a.createElement(Ne,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),n}(q.a.Component),ke=Object(a.d)(Object(ne.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserID:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:O,getStatus:function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getStatus(e);case 2:a=t.sent,n(v(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.updateStatus(e);case 3:0===t.sent.resultCode&&n(v(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.warn(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.savePhoto(e);case 2:0===(a=t.sent).resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:a.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n,a){var r,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.userId,t.next=3,f.saveProfile(e);case 3:if(0!==(s=t.sent).resultCode){t.next=8;break}n(O(r)),t.next=10;break;case 8:return n(Object(l.a)("editProfile",{_error:s.messages[0]})),t.abrupt("return",Promise.reject(s.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),K.g,Ce.a)(_e),Ae=(n(289),function(){return q.a.createElement("div",null,"My news here")}),Te=(n(290),function(){return q.a.createElement("div",null,"My music here")}),Ue=(n(291),function(){return q.a.createElement("div",null,"Settings ase here")}),Ie=(n(292),function(e){for(var t=Math.ceil(e.totalUsersQuantity/e.pageSize),n=[],a=1;a<=t;a++)n.push(a);var r=n.slice(e.currentPage-5>0?e.currentPage-5:0,e.currentPage-5>0?e.currentPage+5:10);return q.a.createElement("div",{className:"users"},q.a.createElement("div",{className:"usersQuantity"},r.map((function(t){return q.a.createElement("span",{key:t,className:e.currentPage===t?"selectedPage":"currentPage",onClick:function(n){e.onPageChanged(t)}},t)})),q.a.createElement("span",null,"TOTAL ",t," PAGES")),e.users.map((function(t){return q.a.createElement("div",{className:"userField",key:t.id},q.a.createElement("div",null,q.a.createElement("div",null,q.a.createElement(ee.b,{to:"/profile/"+t.id},q.a.createElement("img",{src:t.photos.large||t.photos.small||"https://shapka-youtube.ru/wp-content/uploads/2018/10/spartan.png",className:"userPhoto",alt:"\u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}))),q.a.createElement("div",null,t.followed?q.a.createElement("button",{className:"btn-sm",disabled:e.isFollowingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)}},"Unfollow"):q.a.createElement("button",{className:"btn-sm",disabled:e.isFollowingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}},"Follow"))),q.a.createElement("div",null,q.a.createElement("div",{className:"userName"},t.name),q.a.createElement("div",null,t.status?t.status:"too lazy to add status"),q.a.createElement("div",null,"user ID ",t.id)))})))}),Fe=function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){var e;Object(X.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize),e.props.setCurrentPage(t)},e}return Object(Y.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return q.a.createElement("div",{className:"content"},this.props.isFetching?q.a.createElement(ie,null):null,q.a.createElement(Ie,{totalUsersQuantity:this.props.totalUsersQuantity,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,unfollow:this.props.unfollow,follow:this.props.follow,users:this.props.users,isFollowingInProgress:this.props.isFollowingInProgress}))}}]),n}(q.a.Component),xe=Object(a.d)(Object(ne.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersQuantity:e.usersPage.totalUsersQuantity,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,isFollowingInProgress:e.usersPage.isFollowingInProgress}}),{follow:function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=p.followUser.bind(p),T(n,e,a,N);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:T(n,e,p.unfollowUser.bind(p),C);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},toggleIsFollowingInProgress:A,getUsers:function(e,t){return function(){var n=Object(c.a)(o.a.mark((function n(a){var r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(k(!0)),n.next=3,p.getUsers(e,t);case 3:r=n.sent,a(k(!1)),a(_(r.items)),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}),Ce.a)(Fe),Me=Object(me.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return q.a.createElement("form",{onSubmit:t},q.a.createElement("div",null,q.a.createElement(ve.a,{placeholder:"Email",name:"email",component:pe.a,type:"email",validate:[Se.b]})),q.a.createElement("div",null,q.a.createElement(ve.a,{placeholder:"Password",name:"password",component:pe.a,type:"password",validate:[Se.b]})),q.a.createElement("div",null,q.a.createElement(ve.a,{component:"input",name:"rememberMe",type:"checkbox"})," remember me"),a&&q.a.createElement("img",{src:a,alt:"Captcha"}),a&&Object(pe.c)("Enter symbols","captcha",[Se.b],pe.a),n&&q.a.createElement("div",{className:de.a.formSummaryError},n),q.a.createElement("div",null,q.a.createElement("button",{className:de.a.btn},"Login")))})),Le=Object(ne.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,a){return function(){var r=Object(c.a)(o.a.mark((function r(s){var c,u;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,h(e,t,n,a);case 2:0===(c=r.sent).resultCode?s(M()):(10===c.resultCode&&s(L()),u=c.messages.length>0?c.messages[0]:"Some error",s(Object(l.a)("login",{_error:u})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?q.a.createElement(K.a,{to:"/profile"}):q.a.createElement("div",null,q.a.createElement("h1",null,"Login"),q.a.createElement(Me,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))})),De=q.a.lazy((function(){return n.e(3).then(n.bind(null,295))})),Ge=function(e){return q.a.createElement("div",{className:"app-wrapper"},q.a.createElement(re,null),q.a.createElement(se,null),q.a.createElement(K.d,null,q.a.createElement(K.b,{exact:!0,path:"/",render:function(){return q.a.createElement(K.a,{to:"/profile"})}}),q.a.createElement(K.b,{path:"/profile/:userId?",render:function(){return q.a.createElement(ke,{store:e.store})}}),q.a.createElement(K.b,{path:"/messages",render:function(){return q.a.createElement("div",null,q.a.createElement(W.Suspense,{fallback:q.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},q.a.createElement(De,{store:e.store})))}}),q.a.createElement(K.b,{path:"/news",component:Ae}),q.a.createElement(K.b,{path:"/music",component:Te}),q.a.createElement(K.b,{path:"/settings",component:Ue}),q.a.createElement(K.b,{path:"/users",render:function(){return q.a.createElement(xe,{store:e.store})}}),q.a.createElement(K.b,{path:"/login",component:Le})))};V.a.render(q.a.createElement(q.a.StrictMode,null,q.a.createElement(ee.a,null,q.a.createElement(ne.a,{store:Q},q.a.createElement(Ge,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(24),r=n(25),s=n(27),o=n(26),c=n(0),u=n.n(c),i=n(10),l=n(12),m=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(s.a)(c,t);var n=Object(o.a)(c);function c(){return Object(a.a)(this,c),n.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(i.a,{to:"/login"})}}]),c}(u.a.Component);return Object(l.b)(m)(t)}},90:function(e,t,n){},91:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n(43),r=n(5),s={messages:[{id:"1",message:"Hello world"},{id:"2",message:"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0443 \u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439."}],dialogs:[{id:"1",name:"Anna"},{id:"2",name:"Boris"},{id:"3",name:"Charlie"},{id:"4",name:"Dima"},{id:"5",name:"Eva"}]},o=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:n}])});default:return e}}}},[[155,1,2]]]);
//# sourceMappingURL=main.7b2dab65.chunk.js.map