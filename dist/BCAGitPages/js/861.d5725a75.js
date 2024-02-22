"use strict";(self["webpackChunkbrain_web"]=self["webpackChunkbrain_web"]||[]).push([[861],{861:function(e,a,t){t.r(a),t.d(a,{default:function(){return b}});var i=function(){var e=this,a=e._self._c;return a("div",{staticClass:"wrap"},[a("b-pane",{attrs:{label:"Anatomical Portrait of the Adult Brain"}},[a("p",{attrs:{slot:"desc"},slot:"desc"},[e._v("Interactive viewer of the adult brain regions in BrainCellAtlas.")]),a("div",{staticClass:"brainarea"},[a("div",{staticStyle:{position:"absolute",top:"0",left:"0",bottom:"0",right:"0","z-index":"0"},on:{click:e.handleOutsideClick}}),a("brainArea",{ref:"brain_area",on:{brainAreaUpdate:a=>e.careBrain=a}}),""!=e.careBrain&&null!==e.careBrain?a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{staticStyle:{"font-size":"18px"},nativeOn:{click:function(a){return e.$emit("toLast")}}},[e._v(" "+e._s(e.atlasName)+" ")]),a("el-breadcrumb-item",{staticStyle:{"font-size":"16px"}},[e._v(e._s(e.careBrain))])],1),a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("b",[e._v(e._s(e.careBrain))]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:e.toWiki}},[e._v(" Read more in Wikipedia ")])],1),a("span",{staticClass:"text item",staticStyle:{"min-height":"200px"}},[e._v(" "+e._s(e.BrainDetails[e.careBrain]&&e.BrainDetails[e.careBrain].detail||".")+" ")])])],1):e._e()],1),a("p",[e._v(" "+e._s(`Checkout ${e.atlasName} in`)+" "),a("router-link",{attrs:{to:`/dataBrowser/${e.atlasName.split(" ")[0]}`}},[a("el-button",{attrs:{type:"text"}},[e._v(" Data viewer ")])],1)],1)])],1)},r=[],o=function(){var e=this,a=e._self._c;return a("div",{ref:"brainwrap",staticClass:"brain-wrap"},[a("img",{staticClass:"img-bg",attrs:{src:t(6104),alt:"",height:"100%"}}),a("img",{attrs:{src:t(8754),usemap:"#Map",id:"imgMap"}}),a("map",{attrs:{name:"Map",id:"Map"}},[a("area",{attrs:{title:"Medulla oblongata",coords:"697,908,696,934,654,1049,773,1071,798,975,815,945",shape:"poly"},on:{click:function(a){return e.linkTo("Medulla oblongata")},mouseover:function(a){return e.update("Brainstem","Medulla oblongata")}}}),a("area",{attrs:{title:"Midbrain",coords:"760,633,735,639,739,683,792,743,873,798,876,742,817,704",shape:"poly"},on:{click:function(a){return e.linkTo("Midbrain")},mouseover:function(a){return e.update("Brainstem","Midbrain")}}}),a("area",{attrs:{title:"Pons",coords:"739,679,738,729,680,756,644,751,638,788,702,805,708,841,699,911,815,945,840,905,850,827,878,801,811,753",shape:"poly"},on:{click:function(a){return e.linkTo("Pons")},mouseover:function(a){return e.update("Brainstem","Pons")}}}),a("area",{attrs:{title:"Cerebellum",coords:"722,751,742,729,746,689,699,611,627,583,522,634,458,703,411,763,413,849,461,905,520,911,543,908,587,947,665,964,700,928,716,871,714,799,727,802,733,776",shape:"poly"},on:{click:function(a){return e.linkTo("Cerebellum")},mouseover:function(a){return e.update("Cerebellum")}}}),a("area",{attrs:{title:"Cingulate cortex",coords:"669,536,711,521,747,540,761,473,840,401,987,365,1120,370,1224,392,1226,376,1322,415,1369,477,1364,519,1336,549,1304,560,1268,558,1316,580,1371,575,1408,535,1423,479,1402,410,1316,351,1207,325,1181,333,1167,316,1116,316,1055,294,1021,306,988,291,909,283,879,294,836,289,820,299,770,308,696,364,671,470",shape:"poly"},on:{click:function(a){return e.linkTo("Cingulate cortex")},mouseover:function(a){return e.update("Limbic system","Cingulate cortex")}}}),a("area",{attrs:{title:"Frontal lobe",coords:"1318,354,1341,258,1470,345,1531,452,1422,482,1394,410,1423,494,1399,541,1350,577,1296,569,1207,533,1162,547,1159,577,1189,623,1249,651,1307,667,1363,662,1411,650,1440,651,1450,658,1433,675,1381,672,1339,672,1293,676,1201,665,1131,707,1170,751,1232,807,1296,771,1372,745,1442,709,1486,667,1528,641,1440,620,1399,608,1360,585,1388,550,1413,515,1413,434",shape:"poly"},on:{click:function(a){return e.linkTo("Frontal lobe")},mouseover:function(a){return e.update("Cerebral cortex","Frontal lobe")}}}),a("area",{attrs:{title:"Motor cortex",coords:"1147,197,1189,345,1245,379,1274,384,1353,263,1283,238,1212,197",shape:"poly"},on:{click:function(a){return e.linkTo("Motor cortex")},mouseover:function(a){return e.update("Cerebral cortex","Motor cortex")}}}),a("area",{attrs:{title:"Occipital lobe",coords:"445,718,529,637,627,589,652,588,657,549,674,530,655,443,604,365,509,285,433,327,396,406,361,445,361,471,341,594,368,661,400,698",shape:"poly"},on:{click:function(a){return e.linkTo("Occipital lobe")},mouseover:function(a){return e.update("Cerebral cortex","Occipital lobe")}}}),a("area",{attrs:{title:"Parietal lobe",coords:"1021,179,1044,236,1069,297,1070,306,1018,316,910,292,823,302,755,319,728,344,700,410,677,484,679,522,669,543,658,552,627,521,613,435,557,390,525,350,492,299,570,250,652,207,750,176,875,163,912,176,968,166",shape:"poly"},on:{click:function(a){return e.linkTo("Parietal lobe")},mouseover:function(a){return e.update("Cerebral cortex","Parietal lobe")}}}),a("area",{attrs:{title:"Prefrontal cortex",coords:"1377,484,1375,526,1346,555,1378,613,1439,648,1507,658,1545,619,1542,536,1551,493,1529,462",shape:"poly"},on:{click:function(a){return e.linkTo("Prefrontal cortex")},mouseover:function(a){return e.update("Cerebral cortex","Prefrontal cortex","Frontal lobe")}}}),a("area",{attrs:{title:"Somatosensory cortex",coords:"1004,169,1021,291,1032,302,1067,297,1120,319,1148,319,1195,336,1159,199,1122,183",shape:"poly"},on:{click:function(a){return e.linkTo("Somatosensory cortex")},mouseover:function(a){return e.update("Cerebral cortex","Somatosensory cortex","Parietal lobe")}}}),a("area",{attrs:{title:"Temporal lobe",coords:"875,770,867,805,843,821,836,920,895,924,949,914,1016,920,1066,894,1108,894,1154,871,1204,868,1237,835,1237,788,1196,726,1144,689,1092,712,1033,731,1004,776,979,776,940,801,903,788",shape:"poly"},on:{click:function(a){return e.linkTo("Temporal lobe")},mouseover:function(a){return e.update("Cerebral cortex","Temporal lobe")}}}),a("area",{attrs:{title:"Corpus callosum",coords:"775,546,806,536,837,484,921,426,1016,410,1123,417,1220,446,1224,474,1167,487,1139,504,1145,521,1181,508,1257,521,1308,518,1332,491,1332,449,1265,403,1144,364,1000,354,845,389,763,462,739,512,753,533",shape:"poly"},on:{click:function(a){return e.linkTo("Corpus callosum")},mouseover:function(a){return e.update("Corpus callosum")}}}),a("area",{attrs:{title:"Amygdala",coords:"990,661,987,700,1016,734,1063,739,1102,711,1106,672,1078,642,1019,641",shape:"poly"},on:{click:function(a){return e.linkTo("Amygdala")},mouseover:function(a){return e.update("Limbic system","Amygdala")}}}),a("area",{attrs:{title:"Basal ganglia",coords:"859,687,789,639,773,555,820,466,926,404,1046,396,1130,431,1154,474,1151,515,1128,538,1139,485,1098,437,1066,431,1046,465,980,462,899,496,862,552,815,529,805,616",shape:"poly"},on:{click:function(a){return e.linkTo("Basal ganglia")},mouseover:function(a){return e.update("Limbic system","Basal ganglia")}}}),a("area",{attrs:{title:"Hippocampus",coords:"722,544,705,572,722,614,760,639,797,681,845,723,875,745,879,787,932,813,982,798,1019,782,1070,690,1078,645,1052,653,1002,718,931,725,833,653,783,578,750,549",shape:"poly"},on:{click:function(a){return e.linkTo("Hippocampus")},mouseover:function(a){return e.update("Limbic system","Hippocampus")}}}),a("area",{attrs:{title:"Hypothalamus",coords:"1122,543,1095,620,1144,644,1144,623,1136,597,1153,586,1137,547,1145,516,1130,499,1108,524",shape:"poly"},on:{click:function(a){return e.linkTo("Hypothalamus")},mouseover:function(a){return e.update("Limbic system","Hypothalamus")}}}),a("area",{attrs:{title:"Olfactory bulb",coords:"1371,669,1434,678,1456,664,1433,647",shape:"poly"},on:{click:function(a){return e.linkTo("Olfactory bulb")},mouseover:function(a){return e.update("Limbic system","Olfactory bulb")}}}),a("area",{attrs:{title:"Pineal gland",coords:"744,540,777,574,777,547,756,536,747,526",shape:"poly"},on:{click:function(a){return e.linkTo("Pineal gland")},mouseover:function(a){return e.update("Limbic system","Pineal gland")}}}),a("area",{attrs:{title:"Pituitary gland",coords:"1116,631,1131,644,1134,681,1151,695,1168,689,1182,673,1153,648,1139,622,1125,616",shape:"poly"},on:{click:function(a){return e.linkTo("Pituitary gland")},mouseover:function(a){return e.update("Limbic system","Pituitary gland")}}}),a("area",{attrs:{title:"Putamen",coords:"983,459,910,491,861,536,856,581,893,611,940,606,1005,575,1052,533,1070,496,1039,460",shape:"poly"},on:{click:function(a){return e.linkTo("Putamen")},mouseover:function(a){return e.update("Limbic system","Putamen")}}}),a("area",{attrs:{title:"Thalamus",coords:"833,578,847,631,901,658,966,648,1044,586,1061,608,1072,600,1058,571,1089,536,1088,473,1030,442,915,456,854,510",shape:"poly"},on:{click:function(a){return e.linkTo("Thalamus")},mouseover:function(a){return e.update("Limbic system","Thalamus")}}}),a("area",{attrs:{title:"Spinal cord",coords:"655,1048,615,1157,691,1189,764,1194,773,1074",shape:"poly"},on:{click:function(a){return e.linkTo("Spinal cord")},mouseover:function(a){return e.update("Spinal cord")}}})]),a("img",{staticClass:"brain-img line",attrs:{src:t(7389),alt:""}}),e.activeBrain||e.activeLabel?e._e():a("div",[a("img",{staticClass:"brain-img",attrs:{src:t(169),alt:""}})]),a("div",{staticClass:"cerebral-cortex"},[a("img",{directives:[{name:"show",rawName:"v-show",value:"Cerebral cortex"==e.activeBrain&&e.activePart(null),expression:"activeBrain=='Cerebral cortex'&&activePart(null)"}],staticClass:"brain-img",attrs:{src:t(2480),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.activePart("Cingulate cortex"),expression:"activePart('Cingulate cortex')"}],staticClass:"brain-img",attrs:{src:t(5375),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.activePart("Frontal lobe"),expression:"activePart('Frontal lobe')"}],staticClass:"brain-img",attrs:{src:t(3679),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.activePart("Motor cortex"),expression:"activePart('Motor cortex')"}],staticClass:"brain-img",attrs:{src:t(2467),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.activePart("Parietal lobe"),expression:"activePart('Parietal lobe')"}],staticClass:"brain-img",attrs:{src:t(4823),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.activePart("Occipital lobe"),expression:"activePart('Occipital lobe')"}],staticClass:"brain-img",attrs:{src:t(9307),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.activePart("Temporal lobe"),expression:"activePart('Temporal lobe')"}],staticClass:"brain-img",attrs:{src:t(6692),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.activePart("Prefrontal cortex"),expression:"activePart('Prefrontal cortex')"}],staticClass:"brain-img",attrs:{src:t(7223),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.activePart("Somatosensory cortex"),expression:"activePart('Somatosensory cortex')"}],staticClass:"brain-img",attrs:{src:t(9516),alt:""}})]),a("div",{staticClass:"brainstem"},[a("img",{directives:[{name:"show",rawName:"v-show",value:"Brainstem"==e.activeBrain&&e.activePart(null),expression:"activeBrain=='Brainstem'&&activePart(null)"}],staticClass:"brain-img",attrs:{src:t(5866),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.activePart("Medulla oblongata"),expression:"activePart('Medulla oblongata')"}],staticClass:"brain-img",attrs:{src:t(3338),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.activePart("Midbrain"),expression:"activePart('Midbrain')"}],staticClass:"brain-img",attrs:{src:t(1275),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.activePart("Pons"),expression:"activePart('Pons')"}],staticClass:"brain-img",attrs:{src:t(4866),alt:""}})]),"Cerebellum"==e.activeBrain?a("div",{staticClass:"Cerebellum"},[a("img",{staticClass:"brain-img",attrs:{src:t(99),alt:""}})]):e._e(),"Corpus callosum"==e.activeBrain?a("div",{staticClass:"corpus"},[a("img",{staticClass:"brain-img",attrs:{src:t(4161),alt:""}})]):e._e(),a("div",{staticClass:"Deepstructures"},[a("img",{directives:[{name:"show",rawName:"v-show",value:"Limbic system"==e.activeBrain&&e.activePart(null),expression:"activeBrain=='Limbic system'&&activePart(null)"}],staticClass:"brain-img",attrs:{src:t(2151),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.activePart("Amygdala"),expression:"activePart('Amygdala')"}],staticClass:"brain-img",attrs:{src:t(5762),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.activePart("Basal ganglia"),expression:"activePart('Basal ganglia')"}],staticClass:"brain-img",attrs:{src:t(9462),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.activePart("Hippocampus"),expression:"activePart('Hippocampus')"}],staticClass:"brain-img",attrs:{src:t(2235),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.activePart("Hypothalamus"),expression:"activePart('Hypothalamus')"}],staticClass:"brain-img",attrs:{src:t(5003),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.activePart("Olfactory bulb"),expression:"activePart('Olfactory bulb')"}],staticClass:"brain-img",attrs:{src:t(1422),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.activePart("Pineal gland"),expression:"activePart('Pineal gland')"}],staticClass:"brain-img",attrs:{src:t(6077),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.activePart("Pituitary gland"),expression:"activePart('Pituitary gland')"}],staticClass:"brain-img",attrs:{src:t(7941),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.activePart("Putamen"),expression:"activePart('Putamen')"}],staticClass:"brain-img",attrs:{src:t(6106),alt:""}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.activePart("Thalamus"),expression:"activePart('Thalamus')"}],staticClass:"brain-img",attrs:{src:t(3609),alt:""}})]),"Spinal cord"==e.activeBrain?a("div",{staticClass:"Spinal"},[a("img",{staticClass:"brain-img",attrs:{src:t(7536),alt:""}})]):e._e(),a("ul",{staticClass:"brain-nav"},[a("li",{staticClass:"nav",class:"Brainstem"==e.activeBrain?"actived ":"",attrs:{id:"nav_1"},on:{click:function(a){return e.linkTo("Brainstem")},mouseover:function(a){return e.update("Brainstem")}}},[e._v("Brainstem")]),a("li",{staticClass:"nav",class:"Limbic system"==e.activeBrain?"actived ":"",attrs:{id:"nav_2"},on:{click:function(a){return e.linkTo("Limbic system")},mouseover:function(a){return e.update("Limbic system")}}},[e._v("Limbic system")]),a("li",{staticClass:"nav",class:"Cerebral cortex"==e.activeBrain?"actived ":"",attrs:{id:"nav_3"},on:{click:function(a){return e.linkTo("Cerebral cortex")},mouseover:function(a){return e.update("Cerebral cortex")}}},[e._v("Cerebral cortex")]),a("li",{staticClass:"nav",class:"Corpus callosum"==e.activeBrain?"actived ":"",attrs:{id:"nav_4"},on:{click:function(a){return e.linkTo("Corpus callosum")},mouseover:function(a){return e.update("Corpus callosum")}}},[e._v("Corpus callosum")]),a("li",{staticClass:"nav",class:"Cerebellum"==e.activeBrain?"actived ":"",attrs:{id:"nav_5"},on:{click:function(a){return e.linkTo("Cerebellum")},mouseover:function(a){return e.update("Cerebellum")}}},[e._v("Cerebellum")]),a("li",{staticClass:"nav",class:"Spinal cord"==e.activeBrain?"actived ":"",attrs:{id:"nav_6"},on:{click:function(a){return e.linkTo("Spinal cord")},mouseover:function(a){return e.update("Spinal cord")}}},[e._v("Spinal cord")])]),a("div",{staticClass:"nav-list cerebral-list"},[a("ul",{staticClass:"brain-nav cerebral-nav"},e._l(e.cerebralNav,(function(t,i){return a("li",{key:t,class:`nav_3_${i} `+(e.activedLabel(t,e.activedMLabel)?"actived ":""),on:{click:function(a){return e.linkTo(t)},mouseover:function(a){return e.update("Cerebral cortex",t)}}},[e._v(e._s(t))])})),0)]),a("div",{staticClass:"nav-list frontal-list"},[a("ul",{staticClass:"brain-nav frontal-nav"},e._l(e.frontalNav,(function(t,i){return a("li",{key:t,class:`nav_31_${i} `+(e.activedLabel(t)?"actived ":""),on:{click:function(a){return e.linkTo(t)},mouseover:function(a){return e.update("Cerebral cortex",t,"Frontal lobe")}}},[e._v(e._s(t))])})),0)]),a("div",{staticClass:"nav-list prefrontal-list"},[a("ul",{staticClass:"brain-nav prefrontal-nav"},[a("li",{staticClass:"nav_32_0",class:e.activedLabel("Somatosensory cortex")?"actived ":"",on:{click:function(a){return e.linkTo("Somatosensory cortex")},mouseover:function(a){return e.update("Cerebral cortex","Somatosensory cortex","Parietal lobe")}}},[e._v("Somatosensory cortex")])])]),a("div",{staticClass:"nav-list deep-list"},[a("ul",{staticClass:"brain-nav deep-nav"},e._l(e.deepNav,(function(t,i){return a("li",{key:t,class:`nav_2_${i} `+(e.activedLabel(t)?"actived ":""),on:{click:function(a){return e.linkTo(t)},mouseover:function(a){return e.update("Limbic system",t)}}},[e._v(e._s(t))])})),0)]),a("div",{staticClass:"nav-list brainstem-list"},[a("ul",{staticClass:"brain-nav brainstem-nav"},e._l(e.brainstemNav,(function(t,i){return a("li",{key:t,class:`nav_1_${i} `+(e.activedLabel(t)?"actived ":""),on:{click:function(a){return e.linkTo(t)},mouseover:function(a){return e.update("Brainstem",t)}}},[e._v(e._s(t))])})),0)])])},n=[],s=(t(8937),{name:"BrainArea",data(){return{showImg:"brain",activeBrain:null,activeLabel:null,activedMLabel:null,brainstemNav:["Midbrain","Pons","Medulla oblongata"],deepNav:["Amygdala","Basal ganglia","Hippocampus","Hypothalamus","Olfactory bulb","Pineal gland","Pituitary gland","Putamen","Thalamus","Cingulate cortex"],cerebralNav:["Frontal lobe","Occipital lobe","Parietal lobe","Temporal lobe"],frontalNav:["Prefrontal cortex","Motor cortex"]}},computed:{activePart(){return e=>this.activeLabel===e},activedLabel(){return(e,a)=>this.activeLabel===e||a===e},initActiveBrain(){return e=>!this.activeBrain||this.activeBrain===e},initUnactiveBrain(){return e=>!this.activeBrain||this.activeBrain&&this.activeBrain!==e}},methods:{update(e=null,a=null,t=null){this.activeBrain=e,this.activeLabel=a,this.activedMLabel=t,this.$emit("brainAreaUpdate",a||t||e),this.showImg=a},linkTo(e){this.$router.push({path:"/dataBrowser",query:{region:e,atlas:"Adult"}})},handleOutsideClick(e){this.activeBrain=null,this.activeLabel=null,this.activedMLabel=null,this.$emit("brainAreaUpdate",null)}},mounted(){const e=document.getElementById("imgMap");this.$nextTick((()=>{e.onload=()=>{const a=e.naturalWidth,t=(e.width/a).toFixed(2);this.scale=t,setTimeout((()=>{const e=document.getElementById("Map").childNodes;e.forEach((e=>{let a=e.coords.split(",");a=a.map((e=>Math.floor(parseFloat(e)*t))),e.coords=a.join(",")}))}),300)}}))}}),l=s,c=t(6367),u=(0,c.A)(l,o,n,!1,null,"053ffe33",null),m=u.exports;const p={Amygdala:{detail:"The amygdala is one of two almond-shaped clusters of nuclei located deep and medially within the temporal lobes of the brain's cerebrum in complex vertebrates, including humans. Shown to perform a primary role in the processing of memory, decision making, and emotional responses (including fear, anxiety, and aggression), the amygdalae are considered part of the limbic system.",wikiUrl:"https://en.wikipedia.org/wiki/Amygdala"},"Basal ganglia":{detail:"The basal ganglia are a group of subcortical nuclei, of varied origin, in the brains of vertebrates. In humans, and some primates, there are some differences, mainly in the division of the globus pallidus into an external and internal region, and in the division of the striatum. The basal ganglia are situated at the base of the forebrain and top of the midbrain. Basal ganglia are strongly interconnected with the cerebral cortex, thalamus, and brainstem, as well as several other brain areas. The basal ganglia are associated with a variety of functions, including control of voluntary motor movements, procedural learning, habit learning, conditional learning, eye movements, cognition, and emotion.",wikiUrl:"https://en.wikipedia.org/wiki/basal_ganglia"},"Entorhinal cortex":{detail:"The entorhinal cortex (EC) is an area of the brain's allocortex, located in the medial temporal lobe, whose functions include being a widespread network hub for memory, navigation, and the perception of time. The EC is the main interface between the hippocampus and neocortex.",wikiUrl:"https://en.wikipedia.org/wiki/Entorhinal_cortex"},Hippocampus:{detail:"The hippocampus is a major component of the brain of humans and other vertebrates. Humans and other mammals have two hippocampi, one in each side of the brain. The hippocampus is part of the limbic system, and plays important roles in the consolidation of information from short-term memory to long-term memory, and in spatial memory that enables navigation. ",wikiUrl:"https://en.wikipedia.org/wiki/Hippocampus"},"Olfactory bulb":{detail:"The olfactory bulb is a neural structure of the vertebrate forebrain involved in olfaction, the sense of smell. It sends olfactory information to be further processed in the amygdala, the orbitofrontal cortex (OFC) and the hippocampus where it plays a role in emotion, memory and learning. The bulb is divided into two distinct structures: the main olfactory bulb and the accessory olfactory bulb. The main olfactory bulb connects to the amygdala via the piriform cortex of the primary olfactory cortex and directly projects from the main olfactory bulb to specific amygdala areas.",wikiUrl:"https://en.wikipedia.org/wiki/Olfactory_bulb"},"Pineal gland":{detail:"The pineal gland is a small endocrine gland in the brain of most vertebrates. The pineal gland produces melatonin, a serotonin-derived hormone which modulates sleep patterns in both circadian and seasonal cycles. The shape of the gland resembles a pine cone, which gives it its name. The pineal gland is located in the epithalamus, near the center of the brain, between the two hemispheres, tucked in a groove where the two halves of the thalamus join.",wikiUrl:"https://en.wikipedia.org/wiki/Pineal_gland"},"Pituitary gland":{detail:"The pituitary gland, in humans, is oval in shape and is a pea-sized gland that sits in a protective bony enclosure called the sella turcica.",wikiUrl:"https://en.wikipedia.org/wiki/Pituitary_gland"},Putamen:{detail:"The putamen is a round structure located at the base of the forebrain (telencephalon). The putamen and caudate nucleus together form the dorsal striatum. It is also one of the structures that compose the basal nuclei. Through various pathways, the putamen is connected to the substantia nigra, the globus pallidus, the claustrum, and the thalamus, in addition to many regions of the cerebral cortex. A primary function of the putamen is to regulate movements at various stages (e.g. preparation and execution) and influence various types of learning.",wikiUrl:"https://en.wikipedia.org/wiki/Putamen"},Thalamus:{detail:"The thalamus is a large mass of gray matter located in the dorsal part of the diencephalon (a division of the forebrain). Nerve fibers project out of the thalamus to the cerebral cortex in all directions, allowing hub-like exchanges of information. It has several functions, such as the relaying of sensory signals, including motor signals to the cerebral cortex and the regulation of consciousness, sleep, and alertness.",wikiUrl:"https://en.wikipedia.org/wiki/Thalamus"},"Deep structures":{detail:"The limbic system is a set of brain structures located on both sides of the thalamus, immediately beneath the medial temporal lobe of the cerebrum primarily in the forebrain. Its various components support a variety of functions including emotion, behavior, long-term memory, and olfaction.",wikiUrl:"https://en.wikipedia.org/wiki/Limbic_system"},Cerebellum:{detail:"The cerebellum is a major feature of the hindbrain of all vertebrates. In humans, the cerebellum plays an important role in motor control. It may also be involved in some cognitive functions such as attention and language as well as emotional control such as regulating fear and pleasure responses.",wikiUrl:"https://en.wikipedia.org/wiki/Cerebellum"},"Spinal cord":{detail:"The spinal cord is a long, thin, tubular structure made up of nervous tissue, which extends from the medulla oblongata in the brainstem to the lumbar region of the vertebral column (backbone). The backbone encloses the central canal of the spinal cord, which contains cerebrospinal fluid. The brain and spinal cord together make up the central nervous system (CNS).",wikiUrl:"https://en.wikipedia.org/wiki/spinal_cord"},"Corpus callosum":{detail:"The corpus callosum is a wide, thick nerve tract, consisting of a flat bundle of commissural fibers, beneath the cerebral cortex in the brain. The corpus callosum is only found in placental mammals. It spans part of the longitudinal fissure, connecting the left and right cerebral hemispheres, enabling communication between them. It is the largest white matter structure in the human brain.",wikiUrl:"https://en.wikipedia.org/wiki/corpus_callosum"},Brainstem:{detail:"The brainstem (or brain stem) is the posterior stalk-like part of the brain that connects the cerebrum with the spinal cord. In the human brain the brainstem is composed of the midbrain, the pons, and the medulla oblongata.",wikiUrl:"https://en.wikipedia.org/wiki/brainstem"},Midbrain:{detail:"The midbrain or mesencephalon is the forward-most portion of the brainstem and is associated with vision, hearing, motor control, sleep and wakefulness, arousal (alertness), and temperature regulation.",wikiUrl:"https://en.wikipedia.org/wiki/midbrain"},Pons:{detail:"The is part of the brainstem that in humans and other bipeds lies inferior to the midbrain, superior to the medulla oblongata and anterior to the cerebellum. This region of the brainstem includes neural pathways and tracts that conduct signals from the brain down to the cerebellum and medulla, and tracts that carry the sensory signals up into the thalamus.",wikiUrl:"https://en.wikipedia.org/wiki/Pons"},"Medulla oblongata":{detail:"The medulla oblongata or simply medulla is a long stem-like structure which makes up the lower part of the brainstem. It is anterior and partially inferior to the cerebellum. It is a cone-shaped neuronal mass responsible for autonomic (involuntary) functions, ranging from vomiting to sneezing. The medulla contains the cardiac, respiratory, vomiting and vasomotor centers, and therefore deals with the autonomic functions of breathing, heart rate and blood pressure as well as the sleep–wake cycle.",wikiUrl:"https://en.wikipedia.org/wiki/Medulla_oblongata"},"Cerebral cortex":{detail:"The cerebral cortex is the outer layer of neural tissue of the cerebrum of the brain in humans and other mammals. The cerebral cortex mostly consists of the six-layered neocortex, with just 10% consisting of allocortex. It is separated into two cortices, by the longitudinal fissure that divides the cerebrum into the left and right cerebral hemispheres.",wikiUrl:"https://en.wikipedia.org/wiki/cerebral cortex"},"Frontal lobe":{detail:"The frontal lobe is the largest of the four major lobes of the brain in mammals, and is located at the front of each cerebral hemisphere (in front of the parietal lobe and the temporal lobe). The frontal lobe is covered by the frontal cortex. The frontal cortex includes the premotor cortex and the primary motor cortex – parts of the motor cortex. The front part of the frontal cortex is covered by the prefrontal cortex. The nonprimary motor cortex is a functionally defined portion of the frontal lobe.",wikiUrl:"https://en.wikipedia.org/wiki/Frontal_lobe"},"Occipital lobe":{detail:"The occipital lobe is one of the four major lobes of the cerebral cortex in the brain of mammals. The occipital lobe is the visual processing center of the mammalian brain containing most of the anatomical region of the visual cortex.",wikiUrl:"https://en.wikipedia.org/wiki/Occipital_lobe"},"Parietal lobe":{detail:"The parietal lobe is one of the four major lobes of the cerebral cortex in the brain of mammals. The parietal lobe is positioned above the temporal lobe and behind the frontal lobe and central sulcus. The parietal lobe integrates sensory information among various modalities, including spatial sense and navigation.",wikiUrl:"https://en.wikipedia.org/wiki/Parietal_lobe"},"Temporal lobe":{detail:"The temporal lobe is one of the four major lobes of the cerebral cortex in the brain of mammals. The temporal lobe is located beneath the lateral fissure on both cerebral hemispheres of the mammalian brain.The temporal lobe is involved in processing sensory input into derived meanings for the appropriate retention of visual memory, language comprehension, and emotion association.",wikiUrl:"https://en.wikipedia.org/wiki/Temporal_lobe"},"Cingulate cortex":{detail:"The cingulate cortex is a part of the brain situated in the medial aspect of the cerebral cortex. The cingulate cortex includes the entire cingulate gyrus, which lies immediately above the corpus callosum, and the continuation of this in the cingulate sulcus. The cingulate cortex is usually considered part of the limbic lobe.",wikiUrl:"https://en.wikipedia.org/wiki/Cingulate_cortex"},"Prefrontal cortex":{detail:"In mammalian brain anatomy, the prefrontal cortex (PFC) covers the front part of the frontal lobe of the cerebral cortex. This brain region has been implicated in executive functions, such as planning, decision making, working memory, personality expression, moderating social behavior and controlling certain aspects of speech and language.",wikiUrl:"https://en.wikipedia.org/wiki/Prefrontal_cortex"},"Motor cortex":{detail:"The motor cortex is the region of the cerebral cortex involved in the planning, control, and execution of voluntary movements. The motor cortex is an area of the frontal lobe located in the posterior precentral gyrus immediately anterior to the central sulcus.",wikiUrl:"https://en.wikipedia.org/wiki/Motor_cortex"},"Somatosensory cortex":{detail:"The somatosensory cortex encodes incoming sensory information from receptors all over the body. The postcentral gyrus includes the primary somatosensory cortex (Brodmann areas 3, 2 and 1) collectively referred to as S1.",wikiUrl:"https://en.wikipedia.org/wiki/Somatosensory_system#Somatosensory_cortex"},Hypothalamus:{detail:"The hypothalamus is a part of the brain that contains a number of small nuclei with a variety of functions. One of the most important functions is to link the nervous system to the endocrine system via the pituitary gland. The hypothalamus is located below the thalamus and is part of the limbic system. The hypothalamus is responsible for regulating certain metabolic processes and other activities of the autonomic nervous system. It synthesizes and secretes certain neurohormones, called releasing hormones or hypothalamic hormones, and these in turn stimulate or inhibit the secretion of hormones from the pituitary gland.",wikiUrl:"https://en.wikipedia.org/wiki/Hypothalamus"}};var h={name:"Anatomy",components:{brainArea:m},props:{atlasName:{type:String,default:"Adult Brain"}},data(){return{careBrain:"",BRAIN_STRUCTURE:new Map,BrainDetails:p}},watch:{},methods:{handleOutsideClick(){this.$refs.brain_area.handleOutsideClick()},toWiki(){this.careBrain&&""!==this.careBrain?window.open(p[this.careBrain].wikiUrl):this.$message.info("Please select a brain part")}},async mounted(){const e=await this.$store.dispatch("xlsxRead/fetchXlsxData","BRAIN_STRUCTURE");let a=new Map;e.map((e=>{a.set(e["名称"],e["维基百科链接"])})),this.BRAIN_STRUCTURE=a}},d=h,A=(0,c.A)(d,i,r,!1,null,"36c67bc9",null),b=A.exports},5866:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Brainstem（组3）.e602b5b1.png"},3338:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Medulla oblongata.813d75b3.png"},1275:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Midbrain.66112671.png"},4866:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Pones.81dc89bf.png"},2480:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Cerebral cortex（组1).75225449.png"},5375:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Cingulate.b0bf52d0.png"},3679:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Frontal lobe.704d90ec.png"},2467:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Motor Cortex.639e172f.png"},9307:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Occipital lobe.09bfda21.png"},4823:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Parietal lobe.9ada4b2e.png"},7223:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Prefrontal Cortex.2222e452.png"},9516:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Somatosensory cortex.0ac35aa9.png"},6692:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Temporal lobe.8ad63fca.png"},4161:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Corpus callosum（组6）.900cbd52.png"},7536:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Spinal cord（组5).eba7f4db.png"},8754:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABuAAAAUoAQMAAABn1YGfAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAAEySURBVHic7cEBDQAAAMKg909tDjegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4M8Ac8QAAYxzdrEAAAAASUVORK5CYII="},99:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Cerebellum（组2）.a0b43ea7.png"},6104:function(e,a,t){e.exports=t.p+"BCAGitPages/img/brain-bg.e4567433.png"},5762:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Amygdala.25117b20.png"},9462:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Basal ganglia.59017a19.png"},2151:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Deep structures（组4）.3e27ceec.png"},2235:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Hippocambus.8121811f.png"},5003:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Hypothalamus.e241c64d.png"},1422:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Olfactory bulb.f6339347.png"},6077:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Pineal gland.20280ece.png"},7941:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Pituitary gland.168d08d3.png"},3609:function(e,a,t){e.exports=t.p+"BCAGitPages/img/Thalamus.42f6a83f.png"},6106:function(e,a,t){e.exports=t.p+"BCAGitPages/img/putamen.ab9376ce.png"},169:function(e,a,t){e.exports=t.p+"BCAGitPages/img/brain.99ab0b3e.png"},7389:function(e,a,t){e.exports=t.p+"BCAGitPages/img/line.991a8d71.png"}}]);