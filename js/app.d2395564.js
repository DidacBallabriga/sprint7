(function(){"use strict";var s={51:function(s,e,t){var o=t(144),r=t(32);t(44);o["default"].use(r.ZPm);var n=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{attrs:{id:"app"}},[t("nav"),t("router-view")],1)},i=[],a=t(1),l={},u=(0,a.Z)(l,n,i,!1,null,null,null),c=u.exports,p=t(345),v=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"container"},[t("h1",[s._v("Calculadora de pressupostos")]),t("h2",[s._v("Fes servir la nostra calculadora per conèixer el preu de la seva idea.")]),t("button",{staticClass:"myBtn btn",on:{click:function(e){return s.$router.push("pressupost")}}},[s._v("▷ Començar")])])},d=[],m={name:"Benvinguda"},h=m,_=(0,a.Z)(h,v,d,!1,null,"0967e06e",null),P=_.exports,f=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"pressupost"},[t("h1",[s._v("Pot realitzar el seu Pressupost:")]),t("Pressupostos")],1)},b=[],C=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"pressupostos container"},[t("div",{staticClass:"row justify-content-start"},[t("div",{staticClass:"col-lg-6 container-sm"},[t("div",{staticClass:"infoPressupost"},[t("p",[s._v("NOM PRESSUPOST*"),t("input",{directives:[{name:"model",rawName:"v-model",value:s.nomPressupost,expression:"nomPressupost"}],attrs:{type:"text",placeholder:"exemple: SEO Local"},domProps:{value:s.nomPressupost},on:{input:function(e){e.target.composing||(s.nomPressupost=e.target.value)}}})]),t("p",[s._v("NOM DEL CLIENT*"),t("input",{directives:[{name:"model",rawName:"v-model",value:s.nomClient,expression:"nomClient"}],attrs:{type:"text",placeholder:"exemple: IT Academy"},domProps:{value:s.nomClient},on:{input:function(e){e.target.composing||(s.nomClient=e.target.value)}}})])]),s._m(0),t("h2",[s._v("¿Qué vol fer?")]),t("div",{staticClass:"containerPropi"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.preu,expression:"preu"}],attrs:{type:"checkbox",value:"500"},domProps:{checked:Array.isArray(s.preu)?s._i(s.preu,"500")>-1:s.preu},on:{change:[function(e){var t=s.preu,o=e.target,r=!!o.checked;if(Array.isArray(t)){var n="500",i=s._i(t,n);o.checked?i<0&&(s.preu=t.concat([n])):i>-1&&(s.preu=t.slice(0,i).concat(t.slice(i+1)))}else s.preu=r},s.showDetails]}}),s._v("Una pàgina web (500€) "),t("br"),s.show?t("div",{staticClass:"panell"},[t("Panell",{on:{preuWebPagines:s.sumaPreuWeb,preuWeb:s.sumaPreuWeb}}),t("br")],1):s._e(),t("input",{directives:[{name:"model",rawName:"v-model",value:s.preu,expression:"preu"}],attrs:{type:"checkbox",value:"300"},domProps:{checked:Array.isArray(s.preu)?s._i(s.preu,"300")>-1:s.preu},on:{change:function(e){var t=s.preu,o=e.target,r=!!o.checked;if(Array.isArray(t)){var n="300",i=s._i(t,n);o.checked?i<0&&(s.preu=t.concat([n])):i>-1&&(s.preu=t.slice(0,i).concat(t.slice(i+1)))}else s.preu=r}}}),s._v("Una consultoría SEO (300€)"),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:s.preu,expression:"preu"}],attrs:{type:"checkbox",value:"200"},domProps:{checked:Array.isArray(s.preu)?s._i(s.preu,"200")>-1:s.preu},on:{change:function(e){var t=s.preu,o=e.target,r=!!o.checked;if(Array.isArray(t)){var n="200",i=s._i(t,n);o.checked?i<0&&(s.preu=t.concat([n])):i>-1&&(s.preu=t.slice(0,i).concat(t.slice(i+1)))}else s.preu=r}}}),s._v("Una campanya de Google Ads (200€)"),t("br")]),t("hr",{staticClass:"divider"}),s._m(1),t("h3",[s._v("Preu: "+s._s(s.totalPressupostos)+"€")]),t("hr",{staticClass:"divider"}),t("div",{staticClass:"buttons"},[t("button",{staticClass:"myBtn btn",on:{click:function(e){return s.$router.push("/")}}},[s._v("◁ Tornar enrere")])])]),t("div",{staticClass:"col-lg-6"},[t("PressupostList",{attrs:{totalPressupost:s.totalPanell,arrayCheck:s.preu,nomPressupost:s.nomPressupost,nomClient:s.nomClient,totalPressupostos:s.totalPressupostos,showPressupostos:s.showPressupostos}}),t("div",{staticClass:"buttons"},[!1===s.showPressupostos?t("button",{staticClass:"myBtn btn",on:{click:s.showPressupostosFunction}},[t("img",{attrs:{src:"https://didacballabriga.github.io/Sprint7/img/show_eye_icon_183818.fbf84c51.svg",alt:""}}),s._v(" Veure pressupostos desats")]):s._e(),!0===s.showPressupostos?t("button",{staticClass:"myBtn btn",on:{click:s.showPressupostosFunction}},[t("img",{attrs:{src:"https://didacballabriga.github.io/Sprint7/img/hide_icon_183794.f049d135.svg",alt:""}}),s._v(" Ocultar llistat de pressupostos")]):s._e()])],1)])])},g=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("p",{staticClass:"nota"},[s._v("*El "),t("b",[s._v("nom del pressupost")]),s._v(" i de "),t("b",[s._v("client")]),s._v(" son "),t("b",[s._v("nessesaris")]),s._v(" per guardar les dades.")])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("h4",[s._v("Aquí trobarà el "),t("b",[s._v("cost total")]),s._v(" del seu pressupost:")])}],w=function(){var s=this,e=s.$createElement,o=s._self._c||e;return o("div",{staticClass:"panel"},[o("p",[s._v("Nombre de pàgines "),o("InputPanell",{attrs:{value:s.pagines},on:{sumaInputPanell:s.sumaTotalPagines,restaInputPanell:s.restaTotalPagines,InputPanell:s.actualPagines}}),o("b-button",{staticClass:"myButton",on:{click:function(e){return s.$bvModal.show("modal-scoped")}}},[o("img",{staticClass:"myImage",attrs:{src:t(81),alt:""}})]),o("b-modal",{attrs:{id:"modal-scoped"}},[o("p",[s._v("Si us plau, informi del nombre de pàgines que tindrà la seva web")])])],1),o("p",[s._v("Nombre d'idiomes "),o("InputPanell",{attrs:{value:s.idiomes},on:{sumaInputPanell:s.sumaTotalIdiomes,restaInputPanell:s.restaTotalIdiomes,InputPanell:s.actualIdiomes}}),o("b-button",{staticClass:"myButton",on:{click:function(e){return s.$bvModal.show("modal-scoped-1")}}},[o("img",{staticClass:"myImage",attrs:{src:t(81),alt:""}})]),o("b-modal",{attrs:{id:"modal-scoped-1"}},[o("p",[s._v("Si us plau, informi del nombre d'idiomes que tindrà la seva web")])])],1)])},y=[],k=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[t("div",{staticClass:"btn"},[t("button",{on:{click:function(e){return s.resta()}}},[s._v("-")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.value,expression:"value"}],attrs:{type:"number"},domProps:{value:s.value},on:{input:function(e){e.target.composing||(s.value=e.target.value)}}}),t("button",{staticClass:"suma",on:{click:function(e){return s.suma()}}},[s._v("+")])])])},I=[],S={name:"InputPanell",props:{value:Number},methods:{suma:function(){this.$emit("sumaInputPanell",this.value)},resta:function(){this.$emit("restaInputPanell",this.value)}},watch:{value:function(){this.$emit("InputPanell",this.value)}}},x=S,E=(0,a.Z)(x,k,I,!1,null,"e6572c1a",null),O=E.exports,N={name:"Panell",components:{InputPanell:O},data(){return{pagines:1,idiomes:1,suma:""}},methods:{sumaTotalPagines:function(s){s++,this.pagines=s},restaTotalPagines:function(s){this.pagines>0&&s--,this.pagines=s},sumaTotalIdiomes:function(s){s++,this.idiomes=s},restaTotalIdiomes:function(s){this.idiomes>0&&s--,this.idiomes=s},actualPagines:function(s){this.pagines=s},actualIdiomes:function(s){this.idiomes=s}},watch:{pagines:function(){let s=parseFloat(this.pagines*this.idiomes*30);this.suma=s,this.$emit("preuWeb",s)},idiomes:function(){let s=parseFloat(this.pagines*this.idiomes*30);this.suma=s,this.$emit("preuWeb",s)}}},A=N,L=(0,a.Z)(A,w,y,!1,null,"6696c03c",null),$=L.exports,T=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[""!==s.nomPressupost&&""!==s.nomClient?t("div",{staticClass:"container"},[t("h2",[s._v("Resum del pressupost:")]),t("p",[t("code",[s._v("Nom del pressupost:")]),s._v(" "+s._s(s.nomPressupost))]),t("p",[t("code",[s._v("Nom del client:")]),s._v(" "+s._s(s.nomClient))]),t("div",{staticClass:"row"},[t("p",{staticClass:"col"},[t("code",[s._v("Serveis:")]),t("ul",[0!==s.totalPressupost?t("li",[s._v(s._s(s.servei1)+": "+s._s(500+s.totalPressupost)+"€")]):s._e(),300==s.seo?t("li",[s._v(s._s(s.servei2)+": "+s._s(s.seo)+"€")]):s._e(),200==s.ads?t("li",[s._v(s._s(s.servei3)+": "+s._s(s.ads)+"€")]):s._e()])]),t("div",{staticClass:"col colbutton"},[""!==s.nomPressupost&&""!==s.nomClient&&0!==s.totalPressupost||300==s.seo||200==s.ads?t("button",{staticClass:"myBtn btn",on:{click:s.addPressupostArray}},[s._v("✓ Guardar Pressupost")]):s._e()])])]):s._e(),s.showPressupostos?t("div",{staticClass:"container-sm"},[t("h3",[s._v("Llistat de pressupostos")]),t("h6",[s._v("ORDENA PER NOM:")]),t("div",{staticClass:"filter"},[t("button",{staticClass:"myBtn btn",on:{click:s.ordenarAZ}},[s._v("PRESSUPOST")]),t("button",{staticClass:"myBtn btn",on:{click:s.ordenarClient}},[s._v("CLIENT")]),t("button",{staticClass:"myBtn btn",on:{click:s.ordenarReset}},[s._v("RESET")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.cerca,expression:"cerca"}],attrs:{type:"text",placeholder:"Cercar pressupost/client"},domProps:{value:s.cerca},on:{input:function(e){e.target.composing||(s.cerca=e.target.value)}}})]),s._l(s.llistaPressupostos,(function(e,o){return""===s.cerca?t("div",{key:o,staticClass:"containerList"},[t("code",[s._v("Nº "+s._s(e.id)+" - Pressupost:")]),s._v(" "+s._s(e.nomPressupost)+" "),s._m(0,!0),s._v(" "),t("code",[s._v("Client:")]),s._v(" "+s._s(e.nomClient)),t("br"),t("code",[s._v("Serveis:")]),t("ul",[void 0!==e.servei1?t("li",[s._v(s._s(e.servei1))]):s._e(),void 0!==e.servei2?t("li",[s._v(s._s(e.servei2))]):s._e(),void 0!==e.servei3?t("li",[s._v(s._s(e.servei3))]):s._e()]),t("code",[s._v("Preu:")]),s._v(" "+s._s(e.totalPressupostos)+"€ ")]):s._e()})),s._l(s.llistaPressupostosRender,(function(e,o){return""!==s.cerca?t("div",{key:o,staticClass:"containerList"},[t("code",[s._v("Nº "+s._s(e.id)+" - Pressupost:")]),s._v(" "+s._s(e.nomPressupost)+" "),s._m(1,!0),s._v(" "),t("code",[s._v("Client:")]),s._v(" "+s._s(e.nomClient)),t("br"),t("code",[s._v("Serveis:")]),t("ul",[void 0!==e.servei1?t("li",[s._v(s._s(e.servei1))]):s._e(),void 0!==e.servei2?t("li",[s._v(s._s(e.servei2))]):s._e(),void 0!==e.servei3?t("li",[s._v(s._s(e.servei3))]):s._e()]),t("code",[s._v("Preu:")]),s._v(" "+s._s(e.totalPressupostos)+"€ ")]):s._e()}))],2):s._e()])},Z=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("code",[t("b",[s._v("-")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("code",[t("b",[s._v("-")])])}],B={name:"PressupostList",data(){return{servei1:"Pàgina web",servei2:"Consultoría SEO",servei3:"Campanya Google Ads",llistaPressupostos:[],id:0,cerca:"",llistaPressupostosRender:[]}},watch:{cerca:function(s){this.llistaPressupostosRender=this.llistaPressupostos.filter((function(e){if(e.nomClient.toLowerCase().includes(s.toLowerCase())||e.nomPressupost.toLowerCase().includes(s.toLowerCase()))return!0})),console.log(this.llistaPressupostosRender)}},mounted(){if(localStorage.getItem("llistaPressupostos"))try{this.llistaPressupostos=JSON.parse(localStorage.getItem("llistaPressupostos"))}catch(s){localStorage.removeItem("llistaPressupostos")}},props:{totalPressupost:Number,arrayCheck:Array,nomPressupost:String,nomClient:String,totalPressupostos:Number,showPressupostos:Boolean},computed:{seo(){if(!0===this.arrayCheck.includes("300"))return 300},ads(){if(!0===this.arrayCheck.includes("200"))return 200}},methods:{addPressupostArray:function(){let s=this.llistaPressupostos.length+1,e=this.nomPressupost,t=this.nomClient,o=this.totalPressupostos,r=this.llistaPressupostos;function n(s,e,t,o,r,n,i){this.id=s,this.nomPressupost=e,this.nomClient=t,this.totalPressupostos=o,this.servei1=r,this.servei2=n,this.servei3=i}if(""!==e&""!==t){const i=new n(s,e,t,o);0!==this.totalPressupost&&(i.servei1=this.servei1),300==this.seo&&(i.servei2=this.servei2),200==this.ads&&(i.servei3=this.servei3),r.push(i)}function i(){const s=JSON.stringify(r);localStorage.setItem("llistaPressupostos",s)}i()},ordenarAZ:function(){this.llistaPressupostos.sort((function(s,e){return s.nomPressupost.toLowerCase()>e.nomPressupost.toLowerCase()?1:s.nomPressupost.toLowerCase()<e.nomPressupost.toLowerCase()?-1:0}))},ordenarClient:function(){this.llistaPressupostos.sort((function(s,e){return s.nomClient.toLowerCase()>e.nomClient.toLowerCase()?1:s.nomClient.toLowerCase()<e.nomClient.toLowerCase()?-1:0}))},ordenarReset:function(){this.llistaPressupostos.sort((function(s,e){return s.id>e.id?1:s.id<e.id?-1:0}))}}},R=B,j=(0,a.Z)(R,T,Z,!1,null,"a9889d6c",null),F=j.exports,M={name:"Pressupostos",components:{Panell:$,PressupostList:F},data(){return{preu:[0],show:!1,totalPanell:0,nomPressupost:"",nomClient:"",pressupostos:[],showPressupostos:!1}},computed:{totalPressupostos(){let s=this.preu.reduce(((s,e)=>parseInt(s)+parseInt(e))),e=s;return e+=this.totalPanell,e}},methods:{showDetails:function(){0==this.show?(this.totalPanell=30,this.show=!0):(this.totalPanell=0,this.show=!1)},sumaPreuWeb:function(s){this.totalPanell=s},showPressupostosFunction:function(){!1===this.showPressupostos?this.showPressupostos=!0:this.showPressupostos=!1}}},W=M,U=(0,a.Z)(W,C,g,!1,null,"794759c6",null),D=U.exports,q={name:"Pressupost",components:{Pressupostos:D}},G=q,J=(0,a.Z)(G,f,b,!1,null,"5d113190",null),z=J.exports;o["default"].use(p.Z);const Q=[{path:"/",name:"benvinguda",component:P},{path:"/pressupost",name:"pressupost",component:z}],V=new p.Z({base:"/",routes:Q});var H=V;o["default"].use(r.ZPm),o["default"].config.productionTip=!1,new o["default"]({router:H,render:function(s){return s(c)}}).$mount("#app")},81:function(s,e,t){s.exports=t.p+"img/icons8-acerca-de.a0d0859a.svg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var n=e[o]={exports:{}};return s[o](n,n.exports,t),n.exports}t.m=s,function(){var s=[];t.O=function(e,o,r,n){if(!o){var i=1/0;for(c=0;c<s.length;c++){o=s[c][0],r=s[c][1],n=s[c][2];for(var a=!0,l=0;l<o.length;l++)(!1&n||i>=n)&&Object.keys(t.O).every((function(s){return t.O[s](o[l])}))?o.splice(l--,1):(a=!1,n<i&&(i=n));if(a){s.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}n=n||0;for(var c=s.length;c>0&&s[c-1][2]>n;c--)s[c]=s[c-1];s[c]=[o,r,n]}}(),function(){t.d=function(s,e){for(var o in e)t.o(e,o)&&!t.o(s,o)&&Object.defineProperty(s,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(s){if("object"===typeof window)return window}}()}(),function(){t.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)}}(),function(){t.r=function(s){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var s={143:0};t.O.j=function(e){return 0===s[e]};var e=function(e,o){var r,n,i=o[0],a=o[1],l=o[2],u=0;if(i.some((function(e){return 0!==s[e]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(l)var c=l(t)}for(e&&e(o);u<i.length;u++)n=i[u],t.o(s,n)&&s[n]&&s[n][0](),s[n]=0;return t.O(c)},o=self["webpackChunksprint7"]=self["webpackChunksprint7"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(51)}));o=t.O(o)})();
//# sourceMappingURL=app.d2395564.js.map