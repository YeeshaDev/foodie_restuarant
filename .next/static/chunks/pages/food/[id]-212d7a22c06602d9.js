(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[165],{3505:function(e,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/food/[id]",function(){return s(356)}])},5591:function(e,i,s){"use strict";var l=s(5893),_=s(7294),a=s(7675),d=s(1664),n=s.n(d),o=s(4354),t=s(1079),c=s.n(t);let r=["all",...new Set(o.w.map(e=>e.category))],m=()=>{let[e,i]=(0,_.useState)(o.w),[s,d]=(0,_.useState)(r),[t,m]=(0,_.useState)(!1),h=e=>{if("all"===e){i(o.w);return}let s=o.w.filter(i=>i.category===e);i(s),m(!0)};return(0,l.jsxs)("div",{className:c().menu__content,children:[(0,l.jsxs)("div",{className:c().menu__header,children:[(0,l.jsx)("h1",{children:"Our Regular Menu Pack"}),(0,l.jsx)("button",{children:"See Menu"})]}),(0,l.jsx)("div",{className:c().menu__listContent,children:(0,l.jsx)("ul",{className:c().menu__list,children:s.map((e,i)=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("li",{className:t?c().menu__btn:c().active,onClick:()=>h(e),children:e},i)}))})}),(0,l.jsx)("div",{className:c().food__wrapper,children:e.slice(0,8).map(e=>(0,l.jsx)("div",{className:c().food__details,children:(0,l.jsx)(n(),{href:"/food/".concat(e.id),children:(0,l.jsx)(a.Z,{item:e})})},e.id))})]})};i.Z=m},356:function(e,i,s){"use strict";s.r(i);var l=s(5893);s(7294);var _=s(4354),a=s(1163),d=s(1664),n=s.n(d),o=s(5154),t=s(5178),c=s.n(t);s(7675),s(5591);var r=s(9473),m=s(9235);let h=()=>{let e=(0,a.useRouter)(),{id:i}=e.query,s=(0,r.I0)(),d=_.w.find(e=>e.id==i),t=_.w.filter(e=>e.category===(null==d?void 0:d.category)),h=()=>{s((0,m.Xq)({id:d.id,foodName:d.foodName,price:d.price,image:d.image}))};return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:c().blog__bg,children:[(0,l.jsx)("figure",{className:c().bg__overlay,children:(0,l.jsx)("img",{src:"/img/bg.jpg",className:c().bg__img,alt:""})}),(0,l.jsxs)("div",{className:c().overlay__text,children:[(0,l.jsx)("h1",{children:"Food Details"}),(0,l.jsx)("p",{children:" Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. "})]})]}),(0,l.jsxs)("main",{className:c().details__section,children:[(0,l.jsxs)("div",{className:c().details__header,children:[(0,l.jsx)(n(),{href:"/",children:(0,l.jsx)("span",{title:"home",children:(0,l.jsx)(o.xng,{})})}),(0,l.jsx)(n(),{href:"/menu",children:(0,l.jsx)("span",{title:"blog",children:(0,l.jsx)(o.dL9,{})})}),(0,l.jsx)("span",{children:null==d?void 0:d.foodName})]}),(0,l.jsx)("div",{className:c().meal__heading,children:(0,l.jsx)("h3",{className:c().meal__details,children:"Meal Details"})}),(0,l.jsx)("section",{className:c().details__content,children:(0,l.jsxs)("div",{className:c().upper__details,children:[(0,l.jsx)("div",{className:c().food__img,children:(0,l.jsx)("img",{src:null==d?void 0:d.image,alt:""})}),(0,l.jsxs)("div",{className:c().food__details,children:[(0,l.jsx)("h2",{children:null==d?void 0:d.foodName}),(0,l.jsx)("hr",{}),(0,l.jsx)("p",{children:null==d?void 0:d.Desc}),(0,l.jsxs)("h3",{children:["Price: $",null==d?void 0:d.price]}),(0,l.jsx)("button",{onClick:h,children:"Add to cart"})]})]})})]}),(0,l.jsx)("div",{}),(0,l.jsxs)("div",{className:c().recommended,children:[(0,l.jsx)("h1",{children:"Foods you might also like"}),(0,l.jsx)("div",{className:c().food__wrapper,children:t.map(e=>(0,l.jsx)("div",{className:c().food__content,children:(0,l.jsxs)(n(),{href:"/food/".concat(e.id),children:[(0,l.jsx)("figure",{className:c().menuImg__container,children:(0,l.jsx)("img",{src:e.image,alt:"food",className:c().menu__img})}),(0,l.jsx)("h2",{children:e.foodName}),(0,l.jsx)("p",{children:e.subName}),(0,l.jsxs)("div",{className:c().cart__btn,children:[(0,l.jsxs)("h3",{style:{fontSize:"1.5rem",fontWeight:"900"},children:["$",e.price]}),(0,l.jsx)("button",{onClick:h,children:"Add to Cart"})]})]})},e.id))})]})]})};i.default=h},5178:function(e){e.exports={details__header:"foodDetails_details__header__ScyED",bg__overlay:"foodDetails_bg__overlay__5U5ma",bg__img:"foodDetails_bg__img__2tNX0",overlay__text:"foodDetails_overlay__text__QovRo",details__section:"foodDetails_details__section__0J1UE",meal__heading:"foodDetails_meal__heading__jD7gI",details__content:"foodDetails_details__content__1qU8s",upper__details:"foodDetails_upper__details__Cfnhb",food__details:"foodDetails_food__details__iZYgt",food__img:"foodDetails_food__img__qopNf",food__wrapper:"foodDetails_food__wrapper__MGWul",food__content:"foodDetails_food__content__gcZN1",menuImg__container:"foodDetails_menuImg__container__BgbEN",menu__img:"foodDetails_menu__img__VnqhP",recommended:"foodDetails_recommended__Gjtqi",cart__btn:"foodDetails_cart__btn__VVnYw"}}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=3505)}),_N_E=e.O()}]);