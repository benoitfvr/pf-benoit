(function(t){function e(e){for(var i,r,c=e[0],o=e[1],l=e[2],d=0,p=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,c=1;c<s.length;c++){var o=s[c];0!==n[o]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},n={app:0},a=[];function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"01e6":function(t,e,s){"use strict";s("d537")},"034f":function(t,e,s){"use strict";s("85ec")},"0ca6":function(t,e,s){"use strict";s("80c5")},"209f":function(t,e,s){"use strict";s("260b")},"260b":function(t,e,s){},2764:function(t,e,s){t.exports=s.p+"img/flow.a6961cc7.svg"},4316:function(t,e,s){t.exports=s.p+"img/comm.6a1c7fb7.svg"},"4ac7":function(t,e,s){},"4def":function(t,e,s){},"538d":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("main",{staticClass:"App__main"},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1)],1),s("Footer")],1)},a=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("p",[t._v("version: 0.5")])])}],o={name:"Footer"},l=o,u=(s("01e6"),s("2877")),d=Object(u["a"])(l,r,c,!1,null,"abbdbc7a",null),p=d.exports,m={name:"App",components:{Footer:p}},v=m,f=(s("034f"),Object(u["a"])(v,n,a,!1,null,null,null)),b=f.exports,h=s("8c4f"),g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"landing"},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("div",{staticClass:"welcome-content"},[s("p",[t._v("Bienvenue, je suis")]),s("h1",[t._v("Benoît Favrie")]),s("router-link",{attrs:{to:"/home"}},[s("div",{staticClass:"button"},[s("Button",{attrs:{placeholder:"Voir mon Portfolio"}})],1)]),s("p",{staticClass:"intel"},[t._v("Veuillez noter que ce site est encore en cours de développement...")])],1)])],1)},A=[],C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"fill"},[t._v(" "+t._s(t.placeholder)+" ")])},_=[],y={name:"Button",props:{placeholder:String}},j=y,F=(s("8408"),Object(u["a"])(j,C,_,!1,null,"34070f98",null)),q=F.exports,w={name:"Landing",components:{Button:q},methods:{}},B=w,x=(s("c381"),Object(u["a"])(B,g,A,!1,null,"d3ad683e",null)),L=x.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("section",{staticClass:"home"},[i("div",{staticClass:"home-container"},[i("img",{staticClass:"logo",attrs:{src:s("9d64")}}),i("div",{staticClass:"name"},[i("h1",[t._v("Benoît Favrie")]),i("p",[t._v("Voici mon Portfolio")]),i("img",{attrs:{src:s("9637")}}),i("el-divider",{staticClass:"sub-title-divider"}),i("a",{attrs:{href:"mailto:benoit14.favrie@gmail.com",target:"_blank"}},[i("Button",{attrs:{placeholder:"Me contacter"}})],1)],1),i("div",{staticClass:"intro"},[t._m(0),i("h1",{staticClass:"job"},[t._v("Front-End | Back-End Developer")]),i("p",[t._v("Je suis en alternance à Caen en développement web. Je suis accepté à l'HETIC De Paris, et je souhaiterais intégrer une nouvelle entreprise pour la rentrée 2022.")]),t._m(1),i("div",{staticClass:"block-radio"},[i("el-timeline",{attrs:{reverse:""}},t._l(t.activities,(function(e,s){return i("el-timeline-item",{key:s,attrs:{timestamp:e.timestamp}},[i("p",[t._v(t._s(e.content))])])})),1)],1)])])]),i("About"),i("Projects"),i("Contact")],1)},M=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("b",[t._v("INTRODUCTION")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"github"},[t._v("Accès à mon Github : "),s("a",{attrs:{href:"https://github.com/Mowdyy",target:"_blank"}},[t._v("Github/Mowdyy")])])}],O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("section",{staticClass:"about"},[i("div",{staticClass:"content"},[i("h1",[t._v("À propos de moi")]),i("p",[t._v("Tout ce que vous avez besoin de savoir sur moi est ici 😉")]),i("a",{attrs:{href:"../../assets/cv_benoit_favrie.pdf",download:""}},[i("Button",{attrs:{placeholder:"Télécharger mon CV"}})],1)])]),i("section",{staticClass:"skills"},[i("div",{staticClass:"title-items"},[i("h1",[t._v("Ce pour quoi je suis doué")]),i("p",[t._v("Voici les différentes compétences acquises au cours de mes années de formation, et mes quelques projets personnels.")]),i("el-divider",{staticClass:"sub-title-divider"})],1),i("div",{staticClass:"content-skills"},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"titles-card"},[i("img",{attrs:{src:s("b9f9"),alt:""}}),i("p",[t._v("Développement Web")]),i("el-divider",{staticClass:"sub-title-divider"})],1),i("div",[i("p",[t._v("Depuis tout petit j'aime développer des Applications Web et des sites. Je me suis lancé dans la formation MMI pour m'améliorer et créer de nouvelles choses. Grâce à cela, j'ai pu intégrer une entreprise qui me permet aujourd'hui d'utiliser VueJS.")])])]),i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"titles-card"},[i("img",{attrs:{src:s("e35c"),alt:""}}),i("p",[t._v("UX/UI Design")]),i("el-divider",{staticClass:"sub-title-divider"})],1),i("div",[i("p",[t._v("L'UX/UI Design a été une révélation lorsque j'ai intégré ma formation. Dans ce domaine, je crée des visuels et les maquettes des sites web pour pouvoir développer plus facilement mes idées.")])])]),i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"titles-card"},[i("img",{attrs:{src:s("4316"),alt:""}}),i("p",[t._v("Communication Web")]),i("el-divider",{staticClass:"sub-title-divider"})],1),i("div",[i("p",[t._v("Ce n'est pas le domaine que je domine, mais les bases que j'ai acquises en communication me permettent d'être polyvalent et de comprendre les demandes des personnes avec qui je travaille. Le référencement Web est très important.")])])])],1)])])},k=[],U={name:"About",components:{Button:q}},I=U,X=(s("209f"),Object(u["a"])(I,O,k,!1,null,"0c0fcfc2",null)),T=X.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("section",{staticClass:"projects"},[s("div",{staticClass:"title-items"},[s("h1",[t._v("Mes Projets")]),s("p",[t._v("Découvrez mes projets")]),s("el-divider",{staticClass:"sub-title-divider"}),s("p",{staticStyle:{"font-style":"italic"}},[t._v("Vous pouvez cliquer sur les fiches avec une petite icône pour découvrir le projet en détail")])],1),t._m(0)])])},D=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("div",{staticClass:"item"},[i("img",{staticClass:"link",attrs:{src:s("7262")}}),i("a",{attrs:{href:"http://www.flow.raidghost.com/",target:"_blank"}},[i("img",{staticClass:"item__image",attrs:{src:s("2764"),alt:"Flow"}})]),i("p",{staticClass:"title-card"},[t._v("FLOW")]),i("p",[t._v("Nous avons réalisé Flow dans le cadre d'un projet de fin d'études pour notre formation. Je me suis occupé de la partie développement web, en y ajoutant quelques touches personnelles. 😜")])]),i("div",{staticClass:"item"},[i("img",{staticClass:"link",attrs:{src:s("7262")}}),i("a",{attrs:{href:"https://github.com/Mowdyy/sunnyoak",target:"_blank"}},[i("img",{staticClass:"item__image",attrs:{src:s("f596"),alt:""}})]),i("p",{staticClass:"title-card"},[t._v("SUNNYOAK")]),i("p",[t._v("Nous avons réalisé SunnyOak en tant que projet personnel, le but était de créer une lampe de A à Z, et qui peut être gérée par une application web que j'ai créée en HTML, CSS et JS. 😋")])])])}],P={name:"Projects",components:{Button:q}},S=P,Z=(s("0ca6"),Object(u["a"])(S,J,D,!1,null,"6710719b",null)),V=Z.exports,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("section",{staticClass:"contact"},[s("div",{staticClass:"intro"},[s("h1",[t._v("Prendre contact 🧐")]),s("div",{staticClass:"content"},[t._m(0),s("div",{staticClass:"item"},[s("a",{attrs:{href:"mailto:benoit14.favrie@gmail.com",target:"_blank"}},[s("Button",{attrs:{placeholder:"Me contacter par mail"}})],1)]),t._m(1)])])])])},W=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item linkedin"},[s("i",{staticClass:"el-icon-share"}),s("a",{attrs:{href:"https://www.linkedin.com/in/beno%C3%AEt-favrie-44a37a203/"}},[t._v("Mon LinkedIn")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item"},[s("i",{staticClass:"el-icon-phone"}),s("p",[t._v("06 21 44 10 26")])])}],Q={name:"Contact",components:{Button:q}},R=Q,G=(s("f9ec"),Object(u["a"])(R,z,W,!1,null,"46827cae",null)),N=G.exports,Y={name:"Home",components:{About:T,Projects:V,Button:q,Contact:N},data:function(){return{activities:[{content:"Baccalauréat S - Sciences de L'ingénieur",timestamp:"2020"},{content:"DUT - Métiers du Multimédia et de l'Internet",timestamp:"2020-2022"},{content:"Admis à HETIC de Paris",timestamp:"2022"}]}}},H=Y,K=(s("7466"),Object(u["a"])(H,E,M,!1,null,"03b45e46",null)),$=K.exports;i["default"].use(h["a"]);var tt=[{path:"/",name:"Landing",component:L},{path:"/home",name:"Home",component:$},{path:"/about",name:"About",component:T},{path:"/Projects",name:"Projects",component:V}],et=new h["a"]({routes:tt}),st=et,it=s("2f62");i["default"].use(it["a"]);var nt=new it["a"].Store({state:{},mutations:{},actions:{},modules:{}}),at=s("5c96"),rt=s.n(at);s("0fae");i["default"].use(rt.a),i["default"].config.productionTip=!1,new i["default"]({router:st,store:nt,render:function(t){return t(b)}}).$mount("#app")},7262:function(t,e,s){t.exports=s.p+"img/link.46471867.svg"},7466:function(t,e,s){"use strict";s("c2e7")},"80c5":function(t,e,s){},8408:function(t,e,s){"use strict";s("4ac7")},"85ec":function(t,e,s){},9637:function(t,e,s){t.exports=s.p+"img/profil.ddaea619.svg"},"9d64":function(t,e){t.exports="data:image/png;base64,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"},b9f9:function(t,e,s){t.exports=s.p+"img/code.feaa2f35.svg"},c2e7:function(t,e,s){},c381:function(t,e,s){"use strict";s("4def")},d537:function(t,e,s){},e35c:function(t,e,s){t.exports=s.p+"img/design.b1f2fb1c.svg"},f596:function(t,e,s){t.exports=s.p+"img/sunnyOak.4acc2251.svg"},f9ec:function(t,e,s){"use strict";s("538d")}});
//# sourceMappingURL=app.d4a5ff8b.js.map