/*! For license information please see main.372e47ac.chunk.js.LICENSE.txt */
(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),o=n.n(r),a=n(3),u=n.n(a),i=n(4),l=n(5),s=function(){var e=Object(i.usePosition)(!0,{enableHighAccuracy:!0,timeout:5e3,maximumAge:0}),t=e.latitude,n=e.longitude,o=e.error,a=function(e){var t=Object(r.useRef)(!0),n=Object(r.useState)({data:null,loading:!0,error:null}),c=Object(l.a)(n,2),o=c[0],a=c[1];return Object(r.useEffect)((function(){return function(){t.current=!1}}),[]),Object(r.useEffect)((function(){a({data:null,loading:!0,error:null}),fetch(e).then((function(e){return e.json()})).then((function(e){console.log(t.current),t.current&&a({loading:!1,error:null,data:e})}))}),[e]),o}("https://www.metaweather.com/api/location/search/?lattlong=".concat(t,",").concat(n));return console.log(a),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Weather Today"}),Object(c.jsxs)("code",{children:["lat: ",t,Object(c.jsx)("br",{}),"longitude: ",n,Object(c.jsx)("br",{}),"error: ",o]})]})},j=(n(11),function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(s,{})})});u.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.372e47ac.chunk.js.map