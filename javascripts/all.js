/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license*/

(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
/* Chosen v1.0.0 | (c) 2011-2013 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */

!function(){var a,AbstractChosen,Chosen,SelectParser,b,c={}.hasOwnProperty,d=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};SelectParser=function(){function SelectParser(){this.options_index=0,this.parsed=[]}return SelectParser.prototype.add_node=function(a){return"OPTGROUP"===a.nodeName.toUpperCase()?this.add_group(a):this.add_option(a)},SelectParser.prototype.add_group=function(a){var b,c,d,e,f,g;for(b=this.parsed.length,this.parsed.push({array_index:b,group:!0,label:this.escapeExpression(a.label),children:0,disabled:a.disabled}),f=a.childNodes,g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(this.add_option(c,b,a.disabled));return g},SelectParser.prototype.add_option=function(a,b,c){return"OPTION"===a.nodeName.toUpperCase()?(""!==a.text?(null!=b&&(this.parsed[b].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:a.value,text:a.text,html:a.innerHTML,selected:a.selected,disabled:c===!0?c:a.disabled,group_array_index:b,classes:a.className,style:a.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1):void 0},SelectParser.prototype.escapeExpression=function(a){var b,c;return null==a||a===!1?"":/[\&\<\>\"\'\`]/.test(a)?(b={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c=/&(?!\w+;)|[\<\>\"\'\`]/g,a.replace(c,function(a){return b[a]||"&amp;"})):a},SelectParser}(),SelectParser.select_to_array=function(a){var b,c,d,e,f;for(c=new SelectParser,f=a.childNodes,d=0,e=f.length;e>d;d++)b=f[d],c.add_node(b);return c.parsed},AbstractChosen=function(){function AbstractChosen(a,b){this.form_field=a,this.options=null!=b?b:{},AbstractChosen.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers())}return AbstractChosen.prototype.set_default_values=function(){var a=this;return this.click_test_action=function(b){return a.test_active_click(b)},this.activate_action=function(b){return a.activate_field(b)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.result_single_selected=null,this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null!=this.options.enable_split_word_search?this.options.enable_split_word_search:!0,this.group_search=null!=this.options.group_search?this.options.group_search:!0,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null!=this.options.single_backstroke_delete?this.options.single_backstroke_delete:!0,this.max_selected_options=this.options.max_selected_options||1/0,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null!=this.options.display_selected_options?this.options.display_selected_options:!0,this.display_disabled_options=null!=this.options.display_disabled_options?this.options.display_disabled_options:!0},AbstractChosen.prototype.set_default_text=function(){return this.default_text=this.form_field.getAttribute("data-placeholder")?this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.options.placeholder_text_multiple||this.options.placeholder_text||AbstractChosen.default_multiple_text:this.options.placeholder_text_single||this.options.placeholder_text||AbstractChosen.default_single_text,this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||AbstractChosen.default_no_result_text},AbstractChosen.prototype.mouse_enter=function(){return this.mouse_on_container=!0},AbstractChosen.prototype.mouse_leave=function(){return this.mouse_on_container=!1},AbstractChosen.prototype.input_focus=function(){var a=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return a.container_mousedown()},50)}else if(!this.active_field)return this.activate_field()},AbstractChosen.prototype.input_blur=function(){var a=this;return this.mouse_on_container?void 0:(this.active_field=!1,setTimeout(function(){return a.blur_test()},100))},AbstractChosen.prototype.results_option_build=function(a){var b,c,d,e,f;for(b="",f=this.results_data,d=0,e=f.length;e>d;d++)c=f[d],b+=c.group?this.result_add_group(c):this.result_add_option(c),(null!=a?a.first:void 0)&&(c.selected&&this.is_multiple?this.choice_build(c):c.selected&&!this.is_multiple&&this.single_set_selected_text(c.text));return b},AbstractChosen.prototype.result_add_option=function(a){var b,c;return a.search_match?this.include_option_in_results(a)?(b=[],a.disabled||a.selected&&this.is_multiple||b.push("active-result"),!a.disabled||a.selected&&this.is_multiple||b.push("disabled-result"),a.selected&&b.push("result-selected"),null!=a.group_array_index&&b.push("group-option"),""!==a.classes&&b.push(a.classes),c=""!==a.style.cssText?' style="'+a.style+'"':"",'<li class="'+b.join(" ")+'"'+c+' data-option-array-index="'+a.array_index+'">'+a.search_text+"</li>"):"":""},AbstractChosen.prototype.result_add_group=function(a){return a.search_match||a.group_match?a.active_options>0?'<li class="group-result">'+a.search_text+"</li>":"":""},AbstractChosen.prototype.results_update_field=function(){return this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.result_single_selected=null,this.results_build(),this.results_showing?this.winnow_results():void 0},AbstractChosen.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},AbstractChosen.prototype.results_search=function(){return this.results_showing?this.winnow_results():this.results_show()},AbstractChosen.prototype.winnow_results=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m;for(this.no_results_clear(),e=0,g=this.get_search_text(),a=g.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),d=this.search_contains?"":"^",c=new RegExp(d+a,"i"),j=new RegExp(a,"i"),m=this.results_data,k=0,l=m.length;l>k;k++)b=m[k],b.search_match=!1,f=null,this.include_option_in_results(b)&&(b.group&&(b.group_match=!1,b.active_options=0),null!=b.group_array_index&&this.results_data[b.group_array_index]&&(f=this.results_data[b.group_array_index],0===f.active_options&&f.search_match&&(e+=1),f.active_options+=1),(!b.group||this.group_search)&&(b.search_text=b.group?b.label:b.html,b.search_match=this.search_string_match(b.search_text,c),b.search_match&&!b.group&&(e+=1),b.search_match?(g.length&&(h=b.search_text.search(j),i=b.search_text.substr(0,h+g.length)+"</em>"+b.search_text.substr(h+g.length),b.search_text=i.substr(0,h)+"<em>"+i.substr(h)),null!=f&&(f.group_match=!0)):null!=b.group_array_index&&this.results_data[b.group_array_index].search_match&&(b.search_match=!0)));return this.result_clear_highlight(),1>e&&g.length?(this.update_results_content(""),this.no_results(g)):(this.update_results_content(this.results_option_build()),this.winnow_results_set_highlight())},AbstractChosen.prototype.search_string_match=function(a,b){var c,d,e,f;if(b.test(a))return!0;if(this.enable_split_word_search&&(a.indexOf(" ")>=0||0===a.indexOf("["))&&(d=a.replace(/\[|\]/g,"").split(" "),d.length))for(e=0,f=d.length;f>e;e++)if(c=d[e],b.test(c))return!0},AbstractChosen.prototype.choices_count=function(){var a,b,c,d;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,d=this.form_field.options,b=0,c=d.length;c>b;b++)a=d[b],a.selected&&(this.selected_option_count+=1);return this.selected_option_count},AbstractChosen.prototype.choices_click=function(a){return a.preventDefault(),this.results_showing||this.is_disabled?void 0:this.results_show()},AbstractChosen.prototype.keyup_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),b){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:if(a.preventDefault(),this.results_showing)return this.result_select(a);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}},AbstractChosen.prototype.container_width=function(){return null!=this.options.width?this.options.width:""+this.form_field.offsetWidth+"px"},AbstractChosen.prototype.include_option_in_results=function(a){return this.is_multiple&&!this.display_selected_options&&a.selected?!1:!this.display_disabled_options&&a.disabled?!1:a.empty?!1:!0},AbstractChosen.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?document.documentMode>=8:/iP(od|hone)/i.test(window.navigator.userAgent)?!1:/Android/i.test(window.navigator.userAgent)&&/Mobile/i.test(window.navigator.userAgent)?!1:!0},AbstractChosen.default_multiple_text="Select Some Options",AbstractChosen.default_single_text="Select an Option",AbstractChosen.default_no_result_text="No results match",AbstractChosen}(),a=jQuery,a.fn.extend({chosen:function(b){return AbstractChosen.browser_is_supported()?this.each(function(){var c,d;c=a(this),d=c.data("chosen"),"destroy"===b&&d?d.destroy():d||c.data("chosen",new Chosen(this,b))}):this}}),Chosen=function(c){function Chosen(){return b=Chosen.__super__.constructor.apply(this,arguments)}return d(Chosen,c),Chosen.prototype.setup=function(){return this.form_field_jq=a(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex,this.is_rtl=this.form_field_jq.hasClass("chosen-rtl")},Chosen.prototype.set_up_html=function(){var b,c;return b=["chosen-container"],b.push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&b.push(this.form_field.className),this.is_rtl&&b.push("chosen-rtl"),c={"class":b.join(" "),style:"width: "+this.container_width()+";",title:this.form_field.title},this.form_field.id.length&&(c.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"),this.container=a("<div />",c),this.is_multiple?this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>'):this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior(),this.form_field_jq.trigger("chosen:ready",{chosen:this})},Chosen.prototype.register_observers=function(){var a=this;return this.container.bind("mousedown.chosen",function(b){a.container_mousedown(b)}),this.container.bind("mouseup.chosen",function(b){a.container_mouseup(b)}),this.container.bind("mouseenter.chosen",function(b){a.mouse_enter(b)}),this.container.bind("mouseleave.chosen",function(b){a.mouse_leave(b)}),this.search_results.bind("mouseup.chosen",function(b){a.search_results_mouseup(b)}),this.search_results.bind("mouseover.chosen",function(b){a.search_results_mouseover(b)}),this.search_results.bind("mouseout.chosen",function(b){a.search_results_mouseout(b)}),this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",function(b){a.search_results_mousewheel(b)}),this.form_field_jq.bind("chosen:updated.chosen",function(b){a.results_update_field(b)}),this.form_field_jq.bind("chosen:activate.chosen",function(b){a.activate_field(b)}),this.form_field_jq.bind("chosen:open.chosen",function(b){a.container_mousedown(b)}),this.search_field.bind("blur.chosen",function(b){a.input_blur(b)}),this.search_field.bind("keyup.chosen",function(b){a.keyup_checker(b)}),this.search_field.bind("keydown.chosen",function(b){a.keydown_checker(b)}),this.search_field.bind("focus.chosen",function(b){a.input_focus(b)}),this.is_multiple?this.search_choices.bind("click.chosen",function(b){a.choices_click(b)}):this.container.bind("click.chosen",function(a){a.preventDefault()})},Chosen.prototype.destroy=function(){return a(document).unbind("click.chosen",this.click_test_action),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},Chosen.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field_jq[0].disabled,this.is_disabled?(this.container.addClass("chosen-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus.chosen",this.activate_action),this.close_field()):(this.container.removeClass("chosen-disabled"),this.search_field[0].disabled=!1,this.is_multiple?void 0:this.selected_item.bind("focus.chosen",this.activate_action))},Chosen.prototype.container_mousedown=function(b){return this.is_disabled||(b&&"mousedown"===b.type&&!this.results_showing&&b.preventDefault(),null!=b&&a(b.target).hasClass("search-choice-close"))?void 0:(this.active_field?this.is_multiple||!b||a(b.target)[0]!==this.selected_item[0]&&!a(b.target).parents("a.chosen-single").length||(b.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),a(document).bind("click.chosen",this.click_test_action),this.results_show()),this.activate_field())},Chosen.prototype.container_mouseup=function(a){return"ABBR"!==a.target.nodeName||this.is_disabled?void 0:this.results_reset(a)},Chosen.prototype.search_results_mousewheel=function(a){var b,c,d;return b=-(null!=(c=a.originalEvent)?c.wheelDelta:void 0)||(null!=(d=a.originialEvent)?d.detail:void 0),null!=b?(a.preventDefault(),"DOMMouseScroll"===a.type&&(b=40*b),this.search_results.scrollTop(b+this.search_results.scrollTop())):void 0},Chosen.prototype.blur_test=function(){return!this.active_field&&this.container.hasClass("chosen-container-active")?this.close_field():void 0},Chosen.prototype.close_field=function(){return a(document).unbind("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},Chosen.prototype.activate_field=function(){return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},Chosen.prototype.test_active_click=function(b){return this.container.is(a(b.target).closest(".chosen-container"))?this.active_field=!0:this.close_field()},Chosen.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=SelectParser.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():this.is_multiple||(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},Chosen.prototype.result_do_highlight=function(a){var b,c,d,e,f;if(a.length){if(this.result_clear_highlight(),this.result_highlight=a,this.result_highlight.addClass("highlighted"),d=parseInt(this.search_results.css("maxHeight"),10),f=this.search_results.scrollTop(),e=d+f,c=this.result_highlight.position().top+this.search_results.scrollTop(),b=c+this.result_highlight.outerHeight(),b>=e)return this.search_results.scrollTop(b-d>0?b-d:0);if(f>c)return this.search_results.scrollTop(c)}},Chosen.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},Chosen.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.container.addClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this}),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results())},Chosen.prototype.update_results_content=function(a){return this.search_results.html(a)},Chosen.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})),this.results_showing=!1},Chosen.prototype.set_tab_index=function(){var a;return this.form_field.tabIndex?(a=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=a):void 0},Chosen.prototype.set_label_behavior=function(){var b=this;return this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=a("label[for='"+this.form_field.id+"']")),this.form_field_label.length>0?this.form_field_label.bind("click.chosen",function(a){return b.is_multiple?b.container_mousedown(a):b.activate_field()}):void 0},Chosen.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},Chosen.prototype.search_results_mouseup=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c.length?(this.result_highlight=c,this.result_select(b),this.search_field.focus()):void 0},Chosen.prototype.search_results_mouseover=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c?this.result_do_highlight(c):void 0},Chosen.prototype.search_results_mouseout=function(b){return a(b.target).hasClass("active-result")?this.result_clear_highlight():void 0},Chosen.prototype.choice_build=function(b){var c,d,e=this;return c=a("<li />",{"class":"search-choice"}).html("<span>"+b.html+"</span>"),b.disabled?c.addClass("search-choice-disabled"):(d=a("<a />",{"class":"search-choice-close","data-option-array-index":b.array_index}),d.bind("click.chosen",function(a){return e.choice_destroy_link_click(a)}),c.append(d)),this.search_container.before(c)},Chosen.prototype.choice_destroy_link_click=function(b){return b.preventDefault(),b.stopPropagation(),this.is_disabled?void 0:this.choice_destroy(a(b.target))},Chosen.prototype.choice_destroy=function(a){return this.result_deselect(a[0].getAttribute("data-option-array-index"))?(this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1&&this.results_hide(),a.parents("li").first().remove(),this.search_field_scale()):void 0},Chosen.prototype.results_reset=function(){return this.form_field.options[0].selected=!0,this.selected_option_count=null,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change"),this.active_field?this.results_hide():void 0},Chosen.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},Chosen.prototype.result_select=function(a){var b,c,d;return this.result_highlight?(b=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.is_multiple?b.removeClass("active-result"):(this.result_single_selected&&(this.result_single_selected.removeClass("result-selected"),d=this.result_single_selected[0].getAttribute("data-option-array-index"),this.results_data[d].selected=!1),this.result_single_selected=b),b.addClass("result-selected"),c=this.results_data[b[0].getAttribute("data-option-array-index")],c.selected=!0,this.form_field.options[c.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(c):this.single_set_selected_text(c.text),(a.metaKey||a.ctrlKey)&&this.is_multiple||this.results_hide(),this.search_field.val(""),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[c.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,this.search_field_scale())):void 0},Chosen.prototype.single_set_selected_text=function(a){return null==a&&(a=this.default_text),a===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").text(a)},Chosen.prototype.result_deselect=function(a){var b;return b=this.results_data[a],this.form_field.options[b.options_index].disabled?!1:(b.selected=!1,this.form_field.options[b.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[b.options_index].value}),this.search_field_scale(),!0)},Chosen.prototype.single_deselect_control_build=function(){return this.allow_single_deselect?(this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chosen-single-with-deselect")):void 0},Chosen.prototype.get_search_text=function(){return this.search_field.val()===this.default_text?"":a("<div/>").text(a.trim(this.search_field.val())).html()},Chosen.prototype.winnow_results_set_highlight=function(){var a,b;return b=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),a=b.length?b.first():this.search_results.find(".active-result").first(),null!=a?this.result_do_highlight(a):void 0},Chosen.prototype.no_results=function(b){var c;return c=a('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),c.find("span").first().html(b),this.search_results.append(c)},Chosen.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},Chosen.prototype.keydown_arrow=function(){var a;return this.results_showing&&this.result_highlight?(a=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(a):void 0:this.results_show()},Chosen.prototype.keyup_arrow=function(){var a;return this.results_showing||this.is_multiple?this.result_highlight?(a=this.result_highlight.prevAll("li.active-result"),a.length?this.result_do_highlight(a.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight())):void 0:this.results_show()},Chosen.prototype.keydown_backstroke=function(){var a;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(a=this.search_container.siblings("li.search-choice").last(),a.length&&!a.hasClass("search-choice-disabled")?(this.pending_backstroke=a,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0)},Chosen.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},Chosen.prototype.keydown_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),8!==b&&this.pending_backstroke&&this.clear_backstroke(),b){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(a),this.mouse_on_container=!1;break;case 13:a.preventDefault();break;case 38:a.preventDefault(),this.keyup_arrow();break;case 40:a.preventDefault(),this.keydown_arrow()}},Chosen.prototype.search_field_scale=function(){var b,c,d,e,f,g,h,i,j;if(this.is_multiple){for(d=0,h=0,f="position:absolute; left: -1000px; top: -1000px; display:none;",g=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"],i=0,j=g.length;j>i;i++)e=g[i],f+=e+":"+this.search_field.css(e)+";";return b=a("<div />",{style:f}),b.text(this.search_field.val()),a("body").append(b),h=b.width()+25,b.remove(),c=this.container.outerWidth(),h>c-10&&(h=c-10),this.search_field.css({width:h+"px"})}},Chosen}(AbstractChosen)}.call(this);
// moment.js
// version : 2.1.0
// author : Tim Wood
// license : MIT
// momentjs.com
!function(t){function e(t,e){return function(n){return u(t.call(this,n),e)}}function n(t,e){return function(n){return this.lang().ordinal(t.call(this,n),e)}}function s(){}function i(t){a(this,t)}function r(t){var e=t.years||t.year||t.y||0,n=t.months||t.month||t.M||0,s=t.weeks||t.week||t.w||0,i=t.days||t.day||t.d||0,r=t.hours||t.hour||t.h||0,a=t.minutes||t.minute||t.m||0,o=t.seconds||t.second||t.s||0,u=t.milliseconds||t.millisecond||t.ms||0;this._input=t,this._milliseconds=u+1e3*o+6e4*a+36e5*r,this._days=i+7*s,this._months=n+12*e,this._data={},this._bubble()}function a(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function o(t){return 0>t?Math.ceil(t):Math.floor(t)}function u(t,e){for(var n=t+"";n.length<e;)n="0"+n;return n}function h(t,e,n,s){var i,r,a=e._milliseconds,o=e._days,u=e._months;a&&t._d.setTime(+t._d+a*n),(o||u)&&(i=t.minute(),r=t.hour()),o&&t.date(t.date()+o*n),u&&t.month(t.month()+u*n),a&&!s&&H.updateOffset(t),(o||u)&&(t.minute(i),t.hour(r))}function d(t){return"[object Array]"===Object.prototype.toString.call(t)}function c(t,e){var n,s=Math.min(t.length,e.length),i=Math.abs(t.length-e.length),r=0;for(n=0;s>n;n++)~~t[n]!==~~e[n]&&r++;return r+i}function f(t){return t?ie[t]||t.toLowerCase().replace(/(.)s$/,"$1"):t}function l(t,e){return e.abbr=t,x[t]||(x[t]=new s),x[t].set(e),x[t]}function _(t){if(!t)return H.fn._lang;if(!x[t]&&A)try{require("./lang/"+t)}catch(e){return H.fn._lang}return x[t]}function m(t){return t.match(/\[.*\]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function y(t){var e,n,s=t.match(E);for(e=0,n=s.length;n>e;e++)s[e]=ue[s[e]]?ue[s[e]]:m(s[e]);return function(i){var r="";for(e=0;n>e;e++)r+=s[e]instanceof Function?s[e].call(i,t):s[e];return r}}function M(t,e){function n(e){return t.lang().longDateFormat(e)||e}for(var s=5;s--&&N.test(e);)e=e.replace(N,n);return re[e]||(re[e]=y(e)),re[e](t)}function g(t,e){switch(t){case"DDDD":return V;case"YYYY":return X;case"YYYYY":return $;case"S":case"SS":case"SSS":case"DDD":return I;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return R;case"a":case"A":return _(e._l)._meridiemParse;case"X":return B;case"Z":case"ZZ":return j;case"T":return q;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return J;default:return new RegExp(t.replace("\\",""))}}function p(t){var e=(j.exec(t)||[])[0],n=(e+"").match(ee)||["-",0,0],s=+(60*n[1])+~~n[2];return"+"===n[0]?-s:s}function D(t,e,n){var s,i=n._a;switch(t){case"M":case"MM":i[1]=null==e?0:~~e-1;break;case"MMM":case"MMMM":s=_(n._l).monthsParse(e),null!=s?i[1]=s:n._isValid=!1;break;case"D":case"DD":case"DDD":case"DDDD":null!=e&&(i[2]=~~e);break;case"YY":i[0]=~~e+(~~e>68?1900:2e3);break;case"YYYY":case"YYYYY":i[0]=~~e;break;case"a":case"A":n._isPm=_(n._l).isPM(e);break;case"H":case"HH":case"h":case"hh":i[3]=~~e;break;case"m":case"mm":i[4]=~~e;break;case"s":case"ss":i[5]=~~e;break;case"S":case"SS":case"SSS":i[6]=~~(1e3*("0."+e));break;case"X":n._d=new Date(1e3*parseFloat(e));break;case"Z":case"ZZ":n._useUTC=!0,n._tzm=p(e)}null==e&&(n._isValid=!1)}function Y(t){var e,n,s=[];if(!t._d){for(e=0;7>e;e++)t._a[e]=s[e]=null==t._a[e]?2===e?1:0:t._a[e];s[3]+=~~((t._tzm||0)/60),s[4]+=~~((t._tzm||0)%60),n=new Date(0),t._useUTC?(n.setUTCFullYear(s[0],s[1],s[2]),n.setUTCHours(s[3],s[4],s[5],s[6])):(n.setFullYear(s[0],s[1],s[2]),n.setHours(s[3],s[4],s[5],s[6])),t._d=n}}function w(t){var e,n,s=t._f.match(E),i=t._i;for(t._a=[],e=0;e<s.length;e++)n=(g(s[e],t).exec(i)||[])[0],n&&(i=i.slice(i.indexOf(n)+n.length)),ue[s[e]]&&D(s[e],n,t);i&&(t._il=i),t._isPm&&t._a[3]<12&&(t._a[3]+=12),t._isPm===!1&&12===t._a[3]&&(t._a[3]=0),Y(t)}function k(t){var e,n,s,r,o,u=99;for(r=0;r<t._f.length;r++)e=a({},t),e._f=t._f[r],w(e),n=new i(e),o=c(e._a,n.toArray()),n._il&&(o+=n._il.length),u>o&&(u=o,s=n);a(t,s)}function v(t){var e,n=t._i,s=K.exec(n);if(s){for(t._f="YYYY-MM-DD"+(s[2]||" "),e=0;4>e;e++)if(te[e][1].exec(n)){t._f+=te[e][0];break}j.exec(n)&&(t._f+=" Z"),w(t)}else t._d=new Date(n)}function T(e){var n=e._i,s=G.exec(n);n===t?e._d=new Date:s?e._d=new Date(+s[1]):"string"==typeof n?v(e):d(n)?(e._a=n.slice(0),Y(e)):e._d=n instanceof Date?new Date(+n):new Date(n)}function b(t,e,n,s,i){return i.relativeTime(e||1,!!n,t,s)}function S(t,e,n){var s=W(Math.abs(t)/1e3),i=W(s/60),r=W(i/60),a=W(r/24),o=W(a/365),u=45>s&&["s",s]||1===i&&["m"]||45>i&&["mm",i]||1===r&&["h"]||22>r&&["hh",r]||1===a&&["d"]||25>=a&&["dd",a]||45>=a&&["M"]||345>a&&["MM",W(a/30)]||1===o&&["y"]||["yy",o];return u[2]=e,u[3]=t>0,u[4]=n,b.apply({},u)}function F(t,e,n){var s,i=n-e,r=n-t.day();return r>i&&(r-=7),i-7>r&&(r+=7),s=H(t).add("d",r),{week:Math.ceil(s.dayOfYear()/7),year:s.year()}}function O(t){var e=t._i,n=t._f;return null===e||""===e?null:("string"==typeof e&&(t._i=e=_().preparse(e)),H.isMoment(e)?(t=a({},e),t._d=new Date(+e._d)):n?d(n)?k(t):w(t):T(t),new i(t))}function z(t,e){H.fn[t]=H.fn[t+"s"]=function(t){var n=this._isUTC?"UTC":"";return null!=t?(this._d["set"+n+e](t),H.updateOffset(this),this):this._d["get"+n+e]()}}function C(t){H.duration.fn[t]=function(){return this._data[t]}}function L(t,e){H.duration.fn["as"+t]=function(){return+this/e}}for(var H,P,U="2.1.0",W=Math.round,x={},A="undefined"!=typeof module&&module.exports,G=/^\/?Date\((\-?\d+)/i,Z=/(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/,E=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,N=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,J=/\d\d?/,I=/\d{1,3}/,V=/\d{3}/,X=/\d{1,4}/,$=/[+\-]?\d{1,6}/,R=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,j=/Z|[\+\-]\d\d:?\d\d/i,q=/T/i,B=/[\+\-]?\d+(\.\d{1,3})?/,K=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,Q="YYYY-MM-DDTHH:mm:ssZ",te=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],ee=/([\+\-]|\d\d)/gi,ne="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),se={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},ie={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",w:"week",M:"month",y:"year"},re={},ae="DDD w W M D d".split(" "),oe="M D H h m s w W".split(" "),ue={M:function(){return this.month()+1},MMM:function(t){return this.lang().monthsShort(this,t)},MMMM:function(t){return this.lang().months(this,t)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(t){return this.lang().weekdaysMin(this,t)},ddd:function(t){return this.lang().weekdaysShort(this,t)},dddd:function(t){return this.lang().weekdays(this,t)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return u(this.year()%100,2)},YYYY:function(){return u(this.year(),4)},YYYYY:function(){return u(this.year(),5)},gg:function(){return u(this.weekYear()%100,2)},gggg:function(){return this.weekYear()},ggggg:function(){return u(this.weekYear(),5)},GG:function(){return u(this.isoWeekYear()%100,2)},GGGG:function(){return this.isoWeekYear()},GGGGG:function(){return u(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return u(~~(this.milliseconds()/10),2)},SSS:function(){return u(this.milliseconds(),3)},Z:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+u(~~(t/60),2)+":"+u(~~t%60,2)},ZZ:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+u(~~(10*t/6),4)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()}};ae.length;)P=ae.pop(),ue[P+"o"]=n(ue[P],P);for(;oe.length;)P=oe.pop(),ue[P+P]=e(ue[P],2);for(ue.DDDD=e(ue.DDD,3),s.prototype={set:function(t){var e,n;for(n in t)e=t[n],"function"==typeof e?this[n]=e:this["_"+n]=e},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(t){return this._months[t.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(t){return this._monthsShort[t.month()]},monthsParse:function(t){var e,n,s;for(this._monthsParse||(this._monthsParse=[]),e=0;12>e;e++)if(this._monthsParse[e]||(n=H([2e3,e]),s="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[e]=new RegExp(s.replace(".",""),"i")),this._monthsParse[e].test(t))return e},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(t){return this._weekdays[t.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(t){return this._weekdaysShort[t.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(t){return this._weekdaysMin[t.day()]},weekdaysParse:function(t){var e,n,s;for(this._weekdaysParse||(this._weekdaysParse=[]),e=0;7>e;e++)if(this._weekdaysParse[e]||(n=H([2e3,1]).day(e),s="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[e]=new RegExp(s.replace(".",""),"i")),this._weekdaysParse[e].test(t))return e},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(t){var e=this._longDateFormat[t];return!e&&this._longDateFormat[t.toUpperCase()]&&(e=this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t]=e),e},isPM:function(t){return"p"===(t+"").toLowerCase()[0]},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(t,e){var n=this._calendar[t];return"function"==typeof n?n.apply(e):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(t,e,n,s){var i=this._relativeTime[n];return"function"==typeof i?i(t,e,n,s):i.replace(/%d/i,t)},pastFuture:function(t,e){var n=this._relativeTime[t>0?"future":"past"];return"function"==typeof n?n(e):n.replace(/%s/i,e)},ordinal:function(t){return this._ordinal.replace("%d",t)},_ordinal:"%d",preparse:function(t){return t},postformat:function(t){return t},week:function(t){return F(t,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6}},H=function(t,e,n){return O({_i:t,_f:e,_l:n,_isUTC:!1})},H.utc=function(t,e,n){return O({_useUTC:!0,_isUTC:!0,_l:n,_i:t,_f:e})},H.unix=function(t){return H(1e3*t)},H.duration=function(t,e){var n,s,i=H.isDuration(t),a="number"==typeof t,o=i?t._input:a?{}:t,u=Z.exec(t);return a?e?o[e]=t:o.milliseconds=t:u&&(n="-"===u[1]?-1:1,o={y:0,d:~~u[2]*n,h:~~u[3]*n,m:~~u[4]*n,s:~~u[5]*n,ms:~~u[6]*n}),s=new r(o),i&&t.hasOwnProperty("_lang")&&(s._lang=t._lang),s},H.version=U,H.defaultFormat=Q,H.updateOffset=function(){},H.lang=function(t,e){return t?(e?l(t,e):x[t]||_(t),H.duration.fn._lang=H.fn._lang=_(t),void 0):H.fn._lang._abbr},H.langData=function(t){return t&&t._lang&&t._lang._abbr&&(t=t._lang._abbr),_(t)},H.isMoment=function(t){return t instanceof i},H.isDuration=function(t){return t instanceof r},H.fn=i.prototype={clone:function(){return H(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){return M(H(this).utc(),"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var t=this;return[t.year(),t.month(),t.date(),t.hours(),t.minutes(),t.seconds(),t.milliseconds()]},isValid:function(){return null==this._isValid&&(this._isValid=this._a?!c(this._a,(this._isUTC?H.utc(this._a):H(this._a)).toArray()):!isNaN(this._d.getTime())),!!this._isValid},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(t){var e=M(this,t||H.defaultFormat);return this.lang().postformat(e)},add:function(t,e){var n;return n="string"==typeof t?H.duration(+e,t):H.duration(t,e),h(this,n,1),this},subtract:function(t,e){var n;return n="string"==typeof t?H.duration(+e,t):H.duration(t,e),h(this,n,-1),this},diff:function(t,e,n){var s,i,r=this._isUTC?H(t).zone(this._offset||0):H(t).local(),a=6e4*(this.zone()-r.zone());return e=f(e),"year"===e||"month"===e?(s=432e5*(this.daysInMonth()+r.daysInMonth()),i=12*(this.year()-r.year())+(this.month()-r.month()),i+=(this-H(this).startOf("month")-(r-H(r).startOf("month")))/s,i-=6e4*(this.zone()-H(this).startOf("month").zone()-(r.zone()-H(r).startOf("month").zone()))/s,"year"===e&&(i/=12)):(s=this-r,i="second"===e?s/1e3:"minute"===e?s/6e4:"hour"===e?s/36e5:"day"===e?(s-a)/864e5:"week"===e?(s-a)/6048e5:s),n?i:o(i)},from:function(t,e){return H.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)},fromNow:function(t){return this.from(H(),t)},calendar:function(){var t=this.diff(H().startOf("day"),"days",!0),e=-6>t?"sameElse":-1>t?"lastWeek":0>t?"lastDay":1>t?"sameDay":2>t?"nextDay":7>t?"nextWeek":"sameElse";return this.format(this.lang().calendar(e,this))},isLeapYear:function(){var t=this.year();return 0===t%4&&0!==t%100||0===t%400},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(t){var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?"string"==typeof t&&(t=this.lang().weekdaysParse(t),"number"!=typeof t)?this:this.add({d:t-e}):e},month:function(t){var e,n=this._isUTC?"UTC":"";return null!=t?"string"==typeof t&&(t=this.lang().monthsParse(t),"number"!=typeof t)?this:(e=this.date(),this.date(1),this._d["set"+n+"Month"](t),this.date(Math.min(e,this.daysInMonth())),H.updateOffset(this),this):this._d["get"+n+"Month"]()},startOf:function(t){switch(t=f(t)){case"year":this.month(0);case"month":this.date(1);case"week":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t&&this.weekday(0),this},endOf:function(t){return this.startOf(t).add(t,1).subtract("ms",1)},isAfter:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)>+H(t).startOf(e)},isBefore:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)<+H(t).startOf(e)},isSame:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)===+H(t).startOf(e)},min:function(t){return t=H.apply(null,arguments),this>t?this:t},max:function(t){return t=H.apply(null,arguments),t>this?this:t},zone:function(t){var e=this._offset||0;return null==t?this._isUTC?e:this._d.getTimezoneOffset():("string"==typeof t&&(t=p(t)),Math.abs(t)<16&&(t=60*t),this._offset=t,this._isUTC=!0,e!==t&&h(this,H.duration(e-t,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},daysInMonth:function(){return H.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(t){var e=W((H(this).startOf("day")-H(this).startOf("year"))/864e5)+1;return null==t?e:this.add("d",t-e)},weekYear:function(t){var e=F(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==t?e:this.add("y",t-e)},isoWeekYear:function(t){var e=F(this,1,4).year;return null==t?e:this.add("y",t-e)},week:function(t){var e=this.lang().week(this);return null==t?e:this.add("d",7*(t-e))},isoWeek:function(t){var e=F(this,1,4).week;return null==t?e:this.add("d",7*(t-e))},weekday:function(t){var e=(this._d.getDay()+7-this.lang()._week.dow)%7;return null==t?e:this.add("d",t-e)},isoWeekday:function(t){return null==t?this.day()||7:this.day(this.day()%7?t:t-7)},lang:function(e){return e===t?this._lang:(this._lang=_(e),this)}},P=0;P<ne.length;P++)z(ne[P].toLowerCase().replace(/s$/,""),ne[P]);z("year","FullYear"),H.fn.days=H.fn.day,H.fn.months=H.fn.month,H.fn.weeks=H.fn.week,H.fn.isoWeeks=H.fn.isoWeek,H.fn.toJSON=H.fn.toISOString,H.duration.fn=r.prototype={_bubble:function(){var t,e,n,s,i=this._milliseconds,r=this._days,a=this._months,u=this._data;u.milliseconds=i%1e3,t=o(i/1e3),u.seconds=t%60,e=o(t/60),u.minutes=e%60,n=o(e/60),u.hours=n%24,r+=o(n/24),u.days=r%30,a+=o(r/30),u.months=a%12,s=o(a/12),u.years=s},weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*(this._months%12)+31536e6*~~(this._months/12)},humanize:function(t){var e=+this,n=S(e,!t,this.lang());return t&&(n=this.lang().pastFuture(e,n)),this.lang().postformat(n)},add:function(t,e){var n=H.duration(t,e);return this._milliseconds+=n._milliseconds,this._days+=n._days,this._months+=n._months,this._bubble(),this},subtract:function(t,e){var n=H.duration(t,e);return this._milliseconds-=n._milliseconds,this._days-=n._days,this._months-=n._months,this._bubble(),this},get:function(t){return t=f(t),this[t.toLowerCase()+"s"]()},as:function(t){return t=f(t),this["as"+t.charAt(0).toUpperCase()+t.slice(1)+"s"]()},lang:H.fn.lang};for(P in se)se.hasOwnProperty(P)&&(L(P,se[P]),C(P.toLowerCase()));L("Weeks",6048e5),H.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},H.lang("en",{ordinal:function(t){var e=t%10,n=1===~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n}}),A&&(module.exports=H),"undefined"==typeof ender&&(this.moment=H),"function"==typeof define&&define.amd&&define("moment",[],function(){return H})}.call(this);
(function(){function t(t){function n(t){t+="";var e=t.split(":"),n=~t.indexOf("-")?-1:1,s=Math.abs(+e[0]),r=parseInt(e[1],10)||0,i=parseInt(e[2],10)||0;return n*(60*s+r+i/60)}function s(t,e,s,r,i,u,a,o,h,f){this.name=t,this.startYear=+e,this.endYear=+s,this.month=+r,this.day=+i,this.dayRule=+u,this.time=n(a),this.timeRule=+o,this.offset=n(h),this.letters=f||""}function r(t,e){this.rule=e,this.start=e.start(t)}function i(t,e){return t.isLast?-1:e.isLast?1:e.start-t.start}function u(t){this.name=t,this.rules=[]}function a(e,s,r,i,u,a){var o,h="string"==typeof u?u.split("_"):[9999];for(this.name=e,this.offset=n(s),this.ruleSet=r,this.letters=i,o=0;h.length>o;o++)h[o]=+h[o];this.until=t.utc(h).subtract("m",n(a))}function o(t,e){return t.until-e.until}function h(t){this.name=d(t),this.displayName=t,this.zones=[]}function f(t){var e,n,s;for(e in t)for(s=t[e],n=0;s.length>n;n++)l(e+"	"+s[n])}function l(t){if(g[t])return g[t];var e=t.split(/\s/),n=d(e[0]),r=new s(n,e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10]);return g[t]=r,z(n).add(r),r}function d(t){return(t||"").toLowerCase().replace(/\//g,"_")}function c(t){var e,n,s;for(e in t)for(s=t[e],n=0;s.length>n;n++)p(e+"	"+s[n])}function m(t){var e;for(e in t)A[d(e)]=d(t[e])}function p(t){if(b[t])return b[t];var e=t.split(/\s/),n=d(e[0]),s=new a(n,e[1],z(e[2]),e[3],e[4],e[5]);return b[t]=s,y(e[0]).add(s),s}function z(t){return t=d(t),Y[t]||(Y[t]=new u(t)),Y[t]}function y(t){var e=d(t);return A[e]&&(e=A[e]),M[e]||(M[e]=new h(t)),M[e]}function v(t){t&&(t.zones&&c(t.zones),t.rules&&f(t.rules),t.links&&m(t.links))}var R,w=t.fn.zoneName,_=t.fn.zoneAbbr,g={},Y={},b={},M={},A={},k=1,L=2,N=7,q=8;return s.prototype={contains:function(t){return t>=this.startYear&&this.endYear>=t},start:function(e){return e=Math.min(Math.max(e,this.startYear),this.endYear),t.utc([e,this.month,this.date(e),0,this.time])},date:function(t){return this.dayRule===N?this.day:this.dayRule===q?this.lastWeekday(t):this.weekdayAfter(t)},weekdayAfter:function(e){for(var n=this.day,s=t([e,this.month,1]).day(),r=this.dayRule+1-s;n>r;)r+=7;return r},lastWeekday:function(e){var n=this.day,s=n%7,r=t([e,this.month+1,1]).day(),i=t([e,this.month,1]).daysInMonth(),u=i+(s-(r-1))-7*~~(n/7);return s>=r&&(u-=7),u}},r.prototype={equals:function(t){return t&&t.rule===this.rule?864e5>Math.abs(t.start-this.start):!1}},u.prototype={add:function(t){this.rules.push(t)},ruleYears:function(t,e){var n,s,u,a=t.year(),o=[];for(n=0;this.rules.length>n;n++)s=this.rules[n],s.contains(a)?o.push(new r(a,s)):s.contains(a+1)&&o.push(new r(a+1,s));return o.push(new r(a-1,this.lastYearRule(a-1))),e&&(u=new r(a-1,e.lastRule()),u.start=e.until.clone().utc(),u.isLast=e.ruleSet!==this,o.push(u)),o.sort(i),o},rule:function(t,e,n){var s,r,i,u,a,o=this.ruleYears(t,n),h=0;for(n&&(r=n.offset+n.lastRule().offset,i=9e4*Math.abs(r)),a=o.length-1;a>-1;a--)u=s,s=o[a],s.equals(u)||(n&&!s.isLast&&i>=Math.abs(s.start-n.until)&&(h+=r-e),s.rule.timeRule===L&&(h=e),s.rule.timeRule!==k&&s.start.add("m",-h),h=s.rule.offset+e);for(a=0;o.length>a;a++)if(s=o[a],t>=s.start&&!s.isLast)return s.rule;return R},lastYearRule:function(t){var e,n,s,r=R,i=-1e30;for(e=0;this.rules.length>e;e++)n=this.rules[e],t>=n.startYear&&(s=n.start(t),s>i&&(i=s,r=n));return r}},a.prototype={rule:function(t,e){return this.ruleSet.rule(t,this.offset,e)},lastRule:function(){return this._lastRule||(this._lastRule=this.rule(this.until)),this._lastRule},format:function(t){return this.letters.replace("%s",t.letters)}},h.prototype={zoneAndRule:function(t){var e,n,s;for(t=t.clone().utc(),e=0;this.zones.length>e&&(n=this.zones[e],!(n.until>t));e++)s=n;return[n,n.rule(t,s)]},add:function(t){this.zones.push(t),this.zones.sort(o)},format:function(t){var e=this.zoneAndRule(t);return e[0].format(e[1])},offset:function(t){var e=this.zoneAndRule(t);return-(e[0].offset+e[1].offset)}},t.updateOffset=function(t){var e;t._z&&(e=t._z.offset(t),16>Math.abs(e)&&(e/=60),t.zone(e))},t.fn.tz=function(e){return e?(this._z=y(e),this._z&&t.updateOffset(this),this):this._z?this._z.displayName:void 0},t.fn.zoneName=function(){return this._z?this._z.format(this):w.call(this)},t.fn.zoneAbbr=function(){return this._z?this._z.format(this):_.call(this)},t.tz=function(){var e,n=[],s=arguments.length-1;for(e=0;s>e;e++)n[e]=arguments[e];return t.apply(null,n).tz(arguments[s])},t.tz.add=v,t.tz.addRule=l,t.tz.addZone=p,t.tz.version=e,R=l("- 0 9999 0 0 0 0 0 0"),t}var e="0.0.1";"function"==typeof define&&define.amd?define("moment-timezone",["moment"],t):"undefined"!=typeof window&&window.moment?t(window.moment):"undefined"!=typeof module&&(module.exports=t(require("./moment")))}).apply(this);
var momentTzData = {
    "zones": {
        "Africa/Abidjan": [
            "-0:16:8 - LMT 1912 -0:16:8",
            "0 - GMT"
        ],
        "Africa/Accra": [
            "-0:0:52 - LMT 1918 -0:0:52",
            "0 Ghana %s"
        ],
        "Africa/Addis_Ababa": [
            "2:34:48 - LMT 1870 2:34:48",
            "2:35:20 - ADMT 1936_4_5 2:35:20",
            "3 - EAT"
        ],
        "Africa/Algiers": [
            "0:12:12 - LMT 1891_2_15_0_1 0:12:12",
            "0:9:21 - PMT 1911_2_11 0:9:21",
            "0 Algeria WE%sT 1940_1_25_2",
            "1 Algeria CE%sT 1946_9_7 1",
            "0 - WET 1956_0_29",
            "1 - CET 1963_3_14 1",
            "0 Algeria WE%sT 1977_9_21 1",
            "1 Algeria CE%sT 1979_9_26 1",
            "0 Algeria WE%sT 1981_4",
            "1 - CET"
        ],
        "Africa/Asmara": [
            "2:35:32 - LMT 1870 2:35:32",
            "2:35:32 - AMT 1890 2:35:32",
            "2:35:20 - ADMT 1936_4_5 2:35:20",
            "3 - EAT"
        ],
        "Africa/Bamako": [
            "-0:32 - LMT 1912 -0:32",
            "0 - GMT 1934_1_26",
            "-1 - WAT 1960_5_20 -1",
            "0 - GMT"
        ],
        "Africa/Bangui": [
            "1:14:20 - LMT 1912 1:14:20",
            "1 - WAT"
        ],
        "Africa/Banjul": [
            "-1:6:36 - LMT 1912 -1:6:36",
            "-1:6:36 - BMT 1935 -1:6:36",
            "-1 - WAT 1964 -1",
            "0 - GMT"
        ],
        "Africa/Bissau": [
            "-1:2:20 - LMT 1911_4_26 -1:2:20",
            "-1 - WAT 1975 -1",
            "0 - GMT"
        ],
        "Africa/Blantyre": [
            "2:20 - LMT 1903_2 2:20",
            "2 - CAT"
        ],
        "Africa/Brazzaville": [
            "1:1:8 - LMT 1912 1:1:8",
            "1 - WAT"
        ],
        "Africa/Bujumbura": [
            "1:57:28 - LMT 1890 1:57:28",
            "2 - CAT"
        ],
        "Africa/Cairo": [
            "2:5:9 - LMT 1900_9 2:5:9",
            "2 Egypt EE%sT"
        ],
        "Africa/Casablanca": [
            "-0:30:20 - LMT 1913_9_26 -0:30:20",
            "0 Morocco WE%sT 1984_2_16",
            "1 - CET 1986 1",
            "0 Morocco WE%sT"
        ],
        "Africa/Ceuta": [
            "-0:21:16 - LMT 1901 -0:21:16",
            "0 - WET 1918_4_6_23",
            "1 - WEST 1918_9_7_23 1",
            "0 - WET 1924",
            "0 Spain WE%sT 1929",
            "0 SpainAfrica WE%sT 1984_2_16",
            "1 - CET 1986 1",
            "1 EU CE%sT"
        ],
        "Africa/Conakry": [
            "-0:54:52 - LMT 1912 -0:54:52",
            "0 - GMT 1934_1_26",
            "-1 - WAT 1960 -1",
            "0 - GMT"
        ],
        "Africa/Dakar": [
            "-1:9:44 - LMT 1912 -1:9:44",
            "-1 - WAT 1941_5 -1",
            "0 - GMT"
        ],
        "Africa/Dar_es_Salaam": [
            "2:37:8 - LMT 1931 2:37:8",
            "3 - EAT 1948 3",
            "2:45 - BEAUT 1961 2:45",
            "3 - EAT"
        ],
        "Africa/Djibouti": [
            "2:52:36 - LMT 1911_6 2:52:36",
            "3 - EAT"
        ],
        "Africa/Douala": [
            "0:38:48 - LMT 1912 0:38:48",
            "1 - WAT"
        ],
        "Africa/El_Aaiun": [
            "-0:52:48 - LMT 1934_0 -0:52:48",
            "-1 - WAT 1976_3_14 -1",
            "0 - WET"
        ],
        "Africa/Freetown": [
            "-0:53 - LMT 1882 -0:53",
            "-0:53 - FMT 1913_5 -0:53",
            "-1 SL %s 1957 -1",
            "0 SL %s"
        ],
        "Africa/Gaborone": [
            "1:43:40 - LMT 1885 1:43:40",
            "1:30 - SAST 1903_2 1:30",
            "2 - CAT 1943_8_19_2 2",
            "3 - CAST 1944_2_19_2 3",
            "2 - CAT"
        ],
        "Africa/Harare": [
            "2:4:12 - LMT 1903_2 2:4:12",
            "2 - CAT"
        ],
        "Africa/Johannesburg": [
            "1:52 - LMT 1892_1_8 1:52",
            "1:30 - SAST 1903_2 1:30",
            "2 SA SAST"
        ],
        "Africa/Juba": [
            "2:6:24 - LMT 1931 2:6:24",
            "2 Sudan CA%sT 2000_0_15_12 2",
            "3 - EAT"
        ],
        "Africa/Kampala": [
            "2:9:40 - LMT 1928_6 2:9:40",
            "3 - EAT 1930 3",
            "2:30 - BEAT 1948 2:30",
            "2:45 - BEAUT 1957 2:45",
            "3 - EAT"
        ],
        "Africa/Khartoum": [
            "2:10:8 - LMT 1931 2:10:8",
            "2 Sudan CA%sT 2000_0_15_12 2",
            "3 - EAT"
        ],
        "Africa/Kigali": [
            "2:0:16 - LMT 1935_5 2:0:16",
            "2 - CAT"
        ],
        "Africa/Kinshasa": [
            "1:1:12 - LMT 1897_10_9 1:1:12",
            "1 - WAT"
        ],
        "Africa/Lagos": [
            "0:13:36 - LMT 1919_8 0:13:36",
            "1 - WAT"
        ],
        "Africa/Libreville": [
            "0:37:48 - LMT 1912 0:37:48",
            "1 - WAT"
        ],
        "Africa/Lome": [
            "0:4:52 - LMT 1893 0:4:52",
            "0 - GMT"
        ],
        "Africa/Luanda": [
            "0:52:56 - LMT 1892 0:52:56",
            "0:52:4 - AOT 1911_4_26 0:52:4",
            "1 - WAT"
        ],
        "Africa/Lubumbashi": [
            "1:49:52 - LMT 1897_10_9 1:49:52",
            "2 - CAT"
        ],
        "Africa/Lusaka": [
            "1:53:8 - LMT 1903_2 1:53:8",
            "2 - CAT"
        ],
        "Africa/Malabo": [
            "0:35:8 - LMT 1912 0:35:8",
            "0 - GMT 1963_11_15",
            "1 - WAT"
        ],
        "Africa/Maputo": [
            "2:10:20 - LMT 1903_2 2:10:20",
            "2 - CAT"
        ],
        "Africa/Maseru": [
            "1:50 - LMT 1903_2 1:50",
            "2 - SAST 1943_8_19_2 2",
            "3 - SAST 1944_2_19_2 3",
            "2 - SAST"
        ],
        "Africa/Mbabane": [
            "2:4:24 - LMT 1903_2 2:4:24",
            "2 - SAST"
        ],
        "Africa/Mogadishu": [
            "3:1:28 - LMT 1893_10 3:1:28",
            "3 - EAT 1931 3",
            "2:30 - BEAT 1957 2:30",
            "3 - EAT"
        ],
        "Africa/Monrovia": [
            "-0:43:8 - LMT 1882 -0:43:8",
            "-0:43:8 - MMT 1919_2 -0:43:8",
            "-0:44:30 - LRT 1972_4 -0:44:30",
            "0 - GMT"
        ],
        "Africa/Nairobi": [
            "2:27:16 - LMT 1928_6 2:27:16",
            "3 - EAT 1930 3",
            "2:30 - BEAT 1940 2:30",
            "2:45 - BEAUT 1960 2:45",
            "3 - EAT"
        ],
        "Africa/Ndjamena": [
            "1:0:12 - LMT 1912 1:0:12",
            "1 - WAT 1979_9_14 1",
            "2 - WAST 1980_2_8 2",
            "1 - WAT"
        ],
        "Africa/Niamey": [
            "0:8:28 - LMT 1912 0:8:28",
            "-1 - WAT 1934_1_26 -1",
            "0 - GMT 1960",
            "1 - WAT"
        ],
        "Africa/Nouakchott": [
            "-1:3:48 - LMT 1912 -1:3:48",
            "0 - GMT 1934_1_26",
            "-1 - WAT 1960_10_28 -1",
            "0 - GMT"
        ],
        "Africa/Ouagadougou": [
            "-0:6:4 - LMT 1912 -0:6:4",
            "0 - GMT"
        ],
        "Africa/Porto-Novo": [
            "0:10:28 - LMT 1912 0:10:28",
            "0 - GMT 1934_1_26",
            "1 - WAT"
        ],
        "Africa/Sao_Tome": [
            "0:26:56 - LMT 1884 0:26:56",
            "-0:36:32 - LMT 1912 -0:36:32",
            "0 - GMT"
        ],
        "Africa/Tripoli": [
            "0:52:44 - LMT 1920 0:52:44",
            "1 Libya CE%sT 1959 1",
            "2 - EET 1982 2",
            "1 Libya CE%sT 1990_4_4 1",
            "2 - EET 1996_8_30 2",
            "1 Libya CE%sT 1997_9_4 2",
            "2 - EET 2012_10_10_2 2",
            "1 Libya CE%sT"
        ],
        "Africa/Tunis": [
            "0:40:44 - LMT 1881_4_12 0:40:44",
            "0:9:21 - PMT 1911_2_11 0:9:21",
            "1 Tunisia CE%sT"
        ],
        "Africa/Windhoek": [
            "1:8:24 - LMT 1892_1_8 1:8:24",
            "1:30 - SWAT 1903_2 1:30",
            "2 - SAST 1942_8_20_2 2",
            "3 - SAST 1943_2_21_2 3",
            "2 - SAST 1990_2_21 2",
            "2 - CAT 1994_3_3 2",
            "1 Namibia WA%sT"
        ],
        "America/Adak": [
            "12:13:21 - LMT 1867_9_18 12:13:21",
            "-11:46:38 - LMT 1900_7_20_12 -11:46:38",
            "-11 - NST 1942 -11",
            "-11 US N%sT 1946 -11",
            "-11 - NST 1967_3 -11",
            "-11 - BST 1969 -11",
            "-11 US B%sT 1983_9_30_2 -10",
            "-10 US AH%sT 1983_10_30 -10",
            "-10 US HA%sT"
        ],
        "America/Anchorage": [
            "14:0:24 - LMT 1867_9_18 14:0:24",
            "-9:59:36 - LMT 1900_7_20_12 -9:59:36",
            "-10 - CAT 1942 -10",
            "-10 US CAT/CAWT 1945_7_14_23",
            "-10 US CAT/CAPT 1946 -10",
            "-10 - CAT 1967_3 -10",
            "-10 - AHST 1969 -10",
            "-10 US AH%sT 1983_9_30_2 -9",
            "-9 US Y%sT 1983_10_30 -9",
            "-9 US AK%sT"
        ],
        "America/Anguilla": [
            "-4:12:16 - LMT 1912_2_2 -4:12:16",
            "-4 - AST"
        ],
        "America/Antigua": [
            "-4:7:12 - LMT 1912_2_2 -4:7:12",
            "-5 - EST 1951 -5",
            "-4 - AST"
        ],
        "America/Araguaina": [
            "-3:12:48 - LMT 1914 -3:12:48",
            "-3 Brazil BR%sT 1990_8_17 -3",
            "-3 - BRT 1995_8_14 -3",
            "-3 Brazil BR%sT 2003_8_24 -3",
            "-3 - BRT 2012_9_21 -3",
            "-3 Brazil BR%sT"
        ],
        "America/Argentina/Buenos_Aires": [
            "-3:53:48 - LMT 1894_9_31 -3:53:48",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1999_9_3 -3",
            "-4 Arg AR%sT 2000_2_3 -3",
            "-3 Arg AR%sT"
        ],
        "America/Argentina/Catamarca": [
            "-4:23:8 - LMT 1894_9_31 -4:23:8",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1991_2_3 -2",
            "-4 - WART 1991_9_20 -4",
            "-3 Arg AR%sT 1999_9_3 -3",
            "-4 Arg AR%sT 2000_2_3 -3",
            "-3 - ART 2004_5_1 -3",
            "-4 - WART 2004_5_20 -4",
            "-3 Arg AR%sT 2008_9_18 -3",
            "-3 - ART"
        ],
        "America/Argentina/Cordoba": [
            "-4:16:48 - LMT 1894_9_31 -4:16:48",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1991_2_3 -2",
            "-4 - WART 1991_9_20 -4",
            "-3 Arg AR%sT 1999_9_3 -3",
            "-4 Arg AR%sT 2000_2_3 -3",
            "-3 Arg AR%sT"
        ],
        "America/Argentina/Jujuy": [
            "-4:21:12 - LMT 1894_9_31 -4:21:12",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1990_2_4 -2",
            "-4 - WART 1990_9_28 -4",
            "-3 - WARST 1991_2_17 -3",
            "-4 - WART 1991_9_6 -4",
            "-2 - ARST 1992 -2",
            "-3 Arg AR%sT 1999_9_3 -3",
            "-4 Arg AR%sT 2000_2_3 -3",
            "-3 Arg AR%sT 2008_9_18 -3",
            "-3 - ART"
        ],
        "America/Argentina/La_Rioja": [
            "-4:27:24 - LMT 1894_9_31 -4:27:24",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1991_2_1 -2",
            "-4 - WART 1991_4_7 -4",
            "-3 Arg AR%sT 1999_9_3 -3",
            "-4 Arg AR%sT 2000_2_3 -3",
            "-3 - ART 2004_5_1 -3",
            "-4 - WART 2004_5_20 -4",
            "-3 Arg AR%sT 2008_9_18 -3",
            "-3 - ART"
        ],
        "America/Argentina/Mendoza": [
            "-4:35:16 - LMT 1894_9_31 -4:35:16",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1990_2_4 -2",
            "-4 - WART 1990_9_15 -4",
            "-3 - WARST 1991_2_1 -3",
            "-4 - WART 1991_9_15 -4",
            "-3 - WARST 1992_2_1 -3",
            "-4 - WART 1992_9_18 -4",
            "-3 Arg AR%sT 1999_9_3 -3",
            "-4 Arg AR%sT 2000_2_3 -3",
            "-3 - ART 2004_4_23 -3",
            "-4 - WART 2004_8_26 -4",
            "-3 Arg AR%sT 2008_9_18 -3",
            "-3 - ART"
        ],
        "America/Argentina/Rio_Gallegos": [
            "-4:36:52 - LMT 1894_9_31 -4:36:52",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1999_9_3 -3",
            "-4 Arg AR%sT 2000_2_3 -3",
            "-3 - ART 2004_5_1 -3",
            "-4 - WART 2004_5_20 -4",
            "-3 Arg AR%sT 2008_9_18 -3",
            "-3 - ART"
        ],
        "America/Argentina/Salta": [
            "-4:21:40 - LMT 1894_9_31 -4:21:40",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1991_2_3 -2",
            "-4 - WART 1991_9_20 -4",
            "-3 Arg AR%sT 1999_9_3 -3",
            "-4 Arg AR%sT 2000_2_3 -3",
            "-3 Arg AR%sT 2008_9_18 -3",
            "-3 - ART"
        ],
        "America/Argentina/San_Juan": [
            "-4:34:4 - LMT 1894_9_31 -4:34:4",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1991_2_1 -2",
            "-4 - WART 1991_4_7 -4",
            "-3 Arg AR%sT 1999_9_3 -3",
            "-4 Arg AR%sT 2000_2_3 -3",
            "-3 - ART 2004_4_31 -3",
            "-4 - WART 2004_6_25 -4",
            "-3 Arg AR%sT 2008_9_18 -3",
            "-3 - ART"
        ],
        "America/Argentina/San_Luis": [
            "-4:25:24 - LMT 1894_9_31 -4:25:24",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1990 -2",
            "-2 - ARST 1990_2_14 -2",
            "-4 - WART 1990_9_15 -4",
            "-3 - WARST 1991_2_1 -3",
            "-4 - WART 1991_5_1 -4",
            "-3 - ART 1999_9_3 -3",
            "-3 - WARST 2000_2_3 -3",
            "-3 - ART 2004_4_31 -3",
            "-4 - WART 2004_6_25 -4",
            "-3 Arg AR%sT 2008_0_21 -2",
            "-4 SanLuis WAR%sT"
        ],
        "America/Argentina/Tucuman": [
            "-4:20:52 - LMT 1894_9_31 -4:20:52",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1991_2_3 -2",
            "-4 - WART 1991_9_20 -4",
            "-3 Arg AR%sT 1999_9_3 -3",
            "-4 Arg AR%sT 2000_2_3 -3",
            "-3 - ART 2004_5_1 -3",
            "-4 - WART 2004_5_13 -4",
            "-3 Arg AR%sT"
        ],
        "America/Argentina/Ushuaia": [
            "-4:33:12 - LMT 1894_9_31 -4:33:12",
            "-4:16:48 - CMT 1920_4 -4:16:48",
            "-4 - ART 1930_11 -4",
            "-4 Arg AR%sT 1969_9_5 -4",
            "-3 Arg AR%sT 1999_9_3 -3",
            "-4 Arg AR%sT 2000_2_3 -3",
            "-3 - ART 2004_4_30 -3",
            "-4 - WART 2004_5_20 -4",
            "-3 Arg AR%sT 2008_9_18 -3",
            "-3 - ART"
        ],
        "America/Aruba": [
            "-4:40:24 - LMT 1912_1_12 -4:40:24",
            "-4:30 - ANT 1965 -4:30",
            "-4 - AST"
        ],
        "America/Asuncion": [
            "-3:50:40 - LMT 1890 -3:50:40",
            "-3:50:40 - AMT 1931_9_10 -3:50:40",
            "-4 - PYT 1972_9 -4",
            "-3 - PYT 1974_3 -3",
            "-4 Para PY%sT"
        ],
        "America/Atikokan": [
            "-6:6:28 - LMT 1895 -6:6:28",
            "-6 Canada C%sT 1940_8_29 -6",
            "-5 - CDT 1942_1_9_2 -6",
            "-6 Canada C%sT 1945_8_30_2 -5",
            "-5 - EST"
        ],
        "America/Bahia": [
            "-2:34:4 - LMT 1914 -2:34:4",
            "-3 Brazil BR%sT 2003_8_24 -3",
            "-3 - BRT 2011_9_16 -3",
            "-3 Brazil BR%sT 2012_9_21 -3",
            "-3 - BRT"
        ],
        "America/Bahia_Banderas": [
            "-7:1 - LMT 1921_11_31_23_59 -7:1",
            "-7 - MST 1927_5_10_23 -7",
            "-6 - CST 1930_10_15 -6",
            "-7 - MST 1931_4_1_23 -7",
            "-6 - CST 1931_9 -6",
            "-7 - MST 1932_3_1 -7",
            "-6 - CST 1942_3_24 -6",
            "-7 - MST 1949_0_14 -7",
            "-8 - PST 1970 -8",
            "-7 Mexico M%sT 2010_3_4_2 -7",
            "-6 Mexico C%sT"
        ],
        "America/Barbados": [
            "-3:58:29 - LMT 1924 -3:58:29",
            "-3:58:29 - BMT 1932 -3:58:29",
            "-4 Barb A%sT"
        ],
        "America/Belem": [
            "-3:13:56 - LMT 1914 -3:13:56",
            "-3 Brazil BR%sT 1988_8_12 -3",
            "-3 - BRT"
        ],
        "America/Belize": [
            "-5:52:48 - LMT 1912_3 -5:52:48",
            "-6 Belize C%sT"
        ],
        "America/Blanc-Sablon": [
            "-3:48:28 - LMT 1884 -3:48:28",
            "-4 Canada A%sT 1970 -4",
            "-4 - AST"
        ],
        "America/Boa_Vista": [
            "-4:2:40 - LMT 1914 -4:2:40",
            "-4 Brazil AM%sT 1988_8_12 -4",
            "-4 - AMT 1999_8_30 -4",
            "-4 Brazil AM%sT 2000_9_15 -3",
            "-4 - AMT"
        ],
        "America/Bogota": [
            "-4:56:16 - LMT 1884_2_13 -4:56:16",
            "-4:56:16 - BMT 1914_10_23 -4:56:16",
            "-5 CO CO%sT"
        ],
        "America/Boise": [
            "-7:44:49 - LMT 1883_10_18_12_15_11 -7:44:49",
            "-8 US P%sT 1923_4_13_2 -8",
            "-7 US M%sT 1974 -7",
            "-7 - MST 1974_1_3_2 -7",
            "-7 US M%sT"
        ],
        "America/Cambridge_Bay": [
            "0 - zzz 1920",
            "-7 NT_YK M%sT 1999_9_31_2 -6",
            "-6 Canada C%sT 2000_9_29_2 -5",
            "-5 - EST 2000_10_5_0 -5",
            "-6 - CST 2001_3_1_3 -6",
            "-7 Canada M%sT"
        ],
        "America/Campo_Grande": [
            "-3:38:28 - LMT 1914 -3:38:28",
            "-4 Brazil AM%sT"
        ],
        "America/Cancun": [
            "-5:47:4 - LMT 1922_0_1_0_12_56 -5:47:4",
            "-6 - CST 1981_11_23 -6",
            "-5 Mexico E%sT 1998_7_2_2 -4",
            "-6 Mexico C%sT"
        ],
        "America/Caracas": [
            "-4:27:44 - LMT 1890 -4:27:44",
            "-4:27:40 - CMT 1912_1_12 -4:27:40",
            "-4:30 - VET 1965 -4:30",
            "-4 - VET 2007_11_9_03 -4",
            "-4:30 - VET"
        ],
        "America/Cayenne": [
            "-3:29:20 - LMT 1911_6 -3:29:20",
            "-4 - GFT 1967_9 -4",
            "-3 - GFT"
        ],
        "America/Cayman": [
            "-5:25:32 - LMT 1890 -5:25:32",
            "-5:7:12 - KMT 1912_1 -5:7:12",
            "-5 - EST"
        ],
        "America/Chicago": [
            "-5:50:36 - LMT 1883_10_18_12_9_24 -5:50:36",
            "-6 US C%sT 1920 -6",
            "-6 Chicago C%sT 1936_2_1_2 -6",
            "-5 - EST 1936_10_15_2 -5",
            "-6 Chicago C%sT 1942 -6",
            "-6 US C%sT 1946 -6",
            "-6 Chicago C%sT 1967 -6",
            "-6 US C%sT"
        ],
        "America/Chihuahua": [
            "-7:4:20 - LMT 1921_11_31_23_55_40 -7:4:20",
            "-7 - MST 1927_5_10_23 -7",
            "-6 - CST 1930_10_15 -6",
            "-7 - MST 1931_4_1_23 -7",
            "-6 - CST 1931_9 -6",
            "-7 - MST 1932_3_1 -7",
            "-6 - CST 1996 -6",
            "-6 Mexico C%sT 1998 -6",
            "-6 - CST 1998_3_5_3 -6",
            "-7 Mexico M%sT"
        ],
        "America/Costa_Rica": [
            "-5:36:13 - LMT 1890 -5:36:13",
            "-5:36:13 - SJMT 1921_0_15 -5:36:13",
            "-6 CR C%sT"
        ],
        "America/Creston": [
            "-7:46:4 - LMT 1884 -7:46:4",
            "-7 - MST 1916_9_1 -7",
            "-8 - PST 1918_5_2 -8",
            "-7 - MST"
        ],
        "America/Cuiaba": [
            "-3:44:20 - LMT 1914 -3:44:20",
            "-4 Brazil AM%sT 2003_8_24 -4",
            "-4 - AMT 2004_9_1 -4",
            "-4 Brazil AM%sT"
        ],
        "America/Curacao": [
            "-4:35:47 - LMT 1912_1_12 -4:35:47",
            "-4:30 - ANT 1965 -4:30",
            "-4 - AST"
        ],
        "America/Danmarkshavn": [
            "-1:14:40 - LMT 1916_6_28 -1:14:40",
            "-3 - WGT 1980_3_6_2 -3",
            "-3 EU WG%sT 1996 -3",
            "0 - GMT"
        ],
        "America/Dawson": [
            "-9:17:40 - LMT 1900_7_20 -9:17:40",
            "-9 NT_YK Y%sT 1973_9_28_0 -9",
            "-8 NT_YK P%sT 1980 -8",
            "-8 Canada P%sT"
        ],
        "America/Dawson_Creek": [
            "-8:0:56 - LMT 1884 -8:0:56",
            "-8 Canada P%sT 1947 -8",
            "-8 Vanc P%sT 1972_7_30_2 -7",
            "-7 - MST"
        ],
        "America/Denver": [
            "-6:59:56 - LMT 1883_10_18_12_0_4 -6:59:56",
            "-7 US M%sT 1920 -7",
            "-7 Denver M%sT 1942 -7",
            "-7 US M%sT 1946 -7",
            "-7 Denver M%sT 1967 -7",
            "-7 US M%sT"
        ],
        "America/Detroit": [
            "-5:32:11 - LMT 1905 -5:32:11",
            "-6 - CST 1915_4_15_2 -6",
            "-5 - EST 1942 -5",
            "-5 US E%sT 1946 -5",
            "-5 Detroit E%sT 1973 -5",
            "-5 US E%sT 1975 -5",
            "-5 - EST 1975_3_27_2 -5",
            "-5 US E%sT"
        ],
        "America/Dominica": [
            "-4:5:36 - LMT 1911_6_1_0_1 -4:5:36",
            "-4 - AST"
        ],
        "America/Edmonton": [
            "-7:33:52 - LMT 1906_8 -7:33:52",
            "-7 Edm M%sT 1987 -7",
            "-7 Canada M%sT"
        ],
        "America/Eirunepe": [
            "-4:39:28 - LMT 1914 -4:39:28",
            "-5 Brazil AC%sT 1988_8_12 -5",
            "-5 - ACT 1993_8_28 -5",
            "-5 Brazil AC%sT 1994_8_22 -5",
            "-5 - ACT 2008_5_24_00 -5",
            "-4 - AMT"
        ],
        "America/El_Salvador": [
            "-5:56:48 - LMT 1921 -5:56:48",
            "-6 Salv C%sT"
        ],
        "America/Fortaleza": [
            "-2:34 - LMT 1914 -2:34",
            "-3 Brazil BR%sT 1990_8_17 -3",
            "-3 - BRT 1999_8_30 -3",
            "-3 Brazil BR%sT 2000_9_22 -2",
            "-3 - BRT 2001_8_13 -3",
            "-3 Brazil BR%sT 2002_9_1 -3",
            "-3 - BRT"
        ],
        "America/Glace_Bay": [
            "-3:59:48 - LMT 1902_5_15 -3:59:48",
            "-4 Canada A%sT 1953 -4",
            "-4 Halifax A%sT 1954 -4",
            "-4 - AST 1972 -4",
            "-4 Halifax A%sT 1974 -4",
            "-4 Canada A%sT"
        ],
        "America/Godthab": [
            "-3:26:56 - LMT 1916_6_28 -3:26:56",
            "-3 - WGT 1980_3_6_2 -3",
            "-3 EU WG%sT"
        ],
        "America/Goose_Bay": [
            "-4:1:40 - LMT 1884 -4:1:40",
            "-3:30:52 - NST 1918 -3:30:52",
            "-3:30:52 Canada N%sT 1919 -3:30:52",
            "-3:30:52 - NST 1935_2_30 -3:30:52",
            "-3:30 - NST 1936 -3:30",
            "-3:30 StJohns N%sT 1942_4_11 -3:30",
            "-3:30 Canada N%sT 1946 -3:30",
            "-3:30 StJohns N%sT 1966_2_15_2 -3:30",
            "-4 StJohns A%sT 2011_10 -3",
            "-4 Canada A%sT"
        ],
        "America/Grand_Turk": [
            "-4:44:32 - LMT 1890 -4:44:32",
            "-5:7:12 - KMT 1912_1 -5:7:12",
            "-5 TC E%sT"
        ],
        "America/Grenada": [
            "-4:7 - LMT 1911_6 -4:7",
            "-4 - AST"
        ],
        "America/Guadeloupe": [
            "-4:6:8 - LMT 1911_5_8 -4:6:8",
            "-4 - AST"
        ],
        "America/Guatemala": [
            "-6:2:4 - LMT 1918_9_5 -6:2:4",
            "-6 Guat C%sT"
        ],
        "America/Guayaquil": [
            "-5:19:20 - LMT 1890 -5:19:20",
            "-5:14 - QMT 1931 -5:14",
            "-5 - ECT"
        ],
        "America/Guyana": [
            "-3:52:40 - LMT 1915_2 -3:52:40",
            "-3:45 - GBGT 1966_4_26 -3:45",
            "-3:45 - GYT 1975_6_31 -3:45",
            "-3 - GYT 1991 -3",
            "-4 - GYT"
        ],
        "America/Halifax": [
            "-4:14:24 - LMT 1902_5_15 -4:14:24",
            "-4 Halifax A%sT 1918 -4",
            "-4 Canada A%sT 1919 -4",
            "-4 Halifax A%sT 1942_1_9_2 -4",
            "-4 Canada A%sT 1946 -4",
            "-4 Halifax A%sT 1974 -4",
            "-4 Canada A%sT"
        ],
        "America/Havana": [
            "-5:29:28 - LMT 1890 -5:29:28",
            "-5:29:36 - HMT 1925_6_19_12 -5:29:36",
            "-5 Cuba C%sT"
        ],
        "America/Hermosillo": [
            "-7:23:52 - LMT 1921_11_31_23_36_8 -7:23:52",
            "-7 - MST 1927_5_10_23 -7",
            "-6 - CST 1930_10_15 -6",
            "-7 - MST 1931_4_1_23 -7",
            "-6 - CST 1931_9 -6",
            "-7 - MST 1932_3_1 -7",
            "-6 - CST 1942_3_24 -6",
            "-7 - MST 1949_0_14 -7",
            "-8 - PST 1970 -8",
            "-7 Mexico M%sT 1999 -7",
            "-7 - MST"
        ],
        "America/Indiana/Indianapolis": [
            "-5:44:38 - LMT 1883_10_18_12_15_22 -5:44:38",
            "-6 US C%sT 1920 -6",
            "-6 Indianapolis C%sT 1942 -6",
            "-6 US C%sT 1946 -6",
            "-6 Indianapolis C%sT 1955_3_24_2 -6",
            "-5 - EST 1957_8_29_2 -5",
            "-6 - CST 1958_3_27_2 -6",
            "-5 - EST 1969 -5",
            "-5 US E%sT 1971 -5",
            "-5 - EST 2006 -5",
            "-5 US E%sT"
        ],
        "America/Indiana/Knox": [
            "-5:46:30 - LMT 1883_10_18_12_13_30 -5:46:30",
            "-6 US C%sT 1947 -6",
            "-6 Starke C%sT 1962_3_29_2 -6",
            "-5 - EST 1963_9_27_2 -5",
            "-6 US C%sT 1991_9_27_2 -5",
            "-5 - EST 2006_3_2_2 -5",
            "-6 US C%sT"
        ],
        "America/Indiana/Marengo": [
            "-5:45:23 - LMT 1883_10_18_12_14_37 -5:45:23",
            "-6 US C%sT 1951 -6",
            "-6 Marengo C%sT 1961_3_30_2 -6",
            "-5 - EST 1969 -5",
            "-5 US E%sT 1974_0_6_2 -5",
            "-5 - CDT 1974_9_27_2 -5",
            "-5 US E%sT 1976 -5",
            "-5 - EST 2006 -5",
            "-5 US E%sT"
        ],
        "America/Indiana/Petersburg": [
            "-5:49:7 - LMT 1883_10_18_12_10_53 -5:49:7",
            "-6 US C%sT 1955 -6",
            "-6 Pike C%sT 1965_3_25_2 -6",
            "-5 - EST 1966_9_30_2 -5",
            "-6 US C%sT 1977_9_30_2 -5",
            "-5 - EST 2006_3_2_2 -5",
            "-6 US C%sT 2007_10_4_2 -5",
            "-5 US E%sT"
        ],
        "America/Indiana/Tell_City": [
            "-5:47:3 - LMT 1883_10_18_12_12_57 -5:47:3",
            "-6 US C%sT 1946 -6",
            "-6 Perry C%sT 1964_3_26_2 -6",
            "-5 - EST 1969 -5",
            "-5 US E%sT 1971 -5",
            "-5 - EST 2006_3_2_2 -5",
            "-6 US C%sT"
        ],
        "America/Indiana/Vevay": [
            "-5:40:16 - LMT 1883_10_18_12_19_44 -5:40:16",
            "-6 US C%sT 1954_3_25_2 -6",
            "-5 - EST 1969 -5",
            "-5 US E%sT 1973 -5",
            "-5 - EST 2006 -5",
            "-5 US E%sT"
        ],
        "America/Indiana/Vincennes": [
            "-5:50:7 - LMT 1883_10_18_12_9_53 -5:50:7",
            "-6 US C%sT 1946 -6",
            "-6 Vincennes C%sT 1964_3_26_2 -6",
            "-5 - EST 1969 -5",
            "-5 US E%sT 1971 -5",
            "-5 - EST 2006_3_2_2 -5",
            "-6 US C%sT 2007_10_4_2 -5",
            "-5 US E%sT"
        ],
        "America/Indiana/Winamac": [
            "-5:46:25 - LMT 1883_10_18_12_13_35 -5:46:25",
            "-6 US C%sT 1946 -6",
            "-6 Pulaski C%sT 1961_3_30_2 -6",
            "-5 - EST 1969 -5",
            "-5 US E%sT 1971 -5",
            "-5 - EST 2006_3_2_2 -5",
            "-6 US C%sT 2007_2_11_2 -6",
            "-5 US E%sT"
        ],
        "America/Inuvik": [
            "0 - zzz 1953",
            "-8 NT_YK P%sT 1979_3_29_2 -8",
            "-7 NT_YK M%sT 1980 -7",
            "-7 Canada M%sT"
        ],
        "America/Iqaluit": [
            "0 - zzz 1942_7",
            "-5 NT_YK E%sT 1999_9_31_2 -4",
            "-6 Canada C%sT 2000_9_29_2 -5",
            "-5 Canada E%sT"
        ],
        "America/Jamaica": [
            "-5:7:12 - LMT 1890 -5:7:12",
            "-5:7:12 - KMT 1912_1 -5:7:12",
            "-5 - EST 1974_3_28_2 -5",
            "-5 US E%sT 1984 -5",
            "-5 - EST"
        ],
        "America/Juneau": [
            "15:2:19 - LMT 1867_9_18 15:2:19",
            "-8:57:41 - LMT 1900_7_20_12 -8:57:41",
            "-8 - PST 1942 -8",
            "-8 US P%sT 1946 -8",
            "-8 - PST 1969 -8",
            "-8 US P%sT 1980_3_27_2 -8",
            "-9 US Y%sT 1980_9_26_2 -8",
            "-8 US P%sT 1983_9_30_2 -7",
            "-9 US Y%sT 1983_10_30 -9",
            "-9 US AK%sT"
        ],
        "America/Kentucky/Louisville": [
            "-5:43:2 - LMT 1883_10_18_12_16_58 -5:43:2",
            "-6 US C%sT 1921 -6",
            "-6 Louisville C%sT 1942 -6",
            "-6 US C%sT 1946 -6",
            "-6 Louisville C%sT 1961_6_23_2 -5",
            "-5 - EST 1968 -5",
            "-5 US E%sT 1974_0_6_2 -5",
            "-5 - CDT 1974_9_27_2 -5",
            "-5 US E%sT"
        ],
        "America/Kentucky/Monticello": [
            "-5:39:24 - LMT 1883_10_18_12_20_36 -5:39:24",
            "-6 US C%sT 1946 -6",
            "-6 - CST 1968 -6",
            "-6 US C%sT 2000_9_29_2 -5",
            "-5 US E%sT"
        ],
        "America/La_Paz": [
            "-4:32:36 - LMT 1890 -4:32:36",
            "-4:32:36 - CMT 1931_9_15 -4:32:36",
            "-3:32:36 - BOST 1932_2_21 -3:32:36",
            "-4 - BOT"
        ],
        "America/Lima": [
            "-5:8:12 - LMT 1890 -5:8:12",
            "-5:8:36 - LMT 1908_6_28 -5:8:36",
            "-5 Peru PE%sT"
        ],
        "America/Los_Angeles": [
            "-7:52:58 - LMT 1883_10_18_12_7_2 -7:52:58",
            "-8 US P%sT 1946 -8",
            "-8 CA P%sT 1967 -8",
            "-8 US P%sT"
        ],
        "America/Maceio": [
            "-2:22:52 - LMT 1914 -2:22:52",
            "-3 Brazil BR%sT 1990_8_17 -3",
            "-3 - BRT 1995_9_13 -3",
            "-3 Brazil BR%sT 1996_8_4 -3",
            "-3 - BRT 1999_8_30 -3",
            "-3 Brazil BR%sT 2000_9_22 -2",
            "-3 - BRT 2001_8_13 -3",
            "-3 Brazil BR%sT 2002_9_1 -3",
            "-3 - BRT"
        ],
        "America/Managua": [
            "-5:45:8 - LMT 1890 -5:45:8",
            "-5:45:12 - MMT 1934_5_23 -5:45:12",
            "-6 - CST 1973_4 -6",
            "-5 - EST 1975_1_16 -5",
            "-6 Nic C%sT 1992_0_1_4 -6",
            "-5 - EST 1992_8_24 -5",
            "-6 - CST 1993 -6",
            "-5 - EST 1997 -5",
            "-6 Nic C%sT"
        ],
        "America/Manaus": [
            "-4:0:4 - LMT 1914 -4:0:4",
            "-4 Brazil AM%sT 1988_8_12 -4",
            "-4 - AMT 1993_8_28 -4",
            "-4 Brazil AM%sT 1994_8_22 -4",
            "-4 - AMT"
        ],
        "America/Martinique": [
            "-4:4:20 - LMT 1890 -4:4:20",
            "-4:4:20 - FFMT 1911_4 -4:4:20",
            "-4 - AST 1980_3_6 -4",
            "-3 - ADT 1980_8_28 -3",
            "-4 - AST"
        ],
        "America/Matamoros": [
            "-6:40 - LMT 1921_11_31_23_20 -6:40",
            "-6 - CST 1988 -6",
            "-6 US C%sT 1989 -6",
            "-6 Mexico C%sT 2010 -6",
            "-6 US C%sT"
        ],
        "America/Mazatlan": [
            "-7:5:40 - LMT 1921_11_31_23_54_20 -7:5:40",
            "-7 - MST 1927_5_10_23 -7",
            "-6 - CST 1930_10_15 -6",
            "-7 - MST 1931_4_1_23 -7",
            "-6 - CST 1931_9 -6",
            "-7 - MST 1932_3_1 -7",
            "-6 - CST 1942_3_24 -6",
            "-7 - MST 1949_0_14 -7",
            "-8 - PST 1970 -8",
            "-7 Mexico M%sT"
        ],
        "America/Menominee": [
            "-5:50:27 - LMT 1885_8_18_12 -5:50:27",
            "-6 US C%sT 1946 -6",
            "-6 Menominee C%sT 1969_3_27_2 -6",
            "-5 - EST 1973_3_29_2 -5",
            "-6 US C%sT"
        ],
        "America/Merida": [
            "-5:58:28 - LMT 1922_0_1_0_1_32 -5:58:28",
            "-6 - CST 1981_11_23 -6",
            "-5 - EST 1982_11_2 -5",
            "-6 Mexico C%sT"
        ],
        "America/Metlakatla": [
            "15:13:42 - LMT 1867_9_18 15:13:42",
            "-8:46:18 - LMT 1900_7_20_12 -8:46:18",
            "-8 - PST 1942 -8",
            "-8 US P%sT 1946 -8",
            "-8 - PST 1969 -8",
            "-8 US P%sT 1983_9_30_2 -7",
            "-8 - MeST"
        ],
        "America/Mexico_City": [
            "-6:36:36 - LMT 1922_0_1_0_23_24 -6:36:36",
            "-7 - MST 1927_5_10_23 -7",
            "-6 - CST 1930_10_15 -6",
            "-7 - MST 1931_4_1_23 -7",
            "-6 - CST 1931_9 -6",
            "-7 - MST 1932_3_1 -7",
            "-6 Mexico C%sT 2001_8_30_02 -5",
            "-6 - CST 2002_1_20 -6",
            "-6 Mexico C%sT"
        ],
        "America/Miquelon": [
            "-3:44:40 - LMT 1911_4_15 -3:44:40",
            "-4 - AST 1980_4 -4",
            "-3 - PMST 1987 -3",
            "-3 Canada PM%sT"
        ],
        "America/Moncton": [
            "-4:19:8 - LMT 1883_11_9 -4:19:8",
            "-5 - EST 1902_5_15 -5",
            "-4 Canada A%sT 1933 -4",
            "-4 Moncton A%sT 1942 -4",
            "-4 Canada A%sT 1946 -4",
            "-4 Moncton A%sT 1973 -4",
            "-4 Canada A%sT 1993 -4",
            "-4 Moncton A%sT 2007 -4",
            "-4 Canada A%sT"
        ],
        "America/Monterrey": [
            "-6:41:16 - LMT 1921_11_31_23_18_44 -6:41:16",
            "-6 - CST 1988 -6",
            "-6 US C%sT 1989 -6",
            "-6 Mexico C%sT"
        ],
        "America/Montevideo": [
            "-3:44:44 - LMT 1898_5_28 -3:44:44",
            "-3:44:44 - MMT 1920_4_1 -3:44:44",
            "-3:30 Uruguay UY%sT 1942_11_14 -3:30",
            "-3 Uruguay UY%sT"
        ],
        "America/Montreal": [
            "-4:54:16 - LMT 1884 -4:54:16",
            "-5 Mont E%sT 1918 -5",
            "-5 Canada E%sT 1919 -5",
            "-5 Mont E%sT 1942_1_9_2 -5",
            "-5 Canada E%sT 1946 -5",
            "-5 Mont E%sT 1974 -5",
            "-5 Canada E%sT"
        ],
        "America/Montserrat": [
            "-4:8:52 - LMT 1911_6_1_0_1 -4:8:52",
            "-4 - AST"
        ],
        "America/Nassau": [
            "-5:9:30 - LMT 1912_2_2 -5:9:30",
            "-5 Bahamas E%sT 1976 -5",
            "-5 US E%sT"
        ],
        "America/New_York": [
            "-4:56:2 - LMT 1883_10_18_12_3_58 -4:56:2",
            "-5 US E%sT 1920 -5",
            "-5 NYC E%sT 1942 -5",
            "-5 US E%sT 1946 -5",
            "-5 NYC E%sT 1967 -5",
            "-5 US E%sT"
        ],
        "America/Nipigon": [
            "-5:53:4 - LMT 1895 -5:53:4",
            "-5 Canada E%sT 1940_8_29 -5",
            "-4 - EDT 1942_1_9_2 -5",
            "-5 Canada E%sT"
        ],
        "America/Nome": [
            "12:58:21 - LMT 1867_9_18 12:58:21",
            "-11:1:38 - LMT 1900_7_20_12 -11:1:38",
            "-11 - NST 1942 -11",
            "-11 US N%sT 1946 -11",
            "-11 - NST 1967_3 -11",
            "-11 - BST 1969 -11",
            "-11 US B%sT 1983_9_30_2 -10",
            "-9 US Y%sT 1983_10_30 -9",
            "-9 US AK%sT"
        ],
        "America/Noronha": [
            "-2:9:40 - LMT 1914 -2:9:40",
            "-2 Brazil FN%sT 1990_8_17 -2",
            "-2 - FNT 1999_8_30 -2",
            "-2 Brazil FN%sT 2000_9_15 -1",
            "-2 - FNT 2001_8_13 -2",
            "-2 Brazil FN%sT 2002_9_1 -2",
            "-2 - FNT"
        ],
        "America/North_Dakota/Beulah": [
            "-6:47:7 - LMT 1883_10_18_12_12_53 -6:47:7",
            "-7 US M%sT 2010_10_7_2 -6",
            "-6 US C%sT"
        ],
        "America/North_Dakota/Center": [
            "-6:45:12 - LMT 1883_10_18_12_14_48 -6:45:12",
            "-7 US M%sT 1992_9_25_02 -6",
            "-6 US C%sT"
        ],
        "America/North_Dakota/New_Salem": [
            "-6:45:39 - LMT 1883_10_18_12_14_21 -6:45:39",
            "-7 US M%sT 2003_9_26_02 -6",
            "-6 US C%sT"
        ],
        "America/Ojinaga": [
            "-6:57:40 - LMT 1922_0_1_0_2_20 -6:57:40",
            "-7 - MST 1927_5_10_23 -7",
            "-6 - CST 1930_10_15 -6",
            "-7 - MST 1931_4_1_23 -7",
            "-6 - CST 1931_9 -6",
            "-7 - MST 1932_3_1 -7",
            "-6 - CST 1996 -6",
            "-6 Mexico C%sT 1998 -6",
            "-6 - CST 1998_3_5_3 -6",
            "-7 Mexico M%sT 2010 -7",
            "-7 US M%sT"
        ],
        "America/Panama": [
            "-5:18:8 - LMT 1890 -5:18:8",
            "-5:19:36 - CMT 1908_3_22 -5:19:36",
            "-5 - EST"
        ],
        "America/Pangnirtung": [
            "0 - zzz 1921",
            "-4 NT_YK A%sT 1995_3_2_2 -4",
            "-5 Canada E%sT 1999_9_31_2 -4",
            "-6 Canada C%sT 2000_9_29_2 -5",
            "-5 Canada E%sT"
        ],
        "America/Paramaribo": [
            "-3:40:40 - LMT 1911 -3:40:40",
            "-3:40:52 - PMT 1935 -3:40:52",
            "-3:40:36 - PMT 1945_9 -3:40:36",
            "-3:30 - NEGT 1975_10_20 -3:30",
            "-3:30 - SRT 1984_9 -3:30",
            "-3 - SRT"
        ],
        "America/Phoenix": [
            "-7:28:18 - LMT 1883_10_18_11_31_42 -7:28:18",
            "-7 US M%sT 1944_0_1_00_1 -6",
            "-7 - MST 1944_3_1_00_1 -7",
            "-7 US M%sT 1944_9_1_00_1 -6",
            "-7 - MST 1967 -7",
            "-7 US M%sT 1968_2_21 -7",
            "-7 - MST"
        ],
        "America/Port-au-Prince": [
            "-4:49:20 - LMT 1890 -4:49:20",
            "-4:49 - PPMT 1917_0_24_12 -4:49",
            "-5 Haiti E%sT"
        ],
        "America/Port_of_Spain": [
            "-4:6:4 - LMT 1912_2_2 -4:6:4",
            "-4 - AST"
        ],
        "America/Porto_Velho": [
            "-4:15:36 - LMT 1914 -4:15:36",
            "-4 Brazil AM%sT 1988_8_12 -4",
            "-4 - AMT"
        ],
        "America/Puerto_Rico": [
            "-4:24:25 - LMT 1899_2_28_12 -4:24:25",
            "-4 - AST 1942_4_3 -4",
            "-4 US A%sT 1946 -4",
            "-4 - AST"
        ],
        "America/Rainy_River": [
            "-6:18:16 - LMT 1895 -6:18:16",
            "-6 Canada C%sT 1940_8_29 -6",
            "-5 - CDT 1942_1_9_2 -6",
            "-6 Canada C%sT"
        ],
        "America/Rankin_Inlet": [
            "0 - zzz 1957",
            "-6 NT_YK C%sT 2000_9_29_2 -5",
            "-5 - EST 2001_3_1_3 -5",
            "-6 Canada C%sT"
        ],
        "America/Recife": [
            "-2:19:36 - LMT 1914 -2:19:36",
            "-3 Brazil BR%sT 1990_8_17 -3",
            "-3 - BRT 1999_8_30 -3",
            "-3 Brazil BR%sT 2000_9_15 -2",
            "-3 - BRT 2001_8_13 -3",
            "-3 Brazil BR%sT 2002_9_1 -3",
            "-3 - BRT"
        ],
        "America/Regina": [
            "-6:58:36 - LMT 1905_8 -6:58:36",
            "-7 Regina M%sT 1960_3_24_2 -7",
            "-6 - CST"
        ],
        "America/Resolute": [
            "0 - zzz 1947_7_31",
            "-6 NT_YK C%sT 2000_9_29_2 -5",
            "-5 - EST 2001_3_1_3 -5",
            "-6 Canada C%sT 2006_9_29_2 -5",
            "-5 - EST 2007_2_11_3 -5",
            "-6 Canada C%sT"
        ],
        "America/Rio_Branco": [
            "-4:31:12 - LMT 1914 -4:31:12",
            "-5 Brazil AC%sT 1988_8_12 -5",
            "-5 - ACT 2008_5_24_00 -5",
            "-4 - AMT"
        ],
        "America/Santa_Isabel": [
            "-7:39:28 - LMT 1922_0_1_0_20_32 -7:39:28",
            "-7 - MST 1924 -7",
            "-8 - PST 1927_5_10_23 -8",
            "-7 - MST 1930_10_15 -7",
            "-8 - PST 1931_3_1 -8",
            "-7 - PDT 1931_8_30 -7",
            "-8 - PST 1942_3_24 -8",
            "-7 - PWT 1945_7_14_23",
            "-7 - PPT 1945_10_12 -7",
            "-8 - PST 1948_3_5 -8",
            "-7 - PDT 1949_0_14 -7",
            "-8 - PST 1954 -8",
            "-8 CA P%sT 1961 -8",
            "-8 - PST 1976 -8",
            "-8 US P%sT 1996 -8",
            "-8 Mexico P%sT 2001 -8",
            "-8 US P%sT 2002_1_20 -8",
            "-8 Mexico P%sT"
        ],
        "America/Santarem": [
            "-3:38:48 - LMT 1914 -3:38:48",
            "-4 Brazil AM%sT 1988_8_12 -4",
            "-4 - AMT 2008_5_24_00 -4",
            "-3 - BRT"
        ],
        "America/Santiago": [
            "-4:42:46 - LMT 1890 -4:42:46",
            "-4:42:46 - SMT 1910 -4:42:46",
            "-5 - CLT 1916_6_1 -5",
            "-4:42:46 - SMT 1918_8_1 -4:42:46",
            "-4 - CLT 1919_6_1 -4",
            "-4:42:46 - SMT 1927_8_1 -4:42:46",
            "-5 Chile CL%sT 1947_4_22 -5",
            "-4 Chile CL%sT"
        ],
        "America/Santo_Domingo": [
            "-4:39:36 - LMT 1890 -4:39:36",
            "-4:40 - SDMT 1933_3_1_12 -4:40",
            "-5 DR E%sT 1974_9_27 -5",
            "-4 - AST 2000_9_29_02 -4",
            "-5 US E%sT 2000_11_3_01 -5",
            "-4 - AST"
        ],
        "America/Sao_Paulo": [
            "-3:6:28 - LMT 1914 -3:6:28",
            "-3 Brazil BR%sT 1963_9_23_00 -3",
            "-2 - BRST 1964 -2",
            "-3 Brazil BR%sT"
        ],
        "America/Scoresbysund": [
            "-1:27:52 - LMT 1916_6_28 -1:27:52",
            "-2 - CGT 1980_3_6_2 -2",
            "-2 C-Eur CG%sT 1981_2_29 -2",
            "-1 EU EG%sT"
        ],
        "America/Sitka": [
            "14:58:47 - LMT 1867_9_18 14:58:47",
            "-9:1:13 - LMT 1900_7_20_12 -9:1:13",
            "-8 - PST 1942 -8",
            "-8 US P%sT 1946 -8",
            "-8 - PST 1969 -8",
            "-8 US P%sT 1983_9_30_2 -7",
            "-9 US Y%sT 1983_10_30 -9",
            "-9 US AK%sT"
        ],
        "America/St_Johns": [
            "-3:30:52 - LMT 1884 -3:30:52",
            "-3:30:52 StJohns N%sT 1918 -3:30:52",
            "-3:30:52 Canada N%sT 1919 -3:30:52",
            "-3:30:52 StJohns N%sT 1935_2_30 -3:30:52",
            "-3:30 StJohns N%sT 1942_4_11 -3:30",
            "-3:30 Canada N%sT 1946 -3:30",
            "-3:30 StJohns N%sT 2011_10 -2:30",
            "-3:30 Canada N%sT"
        ],
        "America/St_Kitts": [
            "-4:10:52 - LMT 1912_2_2 -4:10:52",
            "-4 - AST"
        ],
        "America/St_Lucia": [
            "-4:4 - LMT 1890 -4:4",
            "-4:4 - CMT 1912 -4:4",
            "-4 - AST"
        ],
        "America/St_Thomas": [
            "-4:19:44 - LMT 1911_6 -4:19:44",
            "-4 - AST"
        ],
        "America/St_Vincent": [
            "-4:4:56 - LMT 1890 -4:4:56",
            "-4:4:56 - KMT 1912 -4:4:56",
            "-4 - AST"
        ],
        "America/Swift_Current": [
            "-7:11:20 - LMT 1905_8 -7:11:20",
            "-7 Canada M%sT 1946_3_28_2 -7",
            "-7 Regina M%sT 1950 -7",
            "-7 Swift M%sT 1972_3_30_2 -7",
            "-6 - CST"
        ],
        "America/Tegucigalpa": [
            "-5:48:52 - LMT 1921_3 -5:48:52",
            "-6 Hond C%sT"
        ],
        "America/Thule": [
            "-4:35:8 - LMT 1916_6_28 -4:35:8",
            "-4 Thule A%sT"
        ],
        "America/Thunder_Bay": [
            "-5:57 - LMT 1895 -5:57",
            "-6 - CST 1910 -6",
            "-5 - EST 1942 -5",
            "-5 Canada E%sT 1970 -5",
            "-5 Mont E%sT 1973 -5",
            "-5 - EST 1974 -5",
            "-5 Canada E%sT"
        ],
        "America/Tijuana": [
            "-7:48:4 - LMT 1922_0_1_0_11_56 -7:48:4",
            "-7 - MST 1924 -7",
            "-8 - PST 1927_5_10_23 -8",
            "-7 - MST 1930_10_15 -7",
            "-8 - PST 1931_3_1 -8",
            "-7 - PDT 1931_8_30 -7",
            "-8 - PST 1942_3_24 -8",
            "-7 - PWT 1945_7_14_23",
            "-7 - PPT 1945_10_12 -7",
            "-8 - PST 1948_3_5 -8",
            "-7 - PDT 1949_0_14 -7",
            "-8 - PST 1954 -8",
            "-8 CA P%sT 1961 -8",
            "-8 - PST 1976 -8",
            "-8 US P%sT 1996 -8",
            "-8 Mexico P%sT 2001 -8",
            "-8 US P%sT 2002_1_20 -8",
            "-8 Mexico P%sT 2010 -8",
            "-8 US P%sT"
        ],
        "America/Toronto": [
            "-5:17:32 - LMT 1895 -5:17:32",
            "-5 Canada E%sT 1919 -5",
            "-5 Toronto E%sT 1942_1_9_2 -5",
            "-5 Canada E%sT 1946 -5",
            "-5 Toronto E%sT 1974 -5",
            "-5 Canada E%sT"
        ],
        "America/Tortola": [
            "-4:18:28 - LMT 1911_6 -4:18:28",
            "-4 - AST"
        ],
        "America/Vancouver": [
            "-8:12:28 - LMT 1884 -8:12:28",
            "-8 Vanc P%sT 1987 -8",
            "-8 Canada P%sT"
        ],
        "America/Whitehorse": [
            "-9:0:12 - LMT 1900_7_20 -9:0:12",
            "-9 NT_YK Y%sT 1966_6_1_2 -9",
            "-8 NT_YK P%sT 1980 -8",
            "-8 Canada P%sT"
        ],
        "America/Winnipeg": [
            "-6:28:36 - LMT 1887_6_16 -6:28:36",
            "-6 Winn C%sT 2006 -6",
            "-6 Canada C%sT"
        ],
        "America/Yakutat": [
            "14:41:5 - LMT 1867_9_18 14:41:5",
            "-9:18:55 - LMT 1900_7_20_12 -9:18:55",
            "-9 - YST 1942 -9",
            "-9 US Y%sT 1946 -9",
            "-9 - YST 1969 -9",
            "-9 US Y%sT 1983_10_30 -9",
            "-9 US AK%sT"
        ],
        "America/Yellowknife": [
            "0 - zzz 1935",
            "-7 NT_YK M%sT 1980 -7",
            "-7 Canada M%sT"
        ],
        "Antarctica/Casey": [
            "0 - zzz 1969",
            "8 - WST 2009_9_18_2 8",
            "11 - CAST 2010_2_5_2 11",
            "8 - WST 2011_9_28_2 8",
            "11 - CAST 2012_1_21_17",
            "8 - WST"
        ],
        "Antarctica/Davis": [
            "0 - zzz 1957_0_13",
            "7 - DAVT 1964_10 7",
            "0 - zzz 1969_1",
            "7 - DAVT 2009_9_18_2 7",
            "5 - DAVT 2010_2_10_20",
            "7 - DAVT 2011_9_28_2 7",
            "5 - DAVT 2012_1_21_20",
            "7 - DAVT"
        ],
        "Antarctica/DumontDUrville": [
            "0 - zzz 1947",
            "10 - PMT 1952_0_14 10",
            "0 - zzz 1956_10",
            "10 - DDUT"
        ],
        "Antarctica/Macquarie": [
            "0 - zzz 1899_10",
            "10 - EST 1916_9_1_2 10",
            "11 - EST 1917_1 11",
            "10 Aus EST 1919_3 10",
            "0 - zzz 1948_2_25",
            "10 Aus EST 1967 10",
            "10 AT EST 2010_3_4_3 11",
            "11 - MIST"
        ],
        "Antarctica/Mawson": [
            "0 - zzz 1954_1_13",
            "6 - MAWT 2009_9_18_2 6",
            "5 - MAWT"
        ],
        "Antarctica/McMurdo": [
            "0 - zzz 1956",
            "12 NZAQ NZ%sT"
        ],
        "Antarctica/Palmer": [
            "0 - zzz 1965",
            "-4 ArgAQ AR%sT 1969_9_5 -4",
            "-3 ArgAQ AR%sT 1982_4 -3",
            "-4 ChileAQ CL%sT"
        ],
        "Antarctica/Rothera": [
            "0 - zzz 1976_11_1",
            "-3 - ROTT"
        ],
        "Antarctica/Syowa": [
            "0 - zzz 1957_0_29",
            "3 - SYOT"
        ],
        "Antarctica/Vostok": [
            "0 - zzz 1957_11_16",
            "6 - VOST"
        ],
        "Europe/Oslo": [
            "0:43 - LMT 1895_0_1 0:43",
            "1 Norway CE%sT 1940_7_10_23 1",
            "1 C-Eur CE%sT 1945_3_2_2 1",
            "1 Norway CE%sT 1980 1",
            "1 EU CE%sT"
        ],
        "Asia/Aden": [
            "2:59:54 - LMT 1950 2:59:54",
            "3 - AST"
        ],
        "Asia/Almaty": [
            "5:7:48 - LMT 1924_4_2 5:7:48",
            "5 - ALMT 1930_5_21 5",
            "6 RussiaAsia ALM%sT 1991 6",
            "6 - ALMT 1992 6",
            "6 RussiaAsia ALM%sT 2005_2_15 6",
            "6 - ALMT"
        ],
        "Asia/Amman": [
            "2:23:44 - LMT 1931 2:23:44",
            "2 Jordan EE%sT"
        ],
        "Asia/Anadyr": [
            "11:49:56 - LMT 1924_4_2 11:49:56",
            "12 - ANAT 1930_5_21 12",
            "13 Russia ANA%sT 1982_3_1_0 13",
            "12 Russia ANA%sT 1991_2_31_2 12",
            "11 Russia ANA%sT 1992_0_19_2 11",
            "12 Russia ANA%sT 2010_2_28_2 12",
            "11 Russia ANA%sT 2011_2_27_2 11",
            "12 - ANAT"
        ],
        "Asia/Aqtau": [
            "3:21:4 - LMT 1924_4_2 3:21:4",
            "4 - FORT 1930_5_21 4",
            "5 - FORT 1963 5",
            "5 - SHET 1981_9_1 5",
            "6 - SHET 1982_3_1 6",
            "5 RussiaAsia SHE%sT 1991 5",
            "5 - SHET 1991_11_16 5",
            "5 RussiaAsia AQT%sT 1995_2_26_2 5",
            "4 RussiaAsia AQT%sT 2005_2_15 4",
            "5 - AQTT"
        ],
        "Asia/Aqtobe": [
            "3:48:40 - LMT 1924_4_2 3:48:40",
            "4 - AKTT 1930_5_21 4",
            "5 - AKTT 1981_3_1 5",
            "6 - AKTST 1981_9_1 6",
            "6 - AKTT 1982_3_1 6",
            "5 RussiaAsia AKT%sT 1991 5",
            "5 - AKTT 1991_11_16 5",
            "5 RussiaAsia AQT%sT 2005_2_15 5",
            "5 - AQTT"
        ],
        "Asia/Ashgabat": [
            "3:53:32 - LMT 1924_4_2 3:53:32",
            "4 - ASHT 1930_5_21 4",
            "5 RussiaAsia ASH%sT 1991_2_31_2 5",
            "4 RussiaAsia ASH%sT 1991_9_27 4",
            "4 RussiaAsia TM%sT 1992_0_19_2 4",
            "5 - TMT"
        ],
        "Asia/Baghdad": [
            "2:57:40 - LMT 1890 2:57:40",
            "2:57:36 - BMT 1918 2:57:36",
            "3 - AST 1982_4 3",
            "3 Iraq A%sT"
        ],
        "Asia/Bahrain": [
            "3:22:20 - LMT 1920 3:22:20",
            "4 - GST 1972_5 4",
            "3 - AST"
        ],
        "Asia/Baku": [
            "3:19:24 - LMT 1924_4_2 3:19:24",
            "3 - BAKT 1957_2 3",
            "4 RussiaAsia BAK%sT 1991_2_31_2 4",
            "4 - BAKST 1991_7_30 4",
            "3 RussiaAsia AZ%sT 1992_8_26_23 4",
            "4 - AZT 1996 4",
            "4 EUAsia AZ%sT 1997 4",
            "4 Azer AZ%sT"
        ],
        "Asia/Bangkok": [
            "6:42:4 - LMT 1880 6:42:4",
            "6:42:4 - BMT 1920_3 6:42:4",
            "7 - ICT"
        ],
        "Asia/Beirut": [
            "2:22 - LMT 1880 2:22",
            "2 Lebanon EE%sT"
        ],
        "Asia/Bishkek": [
            "4:58:24 - LMT 1924_4_2 4:58:24",
            "5 - FRUT 1930_5_21 5",
            "6 RussiaAsia FRU%sT 1991_2_31_2 6",
            "6 - FRUST 1991_7_31_2 6",
            "5 Kyrgyz KG%sT 2005_7_12 6",
            "6 - KGT"
        ],
        "Asia/Brunei": [
            "7:39:40 - LMT 1926_2 7:39:40",
            "7:30 - BNT 1933 7:30",
            "8 - BNT"
        ],
        "Asia/Choibalsan": [
            "7:38 - LMT 1905_7 7:38",
            "7 - ULAT 1978 7",
            "8 - ULAT 1983_3 8",
            "9 Mongol CHO%sT 2008_2_31 9",
            "8 Mongol CHO%sT"
        ],
        "Asia/Chongqing": [
            "7:6:20 - LMT 1928 7:6:20",
            "7 - LONT 1980_4 7",
            "8 PRC C%sT"
        ],
        "Asia/Colombo": [
            "5:19:24 - LMT 1880 5:19:24",
            "5:19:32 - MMT 1906 5:19:32",
            "5:30 - IST 1942_0_5 5:30",
            "6 - IHST 1942_8 6",
            "6:30 - IST 1945_9_16_2 6:30",
            "5:30 - IST 1996_4_25_0 5:30",
            "6:30 - LKT 1996_9_26_0_30 6:30",
            "6 - LKT 2006_3_15_0_30 6",
            "5:30 - IST"
        ],
        "Asia/Damascus": [
            "2:25:12 - LMT 1920 2:25:12",
            "2 Syria EE%sT"
        ],
        "Asia/Dhaka": [
            "6:1:40 - LMT 1890 6:1:40",
            "5:53:20 - HMT 1941_9 5:53:20",
            "6:30 - BURT 1942_4_15 6:30",
            "5:30 - IST 1942_8 5:30",
            "6:30 - BURT 1951_8_30 6:30",
            "6 - DACT 1971_2_26 6",
            "6 - BDT 2009 6",
            "6 Dhaka BD%sT"
        ],
        "Asia/Dili": [
            "8:22:20 - LMT 1912 8:22:20",
            "8 - TLT 1942_1_21_23 8",
            "9 - JST 1945_8_23 9",
            "9 - TLT 1976_4_3 9",
            "8 - CIT 2000_8_17_00 8",
            "9 - TLT"
        ],
        "Asia/Dubai": [
            "3:41:12 - LMT 1920 3:41:12",
            "4 - GST"
        ],
        "Asia/Dushanbe": [
            "4:35:12 - LMT 1924_4_2 4:35:12",
            "5 - DUST 1930_5_21 5",
            "6 RussiaAsia DUS%sT 1991_2_31_2 6",
            "6 - DUSST 1991_8_9_2 5",
            "5 - TJT"
        ],
        "Asia/Gaza": [
            "2:17:52 - LMT 1900_9 2:17:52",
            "2 Zion EET 1948_4_15 2",
            "2 EgyptAsia EE%sT 1967_5_5 3",
            "2 Zion I%sT 1996 2",
            "2 Jordan EE%sT 1999 2",
            "2 Palestine EE%sT 2008_7_29_0 3",
            "2 - EET 2008_8 2",
            "2 Palestine EE%sT 2010 2",
            "2 - EET 2010_2_27_0_1 2",
            "2 Palestine EE%sT 2011_7_1 3",
            "2 - EET 2012 2",
            "2 Palestine EE%sT"
        ],
        "Asia/Harbin": [
            "8:26:44 - LMT 1928 8:26:44",
            "8:30 - CHAT 1932_2 8:30",
            "8 - CST 1940 8",
            "9 - CHAT 1966_4 9",
            "8:30 - CHAT 1980_4 8:30",
            "8 PRC C%sT"
        ],
        "Asia/Hebron": [
            "2:20:23 - LMT 1900_9 2:20:23",
            "2 Zion EET 1948_4_15 2",
            "2 EgyptAsia EE%sT 1967_5_5 3",
            "2 Zion I%sT 1996 2",
            "2 Jordan EE%sT 1999 2",
            "2 Palestine EE%sT"
        ],
        "Asia/Ho_Chi_Minh": [
            "7:6:40 - LMT 1906_5_9 7:6:40",
            "7:6:20 - SMT 1911_2_11_0_1 7:6:20",
            "7 - ICT 1912_4 7",
            "8 - ICT 1931_4 8",
            "7 - ICT"
        ],
        "Asia/Hong_Kong": [
            "7:36:42 - LMT 1904_9_30 7:36:42",
            "8 HK HK%sT 1941_11_25 8",
            "9 - JST 1945_8_15 9",
            "8 HK HK%sT"
        ],
        "Asia/Hovd": [
            "6:6:36 - LMT 1905_7 6:6:36",
            "6 - HOVT 1978 6",
            "7 Mongol HOV%sT"
        ],
        "Asia/Irkutsk": [
            "6:57:20 - LMT 1880 6:57:20",
            "6:57:20 - IMT 1920_0_25 6:57:20",
            "7 - IRKT 1930_5_21 7",
            "8 Russia IRK%sT 1991_2_31_2 8",
            "7 Russia IRK%sT 1992_0_19_2 7",
            "8 Russia IRK%sT 2011_2_27_2 8",
            "9 - IRKT"
        ],
        "Asia/Jakarta": [
            "7:7:12 - LMT 1867_7_10 7:7:12",
            "7:7:12 - JMT 1923_11_31_23_47_12 7:7:12",
            "7:20 - JAVT 1932_10 7:20",
            "7:30 - WIT 1942_2_23 7:30",
            "9 - JST 1945_8_23 9",
            "7:30 - WIT 1948_4 7:30",
            "8 - WIT 1950_4 8",
            "7:30 - WIT 1964 7:30",
            "7 - WIT"
        ],
        "Asia/Jayapura": [
            "9:22:48 - LMT 1932_10 9:22:48",
            "9 - EIT 1944_8_1 9",
            "9:30 - CST 1964 9:30",
            "9 - EIT"
        ],
        "Asia/Jerusalem": [
            "2:20:56 - LMT 1880 2:20:56",
            "2:20:40 - JMT 1918 2:20:40",
            "2 Zion I%sT"
        ],
        "Asia/Kabul": [
            "4:36:48 - LMT 1890 4:36:48",
            "4 - AFT 1945 4",
            "4:30 - AFT"
        ],
        "Asia/Kamchatka": [
            "10:34:36 - LMT 1922_10_10 10:34:36",
            "11 - PETT 1930_5_21 11",
            "12 Russia PET%sT 1991_2_31_2 12",
            "11 Russia PET%sT 1992_0_19_2 11",
            "12 Russia PET%sT 2010_2_28_2 12",
            "11 Russia PET%sT 2011_2_27_2 11",
            "12 - PETT"
        ],
        "Asia/Karachi": [
            "4:28:12 - LMT 1907 4:28:12",
            "5:30 - IST 1942_8 5:30",
            "6:30 - IST 1945_9_15 6:30",
            "5:30 - IST 1951_8_30 5:30",
            "5 - KART 1971_2_26 5",
            "5 Pakistan PK%sT"
        ],
        "Asia/Kashgar": [
            "5:3:56 - LMT 1928 5:3:56",
            "5:30 - KAST 1940 5:30",
            "5 - KAST 1980_4 5",
            "8 PRC C%sT"
        ],
        "Asia/Kathmandu": [
            "5:41:16 - LMT 1920 5:41:16",
            "5:30 - IST 1986 5:30",
            "5:45 - NPT"
        ],
        "Asia/Khandyga": [
            "9:2:13 - LMT 1919_11_15 9:2:13",
            "8 - YAKT 1930_5_21 8",
            "9 Russia YAK%sT 1991_2_31_2 9",
            "8 Russia YAK%sT 1992_0_19_2 8",
            "9 Russia YAK%sT 2004 9",
            "10 Russia VLA%sT 2011_2_27_2 10",
            "11 - VLAT 2011_8_13_0 11",
            "10 - YAKT"
        ],
        "Asia/Kolkata": [
            "5:53:28 - LMT 1880 5:53:28",
            "5:53:20 - HMT 1941_9 5:53:20",
            "6:30 - BURT 1942_4_15 6:30",
            "5:30 - IST 1942_8 5:30",
            "6:30 - IST 1945_9_15 6:30",
            "5:30 - IST"
        ],
        "Asia/Krasnoyarsk": [
            "6:11:20 - LMT 1920_0_6 6:11:20",
            "6 - KRAT 1930_5_21 6",
            "7 Russia KRA%sT 1991_2_31_2 7",
            "6 Russia KRA%sT 1992_0_19_2 6",
            "7 Russia KRA%sT 2011_2_27_2 7",
            "8 - KRAT"
        ],
        "Asia/Kuala_Lumpur": [
            "6:46:46 - LMT 1901_0_1 6:46:46",
            "6:55:25 - SMT 1905_5_1 6:55:25",
            "7 - MALT 1933_0_1 7",
            "7:20 - MALST 1936_0_1 7:20",
            "7:20 - MALT 1941_8_1 7:20",
            "7:30 - MALT 1942_1_16 7:30",
            "9 - JST 1945_8_12 9",
            "7:30 - MALT 1982_0_1 7:30",
            "8 - MYT"
        ],
        "Asia/Kuching": [
            "7:21:20 - LMT 1926_2 7:21:20",
            "7:30 - BORT 1933 7:30",
            "8 NBorneo BOR%sT 1942_1_16 8",
            "9 - JST 1945_8_12 9",
            "8 - BORT 1982_0_1 8",
            "8 - MYT"
        ],
        "Asia/Kuwait": [
            "3:11:56 - LMT 1950 3:11:56",
            "3 - AST"
        ],
        "Asia/Macau": [
            "7:34:20 - LMT 1912 7:34:20",
            "8 Macau MO%sT 1999_11_20 8",
            "8 PRC C%sT"
        ],
        "Asia/Magadan": [
            "10:3:12 - LMT 1924_4_2 10:3:12",
            "10 - MAGT 1930_5_21 10",
            "11 Russia MAG%sT 1991_2_31_2 11",
            "10 Russia MAG%sT 1992_0_19_2 10",
            "11 Russia MAG%sT 2011_2_27_2 11",
            "12 - MAGT"
        ],
        "Asia/Makassar": [
            "7:57:36 - LMT 1920 7:57:36",
            "7:57:36 - MMT 1932_10 7:57:36",
            "8 - CIT 1942_1_9 8",
            "9 - JST 1945_8_23 9",
            "8 - CIT"
        ],
        "Asia/Manila": [
            "-15:56 - LMT 1844_11_31 -15:56",
            "8:4 - LMT 1899_4_11 8:4",
            "8 Phil PH%sT 1942_4 8",
            "9 - JST 1944_10 9",
            "8 Phil PH%sT"
        ],
        "Asia/Muscat": [
            "3:54:24 - LMT 1920 3:54:24",
            "4 - GST"
        ],
        "Asia/Nicosia": [
            "2:13:28 - LMT 1921_10_14 2:13:28",
            "2 Cyprus EE%sT 1998_8 3",
            "2 EUAsia EE%sT"
        ],
        "Asia/Novokuznetsk": [
            "5:48:48 - NMT 1920_0_6 5:48:48",
            "6 - KRAT 1930_5_21 6",
            "7 Russia KRA%sT 1991_2_31_2 7",
            "6 Russia KRA%sT 1992_0_19_2 6",
            "7 Russia KRA%sT 2010_2_28_2 7",
            "6 Russia NOV%sT 2011_2_27_2 6",
            "7 - NOVT"
        ],
        "Asia/Novosibirsk": [
            "5:31:40 - LMT 1919_11_14_6 5:31:40",
            "6 - NOVT 1930_5_21 6",
            "7 Russia NOV%sT 1991_2_31_2 7",
            "6 Russia NOV%sT 1992_0_19_2 6",
            "7 Russia NOV%sT 1993_4_23 8",
            "6 Russia NOV%sT 2011_2_27_2 6",
            "7 - NOVT"
        ],
        "Asia/Omsk": [
            "4:53:36 - LMT 1919_10_14 4:53:36",
            "5 - OMST 1930_5_21 5",
            "6 Russia OMS%sT 1991_2_31_2 6",
            "5 Russia OMS%sT 1992_0_19_2 5",
            "6 Russia OMS%sT 2011_2_27_2 6",
            "7 - OMST"
        ],
        "Asia/Oral": [
            "3:25:24 - LMT 1924_4_2 3:25:24",
            "4 - URAT 1930_5_21 4",
            "5 - URAT 1981_3_1 5",
            "6 - URAST 1981_9_1 6",
            "6 - URAT 1982_3_1 6",
            "5 RussiaAsia URA%sT 1989_2_26_2 5",
            "4 RussiaAsia URA%sT 1991 4",
            "4 - URAT 1991_11_16 4",
            "4 RussiaAsia ORA%sT 2005_2_15 4",
            "5 - ORAT"
        ],
        "Asia/Phnom_Penh": [
            "6:59:40 - LMT 1906_5_9 6:59:40",
            "7:6:20 - SMT 1911_2_11_0_1 7:6:20",
            "7 - ICT 1912_4 7",
            "8 - ICT 1931_4 8",
            "7 - ICT"
        ],
        "Asia/Pontianak": [
            "7:17:20 - LMT 1908_4 7:17:20",
            "7:17:20 - PMT 1932_10 7:17:20",
            "7:30 - WIT 1942_0_29 7:30",
            "9 - JST 1945_8_23 9",
            "7:30 - WIT 1948_4 7:30",
            "8 - WIT 1950_4 8",
            "7:30 - WIT 1964 7:30",
            "8 - CIT 1988_0_1 8",
            "7 - WIT"
        ],
        "Asia/Pyongyang": [
            "8:23 - LMT 1890 8:23",
            "8:30 - KST 1904_11 8:30",
            "9 - KST 1928 9",
            "8:30 - KST 1932 8:30",
            "9 - KST 1954_2_21 9",
            "8 - KST 1961_7_10 8",
            "9 - KST"
        ],
        "Asia/Qatar": [
            "3:26:8 - LMT 1920 3:26:8",
            "4 - GST 1972_5 4",
            "3 - AST"
        ],
        "Asia/Qyzylorda": [
            "4:21:52 - LMT 1924_4_2 4:21:52",
            "4 - KIZT 1930_5_21 4",
            "5 - KIZT 1981_3_1 5",
            "6 - KIZST 1981_9_1 6",
            "6 - KIZT 1982_3_1 6",
            "5 RussiaAsia KIZ%sT 1991 5",
            "5 - KIZT 1991_11_16 5",
            "5 - QYZT 1992_0_19_2 5",
            "6 RussiaAsia QYZ%sT 2005_2_15 6",
            "6 - QYZT"
        ],
        "Asia/Rangoon": [
            "6:24:40 - LMT 1880 6:24:40",
            "6:24:40 - RMT 1920 6:24:40",
            "6:30 - BURT 1942_4 6:30",
            "9 - JST 1945_4_3 9",
            "6:30 - MMT"
        ],
        "Asia/Riyadh": [
            "3:6:52 - LMT 1950 3:6:52",
            "3 - AST"
        ],
        "Asia/Sakhalin": [
            "9:30:48 - LMT 1905_7_23 9:30:48",
            "9 - CJT 1938 9",
            "9 - JST 1945_7_25 9",
            "11 Russia SAK%sT 1991_2_31_2 11",
            "10 Russia SAK%sT 1992_0_19_2 10",
            "11 Russia SAK%sT 1997_2_30_2 11",
            "10 Russia SAK%sT 2011_2_27_2 10",
            "11 - SAKT"
        ],
        "Asia/Samarkand": [
            "4:27:12 - LMT 1924_4_2 4:27:12",
            "4 - SAMT 1930_5_21 4",
            "5 - SAMT 1981_3_1 5",
            "6 - SAMST 1981_9_1 6",
            "6 - TAST 1982_3_1 6",
            "5 RussiaAsia SAM%sT 1991_8_1 6",
            "5 RussiaAsia UZ%sT 1992 5",
            "5 - UZT"
        ],
        "Asia/Seoul": [
            "8:27:52 - LMT 1890 8:27:52",
            "8:30 - KST 1904_11 8:30",
            "9 - KST 1928 9",
            "8:30 - KST 1932 8:30",
            "9 - KST 1954_2_21 9",
            "8 ROK K%sT 1961_7_10 8",
            "8:30 - KST 1968_9 8:30",
            "9 ROK K%sT"
        ],
        "Asia/Shanghai": [
            "8:5:57 - LMT 1928 8:5:57",
            "8 Shang C%sT 1949 8",
            "8 PRC C%sT"
        ],
        "Asia/Singapore": [
            "6:55:25 - LMT 1901_0_1 6:55:25",
            "6:55:25 - SMT 1905_5_1 6:55:25",
            "7 - MALT 1933_0_1 7",
            "7:20 - MALST 1936_0_1 7:20",
            "7:20 - MALT 1941_8_1 7:20",
            "7:30 - MALT 1942_1_16 7:30",
            "9 - JST 1945_8_12 9",
            "7:30 - MALT 1965_7_9 7:30",
            "7:30 - SGT 1982_0_1 7:30",
            "8 - SGT"
        ],
        "Asia/Taipei": [
            "8:6 - LMT 1896 8:6",
            "8 Taiwan C%sT"
        ],
        "Asia/Tashkent": [
            "4:37:12 - LMT 1924_4_2 4:37:12",
            "5 - TAST 1930_5_21 5",
            "6 RussiaAsia TAS%sT 1991_2_31_2 6",
            "5 RussiaAsia TAS%sT 1991_8_1 6",
            "5 RussiaAsia UZ%sT 1992 5",
            "5 - UZT"
        ],
        "Asia/Tbilisi": [
            "2:59:16 - LMT 1880 2:59:16",
            "2:59:16 - TBMT 1924_4_2 2:59:16",
            "3 - TBIT 1957_2 3",
            "4 RussiaAsia TBI%sT 1991_2_31_2 4",
            "4 - TBIST 1991_3_9 4",
            "3 RussiaAsia GE%sT 1992 3",
            "3 E-EurAsia GE%sT 1994_8_25 4",
            "4 E-EurAsia GE%sT 1996_9_27 5",
            "5 - GEST 1997_2_30 5",
            "4 E-EurAsia GE%sT 2004_5_27 5",
            "3 RussiaAsia GE%sT 2005_2_27_2 3",
            "4 - GET"
        ],
        "Asia/Tehran": [
            "3:25:44 - LMT 1916 3:25:44",
            "3:25:44 - TMT 1946 3:25:44",
            "3:30 - IRST 1977_10 3:30",
            "4 Iran IR%sT 1979 4",
            "3:30 Iran IR%sT"
        ],
        "Asia/Thimphu": [
            "5:58:36 - LMT 1947_7_15 5:58:36",
            "5:30 - IST 1987_9 5:30",
            "6 - BTT"
        ],
        "Asia/Tokyo": [
            "9:18:59 - LMT 1887_11_31_15",
            "9 - JST 1896 9",
            "9 - CJT 1938 9",
            "9 Japan J%sT"
        ],
        "Asia/Ulaanbaatar": [
            "7:7:32 - LMT 1905_7 7:7:32",
            "7 - ULAT 1978 7",
            "8 Mongol ULA%sT"
        ],
        "Asia/Urumqi": [
            "5:50:20 - LMT 1928 5:50:20",
            "6 - URUT 1980_4 6",
            "8 PRC C%sT"
        ],
        "Asia/Ust-Nera": [
            "9:32:54 - LMT 1919_11_15 9:32:54",
            "8 - YAKT 1930_5_21 8",
            "9 Russia YAKT 1981_3_1 9",
            "11 Russia MAG%sT 1991_2_31_2 11",
            "10 Russia MAG%sT 1992_0_19_2 10",
            "11 Russia MAG%sT 2011_2_27_2 11",
            "12 - MAGT 2011_8_13_0 12",
            "11 - VLAT"
        ],
        "Asia/Vientiane": [
            "6:50:24 - LMT 1906_5_9 6:50:24",
            "7:6:20 - SMT 1911_2_11_0_1 7:6:20",
            "7 - ICT 1912_4 7",
            "8 - ICT 1931_4 8",
            "7 - ICT"
        ],
        "Asia/Vladivostok": [
            "8:47:44 - LMT 1922_10_15 8:47:44",
            "9 - VLAT 1930_5_21 9",
            "10 Russia VLA%sT 1991_2_31_2 10",
            "9 Russia VLA%sST 1992_0_19_2 9",
            "10 Russia VLA%sT 2011_2_27_2 10",
            "11 - VLAT"
        ],
        "Asia/Yakutsk": [
            "8:38:40 - LMT 1919_11_15 8:38:40",
            "8 - YAKT 1930_5_21 8",
            "9 Russia YAK%sT 1991_2_31_2 9",
            "8 Russia YAK%sT 1992_0_19_2 8",
            "9 Russia YAK%sT 2011_2_27_2 9",
            "10 - YAKT"
        ],
        "Asia/Yekaterinburg": [
            "4:2:24 - LMT 1919_6_15_4 4:2:24",
            "4 - SVET 1930_5_21 4",
            "5 Russia SVE%sT 1991_2_31_2 5",
            "4 Russia SVE%sT 1992_0_19_2 4",
            "5 Russia YEK%sT 2011_2_27_2 5",
            "6 - YEKT"
        ],
        "Asia/Yerevan": [
            "2:58 - LMT 1924_4_2 2:58",
            "3 - YERT 1957_2 3",
            "4 RussiaAsia YER%sT 1991_2_31_2 4",
            "4 - YERST 1991_8_23 4",
            "3 RussiaAsia AM%sT 1995_8_24_2 3",
            "4 - AMT 1997 4",
            "4 RussiaAsia AM%sT 2012_2_25_2 4",
            "4 - AMT"
        ],
        "Atlantic/Azores": [
            "-1:42:40 - LMT 1884 -1:42:40",
            "-1:54:32 - HMT 1911_4_24 -1:54:32",
            "-2 Port AZO%sT 1966_3_3_2 -2",
            "-1 Port AZO%sT 1983_8_25_1 -1",
            "-1 W-Eur AZO%sT 1992_8_27_1 -1",
            "0 EU WE%sT 1993_2_28_1",
            "-1 EU AZO%sT"
        ],
        "Atlantic/Bermuda": [
            "-4:19:18 - LMT 1930_0_1_2 -4:19:18",
            "-4 - AST 1974_3_28_2 -4",
            "-4 Bahamas A%sT 1976 -4",
            "-4 US A%sT"
        ],
        "Atlantic/Canary": [
            "-1:1:36 - LMT 1922_2 -1:1:36",
            "-1 - CANT 1946_8_30_1 -1",
            "0 - WET 1980_3_6_0",
            "1 - WEST 1980_8_28_0",
            "0 EU WE%sT"
        ],
        "Atlantic/Cape_Verde": [
            "-1:34:4 - LMT 1907 -1:34:4",
            "-2 - CVT 1942_8 -2",
            "-1 - CVST 1945_9_15 -1",
            "-2 - CVT 1975_10_25_2 -2",
            "-1 - CVT"
        ],
        "Atlantic/Faroe": [
            "-0:27:4 - LMT 1908_0_11 -0:27:4",
            "0 - WET 1981",
            "0 EU WE%sT"
        ],
        "Atlantic/Madeira": [
            "-1:7:36 - LMT 1884 -1:7:36",
            "-1:7:36 - FMT 1911_4_24 -1:7:36",
            "-1 Port MAD%sT 1966_3_3_2 -1",
            "0 Port WE%sT 1983_8_25_1",
            "0 EU WE%sT"
        ],
        "Atlantic/Reykjavik": [
            "-1:27:24 - LMT 1837 -1:27:24",
            "-1:27:48 - RMT 1908 -1:27:48",
            "-1 Iceland IS%sT 1968_3_7_1 -1",
            "0 - GMT"
        ],
        "Atlantic/South_Georgia": [
            "-2:26:8 - LMT 1890 -2:26:8",
            "-2 - GST"
        ],
        "Atlantic/St_Helena": [
            "-0:22:48 - LMT 1890 -0:22:48",
            "-0:22:48 - JMT 1951 -0:22:48",
            "0 - GMT"
        ],
        "Atlantic/Stanley": [
            "-3:51:24 - LMT 1890 -3:51:24",
            "-3:51:24 - SMT 1912_2_12 -3:51:24",
            "-4 Falk FK%sT 1983_4 -4",
            "-3 Falk FK%sT 1985_8_15 -3",
            "-4 Falk FK%sT 2010_8_5_02 -4",
            "-3 - FKST"
        ],
        "Australia/Adelaide": [
            "9:14:20 - LMT 1895_1 9:14:20",
            "9 - CST 1899_4 9",
            "9:30 Aus CST 1971 9:30",
            "9:30 AS CST"
        ],
        "Australia/Brisbane": [
            "10:12:8 - LMT 1895 10:12:8",
            "10 Aus EST 1971 10",
            "10 AQ EST"
        ],
        "Australia/Broken_Hill": [
            "9:25:48 - LMT 1895_1 9:25:48",
            "10 - EST 1896_7_23 10",
            "9 - CST 1899_4 9",
            "9:30 Aus CST 1971 9:30",
            "9:30 AN CST 2000 10:30",
            "9:30 AS CST"
        ],
        "Australia/Currie": [
            "9:35:28 - LMT 1895_8 9:35:28",
            "10 - EST 1916_9_1_2 10",
            "11 - EST 1917_1 11",
            "10 Aus EST 1971_6 10",
            "10 AT EST"
        ],
        "Australia/Darwin": [
            "8:43:20 - LMT 1895_1 8:43:20",
            "9 - CST 1899_4 9",
            "9:30 Aus CST"
        ],
        "Australia/Eucla": [
            "8:35:28 - LMT 1895_11 8:35:28",
            "8:45 Aus CWST 1943_6 8:45",
            "8:45 AW CWST"
        ],
        "Australia/Hobart": [
            "9:49:16 - LMT 1895_8 9:49:16",
            "10 - EST 1916_9_1_2 10",
            "11 - EST 1917_1 11",
            "10 Aus EST 1967 10",
            "10 AT EST"
        ],
        "Australia/Lindeman": [
            "9:55:56 - LMT 1895 9:55:56",
            "10 Aus EST 1971 10",
            "10 AQ EST 1992_6 10",
            "10 Holiday EST"
        ],
        "Australia/Lord_Howe": [
            "10:36:20 - LMT 1895_1 10:36:20",
            "10 - EST 1981_2 10",
            "10:30 LH LHST"
        ],
        "Australia/Melbourne": [
            "9:39:52 - LMT 1895_1 9:39:52",
            "10 Aus EST 1971 10",
            "10 AV EST"
        ],
        "Australia/Perth": [
            "7:43:24 - LMT 1895_11 7:43:24",
            "8 Aus WST 1943_6 8",
            "8 AW WST"
        ],
        "Australia/Sydney": [
            "10:4:52 - LMT 1895_1 10:4:52",
            "10 Aus EST 1971 10",
            "10 AN EST"
        ],
        "CET": [
            "1 C-Eur CE%sT"
        ],
        "CST6CDT": [
            "-6 US C%sT"
        ],
        "EET": [
            "2 EU EE%sT"
        ],
        "EST": [
            "-5 - EST"
        ],
        "EST5EDT": [
            "-5 US E%sT"
        ],
        "HST": [
            "-10 - HST"
        ],
        "MET": [
            "1 C-Eur ME%sT"
        ],
        "MST": [
            "-7 - MST"
        ],
        "MST7MDT": [
            "-7 US M%sT"
        ],
        "PST8PDT": [
            "-8 US P%sT"
        ],
        "WET": [
            "0 EU WE%sT"
        ],
        "Europe/Amsterdam": [
            "0:19:32 - LMT 1835 0:19:32",
            "0:19:32 Neth %s 1937_6_1 1:19:32",
            "0:20 Neth NE%sT 1940_4_16_0 0:20",
            "1 C-Eur CE%sT 1945_3_2_2 1",
            "1 Neth CE%sT 1977 1",
            "1 EU CE%sT"
        ],
        "Europe/Andorra": [
            "0:6:4 - LMT 1901 0:6:4",
            "0 - WET 1946_8_30",
            "1 - CET 1985_2_31_2 1",
            "1 EU CE%sT"
        ],
        "Europe/Athens": [
            "1:34:52 - LMT 1895_8_14 1:34:52",
            "1:34:52 - AMT 1916_6_28_0_1 1:34:52",
            "2 Greece EE%sT 1941_3_30 3",
            "1 Greece CE%sT 1944_3_4 1",
            "2 Greece EE%sT 1981 2",
            "2 EU EE%sT"
        ],
        "Europe/Belgrade": [
            "1:22 - LMT 1884 1:22",
            "1 - CET 1941_3_18_23 1",
            "1 C-Eur CE%sT 1945 1",
            "1 - CET 1945_4_8_2 1",
            "2 - CEST 1945_8_16_2 1",
            "1 - CET 1982_10_27 1",
            "1 EU CE%sT"
        ],
        "Europe/Berlin": [
            "0:53:28 - LMT 1893_3 0:53:28",
            "1 C-Eur CE%sT 1945_4_24_2 2",
            "1 SovietZone CE%sT 1946 1",
            "1 Germany CE%sT 1980 1",
            "1 EU CE%sT"
        ],
        "Europe/Prague": [
            "0:57:44 - LMT 1850 0:57:44",
            "0:57:44 - PMT 1891_9 0:57:44",
            "1 C-Eur CE%sT 1944_8_17_2 1",
            "1 Czech CE%sT 1979 1",
            "1 EU CE%sT"
        ],
        "Europe/Brussels": [
            "0:17:30 - LMT 1880 0:17:30",
            "0:17:30 - BMT 1892_4_1_12 0:17:30",
            "0 - WET 1914_10_8",
            "1 - CET 1916_4_1_0 1",
            "1 C-Eur CE%sT 1918_10_11_11",
            "0 Belgium WE%sT 1940_4_20_2",
            "1 C-Eur CE%sT 1944_8_3 2",
            "1 Belgium CE%sT 1977 1",
            "1 EU CE%sT"
        ],
        "Europe/Bucharest": [
            "1:44:24 - LMT 1891_9 1:44:24",
            "1:44:24 - BMT 1931_6_24 1:44:24",
            "2 Romania EE%sT 1981_2_29_2 2",
            "2 C-Eur EE%sT 1991 2",
            "2 Romania EE%sT 1994 2",
            "2 E-Eur EE%sT 1997 2",
            "2 EU EE%sT"
        ],
        "Europe/Budapest": [
            "1:16:20 - LMT 1890_9 1:16:20",
            "1 C-Eur CE%sT 1918 1",
            "1 Hungary CE%sT 1941_3_6_2 1",
            "1 C-Eur CE%sT 1945 1",
            "1 Hungary CE%sT 1980_8_28_2 1",
            "1 EU CE%sT"
        ],
        "Europe/Zurich": [
            "0:34:8 - LMT 1848_8_12 0:34:8",
            "0:29:44 - BMT 1894_5 0:29:44",
            "1 Swiss CE%sT 1981 1",
            "1 EU CE%sT"
        ],
        "Europe/Chisinau": [
            "1:55:20 - LMT 1880 1:55:20",
            "1:55 - CMT 1918_1_15 1:55",
            "1:44:24 - BMT 1931_6_24 1:44:24",
            "2 Romania EE%sT 1940_7_15 2",
            "3 - EEST 1941_6_17 3",
            "1 C-Eur CE%sT 1944_7_24 2",
            "3 Russia MSK/MSD 1990 3",
            "3 - MSK 1990_4_6 3",
            "2 - EET 1991 2",
            "2 Russia EE%sT 1992 2",
            "2 E-Eur EE%sT 1997 2",
            "2 EU EE%sT"
        ],
        "Europe/Copenhagen": [
            "0:50:20 - LMT 1890 0:50:20",
            "0:50:20 - CMT 1894_0_1 0:50:20",
            "1 Denmark CE%sT 1942_10_2_2 1",
            "1 C-Eur CE%sT 1945_3_2_2 1",
            "1 Denmark CE%sT 1980 1",
            "1 EU CE%sT"
        ],
        "Europe/Dublin": [
            "-0:25 - LMT 1880_7_2 -0:25",
            "-0:25:21 - DMT 1916_4_21_2 -0:25:21",
            "0:34:39 - IST 1916_9_1_2 -0:25:21",
            "0 GB-Eire %s 1921_11_6",
            "0 GB-Eire GMT/IST 1940_1_25_2",
            "1 - IST 1946_9_6_2 1",
            "0 - GMT 1947_2_16_2",
            "1 - IST 1947_10_2_2 1",
            "0 - GMT 1948_3_18_2",
            "0 GB-Eire GMT/IST 1968_9_27 1",
            "1 - IST 1971_9_31_2",
            "0 GB-Eire GMT/IST 1996",
            "0 EU GMT/IST"
        ],
        "Europe/Gibraltar": [
            "-0:21:24 - LMT 1880_7_2_0 -0:21:24",
            "0 GB-Eire %s 1957_3_14_2",
            "1 - CET 1982 1",
            "1 EU CE%sT"
        ],
        "Europe/London": [
            "-0:1:15 - LMT 1847_11_1_0 -0:1:15",
            "0 GB-Eire %s 1968_9_27 1",
            "1 - BST 1971_9_31_2",
            "0 GB-Eire %s 1996",
            "0 EU GMT/BST"
        ],
        "Europe/Helsinki": [
            "1:39:52 - LMT 1878_4_31 1:39:52",
            "1:39:52 - HMT 1921_4 1:39:52",
            "2 Finland EE%sT 1983 2",
            "2 EU EE%sT"
        ],
        "Europe/Istanbul": [
            "1:55:52 - LMT 1880 1:55:52",
            "1:56:56 - IMT 1910_9 1:56:56",
            "2 Turkey EE%sT 1978_9_15 3",
            "3 Turkey TR%sT 1985_3_20 3",
            "2 Turkey EE%sT 2007 2",
            "2 EU EE%sT 2011_2_27_1",
            "2 - EET 2011_2_28_1",
            "2 EU EE%sT"
        ],
        "Europe/Kaliningrad": [
            "1:22 - LMT 1893_3 1:22",
            "1 C-Eur CE%sT 1945 1",
            "2 Poland CE%sT 1946 2",
            "3 Russia MSK/MSD 1991_2_31_2 3",
            "2 Russia EE%sT 2011_2_27_2 2",
            "3 - FET"
        ],
        "Europe/Kiev": [
            "2:2:4 - LMT 1880 2:2:4",
            "2:2:4 - KMT 1924_4_2 2:2:4",
            "2 - EET 1930_5_21 2",
            "3 - MSK 1941_8_20 3",
            "1 C-Eur CE%sT 1943_10_6 1",
            "3 Russia MSK/MSD 1990 3",
            "3 - MSK 1990_6_1_2 3",
            "2 - EET 1992 2",
            "2 E-Eur EE%sT 1995 2",
            "2 EU EE%sT"
        ],
        "Europe/Lisbon": [
            "-0:36:32 - LMT 1884 -0:36:32",
            "-0:36:32 - LMT 1912_0_1 -0:36:32",
            "0 Port WE%sT 1966_3_3_2",
            "1 - CET 1976_8_26_1 1",
            "0 Port WE%sT 1983_8_25_1",
            "0 W-Eur WE%sT 1992_8_27_1",
            "1 EU CE%sT 1996_2_31_1",
            "0 EU WE%sT"
        ],
        "Europe/Luxembourg": [
            "0:24:36 - LMT 1904_5 0:24:36",
            "1 Lux CE%sT 1918_10_25 1",
            "0 Lux WE%sT 1929_9_6_2",
            "0 Belgium WE%sT 1940_4_14_3 1",
            "1 C-Eur WE%sT 1944_8_18_3 2",
            "1 Belgium CE%sT 1977 1",
            "1 EU CE%sT"
        ],
        "Europe/Madrid": [
            "-0:14:44 - LMT 1901_0_1_0 -0:14:44",
            "0 Spain WE%sT 1946_8_30 2",
            "1 Spain CE%sT 1979 1",
            "1 EU CE%sT"
        ],
        "Europe/Malta": [
            "0:58:4 - LMT 1893_10_2_0 0:58:4",
            "1 Italy CE%sT 1942_10_2_2 1",
            "1 C-Eur CE%sT 1945_3_2_2 1",
            "1 Italy CE%sT 1973_2_31 1",
            "1 Malta CE%sT 1981 1",
            "1 EU CE%sT"
        ],
        "Europe/Minsk": [
            "1:50:16 - LMT 1880 1:50:16",
            "1:50 - MMT 1924_4_2 1:50",
            "2 - EET 1930_5_21 2",
            "3 - MSK 1941_5_28 3",
            "1 C-Eur CE%sT 1944_6_3 2",
            "3 Russia MSK/MSD 1990 3",
            "3 - MSK 1991_2_31_2 3",
            "3 - EEST 1991_8_29_2 2",
            "2 - EET 1992_2_29_0 2",
            "3 - EEST 1992_8_27_0 2",
            "2 Russia EE%sT 2011_2_27_2 2",
            "3 - FET"
        ],
        "Europe/Monaco": [
            "0:29:32 - LMT 1891_2_15 0:29:32",
            "0:9:21 - PMT 1911_2_11 0:9:21",
            "0 France WE%sT 1945_8_16_3 2",
            "1 France CE%sT 1977 1",
            "1 EU CE%sT"
        ],
        "Europe/Moscow": [
            "2:30:20 - LMT 1880 2:30:20",
            "2:30 - MMT 1916_6_3 2:30",
            "2:30:48 Russia %s 1919_6_1_2 4:30:48",
            "3 Russia MSK/MSD 1922_9 3",
            "2 - EET 1930_5_21 2",
            "3 Russia MSK/MSD 1991_2_31_2 3",
            "2 Russia EE%sT 1992_0_19_2 2",
            "3 Russia MSK/MSD 2011_2_27_2 3",
            "4 - MSK"
        ],
        "Europe/Paris": [
            "0:9:21 - LMT 1891_2_15_0_1 0:9:21",
            "0:9:21 - PMT 1911_2_11_0_1 0:9:21",
            "0 France WE%sT 1940_5_14_23 1",
            "1 C-Eur CE%sT 1944_7_25 2",
            "0 France WE%sT 1945_8_16_3 2",
            "1 France CE%sT 1977 1",
            "1 EU CE%sT"
        ],
        "Europe/Riga": [
            "1:36:24 - LMT 1880 1:36:24",
            "1:36:24 - RMT 1918_3_15_2 1:36:24",
            "2:36:24 - LST 1918_8_16_3 2:36:24",
            "1:36:24 - RMT 1919_3_1_2 1:36:24",
            "2:36:24 - LST 1919_4_22_3 2:36:24",
            "1:36:24 - RMT 1926_4_11 1:36:24",
            "2 - EET 1940_7_5 2",
            "3 - MSK 1941_6 3",
            "1 C-Eur CE%sT 1944_9_13 1",
            "3 Russia MSK/MSD 1989_2_26_2 3",
            "3 - EEST 1989_8_24_2 2",
            "2 Latvia EE%sT 1997_0_21 2",
            "2 EU EE%sT 2000_1_29 2",
            "2 - EET 2001_0_2 2",
            "2 EU EE%sT"
        ],
        "Europe/Rome": [
            "0:49:56 - LMT 1866_8_22 0:49:56",
            "0:49:56 - RMT 1893_10_1_0 0:49:56",
            "1 Italy CE%sT 1942_10_2_2 1",
            "1 C-Eur CE%sT 1944_6 2",
            "1 Italy CE%sT 1980 1",
            "1 EU CE%sT"
        ],
        "Europe/Samara": [
            "3:20:36 - LMT 1919_6_1_2 3:20:36",
            "3 - SAMT 1930_5_21 3",
            "4 - SAMT 1935_0_27 4",
            "4 Russia KUY%sT 1989_2_26_2 4",
            "3 Russia KUY%sT 1991_2_31_2 3",
            "2 Russia KUY%sT 1991_8_29_2 2",
            "3 - KUYT 1991_9_20_3 3",
            "4 Russia SAM%sT 2010_2_28_2 4",
            "3 Russia SAM%sT 2011_2_27_2 3",
            "4 - SAMT"
        ],
        "Europe/Simferopol": [
            "2:16:24 - LMT 1880 2:16:24",
            "2:16 - SMT 1924_4_2 2:16",
            "2 - EET 1930_5_21 2",
            "3 - MSK 1941_10 3",
            "1 C-Eur CE%sT 1944_3_13 2",
            "3 Russia MSK/MSD 1990 3",
            "3 - MSK 1990_6_1_2 3",
            "2 - EET 1992 2",
            "2 E-Eur EE%sT 1994_4 3",
            "3 E-Eur MSK/MSD 1996_2_31_3 3",
            "4 - MSD 1996_9_27_3 3",
            "3 Russia MSK/MSD 1997 3",
            "3 - MSK 1997_2_30_1",
            "2 EU EE%sT"
        ],
        "Europe/Sofia": [
            "1:33:16 - LMT 1880 1:33:16",
            "1:56:56 - IMT 1894_10_30 1:56:56",
            "2 - EET 1942_10_2_3 2",
            "1 C-Eur CE%sT 1945 1",
            "1 - CET 1945_3_2_3 1",
            "2 - EET 1979_2_31_23 2",
            "2 Bulg EE%sT 1982_8_26_2 3",
            "2 C-Eur EE%sT 1991 2",
            "2 E-Eur EE%sT 1997 2",
            "2 EU EE%sT"
        ],
        "Europe/Stockholm": [
            "1:12:12 - LMT 1879_0_1 1:12:12",
            "1:0:14 - SET 1900_0_1 1:0:14",
            "1 - CET 1916_4_14_23 1",
            "2 - CEST 1916_9_1_01 2",
            "1 - CET 1980 1",
            "1 EU CE%sT"
        ],
        "Europe/Tallinn": [
            "1:39 - LMT 1880 1:39",
            "1:39 - TMT 1918_1 1:39",
            "1 C-Eur CE%sT 1919_6 1",
            "1:39 - TMT 1921_4 1:39",
            "2 - EET 1940_7_6 2",
            "3 - MSK 1941_8_15 3",
            "1 C-Eur CE%sT 1944_8_22 2",
            "3 Russia MSK/MSD 1989_2_26_2 3",
            "3 - EEST 1989_8_24_2 2",
            "2 C-Eur EE%sT 1998_8_22 3",
            "2 EU EE%sT 1999_10_1 3",
            "2 - EET 2002_1_21 2",
            "2 EU EE%sT"
        ],
        "Europe/Tirane": [
            "1:19:20 - LMT 1914 1:19:20",
            "1 - CET 1940_5_16 1",
            "1 Albania CE%sT 1984_6 2",
            "1 EU CE%sT"
        ],
        "Europe/Uzhgorod": [
            "1:29:12 - LMT 1890_9 1:29:12",
            "1 - CET 1940 1",
            "1 C-Eur CE%sT 1944_9 2",
            "2 - CEST 1944_9_26 2",
            "1 - CET 1945_5_29 1",
            "3 Russia MSK/MSD 1990 3",
            "3 - MSK 1990_6_1_2 3",
            "1 - CET 1991_2_31_3 1",
            "2 - EET 1992 2",
            "2 E-Eur EE%sT 1995 2",
            "2 EU EE%sT"
        ],
        "Europe/Vaduz": [
            "0:38:4 - LMT 1894_5 0:38:4",
            "1 - CET 1981 1",
            "1 EU CE%sT"
        ],
        "Europe/Vienna": [
            "1:5:21 - LMT 1893_3 1:5:21",
            "1 C-Eur CE%sT 1920 1",
            "1 Austria CE%sT 1940_3_1_2 1",
            "1 C-Eur CE%sT 1945_3_2_2 1",
            "2 - CEST 1945_3_12_2 1",
            "1 - CET 1946 1",
            "1 Austria CE%sT 1981 1",
            "1 EU CE%sT"
        ],
        "Europe/Vilnius": [
            "1:41:16 - LMT 1880 1:41:16",
            "1:24 - WMT 1917 1:24",
            "1:35:36 - KMT 1919_9_10 1:35:36",
            "1 - CET 1920_6_12 1",
            "2 - EET 1920_9_9 2",
            "1 - CET 1940_7_3 1",
            "3 - MSK 1941_5_24 3",
            "1 C-Eur CE%sT 1944_7 2",
            "3 Russia MSK/MSD 1991_2_31_2 3",
            "3 - EEST 1991_8_29_2 2",
            "2 C-Eur EE%sT 1998 2",
            "2 - EET 1998_2_29_1",
            "1 EU CE%sT 1999_9_31_1",
            "2 - EET 2003_0_1 2",
            "2 EU EE%sT"
        ],
        "Europe/Volgograd": [
            "2:57:40 - LMT 1920_0_3 2:57:40",
            "3 - TSAT 1925_3_6 3",
            "3 - STAT 1930_5_21 3",
            "4 - STAT 1961_10_11 4",
            "4 Russia VOL%sT 1989_2_26_2 4",
            "3 Russia VOL%sT 1991_2_31_2 3",
            "4 - VOLT 1992_2_29_2 4",
            "3 Russia VOL%sT 2011_2_27_2 3",
            "4 - VOLT"
        ],
        "Europe/Warsaw": [
            "1:24 - LMT 1880 1:24",
            "1:24 - WMT 1915_7_5 1:24",
            "1 C-Eur CE%sT 1918_8_16_3 2",
            "2 Poland EE%sT 1922_5 2",
            "1 Poland CE%sT 1940_5_23_2 1",
            "1 C-Eur CE%sT 1944_9 2",
            "1 Poland CE%sT 1977 1",
            "1 W-Eur CE%sT 1988 1",
            "1 EU CE%sT"
        ],
        "Europe/Zaporozhye": [
            "2:20:40 - LMT 1880 2:20:40",
            "2:20 - CUT 1924_4_2 2:20",
            "2 - EET 1930_5_21 2",
            "3 - MSK 1941_7_25 3",
            "1 C-Eur CE%sT 1943_9_25 1",
            "3 Russia MSK/MSD 1991_2_31_2 3",
            "2 E-Eur EE%sT 1995 2",
            "2 EU EE%sT"
        ],
        "Indian/Antananarivo": [
            "3:10:4 - LMT 1911_6 3:10:4",
            "3 - EAT 1954_1_27_23 3",
            "4 - EAST 1954_4_29_23 3",
            "3 - EAT"
        ],
        "Indian/Chagos": [
            "4:49:40 - LMT 1907 4:49:40",
            "5 - IOT 1996 5",
            "6 - IOT"
        ],
        "Indian/Christmas": [
            "7:2:52 - LMT 1895_1 7:2:52",
            "7 - CXT"
        ],
        "Indian/Cocos": [
            "6:27:40 - LMT 1900 6:27:40",
            "6:30 - CCT"
        ],
        "Indian/Comoro": [
            "2:53:4 - LMT 1911_6 2:53:4",
            "3 - EAT"
        ],
        "Indian/Kerguelen": [
            "0 - zzz 1950",
            "5 - TFT"
        ],
        "Indian/Mahe": [
            "3:41:48 - LMT 1906_5 3:41:48",
            "4 - SCT"
        ],
        "Indian/Maldives": [
            "4:54 - LMT 1880 4:54",
            "4:54 - MMT 1960 4:54",
            "5 - MVT"
        ],
        "Indian/Mauritius": [
            "3:50 - LMT 1907 3:50",
            "4 Mauritius MU%sT"
        ],
        "Indian/Mayotte": [
            "3:0:56 - LMT 1911_6 3:0:56",
            "3 - EAT"
        ],
        "Indian/Reunion": [
            "3:41:52 - LMT 1911_5 3:41:52",
            "4 - RET"
        ],
        "Pacific/Apia": [
            "12:33:4 - LMT 1879_6_5 12:33:4",
            "-11:26:56 - LMT 1911 -11:26:56",
            "-11:30 - SAMT 1950 -11:30",
            "-11 - WST 2010_8_26 -11",
            "-10 - WSDT 2011_3_2_4 -10",
            "-11 - WST 2011_8_24_3 -11",
            "-10 - WSDT 2011_11_30 -10",
            "14 - WSDT 2012_3_1_4 14",
            "13 WS WS%sT"
        ],
        "Pacific/Auckland": [
            "11:39:4 - LMT 1868_10_2 11:39:4",
            "11:30 NZ NZ%sT 1946_0_1 12",
            "12 NZ NZ%sT"
        ],
        "Pacific/Chatham": [
            "12:13:48 - LMT 1957_0_1 12:13:48",
            "12:45 Chatham CHA%sT"
        ],
        "Pacific/Chuuk": [
            "10:7:8 - LMT 1901 10:7:8",
            "10 - CHUT"
        ],
        "Pacific/Easter": [
            "-7:17:44 - LMT 1890 -7:17:44",
            "-7:17:28 - EMT 1932_8 -7:17:28",
            "-7 Chile EAS%sT 1982_2_13_21 -6",
            "-6 Chile EAS%sT"
        ],
        "Pacific/Efate": [
            "11:13:16 - LMT 1912_0_13 11:13:16",
            "11 Vanuatu VU%sT"
        ],
        "Pacific/Enderbury": [
            "-11:24:20 - LMT 1901 -11:24:20",
            "-12 - PHOT 1979_9 -12",
            "-11 - PHOT 1995 -11",
            "13 - PHOT"
        ],
        "Pacific/Fakaofo": [
            "-11:24:56 - LMT 1901 -11:24:56",
            "-11 - TKT 2011_11_30 -11",
            "13 - TKT"
        ],
        "Pacific/Fiji": [
            "11:55:44 - LMT 1915_9_26 11:55:44",
            "12 Fiji FJ%sT"
        ],
        "Pacific/Funafuti": [
            "11:56:52 - LMT 1901 11:56:52",
            "12 - TVT"
        ],
        "Pacific/Galapagos": [
            "-5:58:24 - LMT 1931 -5:58:24",
            "-5 - ECT 1986 -5",
            "-6 - GALT"
        ],
        "Pacific/Gambier": [
            "-8:59:48 - LMT 1912_9 -8:59:48",
            "-9 - GAMT"
        ],
        "Pacific/Guadalcanal": [
            "10:39:48 - LMT 1912_9 10:39:48",
            "11 - SBT"
        ],
        "Pacific/Guam": [
            "-14:21 - LMT 1844_11_31 -14:21",
            "9:39 - LMT 1901 9:39",
            "10 - GST 2000_11_23 10",
            "10 - ChST"
        ],
        "Pacific/Honolulu": [
            "-10:31:26 - LMT 1896_0_13_12 -10:31:26",
            "-10:30 - HST 1933_3_30_2 -10:30",
            "-9:30 - HDT 1933_4_21_12 -9:30",
            "-10:30 - HST 1942_1_09_2 -10:30",
            "-9:30 - HDT 1945_8_30_2 -9:30",
            "-10:30 - HST 1947_5_8_2 -10:30",
            "-10 - HST"
        ],
        "Pacific/Johnston": [
            "-10 - HST"
        ],
        "Pacific/Kiritimati": [
            "-10:29:20 - LMT 1901 -10:29:20",
            "-10:40 - LINT 1979_9 -10:40",
            "-10 - LINT 1995 -10",
            "14 - LINT"
        ],
        "Pacific/Kosrae": [
            "10:51:56 - LMT 1901 10:51:56",
            "11 - KOST 1969_9 11",
            "12 - KOST 1999 12",
            "11 - KOST"
        ],
        "Pacific/Kwajalein": [
            "11:9:20 - LMT 1901 11:9:20",
            "11 - MHT 1969_9 11",
            "-12 - KWAT 1993_7_20 -12",
            "12 - MHT"
        ],
        "Pacific/Majuro": [
            "11:24:48 - LMT 1901 11:24:48",
            "11 - MHT 1969_9 11",
            "12 - MHT"
        ],
        "Pacific/Marquesas": [
            "-9:18 - LMT 1912_9 -9:18",
            "-9:30 - MART"
        ],
        "Pacific/Midway": [
            "-11:49:28 - LMT 1901 -11:49:28",
            "-11 - NST 1956_5_3 -11",
            "-10 - NDT 1956_8_2 -10",
            "-11 - NST 1967_3 -11",
            "-11 - BST 1983_10_30 -11",
            "-11 - SST"
        ],
        "Pacific/Nauru": [
            "11:7:40 - LMT 1921_0_15 11:7:40",
            "11:30 - NRT 1942_2_15 11:30",
            "9 - JST 1944_7_15 9",
            "11:30 - NRT 1979_4 11:30",
            "12 - NRT"
        ],
        "Pacific/Niue": [
            "-11:19:40 - LMT 1901 -11:19:40",
            "-11:20 - NUT 1951 -11:20",
            "-11:30 - NUT 1978_9_1 -11:30",
            "-11 - NUT"
        ],
        "Pacific/Norfolk": [
            "11:11:52 - LMT 1901 11:11:52",
            "11:12 - NMT 1951 11:12",
            "11:30 - NFT"
        ],
        "Pacific/Noumea": [
            "11:5:48 - LMT 1912_0_13 11:5:48",
            "11 NC NC%sT"
        ],
        "Pacific/Pago_Pago": [
            "12:37:12 - LMT 1879_6_5 12:37:12",
            "-11:22:48 - LMT 1911 -11:22:48",
            "-11:30 - SAMT 1950 -11:30",
            "-11 - NST 1967_3 -11",
            "-11 - BST 1983_10_30 -11",
            "-11 - SST"
        ],
        "Pacific/Palau": [
            "8:57:56 - LMT 1901 8:57:56",
            "9 - PWT"
        ],
        "Pacific/Pitcairn": [
            "-8:40:20 - LMT 1901 -8:40:20",
            "-8:30 - PNT 1998_3_27_00 -8:30",
            "-8 - PST"
        ],
        "Pacific/Pohnpei": [
            "10:32:52 - LMT 1901 10:32:52",
            "11 - PONT"
        ],
        "Pacific/Port_Moresby": [
            "9:48:40 - LMT 1880 9:48:40",
            "9:48:32 - PMMT 1895 9:48:32",
            "10 - PGT"
        ],
        "Pacific/Rarotonga": [
            "-10:39:4 - LMT 1901 -10:39:4",
            "-10:30 - CKT 1978_10_12 -10:30",
            "-10 Cook CK%sT"
        ],
        "Pacific/Saipan": [
            "-14:17 - LMT 1844_11_31 -14:17",
            "9:43 - LMT 1901 9:43",
            "9 - MPT 1969_9 9",
            "10 - MPT 2000_11_23 10",
            "10 - ChST"
        ],
        "Pacific/Tahiti": [
            "-9:58:16 - LMT 1912_9 -9:58:16",
            "-10 - TAHT"
        ],
        "Pacific/Tarawa": [
            "11:32:4 - LMT 1901 11:32:4",
            "12 - GILT"
        ],
        "Pacific/Tongatapu": [
            "12:19:20 - LMT 1901 12:19:20",
            "12:20 - TOT 1941 12:20",
            "13 - TOT 1999 13",
            "13 Tonga TO%sT"
        ],
        "Pacific/Wake": [
            "11:6:28 - LMT 1901 11:6:28",
            "12 - WAKT"
        ],
        "Pacific/Wallis": [
            "12:15:20 - LMT 1901 12:15:20",
            "12 - WFT"
        ]
    },
    "rules": {
        "Ghana": [
            "1936 1942 8 1 7 0 0 0:20 GHST",
            "1936 1942 11 31 7 0 0 0 GMT"
        ],
        "Algeria": [
            "1916 1916 5 14 7 23 2 1 S",
            "1916 1919 9 1 0 23 2 0",
            "1917 1917 2 24 7 23 2 1 S",
            "1918 1918 2 9 7 23 2 1 S",
            "1919 1919 2 1 7 23 2 1 S",
            "1920 1920 1 14 7 23 2 1 S",
            "1920 1920 9 23 7 23 2 0",
            "1921 1921 2 14 7 23 2 1 S",
            "1921 1921 5 21 7 23 2 0",
            "1939 1939 8 11 7 23 2 1 S",
            "1939 1939 10 19 7 1 0 0",
            "1944 1945 3 1 1 2 0 1 S",
            "1944 1944 9 8 7 2 0 0",
            "1945 1945 8 16 7 1 0 0",
            "1971 1971 3 25 7 23 2 1 S",
            "1971 1971 8 26 7 23 2 0",
            "1977 1977 4 6 7 0 0 1 S",
            "1977 1977 9 21 7 0 0 0",
            "1978 1978 2 24 7 1 0 1 S",
            "1978 1978 8 22 7 3 0 0",
            "1980 1980 3 25 7 0 0 1 S",
            "1980 1980 9 31 7 2 0 0"
        ],
        "Egypt": [
            "1940 1940 6 15 7 0 0 1 S",
            "1940 1940 9 1 7 0 0 0",
            "1941 1941 3 15 7 0 0 1 S",
            "1941 1941 8 16 7 0 0 0",
            "1942 1944 3 1 7 0 0 1 S",
            "1942 1942 9 27 7 0 0 0",
            "1943 1945 10 1 7 0 0 0",
            "1945 1945 3 16 7 0 0 1 S",
            "1957 1957 4 10 7 0 0 1 S",
            "1957 1958 9 1 7 0 0 0",
            "1958 1958 4 1 7 0 0 1 S",
            "1959 1981 4 1 7 1 0 1 S",
            "1959 1965 8 30 7 3 0 0",
            "1966 1994 9 1 7 3 0 0",
            "1982 1982 6 25 7 1 0 1 S",
            "1983 1983 6 12 7 1 0 1 S",
            "1984 1988 4 1 7 1 0 1 S",
            "1989 1989 4 6 7 1 0 1 S",
            "1990 1994 4 1 7 1 0 1 S",
            "1995 2010 3 5 8 0 2 1 S",
            "1995 2005 8 4 8 23 2 0",
            "2006 2006 8 21 7 23 2 0",
            "2007 2007 8 1 4 23 2 0",
            "2008 2008 7 4 8 23 2 0",
            "2009 2009 7 20 7 23 2 0",
            "2010 2010 7 11 7 0 0 0",
            "2010 2010 8 10 7 0 0 1 S",
            "2010 2010 8 4 8 23 2 0"
        ],
        "Morocco": [
            "1939 1939 8 12 7 0 0 1 S",
            "1939 1939 10 19 7 0 0 0",
            "1940 1940 1 25 7 0 0 1 S",
            "1945 1945 10 18 7 0 0 0",
            "1950 1950 5 11 7 0 0 1 S",
            "1950 1950 9 29 7 0 0 0",
            "1967 1967 5 3 7 12 0 1 S",
            "1967 1967 9 1 7 0 0 0",
            "1974 1974 5 24 7 0 0 1 S",
            "1974 1974 8 1 7 0 0 0",
            "1976 1977 4 1 7 0 0 1 S",
            "1976 1976 7 1 7 0 0 0",
            "1977 1977 8 28 7 0 0 0",
            "1978 1978 5 1 7 0 0 1 S",
            "1978 1978 7 4 7 0 0 0",
            "2008 2008 5 1 7 0 0 1 S",
            "2008 2008 8 1 7 0 0 0",
            "2009 2009 5 1 7 0 0 1 S",
            "2009 2009 7 21 7 0 0 0",
            "2010 2010 4 2 7 0 0 1 S",
            "2010 2010 7 8 7 0 0 0",
            "2011 2011 3 3 7 0 0 1 S",
            "2011 2011 6 31 7 0 0 0",
            "2012 2019 3 0 8 2 0 1 S",
            "2012 9999 8 0 8 3 0 0",
            "2012 2012 6 20 7 3 0 0",
            "2012 2012 7 20 7 2 0 1 S",
            "2013 2013 6 9 7 3 0 0",
            "2013 2013 7 8 7 2 0 1 S",
            "2014 2014 5 29 7 3 0 0",
            "2014 2014 6 29 7 2 0 1 S",
            "2015 2015 5 18 7 3 0 0",
            "2015 2015 6 18 7 2 0 1 S",
            "2016 2016 5 7 7 3 0 0",
            "2016 2016 6 7 7 2 0 1 S",
            "2017 2017 4 27 7 3 0 0",
            "2017 2017 5 26 7 2 0 1 S",
            "2018 2018 4 16 7 3 0 0",
            "2018 2018 5 15 7 2 0 1 S",
            "2019 2019 4 6 7 3 0 0",
            "2019 2019 5 5 7 2 0 1 S",
            "2020 2020 4 24 7 2 0 1 S",
            "2021 2021 4 13 7 2 0 1 S",
            "2022 2022 4 3 7 2 0 1 S",
            "2023 9999 3 0 8 2 0 1 S"
        ],
        "Spain": [
            "1917 1917 4 5 7 23 2 1 S",
            "1917 1919 9 6 7 23 2 0",
            "1918 1918 3 15 7 23 2 1 S",
            "1919 1919 3 5 7 23 2 1 S",
            "1924 1924 3 16 7 23 2 1 S",
            "1924 1924 9 4 7 23 2 0",
            "1926 1926 3 17 7 23 2 1 S",
            "1926 1929 9 1 6 23 2 0",
            "1927 1927 3 9 7 23 2 1 S",
            "1928 1928 3 14 7 23 2 1 S",
            "1929 1929 3 20 7 23 2 1 S",
            "1937 1937 4 22 7 23 2 1 S",
            "1937 1939 9 1 6 23 2 0",
            "1938 1938 2 22 7 23 2 1 S",
            "1939 1939 3 15 7 23 2 1 S",
            "1940 1940 2 16 7 23 2 1 S",
            "1942 1942 4 2 7 22 2 2 M",
            "1942 1942 8 1 7 22 2 1 S",
            "1943 1946 3 13 6 22 2 2 M",
            "1943 1943 9 3 7 22 2 1 S",
            "1944 1944 9 10 7 22 2 1 S",
            "1945 1945 8 30 7 1 0 1 S",
            "1946 1946 8 30 7 0 0 0",
            "1949 1949 3 30 7 23 0 1 S",
            "1949 1949 8 30 7 1 0 0",
            "1974 1975 3 13 6 23 0 1 S",
            "1974 1975 9 1 0 1 0 0",
            "1976 1976 2 27 7 23 0 1 S",
            "1976 1977 8 0 8 1 0 0",
            "1977 1978 3 2 7 23 0 1 S",
            "1978 1978 9 1 7 1 0 0"
        ],
        "SpainAfrica": [
            "1967 1967 5 3 7 12 0 1 S",
            "1967 1967 9 1 7 0 0 0",
            "1974 1974 5 24 7 0 0 1 S",
            "1974 1974 8 1 7 0 0 0",
            "1976 1977 4 1 7 0 0 1 S",
            "1976 1976 7 1 7 0 0 0",
            "1977 1977 8 28 7 0 0 0",
            "1978 1978 5 1 7 0 0 1 S",
            "1978 1978 7 4 7 0 0 0"
        ],
        "EU": [
            "1977 1980 3 1 0 1 1 1 S",
            "1977 1977 8 0 8 1 1 0",
            "1978 1978 9 1 7 1 1 0",
            "1979 1995 8 0 8 1 1 0",
            "1981 9999 2 0 8 1 1 1 S",
            "1996 9999 9 0 8 1 1 0"
        ],
        "SL": [
            "1935 1942 5 1 7 0 0 0:40 SLST",
            "1935 1942 9 1 7 0 0 0 WAT",
            "1957 1962 5 1 7 0 0 1 SLST",
            "1957 1962 8 1 7 0 0 0 GMT"
        ],
        "SA": [
            "1942 1943 8 15 0 2 0 1",
            "1943 1944 2 15 0 2 0 0"
        ],
        "Sudan": [
            "1970 1970 4 1 7 0 0 1 S",
            "1970 1985 9 15 7 0 0 0",
            "1971 1971 3 30 7 0 0 1 S",
            "1972 1985 3 0 8 0 0 1 S"
        ],
        "Libya": [
            "1951 1951 9 14 7 2 0 1 S",
            "1952 1952 0 1 7 0 0 0",
            "1953 1953 9 9 7 2 0 1 S",
            "1954 1954 0 1 7 0 0 0",
            "1955 1955 8 30 7 0 0 1 S",
            "1956 1956 0 1 7 0 0 0",
            "1982 1984 3 1 7 0 0 1 S",
            "1982 1985 9 1 7 0 0 0",
            "1985 1985 3 6 7 0 0 1 S",
            "1986 1986 3 4 7 0 0 1 S",
            "1986 1986 9 3 7 0 0 0",
            "1987 1989 3 1 7 0 0 1 S",
            "1987 1989 9 1 7 0 0 0",
            "1997 1997 3 4 7 0 0 1 S",
            "1997 1997 9 4 7 0 0 0",
            "2013 9999 2 5 8 1 0 1 S",
            "2013 9999 9 5 8 2 0 0"
        ],
        "Tunisia": [
            "1939 1939 3 15 7 23 2 1 S",
            "1939 1939 10 18 7 23 2 0",
            "1940 1940 1 25 7 23 2 1 S",
            "1941 1941 9 6 7 0 0 0",
            "1942 1942 2 9 7 0 0 1 S",
            "1942 1942 10 2 7 3 0 0",
            "1943 1943 2 29 7 2 0 1 S",
            "1943 1943 3 17 7 2 0 0",
            "1943 1943 3 25 7 2 0 1 S",
            "1943 1943 9 4 7 2 0 0",
            "1944 1945 3 1 1 2 0 1 S",
            "1944 1944 9 8 7 0 0 0",
            "1945 1945 8 16 7 0 0 0",
            "1977 1977 3 30 7 0 2 1 S",
            "1977 1977 8 24 7 0 2 0",
            "1978 1978 4 1 7 0 2 1 S",
            "1978 1978 9 1 7 0 2 0",
            "1988 1988 5 1 7 0 2 1 S",
            "1988 1990 8 0 8 0 2 0",
            "1989 1989 2 26 7 0 2 1 S",
            "1990 1990 4 1 7 0 2 1 S",
            "2005 2005 4 1 7 0 2 1 S",
            "2005 2005 8 30 7 1 2 0",
            "2006 2008 2 0 8 2 2 1 S",
            "2006 2008 9 0 8 2 2 0"
        ],
        "Namibia": [
            "1994 9999 8 1 0 2 0 1 S",
            "1995 9999 3 1 0 2 0 0"
        ],
        "US": [
            "1918 1919 2 0 8 2 0 1 D",
            "1918 1919 9 0 8 2 0 0 S",
            "1942 1942 1 9 7 2 0 1 W",
            "1945 1945 7 14 7 23 1 1 P",
            "1945 1945 8 30 7 2 0 0 S",
            "1967 2006 9 0 8 2 0 0 S",
            "1967 1973 3 0 8 2 0 1 D",
            "1974 1974 0 6 7 2 0 1 D",
            "1975 1975 1 23 7 2 0 1 D",
            "1976 1986 3 0 8 2 0 1 D",
            "1987 2006 3 1 0 2 0 1 D",
            "2007 9999 2 8 0 2 0 1 D",
            "2007 9999 10 1 0 2 0 0 S"
        ],
        "Brazil": [
            "1931 1931 9 3 7 11 0 1 S",
            "1932 1933 3 1 7 0 0 0",
            "1932 1932 9 3 7 0 0 1 S",
            "1949 1952 11 1 7 0 0 1 S",
            "1950 1950 3 16 7 1 0 0",
            "1951 1952 3 1 7 0 0 0",
            "1953 1953 2 1 7 0 0 0",
            "1963 1963 11 9 7 0 0 1 S",
            "1964 1964 2 1 7 0 0 0",
            "1965 1965 0 31 7 0 0 1 S",
            "1965 1965 2 31 7 0 0 0",
            "1965 1965 11 1 7 0 0 1 S",
            "1966 1968 2 1 7 0 0 0",
            "1966 1967 10 1 7 0 0 1 S",
            "1985 1985 10 2 7 0 0 1 S",
            "1986 1986 2 15 7 0 0 0",
            "1986 1986 9 25 7 0 0 1 S",
            "1987 1987 1 14 7 0 0 0",
            "1987 1987 9 25 7 0 0 1 S",
            "1988 1988 1 7 7 0 0 0",
            "1988 1988 9 16 7 0 0 1 S",
            "1989 1989 0 29 7 0 0 0",
            "1989 1989 9 15 7 0 0 1 S",
            "1990 1990 1 11 7 0 0 0",
            "1990 1990 9 21 7 0 0 1 S",
            "1991 1991 1 17 7 0 0 0",
            "1991 1991 9 20 7 0 0 1 S",
            "1992 1992 1 9 7 0 0 0",
            "1992 1992 9 25 7 0 0 1 S",
            "1993 1993 0 31 7 0 0 0",
            "1993 1995 9 11 0 0 0 1 S",
            "1994 1995 1 15 0 0 0 0",
            "1996 1996 1 11 7 0 0 0",
            "1996 1996 9 6 7 0 0 1 S",
            "1997 1997 1 16 7 0 0 0",
            "1997 1997 9 6 7 0 0 1 S",
            "1998 1998 2 1 7 0 0 0",
            "1998 1998 9 11 7 0 0 1 S",
            "1999 1999 1 21 7 0 0 0",
            "1999 1999 9 3 7 0 0 1 S",
            "2000 2000 1 27 7 0 0 0",
            "2000 2001 9 8 0 0 0 1 S",
            "2001 2006 1 15 0 0 0 0",
            "2002 2002 10 3 7 0 0 1 S",
            "2003 2003 9 19 7 0 0 1 S",
            "2004 2004 10 2 7 0 0 1 S",
            "2005 2005 9 16 7 0 0 1 S",
            "2006 2006 10 5 7 0 0 1 S",
            "2007 2007 1 25 7 0 0 0",
            "2007 2007 9 8 0 0 0 1 S",
            "2008 9999 9 15 0 0 0 1 S",
            "2008 2011 1 15 0 0 0 0",
            "2012 2012 1 22 0 0 0 0",
            "2013 2014 1 15 0 0 0 0",
            "2015 2015 1 22 0 0 0 0",
            "2016 2022 1 15 0 0 0 0",
            "2023 2023 1 22 0 0 0 0",
            "2024 2025 1 15 0 0 0 0",
            "2026 2026 1 22 0 0 0 0",
            "2027 2033 1 15 0 0 0 0",
            "2034 2034 1 22 0 0 0 0",
            "2035 2036 1 15 0 0 0 0",
            "2037 2037 1 22 0 0 0 0",
            "2038 9999 1 15 0 0 0 0"
        ],
        "Arg": [
            "1930 1930 11 1 7 0 0 1 S",
            "1931 1931 3 1 7 0 0 0",
            "1931 1931 9 15 7 0 0 1 S",
            "1932 1940 2 1 7 0 0 0",
            "1932 1939 10 1 7 0 0 1 S",
            "1940 1940 6 1 7 0 0 1 S",
            "1941 1941 5 15 7 0 0 0",
            "1941 1941 9 15 7 0 0 1 S",
            "1943 1943 7 1 7 0 0 0",
            "1943 1943 9 15 7 0 0 1 S",
            "1946 1946 2 1 7 0 0 0",
            "1946 1946 9 1 7 0 0 1 S",
            "1963 1963 9 1 7 0 0 0",
            "1963 1963 11 15 7 0 0 1 S",
            "1964 1966 2 1 7 0 0 0",
            "1964 1966 9 15 7 0 0 1 S",
            "1967 1967 3 2 7 0 0 0",
            "1967 1968 9 1 0 0 0 1 S",
            "1968 1969 3 1 0 0 0 0",
            "1974 1974 0 23 7 0 0 1 S",
            "1974 1974 4 1 7 0 0 0",
            "1988 1988 11 1 7 0 0 1 S",
            "1989 1993 2 1 0 0 0 0",
            "1989 1992 9 15 0 0 0 1 S",
            "1999 1999 9 1 0 0 0 1 S",
            "2000 2000 2 3 7 0 0 0",
            "2007 2007 11 30 7 0 0 1 S",
            "2008 2009 2 15 0 0 0 0",
            "2008 2008 9 15 0 0 0 1 S"
        ],
        "SanLuis": [
            "2008 2009 2 8 0 0 0 0",
            "2007 2009 9 8 0 0 0 1 S"
        ],
        "Para": [
            "1975 1988 9 1 7 0 0 1 S",
            "1975 1978 2 1 7 0 0 0",
            "1979 1991 3 1 7 0 0 0",
            "1989 1989 9 22 7 0 0 1 S",
            "1990 1990 9 1 7 0 0 1 S",
            "1991 1991 9 6 7 0 0 1 S",
            "1992 1992 2 1 7 0 0 0",
            "1992 1992 9 5 7 0 0 1 S",
            "1993 1993 2 31 7 0 0 0",
            "1993 1995 9 1 7 0 0 1 S",
            "1994 1995 1 0 8 0 0 0",
            "1996 1996 2 1 7 0 0 0",
            "1996 2001 9 1 0 0 0 1 S",
            "1997 1997 1 0 8 0 0 0",
            "1998 2001 2 1 0 0 0 0",
            "2002 2004 3 1 0 0 0 0",
            "2002 2003 8 1 0 0 0 1 S",
            "2004 2009 9 15 0 0 0 1 S",
            "2005 2009 2 8 0 0 0 0",
            "2010 9999 9 1 0 0 0 1 S",
            "2010 2012 3 8 0 0 0 0",
            "2013 9999 2 22 0 0 0 0"
        ],
        "Canada": [
            "1918 1918 3 14 7 2 0 1 D",
            "1918 1918 9 27 7 2 0 0 S",
            "1942 1942 1 9 7 2 0 1 W",
            "1945 1945 7 14 7 23 1 1 P",
            "1945 1945 8 30 7 2 0 0 S",
            "1974 1986 3 0 8 2 0 1 D",
            "1974 2006 9 0 8 2 0 0 S",
            "1987 2006 3 1 0 2 0 1 D",
            "2007 9999 2 8 0 2 0 1 D",
            "2007 9999 10 1 0 2 0 0 S"
        ],
        "Mexico": [
            "1939 1939 1 5 7 0 0 1 D",
            "1939 1939 5 25 7 0 0 0 S",
            "1940 1940 11 9 7 0 0 1 D",
            "1941 1941 3 1 7 0 0 0 S",
            "1943 1943 11 16 7 0 0 1 W",
            "1944 1944 4 1 7 0 0 0 S",
            "1950 1950 1 12 7 0 0 1 D",
            "1950 1950 6 30 7 0 0 0 S",
            "1996 2000 3 1 0 2 0 1 D",
            "1996 2000 9 0 8 2 0 0 S",
            "2001 2001 4 1 0 2 0 1 D",
            "2001 2001 8 0 8 2 0 0 S",
            "2002 9999 3 1 0 2 0 1 D",
            "2002 9999 9 0 8 2 0 0 S"
        ],
        "Barb": [
            "1977 1977 5 12 7 2 0 1 D",
            "1977 1978 9 1 0 2 0 0 S",
            "1978 1980 3 15 0 2 0 1 D",
            "1979 1979 8 30 7 2 0 0 S",
            "1980 1980 8 25 7 2 0 0 S"
        ],
        "Belize": [
            "1918 1942 9 2 0 0 0 0:30 HD",
            "1919 1943 1 9 0 0 0 0 S",
            "1973 1973 11 5 7 0 0 1 D",
            "1974 1974 1 9 7 0 0 0 S",
            "1982 1982 11 18 7 0 0 1 D",
            "1983 1983 1 12 7 0 0 0 S"
        ],
        "CO": [
            "1992 1992 4 3 7 0 0 1 S",
            "1993 1993 3 4 7 0 0 0"
        ],
        "NT_YK": [
            "1918 1918 3 14 7 2 0 1 D",
            "1918 1918 9 27 7 2 0 0 S",
            "1919 1919 4 25 7 2 0 1 D",
            "1919 1919 10 1 7 0 0 0 S",
            "1942 1942 1 9 7 2 0 1 W",
            "1945 1945 7 14 7 23 1 1 P",
            "1945 1945 8 30 7 2 0 0 S",
            "1965 1965 3 0 8 0 0 2 DD",
            "1965 1965 9 0 8 2 0 0 S",
            "1980 1986 3 0 8 2 0 1 D",
            "1980 2006 9 0 8 2 0 0 S",
            "1987 2006 3 1 0 2 0 1 D"
        ],
        "Chicago": [
            "1920 1920 5 13 7 2 0 1 D",
            "1920 1921 9 0 8 2 0 0 S",
            "1921 1921 2 0 8 2 0 1 D",
            "1922 1966 3 0 8 2 0 1 D",
            "1922 1954 8 0 8 2 0 0 S",
            "1955 1966 9 0 8 2 0 0 S"
        ],
        "CR": [
            "1979 1980 1 0 8 0 0 1 D",
            "1979 1980 5 1 0 0 0 0 S",
            "1991 1992 0 15 6 0 0 1 D",
            "1991 1991 6 1 7 0 0 0 S",
            "1992 1992 2 15 7 0 0 0 S"
        ],
        "Vanc": [
            "1918 1918 3 14 7 2 0 1 D",
            "1918 1918 9 27 7 2 0 0 S",
            "1942 1942 1 9 7 2 0 1 W",
            "1945 1945 7 14 7 23 1 1 P",
            "1945 1945 8 30 7 2 0 0 S",
            "1946 1986 3 0 8 2 0 1 D",
            "1946 1946 9 13 7 2 0 0 S",
            "1947 1961 8 0 8 2 0 0 S",
            "1962 2006 9 0 8 2 0 0 S"
        ],
        "Denver": [
            "1920 1921 2 0 8 2 0 1 D",
            "1920 1920 9 0 8 2 0 0 S",
            "1921 1921 4 22 7 2 0 0 S",
            "1965 1966 3 0 8 2 0 1 D",
            "1965 1966 9 0 8 2 0 0 S"
        ],
        "Detroit": [
            "1948 1948 3 0 8 2 0 1 D",
            "1948 1948 8 0 8 2 0 0 S",
            "1967 1967 5 14 7 2 0 1 D",
            "1967 1967 9 0 8 2 0 0 S"
        ],
        "Edm": [
            "1918 1919 3 8 0 2 0 1 D",
            "1918 1918 9 27 7 2 0 0 S",
            "1919 1919 4 27 7 2 0 0 S",
            "1920 1923 3 0 8 2 0 1 D",
            "1920 1920 9 0 8 2 0 0 S",
            "1921 1923 8 0 8 2 0 0 S",
            "1942 1942 1 9 7 2 0 1 W",
            "1945 1945 7 14 7 23 1 1 P",
            "1945 1945 8 0 8 2 0 0 S",
            "1947 1947 3 0 8 2 0 1 D",
            "1947 1947 8 0 8 2 0 0 S",
            "1967 1967 3 0 8 2 0 1 D",
            "1967 1967 9 0 8 2 0 0 S",
            "1969 1969 3 0 8 2 0 1 D",
            "1969 1969 9 0 8 2 0 0 S",
            "1972 1986 3 0 8 2 0 1 D",
            "1972 2006 9 0 8 2 0 0 S"
        ],
        "Salv": [
            "1987 1988 4 1 0 0 0 1 D",
            "1987 1988 8 0 8 0 0 0 S"
        ],
        "Halifax": [
            "1916 1916 3 1 7 0 0 1 D",
            "1916 1916 9 1 7 0 0 0 S",
            "1920 1920 4 9 7 0 0 1 D",
            "1920 1920 7 29 7 0 0 0 S",
            "1921 1921 4 6 7 0 0 1 D",
            "1921 1922 8 5 7 0 0 0 S",
            "1922 1922 3 30 7 0 0 1 D",
            "1923 1925 4 1 0 0 0 1 D",
            "1923 1923 8 4 7 0 0 0 S",
            "1924 1924 8 15 7 0 0 0 S",
            "1925 1925 8 28 7 0 0 0 S",
            "1926 1926 4 16 7 0 0 1 D",
            "1926 1926 8 13 7 0 0 0 S",
            "1927 1927 4 1 7 0 0 1 D",
            "1927 1927 8 26 7 0 0 0 S",
            "1928 1931 4 8 0 0 0 1 D",
            "1928 1928 8 9 7 0 0 0 S",
            "1929 1929 8 3 7 0 0 0 S",
            "1930 1930 8 15 7 0 0 0 S",
            "1931 1932 8 24 1 0 0 0 S",
            "1932 1932 4 1 7 0 0 1 D",
            "1933 1933 3 30 7 0 0 1 D",
            "1933 1933 9 2 7 0 0 0 S",
            "1934 1934 4 20 7 0 0 1 D",
            "1934 1934 8 16 7 0 0 0 S",
            "1935 1935 5 2 7 0 0 1 D",
            "1935 1935 8 30 7 0 0 0 S",
            "1936 1936 5 1 7 0 0 1 D",
            "1936 1936 8 14 7 0 0 0 S",
            "1937 1938 4 1 0 0 0 1 D",
            "1937 1941 8 24 1 0 0 0 S",
            "1939 1939 4 28 7 0 0 1 D",
            "1940 1941 4 1 0 0 0 1 D",
            "1946 1949 3 0 8 2 0 1 D",
            "1946 1949 8 0 8 2 0 0 S",
            "1951 1954 3 0 8 2 0 1 D",
            "1951 1954 8 0 8 2 0 0 S",
            "1956 1959 3 0 8 2 0 1 D",
            "1956 1959 8 0 8 2 0 0 S",
            "1962 1973 3 0 8 2 0 1 D",
            "1962 1973 9 0 8 2 0 0 S"
        ],
        "StJohns": [
            "1917 1917 3 8 7 2 0 1 D",
            "1917 1917 8 17 7 2 0 0 S",
            "1919 1919 4 5 7 23 0 1 D",
            "1919 1919 7 12 7 23 0 0 S",
            "1920 1935 4 1 0 23 0 1 D",
            "1920 1935 9 0 8 23 0 0 S",
            "1936 1941 4 9 1 0 0 1 D",
            "1936 1941 9 2 1 0 0 0 S",
            "1946 1950 4 8 0 2 0 1 D",
            "1946 1950 9 2 0 2 0 0 S",
            "1951 1986 3 0 8 2 0 1 D",
            "1951 1959 8 0 8 2 0 0 S",
            "1960 1986 9 0 8 2 0 0 S",
            "1987 1987 3 1 0 0:1 0 1 D",
            "1987 2006 9 0 8 0:1 0 0 S",
            "1988 1988 3 1 0 0:1 0 2 DD",
            "1989 2006 3 1 0 0:1 0 1 D",
            "2007 2011 2 8 0 0:1 0 1 D",
            "2007 2010 10 1 0 0:1 0 0 S"
        ],
        "TC": [
            "1979 1986 3 0 8 2 0 1 D",
            "1979 2006 9 0 8 2 0 0 S",
            "1987 2006 3 1 0 2 0 1 D",
            "2007 9999 2 8 0 2 0 1 D",
            "2007 9999 10 1 0 2 0 0 S"
        ],
        "Guat": [
            "1973 1973 10 25 7 0 0 1 D",
            "1974 1974 1 24 7 0 0 0 S",
            "1983 1983 4 21 7 0 0 1 D",
            "1983 1983 8 22 7 0 0 0 S",
            "1991 1991 2 23 7 0 0 1 D",
            "1991 1991 8 7 7 0 0 0 S",
            "2006 2006 3 30 7 0 0 1 D",
            "2006 2006 9 1 7 0 0 0 S"
        ],
        "Cuba": [
            "1928 1928 5 10 7 0 0 1 D",
            "1928 1928 9 10 7 0 0 0 S",
            "1940 1942 5 1 0 0 0 1 D",
            "1940 1942 8 1 0 0 0 0 S",
            "1945 1946 5 1 0 0 0 1 D",
            "1945 1946 8 1 0 0 0 0 S",
            "1965 1965 5 1 7 0 0 1 D",
            "1965 1965 8 30 7 0 0 0 S",
            "1966 1966 4 29 7 0 0 1 D",
            "1966 1966 9 2 7 0 0 0 S",
            "1967 1967 3 8 7 0 0 1 D",
            "1967 1968 8 8 0 0 0 0 S",
            "1968 1968 3 14 7 0 0 1 D",
            "1969 1977 3 0 8 0 0 1 D",
            "1969 1971 9 0 8 0 0 0 S",
            "1972 1974 9 8 7 0 0 0 S",
            "1975 1977 9 0 8 0 0 0 S",
            "1978 1978 4 7 7 0 0 1 D",
            "1978 1990 9 8 0 0 0 0 S",
            "1979 1980 2 15 0 0 0 1 D",
            "1981 1985 4 5 0 0 0 1 D",
            "1986 1989 2 14 0 0 0 1 D",
            "1990 1997 3 1 0 0 0 1 D",
            "1991 1995 9 8 0 0 2 0 S",
            "1996 1996 9 6 7 0 2 0 S",
            "1997 1997 9 12 7 0 2 0 S",
            "1998 1999 2 0 8 0 2 1 D",
            "1998 2003 9 0 8 0 2 0 S",
            "2000 2004 3 1 0 0 2 1 D",
            "2006 2010 9 0 8 0 2 0 S",
            "2007 2007 2 8 0 0 2 1 D",
            "2008 2008 2 15 0 0 2 1 D",
            "2009 2010 2 8 0 0 2 1 D",
            "2011 2011 2 15 0 0 2 1 D",
            "2011 2011 10 13 7 0 2 0 S",
            "2012 2012 3 1 7 0 2 1 D",
            "2012 9999 10 1 0 0 2 0 S",
            "2013 9999 2 8 0 0 2 1 D"
        ],
        "Indianapolis": [
            "1941 1941 5 22 7 2 0 1 D",
            "1941 1954 8 0 8 2 0 0 S",
            "1946 1954 3 0 8 2 0 1 D"
        ],
        "Starke": [
            "1947 1961 3 0 8 2 0 1 D",
            "1947 1954 8 0 8 2 0 0 S",
            "1955 1956 9 0 8 2 0 0 S",
            "1957 1958 8 0 8 2 0 0 S",
            "1959 1961 9 0 8 2 0 0 S"
        ],
        "Marengo": [
            "1951 1951 3 0 8 2 0 1 D",
            "1951 1951 8 0 8 2 0 0 S",
            "1954 1960 3 0 8 2 0 1 D",
            "1954 1960 8 0 8 2 0 0 S"
        ],
        "Pike": [
            "1955 1955 4 1 7 0 0 1 D",
            "1955 1960 8 0 8 2 0 0 S",
            "1956 1964 3 0 8 2 0 1 D",
            "1961 1964 9 0 8 2 0 0 S"
        ],
        "Perry": [
            "1946 1946 3 0 8 2 0 1 D",
            "1946 1946 8 0 8 2 0 0 S",
            "1953 1954 3 0 8 2 0 1 D",
            "1953 1959 8 0 8 2 0 0 S",
            "1955 1955 4 1 7 0 0 1 D",
            "1956 1963 3 0 8 2 0 1 D",
            "1960 1960 9 0 8 2 0 0 S",
            "1961 1961 8 0 8 2 0 0 S",
            "1962 1963 9 0 8 2 0 0 S"
        ],
        "Vincennes": [
            "1946 1946 3 0 8 2 0 1 D",
            "1946 1946 8 0 8 2 0 0 S",
            "1953 1954 3 0 8 2 0 1 D",
            "1953 1959 8 0 8 2 0 0 S",
            "1955 1955 4 1 7 0 0 1 D",
            "1956 1963 3 0 8 2 0 1 D",
            "1960 1960 9 0 8 2 0 0 S",
            "1961 1961 8 0 8 2 0 0 S",
            "1962 1963 9 0 8 2 0 0 S"
        ],
        "Pulaski": [
            "1946 1960 3 0 8 2 0 1 D",
            "1946 1954 8 0 8 2 0 0 S",
            "1955 1956 9 0 8 2 0 0 S",
            "1957 1960 8 0 8 2 0 0 S"
        ],
        "Louisville": [
            "1921 1921 4 1 7 2 0 1 D",
            "1921 1921 8 1 7 2 0 0 S",
            "1941 1961 3 0 8 2 0 1 D",
            "1941 1941 8 0 8 2 0 0 S",
            "1946 1946 5 2 7 2 0 0 S",
            "1950 1955 8 0 8 2 0 0 S",
            "1956 1960 9 0 8 2 0 0 S"
        ],
        "Peru": [
            "1938 1938 0 1 7 0 0 1 S",
            "1938 1938 3 1 7 0 0 0",
            "1938 1939 8 0 8 0 0 1 S",
            "1939 1940 2 24 0 0 0 0",
            "1986 1987 0 1 7 0 0 1 S",
            "1986 1987 3 1 7 0 0 0",
            "1990 1990 0 1 7 0 0 1 S",
            "1990 1990 3 1 7 0 0 0",
            "1994 1994 0 1 7 0 0 1 S",
            "1994 1994 3 1 7 0 0 0"
        ],
        "CA": [
            "1948 1948 2 14 7 2 0 1 D",
            "1949 1949 0 1 7 2 0 0 S",
            "1950 1966 3 0 8 2 0 1 D",
            "1950 1961 8 0 8 2 0 0 S",
            "1962 1966 9 0 8 2 0 0 S"
        ],
        "Nic": [
            "1979 1980 2 16 0 0 0 1 D",
            "1979 1980 5 23 1 0 0 0 S",
            "2005 2005 3 10 7 0 0 1 D",
            "2005 2005 9 1 0 0 0 0 S",
            "2006 2006 3 30 7 2 0 1 D",
            "2006 2006 9 1 0 1 0 0 S"
        ],
        "Menominee": [
            "1946 1946 3 0 8 2 0 1 D",
            "1946 1946 8 0 8 2 0 0 S",
            "1966 1966 3 0 8 2 0 1 D",
            "1966 1966 9 0 8 2 0 0 S"
        ],
        "Moncton": [
            "1933 1935 5 8 0 1 0 1 D",
            "1933 1935 8 8 0 1 0 0 S",
            "1936 1938 5 1 0 1 0 1 D",
            "1936 1938 8 1 0 1 0 0 S",
            "1939 1939 4 27 7 1 0 1 D",
            "1939 1941 8 21 6 1 0 0 S",
            "1940 1940 4 19 7 1 0 1 D",
            "1941 1941 4 4 7 1 0 1 D",
            "1946 1972 3 0 8 2 0 1 D",
            "1946 1956 8 0 8 2 0 0 S",
            "1957 1972 9 0 8 2 0 0 S",
            "1993 2006 3 1 0 0:1 0 1 D",
            "1993 2006 9 0 8 0:1 0 0 S"
        ],
        "Uruguay": [
            "1923 1923 9 2 7 0 0 0:30 HS",
            "1924 1926 3 1 7 0 0 0",
            "1924 1925 9 1 7 0 0 0:30 HS",
            "1933 1935 9 0 8 0 0 0:30 HS",
            "1934 1936 2 25 6 23:30 2 0",
            "1936 1936 10 1 7 0 0 0:30 HS",
            "1937 1941 2 0 8 0 0 0",
            "1937 1940 9 0 8 0 0 0:30 HS",
            "1941 1941 7 1 7 0 0 0:30 HS",
            "1942 1942 0 1 7 0 0 0",
            "1942 1942 11 14 7 0 0 1 S",
            "1943 1943 2 14 7 0 0 0",
            "1959 1959 4 24 7 0 0 1 S",
            "1959 1959 10 15 7 0 0 0",
            "1960 1960 0 17 7 0 0 1 S",
            "1960 1960 2 6 7 0 0 0",
            "1965 1967 3 1 0 0 0 1 S",
            "1965 1965 8 26 7 0 0 0",
            "1966 1967 9 31 7 0 0 0",
            "1968 1970 4 27 7 0 0 0:30 HS",
            "1968 1970 11 2 7 0 0 0",
            "1972 1972 3 24 7 0 0 1 S",
            "1972 1972 7 15 7 0 0 0",
            "1974 1974 2 10 7 0 0 0:30 HS",
            "1974 1974 11 22 7 0 0 1 S",
            "1976 1976 9 1 7 0 0 0",
            "1977 1977 11 4 7 0 0 1 S",
            "1978 1978 3 1 7 0 0 0",
            "1979 1979 9 1 7 0 0 1 S",
            "1980 1980 4 1 7 0 0 0",
            "1987 1987 11 14 7 0 0 1 S",
            "1988 1988 2 14 7 0 0 0",
            "1988 1988 11 11 7 0 0 1 S",
            "1989 1989 2 12 7 0 0 0",
            "1989 1989 9 29 7 0 0 1 S",
            "1990 1992 2 1 0 0 0 0",
            "1990 1991 9 21 0 0 0 1 S",
            "1992 1992 9 18 7 0 0 1 S",
            "1993 1993 1 28 7 0 0 0",
            "2004 2004 8 19 7 0 0 1 S",
            "2005 2005 2 27 7 2 0 0",
            "2005 2005 9 9 7 2 0 1 S",
            "2006 2006 2 12 7 2 0 0",
            "2006 9999 9 1 0 2 0 1 S",
            "2007 9999 2 8 0 2 0 0"
        ],
        "Mont": [
            "1917 1917 2 25 7 2 0 1 D",
            "1917 1917 3 24 7 0 0 0 S",
            "1919 1919 2 31 7 2:30 0 1 D",
            "1919 1919 9 25 7 2:30 0 0 S",
            "1920 1920 4 2 7 2:30 0 1 D",
            "1920 1922 9 1 0 2:30 0 0 S",
            "1921 1921 4 1 7 2 0 1 D",
            "1922 1922 3 30 7 2 0 1 D",
            "1924 1924 4 17 7 2 0 1 D",
            "1924 1926 8 0 8 2:30 0 0 S",
            "1925 1926 4 1 0 2 0 1 D",
            "1927 1927 4 1 7 0 0 1 D",
            "1927 1932 8 0 8 0 0 0 S",
            "1928 1931 3 0 8 0 0 1 D",
            "1932 1932 4 1 7 0 0 1 D",
            "1933 1940 3 0 8 0 0 1 D",
            "1933 1933 9 1 7 0 0 0 S",
            "1934 1939 8 0 8 0 0 0 S",
            "1946 1973 3 0 8 2 0 1 D",
            "1945 1948 8 0 8 2 0 0 S",
            "1949 1950 9 0 8 2 0 0 S",
            "1951 1956 8 0 8 2 0 0 S",
            "1957 1973 9 0 8 2 0 0 S"
        ],
        "Bahamas": [
            "1964 1975 9 0 8 2 0 0 S",
            "1964 1975 3 0 8 2 0 1 D"
        ],
        "NYC": [
            "1920 1920 2 0 8 2 0 1 D",
            "1920 1920 9 0 8 2 0 0 S",
            "1921 1966 3 0 8 2 0 1 D",
            "1921 1954 8 0 8 2 0 0 S",
            "1955 1966 9 0 8 2 0 0 S"
        ],
        "Haiti": [
            "1983 1983 4 8 7 0 0 1 D",
            "1984 1987 3 0 8 0 0 1 D",
            "1983 1987 9 0 8 0 0 0 S",
            "1988 1997 3 1 0 1 2 1 D",
            "1988 1997 9 0 8 1 2 0 S",
            "2005 2006 3 1 0 0 0 1 D",
            "2005 2006 9 0 8 0 0 0 S",
            "2012 9999 2 8 0 2 0 1 D",
            "2012 9999 10 1 0 2 0 0 S"
        ],
        "Regina": [
            "1918 1918 3 14 7 2 0 1 D",
            "1918 1918 9 27 7 2 0 0 S",
            "1930 1934 4 1 0 0 0 1 D",
            "1930 1934 9 1 0 0 0 0 S",
            "1937 1941 3 8 0 0 0 1 D",
            "1937 1937 9 8 0 0 0 0 S",
            "1938 1938 9 1 0 0 0 0 S",
            "1939 1941 9 8 0 0 0 0 S",
            "1942 1942 1 9 7 2 0 1 W",
            "1945 1945 7 14 7 23 1 1 P",
            "1945 1945 8 0 8 2 0 0 S",
            "1946 1946 3 8 0 2 0 1 D",
            "1946 1946 9 8 0 2 0 0 S",
            "1947 1957 3 0 8 2 0 1 D",
            "1947 1957 8 0 8 2 0 0 S",
            "1959 1959 3 0 8 2 0 1 D",
            "1959 1959 9 0 8 2 0 0 S"
        ],
        "Chile": [
            "1927 1932 8 1 7 0 0 1 S",
            "1928 1932 3 1 7 0 0 0",
            "1942 1942 5 1 7 4 1 0",
            "1942 1942 7 1 7 5 1 1 S",
            "1946 1946 6 15 7 4 1 1 S",
            "1946 1946 8 1 7 3 1 0",
            "1947 1947 3 1 7 4 1 0",
            "1968 1968 10 3 7 4 1 1 S",
            "1969 1969 2 30 7 3 1 0",
            "1969 1969 10 23 7 4 1 1 S",
            "1970 1970 2 29 7 3 1 0",
            "1971 1971 2 14 7 3 1 0",
            "1970 1972 9 9 0 4 1 1 S",
            "1972 1986 2 9 0 3 1 0",
            "1973 1973 8 30 7 4 1 1 S",
            "1974 1987 9 9 0 4 1 1 S",
            "1987 1987 3 12 7 3 1 0",
            "1988 1989 2 9 0 3 1 0",
            "1988 1988 9 1 0 4 1 1 S",
            "1989 1989 9 9 0 4 1 1 S",
            "1990 1990 2 18 7 3 1 0",
            "1990 1990 8 16 7 4 1 1 S",
            "1991 1996 2 9 0 3 1 0",
            "1991 1997 9 9 0 4 1 1 S",
            "1997 1997 2 30 7 3 1 0",
            "1998 1998 2 9 0 3 1 0",
            "1998 1998 8 27 7 4 1 1 S",
            "1999 1999 3 4 7 3 1 0",
            "1999 2010 9 9 0 4 1 1 S",
            "2000 2007 2 9 0 3 1 0",
            "2008 2008 2 30 7 3 1 0",
            "2009 2009 2 9 0 3 1 0",
            "2010 2010 3 1 0 3 1 0",
            "2011 2011 4 2 0 3 1 0",
            "2011 2011 7 16 0 4 1 1 S",
            "2012 9999 3 23 0 3 1 0",
            "2012 9999 8 2 0 4 1 1 S"
        ],
        "DR": [
            "1966 1966 9 30 7 0 0 1 D",
            "1967 1967 1 28 7 0 0 0 S",
            "1969 1973 9 0 8 0 0 0:30 HD",
            "1970 1970 1 21 7 0 0 0 S",
            "1971 1971 0 20 7 0 0 0 S",
            "1972 1974 0 21 7 0 0 0 S"
        ],
        "C-Eur": [
            "1916 1916 3 30 7 23 0 1 S",
            "1916 1916 9 1 7 1 0 0",
            "1917 1918 3 15 1 2 2 1 S",
            "1917 1918 8 15 1 2 2 0",
            "1940 1940 3 1 7 2 2 1 S",
            "1942 1942 10 2 7 2 2 0",
            "1943 1943 2 29 7 2 2 1 S",
            "1943 1943 9 4 7 2 2 0",
            "1944 1945 3 1 1 2 2 1 S",
            "1944 1944 9 2 7 2 2 0",
            "1945 1945 8 16 7 2 2 0",
            "1977 1980 3 1 0 2 2 1 S",
            "1977 1977 8 0 8 2 2 0",
            "1978 1978 9 1 7 2 2 0",
            "1979 1995 8 0 8 2 2 0",
            "1981 9999 2 0 8 2 2 1 S",
            "1996 9999 9 0 8 2 2 0"
        ],
        "Swift": [
            "1957 1957 3 0 8 2 0 1 D",
            "1957 1957 9 0 8 2 0 0 S",
            "1959 1961 3 0 8 2 0 1 D",
            "1959 1959 9 0 8 2 0 0 S",
            "1960 1961 8 0 8 2 0 0 S"
        ],
        "Hond": [
            "1987 1988 4 1 0 0 0 1 D",
            "1987 1988 8 0 8 0 0 0 S",
            "2006 2006 4 1 0 0 0 1 D",
            "2006 2006 7 1 1 0 0 0 S"
        ],
        "Thule": [
            "1991 1992 2 0 8 2 0 1 D",
            "1991 1992 8 0 8 2 0 0 S",
            "1993 2006 3 1 0 2 0 1 D",
            "1993 2006 9 0 8 2 0 0 S",
            "2007 9999 2 8 0 2 0 1 D",
            "2007 9999 10 1 0 2 0 0 S"
        ],
        "Toronto": [
            "1919 1919 2 30 7 23:30 0 1 D",
            "1919 1919 9 26 7 0 0 0 S",
            "1920 1920 4 2 7 2 0 1 D",
            "1920 1920 8 26 7 0 0 0 S",
            "1921 1921 4 15 7 2 0 1 D",
            "1921 1921 8 15 7 2 0 0 S",
            "1922 1923 4 8 0 2 0 1 D",
            "1922 1926 8 15 0 2 0 0 S",
            "1924 1927 4 1 0 2 0 1 D",
            "1927 1932 8 0 8 2 0 0 S",
            "1928 1931 3 0 8 2 0 1 D",
            "1932 1932 4 1 7 2 0 1 D",
            "1933 1940 3 0 8 2 0 1 D",
            "1933 1933 9 1 7 2 0 0 S",
            "1934 1939 8 0 8 2 0 0 S",
            "1945 1946 8 0 8 2 0 0 S",
            "1946 1946 3 0 8 2 0 1 D",
            "1947 1949 3 0 8 0 0 1 D",
            "1947 1948 8 0 8 0 0 0 S",
            "1949 1949 10 0 8 0 0 0 S",
            "1950 1973 3 0 8 2 0 1 D",
            "1950 1950 10 0 8 2 0 0 S",
            "1951 1956 8 0 8 2 0 0 S",
            "1957 1973 9 0 8 2 0 0 S"
        ],
        "Winn": [
            "1916 1916 3 23 7 0 0 1 D",
            "1916 1916 8 17 7 0 0 0 S",
            "1918 1918 3 14 7 2 0 1 D",
            "1918 1918 9 27 7 2 0 0 S",
            "1937 1937 4 16 7 2 0 1 D",
            "1937 1937 8 26 7 2 0 0 S",
            "1942 1942 1 9 7 2 0 1 W",
            "1945 1945 7 14 7 23 1 1 P",
            "1945 1945 8 0 8 2 0 0 S",
            "1946 1946 4 12 7 2 0 1 D",
            "1946 1946 9 13 7 2 0 0 S",
            "1947 1949 3 0 8 2 0 1 D",
            "1947 1949 8 0 8 2 0 0 S",
            "1950 1950 4 1 7 2 0 1 D",
            "1950 1950 8 30 7 2 0 0 S",
            "1951 1960 3 0 8 2 0 1 D",
            "1951 1958 8 0 8 2 0 0 S",
            "1959 1959 9 0 8 2 0 0 S",
            "1960 1960 8 0 8 2 0 0 S",
            "1963 1963 3 0 8 2 0 1 D",
            "1963 1963 8 22 7 2 0 0 S",
            "1966 1986 3 0 8 2 2 1 D",
            "1966 2005 9 0 8 2 2 0 S",
            "1987 2005 3 1 0 2 2 1 D"
        ],
        "Aus": [
            "1917 1917 0 1 7 0:1 0 1",
            "1917 1917 2 25 7 2 0 0",
            "1942 1942 0 1 7 2 0 1",
            "1942 1942 2 29 7 2 0 0",
            "1942 1942 8 27 7 2 0 1",
            "1943 1944 2 0 8 2 0 0",
            "1943 1943 9 3 7 2 0 1"
        ],
        "AT": [
            "1967 1967 9 1 0 2 2 1",
            "1968 1968 2 0 8 2 2 0",
            "1968 1985 9 0 8 2 2 1",
            "1969 1971 2 8 0 2 2 0",
            "1972 1972 1 0 8 2 2 0",
            "1973 1981 2 1 0 2 2 0",
            "1982 1983 2 0 8 2 2 0",
            "1984 1986 2 1 0 2 2 0",
            "1986 1986 9 15 0 2 2 1",
            "1987 1990 2 15 0 2 2 0",
            "1987 1987 9 22 0 2 2 1",
            "1988 1990 9 0 8 2 2 1",
            "1991 1999 9 1 0 2 2 1",
            "1991 2005 2 0 8 2 2 0",
            "2000 2000 7 0 8 2 2 1",
            "2001 9999 9 1 0 2 2 1",
            "2006 2006 3 1 0 2 2 0",
            "2007 2007 2 0 8 2 2 0",
            "2008 9999 3 1 0 2 2 0"
        ],
        "NZAQ": [
            "1974 1974 10 3 7 2 2 1 D",
            "1975 1988 9 0 8 2 2 1 D",
            "1989 1989 9 8 7 2 2 1 D",
            "1990 2006 9 1 0 2 2 1 D",
            "1975 1975 1 23 7 2 2 0 S",
            "1976 1989 2 1 0 2 2 0 S",
            "1990 2007 2 15 0 2 2 0 S",
            "2007 9999 8 0 8 2 2 1 D",
            "2008 9999 3 1 0 2 2 0 S"
        ],
        "ArgAQ": [
            "1964 1966 2 1 7 0 0 0",
            "1964 1966 9 15 7 0 0 1 S",
            "1967 1967 3 2 7 0 0 0",
            "1967 1968 9 1 0 0 0 1 S",
            "1968 1969 3 1 0 0 0 0",
            "1974 1974 0 23 7 0 0 1 S",
            "1974 1974 4 1 7 0 0 0"
        ],
        "ChileAQ": [
            "1972 1986 2 9 0 3 1 0",
            "1974 1987 9 9 0 4 1 1 S",
            "1987 1987 3 12 7 3 1 0",
            "1988 1989 2 9 0 3 1 0",
            "1988 1988 9 1 0 4 1 1 S",
            "1989 1989 9 9 0 4 1 1 S",
            "1990 1990 2 18 7 3 1 0",
            "1990 1990 8 16 7 4 1 1 S",
            "1991 1996 2 9 0 3 1 0",
            "1991 1997 9 9 0 4 1 1 S",
            "1997 1997 2 30 7 3 1 0",
            "1998 1998 2 9 0 3 1 0",
            "1998 1998 8 27 7 4 1 1 S",
            "1999 1999 3 4 7 3 1 0",
            "1999 2010 9 9 0 4 1 1 S",
            "2000 2007 2 9 0 3 1 0",
            "2008 2008 2 30 7 3 1 0",
            "2009 2009 2 9 0 3 1 0",
            "2010 2010 3 1 0 3 1 0",
            "2011 2011 4 2 0 3 1 0",
            "2011 2011 7 16 0 4 1 1 S",
            "2012 9999 3 23 0 3 1 0",
            "2012 9999 8 2 0 4 1 1 S"
        ],
        "Norway": [
            "1916 1916 4 22 7 1 0 1 S",
            "1916 1916 8 30 7 0 0 0",
            "1945 1945 3 2 7 2 2 1 S",
            "1945 1945 9 1 7 2 2 0",
            "1959 1964 2 15 0 2 2 1 S",
            "1959 1965 8 15 0 2 2 0",
            "1965 1965 3 25 7 2 2 1 S"
        ],
        "RussiaAsia": [
            "1981 1984 3 1 7 0 0 1 S",
            "1981 1983 9 1 7 0 0 0",
            "1984 1991 8 0 8 2 2 0",
            "1985 1991 2 0 8 2 2 1 S",
            "1992 1992 2 6 8 23 0 1 S",
            "1992 1992 8 6 8 23 0 0",
            "1993 9999 2 0 8 2 2 1 S",
            "1993 1995 8 0 8 2 2 0",
            "1996 9999 9 0 8 2 2 0"
        ],
        "Jordan": [
            "1973 1973 5 6 7 0 0 1 S",
            "1973 1975 9 1 7 0 0 0",
            "1974 1977 4 1 7 0 0 1 S",
            "1976 1976 10 1 7 0 0 0",
            "1977 1977 9 1 7 0 0 0",
            "1978 1978 3 30 7 0 0 1 S",
            "1978 1978 8 30 7 0 0 0",
            "1985 1985 3 1 7 0 0 1 S",
            "1985 1985 9 1 7 0 0 0",
            "1986 1988 3 1 5 0 0 1 S",
            "1986 1990 9 1 5 0 0 0",
            "1989 1989 4 8 7 0 0 1 S",
            "1990 1990 3 27 7 0 0 1 S",
            "1991 1991 3 17 7 0 0 1 S",
            "1991 1991 8 27 7 0 0 0",
            "1992 1992 3 10 7 0 0 1 S",
            "1992 1993 9 1 5 0 0 0",
            "1993 1998 3 1 5 0 0 1 S",
            "1994 1994 8 15 5 0 0 0",
            "1995 1998 8 15 5 0 2 0",
            "1999 1999 6 1 7 0 2 1 S",
            "1999 2002 8 5 8 0 2 0",
            "2000 2001 2 4 8 0 2 1 S",
            "2002 9999 2 4 8 24 0 1 S",
            "2003 2003 9 24 7 0 2 0",
            "2004 2004 9 15 7 0 2 0",
            "2005 2005 8 5 8 0 2 0",
            "2006 2011 9 5 8 0 2 0",
            "2013 9999 9 5 8 0 2 0"
        ],
        "Russia": [
            "1917 1917 6 1 7 23 0 1 MST",
            "1917 1917 11 28 7 0 0 0 MMT",
            "1918 1918 4 31 7 22 0 2 MDST",
            "1918 1918 8 16 7 1 0 1 MST",
            "1919 1919 4 31 7 23 0 2 MDST",
            "1919 1919 6 1 7 2 0 1 S",
            "1919 1919 7 16 7 0 0 0",
            "1921 1921 1 14 7 23 0 1 S",
            "1921 1921 2 20 7 23 0 2 M",
            "1921 1921 8 1 7 0 0 1 S",
            "1921 1921 9 1 7 0 0 0",
            "1981 1984 3 1 7 0 0 1 S",
            "1981 1983 9 1 7 0 0 0",
            "1984 1991 8 0 8 2 2 0",
            "1985 1991 2 0 8 2 2 1 S",
            "1992 1992 2 6 8 23 0 1 S",
            "1992 1992 8 6 8 23 0 0",
            "1993 2010 2 0 8 2 2 1 S",
            "1993 1995 8 0 8 2 2 0",
            "1996 2010 9 0 8 2 2 0"
        ],
        "Iraq": [
            "1982 1982 4 1 7 0 0 1 D",
            "1982 1984 9 1 7 0 0 0 S",
            "1983 1983 2 31 7 0 0 1 D",
            "1984 1985 3 1 7 0 0 1 D",
            "1985 1990 8 0 8 1 2 0 S",
            "1986 1990 2 0 8 1 2 1 D",
            "1991 2007 3 1 7 3 2 1 D",
            "1991 2007 9 1 7 3 2 0 S"
        ],
        "EUAsia": [
            "1981 9999 2 0 8 1 1 1 S",
            "1979 1995 8 0 8 1 1 0",
            "1996 9999 9 0 8 1 1 0"
        ],
        "Azer": [
            "1997 9999 2 0 8 4 0 1 S",
            "1997 9999 9 0 8 5 0 0"
        ],
        "Lebanon": [
            "1920 1920 2 28 7 0 0 1 S",
            "1920 1920 9 25 7 0 0 0",
            "1921 1921 3 3 7 0 0 1 S",
            "1921 1921 9 3 7 0 0 0",
            "1922 1922 2 26 7 0 0 1 S",
            "1922 1922 9 8 7 0 0 0",
            "1923 1923 3 22 7 0 0 1 S",
            "1923 1923 8 16 7 0 0 0",
            "1957 1961 4 1 7 0 0 1 S",
            "1957 1961 9 1 7 0 0 0",
            "1972 1972 5 22 7 0 0 1 S",
            "1972 1977 9 1 7 0 0 0",
            "1973 1977 4 1 7 0 0 1 S",
            "1978 1978 3 30 7 0 0 1 S",
            "1978 1978 8 30 7 0 0 0",
            "1984 1987 4 1 7 0 0 1 S",
            "1984 1991 9 16 7 0 0 0",
            "1988 1988 5 1 7 0 0 1 S",
            "1989 1989 4 10 7 0 0 1 S",
            "1990 1992 4 1 7 0 0 1 S",
            "1992 1992 9 4 7 0 0 0",
            "1993 9999 2 0 8 0 0 1 S",
            "1993 1998 8 0 8 0 0 0",
            "1999 9999 9 0 8 0 0 0"
        ],
        "Kyrgyz": [
            "1992 1996 3 7 0 0 2 1 S",
            "1992 1996 8 0 8 0 0 0",
            "1997 2005 2 0 8 2:30 0 1 S",
            "1997 2004 9 0 8 2:30 0 0"
        ],
        "Mongol": [
            "1983 1984 3 1 7 0 0 1 S",
            "1983 1983 9 1 7 0 0 0",
            "1985 1998 2 0 8 0 0 1 S",
            "1984 1998 8 0 8 0 0 0",
            "2001 2001 3 6 8 2 0 1 S",
            "2001 2006 8 6 8 2 0 0",
            "2002 2006 2 6 8 2 0 1 S"
        ],
        "PRC": [
            "1986 1986 4 4 7 0 0 1 D",
            "1986 1991 8 11 0 0 0 0 S",
            "1987 1991 3 10 0 0 0 1 D"
        ],
        "Syria": [
            "1920 1923 3 15 0 2 0 1 S",
            "1920 1923 9 1 0 2 0 0",
            "1962 1962 3 29 7 2 0 1 S",
            "1962 1962 9 1 7 2 0 0",
            "1963 1965 4 1 7 2 0 1 S",
            "1963 1963 8 30 7 2 0 0",
            "1964 1964 9 1 7 2 0 0",
            "1965 1965 8 30 7 2 0 0",
            "1966 1966 3 24 7 2 0 1 S",
            "1966 1976 9 1 7 2 0 0",
            "1967 1978 4 1 7 2 0 1 S",
            "1977 1978 8 1 7 2 0 0",
            "1983 1984 3 9 7 2 0 1 S",
            "1983 1984 9 1 7 2 0 0",
            "1986 1986 1 16 7 2 0 1 S",
            "1986 1986 9 9 7 2 0 0",
            "1987 1987 2 1 7 2 0 1 S",
            "1987 1988 9 31 7 2 0 0",
            "1988 1988 2 15 7 2 0 1 S",
            "1989 1989 2 31 7 2 0 1 S",
            "1989 1989 9 1 7 2 0 0",
            "1990 1990 3 1 7 2 0 1 S",
            "1990 1990 8 30 7 2 0 0",
            "1991 1991 3 1 7 0 0 1 S",
            "1991 1992 9 1 7 0 0 0",
            "1992 1992 3 8 7 0 0 1 S",
            "1993 1993 2 26 7 0 0 1 S",
            "1993 1993 8 25 7 0 0 0",
            "1994 1996 3 1 7 0 0 1 S",
            "1994 2005 9 1 7 0 0 0",
            "1997 1998 2 1 8 0 0 1 S",
            "1999 2006 3 1 7 0 0 1 S",
            "2006 2006 8 22 7 0 0 0",
            "2007 2007 2 5 8 0 0 1 S",
            "2007 2007 10 1 5 0 0 0",
            "2008 2008 3 1 5 0 0 1 S",
            "2008 2008 10 1 7 0 0 0",
            "2009 2009 2 5 8 0 0 1 S",
            "2010 2011 3 1 5 0 0 1 S",
            "2012 9999 2 5 8 0 0 1 S",
            "2009 9999 9 5 8 0 0 0"
        ],
        "Dhaka": [
            "2009 2009 5 19 7 23 0 1 S",
            "2009 2009 11 31 7 23:59 0 0"
        ],
        "Zion": [
            "1940 1940 5 1 7 0 0 1 D",
            "1942 1944 10 1 7 0 0 0 S",
            "1943 1943 3 1 7 2 0 1 D",
            "1944 1944 3 1 7 0 0 1 D",
            "1945 1945 3 16 7 0 0 1 D",
            "1945 1945 10 1 7 2 0 0 S",
            "1946 1946 3 16 7 2 0 1 D",
            "1946 1946 10 1 7 0 0 0 S",
            "1948 1948 4 23 7 0 0 2 DD",
            "1948 1948 8 1 7 0 0 1 D",
            "1948 1949 10 1 7 2 0 0 S",
            "1949 1949 4 1 7 0 0 1 D",
            "1950 1950 3 16 7 0 0 1 D",
            "1950 1950 8 15 7 3 0 0 S",
            "1951 1951 3 1 7 0 0 1 D",
            "1951 1951 10 11 7 3 0 0 S",
            "1952 1952 3 20 7 2 0 1 D",
            "1952 1952 9 19 7 3 0 0 S",
            "1953 1953 3 12 7 2 0 1 D",
            "1953 1953 8 13 7 3 0 0 S",
            "1954 1954 5 13 7 0 0 1 D",
            "1954 1954 8 12 7 0 0 0 S",
            "1955 1955 5 11 7 2 0 1 D",
            "1955 1955 8 11 7 0 0 0 S",
            "1956 1956 5 3 7 0 0 1 D",
            "1956 1956 8 30 7 3 0 0 S",
            "1957 1957 3 29 7 2 0 1 D",
            "1957 1957 8 22 7 0 0 0 S",
            "1974 1974 6 7 7 0 0 1 D",
            "1974 1974 9 13 7 0 0 0 S",
            "1975 1975 3 20 7 0 0 1 D",
            "1975 1975 7 31 7 0 0 0 S",
            "1985 1985 3 14 7 0 0 1 D",
            "1985 1985 8 15 7 0 0 0 S",
            "1986 1986 4 18 7 0 0 1 D",
            "1986 1986 8 7 7 0 0 0 S",
            "1987 1987 3 15 7 0 0 1 D",
            "1987 1987 8 13 7 0 0 0 S",
            "1988 1988 3 9 7 0 0 1 D",
            "1988 1988 8 3 7 0 0 0 S",
            "1989 1989 3 30 7 0 0 1 D",
            "1989 1989 8 3 7 0 0 0 S",
            "1990 1990 2 25 7 0 0 1 D",
            "1990 1990 7 26 7 0 0 0 S",
            "1991 1991 2 24 7 0 0 1 D",
            "1991 1991 8 1 7 0 0 0 S",
            "1992 1992 2 29 7 0 0 1 D",
            "1992 1992 8 6 7 0 0 0 S",
            "1993 1993 3 2 7 0 0 1 D",
            "1993 1993 8 5 7 0 0 0 S",
            "1994 1994 3 1 7 0 0 1 D",
            "1994 1994 7 28 7 0 0 0 S",
            "1995 1995 2 31 7 0 0 1 D",
            "1995 1995 8 3 7 0 0 0 S",
            "1996 1996 2 15 7 0 0 1 D",
            "1996 1996 8 16 7 0 0 0 S",
            "1997 1997 2 21 7 0 0 1 D",
            "1997 1997 8 14 7 0 0 0 S",
            "1998 1998 2 20 7 0 0 1 D",
            "1998 1998 8 6 7 0 0 0 S",
            "1999 1999 3 2 7 2 0 1 D",
            "1999 1999 8 3 7 2 0 0 S",
            "2000 2000 3 14 7 2 0 1 D",
            "2000 2000 9 6 7 1 0 0 S",
            "2001 2001 3 9 7 1 0 1 D",
            "2001 2001 8 24 7 1 0 0 S",
            "2002 2002 2 29 7 1 0 1 D",
            "2002 2002 9 7 7 1 0 0 S",
            "2003 2003 2 28 7 1 0 1 D",
            "2003 2003 9 3 7 1 0 0 S",
            "2004 2004 3 7 7 1 0 1 D",
            "2004 2004 8 22 7 1 0 0 S",
            "2005 2005 3 1 7 2 0 1 D",
            "2005 2005 9 9 7 2 0 0 S",
            "2006 2010 2 26 5 2 0 1 D",
            "2006 2006 9 1 7 2 0 0 S",
            "2007 2007 8 16 7 2 0 0 S",
            "2008 2008 9 5 7 2 0 0 S",
            "2009 2009 8 27 7 2 0 0 S",
            "2010 2010 8 12 7 2 0 0 S",
            "2011 2011 3 1 7 2 0 1 D",
            "2011 2011 9 2 7 2 0 0 S",
            "2012 2012 2 26 5 2 0 1 D",
            "2012 2012 8 23 7 2 0 0 S",
            "2013 9999 2 23 5 2 0 1 D",
            "2013 2026 9 2 0 2 0 0 S",
            "2027 2027 9 3 1 2 0 0 S",
            "2028 9999 9 2 0 2 0 0 S"
        ],
        "EgyptAsia": [
            "1957 1957 4 10 7 0 0 1 S",
            "1957 1958 9 1 7 0 0 0",
            "1958 1958 4 1 7 0 0 1 S",
            "1959 1967 4 1 7 1 0 1 S",
            "1959 1965 8 30 7 3 0 0",
            "1966 1966 9 1 7 3 0 0"
        ],
        "Palestine": [
            "1999 2005 3 15 5 0 0 1 S",
            "1999 2003 9 15 5 0 0 0",
            "2004 2004 9 1 7 1 0 0",
            "2005 2005 9 4 7 2 0 0",
            "2006 2007 3 1 7 0 0 1 S",
            "2006 2006 8 22 7 0 0 0",
            "2007 2007 8 8 4 2 0 0",
            "2008 2009 2 5 8 0 0 1 S",
            "2008 2008 8 1 7 0 0 0",
            "2009 2009 8 1 5 1 0 0",
            "2010 2010 2 26 7 0 0 1 S",
            "2010 2010 7 11 7 0 0 0",
            "2011 2011 3 1 7 0:1 0 1 S",
            "2011 2011 7 1 7 0 0 0",
            "2011 2011 7 30 7 0 0 1 S",
            "2011 2011 8 30 7 0 0 0",
            "2012 9999 2 4 8 24 0 1 S",
            "2012 9999 8 21 5 1 0 0"
        ],
        "HK": [
            "1941 1941 3 1 7 3:30 0 1 S",
            "1941 1941 8 30 7 3:30 0 0",
            "1946 1946 3 20 7 3:30 0 1 S",
            "1946 1946 11 1 7 3:30 0 0",
            "1947 1947 3 13 7 3:30 0 1 S",
            "1947 1947 11 30 7 3:30 0 0",
            "1948 1948 4 2 7 3:30 0 1 S",
            "1948 1951 9 0 8 3:30 0 0",
            "1952 1952 9 25 7 3:30 0 0",
            "1949 1953 3 1 0 3:30 0 1 S",
            "1953 1953 10 1 7 3:30 0 0",
            "1954 1964 2 18 0 3:30 0 1 S",
            "1954 1954 9 31 7 3:30 0 0",
            "1955 1964 10 1 0 3:30 0 0",
            "1965 1976 3 16 0 3:30 0 1 S",
            "1965 1976 9 16 0 3:30 0 0",
            "1973 1973 11 30 7 3:30 0 1 S",
            "1979 1979 4 8 0 3:30 0 1 S",
            "1979 1979 9 16 0 3:30 0 0"
        ],
        "Pakistan": [
            "2002 2002 3 2 0 0:1 0 1 S",
            "2002 2002 9 2 0 0:1 0 0",
            "2008 2008 5 1 7 0 0 1 S",
            "2008 2008 10 1 7 0 0 0",
            "2009 2009 3 15 7 0 0 1 S",
            "2009 2009 10 1 7 0 0 0"
        ],
        "NBorneo": [
            "1935 1941 8 14 7 0 0 0:20 TS",
            "1935 1941 11 14 7 0 0 0"
        ],
        "Macau": [
            "1961 1962 2 16 0 3:30 0 1 S",
            "1961 1964 10 1 0 3:30 0 0",
            "1963 1963 2 16 0 0 0 1 S",
            "1964 1964 2 16 0 3:30 0 1 S",
            "1965 1965 2 16 0 0 0 1 S",
            "1965 1965 9 31 7 0 0 0",
            "1966 1971 3 16 0 3:30 0 1 S",
            "1966 1971 9 16 0 3:30 0 0",
            "1972 1974 3 15 0 0 0 1 S",
            "1972 1973 9 15 0 0 0 0",
            "1974 1977 9 15 0 3:30 0 0",
            "1975 1977 3 15 0 3:30 0 1 S",
            "1978 1980 3 15 0 0 0 1 S",
            "1978 1980 9 15 0 0 0 0"
        ],
        "Phil": [
            "1936 1936 10 1 7 0 0 1 S",
            "1937 1937 1 1 7 0 0 0",
            "1954 1954 3 12 7 0 0 1 S",
            "1954 1954 6 1 7 0 0 0",
            "1978 1978 2 22 7 0 0 1 S",
            "1978 1978 8 21 7 0 0 0"
        ],
        "Cyprus": [
            "1975 1975 3 13 7 0 0 1 S",
            "1975 1975 9 12 7 0 0 0",
            "1976 1976 4 15 7 0 0 1 S",
            "1976 1976 9 11 7 0 0 0",
            "1977 1980 3 1 0 0 0 1 S",
            "1977 1977 8 25 7 0 0 0",
            "1978 1978 9 2 7 0 0 0",
            "1979 1997 8 0 8 0 0 0",
            "1981 1998 2 0 8 0 0 1 S"
        ],
        "ROK": [
            "1960 1960 4 15 7 0 0 1 D",
            "1960 1960 8 13 7 0 0 0 S",
            "1987 1988 4 8 0 0 0 1 D",
            "1987 1988 9 8 0 0 0 0 S"
        ],
        "Shang": [
            "1940 1940 5 3 7 0 0 1 D",
            "1940 1941 9 1 7 0 0 0 S",
            "1941 1941 2 16 7 0 0 1 D"
        ],
        "Taiwan": [
            "1945 1951 4 1 7 0 0 1 D",
            "1945 1951 9 1 7 0 0 0 S",
            "1952 1952 2 1 7 0 0 1 D",
            "1952 1954 10 1 7 0 0 0 S",
            "1953 1959 3 1 7 0 0 1 D",
            "1955 1961 9 1 7 0 0 0 S",
            "1960 1961 5 1 7 0 0 1 D",
            "1974 1975 3 1 7 0 0 1 D",
            "1974 1975 9 1 7 0 0 0 S",
            "1979 1979 5 30 7 0 0 1 D",
            "1979 1979 8 30 7 0 0 0 S"
        ],
        "E-EurAsia": [
            "1981 9999 2 0 8 0 0 1 S",
            "1979 1995 8 0 8 0 0 0",
            "1996 9999 9 0 8 0 0 0"
        ],
        "Iran": [
            "1978 1980 2 21 7 0 0 1 D",
            "1978 1978 9 21 7 0 0 0 S",
            "1979 1979 8 19 7 0 0 0 S",
            "1980 1980 8 23 7 0 0 0 S",
            "1991 1991 4 3 7 0 0 1 D",
            "1992 1995 2 22 7 0 0 1 D",
            "1991 1995 8 22 7 0 0 0 S",
            "1996 1996 2 21 7 0 0 1 D",
            "1996 1996 8 21 7 0 0 0 S",
            "1997 1999 2 22 7 0 0 1 D",
            "1997 1999 8 22 7 0 0 0 S",
            "2000 2000 2 21 7 0 0 1 D",
            "2000 2000 8 21 7 0 0 0 S",
            "2001 2003 2 22 7 0 0 1 D",
            "2001 2003 8 22 7 0 0 0 S",
            "2004 2004 2 21 7 0 0 1 D",
            "2004 2004 8 21 7 0 0 0 S",
            "2005 2005 2 22 7 0 0 1 D",
            "2005 2005 8 22 7 0 0 0 S",
            "2008 2008 2 21 7 0 0 1 D",
            "2008 2008 8 21 7 0 0 0 S",
            "2009 2011 2 22 7 0 0 1 D",
            "2009 2011 8 22 7 0 0 0 S",
            "2012 2012 2 21 7 0 0 1 D",
            "2012 2012 8 21 7 0 0 0 S",
            "2013 2015 2 22 7 0 0 1 D",
            "2013 2015 8 22 7 0 0 0 S",
            "2016 2016 2 21 7 0 0 1 D",
            "2016 2016 8 21 7 0 0 0 S",
            "2017 2019 2 22 7 0 0 1 D",
            "2017 2019 8 22 7 0 0 0 S",
            "2020 2020 2 21 7 0 0 1 D",
            "2020 2020 8 21 7 0 0 0 S",
            "2021 2023 2 22 7 0 0 1 D",
            "2021 2023 8 22 7 0 0 0 S",
            "2024 2024 2 21 7 0 0 1 D",
            "2024 2024 8 21 7 0 0 0 S",
            "2025 2027 2 22 7 0 0 1 D",
            "2025 2027 8 22 7 0 0 0 S",
            "2028 2029 2 21 7 0 0 1 D",
            "2028 2029 8 21 7 0 0 0 S",
            "2030 2031 2 22 7 0 0 1 D",
            "2030 2031 8 22 7 0 0 0 S",
            "2032 2033 2 21 7 0 0 1 D",
            "2032 2033 8 21 7 0 0 0 S",
            "2034 2035 2 22 7 0 0 1 D",
            "2034 2035 8 22 7 0 0 0 S",
            "2036 2037 2 21 7 0 0 1 D",
            "2036 2037 8 21 7 0 0 0 S"
        ],
        "Japan": [
            "1948 1948 4 1 0 2 0 1 D",
            "1948 1951 8 8 6 2 0 0 S",
            "1949 1949 3 1 0 2 0 1 D",
            "1950 1951 4 1 0 2 0 1 D"
        ],
        "Port": [
            "1916 1916 5 17 7 23 0 1 S",
            "1916 1916 10 1 7 1 0 0",
            "1917 1917 1 28 7 23 2 1 S",
            "1917 1921 9 14 7 23 2 0",
            "1918 1918 2 1 7 23 2 1 S",
            "1919 1919 1 28 7 23 2 1 S",
            "1920 1920 1 29 7 23 2 1 S",
            "1921 1921 1 28 7 23 2 1 S",
            "1924 1924 3 16 7 23 2 1 S",
            "1924 1924 9 14 7 23 2 0",
            "1926 1926 3 17 7 23 2 1 S",
            "1926 1929 9 1 6 23 2 0",
            "1927 1927 3 9 7 23 2 1 S",
            "1928 1928 3 14 7 23 2 1 S",
            "1929 1929 3 20 7 23 2 1 S",
            "1931 1931 3 18 7 23 2 1 S",
            "1931 1932 9 1 6 23 2 0",
            "1932 1932 3 2 7 23 2 1 S",
            "1934 1934 3 7 7 23 2 1 S",
            "1934 1938 9 1 6 23 2 0",
            "1935 1935 2 30 7 23 2 1 S",
            "1936 1936 3 18 7 23 2 1 S",
            "1937 1937 3 3 7 23 2 1 S",
            "1938 1938 2 26 7 23 2 1 S",
            "1939 1939 3 15 7 23 2 1 S",
            "1939 1939 10 18 7 23 2 0",
            "1940 1940 1 24 7 23 2 1 S",
            "1940 1941 9 5 7 23 2 0",
            "1941 1941 3 5 7 23 2 1 S",
            "1942 1945 2 8 6 23 2 1 S",
            "1942 1942 3 25 7 22 2 2 M",
            "1942 1942 7 15 7 22 2 1 S",
            "1942 1945 9 24 6 23 2 0",
            "1943 1943 3 17 7 22 2 2 M",
            "1943 1945 7 25 6 22 2 1 S",
            "1944 1945 3 21 6 22 2 2 M",
            "1946 1946 3 1 6 23 2 1 S",
            "1946 1946 9 1 6 23 2 0",
            "1947 1949 3 1 0 2 2 1 S",
            "1947 1949 9 1 0 2 2 0",
            "1951 1965 3 1 0 2 2 1 S",
            "1951 1965 9 1 0 2 2 0",
            "1977 1977 2 27 7 0 2 1 S",
            "1977 1977 8 25 7 0 2 0",
            "1978 1979 3 1 0 0 2 1 S",
            "1978 1978 9 1 7 0 2 0",
            "1979 1982 8 0 8 1 2 0",
            "1980 1980 2 0 8 0 2 1 S",
            "1981 1982 2 0 8 1 2 1 S",
            "1983 1983 2 0 8 2 2 1 S"
        ],
        "W-Eur": [
            "1977 1980 3 1 0 1 2 1 S",
            "1977 1977 8 0 8 1 2 0",
            "1978 1978 9 1 7 1 2 0",
            "1979 1995 8 0 8 1 2 0",
            "1981 9999 2 0 8 1 2 1 S",
            "1996 9999 9 0 8 1 2 0"
        ],
        "Iceland": [
            "1917 1918 1 19 7 23 0 1 S",
            "1917 1917 9 21 7 1 0 0",
            "1918 1918 10 16 7 1 0 0",
            "1939 1939 3 29 7 23 0 1 S",
            "1939 1939 10 29 7 2 0 0",
            "1940 1940 1 25 7 2 0 1 S",
            "1940 1940 10 3 7 2 0 0",
            "1941 1941 2 2 7 1 2 1 S",
            "1941 1941 10 2 7 1 2 0",
            "1942 1942 2 8 7 1 2 1 S",
            "1942 1942 9 25 7 1 2 0",
            "1943 1946 2 1 0 1 2 1 S",
            "1943 1948 9 22 0 1 2 0",
            "1947 1967 3 1 0 1 2 1 S",
            "1949 1949 9 30 7 1 2 0",
            "1950 1966 9 22 0 1 2 0",
            "1967 1967 9 29 7 1 2 0"
        ],
        "Falk": [
            "1937 1938 8 0 8 0 0 1 S",
            "1938 1942 2 19 0 0 0 0",
            "1939 1939 9 1 7 0 0 1 S",
            "1940 1942 8 0 8 0 0 1 S",
            "1943 1943 0 1 7 0 0 0",
            "1983 1983 8 0 8 0 0 1 S",
            "1984 1985 3 0 8 0 0 0",
            "1984 1984 8 16 7 0 0 1 S",
            "1985 2000 8 9 0 0 0 1 S",
            "1986 2000 3 16 0 0 0 0",
            "2001 2010 3 15 0 2 0 0",
            "2001 2010 8 1 0 2 0 1 S"
        ],
        "AS": [
            "1971 1985 9 0 8 2 2 1",
            "1986 1986 9 19 7 2 2 1",
            "1987 2007 9 0 8 2 2 1",
            "1972 1972 1 27 7 2 2 0",
            "1973 1985 2 1 0 2 2 0",
            "1986 1990 2 15 0 2 2 0",
            "1991 1991 2 3 7 2 2 0",
            "1992 1992 2 22 7 2 2 0",
            "1993 1993 2 7 7 2 2 0",
            "1994 1994 2 20 7 2 2 0",
            "1995 2005 2 0 8 2 2 0",
            "2006 2006 3 2 7 2 2 0",
            "2007 2007 2 0 8 2 2 0",
            "2008 9999 3 1 0 2 2 0",
            "2008 9999 9 1 0 2 2 1"
        ],
        "AQ": [
            "1971 1971 9 0 8 2 2 1",
            "1972 1972 1 0 8 2 2 0",
            "1989 1991 9 0 8 2 2 1",
            "1990 1992 2 1 0 2 2 0"
        ],
        "AN": [
            "1971 1985 9 0 8 2 2 1",
            "1972 1972 1 27 7 2 2 0",
            "1973 1981 2 1 0 2 2 0",
            "1982 1982 3 1 0 2 2 0",
            "1983 1985 2 1 0 2 2 0",
            "1986 1989 2 15 0 2 2 0",
            "1986 1986 9 19 7 2 2 1",
            "1987 1999 9 0 8 2 2 1",
            "1990 1995 2 1 0 2 2 0",
            "1996 2005 2 0 8 2 2 0",
            "2000 2000 7 0 8 2 2 1",
            "2001 2007 9 0 8 2 2 1",
            "2006 2006 3 1 0 2 2 0",
            "2007 2007 2 0 8 2 2 0",
            "2008 9999 3 1 0 2 2 0",
            "2008 9999 9 1 0 2 2 1"
        ],
        "AW": [
            "1974 1974 9 0 8 2 2 1",
            "1975 1975 2 1 0 2 2 0",
            "1983 1983 9 0 8 2 2 1",
            "1984 1984 2 1 0 2 2 0",
            "1991 1991 10 17 7 2 2 1",
            "1992 1992 2 1 0 2 2 0",
            "2006 2006 11 3 7 2 2 1",
            "2007 2009 2 0 8 2 2 0",
            "2007 2008 9 0 8 2 2 1"
        ],
        "Holiday": [
            "1992 1993 9 0 8 2 2 1",
            "1993 1994 2 1 0 2 2 0"
        ],
        "LH": [
            "1981 1984 9 0 8 2 0 1",
            "1982 1985 2 1 0 2 0 0",
            "1985 1985 9 0 8 2 0 0:30",
            "1986 1989 2 15 0 2 0 0",
            "1986 1986 9 19 7 2 0 0:30",
            "1987 1999 9 0 8 2 0 0:30",
            "1990 1995 2 1 0 2 0 0",
            "1996 2005 2 0 8 2 0 0",
            "2000 2000 7 0 8 2 0 0:30",
            "2001 2007 9 0 8 2 0 0:30",
            "2006 2006 3 1 0 2 0 0",
            "2007 2007 2 0 8 2 0 0",
            "2008 9999 3 1 0 2 0 0",
            "2008 9999 9 1 0 2 0 0:30"
        ],
        "AV": [
            "1971 1985 9 0 8 2 2 1",
            "1972 1972 1 0 8 2 2 0",
            "1973 1985 2 1 0 2 2 0",
            "1986 1990 2 15 0 2 2 0",
            "1986 1987 9 15 0 2 2 1",
            "1988 1999 9 0 8 2 2 1",
            "1991 1994 2 1 0 2 2 0",
            "1995 2005 2 0 8 2 2 0",
            "2000 2000 7 0 8 2 2 1",
            "2001 2007 9 0 8 2 2 1",
            "2006 2006 3 1 0 2 2 0",
            "2007 2007 2 0 8 2 2 0",
            "2008 9999 3 1 0 2 2 0",
            "2008 9999 9 1 0 2 2 1"
        ],
        "Neth": [
            "1916 1916 4 1 7 0 0 1 NST",
            "1916 1916 9 1 7 0 0 0 AMT",
            "1917 1917 3 16 7 2 2 1 NST",
            "1917 1917 8 17 7 2 2 0 AMT",
            "1918 1921 3 1 1 2 2 1 NST",
            "1918 1921 8 1 8 2 2 0 AMT",
            "1922 1922 2 0 8 2 2 1 NST",
            "1922 1936 9 2 0 2 2 0 AMT",
            "1923 1923 5 1 5 2 2 1 NST",
            "1924 1924 2 0 8 2 2 1 NST",
            "1925 1925 5 1 5 2 2 1 NST",
            "1926 1931 4 15 7 2 2 1 NST",
            "1932 1932 4 22 7 2 2 1 NST",
            "1933 1936 4 15 7 2 2 1 NST",
            "1937 1937 4 22 7 2 2 1 NST",
            "1937 1937 6 1 7 0 0 1 S",
            "1937 1939 9 2 0 2 2 0",
            "1938 1939 4 15 7 2 2 1 S",
            "1945 1945 3 2 7 2 2 1 S",
            "1945 1945 8 16 7 2 2 0"
        ],
        "Greece": [
            "1932 1932 6 7 7 0 0 1 S",
            "1932 1932 8 1 7 0 0 0",
            "1941 1941 3 7 7 0 0 1 S",
            "1942 1942 10 2 7 3 0 0",
            "1943 1943 2 30 7 0 0 1 S",
            "1943 1943 9 4 7 0 0 0",
            "1952 1952 6 1 7 0 0 1 S",
            "1952 1952 10 2 7 0 0 0",
            "1975 1975 3 12 7 0 2 1 S",
            "1975 1975 10 26 7 0 2 0",
            "1976 1976 3 11 7 2 2 1 S",
            "1976 1976 9 10 7 2 2 0",
            "1977 1978 3 1 0 2 2 1 S",
            "1977 1977 8 26 7 2 2 0",
            "1978 1978 8 24 7 4 0 0",
            "1979 1979 3 1 7 9 0 1 S",
            "1979 1979 8 29 7 2 0 0",
            "1980 1980 3 1 7 0 0 1 S",
            "1980 1980 8 28 7 0 0 0"
        ],
        "SovietZone": [
            "1945 1945 4 24 7 2 0 2 M",
            "1945 1945 8 24 7 3 0 1 S",
            "1945 1945 10 18 7 2 2 0"
        ],
        "Germany": [
            "1946 1946 3 14 7 2 2 1 S",
            "1946 1946 9 7 7 2 2 0",
            "1947 1949 9 1 0 2 2 0",
            "1947 1947 3 6 7 3 2 1 S",
            "1947 1947 4 11 7 2 2 2 M",
            "1947 1947 5 29 7 3 0 1 S",
            "1948 1948 3 18 7 2 2 1 S",
            "1949 1949 3 10 7 2 2 1 S"
        ],
        "Czech": [
            "1945 1945 3 8 7 2 2 1 S",
            "1945 1945 10 18 7 2 2 0",
            "1946 1946 4 6 7 2 2 1 S",
            "1946 1949 9 1 0 2 2 0",
            "1947 1947 3 20 7 2 2 1 S",
            "1948 1948 3 18 7 2 2 1 S",
            "1949 1949 3 9 7 2 2 1 S"
        ],
        "Belgium": [
            "1918 1918 2 9 7 0 2 1 S",
            "1918 1919 9 1 6 23 2 0",
            "1919 1919 2 1 7 23 2 1 S",
            "1920 1920 1 14 7 23 2 1 S",
            "1920 1920 9 23 7 23 2 0",
            "1921 1921 2 14 7 23 2 1 S",
            "1921 1921 9 25 7 23 2 0",
            "1922 1922 2 25 7 23 2 1 S",
            "1922 1927 9 1 6 23 2 0",
            "1923 1923 3 21 7 23 2 1 S",
            "1924 1924 2 29 7 23 2 1 S",
            "1925 1925 3 4 7 23 2 1 S",
            "1926 1926 3 17 7 23 2 1 S",
            "1927 1927 3 9 7 23 2 1 S",
            "1928 1928 3 14 7 23 2 1 S",
            "1928 1938 9 2 0 2 2 0",
            "1929 1929 3 21 7 2 2 1 S",
            "1930 1930 3 13 7 2 2 1 S",
            "1931 1931 3 19 7 2 2 1 S",
            "1932 1932 3 3 7 2 2 1 S",
            "1933 1933 2 26 7 2 2 1 S",
            "1934 1934 3 8 7 2 2 1 S",
            "1935 1935 2 31 7 2 2 1 S",
            "1936 1936 3 19 7 2 2 1 S",
            "1937 1937 3 4 7 2 2 1 S",
            "1938 1938 2 27 7 2 2 1 S",
            "1939 1939 3 16 7 2 2 1 S",
            "1939 1939 10 19 7 2 2 0",
            "1940 1940 1 25 7 2 2 1 S",
            "1944 1944 8 17 7 2 2 0",
            "1945 1945 3 2 7 2 2 1 S",
            "1945 1945 8 16 7 2 2 0",
            "1946 1946 4 19 7 2 2 1 S",
            "1946 1946 9 7 7 2 2 0"
        ],
        "Romania": [
            "1932 1932 4 21 7 0 2 1 S",
            "1932 1939 9 1 0 0 2 0",
            "1933 1939 3 2 0 0 2 1 S",
            "1979 1979 4 27 7 0 0 1 S",
            "1979 1979 8 0 8 0 0 0",
            "1980 1980 3 5 7 23 0 1 S",
            "1980 1980 8 0 8 1 0 0",
            "1991 1993 2 0 8 0 2 1 S",
            "1991 1993 8 0 8 0 2 0"
        ],
        "E-Eur": [
            "1977 1980 3 1 0 0 0 1 S",
            "1977 1977 8 0 8 0 0 0",
            "1978 1978 9 1 7 0 0 0",
            "1979 1995 8 0 8 0 0 0",
            "1981 9999 2 0 8 0 0 1 S",
            "1996 9999 9 0 8 0 0 0"
        ],
        "Hungary": [
            "1918 1918 3 1 7 3 0 1 S",
            "1918 1918 8 29 7 3 0 0",
            "1919 1919 3 15 7 3 0 1 S",
            "1919 1919 8 15 7 3 0 0",
            "1920 1920 3 5 7 3 0 1 S",
            "1920 1920 8 30 7 3 0 0",
            "1945 1945 4 1 7 23 0 1 S",
            "1945 1945 10 3 7 0 0 0",
            "1946 1946 2 31 7 2 2 1 S",
            "1946 1949 9 1 0 2 2 0",
            "1947 1949 3 4 0 2 2 1 S",
            "1950 1950 3 17 7 2 2 1 S",
            "1950 1950 9 23 7 2 2 0",
            "1954 1955 4 23 7 0 0 1 S",
            "1954 1955 9 3 7 0 0 0",
            "1956 1956 5 1 0 0 0 1 S",
            "1956 1956 8 0 8 0 0 0",
            "1957 1957 5 1 0 1 0 1 S",
            "1957 1957 8 0 8 3 0 0",
            "1980 1980 3 6 7 1 0 1 S"
        ],
        "Swiss": [
            "1941 1942 4 1 1 1 0 1 S",
            "1941 1942 9 1 1 2 0 0"
        ],
        "Denmark": [
            "1916 1916 4 14 7 23 0 1 S",
            "1916 1916 8 30 7 23 0 0",
            "1940 1940 4 15 7 0 0 1 S",
            "1945 1945 3 2 7 2 2 1 S",
            "1945 1945 7 15 7 2 2 0",
            "1946 1946 4 1 7 2 2 1 S",
            "1946 1946 8 1 7 2 2 0",
            "1947 1947 4 4 7 2 2 1 S",
            "1947 1947 7 10 7 2 2 0",
            "1948 1948 4 9 7 2 2 1 S",
            "1948 1948 7 8 7 2 2 0"
        ],
        "GB-Eire": [
            "1916 1916 4 21 7 2 2 1 BST",
            "1916 1916 9 1 7 2 2 0 GMT",
            "1917 1917 3 8 7 2 2 1 BST",
            "1917 1917 8 17 7 2 2 0 GMT",
            "1918 1918 2 24 7 2 2 1 BST",
            "1918 1918 8 30 7 2 2 0 GMT",
            "1919 1919 2 30 7 2 2 1 BST",
            "1919 1919 8 29 7 2 2 0 GMT",
            "1920 1920 2 28 7 2 2 1 BST",
            "1920 1920 9 25 7 2 2 0 GMT",
            "1921 1921 3 3 7 2 2 1 BST",
            "1921 1921 9 3 7 2 2 0 GMT",
            "1922 1922 2 26 7 2 2 1 BST",
            "1922 1922 9 8 7 2 2 0 GMT",
            "1923 1923 3 16 0 2 2 1 BST",
            "1923 1924 8 16 0 2 2 0 GMT",
            "1924 1924 3 9 0 2 2 1 BST",
            "1925 1926 3 16 0 2 2 1 BST",
            "1925 1938 9 2 0 2 2 0 GMT",
            "1927 1927 3 9 0 2 2 1 BST",
            "1928 1929 3 16 0 2 2 1 BST",
            "1930 1930 3 9 0 2 2 1 BST",
            "1931 1932 3 16 0 2 2 1 BST",
            "1933 1933 3 9 0 2 2 1 BST",
            "1934 1934 3 16 0 2 2 1 BST",
            "1935 1935 3 9 0 2 2 1 BST",
            "1936 1937 3 16 0 2 2 1 BST",
            "1938 1938 3 9 0 2 2 1 BST",
            "1939 1939 3 16 0 2 2 1 BST",
            "1939 1939 10 16 0 2 2 0 GMT",
            "1940 1940 1 23 0 2 2 1 BST",
            "1941 1941 4 2 0 1 2 2 BDST",
            "1941 1943 7 9 0 1 2 1 BST",
            "1942 1944 3 2 0 1 2 2 BDST",
            "1944 1944 8 16 0 1 2 1 BST",
            "1945 1945 3 2 1 1 2 2 BDST",
            "1945 1945 6 9 0 1 2 1 BST",
            "1945 1946 9 2 0 2 2 0 GMT",
            "1946 1946 3 9 0 2 2 1 BST",
            "1947 1947 2 16 7 2 2 1 BST",
            "1947 1947 3 13 7 1 2 2 BDST",
            "1947 1947 7 10 7 1 2 1 BST",
            "1947 1947 10 2 7 2 2 0 GMT",
            "1948 1948 2 14 7 2 2 1 BST",
            "1948 1948 9 31 7 2 2 0 GMT",
            "1949 1949 3 3 7 2 2 1 BST",
            "1949 1949 9 30 7 2 2 0 GMT",
            "1950 1952 3 14 0 2 2 1 BST",
            "1950 1952 9 21 0 2 2 0 GMT",
            "1953 1953 3 16 0 2 2 1 BST",
            "1953 1960 9 2 0 2 2 0 GMT",
            "1954 1954 3 9 0 2 2 1 BST",
            "1955 1956 3 16 0 2 2 1 BST",
            "1957 1957 3 9 0 2 2 1 BST",
            "1958 1959 3 16 0 2 2 1 BST",
            "1960 1960 3 9 0 2 2 1 BST",
            "1961 1963 2 0 8 2 2 1 BST",
            "1961 1968 9 23 0 2 2 0 GMT",
            "1964 1967 2 19 0 2 2 1 BST",
            "1968 1968 1 18 7 2 2 1 BST",
            "1972 1980 2 16 0 2 2 1 BST",
            "1972 1980 9 23 0 2 2 0 GMT",
            "1981 1995 2 0 8 1 1 1 BST",
            "1981 1989 9 23 0 1 1 0 GMT",
            "1990 1995 9 22 0 1 1 0 GMT"
        ],
        "Finland": [
            "1942 1942 3 3 7 0 0 1 S",
            "1942 1942 9 3 7 0 0 0",
            "1981 1982 2 0 8 2 0 1 S",
            "1981 1982 8 0 8 3 0 0"
        ],
        "Turkey": [
            "1916 1916 4 1 7 0 0 1 S",
            "1916 1916 9 1 7 0 0 0",
            "1920 1920 2 28 7 0 0 1 S",
            "1920 1920 9 25 7 0 0 0",
            "1921 1921 3 3 7 0 0 1 S",
            "1921 1921 9 3 7 0 0 0",
            "1922 1922 2 26 7 0 0 1 S",
            "1922 1922 9 8 7 0 0 0",
            "1924 1924 4 13 7 0 0 1 S",
            "1924 1925 9 1 7 0 0 0",
            "1925 1925 4 1 7 0 0 1 S",
            "1940 1940 5 30 7 0 0 1 S",
            "1940 1940 9 5 7 0 0 0",
            "1940 1940 11 1 7 0 0 1 S",
            "1941 1941 8 21 7 0 0 0",
            "1942 1942 3 1 7 0 0 1 S",
            "1942 1942 10 1 7 0 0 0",
            "1945 1945 3 2 7 0 0 1 S",
            "1945 1945 9 8 7 0 0 0",
            "1946 1946 5 1 7 0 0 1 S",
            "1946 1946 9 1 7 0 0 0",
            "1947 1948 3 16 0 0 0 1 S",
            "1947 1950 9 2 0 0 0 0",
            "1949 1949 3 10 7 0 0 1 S",
            "1950 1950 3 19 7 0 0 1 S",
            "1951 1951 3 22 7 0 0 1 S",
            "1951 1951 9 8 7 0 0 0",
            "1962 1962 6 15 7 0 0 1 S",
            "1962 1962 9 8 7 0 0 0",
            "1964 1964 4 15 7 0 0 1 S",
            "1964 1964 9 1 7 0 0 0",
            "1970 1972 4 2 0 0 0 1 S",
            "1970 1972 9 2 0 0 0 0",
            "1973 1973 5 3 7 1 0 1 S",
            "1973 1973 10 4 7 3 0 0",
            "1974 1974 2 31 7 2 0 1 S",
            "1974 1974 10 3 7 5 0 0",
            "1975 1975 2 30 7 0 0 1 S",
            "1975 1976 9 0 8 0 0 0",
            "1976 1976 5 1 7 0 0 1 S",
            "1977 1978 3 1 0 0 0 1 S",
            "1977 1977 9 16 7 0 0 0",
            "1979 1980 3 1 0 3 0 1 S",
            "1979 1982 9 11 1 0 0 0",
            "1981 1982 2 0 8 3 0 1 S",
            "1983 1983 6 31 7 0 0 1 S",
            "1983 1983 9 2 7 0 0 0",
            "1985 1985 3 20 7 0 0 1 S",
            "1985 1985 8 28 7 0 0 0",
            "1986 1990 2 0 8 2 2 1 S",
            "1986 1990 8 0 8 2 2 0",
            "1991 2006 2 0 8 1 2 1 S",
            "1991 1995 8 0 8 1 2 0",
            "1996 2006 9 0 8 1 2 0"
        ],
        "Poland": [
            "1918 1919 8 16 7 2 2 0",
            "1919 1919 3 15 7 2 2 1 S",
            "1944 1944 3 3 7 2 2 1 S",
            "1944 1944 9 4 7 2 0 0",
            "1945 1945 3 29 7 0 0 1 S",
            "1945 1945 10 1 7 0 0 0",
            "1946 1946 3 14 7 0 2 1 S",
            "1946 1946 9 7 7 2 2 0",
            "1947 1947 4 4 7 2 2 1 S",
            "1947 1949 9 1 0 2 2 0",
            "1948 1948 3 18 7 2 2 1 S",
            "1949 1949 3 10 7 2 2 1 S",
            "1957 1957 5 2 7 1 2 1 S",
            "1957 1958 8 0 8 1 2 0",
            "1958 1958 2 30 7 1 2 1 S",
            "1959 1959 4 31 7 1 2 1 S",
            "1959 1961 9 1 0 1 2 0",
            "1960 1960 3 3 7 1 2 1 S",
            "1961 1964 4 0 8 1 2 1 S",
            "1962 1964 8 0 8 1 2 0"
        ],
        "Lux": [
            "1916 1916 4 14 7 23 0 1 S",
            "1916 1916 9 1 7 1 0 0",
            "1917 1917 3 28 7 23 0 1 S",
            "1917 1917 8 17 7 1 0 0",
            "1918 1918 3 15 1 2 2 1 S",
            "1918 1918 8 15 1 2 2 0",
            "1919 1919 2 1 7 23 0 1 S",
            "1919 1919 9 5 7 3 0 0",
            "1920 1920 1 14 7 23 0 1 S",
            "1920 1920 9 24 7 2 0 0",
            "1921 1921 2 14 7 23 0 1 S",
            "1921 1921 9 26 7 2 0 0",
            "1922 1922 2 25 7 23 0 1 S",
            "1922 1922 9 2 0 1 0 0",
            "1923 1923 3 21 7 23 0 1 S",
            "1923 1923 9 2 0 2 0 0",
            "1924 1924 2 29 7 23 0 1 S",
            "1924 1928 9 2 0 1 0 0",
            "1925 1925 3 5 7 23 0 1 S",
            "1926 1926 3 17 7 23 0 1 S",
            "1927 1927 3 9 7 23 0 1 S",
            "1928 1928 3 14 7 23 0 1 S",
            "1929 1929 3 20 7 23 0 1 S"
        ],
        "Italy": [
            "1916 1916 5 3 7 0 2 1 S",
            "1916 1916 9 1 7 0 2 0",
            "1917 1917 3 1 7 0 2 1 S",
            "1917 1917 8 30 7 0 2 0",
            "1918 1918 2 10 7 0 2 1 S",
            "1918 1919 9 1 0 0 2 0",
            "1919 1919 2 2 7 0 2 1 S",
            "1920 1920 2 21 7 0 2 1 S",
            "1920 1920 8 19 7 0 2 0",
            "1940 1940 5 15 7 0 2 1 S",
            "1944 1944 8 17 7 0 2 0",
            "1945 1945 3 2 7 2 0 1 S",
            "1945 1945 8 15 7 0 2 0",
            "1946 1946 2 17 7 2 2 1 S",
            "1946 1946 9 6 7 2 2 0",
            "1947 1947 2 16 7 0 2 1 S",
            "1947 1947 9 5 7 0 2 0",
            "1948 1948 1 29 7 2 2 1 S",
            "1948 1948 9 3 7 2 2 0",
            "1966 1968 4 22 0 0 0 1 S",
            "1966 1969 8 22 0 0 0 0",
            "1969 1969 5 1 7 0 0 1 S",
            "1970 1970 4 31 7 0 0 1 S",
            "1970 1970 8 0 8 0 0 0",
            "1971 1972 4 22 0 0 0 1 S",
            "1971 1971 8 0 8 1 0 0",
            "1972 1972 9 1 7 0 0 0",
            "1973 1973 5 3 7 0 0 1 S",
            "1973 1974 8 0 8 0 0 0",
            "1974 1974 4 26 7 0 0 1 S",
            "1975 1975 5 1 7 0 2 1 S",
            "1975 1977 8 0 8 0 2 0",
            "1976 1976 4 30 7 0 2 1 S",
            "1977 1979 4 22 0 0 2 1 S",
            "1978 1978 9 1 7 0 2 0",
            "1979 1979 8 30 7 0 2 0"
        ],
        "Malta": [
            "1973 1973 2 31 7 0 2 1 S",
            "1973 1973 8 29 7 0 2 0",
            "1974 1974 3 21 7 0 2 1 S",
            "1974 1974 8 16 7 0 2 0",
            "1975 1979 3 15 0 2 0 1 S",
            "1975 1980 8 15 0 2 0 0",
            "1980 1980 2 31 7 2 0 1 S"
        ],
        "France": [
            "1916 1916 5 14 7 23 2 1 S",
            "1916 1919 9 1 0 23 2 0",
            "1917 1917 2 24 7 23 2 1 S",
            "1918 1918 2 9 7 23 2 1 S",
            "1919 1919 2 1 7 23 2 1 S",
            "1920 1920 1 14 7 23 2 1 S",
            "1920 1920 9 23 7 23 2 0",
            "1921 1921 2 14 7 23 2 1 S",
            "1921 1921 9 25 7 23 2 0",
            "1922 1922 2 25 7 23 2 1 S",
            "1922 1938 9 1 6 23 2 0",
            "1923 1923 4 26 7 23 2 1 S",
            "1924 1924 2 29 7 23 2 1 S",
            "1925 1925 3 4 7 23 2 1 S",
            "1926 1926 3 17 7 23 2 1 S",
            "1927 1927 3 9 7 23 2 1 S",
            "1928 1928 3 14 7 23 2 1 S",
            "1929 1929 3 20 7 23 2 1 S",
            "1930 1930 3 12 7 23 2 1 S",
            "1931 1931 3 18 7 23 2 1 S",
            "1932 1932 3 2 7 23 2 1 S",
            "1933 1933 2 25 7 23 2 1 S",
            "1934 1934 3 7 7 23 2 1 S",
            "1935 1935 2 30 7 23 2 1 S",
            "1936 1936 3 18 7 23 2 1 S",
            "1937 1937 3 3 7 23 2 1 S",
            "1938 1938 2 26 7 23 2 1 S",
            "1939 1939 3 15 7 23 2 1 S",
            "1939 1939 10 18 7 23 2 0",
            "1940 1940 1 25 7 2 0 1 S",
            "1941 1941 4 5 7 0 0 2 M",
            "1941 1941 9 6 7 0 0 1 S",
            "1942 1942 2 9 7 0 0 2 M",
            "1942 1942 10 2 7 3 0 1 S",
            "1943 1943 2 29 7 2 0 2 M",
            "1943 1943 9 4 7 3 0 1 S",
            "1944 1944 3 3 7 2 0 2 M",
            "1944 1944 9 8 7 1 0 1 S",
            "1945 1945 3 2 7 2 0 2 M",
            "1945 1945 8 16 7 3 0 0",
            "1976 1976 2 28 7 1 0 1 S",
            "1976 1976 8 26 7 1 0 0"
        ],
        "Latvia": [
            "1989 1996 2 0 8 2 2 1 S",
            "1989 1996 8 0 8 2 2 0"
        ],
        "Bulg": [
            "1979 1979 2 31 7 23 0 1 S",
            "1979 1979 9 1 7 1 0 0",
            "1980 1982 3 1 6 23 0 1 S",
            "1980 1980 8 29 7 1 0 0",
            "1981 1981 8 27 7 2 0 0"
        ],
        "Albania": [
            "1940 1940 5 16 7 0 0 1 S",
            "1942 1942 10 2 7 3 0 0",
            "1943 1943 2 29 7 2 0 1 S",
            "1943 1943 3 10 7 3 0 0",
            "1974 1974 4 4 7 0 0 1 S",
            "1974 1974 9 2 7 0 0 0",
            "1975 1975 4 1 7 0 0 1 S",
            "1975 1975 9 2 7 0 0 0",
            "1976 1976 4 2 7 0 0 1 S",
            "1976 1976 9 3 7 0 0 0",
            "1977 1977 4 8 7 0 0 1 S",
            "1977 1977 9 2 7 0 0 0",
            "1978 1978 4 6 7 0 0 1 S",
            "1978 1978 9 1 7 0 0 0",
            "1979 1979 4 5 7 0 0 1 S",
            "1979 1979 8 30 7 0 0 0",
            "1980 1980 4 3 7 0 0 1 S",
            "1980 1980 9 4 7 0 0 0",
            "1981 1981 3 26 7 0 0 1 S",
            "1981 1981 8 27 7 0 0 0",
            "1982 1982 4 2 7 0 0 1 S",
            "1982 1982 9 3 7 0 0 0",
            "1983 1983 3 18 7 0 0 1 S",
            "1983 1983 9 1 7 0 0 0",
            "1984 1984 3 1 7 0 0 1 S"
        ],
        "Austria": [
            "1920 1920 3 5 7 2 2 1 S",
            "1920 1920 8 13 7 2 2 0",
            "1946 1946 3 14 7 2 2 1 S",
            "1946 1948 9 1 0 2 2 0",
            "1947 1947 3 6 7 2 2 1 S",
            "1948 1948 3 18 7 2 2 1 S",
            "1980 1980 3 6 7 0 0 1 S",
            "1980 1980 8 28 7 0 0 0"
        ],
        "Mauritius": [
            "1982 1982 9 10 7 0 0 1 S",
            "1983 1983 2 21 7 0 0 0",
            "2008 2008 9 0 8 2 0 1 S",
            "2009 2009 2 0 8 2 0 0"
        ],
        "WS": [
            "2012 9999 8 0 8 3 0 1 D",
            "2012 9999 3 1 0 4 0 0"
        ],
        "NZ": [
            "1927 1927 10 6 7 2 0 1 S",
            "1928 1928 2 4 7 2 0 0 M",
            "1928 1933 9 8 0 2 0 0:30 S",
            "1929 1933 2 15 0 2 0 0 M",
            "1934 1940 3 0 8 2 0 0 M",
            "1934 1940 8 0 8 2 0 0:30 S",
            "1946 1946 0 1 7 0 0 0 S",
            "1974 1974 10 1 0 2 2 1 D",
            "1975 1975 1 0 8 2 2 0 S",
            "1975 1988 9 0 8 2 2 1 D",
            "1976 1989 2 1 0 2 2 0 S",
            "1989 1989 9 8 0 2 2 1 D",
            "1990 2006 9 1 0 2 2 1 D",
            "1990 2007 2 15 0 2 2 0 S",
            "2007 9999 8 0 8 2 2 1 D",
            "2008 9999 3 1 0 2 2 0 S"
        ],
        "Chatham": [
            "1974 1974 10 1 0 2:45 2 1 D",
            "1975 1975 1 0 8 2:45 2 0 S",
            "1975 1988 9 0 8 2:45 2 1 D",
            "1976 1989 2 1 0 2:45 2 0 S",
            "1989 1989 9 8 0 2:45 2 1 D",
            "1990 2006 9 1 0 2:45 2 1 D",
            "1990 2007 2 15 0 2:45 2 0 S",
            "2007 9999 8 0 8 2:45 2 1 D",
            "2008 9999 3 1 0 2:45 2 0 S"
        ],
        "Vanuatu": [
            "1983 1983 8 25 7 0 0 1 S",
            "1984 1991 2 23 0 0 0 0",
            "1984 1984 9 23 7 0 0 1 S",
            "1985 1991 8 23 0 0 0 1 S",
            "1992 1993 0 23 0 0 0 0",
            "1992 1992 9 23 0 0 0 1 S"
        ],
        "Fiji": [
            "1998 1999 10 1 0 2 0 1 S",
            "1999 2000 1 0 8 3 0 0",
            "2009 2009 10 29 7 2 0 1 S",
            "2010 2010 2 0 8 3 0 0",
            "2010 9999 9 18 0 2 0 1 S",
            "2011 2011 2 1 0 3 0 0",
            "2012 9999 0 18 0 3 0 0"
        ],
        "NC": [
            "1977 1978 11 1 0 0 0 1 S",
            "1978 1979 1 27 7 0 0 0",
            "1996 1996 11 1 7 2 2 1 S",
            "1997 1997 2 2 7 2 2 0"
        ],
        "Cook": [
            "1978 1978 10 12 7 0 0 0:30 HS",
            "1979 1991 2 1 0 0 0 0",
            "1979 1990 9 0 8 0 0 0:30 HS"
        ],
        "Tonga": [
            "1999 1999 9 7 7 2 2 1 S",
            "2000 2000 2 19 7 2 2 0",
            "2000 2001 10 1 0 2 0 1 S",
            "2001 2002 0 0 8 2 0 0"
        ]
    },
    "links": {
        "America/Kralendijk": "America/Curacao",
        "America/Lower_Princes": "America/Curacao",
        "America/Marigot": "America/Guadeloupe",
        "America/Shiprock": "America/Denver",
        "America/St_Barthelemy": "America/Guadeloupe",
        "Antarctica/South_Pole": "Antarctica/McMurdo",
        "Arctic/Longyearbyen": "Europe/Oslo",
        "Europe/Bratislava": "Europe/Prague",
        "Europe/Busingen": "Europe/Zurich",
        "Europe/Guernsey": "Europe/London",
        "Europe/Isle_of_Man": "Europe/London",
        "Europe/Jersey": "Europe/London",
        "Europe/Ljubljana": "Europe/Belgrade",
        "Europe/Mariehamn": "Europe/Helsinki",
        "Europe/Podgorica": "Europe/Belgrade",
        "Europe/San_Marino": "Europe/Rome",
        "Europe/Sarajevo": "Europe/Belgrade",
        "Europe/Skopje": "Europe/Belgrade",
        "Europe/Vatican": "Europe/Rome",
        "Europe/Zagreb": "Europe/Belgrade"
    }
}
moment.tz.add(momentTzData);





