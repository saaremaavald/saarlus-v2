import{u as v,_ as T}from"./query.183e7275.js";import{_ as e,a as I,i as L,h as A}from"./state.bdf7fec3.js";import{u as D,f as R}from"./entry.1d8a2912.js";/* empty css                           */import"./ContentSlot.991936dd.js";import"./HomePage.vue.a7dd7fad.js";/* empty css                         *//* empty css                           *//* empty css                   *//* empty css                            *//* empty css                      *//* empty css                            *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                     *//* empty css                    *//* empty css                    *//* empty css                   *//* empty css                        *//* empty css                       *//* empty css                    *//* empty css                    *//* empty css                       *//* empty css                    *//* empty css                    */import"./ContentDoc.b8686a47.js";import"./ContentList.d9b025e5.js";import{E as d,u as E,_ as V,N as g,x as y,h as p,F as f,C as r,ag as b,a8 as S}from"./runtime-core.esm-bundler.4dba96d9.js";import"./ContentQuery.8e4586f1.js";import"./ContentRenderer.c99551d5.js";import"./ContentRendererMarkdown.a44e0407.js";import"./DocumentDrivenEmpty.bae2b574.js";import"./DocumentDrivenNotFound.a24a2e5a.js";import"./Markdown.d4fe0aaf.js";/* empty css                               */import"./layout.6e34a247.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./index.288f722b.js";import"./head.98cb5e55.js";const x=d({emits:{error(t){return!0}},setup(t,{slots:o,emit:_}){const i=E(null),u=v();return V(m=>{if(!u.isHydrating)return _("error",m),i.value=m,!1}),()=>{var m,a;return i.value?(m=o.error)==null?void 0:m.call(o,{error:i}):(a=o.default)==null?void 0:a.call(o)}}}),c=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),j=d({name:"DevOnly",setup(t,o){return()=>null}}),N=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),$=d({name:"ServerPlaceholder",render(){return g("div")}}),B=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"})),C=d({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:[String,Boolean],default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:o}){const _=z({duration:t.duration,throttle:t.throttle}),i=v();return i.hook("page:start",_.start),i.hook("page:finish",_.finish),y(()=>_.clear),()=>p("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${_.progress.value}%`,height:`${t.height}px`,opacity:_.isLoading.value?1:0,background:t.color||void 0,backgroundSize:`${100/_.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},o)}});function z(t){const o=E(0),_=E(!1),i=f(()=>1e4/t.duration);let u=null,m=null;function a(){n(),o.value=0,t.throttle?m=setTimeout(()=>{_.value=!0,h()},t.throttle):(_.value=!0,h())}function l(){o.value=100,O()}function n(){clearInterval(u),clearTimeout(m),u=null,m=null}function s(P){o.value=Math.min(100,o.value+P)}function O(){n(),setTimeout(()=>{_.value=!1,setTimeout(()=>{o.value=0},400)},500)}function h(){u=setInterval(()=>{s(i.value)},100)}return{progress:o,isLoading:_,start:a,finish:l,clear:n}}const M=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));r(()=>e(()=>import("./Card.6cbfec30.js"),["./Card.6cbfec30.js","./_plugin-vue_export-helper.c27b6911.js","./runtime-core.esm-bundler.4dba96d9.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./CloseButton.5bbb918d.js"),["./CloseButton.5bbb918d.js","./state.bdf7fec3.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DetailsWrapper.f64c108a.js"),["./DetailsWrapper.f64c108a.js","./state.bdf7fec3.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./DetailsWrapper.1c9b9d6c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DummySpacer.11b79c26.js"),["./DummySpacer.11b79c26.js","./runtime-core.esm-bundler.4dba96d9.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./HelloWorld.e425900b.js"),["./HelloWorld.e425900b.js","./ContentSlot.991936dd.js","./state.bdf7fec3.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./HomePage.29ec5006.js"),["./HomePage.29ec5006.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./HomePage.vue.a7dd7fad.js","./HomePage.e9e012c3.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.1d8a2912.js").then(t=>t.I),["./entry.1d8a2912.js","./runtime-core.esm-bundler.4dba96d9.js","./query.183e7275.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ImageModal.97702518.js"),["./ImageModal.97702518.js","./CloseButton.5bbb918d.js","./state.bdf7fec3.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ImageWrapper.efb27fde.js"),["./ImageWrapper.efb27fde.js","./state.bdf7fec3.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./ImageWrapper.17bd5939.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ListOfExercises.4e210017.js"),["./ListOfExercises.4e210017.js","./Card.6cbfec30.js","./_plugin-vue_export-helper.c27b6911.js","./runtime-core.esm-bundler.4dba96d9.js","./query.183e7275.js","./state.bdf7fec3.js","./state.172365eb.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ListOfStories.c9808492.js"),["./ListOfStories.c9808492.js","./entry.1d8a2912.js","./runtime-core.esm-bundler.4dba96d9.js","./query.183e7275.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css","./StoryTag.83153752.js","./Card.6cbfec30.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./PrevNext.d1a0e965.js"),["./PrevNext.d1a0e965.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./entry.1d8a2912.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.1d8a2912.js").then(t=>t.S),["./entry.1d8a2912.js","./runtime-core.esm-bundler.4dba96d9.js","./query.183e7275.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./StoryAuthor.af09372d.js"),["./StoryAuthor.af09372d.js","./state.bdf7fec3.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./StoryDictionary.2e2a58b6.js"),["./StoryDictionary.2e2a58b6.js","./state.bdf7fec3.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./StoryTag.83153752.js"),["./StoryTag.83153752.js","./runtime-core.esm-bundler.4dba96d9.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./YoutubeWrapper.f0d90428.js"),["./YoutubeWrapper.f0d90428.js","./_plugin-vue_export-helper.c27b6911.js","./runtime-core.esm-bundler.4dba96d9.js","./YoutubeWrapper.ada72aa9.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.1d8a2912.js").then(t=>t.m),["./entry.1d8a2912.js","./runtime-core.esm-bundler.4dba96d9.js","./query.183e7275.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./AppNavbar.30a99c86.js"),["./AppNavbar.30a99c86.js","./entry.1d8a2912.js","./runtime-core.esm-bundler.4dba96d9.js","./query.183e7275.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Alert.a68b4169.js"),["./Alert.a68b4169.js","./state.bdf7fec3.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./ContentSlot.991936dd.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./List.1b522eca.js"),["./List.1b522eca.js","./state.bdf7fec3.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./ContentSlot.991936dd.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./MarkdownBlock.1773b057.js"),["./MarkdownBlock.1773b057.js","./ContentSlot.991936dd.js","./state.bdf7fec3.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.1d8a2912.js").then(t=>t.A),["./entry.1d8a2912.js","./runtime-core.esm-bundler.4dba96d9.js","./query.183e7275.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ColorModeSwitch.1fa1eb86.js"),["./ColorModeSwitch.1fa1eb86.js","./entry.1d8a2912.js","./runtime-core.esm-bundler.4dba96d9.js","./query.183e7275.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseA.3c39b345.js"),["./ProseA.3c39b345.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./ProseA.35fdd634.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseBlockquote.39426523.js"),["./ProseBlockquote.39426523.js","./_plugin-vue_export-helper.c27b6911.js","./runtime-core.esm-bundler.4dba96d9.js","./ProseBlockquote.d1c5f537.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCode.86b3ffcb.js"),["./ProseCode.86b3ffcb.js","./ProseCodeCopyButton.8367dce6.js","./state.bdf7fec3.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./entry.1d8a2912.js","./index.288f722b.js","./entry.69f10fab.css","./ProseCode.26e5435b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCodeInline.536334e2.js"),["./ProseCodeInline.536334e2.js","./_plugin-vue_export-helper.c27b6911.js","./runtime-core.esm-bundler.4dba96d9.js","./ProseCodeInline.33a9b274.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseEm.a0377035.js"),["./ProseEm.a0377035.js","./_plugin-vue_export-helper.c27b6911.js","./runtime-core.esm-bundler.4dba96d9.js","./ProseEm.26a085fc.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH1.13680365.js"),["./ProseH1.13680365.js","./state.bdf7fec3.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./ProseH1.e8ed25c4.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH2.b46ea353.js"),["./ProseH2.b46ea353.js","./state.bdf7fec3.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./ProseH2.39cb29c9.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH3.94f43d75.js"),["./ProseH3.94f43d75.js","./state.bdf7fec3.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./ProseH3.185f3970.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH4.a882d393.js"),["./ProseH4.a882d393.js","./state.bdf7fec3.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./ProseH4.63359073.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH5.2c06882a.js"),["./ProseH5.2c06882a.js","./state.bdf7fec3.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./ProseH5.85b0a165.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH6.9f345170.js"),["./ProseH6.9f345170.js","./state.bdf7fec3.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./ProseH6.c7358255.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseHr.f0a545ef.js"),["./ProseHr.f0a545ef.js","./_plugin-vue_export-helper.c27b6911.js","./runtime-core.esm-bundler.4dba96d9.js","./ProseHr.7f3ea8bf.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseImg.7a2ddd8e.js"),["./ProseImg.7a2ddd8e.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./ProseImg.018721e2.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseLi.502e7d3b.js"),["./ProseLi.502e7d3b.js","./_plugin-vue_export-helper.c27b6911.js","./runtime-core.esm-bundler.4dba96d9.js","./ProseLi.ac05b421.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseOl.3d0da410.js"),["./ProseOl.3d0da410.js","./_plugin-vue_export-helper.c27b6911.js","./runtime-core.esm-bundler.4dba96d9.js","./ProseOl.fa711ad0.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseP.b9c632ea.js"),["./ProseP.b9c632ea.js","./_plugin-vue_export-helper.c27b6911.js","./runtime-core.esm-bundler.4dba96d9.js","./ProseP.945916cd.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseStrong.3fbf288a.js"),["./ProseStrong.3fbf288a.js","./_plugin-vue_export-helper.c27b6911.js","./runtime-core.esm-bundler.4dba96d9.js","./ProseStrong.263d77e1.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTable.dce5bebb.js"),["./ProseTable.dce5bebb.js","./_plugin-vue_export-helper.c27b6911.js","./runtime-core.esm-bundler.4dba96d9.js","./ProseTable.c65fbffe.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTbody.064e445c.js"),["./ProseTbody.064e445c.js","./_plugin-vue_export-helper.c27b6911.js","./runtime-core.esm-bundler.4dba96d9.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTd.ad333f7d.js"),["./ProseTd.ad333f7d.js","./_plugin-vue_export-helper.c27b6911.js","./runtime-core.esm-bundler.4dba96d9.js","./ProseTd.4df19d93.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTh.9d9c0251.js"),["./ProseTh.9d9c0251.js","./_plugin-vue_export-helper.c27b6911.js","./runtime-core.esm-bundler.4dba96d9.js","./ProseTh.36937e7b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseThead.0fd02902.js"),["./ProseThead.0fd02902.js","./_plugin-vue_export-helper.c27b6911.js","./runtime-core.esm-bundler.4dba96d9.js","./ProseThead.f6f5e43c.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTr.a76642d8.js"),["./ProseTr.a76642d8.js","./_plugin-vue_export-helper.c27b6911.js","./runtime-core.esm-bundler.4dba96d9.js","./ProseTr.09362402.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseUl.5dd077c3.js"),["./ProseUl.5dd077c3.js","./_plugin-vue_export-helper.c27b6911.js","./runtime-core.esm-bundler.4dba96d9.js","./ProseUl.b0154ae1.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCodeCopyButton.8367dce6.js"),["./ProseCodeCopyButton.8367dce6.js","./state.bdf7fec3.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./entry.1d8a2912.js","./index.288f722b.js","./entry.69f10fab.css","./ProseCode.26e5435b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentDoc.b8686a47.js"),["./ContentDoc.b8686a47.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./head.98cb5e55.js","./entry.1d8a2912.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css","./ContentRenderer.c99551d5.js","./ContentRendererMarkdown.a44e0407.js","./ContentQuery.8e4586f1.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentList.d9b025e5.js"),["./ContentList.d9b025e5.js","./ContentQuery.8e4586f1.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>q),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentQuery.8e4586f1.js"),["./ContentQuery.8e4586f1.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRenderer.c99551d5.js"),["./ContentRenderer.c99551d5.js","./ContentRendererMarkdown.a44e0407.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./index.288f722b.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRendererMarkdown.a44e0407.js"),["./ContentRendererMarkdown.a44e0407.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./index.288f722b.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentSlot.991936dd.js"),["./ContentSlot.991936dd.js","./state.bdf7fec3.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenEmpty.bae2b574.js"),["./DocumentDrivenEmpty.bae2b574.js","./runtime-core.esm-bundler.4dba96d9.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenNotFound.a24a2e5a.js"),["./DocumentDrivenNotFound.a24a2e5a.js","./runtime-core.esm-bundler.4dba96d9.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Markdown.d4fe0aaf.js"),["./Markdown.d4fe0aaf.js","./ContentSlot.991936dd.js","./state.bdf7fec3.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentPreviewMode.b4be49f2.js"),["./ContentPreviewMode.b4be49f2.js","./state.bdf7fec3.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./entry.1d8a2912.js","./index.288f722b.js","./entry.69f10fab.css","./ContentPreviewMode.3a7c2607.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./welcome.70b833bf.js"),["./welcome.70b833bf.js","./entry.1d8a2912.js","./runtime-core.esm-bundler.4dba96d9.js","./query.183e7275.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css","./ContentSlot.991936dd.js","./HomePage.vue.a7dd7fad.js","./HomePage.e9e012c3.css","./ContentDoc.b8686a47.js","./head.98cb5e55.js","./ContentRenderer.c99551d5.js","./ContentRendererMarkdown.a44e0407.js","./ContentQuery.8e4586f1.js","./ContentList.d9b025e5.js","./DocumentDrivenEmpty.bae2b574.js","./DocumentDrivenNotFound.a24a2e5a.js","./Markdown.d4fe0aaf.js","./layout.6e34a247.js","./DetailsWrapper.1c9b9d6c.css","./ImageWrapper.17bd5939.css","./YoutubeWrapper.ada72aa9.css","./ProseA.35fdd634.css","./ProseBlockquote.d1c5f537.css","./ProseCode.26e5435b.css","./ProseCodeInline.33a9b274.css","./ProseEm.26a085fc.css","./ProseH1.e8ed25c4.css","./ProseH2.39cb29c9.css","./ProseH3.185f3970.css","./ProseH4.63359073.css","./ProseH5.85b0a165.css","./ProseH6.c7358255.css","./ProseHr.7f3ea8bf.css","./ProseImg.018721e2.css","./ProseLi.ac05b421.css","./ProseOl.fa711ad0.css","./ProseP.945916cd.css","./ProseStrong.263d77e1.css","./ProseTable.c65fbffe.css","./ProseTd.4df19d93.css","./ProseTh.36937e7b.css","./ProseThead.f6f5e43c.css","./ProseTr.09362402.css","./ProseUl.b0154ae1.css","./ContentPreviewMode.3a7c2607.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./layout.6e34a247.js"),["./layout.6e34a247.js","./entry.1d8a2912.js","./runtime-core.esm-bundler.4dba96d9.js","./query.183e7275.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>c),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.1d8a2912.js").then(t=>t.j),["./entry.1d8a2912.js","./runtime-core.esm-bundler.4dba96d9.js","./query.183e7275.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>N),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>B),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./query.183e7275.js").then(t=>t.I),["./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>M),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./state.bdf7fec3.js").then(t=>t.I),["./state.bdf7fec3.js","./query.183e7275.js","./runtime-core.esm-bundler.4dba96d9.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.1d8a2912.js").then(t=>t.k),["./entry.1d8a2912.js","./runtime-core.esm-bundler.4dba96d9.js","./query.183e7275.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.1d8a2912.js").then(t=>t.p),["./entry.1d8a2912.js","./runtime-core.esm-bundler.4dba96d9.js","./query.183e7275.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.1d8a2912.js").then(t=>t.i),["./entry.1d8a2912.js","./runtime-core.esm-bundler.4dba96d9.js","./query.183e7275.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css"],import.meta.url).then(t=>t.NoScript));r(()=>e(()=>import("./entry.1d8a2912.js").then(t=>t.i),["./entry.1d8a2912.js","./runtime-core.esm-bundler.4dba96d9.js","./query.183e7275.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css"],import.meta.url).then(t=>t.Link));r(()=>e(()=>import("./entry.1d8a2912.js").then(t=>t.i),["./entry.1d8a2912.js","./runtime-core.esm-bundler.4dba96d9.js","./query.183e7275.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css"],import.meta.url).then(t=>t.Base));r(()=>e(()=>import("./entry.1d8a2912.js").then(t=>t.i),["./entry.1d8a2912.js","./runtime-core.esm-bundler.4dba96d9.js","./query.183e7275.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css"],import.meta.url).then(t=>t.Title));r(()=>e(()=>import("./entry.1d8a2912.js").then(t=>t.i),["./entry.1d8a2912.js","./runtime-core.esm-bundler.4dba96d9.js","./query.183e7275.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css"],import.meta.url).then(t=>t.Meta));r(()=>e(()=>import("./entry.1d8a2912.js").then(t=>t.i),["./entry.1d8a2912.js","./runtime-core.esm-bundler.4dba96d9.js","./query.183e7275.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css"],import.meta.url).then(t=>t.Style));r(()=>e(()=>import("./entry.1d8a2912.js").then(t=>t.i),["./entry.1d8a2912.js","./runtime-core.esm-bundler.4dba96d9.js","./query.183e7275.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css"],import.meta.url).then(t=>t.Head));r(()=>e(()=>import("./entry.1d8a2912.js").then(t=>t.i),["./entry.1d8a2912.js","./runtime-core.esm-bundler.4dba96d9.js","./query.183e7275.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css"],import.meta.url).then(t=>t.Html));r(()=>e(()=>import("./entry.1d8a2912.js").then(t=>t.i),["./entry.1d8a2912.js","./runtime-core.esm-bundler.4dba96d9.js","./query.183e7275.js","./state.bdf7fec3.js","./_plugin-vue_export-helper.c27b6911.js","./state.172365eb.css","./index.288f722b.js","./entry.69f10fab.css"],import.meta.url).then(t=>t.Body));const k=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:o}=b(t),_=f(()=>{var u;return typeof((u=o.value)==null?void 0:u.params)=="function"?o.value.params():o.value});if(!_.value&&I("dd-navigation").value){const{navigation:u}=D();return{navigation:u}}const{data:i}=await L(`content-navigation-${A(_.value)}`,()=>R(_.value));return{navigation:i}},render(t){const o=S(),{navigation:_}=t,i=a=>p(T,{to:a._path},()=>a.title),u=(a,l)=>p("ul",l?{"data-level":l}:null,a.map(n=>n.children?p("li",null,[i(n),u(n.children,l+1)]):p("li",null,i(n)))),m=a=>u(a,0);return o!=null&&o.default?o.default({navigation:_,...this.$attrs}):m(_)}}),q=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"}));export{k as default};
