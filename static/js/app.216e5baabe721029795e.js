webpackJsonp([1],{"/ECo":function(t,e,n){t.exports=n.p+"static/img/window.5f9432f.jpg"},"0+h+":function(t,e,n){"use strict";var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"body"},[e("p",[this._v("\n        hi，这是一个模拟外卖点餐的 webapp，技术栈主要是 Vue + VueRouter + ElementUI 。因为不会搭建服务器，便放弃了使用 axios 的想法，一开始还想练练从服务器获取数据来着。本 webapp 功能比较单一，就是添加物品，然后购物车结账。一个人在家里学习，一是没有经济来源；二是技术得不到进步，没有项目实践，学了一点新东西旧的就忘记了 TAT ，之前还学过 Jquery 和微信小程序开发来着，没有实际项目的联系，学的 API 之类的很快就忘记了。真心希望能够找个地方提升自己，薪资要求这些我都不高，而且如果有大佬带的话，我端茶递水也是很开心的 😊 。我的电话和邮箱都应该写在简历上了，但为了方便，在下方我再次留下我的电话和邮箱，希望能联系我!\n    ")]),this._v(" "),e("div",{staticClass:"phone"},[e("span",[this._v("电话:18285175105")]),this._v(" "),e("br"),this._v(" "),e("span",[this._v("邮箱:348703592@qq.com")])])])}]};e.a=a},"583e":function(t,e){},"6Lsk":function(t,e,n){"use strict";var a={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v("抱歉,找不到您要访问的页面")])},staticRenderFns:[]};e.a=a},"6NGo":function(t,e,n){t.exports=n.p+"static/img/vfc3.c023d3c.jpeg"},"7fSU":function(t,e){},"9eXD":function(t,e,n){t.exports=n.p+"static/img/vfc15.03fd8ae.jpg"},D23n:function(t,e){},"Ir/t":function(t,e){},JPsT:function(t,e,n){t.exports=n.p+"static/img/vfc9.6f21467.jpg"},"L8+7":function(t,e,n){t.exports=n.p+"static/img/vfc8.75039c8.jpg"},NC8v:function(t,e,n){t.exports=n.p+"static/img/vfc14.3b0ee5d.jpg"},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-container",[n("el-aside",{attrs:{width:"100px"}},[n("div",{staticClass:"taps"},[n("div",[n("span",{staticClass:"span-narrow"},[n("router-link",{attrs:{to:"/"}},[n("svg",{staticClass:"icon tap-icons",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-jiating"}})]),t._v(" "),n("p",[t._v("店面")])])],1)]),t._v(" "),n("div",[n("span",{staticClass:"span-wide"},[n("router-link",{attrs:{to:"/rider"}},[n("svg",{staticClass:"icon tap-icons",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-scooter__easy"}})]),t._v(" "),n("p",[t._v("骑手招募")])])],1)]),t._v(" "),n("div",[n("span",{staticClass:"span-wide"},[n("router-link",{attrs:{to:"/join"}},[n("svg",{staticClass:"icon tap-icons",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-nanren"}})]),t._v(" "),n("p",[t._v("加入")])])],1)]),t._v(" "),n("div",[n("span",{staticClass:"span-wide"},[n("router-link",{attrs:{to:"/aboutpos"}},[n("svg",{staticClass:"icon tap-icons",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-jingyu"}})]),t._v(" "),n("p",[t._v("关于我")])])],1)])])]),t._v(" "),n("el-main",[n("router-view",{staticClass:"total-view"})],1)],1),t._v(" "),n("div",{attrs:{id:"fixed-box"}},[n("div",{staticClass:"fixed-item day"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-taiyang-copy"}})])]),t._v(" "),n("div",{staticClass:"fixed-item night"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-yueliang"}})])])])],1)},staticRenderFns:[]};var i=n("VU/8")({name:"window",methods:{},computed:{}},s,!1,function(t){n("ZoWt")},"data-v-3f1bc22b",null).exports,r={data:function(){return{store:{totalprice:0,goods:[],count:1},packages:[{name:"炸鸡拼盘",price:48,url:n("6NGo"),count:0},{name:"圣诞套餐",price:88,url:n("Yxd6"),count:0},{name:"单人鸡排饭",price:26,url:n("L8+7"),count:0},{name:"单人套餐",price:36,url:n("JPsT"),count:0},{name:"双人套餐",price:66,url:n("jgPA"),count:0}],items:[{name:"冰淇淋",price:13,url:n("mgKD"),count:0},{name:"双层牛肉堡",price:23,url:n("a9Ub"),count:0},{name:"老北京鸡肉卷",price:15,url:n("aT47"),count:0},{name:"美式咖啡",price:18,url:n("9eXD"),count:0},{name:"单人薯条",price:10,url:n("NC8v"),count:0}],num:0,windowImg:n("/ECo")}},methods:{addStore:function(t){var e=t.currentTarget.parentNode.parentElement,n=Number(e.children[0].children[1].textContent),a=e.children[0].children[0].textContent;this.store.totalprice+=n*this.store.count;for(var s=0;s<this.store.count;s++)this.store.goods.push(a);console.log(this.store.totalprice,this.store.goods,this.store.count),this.$emit("sendStore",this.store)},countChange:function(t){this.store.count=t},returnStore:function(){return this.store},toPay:function(){var t=document.querySelector(".pay"),e=document.querySelector(".display");t.style.display="block",e.style.opacity=.5},closePay:function(){var t=document.querySelector(".pay"),e=document.querySelector(".display");t.style.display="none",e.style.opacity=1},clearStore:function(){this.store.totalprice=0,this.store.count=0,this.store.goods=[]},pay:function(){alert("要是真的可以付款就好啦，哈哈")}},computed:{}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main body"},[n("div",{staticClass:"display"},[n("header",[n("span",{staticClass:"page1-span"},[t._v("\n            石阡必胜基外卖\n        ")]),t._v(" "),n("svg",{staticClass:"icon page1-icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-xiaoji"}})]),t._v(" "),n("span",{staticClass:"span-store",on:{click:t.toPay}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-gouwuche"}})]),t._v(" "),n("p",{staticStyle:{"font-size":"14px"}},[t._v("购物车")])])]),t._v(" "),n("div",[n("div",{staticClass:"welcome"},[n("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.windowImg,alt:"",title:"这个世界需要更多的炸鸡!",alt:"嗯?好像找不到了"}})]),t._v(" "),n("div",{staticClass:"package"},[n("h2",[t._v("超值套餐")]),t._v(" "),n("div",{staticClass:"package-box"},t._l(t.packages,function(e){return n("div",[n("p",[n("span",[t._v(t._s(e.name))]),t._v(" : "),n("span",[t._v(t._s(e.price))]),t._v(" 元")]),t._v(" "),n("div",{staticClass:"store"},[n("p",{on:{click:t.addStore}},[n("el-button",{attrs:{type:"primary"}},[n("span",[t._v("加入购物车")]),t._v(" "),n("svg",{staticClass:"icon add-store-svg",staticStyle:{"font-size":"30px","margin-left":"3px"},attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-gouwuche"}})])])],1),t._v(" "),n("el-input-number",{staticClass:"count",attrs:{size:"mini",min:1},on:{change:t.countChange},model:{value:e.count,callback:function(n){t.$set(e,"count",n)},expression:"good.count"}})],1),t._v(" "),n("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.url,alt:""}})])}))]),t._v(" "),n("div",{staticClass:"single"},[n("h2",[t._v("热卖单品")]),t._v(" "),n("div",{staticClass:"package-box"},t._l(t.items,function(e){return n("div",[n("p",[n("span",[t._v(t._s(e.name))]),t._v(" : "),n("span",{staticClass:"money"},[t._v(t._s(e.price))]),t._v(" 元")]),t._v(" "),n("div",{staticClass:"store"},[n("p",{on:{click:t.addStore}},[n("el-button",{attrs:{type:"primary"}},[n("span",[t._v("加入购物车")]),t._v(" "),n("svg",{staticClass:"icon add-store-svg",staticStyle:{"font-size":"30px","margin-left":"3px"},attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-gouwuche"}})])])],1),t._v(" "),n("el-input-number",{staticClass:"count",attrs:{size:"mini",min:1},on:{change:t.countChange},model:{value:e.count,callback:function(n){t.$set(e,"count",n)},expression:"good.count"}})],1),t._v(" "),n("img",{staticStyle:{width:"100%",height:"80%"},attrs:{src:e.url,alt:""}})])}))])])]),t._v(" "),n("div",{staticClass:"pay"},[n("p",[t._v("付款界面 "),n("span",{staticClass:"span-close",on:{click:t.closePay}},[t._v("X")])]),t._v(" "),n("p",[t._v("总金额:"+t._s(t.store.totalprice))]),t._v(" "),n("div",{staticClass:"goods"},t._l(t.store.goods,function(e){return n("el-tag",{staticStyle:{margin:"5px"},attrs:{color:"orange"}},[t._v(t._s(e))])})),t._v(" "),n("el-row",[n("el-button",{attrs:{type:"primary"},on:{click:t.pay}},[t._v("付款")]),t._v(" "),n("el-button",{staticClass:"clear-store",attrs:{type:"warning"},on:{click:t.clearStore}},[t._v("清空")])],1)],1)])},staticRenderFns:[]};var c=n("VU/8")(r,o,!1,function(t){n("aMyA")},"data-v-8c0ba518",null).exports,l={name:"App",created:function(){console.log("欢迎使用石阡必胜基外卖点餐系统!  ^_^ ")},data:function(){return{}},components:{window:i}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("window",{staticClass:"window"})],1)},staticRenderFns:[]};var p=n("VU/8")(l,u,!1,function(t){n("Q2/l")},null,null).exports,d=n("/ocq"),v=n("cm2G"),m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"rider-box"}},[e("div",{attrs:{id:"rider-content"}},[e("h3",[this._v("骑手招募")]),this._v(" "),e("p",[this._v("\n            这是一些模拟的招募的文字，实际上没有什么意义，但是为了显得逼真专业一点，我尽量多写一些文字。嗯... 为了让这个过程显得更丰满，你可以点击\n            "),e("span",[e("router-link",{attrs:{to:"/join"}},[this._v("这里")])],1),this._v("\n            来填写一份表格。\n        ")])])])},staticRenderFns:[]};var f=n("VU/8")({},m,!1,function(t){n("7fSU")},"data-v-2f628be0",null).exports,_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-box"},[n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"90px"}},[n("el-form-item",{attrs:{label:"现居地址"}},[n("el-input",{attrs:{placeholder:t.mention},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"工作时间"}},[n("el-select",{attrs:{placeholder:"中间有一个30分钟调休"},model:{value:t.form.region,callback:function(e){t.$set(t.form,"region",e)},expression:"form.region"}},[n("el-option",{attrs:{label:" 9:00 - 18:00",value:""}}),t._v(" "),n("el-option",{attrs:{label:" 18:00 - 3:00",value:""}})],1)],1),t._v(" "),n("el-form-item",{staticStyle:{width:"40%"},attrs:{label:"年龄",prop:"age",rules:[{required:!0,message:"年龄不能为空"},{type:"number",message:"年龄必须为数字值"}]}},[n("el-input",{attrs:{type:"age",autocomplete:"off"},model:{value:t.numberValidateForm.age,callback:function(e){t.$set(t.numberValidateForm,"age",t._n(e))},expression:"numberValidateForm.age"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("numberValidateForm")}}},[t._v("提交")]),t._v(" "),n("el-button",{on:{click:function(e){t.resetForm("numberValidateForm")}}},[t._v("重置")])],1)],1)],1)},staticRenderFns:[]};var h=n("VU/8")({data:function(){return{form:{name:"",region:null},numberValidateForm:{age:""},mention:"这只是一个单纯的表单而已,没有实现任何功能"}},methods:{submitForm:function(){},resetForm:function(){}}},_,!1,function(t){n("D23n")},"data-v-48f68d49",null).exports,g=n("pbny");a.default.use(d.a);var y=new d.a({routes:[{path:"/",name:"page1",component:c},{path:"/rider",component:f},{path:"/join",component:h},{path:"/aboutpos",component:g.default},{path:"*",component:v.default,name:"not404"}]}),b=n("mtWM"),x=n.n(b),C=n("zL8q"),k=n.n(C);n("tvR6");a.default.config.productionTip=!1,a.default.prototype.$axios=x.a,a.default.use(k.a),a.default.prototype.$elementul=k.a;new a.default({el:"#app",router:y,components:{App:p},template:"<App/>"})},"Q2/l":function(t,e){},Yxd6:function(t,e,n){t.exports=n.p+"static/img/vfc4.76f5009.jpg"},ZoWt:function(t,e){},a9Ub:function(t,e,n){t.exports=n.p+"static/img/vfc13.dea42d8.jpeg"},aMyA:function(t,e){},aT47:function(t,e,n){t.exports=n.p+"static/img/vfc16.317b68d.jpg"},cm2G:function(t,e,n){"use strict";var a=n("Ir/t"),s=n.n(a),i=n("6Lsk");var r=function(t){n("jBnq")},o=n("VU/8")(s.a,i.a,!1,r,"data-v-0e21365a",null);e.default=o.exports},jBnq:function(t,e){},jgPA:function(t,e,n){t.exports=n.p+"static/img/vfc12.a33e7a1.jpg"},mgKD:function(t,e,n){t.exports=n.p+"static/img/vfc1.aeb6d68.jpg"},"p7/r":function(t,e){},pbny:function(t,e,n){"use strict";var a=n("583e"),s=n.n(a),i=n("0+h+");var r=function(t){n("p7/r")},o=n("VU/8")(s.a,i.a,!1,r,"data-v-1bbd9e06",null);e.default=o.exports},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.216e5baabe721029795e.js.map