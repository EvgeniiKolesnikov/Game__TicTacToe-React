(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(7),o=n.n(c),i=n(6),l=n(2);function u(t){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<e.length;n++){var r=Object(l.a)(e[n],3),c=r[0],o=r[1],i=r[2];if(t[c]&&t[c]===t[o]&&t[c]===t[i])return t[c]}return null}console.log(u([null,null,null,"x","x","o",null,null,null]));var a=n(0),s={background:"lightblue",border:"2px solid darkblue",fontSize:" 30px",fontWeight:"900",cursor:"pointer",outline:"none"},b=function(t){var e=t.value,n=t.onClick;return Object(a.jsx)("button",{style:s,onClick:n,children:e})},j={border:"3px solid darkblue",borderRadius:" 4px",width:"250px",height:"250px",margin:"0 auto",display:"grid",gridTemplate:"repeat(3, 1fr) / repeat(3, 1fr)"},d=function(t){var e=t.squares,n=t.onClick;return Object(a.jsx)("div",{style:j,children:e.map((function(t,e){return Object(a.jsx)(b,{value:t,onClick:function(){return n(e)}},e)}))})},x={width:"200px",margin:"20px auto"},p=function(){var t=Object(r.useState)([Array(9).fill(null)]),e=Object(l.a)(t,2),n=e[0],c=e[1],o=Object(r.useState)(0),s=Object(l.a)(o,2),b=s[0],j=s[1],p=Object(r.useState)(!0),O=Object(l.a)(p,2),f=O[0],h=O[1],v=u(n[b]);return Object(a.jsxs)("div",{children:[Object(a.jsx)(d,{squares:n[b],onClick:function(t){var e=n.slice(0,b+1),r=e[b],o=Object(i.a)(r);v||o[t]||(o[t]=f?"x":"o",c([].concat(Object(i.a)(e),[o])),j(e.length),h(!f))}}),Object(a.jsx)("div",{style:x,children:Object(a.jsxs)("p",{children:[v?"Winner: "+v:"Next Player: "+(f?"x":"o"),n.map((function(t,e){var n=e?"Go to move ".concat(e):"Go to start";return Object(a.jsx)("li",{children:Object(a.jsx)("button",{onClick:function(){return j(t=e),void h(t%2===0);var t},children:n})},e)}))]})})]})},O=function(){return Object(a.jsx)(p,{})};o.a.render(Object(a.jsx)(O,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.3961393b.chunk.js.map