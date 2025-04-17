/*! For license information please see chunk.806.32393c1164e9fd503c97.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[806],{172:(e,t,n)=>{"use strict"
n.d(t,{Kt:()=>f,M5:()=>l,nV:()=>c,sM:()=>u})
var r=n(3076),i=n(3159),o=n(491),s=n(1943)
function a(e,t){return t.testContainer||(0,r.sS)(e,"testContainer")||(0,i.c)().testContainer}function u(e,t,n={}){const i=(0,r.y1)(e,t,n),u=a(e,n),c=(0,o.$)(i,u).toArray()
return(0,r.Oz)(c,i),0===c.length&&(0,s.hm)(e,n.pageObjectKey,s.q3,{selector:i}),c[0]}function c(e,t,n={}){const i=(0,r.y1)(e,t,n),s=a(e,n)
return(0,o.$)(i,s).toArray()}function l(e,t,n={}){const i=(0,r.y1)(e,t,n),u=a(e,n)
let c=(0,o.$)(i,u)
return(0,r.Oz)(c,i,n.multiple),0===c.length&&(0,s.hm)(e,n.pageObjectKey,s.q3,{selector:i}),c}function f(e,t,n={}){const i=(0,r.y1)(e,t,n),s=a(e,n)
let u=(0,o.$)(i,s)
return(0,r.Oz)(u,i,n.multiple),u}n(6869),n(9052),n(8260)},491:(e,t,n)=>{"use strict"
n.d(t,{$:()=>i})
var r=n(3193)
let i
if(window.jQuery)i=window.jQuery
else{const e=(0,r.A)(n(2674))
i=e.default}},1192:(e,t,n)=>{"use strict"
n.d(t,{F:()=>o,I:()=>s})
var r=n(6869),i=n(3076)
function o(e){return!(0,i.Zn)(e)._chainedTree}function s(e){if(o(e))return e
let t,n=[]
for(t=e;t;t=r.A.parent(t))n.unshift(r.A.meta(t).key)
return n.shift(),t=(0,i.Zn)(e)._chainedTree,n.forEach((e=>{t=function(e,t){let n
if(n=/\[(\d+)\]$/.exec(t)){let[r,i]=n
return e[t.slice(0,-r.length)].objectAt(parseInt(i,10))}return e[t]}(t,e)})),t}},1447:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{buildSelector:()=>i.y1,findElement:()=>r.Kt,findElementWithAssert:()=>r.M5,findMany:()=>r.nV,findOne:()=>r.sM,fullScope:()=>i.QL})
var r=n(172),i=n(3076)
n(3159),n(9052),n(8260),n(491),n(1943),n(6869)},1943:(e,t,n)=>{"use strict"
n.d(t,{Or:()=>s,hm:()=>a,q3:()=>o,r7:()=>u})
var r=n(6869),i=n(3076)
const o="Element not found."
function s(e,t,n){const r=(0,i.y1)(e,t.selector,t)
a(e,t.pageObjectKey,n,{selector:r})}function a(e,t,n,{selector:r}={}){let i=n instanceof Error?n.message:n.toString()
const o=new u(i,{cause:{message:i,error:n.cause,key:t,node:e,selector:r}})
throw n instanceof Error&&"stack"in n&&(o.stack=n.stack),console.error(o.toString()),o}class u extends Error{constructor(e,t={},...n){const{cause:i}=t,{node:o,key:s,selector:a}=i||{},u=function(e,t,n){const i=[],o=function(e){let t,n=[]
for(t=e;t;t=r.A.parent(t))n.unshift(r.A.meta(t).key)
return n[0]="page",n}(e)
return t&&o.push(t),i.push(`\nPageObject: '${o.join(".")}'`),"string"==typeof n&&n.trim().length>0&&i.push(`  Selector: '${n}'`),i.join("\n")}(o,s,a)
super([e,u].filter(Boolean).join("\n"),t,...n)}}},2674:function(e,t){var n
!function(t,n){"use strict"
"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document")
return n(e)}:n(t)}("undefined"!=typeof window?window:this,(function(r,i){"use strict"
var o=[],s=Object.getPrototypeOf,a=o.slice,u=o.flat?function(e){return o.flat.call(e)}:function(e){return o.concat.apply([],e)},c=o.push,l=o.indexOf,f={},p=f.toString,d=f.hasOwnProperty,h=d.toString,g=h.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},v=function(e){return null!=e&&e===e.window},b=r.document,x={type:!0,src:!0,nonce:!0,noModule:!0}
function w(e,t,n){var r,i,o=(n=n||b).createElement("script")
if(o.text=e,t)for(r in x)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i)
n.head.appendChild(o).parentNode.removeChild(o)}function T(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?f[p.call(e)]||"object":typeof e}var C="3.7.1",E=/HTML$/i,k=function(e,t){return new k.fn.init(e,t)}
function j(e){var t=!!e&&"length"in e&&e.length,n=T(e)
return!m(e)&&!v(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function S(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}k.fn=k.prototype={jquery:C,constructor:k,length:0,toArray:function(){return a.call(this)},get:function(e){return null==e?a.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e)
return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(e){return this.pushStack(k.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(k.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(k.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0)
return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:o.sort,splice:o.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,c=!1
for("boolean"==typeof s&&(c=s,s=arguments[a]||{},a++),"object"==typeof s||m(s)||(s={}),a===u&&(s=this,a--);a<u;a++)if(null!=(e=arguments[a]))for(t in e)r=e[t],"__proto__"!==t&&s!==r&&(c&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=s[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,s[t]=k.extend(c,o,r)):void 0!==r&&(s[t]=r))
return s},k.extend({expando:"jQuery"+(C+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n
return!(!e||"[object Object]"!==p.call(e)||(t=s(e))&&("function"!=typeof(n=d.call(t,"constructor")&&t.constructor)||h.call(n)!==g))},isEmptyObject:function(e){var t
for(t in e)return!1
return!0},globalEval:function(e,t,n){w(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0
if(j(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break
return e},text:function(e){var t,n="",r=0,i=e.nodeType
if(!i)for(;t=e[r++];)n+=k.text(t)
return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[]
return null!=e&&(j(Object(e))?k.merge(n,"string"==typeof e?[e]:e):c.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:l.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement
return!E.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r]
return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,s=!n;i<o;i++)!t(e[i],i)!==s&&r.push(e[i])
return r},map:function(e,t,n){var r,i,o=0,s=[]
if(j(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i)
else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i)
return u(s)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=o[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){f["[object "+t+"]"]=t.toLowerCase()}))
var A=o.pop,D=o.sort,O=o.splice,N="[\\x20\\t\\r\\n\\f]",L=new RegExp("^"+N+"+|((?:^|[^\\\\])(?:\\\\.)*)"+N+"+$","g")
k.contains=function(e,t){var n=t&&t.parentNode
return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))}
var q=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g
function H(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}k.escapeSelector=function(e){return(e+"").replace(q,H)}
var $=b,P=c
!function(){var e,t,n,i,s,u,c,f,p,h,g=P,m=k.expando,v=0,b=0,x=ee(),w=ee(),T=ee(),C=ee(),E=function(e,t){return e===t&&(s=!0),0},j="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",q="(?:\\\\[\\da-fA-F]{1,6}"+N+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",H="\\["+N+"*("+q+")(?:"+N+"*([*^$|!~]?=)"+N+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+q+"))|)"+N+"*\\]",M=":("+q+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+H+")*)|.*)\\)|)",_=new RegExp(N+"+","g"),R=new RegExp("^"+N+"*,"+N+"*"),F=new RegExp("^"+N+"*([>+~]|"+N+")"+N+"*"),I=new RegExp(N+"|>"),W=new RegExp(M),B=new RegExp("^"+q+"$"),z={ID:new RegExp("^#("+q+")"),CLASS:new RegExp("^\\.("+q+")"),TAG:new RegExp("^("+q+"|[*])"),ATTR:new RegExp("^"+H),PSEUDO:new RegExp("^"+M),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+N+"*(even|odd|(([+-]|)(\\d*)n|)"+N+"*(?:([+-]|)"+N+"*(\\d+)|))"+N+"*\\)|)","i"),bool:new RegExp("^(?:"+j+")$","i"),needsContext:new RegExp("^"+N+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+N+"*((?:-\\d)?\\d*)"+N+"*\\)|)(?=[^-]|$)","i")},U=/^(?:input|select|textarea|button)$/i,V=/^h\d$/i,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,X=/[+~]/,Q=new RegExp("\\\\[\\da-fA-F]{1,6}"+N+"?|\\\\([^\\r\\n\\f])","g"),G=function(e,t){var n="0x"+e.slice(1)-65536
return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},Y=function(){ue()},J=pe((function(e){return!0===e.disabled&&S(e,"fieldset")}),{dir:"parentNode",next:"legend"})
try{g.apply(o=a.call($.childNodes),$.childNodes),o[$.childNodes.length].nodeType}catch(e){g={apply:function(e,t){P.apply(e,a.call(t))},call:function(e){P.apply(e,a.call(arguments,1))}}}function Z(e,t,n,r){var i,o,s,a,c,l,d,h=t&&t.ownerDocument,v=t?t.nodeType:9
if(n=n||[],"string"!=typeof e||!e||1!==v&&9!==v&&11!==v)return n
if(!r&&(ue(t),t=t||u,f)){if(11!==v&&(c=K.exec(e)))if(i=c[1]){if(9===v){if(!(s=t.getElementById(i)))return n
if(s.id===i)return g.call(n,s),n}else if(h&&(s=h.getElementById(i))&&Z.contains(t,s)&&s.id===i)return g.call(n,s),n}else{if(c[2])return g.apply(n,t.getElementsByTagName(e)),n
if((i=c[3])&&t.getElementsByClassName)return g.apply(n,t.getElementsByClassName(i)),n}if(!(C[e+" "]||p&&p.test(e))){if(d=e,h=t,1===v&&(I.test(e)||F.test(e))){for((h=X.test(e)&&ae(t.parentNode)||t)==t&&y.scope||((a=t.getAttribute("id"))?a=k.escapeSelector(a):t.setAttribute("id",a=m)),o=(l=le(e)).length;o--;)l[o]=(a?"#"+a:":scope")+" "+fe(l[o])
d=l.join(",")}try{return g.apply(n,h.querySelectorAll(d)),n}catch(t){C(e,!0)}finally{a===m&&t.removeAttribute("id")}}}return ve(e.replace(L,"$1"),t,n,r)}function ee(){var e=[]
return function n(r,i){return e.push(r+" ")>t.cacheLength&&delete n[e.shift()],n[r+" "]=i}}function te(e){return e[m]=!0,e}function ne(e){var t=u.createElement("fieldset")
try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function re(e){return function(t){return S(t,"input")&&t.type===e}}function ie(e){return function(t){return(S(t,"input")||S(t,"button"))&&t.type===e}}function oe(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&J(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function se(e){return te((function(t){return t=+t,te((function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))}))}))}function ae(e){return e&&void 0!==e.getElementsByTagName&&e}function ue(e){var n,r=e?e.ownerDocument||e:$
return r!=u&&9===r.nodeType&&r.documentElement?(c=(u=r).documentElement,f=!k.isXMLDoc(u),h=c.matches||c.webkitMatchesSelector||c.msMatchesSelector,c.msMatchesSelector&&$!=u&&(n=u.defaultView)&&n.top!==n&&n.addEventListener("unload",Y),y.getById=ne((function(e){return c.appendChild(e).id=k.expando,!u.getElementsByName||!u.getElementsByName(k.expando).length})),y.disconnectedMatch=ne((function(e){return h.call(e,"*")})),y.scope=ne((function(){return u.querySelectorAll(":scope")})),y.cssHas=ne((function(){try{return u.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}})),y.getById?(t.filter.ID=function(e){var t=e.replace(Q,G)
return function(e){return e.getAttribute("id")===t}},t.find.ID=function(e,t){if(void 0!==t.getElementById&&f){var n=t.getElementById(e)
return n?[n]:[]}}):(t.filter.ID=function(e){var t=e.replace(Q,G)
return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id")
return n&&n.value===t}},t.find.ID=function(e,t){if(void 0!==t.getElementById&&f){var n,r,i,o=t.getElementById(e)
if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o]
for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),t.find.TAG=function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},t.find.CLASS=function(e,t){if(void 0!==t.getElementsByClassName&&f)return t.getElementsByClassName(e)},p=[],ne((function(e){var t
c.appendChild(e).innerHTML="<a id='"+m+"' href='' disabled='disabled'></a><select id='"+m+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||p.push("\\["+N+"*(?:value|"+j+")"),e.querySelectorAll("[id~="+m+"-]").length||p.push("~="),e.querySelectorAll("a#"+m+"+*").length||p.push(".#.+[+~]"),e.querySelectorAll(":checked").length||p.push(":checked"),(t=u.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),c.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&p.push(":enabled",":disabled"),(t=u.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||p.push("\\["+N+"*name"+N+"*="+N+"*(?:''|\"\")")})),y.cssHas||p.push(":has"),p=p.length&&new RegExp(p.join("|")),E=function(e,t){if(e===t)return s=!0,0
var n=!e.compareDocumentPosition-!t.compareDocumentPosition
return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!y.sortDetached&&t.compareDocumentPosition(e)===n?e===u||e.ownerDocument==$&&Z.contains($,e)?-1:t===u||t.ownerDocument==$&&Z.contains($,t)?1:i?l.call(i,e)-l.call(i,t):0:4&n?-1:1)},u):u}for(e in Z.matches=function(e,t){return Z(e,null,null,t)},Z.matchesSelector=function(e,t){if(ue(e),f&&!C[t+" "]&&(!p||!p.test(t)))try{var n=h.call(e,t)
if(n||y.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){C(t,!0)}return Z(t,u,null,[e]).length>0},Z.contains=function(e,t){return(e.ownerDocument||e)!=u&&ue(e),k.contains(e,t)},Z.attr=function(e,n){(e.ownerDocument||e)!=u&&ue(e)
var r=t.attrHandle[n.toLowerCase()],i=r&&d.call(t.attrHandle,n.toLowerCase())?r(e,n,!f):void 0
return void 0!==i?i:e.getAttribute(n)},Z.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},k.uniqueSort=function(e){var t,n=[],r=0,o=0
if(s=!y.sortStable,i=!y.sortStable&&a.call(e,0),D.call(e,E),s){for(;t=e[o++];)t===e[o]&&(r=n.push(o))
for(;r--;)O.call(e,n[r],1)}return i=null,e},k.fn.uniqueSort=function(){return this.pushStack(k.uniqueSort(a.apply(this)))},t=k.expr={cacheLength:50,createPseudo:te,match:z,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Q,G),e[3]=(e[3]||e[4]||e[5]||"").replace(Q,G),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||Z.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&Z.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return z.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&W.test(n)&&(t=le(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Q,G).toLowerCase()
return"*"===e?function(){return!0}:function(e){return S(e,t)}},CLASS:function(e){var t=x[e+" "]
return t||(t=new RegExp("(^|"+N+")"+e+"("+N+"|$)"))&&x(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var i=Z.attr(r,e)
return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(_," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t
return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var c,l,f,p,d,h=o!==s?"nextSibling":"previousSibling",g=t.parentNode,y=a&&t.nodeName.toLowerCase(),b=!u&&!a,x=!1
if(g){if(o){for(;h;){for(f=t;f=f[h];)if(a?S(f,y):1===f.nodeType)return!1
d=h="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?g.firstChild:g.lastChild],s&&b){for(x=(p=(c=(l=g[m]||(g[m]={}))[e]||[])[0]===v&&c[1])&&c[2],f=p&&g.childNodes[p];f=++p&&f&&f[h]||(x=p=0)||d.pop();)if(1===f.nodeType&&++x&&f===t){l[e]=[v,p,x]
break}}else if(b&&(x=p=(c=(l=t[m]||(t[m]={}))[e]||[])[0]===v&&c[1]),!1===x)for(;(f=++p&&f&&f[h]||(x=p=0)||d.pop())&&(!(a?S(f,y):1===f.nodeType)||!++x||(b&&((l=f[m]||(f[m]={}))[e]=[v,x]),f!==t)););return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,n){var r,i=t.pseudos[e]||t.setFilters[e.toLowerCase()]||Z.error("unsupported pseudo: "+e)
return i[m]?i(n):i.length>1?(r=[e,e,"",n],t.setFilters.hasOwnProperty(e.toLowerCase())?te((function(e,t){for(var r,o=i(e,n),s=o.length;s--;)e[r=l.call(e,o[s])]=!(t[r]=o[s])})):function(e){return i(e,0,r)}):i}},pseudos:{not:te((function(e){var t=[],n=[],r=me(e.replace(L,"$1"))
return r[m]?te((function(e,t,n,i){for(var o,s=r(e,null,i,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))})):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}})),has:te((function(e){return function(t){return Z(e,t).length>0}})),contains:te((function(e){return e=e.replace(Q,G),function(t){return(t.textContent||k.text(t)).indexOf(e)>-1}})),lang:te((function(e){return B.test(e||"")||Z.error("unsupported lang: "+e),e=e.replace(Q,G).toLowerCase(),function(t){var n
do{if(n=f?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}})),target:function(e){var t=r.location&&r.location.hash
return t&&t.slice(1)===e.id},root:function(e){return e===c},focus:function(e){return e===function(){try{return u.activeElement}catch(e){}}()&&u.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:oe(!1),disabled:oe(!0),checked:function(e){return S(e,"input")&&!!e.checked||S(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!t.pseudos.empty(e)},header:function(e){return V.test(e.nodeName)},input:function(e){return U.test(e.nodeName)},button:function(e){return S(e,"input")&&"button"===e.type||S(e,"button")},text:function(e){var t
return S(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:se((function(){return[0]})),last:se((function(e,t){return[t-1]})),eq:se((function(e,t,n){return[n<0?n+t:n]})),even:se((function(e,t){for(var n=0;n<t;n+=2)e.push(n)
return e})),odd:se((function(e,t){for(var n=1;n<t;n+=2)e.push(n)
return e})),lt:se((function(e,t,n){var r
for(r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r)
return e})),gt:se((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r)
return e}))}},t.pseudos.nth=t.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})t.pseudos[e]=re(e)
for(e in{submit:!0,reset:!0})t.pseudos[e]=ie(e)
function ce(){}function le(e,n){var r,i,o,s,a,u,c,l=w[e+" "]
if(l)return n?0:l.slice(0)
for(a=e,u=[],c=t.preFilter;a;){for(s in r&&!(i=R.exec(a))||(i&&(a=a.slice(i[0].length)||a),u.push(o=[])),r=!1,(i=F.exec(a))&&(r=i.shift(),o.push({value:r,type:i[0].replace(L," ")}),a=a.slice(r.length)),t.filter)!(i=z[s].exec(a))||c[s]&&!(i=c[s](i))||(r=i.shift(),o.push({value:r,type:s,matches:i}),a=a.slice(r.length))
if(!r)break}return n?a.length:a?Z.error(e):w(e,u).slice(0)}function fe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value
return r}function pe(e,t,n){var r=t.dir,i=t.next,o=i||r,s=n&&"parentNode"===o,a=b++
return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||s)return e(t,n,i)
return!1}:function(t,n,u){var c,l,f=[v,a]
if(u){for(;t=t[r];)if((1===t.nodeType||s)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||s)if(l=t[m]||(t[m]={}),i&&S(t,i))t=t[r]||t
else{if((c=l[o])&&c[0]===v&&c[1]===a)return f[2]=c[2]
if(l[o]=f,f[2]=e(t,n,u))return!0}return!1}}function de(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1
return!0}:e[0]}function he(e,t,n,r,i){for(var o,s=[],a=0,u=e.length,c=null!=t;a<u;a++)(o=e[a])&&(n&&!n(o,r,i)||(s.push(o),c&&t.push(a)))
return s}function ge(e,t,n,r,i,o){return r&&!r[m]&&(r=ge(r)),i&&!i[m]&&(i=ge(i,o)),te((function(o,s,a,u){var c,f,p,d,h=[],y=[],m=s.length,v=o||function(e,t,n){for(var r=0,i=t.length;r<i;r++)Z(e,t[r],n)
return n}(t||"*",a.nodeType?[a]:a,[]),b=!e||!o&&t?v:he(v,h,e,a,u)
if(n?n(b,d=i||(o?e:m||r)?[]:s,a,u):d=b,r)for(c=he(d,y),r(c,[],a,u),f=c.length;f--;)(p=c[f])&&(d[y[f]]=!(b[y[f]]=p))
if(o){if(i||e){if(i){for(c=[],f=d.length;f--;)(p=d[f])&&c.push(b[f]=p)
i(null,d=[],c,u)}for(f=d.length;f--;)(p=d[f])&&(c=i?l.call(o,p):h[f])>-1&&(o[c]=!(s[c]=p))}}else d=he(d===s?d.splice(m,d.length):d),i?i(null,s,d,u):g.apply(s,d)}))}function ye(e){for(var r,i,o,s=e.length,a=t.relative[e[0].type],u=a||t.relative[" "],c=a?1:0,f=pe((function(e){return e===r}),u,!0),p=pe((function(e){return l.call(r,e)>-1}),u,!0),d=[function(e,t,i){var o=!a&&(i||t!=n)||((r=t).nodeType?f(e,t,i):p(e,t,i))
return r=null,o}];c<s;c++)if(i=t.relative[e[c].type])d=[pe(de(d),i)]
else{if((i=t.filter[e[c].type].apply(null,e[c].matches))[m]){for(o=++c;o<s&&!t.relative[e[o].type];o++);return ge(c>1&&de(d),c>1&&fe(e.slice(0,c-1).concat({value:" "===e[c-2].type?"*":""})).replace(L,"$1"),i,c<o&&ye(e.slice(c,o)),o<s&&ye(e=e.slice(o)),o<s&&fe(e))}d.push(i)}return de(d)}function me(e,r){var i,o=[],s=[],a=T[e+" "]
if(!a){for(r||(r=le(e)),i=r.length;i--;)(a=ye(r[i]))[m]?o.push(a):s.push(a)
a=T(e,function(e,r){var i=r.length>0,o=e.length>0,s=function(s,a,c,l,p){var d,h,y,m=0,b="0",x=s&&[],w=[],T=n,C=s||o&&t.find.TAG("*",p),E=v+=null==T?1:Math.random()||.1,j=C.length
for(p&&(n=a==u||a||p);b!==j&&null!=(d=C[b]);b++){if(o&&d){for(h=0,a||d.ownerDocument==u||(ue(d),c=!f);y=e[h++];)if(y(d,a||u,c)){g.call(l,d)
break}p&&(v=E)}i&&((d=!y&&d)&&m--,s&&x.push(d))}if(m+=b,i&&b!==m){for(h=0;y=r[h++];)y(x,w,a,c)
if(s){if(m>0)for(;b--;)x[b]||w[b]||(w[b]=A.call(l))
w=he(w)}g.apply(l,w),p&&!s&&w.length>0&&m+r.length>1&&k.uniqueSort(l)}return p&&(v=E,n=T),x}
return i?te(s):s}(s,o)),a.selector=e}return a}function ve(e,n,r,i){var o,s,a,u,c,l="function"==typeof e&&e,p=!i&&le(e=l.selector||e)
if(r=r||[],1===p.length){if((s=p[0]=p[0].slice(0)).length>2&&"ID"===(a=s[0]).type&&9===n.nodeType&&f&&t.relative[s[1].type]){if(!(n=(t.find.ID(a.matches[0].replace(Q,G),n)||[])[0]))return r
l&&(n=n.parentNode),e=e.slice(s.shift().value.length)}for(o=z.needsContext.test(e)?0:s.length;o--&&(a=s[o],!t.relative[u=a.type]);)if((c=t.find[u])&&(i=c(a.matches[0].replace(Q,G),X.test(s[0].type)&&ae(n.parentNode)||n))){if(s.splice(o,1),!(e=i.length&&fe(s)))return g.apply(r,i),r
break}}return(l||me(e,p))(i,n,!f,r,!n||X.test(e)&&ae(n.parentNode)||n),r}ce.prototype=t.filters=t.pseudos,t.setFilters=new ce,y.sortStable=m.split("").sort(E).join("")===m,ue(),y.sortDetached=ne((function(e){return 1&e.compareDocumentPosition(u.createElement("fieldset"))})),k.find=Z,k.expr[":"]=k.expr.pseudos,k.unique=k.uniqueSort,Z.compile=me,Z.select=ve,Z.setDocument=ue,Z.tokenize=le,Z.escape=k.escapeSelector,Z.getText=k.text,Z.isXML=k.isXMLDoc,Z.selectors=k.expr,Z.support=k.support,Z.uniqueSort=k.uniqueSort}()
var M=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&k(e).is(n))break
r.push(e)}return r},_=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e)
return n},R=k.expr.match.needsContext,F=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
function I(e,t,n){return m(t)?k.grep(e,(function(e,r){return!!t.call(e,r,e)!==n})):t.nodeType?k.grep(e,(function(e){return e===t!==n})):"string"!=typeof t?k.grep(e,(function(e){return l.call(t,e)>-1!==n})):k.filter(t,e,n)}k.filter=function(e,t,n){var r=t[0]
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,(function(e){return 1===e.nodeType})))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this
if("string"!=typeof e)return this.pushStack(k(e).filter((function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0})))
for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n)
return r>1?k.uniqueSort(n):n},filter:function(e){return this.pushStack(I(this,e||[],!1))},not:function(e){return this.pushStack(I(this,e||[],!0))},is:function(e){return!!I(this,"string"==typeof e&&R.test(e)?k(e):e||[],!1).length}})
var W,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i
if(!e)return this
if(n=n||W,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:B.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e)
if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:b,!0)),F.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r])
return this}return(i=b.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,W=k(b)
var z=/^(?:parents|prev(?:Until|All))/,U={children:!0,contents:!0,next:!0,prev:!0}
function V(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length
return this.filter((function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0}))},closest:function(e,t){var n,r=0,i=this.length,o=[],s="string"!=typeof e&&k(e)
if(!R.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n)
break}return this.pushStack(o.length>1?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?l.call(k(e),this[0]):l.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return M(e,"parentNode")},parentsUntil:function(e,t,n){return M(e,"parentNode",n)},next:function(e){return V(e,"nextSibling")},prev:function(e){return V(e,"previousSibling")},nextAll:function(e){return M(e,"nextSibling")},prevAll:function(e){return M(e,"previousSibling")},nextUntil:function(e,t,n){return M(e,"nextSibling",n)},prevUntil:function(e,t,n){return M(e,"previousSibling",n)},siblings:function(e){return _((e.parentNode||{}).firstChild,e)},children:function(e){return _(e.firstChild)},contents:function(e){return null!=e.contentDocument&&s(e.contentDocument)?e.contentDocument:(S(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},(function(e,t){k.fn[e]=function(n,r){var i=k.map(this,t,n)
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=k.filter(r,i)),this.length>1&&(U[e]||k.uniqueSort(i),z.test(e)&&i.reverse()),this.pushStack(i)}}))
var K=/[^\x20\t\r\n\f]+/g
function X(e){return e}function Q(e){throw e}function G(e,t,n,r){var i
try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(e){e="string"==typeof e?function(e){var t={}
return k.each(e.match(K)||[],(function(e,n){t[n]=!0})),t}(e):k.extend({},e)
var t,n,r,i,o=[],s=[],a=-1,u=function(){for(i=i||e.once,r=t=!0;s.length;a=-1)for(n=s.shift();++a<o.length;)!1===o[a].apply(n[0],n[1])&&e.stopOnFalse&&(a=o.length,n=!1)
e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},c={add:function(){return o&&(n&&!t&&(a=o.length-1,s.push(n)),function t(n){k.each(n,(function(n,r){m(r)?e.unique&&c.has(r)||o.push(r):r&&r.length&&"string"!==T(r)&&t(r)}))}(arguments),n&&!t&&u()),this},remove:function(){return k.each(arguments,(function(e,t){for(var n;(n=k.inArray(t,o,n))>-1;)o.splice(n,1),n<=a&&a--})),this},has:function(e){return e?k.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=s=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=s=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],s.push(n),t||u()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}}
return c},k.extend({Deferred:function(e){var t=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],n="pending",i={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments
return k.Deferred((function(n){k.each(t,(function(t,r){var i=m(e[r[4]])&&e[r[4]]
o[r[1]]((function(){var e=i&&i.apply(this,arguments)
e&&m(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,i?[e]:arguments)}))})),e=null})).promise()},then:function(e,n,i){var o=0
function s(e,t,n,i){return function(){var a=this,u=arguments,c=function(){var r,c
if(!(e<o)){if((r=n.apply(a,u))===t.promise())throw new TypeError("Thenable self-resolution")
c=r&&("object"==typeof r||"function"==typeof r)&&r.then,m(c)?i?c.call(r,s(o,t,X,i),s(o,t,Q,i)):(o++,c.call(r,s(o,t,X,i),s(o,t,Q,i),s(o,t,X,t.notifyWith))):(n!==X&&(a=void 0,u=[r]),(i||t.resolveWith)(a,u))}},l=i?c:function(){try{c()}catch(r){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(r,l.error),e+1>=o&&(n!==Q&&(a=void 0,u=[r]),t.rejectWith(a,u))}}
e?l():(k.Deferred.getErrorHook?l.error=k.Deferred.getErrorHook():k.Deferred.getStackHook&&(l.error=k.Deferred.getStackHook()),r.setTimeout(l))}}return k.Deferred((function(r){t[0][3].add(s(0,r,m(i)?i:X,r.notifyWith)),t[1][3].add(s(0,r,m(e)?e:X)),t[2][3].add(s(0,r,m(n)?n:Q))})).promise()},promise:function(e){return null!=e?k.extend(e,i):i}},o={}
return k.each(t,(function(e,r){var s=r[2],a=r[5]
i[r[1]]=s.add,a&&s.add((function(){n=a}),t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),s.add(r[3].fire),o[r[0]]=function(){return o[r[0]+"With"](this===o?void 0:this,arguments),this},o[r[0]+"With"]=s.fireWith})),i.promise(o),e&&e.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=a.call(arguments),o=k.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?a.call(arguments):n,--t||o.resolveWith(r,i)}}
if(t<=1&&(G(e,o.done(s(n)).resolve,o.reject,!t),"pending"===o.state()||m(i[n]&&i[n].then)))return o.then()
for(;n--;)G(i[n],s(n),o.reject)
return o.promise()}})
var Y=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
k.Deferred.exceptionHook=function(e,t){r.console&&r.console.warn&&e&&Y.test(e.name)&&r.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){r.setTimeout((function(){throw e}))}
var J=k.Deferred()
function Z(){b.removeEventListener("DOMContentLoaded",Z),r.removeEventListener("load",Z),k.ready()}k.fn.ready=function(e){return J.then(e).catch((function(e){k.readyException(e)})),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0,!0!==e&&--k.readyWait>0||J.resolveWith(b,[k]))}}),k.ready.then=J.then,"complete"===b.readyState||"loading"!==b.readyState&&!b.documentElement.doScroll?r.setTimeout(k.ready):(b.addEventListener("DOMContentLoaded",Z),r.addEventListener("load",Z))
var ee=function(e,t,n,r,i,o,s){var a=0,u=e.length,c=null==n
if("object"===T(n))for(a in i=!0,n)ee(e,t,a,n[a],!0,o,s)
else if(void 0!==r&&(i=!0,m(r)||(s=!0),c&&(s?(t.call(e,r),t=null):(c=t,t=function(e,t,n){return c.call(k(e),n)})),t))for(;a<u;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)))
return i?e:c?t.call(e):u?t(e[0],n):o},te=/^-ms-/,ne=/-([a-z])/g
function re(e,t){return t.toUpperCase()}function ie(e){return e.replace(te,"ms-").replace(ne,re)}var oe=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}
function se(){this.expando=k.expando+se.uid++}se.uid=1,se.prototype={cache:function(e){var t=e[this.expando]
return t||(t={},oe(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e)
if("string"==typeof t)i[ie(t)]=n
else for(r in t)i[ie(r)]=t[r]
return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][ie(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando]
if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(ie):(t=ie(t))in r?[t]:t.match(K)||[]).length
for(;n--;)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando]
return void 0!==t&&!k.isEmptyObject(t)}}
var ae=new se,ue=new se,ce=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,le=/[A-Z]/g
function fe(e,t,n){var r
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(le,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:ce.test(e)?JSON.parse(e):e)}(n)}catch(e){}ue.set(e,t,n)}else n=void 0
return n}k.extend({hasData:function(e){return ue.hasData(e)||ae.hasData(e)},data:function(e,t,n){return ue.access(e,t,n)},removeData:function(e,t){ue.remove(e,t)},_data:function(e,t,n){return ae.access(e,t,n)},_removeData:function(e,t){ae.remove(e,t)}}),k.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes
if(void 0===e){if(this.length&&(i=ue.get(o),1===o.nodeType&&!ae.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&0===(r=s[n].name).indexOf("data-")&&(r=ie(r.slice(5)),fe(o,r,i[r]))
ae.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each((function(){ue.set(this,e)})):ee(this,(function(t){var n
if(o&&void 0===t)return void 0!==(n=ue.get(o,e))||void 0!==(n=fe(o,e))?n:void 0
this.each((function(){ue.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){ue.remove(this,e)}))}}),k.extend({queue:function(e,t,n){var r
if(e)return t=(t||"fx")+"queue",r=ae.get(e,t),n&&(!r||Array.isArray(n)?r=ae.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx"
var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t)
"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,(function(){k.dequeue(e,t)}),o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks"
return ae.get(e,n)||ae.access(e,n,{empty:k.Callbacks("once memory").add((function(){ae.remove(e,[t+"queue",n])}))})}}),k.fn.extend({queue:function(e,t){var n=2
return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?k.queue(this[0],e):void 0===t?this:this.each((function(){var n=k.queue(this,e,t)
k._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&k.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){k.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])}
for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=ae.get(o[s],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(a))
return a(),i.promise(t)}})
var pe=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,de=new RegExp("^(?:([+-])=|)("+pe+")([a-z%]*)$","i"),he=["Top","Right","Bottom","Left"],ge=b.documentElement,ye=function(e){return k.contains(e.ownerDocument,e)},me={composed:!0}
ge.getRootNode&&(ye=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(me)===e.ownerDocument})
var ve=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ye(e)&&"none"===k.css(e,"display")}
function be(e,t,n,r){var i,o,s=20,a=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=a(),c=n&&n[3]||(k.cssNumber[t]?"":"px"),l=e.nodeType&&(k.cssNumber[t]||"px"!==c&&+u)&&de.exec(k.css(e,t))
if(l&&l[3]!==c){for(u/=2,c=c||l[3],l=+u||1;s--;)k.style(e,t,l+c),(1-o)*(1-(o=a()/u||.5))<=0&&(s=0),l/=o
l*=2,k.style(e,t,l+c),n=n||[]}return n&&(l=+l||+u||0,i=n[1]?l+(n[1]+1)*n[2]:+n[2],r&&(r.unit=c,r.start=l,r.end=i)),i}var xe={}
function we(e){var t,n=e.ownerDocument,r=e.nodeName,i=xe[r]
return i||(t=n.body.appendChild(n.createElement(r)),i=k.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),xe[r]=i,i)}function Te(e,t){for(var n,r,i=[],o=0,s=e.length;o<s;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=ae.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ve(r)&&(i[o]=we(r))):"none"!==n&&(i[o]="none",ae.set(r,"display",n)))
for(o=0;o<s;o++)null!=i[o]&&(e[o].style.display=i[o])
return e}k.fn.extend({show:function(){return Te(this,!0)},hide:function(){return Te(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){ve(this)?k(this).show():k(this).hide()}))}})
var Ce,Ee,ke=/^(?:checkbox|radio)$/i,je=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Se=/^$|^module$|\/(?:java|ecma)script/i
Ce=b.createDocumentFragment().appendChild(b.createElement("div")),(Ee=b.createElement("input")).setAttribute("type","radio"),Ee.setAttribute("checked","checked"),Ee.setAttribute("name","t"),Ce.appendChild(Ee),y.checkClone=Ce.cloneNode(!0).cloneNode(!0).lastChild.checked,Ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!Ce.cloneNode(!0).lastChild.defaultValue,Ce.innerHTML="<option></option>",y.option=!!Ce.lastChild
var Ae={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
function De(e,t){var n
return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&S(e,t)?k.merge([e],n):n}function Oe(e,t){for(var n=0,r=e.length;n<r;n++)ae.set(e[n],"globalEval",!t||ae.get(t[n],"globalEval"))}Ae.tbody=Ae.tfoot=Ae.colgroup=Ae.caption=Ae.thead,Ae.th=Ae.td,y.option||(Ae.optgroup=Ae.option=[1,"<select multiple='multiple'>","</select>"])
var Ne=/<|&#?\w+;/
function Le(e,t,n,r,i){for(var o,s,a,u,c,l,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===T(o))k.merge(p,o.nodeType?[o]:o)
else if(Ne.test(o)){for(s=s||f.appendChild(t.createElement("div")),a=(je.exec(o)||["",""])[1].toLowerCase(),u=Ae[a]||Ae._default,s.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],l=u[0];l--;)s=s.lastChild
k.merge(p,s.childNodes),(s=f.firstChild).textContent=""}else p.push(t.createTextNode(o))
for(f.textContent="",d=0;o=p[d++];)if(r&&k.inArray(o,r)>-1)i&&i.push(o)
else if(c=ye(o),s=De(f.appendChild(o),"script"),c&&Oe(s),n)for(l=0;o=s[l++];)Se.test(o.type||"")&&n.push(o)
return f}var qe=/^([^.]*)(?:\.(.+)|)/
function He(){return!0}function $e(){return!1}function Pe(e,t,n,r,i,o){var s,a
if("object"==typeof t){for(a in"string"!=typeof n&&(r=r||n,n=void 0),t)Pe(e,a,n,r,t[a],o)
return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=$e
else if(!i)return e
return 1===o&&(s=i,i=function(e){return k().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=k.guid++)),e.each((function(){k.event.add(this,t,i,r,n)}))}function Me(e,t,n){n?(ae.set(e,t,!1),k.event.add(e,t,{namespace:!1,handler:function(e){var n,r=ae.get(this,t)
if(1&e.isTrigger&&this[t]){if(r)(k.event.special[t]||{}).delegateType&&e.stopPropagation()
else if(r=a.call(arguments),ae.set(this,t,r),this[t](),n=ae.get(this,t),ae.set(this,t,!1),r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n}else r&&(ae.set(this,t,k.event.trigger(r[0],r.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=He)}})):void 0===ae.get(e,t)&&k.event.add(e,t,He)}k.event={global:{},add:function(e,t,n,r,i){var o,s,a,u,c,l,f,p,d,h,g,y=ae.get(e)
if(oe(e))for(n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ge,i),n.guid||(n.guid=k.guid++),(u=y.events)||(u=y.events=Object.create(null)),(s=y.handle)||(s=y.handle=function(t){return void 0!==k&&k.event.triggered!==t.type?k.event.dispatch.apply(e,arguments):void 0}),c=(t=(t||"").match(K)||[""]).length;c--;)d=g=(a=qe.exec(t[c])||[])[1],h=(a[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},l=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,s)||e.addEventListener&&e.addEventListener(d,s)),f.add&&(f.add.call(e,l),l.handler.guid||(l.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,l):p.push(l),k.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,s,a,u,c,l,f,p,d,h,g,y=ae.hasData(e)&&ae.get(e)
if(y&&(u=y.events)){for(c=(t=(t||"").match(K)||[""]).length;c--;)if(d=g=(a=qe.exec(t[c])||[])[1],h=(a[2]||"").split(".").sort(),d){for(f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;o--;)l=p[o],!i&&g!==l.origType||n&&n.guid!==l.guid||a&&!a.test(l.namespace)||r&&r!==l.selector&&("**"!==r||!l.selector)||(p.splice(o,1),l.selector&&p.delegateCount--,f.remove&&f.remove.call(e,l))
s&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||k.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[c],n,r,!0)
k.isEmptyObject(u)&&ae.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,s,a=new Array(arguments.length),u=k.event.fix(e),c=(ae.get(this,"events")||Object.create(null))[u.type]||[],l=k.event.special[u.type]||{}
for(a[0]=u,t=1;t<arguments.length;t++)a[t]=arguments[t]
if(u.delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,u)){for(s=k.event.handlers.call(this,u,c),t=0;(i=s[t++])&&!u.isPropagationStopped();)for(u.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!u.isImmediatePropagationStopped();)u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))
return l.postDispatch&&l.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,s,a=[],u=t.delegateCount,c=e.target
if(u&&c.nodeType&&!("click"===e.type&&e.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(o=[],s={},n=0;n<u;n++)void 0===s[i=(r=t[n]).selector+" "]&&(s[i]=r.needsContext?k(i,this).index(c)>-1:k.find(i,this,null,[c]).length),s[i]&&o.push(r)
o.length&&a.push({elem:c,handlers:o})}return c=this,u<t.length&&a.push({elem:c,handlers:t.slice(u)}),a},addProp:function(e,t){Object.defineProperty(k.Event.prototype,e,{enumerable:!0,configurable:!0,get:m(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e
return ke.test(t.type)&&t.click&&S(t,"input")&&Me(t,"click",!0),!1},trigger:function(e){var t=this||e
return ke.test(t.type)&&t.click&&S(t,"input")&&Me(t,"click"),!0},_default:function(e){var t=e.target
return ke.test(t.type)&&t.click&&S(t,"input")&&ae.get(t,"click")||S(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t)
e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?He:$e,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:$e,isPropagationStopped:$e,isImmediatePropagationStopped:$e,isSimulated:!1,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=He,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=He,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=He,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},(function(e,t){function n(e){if(b.documentMode){var n=ae.get(this,"handle"),r=k.event.fix(e)
r.type="focusin"===e.type?"focus":"blur",r.isSimulated=!0,n(e),r.target===r.currentTarget&&n(r)}else k.event.simulate(t,e.target,k.event.fix(e))}k.event.special[e]={setup:function(){var r
if(Me(this,e,!0),!b.documentMode)return!1;(r=ae.get(this,t))||this.addEventListener(t,n),ae.set(this,t,(r||0)+1)},trigger:function(){return Me(this,e),!0},teardown:function(){var e
if(!b.documentMode)return!1;(e=ae.get(this,t)-1)?ae.set(this,t,e):(this.removeEventListener(t,n),ae.remove(this,t))},_default:function(t){return ae.get(t.target,e)},delegateType:t},k.event.special[t]={setup:function(){var r=this.ownerDocument||this.document||this,i=b.documentMode?this:r,o=ae.get(i,t)
o||(b.documentMode?this.addEventListener(t,n):r.addEventListener(e,n,!0)),ae.set(i,t,(o||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,i=b.documentMode?this:r,o=ae.get(i,t)-1
o?ae.set(i,t,o):(b.documentMode?this.removeEventListener(t,n):r.removeEventListener(e,n,!0),ae.remove(i,t))}}})),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){k.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj
return r&&(r===this||k.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}})),k.fn.extend({on:function(e,t,n,r){return Pe(this,e,t,n,r)},one:function(e,t,n,r){return Pe(this,e,t,n,r,1)},off:function(e,t,n){var r,i
if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this
if("object"==typeof e){for(i in e)this.off(i,t,e[i])
return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=$e),this.each((function(){k.event.remove(this,e,n,t)}))}})
var _e=/<script|<style|<link/i,Re=/checked\s*(?:[^=]|=\s*.checked.)/i,Fe=/^\s*<!\[CDATA\[|\]\]>\s*$/g
function Ie(e,t){return S(e,"table")&&S(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function We(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Be(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function ze(e,t){var n,r,i,o,s,a
if(1===t.nodeType){if(ae.hasData(e)&&(a=ae.get(e).events))for(i in ae.remove(t,"handle events"),a)for(n=0,r=a[i].length;n<r;n++)k.event.add(t,i,a[i][n])
ue.hasData(e)&&(o=ue.access(e),s=k.extend({},o),ue.set(t,s))}}function Ue(e,t){var n=t.nodeName.toLowerCase()
"input"===n&&ke.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Ve(e,t,n,r){t=u(t)
var i,o,s,a,c,l,f=0,p=e.length,d=p-1,h=t[0],g=m(h)
if(g||p>1&&"string"==typeof h&&!y.checkClone&&Re.test(h))return e.each((function(i){var o=e.eq(i)
g&&(t[0]=h.call(this,i,o.html())),Ve(o,t,n,r)}))
if(p&&(o=(i=Le(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){for(a=(s=k.map(De(i,"script"),We)).length;f<p;f++)c=i,f!==d&&(c=k.clone(c,!0,!0),a&&k.merge(s,De(c,"script"))),n.call(e[f],c,f)
if(a)for(l=s[s.length-1].ownerDocument,k.map(s,Be),f=0;f<a;f++)c=s[f],Se.test(c.type||"")&&!ae.access(c,"globalEval")&&k.contains(l,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?k._evalUrl&&!c.noModule&&k._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},l):w(c.textContent.replace(Fe,""),c,l))}return e}function Ke(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(De(r)),r.parentNode&&(n&&ye(r)&&Oe(De(r,"script")),r.parentNode.removeChild(r))
return e}k.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=ye(e)
if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(s=De(a),r=0,i=(o=De(e)).length;r<i;r++)Ue(o[r],s[r])
if(t)if(n)for(o=o||De(e),s=s||De(a),r=0,i=o.length;r<i;r++)ze(o[r],s[r])
else ze(e,a)
return(s=De(a,"script")).length>0&&Oe(s,!u&&De(e,"script")),a},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(oe(n)){if(t=n[ae.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle)
n[ae.expando]=void 0}n[ue.expando]&&(n[ue.expando]=void 0)}}}),k.fn.extend({detach:function(e){return Ke(this,e,!0)},remove:function(e){return Ke(this,e)},text:function(e){return ee(this,(function(e){return void 0===e?k.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return Ve(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Ie(this,e).appendChild(e)}))},prepend:function(){return Ve(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Ie(this,e)
t.insertBefore(e,t.firstChild)}}))},before:function(){return Ve(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return Ve(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(De(e,!1)),e.textContent="")
return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return k.clone(this,e,t)}))},html:function(e){return ee(this,(function(e){var t=this[0]||{},n=0,r=this.length
if(void 0===e&&1===t.nodeType)return t.innerHTML
if("string"==typeof e&&!_e.test(e)&&!Ae[(je.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e)
try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(De(t,!1)),t.innerHTML=e)
t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[]
return Ve(this,arguments,(function(t){var n=this.parentNode
k.inArray(this,e)<0&&(k.cleanData(De(this)),n&&n.replaceChild(t,this))}),e)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){k.fn[e]=function(e){for(var n,r=[],i=k(e),o=i.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),k(i[s])[t](n),c.apply(r,n.get())
return this.pushStack(r)}}))
var Xe=new RegExp("^("+pe+")(?!px)[a-z%]+$","i"),Qe=/^--/,Ge=function(e){var t=e.ownerDocument.defaultView
return t&&t.opener||(t=r),t.getComputedStyle(e)},Ye=function(e,t,n){var r,i,o={}
for(i in t)o[i]=e.style[i],e.style[i]=t[i]
for(i in r=n.call(e),t)e.style[i]=o[i]
return r},Je=new RegExp(he.join("|"),"i")
function Ze(e,t,n){var r,i,o,s,a=Qe.test(t),u=e.style
return(n=n||Ge(e))&&(s=n.getPropertyValue(t)||n[t],a&&s&&(s=s.replace(L,"$1")||void 0),""!==s||ye(e)||(s=k.style(e,t)),!y.pixelBoxStyles()&&Xe.test(s)&&Je.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=s,s=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==s?s+"":s}function et(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments)
delete this.get}}}!function(){function e(){if(l){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ge.appendChild(c).appendChild(l)
var e=r.getComputedStyle(l)
n="1%"!==e.top,u=12===t(e.marginLeft),l.style.right="60%",s=36===t(e.right),i=36===t(e.width),l.style.position="absolute",o=12===t(l.offsetWidth/3),ge.removeChild(c),l=null}}function t(e){return Math.round(parseFloat(e))}var n,i,o,s,a,u,c=b.createElement("div"),l=b.createElement("div")
l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),i},pixelBoxStyles:function(){return e(),s},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),u},scrollboxSize:function(){return e(),o},reliableTrDimensions:function(){var e,t,n,i
return null==a&&(e=b.createElement("table"),t=b.createElement("tr"),n=b.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",ge.appendChild(e).appendChild(t).appendChild(n),i=r.getComputedStyle(t),a=parseInt(i.height,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10)===t.offsetHeight,ge.removeChild(e)),a}}))}()
var tt=["Webkit","Moz","ms"],nt=b.createElement("div").style,rt={}
function it(e){return k.cssProps[e]||rt[e]||(e in nt?e:rt[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=tt.length;n--;)if((e=tt[n]+t)in nt)return e}(e)||e)}var ot=/^(none|table(?!-c[ea]).+)/,st={position:"absolute",visibility:"hidden",display:"block"},at={letterSpacing:"0",fontWeight:"400"}
function ut(e,t,n){var r=de.exec(t)
return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function ct(e,t,n,r,i,o){var s="width"===t?1:0,a=0,u=0,c=0
if(n===(r?"border":"content"))return 0
for(;s<4;s+=2)"margin"===n&&(c+=k.css(e,n+he[s],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+he[s],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+he[s]+"Width",!0,i))):(u+=k.css(e,"padding"+he[s],!0,i),"padding"!==n?u+=k.css(e,"border"+he[s]+"Width",!0,i):a+=k.css(e,"border"+he[s]+"Width",!0,i))
return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-a-.5))||0),u+c}function lt(e,t,n){var r=Ge(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,s=Ze(e,t,r),a="offset"+t[0].toUpperCase()+t.slice(1)
if(Xe.test(s)){if(!n)return s
s="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&S(e,"tr")||"auto"===s||!parseFloat(s)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=a in e)&&(s=e[a])),(s=parseFloat(s)||0)+ct(e,t,n||(i?"border":"content"),o,r,s)+"px"}function ft(e,t,n,r,i){return new ft.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ze(e,"opacity")
return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=ie(t),u=Qe.test(t),c=e.style
if(u||(t=it(a)),s=k.cssHooks[t]||k.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:c[t]
"string"==(o=typeof n)&&(i=de.exec(n))&&i[1]&&(n=be(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[a]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(u?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,r){var i,o,s,a=ie(t)
return Qe.test(t)||(t=it(a)),(s=k.cssHooks[t]||k.cssHooks[a])&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=Ze(e,t,r)),"normal"===i&&t in at&&(i=at[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],(function(e,t){k.cssHooks[t]={get:function(e,n,r){if(n)return!ot.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?lt(e,t,r):Ye(e,st,(function(){return lt(e,t,r)}))},set:function(e,n,r){var i,o=Ge(e),s=!y.scrollboxSize()&&"absolute"===o.position,a=(s||r)&&"border-box"===k.css(e,"boxSizing",!1,o),u=r?ct(e,t,r,a,o):0
return a&&s&&(u-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-ct(e,t,"border",!1,o)-.5)),u&&(i=de.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=k.css(e,t)),ut(0,n,u)}}})),k.cssHooks.marginLeft=et(y.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(Ze(e,"marginLeft"))||e.getBoundingClientRect().left-Ye(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),k.each({margin:"",padding:"",border:"Width"},(function(e,t){k.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+he[r]+t]=o[r]||o[r-2]||o[0]
return i}},"margin"!==e&&(k.cssHooks[e+t].set=ut)})),k.fn.extend({css:function(e,t){return ee(this,(function(e,t,n){var r,i,o={},s=0
if(Array.isArray(t)){for(r=Ge(e),i=t.length;s<i;s++)o[t[s]]=k.css(e,t[s],!1,r)
return o}return void 0!==n?k.style(e,t,n):k.css(e,t)}),e,t,arguments.length>1)}}),k.Tween=ft,ft.prototype={constructor:ft,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=ft.propHooks[this.prop]
return e&&e.get?e.get(this):ft.propHooks._default.get(this)},run:function(e){var t,n=ft.propHooks[this.prop]
return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):ft.propHooks._default.set(this),this}},ft.prototype.init.prototype=ft.prototype,ft.propHooks={_default:{get:function(e){var t
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[it(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}},ft.propHooks.scrollTop=ft.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=ft.prototype.init,k.fx.step={}
var pt,dt,ht=/^(?:toggle|show|hide)$/,gt=/queueHooks$/
function yt(){dt&&(!1===b.hidden&&r.requestAnimationFrame?r.requestAnimationFrame(yt):r.setTimeout(yt,k.fx.interval),k.fx.tick())}function mt(){return r.setTimeout((function(){pt=void 0})),pt=Date.now()}function vt(e,t){var n,r=0,i={height:e}
for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=he[r])]=i["padding"+n]=e
return t&&(i.opacity=i.width=e),i}function bt(e,t,n){for(var r,i=(xt.tweeners[t]||[]).concat(xt.tweeners["*"]),o=0,s=i.length;o<s;o++)if(r=i[o].call(n,t,e))return r}function xt(e,t,n){var r,i,o=0,s=xt.prefilters.length,a=k.Deferred().always((function(){delete u.elem})),u=function(){if(i)return!1
for(var t=pt||mt(),n=Math.max(0,c.startTime+c.duration-t),r=1-(n/c.duration||0),o=0,s=c.tweens.length;o<s;o++)c.tweens[o].run(r)
return a.notifyWith(e,[c,r,n]),r<1&&s?n:(s||a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c]),!1)},c=a.promise({elem:e,props:k.extend({},t),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},n),originalProperties:t,originalOptions:n,startTime:pt||mt(),duration:n.duration,tweens:[],createTween:function(t,n){var r=k.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing)
return c.tweens.push(r),r},stop:function(t){var n=0,r=t?c.tweens.length:0
if(i)return this
for(i=!0;n<r;n++)c.tweens[n].run(1)
return t?(a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c,t])):a.rejectWith(e,[c,t]),this}}),l=c.props
for(function(e,t){var n,r,i,o,s
for(n in e)if(i=t[r=ie(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(s=k.cssHooks[r])&&"expand"in s)for(n in o=s.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i)
else t[r]=i}(l,c.opts.specialEasing);o<s;o++)if(r=xt.prefilters[o].call(c,e,l,c.opts))return m(r.stop)&&(k._queueHooks(c.elem,c.opts.queue).stop=r.stop.bind(r)),r
return k.map(l,bt,c),m(c.opts.start)&&c.opts.start.call(e,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),k.fx.timer(k.extend(u,{elem:e,anim:c,queue:c.opts.queue})),c}k.Animation=k.extend(xt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t)
return be(n.elem,e,de.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(K)
for(var n,r=0,i=e.length;r<i;r++)n=e[r],xt.tweeners[n]=xt.tweeners[n]||[],xt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,s,a,u,c,l,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ve(e),y=ae.get(e,"fxshow")
for(r in n.queue||(null==(s=k._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,p.always((function(){p.always((function(){s.unqueued--,k.queue(e,"fx").length||s.empty.fire()}))}))),t)if(i=t[r],ht.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue
g=!0}d[r]=y&&y[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(c=y&&y.display)&&(c=ae.get(e,"display")),"none"===(l=k.css(e,"display"))&&(c?l=c:(Te([e],!0),c=e.style.display||c,l=k.css(e,"display"),Te([e]))),("inline"===l||"inline-block"===l&&null!=c)&&"none"===k.css(e,"float")&&(u||(p.done((function(){h.display=c})),null==c&&(l=h.display,c="none"===l?"":l)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always((function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}))),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=ae.access(e,"fxshow",{display:c}),o&&(y.hidden=!g),g&&Te([e],!0),p.done((function(){for(r in g||Te([e]),ae.remove(e,"fxshow"),d)k.style(e,r,d[r])}))),u=bt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?xt.prefilters.unshift(e):xt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t}
return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ve).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=k.isEmptyObject(e),o=k.speed(t,n,r),s=function(){var t=xt(this,k.extend({},e),o);(i||ae.get(this,"finish"))&&t.stop(!0)}
return s.finish=s,i||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop
delete e.stop,t(n)}
return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,i=null!=e&&e+"queueHooks",o=k.timers,s=ae.get(this)
if(i)s[i]&&s[i].stop&&r(s[i])
else for(i in s)s[i]&&s[i].stop&&gt.test(i)&&r(s[i])
for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1))
!t&&n||k.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=ae.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=k.timers,s=r?r.length:0
for(n.finish=!0,k.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
for(t=0;t<s;t++)r[t]&&r[t].finish&&r[t].finish.call(this)
delete n.finish}))}}),k.each(["toggle","show","hide"],(function(e,t){var n=k.fn[t]
k.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(vt(t,!0),e,r,i)}})),k.each({slideDown:vt("show"),slideUp:vt("hide"),slideToggle:vt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){k.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}})),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers
for(pt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1)
n.length||k.fx.stop(),pt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){dt||(dt=!0,yt())},k.fx.stop=function(){dt=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(e,t){return e=k.fx&&k.fx.speeds[e]||e,t=t||"fx",this.queue(t,(function(t,n){var i=r.setTimeout(t,e)
n.stop=function(){r.clearTimeout(i)}}))},function(){var e=b.createElement("input"),t=b.createElement("select").appendChild(b.createElement("option"))
e.type="checkbox",y.checkOn=""!==e.value,y.optSelected=t.selected,(e=b.createElement("input")).value="t",e.type="radio",y.radioValue="t"===e.value}()
var wt,Tt=k.expr.attrHandle
k.fn.extend({attr:function(e,t){return ee(this,k.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){k.removeAttr(this,e)}))}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?wt:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&S(e,"input")){var n=e.value
return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(K)
if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),wt={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=Tt[t]||k.find.attr
Tt[t]=function(e,t,r){var i,o,s=t.toLowerCase()
return r||(o=Tt[s],Tt[s]=i,i=null!=n(e,t,r)?s:null,Tt[s]=o),i}}))
var Ct=/^(?:input|select|textarea|button)$/i,Et=/^(?:a|area)$/i
function kt(e){return(e.match(K)||[]).join(" ")}function jt(e){return e.getAttribute&&e.getAttribute("class")||""}function St(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(K)||[]}k.fn.extend({prop:function(e,t){return ee(this,k.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[k.propFix[e]||e]}))}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex")
return t?parseInt(t,10):Ct.test(e.nodeName)||Et.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode
return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode
t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){k.propFix[this.toLowerCase()]=this})),k.fn.extend({addClass:function(e){var t,n,r,i,o,s
return m(e)?this.each((function(t){k(this).addClass(e.call(this,t,jt(this)))})):(t=St(e)).length?this.each((function(){if(r=jt(this),n=1===this.nodeType&&" "+kt(r)+" "){for(o=0;o<t.length;o++)i=t[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ")
s=kt(n),r!==s&&this.setAttribute("class",s)}})):this},removeClass:function(e){var t,n,r,i,o,s
return m(e)?this.each((function(t){k(this).removeClass(e.call(this,t,jt(this)))})):arguments.length?(t=St(e)).length?this.each((function(){if(r=jt(this),n=1===this.nodeType&&" "+kt(r)+" "){for(o=0;o<t.length;o++)for(i=t[o];n.indexOf(" "+i+" ")>-1;)n=n.replace(" "+i+" "," ")
s=kt(n),r!==s&&this.setAttribute("class",s)}})):this:this.attr("class","")},toggleClass:function(e,t){var n,r,i,o,s=typeof e,a="string"===s||Array.isArray(e)
return m(e)?this.each((function(n){k(this).toggleClass(e.call(this,n,jt(this),t),t)})):"boolean"==typeof t&&a?t?this.addClass(e):this.removeClass(e):(n=St(e),this.each((function(){if(a)for(o=k(this),i=0;i<n.length;i++)r=n[i],o.hasClass(r)?o.removeClass(r):o.addClass(r)
else void 0!==e&&"boolean"!==s||((r=jt(this))&&ae.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===e?"":ae.get(this,"__className__")||""))})))},hasClass:function(e){var t,n,r=0
for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+kt(jt(n))+" ").indexOf(t)>-1)return!0
return!1}})
var At=/\r/g
k.fn.extend({val:function(e){var t,n,r,i=this[0]
return arguments.length?(r=m(e),this.each((function(n){var i
1===this.nodeType&&(null==(i=r?e.call(this,n,k(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=k.map(i,(function(e){return null==e?"":e+""}))),(t=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))}))):i?(t=k.valHooks[i.type]||k.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(At,""):null==n?"":n:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value")
return null!=t?t:kt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,s="select-one"===e.type,a=s?null:[],u=s?o+1:i.length
for(r=o<0?u:s?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!S(n.parentNode,"optgroup"))){if(t=k(n).val(),s)return t
a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=k.makeArray(t),s=i.length;s--;)((r=i[s]).selected=k.inArray(k.valHooks.option.get(r),o)>-1)&&(n=!0)
return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],(function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=k.inArray(k(e).val(),t)>-1}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}))
var Dt=r.location,Ot={guid:Date.now()},Nt=/\?/
k.parseXML=function(e){var t,n
if(!e||"string"!=typeof e)return null
try{t=(new r.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||k.error("Invalid XML: "+(n?k.map(n.childNodes,(function(e){return e.textContent})).join("\n"):e)),t}
var Lt=/^(?:focusinfocus|focusoutblur)$/,qt=function(e){e.stopPropagation()}
k.extend(k.event,{trigger:function(e,t,n,i){var o,s,a,u,c,l,f,p,h=[n||b],g=d.call(e,"type")?e.type:e,y=d.call(e,"namespace")?e.namespace.split("."):[]
if(s=p=a=n=n||b,3!==n.nodeType&&8!==n.nodeType&&!Lt.test(g+k.event.triggered)&&(g.indexOf(".")>-1&&(y=g.split("."),g=y.shift(),y.sort()),c=g.indexOf(":")<0&&"on"+g,(e=e[k.expando]?e:new k.Event(g,"object"==typeof e&&e)).isTrigger=i?2:3,e.namespace=y.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),f=k.event.special[g]||{},i||!f.trigger||!1!==f.trigger.apply(n,t))){if(!i&&!f.noBubble&&!v(n)){for(u=f.delegateType||g,Lt.test(u+g)||(s=s.parentNode);s;s=s.parentNode)h.push(s),a=s
a===(n.ownerDocument||b)&&h.push(a.defaultView||a.parentWindow||r)}for(o=0;(s=h[o++])&&!e.isPropagationStopped();)p=s,e.type=o>1?u:f.bindType||g,(l=(ae.get(s,"events")||Object.create(null))[e.type]&&ae.get(s,"handle"))&&l.apply(s,t),(l=c&&s[c])&&l.apply&&oe(s)&&(e.result=l.apply(s,t),!1===e.result&&e.preventDefault())
return e.type=g,i||e.isDefaultPrevented()||f._default&&!1!==f._default.apply(h.pop(),t)||!oe(n)||c&&m(n[g])&&!v(n)&&((a=n[c])&&(n[c]=null),k.event.triggered=g,e.isPropagationStopped()&&p.addEventListener(g,qt),n[g](),e.isPropagationStopped()&&p.removeEventListener(g,qt),k.event.triggered=void 0,a&&(n[c]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0})
k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each((function(){k.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0]
if(n)return k.event.trigger(e,t,n,!0)}})
var Ht=/\[\]$/,$t=/\r?\n/g,Pt=/^(?:submit|button|image|reset|file)$/i,Mt=/^(?:input|select|textarea|keygen)/i
function _t(e,t,n,r){var i
if(Array.isArray(t))k.each(t,(function(t,i){n||Ht.test(e)?r(e,i):_t(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)}))
else if(n||"object"!==T(t))r(e,t)
else for(i in t)_t(e+"["+i+"]",t[i],n,r)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t
r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)}
if(null==e)return""
if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,(function(){i(this.name,this.value)}))
else for(n in e)_t(n,e[n],t,i)
return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=k.prop(this,"elements")
return e?k.makeArray(e):this})).filter((function(){var e=this.type
return this.name&&!k(this).is(":disabled")&&Mt.test(this.nodeName)&&!Pt.test(e)&&(this.checked||!ke.test(e))})).map((function(e,t){var n=k(this).val()
return null==n?null:Array.isArray(n)?k.map(n,(function(e){return{name:t.name,value:e.replace($t,"\r\n")}})):{name:t.name,value:n.replace($t,"\r\n")}})).get()}})
var Rt=/%20/g,Ft=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Bt=/^(?:GET|HEAD)$/,zt=/^\/\//,Ut={},Vt={},Kt="*/".concat("*"),Xt=b.createElement("a")
function Qt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*")
var r,i=0,o=t.toLowerCase().match(K)||[]
if(m(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Gt(e,t,n,r){var i={},o=e===Vt
function s(a){var u
return i[a]=!0,k.each(e[a]||[],(function(e,a){var c=a(t,n,r)
return"string"!=typeof c||o||i[c]?o?!(u=c):void 0:(t.dataTypes.unshift(c),s(c),!1)})),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function Yt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{}
for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n])
return r&&k.extend(!0,e,r),e}Xt.href=Dt.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Dt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Dt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Yt(Yt(e,k.ajaxSettings),t):Yt(k.ajaxSettings,e)},ajaxPrefilter:Qt(Ut),ajaxTransport:Qt(Vt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{}
var n,i,o,s,a,u,c,l,f,p,d=k.ajaxSetup({},t),h=d.context||d,g=d.context&&(h.nodeType||h.jquery)?k(h):k.event,y=k.Deferred(),m=k.Callbacks("once memory"),v=d.statusCode||{},x={},w={},T="canceled",C={readyState:0,getResponseHeader:function(e){var t
if(c){if(!s)for(s={};t=Wt.exec(o);)s[t[1].toLowerCase()+" "]=(s[t[1].toLowerCase()+" "]||[]).concat(t[2])
t=s[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return c?o:null},setRequestHeader:function(e,t){return null==c&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,x[e]=t),this},overrideMimeType:function(e){return null==c&&(d.mimeType=e),this},statusCode:function(e){var t
if(e)if(c)C.always(e[C.status])
else for(t in e)v[t]=[v[t],e[t]]
return this},abort:function(e){var t=e||T
return n&&n.abort(t),E(0,t),this}}
if(y.promise(C),d.url=((e||d.url||Dt.href)+"").replace(zt,Dt.protocol+"//"),d.type=t.method||t.type||d.method||d.type,d.dataTypes=(d.dataType||"*").toLowerCase().match(K)||[""],null==d.crossDomain){u=b.createElement("a")
try{u.href=d.url,u.href=u.href,d.crossDomain=Xt.protocol+"//"+Xt.host!=u.protocol+"//"+u.host}catch(e){d.crossDomain=!0}}if(d.data&&d.processData&&"string"!=typeof d.data&&(d.data=k.param(d.data,d.traditional)),Gt(Ut,d,t,C),c)return C
for(f in(l=k.event&&d.global)&&0==k.active++&&k.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!Bt.test(d.type),i=d.url.replace(Ft,""),d.hasContent?d.data&&d.processData&&0===(d.contentType||"").indexOf("application/x-www-form-urlencoded")&&(d.data=d.data.replace(Rt,"+")):(p=d.url.slice(i.length),d.data&&(d.processData||"string"==typeof d.data)&&(i+=(Nt.test(i)?"&":"?")+d.data,delete d.data),!1===d.cache&&(i=i.replace(It,"$1"),p=(Nt.test(i)?"&":"?")+"_="+Ot.guid+++p),d.url=i+p),d.ifModified&&(k.lastModified[i]&&C.setRequestHeader("If-Modified-Since",k.lastModified[i]),k.etag[i]&&C.setRequestHeader("If-None-Match",k.etag[i])),(d.data&&d.hasContent&&!1!==d.contentType||t.contentType)&&C.setRequestHeader("Content-Type",d.contentType),C.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+Kt+"; q=0.01":""):d.accepts["*"]),d.headers)C.setRequestHeader(f,d.headers[f])
if(d.beforeSend&&(!1===d.beforeSend.call(h,C,d)||c))return C.abort()
if(T="abort",m.add(d.complete),C.done(d.success),C.fail(d.error),n=Gt(Vt,d,t,C)){if(C.readyState=1,l&&g.trigger("ajaxSend",[C,d]),c)return C
d.async&&d.timeout>0&&(a=r.setTimeout((function(){C.abort("timeout")}),d.timeout))
try{c=!1,n.send(x,E)}catch(e){if(c)throw e
E(-1,e)}}else E(-1,"No Transport")
function E(e,t,s,u){var f,p,b,x,w,T=t
c||(c=!0,a&&r.clearTimeout(a),n=void 0,o=u||"",C.readyState=e>0?4:0,f=e>=200&&e<300||304===e,s&&(x=function(e,t,n){for(var r,i,o,s,a=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"))
if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i)
break}if(u[0]in n)o=u[0]
else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i
break}s||(s=i)}o=o||s}if(o)return o!==u[0]&&u.unshift(o),n[o]}(d,C,s)),!f&&k.inArray("script",d.dataTypes)>-1&&k.inArray("json",d.dataTypes)<0&&(d.converters["text script"]=function(){}),x=function(e,t,n,r){var i,o,s,a,u,c={},l=e.dataTypes.slice()
if(l[1])for(s in e.converters)c[s.toLowerCase()]=e.converters[s]
for(o=l.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=l.shift())if("*"===o)o=u
else if("*"!==u&&u!==o){if(!(s=c[u+" "+o]||c["* "+o]))for(i in c)if((a=i.split(" "))[1]===o&&(s=c[u+" "+a[0]]||c["* "+a[0]])){!0===s?s=c[i]:!0!==c[i]&&(o=a[0],l.unshift(a[1]))
break}if(!0!==s)if(s&&e.throws)t=s(t)
else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(d,x,C,f),f?(d.ifModified&&((w=C.getResponseHeader("Last-Modified"))&&(k.lastModified[i]=w),(w=C.getResponseHeader("etag"))&&(k.etag[i]=w)),204===e||"HEAD"===d.type?T="nocontent":304===e?T="notmodified":(T=x.state,p=x.data,f=!(b=x.error))):(b=T,!e&&T||(T="error",e<0&&(e=0))),C.status=e,C.statusText=(t||T)+"",f?y.resolveWith(h,[p,T,C]):y.rejectWith(h,[C,T,b]),C.statusCode(v),v=void 0,l&&g.trigger(f?"ajaxSuccess":"ajaxError",[C,d,f?p:b]),m.fireWith(h,[C,T]),l&&(g.trigger("ajaxComplete",[C,d]),--k.active||k.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],(function(e,t){k[t]=function(e,n,r,i){return m(n)&&(i=i||r,r=n,n=void 0),k.ajax(k.extend({url:e,type:t,dataType:i,data:n,success:r},k.isPlainObject(e)&&e))}})),k.ajaxPrefilter((function(e){var t
for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),k._evalUrl=function(e,t,n){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t,n)}})},k.fn.extend({wrapAll:function(e){var t
return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild
return e})).append(this)),this},wrapInner:function(e){return m(e)?this.each((function(t){k(this).wrapInner(e.call(this,t))})):this.each((function(){var t=k(this),n=t.contents()
n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=m(e)
return this.each((function(n){k(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){k(this).replaceWith(this.childNodes)})),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new r.XMLHttpRequest}catch(e){}}
var Jt={0:200,1223:204},Zt=k.ajaxSettings.xhr()
y.cors=!!Zt&&"withCredentials"in Zt,y.ajax=Zt=!!Zt,k.ajaxTransport((function(e){var t,n
if(y.cors||Zt&&!e.crossDomain)return{send:function(i,o){var s,a=e.xhr()
if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)a[s]=e.xhrFields[s]
for(s in e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)a.setRequestHeader(s,i[s])
t=function(e){return function(){t&&(t=n=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(Jt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=t(),n=a.onerror=a.ontimeout=t("error"),void 0!==a.onabort?a.onabort=n:a.onreadystatechange=function(){4===a.readyState&&r.setTimeout((function(){t&&n()}))},t=t("abort")
try{a.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}})),k.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),k.ajaxTransport("script",(function(e){var t,n
if(e.crossDomain||e.scriptAttrs)return{send:function(r,i){t=k("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),b.head.appendChild(t[0])},abort:function(){n&&n()}}}))
var en,tn=[],nn=/(=)\?(?=&|$)|\?\?/
k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=tn.pop()||k.expando+"_"+Ot.guid++
return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",(function(e,t,n){var i,o,s,a=!1!==e.jsonp&&(nn.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&nn.test(e.data)&&"data")
if(a||"jsonp"===e.dataTypes[0])return i=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(nn,"$1"+i):!1!==e.jsonp&&(e.url+=(Nt.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return s||k.error(i+" was not called"),s[0]},e.dataTypes[0]="json",o=r[i],r[i]=function(){s=arguments},n.always((function(){void 0===o?k(r).removeProp(i):r[i]=o,e[i]&&(e.jsonpCallback=t.jsonpCallback,tn.push(i)),s&&m(o)&&o(s[0]),s=o=void 0})),"script"})),y.createHTMLDocument=((en=b.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===en.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=b.implementation.createHTMLDocument("")).createElement("base")).href=b.location.href,t.head.appendChild(r)):t=b),o=!n&&[],(i=F.exec(e))?[t.createElement(i[1])]:(i=Le([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)))
var r,i,o},k.fn.load=function(e,t,n){var r,i,o,s=this,a=e.indexOf(" ")
return a>-1&&(r=kt(e.slice(a)),e=e.slice(0,a)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),s.length>0&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done((function(e){o=arguments,s.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)})).always(n&&function(e,t){s.each((function(){n.apply(this,o||[e.responseText,t,e])}))}),this},k.expr.pseudos.animated=function(e){return k.grep(k.timers,(function(t){return e===t.elem})).length},k.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,c=k.css(e,"position"),l=k(e),f={}
"static"===c&&(e.style.position="relative"),a=l.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1?(s=(r=l.position()).top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},a))),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):l.css(f)}},k.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){k.offset.setOffset(this,e,t)}))
var t,n,r=this[0]
return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0}
if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect()
else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position");)e=e.parentNode
e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===k.css(e,"position");)e=e.offsetParent
return e||ge}))}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t
k.fn[e]=function(r){return ee(this,(function(e,r,i){var o
if(v(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r]
o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i}),e,r,arguments.length)}})),k.each(["top","left"],(function(e,t){k.cssHooks[t]=et(y.pixelPosition,(function(e,n){if(n)return n=Ze(e,t),Xe.test(n)?k(e).position()[t]+"px":n}))})),k.each({Height:"height",Width:"width"},(function(e,t){k.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,r){k.fn[r]=function(i,o){var s=arguments.length&&(n||"boolean"!=typeof i),a=n||(!0===i||!0===o?"margin":"border")
return ee(this,(function(t,n,i){var o
return v(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?k.css(t,n,a):k.style(t,n,i,a)}),t,s?i:void 0,s)}}))})),k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){k.fn[t]=function(e){return this.on(t,e)}})),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){k.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}))
var rn=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g
k.proxy=function(e,t){var n,r,i
if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=a.call(arguments,2),i=function(){return e.apply(t||this,r.concat(a.call(arguments)))},i.guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=S,k.isFunction=m,k.isWindow=v,k.camelCase=ie,k.type=T,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e)
return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},k.trim=function(e){return null==e?"":(e+"").replace(rn,"$1")},void 0===(n=function(){return k}.apply(t,[]))||(e.exports=n)
var on=r.jQuery,sn=r.$
return k.noConflict=function(e){return r.$===k&&(r.$=sn),e&&r.jQuery===k&&(r.jQuery=on),k},void 0===i&&(r.jQuery=r.$=k),k}))},3076:(e,t,n)=>{"use strict"
n.d(t,{Oz:()=>s,QL:()=>c,Zn:()=>u,iz:()=>f,sS:()=>l,y1:()=>a})
var r=n(6869)
function i(e){return void 0!==e}class o{constructor(e,t,n,r){this.targetNode=e,this.targetScope=t||"",this.targetSelector=n||"",this.targetFilters=r}toString(){let e,t
if(e=this.targetFilters.resetScope?this.targetScope:this.calculateScope(this.targetNode,this.targetScope),`${e} ${this.targetSelector}`.indexOf(",")>-1)throw new Error("Usage of comma separated selectors is not supported. Please make sure your selector targets a single selector.")
t=this.calculateFilters(this.targetFilters)
let n=`${e} ${this.targetSelector}${t}`.trim()
return n.length||(n=":first"),n}calculateFilters(){let e=[]
return this.targetFilters.visible&&e.push(":visible"),this.targetFilters.contains&&e.push(`:contains("${this.targetFilters.contains}")`),"number"==typeof this.targetFilters.at?e.push(`:eq(${this.targetFilters.at})`):this.targetFilters.last&&e.push(":last"),e.join("")}calculateScope(e,t){let n=this.getScopes(e)
return n.reverse(),n.push(t),n.join(" ").trim()}getScopes(e){let t=[]
return e.scope&&t.push(e.scope),!e.resetScope&&r.A.parent(e)&&(t=t.concat(this.calculateScope(r.A.parent(e)))),t}}function s(e,t,n){if(e.length>1&&!n)throw new Error(`"${t}" matched more than one element. If you want to select many elements, use collections instead.`)}function a(e,t,n){return new o(e,n.scope,t,n).toString()}function u(e){let t=r.A.parent(e),n=e
for(;t;)n=t,t=r.A.parent(t)
return n}function c(e){let t=function(e,t){let n=e,o=[]
for(;i(n);)i(n[t])&&o.push(n[t]),n=r.A.parent(n)
return o}(e,"scope")
return t.reverse().join(" ")}function l(e,t){if(i(e[t]))return e[t]
let n=r.A.parent(e)
return i(n)?l(n,t):void 0}function f(e,t){return Object.getOwnPropertyNames(t).forEach((n=>{const r=Object.getOwnPropertyDescriptor(t,n)
Object.defineProperty(e,n,r)})),e}},3159:(e,t,n)=>{"use strict"
n.d(t,{c:()=>o})
var r=n(9052)
let i
function o(){return i||new r.A}n(8260)},5211:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{attribute:()=>q,blurrable:()=>y,buildSelector:()=>c.y1,clickOnText:()=>v,clickable:()=>m,collection:()=>P,contains:()=>b,count:()=>$,create:()=>L,default:()=>K,fillable:()=>x,findElement:()=>p.Kt,findElementWithAssert:()=>p.M5,focusable:()=>w,hasClass:()=>_,isHidden:()=>T,isPresent:()=>C,isVisible:()=>E,notHasClass:()=>R,property:()=>F,selectable:()=>V,text:()=>j,triggerable:()=>W,value:()=>A,visitable:()=>U})
var r=n(6869)
function i(e){if(e&&"object"==typeof e){let t=r.A.meta(e)
return Boolean(t&&t.__poDef__)}return!1}function o(e){if(i(e))return r.A.meta(e).__poDef__
throw new Error("cannot get the page object definition from a node that is not a page object")}var s=n(5511),a=n(1943),u=n(558),c=n(3076),l=n(1192)
function f(e,t){if([t,e]=function(e,t){return t?[t,{...e}]:[e,{}]}(e,t),"function"!=typeof t)throw new Error("`action()` expects a function argument.")
return(0,s.o)((function(n){return function(...r){return e.pageObjectKey=function(e,t){return`${e}(${t.length?`"${t.map((e=>String(e))).join('", "')}"`:""})`}(n,r),function(e,t){const n=(0,c.Zn)(e)
return(0,l.F)(e)?(n._promise=(0,u.hd)(n._promise).then((()=>t())),e):(n._chainedTree._promise=t(),(0,l.I)(e))}(this,(()=>{try{const n=t.bind(this)(...r)
return Promise.resolve(n).catch((t=>{(0,a.Or)(this,e,t)}))}catch(t){(0,a.Or)(this,e,t)}}))}}))}var p=n(172),d=n(3159)
function h(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}function g(e){return e.textContent}function y(e="",t={}){return f({...t,selector:e},(function(){const n=(0,p.sM)(this,e,t)
return(0,d.c)().blur(n)}))}function m(e,t={}){return f({...t,selector:e},(function(){const n=(0,p.sM)(this,e,t)
return(0,d.c)().click(n)}))}function v(e,t={}){return f({...t,selector:e},(function(n){const r={...t,contains:n,last:!0},i=`${e||""} *`,o=(0,p.nV)(this,i,r).length?i:e,s=(0,p.sM)(this,o,r)
return(0,d.c)().click(s)}))}function b(e,t={}){return(0,s.o)((function(n){return function(r){let i={pageObjectKey:`${n}("${r}")`,...t}
return o=r,g((0,p.sM)(this,e,i)).indexOf(o)>-1
var o}}))}function x(e="",t={}){return f({...t,selector:e},(function(n,r){let i
void 0===r?r=n:i=n
let o=e
if(i&&(o=function(e,t,n,r){return["input","textarea","select","[contenteditable]"].map((e=>[`${e}[data-test="${r}"]`,`${e}[aria-label="${r}"]`,`${e}[placeholder="${r}"]`,`${e}[name="${r}"]`,`${e}#${r}`])).reduce(((e,t)=>e.concat(t)),[]).find((r=>(0,p.nV)(e,`${t} ${r}`,n)[0]))}(this,e,t,i),!o))throw new Error(`Can not find element by clue: "${i}".`)
const s=(0,p.sM)(this,o,t)
return(0,d.c)().fillIn(s,r)}))}function w(e="",t={}){const n={...t,selector:e}
return f(n,(function(){const t=(0,p.sM)(this,e,n)
return(0,d.c)().focus(t)}))}function T(e,t={}){return(0,s.o)((function(n){let r={pageObjectKey:n,...t},i=(0,p.nV)(this,e,r)
return(0,c.Oz)(i,e),0===i.length||!h(i[0])}))}function C(e,t={}){return(0,s.o)((function(n){let r={pageObjectKey:n,...t},i=(0,p.nV)(this,e,r)
return(0,c.Oz)(i,e),1===i.length}))}function E(e,t={}){return(0,s.o)((function(n){let r={pageObjectKey:n,...t},i=(0,p.nV)(this,e,r,r.multiple)
return(0,c.Oz)(i,e),1===i.length&&h(i[0])}))}function k(e){return e}function j(e,t={}){return(0,s.o)((function(n){let r={pageObjectKey:n,...t}
return(!1===r.normalize?k:S)(g((0,p.sM)(this,e,r)))}))}function S(e){return e.trim().replace(/\n/g," ").replace(/\s\s*/g," ")}function A(e,t={}){return(0,s.o)((function(n){let r={pageObjectKey:n,...t}
const i=(0,p.sM)(this,e,r)
return i.hasAttribute("contenteditable")?i.innerHTML:function(e){const{value:t}=e
return void 0!==t&&"select"===e.tagName.toLowerCase()?function(e){const t=Array.from(e.selectedOptions).filter((e=>!(e.disabled||"optgroup"===e.parentNode.tagName.toLowerCase()&&e.parentNode.disabled)))
return e.multiple?t.map((e=>e.value)):0===t.length?null:e.value}(e):e.value}(i)}))}const D={isDescriptor:!0,value(){const e=(0,c.Zn)(this)
return(e._chainedTree||e)._promise.then(...arguments)}},O={as:function(e){return e(this),this},blur:y(),click:m(),clickOn:v(),contains:b(),fillIn:x(),focus:w(),isHidden:T(),isPresent:C(),isVisible:E(),select:x(),text:j(),then:D,value:A()}
function N(e,t,n,a){let u
if(Array.isArray(n))return void(e[t]=n)
i(n)?u=o(n):(Object.getOwnPropertyNames(n).forEach((e=>{const{get:t,value:r}=Object.getOwnPropertyDescriptor(n,e)
if("function"==typeof t)Object.defineProperty(n,e,{value:(0,s.o)(t)})
else if("string"==typeof r&&!["scope","testContainer"].includes(e))throw new Error(`string values are not supported in page object definitions\n\nKey: "${e}"`)})),u=n)
let c={...u}
c._chainedTree&&delete c._chainedTree,n={...O,...u}
const[l,f]=a(e,t,n,a)
return function(e,t){r.A.meta(e).__poDef__=t}(l,c),[l,f]}function L(e={},t={}){if("string"==typeof e)throw new Error("Definition can not be a string")
if((e=i(e)?{...o(e)}:(0,c.iz)({},e)).context)throw new Error('"context" key is not allowed to be passed at definition root.')
let n={object:N},a=r.A.create(e,{builder:n,...t})
e._chainedTree=(0,s.o)((function(){return a}))
let u={object:N}
return r.A.create(e,{builder:u,...t})}function q(e,t,n={}){return(0,s.o)((function(r){return function(e,t){const n=e.getAttribute(t)
if(n)return null==n?void 0:n
const r=e.getAttributeNode(t)
if(r){const{specified:e,value:n}=r
if(e&&null!==n){const e=t.toLowerCase()
return H.includes(e)?e:n}}}((0,p.sM)(this,t,{pageObjectKey:r,...n}),e)}))}n(9052),n(8260),n(491)
const H=["checked","selected","async","autofocus","autoplay","controls","defer","disabled","hidden","ismap","loop","multiple","open","readonly","required","scoped"]
function $(e,t={}){return(0,s.o)((function(n){let r={pageObjectKey:n,...t}
return(0,p.nV)(this,e,r).length}))}function P(e,t){if("string"!=typeof e)throw new Error("collection requires `scope` as the first argument")
i(t)&&(t=o(t))
let n={isDescriptor:!0,setup(r,i){var o
n.value=(o=new M(e,t,r,i),window.Proxy?new window.Proxy(o,{get:function(e,t){if("number"==typeof t||"string"==typeof t){let n=parseInt(t,10)
if(!isNaN(n))return e.objectAt(n)}return e[t]}}):o)}}
return n}class M{constructor(e,t,n,r){this.scope=e,this.definition=t||{},this.parent=n,this.key=r,this._itemCounter=L({count:$(e,{resetScope:this.definition.resetScope,testContainer:this.definition.testContainer})},{parent:n}),this._items=[]}get length(){return this._itemCounter.count}objectAt(e){let{key:t}=this
if(void 0===this._items[e]){let{scope:n,definition:i,parent:o}=this,s=(0,c.y1)({},n,{at:e}),a=(0,c.iz)({},i)
a.scope=s
let u=L(a,{parent:o})
r.A.meta(u).key=`${t}[${e}]`,this._items[e]=u}return this._items[e]}filter(...e){return this.toArray().filter(...e)}filterBy(e,t){return this.toArray().filter((n=>void 0!==t?n[e]===t:Boolean(n[e])))}forEach(...e){return this.toArray().forEach(...e)}map(...e){return this.toArray().map(...e)}mapBy(e){return this.toArray().map((t=>t[e]))}findOneBy(...e){const t=this.filterBy(...e)
return this._assertFoundElements(t,...e),t[0]}findOne(...e){const t=this.filter(...e)
return this._assertFoundElements(t,...e),t[0]}_assertFoundElements(e,...t){const n=1===t.length?"condition":`${t[0]}: "${t[1]}"`
e.length>1&&(0,a.hm)(this.parent,this.key,`${e.length} elements found by ${n}, but expected 1`),0===e.length&&(0,a.hm)(this.parent,this.key,`cannot find element by ${n}`)}toArray(){let{length:e}=this,t=[]
for(let n=0;n<e;n++)t.push(this.objectAt(n))
return t}}function _(e,t,n={}){return(0,s.o)((function(r){let i={pageObjectKey:r,...n}
return(0,p.sM)(this,t,i).classList.contains(e)}))}function R(e,t,n={}){return(0,s.o)((function(r){let i={pageObjectKey:r,...n}
return!(0,p.sM)(this,t,i).classList.contains(e)}))}function F(e,t,n={}){return(0,s.o)((function(r){let i={pageObjectKey:r,...n}
const o=(0,p.sM)(this,t,i),s=function(e){return I[e]??e}(e)
return o[s]}))}"undefined"!=typeof Symbol&&Symbol.iterator&&(M.prototype[Symbol.iterator]=function(){let e=0,t=this.toArray()
return{next:()=>({done:e>=t.length,value:t[e++]})}})
const I={tabindex:"tabIndex",readonly:"readOnly",maxlength:"maxLength",contenteditable:"contentEditable"}
function W(e,t,n={}){const{eventProperties:r}=n
return f({...n,selector:t},(function(i={}){const o={...r,...i},s=(0,p.sM)(this,t,n)
return(0,d.c)().triggerEvent(s,e,o)}))}function B(e,t,n,r="",i=!1){let o=r?`${r}[${t}]`:t
return Array.isArray(n)?n.forEach((n=>B(e,t,n,r,!0))):"object"==typeof n&&null!==n?Object.keys(n).forEach((t=>B(e,t,n[t],o))):i?e.append(`${o}[]`,n):e.append(o,n),e}function z(e,t){let n=Object.keys(t)
return n.length&&(e+=`?${n.reduce(((e,n)=>B(e,n,t[n])),new URLSearchParams)}`),e}function U(e){return f((function(t={}){let n={...t},r=function(e,t){return e.split("/").map((function(e){let n=e.match(/^:(.+)$/)
if(n){let[,e]=n,r=t[e]
if(void 0===r)throw new Error(`Missing parameter for '${e}'`)
return delete t[e],encodeURIComponent(r)}return e})).join("/")}(e,n)
return r=z(r,n),(0,d.c)().visit(r).catch((e=>{throw new Error(`Failed to visit URL '${r}': ${e.toString()}`,{cause:e})}))}))}const V=x
var K={attribute:q,blurrable:y,clickOnText:v,clickable:m,collection:P,contains:b,count:$,create:L,fillable:x,focusable:w,hasClass:_,isHidden:T,isPresent:C,isVisible:E,notHasClass:R,property:F,selectable:x,text:j,value:A,visitable:U,triggerable:W}},5511:(e,t,n)=>{"use strict"
n.d(t,{o:()=>i})
var r=n(1943)
function i(e){if("function"!=typeof e)throw new Error("Argument passed to `getter` must be a function.")
return{isDescriptor:!0,get(t){try{return e.call(this,t)}catch(e){if(e instanceof r.r7){if(!e.cause.key){const i=new r.r7(e.cause.message,{cause:{...e.cause,key:t}})
throw i.stack=e.stack,i}throw e}(0,r.hm)(this,t,e)}}}}n(6869),n(3076)},6869:(e,t,n)=>{"use strict"
function r(e){return e&&e.isDescriptor?"descriptor":null===e?"null":typeof e}function i(e,t,n,i){var o={configurable:!0,enumerable:!0}
"undefined"!==r(i)?o.get=i:(o.writable=!1,o.value=n),Object.defineProperty(e,t,o)}function o(e,t){delete e.__parentTreeNode,t&&Object.defineProperty(e,"__parentTreeNode",{value:t,configurable:!0,enumerable:!1})}function s(e,t){this.blueprint=e,this.builders=t}n.d(t,{A:()=>u}),s.prototype={builderFor:function(e){return this.builders[r(e)]||this.builders.default},build:function(e){var t,n={}
return this.processNode({root:this.blueprint},n),o(t=n.root,e),t},processNode:function(e,t,n){var i=Object.keys(e),s=this
return i.forEach((function(n){var i,o,u,c=e[n]
i=s.builderFor(c),o=a[r(c)]||a.default,(u=i(t,n,c,o))&&s.processNode(u[1],u[0],t)})),o(t,n),t}}
const a={descriptor:function(e,t,n){"function"==typeof n.setup&&n.setup(e,t),n.value?i(e,t,n.value):i(e,t,void 0,(function(){return n.get.call(this,t)}))},object:function(e,t,n){var r,o,s={}
return i(e,t,s),r=s,o=t,Object.defineProperty(r,"__meta",{value:{key:o,type:"node"},configurable:!1,enumerable:!1}),[s,n]},default:function(e,t,n){i(e,t,n)}},u={defineProperty:i,create:function(e,t){var n=function(){for(var e,t=arguments[0],n=Array.prototype.slice.call(arguments,1),r=0;r<n.length;r++)if(e=n[r])for(var i in e)void 0!==e[i]&&(t[i]=e[i])
return t}({},a,(t=t||{}).builder)
return new s(e,n).build(t.parent)},parent:function(e){return function(e){if("object"==typeof e&&null!==e)return e.__parentTreeNode}(e)},meta:function(e){return function(e){if("object"==typeof e&&null!==e)return e.__meta}(e)}}},6994:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{IS_DESCRIPTOR:()=>r,createDescriptor:()=>f,isDescriptor:()=>i,lookupDescriptorData:()=>a,registerDescriptorData:()=>s,resolveDOMElement:()=>u,resolveDOMElements:()=>c,resolveDescription:()=>l})
const r="__dom_element_descriptor_is_descriptor__"
function i(e){return Boolean("object"==typeof e&&e&&r in e)}function o(){const e=window
return e.domElementDescriptorsRegistry=e.domElementDescriptorsRegistry||new WeakMap,e.domElementDescriptorsRegistry}function s(e,t){t?o().set(e,t):o().delete(e)}function a(e){return o().get(e)||null}function u(e){let t=i(e)?a(e):e
if(!t)return null
if(void 0!==t.element)return t.element
for(let n of t.elements||[])return n
return null}function c(e){let t=i(e)?a(e):e
if(!t)return[]
if(t.elements)return Array.from(t.elements)
{let e=t.element
return e?[e]:[]}}function l(e){let t=i(e)?a(e):e
return t?.description}function f(e){let t={[r]:!0}
return s(t,e),t}},8477:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{alias:()=>a,getter:()=>r.o})
var r=n(5511),i=n(1943),o=n(1192)
n(6869),n(3076)
const s="PageObject does not contain aliased property"
function a(e,t={}){return(0,r.o)((function(n){try{const n=function(e,t){const n=t.split(".")
let r,i=e
for(;n.length>0;){const e=n.shift()
if(null===i||"object"!=typeof i||!Object.prototype.hasOwnProperty.call(i,e))throw new Error(`${s} \`${t}\`.`)
n.length?i=i[e]:r=i[e]}return"function"==typeof r?r.bind(i):r}(this,e)
return"function"==typeof n&&t.chainable?function(...e){return n(...e),(0,o.I)(this)}:n}catch(e){(0,i.hm)(this,n,e)}}))}},9052:(e,t,n)=>{"use strict"
n.d(t,{A:()=>o})
var r=n(8260)
class i{get testContainer(){throw new Error("`testContainer` is not implemented for the adapter")}visit(){throw new Error("`visit` is not implemented for the adapter")}click(){throw new Error("`click` is not implemented for the adapter")}fillIn(){throw new Error("`fillIn` is not implemented for the adapter")}triggerEvent(){throw new Error("`triggerEvent` is not implemented for the adapter")}focus(){throw new Error("`focus` is not implemented for the adapter")}blur(){throw new Error("`blur` is not implemented for the adapter")}}class o extends i{get testContainer(){return(0,r.getRootElement)()}visit(e){return(0,r.visit)(e)}click(e){return(0,r.click)(e)}fillIn(e,t){return(0,r.fillIn)(e,t)}triggerEvent(e,t,n){if(void 0!==n.key||void 0!==n.keyCode){const i=n.key||n.keyCode
return(0,r.triggerKeyEvent)(e,t,i,n)}return(0,r.triggerEvent)(e,t,n)}focus(e){return(0,r.focus)(e)}blur(e){return(0,r.blur)(e)}}}}])
