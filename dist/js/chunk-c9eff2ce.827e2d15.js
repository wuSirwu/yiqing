(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c9eff2ce"],{"0bdb":function(t,o,e){},"3e35":function(t,o,e){"use strict";e("0bdb")},"6bdd":function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t._self._c;return o("div",[o("div",{staticClass:"title"},[t._v("疫情期间出行防疫政策")]),o("van-field",{attrs:{"is-link":"",readonly:"",label:"出发城市",placeholder:"请选择所在地区"},on:{click:function(o){t.show=!0}},model:{value:t.goCity,callback:function(o){t.goCity=o},expression:"goCity"}}),o("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.show,callback:function(o){t.show=o},expression:"show"}},[o("van-cascader",{attrs:{title:"请选择出发城市",options:t.options},on:{close:function(o){t.show=!1},finish:t.onFinish},model:{value:t.cascaderValue,callback:function(o){t.cascaderValue=o},expression:"cascaderValue"}})],1),o("van-field",{attrs:{"is-link":"",readonly:"",label:"到达城市",placeholder:"请选择所在地区"},on:{click:function(o){t.show2=!0}},model:{value:t.toCity,callback:function(o){t.toCity=o},expression:"toCity"}}),o("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.show2,callback:function(o){t.show2=o},expression:"show2"}},[o("van-cascader",{attrs:{title:"请选择出发城市",options:t.options},on:{close:function(o){t.show2=!1},finish:t.toFinish},model:{value:t.cascaderValue2,callback:function(o){t.cascaderValue2=o},expression:"cascaderValue2"}})],1),o("div",{staticClass:"search"},[o("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.search}},[t._v("查询疫情防疫")])],1),t._m(0)],1)},i=[function(){var t=this,o=t._self._c;return o("div",{staticClass:"content"},[o("div",[t._v("出发城市:")]),o("div",[t._v("到达城市：")])])}],s=(e("4e3f"),e("365c")),n={data(){return{show:!1,show2:!1,goCity:"",toCity:"",from:"",to:"",cascaderValue:"",cascaderValue2:"",from_info:"",to_info:"",options:[{text:"浙江省",value:"330000",children:[{text:"杭州市",value:"330100"}]},{text:"江苏省",value:"320000",children:[{text:"南京市",value:"320100"}]}]}},methods:{onFinish({value:t,selectedOptions:o,tabIndex:e}){this.from=t,this.show=!1,this.goCity=o.map(t=>t.text).join("/")},toFinish({value:t,selectedOptions:o,tabIndex:e}){this.to=t,this.show2=!1,this.toCity=o.map(t=>t.text).join("/")},search(){console.log("查询城市疫情",this.from,this.to),s["a"].getTravelQuery({from:this.from,to:this.to}).then(t=>{console.log("-查询城市疫情-",t.data),this.from_info=t.data.result.from_info,this.to_info=t.data.result.to_info})}},created(){s["a"].getTravel().then(t=>{console.log("---出行城市---",t.data.result);let o=t.data.result,e=[];o.forEach(t=>{let o={};o.text=t.province,o.value=t.province_id,o.children=[],t.citys.forEach(t=>{let e={};e.text=t.city,e.value=t.city_id,o.children.push(e)}),e.push(o)}),console.log("打印处理后的数据",e),this.options=e})}},l=n,c=(e("3e35"),e("0b56")),r=Object(c["a"])(l,a,i,!1,null,"a79b1542",null);o["default"]=r.exports}}]);
//# sourceMappingURL=chunk-c9eff2ce.827e2d15.js.map