(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),s=a(1),o=a(2),i=a(4),u=a(3),d=a(5),m=(a(16),a(6)),h=a(7),p=a.n(h),f=a(9),v=function(){function e(){Object(s.a)(this,e)}return Object(o.a)(e,null,[{key:"getRequest",value:function(){var e=Object(f.a)(p.a.mark(function e(t){var a,n,r,c=arguments;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=!(c.length>1&&void 0!==c[1])||c[1],e.prev=1,n=!0===a?"https://swapi.co/api"+t:t,e.next=5,fetch(n);case 5:if(!0!==(r=e.sent).ok){e.next=12;break}return e.next=9,r.json();case 9:return e.abrupt("return",e.sent);case 12:return console.error(r.url+" "+r.status+": "+r.statusText),e.abrupt("return");case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.error(e.t0);case 19:case"end":return e.stop()}},e,this,[[1,16]])}));return function(t){return e.apply(this,arguments)}}()}]),e}();var _=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={films:[]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.urls,t=[];e.forEach(function(){var e=Object(f.a)(p.a.mark(function e(a){var n=this;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getRequest(a,!1).then(function(e){t=t.concat(e)}).then(function(){n.setState({films:t})});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}().bind(this))}},{key:"render",value:function(){var e=this.state.films;return r.a.createElement(r.a.Fragment,null,r.a.createElement("dt",null,"Films"),r.a.createElement("div",{className:"card__inner-row"},e.length?e.map(function(e){return r.a.createElement("dd",{key:e.episode_id},e.title)}):r.a.createElement("dd",null,"None")))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={planet:null},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.chosenCard;v.getRequest("/planets/"+t+"/").then(function(t){e.setState({planet:t})})}},{key:"render",value:function(){var e=this.state.planet;return r.a.createElement("div",{className:"card",id:"card"},e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"card__title"},e.name),r.a.createElement("dl",{className:"card__list"},r.a.createElement("div",{className:"card__row"},r.a.createElement("dt",null,"Climate"),r.a.createElement("dd",null,e.climate)),r.a.createElement("div",{className:"card__row"},r.a.createElement("dt",null,"Terrain"),r.a.createElement("dd",null,e.terrain)),r.a.createElement("div",{className:"card__row"},r.a.createElement("dt",null,"Surface water"),r.a.createElement("dd",null,e.surface_water)),r.a.createElement("div",{className:"card__row"},r.a.createElement("dt",null,"Population"),r.a.createElement("dd",null,e.population)),r.a.createElement("div",{className:"card__row"},e.population.length&&r.a.createElement(_,{urls:e.films})))))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={planetCount:null,chosenCard:null,chosenPlanet:null,spin:!0},a.handleCardClick=a.handleCardClick.bind(Object(m.a)(Object(m.a)(a))),a.handleButtonClick=a.handleButtonClick.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.getRequest("/planets/").then(function(t){e.setState({planetCount:t.count})})}},{key:"componentDidUpdate",value:function(){var e=this.state.chosenCard,t=this.state.chosenPlanet;if(e&&t)for(var a=0;a<e.children.length;a++)"lottery__card-front"===e.children[a].className&&l.a.render(r.a.createElement(b,{chosenCard:t}),e.children[a])}},{key:"handleCardClick",value:function(e){if(!0===this.state.spin){this.setState({spin:!1});for(var t=e.currentTarget,a=document.getElementsByClassName("lottery__card"),n=0;n<a.length;n++)a[n]===t?(this.setState({chosenCard:a[n]}),a[n].classList.add("lottery__card--selected")):a[n].classList.add("lottery__card--stop");this.setState({chosenPlanet:(r=1,c=this.state.planetCount,r=Math.ceil(r),c=Math.floor(c),Math.floor(Math.random()*(c-r+1))+r)})}var r,c}},{key:"handleButtonClick",value:function(){var e=this.state.chosenCard;if(!1===this.state.spin&&e){for(var t=document.getElementsByClassName("lottery__card"),a=0;a<e.children.length;a++)"lottery__card-front"===e.children[a].className&&l.a.unmountComponentAtNode(e.children[a]);this.setState({chosenPlanet:null,spin:!0});for(var n=0;n<t.length;n++)t[n].classList.remove("lottery__card--selected"),t[n].classList.remove("lottery__card--stop")}}},{key:"render",value:function(){var e=this,t=function(){for(var e=this,t=[],a=0;a<3;a++)t[a]=r.a.createElement("div",{key:a,className:"lottery__card lottery__card--spin",onClick:function(t){return e.handleCardClick(t)}},r.a.createElement("div",{className:"lottery__card-back"}),r.a.createElement("div",{className:"lottery__card-front"}));return t}.bind(this);return r.a.createElement("div",{className:"lottery"},r.a.createElement("div",{className:"lottery__wrapper"},r.a.createElement("div",{className:"lottery__container"},t())),!1===this.state.spin&&r.a.createElement("button",{className:"button",title:"Spin again",action:"stop",onClick:function(){return e.handleButtonClick()}},"Spin again"))}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"Galactic Empire's Planetary Lottery")),r.a.createElement("main",{className:"main"},r.a.createElement(E,null)),r.a.createElement("footer",{className:"footer"},r.a.createElement("span",null,"by")," ",r.a.createElement("a",{href:"https://github.com/glauberm",target:"_blank",rel:"noopener noreferrer"},"Glauber Mota")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.9abe6125.chunk.js.map