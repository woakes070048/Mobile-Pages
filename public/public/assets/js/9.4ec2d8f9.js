(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"80ab":function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("q-page",{staticClass:"fit row justify-center q-pa-lg bg-light-blue-8"},[s("div",{staticClass:"col-12 col-sm-4 col-lg-3 col-xl-2 self-center",staticStyle:{"min-width":"380px"}},[s("div",{staticClass:"fit self-center shadow-22"},[s("q-card",{staticClass:"no-border-radius bg-grey-1 text-grey-10 full-width",attrs:{flat:""}},[s("q-card-section",[s("div",{staticClass:"row items-center no-wrap"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-h5"},[e._v(e._s(e.$t("log_in")))])])]),e.errorMsg?s("q-banner",{staticClass:"bg-red text-white q-mt-lg",scopedSlots:e._u([{key:"avatar",fn:function(){return[s("q-icon",{attrs:{name:"warning",color:"white"}})]},proxy:!0}],null,!1,894313219)},[e._v("\n            "+e._s(e.errorMsg)+"\n          ")]):e._e(),e.successMsg?s("q-banner",{staticClass:"bg-blue text-white q-mt-lg",scopedSlots:e._u([{key:"avatar",fn:function(){return[s("q-icon",{attrs:{name:"check",color:"white"}})]},proxy:!0}],null,!1,1726514831)},[e._v("\n            "+e._s(e.successMsg)+"\n          ")]):e._e()],1),s("q-form",{ref:"frm",attrs:{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false"},on:{submit:function(r){return r.preventDefault(),r.stopPropagation(),e.onSubmit(r)}}},[s("q-card-section",[s("q-input",{staticClass:"q-mb-sm",attrs:{name:"email",error:e.form.email.error,"error-message":e.form.email.errorMsg,type:"email",label:e.$t("email_address")},on:{keyup:function(r){return e.resetValidation(r)}},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"mdi-at"}})]},proxy:!0}]),model:{value:e.form.email.value,callback:function(r){e.$set(e.form.email,"value",r)},expression:"form.email.value"}}),s("q-input",{staticClass:"q-mb-sm",attrs:{name:"password",error:e.form.password.error,"error-message":e.form.password.errorMsg,type:"password",label:e.$t("password")},on:{keyup:function(r){return e.resetValidation(r)}},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"mdi-key-variant"}})]},proxy:!0},{key:"append",fn:function(){return[s("q-btn",{attrs:{flat:"","no-caps":"",to:{name:"password.email"}}},[e._v(e._s(e.$t("forgot_password")))])]},proxy:!0}]),model:{value:e.form.password.value,callback:function(r){e.$set(e.form.password,"value",r)},expression:"form.password.value"}}),s("q-checkbox",{attrs:{label:"Keep me logged in",color:"blue-grey-8"},model:{value:e.form.remember,callback:function(r){e.$set(e.form,"remember",r)},expression:"form.remember"}})],1),s("q-card-actions",[s("q-btn",{staticClass:"full-width no-border-radius shadow-0",attrs:{type:"submit",loading:e.loading,color:"green",size:"lg"}},[e._v("Login")]),e.config.demo?s("q-btn",{staticClass:"q-mt-sm full-width no-border-radius shadow-0",attrs:{color:"primary",label:"Click here for demo login","no-caps":"",size:"18px"},on:{click:function(r){e.form.email.value="user@example.com",e.form.password.value="welcome123",e.onSubmit()}}}):e._e()],1)],1)],1)],1)])])},o=[],a=(s("7f7f"),{name:"Page",components:{},data:function(){return{successResetUpdateRedirect:!1,loading:!1,successMsg:null,errorMsg:null,form:{email:{value:null,error:!1,errorMsg:null},password:{value:null,error:!1,errorMsg:null},remember:!0}}},created:function(){this.successResetUpdateRedirect=this.$route.params.successResetUpdateRedirect||!1,this.successResetUpdateRedirect&&(this.successMsg="Your password has been successfully reset. You can now log in with your new password.")},methods:{onSubmit:function(){this.loading=!0;var e=this.$auth.redirect();this.$auth.login({redirect:{name:e?e.from.name:"sites.overview",query:e?e.from.query:null},rememberMe:this.form.remember,fetchUser:!0,params:{locale:this.$i18n.locale,email:this.form.email.value,password:this.form.password.value,remember:this.form.remember},success:function(e){this.$q.notify({icon:"done",message:"Login successful"})},error:function(e){var r=e.response.data;if("undefined"!==typeof r.error&&(this.errorMsg=r.error),"undefined"!==typeof r.errors)for(var s in r.errors)this.form[s].error=!0,this.form[s].errorMsg=r.errors[s][0];this.loading=!1}})},resetValidation:function(e){"undefined"!==typeof e.target.name&&(this.form[e.target.name].error=!1)}},computed:{config:function(){return window.config}}}),n=a,i=s("2877"),l=Object(i["a"])(n,t,o,!1,null,null,null);r["default"]=l.exports}}]);