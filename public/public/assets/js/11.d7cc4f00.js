(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"89df":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"fit row justify-center q-pa-lg bg-light-blue-8"},[s("div",{staticClass:"col-12 col-sm-4 col-lg-3 col-xl-2 self-center",staticStyle:{"min-width":"380px"}},[s("div",{staticClass:"fit self-center shadow-22"},[s("q-card",{staticClass:"no-border-radius bg-grey-1 text-grey-10 full-width",attrs:{flat:""}},[s("q-card-section",[s("div",{staticClass:"row items-center no-wrap"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-h5"},[e._v("Reset password")])])]),e.errorMsg?s("q-banner",{staticClass:"bg-red text-white q-mt-lg",scopedSlots:e._u([{key:"avatar",fn:function(){return[s("q-icon",{attrs:{name:"warning",color:"white"}})]},proxy:!0}],null,!1,894313219)},[e._v("\n            "+e._s(e.errorMsg)+"\n          ")]):e._e(),e.successMsg?s("q-banner",{staticClass:"bg-blue text-white q-mt-lg",scopedSlots:e._u([{key:"avatar",fn:function(){return[s("q-icon",{attrs:{name:"check",color:"white"}})]},proxy:!0}],null,!1,1726514831)},[e._v("\n            "+e._s(e.successMsg)+"\n          ")]):e._e()],1),s("q-form",{ref:"frm",attrs:{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false"},on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.onSubmit(t)}}},[e.invalidToken?e._e():s("q-card-section",[s("p",[e._v("Enter a new password for your account.")]),s("q-input",{staticClass:"q-mb-sm",attrs:{name:"password",error:e.form.password.error,"error-message":e.form.password.errorMsg,type:e.isPwd?"password":"text",label:"Password"},on:{keyup:function(t){return e.resetValidation(t)}},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"mdi-key-variant"}})]},proxy:!0},{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}],null,!1,1874314107),model:{value:e.form.password.value,callback:function(t){e.$set(e.form.password,"value",t)},expression:"form.password.value"}})],1),e.invalidToken?e._e():s("q-card-actions",[s("q-btn",{staticClass:"full-width no-border-radius shadow-0",attrs:{type:"submit",loading:e.loading,color:"green",size:"lg"}},[e._v("Update password")])],1)],1)],1)],1),s("q-card-actions",{staticClass:"q-pa-none q-pt-md"},[s("q-space"),s("q-btn",{attrs:{flat:"","no-caps":"",color:"white",to:{name:"login"}}},[e._v("Back to login")])],1)],1)])},a=[],o=(s("7f7f"),s("551c"),s("06db"),s("097d"),{name:"Page",components:{},data:function(){return{loading:!1,invalidToken:!1,successMsg:null,errorMsg:null,isPwd:!0,form:{password:{value:null,error:!1,errorMsg:null},remember:!0}}},created:function(){var e=this,t=this.$route.params.token;this.$axios.post("/auth/password/reset/validate-token",{locale:this.$i18n.locale,token:t}).then((function(t){"success"===t.data.status?e.invalidToken=!1:(e.invalidToken=!0,e.errorMsg="The token is invalid, already used or expired.")})).catch((function(t){"undefined"!==typeof t.response.data&&(e.invalidToken=!0,e.errorMsg="The token is invalid, already used or expired.")}))},methods:{onSubmit:function(){var e=this;this.loading=!0,this.$axios.post("/auth/password/update",{locale:this.$i18n.locale,password:this.form.password.value,token:this.$route.params.token}).then((function(t){"success"===t.data.status&&e.$router.push({name:"login",params:{successResetUpdateRedirect:!0}})})).catch((function(t){var s=t.response.data;if("undefined"!==typeof s.error&&(e.errorMsg=s.error),"undefined"!==typeof s.errors)for(var r in s.errors)e.form[r].error=!0,e.form[r].errorMsg=s.errors[r][0]})).finally((function(){e.loading=!1}))},resetValidation:function(e){"undefined"!==typeof e.target.name&&(this.form[e.target.name].error=!1)}}}),n=o,i=s("2877"),l=Object(i["a"])(n,r,a,!1,null,null,null);t["default"]=l.exports}}]);