(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{3899:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return l(5540)}])},5540:function(e,s,l){"use strict";l.r(s);var a=l(5893),t=l(7294),i=l(6128),n=l.n(i),o=l(6154),_=l(1163),c=l(5154);let r=()=>{let e=(0,_.useRouter)(),[s,l]=(0,t.useState)(!1),[i,r]=(0,t.useState)([]),[g,u]=(0,t.useState)(""),[d,m]=(0,t.useState)("b"),h=async()=>{try{l(!0);let e=await o.Z.get("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(d)),s=await e.data;r(null==s?void 0:s.meals),l(!1),console.log(null==s?void 0:s.meals)}catch(e){console.log(e)}};(0,t.useEffect)(()=>{h()},[d]);let b=e=>{e.preventDefault(),m(g),u("")},f=s=>{i.find(e=>e.id===s),console.log(s),e.push("/blog/".concat(s))},p=e=>e.length>10?e.substring(0,100)+"...":e;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:n().blog__bg,children:[(0,a.jsx)("figure",{className:n().bg__overlay,children:(0,a.jsx)("img",{src:"/img/bg.jpg",className:n().bg__img,alt:""})}),(0,a.jsxs)("div",{className:n().overlay__text,children:[(0,a.jsx)("h1",{children:"News and Articles"}),(0,a.jsx)("p",{children:" Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque tellus vehicula aptent dignissim."}),(0,a.jsxs)("form",{onSubmit:b,className:n().form,children:[(0,a.jsx)("input",{type:"search",placeholder:"search Blog",value:g,onChange:e=>u(e.target.value)}),(0,a.jsx)("span",{className:n().search__btn,children:(0,a.jsx)(c.U41,{})})]})]})]}),(0,a.jsx)("div",{className:n().blog__container,children:s?(0,a.jsx)("h1",{className:n().loading,children:"Loading"}):i.slice(0,12).map(e=>(0,a.jsxs)("div",{className:n().blog__content,children:[(0,a.jsx)("img",{src:e.strMealThumb,alt:"",className:n().blog__foods}),(0,a.jsx)("h3",{children:e.strMeal}),(0,a.jsxs)("p",{children:[p(e.strInstructions)," "]}),(0,a.jsx)("button",{onClick:()=>f(e.idMeal),children:"Read more"})]},e.idMeal))})]})};s.default=r},6128:function(e){e.exports={bg__overlay:"Blog_bg__overlay__swehk",bg__img:"Blog_bg__img__yMiYL",overlay__text:"Blog_overlay__text__X6gCn",form:"Blog_form__4gRFe",search__btn:"Blog_search__btn__d8fRb",blog__container:"Blog_blog__container__C2ae_",blog__content:"Blog_blog__content__pLUNw",blog__foods:"Blog_blog__foods__sesHf",loading:"Blog_loading__mYeJt"}}},function(e){e.O(0,[154,774,888,179],function(){return e(e.s=3899)}),_N_E=e.O()}]);