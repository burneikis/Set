(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){},17:function(e,n,t){},19:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(2),c=t.n(o),l=(t(13),t(15),t(17),t(3));var u=function(e){var n=a.a.useState(!1),t=Object(l.a)(n,2),r=t[0],o=t[1],c=e.function,u=e.selectedCards,i=e.card,d=e.number;return a.a.createElement("img",{style:{border:r?"2px dotted #ccc":"2px dotted #fff",borderRadius:"10px"},alt:"card",src:"./assets/".concat(d,".png"),onClick:function(){o(!1),c(i),u.includes(i)&&o(!0)}})},i=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[0,1,0,0],[1,1,0,0],[2,1,0,0],[0,2,0,0],[1,2,0,0],[2,2,0,0],[0,0,1,0],[1,0,1,0],[2,0,1,0],[0,1,1,0],[1,1,1,0],[2,1,1,0],[0,2,1,0],[1,2,1,0],[2,2,1,0],[0,0,2,0],[1,0,2,0],[2,0,2,0],[0,1,2,0],[1,1,2,0],[2,1,2,0],[0,2,2,0],[1,2,2,0],[2,2,2,0],[0,0,0,1],[1,0,0,1],[2,0,0,1],[0,1,0,1],[1,1,0,1],[2,1,0,1],[0,2,0,1],[1,2,0,1],[2,2,0,1],[0,0,1,1],[1,0,1,1],[2,0,1,1],[0,1,1,1],[1,1,1,1],[2,1,1,1],[0,2,1,1],[1,2,1,1],[2,2,1,1],[0,0,2,1],[1,0,2,1],[2,0,2,1],[0,1,2,1],[1,1,2,1],[2,1,2,1],[0,2,2,1],[1,2,2,1],[2,2,2,1],[0,0,0,2],[1,0,0,2],[2,0,0,2],[0,1,0,2],[1,1,0,2],[2,1,0,2],[0,2,0,2],[1,2,0,2],[2,2,0,2],[0,0,1,2],[1,0,1,2],[2,0,1,2],[0,1,1,2],[1,1,1,2],[2,1,1,2],[0,2,1,2],[1,2,1,2],[2,2,1,2],[0,0,2,2],[1,0,2,2],[2,0,2,2],[0,1,2,2],[1,1,2,2],[2,1,2,2],[0,2,2,2],[1,2,2,2],[2,2,2,2]];var d=function(e){for(var n,t,r=e.length;0!==r;)t=Math.floor(Math.random()*r),n=e[r-=1],e[r]=e[t],e[t]=n;return e}(function(){var e,n,t,r,a=Array.from(i),o=[],c=Math.floor(Math.random()*a.length);o.push(a[c]);var l=a[c];a.splice(c,1),c=Math.floor(Math.random()*a.length),o.push(a[c]);var u=a[c];for(a.splice(c,1),e=u[0]===l[0],n=u[1]===l[1],t=u[2]===l[2],r=u[3]===l[3];o.length<3;){var d=a[c=Math.floor(Math.random()*a.length)];d[0]===l[0]===e&&d[1]===l[1]===n&&d[2]===l[2]===t&&d[3]===l[3]===r&&d[0]===u[0]===e&&d[1]===u[1]===n&&d[2]===u[2]===t&&d[3]===u[3]===r&&(o.push(d),a.splice(c,1))}for(;o.length<12;)c=Math.floor(Math.random()*a.length),o.push(a[c]),a.splice(c,1);return console.log(e,n,t,r),o}());function s(e){return i.indexOf(e)+1}var f=function(){var e=[];function n(n){e.includes(n)?e.splice(e.indexOf(n),1):e.length>2||(e.push(n),e.length>2&&function(e){var n=e[0],t=e[1],r=e[2];console.log(n,t,r);var a=n[0]===t[0],o=n[1]===t[1],c=n[2]===t[2],l=n[3]===t[3];r[0]===n[0]===a&&r[1]===n[1]===o&&r[2]===n[2]===c&&r[3]===n[3]===l&&r[0]===t[0]===a&&r[1]===t[1]===o&&r[2]===t[2]===c&&r[3]===t[3]===l&&(alert("You win!"),window.location.reload())}(e))}return d.map(function(t,r){return a.a.createElement(u,{selectedCards:e,function:n,key:r,card:t,number:s(t)})})};var h=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},"Find The Set"),a.a.createElement("div",{className:"App-body"},a.a.createElement(f,null)))};c.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)))},4:function(e,n,t){e.exports=t(19)}},[[4,2,1]]]);
//# sourceMappingURL=main.af6c8018.chunk.js.map