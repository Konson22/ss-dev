(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e,t,c){},39:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c(29),r=c.n(a),i=c(6),j=c(7),l=(c(39),c(13)),d=c(24),o=c(9);c(25);function b(e){var t=e.hideMenu;return Object(s.jsxs)("ul",{className:"nav",children:[Object(s.jsx)("li",{className:"nav-item",onClick:t,children:Object(s.jsx)(i.b,{className:"nav-link",to:"/",children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",onClick:t,children:Object(s.jsx)(i.b,{className:"nav-link",to:"/",children:"Services"})}),Object(s.jsx)("li",{className:"nav-item",onClick:t,children:Object(s.jsx)(i.b,{className:"nav-link",to:"/courses",children:"Courses"})}),Object(s.jsx)("li",{className:"nav-item",onClick:t,children:Object(s.jsx)(i.b,{className:"nav-link",to:"/projects",children:"Projects"})}),Object(s.jsx)("li",{className:"nav-item",onClick:t,children:Object(s.jsx)(i.b,{className:"nav-link",to:"/team",children:"Team"})})]})}c(45);var h=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(d.b)(c,null,{from:{opacity:0,transform:"translateX(100%)"},enter:{opacity:1,transform:"translateX(0)"},leave:{opacity:0,transform:"translateX(100%)"}}),j=function(){return a(!1)};return Object(s.jsx)("nav",{children:Object(s.jsxs)("div",{className:"container navbar-wraper",children:[Object(s.jsx)("div",{className:"logo-wraper",children:Object(s.jsx)("ul",{className:"nav",children:Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(i.b,{className:"nav-link",to:"/",children:Object(s.jsx)("h3",{children:"SS-Dev"})})})})}),Object(s.jsx)("div",{className:"navbar-links-wraper desctop",children:Object(s.jsx)(b,{})}),r.map((function(e){var t=e.item,c=e.key,n=e.props;return t&&Object(s.jsx)(d.a.div,{style:n,className:"navbar-links-wraper mobile",children:Object(s.jsx)(b,{hideMenu:j})},c)})),Object(s.jsx)("div",{className:"menu-wraper",children:Object(s.jsxs)(i.b,{className:"btn nav-btn mr-3",to:"/login",children:[Object(s.jsx)(o.h,{})," Login"]})}),Object(s.jsx)("div",{className:"mobile-menu",children:Object(s.jsxs)("ul",{className:"nav",children:[Object(s.jsx)("li",{className:"nav-item",onClick:j,children:Object(s.jsx)(i.b,{className:"nav-link",to:"/login",children:Object(s.jsx)(o.h,{className:"nav-icon"})})}),Object(s.jsx)("li",{className:"nav-item",onClick:function(){return a(!c)},children:Object(s.jsx)("span",{className:"nav-link",children:c?Object(s.jsx)(o.e,{className:"nav-icon"}):Object(s.jsx)(o.a,{className:"nav-icon"})})})]})})]})})};c(46);var x=function(){var e="".concat("/ss-dev","/images/Pngtree.jpg");return Object(s.jsx)("header",{className:"header",style:{backgroundImage:" url(".concat(e,")"),backgroundSize:"100% 100%"},children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"hero-wraper",children:[Object(s.jsx)("h1",{children:"We turn I deas into reality"}),Object(s.jsx)(i.b,{className:"btn hero-btn",to:"/register",children:" Join our community"}),Object(s.jsx)("button",{className:"btn hero-btn desctop",children:" See what we do"})]})})})};c(47);function O(e){var t,c=e.experts;return c.data&&(t=c.data.map((function(e){return Object(s.jsxs)("div",{className:"expert-slide-wraper",children:[Object(s.jsx)("div",{className:"expert-img",children:Object(s.jsx)("img",{src:"/ss-dev"+e.img})}),Object(s.jsxs)("div",{className:"expert-text",children:[Object(s.jsx)("h4",{children:e.name}),Object(s.jsx)("h5",{children:e.title})]}),Object(s.jsxs)("div",{className:"expert-media-wraper",children:[Object(s.jsx)("span",{className:"btn btn-sm",children:Object(s.jsx)(o.c,{})}),Object(s.jsx)("span",{className:"btn btn-sm",children:Object(s.jsx)(o.b,{})}),Object(s.jsx)("span",{className:"btn btn-sm",children:Object(s.jsx)(o.d,{})}),Object(s.jsx)("span",{className:"btn btn-sm",children:Object(s.jsx)(o.f,{})})]}),Object(s.jsxs)(i.b,{className:"btn btn-info btn-sm m-2",to:"/profile/".concat(e.id),children:[Object(s.jsx)(o.g,{})," view Profile"]})]},e.id)}))),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"title-wraper text-center",children:Object(s.jsx)("h1",{children:"Meet expert team"})}),Object(s.jsx)("div",{className:"expert-main-wraper",children:Object(s.jsx)("div",{className:"expert-wraper",children:t})})]})}var u=c(56);c(48);function m(){var e=Object(n.useState)({status:!1,data:null,error:!1}),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("https://ssdev-api.herokuapp.com/expert").then((function(e){return e.json()})).then((function(e){return a({status:!0,data:e,error:!1})}))}),[]),Object(s.jsx)(u.a,{children:Object(s.jsx)("div",{className:"main-container",children:Object(s.jsx)(O,{experts:c})})})}var p=c(31),v=c(57);function f(e){var t,c=e.projects;return c.status&&(t=c.data.map((function(e){return Object(s.jsx)(p.a,{md:4,children:Object(s.jsxs)("div",{className:"project-content",children:[Object(s.jsx)("img",{src:"/ss-dev/images/drink-864958__340.jpg"}),Object(s.jsxs)("div",{className:"project-text",children:[Object(s.jsx)("h3",{children:e.title}),Object(s.jsx)("p",{children:e.discription}),Object(s.jsx)("address",{children:Object(s.jsx)("a",{href:"https://test.com",target:"_blank",children:e.projects_link})})]})]})},e.id)}))),Object(s.jsx)(v.a,{children:t})}c(49);function N(){var e=Object(n.useState)({status:!1,data:null,error:!1}),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("https://ssdev-api.herokuapp.com/projects").then((function(e){return e.json()})).then((function(e){return a({status:!0,data:e,error:!1})}))}),[]),c.data&&c.data.forEach((function(e,t){})),Object(s.jsxs)("div",{children:[Object(s.jsx)(x,{}),Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"main-container about-wraper",children:[Object(s.jsx)("div",{className:"title-wraper text-cener",children:Object(s.jsx)("h1",{children:"Who are we?"})}),Object(s.jsx)("p",{children:"we do a custom websites and web application development services, you get high-performing, intuitive, and secure web solutions that support business processes and serve users globally. A custom web app that\u2019s tailored to your needs increases workflow productivity and supports business growth. I can help you conceive, design, and develop your custom web application.application guidelines and standardswe do a custom websites and web application development services, you get high-performing, intuitive, and secure web solutions that support business processes and serve users globally. A custom web app that\u2019s tailored to your needs increases workflow productivity and supports business growth. I can help you conceive, design, and develop your custom web application.application guidelines and standards. "})]})}),Object(s.jsx)("div",{className:"main-container projects-container",children:Object(s.jsxs)(u.a,{children:[Object(s.jsx)("div",{className:"title-wraper text-center",children:Object(s.jsx)("h1",{children:"Projects"})}),Object(s.jsx)(f,{projects:c})]})}),Object(s.jsx)(m,{})]})}c(50);var g=function(){return Object(s.jsx)("div",{children:"About"})};c(51);var w=function(){var e="".concat("/ss-dev","/images/pexels-photo-1449082.jpeg");return Object(s.jsx)("header",{className:"courses-header",style:{backgroundImage:"linear-gradient(to right, rgba(28, 26, 194, 0.545), rgba(0,0,0, .5)), url(".concat(e,")"),backgroundSize:"100% 100%"},children:"Courses"})},k=c(59);c(52);var y=function(){var e=Object(n.useState)({status:!1,data:null,error:!1}),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("https://ssdev-api.herokuapp.com/projects").then((function(e){return e.json()})).then((function(e){return a({status:!0,data:e,error:!1})}))}),[]),Object(s.jsx)("div",{className:"main-container projects-container",children:Object(s.jsxs)(u.a,{children:[Object(s.jsx)("div",{className:"title-wraper text-center",children:Object(s.jsx)("h1",{children:"Our team work"})}),Object(s.jsxs)("div",{className:"projects-wraper",children:[Object(s.jsx)(f,{projects:c}),Object(s.jsx)("div",{className:"text-right mt-4",children:Object(s.jsx)(k.a,{children:"See More"})})]})]})})};function S(){var e,t=Object(n.useState)({status:!1,data:null,error:!1}),c=Object(l.a)(t,2),a=c[0],r=c[1],i=Object(j.f)().id;return Object(n.useEffect)((function(){fetch("https://ssdev-api.herokuapp.com/expert").then((function(e){return e.json()})).then((function(e){return e.filter((function(e){return e.id===i}))})).then((function(e){return r({status:!0,data:e,error:!1})}))}),[]),a.data&&(e=a.data.map((function(e){return Object(s.jsxs)(v.a,{className:"profile-wraper",children:[Object(s.jsx)(p.a,{md:6,children:Object(s.jsx)("div",{className:"profile-img",children:Object(s.jsx)("img",{src:"/ss-dev"+e.img})})}),Object(s.jsx)(p.a,{md:6,children:Object(s.jsx)("div",{className:"profile-text",children:Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{className:"nav-link",children:["Name: ",e.name]}),Object(s.jsxs)("li",{className:"nav-link",children:["Gender: ",e.gender]}),Object(s.jsxs)("li",{className:"nav-link",children:["Current City: ",e.city]}),Object(s.jsxs)("li",{className:"nav-link",children:["Title: ",e.title]}),Object(s.jsxs)("li",{className:"nav-link",children:["Name: ",e.name]})]})})})]})}))),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h3",{children:"Kon's Profile"}),e]})}c(53);function C(){return Object(s.jsx)("footer",{children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"footer-wraper",children:[Object(s.jsx)("div",{className:"footer-content",children:Object(s.jsx)("a",{href:"#",children:"SSDEV"})}),Object(s.jsx)("div",{className:"footer-content",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("h4",{children:"Navigations"})}),Object(s.jsx)("li",{children:"Home"}),Object(s.jsx)("li",{children:"Services"}),Object(s.jsx)("li",{children:"Projects"}),Object(s.jsx)("li",{children:"Team"})]})}),Object(s.jsx)("div",{className:"footer-content",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("h4",{children:"About"})}),Object(s.jsx)("li",{children:"Who are we?"}),Object(s.jsx)("li",{children:"What we do"}),Object(s.jsx)("li",{children:"Our mission"}),Object(s.jsx)("li",{children:"Our services"})]})}),Object(s.jsx)("div",{className:"footer-content",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("h4",{children:"Social media"})}),Object(s.jsxs)("li",{children:[Object(s.jsx)(o.b,{})," "]}),Object(s.jsx)("li",{children:Object(s.jsx)(o.f,{})}),Object(s.jsx)("li",{children:Object(s.jsx)(o.d,{})}),Object(s.jsx)("li",{children:Object(s.jsx)(o.i,{})})]})})]})})})}var I=c(58),_=c(32),E=c(33);c(27);function P(){var e="".concat("/ss-dev","/images/geometric-1732847__340.jpg");return Object(s.jsx)("div",{className:"main-form-wraper",style:{backgroundImage:"url(".concat(e,")"),backgroundSize:"100% 100%"},children:Object(s.jsxs)("div",{className:"form-content",children:[Object(s.jsx)("h2",{children:"Login"}),Object(s.jsxs)(I.a,{children:[Object(s.jsx)(_.a,{children:Object(s.jsx)(E.a,{type:"text",placeholder:"user name"})}),Object(s.jsx)(_.a,{children:Object(s.jsx)(E.a,{type:"text",placeholder:"password"})}),Object(s.jsx)(_.a,{children:Object(s.jsx)(E.a,{type:"submit",value:"Login"})}),Object(s.jsxs)(_.a,{children:["I don't have account ",Object(s.jsx)(i.b,{to:"/signup",children:"Sign up"})]})]})]})})}function A(){var e="".concat("/ss-dev","/images/geometric-1732847__340.jpg");return Object(s.jsx)("div",{className:"main-form-wraper",style:{backgroundImage:"url(".concat(e,")"),backgroundSize:"100% 100%"},children:Object(s.jsxs)("div",{className:"form-content",children:[Object(s.jsx)("h2",{children:"Sign up"}),Object(s.jsxs)(I.a,{children:[Object(s.jsx)(_.a,{children:Object(s.jsx)(E.a,{type:"text",placeholder:"user name"})}),Object(s.jsx)(_.a,{children:Object(s.jsx)(E.a,{type:"text",placeholder:"password"})}),Object(s.jsx)(_.a,{children:Object(s.jsx)(E.a,{type:"submit",value:"Login"})}),Object(s.jsxs)(_.a,{children:["I don't have account ",Object(s.jsx)(i.b,{to:"/login",children:"Sign up"})]})]})]})})}function z(){return Object(s.jsx)("div",{children:"RegisterForm"})}var L=function(){return Object(s.jsx)("div",{className:"App-wraper",children:Object(s.jsxs)(i.a,{children:[Object(s.jsx)(h,{}),Object(s.jsxs)(j.c,{children:[Object(s.jsx)(j.a,{exact:!0,path:"/",children:Object(s.jsx)(N,{})}),Object(s.jsx)(j.a,{exact:!0,path:"/ss-dev",children:Object(s.jsx)(N,{})}),Object(s.jsx)(j.a,{exact:!0,path:"/about",children:Object(s.jsx)(g,{})}),Object(s.jsx)(j.a,{exact:!0,path:"/courses",children:Object(s.jsx)(w,{})}),Object(s.jsx)(j.a,{exact:!0,path:"/projects",children:Object(s.jsx)(y,{})}),Object(s.jsx)(j.a,{exact:!0,path:"/team",children:Object(s.jsx)(m,{})}),Object(s.jsx)(j.a,{exact:!0,path:"/login",children:Object(s.jsx)(P,{})}),Object(s.jsx)(j.a,{exact:!0,path:"/signup",children:Object(s.jsx)(A,{})}),Object(s.jsx)(j.a,{exact:!0,path:"/register",children:Object(s.jsx)(z,{})}),Object(s.jsx)(j.a,{exact:!0,path:"/profile/:id",children:Object(s.jsx)(S,{})})]}),Object(s.jsx)(C,{})]})})};r.a.render(Object(s.jsx)(L,{}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.4c019075.chunk.js.map