(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[132],{2279:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>W});var a=t(9835);const l={class:"q-pa-md items-start q-gutter-md"},n=(0,a.Uk)("QSpinnerHourglass"),o=(0,a.Uk)(" Fetching data... ");function i(e,s,t,i,r,c){const j=(0,a.up)("q-breadcrumbs-el"),u=(0,a.up)("q-breadcrumbs"),d=(0,a.up)("q-tab"),m=(0,a.up)("q-tabs"),p=(0,a.up)("q-card-section"),g=(0,a.up)("q-card"),b=(0,a.up)("q-spinner-hourglass"),h=(0,a.up)("q-tooltip"),f=(0,a.up)("q-btn"),w=(0,a.up)("q-td"),k=(0,a.up)("q-table");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(u,{align:"right"},{default:(0,a.w5)((()=>[(0,a.Wm)(j,{icon:"home",to:"/"}),(0,a.Wm)(j,{label:"User Accounts",icon:"person",to:"/user/accounts"})])),_:1}),(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{modelValue:r.tab,"onUpdate:modelValue":s[0]||(s[0]=e=>r.tab=e),class:"text-teal"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.tab_list,((e,s)=>((0,a.wg)(),(0,a.j4)(d,{name:e.name,icon:e.icon,label:e.label,key:s},null,8,["name","icon","label"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1}),r.loading_list?((0,a.wg)(),(0,a.j4)(g,{key:0},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{class:"flex flex-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{color:"primary",size:"2em","align-self-center":""}),(0,a.Wm)(h,{offset:[0,8]},{default:(0,a.w5)((()=>[n])),_:1}),o])),_:1})])),_:1})):((0,a.wg)(),(0,a.j4)(k,{key:1,ref:"tableRef",title:"User Accounts",rows:r.userTable.rows,columns:r.userTable.columns,"table-header-class":"bg-black text-white","row-key":"name"},{"body-cell-actions":(0,a.w5)((e=>[(0,a.Wm)(w,{props:e},{default:(0,a.w5)((()=>["for_approval"==e.row.status?((0,a.wg)(),(0,a.j4)(f,{key:0,dense:"",size:"sm",style:{padding:"2px 5px"},color:"secondary",icon:"thumb_up",label:"Approve",onClick:s=>c.approveUser(e)},null,8,["onClick"])):(0,a.kq)("",!0),e.row.active&&"approved"==e.row.status?((0,a.wg)(),(0,a.j4)(f,{key:1,dense:"",size:"sm",style:{background:"goldenrod",color:"white",margin:"0 5px",padding:"2px 5px"},icon:"toggle_off",label:"Shutdown Website",onClick:s=>c.shutdownWeb(e,!1)},null,8,["onClick"])):(0,a.kq)("",!0),e.row.active?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(f,{key:2,dense:"",size:"sm",color:"green",icon:"toggle_on",label:"Activate Web",onClick:s=>c.shutdownWeb(e,!0)},null,8,["onClick"]))])),_:2},1032,["props"])])),_:1},8,["rows","columns"]))])}t(3878);var r=t(9981),c=t.n(r),j=t(3100),u=t(3703);const d={data(){return{tab:"all",loading_list:!0,tab_list:[{label:"All",name:"all",icon:"list"},{label:"For Approval",name:"for_approval",icon:"pending"},{label:"Approved",name:"approved",icon:"check_circle"}],userTable:{rows:[],columns:[{name:"id",align:"left",label:"#",field:"id",sortable:!0},{name:"fullname",align:"left",label:"Full Name",field:"fullname",sortable:!0},{name:"cms_id",required:!0,label:"CMS ID",field:"cmsID",sortable:!0,align:"left"},{name:"company",required:!0,label:"Business Name",field:"company",sortable:!0,align:"left"},{name:"email",required:!0,label:"Email Address",field:"email",sortable:!0,align:"left"},{name:"status",label:"Status",align:"left",field:"status",sortable:!0},{name:"actions",label:"Actions",field:"sodium"}]}}},mounted(){this.getAllUserApplication()},watch:{tab(e,s){e&&this.getAllUserApplication()}},methods:{...(0,j.nv)("users",["approveUser"]),getAllUserApplication(){let e=this;e.loading_list=!0,c()({url:"http://119.12.166.178:10003/usr/"+e.tab,method:"get",headers:{authorization:`Bearer ${u.Z.getItem("accessToken")}`}}).then((s=>{console.log(s.data,"asdasd"),200==s.status&&(s.data.map(((e,s)=>{e.fullname=`${e.fname} ${e.lname}`,e.company=e.bsns_name,e.id=s+1})),this.userTable.rows=s.data,e.loading_list=!1,console.log(this.userTable.rows))})).catch((s=>{console.log(s.response),e.loading_list=!1}))},async shutdownWeb(e,s){let t=e.row.cmsID,a={_id:t,active:s},l="Deactivating website...",n="Successfully deactivated website";s&&(l="Reactivating website...",n="Successfully reactivated website");let o=this.$q.notify({type:"ongoing",position:"top-right",message:l,timeout:1e3});try{let{data:e,status:s}=await this.$store.dispatch("users/deactivateWeb",a);[200,201].includes(s)?(o({type:"positive",position:"top-right",message:n}),this.getAllUserApplication()):o({type:"negative",icon:"error",message:"Something went wrong"})}catch(i){this.$q.notify({type:"negative",icon:"error",message:"Something went wrong"}),console.log(i)}},approveUser(e){let s={id:e.row._id},t=this.$q.notify({type:"ongoing",position:"top-right",message:"Sending approval request...",timeout:1e3});return c()({url:`http://119.12.166.178:10003/apprv/${s.id}`,method:"put",headers:{authorization:`Bearer ${u.Z.getItem("accessToken")}`}}).then((e=>{console.log(e,"APPROVAL"),t({type:"positive",position:"top-right",message:"Successfully approved user"}),this.getAllUserApplication()})).catch((e=>{this.$q.notify({type:"negative",icon:"error",message:"Something went wrong"})})),this.getAllUserApplication(),!1}}};var m=t(1639),p=t(2605),g=t(8052),b=t(4458),h=t(3190),f=t(7817),w=t(900),k=t(3358),y=t(6858),v=t(7079),z=t(7220),_=t(4455),q=t(9984),A=t.n(q);const U=(0,m.Z)(d,[["render",i]]),W=U;A()(d,"components",{QBreadcrumbs:p.Z,QBreadcrumbsEl:g.Z,QCard:b.Z,QCardSection:h.Z,QTabs:f.Z,QTab:w.Z,QSpinnerHourglass:k.Z,QTooltip:y.Z,QTable:v.Z,QTd:z.Z,QBtn:_.Z})},6700:(e,s,t)=>{var a={"./af":202,"./af.js":202,"./ar":6314,"./ar-dz":5666,"./ar-dz.js":5666,"./ar-kw":6591,"./ar-kw.js":6591,"./ar-ly":7900,"./ar-ly.js":7900,"./ar-ma":5667,"./ar-ma.js":5667,"./ar-sa":4092,"./ar-sa.js":4092,"./ar-tn":1379,"./ar-tn.js":1379,"./ar.js":6314,"./az":1699,"./az.js":1699,"./be":8988,"./be.js":8988,"./bg":7437,"./bg.js":7437,"./bm":7947,"./bm.js":7947,"./bn":2851,"./bn-bd":4905,"./bn-bd.js":4905,"./bn.js":2851,"./bo":7346,"./bo.js":7346,"./br":1711,"./br.js":1711,"./bs":3706,"./bs.js":3706,"./ca":112,"./ca.js":112,"./cs":6406,"./cs.js":6406,"./cv":1853,"./cv.js":1853,"./cy":9766,"./cy.js":9766,"./da":6836,"./da.js":6836,"./de":9320,"./de-at":4904,"./de-at.js":4904,"./de-ch":6710,"./de-ch.js":6710,"./de.js":9320,"./dv":3274,"./dv.js":3274,"./el":286,"./el.js":286,"./en-au":143,"./en-au.js":143,"./en-ca":237,"./en-ca.js":237,"./en-gb":2428,"./en-gb.js":2428,"./en-ie":3349,"./en-ie.js":3349,"./en-il":3764,"./en-il.js":3764,"./en-in":7809,"./en-in.js":7809,"./en-nz":9851,"./en-nz.js":9851,"./en-sg":5594,"./en-sg.js":5594,"./eo":4483,"./eo.js":4483,"./es":2184,"./es-do":5777,"./es-do.js":5777,"./es-mx":9356,"./es-mx.js":9356,"./es-us":8496,"./es-us.js":8496,"./es.js":2184,"./et":7578,"./et.js":7578,"./eu":2092,"./eu.js":2092,"./fa":5927,"./fa.js":5927,"./fi":171,"./fi.js":171,"./fil":2416,"./fil.js":2416,"./fo":9937,"./fo.js":9937,"./fr":5172,"./fr-ca":8249,"./fr-ca.js":8249,"./fr-ch":7541,"./fr-ch.js":7541,"./fr.js":5172,"./fy":7907,"./fy.js":7907,"./ga":6361,"./ga.js":6361,"./gd":2282,"./gd.js":2282,"./gl":2630,"./gl.js":2630,"./gom-deva":680,"./gom-deva.js":680,"./gom-latn":6220,"./gom-latn.js":6220,"./gu":6272,"./gu.js":6272,"./he":5540,"./he.js":5540,"./hi":6067,"./hi.js":6067,"./hr":9669,"./hr.js":9669,"./hu":3396,"./hu.js":3396,"./hy-am":6678,"./hy-am.js":6678,"./id":4812,"./id.js":4812,"./is":4193,"./is.js":4193,"./it":7863,"./it-ch":959,"./it-ch.js":959,"./it.js":7863,"./ja":1809,"./ja.js":1809,"./jv":8657,"./jv.js":8657,"./ka":3290,"./ka.js":3290,"./kk":8418,"./kk.js":8418,"./km":7687,"./km.js":7687,"./kn":1375,"./kn.js":1375,"./ko":2641,"./ko.js":2641,"./ku":3518,"./ku.js":3518,"./ky":5459,"./ky.js":5459,"./lb":1978,"./lb.js":1978,"./lo":6915,"./lo.js":6915,"./lt":8948,"./lt.js":8948,"./lv":2548,"./lv.js":2548,"./me":8608,"./me.js":8608,"./mi":333,"./mi.js":333,"./mk":1876,"./mk.js":1876,"./ml":999,"./ml.js":999,"./mn":4098,"./mn.js":4098,"./mr":6111,"./mr.js":6111,"./ms":3717,"./ms-my":265,"./ms-my.js":265,"./ms.js":3717,"./mt":8980,"./mt.js":8980,"./my":6895,"./my.js":6895,"./nb":5348,"./nb.js":5348,"./ne":1493,"./ne.js":1493,"./nl":4419,"./nl-be":5576,"./nl-be.js":5576,"./nl.js":4419,"./nn":6907,"./nn.js":6907,"./oc-lnc":2321,"./oc-lnc.js":2321,"./pa-in":9239,"./pa-in.js":9239,"./pl":7627,"./pl.js":7627,"./pt":5703,"./pt-br":1623,"./pt-br.js":1623,"./pt.js":5703,"./ro":2747,"./ro.js":2747,"./ru":4420,"./ru.js":4420,"./sd":2148,"./sd.js":2148,"./se":2461,"./se.js":2461,"./si":2783,"./si.js":2783,"./sk":3306,"./sk.js":3306,"./sl":341,"./sl.js":341,"./sq":2768,"./sq.js":2768,"./sr":2451,"./sr-cyrl":3371,"./sr-cyrl.js":3371,"./sr.js":2451,"./ss":8812,"./ss.js":8812,"./sv":3820,"./sv.js":3820,"./sw":3615,"./sw.js":3615,"./ta":2869,"./ta.js":2869,"./te":2044,"./te.js":2044,"./tet":5861,"./tet.js":5861,"./tg":6999,"./tg.js":6999,"./th":1772,"./th.js":1772,"./tk":7443,"./tk.js":7443,"./tl-ph":9786,"./tl-ph.js":9786,"./tlh":2812,"./tlh.js":2812,"./tr":6952,"./tr.js":6952,"./tzl":9573,"./tzl.js":9573,"./tzm":5990,"./tzm-latn":6961,"./tzm-latn.js":6961,"./tzm.js":5990,"./ug-cn":2610,"./ug-cn.js":2610,"./uk":9498,"./uk.js":9498,"./ur":3970,"./ur.js":3970,"./uz":9006,"./uz-latn":26,"./uz-latn.js":26,"./uz.js":9006,"./vi":9962,"./vi.js":9962,"./x-pseudo":8407,"./x-pseudo.js":8407,"./yo":1962,"./yo.js":1962,"./zh-cn":8909,"./zh-cn.js":8909,"./zh-hk":4014,"./zh-hk.js":4014,"./zh-mo":996,"./zh-mo.js":996,"./zh-tw":6327,"./zh-tw.js":6327};function l(e){var s=n(e);return t(s)}function n(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=n,e.exports=l,l.id=6700}}]);