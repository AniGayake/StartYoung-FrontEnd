(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{23:function(e,a,t){},41:function(e,a,t){},55:function(e,a,t){e.exports=t(73)},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(8),r=t.n(i),c=t(13),o=(t(41),t(6)),s=["btn--primary","btn--outline","btn--test"],m=["btn--medium","btn--large"],u=function(e){var a=e.children,t=e.type,n=e.onClick,i=e.buttonStyle,r=e.buttonSize,c=s.includes(i)?i:s[0],u=m.includes(r)?r:m[0];return l.a.createElement(o.b,{to:"/sign-up",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(c," ").concat(u),onClick:n,type:t},a))};t(68);var d=function(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],i=a[1],r=Object(n.useState)(!0),s=Object(c.a)(r,2),m=s[0],d=s[1],b=function(){return i(!1)},E=function(){window.innerWidth<=960?d(!1):d(!0)};return Object(n.useEffect)((function(){E()}),[]),window.addEventListener("resize",E),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(o.b,{to:"/",className:"navbar-logo",onClick:b},"Start Young UK",l.a.createElement("i",{class:""})),l.a.createElement("div",{className:"menu-icon",onClick:function(){return i(!t)}},l.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/",className:"nav-links",onClick:b},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/about-us",className:"nav-links",onClick:b},"About Us")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/vision",className:"nav-links",onClick:b},"Vision")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/our-impact",className:"nav-links",onClick:b},"Our Impact")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/sign-up",className:"nav-links-mobile",onClick:b},"Sign Up"))),m&&l.a.createElement(u,{buttonStyle:"btn--outline"},"SIGN UP"))))};t(23),t(69);var b=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement(o.b,{className:"cards__item__link",to:e.path},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},e.text)))))};var E=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null,"Check out these EPIC Destinations!"),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(b,{src:"images/img-9.jpg",text:"Explore the hidden waterfall deep inside the Amazon Jungle",label:"Adventure",path:"/services"}),l.a.createElement(b,{src:"images/img-2.jpg",text:"Travel through the Islands of Bali in a Private Cruise",label:"Luxury",path:"/services"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(b,{src:"images/img-3.jpg",text:"Set Sail in the Atlantic Ocean visiting Uncharted Waters",label:"Mystery",path:"/services"}),l.a.createElement(b,{src:"images/img-4.jpg",text:"Experience Football on Top of the Himilayan Mountains",label:"Adventure",path:"/vision"}),l.a.createElement(b,{src:"images/img-8.jpg",text:"Ride through the Sahara Desert on a guided camel tour",label:"Adrenaline",path:"/sign-up"})))))},p=(t(70),["btn--primary","btn--outline","btn--test"]),h=["btn--medium","btn--large"],v=function(e){var a=e.children,t=e.type,n=e.onClick,i=e.buttonStyle,r=e.buttonSize,c=p.includes(i)?i:p[0],s=h.includes(r)?r:h[0];return l.a.createElement(o.b,{to:"/volunteer",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(c," ").concat(s),onClick:n,type:t},a))};var g=function(){return l.a.createElement("div",{className:"hero-container"},l.a.createElement("video",{src:"/videos/video-1.mp4",autoPlay:!0,loop:!0,muted:!0}),l.a.createElement("h1",null,"EVERYONE DESERVE THE CARE"),l.a.createElement("p",null,"Join us now! Become a hero"),l.a.createElement("div",{className:"hero-btns"},l.a.createElement(v,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"Register a Volunteer"),l.a.createElement(u,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey")},"WATCH TRAILER ",l.a.createElement("i",{className:"far fa-play-circle"}))))};t(71);var f=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-text"},"You can unsubscribe at any time."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),l.a.createElement(u,{buttonStyle:"btn--outline"},"Subscribe")))),l.a.createElement("div",{class:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"About Us"),l.a.createElement(o.b,{to:"/sign-up"},"How it works"),l.a.createElement(o.b,{to:"/"},"Testimonials"),l.a.createElement(o.b,{to:"/"},"Careers"),l.a.createElement(o.b,{to:"/"},"Investors"),l.a.createElement(o.b,{to:"/"},"Terms of Service")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Contact Us"),l.a.createElement(o.b,{to:"/"},"Contact"),l.a.createElement(o.b,{to:"/"},"Support"),l.a.createElement(o.b,{to:"/"},"Sponsorships"))),l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Videos"),l.a.createElement(o.b,{to:"/"},"Submit Video"),l.a.createElement(o.b,{to:"/"},"Influencer")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Social Media"),l.a.createElement(o.b,{to:"/"},"Instagram"),l.a.createElement(o.b,{to:"/"},"Facebook"),l.a.createElement(o.b,{to:"/"},"Youtube"),l.a.createElement(o.b,{to:"/"},"Twitter")))),l.a.createElement("section",{class:"social-media"},l.a.createElement("div",{class:"social-media-wrap"},l.a.createElement("small",{class:"website-rights"},"Start Young UK \xa9 2020"),l.a.createElement("div",{class:"social-icons"},l.a.createElement(o.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},l.a.createElement("i",{class:"fab fa-facebook-f"})),l.a.createElement(o.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{class:"fab fa-instagram"})),l.a.createElement(o.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},l.a.createElement("i",{class:"fab fa-youtube"})),l.a.createElement(o.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement("i",{class:"fab fa-twitter"})),l.a.createElement(o.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{class:"fab fa-linkedin"}))))))};var y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null),l.a.createElement(E,null),l.a.createElement(f,null))},N=t(11);function k(){return document.body.style="background: rgb(247, 242, 242);",l.a.createElement("div",null,l.a.createElement("h1",{className:"about-us-class-header"},"About Us"),l.a.createElement("p",{className:"about-us-class-content"},"It is a sad reality that many areas in the UK are poverty stricken, with many children and young adults going without the basic needs. A group of individuals came together to help and support local schools in East London with a Christmas Gifting Initiative in 2020. The schools requested clothes and food rather than toys as certain children were coming to school with socks on their hands instead of gloves, and some with no under garments. This was a huge eye opener for us. We were able to give over 400 parcels, which included , care packages and food hampers , underwear, socks, hats, gloves & scarves. Families were struggling financially and with the impact of COVID-19, this made their daily living struggles even worse. Our main aim was to ensure those families who were disadvantaged and living in poverty were prioritised. It was apparent that this was an even bigger problem than we had initially anticipated and although the gifts were a help, these families needed long term assistance."),l.a.createElement("p",{className:"about-us-class-content"},"As a registered charity our promise is to act as a resource for young people from the age of 5 up to the age of 18 living in underprivileged and/or disadvantaged areas of Newham, London and the surrounding area by providing advice and assistance and other activities as a means of: (a) advancing in life and helping young people. By developing their skills, capacities and capabilities to enable them to participate in society as independent, mature and responsible individuals; (b) advancing education; (c) relieving unemployment; (d) providing recreational and leisure time activity in the interests of social welfare for people living in the area of benefit who have need by reason of their youth, age, infirmity or disability, poverty or social and economic circumstances with a view to improving the conditions of life of such persons.\u2019"))}function w(){return l.a.createElement("div",{className:"products"},l.a.createElement("h1",null,"Vision"),l.a.createElement("div",null,l.a.createElement("br",null,"hi"),"kajfkjkajfkj"))}var S=t(101),j=t(107),O=t(104),C=t(106),_=t(108),x=Object(S.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));function I(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),t=a[0],i=a[1],r=Object(n.useState)(""),o=Object(c.a)(r,2),s=o[0],m=o[1],u=Object(n.useState)(""),d=Object(c.a)(u,2),b=d[0],E=d[1],p=Object(n.useState)(""),h=Object(c.a)(p,2),v=h[0],g=h[1],f=Object(n.useState)(""),y=Object(c.a)(f,2),N=y[0],k=y[1],w=Object(n.useState)([]),S=Object(c.a)(w,2),I=(S[0],S[1],x());return l.a.createElement(O.a,null,l.a.createElement(C.a,{elevation:3,style:{padding:"50px 20px",width:600,margin:"20px auto"}},l.a.createElement("h1",{style:{color:"blue"}},l.a.createElement("u",null,"Sign Up")),l.a.createElement("form",{className:I.root,noValidate:!0,autoComplete:"off"},l.a.createElement(j.a,{id:"outlined-basic",label:"First Name",variant:"outlined",fullWidth:!0,value:t,onChange:function(e){return i(e.target.value)}}),l.a.createElement(j.a,{id:"outlined-basic",label:"Last Name",variant:"outlined",fullWidth:!0,value:s,onChange:function(e){return m(e.target.value)}}),l.a.createElement(j.a,{id:"outlined-basic",label:"Mobile",variant:"outlined",fullWidth:!0,value:b,onChange:function(e){return E(e.target.value)}}),l.a.createElement(j.a,{id:"outlined-basic",label:"Email",variant:"outlined",fullWidth:!0,value:v,onChange:function(e){return g(e.target.value)}}),l.a.createElement(j.a,{id:"outlined-basic",label:"Password",variant:"outlined",fullWidth:!0,type:"password",value:N,onChange:function(e){return k(e.target.value)}}),l.a.createElement(_.a,{variant:"contained",color:"secondary",onClick:function(e){e.preventDefault();var a={firstName:t,lastName:s,mobileNumber:b,email:v,password:N};console.log(a),fetch("http://localhost:8090/api/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(){i(""),m(""),E(""),g(""),k(""),console.log("New User added")}))}},"Submit"))))}function T(){return l.a.createElement("h1",{className:"products"},"Our Impact")}var W=Object(S.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));function A(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),t=a[0],i=a[1],r=Object(n.useState)(""),o=Object(c.a)(r,2),s=o[0],m=o[1],u=Object(n.useState)(""),d=Object(c.a)(u,2),b=d[0],E=d[1],p=Object(n.useState)(""),h=Object(c.a)(p,2),v=h[0],g=h[1],f=Object(n.useState)(""),y=Object(c.a)(f,2),N=y[0],k=y[1],w=Object(n.useState)([]),S=Object(c.a)(w,2),x=(S[0],S[1],W());return l.a.createElement(O.a,null,l.a.createElement(C.a,{elevation:3,style:{padding:"50px 20px",width:600,margin:"20px auto"}},l.a.createElement("h1",{style:{color:"blue"}},l.a.createElement("u",null,"Register as Volunteer")),l.a.createElement("form",{className:x.root,noValidate:!0,autoComplete:"off"},l.a.createElement(j.a,{id:"outlined-basic",label:"First Name",variant:"outlined",fullWidth:!0,value:t,onChange:function(e){return i(e.target.value)}}),l.a.createElement(j.a,{id:"outlined-basic",label:"Last Name",variant:"outlined",fullWidth:!0,value:s,onChange:function(e){return m(e.target.value)}}),l.a.createElement(j.a,{id:"outlined-basic",label:"Mobile Number",variant:"outlined",fullWidth:!0,value:b,onChange:function(e){return E(e.target.value)}}),l.a.createElement(j.a,{id:"outlined-basic",label:"Email",variant:"outlined",fullWidth:!0,value:v,onChange:function(e){return g(e.target.value)}}),l.a.createElement(j.a,{id:"outlined-basic",label:"Type",variant:"outlined",fullWidth:!0,value:N,onChange:function(e){return k(e.target.value)}}),l.a.createElement(_.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault();var a={firstName:t,lastName:s,mobileNumber:b,email:v,type:N};console.log(a),fetch("http://localhost:8090/api/regvolunteer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(){i(""),m(""),E(""),g(""),k(""),console.log("New User added")}))}},"Become a volunteer"))))}var U=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,null,l.a.createElement(d,null),l.a.createElement(N.c,null,l.a.createElement(N.a,{path:"/",exact:!0,component:y}),l.a.createElement(N.a,{path:"/about-us",component:k}),l.a.createElement(N.a,{path:"/vision",component:w}),l.a.createElement(N.a,{path:"/sign-up",component:I}),l.a.createElement(N.a,{path:"/our-impact",component:T}),l.a.createElement(N.a,{path:"/volunteer",component:A}))))};r.a.render(l.a.createElement(U,null),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.8c75a34d.chunk.js.map