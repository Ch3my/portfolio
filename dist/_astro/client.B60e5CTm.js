import{r as o}from"./index.LHP-L4Pl.js";import{r as T}from"./index.C3GvvkrT.js";var m,p,l=T;p=l.createRoot,m=l.hydrateRoot;const c=({value:t,name:e,hydrate:r=!0})=>{if(!t)return null;const a=r?"astro-slot":"astro-static-slot";return o.createElement(a,{name:e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:t}})};c.shouldComponentUpdate=()=>!1;function v(t){for(const e in t)if(e.startsWith("__reactContainer"))return e}function y(t){let e={};for(const r of t.attributes)e[r.name]=r.value;return t.firstChild===null?o.createElement(t.localName,e):o.createElement(t.localName,e,Array.from(t.childNodes).map(r=>r.nodeType===Node.TEXT_NODE?r.data:r.nodeType===Node.ELEMENT_NODE?y(r):void 0).filter(r=>!!r))}function M(t,e){if(e&&t){let r=[],a=document.createElement("template");a.innerHTML=t;for(let i of a.content.children)r.push(y(i));return r}else return t?o.createElement(c,{value:t}):void 0}let f=new WeakMap;const E=(t,e)=>{let r=f.get(t);return r||(r=e(),f.set(t,r)),r},_=t=>(e,r,{default:a,...i},{client:h})=>{if(!t.hasAttribute("ssr"))return;const N={identifierPrefix:t.getAttribute("prefix")};for(const[s,n]of Object.entries(i))r[s]=o.createElement(c,{value:n,name:s});const u=o.createElement(e,r,M(a,t.hasAttribute("data-react-children"))),d=v(t);if(d&&delete t[d],h==="only")return o.startTransition(()=>{E(t,()=>{const n=p(t);return t.addEventListener("astro:unmount",()=>n.unmount(),{once:!0}),n}).render(u)});o.startTransition(()=>{E(t,()=>{const n=m(t,u,N);return t.addEventListener("astro:unmount",()=>n.unmount(),{once:!0}),n}).render(u)})};export{_ as default};
