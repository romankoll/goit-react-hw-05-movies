"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[91],{700:function(n,e,r){r.d(e,{Bt:function(){return d},Hq:function(){return p},PI:function(){return m},h_:function(){return l},wr:function(){return a}});var t=r(861),c=r(757),o=r.n(c),i="https://api.themoviedb.org/3",s="b3dd64485b75b15c7b12230b13e4ccc3";function a(){return u.apply(this,arguments)}function u(){return(u=(0,t.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/trending/movie/day?api_key=").concat(s)).then((function(n){return n.ok||Promise.reject(new Error("Opps...something going wrong")),n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/search/movie?api_key=").concat(s,"&query=").concat(e,"&page=1")).then((function(n){return n.ok||Promise.reject(new Error("Opps...something going wrong")),n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/movie/").concat(e,"?api_key=").concat(s)).then((function(n){return n.ok||Promise.reject(new Error("Opps...something going wrong")),n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(s)).then((function(n){return n.ok||Promise.reject(new Error("Opps...something going wrong")),n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return w.apply(this,arguments)}function w(){return(w=(0,t.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(s)).then((function(n){return n.ok||Promise.reject(new Error("Opps...something going wrong")),n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},854:function(n,e,r){r(791);var t=r(643),c=r(184);e.Z=function(){return(0,c.jsx)(t.Bb,{className:"loader",height:"80",width:"80",radius:"9",color:"green",ariaLabel:"three-dots-loading",wrapperStyle:{margin:"0 auto"}})}},91:function(n,e,r){r.r(e),r.d(e,{default:function(){return m}});var t=r(861),c=r(439),o=r(757),i=r.n(o),s=r(700),a=r(854),u=r(791),p=r(689),h=r(87),l="MoviesDetails_container__6xZwT",f="MoviesDetails_imageContainer__4o0pT",d="MoviesDetails_btnBack__Jfils",v=r(184),m=function(){var n,e,r=null!==(n=null===(e=(0,p.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies",o=(0,u.useState)(null),m=(0,c.Z)(o,2),w=m[0],x=m[1],g=(0,p.UO)().movieId;if((0,u.useEffect)((function(){var n=function(){var n=(0,t.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.h_)(g).then((function(n){return x(n)}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}();n()}),[g]),!w)return(0,v.jsx)("div",{children:"Loading..."});var j=w.genres.map((function(n){return n.name})).join(", "),k="";w.poster_path&&(k="".concat("https://image.tmdb.org/t/p/w400").concat(w.poster_path));var _=Math.round(10*w.vote_average)/10;return(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)(h.rU,{to:r,className:d,children:"Go back"}),(0,v.jsxs)("div",{children:[k&&(0,v.jsx)("div",{className:f,children:(0,v.jsx)("img",{src:k,alt:"",className:"posterImage"})}),(0,v.jsx)("h2",{children:w.title}),(0,v.jsxs)("p",{children:["User Score: ",_]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:w.overview}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:j})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h3",{children:"Additional information"}),(0,v.jsxs)("ul",{className:"",children:[(0,v.jsx)("li",{children:(0,v.jsx)(h.rU,{to:"cast",className:"",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(h.rU,{to:"reviews",className:"",children:"Reviews"})})]}),(0,v.jsx)(u.Suspense,{fallback:(0,v.jsx)(a.Z,{}),children:(0,v.jsx)(p.j3,{})})]})]})}},861:function(n,e,r){function t(n,e,r,t,c,o,i){try{var s=n[o](i),a=s.value}catch(u){return void r(u)}s.done?e(a):Promise.resolve(a).then(t,c)}function c(n){return function(){var e=this,r=arguments;return new Promise((function(c,o){var i=n.apply(e,r);function s(n){t(i,c,o,s,a,"next",n)}function a(n){t(i,c,o,s,a,"throw",n)}s(void 0)}))}}r.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=91.0fdf1786.chunk.js.map