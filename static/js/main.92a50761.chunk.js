(this["webpackJsonpmint-paint"]=this["webpackJsonpmint-paint"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var o,r,i,c=n(1),a=n.n(c),s=n(22),l=n.n(s),d=n(18),p=n(3),b=n(6),u=n(4),j=n(5),g=n(12),x=n(10),h=n(2),O=j.a.div(o||(o=Object(u.a)(["\n  background-color: var(--med-gray);\n  width: 100%;\n"])));function f(e,t){var n=t.type,o=t.payload,r=e[e.length-1];switch(n){case"START_BRUSH":case"START_LINE":return[].concat(Object(g.a)(e),[{tool:o.tool,color:o.foreground,points:[o.point.x,o.point.y]}]);case"CONTINUE_BRUSH":return r.points=r.points.concat([o.point.x,o.point.y]),e.splice(e.length-1,1,r),e.concat();case"CONTINUE_LINE":return r.points[2]=o.point.x,r.points[3]=o.point.y,e.splice(e.length-1,1,r),e.concat()}}function A(e){var t=e.foreground,n=e.currentTool,o=Object(c.useRef)(!1),r=Object(c.useReducer)(f,[]),i=Object(b.a)(r,2),a=i[0],s=i[1];return Object(h.jsx)(O,{children:Object(h.jsxs)(x.d,{width:500,height:500,onMouseDown:function(e){o.current=!0;var r=e.target.getStage().getPointerPosition();s({type:"START_".concat(n),payload:{point:r,foreground:t,tool:n}})},onMouseUp:function(e){o.current=!1;e.target.getStage().getPointerPosition()},onMouseMove:function(e){if(o.current){var t=e.target.getStage().getPointerPosition();s({type:"CONTINUE_".concat(n),payload:{point:t}})}},children:[Object(h.jsx)(x.a,{children:Object(h.jsx)(x.c,{width:500,height:500,fill:"#ffffff"})}),Object(h.jsx)(x.a,{children:a.map((function(e,t){return Object(h.jsx)(x.b,{points:e.points,stroke:e.color,strokeWidth:5,tension:.5,lineCap:"square"},t)}))})]})})}var m,v,k,E,y,B=j.a.div(r||(r=Object(u.a)(["\n  width: 100%;\n  background-color: #c0c0c0;\n"]))),F=j.a.button(i||(i=Object(u.a)(["\n  border: 0;\n  background-color: transparent;\n  padding: 4px;\n\n  &::first-letter {\n    text-decoration: underline;\n  }\n"])));function C(){return Object(h.jsxs)(B,{children:[Object(h.jsx)(F,{children:"File"}),Object(h.jsx)(F,{children:"Edit"}),Object(h.jsx)(F,{children:"View"}),Object(h.jsx)(F,{children:"Image"}),Object(h.jsx)(F,{children:"Options"}),Object(h.jsx)(F,{children:"Help"})]})}var w=["#000000","#7C7D7E","#7F0307","#828207","#078102","#047B7B","#010572","#7F0078","#787E3C","#043A3A","#017EFF","#06397C","#360EC4","#673C17","#FFFFFF","#BDBDBD","#F90304","#F9FE00","#00FB03","#0DFDF8","#0401F9","#F804F9","#FBFE82","#05FD7C","#76FFFA","#7B7CFE","#FC047C","#FE7C36"],S=j.a.button(m||(m=Object(u.a)(["\n  width: ","px;\n  height: ","px;\n  background-color: ",";\n  cursor: pointer;\n  border-style: inset;\n"])),24,24,(function(e){return e.color})),M=Object(j.a)(S)(v||(v=Object(u.a)(["\n  grid-column: ",";\n  grid-row: ",";\n  z-index: ",";\n"])),(function(e){return e.foreground?"1 / span 2":"2 / span 2"}),(function(e){return e.foreground?"1 / span 2":"2 / span 2"}),(function(e){return e.active?5:4})),P=j.a.div(k||(k=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, calc(("," / 2) * 1px));\n  grid-template-rows: repeat(3, calc(("," / 2) * 1px));\n  background-color: var(--light-gray);\n  padding: 6px;\n  border-style: inset;\n"])),24,24),R=j.a.div(E||(E=Object(u.a)(["\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(14, 1fr);\n  gap: 3px;\n"]))),T=j.a.div(y||(y=Object(u.a)(["\n  position: sticky;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  background-color: var(--gray);\n  padding: 4px;\n  gap: 12px;\n"])));function U(e){var t=e.foreground,n=e.background,o=e.setForeground,r=e.setBackground,i=Object(c.useState)("foreground"),a=Object(b.a)(i,2),s=a[0],l=a[1];return Object(h.jsxs)(T,{children:[Object(h.jsxs)(P,{children:[Object(h.jsx)(M,{foreground:!0,active:"foreground"===s,color:t,onClick:function(){return l("foreground")}}),Object(h.jsx)(M,{background:!0,active:"background: "===s,color:n,onClick:function(){return l("background")}})]}),Object(h.jsx)(R,{children:w.map((function(e,t){return Object(h.jsx)(S,{color:e,onClick:function(){"foreground"===s?o(e):r(e)}},t)}))})]})}var D,I,L,N,J,V,Y=[{name:"FREEFORM_SELECT",title:"Free-form Select",position:"0",options:{method:["opaque","transparent"]}},{name:"MARQUEE_SELECT",title:"Marquee Select",position:"-16px",options:{method:["opaque","transparent"]}},{name:"ERASER",title:"Eraser",position:"-32px",options:{size:[4,6,8,10]}},{name:"PAINT_BUCKET",title:"Paint Bucket",position:"-48px",options:{}},{name:"EYEDROPPER",title:"Eyedropper",position:"-64px",options:{}},{name:"ZOOM",title:"Zoom",position:"-80px",options:{amount:[1,2,6,8]}},{name:"PENCIL",title:"Pencil",position:"-96px",options:{}},{name:"BRUSH",title:"Brush",position:"-112px",options:{strokeWidth:[7,5,3],strokeType:["round","square","right","left"]}},{name:"AIRBRUSH",title:"Airbrush",position:"-128px",options:{size:[0,1,2]}},{name:"TEXT",title:"Text",position:"-144px",options:{method:["opaque","transparent"]}},{name:"LINE",title:"Line",position:"-160px",options:{strokeWidth:[1,2,3,4,5]}},{name:"CURVE",title:"Curve",position:"-176px",options:{strokeWidth:[1,2,3,4,5]}},{name:"RECTANGLE",title:"Rectangle",position:"-192px",options:{type:["stroke","both","fill"]}},{name:"POLYGON",title:"Polygon",position:"-208px",options:{type:["stroke","both","fill"]}},{name:"ELLIPSE",title:"Ellipse",position:"-224px",options:{type:["stroke","both","fill"]}},{name:"ROUNDED_RECTANGLE",title:"Rounded Rectangle",position:"-240px",options:{type:["stroke","both","fill"]}}],H=j.a.div(D||(D=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 4px;\n  background-color: var(--gray);\n  gap: 4px;\n"]))),Q=j.a.div(I||(I=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 28px);\n"]))),W=j.a.button(L||(L=Object(u.a)(["\n  background-color: var(--neutral-300);\n  padding: 4px;\n  display: flex;\n  border-style: ",";\n  background-color: ",";\n  border-color: var(--border-color);\n"])),(function(e){return e.selected?"inset":"outset"}),(function(e){return e.selected?"var(--neutral-200)":"var(--neutral-300)"})),X=j.a.div(N||(N=Object(u.a)(["\n  image-rendering: pixelated;\n  background-image: url(",");\n  background-position: "," 0;\n  height: 16px;\n  width: 16px;\n"])),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAQCAYAAAD506FJAAAFLElEQVR4Xu1aa5qrIAzFlbVd2XRWZrsy7gcCxpgn4Dy+O/3TVgmEkHNyQJdw/sQQwkJc/7tki0CKH/zMiCXs09NftfPY2Gb581v9z3M3rw6VGFrgfhtBaPMxB6s05MCYr79er0N/9/u9/u8FYVxBj4/tt6WvuBbDx2ak2KwxhMcSQv1OJvC3N0zBkyez16g6e1W/UjBwAaDaWtbPHfAeA44AOAepgNaFhvesv7VAcMHU7FoCxBjDsuTmVhtxcRPAAahrv/H5fIaPj49m+36/2+9kk+53+pAJ4B63UDjm4iCANb5eS7jfY6jfexAK5diJJ7XsUSxXgVXr1wJYLidI/OAiUI1L3szIQ8ofzzyaD5ozkMU5RvcwPXRcs4sJvBtuj98bnk+AxklX7EvmFqNOEOKkhvPIDm6+hgCBDxt1Ln7utBKAA/zZX5sCoMCflMAG4jqvMraVxHoIAMZYy0tvsZNyLXKAlQYR1pPtz5gDEpDZwuyZA/TDogBw8DTgeheHZDMF/DgRW9Bqha6JW6smSmRPgqnMmsa83W4s+AcqQHZ75y6S+Lh4GwkgU0xTANs2IH8aqe3gb8VUix+OmdYeFwYr0Vhz7asIYAT8OWYSkJnt5BCBWQgAB3kWIbCKQgJ/qmpoT3sCf6ilD3teDMvlnqTEPeZKeREBFM6KmViM1eMAJK8CAOBvBHAGf8OmtE1sCqIj1rOVgLoF8FRPhcx7CcAFYpQLLlvsvwcEbKXplNUUAYiyn0noxpw5MDbw17lY5p99AhIY25oXwAniFgugACz+Vv+GFcC+4HALdpi+VEBGVMAsEtDAn8eZRABfAn6CgIb8xwtokfeWNlZpdqhYWuVPjYkT7SMBZEVbZAJijINTu5SQQNVk8OfnZz3Iw/LUvAAOAmjgf7/boWMX+Ouc+ScBpPxvJOIkAUodesiWUps43tbcsoD/jwBAND3Ahm09dgfAA+XQU/mJJG0Hg7EpgaPs32yOxMBK2XpuAMAPTyQPc5GqSDof8B7gbWeKB+VhJYBW+TFSJBJA8h+vU/mPlcDp6YpEAFcDmfLZEjMzgcMBrDLcQPqj4w/ZtwOfDhkPs8ESaIrd2x6aovUUPMM+ljpx3ghgPvi56pMfA6LHg7ltAn8lkNTm+XxqsRre+yslEo0vKgBBCeRblIKUhtfmzsa33LDYWyt/m9uELQAJQiofwAQb9gbHHyYAGDAueFSbOhfLokhJIe6diEM/ikgoX86n987Kv6SXejYSsczxdIq7g/8GfG6n7GKyo9N/y/gEWMkhiL5ML/xoe3r2UBd54ZlLT1X3KtIhAFVp5AExoQpcPljVhwS62oflKYAWUO2+lOiqAjAwP6UAzmC4FvxUopZrK/VyjXjuMAiYw/sPsC96G2ICP46nJW+4mPQSQOrPUt29+egCX50UAKHbntkWnAoIBo7wVqnLB+09AIk4qHvUxpBTFfg63IJw41oSRkoMfB6g7vmdld8QLyiza3NWCUiEZhhre36fth3pzcT6nWUM+0akiwQkBYbV0lmF7daWdeXyTVJlFpIQCNsS4tZGLGBcT8q5QG/MJDvsSou9xOReJnVFbnJjbdHl++sas9SHKgE+Tnyost0wHTMJaHPRxnISwBD4NV+uuq/FSLs/0y8P8A6CbKYTvX1xBCAxbO9YV9v1EVYCf/rAA0PqXYJLSIAklr557NF1EsDVy/Jt/X8lCXzbJEcH9u7lRsf7mfaVBCjvpgAfdlwIZ3/ldmZMLNWoV3rP9POvrx8SgX+tMt8v1elb4wAAAABJRU5ErkJggg==",(function(e){return e.position})),q=j.a.div(J||(J=Object(u.a)(["\n  height: 64px;\n  width: 48px;\n  background-color: var(--neutral-300);\n  border-style: inset;\n"])));function K(e){var t=e.currentTool,n=e.setCurrentTool;return Object(h.jsxs)(H,{children:[Object(h.jsx)(Q,{children:Y.map((function(e,o){return Object(h.jsx)(W,{title:e.title,onClick:function(){return n(e.name)},selected:t===e.name,children:Object(h.jsx)(X,{position:e.position})},o)}))}),Object(h.jsx)(q,{})]})}var z=j.a.div(V||(V=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n"])));function Z(){var e=Object(c.useState)("#000000"),t=Object(b.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)("#ffffff"),i=Object(b.a)(r,2),a=i[0],s=i[1],l=Object(c.useState)("BRUSH"),d=Object(b.a)(l,2),p=d[0],u=d[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(C,{}),Object(h.jsxs)(z,{children:[Object(h.jsx)(K,{currentTool:p,setCurrentTool:u}),Object(h.jsx)(A,{foreground:n,background:a,currentTool:p})]}),Object(h.jsx)(U,{foreground:n,background:a,setForeground:o,setBackground:s})]})}var G,_,$,ee,te,ne=j.a.div(G||(G=Object(u.a)(["\n  background-color: var(--bg-desktop);\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n"]))),oe=j.a.div(_||(_=Object(u.a)(["\n  background-color: var(--neutral-300);\n  padding: 3px;\n  border: 2px solid;\n  border-color: var(--outset-border);\n  width: 500px;\n  margin: 1rem;\n"]))),re=j.a.div($||($=Object(u.a)(["\n  background-color: var(--blue-400);\n  color: var(--neutral-100);\n  padding: 3px;\n"]))),ie=j.a.div(ee||(ee=Object(u.a)(["\n  margin: 8px;\n"]))),ce=j.a.a(te||(te=Object(u.a)(["\n  cursor: pointer;\n  background-color: var(--neutral-300);\n  border: 2px solid;\n  border-color: var(--outset-border);\n  padding: 3px;\n  text-decoration: none;\n\n  &:focus,\n  &:active {\n    border-color: var(--inset-border);\n  }\n"])));function ae(){return Object(h.jsxs)(ne,{children:[Object(h.jsxs)(oe,{children:[Object(h.jsx)(re,{children:"Links"}),Object(h.jsxs)(ie,{children:[Object(h.jsx)(d.b,{to:"/",children:Object(h.jsx)(ce,{children:"Demo"})}),Object(h.jsx)(ce,{href:"https://github.com/amaliaroye/mint-paint",target:"_blank",rel:"noreferrer",children:"Github Repo"})]}),Object(h.jsxs)(ie,{children:[Object(h.jsx)("p",{children:"Made by Amalia Advincula-Roye"}),Object(h.jsx)(ce,{href:"https://amaliaroye.github.io/",target:"_blank",rel:"noreferrer",children:"Portfolio"}),Object(h.jsx)(ce,{href:"https://github.com/amaliaroye",target:"_blank",rel:"noreferrer",children:"GitHub"}),Object(h.jsx)(ce,{href:"https://www.linkedin.com/in/amalia-advincula-roye/",target:"_blank",rel:"noreferrer",children:"LinkedIn"})]})]}),Object(h.jsxs)(oe,{children:[Object(h.jsx)(re,{children:"Technologies Used"}),Object(h.jsx)(ie,{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"React"}),Object(h.jsx)("li",{children:"Konva"}),Object(h.jsx)("li",{children:"Styled Components"})]})})]})]})}n(38);l.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(d.a,{basename:"/mint-paint",children:Object(h.jsxs)(p.c,{children:[Object(h.jsx)(p.a,{path:"/about",element:Object(h.jsx)(ae,{})}),Object(h.jsx)(p.a,{path:"/",element:Object(h.jsx)(Z,{})})]})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.92a50761.chunk.js.map