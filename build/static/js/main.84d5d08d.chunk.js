(this["webpackJsonpcooking-react"]=this["webpackJsonpcooking-react"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var i,c=n(1),a=n.n(c),s=n(26),r=n.n(s),l=n(7),o=n(2),d=n(3),u=n(5),m=n(6),p=n(20),b=(n(35),n(36),n.p+"static/media/edit.c9c5a486.svg"),j=n(0),h=function(e){var t=e.onSignIn;return Object(j.jsx)("form",{onSubmit:t,className:"auth-modal__form_sign-in sign-in tab-pane fade show active",id:"sign-in",children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("label",{htmlFor:"sign-in__login",className:"form-label visually-hidden",children:"\u041b\u043e\u0433\u0438\u043d"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"sign-in__login",placeholder:"\u041b\u043e\u0433\u0438\u043d",required:!0})]}),Object(j.jsxs)("div",{className:"mb-5",children:[Object(j.jsx)("label",{htmlFor:"sign-in__password",className:"form-label visually-hidden",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(j.jsx)("input",{type:"password",className:"form-control",id:"sign-in__password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary d-block w-50 mx-auto",children:"\u0412\u043e\u0439\u0442\u0438"})]})})},_=function(e){var t=e.onSignUp,n=e.onCheckLogin,i=e.onCheckPasswords;return Object(c.useEffect)((function(){var e=document.getElementById("sign-up__password"),t=document.getElementById("sign-up__repeat-password"),n=document.getElementById("sign-up__button");e.addEventListener("input",(function(){i(e,t,n)})),t.addEventListener("input",(function(){i(e,t,n)}))})),Object(j.jsx)("form",{onSubmit:function(e){return t(e)},className:"auth-modal__form_sign-up sign-up tab-pane fade show",id:"sign-up",children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("label",{htmlFor:"sign-up__login",className:"form-label visually-hidden",children:"\u041b\u043e\u0433\u0438\u043d"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"sign-up__login",placeholder:"\u041b\u043e\u0433\u0438\u043d",required:!0,onInput:function(){return n(document.getElementById("sign-up__login"),document.getElementById("sign-up__button"))}}),Object(j.jsx)("div",{className:"input__subtext",children:"\u041b\u043e\u0433\u0438\u043d \u0437\u0430\u043d\u044f\u0442, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0439"})]}),Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("label",{htmlFor:"sign-up__password",className:"form-label visually-hidden",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(j.jsx)("input",{type:"password",className:"form-control",id:"sign-up__password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0})]}),Object(j.jsxs)("div",{className:"mb-5",children:[Object(j.jsx)("label",{htmlFor:"sign-up__repeat-password",className:"form-label visually-hidden",children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(j.jsx)("input",{type:"password",className:"form-control",id:"sign-up__repeat-password",placeholder:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",required:!0}),Object(j.jsx)("div",{className:"input__subtext",children:"\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0435 \u043f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary d-block w-50 mx-auto",id:"sign-up__button",disabled:!0,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})]})})},g=function(e){var t=e.onSignUp,n=e.onSignIn,i=e.onCheckLogin,c=e.onCheckPasswords;return Object(j.jsx)("div",{className:"auth-modal modal fade",id:"auth-modal",tabIndex:"-1","aria-hidden":"true",children:Object(j.jsx)("div",{className:"modal-dialog",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("div",{className:"modal-header",children:[Object(j.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0441\u0430\u0439\u0442"}),Object(j.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(j.jsxs)("div",{className:"modal-body",children:[Object(j.jsxs)("ul",{className:"nav nav-tabs mb-4",role:"tablist",children:[Object(j.jsx)("li",{className:"nav-item",role:"presentation",children:Object(j.jsx)("button",{className:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#sign-in",type:"button",role:"tab","aria-controls":"sign-in","aria-selected":"true",children:"\u0412\u0445\u043e\u0434"})}),Object(j.jsx)("li",{className:"nav-item",role:"presentation",children:Object(j.jsx)("button",{className:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#sign-up",type:"button",role:"tab","aria-controls":"sign-up","aria-selected":"false",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]}),Object(j.jsxs)("div",{className:"tab-content",children:[Object(j.jsx)(h,{onSignIn:n}),Object(j.jsx)(_,{onSignUp:t,onCheckLogin:i,onCheckPasswords:c})]})]})]})})})},x=function(e){var t=e.user_role;return Object(j.jsxs)("nav",{className:" categories col-8 nav nav-pills justify-content-around",children:[Object(j.jsx)(l.c,{className:"nav-link",to:"/",exact:!0,children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435"}),Object(j.jsx)(l.c,{className:"nav-link",to:"/new",children:"\u0421\u0432\u0435\u0436\u0435\u0435"}),Object(j.jsx)(l.c,{className:"nav-link",to:"/fast",children:"\u0414\u043e 30 \u043c\u0438\u043d\u0443\u0442"}),Object(j.jsx)(l.c,{className:"nav-link",to:"/medium",children:"\u0414\u043e \u0447\u0430\u0441\u0430"}),Object(j.jsx)(l.c,{className:"nav-link",to:"/long",children:"\u0411\u043e\u043b\u044c\u0448\u0435 \u0447\u0430\u0441\u0430"}),"guest"===t?null:Object(j.jsx)(l.c,{className:"nav-link",to:"/favourites",children:"\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u0432\u0448\u0438\u0435\u0441\u044f"}),"admin"===t?Object(j.jsx)(l.c,{className:"nav-link",to:"/admin",children:"\u0410\u0434\u043c\u0438\u043d\u043a\u0430"}):null]})},O="",f=function(e){var t=e.onCheckLogin,n=e.onCheckPasswords;Object(c.useEffect)((function(){var e=document.getElementById("edit-password__input_new-pass"),t=document.getElementById("edit-password__input_repeat-new-pass"),i=document.getElementById("edit-password__button");e.addEventListener("input",(function(){n(e,t,i)})),t.addEventListener("input",(function(){n(e,t,i)}))}));return Object(j.jsx)("div",{className:"edit-profile-modal modal fade",id:"edit-profile-modal",tabIndex:"-1","aria-hidden":"true",children:Object(j.jsx)("div",{className:"modal-dialog",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("div",{className:"modal-header",children:[Object(j.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f"}),Object(j.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(j.jsxs)("div",{className:"modal-body",children:[Object(j.jsxs)("ul",{className:"nav nav-tabs mb-4",role:"tablist",children:[Object(j.jsx)("li",{className:"nav-item",role:"presentation",children:Object(j.jsx)("button",{className:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#edit-login",type:"button",role:"tab","aria-controls":"edit-login","aria-selected":"true",children:"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u043b\u043e\u0433\u0438\u043d"})}),Object(j.jsx)("li",{className:"nav-item",role:"presentation",children:Object(j.jsx)("button",{className:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#edit-password",type:"button",role:"tab","aria-controls":"edit-password","aria-selected":"false",children:"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})})]}),Object(j.jsxs)("div",{className:"tab-content",children:[Object(j.jsxs)("form",{id:"edit-login",className:"tab-pane fade show active",onSubmit:function(e){!function(e,t){e.preventDefault();var n=t.value;fetch("".concat(O,"/api/user/edit_login"),{method:"PUT",headers:{"Content-Type":"application/json",token:localStorage.getItem("token")},body:JSON.stringify({new_login:n})}).then((function(e){return e.json().then((function(e){localStorage.setItem("login",n),localStorage.getItem("login"),window.location.reload()}))})).catch((function(e){return console.log(e)}))}(e,document.getElementById("edit-login__input"))},children:[Object(j.jsx)("label",{htmlFor:"edit-login__input",className:"form-label visually-hidden",children:"\u041d\u043e\u0432\u044b\u0439 \u043b\u043e\u0433\u0438\u043d"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"edit-login__input",placeholder:"\u041d\u043e\u0432\u044b\u0439 \u043b\u043e\u0433\u0438\u043d",onInput:function(){t(document.getElementById("edit-login__input"),document.getElementById("edit-login__button"))},required:!0}),Object(j.jsx)("div",{className:"input__subtext",children:"\u041b\u043e\u0433\u0438\u043d \u0437\u0430\u043d\u044f\u0442, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0439"}),Object(j.jsx)("button",{className:"btn-primary btn d-block mx-auto mt-3",id:"edit-login__button",disabled:!0,children:"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u043b\u043e\u0433\u0438\u043d"})]}),Object(j.jsxs)("form",{id:"edit-password",className:"tab-pane fade show",onSubmit:function(e){!function(e,t,n){e.preventDefault(),fetch("".concat(O,"/api/user/edit_password"),{method:"PUT",headers:{"Content-Type":"application/json",token:localStorage.getItem("token")},body:JSON.stringify({old_password:t.value,new_password:n.value})}).then((function(e){return e.json().then((function(e){e||alert("\u041d\u0435\u0432\u0435\u0440\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d \u043f\u0430\u0440\u043e\u043b\u044c")}))})).catch((function(e){return console.log(e)}))}(e,document.getElementById("edit-password__input_old-pass"),document.getElementById("edit-password__input_new-pass"))},children:[Object(j.jsx)("label",{htmlFor:"edit-password__input_old-pass",className:"form-label visually-hidden",children:"\u0421\u0442\u0430\u0440\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(j.jsx)("input",{type:"password",className:"form-control mb-4",id:"edit-password__input_old-pass",placeholder:"\u0421\u0442\u0430\u0440\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",required:!0}),Object(j.jsx)("label",{htmlFor:"edit-password__input_new-pass",className:"form-label visually-hidden",children:"\u041d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(j.jsx)("input",{type:"password",className:"form-control mb-3",id:"edit-password__input_new-pass",placeholder:"\u041d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",required:!0}),Object(j.jsx)("label",{htmlFor:"edit-password__input_repeat-new-pass",className:"form-label visually-hidden",children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(j.jsx)("input",{type:"password",className:"form-control",id:"edit-password__input_repeat-new-pass",placeholder:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",required:!0}),Object(j.jsx)("div",{className:"input__subtext",children:"\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0435 \u043f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"}),Object(j.jsx)("button",{className:"btn-primary btn mt-3",id:"edit-password__button",children:"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})]})]})]})]})})})},v=function(e){var t=e.onSignUp,n=e.onAuthClick,i=e.onSignIn,a=e.user_data,s=((a=void 0===a?{id:-1,login:"undefined",token:"undefined",role:"guest"}:a).id,a.login),r=(a.token,a.role),o=e.onLogOut;Object(c.useEffect)((function(){"guest"!==r&&(d=new p.a(document.getElementById("edit-profile-modal")))}));var d,u=function(e,t){e.value.length>15&&(e.value=e.value.slice(0,15)),0===e.value.length?(e.classList.remove("input_failed"),t.disabled=!0):fetch("".concat(O,"/api/check_login/").concat(e.value)).then((function(n){n.json().then((function(n){n.is_login_available?(e.classList.remove("input_failed"),t.disabled=!1):(e.classList.add("input_failed"),t.disabled=!0)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))},m=function(e,t,n){t.value!==e.value&&""!==t.value?(t.classList.add("input_failed"),n.disabled=!0):(t.classList.remove("input_failed"),n.disabled=!1)},h=function(){d.show()};return Object(j.jsx)("div",{className:"navbar navbar-light bg-light header",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(l.c,{className:"navbar-brand",to:"/",children:Object(j.jsx)("h1",{className:"h1",children:"CooKing"})}),Object(j.jsx)(x,{user_role:r}),function(e,t){return"guest"!==t?Object(j.jsxs)("div",{className:"col-2",children:[Object(j.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(j.jsx)(l.b,{to:"/user/me",children:Object(j.jsx)("h3",{className:"h3 m-0 header__login",children:e})}),Object(j.jsx)("button",{className:"btn d-inline-flex align-items-center",onClick:h,children:Object(j.jsx)("img",{src:b,alt:"edit your profile"})})]}),Object(j.jsx)("button",{type:"button",className:"p-0 btn btn-link d-block m-auto header__logout-button",onClick:o,children:"\u0412\u044b\u0439\u0442\u0438"}),Object(j.jsx)(f,{onCheckLogin:u,onCheckPasswords:m})]}):Object(j.jsx)("button",{type:"button",className:"btn btn-primary",onClick:n,children:"\u0412\u043e\u0439\u0442\u0438"})}(s,r),Object(j.jsx)(g,{onSignUp:t,onSignIn:i,onCheckLogin:u,onCheckPasswords:m})]})})},N=n(4),y=(n(42),n.p+"static/media/new_post.1bd74fe2.svg"),k=n(17),w=(n(43),n.p+"static/media/like_empty.6af1c035.svg"),I=n.p+"static/media/like_filled.1178e467.svg",S=n.p+"static/media/time.8bdaacb2.svg",C=function(e){var t=e.user_role,n=e.recipe_data,i=n.recipe_id,a=n.recipe_title,s=n.recipe_picture,r=n.recipe_cooking_time,o=n.recipe_post_time,d=n.recipe_likes,u=n.recipe_author_login,m=(n.recipe_author_id,n.recipe_is_liked);console.log(t);var p=Object(c.useState)(d),b=Object(k.a)(p,2),h=b[0],_=b[1],g=o.substr(2,8).split("-"),x=o.substr(11,5);o="".concat(x," - ").concat(g[2],".").concat(g[1],".").concat(g[0]);return Object(j.jsxs)("article",{className:"card recipe-card",children:[Object(j.jsx)(l.b,{to:"/recipe/"+i,children:Object(j.jsx)("img",{src:s,className:"card-img-top",alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043a \u0440\u0435\u0446\u0435\u043f\u0442\u0443"})}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)(l.b,{to:"/recipe/"+i,children:Object(j.jsx)("h3",{className:"card-title h4 text-truncate",children:a})}),Object(j.jsxs)("div",{className:"d-grid recipe-card__icon-row mb-2",children:[Object(j.jsx)("img",{src:S,className:"recipe-card__icon",alt:"time icon"}),Object(j.jsxs)("span",{children:[r," \u043c\u0438\u043d"]}),Object(j.jsxs)("div",{onClick:"user"===localStorage.getItem("role")?function(e){return function(e){var t=e.currentTarget;1===t.classList.length?(t.classList.add(t.classList[0]+"_liked"),_(h+1)):(t.classList.remove(t.classList[0]+"_liked"),_(h-1)),fetch("".concat(O,"/api/recipe/like"),{method:"PUT",headers:{token:localStorage.getItem("token"),"Content-Type":"application/json"},body:JSON.stringify({id:i})}).catch((function(e){return console.log(e)}))}(e)}:null,className:"recipe-card__like-area"+(m?" recipe-card__like-area_liked":""),children:[Object(j.jsx)("img",{src:w,className:"recipe-card__icon recipe-card__like_empty",alt:"liked already"}),Object(j.jsx)("img",{src:I,className:"recipe-card__icon recipe-card__like_filled",alt:"not liked yet"})]}),Object(j.jsx)("span",{children:h})]}),Object(j.jsxs)("div",{className:"recipe-card__bottom",children:[Object(j.jsx)("span",{className:"d-block w-50",children:o}),Object(j.jsx)("span",{className:"fw-bolder text-truncate",children:u})]})]})]})},E=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this)).getRecipes=function(e){fetch("".concat(O,"/api/recipe/").concat(e),{headers:{token:localStorage.getItem("token")}}).then((function(e){return e.json().then((function(e){i.recipe_cards=e.map((function(e){return Object(j.jsx)(C,{user_role:i.props.user_role,recipe_data:e},e.recipe_id)})),i.setState({is_loaded:!0})})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))},i.button=function(e){return"guest"===e?Object(j.jsx)("button",{type:"button",className:"btn btn-primary shadow",id:"recipe_create",onClick:i.onAuthClick,children:Object(j.jsx)("img",{src:y,alt:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u0435\u0446\u0435\u043f\u0442"})}):Object(j.jsx)(l.b,{to:"/recipe/create",type:"button",className:"btn btn-primary shadow",id:"recipe_create",children:Object(j.jsx)("img",{src:y,alt:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u0435\u0446\u0435\u043f\u0442"})})},i.title=function(e){switch(e){case"popular":return"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435";case"new":return"\u041d\u043e\u0432\u044b\u0435";case"fast":return"\u0411\u044b\u0441\u0442\u0440\u044b\u0435 \u0440\u0435\u0446\u0435\u043f\u0442\u044b";case"medium":return"\u041c\u0435\u043d\u0435\u0435 \u0447\u0430\u0441\u0430";case"long":return"\u0411\u043e\u043b\u0435\u0435 \u0447\u0430\u0441\u0430";case"favourites":return"\u0412\u0430\u0448\u0438 \u043b\u044e\u0431\u0438\u043c\u044b\u0435 \u0440\u0435\u0446\u0435\u043f\u0442\u044b";default:return"Error"}},i.state={is_loaded:!1},i.onAuthClick=e.onAuthClick,i}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getRecipes(this.props.categoryName)}},{key:"componentDidUpdate",value:function(e){this.props.categoryName!==e.categoryName&&(this.setState({is_loaded:!1}),this.getRecipes(this.props.categoryName))}},{key:"render",value:function(){return this.state.is_loaded?Object(j.jsxs)("section",{className:"feed",children:[Object(j.jsx)("h2",{className:"container h2 my-3",children:this.title(this.props.categoryName)}),Object(j.jsxs)("div",{className:"container feed__container",children:[this.recipe_cards,this.button(this.props.user_role)]})]}):Object(j.jsx)("section",{className:"recipe-page container d-flex justify-content-center mt-5",children:Object(j.jsx)("div",{className:"spinner-grow text-primary",role:"status",style:{width:"15vw",height:"15vw"},children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}}]),n}(c.Component),L=n(29),B=n(9),q=(n(44),n.p+"static/media/comment.5f4c0a76.svg"),T=(n(45),function(e){var t=e.comment_data,n=t.comment_author_login,i=t.comment_text,c=t.comment_post_time;if("\u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e"!==c.toLowerCase()){var a=c.substr(2,8).split("-"),s=c.substr(11,5);c="".concat(s," ").concat(a[2],".").concat(a[1],".").concat(a[0])}return Object(j.jsxs)("div",{className:"comment card mb-2",children:[Object(j.jsxs)("div",{className:"card-header",children:[Object(j.jsx)("span",{className:"fw-bolder",children:n}),Object(j.jsxs)("span",{children:[" ",c]})]}),Object(j.jsx)("div",{className:"card-body",children:i})]})}),A=["comment_id"],F=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).pressLike=function(t){var n=t.currentTarget;1===n.classList.length?(n.classList.toggle(n.classList[0]+"_liked"),e.setState((function(e){return{likes:e.likes+1}}))):(n.classList.toggle(n.classList[0]+"_liked"),e.setState((function(e){return{likes:e.likes-1}}))),fetch("".concat(O,"/api/recipe/like"),{method:"PUT",headers:{token:localStorage.getItem("token"),"Content-Type":"application/json"},body:JSON.stringify({id:e.recipe_id})}).catch((function(e){return console.log(e)}))},e.sendComment=function(t){t.preventDefault();var n={comment_text:document.getElementById("comment_input").value,comment_author_login:localStorage.getItem("login"),comment_post_time:"\u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e"};fetch("".concat(O,"/api/comment/create"),{method:"POST",headers:{token:localStorage.getItem("token"),"Content-Type":"application/json"},body:JSON.stringify({recipe_id:e.recipe_id,text:n.comment_text})}).then((function(){document.getElementById("comment_input").value="";var t=e.state.comments;t.push(Object(j.jsx)(T,{comment_data:n},Date.now())),e.setState({comments:Object(B.a)(t)}),e.forceUpdate()})).catch((function(e){return console.log(e)}))},e.leave_a_comment=null==localStorage.getItem("role")?null:Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{className:"h5 mt-4",children:"\u041f\u043e\u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u0438\u0442\u0435 \u0430\u0432\u0442\u043e\u0440\u0430 \u0438\u043b\u0438 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u0435\u0441\u044c \u0441\u0432\u043e\u0438\u043c \u043a\u0443\u043b\u0438\u043d\u0430\u0440\u043d\u044b\u043c \u0441\u0435\u043a\u0440\u0435\u0442\u043e\u043c!"}),Object(j.jsx)("form",{onSubmit:function(t){return e.sendComment(t)},children:Object(j.jsxs)("div",{className:"my-3",children:[Object(j.jsx)("label",{htmlFor:"comment_input",className:"form-label visually-hidden",children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}),Object(j.jsx)("textarea",{className:"form-control",id:"comment_input",rows:"3",placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u0445\u043e\u0440\u043e\u0448\u0435\u0435"}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary mt-2",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})]}),e.state={is_loaded:!1,likes:0,comments:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(O,"/api/recipe/").concat(this.props.recipe_id),{headers:{token:localStorage.getItem("token")}}).then((function(t){return t.json().then((function(t){console.log(t);var n=t.recipe_id,i=t.recipe_ingredients,c=t.recipe_comments,a=t.recipe_title,s=t.recipe_author_login,r=t.recipe_likes,l=t.recipe_text,o=t.recipe_post_time,d=t.recipe_picture,u=t.recipe_is_liked,m=t.recipe_cooking_time;console.log(i,c,a,s,r,l,o,d,u,m),e.recipe_ingredients_strings=i.map((function(e,t){var n=e.ingredient_name,i=e.ingredient_amount,c=e.ingredient_unit_name;return Object(j.jsxs)("span",{children:[n,": ",i," ",c]},t)})),e.recipe_comments_components=c.map((function(e){var t=e.comment_id,n=Object(L.a)(e,A);return Object(j.jsx)(T,{comment_data:n},t)}));var p=o.substr(2,8).split("-"),b=o.substr(11,5);e.recipe_post_time="".concat(b," ").concat(p[2],".").concat(p[1],".").concat(p[0]),e.recipe_title=a,e.recipe_author_login=s,e.recipe_text=l,e.recipe_picture=d,e.recipe_is_liked=u,e.recipe_cooking_time=m,e.recipe_id=n,e.setState({is_loaded:!0,likes:r,comments:e.recipe_comments_components})}))}))}},{key:"render",value:function(){var e=this;return this.state.is_loaded?Object(j.jsxs)("section",{className:"container recipe-page",children:[Object(j.jsx)("h2",{className:"recipe-page__title h1 my-3 mx-0",children:this.recipe_title}),Object(j.jsxs)("div",{className:"recipe-page__top",children:[Object(j.jsx)("img",{src:this.recipe_picture,className:"w-50",alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043a \u0440\u0435\u0446\u0435\u043f\u0442\u0443"}),Object(j.jsxs)("div",{className:"recipe-page__info",children:[Object(j.jsxs)("span",{children:["\u0410\u0432\u0442\u043e\u0440: ",Object(j.jsx)("span",{className:"fw-bolder",children:this.recipe_author_login})]}),Object(j.jsxs)("span",{className:"mb-2",children:["\u0412\u0440\u0435\u043c\u044f \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u044f: ",this.recipe_cooking_time," \u043c\u0438\u043d."]}),Object(j.jsx)("span",{className:"fw-bolder",children:"\u0418\u043d\u0433\u0440\u0435\u0434\u0438\u0435\u043d\u0442\u044b: "}),this.recipe_ingredients_strings]})]}),Object(j.jsx)("article",{className:"recipe-page__text my-3",children:this.recipe_text}),Object(j.jsxs)("div",{className:"recipe-page__stats",children:[Object(j.jsx)("span",{className:"text-muted",children:this.recipe_post_time}),Object(j.jsxs)("div",{className:"recipe-page__stat-icons",children:[Object(j.jsx)("img",{src:q,className:"recipe-page__icon",alt:"comment icon"}),Object(j.jsx)("span",{children:this.state.comments.length}),Object(j.jsxs)("div",{"data-recipe-id":this.recipe_id,className:"recipe-page__like-area"+(this.recipe_is_liked?" recipe-page__like-area_liked":""),onClick:"user"===localStorage.getItem("role")?function(t){return e.pressLike(t)}:null,children:[Object(j.jsx)("img",{src:w,className:"recipe-page__icon recipe-page__like_empty d-block",alt:"liked already"}),Object(j.jsx)("img",{src:I,className:"recipe-page__icon recipe-page__like_filled d-block",alt:"not liked yet"})]}),Object(j.jsx)("span",{children:this.state.likes})]})]}),Object(j.jsxs)("div",{className:"recipe-page__comments",children:[this.state.comments.length>0?Object(j.jsx)("h3",{className:"h4 mb-3",children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438:"}):null,this.state.comments,this.leave_a_comment]})]}):Object(j.jsx)("section",{className:"recipe-page container d-flex justify-content-center mt-5",children:Object(j.jsx)("div",{className:"spinner-grow text-primary",role:"status",style:{width:"15vw",height:"15vw"},children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}}]),n}(c.Component),U=(n(46),n.p+"static/media/plus.ba9a185f.svg"),D=n.p+"static/media/plus_white.e99d2598.svg",P=n.p+"static/media/trash-bin_red.04007832.svg",J=n.p+"static/media/trash-bin_white.1f441725.svg",M=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).capitalize=function(e){return e[0].toUpperCase()+e.slice(1)},e.packToFormData=function(){var t=new FormData;t.append("picture",document.getElementById("recipe_photo").files[0]),t.append("title",e.capitalize(document.getElementById("recipe_title").value)),t.append("text",document.getElementById("recipe_text").value),t.append("time_minutes",document.getElementById("recipe_cooking_time").value);for(var n=document.querySelectorAll(".ingredient-input-group"),i=[],c=0;c<n.length;c++)i.push({ingredient_name:e.capitalize(n[c].getElementsByClassName("ingredient-input-group__name")[0].value),ingredient_quantity:n[c].getElementsByClassName("ingredient-input-group__quantity")[0].value,ingredient_unit_name:n[c].getElementsByClassName("ingredient-input-group__unit")[0].value});return t.append("ingredients_array",JSON.stringify(i)),t},e.createRecipe=function(t){t.preventDefault(),fetch("".concat(O,"/api/recipe/create"),{method:"POST",headers:{token:localStorage.getItem("token")},body:e.packToFormData()}).then((function(t){return t.json().then((function(t){return e.setState({redirect:t})}))})).catch((function(e){return console.log(e)}))},e.key=0,e.ingredient_input=function(t){return Object(j.jsxs)("div",{className:"input-group ingredient-input-group mb-3",children:[Object(j.jsx)("input",{type:"text",className:"form-control ingredient-input-group__name",required:!0,"aria-label":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u043d\u0433\u0440\u0435\u0434\u0438\u0435\u043d\u0442\u0430",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u043d\u0433\u0440\u0435\u0434\u0438\u0435\u043d\u0442\u0430"}),Object(j.jsx)("input",{type:"number",className:"form-control ingredient-input-group__quantity",placeholder:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e","aria-label":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",required:!0}),Object(j.jsxs)("select",{className:"form-select ingredient-input-group__unit","aria-label":"\u0415\u0434\u0438\u043d\u0438\u0446\u044b \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f",defaultValue:"\u0433\u0440.",required:!0,children:[Object(j.jsx)("option",{value:"null",disabled:!0,children:"\u0415\u0434\u0438\u043d\u0438\u0446\u044b \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f"}),Object(j.jsx)("option",{value:"\u0448\u0442.",children:"\u0448\u0442."}),Object(j.jsx)("option",{value:"\u0433\u0440.",children:"\u0433\u0440."}),Object(j.jsx)("option",{value:"\u0441\u0442.\u043b",children:"\u0441\u0442.\u043b."}),Object(j.jsx)("option",{value:"\u0447.\u043b.",children:"\u0447.\u043b."})]}),Object(j.jsxs)("button",{className:"btn btn-outline-danger",type:"button","data-key":t,onClick:function(t){return e.deleteItemFromInputs(t,t.currentTarget.dataset.key)},children:[Object(j.jsx)("img",{src:P,alt:"remove ingredient",className:"create-recipe__icon create-recipe__bin-icon_red create-recipe__bin-icon"}),Object(j.jsx)("img",{src:J,alt:"remove ingredient",className:"create-recipe__icon create-recipe__bin-icon_white create-recipe__bin-icon"})]}),Object(j.jsxs)("button",{className:"btn btn-outline-success",type:"button",onClick:e.addItemToInputs,children:[Object(j.jsx)("img",{src:U,alt:"add ingredient",className:"create-recipe__icon create-recipe__plus-icon_green create-recipe__plus-icon"}),Object(j.jsx)("img",{src:D,alt:"add ingredient",className:"create-recipe__icon create-recipe__plus-icon_white create-recipe__plus-icon"})]})]},t)},e.addItemToInputs=function(){var t=e.state.ingredient_inputs;e.key+=1,e.setState({ingredient_inputs:[].concat(Object(B.a)(t),[e.ingredient_input(e.key)])})},e.deleteItemFromInputs=function(t,n){t.stopPropagation();var i=e.state.ingredient_inputs,c=i.findIndex((function(e){return e.key===n}));i.splice(c,1),e.setState({ingredient_inputs:Object(B.a)(i)})},e.state={ingredient_inputs:[],redirect:!1},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return!1===this.state.redirect?Object(j.jsxs)("form",{className:"create-recipe container",onSubmit:function(t){return e.createRecipe(t)},children:[Object(j.jsx)("h2",{className:"h2 my-3",children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u0446\u0435\u043f\u0442"}),Object(j.jsx)("label",{htmlFor:"recipe_title",className:"visually-hidden",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0446\u0435\u043f\u0442\u0430"}),Object(j.jsx)("input",{className:"form-control form-control-lg mb-3",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0446\u0435\u043f\u0442\u0430","aria-label":".form-control-lg example",id:"recipe_title",required:!0}),Object(j.jsx)("label",{htmlFor:"recipe_cooking_time",className:"visually-hidden",children:"\u0412\u0440\u0435\u043c\u044f \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0432 \u043c\u0438\u043d\u0443\u0442\u0430\u0445"}),Object(j.jsx)("input",{className:"form-control form-control-lg mb-4",type:"number",placeholder:"\u0412\u0440\u0435\u043c\u044f \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0432 \u043c\u0438\u043d\u0443\u0442\u0430\u0445","aria-label":".form-control-lg example",id:"recipe_cooking_time",pattern:"\\d*",required:!0}),Object(j.jsx)("h3",{className:"h3 my-3",children:"\u0418\u043d\u0433\u0440\u0435\u0434\u0438\u0435\u043d\u0442\u044b:"}),Object(j.jsxs)("div",{className:"input-group ingredient-input-group mb-3",children:[Object(j.jsx)("input",{type:"text",className:"form-control ingredient-input-group__name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u043d\u0433\u0440\u0435\u0434\u0438\u0435\u043d\u0442\u0430",required:!0,"aria-label":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u043d\u0433\u0440\u0435\u0434\u0438\u0435\u043d\u0442\u0430"}),Object(j.jsx)("input",{type:"number",className:"form-control ingredient-input-group__quantity",placeholder:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",required:!0,"aria-label":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",step:"0.1"}),Object(j.jsxs)("select",{className:"form-select ingredient-input-group__unit","aria-label":"\u0415\u0434\u0438\u043d\u0438\u0446\u044b \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f",defaultValue:"\u0433\u0440.",required:!0,children:[Object(j.jsx)("option",{value:"null",disabled:!0,children:"\u0415\u0434\u0438\u043d\u0438\u0446\u044b \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f"}),Object(j.jsx)("option",{value:"\u0448\u0442.",children:"\u0448\u0442."}),Object(j.jsx)("option",{value:"\u0433\u0440.",children:"\u0433\u0440."}),Object(j.jsx)("option",{value:"\u0441\u0442.\u043b",children:"\u0441\u0442.\u043b."}),Object(j.jsx)("option",{value:"\u0447.\u043b.",children:"\u0447.\u043b."})]}),Object(j.jsxs)("button",{className:"btn btn-outline-success",type:"button",onClick:this.addItemToInputs,children:[Object(j.jsx)("img",{src:U,alt:"add ingredient",className:"create-recipe__icon create-recipe__plus-icon_green create-recipe__plus-icon"}),Object(j.jsx)("img",{src:D,alt:"add ingredient",className:"create-recipe__icon create-recipe__plus-icon_white create-recipe__plus-icon"})]})]}),this.state.ingredient_inputs,Object(j.jsx)("label",{htmlFor:"recipe_photo",className:"form-label m-0",children:Object(j.jsx)("h3",{className:"h3 mb-3",children:"\u0417\u0430\u0433\u043b\u0430\u0432\u043d\u043e\u0435 \u0444\u043e\u0442\u043e:"})}),Object(j.jsx)("input",{className:"form-control form-control-lg mb-3",id:"recipe_photo",type:"file",accept:".jpg,.png",required:!0}),Object(j.jsx)("label",{htmlFor:"recipe_text",className:"form-label m-0",children:Object(j.jsx)("h4",{className:"h4 my-3",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u043e \u043e\u043f\u0438\u0448\u0438\u0442\u0435 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0431\u043b\u044e\u0434\u0430"})}),Object(j.jsx)("textarea",{className:"form-control mb-3",id:"recipe_text",rows:"7",required:!0}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary w-50 m-auto mb-5 d-block",children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})]}):Object(j.jsx)(N.a,{to:"/recipe/"+this.state.redirect})}}]),n}(c.Component),R=function(e){var t=e.user_role,n=e.onAuthClick;return Object(j.jsx)("main",{className:"main",children:Object(j.jsxs)(N.d,{children:[Object(j.jsx)(N.b,{path:"/",exact:!0,children:Object(j.jsx)(E,{user_role:t,onAuthClick:n,categoryName:"popular"})}),Object(j.jsx)(N.b,{path:"/new",children:Object(j.jsx)(E,{user_role:t,onAuthClick:n,categoryName:"new"})}),Object(j.jsx)(N.b,{path:"/fast",children:Object(j.jsx)(E,{user_role:t,onAuthClick:n,categoryName:"fast"})}),Object(j.jsx)(N.b,{path:"/medium",children:Object(j.jsx)(E,{user_role:t,onAuthClick:n,categoryName:"medium"})}),Object(j.jsx)(N.b,{path:"/long",children:Object(j.jsx)(E,{user_role:t,onAuthClick:n,categoryName:"long"})}),Object(j.jsx)(N.b,{path:"/favourites",children:Object(j.jsx)(E,{user_role:t,onAuthClick:n,categoryName:"favourites"})}),Object(j.jsx)(N.b,{path:"/recipe/create",children:Object(j.jsx)(M,{})}),Object(j.jsx)(N.b,{path:"/recipe/:recipe_id",children:function(e){return Object(j.jsx)(F,{recipe_id:e.match.params.recipe_id})}})]})})},z=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).Auth=function(t,n){var c,a;t.preventDefault(),"/api/user/create"===n?(c=document.getElementById("sign-up__login").value,a=document.getElementById("sign-up__password").value):(c=document.getElementById("sign-in__login").value,a=document.getElementById("sign-in__password").value),fetch("".concat(O).concat(n),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:c,password:a})}).then((function(t){console.log(t),t.json().then((function(t){var n=t.id,c=t.token,a=t.login,s=t.role;console.log(n,c,a,s),-1!==n?(e.setState((function(e){return localStorage.setItem("token",c),localStorage.setItem("id",n),localStorage.setItem("role",s),localStorage.setItem("login",a),{id:n,token:c,role:s,login:a}})),i.hide(),console.log(e.state),window.location.href="/"):alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d/\u043f\u0430\u0440\u043e\u043b\u044c")}))})).catch((function(e){return console.log(e)}))},e.createUser=function(t){e.Auth(t,"/api/user/create")},e.signIn=function(t){e.Auth(t,"/api/sign_in")},e.openAuthModal=function(){i.show()},e.logOut=function(){fetch("".concat(O,"/api/sign_out"),{method:"DELETE",headers:{token:localStorage.getItem("token")}}).then((function(){localStorage.clear(),localStorage.setItem("role","guest"),localStorage.setItem("id","-1"),e.setState(e.initialState),window.location.href="/"}))},e.initialState={id:-1,login:"undefined",token:"undefined",role:"guest"},e.state={id:localStorage.getItem("id"),token:localStorage.getItem("token"),login:localStorage.getItem("login"),role:localStorage.getItem("role")||"guest"},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(v,{onSignUp:this.createUser,onAuthClick:this.openAuthModal,onSignIn:this.signIn,user_data:this.state,onLogOut:this.logOut}),Object(j.jsx)(R,{user_role:this.state.role,onAuthClick:this.openAuthModal})]})}},{key:"componentDidMount",value:function(){i=new p.a(document.getElementById("auth-modal"),{backdrop:!0,keyboard:!0})}}]),n}(c.Component);r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(l.a,{children:Object(j.jsx)(z,{})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.84d5d08d.chunk.js.map