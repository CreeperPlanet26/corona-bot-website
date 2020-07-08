(this["webpackJsonpcorona-website"]=this["webpackJsonpcorona-website"]||[]).push([[0],{118:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(10),c=a.n(o),l=(a(92),a(27)),s=a.n(l),i=a(50),u=a(16),d=a(51),h=a.n(d),m=(a(94),a(146)),p=a(147),f=function(e){var t=e.countryData,a=e.worldData,r=e.colorTheme;return n.a.createElement("div",null,n.a.createElement(m.a,{className:"hover-test",text:"white",bg:"warning",style:{width:"18rem",position:"fixed",top:200,left:550}},n.a.createElement(m.a.Header,null,"Cases"),n.a.createElement(m.a.Body,null,n.a.createElement(m.a.Title,null,n.a.createElement("h5",{style:"dark"===r?{color:"white"}:{color:"black"}},"Cases: ",t.cases),n.a.createElement(p.a,{now:parseInt(t.cases)/parseInt(a.cases)*300}),n.a.createElement("h5",{style:"dark"===r?{color:"white"}:{color:"black"}}," ","Today: ",t.todayCases),n.a.createElement(p.a,{now:parseInt(t.todayCases)/parseInt(a.todayCases)*300})))),n.a.createElement(m.a,{className:"hover-test",text:"white",bg:"danger",style:{width:"18rem",position:"fixed",top:200,left:850}},n.a.createElement(m.a.Header,null,"Deaths"),n.a.createElement(m.a.Body,null,n.a.createElement(m.a.Title,null,n.a.createElement("h5",{style:"dark"===r?{color:"white"}:{color:"black"}}," ","Deaths: ",t.deaths),n.a.createElement(p.a,{now:parseInt(t.deaths)/parseInt(a.deaths)*300}),n.a.createElement("h5",{style:"dark"===r?{color:"white"}:{color:"black"}}," ","Today: ",t.todayDeaths),n.a.createElement(p.a,{now:parseInt(t.todayDeaths)/parseInt(a.todayDeaths)*300})))),n.a.createElement(m.a,{className:"hover-test",text:"white",bg:"success",style:{width:"18rem",position:"fixed",top:200,left:1150}},n.a.createElement(m.a.Header,null,"Misc"),n.a.createElement(m.a.Body,null,n.a.createElement(m.a.Title,null,n.a.createElement("h5",{style:"dark"===r?{color:"white"}:{color:"black"}},"Recovered: ",t.recovered),n.a.createElement(p.a,{now:parseInt(t.recovered)/parseInt(a.recovered)*300}),n.a.createElement("h5",{style:"dark"===r?{color:"white"}:{color:"black"}},"Tests: ",t.totalTests),n.a.createElement(p.a,{now:parseInt(t.recovered)/parseInt(a.recovered)*300})))))},y=a(63),E=a(73),b=a(142),k=function(e){var t=e.onFetch,a=e.allCountries,o=e.colorTheme,c=Object(r.useState)(""),l=Object(u.a)(c,2),s=(l[0],l[1]),i=(n.a.forwardRef((function(e,t){var a=e.children,r=e.onClick;return n.a.createElement("a",{ref:t,onClick:function(e){e.preventDefault(),r(e)}},a,"\u25bc")})),n.a.forwardRef((function(e,t){var a=e.children,c=e.style,l=e.className,s=e["aria-labelledby"],i=Object(r.useState)(""),d=Object(u.a)(i,2),h=d[0],m=d[1];return n.a.createElement("div",{ref:t,style:"light"===o?Object(y.a)(Object(y.a)({},c),{},{backgroundColor:"#212529"}):c,className:l,"aria-labelledby":s},n.a.createElement(E.a,{style:"light"===o?{backgroundColor:"#212529"}:void 0,autoFocus:!0,className:"mx-3 my-2 w-auto",placeholder:"Type to filter...",onChange:function(e){return m(e.target.value)},value:h}),n.a.createElement("ul",{className:"list-unstyled",style:"light"===o?{backgroundColor:"#212529"}:{backgroundColor:"white"}},n.a.Children.toArray(a).filter((function(e){return!h||e.props.children.toLowerCase().startsWith(h)}))))})));return n.a.createElement(b.a,null,n.a.createElement(b.a.Toggle,{style:{width:"13rem",height:"3rem",position:"fixed",top:450,left:320},variant:"primary",id:"dropdown-basic"},"Select a Country"),n.a.createElement(b.a.Menu,{as:i},a.map((function(e){return n.a.createElement(b.a.Item,{style:"light"===o?{backgroundColor:"#212529",color:"white"}:{backgroundColor:"white",color:"black"},onClick:function(e){s((function(t){return e.target.id})),t(e.target.id)},id:e.country},e.country)}))))},g=a(145),w=a(143),v=a(74),C=a(141),j=a(144),x=a(140),O=a(139),T=function(e){var t=e.onThemeChange,a=e.colorTheme,o=Object(r.useState)(!1),c=Object(u.a)(o,2),l=c[0],s=c[1],i=function(){return s(!1)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{bg:"dark"===a?"light":"dark",variant:"dark"===a?"light":"dark"},n.a.createElement(g.a.Brand,null," Corona Bot"),n.a.createElement(w.a,{inline:!0},n.a.createElement(v.a,{variant:"primary",onClick:function(){return s(!0)}},"Help"),n.a.createElement(j.a,{className:"test",onClick:function(){return console.log("icon was clicked")},style:"dark"===a?{color:"black",fontSize:"2.5rem",position:"fixed",right:235}:{color:"white",fontSize:"2.5rem",position:"fixed",right:235}}),n.a.createElement(O.a,{title:"Toogle Theme"},n.a.createElement(x.a,{defaultChecked:!0,checkedChildren:"Dark",unCheckedChildren:"Light",style:{height:"1.5rem",position:"fixed",right:175},onChange:function(e){e&&t("dark"),e||t("light")}})),n.a.createElement(C.a,{style:{width:"40rem",height:"40rem",position:"fixed",top:200,left:645},show:l,onHide:i,backdrop:"static",keyboard:!1},n.a.createElement(C.a.Header,{closeButton:!0},n.a.createElement(C.a.Title,null,"How To Use")),n.a.createElement(C.a.Body,null,"Use the search bar to enter a country name or you can use the Country button dropdown to select a country from the list."),n.a.createElement(C.a.Footer,null,n.a.createElement(v.a,{variant:"primary",onClick:i},"Close"))))))},I=function(e){var t=e.onFetch,a=Object(r.useState)(""),o=Object(u.a)(a,2),c=(o[0],o[1]);return n.a.createElement("div",null,n.a.createElement(w.a,{style:{width:"56rem",position:"fixed",top:450,left:550}},n.a.createElement(w.a.Group,null,n.a.createElement(w.a.Control,{onChange:function(e){c(e.target.value),t(e.target.value)},size:"lg",type:"text",placeholder:"Country"}))))},S=function(){var e=Object(r.useState)({}),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(r.useState)({}),l=Object(u.a)(c,2),d=l[0],m=l[1],p=Object(r.useState)([]),y=Object(u.a)(p,2),E=y[0],b=y[1],g=Object(r.useState)("dark"),w=Object(u.a)(g,2),v=w[0],C=w[1];"dark"===v&&(document.body.style.backgroundColor="#212529"),"light"===v&&(document.body.style.backgroundColor="white");var j=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()("https://coronavirus-19-api.herokuapp.com/countries/");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,b((function(e){return a}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){j(),O()}),[]);var x=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.replace(/\s+/g,"%20"),e.next=3,h()("https://coronavirus-19-api.herokuapp.com/countries/".concat(a));case 3:return r=e.sent,e.next=6,r.json();case 6:n=e.sent,o((function(e){return n}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()("https://coronavirus-19-api.herokuapp.com/countries/world");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,m((function(e){return a}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"App"},n.a.createElement("h1",{style:{position:"fixed",top:100,left:840},className:"dark"===v?"light":"dark"},"Corona Stats For: ",a.country),n.a.createElement(T,{colorTheme:v,onThemeChange:function(e){console.log(v,e,"before"),"dark"===e&&C((function(e){return"dark"})),"light"===e&&C((function(e){return"light"})),console.log(v,e,"after")}}),n.a.createElement(k,{colorTheme:v,allCountries:E,onFetch:x}),n.a.createElement(f,{colorTheme:v,countryData:a,worldData:d}),n.a.createElement(I,{onFetch:x}))};a(116),a(117);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(S,null)),document.getElementById("root"))},87:function(e,t,a){e.exports=a(118)},92:function(e,t,a){},94:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.a1d9fab5.chunk.js.map