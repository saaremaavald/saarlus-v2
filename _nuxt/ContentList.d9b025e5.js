import n from"./ContentQuery.8e4586f1.js";import{E as c,a8 as h,h as u}from"./runtime-core.esm-bundler.4dba96d9.js";import"./query.183e7275.js";import"./state.bdf7fec3.js";import"./_plugin-vue_export-helper.c27b6911.js";const q=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(p){const t=h(),{path:f,query:o}=p,m={...o||{},path:f||(o==null?void 0:o.path)||"/"},r=(e,a)=>u("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:e,data:a},null,2));return u(n,m,{default:t!=null&&t.default?({data:e,refresh:a,isPartial:d})=>t==null?void 0:t.default({list:e,refresh:a,isPartial:d,...this.$attrs}):({data:e})=>r("default",e),empty:e=>t!=null&&t.empty?t.empty(e):r("default",e==null?void 0:e.data),"not-found":e=>{var a;return t!=null&&t["not-found"]?(a=t==null?void 0:t["not-found"])==null?void 0:a.call(t,e):r("not-found",e==null?void 0:e.data)}})}});export{q as default};
