/*! For license information please see main.a4ddfdfb.chunk.js.LICENSE.txt */
(this.webpackJsonpemotion=this.webpackJsonpemotion||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(6),o=a.n(n),s=(a(28),a(12)),u=a(4),i=(a(29),a(11)),l=a.n(i),b=a(22),j=a(13),m=a(8),d=a.n(m),h={currentPage:1,searchQuery:"",method:"get",baseURL:"https://pixabay.com/api/",params:"&image_type=photo",API:"21072245-3acfda09a1d5bc65070e6b336"};d.a.defaults.baseURL="https://pixabay.com/api/",d.a.defaults.params=Object(j.a)(Object(j.a)({},h),{},{image_type:"photo",key:"21072245-3acfda09a1d5bc65070e6b336"});var g={fetchImages:function(){var e=Object(b.a)(l.a.mark((function e(t){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.currentPage,c=t.searchQuery,e.next=3,d.a.get("",{params:{currentPage:a,q:c}}).then((function(e){return e.data.hits}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=a(1),O=function(e){var t=e.children;return Object(f.jsx)("div",{children:t})},p=function(e){var t=e.onSubmit,a=Object(c.useState)(""),r=Object(u.a)(a,2),n=r[0],o=r[1];return Object(f.jsx)("header",{className:"Searchbar",children:Object(f.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),t(n),o("")},children:[Object(f.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(f.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(f.jsx)("input",{onChange:function(e){o(e.currentTarget.value)},className:"SearchForm-input",value:n,type:"text",autoComplete:"off",placeholder:"Search images and photos"})]})})};p.defaultProps={};var v=p,x=function(e){e.id;var t=e.webformatURL,a=e.largeImageURL,c=e.tags,r=e.handleLargeURLImage,n=function(e){"IMG"===e.target.nodeName&&r(e.target.dataset.large)};return Object(f.jsx)("li",{className:"ImageGalleryItem",onClick:n,children:Object(f.jsx)("img",{src:t,alt:c,className:"ImageGalleryItem-image",onClick:n,"data-large":a})},t)};x.defaultProps={};var y=x,L=function(e){var t=e.images,a=e.handleLargeURLImage,c=function(e){console.log("gallery click")},r=function(e){a(e)};return Object(f.jsx)("ul",{className:"ImageGallery",id:"imagesList",children:t.map((function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL,o=e.tags,s=e.user;return Object(f.jsx)(y,{onClick:c,webformatURL:a,largeImageURL:n,tag:o,handleLargeURLImage:r},"".concat(t).concat(s))}))})};L.defaultProps={};var S=L,I=function(e){var t=e.onClick;return Object(f.jsx)("button",{className:"ButtonWrapper",onClick:t,children:"Load more..."})};I.defaultProps={};var N=I,R=document.querySelector("#modal"),U=function(e){var t=e.largeImageURL,a=e.onClose,c=e.children;return Object(n.createPortal)(Object(f.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&a()},children:Object(f.jsxs)("div",{className:"Modal",children:[c,Object(f.jsx)("img",{src:t,alt:"No available",width:"640"})]})}),R)},k=a(23),w=a.n(k),P=function(){return Object(f.jsx)("div",{className:"LoaderWrapper",children:Object(f.jsx)(w.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})})};P.defaultProps={};var C=P;var F=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(""),o=Object(u.a)(n,2),i=o[0],l=o[1],b=Object(c.useState)(""),j=Object(u.a)(b,2),m=j[0],d=j[1],h=Object(c.useState)(""),p=Object(u.a)(h,2),x=(p[0],p[1],Object(c.useState)(!1)),y=Object(u.a)(x,2),L=y[0],I=y[1],R=Object(c.useState)(null),k=Object(u.a)(R,2),w=k[0],P=k[1],F=Object(c.useState)(!1),E=Object(u.a)(F,2),G=E[0],Q=E[1],T=Object(c.useState)(1),B=Object(u.a)(T,2),M=B[0],q=B[1];Object(c.useEffect)((function(){P(w)}),[w]),Object(c.useEffect)((function(){""!==i&&A()}),[i]);var A=function(){I(!0);var e={searchQuery:i,currentPage:M};g.fetchImages(e).then((function(e){r([].concat(Object(s.a)(a),Object(s.a)(e))),q((function(e){return e+1})),P("")})).catch((function(e){return console.log(e)})).finally((function(){I(!1),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))};return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(O,{children:[G&&Object(f.jsx)(U,{onClose:function(){return Q(!G)},largeImageURL:m}),Object(f.jsx)(v,{onSubmit:function(e){""!==e.trim()?(l(e),q(1),r([])):alert("Please write something")},searchQuery:i}),a.length>0&&Object(f.jsx)(S,{images:a,handleLargeURLImage:function(e){d(e),Q(!0)}}),L?Object(f.jsx)(C,{error:w}):a.length>0&&Object(f.jsx)(N,{onClick:A})]})})};o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(F,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.a4ddfdfb.chunk.js.map