(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3kPPc",total:"Cart_total__LgX9E",actions:"Cart_actions__2Dx9J","button--alt":"Cart_button--alt__1E1LI",button:"Cart_button__2ER9M"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3oB7x",summary:"CartItem_summary__1I46f",price:"CartItem_price__2Mw9R",amount:"CartItem_amount__3YUsY",actions:"CartItem_actions__2IMHH"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__1C5Cd",icon:"HeaderCartButton_icon__3E6lG",badge:"HeaderCartButton_badge__3UYhA",bump:"HeaderCartButton_bump__Y9GaV"}},,function(e,t,n){e.exports={meal:"MealItem_meal__-g-4q",description:"MealItem_description__2wMth",price:"MealItem_price__3a0fI"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3FB8P",modal:"Modal_modal__3DpUO","slide-down":"Modal_slide-down__2780M"}},,function(e,t,n){e.exports={header:"Header_header__2HdVF","main-image":"Header_main-image__3402L"}},,function(e,t,n){e.exports={meals:"MealsAvailable_meals__KlJgg","meals-appear":"MealsAvailable_meals-appear__T-9uU"}},function(e,t,n){e.exports={card:"Card_card__3b7rU"}},function(e,t,n){e.exports={form:"MealItemForm_form__sMen6"}},function(e,t,n){e.exports={input:"Input_input__1p-bj"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__3nOBy"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),i=n.n(a),c=(n(24),n(2)),r=n(1),s=n.n(r),o=n.p+"static/media/pakistanimeal.786548f6.jpg",d=n(8),l=n.n(d),m=n(0),u=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},j=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),b=function(e){var t=Object(r.useState)(!1),n=Object(c.a)(t,2),a=n[0],i=n[1],s=Object(r.useContext)(j).items,o=s.reduce((function(e,t){return e+t.amount}),0),d="".concat(l.a.button," ").concat(a?l.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.length){i(!0);var e=setTimeout((function(){i(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(m.jsxs)("button",{className:d,onClick:e.onClick,children:[Object(m.jsx)("span",{className:l.a.icon,children:Object(m.jsx)(u,{})}),Object(m.jsx)("span",{children:"Your Cart"}),Object(m.jsx)("span",{className:l.a.badge,children:o})]})},h=n(13),p=n.n(h),x=function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("header",{className:p.a.header,children:[Object(m.jsx)("h1",{children:"Pak Cuisine"}),Object(m.jsx)(b,{onClick:e.onShowCart})]}),Object(m.jsx)("div",{className:p.a["main-image"],children:Object(m.jsx)("img",{src:o})})]})},O=n(15),f=n.n(O),_=n(16),v=n.n(_),C=function(e){return Object(m.jsx)("div",{className:v.a.card,children:e.children})},g=n(10),k=n.n(g),y=n(17),A=n.n(y),I=n(3),N=n(18),M=n.n(N),w=s.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:M.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(I.a)({ref:t},e.input))]})})),B=function(e){var t=Object(r.useRef)(),n=Object(r.useState)(!0),a=Object(c.a)(n,2),i=a[0],s=a[1];return Object(m.jsxs)("form",{className:A.a.form,onSubmit:function(n){n.preventDefault();var a=t.current.value,i=+a;0===a.trim().length||i<1||i>5?s(!1):e.onAddToCart(i)},children:[Object(m.jsx)(w,{ref:t,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(m.jsx)("button",{children:" +ADD"}),!i&&Object(m.jsx)("p",{children:"input a valid Amount (1-5)."})]})},H=function(e){var t=Object(r.useContext)(j),n="Rs ".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:k.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("div",{className:k.a.description,children:e.description}),Object(m.jsx)("div",{className:k.a.price,children:n})]}),Object(m.jsx)("div",{children:Object(m.jsx)(B,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},R=[{id:"m1",name:"Dum Gosht Biryani",description:"The Pakistani celebrated dish of basmati rice and mutton united with fragrant spices and garden fresh herbs",price:850},{id:"m2",name:"Murgh Mughlai Biryani",description:"Influenced by the imperial kitchens of the Mughul empire, basmati rice cooked together with chicken in an affluent gravy of aromatic spices and fresh herbs",price:850},{id:"m3",name:"Bhuna Gosht",description:"Boneless mutton cubes cooked with onions, tomatoes, local spices and finished with black pepper",price:1095},{id:"m4",name:"Chicken Karahi",description:"An iconic Pakistani dish of chicken cooked on bone in traditional style tomato gravy seasoned with green chilies and black pepper",price:850}],F=function(){var e=R.map((function(e){return Object(m.jsx)(H,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(m.jsx)("section",{className:f.a.meals,children:Object(m.jsx)(C,{children:Object(m.jsx)("ul",{children:e})})})},P=n(19),D=n.n(P),T=function(){return Object(m.jsxs)("section",{className:D.a.summary,children:[Object(m.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},E=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(T,{}),Object(m.jsx)(F,{})]})},S=n(4),Y=n.n(S),U=n(11),G=n.n(U),J=function(e){return Object(m.jsx)("div",{className:G.a.backdrop,onClick:e.onhideCart})},z=function(e){return Object(m.jsx)("div",{className:G.a.modal,children:Object(m.jsx)("div",{className:G.a.content,children:e.children})})},L=document.getElementById("overlays"),V=function(e){return Object(m.jsxs)(m.Fragment,{children:[i.a.createPortal(Object(m.jsx)(J,{onhideCart:e.onhideCart}),L),i.a.createPortal(Object(m.jsx)(z,{children:e.children}),L)]})},q=n(5),K=n.n(q),X=function(e){var t="Rs ".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:K.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:K.a.summary,children:[Object(m.jsx)("span",{className:K.a.price,children:t}),Object(m.jsxs)("span",{className:K.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:K.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},Q=function(e){var t=Object(r.useContext)(j),n="Rs ".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,i=function(e){t.addItem(e)},c=function(e){t.removeItem(e)},s=Object(m.jsx)("ul",{className:Y.a["cart-items"],children:t.items.map((function(e){return Object(m.jsx)(X,{name:e.name,id:e.id,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)})}))});return Object(m.jsxs)(V,{onhideCart:e.onhideCart,children:[s,Object(m.jsxs)("div",{className:Y.a.total,children:[Object(m.jsx)("span",{children:"Total Amount"}),Object(m.jsx)("span",{children:n})]}),Object(m.jsxs)("div",{className:Y.a.actions,children:[Object(m.jsx)("button",{className:Y.a["button--alt "],onClick:e.onhideCart,children:"Close"}),a&&Object(m.jsx)("button",{className:Y.a.button,children:"Order"})]})]})},W=n(14),Z={items:[],totalAmount:0},$=function(e,t){if("Add"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,i=e.items.findIndex((function(e){return e.id===t.item.id})),c=e.items[i];if(c){var r=Object(I.a)(Object(I.a)({},c),{},{amount:c.amount+t.item.amount});(n=Object(W.a)(e.items))[i]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("Remove"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),d=e.items[o],l=e.totalAmount-d.price;if(1===d.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(I.a)(Object(I.a)({},d),{},{amount:d.amount-1});(s=Object(W.a)(e.items))[o]=m}return{items:s,totalAmount:l}}return Z},ee=function(e){var t=Object(r.useReducer)($,Z),n=Object(c.a)(t,2),a=n[0],i=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){i({type:"Add",item:e})},removeItem:function(e){i({type:"Remove",id:e})}};return Object(m.jsx)(j.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)(ee,{children:[n&&Object(m.jsx)(Q,{onhideCart:function(){a(!1)}}),Object(m.jsx)(x,{onShowCart:function(){a(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(E,{})})]})};i.a.render(Object(m.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.3dccaa76.chunk.js.map