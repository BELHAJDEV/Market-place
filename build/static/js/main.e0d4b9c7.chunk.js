(this["webpackJsonpmarket-place-app"]=this["webpackJsonpmarket-place-app"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var c=a(7),s=a.n(c),n=a(56),i=a.n(n),r=(a(63),a(11)),l=(a(64),a(0)),o=a.n(l),j=a(3),d=(a(66),a(23)),u=a(31),b=u.a.initializeApp({apiKey:"AIzaSyATRZErjmbF_eiBwJxcmhymh3D5om0HkFI",authDomain:"marketplace-app-f540b.firebaseapp.com",projectId:"marketplace-app-f540b",storageBucket:"marketplace-app-f540b.appspot.com",messagingSenderId:"43470782515",appId:"1:43470782515:web:6047e92625a07f573b2346"}).firestore(),O=u.a.auth(),m=u.a.storage(),h=(m.ref().child("images"),a(114)),p=Object(c.createContext)(),f=a(6);var x=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),i=Object(r.a)(n,2),l=i[0],u=i[1],b=Object(c.useState)(""),m=Object(r.a)(b,2),x=m[0],v=m[1],g=Object(c.useState)(!1),N=Object(r.a)(g,2),C=N[0],S=N[1],y=Object(c.useState)(!1),w=Object(r.a)(y,2),k=w[0],_=w[1],L=Object(c.useState)(""),P=Object(r.a)(L,2),I=P[0],E=P[1],T=Object(c.useState)(""),U=Object(r.a)(T,2),D=U[0],A=U[1],B=Object(c.useState)(""),F=Object(r.a)(B,2),R=F[0],V=F[1],J=Object(c.useState)(null),Z=Object(r.a)(J,2),z=Z[0],W=Z[1],Y=Object(c.useState)(""),q=Object(r.a)(Y,2),H=q[0],K=q[1],M=Object(c.useState)(!1),G=Object(r.a)(M,2),Q=G[0],X=G[1],$=Object(c.useContext)(p),ee=$.value1,te=$.value2,ae=($.value3,Object(r.a)(ee,2)),ce=ae[0],se=ae[1],ne=Object(r.a)(te,2),ie=(ne[0],ne[1]);function re(){return(re=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,O.createUserWithEmailAndPassword(D,R).then((function(e){return e.user.updateProfile({displayName:I})})).catch((function(e){return alert(e.message)}));case 3:_(!1),console.log(H),X(!1),window.location.reload();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){var e=O.onAuthStateChanged((function(e){e?(W(e),K(e.displayName),ie(e.displayName)):W(null)}));return function(){e()}}),[z,I,ie]),Object(c.useEffect)((function(){se(Q)}),[ce,Q,se]),Object(f.jsxs)("div",{className:!1===Q?"header":"header of",children:[Object(f.jsxs)("div",{className:"header__container",children:[Object(f.jsx)("div",{className:"logo",children:Object(f.jsxs)(d.b,{to:"/",className:"logo",onClick:function(){u(!1),X(!1)},children:[Object(f.jsx)("i",{className:"fas fa-store"}),Object(f.jsx)("h3",{children:"Market place"})]})}),Object(f.jsx)("div",{className:"search",children:Object(f.jsxs)("form",{action:"",children:[Object(f.jsx)("input",{type:"text",placeholder:"Search an item ...",value:x,onChange:function(e){return v(e.target.value)}}),Object(f.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),console.log(x),v("")},children:Object(f.jsx)("i",{className:"fas fa-search"})})]})}),z?Object(f.jsxs)("div",{className:"right_container",children:[Object(f.jsx)("div",{className:"logout",onClick:function(){return O.signOut()},children:Object(f.jsx)("i",{className:"fas fa-sign-out-alt"})}),Object(f.jsx)("div",{children:Object(f.jsx)(h.a,{alt:H,className:"avatar",src:"/static/images/avatar/1.jpg",onClick:function(){console.log(H),X(!Q),u(!0)}})})]}):Object(f.jsxs)("div",{className:"auth",children:[Object(f.jsx)("div",{className:"link sign_in",onClick:function(){_(!1),S(!0),X(!0)},children:Object(f.jsx)("h3",{children:"Sign In"})}),Object(f.jsx)("div",{className:"link sign_up",onClick:function(){S(!1),_(!0),X(!0)},children:Object(f.jsx)("h3",{children:"Sign up"})}),Object(f.jsx)("i",{className:"fas fa-bars",onClick:function(){s(!a),X(!Q)}})]}),!0===a?Object(f.jsxs)("div",{className:"auth-mobile",children:[Object(f.jsx)("div",{className:"signIn",onClick:function(){s(!1),_(!1),S(!0),X(!0)},children:Object(f.jsx)(d.b,{to:"",children:"Sign In"})}),Object(f.jsx)("div",{className:"signUp",onClick:function(){s(!1),S(!1),_(!0),X(!0)},children:Object(f.jsx)(d.b,{to:"",children:"Sign Up"})})]}):null,Object(f.jsxs)("div",{className:!1===l?"sidebar":"sidebar on",children:[Object(f.jsxs)("div",{className:"sidebar_header",children:[Object(f.jsxs)("div",{className:"profil",children:[Object(f.jsx)(h.a,{alt:H,className:"avatar",src:"/static/images/avatar/1.jpg",onClick:function(){return console.log(z.displayName)}}),Object(f.jsx)("h4",{children:H})]}),Object(f.jsx)("div",{className:"close_icon",onClick:function(){u(!1),X(!1)},children:Object(f.jsx)("i",{className:"fas fa-times"})})]}),Object(f.jsxs)("div",{className:"features",children:[Object(f.jsx)("div",{className:"add_post",onClick:function(){u(!1),X(!1)},children:Object(f.jsxs)(d.b,{to:"/addPost",children:[Object(f.jsx)("i",{className:"fa fa-plus-square"}),Object(f.jsx)("h4",{children:"Add post"})]})}),Object(f.jsx)("div",{className:"my-posts",onClick:function(){u(!1),X(!1)},children:Object(f.jsxs)(d.b,{to:"/myPosts",children:[Object(f.jsx)("i",{className:"fas fa-book-reader"}),Object(f.jsx)("h4",{children:"Your posts"})]})}),Object(f.jsx)("div",{className:"msgs",onClick:function(){u(!1),X(!1)},children:Object(f.jsxs)(d.b,{to:"/Inbox",children:[Object(f.jsx)("i",{className:"fas fa-envelope"}),Object(f.jsx)("h4",{children:"Inbox"})]})}),Object(f.jsxs)("div",{className:"logout",onClick:function(){O.signOut(),u(!1),X(!1)},children:[Object(f.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(f.jsx)("h4",{children:"Logout"})]})]})]})]}),Object(f.jsxs)("div",{className:"login",children:[!0===C?Object(f.jsx)("div",{className:"signIn_container",children:Object(f.jsxs)("form",{children:[Object(f.jsx)("h3",{children:"Sign In"}),Object(f.jsx)("i",{className:"fas fa-times",onClick:function(){X(!1),S(!1)}}),Object(f.jsxs)("div",{className:"email",children:[Object(f.jsx)("h4",{children:"Email"}),Object(f.jsx)("input",{type:"email",placeholder:"email..",value:D,onChange:function(e){return A(e.target.value)}})]}),Object(f.jsxs)("div",{className:"pass",children:[Object(f.jsx)("h4",{children:"Password"}),Object(f.jsx)("input",{type:"password",placeholder:"Password",value:R,onChange:function(e){return V(e.target.value)}})]}),Object(f.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),console.log("The email in ",D,"The pass in ",R),O.signInWithEmailAndPassword(D,R).catch((function(e){return alert(e.message)})),S(!1),X(!1)},children:"Sign in"})]})}):null,!0===k?Object(f.jsx)("div",{className:"signUp_container",children:Object(f.jsxs)("form",{children:[Object(f.jsx)("h3",{children:"Sign Up"}),Object(f.jsx)("i",{className:"fas fa-times",onClick:function(){X(!1),_(!1)}}),Object(f.jsxs)("div",{className:"username",children:[Object(f.jsx)("h4",{children:"Username"}),Object(f.jsx)("input",{type:"text",placeholder:"Username",value:I,onChange:function(e){return E(e.target.value)}})]}),Object(f.jsxs)("div",{className:"email",children:[Object(f.jsx)("h4",{children:"Email"}),Object(f.jsx)("input",{type:"email",placeholder:"email",value:D,onChange:function(e){return A(e.target.value)}})]}),Object(f.jsxs)("div",{className:"pass",children:[Object(f.jsx)("h4",{children:"Password"}),Object(f.jsx)("input",{type:"password",placeholder:"Password",value:R,onChange:function(e){return V(e.target.value)}})]}),Object(f.jsx)("button",{type:"submit",onClick:function(e){return re.apply(this,arguments)},children:"Sign Up"})]})}):null]})]})},v=a(19),g=(a(73),a(33)),N=a.n(g);var C=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useContext)(p).value1,i=Object(r.a)(n,2),l=i[0],o=i[1];Object(c.useEffect)((function(){return j(),function(){return s([])}}),[]);var j=function(){b.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){s(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))};return Object(f.jsx)(N.a,{children:Object(f.jsx)("div",{className:!1===l?"posts_container":"post_container of",onClick:function(){return o(!1)},children:a.map((function(e){var t=e.id,a=e.post;return Object(f.jsx)(d.b,{to:"/Post/".concat(t),children:Object(f.jsxs)("div",{className:"posts",children:[Object(f.jsx)("img",{src:a.imagesUrl[0],alt:""}),Object(f.jsx)("h4",{children:a.productName}),Object(f.jsx)("h3",{children:a.price})]},t)},t+"1")}))})})},S=a(18),y=(a(75),a(48));var w=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)([]),i=Object(r.a)(n,2),l=i[0],O=i[1],h=Object(c.useContext)(p).value2,x=Object(r.a)(h,2),g=x[0],N=(x[1],Object(c.useState)("")),C=Object(r.a)(N,2),w=C[0],k=C[1],_=Object(c.useState)(""),L=Object(r.a)(_,2),P=L[0],I=L[1],E=Object(c.useState)(""),T=Object(r.a)(E,2),U=T[0],D=T[1],A=Object(c.useState)(""),B=Object(r.a)(A,2),F=B[0],R=B[1],V=Object(v.f)(),J=-1,Z=0,z=[],W=function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a.map(function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.ref("images/".concat(t.name)).put(t);case 2:return e.next=4,m.ref("images").child(t.name).getDownloadURL().then((function(e){z.unshift(e),Z++}));case 4:Z===a.length&&(b.collection("posts").add({productName:w,price:P,imagesUrl:z,username:g,place:F,category:U,timestamp:u.a.firestore.FieldValue.serverTimestamp()}),s([]),V("/"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),R(""),k(""),D(""),I("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(y.Zoom,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("input",{type:"file",className:"file",onChange:function(e){""!==e.target.value&&(s([e.target.files[J]].concat(Object(S.a)(a))),O([e.target.files[J].name].concat(Object(S.a)(l))))},name:"",id:"file"}),Object(f.jsxs)("div",{className:"add_container",children:[Object(f.jsx)("h3",{children:"Add a Post"}),Object(f.jsx)("div",{className:"data_container",onClick:function(){document.getElementById("file").click(),J++},children:0===a.length?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("i",{className:"fas fa-folder-plus"}),Object(f.jsx)("h4",{children:"Add images"})]}):Object(f.jsxs)("h4",{className:"imgs_number",children:[a.length,"+"]})}),Object(f.jsx)("div",{className:"details",children:Object(f.jsxs)("form",{action:"",children:[Object(f.jsx)("div",{className:"title",children:Object(f.jsx)("input",{type:"text",placeholder:"Title",name:"",id:"",value:w,onChange:function(e){return k(e.target.value)}})}),Object(f.jsx)("div",{className:"price",children:Object(f.jsx)("input",{type:"text",placeholder:"Price",name:"",id:"",value:P,onChange:function(e){return I(e.target.value)}})}),Object(f.jsxs)("div",{className:"category",children:[Object(f.jsx)("input",{type:"text",placeholder:"Category",name:"",id:"",value:U,onChange:function(e){return D(e.target.value)}}),Object(f.jsx)("i",{className:"fas fa-caret-down"})]}),Object(f.jsxs)("div",{className:"place",children:[Object(f.jsx)("input",{type:"text",placeholder:"Place",name:"",id:"",value:F,onChange:function(e){return R(e.target.value)}}),Object(f.jsx)("i",{className:"fas fa-map-marker-alt"})]}),Object(f.jsx)("div",{className:"save_article",children:Object(f.jsx)("button",{type:"submit",onClick:W,children:Object(f.jsx)(d.b,{to:"/",children:"Publish"})})})]})})]})]})})},k=a(38),_=(a(83),a(49)),L=a.n(_);var P=function(){var e=Object(v.g)().id,t=Object(c.useState)({}),a=Object(r.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)(""),l=Object(r.a)(i,2),o=l[0],j=l[1],u=Object(c.useContext)(p).value2,O=Object(r.a)(u,2),m=O[0];return O[1],Object(c.useEffect)((function(){b.collection("posts").doc(e).onSnapshot((function(e){n(e.data()),j(e.data().username)}))}),[e]),Object(f.jsxs)(N.a,{children:[m&&o!==m?Object(f.jsx)("div",{className:"contact",children:Object(f.jsx)(d.b,{to:"/Post/".concat(e,"/ContactRoom"),children:"Contact Seller"})}):Object(f.jsx)("div",{}),m?Object(f.jsx)("div",{className:"post_detail_container",children:Object(f.jsx)(L.a,Object(k.a)(Object(k.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{className:"slider_two",children:0!==Object.keys(s).length?s.imagesUrl.map((function(e,t){return Object(f.jsx)("div",{className:"post_img",children:Object(f.jsx)("img",{src:e,alt:""})},t)})):null}))}):Object(f.jsxs)("div",{className:"err_login",children:[Object(f.jsx)("h1",{children:Object(f.jsx)("i",{className:"fas fa-exclamation-triangle"})}),Object(f.jsx)("h1",{children:"You have to Login"})]})]})};a(55);var I=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useContext)(p),i=n.value2,l=n.value3,o=Object(r.a)(i,2),j=o[0],d=(o[1],Object(r.a)(l,2)),O=(d[0],d[1],Object(c.useState)("")),m=Object(r.a)(O,2),x=m[0],g=m[1],C=Object(c.useState)([]),S=Object(r.a)(C,2),y=S[0],w=S[1],k=Object(c.useState)(!0),_=Object(r.a)(k,2),L=(_[0],_[1],Object(c.useState)("")),P=Object(r.a)(L,2),I=(P[0],P[1]),E=Object(v.g)().id;return Object(c.useEffect)((function(){b.collection("posts").doc(E).onSnapshot((function(e){s(e.data().username),I(j)}))}),[E]),Object(c.useEffect)((function(){b.collection("chats").orderBy("timestamp","asc").onSnapshot((function(e){return w(e.docs.map((function(e){return j&&(e.data().sender.toLowerCase()===j.toLowerCase()&&e.data().productId===E||e.data().receiver.toLowerCase()===j.toLowerCase()&&e.data().seller.toLowerCase()===e.data().sender.toLowerCase()&&e.data().productId===E)?e.data():null})))}))}),[E,j,a]),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)(N.a,{children:Object(f.jsxs)("div",{className:"room_container",children:[Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)("div",{children:Object(f.jsx)(h.a,{alt:j===a?"client":a,className:"avatar",src:"/static/images/avatar/1.jpg",onClick:function(){}})}),Object(f.jsx)("h3",{children:j===a?"client":a})]}),Object(f.jsx)("div",{className:"chat",id:"chat",children:y&&y.map((function(e,t){var a;if(e)return Object(f.jsxs)("div",{className:null!==e&&e.sender.toLowerCase()===j.toLowerCase()?"message_receiver":"message",children:["   ",Object(f.jsx)("h4",{children:e?e.name:null}),Object(f.jsx)("p",{children:e?e.message:null}),Object(f.jsx)("span",{children:e?new Date(null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString():null})]},t)}))}),Object(f.jsx)("div",{className:"text-field",children:Object(f.jsxs)("form",{action:"",children:[Object(f.jsx)("input",{type:"text",name:"",id:"",placeholder:j!==a?"Type a message to ".concat(a):"Type a message to the Client",value:x,onChange:function(e){g(e.target.value)}}),Object(f.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),""!==x&&b.collection("chats").add({productId:E,message:x,sender:j,seller:a,receiver:a,timestamp:u.a.firestore.FieldValue.serverTimestamp()}),g("")},children:Object(f.jsx)("i",{className:"far fa-paper-plane"})})]})})]})})})},E=(a(99),a(43)),T=a.n(E);var U=function(){var e=Object(c.useContext)(p).value2,t=Object(r.a)(e,2),a=t[0],s=(t[1],Object(c.useState)([])),n=Object(r.a)(s,2),i=n[0],l=n[1];return Object(c.useEffect)((function(){return b.collection("chats").orderBy("timestamp","desc").onSnapshot((function(e){return l(e.docs.map((function(e){return a&&e.data().receiver.toLowerCase()===a.toLowerCase()&&e.data().seller.toLowerCase()===a.toLowerCase()?e.data():null})))})),function(){return l([])}}),[a]),Object(f.jsx)("div",{className:"messages_container",children:i&&i.map((function(e,t){if(null!=e&&0!==Object.keys(e).length)return Object(f.jsx)(T.a,{top:!0,children:Object(f.jsx)(d.b,{to:"/Post/".concat(e.productId,"/").concat(e.sender,"/Client"),children:Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:e.sender}),Object(f.jsx)("p",{children:e.message})]})})},t)}))})};var D=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],s=(t[1],Object(c.useContext)(p)),n=s.value2,i=s.value3,l=Object(r.a)(n,2),o=l[0],j=(l[1],Object(r.a)(i,2)),d=(j[0],j[1],Object(c.useState)("")),O=Object(r.a)(d,2),m=O[0],x=O[1],g=Object(c.useState)([]),C=Object(r.a)(g,2),S=C[0],y=C[1],w=Object(v.g)(),k=w.id,_=w.client;return Object(c.useEffect)((function(){b.collection("chats").orderBy("timestamp","asc").onSnapshot((function(e){return y(e.docs.map((function(e){return o&&(e.data().sender.toLowerCase()===o.toLowerCase()&&e.data().receiver.toLowerCase()===_.toLowerCase()&&e.data().seller.toLowerCase()===o.toLowerCase()&&e.data().productId===k||e.data().sender.toLowerCase()===_.toLowerCase()&&e.data().receiver.toLowerCase()===o.toLowerCase()&&e.data().seller.toLowerCase()===o.toLowerCase()&&e.data().productId===k)?e.data():null})))}))}),[k,o,a,_]),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)(N.a,{children:Object(f.jsxs)("div",{className:"room_container",children:[Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)("div",{children:Object(f.jsx)(h.a,{alt:_,className:"avatar",src:"/static/images/avatar/1.jpg",onClick:function(){}})}),Object(f.jsx)("h3",{children:_})]}),Object(f.jsx)("div",{className:"chat",id:"chat",children:S&&S.map((function(e,t){var a;if(e)return Object(f.jsxs)("div",{className:null!==e&&e.sender.toLowerCase()===o.toLowerCase()?"message_receiver":"message",children:["   ",Object(f.jsx)("h4",{children:e?e.name:null}),Object(f.jsx)("p",{children:e?e.message:null}),Object(f.jsx)("span",{children:e?new Date(null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString():null})]},t)}))}),Object(f.jsx)("div",{className:"text-field",children:Object(f.jsxs)("form",{action:"",children:[Object(f.jsx)("input",{type:"text",name:"",id:"",placeholder:o!==a?"Type a message to ".concat(a):"Type a message to the Client",value:m,onChange:function(e){x(e.target.value)}}),Object(f.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),""!==m&&b.collection("chats").add({productId:k,message:m,sender:o,seller:o,receiver:_,timestamp:u.a.firestore.FieldValue.serverTimestamp()}),x("")},children:Object(f.jsx)("i",{className:"far fa-paper-plane"})})]})})]})})})};a(100);var A=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),i=Object(r.a)(n,2),l=(i[0],i[1]),o=Object(c.useContext)(p).value2,j=Object(r.a)(o,2),d=j[0],u=(j[1],Object(c.useState)([])),O=Object(r.a)(u,2),m=O[0],x=O[1],g=Object(v.f)();Object(c.useEffect)((function(){b.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return x(e.docs.map((function(e){return d&&e.data().username.toLowerCase()===d.toLowerCase()?e.id:null})))})),b.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return s(e.docs.map((function(e){return d&&e.data().username.toLowerCase()===d.toLowerCase()?e.data():null})))}))}),[d]);var N={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1};return Object(f.jsx)("div",{className:"my_posts_container",children:a&&m&&a.map((function(e,t){var a;if(null!==e)return 0,new Date(e.timestamp.seconds),Object(f.jsxs)("div",{className:"my_post",children:[Object(f.jsxs)("div",{className:"post_header",children:[Object(f.jsxs)("div",{className:"right",children:[Object(f.jsx)(h.a,{alt:e.username?e.username:"",className:"avatar",src:"/static/images/avatar/1.jpg"}),Object(f.jsx)("h3",{children:e.username})]}),Object(f.jsxs)("div",{className:"left",children:[Object(f.jsx)("i",{className:"far fa-edit",onClick:function(){return g("/Post/".concat(m[t],"/Edit"))}}),Object(f.jsx)("i",{className:"far fa-trash-alt",onClick:function(){return function(e){b.collection("posts").doc(e).delete(),l(!1)}(m[t])}})]})]}),Object(f.jsx)("div",{className:"post_image",children:Object(f.jsx)(L.a,Object(k.a)(Object(k.a)({},N),{},{className:"slider",children:0!==Object.keys(e.imagesUrl).length&&e.imagesUrl.map((function(e,t){return Object(f.jsx)("img",{src:e,alt:""},t)}))}))}),Object(f.jsx)("div",{className:"post_date",children:Object(f.jsx)("p",{children:e?new Date(null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString():null})})]},t)}))})};a(101);var B=function(){var e=Object(v.g)().id,t=Object(v.f)(),a=Object(c.useState)([]),s=Object(r.a)(a,2),n=s[0],i=s[1],l=Object(c.useState)([]),O=Object(r.a)(l,2),h=O[0],x=O[1],g=Object(c.useContext)(p).value2,N=Object(r.a)(g,2),C=N[0],w=(N[1],Object(c.useState)("")),k=Object(r.a)(w,2),_=k[0],L=k[1],P=Object(c.useState)(""),I=Object(r.a)(P,2),E=I[0],T=I[1],U=Object(c.useState)(""),D=Object(r.a)(U,2),A=D[0],B=D[1],F=Object(c.useState)(""),R=Object(r.a)(F,2),V=R[0],J=R[1];Object(c.useEffect)((function(){b.collection("posts").doc(e).onSnapshot((function(e){L(e.data().productName),T(e.data().price),J(e.data().place),B(e.data().category)}))}),[e]);var Z=-1,z=0,W=[],Y=function(){var a=Object(j.a)(o.a.mark((function a(c){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:c.preventDefault(),n.map(function(){var a=Object(j.a)(o.a.mark((function a(c){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,m.ref("images/".concat(c.name)).put(c);case 2:return a.next=4,m.ref("images").child(c.name).getDownloadURL().then((function(e){W.unshift(e),z++}));case 4:z===n.length&&(b.collection("posts").doc(e).set({productName:_,price:E,imagesUrl:W,username:C,place:V,category:A,timestamp:u.a.firestore.FieldValue.serverTimestamp()}),i([]),t("/"));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()),J(""),L(""),B(""),T("");case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(f.jsx)(y.Zoom,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("input",{type:"file",className:"file",onChange:function(e){""!==e.target.value&&(i([e.target.files[Z]].concat(Object(S.a)(n))),x([e.target.files[Z].name].concat(Object(S.a)(h))))},name:"",id:"file"}),Object(f.jsxs)("div",{className:"add_container",children:[Object(f.jsx)("h3",{children:"Edit Post"}),Object(f.jsx)("div",{className:"data_container",onClick:function(){document.getElementById("file").click(),Z++},children:Object(f.jsxs)("h4",{children:[n.length," Selected +"]})}),Object(f.jsx)("div",{className:"details",children:Object(f.jsxs)("form",{action:"",children:[Object(f.jsx)("div",{className:"title",children:Object(f.jsx)("input",{type:"text",placeholder:"Title",name:"",id:"",value:_,onChange:function(e){return L(e.target.value)}})}),Object(f.jsx)("div",{className:"price",children:Object(f.jsx)("input",{type:"text",placeholder:"Price",name:"",id:"",value:E,onChange:function(e){return T(e.target.value)}})}),Object(f.jsxs)("div",{className:"category",children:[Object(f.jsx)("input",{type:"text",placeholder:"Category",name:"",id:"",value:A,onChange:function(e){return B(e.target.value)}}),Object(f.jsx)("i",{className:"fas fa-caret-down"})]}),Object(f.jsxs)("div",{className:"place",children:[Object(f.jsx)("input",{type:"text",placeholder:"Place",name:"",id:"",value:V,onChange:function(e){return J(e.target.value)}}),Object(f.jsx)("i",{className:"fas fa-map-marker-alt"})]}),Object(f.jsx)("div",{className:"save_article",children:Object(f.jsx)("button",{type:"submit",onClick:Y,children:Object(f.jsx)(d.b,{to:"/",children:"Edit"})})})]})})]})]})})};var F=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(null),i=Object(r.a)(n,2),l=i[0],o=i[1],j=Object(c.useState)(""),u=Object(r.a)(j,2),b=u[0],O=u[1];return Object(f.jsx)("div",{className:a?"App of":"App",children:Object(f.jsx)(p.Provider,{value:{value1:[a,s],value2:[l,o],value3:[b,O]},children:Object(f.jsxs)(d.a,{children:[Object(f.jsx)(x,{}),Object(f.jsxs)(v.c,{children:[Object(f.jsx)(v.a,{path:"/",element:Object(f.jsx)(C,{})}),Object(f.jsx)(v.a,{path:"/addPost",element:Object(f.jsx)(w,{})}),Object(f.jsx)(v.a,{path:"/Post/:id",element:Object(f.jsx)(P,{})}),Object(f.jsx)(v.a,{path:"/Post/:id/ContactRoom",element:Object(f.jsx)(I,{})}),Object(f.jsx)(v.a,{path:"/Post/:id/Edit",element:Object(f.jsx)(B,{})}),Object(f.jsx)(v.a,{path:"/Post/:id/:client/Client",element:Object(f.jsx)(D,{})}),Object(f.jsx)(v.a,{path:"/Inbox",element:Object(f.jsx)(U,{})}),Object(f.jsx)(v.a,{path:"/myPosts",element:Object(f.jsx)(A,{})})]})]})})})};i.a.render(Object(f.jsx)(s.a.Fragment,{children:Object(f.jsx)(F,{})}),document.getElementById("root"))},55:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){},83:function(e,t,a){},99:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.e0d4b9c7.chunk.js.map