(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(4),r=n.n(a),o=(n(14),n(7)),s=n(5),i=n(6),l=n(9),h=n(8),d=n(0),b=function(e){var t=e.id,n=e.name,c=e.email;return Object(d.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(d.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"200x200")}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:n}),Object(d.jsx)("p",{children:c})]})]})},u=function(e){var t=e.robots;return Object(d.jsx)(d.Fragment,{children:t.map((function(e,t){return Object(d.jsx)(b,{id:e.id,name:e.name,email:e.email},t)}))})},j=(n(3),function(e){var t=e.type,n=e.placeholder,c=e.onChange;e.isRequired;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:t,placeholder:n,onChange:c})})}),f=function(e){return Object(d.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},g=(n(16),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.onAddChange=function(t){e.setState({addfield:t.target.value})},e.onClick=function(t){var n=e.state,c=n.robots,a=n.addfield;if((a=a.trim()).length){var r={id:c.length+1,name:a,username:a,email:a+"@gmail.com"};e.setState({robots:[].concat(Object(o.a)(c),[r])})}},e.state={robots:[],searchfield:"",addfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(d.jsx)(j,{type:"search",placeholder:"search",onChange:this.onSearchChange}),Object(d.jsx)(j,{type:"text",placeholder:"add",onChange:this.onAddChange}),Object(d.jsx)("button",{onClick:this.onClick,children:"Add"}),Object(d.jsx)(f,{children:Object(d.jsx)(u,{robots:c})})]}):Object(d.jsx)("h1",{className:"tc",children:"Loading"})}}]),n}(c.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};r.a.render(Object(d.jsx)(g,{}),document.getElementById("root")),p()}},[[17,1,2]]]);
//# sourceMappingURL=main.abc6577e.chunk.js.map