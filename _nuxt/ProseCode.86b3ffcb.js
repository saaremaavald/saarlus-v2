import i from"./ProseCodeCopyButton.8367dce6.js";import{E as u,u as m,M as n,N as a,Q as d,ac as p,V as c,O as f,X as g}from"./runtime-core.esm-bundler.4dba96d9.js";/* empty css                      */import{_ as v}from"./_plugin-vue_export-helper.c27b6911.js";import"./state.bdf7fec3.js";import"./query.183e7275.js";import"./entry.1d8a2912.js";import"./index.288f722b.js";const y={key:0,class:"filename"},_=u({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const o=m(!1);return(s,t)=>{const l=i;return n(),a("div",{class:g([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=r=>o.value=!0),onMouseleave:t[1]||(t[1]=r=>o.value=!1)},[e.filename?(n(),a("span",y,d(e.filename),1)):p("",!0),c(s.$slots,"default",{},void 0,!0),f(l,{show:o.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}}),N=v(_,[["__scopeId","data-v-c601e40b"]]);export{N as default};
