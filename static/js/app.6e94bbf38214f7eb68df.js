webpackJsonp([1],{"349u":function(t,e){},"9M+g":function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},a,!1,function(t){n("349u")},null,null).exports,s=n("/ocq"),o=n("woOf"),c=n.n(o),u=n("Xxa5"),d=n.n(u),m=n("exGp"),l=n.n(m),f=n("Dd8w"),p=n.n(f),h=n("NYxO"),k={name:"NavBar",data:function(){return{}},props:{theme:String},methods:{getThemeMenuOpened:function(){return this.$parent.getThemeMenuOpened()},toggleThemeMenuOpened:function(){this.$parent.toggleThemeMenuOpened()},setTheme:function(t){this.$parent.setTheme(t)}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"nav_bar "+t.theme},[t._m(0),t._v(" "),n("div",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-4",modifiers:{"modal-4":!0}}],staticClass:"nav_header",on:{click:function(e){(t.currentList={})&&(t.modalList=!t.modalList)}}},[t._v("Новый лист")]),t._v(" "),n("div",{directives:[{name:"b-modal",rawName:"v-b-modal.modalBackground",modifiers:{modalBackground:!0}}],staticClass:"nav_header"},[t._v("Фон")]),t._v(" "),n("div",{staticClass:"nav_header nav_label",on:{click:function(e){return t.toggleThemeMenuOpened()}}},[t._v("\n          Тема\n        "),n("div",[t.getThemeMenuOpened()?n("i",{staticClass:"fa-solid fa-chevron-up"}):n("i",{staticClass:"fa-solid fa-chevron-down"}),t._v(" "),t.getThemeMenuOpened()?n("div",{staticClass:"label_drop"},[n("div",{staticClass:"label_item",class:t.theme,on:{click:function(e){return t.setTheme(0)}}},[n("i",{staticClass:"fa-solid fa-cloud-moon"})]),t._v(" "),n("div",{staticClass:"label_item",class:t.theme,on:{click:function(e){return t.setTheme(1)}}},[n("i",{staticClass:"fa-solid fa-cloud-sun"})])]):t._e()])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"marger_nav nav_header"},[e("i",{staticClass:"fa-solid fa-book-open"})])}]};var g={name:"MainPage",components:{NavBar:n("VU/8")(k,v,!1,function(t){n("SsVa")},"data-v-3363a5e8",null).exports},data:function(){return{theme:["dark_theme","light_theme"],currentThemeIndex:0,backgroundIndex:2,backgroundIndexTmp:0,newBackground:{},themeMenuOpened:!1,currentList:{},currentWorkItem:{},modalList:!1,modalWorkItem:!1,errorsList:"",errorsWorkItem:""}},methods:p()({},Object(h.b)(["AddNewBackground","LoadLists","AddList","EditListName","DropList","AddNewWorkItem","DeleteWorkItem","EditWorkItem"]),{setTheme:function(t){this.currentThemeIndex=t},toggleThemeMenuOpened:function(){this.themeMenuOpened=!this.themeMenuOpened},getThemeMenuOpened:function(){return this.themeMenuOpened},ModalBackgroundOnShow:function(){this.backgroundIndexTmp=this.backgroundIndex},ChangeBackImg:function(){this.backgroundIndex=this.backgroundIndexTmp},AddBackground:function(){var t=l()(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.AddNewBackground(this.newBackground);case 2:this.newBackground={};case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),SelectWorkItem:function(t,e){this.currentWorkItem={},c()(this.currentWorkItem,this.getLists[t].content_list[e]),this.currentWorkItem.type=1,this.currentWorkItem.index=t},SelectList:function(t){this.currentList={},c()(this.currentList,this.getLists[t]),this.currentList.type=1},DeleteList:function(){var t=l()(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.DropList(this.currentList);case 2:this.currentList={};case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),EditList:function(){var t=l()(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.currentList.name&&0!=this.currentList.name.length){t.next=4;break}this.errorsList="Поле не может быть пустым!",t.next=9;break;case 4:return t.next=6,this.EditListName(this.currentList.name);case 6:this.currentList={},this.modalList=!this.modalList,this.errorsList="";case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),NewValueWorkItem:function(){var t=l()(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.currentWorkItem.name&&0!=this.currentWorkItem.name.length){t.next=4;break}this.errorsWorkItem="Поле не может быть пустым!",t.next=9;break;case 4:return this.errorsWorkItem="",t.next=7,this.EditWorkItem(this.currentWorkItem);case 7:this.modalWorkItem=!this.modalWorkItem,this.currentWorkItem={};case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),DeleteWorkItemInList:function(){var t=l()(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.DeleteWorkItem(this.currentWorkItem);case 2:this.modalWorkItem=!1;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),AddNewList:function(){var t=l()(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.currentList.type=0,this.currentList.name&&0!=this.currentList.name.length){t.next=5;break}this.errorsList="Поле не может быть пустым!",t.next=10;break;case 5:return t.next=7,this.AddList(this.currentList.name);case 7:this.errorsList="",this.currentList={},this.modalList=!this.modalList;case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),AddWorkItem:function(){var t=l()(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.currentWorkItem.name&&0!=this.currentWorkItem.name.length){t.next=4;break}this.errorsWorkItem="Поле не может быть пустым!",t.next=8;break;case 4:return t.next=6,this.AddNewWorkItem(this.currentWorkItem);case 6:this.errorsWorkItem="",this.modalWorkItem=!this.modalWorkItem;case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}),mounted:function(){var t=this;return l()(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.LoadLists();case 2:case"end":return e.stop()}},e,t)}))()},computed:p()({},Object(h.c)(["getBackgrounds","getLists"]))},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavBar",{attrs:{theme:t.theme[t.currentThemeIndex]}}),t._v(" "),n("div",{staticClass:"back",style:"background-image: url("+t.getBackgrounds[t.backgroundIndex].backgroundUrl+");"},[n("b-modal",{class:t.theme[t.currentThemeIndex],attrs:{id:"modalBackground"},on:{ok:function(e){return t.ChangeBackImg()},show:function(e){return t.ModalBackgroundOnShow()}}},[n("div",{staticClass:"modal_cont"},t._l(t.getBackgrounds,function(e,r){return n("div",{staticClass:"background_img"},[n("div",{staticClass:"background_cont",style:"background-image: url("+t.getBackgrounds[r].backgroundUrl+");",on:{click:function(e){t.backgroundIndexTmp=r}}}),t._v(" "),n("p",[t._v(t._s(t.getBackgrounds[r].name))])])}),0),t._v(" "),n("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-2",modifiers:{"modal-2":!0}}]},[t._v("Добавить")])]),t._v(" "),n("b-modal",{class:t.theme[t.currentThemeIndex],attrs:{id:"modal-2"},on:{ok:function(e){return t.AddBackground()}}},[n("p",[t._v("Название фона:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newBackground.name,expression:"newBackground.name"}],attrs:{type:"text"},domProps:{value:t.newBackground.name},on:{input:function(e){e.target.composing||t.$set(t.newBackground,"name",e.target.value)}}}),t._v(" "),n("p",[t._v("Путь к фону:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newBackground.backgroundUrl,expression:"newBackground.backgroundUrl"}],attrs:{type:"text"},domProps:{value:t.newBackground.backgroundUrl},on:{input:function(e){e.target.composing||t.$set(t.newBackground,"backgroundUrl",e.target.value)}}})]),t._v(" "),n("b-modal",{attrs:{id:"modal-4","hide-footer":""},scopedSlots:t._u([t.currentList.type&&0!=t.currentList.type?{key:"modal-title",fn:function(){return[t._v("\n          Редактирование листа\n      ")]},proxy:!0}:{key:"modal-title",fn:function(){return[t._v("\n          Добавление нового листа\n      ")]},proxy:!0}],null,!0),model:{value:t.modalList,callback:function(e){t.modalList=e},expression:"modalList"}},[t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentList.name,expression:"currentList.name"}],attrs:{type:"text"},domProps:{value:t.currentList.name},on:{input:function(e){e.target.composing||t.$set(t.currentList,"name",e.target.value)}}}),t._v(" "),!t.errorsList||t.errorsList.length>0?n("div",[n("p",[t._v("\n            "+t._s(t.errorsList)+"\n          ")])]):t._e(),t._v(" "),n("hr"),t._v(" "),t.currentList.type&&0!=t.currentList.type?n("b-button",{on:{click:function(e){return t.EditList()}}},[t._v("Сохранить")]):n("b-button",{on:{click:function(e){return t.AddNewList()}}},[t._v("Добавить")])],1),t._v(" "),n("b-modal",{attrs:{id:"modal-3","hide-footer":""},scopedSlots:t._u([t.currentWorkItem.type&&0!=t.currentWorkItem.type?{key:"modal-title",fn:function(){return[t._v("\n          Редактирование дела\n      ")]},proxy:!0}:{key:"modal-title",fn:function(){return[t._v("\n          Добавление нового дела\n      ")]},proxy:!0}],null,!0),model:{value:t.modalWorkItem,callback:function(e){t.modalWorkItem=e},expression:"modalWorkItem"}},[t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentWorkItem.name,expression:"currentWorkItem.name"}],attrs:{type:"text"},domProps:{value:t.currentWorkItem.name},on:{input:function(e){e.target.composing||t.$set(t.currentWorkItem,"name",e.target.value)}}}),t._v(" "),t.errorsWorkItem.length>0?n("div",[n("p",[t._v("\n            "+t._s(t.errorsWorkItem)+"\n          ")])]):t._e(),t._v(" "),n("hr"),t._v(" "),1==t.currentWorkItem.type?n("div",[n("b-button",{attrs:{variant:"success"},on:{click:function(e){return t.NewValueWorkItem()}}},[t._v("Сохранить")]),t._v(" "),n("b-button",{attrs:{variant:"danger"},on:{click:function(e){return t.DeleteWorkItemInList()}}},[t._v("Удалить")])],1):n("div",[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.AddWorkItem()}}},[t._v("Добавить")])],1)]),t._v(" "),n("b-modal",{attrs:{id:"delete_item"},on:{ok:function(e){return t.DeleteList()}}},[t._v("\n          Удалить выбранный элемент?\n    ")]),t._v(" "),n("div",{staticClass:"main_cont"},t._l(t.getLists,function(e,r){return n("b-col",{key:e.id,staticClass:"card_countainer",attrs:{xl:"3",lg:"4",md:"6",sm:"12",xs:"12"}},[n("b-card",{class:t.theme[t.currentThemeIndex],staticStyle:{width:"15rem",margin:"1%","text-align":"left"}},[n("div",{staticClass:"list_header"},[n("div",[t._v("\n              "+t._s(e.name)+"\n              "),n("i",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-4",modifiers:{"modal-4":!0}}],staticClass:"fa-solid fa-pen-to-square list_icon",on:{click:function(e){return t.SelectList(r)}}})]),t._v(" "),n("div",[n("i",{directives:[{name:"b-modal",rawName:"v-b-modal.delete_item",modifiers:{delete_item:!0}}],staticClass:"fa-solid fa-xmark list_icon",on:{click:function(e){return t.SelectList(r)}}})])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"list_main"},t._l(e.content_list,function(e,a){return n("div",[n("div",[t._v("\n                  "+t._s(e.name)+"\n                    "),n("i",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-3",modifiers:{"modal-3":!0}}],staticClass:"fa-solid fa-pen-to-square list_icon",on:{click:function(e){return t.SelectWorkItem(r,a)}}})])])}),0),t._v(" "),n("div",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-3",modifiers:{"modal-3":!0}}],staticClass:"list_footer",on:{click:function(e){t.currentWorkItem={},(t.currentWorkItem.index=r)&&(t.modalWorkItem=!t.modalWorkItem)}}},[t._v("\n            Добавить\n            "),n("i",{staticClass:"fa-solid fa-file-circle-plus list_icon"})])])],1)}),1)],1)],1)},staticRenderFns:[]};var b=n("VU/8")(g,_,!1,function(t){n("UesT")},"data-v-16dd2540",null).exports;r.default.use(s.a);var w,x,I,L,W,y,N,B=new s.a({routes:[{path:"/",name:"MainPage",component:b}]}),T=this,C={state:{lists:[]},mutations:{setLists:function(t,e){return t.lists=e},setList:function(t,e){return t.lists.push(e)},setNewValue:function(t,e){for(var n=t.lists.length,r=0;r<n;r++)if(t.lists[r].id==e.id){t.lists[r].name=e.name;break}},setDropList:function(t,e){for(var n=t.lists.length,r=0;r<n;r++)if(t.lists[r].id==e.id){t.lists.splice(r,1);break}},setNewWorkItem:function(t,e){var n={id:e.id,name:e.name};t.lists[e.index].content_list.push(n)},setDeleteWorkItem:function(t,e){for(var n=t.lists[e.index].content_list.length,r=0;r<n;r++)if(t.lists[e.index].content_list[r].name==e.name){t.lists[e.index].content_list.splice(r,1);break}},setEditWorkItem:function(t,e){for(var n=t.lists[e.index].content_list.length,r=0;r<n;r++)if(t.lists[e.index].content_list[r].id==e.id){t.lists[e.index].content_list[r].name=e.name;break}}},actions:{LoadLists:(N=l()(d.a.mark(function t(e){var n;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=[{id:1,name:"Лист1",content_list:[{id:11,name:"Помыться"},{id:12,name:"Вынести мусор"},{id:13,name:"Приготовить борщ"}]},{id:2,name:"Среда",content_list:[{id:21,name:"Испечь торт"},{id:22,name:"Сходить в магазин"}]}],e.commit("setLists",n);case 2:case"end":return t.stop()}},t,T)})),function(t){return N.apply(this,arguments)}),AddList:(y=l()(d.a.mark(function t(e,n){var r;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r={id:100*Math.random(),name:n,content_list:[]},e.commit("setList",r);case 2:case"end":return t.stop()}},t,T)})),function(t,e){return y.apply(this,arguments)}),DropList:(W=l()(d.a.mark(function t(e,n){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.commit("setDropList",n);case 1:case"end":return t.stop()}},t,T)})),function(t,e){return W.apply(this,arguments)}),EditListName:(L=l()(d.a.mark(function t(e,n){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.commit("setNewValue",n);case 1:case"end":return t.stop()}},t,T)})),function(t,e){return L.apply(this,arguments)}),EditWorkItem:(I=l()(d.a.mark(function t(e,n){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.commit("setEditWorkItem",n);case 1:case"end":return t.stop()}},t,T)})),function(t,e){return I.apply(this,arguments)}),DeleteWorkItem:(x=l()(d.a.mark(function t(e,n){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.commit("setDeleteWorkItem",n);case 1:case"end":return t.stop()}},t,T)})),function(t,e){return x.apply(this,arguments)}),AddNewWorkItem:(w=l()(d.a.mark(function t(e,n){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.id=100*Math.random(),e.commit("setNewWorkItem",n);case 2:case"end":return t.stop()}},t,T)})),function(t,e){return w.apply(this,arguments)})},getters:{getLists:function(t){return t.lists}}},M=this,O={state:{backgrounds:[{backgroundUrl:"https://www.patee.ru/r/x6/05/59/4c/960m.jpg",name:"sugar"},{backgroundUrl:"https://images.techinsider.ru/upload/img_cache/630/630d706c652fb5c70989b4b00bd04675_ce_1024x682x236x112.jpg",name:"animal"},{backgroundUrl:"https://img.freepik.com/premium-vector/beautiful-blue-night-with-river-and-forest-with-moon-and-stars_104785-377.jpg",name:"dark natural"}]},mutations:{setNewBackground:function(t,e){return t.backgrounds.push(e)}},actions:{AddNewBackground:function(){var t=l()(d.a.mark(function t(e,n){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.commit("setNewBackground",n);case 1:case"end":return t.stop()}},t,M)}));return function(e,n){return t.apply(this,arguments)}}()},getters:{getBackgrounds:function(t){return t.backgrounds}}};r.default.use(h.a);var A=new h.a.Store({modules:{lists:C,backgrounds:O}}),D=n("Tqaz");n("Jmt5"),n("9M+g");r.default.config.productionTip=!1,r.default.use(D.a),r.default.use(D.b),new r.default({el:"#app",router:B,store:A,components:{App:i},template:"<App/>"})},SsVa:function(t,e){},UesT:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6e94bbf38214f7eb68df.js.map