import{i as m,r as w,c as L,u as a,o as p,a as f,b as s,t as R,w as N,v as V,d as C,n as $,e as A,f as O,F as E,g as S,h as T,j as x,k as B,l as D,p as h,m as I,q as K}from"./vendor.3068a265.js";const M=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}};M();const j={class:"view"},F=["checked"],P={props:{item:Object},setup(n){const e=n,i=m("state"),c=m("updateItem"),t=m("deleteItem"),o=m("checkItem");let r=w(!1);const _=w(null);let v="";const b=L(()=>i.currentRoute==="active"&&!e.item.completed||i.currentRoute==="completed"&&e.item.completed||i.currentRoute!=="active"&&i.currentRoute!=="completed"),l=async y=>{v=y.title,r.value=!0,await O(),_.value.focus()},u=y=>{y.title=v,r.value=!1},k=()=>{c(),r.value=!1};return(y,d)=>a(b)?(p(),f("li",{key:0,class:$({completed:n.item.completed,editing:a(r)})},[s("div",j,[s("input",{class:"toggle",type:"checkbox",onClick:d[0]||(d[0]=g=>a(o)(n.item.id)),checked:n.item.completed},null,8,F),s("label",{onDblclick:d[1]||(d[1]=g=>l(n.item))},R(n.item.title),33),s("button",{class:"destroy",onClick:d[2]||(d[2]=g=>a(t)(n.item.id))})]),N(s("input",{class:"edit",ref_key:"inputEdit",ref:_,onBlur:d[3]||(d[3]=g=>k()),onKeyup:[d[4]||(d[4]=C(g=>u(n.item),["esc"])),d[5]||(d[5]=C(g=>k(),["enter"]))],"onUpdate:modelValue":d[6]||(d[6]=g=>n.item.title=g)},null,544),[[V,n.item.title]])],2)):A("",!0)}},q=s("input",{id:"toggle-all",class:"toggle-all",type:"checkbox"},null,-1),J={class:"todo-list"},U={setup(n){const e=m("state"),i=m("toggleAll");return(c,t)=>(p(),f(E,null,[q,s("label",{onClick:t[0]||(t[0]=o=>a(i)()),for:"toggle-all"},"Mark all as complete"),s("ul",J,[(p(!0),f(E,null,S(a(e).items,o=>(p(),T(P,{key:o.id,item:o},null,8,["item"]))),128))])],64))}},z={class:"footer"},G={class:"todo-count"},W=x(" item left"),H={class:"filters"},Q={setup(n){const e=m("state"),i=m("itemsLeft"),c=m("clearCompleted");return(t,o)=>(p(),f("footer",z,[s("span",G,[s("strong",null,R(a(i)),1),W]),s("ul",H,[s("li",null,[s("a",{class:$({selected:a(e).currentRoute!=="active"&&a(e).currentRoute!=="completed"}),href:"#/"},"All",2)]),s("li",null,[s("a",{class:$({selected:a(e).currentRoute==="active"}),href:"#/active"},"Active",2)]),s("li",null,[s("a",{class:$({selected:a(e).currentRoute==="completed"}),href:"#/completed"},"Completed",2)])]),a(e).items.some(r=>r.completed)?(p(),f("button",{key:0,class:"clear-completed",onClick:o[0]||(o[0]=(...r)=>a(c)&&a(c)(...r))}," Clear completed ")):A("",!0)]))}},X=["onKeyup"],Y={setup(n){let e=w("");const i=m("addItem"),c=()=>{const t=e.value.trim();if(!t)return;i({title:t,checked:!1}),e.value=""};return(t,o)=>N((p(),f("input",{class:"new-todo","onUpdate:modelValue":o[0]||(o[0]=r=>B(e)?e.value=r:e=r),onKeyup:C(c,["enter"]),placeholder:"What needs to be done?",autofocus:""},null,40,X)),[[V,a(e)]])}};var Z=(n,e)=>{const i=n.__vccOpts||n;for(const[c,t]of e)i[c]=t;return i};const ee={},te={class:"info"},oe=s("p",null,"Double-click to edit a todo",-1),se=s("p",null,[x(" Created by "),s("a",{href:"https://github.com/mits-gossau"},"Mits Gossau")],-1),le=s("p",null,[x("Part of "),s("a",{href:"#"},"TodoMVC")],-1),ne=[oe,se,le];function ce(n,e){return p(),f("footer",te,ne)}var ie=Z(ee,[["render",ce]]);const re={class:"todoapp"},ae={class:"header"},de=s("h1",null,"todos",-1),ue={class:"main"},me={setup(n){let e=D({items:JSON.parse(localStorage.getItem("todos")||"[]").sort((l,u)=>Number(l.id)),currentRoute:window.location.hash.slice(2)});const i=L(()=>e.items.filter(l=>!l.completed).length),c=()=>{localStorage.setItem("todos",JSON.stringify(e.items))},t=l=>{c()},o=l=>{e.items.forEach(u=>{u.id===l&&(u.completed=!u.completed)}),c()},r=l=>{e.items.push(l),e.items.forEach((u,k)=>u.id=k),c()},_=l=>{e.items=e.items.filter(u=>u.id!==l),c()},v=()=>{e.items.every(l=>l.completed)?e.items.map(l=>l.completed=!1):e.items.map(l=>l.completed=!0),c()},b=()=>{e.items=e.items.filter(l=>!l.completed),c()};return h("state",e),h("itemsLeft",i),h("updateItem",t),h("deleteItem",_),h("addItem",r),h("checkItem",o),h("toggleAll",v),h("clearCompleted",b),window.addEventListener("hashchange",()=>{e.currentRoute=window.location.hash.slice(2)}),(l,u)=>(p(),f("main",null,[s("section",re,[s("header",ae,[de,I(Y)]),s("section",ue,[I(U)]),I(Q)]),I(ie)]))}};K(me).mount("#app");
