var N=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function W(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var A={exports:{}};(function(c,a){(function(m,u){c.exports=u(m)})(typeof N<"u"?N:window||N.window||N.global,function(m){var u={},n="iziToast";document.querySelector("body");var p=!!/Mobi/.test(navigator.userAgent),h=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),C=typeof InstallTrigger<"u",y="ontouchstart"in document.documentElement,b=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],L={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},I=568,x={};u.children={};var M={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof window.CustomEvent!="function"){var z=function(s,i){i=i||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(s,i.bubbles,i.cancelable,i.detail),e};z.prototype=window.Event.prototype,window.CustomEvent=z}var v=function(s,i,e){if(Object.prototype.toString.call(s)==="[object Object]")for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&i.call(e,s[t],t,s);else if(s)for(var r=0,d=s.length;r<d;r++)i.call(e,s[r],r,s)},w=function(s,i){var e={};return v(s,function(t,r){e[r]=s[r]}),v(i,function(t,r){e[r]=i[r]}),e},T=function(s){var i=document.createDocumentFragment(),e=document.createElement("div");for(e.innerHTML=s;e.firstChild;)i.appendChild(e.firstChild);return i},B=function(s){var i=btoa(encodeURIComponent(s));return i.replace(/=/g,"")},H=function(s){return s.substring(0,1)=="#"||s.substring(0,3)=="rgb"||s.substring(0,3)=="hsl"},D=function(s){try{return btoa(atob(s))==s}catch{return!1}},E=function(){return{move:function(s,i,e,t){var r,d=.3,o=180;t!==0&&(s.classList.add(n+"-dragged"),s.style.transform="translateX("+t+"px)",t>0?(r=(o-t)/o,r<d&&i.hide(w(e,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),s,"drag")):(r=(o+t)/o,r<d&&i.hide(w(e,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),s,"drag")),s.style.opacity=r,r<d&&((h||C)&&(s.style.left=t+"px"),s.parentNode.style.opacity=d,this.stopMoving(s,null)))},startMoving:function(s,i,e,t){t=t||window.event;var r=y?t.touches[0].clientX:t.clientX,d=s.style.transform.replace("px)","");d=d.replace("translateX(","");var o=r-d;e.transitionIn&&s.classList.remove(e.transitionIn),e.transitionInMobile&&s.classList.remove(e.transitionInMobile),s.style.transition="",y?document.ontouchmove=function(l){l.preventDefault(),l=l||window.event;var f=l.touches[0].clientX,g=f-o;E.move(s,i,e,g)}:document.onmousemove=function(l){l.preventDefault(),l=l||window.event;var f=l.clientX,g=f-o;E.move(s,i,e,g)}},stopMoving:function(s,i){y?document.ontouchmove=function(){}:document.onmousemove=function(){},s.style.opacity="",s.style.transform="",s.classList.contains(n+"-dragged")&&(s.classList.remove(n+"-dragged"),s.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){s.style.transition=""},400))}}}();return u.setSetting=function(s,i,e){u.children[s][i]=e},u.getSetting=function(s,i){return u.children[s][i]},u.destroy=function(){v(document.querySelectorAll("."+n+"-overlay"),function(s,i){s.remove()}),v(document.querySelectorAll("."+n+"-wrapper"),function(s,i){s.remove()}),v(document.querySelectorAll("."+n),function(s,i){s.remove()}),this.children={},document.removeEventListener(n+"-opened",{},!1),document.removeEventListener(n+"-opening",{},!1),document.removeEventListener(n+"-closing",{},!1),document.removeEventListener(n+"-closed",{},!1),document.removeEventListener("keyup",{},!1),x={}},u.settings=function(s){u.destroy(),x=s,M=w(M,s||{})},v(L,function(s,i){u[i]=function(e){var t=w(x,e||{});t=w(s,t||{}),this.show(t)}}),u.progress=function(s,i,e){var t=this,r=i.getAttribute("data-iziToast-ref"),d=w(this.children[r],s||{}),o=i.querySelector("."+n+"-progressbar div");return{start:function(){typeof d.time.REMAINING>"u"&&(i.classList.remove(n+"-reseted"),o!==null&&(o.style.transition="width "+d.timeout+"ms "+d.progressBarEasing,o.style.width="0%"),d.time.START=new Date().getTime(),d.time.END=d.time.START+d.timeout,d.time.TIMER=setTimeout(function(){clearTimeout(d.time.TIMER),i.classList.contains(n+"-closing")||(t.hide(d,i,"timeout"),typeof e=="function"&&e.apply(t))},d.timeout),t.setSetting(r,"time",d.time))},pause:function(){if(typeof d.time.START<"u"&&!i.classList.contains(n+"-paused")&&!i.classList.contains(n+"-reseted")){if(i.classList.add(n+"-paused"),d.time.REMAINING=d.time.END-new Date().getTime(),clearTimeout(d.time.TIMER),t.setSetting(r,"time",d.time),o!==null){var l=window.getComputedStyle(o),f=l.getPropertyValue("width");o.style.transition="none",o.style.width=f}typeof e=="function"&&setTimeout(function(){e.apply(t)},10)}},resume:function(){typeof d.time.REMAINING<"u"?(i.classList.remove(n+"-paused"),o!==null&&(o.style.transition="width "+d.time.REMAINING+"ms "+d.progressBarEasing,o.style.width="0%"),d.time.END=new Date().getTime()+d.time.REMAINING,d.time.TIMER=setTimeout(function(){clearTimeout(d.time.TIMER),i.classList.contains(n+"-closing")||(t.hide(d,i,"timeout"),typeof e=="function"&&e.apply(t))},d.time.REMAINING),t.setSetting(r,"time",d.time)):this.start()},reset:function(){clearTimeout(d.time.TIMER),delete d.time.REMAINING,t.setSetting(r,"time",d.time),i.classList.add(n+"-reseted"),i.classList.remove(n+"-paused"),o!==null&&(o.style.transition="none",o.style.width="100%"),typeof e=="function"&&setTimeout(function(){e.apply(t)},10)}}},u.hide=function(s,i,e){typeof i!="object"&&(i=document.querySelector(i));var t=this,r=w(this.children[i.getAttribute("data-iziToast-ref")],s||{});r.closedBy=e||null,delete r.time.REMAINING,i.classList.add(n+"-closing"),function(){var l=document.querySelector("."+n+"-overlay");if(l!==null){var f=l.getAttribute("data-iziToast-ref");f=f.split(",");var g=f.indexOf(String(r.ref));g!==-1&&f.splice(g,1),l.setAttribute("data-iziToast-ref",f.join()),f.length===0&&(l.classList.remove("fadeIn"),l.classList.add("fadeOut"),setTimeout(function(){l.remove()},700))}}(),r.transitionIn&&i.classList.remove(r.transitionIn),r.transitionInMobile&&i.classList.remove(r.transitionInMobile),p||window.innerWidth<=I?r.transitionOutMobile&&i.classList.add(r.transitionOutMobile):r.transitionOut&&i.classList.add(r.transitionOut);var d=i.parentNode.offsetHeight;i.parentNode.style.height=d+"px",i.style.pointerEvents="none",(!p||window.innerWidth>I)&&(i.parentNode.style.transitionDelay="0.2s");try{var o=new CustomEvent(n+"-closing",{detail:r,bubbles:!0,cancelable:!0});document.dispatchEvent(o)}catch(l){console.warn(l)}setTimeout(function(){i.parentNode.style.height="0px",i.parentNode.style.overflow="",setTimeout(function(){delete t.children[r.ref],i.parentNode.remove();try{var l=new CustomEvent(n+"-closed",{detail:r,bubbles:!0,cancelable:!0});document.dispatchEvent(l)}catch(f){console.warn(f)}typeof r.onClosed<"u"&&r.onClosed.apply(null,[r,i,e])},1e3)},200),typeof r.onClosing<"u"&&r.onClosing.apply(null,[r,i,e])},u.show=function(s){var i=this,e=w(x,s||{});if(e=w(M,e),e.time={},e.id===null&&(e.id=B(e.title+e.message+e.color)),e.displayMode===1||e.displayMode=="once")try{if(document.querySelectorAll("."+n+"#"+e.id).length>0)return!1}catch{console.warn("["+n+"] Could not find an element with this selector: #"+e.id+". Try to set an valid id.")}if(e.displayMode===2||e.displayMode=="replace")try{v(document.querySelectorAll("."+n+"#"+e.id),function(o,l){i.hide(e,o,"replaced")})}catch{console.warn("["+n+"] Could not find an element with this selector: #"+e.id+". Try to set an valid id.")}e.ref=new Date().getTime()+Math.floor(Math.random()*1e7+1),u.children[e.ref]=e;var t={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:e.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};t.toast.setAttribute("data-iziToast-ref",e.ref),t.toast.appendChild(t.toastBody),t.toastCapsule.appendChild(t.toast),function(){if(t.toast.classList.add(n),t.toast.classList.add(n+"-opening"),t.toastCapsule.classList.add(n+"-capsule"),t.toastBody.classList.add(n+"-body"),t.toastTexts.classList.add(n+"-texts"),p||window.innerWidth<=I?e.transitionInMobile&&t.toast.classList.add(e.transitionInMobile):e.transitionIn&&t.toast.classList.add(e.transitionIn),e.class){var o=e.class.split(" ");v(o,function(l,f){t.toast.classList.add(l)})}e.id&&(t.toast.id=e.id),e.rtl&&(t.toast.classList.add(n+"-rtl"),t.toast.setAttribute("dir","rtl")),e.layout>1&&t.toast.classList.add(n+"-layout"+e.layout),e.balloon&&t.toast.classList.add(n+"-balloon"),e.maxWidth&&(isNaN(e.maxWidth)?t.toast.style.maxWidth=e.maxWidth:t.toast.style.maxWidth=e.maxWidth+"px"),(e.theme!==""||e.theme!=="light")&&t.toast.classList.add(n+"-theme-"+e.theme),e.color&&(H(e.color)?t.toast.style.background=e.color:t.toast.classList.add(n+"-color-"+e.color)),e.backgroundColor&&(t.toast.style.background=e.backgroundColor,e.balloon&&(t.toast.style.borderColor=e.backgroundColor))}(),function(){e.image&&(t.cover.classList.add(n+"-cover"),t.cover.style.width=e.imageWidth+"px",D(e.image.replace(/ /g,""))?t.cover.style.backgroundImage="url(data:image/png;base64,"+e.image.replace(/ /g,"")+")":t.cover.style.backgroundImage="url("+e.image+")",e.rtl?t.toastBody.style.marginRight=e.imageWidth+10+"px":t.toastBody.style.marginLeft=e.imageWidth+10+"px",t.toast.appendChild(t.cover))}(),function(){e.close?(t.buttonClose=document.createElement("button"),t.buttonClose.type="button",t.buttonClose.classList.add(n+"-close"),t.buttonClose.addEventListener("click",function(o){o.target,i.hide(e,t.toast,"button")}),t.toast.appendChild(t.buttonClose)):e.rtl?t.toast.style.paddingLeft="18px":t.toast.style.paddingRight="18px"}(),function(){e.progressBar&&(t.progressBar=document.createElement("div"),t.progressBarDiv=document.createElement("div"),t.progressBar.classList.add(n+"-progressbar"),t.progressBarDiv.style.background=e.progressBarColor,t.progressBar.appendChild(t.progressBarDiv),t.toast.appendChild(t.progressBar)),e.timeout&&(e.pauseOnHover&&!e.resetOnHover&&(t.toast.addEventListener("mouseenter",function(o){i.progress(e,t.toast).pause()}),t.toast.addEventListener("mouseleave",function(o){i.progress(e,t.toast).resume()})),e.resetOnHover&&(t.toast.addEventListener("mouseenter",function(o){i.progress(e,t.toast).reset()}),t.toast.addEventListener("mouseleave",function(o){i.progress(e,t.toast).start()})))}(),function(){e.iconUrl?(t.icon.setAttribute("class",n+"-icon"),t.icon.setAttribute("src",e.iconUrl)):e.icon&&(t.icon.setAttribute("class",n+"-icon "+e.icon),e.iconText&&t.icon.appendChild(document.createTextNode(e.iconText)),e.iconColor&&(t.icon.style.color=e.iconColor)),(e.icon||e.iconUrl)&&(e.rtl?t.toastBody.style.paddingRight="33px":t.toastBody.style.paddingLeft="33px",t.toastBody.appendChild(t.icon))}(),function(){e.title.length>0&&(t.strong=document.createElement("strong"),t.strong.classList.add(n+"-title"),t.strong.appendChild(T(e.title)),t.toastTexts.appendChild(t.strong),e.titleColor&&(t.strong.style.color=e.titleColor),e.titleSize&&(isNaN(e.titleSize)?t.strong.style.fontSize=e.titleSize:t.strong.style.fontSize=e.titleSize+"px"),e.titleLineHeight&&(isNaN(e.titleSize)?t.strong.style.lineHeight=e.titleLineHeight:t.strong.style.lineHeight=e.titleLineHeight+"px")),e.message.length>0&&(t.p=document.createElement("p"),t.p.classList.add(n+"-message"),t.p.appendChild(T(e.message)),t.toastTexts.appendChild(t.p),e.messageColor&&(t.p.style.color=e.messageColor),e.messageSize&&(isNaN(e.titleSize)?t.p.style.fontSize=e.messageSize:t.p.style.fontSize=e.messageSize+"px"),e.messageLineHeight&&(isNaN(e.titleSize)?t.p.style.lineHeight=e.messageLineHeight:t.p.style.lineHeight=e.messageLineHeight+"px")),e.title.length>0&&e.message.length>0&&(e.rtl?t.strong.style.marginLeft="10px":e.layout!==2&&!e.rtl&&(t.strong.style.marginRight="10px"))}(),t.toastBody.appendChild(t.toastTexts);var r;(function(){e.inputs.length>0&&(t.inputs.classList.add(n+"-inputs"),v(e.inputs,function(o,l){t.inputs.appendChild(T(o[0])),r=t.inputs.childNodes,r[l].classList.add(n+"-inputs-child"),o[3]&&setTimeout(function(){r[l].focus()},300),r[l].addEventListener(o[1],function(f){var g=o[2];return g(i,t.toast,this,f)})}),t.toastBody.appendChild(t.inputs))})(),function(){e.buttons.length>0&&(t.buttons.classList.add(n+"-buttons"),v(e.buttons,function(o,l){t.buttons.appendChild(T(o[0]));var f=t.buttons.childNodes;f[l].classList.add(n+"-buttons-child"),o[2]&&setTimeout(function(){f[l].focus()},300),f[l].addEventListener("click",function(g){g.preventDefault();var q=o[1];return q(i,t.toast,this,g,r)})})),t.toastBody.appendChild(t.buttons)}(),e.message.length>0&&(e.inputs.length>0||e.buttons.length>0)&&(t.p.style.marginBottom="0"),(e.inputs.length>0||e.buttons.length>0)&&(e.rtl?t.toastTexts.style.marginLeft="10px":t.toastTexts.style.marginRight="10px",e.inputs.length>0&&e.buttons.length>0&&(e.rtl?t.inputs.style.marginLeft="8px":t.inputs.style.marginRight="8px")),function(){t.toastCapsule.style.visibility="hidden",setTimeout(function(){var o=t.toast.offsetHeight,l=t.toast.currentStyle||window.getComputedStyle(t.toast),f=l.marginTop;f=f.split("px"),f=parseInt(f[0]);var g=l.marginBottom;g=g.split("px"),g=parseInt(g[0]),t.toastCapsule.style.visibility="",t.toastCapsule.style.height=o+g+f+"px",setTimeout(function(){t.toastCapsule.style.height="auto",e.target&&(t.toastCapsule.style.overflow="visible")},500),e.timeout&&i.progress(e,t.toast).start()},100)}(),function(){var o=e.position;if(e.target)t.wrapper=document.querySelector(e.target),t.wrapper.classList.add(n+"-target"),e.targetFirst?t.wrapper.insertBefore(t.toastCapsule,t.wrapper.firstChild):t.wrapper.appendChild(t.toastCapsule);else{if(b.indexOf(e.position)==-1){console.warn("["+n+`] Incorrect position.
It can be › `+b);return}p||window.innerWidth<=I?e.position=="bottomLeft"||e.position=="bottomRight"||e.position=="bottomCenter"?o=n+"-wrapper-bottomCenter":e.position=="topLeft"||e.position=="topRight"||e.position=="topCenter"?o=n+"-wrapper-topCenter":o=n+"-wrapper-center":o=n+"-wrapper-"+o,t.wrapper=document.querySelector("."+n+"-wrapper."+o),t.wrapper||(t.wrapper=document.createElement("div"),t.wrapper.classList.add(n+"-wrapper"),t.wrapper.classList.add(o),document.body.appendChild(t.wrapper)),e.position=="topLeft"||e.position=="topCenter"||e.position=="topRight"?t.wrapper.insertBefore(t.toastCapsule,t.wrapper.firstChild):t.wrapper.appendChild(t.toastCapsule)}isNaN(e.zindex)?console.warn("["+n+"] Invalid zIndex."):t.wrapper.style.zIndex=e.zindex}(),function(){e.overlay&&(document.querySelector("."+n+"-overlay.fadeIn")!==null?(t.overlay=document.querySelector("."+n+"-overlay"),t.overlay.setAttribute("data-iziToast-ref",t.overlay.getAttribute("data-iziToast-ref")+","+e.ref),!isNaN(e.zindex)&&e.zindex!==null&&(t.overlay.style.zIndex=e.zindex-1)):(t.overlay.classList.add(n+"-overlay"),t.overlay.classList.add("fadeIn"),t.overlay.style.background=e.overlayColor,t.overlay.setAttribute("data-iziToast-ref",e.ref),!isNaN(e.zindex)&&e.zindex!==null&&(t.overlay.style.zIndex=e.zindex-1),document.querySelector("body").appendChild(t.overlay)),e.overlayClose?(t.overlay.removeEventListener("click",{}),t.overlay.addEventListener("click",function(o){i.hide(e,t.toast,"overlay")})):t.overlay.removeEventListener("click",{}))}(),function(){if(e.animateInside){t.toast.classList.add(n+"-animateInside");var o=[200,100,300];(e.transitionIn=="bounceInLeft"||e.transitionIn=="bounceInRight")&&(o=[400,200,400]),e.title.length>0&&setTimeout(function(){t.strong.classList.add("slideIn")},o[0]),e.message.length>0&&setTimeout(function(){t.p.classList.add("slideIn")},o[1]),(e.icon||e.iconUrl)&&setTimeout(function(){t.icon.classList.add("revealIn")},o[2]);var l=150;e.buttons.length>0&&t.buttons&&setTimeout(function(){v(t.buttons.childNodes,function(f,g){setTimeout(function(){f.classList.add("revealIn")},l),l=l+150})},e.inputs.length>0?150:0),e.inputs.length>0&&t.inputs&&(l=150,v(t.inputs.childNodes,function(f,g){setTimeout(function(){f.classList.add("revealIn")},l),l=l+150}))}}(),e.onOpening.apply(null,[e,t.toast]);try{var d=new CustomEvent(n+"-opening",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(d)}catch(o){console.warn(o)}setTimeout(function(){t.toast.classList.remove(n+"-opening"),t.toast.classList.add(n+"-opened");try{var o=new CustomEvent(n+"-opened",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(o)}catch(l){console.warn(l)}e.onOpened.apply(null,[e,t.toast])},1e3),e.drag&&(y?(t.toast.addEventListener("touchstart",function(o){E.startMoving(this,i,e,o)},!1),t.toast.addEventListener("touchend",function(o){E.stopMoving(this,o)},!1)):(t.toast.addEventListener("mousedown",function(o){o.preventDefault(),E.startMoving(this,i,e,o)},!1),t.toast.addEventListener("mouseup",function(o){o.preventDefault(),E.stopMoving(this,o)},!1))),e.closeOnEscape&&document.addEventListener("keyup",function(o){o=o||window.event,o.keyCode==27&&i.hide(e,t.toast,"esc")}),e.closeOnClick&&t.toast.addEventListener("click",function(o){i.hide(e,t.toast,"toast")}),i.toast=t.toast},u})})(A);var k=A.exports;const U=W(k);var S=globalThis&&globalThis.__assign||function(){return S=Object.assign||function(c){for(var a,m=1,u=arguments.length;m<u;m++){a=arguments[m];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(c[n]=a[n])}return c},S.apply(this,arguments)},X={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},Z=function(){function c(a){a===void 0&&(a={}),this.opts=S(S({},X),a)}return c.prototype.spin=function(a){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),O(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),a&&a.insertBefore(this.el,a.firstChild||null),j(this.el,this.opts),this},c.prototype.stop=function(){return this.el&&(typeof requestAnimationFrame<"u"?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},c}();function O(c,a){for(var m in a)c.style[m]=a[m];return c}function R(c,a){return typeof c=="string"?c:c[a%c.length]}function j(c,a){var m=Math.round(a.corners*a.width*500)/1e3+"px",u="none";a.shadow===!0?u="0 2px 4px #000":typeof a.shadow=="string"&&(u=a.shadow);for(var n=G(u),p=0;p<a.lines;p++){var h=~~(360/a.lines*p+a.rotate),C=O(document.createElement("div"),{position:"absolute",top:-a.width/2+"px",width:a.length+a.width+"px",height:a.width+"px",background:R(a.fadeColor,p),borderRadius:m,transformOrigin:"left",transform:"rotate("+h+"deg) translateX("+a.radius+"px)"}),y=p*a.direction/a.lines/a.speed;y-=1/a.speed;var b=O(document.createElement("div"),{width:"100%",height:"100%",background:R(a.color,p),borderRadius:m,boxShadow:F(n,h),animation:1/a.speed+"s linear "+y+"s infinite "+a.animation});C.appendChild(b),c.appendChild(C)}}function G(c){for(var a=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,m=[],u=0,n=c.split(",");u<n.length;u++){var p=n[u],h=p.match(a);if(h!==null){var C=+h[2],y=+h[5],b=h[4],L=h[7];C===0&&!b&&(b=L),y===0&&!L&&(L=b),b===L&&m.push({prefix:h[1]||"",x:C,y,xUnits:b,yUnits:L,end:h[8]})}}return m}function F(c,a){for(var m=[],u=0,n=c;u<n.length;u++){var p=n[u],h=P(p.x,p.y,a);m.push(p.prefix+h[0]+p.xUnits+" "+h[1]+p.yUnits+p.end)}return m.join(", ")}function P(c,a,m){var u=m*Math.PI/180,n=Math.sin(u),p=Math.cos(u);return[Math.round((c*p+a*n)*1e3)/1e3,Math.round((-c*n+a*p)*1e3)/1e3]}export{Z as S,U as i};
//# sourceMappingURL=vendor-f8d17ba3.js.map