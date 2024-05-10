import{_ as $,$ as q,j as s,c as V}from"./index.DqfD0BLj.js";import{r as l,R as c}from"./index.LHP-L4Pl.js";import{$ as z,a as B,b as F,c as w,d as W,e as se,f as ie,g as le,h as de,C as fe}from"./index.CJopAEOl.js";import{B as be}from"./button.BXGnmDqX.js";import"./index.C3GvvkrT.js";const J="Collapsible",[pe,Q]=z(J),[$e,L]=pe(J),ue=l.forwardRef((e,n)=>{const{__scopeCollapsible:t,open:o,defaultOpen:a,disabled:r,onOpenChange:i,...d}=e,[f=!1,b]=B({prop:o,defaultProp:a,onChange:i});return l.createElement($e,{scope:t,disabled:r,contentId:F(),open:f,onOpenToggle:l.useCallback(()=>b(m=>!m),[b])},l.createElement(w.div,$({"data-state":G(f),"data-disabled":r?"":void 0},d,{ref:n})))}),me="CollapsibleTrigger",xe=l.forwardRef((e,n)=>{const{__scopeCollapsible:t,...o}=e,a=L(me,t);return l.createElement(w.button,$({type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":G(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled},o,{ref:n,onClick:W(e.onClick,a.onOpenToggle)}))}),X="CollapsibleContent",ve=l.forwardRef((e,n)=>{const{forceMount:t,...o}=e,a=L(X,e.__scopeCollapsible);return l.createElement(se,{present:t||a.open},({present:r})=>l.createElement(ge,$({},o,{ref:n,present:r})))}),ge=l.forwardRef((e,n)=>{const{__scopeCollapsible:t,present:o,children:a,...r}=e,i=L(X,t),[d,f]=l.useState(o),b=l.useRef(null),m=q(n,b),x=l.useRef(0),C=x.current,h=l.useRef(0),A=h.current,E=i.open||d,_=l.useRef(E),v=l.useRef();return l.useEffect(()=>{const p=requestAnimationFrame(()=>_.current=!1);return()=>cancelAnimationFrame(p)},[]),ie(()=>{const p=b.current;if(p){v.current=v.current||{transitionDuration:p.style.transitionDuration,animationName:p.style.animationName},p.style.transitionDuration="0s",p.style.animationName="none";const u=p.getBoundingClientRect();x.current=u.height,h.current=u.width,_.current||(p.style.transitionDuration=v.current.transitionDuration,p.style.animationName=v.current.animationName),f(o)}},[i.open,o]),l.createElement(w.div,$({"data-state":G(i.open),"data-disabled":i.disabled?"":void 0,id:i.contentId,hidden:!E},r,{ref:m,style:{"--radix-collapsible-content-height":C?`${C}px`:void 0,"--radix-collapsible-content-width":A?`${A}px`:void 0,...e.style}}),E&&a)});function G(e){return e?"open":"closed"}const he=ue,Ce=xe,Ae=ve,g="Accordion",_e=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[H,Ee,we]=le(g),[I,ze]=z(g,[we,Q]),U=Q(),Z=c.forwardRef((e,n)=>{const{type:t,...o}=e,a=o,r=o;return c.createElement(H.Provider,{scope:e.__scopeAccordion},t==="multiple"?c.createElement(Ne,$({},r,{ref:n})):c.createElement(Re,$({},a,{ref:n})))});Z.propTypes={type(e){const n=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):e.type==="multiple"&&typeof n=="string"?new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):e.type==="single"&&Array.isArray(n)?new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};const[ee,Ie]=I(g),[te,ye]=I(g,{collapsible:!1}),Re=c.forwardRef((e,n)=>{const{value:t,defaultValue:o,onValueChange:a=()=>{},collapsible:r=!1,...i}=e,[d,f]=B({prop:t,defaultProp:o,onChange:a});return c.createElement(ee,{scope:e.__scopeAccordion,value:d?[d]:[],onItemOpen:f,onItemClose:c.useCallback(()=>r&&f(""),[r,f])},c.createElement(te,{scope:e.__scopeAccordion,collapsible:r},c.createElement(oe,$({},i,{ref:n}))))}),Ne=c.forwardRef((e,n)=>{const{value:t,defaultValue:o,onValueChange:a=()=>{},...r}=e,[i=[],d]=B({prop:t,defaultProp:o,onChange:a}),f=c.useCallback(m=>d((x=[])=>[...x,m]),[d]),b=c.useCallback(m=>d((x=[])=>x.filter(C=>C!==m)),[d]);return c.createElement(ee,{scope:e.__scopeAccordion,value:i,onItemOpen:f,onItemClose:b},c.createElement(te,{scope:e.__scopeAccordion,collapsible:!0},c.createElement(oe,$({},r,{ref:n}))))}),[Pe,y]=I(g),oe=c.forwardRef((e,n)=>{const{__scopeAccordion:t,disabled:o,dir:a,orientation:r="vertical",...i}=e,d=c.useRef(null),f=q(d,n),b=Ee(t),x=de(a)==="ltr",C=W(e.onKeyDown,h=>{var A;if(!_e.includes(h.key))return;const E=h.target,_=b().filter(O=>{var D;return!((D=O.ref.current)!==null&&D!==void 0&&D.disabled)}),v=_.findIndex(O=>O.ref.current===E),p=_.length;if(v===-1)return;h.preventDefault();let u=v;const R=0,N=p-1,P=()=>{u=v+1,u>N&&(u=R)},j=()=>{u=v-1,u<R&&(u=N)};switch(h.key){case"Home":u=R;break;case"End":u=N;break;case"ArrowRight":r==="horizontal"&&(x?P():j());break;case"ArrowDown":r==="vertical"&&P();break;case"ArrowLeft":r==="horizontal"&&(x?j():P());break;case"ArrowUp":r==="vertical"&&j();break}const ae=u%p;(A=_[ae].ref.current)===null||A===void 0||A.focus()});return c.createElement(Pe,{scope:t,disabled:o,direction:a,orientation:r},c.createElement(H.Slot,{scope:t},c.createElement(w.div,$({},i,{"data-orientation":r,ref:f,onKeyDown:o?void 0:C}))))}),k="AccordionItem",[je,K]=I(k),Oe=c.forwardRef((e,n)=>{const{__scopeAccordion:t,value:o,...a}=e,r=y(k,t),i=Ie(k,t),d=U(t),f=F(),b=o&&i.value.includes(o)||!1,m=r.disabled||e.disabled;return c.createElement(je,{scope:t,open:b,disabled:m,triggerId:f},c.createElement(he,$({"data-orientation":r.orientation,"data-state":ne(b)},d,a,{ref:n,disabled:m,open:b,onOpenChange:x=>{x?i.onItemOpen(o):i.onItemClose(o)}})))}),De="AccordionHeader",ke=c.forwardRef((e,n)=>{const{__scopeAccordion:t,...o}=e,a=y(g,t),r=K(De,t);return c.createElement(w.h3,$({"data-orientation":a.orientation,"data-state":ne(r.open),"data-disabled":r.disabled?"":void 0},o,{ref:n}))}),Y="AccordionTrigger",Se=c.forwardRef((e,n)=>{const{__scopeAccordion:t,...o}=e,a=y(g,t),r=K(Y,t),i=ye(Y,t),d=U(t);return c.createElement(H.ItemSlot,{scope:t},c.createElement(Ce,$({"aria-disabled":r.open&&!i.collapsible||void 0,"data-orientation":a.orientation,id:r.triggerId},d,o,{ref:n})))}),Me="AccordionContent",Te=c.forwardRef((e,n)=>{const{__scopeAccordion:t,...o}=e,a=y(g,t),r=K(Me,t),i=U(t);return c.createElement(Ae,$({role:"region","aria-labelledby":r.triggerId,"data-orientation":a.orientation},i,o,{ref:n,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))});function ne(e){return e?"open":"closed"}const Ve=Z,Be=Oe,Le=ke,re=Se,ce=Te,Ge=Ve,S=l.forwardRef(({className:e,...n},t)=>s.jsx(Be,{ref:t,className:V("border-b",e),...n}));S.displayName="AccordionItem";const M=l.forwardRef(({className:e,children:n,...t},o)=>s.jsx(Le,{className:"flex",children:s.jsxs(re,{ref:o,className:V("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e),...t,children:[n,s.jsx(fe,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));M.displayName=re.displayName;const T=l.forwardRef(({className:e,children:n,...t},o)=>s.jsx(ce,{ref:o,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...t,children:s.jsx("div",{className:V("pb-4 pt-0",e),children:n})}));T.displayName=ce.displayName;function Fe(){return s.jsxs(Ge,{type:"single",collapsible:!0,children:[s.jsxs(S,{value:"item-1",children:[s.jsx(M,{children:"¿Te gusta lo que ves?"}),s.jsx(T,{children:s.jsxs("div",{className:"flex gap-2 items-baseline",children:[s.jsx("p",{children:"Chequea el codigo fuente en"}),s.jsx("a",{href:"https://github.com/Ch3my/portfolio",target:"_blank",children:s.jsxs(be,{variant:"outline",children:[s.jsx("svg",{viewBox:"0 0 438.549 438.549",className:"mr-2 h-4 w-4",children:s.jsx("path",{fill:"currentColor",d:"M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"})}),"Github"]})})]})})]}),s.jsxs(S,{value:"item-3",children:[s.jsx(M,{children:"Brigham Young University"}),s.jsx(T,{children:s.jsxs("div",{className:"flex gap-6 items-center",children:[s.jsx("p",{children:"Egresado de BYUI con un titulo (AAS) Web Design and Develpment"}),s.jsx("img",{src:"/img/byui-medallion.svg",alt:"BYUI Emblem",className:"max-w-24"})]})})]})]})}export{Fe as default};
