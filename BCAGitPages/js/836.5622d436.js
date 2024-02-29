"use strict";(self["webpackChunkbrain_web"]=self["webpackChunkbrain_web"]||[]).push([[836],{4836:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var l=function(){var e=this,t=e._self._c;return t("div",[e.showMarker?t("div",[t("b-pane",{attrs:{label:"VOLCANO PLOT"}},[t("div",{staticClass:"search-by"},[t("span",{staticClass:"t"},[e._v("Search by ")]),t("ul",[t("li",[t("span",[e._v("Region : ")]),t("el-tag",[e._v(e._s(e.params.region))])],1),t("li",[t("span",[e._v("Cell type : ")]),t("el-tag",[e._v(e._s(e.params.cellType))])],1)])]),t("div",{staticClass:"mt10",attrs:{align:"center"}},[t("el-image",{staticStyle:{width:"58%"},attrs:{src:`${e.apiBaseUrl}/volcano/VolcanoBy${e.atlasMarkerBtn}/${e.params.atlas}_${e.params.region}_${e.params.cellType}.png`,alt:""},scopedSlots:e._u([{key:"error",fn:function(){return[t("div",{staticClass:"image-slot"},[t("el-empty",{attrs:{description:"Not available in current version of Brain Cell Atals"}})],1)]},proxy:!0}])})],1)]),t("b-pane",{attrs:{label:"MARKERS"}},[t("div",{staticClass:"search-by"},[t("span",{staticClass:"t"},[e._v("Search by ")]),t("ul",[t("li",[t("span",[e._v("Region : ")]),t("el-tag",[e._v(e._s(e.params.region))])],1),t("li",[t("span",[e._v("Cell type : ")]),t("el-tag",[e._v(e._s(e.params.cellType))])],1)])]),t("div",{staticClass:"download-show"},[t("div",{staticClass:"mt10"},[e._v(" Download : "),t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.downloadFile("csv")}}},[e._v("csv")]),t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.downloadFile("pdf")}}},[e._v("pdf")])],1),t("div",[e._v(" Show : "),t("el-button",[e._v("P-Value")]),t("span",[e._v(" Top "),e._l(e.pageSizes,(function(a){return t("a",{key:a,staticClass:"page-size",class:{line:a==e.pageSize},attrs:{href:"javascript:void();"},on:{click:function(t){return e.choosePagesize(a)}}},[e._v(" "+e._s(a)+" ")])}))],2)],1)]),e.tableData.length<1?t("el-table",{attrs:{data:[],height:"500"}},e._l(e.columnList,(function(a){return t("el-table-column",{key:a,attrs:{prop:a,label:a,sortable:"Link"!==a}},["Link"!==a?t("el-table-column",{attrs:{prop:a},scopedSlots:e._u([{key:"header",fn:function(){return[t("el-input",{on:{input:function(t){return e.headerChange(e.columnSelect[a],a)}},model:{value:e.columnSelect[a],callback:function(t){e.$set(e.columnSelect,a,t)},expression:"columnSelect[column]"}})]},proxy:!0}],null,!0)}):e._e()],1)})),1):t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"mt10",attrs:{data:e.tableData,"empty-text":"Not available in current version of Brain Cell Atals",height:"600px","header-row-class-name":"headerRowClass"}},[t("el-table-column",{attrs:{prop:"C0",label:"genes",sortable:""}},[t("el-table-column",{attrs:{prop:"C0"},scopedSlots:e._u([{key:"header",fn:function(){return[t("el-input",{attrs:{clearable:""},on:{input:function(t){return e.headerChange(e.columnSelect["C0"],"C0")}},model:{value:e.columnSelect["C0"],callback:function(t){e.$set(e.columnSelect,"C0",t)},expression:"columnSelect['C0']"}})]},proxy:!0},{key:"default",fn:function(t){return[e._v(" "+e._s(t.row["C0"]||"-")+" ")]}}])})],1),t("el-table-column",{attrs:{prop:"avg_log2FC",label:"avg_log2FC",sortable:""}},[t("el-table-column",{attrs:{prop:"avg_log2FC"},scopedSlots:e._u([{key:"header",fn:function(){return[t("el-input",{attrs:{clearable:""},on:{input:function(t){return e.headerChange(e.columnSelect["avg_log2FC"],"avg_log2FC")}},model:{value:e.columnSelect["avg_log2FC"],callback:function(t){e.$set(e.columnSelect,"avg_log2FC",t)},expression:"columnSelect['avg_log2FC']"}})]},proxy:!0},{key:"default",fn:function(t){return[e._v(" "+e._s(t.row["avg_log2FC"]||"-")+" ")]}}])})],1),t("el-table-column",{attrs:{prop:"p_val",label:"p_val",sortable:""}},[t("el-table-column",{attrs:{prop:"p_val"},scopedSlots:e._u([{key:"header",fn:function(){return[t("el-input",{attrs:{clearable:""},on:{input:function(t){return e.headerChange(e.columnSelect["p_val"],"p_val")}},model:{value:e.columnSelect["p_val"],callback:function(t){e.$set(e.columnSelect,"p_val",t)},expression:"columnSelect['p_val']"}})]},proxy:!0},{key:"default",fn:function(t){return[e._v(" "+e._s(t.row["p_val"])+" ")]}}])})],1),t("el-table-column",{attrs:{prop:"p_val_adj",label:"p_val_adj",sortable:""}},[t("el-table-column",{attrs:{prop:"p_val_adj"},scopedSlots:e._u([{key:"header",fn:function(){return[t("el-input",{attrs:{clearable:""},on:{input:function(t){return e.headerChange(e.columnSelect["p_val_adj"],"p_val_adj")}},model:{value:e.columnSelect["p_val_adj"],callback:function(t){e.$set(e.columnSelect,"p_val_adj",t)},expression:"columnSelect['p_val_adj']"}})]},proxy:!0},{key:"default",fn:function(t){return[e._v(" "+e._s(t.row["p_val_adj"])+" ")]}}])})],1),t("el-table-column",{attrs:{prop:"pct.1",label:"pct.1",sortable:""}},[t("el-table-column",{attrs:{prop:"pct.1"},scopedSlots:e._u([{key:"header",fn:function(){return[t("el-input",{attrs:{clearable:""},on:{input:function(t){return e.headerChange(e.columnSelect["pct.1"],"pct.1")}},model:{value:e.columnSelect["pct.1"],callback:function(t){e.$set(e.columnSelect,"pct.1",t)},expression:"columnSelect['pct.1']"}})]},proxy:!0},{key:"default",fn:function(t){return[e._v(" "+e._s(t.row["pct.1"]||"-")+" ")]}}])})],1),t("el-table-column",{attrs:{prop:"pct.2",label:"pct.2",sortable:""}},[t("el-table-column",{attrs:{prop:"pct.2"},scopedSlots:e._u([{key:"header",fn:function(){return[t("el-input",{attrs:{clearable:""},on:{input:function(t){return e.headerChange(e.columnSelect["pct.2"],"pct.2")}},model:{value:e.columnSelect["pct.2"],callback:function(t){e.$set(e.columnSelect,"pct.2",t)},expression:"columnSelect['pct.2']"}})]},proxy:!0},{key:"default",fn:function(t){return[e._v(" "+e._s(t.row["pct.2"]||"-")+" ")]}}])})],1)],1)],1)],1):t("el-empty",{attrs:{description:"Click the Markers button to show"}})],1)},n=[],r=(a(7738),a(8553),a(6204),a(3858),a(2448)),o=a.n(r),s={name:"Markers",props:{params:{type:Object,default:()=>({})},atlasMarkerBtn:{type:String,default:"Region"}},data(){return{showMarker:!1,frozenData:[],tableData:[],tabelKeys:[],pageSize:9999,pageSizes:[50,100],loading:!0,VolcanoMarkerBy:"VolcanoByRegion",apiBaseUrl:"https://data.braincellatlas.org",columnSelect:{C0:"",avg_log2FC:"",p_val:"",p_val_adj:"","pct.1":"","pct.2":""},selectKeyArray:{},columnList:["C0","avg_log2FC","p_val","p_val_adj","pct.1","pct.2"]}},watch:{params:{handler(e){this.showMarker=!1,this.tableData=[]},deep:!0},atlasMarkerBtn:{handler(e){this.VolcanoMarkerBy="VolcanoBy"+e},immediate:!0}},methods:{downloadFile(e){if(this.tableData.length<1)return;const t=`/markersBy${this.atlasMarkerBtn}/${this.params.atlas}_${this.params.region}_${this.params.cellType}_cell_type.${e}`;"pdf"===e?fetch(t).then((t=>{t.blob().then((t=>{const a=document.createElement("a"),l=window.URL.createObjectURL(t),n=`${this.params.atlas}_${this.params.region}_${this.params.cellType}_cell_type.${e}`;a.href=l,a.download=n,a.click(),window.URL.revokeObjectURL(l)}))})):window.open(t)},choosePagesize(e){this.pageSize=e,this.fetchMarkers(this.params)},async getTableData(e){const t=`${apiBaseUrl}/markersBy${this.atlasMarkerBtn}/${e.atlas}_${e.region}_${e.cellType}_cell_type.csv`;let a;await fetch(t).then((e=>e.text())).then((e=>{o().parse(e,{header:!0,dynamicTyping:!0,skipEmptyLines:!0,complete:e=>{a=e.data},error:e=>{console.error("Error parsing CSV:",e.message)}})}));let l=a.map((e=>{for(const t in e)""===t&&(e["C0"]=e[""],delete e[""]);return e}));return l},async fetchMarkers(e){if("Mouse"===e.atlas)return void(this.tableData=[]);const t=Object.values(this.params);if(t.includes(""))this.$message.error("Please select all options");else{this.showMarker=!0,this.loading=!0;try{let t=await this.getTableData(e);this.tableData=t,this.frozenData=[...t],this.loading=!1}catch(a){this.tableData=[],this.loading=!1}}},headerChange(e,t){const a=Object.keys(this.columnSelect).filter((e=>""!=this.columnSelect[e]));let l=[];a.forEach((e=>{l=this.frozenData.filter((t=>String(t[e]).toLowerCase().includes(String(this.columnSelect[e]).toLowerCase())))})),this.tableData=a.length<1?this.frozenData:l,this.$nextTick((()=>{this.$set(this.columnSelect,t,e),this.$forceUpdate()}))}}},c=s,i=a(6367),p=(0,i.A)(c,l,n,!1,null,"7a53cac0",null),u=p.exports}}]);