(this["webpackJsonpreact-homework"]=this["webpackJsonpreact-homework"]||[]).push([[0],{30:function(e,t,n){},32:function(e,t,n){e.exports=n(52)},37:function(e,t,n){},38:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(19),c=n.n(r),u=(n(37),n(6)),o=n(8),i=(n(38),n(1)),m=n(2),s=n(4),h=n(3),E=n(14),b=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,"ReduxPage")}}]),n}(a.Component);var d=Object(E.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}}));d.subscribe((function(){console.warn("\u76ee\u524d\u7684\u72c0\u614b",d.getState())}));var v=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"use react router"),l.a.createElement(u.b,{to:"/HW1Counter"},"HW1Counter"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW2CounterList"},"HW2CounterList"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW3CounterSum"},"HW3CounterSum"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW4Bmi"},"HW4Bmi"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW5ItemList"},"HW5ItemList"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW6RemovableList"},"HW6RemovableList"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW7PersonTable"},"HW7PersonTable"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW8SumForButton"},"HW8SumForButton"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW9HappyNewYear"},"HW9HappyNewYear"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW10Currency"},"HW10Currency"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW11ColorPad"},"HW11ColorPad"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW12Tab"},"HW12Tab"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW13TodoList"},"HW13TodoList"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW14Pokemon"},"HW14Pokemon"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW15LengthConversion"},"HW15LengthConversion"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW16NumberGame"},"HW16NumberGame"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW17RandomNum"},"HW17RandomNum"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW18TwinkingChar"},"HW18TwinkingChar"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW19Gopher"},"HW19Gopher"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW20GuessNum"},"HW20GuessNum"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW21XaXb"},"HW21XaXb"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW22Cart"},"HW22Cart"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW23SunMoon"},"HW23SunMoon"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW24Lottery"},"HW24Lottery"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW25Modal"},"HW25Modal"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW26Tooltip"},"HW26Tooltip"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/HW27Carousel"},"HW27Carousel"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/TodoList3"},"TodoList3"),l.a.createElement("br",null))}}]),n}(a.Component),p=n(5);function f(){var e=Object(a.useState)(0),t=Object(p.a)(e,2),n=t[0],r=t[1];return l.a.createElement("div",null,l.a.createElement("h1",null,"HW1Counter"),l.a.createElement("button",{onClick:function(){r(n+1)}},"click me : ",n))}var g=n(9);function O(){var e=Object(a.useState)(0),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),u=Object(p.a)(c,2),o=u[0],i=u[1];return l.a.createElement("div",null,l.a.createElement("h1",null,"HW2CounterList"),l.a.createElement("button",{onClick:function(){r(n+1),i([n+1].concat(Object(g.a)(o)))}},"click me"),l.a.createElement("ul",null,o.map((function(e){return l.a.createElement("li",{key:e},e)}))))}function C(){var e=Object(a.useState)(0),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(0),u=Object(p.a)(c,2),o=u[0],i=u[1];return l.a.createElement("div",null,l.a.createElement("h1",null,"HW3CounterSum"),l.a.createElement("button",{onClick:function(){r(n+1),i(o+n)}},"add"),l.a.createElement("br",null),o)}function j(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),u=Object(p.a)(c,2),o=u[0],i=u[1],m=Object(a.useState)(""),s=Object(p.a)(m,2),h=s[0],E=s[1];return l.a.createElement("div",null,l.a.createElement("h1",null,"HW4Bmi"),l.a.createElement("span",null,"\u8eab\u9ad8"),l.a.createElement("input",{name:"cm",value:n,type:"text",onChange:function(e){var t=e.target;return r(t.value)}}),l.a.createElement("br",null),l.a.createElement("span",null,"\u9ad4\u91cd"),l.a.createElement("input",{name:"kg",value:o,type:"text",onChange:function(e){var t=e.target;return i(t.value)}}),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){return E(Math.floor(o/Math.pow(n/100,2)))}},"\u8a08\u7b97"),"BMI : ",h)}function S(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),u=Object(p.a)(c,2),o=u[0],i=u[1];return l.a.createElement("div",null,l.a.createElement("h1",null,"HW5ItemList"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i([n].concat(Object(g.a)(o))),r("")}},l.a.createElement("input",{type:"text",value:n,onChange:function(e){var t=e.target;return r(t.value)}})),l.a.createElement("ul",null,o.map((function(e){return l.a.createElement("li",{key:e},e)}))))}function y(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),u=Object(p.a)(c,2),o=u[0],i=u[1];return l.a.createElement("div",null,l.a.createElement("h1",null,"HW6RemovableList"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i([n].concat(Object(g.a)(o))),r("")}},l.a.createElement("input",{type:"text",value:n,onChange:function(e){var t=e.target;return r(t.value)}})),l.a.createElement("ul",null,o.map((function(e,t){return l.a.createElement("li",{key:t},e,l.a.createElement("button",{onClick:function(){return i.bind(t)([].concat(Object(g.a)(o.slice(0,t)),Object(g.a)(o.slice(t+1))))}},"Clear it!"))}))))}function k(e){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{src:e.picture,alt:""})),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.gender),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.age),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.country))}function H(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1],c=function(){fetch("https://randomuser.me/api/?results=25").then((function(e){return e.json()})).then((function(e){var t=e.results;r(t)}))};return Object(a.useEffect)((function(){c()}),[]),l.a.createElement("div",null,l.a.createElement("h1",null,"HW7PersonTable"),l.a.createElement("button",{onClick:function(){c()}},"\u6293\u53d6\u8cc7\u6599 "),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"picture"),l.a.createElement("th",null,"name"),l.a.createElement("th",null,"gender"),l.a.createElement("th",null,"email"),l.a.createElement("th",null,"age"),l.a.createElement("th",null,"phone"),l.a.createElement("th",null,"country"))),l.a.createElement("tbody",null,n.map((function(e){return l.a.createElement(k,{key:e.login.uuid,picture:e.picture.medium,name:e.name.last,gender:e.gender,email:e.email,age:e.dob.age,phone:e.phone,country:e.location.country})})))))}function W(){var e=Object(a.useState)(0),t=Object(p.a)(e,2),n=t[0],r=t[1];return l.a.createElement("div",null,l.a.createElement("h1",null,"HW8SumForButton"),[1,2,3,4,5,6,7,8,9].map((function(e){return l.a.createElement("button",{key:e,onClick:function(){return r(n+e)}},e)})),l.a.createElement("div",null,"\u52a0\u7e3d\u503c : ",n))}var N=+new Date("2021/01/01 00:00:00");function w(){var e=Object(a.useState)({date:+new Date,countDown:Math.floor((N-+new Date)/1e3)}),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Math.floor(n.countDown/86400),u=Math.floor(n.countDown%86400/3600),o=Math.floor(n.countDown%3600/60),i=n.countDown%60;return Object(a.useEffect)((function(){setInterval((function(){r({countDown:Math.floor((N-+new Date)/1e3)})}),1e3)}),[]),l.a.createElement("div",null,l.a.createElement("h1",null,"HW9HappyNewYear"),l.a.createElement("h1",null,"\u8ddd\u96e22021\u8de8\u5e74\u9084\u6709 : ",c,"\u5929 ",u,"\u6642 ",o,"\u5206 ",i,"\u79d2"))}function x(){var e=Object(a.useState)(0),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),u=Object(p.a)(c,2),o=u[0],i=u[1],m=function(e){var t=e.target;r(t.value),i(t.name)},s="twd"===o?n:30*n,h="usd"===o?n:n/30;return l.a.createElement("div",null,l.a.createElement("h1",null,"HW10Currency"),l.a.createElement("h1",null,"\u8ca8\u5e63\u8f49\u63db"),"TWD",l.a.createElement("input",{type:"text",name:"twd",value:s,onChange:m}),l.a.createElement("br",null),"USD",l.a.createElement("input",{type:"text",name:"usd",value:h,onChange:m}))}var L=n(16),T=n(27);function M(){var e=Object(a.useState)({r:0,g:150,b:150}),t=Object(p.a)(e,2),n=t[0],r=t[1],c=function(e,t){var a=t.target;r(Object(T.a)(Object(T.a)({},n),{},Object(L.a)({},e,a.value)))};return l.a.createElement("div",null,l.a.createElement("h1",null,"HW11ColorPad"),l.a.createElement("h1",null,"\u8abf\u8272\u76e4"),l.a.createElement("div",{style:{width:"200px",height:"200px",margin:"0 auto",backgroundColor:"rgb(".concat(n.r,",").concat(n.g,",").concat(n.b,")")}}),"R",l.a.createElement("input",{type:"range",min:"0",max:"255",onChange:c.bind(this,"r")}),n.r,l.a.createElement("br",null),"G",l.a.createElement("input",{type:"range",min:"0",max:"255",onChange:c.bind(this,"g")}),n.g,l.a.createElement("br",null),"B",l.a.createElement("input",{type:"range",min:"0",max:"255",onChange:c.bind(this,"b")}),n.b,l.a.createElement("br",null))}var D=["lorem 1","lorem 2","lorem 3","lorem 4","lorem 5"];function A(){var e=this,t=Object(a.useState)(0),n=Object(p.a)(t,2),r=n[0],c=n[1],u=function(e){c(e)};return l.a.createElement("div",null,l.a.createElement("h1",null,"HW12Tab"),l.a.createElement("h1",null,"\u6a19\u7c64"),["tab1","tab2","tab3","tab4","tab5"].map((function(t,n){return l.a.createElement("div",{key:n,onClick:u.bind(e,n),style:{display:"inline-block",width:"50px",height:"25px",border:"1px solid black"}},t)})),l.a.createElement("br",null),D[r])}n(44);function I(){var e=this,t=Object(a.useState)([]),n=Object(p.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)(""),o=Object(p.a)(u,2),i=o[0],m=o[1],s=function(e){var t=Object(g.a)(r);r[e].done=!r[e].done,c(t)};return l.a.createElement("div",null,l.a.createElement("h1",null,"HW13TodoList"),l.a.createElement("h1",null,"\u4ee3\u8fa6\u4e8b\u9805"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c([{content:i,done:!1}].concat(Object(g.a)(r))),m("")}},l.a.createElement("input",{type:"text",value:i,placeholder:"add something ?",onChange:function(e){var t=e.target;return m(t.value)}}),l.a.createElement("button",null,"save")),r.map((function(t,n){return l.a.createElement("div",{key:n},l.a.createElement("label",{className:t.done?"clear":"",onClick:s.bind(e,n)},t.content))})))}function _(e){var t=e.url.slice(34,-1);return l.a.createElement("div",null,l.a.createElement("span",null,e.name),l.a.createElement("img",{src:"".concat("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/").concat(t,".png"),alt:""}))}var B=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target;e.setState({value:n.value})},e.state={pokemonList:[],value:""},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon/?limit=100").then((function(e){return e.json()})).then((function(t){return e.setState({pokemonList:t.results})}))}},{key:"render",value:function(){var e=this.state,t=e.pokemonList,n=e.value,a=[];return a=t.filter((function(e){return e.name.toLowerCase().indexOf(n.toLowerCase())>-1})),l.a.createElement("div",null,l.a.createElement("h2",null,"\u9806\u5229\u6293\u53d6 100 \u96bb\u5bf6\u53ef\u5922\u7684\u540d\u5b57\u8207\u5716\u7247"),l.a.createElement("h2",null,"\u53ef\u4ee5\u4f9d\u540d\u5b57\u7be9\u9078\u51fa\u5bf6\u53ef\u5922"),l.a.createElement("span",null,l.a.createElement("b",null,"keyword")),l.a.createElement("input",{type:"text",placeholder:"name...",keyword:n,onChange:this.handleChange}),a.map((function(e){return l.a.createElement(_,{key:e.name,name:e.name,url:e.url})})))}}]),n}(a.Component),R=function(){return Math.floor(10*Math.random())},P=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target,a=e.state.random,l=+n.value===a?"bingoCount":"failCount";e.setState(Object(L.a)({random:R()},l,e.state[l]+1))},e.state={random:R(),bingoCount:0,failCount:0,value:""},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.random,n=e.bingoCount,a=e.failCount,r=e.value;return l.a.createElement("h1",null,t,l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:r,onChange:this.handleChange}),l.a.createElement("div",null,"\u7b54\u5c0d: ",n),l.a.createElement("div",null,"\u7b54\u932f: ",a))}}]),n}(a.Component),G=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).numChange=function(){e.setState({num:Math.floor(9*Math.random()+1)})},e.state={num:""},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){setInterval(this.numChange,Math.floor(501*Math.random())+500)}},{key:"render",value:function(){var e=this.state.num;return l.a.createElement("div",null,l.a.createElement("h1",null,"\u8acb\u8a2d\u5b9a\u4e00\u500b\u6703\u96a8\u6a5f\u8b8a\u5316\u7684\u6578\u5b57(1~9)"),l.a.createElement("h2",null,"\u6bcf\u6b21\u8b8a\u7684\u6642\u9593\u4ecb\u65bc 500ms ~ 1000ms \u4e4b\u9593"),l.a.createElement("h1",null,e))}}]),n}(a.Component),V=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target,a=e.state,l=a.hideAndSeeNum,r=a.count,c=n.value.toUpperCase()===l?1:-1;e.setState({count:r+c,hideAndSeeNum:"-"})},e.changeNum=function(){var t="Q"===e.state.hideAndSeeNum?"-":"Q";e.setState({hideAndSeeNum:t})},e.state={count:0,hideAndSeeNum:"Q"},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){setInterval(this.changeNum,Math.floor(5001*Math.random())+1e3)}},{key:"render",value:function(){var e=this.state,t=e.count,n=e.hideAndSeeNum;return l.a.createElement("div",null,l.a.createElement("h1",null,n),l.a.createElement("h1",null,"\u5206\u6578 : ",t),l.a.createElement("h2",null,"\u51fa\u73feQ\u6309Q"),l.a.createElement("input",{type:"text",value:"",onChange:this.handleChange,placeholder:"todo..."}))}}]),n}(a.Component),F=(n(45),function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).tick=function(){setTimeout((function(){e.changeNum(),e.tick()}),Math.floor(2e3*Math.random())+2e3)},e.changeNum=function(){e.setState({mouse:!e.state.mouse})},e.handleClick=function(){e.props.changeCount(e.state.mouse?1:-1),e.setState({mouse:!1})},e.state={mouse:!Math.floor(2*Math.random())},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.tick()}},{key:"render",value:function(){return l.a.createElement("button",{className:"GopherButton",onClick:this.handleClick},l.a.createElement("h1",null,this.state.mouse?"G":"-"))}}]),n}(a.Component)),X=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).changeCount=function(t){e.setState({count:e.state.count+t})},e.state={count:0},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state.count;return l.a.createElement("div",null,l.a.createElement("h1",null,e),l.a.createElement(F,{changeCount:this.changeCount}),l.a.createElement(F,{changeCount:this.changeCount}),l.a.createElement(F,{changeCount:this.changeCount}),l.a.createElement("br",null),l.a.createElement(F,{changeCount:this.changeCount}),l.a.createElement(F,{changeCount:this.changeCount}),l.a.createElement(F,{changeCount:this.changeCount}),l.a.createElement("br",null),l.a.createElement(F,{changeCount:this.changeCount}),l.a.createElement(F,{changeCount:this.changeCount}),l.a.createElement(F,{changeCount:this.changeCount}))}}]),n}(a.Component),Y=(n(30),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return Math.floor(Math.random()*(t-e+1))+e}),q=function(){return{value:"",minValue:1,maxValue:1e3,hideAndSee:!1,bingoNum:Y(1,1e3)}},Q=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target.value;e.setState({value:n})},e.handleSubmit=function(t){t.preventDefault();var n=e.state.bingoNum,a=+e.state.value,l={value:""};n>a?l.minValue=a:n<a?l.maxValue=a:l.hideAndSee=!0,console.warn(l),e.setState(l)},e.reBingoNum=function(){e.setState(q())},e.state=q(),e}return Object(m.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"\u73fe\u5728\u7bc4\u570d :",this.state.minValue," ~ ",this.state.maxValue),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange,disabled:this.state.hideAndSee}),l.a.createElement("button",{disabled:this.state.hideAndSee},"submit")),l.a.createElement("div",{className:this.state.hideAndSee?"see":"hide"},"\u7b54\u5c0d\u4e86!\u7b54\u6848\u5c31\u662f",this.state.bingoNum,l.a.createElement("button",{onClick:this.reBingoNum},"\u91cd\u65b0\u4e00\u5c40")))}}]),n}(a.Component),U=["0","1","2","3","4","5","6","7","8","9"];U.sort((function(){return Math.random()-.5}));var $=U.slice(0,4),J=function(e,t){for(var n=0,a=0,l=0;l<4;l++)e[l]===t[l]?n+=1:e[l]!==t[0]&&e[l]!==t[1]&&e[l]!==t[2]&&e[l]!==t[3]||(a+=1);return n+"A"+a+"B"},z=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target;e.setState({value:n.value})},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.value,l=n.xaxbList,r=n.bingoNum;if(4!==a.length||function(e){for(var t=0;t<4;t++)if(e[t]===e[t+1])return!0}(a.split("").sort()))return alert("\u683c\u5f0f\u4e0d\u6b63\u78ba");e.setState({xaxbList:["".concat(a,": ").concat(J(a,r))].concat(Object(g.a)(l)),value:""}),"4A0B"===J(a,r)&&e.setState({hideAndSee:!0})},e.replay=function(){e.setState({bingoNum:U.sort((function(){return Math.random()-.5})).slice(0,4),xaxbList:[],hideAndSee:!1})},e.state={bingoNum:$,value:"",xaxbList:[],hideAndSee:!1},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.value,n=e.xaxbList,a=e.bingoNum,r=e.hideAndSee;console.warn(a);var c=n.map((function(e,t){return l.a.createElement("li",{key:t},e)}));return l.a.createElement("div",null,l.a.createElement("h1",null,"\u731c\u6578\u5b57"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u4e00\u9032\u5230\u904a\u6232\u96fb\u8166\u96a8\u6a5f\u7522\u751f4\u4f4d\u4e0d\u91cd\u8907\u6578\u5b57"),l.a.createElement("li",null,"\u4f7f\u7528\u8005\u9001\u51fa\u7b54\u6848\uff0c\u82e5\u4e0d\u7b26\u5408\u300c\u4e0d\u91cd\u89074\u4f4d\u6578\u5b57\u300d\u5247\u8df3\u932f\u8aa4\u8a0a\u606f"),l.a.createElement("li",null,"\u9001\u51fa\u7684\u7b54\u6848\u8ddf\u6b63\u78ba\u7b54\u6848\u6bd4\u8f03\uff0c\u4f4d\u7f6e\u4e00\u6a23\u5247A\uff0c\u4f4d\u7f6e\u4e0d\u540c\u5247B"),l.a.createElement("li",null,"\u6703\u7d2f\u7a4d\u904e\u53bb\u731c\u904e\u7684\u7b54\u6848\u8207\u7d50\u679c"),l.a.createElement("li",null,"\u5982\u679c\u731c\u5230 4A \u5247\u904a\u6232\u7d50\u675f\uff0c\u4e26\u53ef\u4ee5\u53e6\u958b\u65b0\u5c40\u3002")),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",value:t,disabled:r,onChange:this.handleChange}),l.a.createElement("button",{disabled:r},"\u731c!")),l.a.createElement("div",{className:r?"see":"hide"},"bingo ! game over \uff0c replay?",l.a.createElement("button",{onClick:this.replay},"Yes")),l.a.createElement("ol",null,c))}}]),n}(a.Component),K=(n(46),function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.props.fruitName,e.state.value),e.setState({value:""})},e.handleChange=function(t){var n=t.target;e.setState({value:+n.value})},e.state={value:0},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.price;return l.a.createElement("div",null,l.a.createElement("span",null,t),l.a.createElement("span",null,"$",n),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{type:"number",onChange:this.handleChange,value:this.state.value,placeholder:"\u6578\u91cf"}),l.a.createElement("button",null,"\u52a0\u5165\u8cfc\u7269\u8eca")))}}]),n}(l.a.Component)),Z={orange:{name:"\u6a58\u5b50",price:20},waxApple:{name:"\u84ee\u9727",price:30},cantaloupe:{name:"\u54c8\u871c\u74dc",price:40},apple:{name:"\u860b\u679c",price:50},grapeFruit:{name:"\u8461\u8404\u67da",price:15}},ee=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleSubmit=function(t,n){var a=Z[t].price*n,l=e.state.fruitCount;l[t]+=n,e.setState({value:"",sum:e.state.sum+a,fruitCount:l})},e.handleLess=function(t){var n=e.state,a=n.fruitCount,l=n.sum;a[t]-=1,e.setState({fruitCount:a,sum:l-1*Z[t].price})},e.handleClear=function(t){var n=e.state,a=n.fruitCount,l=n.sum;e.setState({sum:l-Z[t].price*a[t]}),a[t]=0,e.setState({fruitCount:a})},e.state={value:"",sum:0,fruitCount:{orange:0,waxApple:0,cantaloupe:0,apple:0,grapeFruit:0}},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.state.fruitCount,n=Object.keys(Z).filter((function(e){return t[e]>0})).map((function(n){return l.a.createElement("li",{key:Z[n].name},Z[n].name," *",t[n]," =",Z[n].price*t[n],l.a.createElement("button",{onClick:e.handleLess.bind(e,n)},"-1"),l.a.createElement("button",{onClick:e.handleClear.bind(e,n)},"clear"))}));return l.a.createElement("div",null,Object.keys(Z).map((function(t){return l.a.createElement(K,{count:e.state.fruitCount,onSubmit:e.handleSubmit,key:Z[t].name,name:Z[t].name,price:Z[t].price,fruitName:t})})),l.a.createElement("ul",null,n,!!this.state.sum&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,"========"),l.a.createElement("li",null,"$",this.state.sum))))}}]),n}(a.Component),te=(n(47),function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleClick=function(){e.setState({isMorning:!e.state.isMorning})},e.state={isMorning:!0},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state.isMorning;return l.a.createElement("div",{className:"sky "+(e?"morn":"night")},l.a.createElement("div",null,"\u8acb\u4ed4\u7d30\u89c0\u5bdf\u592a\u967d\u8207\u6708\u4eae\u7684\u4f4d\u7f6e\uff0c\u300c\u5fc5\u9808\u300d\u5c0d\u6e96\u6b63\u4e2d\u592e",l.a.createElement("button",{onClick:this.handleClick},"\u5207\u63db\u6210 ",e?"\u665a\u4e0a":"\u65e9\u4e0a")),l.a.createElement("img",{className:"img "+(e?"middle":"top"),src:"https://img.icons8.com/cotton/256/000000/sun--v1.png",alt:"sum"}),l.a.createElement("img",{className:"img "+(e?"bottom":"middle"),src:"https://img.icons8.com/cotton/256/000000/moon-satellite.png",alt:"moon"}))}}]),n}(a.Component));n(48);function ne(e){var t=function(t){t.target!==document.getElementById("modal-bg")&&t.target!==document.getElementById("button")||e.onClick()},n="modal-content";return e.isTop&&(n+=" top"),e.isAnimation&&(n+=" animation"),l.a.createElement("div",{className:"modal-bg",onClick:t,id:"modal-bg"},l.a.createElement("div",{className:n},e.header&&l.a.createElement("h2",null,e.header),e.children,l.a.createElement("br",null),l.a.createElement("button",{id:"button",onClick:t},"\u95dc\u9589")))}var ae=[{},{isTop:!0},{header:"My Header"},{isTop:!0,isAnimation:!0},{isAnimation:!0}],le=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleClick=function(t){e.setState({isShow:!e.state.isShow,nowProps:ae[t]})},e.state={isShow:!1},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=["modal","top","header","top + animation","animation"].map((function(t,n){return l.a.createElement("button",{onClick:e.handleClick.bind(e,n),className:"button",key:n},t)}));return l.a.createElement("div",null,t,this.state.isShow&&l.a.createElement("div",null,l.a.createElement(ne,Object.assign({},this.state.nowProps,{onClick:this.handleClick}),"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex vel in nam sint dolorum, eligendi delectus, dolor quos eum magni facere nemo fuga distinctio. Magni possimus aspernatur corrupti impedit laborum!")))}}]),n}(a.Component);n(49);function re(e){return l.a.createElement("span",{className:"tooltip-wrapper"},e.children,l.a.createElement("div",{className:"tooltip ".concat(e.at)},e.text))}var ce=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={},e}return Object(m.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(re,{at:"top",text:"\u6211\u5728\u4e0a\u9762"},l.a.createElement("button",{className:"btn"},"top")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(re,{at:"right",text:"\u6211\u5728\u53f3\u908a"},l.a.createElement("button",{className:"btn"},"right")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(re,{at:"left",text:"\u6211\u5728\u5de6\u908a"},l.a.createElement("button",{className:"btn"},"left")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(re,{at:"bottom",text:"\u6211\u5728\u4e0b\u9762"},l.a.createElement("button",{className:"btn"},"bottom")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),"Lorem",l.a.createElement(re,{at:"top",text:"\u6211\u5728\u4e0a\u9762"},l.a.createElement("span",{style:{color:"red"}},"ipsum")),"dolor sit amet consectetur adipisicing elit. Temporibus nostrum atque similique voluptatum laborum soluta ad. Repellendus laborum ratione dignissimos aut quas necessitatibus ut officiis fuga quis odit, labore",l.a.createElement(re,{at:"bottom",text:"\u6211\u5728\u4e0b\u9762"},l.a.createElement("span",{style:{color:"red"}},"vero.")))}}]),n}(a.Component),ue=(n(50),function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={itemList:e.children},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){setTimeout((function(){var t=e.state.itemList;e.setState({itemList:t.slice(1).concat(t[0]),isMoving:!1})}),500),e.setState({isMoving:!0})}),1500)}},{key:"render",value:function(){var e=this.state,t=e.itemList,n=e.isMoving;return l.a.createElement("div",{className:"carousel"},l.a.createElement("div",{className:"item ".concat(n?"hide ":"")},t[0]),l.a.createElement("div",{className:"item ".concat(n?"show ":"")},t[1]))}}]),n}(a.Component)),oe=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(ue,{time:1500},l.a.createElement("div",{style:{backgroundColor:"red",height:"100%"}},"1"),l.a.createElement("div",{style:{backgroundColor:"green",height:"100%"}},"2"),l.a.createElement("div",{style:{backgroundColor:"blue",height:"100%"}},"3")))}}]),n}(a.Component),ie="SHOW_ALL";var me=Object(E.b)({visibilityFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(g.a)(e),[{text:t.text,completed:!1}]);case"TOGGLE_TODO":var n=Object(g.a)(e);return n[t.index].completed=!e[t.index].completed,n;case"REMOVE_TODO":return e.filter((function(e,n){return n!==t.index}));default:return e}}}),se=n(22),he=(n(51),function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target;e.setState({value:n.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.add(e.state.value),e.setState({value:""})},e.handleToggle=function(t){e.props.toggle(t),e.setState({isDone:!e.state.isDone})},e.handleRemove=function(t){e.props.remove(t)},e.state={value:"",isDone:!1},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return console.warn(this.props),l.a.createElement("div",null,l.a.createElement("select",{name:"",id:""},l.a.createElement("option",null,"\u5168\u90e8"),l.a.createElement("option",null,"\u5df2\u5b8c\u6210"),l.a.createElement("option",null,"\u672a\u5b8c\u6210")),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange}),l.a.createElement("button",null,"\u6309\u6211")),l.a.createElement("ul",null,this.props.todos.map((function(t,n){return l.a.createElement("li",{key:n},l.a.createElement("div",{className:t.completed?"through":"",onClick:e.handleToggle.bind(e,n)},t.text),l.a.createElement("button",{onClick:e.handleRemove.bind(e,n)},"\u79fb\u9664"))}))))}}]),n}(a.Component)),Ee=Object(se.b)((function(e){return{filter:e.VisibilityFilter,todos:e.todos}}),(function(e){return{add:function(t){return e(function(e){return{type:"ADD_TODO",text:e}}(t))},toggle:function(t){return e(function(e){return{type:"TOGGLE_TODO",index:e}}(t))},remove:function(t){return e(function(e){return{type:"REMOVE_TODO",index:e}}(t))},setFilter:function(t){return e(function(e){return{type:"SET_VISIBILITY_FILTER",filter:e}}(t))}}}))(he),be=Object(E.c)(me,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),de=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return l.a.createElement(se.a,{store:be},l.a.createElement(Ee,null))}}]),n}(a.Component);var ve=function(){return l.a.createElement(u.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/HW1Counter"},l.a.createElement(f,null)),l.a.createElement(o.a,{path:"/HW2CounterList"},l.a.createElement(O,null)),l.a.createElement(o.a,{path:"/HW3CounterSum"},l.a.createElement(C,null)),l.a.createElement(o.a,{path:"/HW4Bmi"},l.a.createElement(j,null)),l.a.createElement(o.a,{path:"/HW5itemList"},l.a.createElement(S,null)),l.a.createElement(o.a,{path:"/HW6RemovableList"},l.a.createElement(y,null)),l.a.createElement(o.a,{path:"/HW7PersonTable"},l.a.createElement(H,null)),l.a.createElement(o.a,{path:"/HW8SumForButton"},l.a.createElement(W,null)),l.a.createElement(o.a,{path:"/HW9HappyNewYear"},l.a.createElement(w,null)),l.a.createElement(o.a,{path:"/HW10Currency"},l.a.createElement(x,null)),l.a.createElement(o.a,{path:"/HW11ColorPad"},l.a.createElement(M,null)),l.a.createElement(o.a,{path:"/HW12Tab"},l.a.createElement(A,null)),l.a.createElement(o.a,{path:"/HW13TodoList"},l.a.createElement(I,null)),l.a.createElement(o.a,{path:"/HW14Pokemon"},l.a.createElement(B,null)),l.a.createElement(o.a,{path:"/HW16NumberGame"},l.a.createElement(P,null)),l.a.createElement(o.a,{path:"/HW17RandomNum"},l.a.createElement(G,null)),l.a.createElement(o.a,{path:"/HW18TwinkingChar"},l.a.createElement(V,null)),l.a.createElement(o.a,{path:"/HW19Gopher"},l.a.createElement(X,null)),l.a.createElement(o.a,{path:"/HW20GuessNum"},l.a.createElement(Q,null)),l.a.createElement(o.a,{path:"/HW21XaXb"},l.a.createElement(z,null)),l.a.createElement(o.a,{path:"/HW22Cart"},l.a.createElement(ee,null)),l.a.createElement(o.a,{path:"/HW23SunMoon"},l.a.createElement(te,null)),l.a.createElement(o.a,{path:"/HW25Modal"},l.a.createElement(le,null)),l.a.createElement(o.a,{path:"/HW26Tooltip"},l.a.createElement(ce,null)),l.a.createElement(o.a,{path:"/HW27Carousel"},l.a.createElement(oe,null)),l.a.createElement(o.a,{path:"/ReduxPage"},l.a.createElement(b,null)),l.a.createElement(o.a,{path:"/TodoList3"},l.a.createElement(de,null)),l.a.createElement(o.a,{path:"/"},l.a.createElement(v,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.85058e36.chunk.js.map