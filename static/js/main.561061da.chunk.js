(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(e,t,a){e.exports=a(346)},165:function(e,t,a){},346:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(50),l=a.n(o),i=(a(165),a(21)),c=function(){return r.a.createElement("div",{className:"ui segment",style:{height:"100%"}},r.a.createElement("div",{className:"ui active inverted dimmer",style:{height:"100%",width:"100%"}},r.a.createElement("div",{className:"ui large text loader"},"Cargando datos...")),r.a.createElement("p",null))},s=a(34),d=a(141),u={apiKey:"%API_KEY%",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],spreadsheetId:"1rFRJR08PnZETrorlMZrLDz0qN90sWAe3-mQj60KItJ8"},m=function(e,t){var a=Object(n.useState)(null),r=Object(d.a)(a,2),o=r[0],l=r[1];Object(n.useEffect)(function(){window.gapi.load("client",c)},[]);var c=function(){window.gapi.client.init({apiKey:u.apiKey,discoveryDocs:u.discoveryDocs}).then(function(){h()})},m=function(e){return e.split(" ")[2]},h=function(){window.gapi.client.load("sheets","v4",function(){window.gapi.client.sheets.spreadsheets.values.batchGet({spreadsheetId:u.spreadsheetId,ranges:e}).then(function(e){var t=e.result.valueRanges,a=[],n={};t.forEach(function(e){var t={fecha:e.values[0][4]};e.values.forEach(function(e){t=Object(i.a)({},t,Object(s.a)({},m(e[3]),+e[6].replace(/,/g,".")))}),a=a.concat(t)}),t[0].values.forEach(function(e){n=Object(i.a)({},n,Object(s.a)({},m(e[3]),"".concat(e[1],", ").concat(e[0])))}),l({names:n,data:a})}).catch(function(e){return console.log(e)})})};return o},h=a(9),g=function(e){var t=e.data,a=e.names,n=e.dniTable,o=e.colors;return r.a.createElement(h.h,null,r.a.createElement(h.e,{data:t,margin:{top:20,right:20,left:40,bottom:20}},r.a.createElement(h.a,{strokeDasharray:"3 3"}),r.a.createElement(h.j,{dataKey:"fecha",label:{value:"mes",position:"bottom"}}),r.a.createElement(h.k,{label:{value:"salario (AR$)",angle:-90,position:"left",offset:20}}),r.a.createElement(h.i,{formatter:function(e,t,a){return"$".concat(e)},contentStyle:{background:"#ffeaca"},itemStyle:{fontWeight:"bold"},labelStyle:{textAlign:"center",fontWeight:"bold"},itemSorter:function(e,t){return t.value-e.value}}),r.a.createElement(h.c,{verticalAlign:"top"}),n.map(function(e,t){return r.a.createElement(h.d,{key:e,name:a[e],type:"monotone",dataKey:e,stroke:o[t]})}),r.a.createElement(h.d,{connectNulls:!0,key:"1302",name:"Educaci\xf3n (cargo 1302 / maestro de grado)",type:"monotone",dataKey:"1302",stroke:"purple"})))},p=function(e){var t=e.data,a=e.colors,n=e.width,o=e.height,l=Math.PI/180;return r.a.createElement(h.g,{width:n,height:o,style:{margin:"0 auto"}},r.a.createElement(h.c,{verticalAlign:"top"}),r.a.createElement(h.f,{data:t,dataKey:"value",labelLine:!1,label:function(e){var t=e.cx,a=e.cy,n=e.midAngle,o=e.innerRadius,i=e.outerRadius,c=e.percent,s=(e.index,o+.5*(i-o)),d=t+s*Math.cos(-n*l),u=a+s*Math.sin(-n*l);return r.a.createElement("text",{x:d,y:u,fill:"white",textAnchor:d>t?"start":"end",dominantBaseline:"central"},"".concat((100*c).toFixed(0),"%"))},outerRadius:80,fill:"#8884d8"},t.map(function(e,t){return r.a.createElement(h.b,{key:t,fill:a[t%a.length]})})))},f=a(37),E=function(){var e=["22774175","20532788","7982372","25019875","13984417"],t=["#0088FE","#00C49F"],a=m(["enero_2018!A3:H12","febrero_2018!A3:H12","marzo_2018!A3:H12","abril_2018!A3:H12","mayo_2018!A3:H12","junio_2018!A3:H12","julio_2018!A3:H12","setiembre_2018!A3:H12","octubre_2018!A3:H12","noviembre_2018!A3:H12","diciembre_2018!A3:H12"],e),n=a?r.a.createElement(g,{data:function(e){return e.map(function(e){switch(e.fecha){case"01/01/18":return Object(i.a)({},e,{1302:23364.19});case"01/07/18":return Object(i.a)({},e,{1302:27957.83});case"01/12/18":return Object(i.a)({},e,{1302:34655.25});default:return e}})}(a.data),names:a.names,dniTable:e,colors:["green","blue","red","brown","orange"]}):null,o=r.a.createElement(p,{data:[{name:"M",value:216},{name:"F",value:83}],colors:t,width:200,height:300}),l=r.a.createElement(p,{data:[{name:"M",value:214},{name:"F",value:89}],colors:t,width:200,height:300});return r.a.createElement("div",{className:f.container},r.a.createElement("div",{className:f["line-chart"],style:{marginTop:"100px"}},r.a.createElement("h1",{style:{textAlign:"center"}},"Evoluci\xf3n del salario (bruto) de funcionarios durante el a\xf1o 2018"),r.a.createElement("div",{style:{width:"80%",margin:"40px auto"}},r.a.createElement("p",null,'Se toman los 5 salarios m\xe1s altos de funcionarios y se visualiza la evoluci\xf3n de los m\xedsmos en comparaci\xf3n al b\xe1sico de agentes municipales con denominaci\xf3n "MAESTRO DE GRADO".'),r.a.createElement("p",null,"Los datos se cargan de dos spreadsheets:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/1rFRJR08PnZETrorlMZrLDz0qN90sWAe3-mQj60KItJ8/edit#gid=883916300"},"spreadsheet 1")),r.a.createElement("li",null," ",r.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/1F82EVZq-gavhzepZ5PPPUU1iyjrH5KA8V1-5_Gqa1VI/edit#gid=1858989657"},"spreadsheet 2")," ")),r.a.createElement("p",null,"y provienen del"," ",r.a.createElement("a",{href:"https://gobiernoabierto.cordoba.gob.ar/data/datos-abiertos"},"Portal de Datos Abiertos de la Ciudad de C\xf3rdoba"))),r.a.createElement("div",{style:{width:"80%",height:500,margin:"0 auto"}},a?n:r.a.createElement(c,null))),r.a.createElement("div",{className:f["pie-chart-one"]},r.a.createElement("h2",{style:{textAlign:"center",marginBottom:"130"}},"Distribuci\xf3n de G\xe9nero -Enero-"),o),r.a.createElement("div",{className:f["pie-chart-two"]},r.a.createElement("h2",{style:{textAlign:"center",marginBottom:"130"}},"Distribuci\xf3n de G\xe9nero -Diciembre-"),l))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},37:function(e,t,a){e.exports={container:"style_container__HglsY","line-chart":"style_line-chart__heVyW","pie-chart-one":"style_pie-chart-one__13au3","pie-chart-two":"style_pie-chart-two__ZO01B"}}},[[160,1,2]]]);
//# sourceMappingURL=main.561061da.chunk.js.map