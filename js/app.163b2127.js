(function(e){function t(t){for(var a,c,s=t[0],l=t[1],i=t[2],b=0,p=[];b<s.length;b++)c=s[b],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},r=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/map/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"464a":function(e,t,n){"use strict";n("7f57")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function o(e,t,n,o,r,c){var s=Object(a["m"])("app-create"),l=Object(a["m"])("app-selector");return Object(a["g"])(),Object(a["c"])("div",null,[Object(a["e"])("button",{class:"btn btn-success position-absolute open",onClick:t[1]||(t[1]=function(){return c.openPopUp&&c.openPopUp.apply(c,arguments)})},"Create marker"),this.isPopUpClosed?Object(a["d"])("",!0):(Object(a["g"])(),Object(a["c"])(s,{key:0,onClosePopUp:c.closePopUp},null,8,["onClosePopUp"])),Object(a["e"])(l)])}var r=Object(a["p"])("data-v-21d9c017");Object(a["i"])("data-v-21d9c017");var c={class:"container-fluid position-absolute d-flex flex-column justify-content-end data-selector"},s={class:"row d-flex align-items-end"},l={class:"col-3"},i={class:"row"},u={class:"col-2"},b=Object(a["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"32",fill:"currentColor",class:"bi bi-caret-right-fill",viewBox:"0 0 16 16"},[Object(a["e"])("path",{d:"M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})],-1),p={class:"col-10"},d={class:"col-2"},m={class:"d-flex flex-column"},v={class:"bg-light rounded d-flex justify-content-around mb-2 p-2"},f={key:0,class:"mb-0 text-center"},h={class:"bg-light rounded p-3"},O={key:0,class:"mb-0 text-center"},j={key:1,class:"mb-0 text-center"},g={class:"col-7"};Object(a["h"])();var k=r((function(e,t,n,o,k,y){var S=Object(a["m"])("app-form"),w=Object(a["m"])("app-pagination");return Object(a["g"])(),Object(a["c"])("div",c,[Object(a["e"])("div",s,[Object(a["e"])("div",l,[Object(a["e"])("div",i,[Object(a["e"])("div",u,[Object(a["e"])("button",{type:"button",class:"btn btn-light p-2 mx-1",disabled:!e.selectedSort.value,onClick:t[1]||(t[1]=function(){return y.toggleTimelaps&&y.toggleTimelaps.apply(y,arguments)})},[b],8,["disabled"])]),Object(a["e"])("div",p,[Object(a["e"])(S,{isBlock:!0,options:e.sortOptions,valueToSet:"selectedSort",onSelect:y.setSelectedValue},null,8,["options","onSelect"])])])]),Object(a["e"])("div",d,[Object(a["e"])("div",m,[Object(a["e"])("div",v,[void 0==e.selectedSort.value||"years"==e.selectedSort.value?(Object(a["g"])(),Object(a["c"])("p",f,"Choose to sort by days or months")):(Object(a["g"])(),Object(a["c"])(a["a"],{key:1},[Object(a["e"])(S,{isBlock:!1,options:e.years,valueToSet:"selectedYear",onSelect:y.setSelectedValue},null,8,["options","onSelect"]),"days"==e.selectedSort.value?(Object(a["g"])(),Object(a["c"])(S,{key:0,isBlock:!1,options:e.months,valueToSet:"selectedMonth",onSelect:y.setSelectedValue},null,8,["options","onSelect"])):Object(a["d"])("",!0)],64))]),Object(a["e"])("div",h,[y.dateObject?(Object(a["g"])(),Object(a["c"])("p",O,Object(a["n"])(y.dateObject.selectedDate),1)):(Object(a["g"])(),Object(a["c"])("p",j,"The selected date will be here"))])])]),Object(a["e"])("div",g,[y.dateObject?(Object(a["g"])(),Object(a["c"])(w,{key:0},{default:r((function(){return[Object(a["e"])(S,{isBlock:!0,options:y.dateObject.dates,timelaps:y.timelaps,onFinishTimelaps:y.toggleTimelaps},null,8,["options","timelaps","onFinishTimelaps"])]})),_:1})):Object(a["d"])("",!0)])])])}));n("99af"),n("b0c0");function y(e,t,n,o,r,c){return Object(a["g"])(),Object(a["c"])("form",{class:["bg-light rounded p-2",n.isBlock?"d-flex":"d-inline-block"]},[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["k"])(n.options,(function(e){return Object(a["g"])(),Object(a["c"])(a["a"],null,[Object(a["e"])("input",{type:"radio",class:"btn-check",name:"options-outlined",autocomplete:"off",ref:"".concat(e.value),value:e.value,id:"".concat(e.name,"-").concat(e.value),onInput:function(t){return c.selectOption(e,n.valueToSet)}},null,40,["value","id","onInput"]),Object(a["e"])("label",{class:["btn btn-outline-success",n.isBlock?"mb-0 mx-2":"mb-2 mx-auto w-100"],for:"".concat(e.name,"-").concat(e.value)},Object(a["n"])(e.name),11,["for"])],64)})),256))],2)}n("4de4"),n("4160"),n("c975"),n("d81d"),n("07ac"),n("159b");var S={props:{options:Array,isBlock:Boolean,valueToSet:String},data:function(){return{timelapsIterations:[]}},methods:{selectOption:function(e,t){this.$emit("select",e,t)}},computed:{getCurrentComponentRefs:function(){var e=Object.values(this.$refs),t=this.options.map((function(e){return e.value}));return e.filter((function(e){if(e){var n=e.getAttribute("value");return-1!==t.indexOf(+n)}}))},timelaps:function(){return this.$store.getters.getTimelaps}},watch:{timelaps:function(e){var t=this;if(e){var n=this.getCurrentComponentRefs,a=null;this.emitter.emit("startSlide",n.length);for(var o=function(e){var o=n[e];a&&(n[a].checked=!1);var r=setTimeout((function(){o.checked=!0,a=e}),1e3*e+1);t.timelapsIterations.push(r)},r=0;r<n.length;r++)o(r);this.$store.dispatch("toogleTimelaps")}else iterations.length&&iterations.forEach((function(e){clearInterval(e)}))}}};S.render=y;var w=S,T={class:"position-relative"},x={class:"pagination bg-light rounded pb-0 mx-4"},C=Object(a["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"30",fill:"currentColor",class:"bi bi-chevron-left",viewBox:"0 0 16 16"},[Object(a["e"])("path",{"fill-rule":"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"})],-1),M=Object(a["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"30",fill:"currentColor",class:"bi bi-chevron-right",viewBox:"0 0 16 16"},[Object(a["e"])("path",{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"})],-1);function P(e,t,n,o,r,c){return Object(a["g"])(),Object(a["c"])("div",T,[Object(a["e"])("div",x,[Object(a["l"])(e.$slots,"default")]),Object(a["e"])("button",{class:"pagination__prev btn bg-light rounded p-1 position-absolute",onClick:t[1]||(t[1]=function(e){return c.slide(-200,200)})},[C]),Object(a["e"])("button",{class:"pagination__next btn bg-light rounded p-1 position-absolute",onClick:t[2]||(t[2]=function(e){return c.slide(200,200)})},[M])])}var z={name:"Pagination",data:function(){return{iterations:[],reiterations:null}},methods:{slide:function(e,t){var n=document.querySelector(".pagination"),a=Date.now(),o=n.scrollLeft,r=function r(){var c=Date.now()-a;c<t&&(n.scrollLeft=o+e*c/t,requestAnimationFrame(r))};requestAnimationFrame(r)}},computed:{timelaps:function(){this.$store.getters.getTimelaps}},watch:{timelaps:function(e){var t=this;if(e)for(var n=0;n<reiteration;n++){var a=setTimeout((function(){t.slide(50,200)}),3e3*n+1);this.iterations.push(a)}else iterations.length&&iterations.forEach((function(e){clearInterval(e)}))}},mounted:function(){var e=this;this.emitter.on("startSlide",(function(t){e.reiterations=t,e.slide(-1e4,10)}))}};n("464a");z.render=P;var A=z,B={name:"Selector",data:function(){return{sortOptions:[],years:[],months:[],selectedSort:{},selectedYear:{},selectedMonth:{}}},components:{appForm:w,appPagination:A},methods:{setSelectedValue:function(e,t){switch(this.option=e,t){case"selectedSort":this.selectedSort=e;break;case"selectedYear":this.selectedYear=e;break;case"selectedMonth":this.selectedMonth=e;break}},getWeekDay:function(e){var t=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];return t[e.getDay()]},toggleTimelaps:function(){this.$store.dispatch("toogleTimelaps")}},computed:{dateObject:function(){var e=this.selectedSort,t=this.selectedYear,n=this.selectedMonth;if("days"==e.value&&t.value&&n.value>=0){for(var a=[],o=new Date(t.value,n.value+1,0).getDate(),r=0;r<o;r++){var c={name:"".concat(r+1," ").concat(this.getWeekDay(new Date(t.value,n.value,r))),value:r+1};a.push(c)}return{selectedDate:"".concat(t.name," ").concat(n.name),dates:a}}return"months"==e.value&&t.value?(this.selectedMonth={},{selectedDate:t.value,dates:this.months}):"years"==e.value?(this.selectedYear={},this.selectedMonth={},{selectedDate:"Choose the year from the selectors on the right",dates:this.years}):void 0},timelaps:function(){return this.$store.getters.getTimelaps}},mounted:function(){this.sortOptions=this.$store.getters.getSortOptions,this.years=this.$store.getters.getYears,this.months=this.$store.getters.getMonths}};n("78e2");B.render=k,B.__scopeId="data-v-21d9c017";var $=B,D={class:"marker-tabs"},_={class:"marker-tabs__inner"},N={class:"d-flex pb-2 justify-content-between"},U={class:"nav nav-tabs",id:"myTab",role:"tablist"},F={class:"nav-item",role:"presentation"},V={class:"tab-content border border-top-0 p-2",id:"myTabContent"},Y={class:"row"},E={class:"col-6 pt-2"},I=Object(a["e"])("h6",null,"Type",-1),L={class:"col-6 pt-2"},q=Object(a["e"])("h6",null,"Size",-1),J={class:"row"},R={class:"col-6 pt-2"},W=Object(a["e"])("h6",null,"Color",-1),G={class:"col-6 pt-2"},H=Object(a["e"])("h6",null,"Click to add",-1),K={key:0,class:"marker-table"},Q={class:"table table-hover"},X=Object(a["e"])("thead",null,[Object(a["e"])("tr",null,[Object(a["e"])("th",{scope:"col"},"#"),Object(a["e"])("th",{scope:"col"},"Type"),Object(a["e"])("th",{scope:"col"},"Color"),Object(a["e"])("th",{scope:"col"},"Size"),Object(a["e"])("th",{scope:"col"},"Remove")])],-1),Z={scope:"row"},ee={key:1,class:"pt-2 text-center"};function te(e,t,n,o,r,c){var s=Object(a["m"])("app-form");return Object(a["g"])(),Object(a["c"])("div",D,[Object(a["e"])("div",_,[Object(a["e"])("div",N,[Object(a["e"])("button",{class:"btn btn-outline-success",disabled:!c.markers.length,onClick:t[1]||(t[1]=function(){return c.csvExport&&c.csvExport.apply(c,arguments)})},"Export CSV",8,["disabled"]),Object(a["e"])("button",{class:"btn btn-outline-danger",onClick:t[2]||(t[2]=function(){return c.close&&c.close.apply(c,arguments)})},"×")]),Object(a["e"])("ul",U,[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["k"])(c.markerOptions,(function(e,n){return Object(a["g"])(),Object(a["c"])("li",F,[Object(a["e"])("a",{role:"tab","data-bs-toggle":"tab",class:["nav-link text-success",0==n?"active":""],id:e.markerName+"-tab","aria-controls":e.markerName,href:"#"+e.markerName,"aria-selected":0==n,onClick:t[3]||(t[3]=function(){return c.changeActiveTab&&c.changeActiveTab.apply(c,arguments)})},Object(a["n"])(e.markerName),11,["id","aria-controls","href","aria-selected"])])})),256))]),Object(a["e"])("div",V,[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["k"])(c.markerOptions,(function(n,o){return Object(a["g"])(),Object(a["c"])("div",{role:"tabpanel",class:["tab-pane fade",0==o?"show active":""],id:n.markerName,"aria-labelledby":n.markerName+"-tab"},[Object(a["e"])("div",Y,[Object(a["e"])("div",E,[I,Object(a["e"])(s,{isBlock:!0,options:n.markerTypes,wrappClass:"d-inline-block",valueToSet:"type",onSelect:c.setSelectedValue},null,8,["options","onSelect"])]),Object(a["e"])("div",L,[q,e.activeTab==n.markerName?(Object(a["g"])(),Object(a["c"])(s,{key:0,isBlock:!0,options:n.markerSizes,wrappClass:"d-inline-block",valueToSet:"size",onSelect:c.setSelectedValue},null,8,["options","onSelect"])):Object(a["d"])("",!0)])]),Object(a["e"])("div",J,[Object(a["e"])("div",R,[W,e.activeTab==n.markerName?(Object(a["g"])(),Object(a["c"])(s,{key:0,isBlock:!0,options:n.markerColors,wrappClass:"d-inline-block",valueToSet:"color",onSelect:c.setSelectedValue},null,8,["options","onSelect"])):Object(a["d"])("",!0)]),Object(a["e"])("div",G,[H,Object(a["e"])("button",{class:"btn btn-success mt-2",disabled:!e.type||!e.color||!e.size,onClick:t[4]||(t[4]=function(){return c.addMarker&&c.addMarker.apply(c,arguments)})}," Add marker",8,["disabled"])])])],10,["id","aria-labelledby"])})),256))]),c.markers.length?(Object(a["g"])(),Object(a["c"])("div",K,[Object(a["e"])("table",Q,[X,Object(a["e"])("tbody",null,[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["k"])(c.markers,(function(e,t){return Object(a["g"])(),Object(a["c"])("tr",null,[Object(a["e"])("th",Z,Object(a["n"])(t+1),1),Object(a["e"])("td",null,Object(a["n"])(e.type.name),1),Object(a["e"])("td",null,Object(a["n"])(e.color.name),1),Object(a["e"])("td",null,Object(a["n"])(e.size.name),1),Object(a["e"])("td",null,[Object(a["e"])("button",{class:"btn btn-danger",onClick:function(e){return c.removeMarker(t)}},"Delete",8,["onClick"])])])})),256))])])])):(Object(a["g"])(),Object(a["c"])("p",ee,"There will be displayed all markers"))])])}n("a15b"),n("b64b"),n("ac1f"),n("5319");var ne=n("2909"),ae={name:"Create",components:{appForm:w},data:function(){return{type:"",color:"",size:"",activeTab:"Point"}},computed:{markerOptions:function(){return this.$store.getters.getMarkerOptions},markers:function(){return this.$store.getters.getMarkers}},methods:{changeActiveTab:function(e){this.activeTab=e.target.getAttribute("aria-controls"),this.clearCurrentMarker()},addMarker:function(){var e={type:this.type,color:this.color,size:this.size};this.$store.dispatch("addMarker",e)},removeMarker:function(e){this.$store.dispatch("removeMarker",e)},setSelectedValue:function(e,t){switch(this.option=e,t){case"type":this.type=e;break;case"color":this.color=e;break;case"size":this.size=e;break}},clearCurrentMarker:function(){this.type="",this.color="",this.size=""},csvExport:function(){var e="data:text/csv;charset=utf-8,",t=this.markers;e+=[Object.keys(t[0]).join(";")].concat(Object(ne["a"])(t.map((function(e){return Object.values(e).map((function(e){return e.value})).join(";")})))).join("\n").replace(/(^\[)|(\]$)/gm,"");var n=encodeURI(e),a=document.createElement("a");a.setAttribute("href",n),a.setAttribute("download","export.csv"),a.click()},close:function(){this.$emit("closePopUp")}}};n("d3df");ae.render=te;var oe=ae,re={name:"App",components:{appSelector:$,appCreate:oe},data:function(){return{isPopUpClosed:!0}},methods:{closePopUp:function(){this.isPopUpClosed=!0},openPopUp:function(){this.isPopUpClosed=!1}}};n("6872");re.render=o;var ce=re,se=n("9483");Object(se["a"])("".concat("/map/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("a434");var le=n("5502"),ie=Object(le["a"])({state:{sortBy:[{name:"Days",value:"days"},{name:"Month",value:"months"},{name:"Years",value:"years"}],years:[{name:"2020",value:2020},{name:"2019",value:2019},{name:"2018",value:2018}],months:[{name:"January",value:0},{name:"February",value:1},{name:"March",value:2},{name:"April",value:3},{name:"May",value:4},{name:"June",value:5},{name:"July",value:6},{name:"August",value:7},{name:"September",value:8},{name:"October",value:9},{name:"November",value:10},{name:"December",value:11}],markerOptions:[{markerName:"Point",markerTypes:[{name:"▲",value:"triangle"},{name:" ◆",value:"rhombus"},{name:"▬",value:"square"}],markerColors:[{name:"🟡",value:"yellow"},{name:"🔴",value:"red"},{name:"🟢",value:"green"},{name:"🔵",value:"blue"}],markerSizes:[{name:"S",value:"2px"},{name:"M",value:"4px"},{name:"L",value:"6px"}]},{markerName:"Line",markerTypes:[{name:"—",value:"straight"},{name:"/",value:"oblique"}],markerColors:[{name:"🟡",value:"yellow"},{name:"🔴",value:"red"},{name:"🟢",value:"green"},{name:"🔵",value:"blue"}],markerSizes:[{name:"S",value:"2px"},{name:"M",value:"4px"},{name:"L",value:"6px"}]}],markers:[],timelaps:!1},mutations:{addMarker:function(e,t){e.markers.push(t)},removeMarker:function(e,t){e.markers.splice(t,1)},toogleTimelaps:function(e){e.timelaps=!e.timelaps}},getters:{getSortOptions:function(e){return e.sortBy},getYears:function(e){return e.years},getMonths:function(e){return e.months},getMarkerOptions:function(e){return e.markerOptions},getMarkers:function(e){return e.markers},getTimelaps:function(e){return e.timelaps}},actions:{addMarker:function(e,t){e.commit("addMarker",t)},removeMarker:function(e,t){e.commit("removeMarker",t)},toogleTimelaps:function(e){e.commit("toogleTimelaps")}},modules:{}}),ue=n("14b7"),be=Object(ue["a"])(),pe=Object(a["b"])(ce);pe.config.globalProperties.emitter=be,pe.use(ie),pe.mount("#app")},6872:function(e,t,n){"use strict";n("94de")},"78e2":function(e,t,n){"use strict";n("c8f1")},"7f57":function(e,t,n){},"94de":function(e,t,n){},a9f1:function(e,t,n){},c8f1:function(e,t,n){},d3df:function(e,t,n){"use strict";n("a9f1")}});
//# sourceMappingURL=app.163b2127.js.map