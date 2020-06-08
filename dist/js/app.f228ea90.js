(function(t){function e(e){for(var o,r,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},i={app:0},a=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0626899f":"cf0f063a"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0626899f":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-0626899f":"1f16f3ff"}[t]+".css",i=c.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===o||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[t],f.parentNode.removeChild(f),n(a)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[t]=0})));var o=i[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,n){o=i[t]=[e,n]}));e.push(o[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}i[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0fa7":function(t,e,n){},"1ddf":function(t,e,n){},"495c":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"todo-list"},t._l(t.list,(function(t){return n("todo-item",{key:t.Index,attrs:{item:t}})})),1)},r=[],i=n("a026"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"todo-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.Checked,expression:"item.Checked"}],attrs:{disabled:t.item.Disabled,type:"checkbox"},domProps:{checked:Array.isArray(t.item.Checked)?t._i(t.item.Checked,null)>-1:t.item.Checked},on:{change:function(e){var n=t.item.Checked,o=e.target,r=!!o.checked;if(Array.isArray(n)){var i=null,a=t._i(n,i);o.checked?a<0&&t.$set(t.item,"Checked",n.concat([i])):a>-1&&t.$set(t.item,"Checked",n.slice(0,a).concat(n.slice(a+1)))}else t.$set(t.item,"Checked",r)}}}),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.edit,expression:"!edit"}],class:["todo-item__text",t.item.Text?"":"todo-item__text_empty"],on:{click:t.clickHandler}},[t._v(" "+t._s(t.item.Text)+" ")]),n("input",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"edit"},{name:"model",rawName:"v-model",value:t.item.Text,expression:"item.Text"}],ref:"textInput",staticClass:"todo-item__text-input",attrs:{type:"text"},domProps:{value:t.item.Text},on:{blur:function(e){t.edit=!1},keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.edit=!1},input:function(e){e.target.composing||t.$set(t.item,"Text",e.target.value)}}}),t.item.Disabled?t._e():n("button",{staticClass:"todo-item__delete",on:{click:t.deleteTodo}},[t._v("Удалить")])])},s=[],c=n("0fa7"),u=n.n(c),l=i["a"].extend({name:"todo-item",components:{},props:{item:Object},data:function(){return{style:u.a,edit:!1}},methods:{deleteTodo:function(){this.item.Removed=!0},clickHandler:function(){if(!this.item.Disabled){var t=this.$refs.textInput;this.edit=!0,this.$nextTick((function(){return t.focus()}))}}}}),d=l,f=(n("df9c"),n("2877")),m=Object(f["a"])(d,a,s,!1,null,null,null),p=m.exports,h=i["a"].extend({name:"todo-list",components:{todoItem:p},props:{list:Array}}),v=h,b=(n("c784"),Object(f["a"])(v,o,r,!1,null,null,null));e["a"]=b.exports},"5d83":function(t,e,n){t.exports={buttonDefault:"button-default-d79",buttonBlue:"button-blue-310",buttonRed:"button-red-701",buttonTransparent:"button-transparent-c09"}},"603f":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"confirm",style:"max-width: "+t.width+"px;",on:{blur:function(e){return t.$emit("cancel")}}},[n("div",{staticClass:"confirm__header"},[n("h6",[t._t("default")],2)]),n("div",{staticClass:"confirm__actions"},[n("button-blue",{on:{click:t.confirm}},[t._v("Да")]),n("button-transparent",{on:{click:function(e){return t.$emit("cancel")}}},[t._v("Отмена")])],1)])},r=[],i=(n("a9e3"),n("a026")),a=n("6632"),s=n.n(a),c=n("9c12"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button-common",{class:t.style.buttonTransparent,attrs:{type:t.type},on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)},l=[],d=n("70ae"),f=n("5d83"),m=n.n(f),p=i["a"].extend({name:"button-blue",components:{buttonCommon:d["a"]},props:{type:{type:String,required:!1,default:"button"}},data:function(){return{style:m.a}}}),h=p,v=n("2877"),b=Object(v["a"])(h,u,l,!1,null,null,null),_=b.exports,y=i["a"].extend({name:"confirm",components:{buttonBlue:c["a"],buttonTransparent:_},props:{text:String,width:Number},mounted:function(){document.addEventListener("mouseup",this.clickHandle)},data:function(){return{style:s.a}},methods:{confirm:function(){this.$emit("confirm")},clickHandle:function(t){var e=t.target,n=this.$el.contains(e);n||this.$emit("cancel")}}}),g=y,k=Object(v["a"])(g,o,r,!1,null,null,null);e["a"]=k.exports},6632:function(t,e,n){},"70ae":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:t.style.buttonDefault,attrs:{type:t.type},on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)},r=[],i=n("a026"),a=n("5d83"),s=n.n(a),c=i["a"].extend({name:"button-common",components:{},props:{type:{type:String,required:!1,default:"button"}},data:function(){return{style:s.a}}}),u=c,l=n("2877"),d=Object(l["a"])(u,o,r,!1,null,null,null);e["a"]=d.exports},"9c12":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button-common",{class:t.style.buttonBlue,attrs:{type:t.type},on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)},r=[],i=n("a026"),a=n("70ae"),s=n("5d83"),c=n.n(s),u=i["a"].extend({name:"button-blue",components:{buttonCommon:a["a"]},props:{type:{type:String,required:!1,default:"button"}},data:function(){return{style:c.a}}}),l=u,d=n("2877"),f=Object(d["a"])(l,o,r,!1,null,null,null);e["a"]=f.exports},bb4a:function(t,e,n){},c6eb:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("4de4");var o=n("d4ec"),r=n("bee2"),i=function(){function t(){Object(o["a"])(this,t),this.NOTE_LIST_STORAGE_KEY="notes_list",this.storage=window.localStorage}return Object(r["a"])(t,[{key:"SaveNotes",value:function(t){var e;null===(e=this.storage)||void 0===e||e.setItem(this.NOTE_LIST_STORAGE_KEY,this.Stringify(t))}},{key:"GetNotes",value:function(){var t;return this.JsonParse((null===(t=this.storage)||void 0===t?void 0:t.getItem(this.NOTE_LIST_STORAGE_KEY))||"[]")}},{key:"Stringify",value:function(t){return JSON.stringify(t)}},{key:"JsonParse",value:function(t){return JSON.parse(t)}}]),t}(),a=function(){function t(e){Object(o["a"])(this,t),this.$store=e,this.localStorageClient=new i}return Object(r["a"])(t,[{key:"CreateNote",value:function(t){var e=this.$store.state.notes,n=e.length;this.$store.dispatch("updateNote",t),1===n?t.Id=0:n>1&&(t.Id=e[n-2].Id+1),this.localStorageClient.SaveNotes(this.$store.state.notes.filter((function(t){return t.Id>=0})))}},{key:"UpdateNote",value:function(t){this.$store.dispatch("updateNote",t),this.localStorageClient.SaveNotes(this.$store.state.notes)}},{key:"DeleteNote",value:function(t){this.$store.dispatch("deleteNote",t.Id),this.localStorageClient.SaveNotes(this.$store.state.notes)}},{key:"GetNotes",value:function(){var t=this.localStorageClient.GetNotes();this.$store.dispatch("loadNotes",t)}}]),t}()},c784:function(t,e,n){"use strict";var o=n("bb4a"),r=n.n(o);r.a},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("a026"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",attrs:{id:"app"}},[n("router-view")],1)},i=[],a=(n("fb98"),{}),s=a,c=n("2877"),u=Object(c["a"])(s,r,i,!1,null,null,null),l=u.exports,d=(n("d3b7"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h1",[t._v("Список заметок")]),n("notes")],1)},m=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notes"},[n("div",{staticClass:"notes__container row"},t._l(t.list,(function(t,e){return n("note",{key:t.Index,staticClass:"notes__item sg-col-xs-12 sg-col-sm-6 sg-col-md-4 sg-col-lg-3",attrs:{note:t,tabIndex:e}})})),1),n("div",{staticClass:"notes__actions"},[n("button-blue",{on:{click:t.createNewNote}},[t._v("Создать заметку")])],1)])},h=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"note"},[n("div",{staticClass:"note__wrapper"},[n("div",{staticClass:"note__header"},[n("h5",[t._v(" "+t._s(t.note.Header||"")+" ")])]),n("div",{staticClass:"note__todo-list"},[n("todo-list",{attrs:{list:t.todos}})],1),n("div",{staticClass:"note__actions"},[n("button",{staticClass:"note__edit",on:{click:t.toEdit}},[t._v("Edit")]),n("button",{staticClass:"note__remove",attrs:{type:"button"},on:{click:t.askForRemove}},[t._v("Remove")])])]),t.showConfirm?n("confirm",{class:["note__confirm",t.confirmToRight?"note__confirm_to-right":"note__confirm_to-left"],attrs:{tabIndex:0,width:t.confirmWidth},on:{confirm:t.confirm,cancel:function(e){t.showConfirm=!1}}},[t._v(" Вы действительно хотите удалить заметку? ")]):t._e()],1)},b=[],_=(n("4de4"),n("d81d"),n("a9e3"),n("5530")),y=n("2909"),g=n("495c"),k=n("603f"),x=n("d8e6"),C=n.n(x),N=function(t,e){var n=t.clientX,o=window&&window.innerWidth;return n+e<o},w=n("c6eb"),O=o["a"].extend({name:"note",components:{todoList:g["a"],confirm:k["a"]},props:{note:Object,tabIndex:Number},data:function(){return{style:C.a,showConfirm:!1,confirmToRight:!1,confirmWidth:220,dataService:{}}},mounted:function(){this.dataService=new w["a"](this.$store)},methods:{toEdit:function(){this.$router.push("/edit/".concat(this.note.Id))},askForRemove:function(t){this.showConfirm=!0,this.confirmToRight=N(t,this.confirmWidth)},confirm:function(){this.dataService.DeleteNote(this.note),this.showConfirm=!1}},computed:{todos:function(){var t=Object(y["a"])(this.note.Todos);return t.map((function(t){var e=Object(_["a"])({},t);return e.Disabled=!0,e})).filter((function(t){return!t.Removed}))}}}),$=O,S=Object(c["a"])($,v,b,!1,null,null,null),E=S.exports,T=n("9c12"),j=n("ffc9"),I=n.n(j),A=o["a"].extend({name:"notes",components:{note:E,buttonBlue:T["a"]},props:{},data:function(){return{style:I.a}},methods:{createNewNote:function(){this.$router.push("/create/")}},computed:{list:function(){return this.$store.getters.notesForDisplay}}}),P=A,R=Object(c["a"])(P,p,h,!1,null,null,null),D=R.exports,L={name:"Home",components:{notes:D}},B=L,G=Object(c["a"])(B,f,m,!1,null,null,null),H=G.exports;o["a"].use(d["a"]);var J=[{path:"/",name:"Main",component:H},{path:"/edit/:note_id",name:"Edit",component:function(){return n.e("chunk-0626899f").then(n.bind(null,"6c0e"))}},{path:"/create",name:"Create",component:function(){return n.e("chunk-0626899f").then(n.bind(null,"6c0e"))}}],q=new d["a"]({mode:"history",base:"/simple-notes/dist/",routes:J}),F=q,M=(n("99af"),n("7db0"),n("2f62"));n("4160"),n("159b");function K(t){t.forEach((function(t,e){t.Index=e}))}o["a"].use(M["a"]);var W=new M["a"].Store({state:{notes:[]},actions:{loadNotes:function(t,e){var n=t.commit;K(e),n("setNotes",e)},addNote:function(t,e){var n=t.commit,o=t.state;n("setNotes",[].concat(Object(y["a"])(o.notes),[e]))},deleteNote:function(t,e){var n=t.commit,o=t.state;n("setNotes",o.notes.filter((function(t){return t.Id!=e})))},updateNote:function(t,e){var n=t.commit,o=t.state,r=o.notes.map((function(t){return t.Id===e.Id?e:t}));n("setNotes",r)},clearNotes:function(t){var e=t.commit,n=t.state;e("setNotes",n.notes.filter((function(t){return t.Id>=0})))},setOriginNote:function(t,e){var n=t.commit,o=t.state,r=o.notes.map((function(t){return t.Id===e.Id?e:t}));n("setOriginNote",r)}},mutations:{setOriginNote:function(t,e){t.notes=e},setNotes:function(t,e){t.notes=e}},getters:{note:function(t){return function(e){return t.notes.find((function(t){return t.Id===e}))}},notesForDisplay:function(t){return t.notes.filter((function(t){return t.Id>=0&&!t.Removed}))}}});o["a"].config.productionTip=!1,new o["a"]({router:F,store:W,render:function(t){return t(l)}}).$mount("#app");var Y=new w["a"](W);Y.GetNotes()},d8e6:function(t,e,n){},df9c:function(t,e,n){"use strict";var o=n("1ddf"),r=n.n(o);r.a},fb98:function(t,e,n){},ffc9:function(t,e,n){}});
//# sourceMappingURL=app.f228ea90.js.map