(this["webpackJsonpps1-igib-client"]=this["webpackJsonpps1-igib-client"]||[]).push([[0],{114:function(e,t,i){e.exports={card:"card_card__1PvOV",card__img:"card_card__img__1jeQB",card__info:"card_card__info__uaICv"}},130:function(e,t){},190:function(e,t){},191:function(e,t){},192:function(e,t){},193:function(e,t){},194:function(e,t){},195:function(e,t,i){},263:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i(28),r=i.n(n),s=(i(160),i(27)),c=i(38),o=i(272),l=i(42),d=i(7);function h(){var e=Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Welcome"}),Object(d.jsxs)(o.b,{direction:"vertical",children:[Object(d.jsx)(l.a,{type:"link",large:!0,children:Object(d.jsx)(c.b,{to:"/form",children:"Click this to fill the Clinical Features!"})}),Object(d.jsx)(l.a,{type:"link",large:!0,children:Object(d.jsx)(c.b,{to:"/genomics",children:"Click this to get the Filtered Genomics Data"})})]})]});return Object(d.jsx)("div",{children:e})}var g=i(60),p=i.n(g),j=i(99),u=i(44),m=i(266),b=i(150),f=i(271),O=m.a.Dragger;function x(e){var t=Object(a.useState)(""),i=Object(u.a)(t,2),n=i[0],r=i[1],s=Object(a.useState)(""),c=Object(u.a)(s,2),o=c[0],h=c[1],g=function(){var e=Object(j.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("uploading"===t.file.status){e.next=4;break}return console.log(t.file.response),e.next=4,r(t.file.response);case 4:"done"===t.file.status?b.b.success("".concat(t.file.name," file uploaded successfully")):"error"===t.file.status&&b.b.error("".concat(t.file.name," file upload failed."));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=new Blob([n],{type:"text/plain"});""!==o&&window.URL.revokeObjectURL(o),h(window.URL.createObjectURL(e))}),[n,o]),Object(d.jsxs)("div",{children:[Object(d.jsxs)(O,{onChange:g,name:"file",action:"https://ps1-igib.herokuapp.com/genomics",children:[Object(d.jsx)("p",{className:"ant-upload-drag-icon",children:Object(d.jsx)(f.a,{})}),Object(d.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),Object(d.jsx)("p",{className:"ant-upload-hint",children:"Support for uploading only CSV files. Strictly prohibit from uploading other files or any sensitive information"})]}),n&&Object(d.jsx)(l.a,{children:Object(d.jsx)("a",{download:"list.txt",href:o,children:"Download The File"})})]})}var v=i(265),y=i(269),S=i(84),_=i.n(S),w=i(124);function N(){return Object(d.jsx)("div",{children:Object(d.jsxs)(w.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],children:[Object(d.jsx)(w.a.Item,{children:Object(d.jsx)(c.c,{to:"/",children:"Home"})},1),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(w.a.Item,{children:Object(d.jsx)(c.c,{to:"/form",children:"Form"})},2)}),Object(d.jsx)(w.a.Item,{children:Object(d.jsx)(c.c,{to:"/genomics",children:"Genomics"})},3)]})})}var L=v.a.Header,M=v.a.Content,P=v.a.Footer;function A(e){var t=Object(s.g)();return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:_.a.layout,children:Object(d.jsxs)(v.a,{className:_.a.layout,children:[Object(d.jsxs)(L,{children:[Object(d.jsx)("div",{className:_.a.logo}),Object(d.jsx)(N,{})]}),Object(d.jsxs)(M,{style:{padding:"0 50px"},children:[Object(d.jsxs)(y.a,{style:{margin:"16px 0"},children:[Object(d.jsx)(y.a.Item,{children:"Home"}),Object(d.jsx)(y.a.Item,{children:t.pathname.slice(1).toUpperCase()})]}),Object(d.jsx)("div",{className:_.a["site-layout-content"],children:e.children})]}),Object(d.jsx)(P,{style:{textAlign:"center"},children:"\xa9 CSIR-IGIB"})]})})})}var k=i(85),E=i(155);function C(e){var t=e.match;k.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(k.c.version,"/pdf.worker.js");var i=Object(a.useState)(null),n=Object(u.a)(i,2),r=n[0],s=n[1],c=Object(a.useState)(1),o=Object(u.a)(c,2),h=o[0],g=o[1];function p(e){g((function(t){return t+e}))}return document.addEventListener("contextmenu",(function(e){e.preventDefault()})),Object(d.jsxs)("div",{children:[Object(d.jsx)(k.a,{file:"https://ps1-igib.herokuapp.com/report/".concat(t.params.id),onLoadSuccess:function(e){var t=e.numPages;s(t),g(1)},children:Object(d.jsx)(k.b,{pageNumber:h})}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"pagec",children:["Page ",h||(r?1:"--")," of ",r||"--"]}),Object(d.jsxs)("div",{className:"buttonc",style:{position:"relative",bottom:"70%",left:"67%",width:"33%"},children:[Object(d.jsx)(l.a,{type:"primary",disabled:h<=1,onClick:function(){p(-1)},children:"Previous Page"}),"\xa0\xa0\xa0",Object(d.jsx)(l.a,{type:"primary",disabled:h>=r,onClick:function(){p(1)},children:"Next Page"})]})]}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{style:{position:"relative",bottom:"0%",left:"69.5%",width:"16%"},children:Object(d.jsx)("a",{href:"https://ps1-igib.herokuapp.com/report/".concat(t.params.id),children:Object(d.jsx)(l.a,{type:"primary",shape:"round",icon:Object(d.jsx)(E.a,{}),size:"large",children:"Download Report"})})})]})}i(195);var D=[{},{heading:"Distribution Of Skin Lesions",opt:["Generalised","Limited","Hands & Feet","Herpetiform"],mapping:["Generalised","Limited","Hands & Feet","Herpetiform"],imgs:["DL1","DL2","DL3","DL4"],size:["23%"],cardheight:["100%"],imageheight:["90%"],subtitle:["Generalised","Limited","Hands & feet","Herpetiform"],title:[""]},{heading:"Excess Granulation Tissue",opt:["Absent","Present"],mapping:["-","+"],imgs:["EG1","EG2"],size:["47%"],cardheight:["100%"],imageheight:["98.5%"],subtitle:["","","","",""],title:["Presence Of excess granulation tissues in wounds"]},{heading:"Scarring",opt:["Absent Scarring Or Pigmentary Change Only","Mild To Moderate Scarring Localised To Lesions","Severe Extensive Atrophic Scarring"],mapping:["-","+","++"],imgs:["SC1","SC3","SC4"],size:["32%"],cardheight:["100%"],imageheight:["83%"],subtitle:["Absent scarring or pigmentary change only","Mild to Moderate scarring localised to lesions","Severe extensive atrophic scarring"],title:[""]},{heading:"Milia",opt:["Absent","Milia Localised To Scars","Widespread Milia"],mapping:["-","+","++"],imgs:["MI1","MI2"],size:["47%"],cardheight:["100%"],imageheight:["92%"],subtitle:["Localised Milia","Widespread Milia"],title:[""]},{heading:"Nail Dystrophy",opt:["No Dystrophic Nails","1-9 Dystrophic Nails","10 Or More Dystrophic Nails"],mapping:["-","+","++"],imgs:["ND1","ND2","ND3"],size:["32%"],cardheight:["100%"],imageheight:["98.5%"],subtitle:["","","","",""],title:["Presence Of nail dystrophy characterized by thickening, deformity or discolouration"]},{heading:"Nail Loss",opt:["No Loss Of Nails","Loss Of Fewer Than 10 Nails","Loss Of 10 Or More Nails"],mapping:["-","+","++"],imgs:["NL1","NL2","NL3"],size:["32%"],cardheight:["70%"],imageheight:["98.5%"],subtitle:["","","","",""],title:["Examples Of Nail Loss"]},{heading:"Mucosal Erosions",opt:["No Mucosal Erosions","Occasional Erosions","Frequent Or Persistent Erosions"],mapping:["-","+","++"],imgs:["ME1","ME2","ME3"],size:["32%"],cardheight:["87%"],imageheight:["98.5%"],subtitle:["","","","",""],title:["Examples Of Mucosal Erosions"]},{heading:"Eye Involvement",opt:["None","Moderate: Recurrent Corneal Erosions","Severe: Granulations Or Scarring (Eg Symblepharon)"],mapping:["-","+","++"],imgs:["EI1","EI2","EI3"],size:["32%"],cardheight:["85%"],imageheight:["90%"],subtitle:["Moderate Eye Involvement","Severe: Granulation","Severe: Scarring, eg symblepharon"],title:[""]},{heading:"Hoarseness",opt:["Absence Of Hoarseness","Presence Of Hoarseness"],mapping:["-","+","++"],imgs:["RT1","RT1"],size:["48%"],cardheight:["100%"],imageheight:["92%"],subtitle:["Severe Respiratory tract involvement"],title:[""]},{heading:"Microstomia Or Ankyloglossia",opt:["Absent","Present"],mapping:["-","+","++"],imgs:["MA1","MA1"],size:["48%"],cardheight:["100%"],imageheight:["88%"],subtitle:["Microstomia With narrwing Of oral aperture as well as ankyloglossia With severe limitation Of toungue protrusion"],title:[""]},{heading:"Poor Dental Enamel",opt:["Normal","Deficient enamel","Not Applicable"],mapping:["-","+","++"],imgs:["DE1","DE2","DE3"],size:["32%"],cardheight:["100%"],imageheight:["98.5%"],subtitle:["","","","",""],title:["Deficient dental enamel With yellow pitted teeth. Dental caries should be disregarded"]},{heading:"Keratoderma",opt:["No keratoderma","Moderate Keratoderma","Severe Keratoderma"],mapping:["-","+","++"],imgs:["PK1","PK2","PK1"],size:["32%"],cardheight:["100%"],imageheight:["92%"],subtitle:["Moderate Keratoderma","Severe Keratoderma"],title:[""]},{heading:"Chronic Wounds",opt:["Absence Of Chronic Wounds","Moderate Chronic Wounds","Severe Chronic Wounds"],mapping:["-","+","++"],imgs:["CW1","CW2","CW3"],size:["32%"],cardheight:["100%"],imageheight:["86%"],subtitle:["Moderate: Limited wounds lasting weeks","Severe: more than limited wounds lasting months","Severe: larger wounds lasting months"],title:[""]},{heading:"Syndactyly",opt:["Absence Of Syndactyly","Moderate Syndactyly","Severe Syndactyly"],mapping:["-","+","++"],imgs:["SY1","SY2","SY1"],size:["32%"],cardheight:["70%"],imageheight:["92%"],subtitle:["Moderate Syndactyly","Severe Syndactyly"],title:[""]},{heading:"Alopecia",opt:["Absence Of Alopecia","Moderate Alopecia","Severe Alopecia"],mapping:["-","+","++"],imgs:["AL1","AL2","AL1"],size:["32%"],cardheight:["80%"],imageheight:["90%"],subtitle:["Moderate Alopecia","Severe Alopecia"],title:[""]},{heading:"Poikiloderma",opt:["Absence Of Poikiloderma","Presence Of Poikiloderma"],mapping:["-","+","++"],imgs:["PO1","PO2"],size:["48%"],cardheight:["100%"],imageheight:["98.5%"],subtitle:["","","","",""],title:["Poikiloderma characterized by hyperpigmentation, telangiectasia and atrophy"]},{heading:"Relative Growth Failure",opt:["Absent","Moderate","Severe"],mapping:["-","+","++"],imgs:["RG1","RG2","RG3"],size:["32%"],cardheight:["100%"],imageheight:["90%"],subtitle:["No growth failure","Moderate growth failure","Severe growth failure"],title:[""]},{heading:"Survival After 2 Yrs",opt:["Did Not Survive","Survived","Alive And Under 2"],mapping:["-","+","++"],imgs:["SU1","SU2","SU3"],size:["32%"],cardheight:["70%"],imageheight:["96.5%"],subtitle:["","","","",""],title:[""]},{heading:"Parents Affected",opt:["Parents Not Affected","Either Parent Affected","Unknown"],mapping:["-","+","++"],imgs:["PA1","PA2","PA3"],size:["32%"],cardheight:["90%"],imageheight:["90%"],subtitle:["Parents Not Effected","Either Parent Effected By EB","Parental History Not Known"],title:[""]}],z=i(267),F=i(268),G=i(270),I=i(79),H=i.n(I),R=i(114),W=i.n(R),K=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:W.a.card,style:{width:e.width},children:Object(d.jsxs)("label",{children:[Object(d.jsx)("img",{src:e.imgsrc,alt:"myPic",className:W.a.card__img,style:{height:e.imageheight}}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:W.a.card__info,children:Object(d.jsx)(G.a,{value:e.option.replace(/ /g,"")+e.i,children:Object(d.jsx)("span",{style:{fontSize:"1.3rem"},children:e.option})})})})]})})})};function T(e){var t=e.current,i=e.radioHandler,a=e.next_clinical,n=e.showModal,r=function(e){i(D[t].heading,e),t!==D.length-1&&setTimeout((function(){a()}),700),t===D.length-1&&n()};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:H.a.wrapper,children:[Object(d.jsx)("div",{id:H.a.head,className:H.a.items,children:D[t].heading}),Object(d.jsx)("div",{id:H.a.container,className:H.a.items,children:Object(d.jsx)(G.a.Group,{onChange:function(e){r(e)},children:D[t].imgs.map((function(e,i){return Object(d.jsx)(K,{width:D[t].size,cardheight:D[t].cardheight,imageheight:D[t].imageheight,imgsrc:"".concat("/ps1-igib-client","/New_Pictures/").concat(e,".jpg"),option:D[t].opt[i],i:i,radioChange:r})}))})})]})})}var U=function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),i=t[0],n=t[1],r=Object(a.useState)({}),c=Object(u.a)(r,2),o=c[0],h=c[1],g=Object(a.useState)(1),m=Object(u.a)(g,2),b=m[0],f=m[1],O=Object(s.f)(),x=Object(a.useState)(!1),v=Object(u.a)(x,2),y=v[0],S=v[1],_=z.a.useForm(),w=Object(u.a)(_,1)[0];Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(p.a.mark((function e(){var t,a,n,r,s=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"https://ps1-igib.herokuapp.com/",e.next=3,fetch(t,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}});case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r="".concat(n.id),O.replace("/summary/".concat(r));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i&&function(){return e.apply(this,arguments)}("https://ps1-igib.herokuapp.com/patient/299").then((function(e){}))}),[i]);var N=Object(d.jsx)(F.a,{title:"Basic Modal",visible:y,onOk:function(){S(!1),w.submit()},onCancel:function(){S(!1)},children:Object(d.jsx)("div",{children:Object(d.jsx)("h2",{children:"Do You wish to Submit?"})})});return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(z.a,{style:{overflow:"auto"},onFinish:function(){n({ClinicalFeatures:o})},form:w,children:[Object(d.jsx)(T,{current:b,radioHandler:function(e,t){h((function(i){return i[e.replace(/ /g,"")]=t.target.value,i}))},next_clinical:function(){f((function(e){return e+1}))},showModal:function(){S(!0)}}),b===D.length-1&&Object(d.jsx)(d.Fragment,{children:N}),Object(d.jsxs)("div",{style:{position:"relative",bottom:"0%",left:"83%",width:"16%"},children:[1!==b&&Object(d.jsx)(l.a,{onClick:function(){f((function(e){return e-1}))},children:"Previous"}),"\xa0\xa0\xa0",b!==D.length-1]})]})})},B=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(A,{children:Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{exact:!0,path:"/",children:Object(d.jsx)(h,{})}),Object(d.jsx)(s.a,{exact:!0,path:"/form",children:Object(d.jsx)(U,{})}),Object(d.jsx)(s.a,{exact:!0,path:"/genomics",children:Object(d.jsx)(x,{})}),Object(d.jsx)(s.a,{exact:!0,path:"/summary/:id",component:C})]})})})};r.a.render(Object(d.jsx)(c.a,{children:Object(d.jsx)(B,{})}),document.getElementById("root"))},79:function(e,t,i){e.exports={wrapper:"Lesions_wrapper__2e57D",img:"Lesions_img__1muhm",items:"Lesions_items__3m61e",title:"Lesions_title__F0VQ-",head:"Lesions_head__VXfr4",container:"Lesions_container__1Mj4O",form:"Lesions_form__2Hd3X"}},84:function(e,t,i){e.exports={"site-layout-content":"Layouts_site-layout-content__1M6D-",layout:"Layouts_layout__K8fDo",logo:"Layouts_logo__19t1F","ant-row-rtl":"Layouts_ant-row-rtl__MvAS4"}}},[[263,1,2]]]);
//# sourceMappingURL=main.12e08c70.chunk.js.map