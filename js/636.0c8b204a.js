"use strict";(self["webpackChunkbrain_web"]=self["webpackChunkbrain_web"]||[]).push([[636],{4636:function(a,s,e){e.r(s),e.d(s,{default:function(){return m}});var t=function(){var a=this,s=a._self._c;return s("div",{staticClass:"wrap"},[s("b-pane",{attrs:{label:"ATLAS"}},[s("atlasBrains",{attrs:{isGene:""},on:{change:a.changeAtlas}})],1),s("b-pane",{attrs:{label:"EXPRESSIONS"}},[s("div",[s("span",[a._v("Atlas : ")]),a.params.atlas&&""!==a.params.atlas?s("el-tag",[a._v(a._s(a.params.atlas))]):a._e()],1),s("markerRegion",{staticStyle:{width:"250px"},attrs:{regionDEG:"",atlas:a.params.atlas},model:{value:a.params.region,callback:function(s){a.$set(a.params,"region",s)},expression:"params.region"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:""!=a.params.atlasBrains&&""!=a.params.region,expression:"params.atlasBrains!=''&&params.region!=''"}],staticClass:"img-wrap"},[s("p",{staticClass:"img-title"},[a._v("Expression levels of top 3 DEG across different cell types in "+a._s(a.params.region))]),s("el-image",{staticStyle:{width:"58%"},attrs:{src:`${a.apiBaseUrl}/volcano/RegionDEG/${a.params.atlas}_${a.params.region}.png`,alt:""},scopedSlots:a._u([{key:"error",fn:function(){return[s("div",{staticClass:"image-slot"},[s("el-empty",{attrs:{description:"Not available in current version of Brain Cell Atals"}})],1)]},proxy:!0}])})],1)],1)],1)},r=[];const l={Adult:{atlas:"Adult",region:"Medulla oblongata"},Fetal:{atlas:"Fetal",region:"Medulla"},Tumour:{atlas:"Tumour",region:"Parietal lobe"},Organoid:{atlas:"Organoid",region:"Parietal lobe"},Mouse:{atlas:"Mouse",region:""}};var n={name:"GeneMarker",components:{atlasBrains:()=>e.e(138).then(e.bind(e,1138)),markerRegion:()=>e.e(479).then(e.bind(e,5479))},data(){return{params:{atlas:"Adult",region:"Medulla oblongata"},imgSrc:"",apiBaseUrl:"https://data.braincellatlas.org"}},methods:{changeAtlas(a){const s=a.name.split(" ")[0];this.resetParams(s)},resetParams(a){const{atlas:s=a,region:e}=l[`${a}`]??{};this.params={atlas:s,region:e},console.log("resetParams",this.params,e,l[`${a}`])}},mounted(){this.resetParams("Adult")}},i=n,o=e(6367),p=(0,o.A)(i,t,r,!1,null,"1f249743",null),m=p.exports}}]);