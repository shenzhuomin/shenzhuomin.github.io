(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{288:function(t,e,o){var content=o(292);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("dc2236c2",content,!0,{sourceMap:!1})},291:function(t,e,o){"use strict";var r=o(288);o.n(r).a},292:function(t,e,o){(e=o(41)(!1)).push([t.i,".container[data-v-48b585dd]{width:80%;margin:50px auto}h1[data-v-48b585dd]{text-align:center;font-size:24px;font-weight:600;font-family:PingFangSC-Regular}.btn[data-v-48b585dd]{display:block;margin:20px auto}",""]),t.exports=e},294:function(t,e,o){"use strict";o.r(e);o(40);var r={data:function(){return{form:{name:"",idCard:"",time1:"",time2:""}}},created:function(){this.form.name=null===localStorage.getItem("name")?"":localStorage.getItem("name"),this.form.idCard=null===localStorage.getItem("idCard")?"":localStorage.getItem("idCard"),this.form.time1=null===localStorage.getItem("time1")?"":localStorage.getItem("time1"),this.form.time2=null===localStorage.getItem("time2")?"":localStorage.getItem("time2")},methods:{create:function(){""!==this.form.name&&""!==this.form.idCard&&""!==this.form.time1&&""!==this.form.time2?(localStorage.setItem("name",this.form.name),localStorage.setItem("idCard",this.form.idCard),localStorage.setItem("time1",this.form.time1),localStorage.setItem("time2",this.form.time2),this.$router.push({path:"/main",query:{name:this.form.name,idCard:this.form.idCard,time1:this.form.time1,time2:this.form.time2}})):alert("把上面的信息填完鸭！！！")}}},m=(o(291),o(37)),component=Object(m.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("h1",[t._v("通行证生成器")]),t._v(" "),o("el-form",{attrs:{"label-position":"top","label-width":"80px",model:t.form}},[o("el-form-item",{attrs:{label:"名字"}},[o("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"身份证"}},[o("el-input",{model:{value:t.form.idCard,callback:function(e){t.$set(t.form,"idCard",e)},expression:"form.idCard"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"生成时间"}},[o("el-input",{attrs:{placeholder:"按照这个格式输入：2020-07-02"},model:{value:t.form.time1,callback:function(e){t.$set(t.form,"time1",e)},expression:"form.time1"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"到期时间"}},[o("el-input",{attrs:{placeholder:"按照这个格式输入：2020-07-02"},model:{value:t.form.time2,callback:function(e){t.$set(t.form,"time2",e)},expression:"form.time2"}})],1)],1),t._v(" "),o("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.create}},[t._v("生成")])],1)}),[],!1,null,"48b585dd",null);e.default=component.exports}}]);