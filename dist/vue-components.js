/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Dc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ve={},fo=[],pn=()=>{},ay=()=>!1,ba=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Oc=n=>n.startsWith("onUpdate:"),Xe=Object.assign,Mc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ly=Object.prototype.hasOwnProperty,Re=(n,e)=>ly.call(n,e),oe=Array.isArray,ho=n=>ya(n)==="[object Map]",op=n=>ya(n)==="[object Set]",de=n=>typeof n=="function",qe=n=>typeof n=="string",$n=n=>typeof n=="symbol",je=n=>n!==null&&typeof n=="object",ip=n=>(je(n)||de(n))&&de(n.then)&&de(n.catch),sp=Object.prototype.toString,ya=n=>sp.call(n),cy=n=>ya(n).slice(8,-1),va=n=>ya(n)==="[object Object]",Vc=n=>qe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ai=Dc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_a=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},uy=/-(\w)/g,Dt=_a(n=>n.replace(uy,(e,t)=>t?t.toUpperCase():"")),dy=/\B([A-Z])/g,Ft=_a(n=>n.replace(dy,"-$1").toLowerCase()),wa=_a(n=>n.charAt(0).toUpperCase()+n.slice(1)),ul=_a(n=>n?`on${wa(n)}`:""),ar=(n,e)=>!Object.is(n,e),Ds=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},ap=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Ul=n=>{const e=parseFloat(n);return isNaN(e)?n:e},jl=n=>{const e=qe(n)?Number(n):NaN;return isNaN(e)?n:e};let xd;const ka=()=>xd||(xd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ca(n){if(oe(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],o=qe(r)?gy(r):Ca(r);if(o)for(const i in o)e[i]=o[i]}return e}else if(qe(n)||je(n))return n}const fy=/;(?![^(]*\))/g,hy=/:([^]+)/,py=/\/\*[^]*?\*\//g;function gy(n){const e={};return n.replace(py,"").split(fy).forEach(t=>{if(t){const r=t.split(hy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function fn(n){let e="";if(qe(n))e=n;else if(oe(n))for(let t=0;t<n.length;t++){const r=fn(n[t]);r&&(e+=r+" ")}else if(je(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const my="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",by=Dc(my);function lp(n){return!!n||n===""}const cp=n=>!!(n&&n.__v_isRef===!0),Pe=n=>qe(n)?n:n==null?"":oe(n)||je(n)&&(n.toString===sp||!de(n.toString))?cp(n)?Pe(n.value):JSON.stringify(n,up,2):String(n),up=(n,e)=>cp(e)?up(n,e.value):ho(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,o],i)=>(t[dl(r,i)+" =>"]=o,t),{})}:op(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>dl(t))}:$n(e)?dl(e):je(e)&&!oe(e)&&!va(e)?String(e):e,dl=(n,e="")=>{var t;return $n(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class yy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=$t;try{return $t=this,e()}finally{$t=t}}}on(){$t=this}off(){$t=this.parent}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function vy(){return $t}let $e;const fl=new WeakSet;class dp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$t&&$t.active&&$t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fl.has(this)&&(fl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Pd(this),pp(this);const e=$e,t=tn;$e=this,tn=!0;try{return this.fn()}finally{gp(this),$e=e,tn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Lc(e);this.deps=this.depsTail=void 0,Pd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){zl(this)&&this.run()}get dirty(){return zl(this)}}let fp=0,li,ci;function hp(n,e=!1){if(n.flags|=8,e){n.next=ci,ci=n;return}n.next=li,li=n}function Nc(){fp++}function Bc(){if(--fp>0)return;if(ci){let e=ci;for(ci=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;li;){let e=li;for(li=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function pp(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function gp(n){let e,t=n.depsTail,r=t;for(;r;){const o=r.prevDep;r.version===-1?(r===t&&(t=o),Lc(r),_y(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}n.deps=e,n.depsTail=t}function zl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(mp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function mp(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===wi))return;n.globalVersion=wi;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!zl(n)){n.flags&=-3;return}const t=$e,r=tn;$e=n,tn=!0;try{pp(n);const o=n.fn(n._value);(e.version===0||ar(o,n._value))&&(n._value=o,e.version++)}catch(o){throw e.version++,o}finally{$e=t,tn=r,gp(n),n.flags&=-3}}function Lc(n,e=!1){const{dep:t,prevSub:r,nextSub:o}=n;if(r&&(r.nextSub=o,n.prevSub=void 0),o&&(o.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Lc(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function _y(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let tn=!0;const bp=[];function yr(){bp.push(tn),tn=!1}function vr(){const n=bp.pop();tn=n===void 0?!0:n}function Pd(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=$e;$e=void 0;try{e()}finally{$e=t}}}let wi=0;class wy{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $c{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!$e||!tn||$e===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==$e)t=this.activeLink=new wy($e,this),$e.deps?(t.prevDep=$e.depsTail,$e.depsTail.nextDep=t,$e.depsTail=t):$e.deps=$e.depsTail=t,yp(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=$e.depsTail,t.nextDep=void 0,$e.depsTail.nextDep=t,$e.depsTail=t,$e.deps===t&&($e.deps=r)}return t}trigger(e){this.version++,wi++,this.notify(e)}notify(e){Nc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Bc()}}}function yp(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)yp(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Hl=new WeakMap,Br=Symbol(""),Wl=Symbol(""),ki=Symbol("");function wt(n,e,t){if(tn&&$e){let r=Hl.get(n);r||Hl.set(n,r=new Map);let o=r.get(t);o||(r.set(t,o=new $c),o.map=r,o.key=t),o.track()}}function In(n,e,t,r,o,i){const s=Hl.get(n);if(!s){wi++;return}const l=c=>{c&&c.trigger()};if(Nc(),e==="clear")s.forEach(l);else{const c=oe(n),d=c&&Vc(t);if(c&&t==="length"){const u=Number(r);s.forEach((p,g)=>{(g==="length"||g===ki||!$n(g)&&g>=u)&&l(p)})}else switch((t!==void 0||s.has(void 0))&&l(s.get(t)),d&&l(s.get(ki)),e){case"add":c?d&&l(s.get("length")):(l(s.get(Br)),ho(n)&&l(s.get(Wl)));break;case"delete":c||(l(s.get(Br)),ho(n)&&l(s.get(Wl)));break;case"set":ho(n)&&l(s.get(Br));break}}Bc()}function Zr(n){const e=Ae(n);return e===n?e:(wt(e,"iterate",ki),qt(n)?e:e.map(kt))}function Ta(n){return wt(n=Ae(n),"iterate",ki),n}const ky={__proto__:null,[Symbol.iterator](){return hl(this,Symbol.iterator,kt)},concat(...n){return Zr(this).concat(...n.map(e=>oe(e)?Zr(e):e))},entries(){return hl(this,"entries",n=>(n[1]=kt(n[1]),n))},every(n,e){return Cn(this,"every",n,e,void 0,arguments)},filter(n,e){return Cn(this,"filter",n,e,t=>t.map(kt),arguments)},find(n,e){return Cn(this,"find",n,e,kt,arguments)},findIndex(n,e){return Cn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Cn(this,"findLast",n,e,kt,arguments)},findLastIndex(n,e){return Cn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Cn(this,"forEach",n,e,void 0,arguments)},includes(...n){return pl(this,"includes",n)},indexOf(...n){return pl(this,"indexOf",n)},join(n){return Zr(this).join(n)},lastIndexOf(...n){return pl(this,"lastIndexOf",n)},map(n,e){return Cn(this,"map",n,e,void 0,arguments)},pop(){return Xo(this,"pop")},push(...n){return Xo(this,"push",n)},reduce(n,...e){return Dd(this,"reduce",n,e)},reduceRight(n,...e){return Dd(this,"reduceRight",n,e)},shift(){return Xo(this,"shift")},some(n,e){return Cn(this,"some",n,e,void 0,arguments)},splice(...n){return Xo(this,"splice",n)},toReversed(){return Zr(this).toReversed()},toSorted(n){return Zr(this).toSorted(n)},toSpliced(...n){return Zr(this).toSpliced(...n)},unshift(...n){return Xo(this,"unshift",n)},values(){return hl(this,"values",kt)}};function hl(n,e,t){const r=Ta(n),o=r[e]();return r!==n&&!qt(n)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.value&&(i.value=t(i.value)),i}),o}const Cy=Array.prototype;function Cn(n,e,t,r,o,i){const s=Ta(n),l=s!==n&&!qt(n),c=s[e];if(c!==Cy[e]){const p=c.apply(n,i);return l?kt(p):p}let d=t;s!==n&&(l?d=function(p,g){return t.call(this,kt(p),g,n)}:t.length>2&&(d=function(p,g){return t.call(this,p,g,n)}));const u=c.call(s,d,r);return l&&o?o(u):u}function Dd(n,e,t,r){const o=Ta(n);let i=t;return o!==n&&(qt(n)?t.length>3&&(i=function(s,l,c){return t.call(this,s,l,c,n)}):i=function(s,l,c){return t.call(this,s,kt(l),c,n)}),o[e](i,...r)}function pl(n,e,t){const r=Ae(n);wt(r,"iterate",ki);const o=r[e](...t);return(o===-1||o===!1)&&zc(t[0])?(t[0]=Ae(t[0]),r[e](...t)):o}function Xo(n,e,t=[]){yr(),Nc();const r=Ae(n)[e].apply(n,t);return Bc(),vr(),r}const Ty=Dc("__proto__,__v_isRef,__isVue"),vp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter($n));function Sy(n){$n(n)||(n=String(n));const e=Ae(this);return wt(e,"has",n),e.hasOwnProperty(n)}class _p{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const o=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!o;if(t==="__v_isReadonly")return o;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(o?i?Vy:Tp:i?Cp:kp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const s=oe(e);if(!o){let c;if(s&&(c=ky[t]))return c;if(t==="hasOwnProperty")return Sy}const l=Reflect.get(e,t,Tt(e)?e:r);return($n(t)?vp.has(t):Ty(t))||(o||wt(e,"get",t),i)?l:Tt(l)?s&&Vc(t)?l:l.value:je(l)?o?Uc(l):Sa(l):l}}class wp extends _p{constructor(e=!1){super(!1,e)}set(e,t,r,o){let i=e[t];if(!this._isShallow){const c=Ur(i);if(!qt(r)&&!Ur(r)&&(i=Ae(i),r=Ae(r)),!oe(e)&&Tt(i)&&!Tt(r))return c?!1:(i.value=r,!0)}const s=oe(e)&&Vc(t)?Number(t)<e.length:Re(e,t),l=Reflect.set(e,t,r,Tt(e)?e:o);return e===Ae(o)&&(s?ar(r,i)&&In(e,"set",t,r):In(e,"add",t,r)),l}deleteProperty(e,t){const r=Re(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&r&&In(e,"delete",t,void 0),o}has(e,t){const r=Reflect.has(e,t);return(!$n(t)||!vp.has(t))&&wt(e,"has",t),r}ownKeys(e){return wt(e,"iterate",oe(e)?"length":Br),Reflect.ownKeys(e)}}class Ey extends _p{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Iy=new wp,Ay=new Ey,Ry=new wp(!0);const Kl=n=>n,vs=n=>Reflect.getPrototypeOf(n);function xy(n,e,t){return function(...r){const o=this.__v_raw,i=Ae(o),s=ho(i),l=n==="entries"||n===Symbol.iterator&&s,c=n==="keys"&&s,d=o[n](...r),u=t?Kl:e?ql:kt;return!e&&wt(i,"iterate",c?Wl:Br),{next(){const{value:p,done:g}=d.next();return g?{value:p,done:g}:{value:l?[u(p[0]),u(p[1])]:u(p),done:g}},[Symbol.iterator](){return this}}}}function _s(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Py(n,e){const t={get(o){const i=this.__v_raw,s=Ae(i),l=Ae(o);n||(ar(o,l)&&wt(s,"get",o),wt(s,"get",l));const{has:c}=vs(s),d=e?Kl:n?ql:kt;if(c.call(s,o))return d(i.get(o));if(c.call(s,l))return d(i.get(l));i!==s&&i.get(o)},get size(){const o=this.__v_raw;return!n&&wt(Ae(o),"iterate",Br),Reflect.get(o,"size",o)},has(o){const i=this.__v_raw,s=Ae(i),l=Ae(o);return n||(ar(o,l)&&wt(s,"has",o),wt(s,"has",l)),o===l?i.has(o):i.has(o)||i.has(l)},forEach(o,i){const s=this,l=s.__v_raw,c=Ae(l),d=e?Kl:n?ql:kt;return!n&&wt(c,"iterate",Br),l.forEach((u,p)=>o.call(i,d(u),d(p),s))}};return Xe(t,n?{add:_s("add"),set:_s("set"),delete:_s("delete"),clear:_s("clear")}:{add(o){!e&&!qt(o)&&!Ur(o)&&(o=Ae(o));const i=Ae(this);return vs(i).has.call(i,o)||(i.add(o),In(i,"add",o,o)),this},set(o,i){!e&&!qt(i)&&!Ur(i)&&(i=Ae(i));const s=Ae(this),{has:l,get:c}=vs(s);let d=l.call(s,o);d||(o=Ae(o),d=l.call(s,o));const u=c.call(s,o);return s.set(o,i),d?ar(i,u)&&In(s,"set",o,i):In(s,"add",o,i),this},delete(o){const i=Ae(this),{has:s,get:l}=vs(i);let c=s.call(i,o);c||(o=Ae(o),c=s.call(i,o)),l&&l.call(i,o);const d=i.delete(o);return c&&In(i,"delete",o,void 0),d},clear(){const o=Ae(this),i=o.size!==0,s=o.clear();return i&&In(o,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=xy(o,n,e)}),t}function Fc(n,e){const t=Py(n,e);return(r,o,i)=>o==="__v_isReactive"?!n:o==="__v_isReadonly"?n:o==="__v_raw"?r:Reflect.get(Re(t,o)&&o in r?t:r,o,i)}const Dy={get:Fc(!1,!1)},Oy={get:Fc(!1,!0)},My={get:Fc(!0,!1)};const kp=new WeakMap,Cp=new WeakMap,Tp=new WeakMap,Vy=new WeakMap;function Ny(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function By(n){return n.__v_skip||!Object.isExtensible(n)?0:Ny(cy(n))}function Sa(n){return Ur(n)?n:jc(n,!1,Iy,Dy,kp)}function Ly(n){return jc(n,!1,Ry,Oy,Cp)}function Uc(n){return jc(n,!0,Ay,My,Tp)}function jc(n,e,t,r,o){if(!je(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=o.get(n);if(i)return i;const s=By(n);if(s===0)return n;const l=new Proxy(n,s===2?r:t);return o.set(n,l),l}function po(n){return Ur(n)?po(n.__v_raw):!!(n&&n.__v_isReactive)}function Ur(n){return!!(n&&n.__v_isReadonly)}function qt(n){return!!(n&&n.__v_isShallow)}function zc(n){return n?!!n.__v_raw:!1}function Ae(n){const e=n&&n.__v_raw;return e?Ae(e):n}function $y(n){return!Re(n,"__v_skip")&&Object.isExtensible(n)&&ap(n,"__v_skip",!0),n}const kt=n=>je(n)?Sa(n):n,ql=n=>je(n)?Uc(n):n;function Tt(n){return n?n.__v_isRef===!0:!1}function On(n){return Fy(n,!1)}function Fy(n,e){return Tt(n)?n:new Uy(n,e)}class Uy{constructor(e,t){this.dep=new $c,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ae(e),this._value=t?e:kt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||qt(e)||Ur(e);e=r?e:Ae(e),ar(e,t)&&(this._rawValue=e,this._value=r?e:kt(e),this.dep.trigger())}}function Sp(n){return Tt(n)?n.value:n}const jy={get:(n,e,t)=>e==="__v_raw"?n:Sp(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const o=n[e];return Tt(o)&&!Tt(t)?(o.value=t,!0):Reflect.set(n,e,t,r)}};function Ep(n){return po(n)?n:new Proxy(n,jy)}class zy{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new $c(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return hp(this,!0),!0}get value(){const e=this.dep.track();return mp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Hy(n,e,t=!1){let r,o;return de(n)?r=n:(r=n.get,o=n.set),new zy(r,o,t)}const ws={},Ks=new WeakMap;let xr;function Wy(n,e=!1,t=xr){if(t){let r=Ks.get(t);r||Ks.set(t,r=[]),r.push(n)}}function Ky(n,e,t=Ve){const{immediate:r,deep:o,once:i,scheduler:s,augmentJob:l,call:c}=t,d=D=>o?D:qt(D)||o===!1||o===0?An(D,1):An(D);let u,p,g,b,k=!1,A=!1;if(Tt(n)?(p=()=>n.value,k=qt(n)):po(n)?(p=()=>d(n),k=!0):oe(n)?(A=!0,k=n.some(D=>po(D)||qt(D)),p=()=>n.map(D=>{if(Tt(D))return D.value;if(po(D))return d(D);if(de(D))return c?c(D,2):D()})):de(n)?e?p=c?()=>c(n,2):n:p=()=>{if(g){yr();try{g()}finally{vr()}}const D=xr;xr=u;try{return c?c(n,3,[b]):n(b)}finally{xr=D}}:p=pn,e&&o){const D=p,X=o===!0?1/0:o;p=()=>An(D(),X)}const P=vy(),N=()=>{u.stop(),P&&P.active&&Mc(P.effects,u)};if(i&&e){const D=e;e=(...X)=>{D(...X),N()}}let L=A?new Array(n.length).fill(ws):ws;const x=D=>{if(!(!(u.flags&1)||!u.dirty&&!D))if(e){const X=u.run();if(o||k||(A?X.some((Q,E)=>ar(Q,L[E])):ar(X,L))){g&&g();const Q=xr;xr=u;try{const E=[X,L===ws?void 0:A&&L[0]===ws?[]:L,b];c?c(e,3,E):e(...E),L=X}finally{xr=Q}}}else u.run()};return l&&l(x),u=new dp(p),u.scheduler=s?()=>s(x,!1):x,b=D=>Wy(D,!1,u),g=u.onStop=()=>{const D=Ks.get(u);if(D){if(c)c(D,4);else for(const X of D)X();Ks.delete(u)}},e?r?x(!0):L=u.run():s?s(x.bind(null,!0),!0):u.run(),N.pause=u.pause.bind(u),N.resume=u.resume.bind(u),N.stop=N,N}function An(n,e=1/0,t){if(e<=0||!je(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Tt(n))An(n.value,e,t);else if(oe(n))for(let r=0;r<n.length;r++)An(n[r],e,t);else if(op(n)||ho(n))n.forEach(r=>{An(r,e,t)});else if(va(n)){for(const r in n)An(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&An(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wi(n,e,t,r){try{return r?n(...r):n()}catch(o){Ea(o,e,t)}}function nn(n,e,t,r){if(de(n)){const o=Wi(n,e,t,r);return o&&ip(o)&&o.catch(i=>{Ea(i,e,t)}),o}if(oe(n)){const o=[];for(let i=0;i<n.length;i++)o.push(nn(n[i],e,t,r));return o}}function Ea(n,e,t,r=!0){const o=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||Ve;if(e){let l=e.parent;const c=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const u=l.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](n,c,d)===!1)return}l=l.parent}if(i){yr(),Wi(i,null,10,[n,c,d]),vr();return}}qy(n,t,o,r,s)}function qy(n,e,t,r=!0,o=!1){if(o)throw n;console.error(n)}const Rt=[];let cn=-1;const go=[];let Yn=null,to=0;const Ip=Promise.resolve();let qs=null;function Hc(n){const e=qs||Ip;return n?e.then(this?n.bind(this):n):e}function Gy(n){let e=cn+1,t=Rt.length;for(;e<t;){const r=e+t>>>1,o=Rt[r],i=Ci(o);i<n||i===n&&o.flags&2?e=r+1:t=r}return e}function Wc(n){if(!(n.flags&1)){const e=Ci(n),t=Rt[Rt.length-1];!t||!(n.flags&2)&&e>=Ci(t)?Rt.push(n):Rt.splice(Gy(e),0,n),n.flags|=1,Ap()}}function Ap(){qs||(qs=Ip.then(xp))}function Yy(n){oe(n)?go.push(...n):Yn&&n.id===-1?Yn.splice(to+1,0,n):n.flags&1||(go.push(n),n.flags|=1),Ap()}function Od(n,e,t=cn+1){for(;t<Rt.length;t++){const r=Rt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;Rt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Rp(n){if(go.length){const e=[...new Set(go)].sort((t,r)=>Ci(t)-Ci(r));if(go.length=0,Yn){Yn.push(...e);return}for(Yn=e,to=0;to<Yn.length;to++){const t=Yn[to];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Yn=null,to=0}}const Ci=n=>n.id==null?n.flags&2?-1:1/0:n.id;function xp(n){try{for(cn=0;cn<Rt.length;cn++){const e=Rt[cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Wi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;cn<Rt.length;cn++){const e=Rt[cn];e&&(e.flags&=-2)}cn=-1,Rt.length=0,Rp(),qs=null,(Rt.length||go.length)&&xp()}}let st=null,Pp=null;function Gs(n){const e=st;return st=n,Pp=n&&n.type.__scopeId||null,e}function Ot(n,e=st,t){if(!e||n._n)return n;const r=(...o)=>{r._d&&qd(-1);const i=Gs(e);let s;try{s=n(...o)}finally{Gs(i),r._d&&qd(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Or(n,e){if(st===null)return n;const t=Da(st),r=n.dirs||(n.dirs=[]);for(let o=0;o<e.length;o++){let[i,s,l,c=Ve]=e[o];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&An(s),r.push({dir:i,instance:t,value:s,oldValue:void 0,arg:l,modifiers:c}))}return n}function Er(n,e,t,r){const o=n.dirs,i=e&&e.dirs;for(let s=0;s<o.length;s++){const l=o[s];i&&(l.oldValue=i[s].value);let c=l.dir[r];c&&(yr(),nn(c,t,8,[n.el,l,n,e]),vr())}}const Dp=Symbol("_vte"),Op=n=>n.__isTeleport,ui=n=>n&&(n.disabled||n.disabled===""),Md=n=>n&&(n.defer||n.defer===""),Vd=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Nd=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Gl=(n,e)=>{const t=n&&n.to;return qe(t)?e?e(t):null:t},Mp={name:"Teleport",__isTeleport:!0,process(n,e,t,r,o,i,s,l,c,d){const{mc:u,pc:p,pbc:g,o:{insert:b,querySelector:k,createText:A,createComment:P}}=d,N=ui(e.props);let{shapeFlag:L,children:x,dynamicChildren:D}=e;if(n==null){const X=e.el=A(""),Q=e.anchor=A("");b(X,t,r),b(Q,t,r);const E=(y,w)=>{L&16&&(o&&o.isCE&&(o.ce._teleportTarget=y),u(x,y,w,o,i,s,l,c))},v=()=>{const y=e.target=Gl(e.props,k),w=Vp(y,e,A,b);y&&(s!=="svg"&&Vd(y)?s="svg":s!=="mathml"&&Nd(y)&&(s="mathml"),N||(E(y,w),Os(e,!1)))};N&&(E(t,Q),Os(e,!0)),Md(e.props)?At(()=>{v(),e.el.__isMounted=!0},i):v()}else{if(Md(e.props)&&!n.el.__isMounted){At(()=>{Mp.process(n,e,t,r,o,i,s,l,c,d),delete n.el.__isMounted},i);return}e.el=n.el,e.targetStart=n.targetStart;const X=e.anchor=n.anchor,Q=e.target=n.target,E=e.targetAnchor=n.targetAnchor,v=ui(n.props),y=v?t:Q,w=v?X:E;if(s==="svg"||Vd(Q)?s="svg":(s==="mathml"||Nd(Q))&&(s="mathml"),D?(g(n.dynamicChildren,D,y,o,i,s,l),Yc(n,e,!0)):c||p(n,e,y,w,o,i,s,l,!1),N)v?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):ks(e,t,X,d,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const S=e.target=Gl(e.props,k);S&&ks(e,S,null,d,0)}else v&&ks(e,Q,E,d,1);Os(e,N)}},remove(n,e,t,{um:r,o:{remove:o}},i){const{shapeFlag:s,children:l,anchor:c,targetStart:d,targetAnchor:u,target:p,props:g}=n;if(p&&(o(d),o(u)),i&&o(c),s&16){const b=i||!ui(g);for(let k=0;k<l.length;k++){const A=l[k];r(A,e,t,b,!!A.dynamicChildren)}}},move:ks,hydrate:Qy};function ks(n,e,t,{o:{insert:r},m:o},i=2){i===0&&r(n.targetAnchor,e,t);const{el:s,anchor:l,shapeFlag:c,children:d,props:u}=n,p=i===2;if(p&&r(s,e,t),(!p||ui(u))&&c&16)for(let g=0;g<d.length;g++)o(d[g],e,t,2);p&&r(l,e,t)}function Qy(n,e,t,r,o,i,{o:{nextSibling:s,parentNode:l,querySelector:c,insert:d,createText:u}},p){const g=e.target=Gl(e.props,c);if(g){const b=ui(e.props),k=g._lpa||g.firstChild;if(e.shapeFlag&16)if(b)e.anchor=p(s(n),e,l(n),t,r,o,i),e.targetStart=k,e.targetAnchor=k&&s(k);else{e.anchor=s(n);let A=k;for(;A;){if(A&&A.nodeType===8){if(A.data==="teleport start anchor")e.targetStart=A;else if(A.data==="teleport anchor"){e.targetAnchor=A,g._lpa=e.targetAnchor&&s(e.targetAnchor);break}}A=s(A)}e.targetAnchor||Vp(g,e,u,d),p(k&&s(k),e,g,t,r,o,i)}Os(e,b)}return e.anchor&&s(e.anchor)}const Xy=Mp;function Os(n,e){const t=n.ctx;if(t&&t.ut){let r,o;for(e?(r=n.el,o=n.anchor):(r=n.targetStart,o=n.targetAnchor);r&&r!==o;)r.nodeType===1&&r.setAttribute("data-v-owner",t.uid),r=r.nextSibling;t.ut()}}function Vp(n,e,t,r){const o=e.targetStart=t(""),i=e.targetAnchor=t("");return o[Dp]=i,n&&(r(o,n),r(i,n)),i}const Qn=Symbol("_leaveCb"),Cs=Symbol("_enterCb");function Jy(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ra(()=>{n.isMounted=!0}),zp(()=>{n.isUnmounting=!0}),n}const Wt=[Function,Array],Np={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Wt,onEnter:Wt,onAfterEnter:Wt,onEnterCancelled:Wt,onBeforeLeave:Wt,onLeave:Wt,onAfterLeave:Wt,onLeaveCancelled:Wt,onBeforeAppear:Wt,onAppear:Wt,onAfterAppear:Wt,onAppearCancelled:Wt},Bp=n=>{const e=n.subTree;return e.component?Bp(e.component):e},Zy={name:"BaseTransition",props:Np,setup(n,{slots:e}){const t=hg(),r=Jy();return()=>{const o=e.default&&Fp(e.default(),!0);if(!o||!o.length)return;const i=Lp(o),s=Ae(n),{mode:l}=s;if(r.isLeaving)return gl(i);const c=Bd(i);if(!c)return gl(i);let d=Yl(c,s,r,t,p=>d=p);c.type!==xt&&Ti(c,d);let u=t.subTree&&Bd(t.subTree);if(u&&u.type!==xt&&!Mr(c,u)&&Bp(t).type!==xt){let p=Yl(u,s,r,t);if(Ti(u,p),l==="out-in"&&c.type!==xt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,t.job.flags&8||t.update(),delete p.afterLeave,u=void 0},gl(i);l==="in-out"&&c.type!==xt?p.delayLeave=(g,b,k)=>{const A=$p(r,u);A[String(u.key)]=u,g[Qn]=()=>{b(),g[Qn]=void 0,delete d.delayedLeave,u=void 0},d.delayedLeave=()=>{k(),delete d.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function Lp(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==xt){e=t;break}}return e}const e0=Zy;function $p(n,e){const{leavingVNodes:t}=n;let r=t.get(e.type);return r||(r=Object.create(null),t.set(e.type,r)),r}function Yl(n,e,t,r,o){const{appear:i,mode:s,persisted:l=!1,onBeforeEnter:c,onEnter:d,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:g,onLeave:b,onAfterLeave:k,onLeaveCancelled:A,onBeforeAppear:P,onAppear:N,onAfterAppear:L,onAppearCancelled:x}=e,D=String(n.key),X=$p(t,n),Q=(y,w)=>{y&&nn(y,r,9,w)},E=(y,w)=>{const S=w[1];Q(y,w),oe(y)?y.every(C=>C.length<=1)&&S():y.length<=1&&S()},v={mode:s,persisted:l,beforeEnter(y){let w=c;if(!t.isMounted)if(i)w=P||c;else return;y[Qn]&&y[Qn](!0);const S=X[D];S&&Mr(n,S)&&S.el[Qn]&&S.el[Qn](),Q(w,[y])},enter(y){let w=d,S=u,C=p;if(!t.isMounted)if(i)w=N||d,S=L||u,C=x||p;else return;let _=!1;const pe=y[Cs]=Ne=>{_||(_=!0,Ne?Q(C,[y]):Q(S,[y]),v.delayedLeave&&v.delayedLeave(),y[Cs]=void 0)};w?E(w,[y,pe]):pe()},leave(y,w){const S=String(n.key);if(y[Cs]&&y[Cs](!0),t.isUnmounting)return w();Q(g,[y]);let C=!1;const _=y[Qn]=pe=>{C||(C=!0,w(),pe?Q(A,[y]):Q(k,[y]),y[Qn]=void 0,X[S]===n&&delete X[S])};X[S]=n,b?E(b,[y,_]):_()},clone(y){const w=Yl(y,e,t,r,o);return o&&o(w),w}};return v}function gl(n){if(Ia(n))return n=fr(n),n.children=null,n}function Bd(n){if(!Ia(n))return Op(n.type)&&n.children?Lp(n.children):n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&de(t.default))return t.default()}}function Ti(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ti(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Fp(n,e=!1,t){let r=[],o=0;for(let i=0;i<n.length;i++){let s=n[i];const l=t==null?s.key:String(t)+String(s.key!=null?s.key:i);s.type===We?(s.patchFlag&128&&o++,r=r.concat(Fp(s.children,e,l))):(e||s.type!==xt)&&r.push(l!=null?fr(s,{key:l}):s)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function t0(n,e){return de(n)?Xe({name:n.name},e,{setup:n}):n}function Up(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ys(n,e,t,r,o=!1){if(oe(n)){n.forEach((k,A)=>Ys(k,e&&(oe(e)?e[A]:e),t,r,o));return}if(mo(r)&&!o){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ys(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?Da(r.component):r.el,s=o?null:i,{i:l,r:c}=n,d=e&&e.r,u=l.refs===Ve?l.refs={}:l.refs,p=l.setupState,g=Ae(p),b=p===Ve?()=>!1:k=>Re(g,k);if(d!=null&&d!==c&&(qe(d)?(u[d]=null,b(d)&&(p[d]=null)):Tt(d)&&(d.value=null)),de(c))Wi(c,l,12,[s,u]);else{const k=qe(c),A=Tt(c);if(k||A){const P=()=>{if(n.f){const N=k?b(c)?p[c]:u[c]:c.value;o?oe(N)&&Mc(N,i):oe(N)?N.includes(i)||N.push(i):k?(u[c]=[i],b(c)&&(p[c]=u[c])):(c.value=[i],n.k&&(u[n.k]=c.value))}else k?(u[c]=s,b(c)&&(p[c]=s)):A&&(c.value=s,n.k&&(u[n.k]=s))};s?(P.id=-1,At(P,t)):P()}}}ka().requestIdleCallback;ka().cancelIdleCallback;const mo=n=>!!n.type.__asyncLoader,Ia=n=>n.type.__isKeepAlive;function n0(n,e){jp(n,"a",e)}function r0(n,e){jp(n,"da",e)}function jp(n,e,t=ft){const r=n.__wdc||(n.__wdc=()=>{let o=t;for(;o;){if(o.isDeactivated)return;o=o.parent}return n()});if(Aa(e,r,t),t){let o=t.parent;for(;o&&o.parent;)Ia(o.parent.vnode)&&o0(r,e,t,o),o=o.parent}}function o0(n,e,t,r){const o=Aa(e,n,r,!0);Hp(()=>{Mc(r[e],o)},t)}function Aa(n,e,t=ft,r=!1){if(t){const o=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...s)=>{yr();const l=Ki(t),c=nn(e,t,n,s);return l(),vr(),c});return r?o.unshift(i):o.push(i),i}}const Fn=n=>(e,t=ft)=>{(!Ii||n==="sp")&&Aa(n,(...r)=>e(...r),t)},i0=Fn("bm"),Ra=Fn("m"),s0=Fn("bu"),a0=Fn("u"),zp=Fn("bum"),Hp=Fn("um"),l0=Fn("sp"),c0=Fn("rtg"),u0=Fn("rtc");function d0(n,e=ft){Aa("ec",n,e)}const Kc="components",f0="directives";function bo(n,e){return qc(Kc,n,!0,e)||n}const Wp=Symbol.for("v-ndc");function Lt(n){return qe(n)?qc(Kc,n,!1)||n:n||Wp}function Kp(n){return qc(f0,n)}function qc(n,e,t=!0,r=!1){const o=st||ft;if(o){const i=o.type;if(n===Kc){const l=X0(i,!1);if(l&&(l===e||l===Dt(e)||l===wa(Dt(e))))return i}const s=Ld(o[n]||i[n],e)||Ld(o.appContext[n],e);return!s&&r?i:s}}function Ld(n,e){return n&&(n[e]||n[Dt(e)]||n[wa(Dt(e))])}function eo(n,e,t,r){let o;const i=t,s=oe(n);if(s||qe(n)){const l=s&&po(n);let c=!1;l&&(c=!qt(n),n=Ta(n)),o=new Array(n.length);for(let d=0,u=n.length;d<u;d++)o[d]=e(c?kt(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){o=new Array(n);for(let l=0;l<n;l++)o[l]=e(l+1,l,void 0,i)}else if(je(n))if(n[Symbol.iterator])o=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);o=new Array(l.length);for(let c=0,d=l.length;c<d;c++){const u=l[c];o[c]=e(n[u],u,c,i)}}else o=[];return o}function Be(n,e,t={},r,o){if(st.ce||st.parent&&mo(st.parent)&&st.parent.ce)return e!=="default"&&(t.name=e),K(),tt(We,null,[Te("slot",t,r&&r())],64);let i=n[e];i&&i._c&&(i._d=!1),K();const s=i&&qp(i(t)),l=t.key||s&&s.key,c=tt(We,{key:(l&&!$n(l)?l:`_${e}`)+(!s&&r?"_fb":"")},s||(r?r():[]),s&&n._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function qp(n){return n.some(e=>Ei(e)?!(e.type===xt||e.type===We&&!qp(e.children)):!0)?n:null}const Ql=n=>n?pg(n)?Da(n):Ql(n.parent):null,di=Xe(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ql(n.parent),$root:n=>Ql(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Yp(n),$forceUpdate:n=>n.f||(n.f=()=>{Wc(n.update)}),$nextTick:n=>n.n||(n.n=Hc.bind(n.proxy)),$watch:n=>O0.bind(n)}),ml=(n,e)=>n!==Ve&&!n.__isScriptSetup&&Re(n,e),h0={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:o,props:i,accessCache:s,type:l,appContext:c}=n;let d;if(e[0]!=="$"){const b=s[e];if(b!==void 0)switch(b){case 1:return r[e];case 2:return o[e];case 4:return t[e];case 3:return i[e]}else{if(ml(r,e))return s[e]=1,r[e];if(o!==Ve&&Re(o,e))return s[e]=2,o[e];if((d=n.propsOptions[0])&&Re(d,e))return s[e]=3,i[e];if(t!==Ve&&Re(t,e))return s[e]=4,t[e];Xl&&(s[e]=0)}}const u=di[e];let p,g;if(u)return e==="$attrs"&&wt(n.attrs,"get",""),u(n);if((p=l.__cssModules)&&(p=p[e]))return p;if(t!==Ve&&Re(t,e))return s[e]=4,t[e];if(g=c.config.globalProperties,Re(g,e))return g[e]},set({_:n},e,t){const{data:r,setupState:o,ctx:i}=n;return ml(o,e)?(o[e]=t,!0):r!==Ve&&Re(r,e)?(r[e]=t,!0):Re(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:o,propsOptions:i}},s){let l;return!!t[s]||n!==Ve&&Re(n,s)||ml(e,s)||(l=i[0])&&Re(l,s)||Re(r,s)||Re(di,s)||Re(o.config.globalProperties,s)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Re(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function $d(n){return oe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Xl=!0;function p0(n){const e=Yp(n),t=n.proxy,r=n.ctx;Xl=!1,e.beforeCreate&&Fd(e.beforeCreate,n,"bc");const{data:o,computed:i,methods:s,watch:l,provide:c,inject:d,created:u,beforeMount:p,mounted:g,beforeUpdate:b,updated:k,activated:A,deactivated:P,beforeDestroy:N,beforeUnmount:L,destroyed:x,unmounted:D,render:X,renderTracked:Q,renderTriggered:E,errorCaptured:v,serverPrefetch:y,expose:w,inheritAttrs:S,components:C,directives:_,filters:pe}=e;if(d&&g0(d,r,null),s)for(const ce in s){const ae=s[ce];de(ae)&&(r[ce]=ae.bind(t))}if(o){const ce=o.call(t,t);je(ce)&&(n.data=Sa(ce))}if(Xl=!0,i)for(const ce in i){const ae=i[ce],ot=de(ae)?ae.bind(t,t):de(ae.get)?ae.get.bind(t,t):pn,at=!de(ae)&&de(ae.set)?ae.set.bind(t):pn,Ze=Z0({get:ot,set:at});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>Ze.value,set:Oe=>Ze.value=Oe})}if(l)for(const ce in l)Gp(l[ce],r,t,ce);if(c){const ce=de(c)?c.call(t):c;Reflect.ownKeys(ce).forEach(ae=>{Ms(ae,ce[ae])})}u&&Fd(u,n,"c");function Ie(ce,ae){oe(ae)?ae.forEach(ot=>ce(ot.bind(t))):ae&&ce(ae.bind(t))}if(Ie(i0,p),Ie(Ra,g),Ie(s0,b),Ie(a0,k),Ie(n0,A),Ie(r0,P),Ie(d0,v),Ie(u0,Q),Ie(c0,E),Ie(zp,L),Ie(Hp,D),Ie(l0,y),oe(w))if(w.length){const ce=n.exposed||(n.exposed={});w.forEach(ae=>{Object.defineProperty(ce,ae,{get:()=>t[ae],set:ot=>t[ae]=ot})})}else n.exposed||(n.exposed={});X&&n.render===pn&&(n.render=X),S!=null&&(n.inheritAttrs=S),C&&(n.components=C),_&&(n.directives=_),y&&Up(n)}function g0(n,e,t=pn){oe(n)&&(n=Jl(n));for(const r in n){const o=n[r];let i;je(o)?"default"in o?i=fi(o.from||r,o.default,!0):i=fi(o.from||r):i=fi(o),Tt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):e[r]=i}}function Fd(n,e,t){nn(oe(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Gp(n,e,t,r){let o=r.includes(".")?lg(t,r):()=>t[r];if(qe(n)){const i=e[n];de(i)&&rr(o,i)}else if(de(n))rr(o,n.bind(t));else if(je(n))if(oe(n))n.forEach(i=>Gp(i,e,t,r));else{const i=de(n.handler)?n.handler.bind(t):e[n.handler];de(i)&&rr(o,i,n)}}function Yp(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=n.appContext,l=i.get(e);let c;return l?c=l:!o.length&&!t&&!r?c=e:(c={},o.length&&o.forEach(d=>Qs(c,d,s,!0)),Qs(c,e,s)),je(e)&&i.set(e,c),c}function Qs(n,e,t,r=!1){const{mixins:o,extends:i}=e;i&&Qs(n,i,t,!0),o&&o.forEach(s=>Qs(n,s,t,!0));for(const s in e)if(!(r&&s==="expose")){const l=m0[s]||t&&t[s];n[s]=l?l(n[s],e[s]):e[s]}return n}const m0={data:Ud,props:jd,emits:jd,methods:ni,computed:ni,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:ni,directives:ni,watch:y0,provide:Ud,inject:b0};function Ud(n,e){return e?n?function(){return Xe(de(n)?n.call(this,this):n,de(e)?e.call(this,this):e)}:e:n}function b0(n,e){return ni(Jl(n),Jl(e))}function Jl(n){if(oe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function It(n,e){return n?[...new Set([].concat(n,e))]:e}function ni(n,e){return n?Xe(Object.create(null),n,e):e}function jd(n,e){return n?oe(n)&&oe(e)?[...new Set([...n,...e])]:Xe(Object.create(null),$d(n),$d(e??{})):e}function y0(n,e){if(!n)return e;if(!e)return n;const t=Xe(Object.create(null),n);for(const r in e)t[r]=It(n[r],e[r]);return t}function Qp(){return{app:null,config:{isNativeTag:ay,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let v0=0;function _0(n,e){return function(r,o=null){de(r)||(r=Xe({},r)),o!=null&&!je(o)&&(o=null);const i=Qp(),s=new WeakSet,l=[];let c=!1;const d=i.app={_uid:v0++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:tv,get config(){return i.config},set config(u){},use(u,...p){return s.has(u)||(u&&de(u.install)?(s.add(u),u.install(d,...p)):de(u)&&(s.add(u),u(d,...p))),d},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),d},component(u,p){return p?(i.components[u]=p,d):i.components[u]},directive(u,p){return p?(i.directives[u]=p,d):i.directives[u]},mount(u,p,g){if(!c){const b=d._ceVNode||Te(r,o);return b.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),n(b,u,g),c=!0,d._container=u,u.__vue_app__=d,Da(b.component)}},onUnmount(u){l.push(u)},unmount(){c&&(nn(l,d._instance,16),n(null,d._container),delete d._container.__vue_app__)},provide(u,p){return i.provides[u]=p,d},runWithContext(u){const p=yo;yo=d;try{return u()}finally{yo=p}}};return d}}let yo=null;function Ms(n,e){if(ft){let t=ft.provides;const r=ft.parent&&ft.parent.provides;r===t&&(t=ft.provides=Object.create(r)),t[n]=e}}function fi(n,e,t=!1){const r=ft||st;if(r||yo){const o=yo?yo._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&n in o)return o[n];if(arguments.length>1)return t&&de(e)?e.call(r&&r.proxy):e}}const Xp={},Jp=()=>Object.create(Xp),Zp=n=>Object.getPrototypeOf(n)===Xp;function w0(n,e,t,r=!1){const o={},i=Jp();n.propsDefaults=Object.create(null),eg(n,e,o,i);for(const s in n.propsOptions[0])s in o||(o[s]=void 0);t?n.props=r?o:Ly(o):n.type.props?n.props=o:n.props=i,n.attrs=i}function k0(n,e,t,r){const{props:o,attrs:i,vnode:{patchFlag:s}}=n,l=Ae(o),[c]=n.propsOptions;let d=!1;if((r||s>0)&&!(s&16)){if(s&8){const u=n.vnode.dynamicProps;for(let p=0;p<u.length;p++){let g=u[p];if(xa(n.emitsOptions,g))continue;const b=e[g];if(c)if(Re(i,g))b!==i[g]&&(i[g]=b,d=!0);else{const k=Dt(g);o[k]=Zl(c,l,k,b,n,!1)}else b!==i[g]&&(i[g]=b,d=!0)}}}else{eg(n,e,o,i)&&(d=!0);let u;for(const p in l)(!e||!Re(e,p)&&((u=Ft(p))===p||!Re(e,u)))&&(c?t&&(t[p]!==void 0||t[u]!==void 0)&&(o[p]=Zl(c,l,p,void 0,n,!0)):delete o[p]);if(i!==l)for(const p in i)(!e||!Re(e,p))&&(delete i[p],d=!0)}d&&In(n.attrs,"set","")}function eg(n,e,t,r){const[o,i]=n.propsOptions;let s=!1,l;if(e)for(let c in e){if(ai(c))continue;const d=e[c];let u;o&&Re(o,u=Dt(c))?!i||!i.includes(u)?t[u]=d:(l||(l={}))[u]=d:xa(n.emitsOptions,c)||(!(c in r)||d!==r[c])&&(r[c]=d,s=!0)}if(i){const c=Ae(t),d=l||Ve;for(let u=0;u<i.length;u++){const p=i[u];t[p]=Zl(o,c,p,d[p],n,!Re(d,p))}}return s}function Zl(n,e,t,r,o,i){const s=n[t];if(s!=null){const l=Re(s,"default");if(l&&r===void 0){const c=s.default;if(s.type!==Function&&!s.skipFactory&&de(c)){const{propsDefaults:d}=o;if(t in d)r=d[t];else{const u=Ki(o);r=d[t]=c.call(null,e),u()}}else r=c;o.ce&&o.ce._setProp(t,r)}s[0]&&(i&&!l?r=!1:s[1]&&(r===""||r===Ft(t))&&(r=!0))}return r}const C0=new WeakMap;function tg(n,e,t=!1){const r=t?C0:e.propsCache,o=r.get(n);if(o)return o;const i=n.props,s={},l=[];let c=!1;if(!de(n)){const u=p=>{c=!0;const[g,b]=tg(p,e,!0);Xe(s,g),b&&l.push(...b)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!i&&!c)return je(n)&&r.set(n,fo),fo;if(oe(i))for(let u=0;u<i.length;u++){const p=Dt(i[u]);zd(p)&&(s[p]=Ve)}else if(i)for(const u in i){const p=Dt(u);if(zd(p)){const g=i[u],b=s[p]=oe(g)||de(g)?{type:g}:Xe({},g),k=b.type;let A=!1,P=!0;if(oe(k))for(let N=0;N<k.length;++N){const L=k[N],x=de(L)&&L.name;if(x==="Boolean"){A=!0;break}else x==="String"&&(P=!1)}else A=de(k)&&k.name==="Boolean";b[0]=A,b[1]=P,(A||Re(b,"default"))&&l.push(p)}}const d=[s,l];return je(n)&&r.set(n,d),d}function zd(n){return n[0]!=="$"&&!ai(n)}const ng=n=>n[0]==="_"||n==="$stable",Gc=n=>oe(n)?n.map(dn):[dn(n)],T0=(n,e,t)=>{if(e._n)return e;const r=Ot((...o)=>Gc(e(...o)),t);return r._c=!1,r},rg=(n,e,t)=>{const r=n._ctx;for(const o in n){if(ng(o))continue;const i=n[o];if(de(i))e[o]=T0(o,i,r);else if(i!=null){const s=Gc(i);e[o]=()=>s}}},og=(n,e)=>{const t=Gc(e);n.slots.default=()=>t},ig=(n,e,t)=>{for(const r in e)(t||r!=="_")&&(n[r]=e[r])},S0=(n,e,t)=>{const r=n.slots=Jp();if(n.vnode.shapeFlag&32){const o=e._;o?(ig(r,e,t),t&&ap(r,"_",o,!0)):rg(e,r)}else e&&og(n,e)},E0=(n,e,t)=>{const{vnode:r,slots:o}=n;let i=!0,s=Ve;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:ig(o,e,t):(i=!e.$stable,rg(e,o)),s=e}else e&&(og(n,e),s={default:1});if(i)for(const l in o)!ng(l)&&s[l]==null&&delete o[l]},At=F0;function I0(n){return A0(n)}function A0(n,e){const t=ka();t.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:s,createText:l,createComment:c,setText:d,setElementText:u,parentNode:p,nextSibling:g,setScopeId:b=pn,insertStaticContent:k}=n,A=(T,I,M,$=null,B=null,F=null,q=void 0,H=null,z=!!I.dynamicChildren)=>{if(T===I)return;T&&!Mr(T,I)&&($=Gt(T),Oe(T,B,F,!0),T=null),I.patchFlag===-2&&(z=!1,I.dynamicChildren=null);const{type:U,ref:te,shapeFlag:Y}=I;switch(U){case Pa:P(T,I,M,$);break;case xt:N(T,I,M,$);break;case yl:T==null&&L(I,M,$,q);break;case We:C(T,I,M,$,B,F,q,H,z);break;default:Y&1?X(T,I,M,$,B,F,q,H,z):Y&6?_(T,I,M,$,B,F,q,H,z):(Y&64||Y&128)&&U.process(T,I,M,$,B,F,q,H,z,jt)}te!=null&&B&&Ys(te,T&&T.ref,F,I||T,!I)},P=(T,I,M,$)=>{if(T==null)r(I.el=l(I.children),M,$);else{const B=I.el=T.el;I.children!==T.children&&d(B,I.children)}},N=(T,I,M,$)=>{T==null?r(I.el=c(I.children||""),M,$):I.el=T.el},L=(T,I,M,$)=>{[T.el,T.anchor]=k(T.children,I,M,$,T.el,T.anchor)},x=({el:T,anchor:I},M,$)=>{let B;for(;T&&T!==I;)B=g(T),r(T,M,$),T=B;r(I,M,$)},D=({el:T,anchor:I})=>{let M;for(;T&&T!==I;)M=g(T),o(T),T=M;o(I)},X=(T,I,M,$,B,F,q,H,z)=>{I.type==="svg"?q="svg":I.type==="math"&&(q="mathml"),T==null?Q(I,M,$,B,F,q,H,z):y(T,I,B,F,q,H,z)},Q=(T,I,M,$,B,F,q,H)=>{let z,U;const{props:te,shapeFlag:Y,transition:Z,dirs:se}=T;if(z=T.el=s(T.type,F,te&&te.is,te),Y&8?u(z,T.children):Y&16&&v(T.children,z,null,$,B,bl(T,F),q,H),se&&Er(T,null,$,"created"),E(z,T,T.scopeId,q,$),te){for(const fe in te)fe!=="value"&&!ai(fe)&&i(z,fe,null,te[fe],F,$);"value"in te&&i(z,"value",null,te.value,F),(U=te.onVnodeBeforeMount)&&an(U,$,T)}se&&Er(T,null,$,"beforeMount");const ne=R0(B,Z);ne&&Z.beforeEnter(z),r(z,I,M),((U=te&&te.onVnodeMounted)||ne||se)&&At(()=>{U&&an(U,$,T),ne&&Z.enter(z),se&&Er(T,null,$,"mounted")},B)},E=(T,I,M,$,B)=>{if(M&&b(T,M),$)for(let F=0;F<$.length;F++)b(T,$[F]);if(B){let F=B.subTree;if(I===F||ug(F.type)&&(F.ssContent===I||F.ssFallback===I)){const q=B.vnode;E(T,q,q.scopeId,q.slotScopeIds,B.parent)}}},v=(T,I,M,$,B,F,q,H,z=0)=>{for(let U=z;U<T.length;U++){const te=T[U]=H?Xn(T[U]):dn(T[U]);A(null,te,I,M,$,B,F,q,H)}},y=(T,I,M,$,B,F,q)=>{const H=I.el=T.el;let{patchFlag:z,dynamicChildren:U,dirs:te}=I;z|=T.patchFlag&16;const Y=T.props||Ve,Z=I.props||Ve;let se;if(M&&Ir(M,!1),(se=Z.onVnodeBeforeUpdate)&&an(se,M,I,T),te&&Er(I,T,M,"beforeUpdate"),M&&Ir(M,!0),(Y.innerHTML&&Z.innerHTML==null||Y.textContent&&Z.textContent==null)&&u(H,""),U?w(T.dynamicChildren,U,H,M,$,bl(I,B),F):q||ae(T,I,H,null,M,$,bl(I,B),F,!1),z>0){if(z&16)S(H,Y,Z,M,B);else if(z&2&&Y.class!==Z.class&&i(H,"class",null,Z.class,B),z&4&&i(H,"style",Y.style,Z.style,B),z&8){const ne=I.dynamicProps;for(let fe=0;fe<ne.length;fe++){const ve=ne[fe],pt=Y[ve],lt=Z[ve];(lt!==pt||ve==="value")&&i(H,ve,pt,lt,B,M)}}z&1&&T.children!==I.children&&u(H,I.children)}else!q&&U==null&&S(H,Y,Z,M,B);((se=Z.onVnodeUpdated)||te)&&At(()=>{se&&an(se,M,I,T),te&&Er(I,T,M,"updated")},$)},w=(T,I,M,$,B,F,q)=>{for(let H=0;H<I.length;H++){const z=T[H],U=I[H],te=z.el&&(z.type===We||!Mr(z,U)||z.shapeFlag&70)?p(z.el):M;A(z,U,te,null,$,B,F,q,!0)}},S=(T,I,M,$,B)=>{if(I!==M){if(I!==Ve)for(const F in I)!ai(F)&&!(F in M)&&i(T,F,I[F],null,B,$);for(const F in M){if(ai(F))continue;const q=M[F],H=I[F];q!==H&&F!=="value"&&i(T,F,H,q,B,$)}"value"in M&&i(T,"value",I.value,M.value,B)}},C=(T,I,M,$,B,F,q,H,z)=>{const U=I.el=T?T.el:l(""),te=I.anchor=T?T.anchor:l("");let{patchFlag:Y,dynamicChildren:Z,slotScopeIds:se}=I;se&&(H=H?H.concat(se):se),T==null?(r(U,M,$),r(te,M,$),v(I.children||[],M,te,B,F,q,H,z)):Y>0&&Y&64&&Z&&T.dynamicChildren?(w(T.dynamicChildren,Z,M,B,F,q,H),(I.key!=null||B&&I===B.subTree)&&Yc(T,I,!0)):ae(T,I,M,te,B,F,q,H,z)},_=(T,I,M,$,B,F,q,H,z)=>{I.slotScopeIds=H,T==null?I.shapeFlag&512?B.ctx.activate(I,M,$,q,z):pe(I,M,$,B,F,q,z):Ne(T,I,z)},pe=(T,I,M,$,B,F,q)=>{const H=T.component=K0(T,$,B);if(Ia(T)&&(H.ctx.renderer=jt),q0(H,!1,q),H.asyncDep){if(B&&B.registerDep(H,Ie,q),!T.el){const z=H.subTree=Te(xt);N(null,z,I,M)}}else Ie(H,T,I,M,B,F,q)},Ne=(T,I,M)=>{const $=I.component=T.component;if(L0(T,I,M))if($.asyncDep&&!$.asyncResolved){ce($,I,M);return}else $.next=I,$.update();else I.el=T.el,$.vnode=I},Ie=(T,I,M,$,B,F,q)=>{const H=()=>{if(T.isMounted){let{next:Y,bu:Z,u:se,parent:ne,vnode:fe}=T;{const gt=sg(T);if(gt){Y&&(Y.el=fe.el,ce(T,Y,q)),gt.asyncDep.then(()=>{T.isUnmounted||H()});return}}let ve=Y,pt;Ir(T,!1),Y?(Y.el=fe.el,ce(T,Y,q)):Y=fe,Z&&Ds(Z),(pt=Y.props&&Y.props.onVnodeBeforeUpdate)&&an(pt,ne,Y,fe),Ir(T,!0);const lt=Wd(T),zt=T.subTree;T.subTree=lt,A(zt,lt,p(zt.el),Gt(zt),T,B,F),Y.el=lt.el,ve===null&&$0(T,lt.el),se&&At(se,B),(pt=Y.props&&Y.props.onVnodeUpdated)&&At(()=>an(pt,ne,Y,fe),B)}else{let Y;const{el:Z,props:se}=I,{bm:ne,m:fe,parent:ve,root:pt,type:lt}=T,zt=mo(I);Ir(T,!1),ne&&Ds(ne),!zt&&(Y=se&&se.onVnodeBeforeMount)&&an(Y,ve,I),Ir(T,!0);{pt.ce&&pt.ce._injectChildStyle(lt);const gt=T.subTree=Wd(T);A(null,gt,M,$,T,B,F),I.el=gt.el}if(fe&&At(fe,B),!zt&&(Y=se&&se.onVnodeMounted)){const gt=I;At(()=>an(Y,ve,gt),B)}(I.shapeFlag&256||ve&&mo(ve.vnode)&&ve.vnode.shapeFlag&256)&&T.a&&At(T.a,B),T.isMounted=!0,I=M=$=null}};T.scope.on();const z=T.effect=new dp(H);T.scope.off();const U=T.update=z.run.bind(z),te=T.job=z.runIfDirty.bind(z);te.i=T,te.id=T.uid,z.scheduler=()=>Wc(te),Ir(T,!0),U()},ce=(T,I,M)=>{I.component=T;const $=T.vnode.props;T.vnode=I,T.next=null,k0(T,I.props,$,M),E0(T,I.children,M),yr(),Od(T),vr()},ae=(T,I,M,$,B,F,q,H,z=!1)=>{const U=T&&T.children,te=T?T.shapeFlag:0,Y=I.children,{patchFlag:Z,shapeFlag:se}=I;if(Z>0){if(Z&128){at(U,Y,M,$,B,F,q,H,z);return}else if(Z&256){ot(U,Y,M,$,B,F,q,H,z);return}}se&8?(te&16&&sn(U,B,F),Y!==U&&u(M,Y)):te&16?se&16?at(U,Y,M,$,B,F,q,H,z):sn(U,B,F,!0):(te&8&&u(M,""),se&16&&v(Y,M,$,B,F,q,H,z))},ot=(T,I,M,$,B,F,q,H,z)=>{T=T||fo,I=I||fo;const U=T.length,te=I.length,Y=Math.min(U,te);let Z;for(Z=0;Z<Y;Z++){const se=I[Z]=z?Xn(I[Z]):dn(I[Z]);A(T[Z],se,M,null,B,F,q,H,z)}U>te?sn(T,B,F,!0,!1,Y):v(I,M,$,B,F,q,H,z,Y)},at=(T,I,M,$,B,F,q,H,z)=>{let U=0;const te=I.length;let Y=T.length-1,Z=te-1;for(;U<=Y&&U<=Z;){const se=T[U],ne=I[U]=z?Xn(I[U]):dn(I[U]);if(Mr(se,ne))A(se,ne,M,null,B,F,q,H,z);else break;U++}for(;U<=Y&&U<=Z;){const se=T[Y],ne=I[Z]=z?Xn(I[Z]):dn(I[Z]);if(Mr(se,ne))A(se,ne,M,null,B,F,q,H,z);else break;Y--,Z--}if(U>Y){if(U<=Z){const se=Z+1,ne=se<te?I[se].el:$;for(;U<=Z;)A(null,I[U]=z?Xn(I[U]):dn(I[U]),M,ne,B,F,q,H,z),U++}}else if(U>Z)for(;U<=Y;)Oe(T[U],B,F,!0),U++;else{const se=U,ne=U,fe=new Map;for(U=ne;U<=Z;U++){const ct=I[U]=z?Xn(I[U]):dn(I[U]);ct.key!=null&&fe.set(ct.key,U)}let ve,pt=0;const lt=Z-ne+1;let zt=!1,gt=0;const jn=new Array(lt);for(U=0;U<lt;U++)jn[U]=0;for(U=se;U<=Y;U++){const ct=T[U];if(pt>=lt){Oe(ct,B,F,!0);continue}let Ht;if(ct.key!=null)Ht=fe.get(ct.key);else for(ve=ne;ve<=Z;ve++)if(jn[ve-ne]===0&&Mr(ct,I[ve])){Ht=ve;break}Ht===void 0?Oe(ct,B,F,!0):(jn[Ht-ne]=U+1,Ht>=gt?gt=Ht:zt=!0,A(ct,I[Ht],M,null,B,F,q,H,z),pt++)}const Lo=zt?x0(jn):fo;for(ve=Lo.length-1,U=lt-1;U>=0;U--){const ct=ne+U,Ht=I[ct],rs=ct+1<te?I[ct+1].el:$;jn[U]===0?A(null,Ht,M,rs,B,F,q,H,z):zt&&(ve<0||U!==Lo[ve]?Ze(Ht,M,rs,2):ve--)}}},Ze=(T,I,M,$,B=null)=>{const{el:F,type:q,transition:H,children:z,shapeFlag:U}=T;if(U&6){Ze(T.component.subTree,I,M,$);return}if(U&128){T.suspense.move(I,M,$);return}if(U&64){q.move(T,I,M,jt);return}if(q===We){r(F,I,M);for(let Y=0;Y<z.length;Y++)Ze(z[Y],I,M,$);r(T.anchor,I,M);return}if(q===yl){x(T,I,M);return}if($!==2&&U&1&&H)if($===0)H.beforeEnter(F),r(F,I,M),At(()=>H.enter(F),B);else{const{leave:Y,delayLeave:Z,afterLeave:se}=H,ne=()=>r(F,I,M),fe=()=>{Y(F,()=>{ne(),se&&se()})};Z?Z(F,ne,fe):fe()}else r(F,I,M)},Oe=(T,I,M,$=!1,B=!1)=>{const{type:F,props:q,ref:H,children:z,dynamicChildren:U,shapeFlag:te,patchFlag:Y,dirs:Z,cacheIndex:se}=T;if(Y===-2&&(B=!1),H!=null&&Ys(H,null,M,T,!0),se!=null&&(I.renderCache[se]=void 0),te&256){I.ctx.deactivate(T);return}const ne=te&1&&Z,fe=!mo(T);let ve;if(fe&&(ve=q&&q.onVnodeBeforeUnmount)&&an(ve,I,T),te&6)on(T.component,M,$);else{if(te&128){T.suspense.unmount(M,$);return}ne&&Er(T,null,I,"beforeUnmount"),te&64?T.type.remove(T,I,M,jt,$):U&&!U.hasOnce&&(F!==We||Y>0&&Y&64)?sn(U,I,M,!1,!0):(F===We&&Y&384||!B&&te&16)&&sn(z,I,M),$&&ze(T)}(fe&&(ve=q&&q.onVnodeUnmounted)||ne)&&At(()=>{ve&&an(ve,I,T),ne&&Er(T,null,I,"unmounted")},M)},ze=T=>{const{type:I,el:M,anchor:$,transition:B}=T;if(I===We){rn(M,$);return}if(I===yl){D(T);return}const F=()=>{o(M),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(T.shapeFlag&1&&B&&!B.persisted){const{leave:q,delayLeave:H}=B,z=()=>q(M,F);H?H(T.el,F,z):z()}else F()},rn=(T,I)=>{let M;for(;T!==I;)M=g(T),o(T),T=M;o(I)},on=(T,I,M)=>{const{bum:$,scope:B,job:F,subTree:q,um:H,m:z,a:U}=T;Hd(z),Hd(U),$&&Ds($),B.stop(),F&&(F.flags|=8,Oe(q,T,I,M)),H&&At(H,I),At(()=>{T.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},sn=(T,I,M,$=!1,B=!1,F=0)=>{for(let q=F;q<T.length;q++)Oe(T[q],I,M,$,B)},Gt=T=>{if(T.shapeFlag&6)return Gt(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const I=g(T.anchor||T.el),M=I&&I[Dp];return M?g(M):I};let _r=!1;const Gr=(T,I,M)=>{T==null?I._vnode&&Oe(I._vnode,null,null,!0):A(I._vnode||null,T,I,null,null,null,M),I._vnode=T,_r||(_r=!0,Od(),Rp(),_r=!1)},jt={p:A,um:Oe,m:Ze,r:ze,mt:pe,mc:v,pc:ae,pbc:w,n:Gt,o:n};return{render:Gr,hydrate:void 0,createApp:_0(Gr)}}function bl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ir({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function R0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Yc(n,e,t=!1){const r=n.children,o=e.children;if(oe(r)&&oe(o))for(let i=0;i<r.length;i++){const s=r[i];let l=o[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[i]=Xn(o[i]),l.el=s.el),!t&&l.patchFlag!==-2&&Yc(s,l)),l.type===Pa&&(l.el=s.el)}}function x0(n){const e=n.slice(),t=[0];let r,o,i,s,l;const c=n.length;for(r=0;r<c;r++){const d=n[r];if(d!==0){if(o=t[t.length-1],n[o]<d){e[r]=o,t.push(r);continue}for(i=0,s=t.length-1;i<s;)l=i+s>>1,n[t[l]]<d?i=l+1:s=l;d<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,s=t[i-1];i-- >0;)t[i]=s,s=e[s];return t}function sg(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:sg(e)}function Hd(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const P0=Symbol.for("v-scx"),D0=()=>fi(P0);function rr(n,e,t){return ag(n,e,t)}function ag(n,e,t=Ve){const{immediate:r,deep:o,flush:i,once:s}=t,l=Xe({},t),c=e&&r||!e&&i!=="post";let d;if(Ii){if(i==="sync"){const b=D0();d=b.__watcherHandles||(b.__watcherHandles=[])}else if(!c){const b=()=>{};return b.stop=pn,b.resume=pn,b.pause=pn,b}}const u=ft;l.call=(b,k,A)=>nn(b,u,k,A);let p=!1;i==="post"?l.scheduler=b=>{At(b,u&&u.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(b,k)=>{k?b():Wc(b)}),l.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,u&&(b.id=u.uid,b.i=u))};const g=Ky(n,e,l);return Ii&&(d?d.push(g):c&&g()),g}function O0(n,e,t){const r=this.proxy,o=qe(n)?n.includes(".")?lg(r,n):()=>r[n]:n.bind(r,r);let i;de(e)?i=e:(i=e.handler,t=e);const s=Ki(this),l=ag(o,i.bind(r),t);return s(),l}function lg(n,e){const t=e.split(".");return()=>{let r=n;for(let o=0;o<t.length&&r;o++)r=r[t[o]];return r}}const M0=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Dt(e)}Modifiers`]||n[`${Ft(e)}Modifiers`];function V0(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ve;let o=t;const i=e.startsWith("update:"),s=i&&M0(r,e.slice(7));s&&(s.trim&&(o=t.map(u=>qe(u)?u.trim():u)),s.number&&(o=t.map(Ul)));let l,c=r[l=ul(e)]||r[l=ul(Dt(e))];!c&&i&&(c=r[l=ul(Ft(e))]),c&&nn(c,n,6,o);const d=r[l+"Once"];if(d){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,nn(d,n,6,o)}}function cg(n,e,t=!1){const r=e.emitsCache,o=r.get(n);if(o!==void 0)return o;const i=n.emits;let s={},l=!1;if(!de(n)){const c=d=>{const u=cg(d,e,!0);u&&(l=!0,Xe(s,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(je(n)&&r.set(n,null),null):(oe(i)?i.forEach(c=>s[c]=null):Xe(s,i),je(n)&&r.set(n,s),s)}function xa(n,e){return!n||!ba(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(n,e[0].toLowerCase()+e.slice(1))||Re(n,Ft(e))||Re(n,e))}function Wd(n){const{type:e,vnode:t,proxy:r,withProxy:o,propsOptions:[i],slots:s,attrs:l,emit:c,render:d,renderCache:u,props:p,data:g,setupState:b,ctx:k,inheritAttrs:A}=n,P=Gs(n);let N,L;try{if(t.shapeFlag&4){const D=o||r,X=D;N=dn(d.call(X,D,u,p,b,g,k)),L=l}else{const D=e;N=dn(D.length>1?D(p,{attrs:l,slots:s,emit:c}):D(p,null)),L=e.props?l:N0(l)}}catch(D){hi.length=0,Ea(D,n,1),N=Te(xt)}let x=N;if(L&&A!==!1){const D=Object.keys(L),{shapeFlag:X}=x;D.length&&X&7&&(i&&D.some(Oc)&&(L=B0(L,i)),x=fr(x,L,!1,!0))}return t.dirs&&(x=fr(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&Ti(x,t.transition),N=x,Gs(P),N}const N0=n=>{let e;for(const t in n)(t==="class"||t==="style"||ba(t))&&((e||(e={}))[t]=n[t]);return e},B0=(n,e)=>{const t={};for(const r in n)(!Oc(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function L0(n,e,t){const{props:r,children:o,component:i}=n,{props:s,children:l,patchFlag:c}=e,d=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Kd(r,s,d):!!s;if(c&8){const u=e.dynamicProps;for(let p=0;p<u.length;p++){const g=u[p];if(s[g]!==r[g]&&!xa(d,g))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:r===s?!1:r?s?Kd(r,s,d):!0:!!s;return!1}function Kd(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(e[i]!==n[i]&&!xa(t,i))return!0}return!1}function $0({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const ug=n=>n.__isSuspense;function F0(n,e){e&&e.pendingBranch?oe(n)?e.effects.push(...n):e.effects.push(n):Yy(n)}const We=Symbol.for("v-fgt"),Pa=Symbol.for("v-txt"),xt=Symbol.for("v-cmt"),yl=Symbol.for("v-stc"),hi=[];let Ut=null;function K(n=!1){hi.push(Ut=n?null:[])}function U0(){hi.pop(),Ut=hi[hi.length-1]||null}let Si=1;function qd(n,e=!1){Si+=n,n<0&&Ut&&e&&(Ut.hasOnce=!0)}function dg(n){return n.dynamicChildren=Si>0?Ut||fo:null,U0(),Si>0&&Ut&&Ut.push(n),n}function ee(n,e,t,r,o,i){return dg(me(n,e,t,r,o,i,!0))}function tt(n,e,t,r,o){return dg(Te(n,e,t,r,o,!0))}function Ei(n){return n?n.__v_isVNode===!0:!1}function Mr(n,e){return n.type===e.type&&n.key===e.key}const fg=({key:n})=>n??null,Vs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?qe(n)||Tt(n)||de(n)?{i:st,r:n,k:e,f:!!t}:n:null);function me(n,e=null,t=null,r=0,o=null,i=n===We?0:1,s=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&fg(e),ref:e&&Vs(e),scopeId:Pp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:st};return l?(Qc(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=qe(t)?8:16),Si>0&&!s&&Ut&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ut.push(c),c}const Te=j0;function j0(n,e=null,t=null,r=0,o=null,i=!1){if((!n||n===Wp)&&(n=xt),Ei(n)){const l=fr(n,e,!0);return t&&Qc(l,t),Si>0&&!i&&Ut&&(l.shapeFlag&6?Ut[Ut.indexOf(n)]=l:Ut.push(l)),l.patchFlag=-2,l}if(J0(n)&&(n=n.__vccOpts),e){e=z0(e);let{class:l,style:c}=e;l&&!qe(l)&&(e.class=fn(l)),je(c)&&(zc(c)&&!oe(c)&&(c=Xe({},c)),e.style=Ca(c))}const s=qe(n)?1:ug(n)?128:Op(n)?64:je(n)?4:de(n)?2:0;return me(n,e,t,r,o,s,i,!0)}function z0(n){return n?zc(n)||Zp(n)?Xe({},n):n:null}function fr(n,e,t=!1,r=!1){const{props:o,ref:i,patchFlag:s,children:l,transition:c}=n,d=e?j(o||{},e):o,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:d,key:d&&fg(d),ref:e&&e.ref?t&&i?oe(i)?i.concat(Vs(e)):[i,Vs(e)]:Vs(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==We?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&fr(n.ssContent),ssFallback:n.ssFallback&&fr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&Ti(u,c.clone(u)),u}function Vr(n=" ",e=0){return Te(Pa,null,n,e)}function xe(n="",e=!1){return e?(K(),tt(xt,null,n)):Te(xt,null,n)}function dn(n){return n==null||typeof n=="boolean"?Te(xt):oe(n)?Te(We,null,n.slice()):Ei(n)?Xn(n):Te(Pa,null,String(n))}function Xn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:fr(n)}function Qc(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(oe(e))t=16;else if(typeof e=="object")if(r&65){const o=e.default;o&&(o._c&&(o._d=!1),Qc(n,o()),o._c&&(o._d=!0));return}else{t=32;const o=e._;!o&&!Zp(e)?e._ctx=st:o===3&&st&&(st.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:st},t=32):(e=String(e),r&64?(t=16,e=[Vr(e)]):t=8);n.children=e,n.shapeFlag|=t}function j(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const o in r)if(o==="class")e.class!==r.class&&(e.class=fn([e.class,r.class]));else if(o==="style")e.style=Ca([e.style,r.style]);else if(ba(o)){const i=e[o],s=r[o];s&&i!==s&&!(oe(i)&&i.includes(s))&&(e[o]=i?[].concat(i,s):s)}else o!==""&&(e[o]=r[o])}return e}function an(n,e,t,r=null){nn(n,e,7,[t,r])}const H0=Qp();let W0=0;function K0(n,e,t){const r=n.type,o=(e?e.appContext:n.appContext)||H0,i={uid:W0++,vnode:n,type:r,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tg(r,o),emitsOptions:cg(r,o),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=V0.bind(null,i),n.ce&&n.ce(i),i}let ft=null;const hg=()=>ft||st;let Xs,ec;{const n=ka(),e=(t,r)=>{let o;return(o=n[t])||(o=n[t]=[]),o.push(r),i=>{o.length>1?o.forEach(s=>s(i)):o[0](i)}};Xs=e("__VUE_INSTANCE_SETTERS__",t=>ft=t),ec=e("__VUE_SSR_SETTERS__",t=>Ii=t)}const Ki=n=>{const e=ft;return Xs(n),n.scope.on(),()=>{n.scope.off(),Xs(e)}},Gd=()=>{ft&&ft.scope.off(),Xs(null)};function pg(n){return n.vnode.shapeFlag&4}let Ii=!1;function q0(n,e=!1,t=!1){e&&ec(e);const{props:r,children:o}=n.vnode,i=pg(n);w0(n,r,i,e),S0(n,o,t);const s=i?G0(n,e):void 0;return e&&ec(!1),s}function G0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,h0);const{setup:r}=t;if(r){yr();const o=n.setupContext=r.length>1?Q0(n):null,i=Ki(n),s=Wi(r,n,0,[n.props,o]),l=ip(s);if(vr(),i(),(l||n.sp)&&!mo(n)&&Up(n),l){if(s.then(Gd,Gd),e)return s.then(c=>{Yd(n,c)}).catch(c=>{Ea(c,n,0)});n.asyncDep=s}else Yd(n,s)}else gg(n)}function Yd(n,e,t){de(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:je(e)&&(n.setupState=Ep(e)),gg(n)}function gg(n,e,t){const r=n.type;n.render||(n.render=r.render||pn);{const o=Ki(n);yr();try{p0(n)}finally{vr(),o()}}}const Y0={get(n,e){return wt(n,"get",""),n[e]}};function Q0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Y0),slots:n.slots,emit:n.emit,expose:e}}function Da(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ep($y(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in di)return di[t](n)},has(e,t){return t in e||t in di}})):n.proxy}function X0(n,e=!0){return de(n)?n.displayName||n.name:n.name||e&&n.__name}function J0(n){return de(n)&&"__vccOpts"in n}const Z0=(n,e)=>Hy(n,e,Ii);function ev(n,e,t){const r=arguments.length;return r===2?je(e)&&!oe(e)?Ei(e)?Te(n,null,[e]):Te(n,e):Te(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Ei(t)&&(t=[t]),Te(n,e,t))}const tv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tc;const Qd=typeof window<"u"&&window.trustedTypes;if(Qd)try{tc=Qd.createPolicy("vue",{createHTML:n=>n})}catch{}const mg=tc?n=>tc.createHTML(n):n=>n,nv="http://www.w3.org/2000/svg",rv="http://www.w3.org/1998/Math/MathML",En=typeof document<"u"?document:null,Xd=En&&En.createElement("template"),ov={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const o=e==="svg"?En.createElementNS(nv,n):e==="mathml"?En.createElementNS(rv,n):t?En.createElement(n,{is:t}):En.createElement(n);return n==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:n=>En.createTextNode(n),createComment:n=>En.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>En.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,o,i){const s=t?t.previousSibling:e.lastChild;if(o&&(o===i||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),t),!(o===i||!(o=o.nextSibling)););else{Xd.innerHTML=mg(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=Xd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[s?s.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Kn="transition",Jo="animation",Ai=Symbol("_vtc"),bg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},iv=Xe({},Np,bg),sv=n=>(n.displayName="Transition",n.props=iv,n),av=sv((n,{slots:e})=>ev(e0,lv(n),e)),Ar=(n,e=[])=>{oe(n)?n.forEach(t=>t(...e)):n&&n(...e)},Jd=n=>n?oe(n)?n.some(e=>e.length>1):n.length>1:!1;function lv(n){const e={};for(const C in n)C in bg||(e[C]=n[C]);if(n.css===!1)return e;const{name:t="v",type:r,duration:o,enterFromClass:i=`${t}-enter-from`,enterActiveClass:s=`${t}-enter-active`,enterToClass:l=`${t}-enter-to`,appearFromClass:c=i,appearActiveClass:d=s,appearToClass:u=l,leaveFromClass:p=`${t}-leave-from`,leaveActiveClass:g=`${t}-leave-active`,leaveToClass:b=`${t}-leave-to`}=n,k=cv(o),A=k&&k[0],P=k&&k[1],{onBeforeEnter:N,onEnter:L,onEnterCancelled:x,onLeave:D,onLeaveCancelled:X,onBeforeAppear:Q=N,onAppear:E=L,onAppearCancelled:v=x}=e,y=(C,_,pe,Ne)=>{C._enterCancelled=Ne,Rr(C,_?u:l),Rr(C,_?d:s),pe&&pe()},w=(C,_)=>{C._isLeaving=!1,Rr(C,p),Rr(C,b),Rr(C,g),_&&_()},S=C=>(_,pe)=>{const Ne=C?E:L,Ie=()=>y(_,C,pe);Ar(Ne,[_,Ie]),Zd(()=>{Rr(_,C?c:i),Tn(_,C?u:l),Jd(Ne)||ef(_,r,A,Ie)})};return Xe(e,{onBeforeEnter(C){Ar(N,[C]),Tn(C,i),Tn(C,s)},onBeforeAppear(C){Ar(Q,[C]),Tn(C,c),Tn(C,d)},onEnter:S(!1),onAppear:S(!0),onLeave(C,_){C._isLeaving=!0;const pe=()=>w(C,_);Tn(C,p),C._enterCancelled?(Tn(C,g),rf()):(rf(),Tn(C,g)),Zd(()=>{C._isLeaving&&(Rr(C,p),Tn(C,b),Jd(D)||ef(C,r,P,pe))}),Ar(D,[C,pe])},onEnterCancelled(C){y(C,!1,void 0,!0),Ar(x,[C])},onAppearCancelled(C){y(C,!0,void 0,!0),Ar(v,[C])},onLeaveCancelled(C){w(C),Ar(X,[C])}})}function cv(n){if(n==null)return null;if(je(n))return[vl(n.enter),vl(n.leave)];{const e=vl(n);return[e,e]}}function vl(n){return jl(n)}function Tn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Ai]||(n[Ai]=new Set)).add(e)}function Rr(n,e){e.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const t=n[Ai];t&&(t.delete(e),t.size||(n[Ai]=void 0))}function Zd(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let uv=0;function ef(n,e,t,r){const o=n._endId=++uv,i=()=>{o===n._endId&&r()};if(t!=null)return setTimeout(i,t);const{type:s,timeout:l,propCount:c}=dv(n,e);if(!s)return r();const d=s+"end";let u=0;const p=()=>{n.removeEventListener(d,g),i()},g=b=>{b.target===n&&++u>=c&&p()};setTimeout(()=>{u<c&&p()},l+1),n.addEventListener(d,g)}function dv(n,e){const t=window.getComputedStyle(n),r=k=>(t[k]||"").split(", "),o=r(`${Kn}Delay`),i=r(`${Kn}Duration`),s=tf(o,i),l=r(`${Jo}Delay`),c=r(`${Jo}Duration`),d=tf(l,c);let u=null,p=0,g=0;e===Kn?s>0&&(u=Kn,p=s,g=i.length):e===Jo?d>0&&(u=Jo,p=d,g=c.length):(p=Math.max(s,d),u=p>0?s>d?Kn:Jo:null,g=u?u===Kn?i.length:c.length:0);const b=u===Kn&&/\b(transform|all)(,|$)/.test(r(`${Kn}Property`).toString());return{type:u,timeout:p,propCount:g,hasTransform:b}}function tf(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,r)=>nf(t)+nf(n[r])))}function nf(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function rf(){return document.body.offsetHeight}function fv(n,e,t){const r=n[Ai];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Js=Symbol("_vod"),yg=Symbol("_vsh"),of={beforeMount(n,{value:e},{transition:t}){n[Js]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Zo(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:r}){!e!=!t&&(r?e?(r.beforeEnter(n),Zo(n,!0),r.enter(n)):r.leave(n,()=>{Zo(n,!1)}):Zo(n,e))},beforeUnmount(n,{value:e}){Zo(n,e)}};function Zo(n,e){n.style.display=e?n[Js]:"none",n[yg]=!e}const hv=Symbol(""),pv=/(^|;)\s*display\s*:/;function gv(n,e,t){const r=n.style,o=qe(t);let i=!1;if(t&&!o){if(e)if(qe(e))for(const s of e.split(";")){const l=s.slice(0,s.indexOf(":")).trim();t[l]==null&&Ns(r,l,"")}else for(const s in e)t[s]==null&&Ns(r,s,"");for(const s in t)s==="display"&&(i=!0),Ns(r,s,t[s])}else if(o){if(e!==t){const s=r[hv];s&&(t+=";"+s),r.cssText=t,i=pv.test(t)}}else e&&n.removeAttribute("style");Js in n&&(n[Js]=i?r.display:"",n[yg]&&(r.display="none"))}const sf=/\s*!important$/;function Ns(n,e,t){if(oe(t))t.forEach(r=>Ns(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=mv(n,e);sf.test(t)?n.setProperty(Ft(r),t.replace(sf,""),"important"):n[r]=t}}const af=["Webkit","Moz","ms"],_l={};function mv(n,e){const t=_l[e];if(t)return t;let r=Dt(e);if(r!=="filter"&&r in n)return _l[e]=r;r=wa(r);for(let o=0;o<af.length;o++){const i=af[o]+r;if(i in n)return _l[e]=i}return e}const lf="http://www.w3.org/1999/xlink";function cf(n,e,t,r,o,i=by(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(lf,e.slice(6,e.length)):n.setAttributeNS(lf,e,t):t==null||i&&!lp(t)?n.removeAttribute(e):n.setAttribute(e,i?"":$n(t)?String(t):t)}function uf(n,e,t,r,o){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?mg(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let s=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=lp(t):t==null&&l==="string"?(t="",s=!0):l==="number"&&(t=0,s=!0)}try{n[e]=t}catch{}s&&n.removeAttribute(o||e)}function no(n,e,t,r){n.addEventListener(e,t,r)}function bv(n,e,t,r){n.removeEventListener(e,t,r)}const df=Symbol("_vei");function yv(n,e,t,r,o=null){const i=n[df]||(n[df]={}),s=i[e];if(r&&s)s.value=r;else{const[l,c]=vv(e);if(r){const d=i[e]=kv(r,o);no(n,l,d,c)}else s&&(bv(n,l,s,c),i[e]=void 0)}}const ff=/(?:Once|Passive|Capture)$/;function vv(n){let e;if(ff.test(n)){e={};let r;for(;r=n.match(ff);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ft(n.slice(2)),e]}let wl=0;const _v=Promise.resolve(),wv=()=>wl||(_v.then(()=>wl=0),wl=Date.now());function kv(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;nn(Cv(r,t.value),e,5,[r])};return t.value=n,t.attached=wv(),t}function Cv(n,e){if(oe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>o=>!o._stopped&&r&&r(o))}else return e}const hf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Tv=(n,e,t,r,o,i)=>{const s=o==="svg";e==="class"?fv(n,r,s):e==="style"?gv(n,t,r):ba(e)?Oc(e)||yv(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Sv(n,e,r,s))?(uf(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&cf(n,e,r,s,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!qe(r))?uf(n,Dt(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),cf(n,e,r,s))};function Sv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&hf(e)&&de(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const o=n.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return hf(e)&&qe(t)?!1:e in n}const pf={};/*! #__NO_SIDE_EFFECTS__ */function vg(n,e,t){const r=t0(n,e);va(r)&&Xe(r,e);class o extends Xc{constructor(s){super(r,s,t)}}return o.def=r,o}const Ev=typeof HTMLElement<"u"?HTMLElement:class{};class Xc extends Ev{constructor(e,t={},r=yf){super(),this._def=e,this._props=t,this._createApp=r,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._ob=null,this.shadowRoot&&r!==yf?this._root=this.shadowRoot:e.shadowRoot!==!1?(this.attachShadow({mode:"open"}),this._root=this.shadowRoot):this._root=this,this._def.__asyncLoader||this._resolveProps(this._def)}connectedCallback(){if(!this.isConnected)return;this.shadowRoot||this._parseSlots(),this._connected=!0;let e=this;for(;e=e&&(e.parentNode||e.host);)if(e instanceof Xc){this._parent=e;break}this._instance||(this._resolved?(this._setParent(),this._update()):e&&e._pendingResolve?this._pendingResolve=e._pendingResolve.then(()=>{this._pendingResolve=void 0,this._resolveDef()}):this._resolveDef())}_setParent(e=this._parent){e&&(this._instance.parent=e._instance,this._instance.provides=e._instance.provides)}disconnectedCallback(){this._connected=!1,Hc(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null)})}_resolveDef(){if(this._pendingResolve)return;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);this._ob=new MutationObserver(r=>{for(const o of r)this._setAttr(o.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(r,o=!1)=>{this._resolved=!0,this._pendingResolve=void 0;const{props:i,styles:s}=r;let l;if(i&&!oe(i))for(const c in i){const d=i[c];(d===Number||d&&d.type===Number)&&(c in this._props&&(this._props[c]=jl(this._props[c])),(l||(l=Object.create(null)))[Dt(c)]=!0)}this._numberProps=l,o&&this._resolveProps(r),this.shadowRoot&&this._applyStyles(s),this._mount(r)},t=this._def.__asyncLoader;t?this._pendingResolve=t().then(r=>e(this._def=r,!0)):e(this._def)}_mount(e){this._app=this._createApp(e),e.configureApp&&e.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);const t=this._instance&&this._instance.exposed;if(t)for(const r in t)Re(this,r)||Object.defineProperty(this,r,{get:()=>Sp(t[r])})}_resolveProps(e){const{props:t}=e,r=oe(t)?t:Object.keys(t||{});for(const o of Object.keys(this))o[0]!=="_"&&r.includes(o)&&this._setProp(o,this[o]);for(const o of r.map(Dt))Object.defineProperty(this,o,{get(){return this._getProp(o)},set(i){this._setProp(o,i,!0,!0)}})}_setAttr(e){if(e.startsWith("data-v-"))return;const t=this.hasAttribute(e);let r=t?this.getAttribute(e):pf;const o=Dt(e);t&&this._numberProps&&this._numberProps[o]&&(r=jl(r)),this._setProp(o,r,!1,!0)}_getProp(e){return this._props[e]}_setProp(e,t,r=!0,o=!1){if(t!==this._props[e]&&(t===pf?delete this._props[e]:(this._props[e]=t,e==="key"&&this._app&&(this._app._ceVNode.key=t)),o&&this._instance&&this._update(),r)){const i=this._ob;i&&i.disconnect(),t===!0?this.setAttribute(Ft(e),""):typeof t=="string"||typeof t=="number"?this.setAttribute(Ft(e),t+""):t||this.removeAttribute(Ft(e)),i&&i.observe(this,{attributes:!0})}}_update(){Pv(this._createVNode(),this._root)}_createVNode(){const e={};this.shadowRoot||(e.onVnodeMounted=e.onVnodeUpdated=this._renderSlots.bind(this));const t=Te(this._def,Xe(e,this._props));return this._instance||(t.ce=r=>{this._instance=r,r.ce=this,r.isCE=!0;const o=(i,s)=>{this.dispatchEvent(new CustomEvent(i,va(s[0])?Xe({detail:s},s[0]):{detail:s}))};r.emit=(i,...s)=>{o(i,s),Ft(i)!==i&&o(Ft(i),s)},this._setParent()}),t}_applyStyles(e,t){if(!e)return;if(t){if(t===this._def||this._styleChildren.has(t))return;this._styleChildren.add(t)}const r=this._nonce;for(let o=e.length-1;o>=0;o--){const i=document.createElement("style");r&&i.setAttribute("nonce",r),i.textContent=e[o],this.shadowRoot.prepend(i)}}_parseSlots(){const e=this._slots={};let t;for(;t=this.firstChild;){const r=t.nodeType===1&&t.getAttribute("slot")||"default";(e[r]||(e[r]=[])).push(t),this.removeChild(t)}}_renderSlots(){const e=(this._teleportTarget||this).querySelectorAll("slot"),t=this._instance.type.__scopeId;for(let r=0;r<e.length;r++){const o=e[r],i=o.getAttribute("name")||"default",s=this._slots[i],l=o.parentNode;if(s)for(const c of s){if(t&&c.nodeType===1){const d=t+"-s",u=document.createTreeWalker(c,1);c.setAttribute(d,"");let p;for(;p=u.nextNode();)p.setAttribute(d,"")}l.insertBefore(c,o)}else for(;o.firstChild;)l.insertBefore(o.firstChild,o);l.removeChild(o)}}_injectChildStyle(e){this._applyStyles(e.styles,e)}_removeChildStyle(e){}}const gf=n=>{const e=n.props["onUpdate:modelValue"]||!1;return oe(e)?t=>Ds(e,t):e};function Iv(n){n.target.composing=!0}function mf(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const kl=Symbol("_assign"),Av={created(n,{modifiers:{lazy:e,trim:t,number:r}},o){n[kl]=gf(o);const i=r||o.props&&o.props.type==="number";no(n,e?"change":"input",s=>{if(s.target.composing)return;let l=n.value;t&&(l=l.trim()),i&&(l=Ul(l)),n[kl](l)}),t&&no(n,"change",()=>{n.value=n.value.trim()}),e||(no(n,"compositionstart",Iv),no(n,"compositionend",mf),no(n,"change",mf))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:o,number:i}},s){if(n[kl]=gf(s),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?Ul(n.value):n.value,c=e??"";l!==c&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||o&&n.value.trim()===c)||(n.value=c))}},Rv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},He=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=o=>{if(!("key"in o))return;const i=Ft(o.key);if(e.some(s=>s===i||Rv[s]===i))return n(o)})},xv=Xe({patchProp:Tv},ov);let bf;function _g(){return bf||(bf=I0(xv))}const Pv=(...n)=>{_g().render(...n)},yf=(...n)=>{const e=_g().createApp(...n),{mount:t}=e;return e.mount=r=>{const o=Ov(r);if(!o)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const s=t(o,!1,Dv(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},e};function Dv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ov(n){return qe(n)?document.querySelector(n):n}var vf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Mv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const o=n[t++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=n[t++];e[r++]=String.fromCharCode((o&31)<<6|i&63)}else if(o>239&&o<365){const i=n[t++],s=n[t++],l=n[t++],c=((o&7)<<18|(i&63)<<12|(s&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],s=n[t++];e[r++]=String.fromCharCode((o&15)<<12|(i&63)<<6|s&63)}}return e.join("")},kg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const i=n[o],s=o+1<n.length,l=s?n[o+1]:0,c=o+2<n.length,d=c?n[o+2]:0,u=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|d>>6,b=d&63;c||(b=64,s||(g=64)),r.push(t[u],t[p],t[g],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(wg(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Mv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const i=t[n.charAt(o++)],l=o<n.length?t[n.charAt(o)]:0;++o;const d=o<n.length?t[n.charAt(o)]:64;++o;const p=o<n.length?t[n.charAt(o)]:64;if(++o,i==null||l==null||d==null||p==null)throw new Vv;const g=i<<2|l>>4;if(r.push(g),d!==64){const b=l<<4&240|d>>2;if(r.push(b),p!==64){const k=d<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Vv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nv=function(n){const e=wg(n);return kg.encodeByteArray(e,!0)},Zs=function(n){return Nv(n).replace(/\./g,"")},Cg=function(n){try{return kg.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=()=>Bv().__FIREBASE_DEFAULTS__,$v=()=>{if(typeof process>"u"||typeof vf>"u")return;const n=vf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Fv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Cg(n[1]);return e&&JSON.parse(e)},Oa=()=>{try{return Lv()||$v()||Fv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Tg=n=>{var e,t;return(t=(e=Oa())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Uv=n=>{const e=Tg(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Sg=()=>{var n;return(n=Oa())===null||n===void 0?void 0:n.config},Eg=n=>{var e;return(e=Oa())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Zs(JSON.stringify(t)),Zs(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function Wv(){var n;const e=(n=Oa())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Kv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Gv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yv(){const n=St();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Qv(){return!Wv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xv(){try{return typeof indexedDB=="object"}catch{return!1}}function Jv(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var i;e(((i=o.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="FirebaseError";class Un extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Zv,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qi.prototype.create)}}class qi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},o=`${this.service}/${e}`,i=this.errors[e],s=i?e_(i,r):"Error",l=`${this.serviceName}: ${s} (${o}).`;return new Un(o,l,r)}}function e_(n,e){return n.replace(t_,(t,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const t_=/\{\$([^}]+)}/g;function n_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ea(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const o of t){if(!r.includes(o))return!1;const i=n[o],s=e[o];if(_f(i)&&_f(s)){if(!ea(i,s))return!1}else if(i!==s)return!1}for(const o of r)if(!t.includes(o))return!1;return!0}function _f(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function r_(n,e){const t=new o_(n,e);return t.subscribe.bind(t)}class o_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let o;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");i_(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:r},o.next===void 0&&(o.next=Cl),o.error===void 0&&(o.error=Cl),o.complete===void 0&&(o.complete=Cl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function i_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Cl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(n){return n&&n._delegate?n._delegate:n}class jr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new jv;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(o)return null;throw i}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(l_(e))try{this.getOrInitializeService({instanceIdentifier:Pr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:o});r.resolve(i)}catch{}}}}clearInstance(e=Pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pr){return this.instances.has(e)}getOptions(e=Pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&s.resolve(o)}return o}onInit(e,t){var r;const o=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(o,i);const s=this.instances.get(o);return s&&e(s,o),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const o of r)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:a_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pr){return this.component?this.component.multipleInstances?e:Pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function a_(n){return n===Pr?void 0:n}function l_(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ye||(ye={}));const u_={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},d_=ye.INFO,f_={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},h_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=f_[e];if(o)console[o](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jc{constructor(e){this.name=e,this._logLevel=d_,this._logHandler=h_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?u_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const p_=(n,e)=>e.some(t=>n instanceof t);let wf,kf;function g_(){return wf||(wf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m_(){return kf||(kf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ig=new WeakMap,nc=new WeakMap,Ag=new WeakMap,Tl=new WeakMap,Zc=new WeakMap;function b_(n){const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("success",i),n.removeEventListener("error",s)},i=()=>{t(lr(n.result)),o()},s=()=>{r(n.error),o()};n.addEventListener("success",i),n.addEventListener("error",s)});return e.then(t=>{t instanceof IDBCursor&&Ig.set(t,n)}).catch(()=>{}),Zc.set(e,n),e}function y_(n){if(nc.has(n))return;const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",s),n.removeEventListener("abort",s)},i=()=>{t(),o()},s=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",i),n.addEventListener("error",s),n.addEventListener("abort",s)});nc.set(n,e)}let rc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return nc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ag.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return lr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function v_(n){rc=n(rc)}function __(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Sl(this),e,...t);return Ag.set(r,e.sort?e.sort():[e]),lr(r)}:m_().includes(n)?function(...e){return n.apply(Sl(this),e),lr(Ig.get(this))}:function(...e){return lr(n.apply(Sl(this),e))}}function w_(n){return typeof n=="function"?__(n):(n instanceof IDBTransaction&&y_(n),p_(n,g_())?new Proxy(n,rc):n)}function lr(n){if(n instanceof IDBRequest)return b_(n);if(Tl.has(n))return Tl.get(n);const e=w_(n);return e!==n&&(Tl.set(n,e),Zc.set(e,n)),e}const Sl=n=>Zc.get(n);function k_(n,e,{blocked:t,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(n,e),l=lr(s);return r&&s.addEventListener("upgradeneeded",c=>{r(lr(s.result),c.oldVersion,c.newVersion,lr(s.transaction),c)}),t&&s.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),o&&c.addEventListener("versionchange",d=>o(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const C_=["get","getKey","getAll","getAllKeys","count"],T_=["put","add","delete","clear"],El=new Map;function Cf(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(El.get(e))return El.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,o=T_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(o||C_.includes(t)))return;const i=async function(s,...l){const c=this.transaction(s,o?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),o&&c.done]))[0]};return El.set(e,i),i}v_(n=>({...n,get:(e,t,r)=>Cf(e,t)||n.get(e,t,r),has:(e,t)=>!!Cf(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(E_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function E_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oc="@firebase/app",Tf="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new Jc("@firebase/app"),I_="@firebase/app-compat",A_="@firebase/analytics-compat",R_="@firebase/analytics",x_="@firebase/app-check-compat",P_="@firebase/app-check",D_="@firebase/auth",O_="@firebase/auth-compat",M_="@firebase/database",V_="@firebase/data-connect",N_="@firebase/database-compat",B_="@firebase/functions",L_="@firebase/functions-compat",$_="@firebase/installations",F_="@firebase/installations-compat",U_="@firebase/messaging",j_="@firebase/messaging-compat",z_="@firebase/performance",H_="@firebase/performance-compat",W_="@firebase/remote-config",K_="@firebase/remote-config-compat",q_="@firebase/storage",G_="@firebase/storage-compat",Y_="@firebase/firestore",Q_="@firebase/vertexai",X_="@firebase/firestore-compat",J_="firebase",Z_="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="[DEFAULT]",ew={[oc]:"fire-core",[I_]:"fire-core-compat",[R_]:"fire-analytics",[A_]:"fire-analytics-compat",[P_]:"fire-app-check",[x_]:"fire-app-check-compat",[D_]:"fire-auth",[O_]:"fire-auth-compat",[M_]:"fire-rtdb",[V_]:"fire-data-connect",[N_]:"fire-rtdb-compat",[B_]:"fire-fn",[L_]:"fire-fn-compat",[$_]:"fire-iid",[F_]:"fire-iid-compat",[U_]:"fire-fcm",[j_]:"fire-fcm-compat",[z_]:"fire-perf",[H_]:"fire-perf-compat",[W_]:"fire-rc",[K_]:"fire-rc-compat",[q_]:"fire-gcs",[G_]:"fire-gcs-compat",[Y_]:"fire-fst",[X_]:"fire-fst-compat",[Q_]:"fire-vertex","fire-js":"fire-js",[J_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=new Map,tw=new Map,sc=new Map;function Sf(n,e){try{n.container.addComponent(e)}catch(t){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function To(n){const e=n.name;if(sc.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;sc.set(e,n);for(const t of ta.values())Sf(t,n);for(const t of tw.values())Sf(t,n);return!0}function eu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function or(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cr=new qi("app","Firebase",nw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=Z_;function Rg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ic,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw cr.create("bad-app-name",{appName:String(o)});if(t||(t=Sg()),!t)throw cr.create("no-options");const i=ta.get(o);if(i){if(ea(t,i.options)&&ea(r,i.config))return i;throw cr.create("duplicate-app",{appName:o})}const s=new c_(o);for(const c of sc.values())s.addComponent(c);const l=new rw(t,r,s);return ta.set(o,l),l}function xg(n=ic){const e=ta.get(n);if(!e&&n===ic&&Sg())return Rg();if(!e)throw cr.create("no-app",{appName:n});return e}function ur(n,e,t){var r;let o=(r=ew[n])!==null&&r!==void 0?r:n;t&&(o+=`-${t}`);const i=o.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const l=[`Unable to register library "${o}" with version "${e}":`];i&&l.push(`library name "${o}" contains illegal characters (whitespace or "/")`),i&&s&&l.push("and"),s&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(l.join(" "));return}To(new jr(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="firebase-heartbeat-database",iw=1,Ri="firebase-heartbeat-store";let Il=null;function Pg(){return Il||(Il=k_(ow,iw,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ri)}catch(t){console.warn(t)}}}}).catch(n=>{throw cr.create("idb-open",{originalErrorMessage:n.message})})),Il}async function sw(n){try{const t=(await Pg()).transaction(Ri),r=await t.objectStore(Ri).get(Dg(n));return await t.done,r}catch(e){if(e instanceof Un)Vn.warn(e.message);else{const t=cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(t.message)}}}async function Ef(n,e){try{const r=(await Pg()).transaction(Ri,"readwrite");await r.objectStore(Ri).put(e,Dg(n)),await r.done}catch(t){if(t instanceof Un)Vn.warn(t.message);else{const r=cr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Vn.warn(r.message)}}}function Dg(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw=1024,lw=30*24*60*60*1e3;class cw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dw(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=If();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const l=new Date(s.date).valueOf();return Date.now()-l<=lw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=If(),{heartbeatsToSend:r,unsentEntries:o}=uw(this._heartbeatsCache.heartbeats),i=Zs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Vn.warn(t),""}}}function If(){return new Date().toISOString().substring(0,10)}function uw(n,e=aw){const t=[];let r=n.slice();for(const o of n){const i=t.find(s=>s.agent===o.agent);if(i){if(i.dates.push(o.date),Af(t)>e){i.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Af(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class dw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xv()?Jv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await sw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ef(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ef(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Af(n){return Zs(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(n){To(new jr("platform-logger",e=>new S_(e),"PRIVATE")),To(new jr("heartbeat",e=>new cw(e),"PRIVATE")),ur(oc,Tf,n),ur(oc,Tf,"esm2017"),ur("fire-js","")}fw("");var Rf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,Og;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function y(){}y.prototype=v.prototype,E.D=v.prototype,E.prototype=new y,E.prototype.constructor=E,E.C=function(w,S,C){for(var _=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)_[pe-2]=arguments[pe];return v.prototype[S].apply(w,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(E,v,y){y||(y=0);var w=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)w[S]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(S=0;16>S;++S)w[S]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=E.g[0],y=E.g[1],S=E.g[2];var C=E.g[3],_=v+(C^y&(S^C))+w[0]+3614090360&4294967295;v=y+(_<<7&4294967295|_>>>25),_=C+(S^v&(y^S))+w[1]+3905402710&4294967295,C=v+(_<<12&4294967295|_>>>20),_=S+(y^C&(v^y))+w[2]+606105819&4294967295,S=C+(_<<17&4294967295|_>>>15),_=y+(v^S&(C^v))+w[3]+3250441966&4294967295,y=S+(_<<22&4294967295|_>>>10),_=v+(C^y&(S^C))+w[4]+4118548399&4294967295,v=y+(_<<7&4294967295|_>>>25),_=C+(S^v&(y^S))+w[5]+1200080426&4294967295,C=v+(_<<12&4294967295|_>>>20),_=S+(y^C&(v^y))+w[6]+2821735955&4294967295,S=C+(_<<17&4294967295|_>>>15),_=y+(v^S&(C^v))+w[7]+4249261313&4294967295,y=S+(_<<22&4294967295|_>>>10),_=v+(C^y&(S^C))+w[8]+1770035416&4294967295,v=y+(_<<7&4294967295|_>>>25),_=C+(S^v&(y^S))+w[9]+2336552879&4294967295,C=v+(_<<12&4294967295|_>>>20),_=S+(y^C&(v^y))+w[10]+4294925233&4294967295,S=C+(_<<17&4294967295|_>>>15),_=y+(v^S&(C^v))+w[11]+2304563134&4294967295,y=S+(_<<22&4294967295|_>>>10),_=v+(C^y&(S^C))+w[12]+1804603682&4294967295,v=y+(_<<7&4294967295|_>>>25),_=C+(S^v&(y^S))+w[13]+4254626195&4294967295,C=v+(_<<12&4294967295|_>>>20),_=S+(y^C&(v^y))+w[14]+2792965006&4294967295,S=C+(_<<17&4294967295|_>>>15),_=y+(v^S&(C^v))+w[15]+1236535329&4294967295,y=S+(_<<22&4294967295|_>>>10),_=v+(S^C&(y^S))+w[1]+4129170786&4294967295,v=y+(_<<5&4294967295|_>>>27),_=C+(y^S&(v^y))+w[6]+3225465664&4294967295,C=v+(_<<9&4294967295|_>>>23),_=S+(v^y&(C^v))+w[11]+643717713&4294967295,S=C+(_<<14&4294967295|_>>>18),_=y+(C^v&(S^C))+w[0]+3921069994&4294967295,y=S+(_<<20&4294967295|_>>>12),_=v+(S^C&(y^S))+w[5]+3593408605&4294967295,v=y+(_<<5&4294967295|_>>>27),_=C+(y^S&(v^y))+w[10]+38016083&4294967295,C=v+(_<<9&4294967295|_>>>23),_=S+(v^y&(C^v))+w[15]+3634488961&4294967295,S=C+(_<<14&4294967295|_>>>18),_=y+(C^v&(S^C))+w[4]+3889429448&4294967295,y=S+(_<<20&4294967295|_>>>12),_=v+(S^C&(y^S))+w[9]+568446438&4294967295,v=y+(_<<5&4294967295|_>>>27),_=C+(y^S&(v^y))+w[14]+3275163606&4294967295,C=v+(_<<9&4294967295|_>>>23),_=S+(v^y&(C^v))+w[3]+4107603335&4294967295,S=C+(_<<14&4294967295|_>>>18),_=y+(C^v&(S^C))+w[8]+1163531501&4294967295,y=S+(_<<20&4294967295|_>>>12),_=v+(S^C&(y^S))+w[13]+2850285829&4294967295,v=y+(_<<5&4294967295|_>>>27),_=C+(y^S&(v^y))+w[2]+4243563512&4294967295,C=v+(_<<9&4294967295|_>>>23),_=S+(v^y&(C^v))+w[7]+1735328473&4294967295,S=C+(_<<14&4294967295|_>>>18),_=y+(C^v&(S^C))+w[12]+2368359562&4294967295,y=S+(_<<20&4294967295|_>>>12),_=v+(y^S^C)+w[5]+4294588738&4294967295,v=y+(_<<4&4294967295|_>>>28),_=C+(v^y^S)+w[8]+2272392833&4294967295,C=v+(_<<11&4294967295|_>>>21),_=S+(C^v^y)+w[11]+1839030562&4294967295,S=C+(_<<16&4294967295|_>>>16),_=y+(S^C^v)+w[14]+4259657740&4294967295,y=S+(_<<23&4294967295|_>>>9),_=v+(y^S^C)+w[1]+2763975236&4294967295,v=y+(_<<4&4294967295|_>>>28),_=C+(v^y^S)+w[4]+1272893353&4294967295,C=v+(_<<11&4294967295|_>>>21),_=S+(C^v^y)+w[7]+4139469664&4294967295,S=C+(_<<16&4294967295|_>>>16),_=y+(S^C^v)+w[10]+3200236656&4294967295,y=S+(_<<23&4294967295|_>>>9),_=v+(y^S^C)+w[13]+681279174&4294967295,v=y+(_<<4&4294967295|_>>>28),_=C+(v^y^S)+w[0]+3936430074&4294967295,C=v+(_<<11&4294967295|_>>>21),_=S+(C^v^y)+w[3]+3572445317&4294967295,S=C+(_<<16&4294967295|_>>>16),_=y+(S^C^v)+w[6]+76029189&4294967295,y=S+(_<<23&4294967295|_>>>9),_=v+(y^S^C)+w[9]+3654602809&4294967295,v=y+(_<<4&4294967295|_>>>28),_=C+(v^y^S)+w[12]+3873151461&4294967295,C=v+(_<<11&4294967295|_>>>21),_=S+(C^v^y)+w[15]+530742520&4294967295,S=C+(_<<16&4294967295|_>>>16),_=y+(S^C^v)+w[2]+3299628645&4294967295,y=S+(_<<23&4294967295|_>>>9),_=v+(S^(y|~C))+w[0]+4096336452&4294967295,v=y+(_<<6&4294967295|_>>>26),_=C+(y^(v|~S))+w[7]+1126891415&4294967295,C=v+(_<<10&4294967295|_>>>22),_=S+(v^(C|~y))+w[14]+2878612391&4294967295,S=C+(_<<15&4294967295|_>>>17),_=y+(C^(S|~v))+w[5]+4237533241&4294967295,y=S+(_<<21&4294967295|_>>>11),_=v+(S^(y|~C))+w[12]+1700485571&4294967295,v=y+(_<<6&4294967295|_>>>26),_=C+(y^(v|~S))+w[3]+2399980690&4294967295,C=v+(_<<10&4294967295|_>>>22),_=S+(v^(C|~y))+w[10]+4293915773&4294967295,S=C+(_<<15&4294967295|_>>>17),_=y+(C^(S|~v))+w[1]+2240044497&4294967295,y=S+(_<<21&4294967295|_>>>11),_=v+(S^(y|~C))+w[8]+1873313359&4294967295,v=y+(_<<6&4294967295|_>>>26),_=C+(y^(v|~S))+w[15]+4264355552&4294967295,C=v+(_<<10&4294967295|_>>>22),_=S+(v^(C|~y))+w[6]+2734768916&4294967295,S=C+(_<<15&4294967295|_>>>17),_=y+(C^(S|~v))+w[13]+1309151649&4294967295,y=S+(_<<21&4294967295|_>>>11),_=v+(S^(y|~C))+w[4]+4149444226&4294967295,v=y+(_<<6&4294967295|_>>>26),_=C+(y^(v|~S))+w[11]+3174756917&4294967295,C=v+(_<<10&4294967295|_>>>22),_=S+(v^(C|~y))+w[2]+718787259&4294967295,S=C+(_<<15&4294967295|_>>>17),_=y+(C^(S|~v))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(S+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+S&4294967295,E.g[3]=E.g[3]+C&4294967295}r.prototype.u=function(E,v){v===void 0&&(v=E.length);for(var y=v-this.blockSize,w=this.B,S=this.h,C=0;C<v;){if(S==0)for(;C<=y;)o(this,E,C),C+=this.blockSize;if(typeof E=="string"){for(;C<v;)if(w[S++]=E.charCodeAt(C++),S==this.blockSize){o(this,w),S=0;break}}else for(;C<v;)if(w[S++]=E[C++],S==this.blockSize){o(this,w),S=0;break}}this.h=S,this.o+=v},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;var y=8*this.o;for(v=E.length-8;v<E.length;++v)E[v]=y&255,y/=256;for(this.u(E),E=Array(16),v=y=0;4>v;++v)for(var w=0;32>w;w+=8)E[y++]=this.g[v]>>>w&255;return E};function i(E,v){var y=l;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=v(E)}function s(E,v){this.h=v;for(var y=[],w=!0,S=E.length-1;0<=S;S--){var C=E[S]|0;w&&C==v||(y[S]=C,w=!1)}this.g=y}var l={};function c(E){return-128<=E&&128>E?i(E,function(v){return new s([v|0],0>v?-1:0)}):new s([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return P(d(-E));for(var v=[],y=1,w=0;E>=y;w++)v[w]=E/y|0,y*=4294967296;return new s(v,0)}function u(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return P(u(E.substring(1),v));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(v,8)),w=p,S=0;S<E.length;S+=8){var C=Math.min(8,E.length-S),_=parseInt(E.substring(S,S+C),v);8>C?(C=d(Math.pow(v,C)),w=w.j(C).add(d(_))):(w=w.j(y),w=w.add(d(_)))}return w}var p=c(0),g=c(1),b=c(16777216);n=s.prototype,n.m=function(){if(A(this))return-P(this).m();for(var E=0,v=1,y=0;y<this.g.length;y++){var w=this.i(y);E+=(0<=w?w:4294967296+w)*v,v*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(A(this))return"-"+P(this).toString(E);for(var v=d(Math.pow(E,6)),y=this,w="";;){var S=D(y,v).g;y=N(y,S.j(v));var C=((0<y.g.length?y.g[0]:y.h)>>>0).toString(E);if(y=S,k(y))return C+w;for(;6>C.length;)C="0"+C;w=C+w}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function A(E){return E.h==-1}n.l=function(E){return E=N(this,E),A(E)?-1:k(E)?0:1};function P(E){for(var v=E.g.length,y=[],w=0;w<v;w++)y[w]=~E.g[w];return new s(y,~E.h).add(g)}n.abs=function(){return A(this)?P(this):this},n.add=function(E){for(var v=Math.max(this.g.length,E.g.length),y=[],w=0,S=0;S<=v;S++){var C=w+(this.i(S)&65535)+(E.i(S)&65535),_=(C>>>16)+(this.i(S)>>>16)+(E.i(S)>>>16);w=_>>>16,C&=65535,_&=65535,y[S]=_<<16|C}return new s(y,y[y.length-1]&-2147483648?-1:0)};function N(E,v){return E.add(P(v))}n.j=function(E){if(k(this)||k(E))return p;if(A(this))return A(E)?P(this).j(P(E)):P(P(this).j(E));if(A(E))return P(this.j(P(E)));if(0>this.l(b)&&0>E.l(b))return d(this.m()*E.m());for(var v=this.g.length+E.g.length,y=[],w=0;w<2*v;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var S=0;S<E.g.length;S++){var C=this.i(w)>>>16,_=this.i(w)&65535,pe=E.i(S)>>>16,Ne=E.i(S)&65535;y[2*w+2*S]+=_*Ne,L(y,2*w+2*S),y[2*w+2*S+1]+=C*Ne,L(y,2*w+2*S+1),y[2*w+2*S+1]+=_*pe,L(y,2*w+2*S+1),y[2*w+2*S+2]+=C*pe,L(y,2*w+2*S+2)}for(w=0;w<v;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=v;w<2*v;w++)y[w]=0;return new s(y,0)};function L(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function x(E,v){this.g=E,this.h=v}function D(E,v){if(k(v))throw Error("division by zero");if(k(E))return new x(p,p);if(A(E))return v=D(P(E),v),new x(P(v.g),P(v.h));if(A(v))return v=D(E,P(v)),new x(P(v.g),v.h);if(30<E.g.length){if(A(E)||A(v))throw Error("slowDivide_ only works with positive integers.");for(var y=g,w=v;0>=w.l(E);)y=X(y),w=X(w);var S=Q(y,1),C=Q(w,1);for(w=Q(w,2),y=Q(y,2);!k(w);){var _=C.add(w);0>=_.l(E)&&(S=S.add(y),C=_),w=Q(w,1),y=Q(y,1)}return v=N(E,S.j(v)),new x(S,v)}for(S=p;0<=E.l(v);){for(y=Math.max(1,Math.floor(E.m()/v.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),C=d(y),_=C.j(v);A(_)||0<_.l(E);)y-=w,C=d(y),_=C.j(v);k(C)&&(C=g),S=S.add(C),E=N(E,_)}return new x(S,E)}n.A=function(E){return D(this,E).h},n.and=function(E){for(var v=Math.max(this.g.length,E.g.length),y=[],w=0;w<v;w++)y[w]=this.i(w)&E.i(w);return new s(y,this.h&E.h)},n.or=function(E){for(var v=Math.max(this.g.length,E.g.length),y=[],w=0;w<v;w++)y[w]=this.i(w)|E.i(w);return new s(y,this.h|E.h)},n.xor=function(E){for(var v=Math.max(this.g.length,E.g.length),y=[],w=0;w<v;w++)y[w]=this.i(w)^E.i(w);return new s(y,this.h^E.h)};function X(E){for(var v=E.g.length+1,y=[],w=0;w<v;w++)y[w]=E.i(w)<<1|E.i(w-1)>>>31;return new s(y,E.h)}function Q(E,v){var y=v>>5;v%=32;for(var w=E.g.length-y,S=[],C=0;C<w;C++)S[C]=0<v?E.i(C+y)>>>v|E.i(C+y+1)<<32-v:E.i(C+y);return new s(S,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Og=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=d,s.fromString=u,dr=s}).apply(typeof Rf<"u"?Rf:typeof self<"u"?self:typeof window<"u"?window:{});var Ts=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mg,ri,Vg,Bs,ac,Ng,Bg,Lg;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,h){return a==Array.prototype||a==Object.prototype||(a[f]=h.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ts=="object"&&Ts];for(var f=0;f<a.length;++f){var h=a[f];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function o(a,f){if(f)e:{var h=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var R=a[m];if(!(R in h))break e;h=h[R]}a=a[a.length-1],m=h[a],f=f(m),f!=m&&f!=null&&e(h,a,{configurable:!0,writable:!0,value:f})}}function i(a,f){a instanceof String&&(a+="");var h=0,m=!1,R={next:function(){if(!m&&h<a.length){var O=h++;return{value:f(O,a[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}o("Array.prototype.values",function(a){return a||function(){return i(this,function(f,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},l=this||self;function c(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function d(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function u(a,f,h){return a.call.apply(a.bind,arguments)}function p(a,f,h){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,m),a.apply(f,R)}}return function(){return a.apply(f,arguments)}}function g(a,f,h){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?u:p,g.apply(null,arguments)}function b(a,f){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function k(a,f){function h(){}h.prototype=f.prototype,a.aa=f.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(m,R,O){for(var W=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)W[Me-2]=arguments[Me];return f.prototype[R].apply(m,W)}}function A(a){const f=a.length;if(0<f){const h=Array(f);for(let m=0;m<f;m++)h[m]=a[m];return h}return[]}function P(a,f){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(c(m)){const R=a.length||0,O=m.length||0;a.length=R+O;for(let W=0;W<O;W++)a[R+W]=m[W]}else a.push(m)}}class N{constructor(f,h){this.i=f,this.j=h,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function L(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var X=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function Q(a,f,h){for(const m in a)f.call(h,a[m],m,a)}function E(a,f){for(const h in a)f.call(void 0,a[h],h,a)}function v(a){const f={};for(const h in a)f[h]=a[h];return f}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,f){let h,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(h in m)a[h]=m[h];for(let O=0;O<y.length;O++)h=y[O],Object.prototype.hasOwnProperty.call(m,h)&&(a[h]=m[h])}}function S(a){var f=1;a=a.split(":");const h=[];for(;0<f&&a.length;)h.push(a.shift()),f--;return a.length&&h.push(a.join(":")),h}function C(a){l.setTimeout(()=>{throw a},0)}function _(){var a=ot;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class pe{constructor(){this.h=this.g=null}add(f,h){const m=Ne.get();m.set(f,h),this.h?this.h.next=m:this.g=m,this.h=m}}var Ne=new N(()=>new Ie,a=>a.reset());class Ie{constructor(){this.next=this.g=this.h=null}set(f,h){this.h=f,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,ae=!1,ot=new pe,at=()=>{const a=l.Promise.resolve(void 0);ce=()=>{a.then(Ze)}};var Ze=()=>{for(var a;a=_();){try{a.h.call(a.g)}catch(h){C(h)}var f=Ne;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}ae=!1};function Oe(){this.s=this.s,this.C=this.C}Oe.prototype.s=!1,Oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ze(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var rn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};l.addEventListener("test",h,f),l.removeEventListener("test",h,f)}catch{}return a}();function on(a,f){if(ze.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(X){e:{try{D(f.nodeName);var R=!0;break e}catch{}R=!1}R||(f=null)}}else h=="mouseover"?f=a.fromElement:h=="mouseout"&&(f=a.toElement);this.relatedTarget=f,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:sn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&on.aa.h.call(this)}}k(on,ze);var sn={2:"touch",3:"pen",4:"mouse"};on.prototype.h=function(){on.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Gt="closure_listenable_"+(1e6*Math.random()|0),_r=0;function Gr(a,f,h,m,R){this.listener=a,this.proxy=null,this.src=f,this.type=h,this.capture=!!m,this.ha=R,this.key=++_r,this.da=this.fa=!1}function jt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function wr(a){this.src=a,this.g={},this.h=0}wr.prototype.add=function(a,f,h,m,R){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var W=I(a,f,m,R);return-1<W?(f=a[W],h||(f.fa=!1)):(f=new Gr(f,this.src,O,!!m,R),f.fa=h,a.push(f)),f};function T(a,f){var h=f.type;if(h in a.g){var m=a.g[h],R=Array.prototype.indexOf.call(m,f,void 0),O;(O=0<=R)&&Array.prototype.splice.call(m,R,1),O&&(jt(f),a.g[h].length==0&&(delete a.g[h],a.h--))}}function I(a,f,h,m){for(var R=0;R<a.length;++R){var O=a[R];if(!O.da&&O.listener==f&&O.capture==!!h&&O.ha==m)return R}return-1}var M="closure_lm_"+(1e6*Math.random()|0),$={};function B(a,f,h,m,R){if(Array.isArray(f)){for(var O=0;O<f.length;O++)B(a,f[O],h,m,R);return null}return h=se(h),a&&a[Gt]?a.K(f,h,d(m)?!!m.capture:!1,R):F(a,f,h,!1,m,R)}function F(a,f,h,m,R,O){if(!f)throw Error("Invalid event type");var W=d(R)?!!R.capture:!!R,Me=Y(a);if(Me||(a[M]=Me=new wr(a)),h=Me.add(f,h,m,W,O),h.proxy)return h;if(m=q(),h.proxy=m,m.src=a,m.listener=h,a.addEventListener)rn||(R=W),R===void 0&&(R=!1),a.addEventListener(f.toString(),m,R);else if(a.attachEvent)a.attachEvent(U(f.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function q(){function a(h){return f.call(a.src,a.listener,h)}const f=te;return a}function H(a,f,h,m,R){if(Array.isArray(f))for(var O=0;O<f.length;O++)H(a,f[O],h,m,R);else m=d(m)?!!m.capture:!!m,h=se(h),a&&a[Gt]?(a=a.i,f=String(f).toString(),f in a.g&&(O=a.g[f],h=I(O,h,m,R),-1<h&&(jt(O[h]),Array.prototype.splice.call(O,h,1),O.length==0&&(delete a.g[f],a.h--)))):a&&(a=Y(a))&&(f=a.g[f.toString()],a=-1,f&&(a=I(f,h,m,R)),(h=-1<a?f[a]:null)&&z(h))}function z(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[Gt])T(f.i,a);else{var h=a.type,m=a.proxy;f.removeEventListener?f.removeEventListener(h,m,a.capture):f.detachEvent?f.detachEvent(U(h),m):f.addListener&&f.removeListener&&f.removeListener(m),(h=Y(f))?(T(h,a),h.h==0&&(h.src=null,f[M]=null)):jt(a)}}}function U(a){return a in $?$[a]:$[a]="on"+a}function te(a,f){if(a.da)a=!0;else{f=new on(f,this);var h=a.listener,m=a.ha||a.src;a.fa&&z(a),a=h.call(m,f)}return a}function Y(a){return a=a[M],a instanceof wr?a:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(a){return typeof a=="function"?a:(a[Z]||(a[Z]=function(f){return a.handleEvent(f)}),a[Z])}function ne(){Oe.call(this),this.i=new wr(this),this.M=this,this.F=null}k(ne,Oe),ne.prototype[Gt]=!0,ne.prototype.removeEventListener=function(a,f,h,m){H(this,a,f,h,m)};function fe(a,f){var h,m=a.F;if(m)for(h=[];m;m=m.F)h.push(m);if(a=a.M,m=f.type||f,typeof f=="string")f=new ze(f,a);else if(f instanceof ze)f.target=f.target||a;else{var R=f;f=new ze(m,a),w(f,R)}if(R=!0,h)for(var O=h.length-1;0<=O;O--){var W=f.g=h[O];R=ve(W,m,!0,f)&&R}if(W=f.g=a,R=ve(W,m,!0,f)&&R,R=ve(W,m,!1,f)&&R,h)for(O=0;O<h.length;O++)W=f.g=h[O],R=ve(W,m,!1,f)&&R}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var h=a.g[f],m=0;m<h.length;m++)jt(h[m]);delete a.g[f],a.h--}}this.F=null},ne.prototype.K=function(a,f,h,m){return this.i.add(String(a),f,!1,h,m)},ne.prototype.L=function(a,f,h,m){return this.i.add(String(a),f,!0,h,m)};function ve(a,f,h,m){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var R=!0,O=0;O<f.length;++O){var W=f[O];if(W&&!W.da&&W.capture==h){var Me=W.listener,ut=W.ha||W.src;W.fa&&T(a.i,W),R=Me.call(ut,m)!==!1&&R}}return R&&!m.defaultPrevented}function pt(a,f,h){if(typeof a=="function")h&&(a=g(a,h));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:l.setTimeout(a,f||0)}function lt(a){a.g=pt(()=>{a.g=null,a.i&&(a.i=!1,lt(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class zt extends Oe{constructor(f,h){super(),this.m=f,this.l=h,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:lt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gt(a){Oe.call(this),this.h=a,this.g={}}k(gt,Oe);var jn=[];function Lo(a){Q(a.g,function(f,h){this.g.hasOwnProperty(h)&&z(f)},a),a.g={}}gt.prototype.N=function(){gt.aa.N.call(this),Lo(this)},gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ct=l.JSON.stringify,Ht=l.JSON.parse,rs=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ya(){}Ya.prototype.h=null;function $u(a){return a.h||(a.h=a.i())}function Fu(){}var $o={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qa(){ze.call(this,"d")}k(Qa,ze);function Xa(){ze.call(this,"c")}k(Xa,ze);var kr={},Uu=null;function os(){return Uu=Uu||new ne}kr.La="serverreachability";function ju(a){ze.call(this,kr.La,a)}k(ju,ze);function Fo(a){const f=os();fe(f,new ju(f))}kr.STAT_EVENT="statevent";function zu(a,f){ze.call(this,kr.STAT_EVENT,a),this.stat=f}k(zu,ze);function Et(a){const f=os();fe(f,new zu(f,a))}kr.Ma="timingevent";function Hu(a,f){ze.call(this,kr.Ma,a),this.size=f}k(Hu,ze);function Uo(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},f)}function jo(){this.g=!0}jo.prototype.xa=function(){this.g=!1};function Lb(a,f,h,m,R,O){a.info(function(){if(a.g)if(O)for(var W="",Me=O.split("&"),ut=0;ut<Me.length;ut++){var Ee=Me[ut].split("=");if(1<Ee.length){var mt=Ee[0];Ee=Ee[1];var bt=mt.split("_");W=2<=bt.length&&bt[1]=="type"?W+(mt+"="+Ee+"&"):W+(mt+"=redacted&")}}else W=null;else W=O;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+f+`
`+h+`
`+W})}function $b(a,f,h,m,R,O,W){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+f+`
`+h+`
`+O+" "+W})}function Yr(a,f,h,m){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+Ub(a,h)+(m?" "+m:"")})}function Fb(a,f){a.info(function(){return"TIMEOUT: "+f})}jo.prototype.info=function(){};function Ub(a,f){if(!a.g)return f;if(!f)return null;try{var h=JSON.parse(f);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var m=h[a];if(!(2>m.length)){var R=m[1];if(Array.isArray(R)&&!(1>R.length)){var O=R[0];if(O!="noop"&&O!="stop"&&O!="close")for(var W=1;W<R.length;W++)R[W]=""}}}}return ct(h)}catch{return f}}var is={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ja;function ss(){}k(ss,Ya),ss.prototype.g=function(){return new XMLHttpRequest},ss.prototype.i=function(){return{}},Ja=new ss;function zn(a,f,h,m){this.j=a,this.i=f,this.l=h,this.R=m||1,this.U=new gt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ku}function Ku(){this.i=null,this.g="",this.h=!1}var qu={},Za={};function el(a,f,h){a.L=1,a.v=us(wn(f)),a.m=h,a.P=!0,Gu(a,null)}function Gu(a,f){a.F=Date.now(),as(a),a.A=wn(a.v);var h=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),ld(h.i,"t",m),a.C=0,h=a.j.J,a.h=new Ku,a.g=Ed(a.j,h?f:null,!a.m),0<a.O&&(a.M=new zt(g(a.Y,a,a.g),a.O)),f=a.U,h=a.g,m=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(jn[0]=R.toString()),R=jn);for(var O=0;O<R.length;O++){var W=B(h,R[O],m||f.handleEvent,!1,f.h||f);if(!W)break;f.g[W.key]=W}f=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),Fo(),Lb(a.i,a.u,a.A,a.l,a.R,a.m)}zn.prototype.ca=function(a){a=a.target;const f=this.M;f&&kn(a)==3?f.j():this.Y(a)},zn.prototype.Y=function(a){try{if(a==this.g)e:{const bt=kn(this.g);var f=this.g.Ba();const Jr=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||gd(this.g)))){this.J||bt!=4||f==7||(f==8||0>=Jr?Fo(3):Fo(2)),tl(this);var h=this.g.Z();this.X=h;t:if(Yu(this)){var m=gd(this.g);a="";var R=m.length,O=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cr(this),zo(this);var W="";break t}this.h.i=new l.TextDecoder}for(f=0;f<R;f++)this.h.h=!0,a+=this.h.i.decode(m[f],{stream:!(O&&f==R-1)});m.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=h==200,$b(this.i,this.u,this.A,this.l,this.R,bt,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,ut=this.g;if((Me=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(Me)){var Ee=Me;break t}}Ee=null}if(h=Ee)Yr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nl(this,h);else{this.o=!1,this.s=3,Et(12),Cr(this),zo(this);break e}}if(this.P){h=!0;let Yt;for(;!this.J&&this.C<W.length;)if(Yt=jb(this,W),Yt==Za){bt==4&&(this.s=4,Et(14),h=!1),Yr(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==qu){this.s=4,Et(15),Yr(this.i,this.l,W,"[Invalid Chunk]"),h=!1;break}else Yr(this.i,this.l,Yt,null),nl(this,Yt);if(Yu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||W.length!=0||this.h.h||(this.s=1,Et(16),h=!1),this.o=this.o&&h,!h)Yr(this.i,this.l,W,"[Invalid Chunked Response]"),Cr(this),zo(this);else if(0<W.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),ll(mt),mt.M=!0,Et(11))}}else Yr(this.i,this.l,W,null),nl(this,W);bt==4&&Cr(this),this.o&&!this.J&&(bt==4?kd(this.j,this):(this.o=!1,as(this)))}else iy(this.g),h==400&&0<W.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),Cr(this),zo(this)}}}catch{}finally{}};function Yu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function jb(a,f){var h=a.C,m=f.indexOf(`
`,h);return m==-1?Za:(h=Number(f.substring(h,m)),isNaN(h)?qu:(m+=1,m+h>f.length?Za:(f=f.slice(m,m+h),a.C=m+h,f)))}zn.prototype.cancel=function(){this.J=!0,Cr(this)};function as(a){a.S=Date.now()+a.I,Qu(a,a.I)}function Qu(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Uo(g(a.ba,a),f)}function tl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}zn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Fb(this.i,this.A),this.L!=2&&(Fo(),Et(17)),Cr(this),this.s=2,zo(this)):Qu(this,this.S-a)};function zo(a){a.j.G==0||a.J||kd(a.j,a)}function Cr(a){tl(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,Lo(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function nl(a,f){try{var h=a.j;if(h.G!=0&&(h.g==a||rl(h.h,a))){if(!a.K&&rl(h.h,a)&&h.G==3){try{var m=h.Da.g.parse(f)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)ms(h),ps(h);else break e;al(h),Et(18)}}else h.za=R[1],0<h.za-h.T&&37500>R[2]&&h.F&&h.v==0&&!h.C&&(h.C=Uo(g(h.Za,h),6e3));if(1>=Zu(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Sr(h,11)}else if((a.K||h.g==a)&&ms(h),!L(f))for(R=h.Da.g.parse(f),f=0;f<R.length;f++){let Ee=R[f];if(h.T=Ee[0],Ee=Ee[1],h.G==2)if(Ee[0]=="c"){h.K=Ee[1],h.ia=Ee[2];const mt=Ee[3];mt!=null&&(h.la=mt,h.j.info("VER="+h.la));const bt=Ee[4];bt!=null&&(h.Aa=bt,h.j.info("SVER="+h.Aa));const Jr=Ee[5];Jr!=null&&typeof Jr=="number"&&0<Jr&&(m=1.5*Jr,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const Yt=a.g;if(Yt){const ys=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ys){var O=m.h;O.g||ys.indexOf("spdy")==-1&&ys.indexOf("quic")==-1&&ys.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(ol(O,O.h),O.h=null))}if(m.D){const cl=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;cl&&(m.ya=cl,Ue(m.I,m.D,cl))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var W=a;if(m.qa=Sd(m,m.J?m.ia:null,m.W),W.K){ed(m.h,W);var Me=W,ut=m.L;ut&&(Me.I=ut),Me.B&&(tl(Me),as(Me)),m.g=W}else _d(m);0<h.i.length&&gs(h)}else Ee[0]!="stop"&&Ee[0]!="close"||Sr(h,7);else h.G==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?Sr(h,7):sl(h):Ee[0]!="noop"&&h.l&&h.l.ta(Ee),h.v=0)}}Fo(4)}catch{}}var zb=class{constructor(a,f){this.g=a,this.map=f}};function Xu(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ju(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Zu(a){return a.h?1:a.g?a.g.size:0}function rl(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function ol(a,f){a.g?a.g.add(f):a.h=f}function ed(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Xu.prototype.cancel=function(){if(this.i=td(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function td(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const h of a.g.values())f=f.concat(h.D);return f}return A(a.i)}function Hb(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var f=[],h=a.length,m=0;m<h;m++)f.push(a[m]);return f}f=[],h=0;for(m in a)f[h++]=a[m];return f}function Wb(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var f=[];a=a.length;for(var h=0;h<a;h++)f.push(h);return f}f=[],h=0;for(const m in a)f[h++]=m;return f}}}function nd(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var h=Wb(a),m=Hb(a),R=m.length,O=0;O<R;O++)f.call(void 0,m[O],h&&h[O],a)}var rd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kb(a,f){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var m=a[h].indexOf("="),R=null;if(0<=m){var O=a[h].substring(0,m);R=a[h].substring(m+1)}else O=a[h];f(O,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Tr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Tr){this.h=a.h,ls(this,a.j),this.o=a.o,this.g=a.g,cs(this,a.s),this.l=a.l;var f=a.i,h=new Ko;h.i=f.i,f.g&&(h.g=new Map(f.g),h.h=f.h),od(this,h),this.m=a.m}else a&&(f=String(a).match(rd))?(this.h=!1,ls(this,f[1]||"",!0),this.o=Ho(f[2]||""),this.g=Ho(f[3]||"",!0),cs(this,f[4]),this.l=Ho(f[5]||"",!0),od(this,f[6]||"",!0),this.m=Ho(f[7]||"")):(this.h=!1,this.i=new Ko(null,this.h))}Tr.prototype.toString=function(){var a=[],f=this.j;f&&a.push(Wo(f,id,!0),":");var h=this.g;return(h||f=="file")&&(a.push("//"),(f=this.o)&&a.push(Wo(f,id,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(Wo(h,h.charAt(0)=="/"?Yb:Gb,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",Wo(h,Xb)),a.join("")};function wn(a){return new Tr(a)}function ls(a,f,h){a.j=h?Ho(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function cs(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function od(a,f,h){f instanceof Ko?(a.i=f,Jb(a.i,a.h)):(h||(f=Wo(f,Qb)),a.i=new Ko(f,a.h))}function Ue(a,f,h){a.i.set(f,h)}function us(a){return Ue(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ho(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Wo(a,f,h){return typeof a=="string"?(a=encodeURI(a).replace(f,qb),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function qb(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var id=/[#\/\?@]/g,Gb=/[#\?:]/g,Yb=/[#\?]/g,Qb=/[#\?@]/g,Xb=/#/g;function Ko(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function Hn(a){a.g||(a.g=new Map,a.h=0,a.i&&Kb(a.i,function(f,h){a.add(decodeURIComponent(f.replace(/\+/g," ")),h)}))}n=Ko.prototype,n.add=function(a,f){Hn(this),this.i=null,a=Qr(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(f),this.h+=1,this};function sd(a,f){Hn(a),f=Qr(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function ad(a,f){return Hn(a),f=Qr(a,f),a.g.has(f)}n.forEach=function(a,f){Hn(this),this.g.forEach(function(h,m){h.forEach(function(R){a.call(f,R,m,this)},this)},this)},n.na=function(){Hn(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),h=[];for(let m=0;m<f.length;m++){const R=a[m];for(let O=0;O<R.length;O++)h.push(f[m])}return h},n.V=function(a){Hn(this);let f=[];if(typeof a=="string")ad(this,a)&&(f=f.concat(this.g.get(Qr(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)f=f.concat(a[h])}return f},n.set=function(a,f){return Hn(this),this.i=null,a=Qr(this,a),ad(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},n.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function ld(a,f,h){sd(a,f),0<h.length&&(a.i=null,a.g.set(Qr(a,f),A(h)),a.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var h=0;h<f.length;h++){var m=f[h];const O=encodeURIComponent(String(m)),W=this.V(m);for(m=0;m<W.length;m++){var R=O;W[m]!==""&&(R+="="+encodeURIComponent(String(W[m]))),a.push(R)}}return this.i=a.join("&")};function Qr(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function Jb(a,f){f&&!a.j&&(Hn(a),a.i=null,a.g.forEach(function(h,m){var R=m.toLowerCase();m!=R&&(sd(this,m),ld(this,R,h))},a)),a.j=f}function Zb(a,f){const h=new jo;if(l.Image){const m=new Image;m.onload=b(Wn,h,"TestLoadImage: loaded",!0,f,m),m.onerror=b(Wn,h,"TestLoadImage: error",!1,f,m),m.onabort=b(Wn,h,"TestLoadImage: abort",!1,f,m),m.ontimeout=b(Wn,h,"TestLoadImage: timeout",!1,f,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else f(!1)}function ey(a,f){const h=new jo,m=new AbortController,R=setTimeout(()=>{m.abort(),Wn(h,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:m.signal}).then(O=>{clearTimeout(R),O.ok?Wn(h,"TestPingServer: ok",!0,f):Wn(h,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(R),Wn(h,"TestPingServer: error",!1,f)})}function Wn(a,f,h,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(h)}catch{}}function ty(){this.g=new rs}function ny(a,f,h){const m=h||"";try{nd(a,function(R,O){let W=R;d(R)&&(W=ct(R)),f.push(m+O+"="+encodeURIComponent(W))})}catch(R){throw f.push(m+"type="+encodeURIComponent("_badmap")),R}}function ds(a){this.l=a.Ub||null,this.j=a.eb||!1}k(ds,Ya),ds.prototype.g=function(){return new fs(this.l,this.j)},ds.prototype.i=function(a){return function(){return a}}({});function fs(a,f){ne.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(fs,ne),n=fs.prototype,n.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,Go(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||l).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qo(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Go(this)),this.g&&(this.readyState=3,Go(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function cd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?qo(this):Go(this),this.readyState==3&&cd(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,qo(this))},n.Qa=function(a){this.g&&(this.response=a,qo(this))},n.ga=function(){this.g&&qo(this)};function qo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Go(a)}n.setRequestHeader=function(a,f){this.u.append(a,f)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var h=f.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=f.next();return a.join(`\r
`)};function Go(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(fs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ud(a){let f="";return Q(a,function(h,m){f+=m,f+=":",f+=h,f+=`\r
`}),f}function il(a,f,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=ud(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):Ue(a,f,h))}function Ge(a){ne.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Ge,ne);var ry=/^https?$/i,oy=["POST","PUT"];n=Ge.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,f,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ja.g(),this.v=this.o?$u(this.o):$u(Ja),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(O){dd(this,O);return}if(a=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)h.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())h.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(O=>O.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(oy,f,void 0))||m||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,W]of h)this.g.setRequestHeader(O,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{pd(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){dd(this,O)}};function dd(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,fd(a),hs(a)}function fd(a){a.A||(a.A=!0,fe(a,"complete"),fe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,fe(this,"complete"),fe(this,"abort"),hs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hs(this,!0)),Ge.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?hd(this):this.bb())},n.bb=function(){hd(this)};function hd(a){if(a.h&&typeof s<"u"&&(!a.v[1]||kn(a)!=4||a.Z()!=2)){if(a.u&&kn(a)==4)pt(a.Ea,0,a);else if(fe(a,"readystatechange"),kn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var h;if(!(h=f)){var m;if(m=W===0){var R=String(a.D).match(rd)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),m=!ry.test(R?R.toLowerCase():"")}h=m}if(h)fe(a,"complete"),fe(a,"success");else{a.m=6;try{var O=2<kn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",fd(a)}}finally{hs(a)}}}}function hs(a,f){if(a.g){pd(a);const h=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||fe(a,"ready");try{h.onreadystatechange=m}catch{}}}function pd(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function kn(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),Ht(f)}};function gd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function iy(a){const f={};a=(a.g&&2<=kn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(L(a[m]))continue;var h=S(a[m]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const O=f[R]||[];f[R]=O,O.push(h)}E(f,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yo(a,f,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||f}function md(a){this.Aa=0,this.i=[],this.j=new jo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yo("baseRetryDelayMs",5e3,a),this.cb=Yo("retryDelaySeedMs",1e4,a),this.Wa=Yo("forwardChannelMaxRetries",2,a),this.wa=Yo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Xu(a&&a.concurrentRequestLimit),this.Da=new ty,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=md.prototype,n.la=8,n.G=1,n.connect=function(a,f,h,m){Et(0),this.W=a,this.H=f||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=Sd(this,null,this.W),gs(this)};function sl(a){if(bd(a),a.G==3){var f=a.U++,h=wn(a.I);if(Ue(h,"SID",a.K),Ue(h,"RID",f),Ue(h,"TYPE","terminate"),Qo(a,h),f=new zn(a,a.j,f),f.L=2,f.v=us(wn(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(f.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=f.v,h=!0),h||(f.g=Ed(f.j,null),f.g.ea(f.v)),f.F=Date.now(),as(f)}Td(a)}function ps(a){a.g&&(ll(a),a.g.cancel(),a.g=null)}function bd(a){ps(a),a.u&&(l.clearTimeout(a.u),a.u=null),ms(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function gs(a){if(!Ju(a.h)&&!a.s){a.s=!0;var f=a.Ga;ce||at(),ae||(ce(),ae=!0),ot.add(f,a),a.B=0}}function sy(a,f){return Zu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Uo(g(a.Ga,a,f),Cd(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new zn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=v(O),w(O,this.S)):O=this.S),this.m!==null||this.O||(R.H=O,O=null),this.P)e:{for(var f=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(f+=m,4096<f){f=h;break e}if(f===4096||h===this.i.length-1){f=h+1;break e}}f=1e3}else f=1e3;f=vd(this,R,f),h=wn(this.I),Ue(h,"RID",a),Ue(h,"CVER",22),this.D&&Ue(h,"X-HTTP-Session-Id",this.D),Qo(this,h),O&&(this.O?f="headers="+encodeURIComponent(String(ud(O)))+"&"+f:this.m&&il(h,this.m,O)),ol(this.h,R),this.Ua&&Ue(h,"TYPE","init"),this.P?(Ue(h,"$req",f),Ue(h,"SID","null"),R.T=!0,el(R,h,null)):el(R,h,f),this.G=2}}else this.G==3&&(a?yd(this,a):this.i.length==0||Ju(this.h)||yd(this))};function yd(a,f){var h;f?h=f.l:h=a.U++;const m=wn(a.I);Ue(m,"SID",a.K),Ue(m,"RID",h),Ue(m,"AID",a.T),Qo(a,m),a.m&&a.o&&il(m,a.m,a.o),h=new zn(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),f&&(a.i=f.D.concat(a.i)),f=vd(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ol(a.h,h),el(h,m,f)}function Qo(a,f){a.H&&Q(a.H,function(h,m){Ue(f,m,h)}),a.l&&nd({},function(h,m){Ue(f,m,h)})}function vd(a,f,h){h=Math.min(a.i.length,h);var m=a.l?g(a.l.Na,a.l,a):null;e:{var R=a.i;let O=-1;for(;;){const W=["count="+h];O==-1?0<h?(O=R[0].g,W.push("ofs="+O)):O=0:W.push("ofs="+O);let Me=!0;for(let ut=0;ut<h;ut++){let Ee=R[ut].g;const mt=R[ut].map;if(Ee-=O,0>Ee)O=Math.max(0,R[ut].g-100),Me=!1;else try{ny(mt,W,"req"+Ee+"_")}catch{m&&m(mt)}}if(Me){m=W.join("&");break e}}}return a=a.i.splice(0,h),f.D=a,m}function _d(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;ce||at(),ae||(ce(),ae=!0),ot.add(f,a),a.v=0}}function al(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Uo(g(a.Fa,a),Cd(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,wd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Uo(g(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),ps(this),wd(this))};function ll(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function wd(a){a.g=new zn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=wn(a.qa);Ue(f,"RID","rpc"),Ue(f,"SID",a.K),Ue(f,"AID",a.T),Ue(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ue(f,"TO",a.ja),Ue(f,"TYPE","xmlhttp"),Qo(a,f),a.m&&a.o&&il(f,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=us(wn(f)),h.m=null,h.P=!0,Gu(h,a)}n.Za=function(){this.C!=null&&(this.C=null,ps(this),al(this),Et(19))};function ms(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function kd(a,f){var h=null;if(a.g==f){ms(a),ll(a),a.g=null;var m=2}else if(rl(a.h,f))h=f.D,ed(a.h,f),m=1;else return;if(a.G!=0){if(f.o)if(m==1){h=f.m?f.m.length:0,f=Date.now()-f.F;var R=a.B;m=os(),fe(m,new Hu(m,h)),gs(a)}else _d(a);else if(R=f.s,R==3||R==0&&0<f.X||!(m==1&&sy(a,f)||m==2&&al(a)))switch(h&&0<h.length&&(f=a.h,f.i=f.i.concat(h)),R){case 1:Sr(a,5);break;case 4:Sr(a,10);break;case 3:Sr(a,6);break;default:Sr(a,2)}}}function Cd(a,f){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*f}function Sr(a,f){if(a.j.info("Error code "+f),f==2){var h=g(a.fb,a),m=a.Xa;const R=!m;m=new Tr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ls(m,"https"),us(m),R?Zb(m.toString(),h):ey(m.toString(),h)}else Et(2);a.G=0,a.l&&a.l.sa(f),Td(a),bd(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Td(a){if(a.G=0,a.ka=[],a.l){const f=td(a.h);(f.length!=0||a.i.length!=0)&&(P(a.ka,f),P(a.ka,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.ra()}}function Sd(a,f,h){var m=h instanceof Tr?wn(h):new Tr(h);if(m.g!="")f&&(m.g=f+"."+m.g),cs(m,m.s);else{var R=l.location;m=R.protocol,f=f?f+"."+R.hostname:R.hostname,R=+R.port;var O=new Tr(null);m&&ls(O,m),f&&(O.g=f),R&&cs(O,R),h&&(O.l=h),m=O}return h=a.D,f=a.ya,h&&f&&Ue(m,h,f),Ue(m,"VER",a.la),Qo(a,m),m}function Ed(a,f,h){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new Ge(new ds({eb:h})):new Ge(a.pa),f.Ha(a.J),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Id(){}n=Id.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function bs(){}bs.prototype.g=function(a,f){return new Bt(a,f)};function Bt(a,f){ne.call(this),this.g=new md(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!L(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!L(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new Xr(this)}k(Bt,ne),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){sl(this.g)},Bt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=ct(a),a=h);f.i.push(new zb(f.Ya++,a)),f.G==3&&gs(f)},Bt.prototype.N=function(){this.g.l=null,delete this.j,sl(this.g),delete this.g,Bt.aa.N.call(this)};function Ad(a){Qa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const h in f){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}k(Ad,Qa);function Rd(){Xa.call(this),this.status=1}k(Rd,Xa);function Xr(a){this.g=a}k(Xr,Id),Xr.prototype.ua=function(){fe(this.g,"a")},Xr.prototype.ta=function(a){fe(this.g,new Ad(a))},Xr.prototype.sa=function(a){fe(this.g,new Rd)},Xr.prototype.ra=function(){fe(this.g,"b")},bs.prototype.createWebChannel=bs.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,Lg=function(){return new bs},Bg=function(){return os()},Ng=kr,ac={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},is.NO_ERROR=0,is.TIMEOUT=8,is.HTTP_ERROR=6,Bs=is,Wu.COMPLETE="complete",Vg=Wu,Fu.EventType=$o,$o.OPEN="a",$o.CLOSE="b",$o.ERROR="c",$o.MESSAGE="d",ne.prototype.listen=ne.prototype.K,ri=Fu,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,Mg=Ge}).apply(typeof Ts<"u"?Ts:typeof self<"u"?self:typeof window<"u"?window:{});const xf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new Jc("@firebase/firestore");function ro(){return zr.logLevel}function J(n,...e){if(zr.logLevel<=ye.DEBUG){const t=e.map(tu);zr.debug(`Firestore (${Oo}): ${n}`,...t)}}function Nn(n,...e){if(zr.logLevel<=ye.ERROR){const t=e.map(tu);zr.error(`Firestore (${Oo}): ${n}`,...t)}}function So(n,...e){if(zr.logLevel<=ye.WARN){const t=e.map(tu);zr.warn(`Firestore (${Oo}): ${n}`,...t)}}function tu(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(n="Unexpected state"){const e=`FIRESTORE (${Oo}) INTERNAL ASSERTION FAILED: `+n;throw Nn(e),new Error(e)}function Ke(n,e){n||he()}function ke(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Un{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(_t.UNAUTHENTICATED))}shutdown(){}}class pw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class gw{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ke(this.o===void 0);let r=this.i;const o=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Lr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Lr,e.enqueueRetryable(()=>o(this.currentUser))};const s=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await o(this.currentUser)})},l=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Lr)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ke(typeof r.accessToken=="string"),new $g(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string"),new _t(e)}}class mw{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class bw{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new mw(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ke(this.o===void 0);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const s=i.token!==this.R;return this.R=i.token,J("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const o=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>o(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?o(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ke(typeof t.token=="string"),this.R=t.token,new yw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const o=_w(40);for(let i=0;i<o.length;++i)r.length<20&&o[i]<t&&(r+=e.charAt(o[i]%e.length))}return r}}function we(n,e){return n<e?-1:n>e?1:0}function Eo(n,e,t){return n.length===e.length&&n.every((r,o)=>t(r,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{static now(){return Vt.fromMillis(Date.now())}static fromDate(e){return Vt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Vt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new re(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new re(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new re(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Vt(0,0))}static max(){return new ue(new Vt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t,r){t===void 0?t=0:t>e.length&&he(),r===void 0?r=e.length-t:r>e.length-t&&he(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return un.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof un?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let o=0;o<r;o++){const i=un.compareSegments(e.get(o),t.get(o));if(i!==0)return i}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=un.isNumericId(e),o=un.isNumericId(t);return r&&!o?-1:!r&&o?1:r&&o?un.extractNumericId(e).compare(un.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dr.fromString(e.substring(4,e.length-2))}}class Ye extends un{construct(e,t,r){return new Ye(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(G.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(o=>o.length>0))}return new Ye(t)}static emptyPath(){return new Ye([])}}const ww=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends un{construct(e,t,r){return new Pt(e,t,r)}static isValidIdentifier(e){return ww.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pt(["__name__"])}static fromServerFormat(e){const t=[];let r="",o=0;const i=()=>{if(r.length===0)throw new re(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let s=!1;for(;o<e.length;){const l=e[o];if(l==="\\"){if(o+1===e.length)throw new re(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[o+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new re(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,o+=2}else l==="`"?(s=!s,o++):l!=="."||s?(r+=l,o++):(i(),o++)}if(i(),s)throw new re(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(t)}static emptyPath(){return new Pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(Ye.fromString(e))}static fromName(e){return new ie(Ye.fromString(e).popFirst(5))}static empty(){return new ie(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new Ye(e.slice()))}}function kw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,o=ue.fromTimestamp(r===1e9?new Vt(t+1,0):new Vt(t,r));return new hr(o,ie.empty(),e)}function Cw(n){return new hr(n.readTime,n.key,-1)}class hr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new hr(ue.min(),ie.empty(),-1)}static max(){return new hr(ue.max(),ie.empty(),-1)}}function Tw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ie.comparator(n.documentKey,e.documentKey),t!==0?t:we(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ew{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ma(n){if(n.code!==G.FAILED_PRECONDITION||n.message!==Sw)throw n;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,o)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,o)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let o=0,i=0,s=!1;e.forEach(l=>{++o,l.next(()=>{++i,s&&i===o&&t()},c=>r(c))}),s=!0,i===o&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(o=>o?V.resolve(o):r());return t}static forEach(e,t){const r=[];return e.forEach((o,i)=>{r.push(t.call(this,o,i))}),this.waitFor(r)}static mapArray(e,t){return new V((r,o)=>{const i=e.length,s=new Array(i);let l=0;for(let c=0;c<i;c++){const d=c;t(e[d]).next(u=>{s[d]=u,++l,l===i&&r(s)},u=>o(u))}})}static doWhile(e,t){return new V((r,o)=>{const i=()=>{e()===!0?t().next(()=>{i()},o):r()};i()})}}function Iw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Mo(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Va.oe=-1;function Na(n){return n==null}function lc(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Pf(e)),e=Rw(n.get(t),e);return Pf(e)}function Rw(n,e){let t=e;const r=n.length;for(let o=0;o<r;o++){const i=n.charAt(o);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Pf(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Yi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function xw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t){this.comparator=e,this.root=t||dt.EMPTY}insert(e,t){return new Je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return t+r.left.size;o<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ss(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ss(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ss(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ss(this.root,e,this.comparator,!0)}}class Ss{constructor(e,t,r,o){this.isReverse=o,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&o&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,t,r,o,i){this.key=e,this.value=t,this.color=r??dt.RED,this.left=o??dt.EMPTY,this.right=i??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,o,i){return new dt(e??this.key,t??this.value,r??this.color,o??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const i=r(e,o.key);return o=i<0?o.copy(null,null,null,o.left.insert(e,t,r),null):i===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return dt.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,t,r,o,i){return this}insert(e,t,r){return new dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Of(this.data.getIterator())}getIteratorFrom(e){return new Of(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,i=r.getNext().key;if(this.comparator(o,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new rt(this.comparator);return t.data=e,t}}class Of{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new ir([])}unionWith(e){let t=new rt(Pt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ir(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Eo(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ug("Invalid base64 string: "+i):i}}(e);return new ht(t)}static fromUint8Array(e){const t=function(o){let i="";for(let s=0;s<o.length;++s)i+=String.fromCharCode(o[s]);return i}(e);return new ht(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const Pw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(n){if(Ke(!!n),typeof n=="string"){let e=0;const t=Pw.exec(n);if(Ke(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(n.seconds),nanos:Qe(n.nanos)}}function Qe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function gr(n){return typeof n=="string"?ht.fromBase64String(n):ht.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ba(n){const e=n.mapValue.fields.__previous_value__;return nu(e)?Ba(e):e}function xi(n){const e=pr(n.mapValue.fields.__local_write_time__.timestampValue);return new Vt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,t,r,o,i,s,l,c,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=o,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=d}}class Pi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Pi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?nu(n)?4:Mw(n)?9007199254740991:Ow(n)?10:11:he()}function yn(n,e){if(n===e)return!0;const t=mr(n);if(t!==mr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return xi(n).isEqual(xi(e));case 3:return function(o,i){if(typeof o.timestampValue=="string"&&typeof i.timestampValue=="string"&&o.timestampValue.length===i.timestampValue.length)return o.timestampValue===i.timestampValue;const s=pr(o.timestampValue),l=pr(i.timestampValue);return s.seconds===l.seconds&&s.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,i){return gr(o.bytesValue).isEqual(gr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,i){return Qe(o.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(o.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(n,e);case 2:return function(o,i){if("integerValue"in o&&"integerValue"in i)return Qe(o.integerValue)===Qe(i.integerValue);if("doubleValue"in o&&"doubleValue"in i){const s=Qe(o.doubleValue),l=Qe(i.doubleValue);return s===l?lc(s)===lc(l):isNaN(s)&&isNaN(l)}return!1}(n,e);case 9:return Eo(n.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:case 11:return function(o,i){const s=o.mapValue.fields||{},l=i.mapValue.fields||{};if(Df(s)!==Df(l))return!1;for(const c in s)if(s.hasOwnProperty(c)&&(l[c]===void 0||!yn(s[c],l[c])))return!1;return!0}(n,e);default:return he()}}function Di(n,e){return(n.values||[]).find(t=>yn(t,e))!==void 0}function Io(n,e){if(n===e)return 0;const t=mr(n),r=mr(e);if(t!==r)return we(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return we(n.booleanValue,e.booleanValue);case 2:return function(i,s){const l=Qe(i.integerValue||i.doubleValue),c=Qe(s.integerValue||s.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return Mf(n.timestampValue,e.timestampValue);case 4:return Mf(xi(n),xi(e));case 5:return we(n.stringValue,e.stringValue);case 6:return function(i,s){const l=gr(i),c=gr(s);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,s){const l=i.split("/"),c=s.split("/");for(let d=0;d<l.length&&d<c.length;d++){const u=we(l[d],c[d]);if(u!==0)return u}return we(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,s){const l=we(Qe(i.latitude),Qe(s.latitude));return l!==0?l:we(Qe(i.longitude),Qe(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Vf(n.arrayValue,e.arrayValue);case 10:return function(i,s){var l,c,d,u;const p=i.fields||{},g=s.fields||{},b=(l=p.value)===null||l===void 0?void 0:l.arrayValue,k=(c=g.value)===null||c===void 0?void 0:c.arrayValue,A=we(((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0,((u=k==null?void 0:k.values)===null||u===void 0?void 0:u.length)||0);return A!==0?A:Vf(b,k)}(n.mapValue,e.mapValue);case 11:return function(i,s){if(i===Es.mapValue&&s===Es.mapValue)return 0;if(i===Es.mapValue)return 1;if(s===Es.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),d=s.fields||{},u=Object.keys(d);c.sort(),u.sort();for(let p=0;p<c.length&&p<u.length;++p){const g=we(c[p],u[p]);if(g!==0)return g;const b=Io(l[c[p]],d[u[p]]);if(b!==0)return b}return we(c.length,u.length)}(n.mapValue,e.mapValue);default:throw he()}}function Mf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return we(n,e);const t=pr(n),r=pr(e),o=we(t.seconds,r.seconds);return o!==0?o:we(t.nanos,r.nanos)}function Vf(n,e){const t=n.values||[],r=e.values||[];for(let o=0;o<t.length&&o<r.length;++o){const i=Io(t[o],r[o]);if(i)return i}return we(t.length,r.length)}function Ao(n){return cc(n)}function cc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=pr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return gr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ie.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",o=!0;for(const i of t.values||[])o?o=!1:r+=",",r+=cc(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let o="{",i=!0;for(const s of r)i?i=!1:o+=",",o+=`${s}:${cc(t.fields[s])}`;return o+"}"}(n.mapValue):he()}function Ls(n){switch(mr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ba(n);return e?16+Ls(e):16;case 5:return 2*n.stringValue.length;case 6:return gr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((o,i)=>o+Ls(i),0)}(n.arrayValue);case 10:case 11:return function(r){let o=0;return Yi(r.fields,(i,s)=>{o+=i.length+Ls(s)}),o}(n.mapValue);default:throw he()}}function uc(n){return!!n&&"integerValue"in n}function ru(n){return!!n&&"arrayValue"in n}function Nf(n){return!!n&&"nullValue"in n}function Bf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Al(n){return!!n&&"mapValue"in n}function Ow(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function pi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Yi(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=pi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=pi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Mw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.value=e}static empty(){return new hn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Al(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=pi(t)}setAll(e){let t=Pt.emptyPath(),r={},o=[];e.forEach((s,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,o),r={},o=[],t=l.popLast()}s?r[l.lastSegment()]=pi(s):o.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,o)}delete(e){const t=this.field(e.popLast());Al(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=t.mapValue.fields[e.get(r)];Al(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,r){Yi(t,(o,i)=>e[o]=i);for(const o of r)delete e[o]}clone(){return new hn(pi(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,t,r,o,i,s,l){this.key=e,this.documentType=t,this.version=r,this.readTime=o,this.createTime=i,this.data=s,this.documentState=l}static newInvalidDocument(e){return new Ct(e,0,ue.min(),ue.min(),ue.min(),hn.empty(),0)}static newFoundDocument(e,t,r,o){return new Ct(e,1,t,ue.min(),r,o,0)}static newNoDocument(e,t){return new Ct(e,2,t,ue.min(),ue.min(),hn.empty(),0)}static newUnknownDocument(e,t){return new Ct(e,3,t,ue.min(),ue.min(),hn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=hn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=hn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t){this.position=e,this.inclusive=t}}function Lf(n,e,t){let r=0;for(let o=0;o<n.position.length;o++){const i=e[o],s=n.position[o];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(s.referenceValue),t.key):r=Io(s,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $f(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!yn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t="asc"){this.field=e,this.dir=t}}function Vw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{}class nt extends jg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Bw(e,t,r):t==="array-contains"?new Fw(e,r):t==="in"?new Uw(e,r):t==="not-in"?new jw(e,r):t==="array-contains-any"?new zw(e,r):new nt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Lw(e,r):new $w(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Io(t,this.value)):t!==null&&mr(this.value)===mr(t)&&this.matchesComparison(Io(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vn extends jg{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new vn(e,t)}matches(e){return zg(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function zg(n){return n.op==="and"}function Hg(n){return Nw(n)&&zg(n)}function Nw(n){for(const e of n.filters)if(e instanceof vn)return!1;return!0}function dc(n){if(n instanceof nt)return n.field.canonicalString()+n.op.toString()+Ao(n.value);if(Hg(n))return n.filters.map(e=>dc(e)).join(",");{const e=n.filters.map(t=>dc(t)).join(",");return`${n.op}(${e})`}}function Wg(n,e){return n instanceof nt?function(r,o){return o instanceof nt&&r.op===o.op&&r.field.isEqual(o.field)&&yn(r.value,o.value)}(n,e):n instanceof vn?function(r,o){return o instanceof vn&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce((i,s,l)=>i&&Wg(s,o.filters[l]),!0):!1}(n,e):void he()}function Kg(n){return n instanceof nt?function(t){return`${t.field.canonicalString()} ${t.op} ${Ao(t.value)}`}(n):n instanceof vn?function(t){return t.op.toString()+" {"+t.getFilters().map(Kg).join(" ,")+"}"}(n):"Filter"}class Bw extends nt{constructor(e,t,r){super(e,t,r),this.key=ie.fromName(r.referenceValue)}matches(e){const t=ie.comparator(e.key,this.key);return this.matchesComparison(t)}}class Lw extends nt{constructor(e,t){super(e,"in",t),this.keys=qg("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class $w extends nt{constructor(e,t){super(e,"not-in",t),this.keys=qg("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function qg(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ie.fromName(r.referenceValue))}class Fw extends nt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ru(t)&&Di(t.arrayValue,this.value)}}class Uw extends nt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Di(this.value.arrayValue,t)}}class jw extends nt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Di(this.value.arrayValue,t)}}class zw extends nt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ru(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Di(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,t=null,r=[],o=[],i=null,s=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=o,this.limit=i,this.startAt=s,this.endAt=l,this.ue=null}}function Ff(n,e=null,t=[],r=[],o=null,i=null,s=null){return new Hw(n,e,t,r,o,i,s)}function ou(n){const e=ke(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>dc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Na(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ao(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ao(r)).join(",")),e.ue=t}return e.ue}function iu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Vw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Wg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$f(n.startAt,e.startAt)&&$f(n.endAt,e.endAt)}function fc(n){return ie.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t=null,r=[],o=[],i=null,s="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=o,this.limit=i,this.limitType=s,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ww(n,e,t,r,o,i,s,l){return new La(n,e,t,r,o,i,s,l)}function su(n){return new La(n)}function Uf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Kw(n){return n.collectionGroup!==null}function gi(n){const e=ke(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let l=new rt(Pt.comparator);return s.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ra(i,r))}),t.has(Pt.keyField().canonicalString())||e.ce.push(new ra(Pt.keyField(),r))}return e.ce}function gn(n){const e=ke(n);return e.le||(e.le=qw(e,gi(n))),e.le}function qw(n,e){if(n.limitType==="F")return Ff(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const i=o.dir==="desc"?"asc":"desc";return new ra(o.field,i)});const t=n.endAt?new na(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new na(n.startAt.position,n.startAt.inclusive):null;return Ff(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function hc(n,e,t){return new La(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function $a(n,e){return iu(gn(n),gn(e))&&n.limitType===e.limitType}function Gg(n){return`${ou(gn(n))}|lt:${n.limitType}`}function oo(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(o=>Kg(o)).join(", ")}]`),Na(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(o=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(o)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(o=>Ao(o)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(o=>Ao(o)).join(",")),`Target(${r})`}(gn(n))}; limitType=${n.limitType})`}function Fa(n,e){return e.isFoundDocument()&&function(r,o){const i=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,o){for(const i of gi(r))if(!i.field.isKeyField()&&o.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,o){for(const i of r.filters)if(!i.matches(o))return!1;return!0}(n,e)&&function(r,o){return!(r.startAt&&!function(s,l,c){const d=Lf(s,l,c);return s.inclusive?d<=0:d<0}(r.startAt,gi(r),o)||r.endAt&&!function(s,l,c){const d=Lf(s,l,c);return s.inclusive?d>=0:d>0}(r.endAt,gi(r),o))}(n,e)}function Gw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Yg(n){return(e,t)=>{let r=!1;for(const o of gi(n)){const i=Yw(o,e,t);if(i!==0)return i;r=r||o.field.isKeyField()}return 0}}function Yw(n,e,t){const r=n.field.isKeyField()?ie.comparator(e.key,t.key):function(i,s,l){const c=s.data.field(i),d=l.data.field(i);return c!==null&&d!==null?Io(c,d):he()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[o,i]of r)if(this.equalsFn(o,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<o.length;i++)if(this.equalsFn(o[i][0],e))return void(o[i]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[t]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Yi(this.inner,(t,r)=>{for(const[o,i]of r)e(o,i)})}isEmpty(){return xw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=new Je(ie.comparator);function br(){return Qw}const Qg=new Je(ie.comparator);function oi(...n){let e=Qg;for(const t of n)e=e.insert(t.key,t);return e}function Xw(n){let e=Qg;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Nr(){return mi()}function Xg(){return mi()}function mi(){return new Kr(n=>n.toString(),(n,e)=>n.isEqual(e))}const Jw=new rt(ie.comparator);function Se(...n){let e=Jw;for(const t of n)e=e.add(t);return e}const Zw=new rt(we);function ek(){return Zw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lc(e)?"-0":e}}function nk(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){this._=void 0}}function rk(n,e,t){return n instanceof pc?function(o,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return i&&nu(i)&&(i=Ba(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(t,e):n instanceof oa?Jg(n,e):n instanceof ia?Zg(n,e):function(o,i){const s=ik(o,i),l=jf(s)+jf(o.Pe);return uc(s)&&uc(o.Pe)?nk(l):tk(o.serializer,l)}(n,e)}function ok(n,e,t){return n instanceof oa?Jg(n,e):n instanceof ia?Zg(n,e):t}function ik(n,e){return n instanceof gc?function(r){return uc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class pc extends Ua{}class oa extends Ua{constructor(e){super(),this.elements=e}}function Jg(n,e){const t=em(e);for(const r of n.elements)t.some(o=>yn(o,r))||t.push(r);return{arrayValue:{values:t}}}class ia extends Ua{constructor(e){super(),this.elements=e}}function Zg(n,e){let t=em(e);for(const r of n.elements)t=t.filter(o=>!yn(o,r));return{arrayValue:{values:t}}}class gc extends Ua{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function jf(n){return Qe(n.integerValue||n.doubleValue)}function em(n){return ru(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function sk(n,e){return n.field.isEqual(e.field)&&function(r,o){return r instanceof oa&&o instanceof oa||r instanceof ia&&o instanceof ia?Eo(r.elements,o.elements,yn):r instanceof gc&&o instanceof gc?yn(r.Pe,o.Pe):r instanceof pc&&o instanceof pc}(n.transform,e.transform)}class $r{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $r}static exists(e){return new $r(void 0,e)}static updateTime(e){return new $r(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $s(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class au{}function tm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new lk(n.key,$r.none()):new lu(n.key,n.data,$r.none());{const t=n.data,r=hn.empty();let o=new rt(Pt.comparator);for(let i of e.fields)if(!o.has(i)){let s=t.field(i);s===null&&i.length>1&&(i=i.popLast(),s=t.field(i)),s===null?r.delete(i):r.set(i,s),o=o.add(i)}return new ja(n.key,r,new ir(o.toArray()),$r.none())}}function ak(n,e,t){n instanceof lu?function(o,i,s){const l=o.value.clone(),c=Hf(o.fieldTransforms,i,s.transformResults);l.setAll(c),i.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(n,e,t):n instanceof ja?function(o,i,s){if(!$s(o.precondition,i))return void i.convertToUnknownDocument(s.version);const l=Hf(o.fieldTransforms,i,s.transformResults),c=i.data;c.setAll(nm(o)),c.setAll(l),i.convertToFoundDocument(s.version,c).setHasCommittedMutations()}(n,e,t):function(o,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,t)}function bi(n,e,t,r){return n instanceof lu?function(i,s,l,c){if(!$s(i.precondition,s))return l;const d=i.value.clone(),u=Wf(i.fieldTransforms,c,s);return d.setAll(u),s.convertToFoundDocument(s.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof ja?function(i,s,l,c){if(!$s(i.precondition,s))return l;const d=Wf(i.fieldTransforms,c,s),u=s.data;return u.setAll(nm(i)),u.setAll(d),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,s,l){return $s(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):l}(n,e,t)}function zf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&Eo(r,o,(i,s)=>sk(i,s))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class lu extends au{constructor(e,t,r,o=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ja extends au{constructor(e,t,r,o,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=o,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nm(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Hf(n,e,t){const r=new Map;Ke(n.length===t.length);for(let o=0;o<t.length;o++){const i=n[o],s=i.transform,l=e.data.field(i.field);r.set(i.field,ok(s,l,t[o]))}return r}function Wf(n,e,t){const r=new Map;for(const o of n){const i=o.transform,s=t.data.field(o.field);r.set(o.field,rk(i,s,e))}return r}class lk extends au{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,t,r,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const i=this.mutations[o];i.key.isEqual(e.key)&&ak(i,e,r[o])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=bi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=bi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Xg();return this.mutations.forEach(o=>{const i=e.get(o.key),s=i.overlayedDocument;let l=this.applyToLocalView(s,i.mutatedFields);l=t.has(o.key)?null:l;const c=tm(s,l);c!==null&&r.set(o.key,c),s.isValidDocument()||s.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Se())}isEqual(e){return this.batchId===e.batchId&&Eo(this.mutations,e.mutations,(t,r)=>zf(t,r))&&Eo(this.baseMutations,e.baseMutations,(t,r)=>zf(t,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,_e;function rm(n){if(n===void 0)return Nn("GRPC error has no .code"),G.UNKNOWN;switch(n){case et.OK:return G.OK;case et.CANCELLED:return G.CANCELLED;case et.UNKNOWN:return G.UNKNOWN;case et.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case et.INTERNAL:return G.INTERNAL;case et.UNAVAILABLE:return G.UNAVAILABLE;case et.UNAUTHENTICATED:return G.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case et.NOT_FOUND:return G.NOT_FOUND;case et.ALREADY_EXISTS:return G.ALREADY_EXISTS;case et.PERMISSION_DENIED:return G.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case et.ABORTED:return G.ABORTED;case et.OUT_OF_RANGE:return G.OUT_OF_RANGE;case et.UNIMPLEMENTED:return G.UNIMPLEMENTED;case et.DATA_LOSS:return G.DATA_LOSS;default:return he()}}(_e=et||(et={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=new dr([4294967295,4294967295],0);function Kf(n){const e=fk().encode(n),t=new Og;return t.update(e),new Uint8Array(t.digest())}function qf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),o=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new dr([t,r],0),new dr([o,i],0)]}class cu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ii(`Invalid padding: ${t}`);if(r<0)throw new ii(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ii(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ii(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=dr.fromNumber(this.Te)}de(e,t,r){let o=e.add(t.multiply(dr.fromNumber(r)));return o.compare(hk)===1&&(o=new dr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Kf(e),[r,o]=qf(t);for(let i=0;i<this.hashCount;i++){const s=this.de(r,o,i);if(!this.Ee(s))return!1}return!0}static create(e,t,r){const o=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new cu(i,o,t);return r.forEach(l=>s.insert(l)),s}insert(e){if(this.Te===0)return;const t=Kf(e),[r,o]=qf(t);for(let i=0;i<this.hashCount;i++){const s=this.de(r,o,i);this.Ae(s)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ii extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,t,r,o,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const o=new Map;return o.set(e,Qi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new za(ue.min(),o,new Je(we),br(),Se())}}class Qi{constructor(e,t,r,o,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Qi(r,t,Se(),Se(),Se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t,r,o){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=o}}class om{constructor(e,t){this.targetId=e,this.me=t}}class im{constructor(e,t,r=ht.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=o}}class Gf{constructor(){this.fe=0,this.ge=Yf(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Se(),t=Se(),r=Se();return this.ge.forEach((o,i)=>{switch(i){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:r=r.add(o);break;default:he()}}),new Qi(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Yf()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ke(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class pk{constructor(e){this.Be=e,this.Le=new Map,this.ke=br(),this.qe=Is(),this.Qe=Is(),this.Ke=new Je(we)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:he()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((r,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,r=e.me.count,o=this.Ye(t);if(o){const i=o.target;if(fc(i))if(r===0){const s=new ie(i.path);this.We(t,s,Ct.newNoDocument(s,ue.min()))}else Ke(r===1);else{const s=this.Ze(t);if(s!==r){const l=this.Xe(e),c=l?this.et(l,e,s):1;if(c!==0){this.He(t);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,d)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:i=0}=t;let s,l;try{s=gr(r).toUint8Array()}catch(c){if(c instanceof Ug)return So("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new cu(s,o,i)}catch(c){return So(c instanceof ii?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Be.getRemoteKeysForTarget(t);let o=0;return r.forEach(i=>{const s=this.Be.nt(),l=`projects/${s.projectId}/databases/${s.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(t,i,null),o++)}),o}it(e){const t=new Map;this.Le.forEach((i,s)=>{const l=this.Ye(s);if(l){if(i.current&&fc(l.target)){const c=new ie(l.target.path);this.st(c).has(s)||this.ot(s,c)||this.We(s,c,Ct.newNoDocument(c,e))}i.be&&(t.set(s,i.ve()),i.Ce())}});let r=Se();this.Qe.forEach((i,s)=>{let l=!0;s.forEachWhile(c=>{const d=this.Ye(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,s)=>s.setReadTime(e));const o=new za(e,t,this.Ke,this.ke,r);return this.ke=br(),this.qe=Is(),this.Qe=Is(),this.Ke=new Je(we),o}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new Gf,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new rt(we),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new rt(we),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||J("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new Gf),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function Is(){return new Je(ie.comparator)}function Yf(){return new Je(ie.comparator)}const gk={asc:"ASCENDING",desc:"DESCENDING"},mk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bk={and:"AND",or:"OR"};class yk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function mc(n,e){return n.useProto3Json||Na(e)?e:{value:e}}function vk(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _k(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function vo(n){return Ke(!!n),ue.fromTimestamp(function(t){const r=pr(t);return new Vt(r.seconds,r.nanos)}(n))}function wk(n,e){return bc(n,e).canonicalString()}function bc(n,e){const t=function(o){return new Ye(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function sm(n){const e=Ye.fromString(n);return Ke(dm(e)),e}function Rl(n,e){const t=sm(e);if(t.get(1)!==n.databaseId.projectId)throw new re(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new re(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ie(lm(t))}function am(n,e){return wk(n.databaseId,e)}function kk(n){const e=sm(n);return e.length===4?Ye.emptyPath():lm(e)}function Qf(n){return new Ye(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function lm(n){return Ke(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ck(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],i=function(d,u){return d.useProto3Json?(Ke(u===void 0||typeof u=="string"),ht.fromBase64String(u||"")):(Ke(u===void 0||u instanceof Buffer||u instanceof Uint8Array),ht.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),s=e.targetChange.cause,l=s&&function(d){const u=d.code===void 0?G.UNKNOWN:rm(d.code);return new re(u,d.message||"")}(s);t=new im(r,o,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const o=Rl(n,r.document.name),i=vo(r.document.updateTime),s=r.document.createTime?vo(r.document.createTime):ue.min(),l=new hn({mapValue:{fields:r.document.fields}}),c=Ct.newFoundDocument(o,i,s,l),d=r.targetIds||[],u=r.removedTargetIds||[];t=new Fs(d,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const o=Rl(n,r.document),i=r.readTime?vo(r.readTime):ue.min(),s=Ct.newNoDocument(o,i),l=r.removedTargetIds||[];t=new Fs([],l,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const o=Rl(n,r.document),i=r.removedTargetIds||[];t=new Fs([],i,o,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:o=0,unchangedNames:i}=r,s=new dk(o,i),l=r.targetId;t=new om(l,s)}}return t}function Tk(n,e){return{documents:[am(n,e.path)]}}function Sk(n,e){const t={structuredQuery:{}},r=e.path;let o;e.collectionGroup!==null?(o=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=am(n,o);const i=function(d){if(d.length!==0)return um(vn.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(d){if(d.length!==0)return d.map(u=>function(g){return{field:io(g.field),direction:Ak(g.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const l=mc(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ct:t,parent:o}}function Ek(n){let e=kk(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let o=null;if(r>0){Ke(r===1);const u=t.from[0];u.allDescendants?o=u.collectionId:e=e.child(u.collectionId)}let i=[];t.where&&(i=function(p){const g=cm(p);return g instanceof vn&&Hg(g)?g.getFilters():[g]}(t.where));let s=[];t.orderBy&&(s=function(p){return p.map(g=>function(k){return new ra(so(k.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(t.orderBy));let l=null;t.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Na(g)?null:g}(t.limit));let c=null;t.startAt&&(c=function(p){const g=!!p.before,b=p.values||[];return new na(b,g)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const g=!p.before,b=p.values||[];return new na(b,g)}(t.endAt)),Ww(e,o,s,i,l,"F",c,d)}function Ik(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function cm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=so(t.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=so(t.unaryFilter.field);return nt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=so(t.unaryFilter.field);return nt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=so(t.unaryFilter.field);return nt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(n):n.fieldFilter!==void 0?function(t){return nt.create(so(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return vn.create(t.compositeFilter.filters.map(r=>cm(r)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return he()}}(t.compositeFilter.op))}(n):he()}function Ak(n){return gk[n]}function Rk(n){return mk[n]}function xk(n){return bk[n]}function io(n){return{fieldPath:n.canonicalString()}}function so(n){return Pt.fromServerFormat(n.fieldPath)}function um(n){return n instanceof nt?function(t){if(t.op==="=="){if(Bf(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NAN"}};if(Nf(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Bf(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NOT_NAN"}};if(Nf(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:io(t.field),op:Rk(t.op),value:t.value}}}(n):n instanceof vn?function(t){const r=t.getFilters().map(o=>um(o));return r.length===1?r[0]:{compositeFilter:{op:xk(t.op),filters:r}}}(n):he()}function dm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t,r,o,i=ue.min(),s=ue.min(),l=ht.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.ht=e}}function Dk(n){const e=Ek({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?hc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(){this.ln=new Mk}addToCollectionParentIndex(e,t){return this.ln.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(hr.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(hr.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class Mk{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t]||new rt(Ye.comparator),i=!o.has(r);return this.index[t]=o.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t];return o&&o.has(r)}getEntries(e){return(this.index[e]||new rt(Ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Mt{static withCacheSize(e){return new Mt(e,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.DEFAULT_COLLECTION_PERCENTILE=10,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mt.DEFAULT=new Mt(41943040,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mt.DISABLED=new Mt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Ro(0)}static Qn(){return new Ro(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf([n,e],[t,r]){const o=we(n,t);return o===0?we(e,r):o}class Vk{constructor(e){this.Gn=e,this.buffer=new rt(Jf),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Jf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Nk{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){J("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Mo(t)?J("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ma(t)}await this.Yn(3e5)})}}class Bk{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return V.resolve(Va.oe);const r=new Vk(t);return this.Zn.forEachTarget(e,o=>r.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>r.Hn(o))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Xf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xf):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,o,i,s,l,c,d;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),o=this.params.maximumSequenceNumbersToCollect):o=p,s=Date.now(),this.nthSequenceNumber(e,o))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(d=Date.now(),ro()<=ye.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-u}ms
	Determined least recently used ${o} in `+(l-s)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(d-c)+`ms
Total Duration: ${d-u}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:i,documentsRemoved:p})))}}function Lk(n,e){return new Bk(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(){this.changes=new Kr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ct.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,t,r,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(r=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(r!==null&&bi(r.mutation,o,ir.empty(),Vt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Se()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Se()){const o=Nr();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,r).next(i=>{let s=oi();return i.forEach((l,c)=>{s=s.insert(l,c.overlayedDocument)}),s}))}getOverlayedDocuments(e,t){const r=Nr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Se()))}populateOverlays(e,t,r){const o=[];return r.forEach(i=>{t.has(i)||o.push(i)}),this.documentOverlayCache.getOverlays(e,o).next(i=>{i.forEach((s,l)=>{t.set(s,l)})})}computeViews(e,t,r,o){let i=br();const s=mi(),l=function(){return mi()}();return t.forEach((c,d)=>{const u=r.get(d.key);o.has(d.key)&&(u===void 0||u.mutation instanceof ja)?i=i.insert(d.key,d):u!==void 0?(s.set(d.key,u.mutation.getFieldMask()),bi(u.mutation,d,u.mutation.getFieldMask(),Vt.now())):s.set(d.key,ir.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((d,u)=>s.set(d,u)),t.forEach((d,u)=>{var p;return l.set(d,new Fk(u,(p=s.get(d))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const r=mi();let o=new Je((s,l)=>s-l),i=Se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(s=>{for(const l of s)l.keys().forEach(c=>{const d=t.get(c);if(d===null)return;let u=r.get(c)||ir.empty();u=l.applyToLocalView(d,u),r.set(c,u);const p=(o.get(l.batchId)||Se()).add(c);o=o.insert(l.batchId,p)})}).next(()=>{const s=[],l=o.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),d=c.key,u=c.value,p=Xg();u.forEach(g=>{if(!i.has(g)){const b=tm(t.get(g),r.get(g));b!==null&&p.set(g,b),i=i.add(g)}}),s.push(this.documentOverlayCache.saveOverlays(e,d,p))}return V.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,o){return function(s){return ie.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Kw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,o):this.getDocumentsMatchingCollectionQuery(e,t,r,o)}getNextDocuments(e,t,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,o).next(i=>{const s=o-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,o-i.size):V.resolve(Nr());let l=-1,c=i;return s.next(d=>V.forEach(d,(u,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(u)?V.resolve():this.remoteDocumentCache.getEntry(e,u).next(g=>{c=c.insert(u,g)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,c,d,Se())).next(u=>({batchId:l,changes:Xw(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ie(t)).next(r=>{let o=oi();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,r,o){const i=t.collectionGroup;let s=oi();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,c=>{const d=function(p,g){return new La(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,o).next(u=>{u.forEach((p,g)=>{s=s.insert(p,g)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r,o){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,o))).next(s=>{i.forEach((c,d)=>{const u=d.getKey();s.get(u)===null&&(s=s.insert(u,Ct.newInvalidDocument(u)))});let l=oi();return s.forEach((c,d)=>{const u=i.get(c);u!==void 0&&bi(u.mutation,d,ir.empty(),Vt.now()),Fa(t,d)&&(l=l.insert(c,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return V.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:vo(o.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:Dk(o.bundledQuery),readTime:vo(o.readTime)}}(t)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(){this.overlays=new Je(ie.comparator),this.dr=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Nr();return V.forEach(t,o=>this.getOverlay(e,o).next(i=>{i!==null&&r.set(o,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((o,i)=>{this.Tt(e,t,i)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const o=this.dr.get(r);return o!==void 0&&(o.forEach(i=>this.overlays=this.overlays.remove(i)),this.dr.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const o=Nr(),i=t.length+1,s=new ie(t.child("")),l=this.overlays.getIteratorFrom(s);for(;l.hasNext();){const c=l.getNext().value,d=c.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&c.largestBatchId>r&&o.set(c.getKey(),c)}return V.resolve(o)}getOverlaysForCollectionGroup(e,t,r,o){let i=new Je((d,u)=>d-u);const s=this.overlays.getIterator();for(;s.hasNext();){const d=s.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let u=i.get(d.largestBatchId);u===null&&(u=Nr(),i=i.insert(d.largestBatchId,u)),u.set(d.getKey(),d)}}const l=Nr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,u)=>l.set(d,u)),!(l.size()>=o)););return V.resolve(l)}Tt(e,t,r){const o=this.overlays.get(r.key);if(o!==null){const s=this.dr.get(o.largestBatchId).delete(r.key);this.dr.set(o.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new uk(t,r));let i=this.dr.get(t);i===void 0&&(i=Se(),this.dr.set(t,i)),this.dr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this.Er=new rt(it.Ar),this.Rr=new rt(it.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const r=new it(e,t);this.Er=this.Er.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new it(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new ie(new Ye([])),r=new it(t,e),o=new it(t,e+1),i=[];return this.Rr.forEachInRange([r,o],s=>{this.gr(s),i.push(s.key)}),i}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ie(new Ye([])),r=new it(t,e),o=new it(t,e+1);let i=Se();return this.Rr.forEachInRange([r,o],s=>{i=i.add(s.key)}),i}containsKey(e){const t=new it(e,0),r=this.Er.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ie.comparator(e.key,t.key)||we(e.br,t.br)}static Vr(e,t){return we(e.br,t.br)||ie.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new rt(it.Ar)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,o){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new ck(i,t,r,o);this.mutationQueue.push(s);for(const l of o)this.vr=this.vr.add(new it(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(s)}lookupMutationBatch(e,t){return V.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,o=this.Fr(r),i=o<0?0:o;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new it(t,0),o=new it(t,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,o],s=>{const l=this.Cr(s.br);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new rt(we);return t.forEach(o=>{const i=new it(o,0),s=new it(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,s],l=>{r=r.add(l.br)})}),V.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,o=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const s=new it(new ie(i),0);let l=new rt(we);return this.vr.forEachWhile(c=>{const d=c.key.path;return!!r.isPrefixOf(d)&&(d.length===o&&(l=l.add(c.br)),!0)},s),V.resolve(this.Mr(l))}Mr(e){const t=[];return e.forEach(r=>{const o=this.Cr(r);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ke(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return V.forEach(t.mutations,o=>{const i=new it(o.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=r})}Bn(e){}containsKey(e,t){const r=new it(t,0),o=this.vr.firstAfterOrEqual(r);return V.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.Nr=e,this.docs=function(){return new Je(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,o=this.docs.get(r),i=o?o.size:0,s=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(t))}getEntries(e,t){let r=br();return t.forEach(o=>{const i=this.docs.get(o);r=r.insert(o,i?i.document.mutableCopy():Ct.newInvalidDocument(o))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,o){let i=br();const s=t.path,l=new ie(s.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:d,value:{document:u}}=c.getNext();if(!s.isPrefixOf(d.path))break;d.path.length>s.length+1||Tw(Cw(u),r)<=0||(o.has(u.key)||Fa(t,u))&&(i=i.insert(u.key,u.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,t,r,o){he()}Br(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new qk(this)}getSize(e){return V.resolve(this.size)}}class qk extends $k{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.persistence=e,this.Lr=new Kr(t=>ou(t),iu),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.kr=0,this.qr=new uu,this.targetCount=0,this.Qr=Ro.qn()}forEachTarget(e,t){return this.Lr.forEach((r,o)=>t(o)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),V.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new Ro(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Un(t),V.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let o=0;const i=[];return this.Lr.forEach((s,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Lr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),o++)}),V.waitFor(i).next(()=>o)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.Lr.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const o=this.persistence.referenceDelegate,i=[];return o&&t.forEach(s=>{i.push(o.markPotentiallyOrphaned(e,s))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Va(0),this.Ur=!1,this.Ur=!0,this.Wr=new Hk,this.referenceDelegate=e(this),this.Gr=new Gk(this),this.indexManager=new Ok,this.remoteDocumentCache=function(o){return new Kk(o)}(r=>this.referenceDelegate.zr(r)),this.serializer=new Pk(t),this.jr=new jk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new zk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new Wk(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){J("MemoryPersistence","Starting transaction:",e);const o=new Yk(this.$r.next());return this.referenceDelegate.Hr(),r(o).next(i=>this.referenceDelegate.Jr(o).next(()=>i)).toPromise().then(i=>(o.raiseOnCommittedEvent(),i))}Yr(e,t){return V.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class Yk extends Ew{constructor(e){super(),this.currentSequenceNumber=e}}class du{constructor(e){this.persistence=e,this.Zr=new uu,this.Xr=null}static ei(e){return new du(e)}get ti(){if(this.Xr)return this.Xr;throw he()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),V.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.ti,r=>{const o=ie.fromPath(r);return this.ni(e,o).next(i=>{i||t.removeEntry(o,ue.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return V.or([()=>V.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class sa{constructor(e,t){this.persistence=e,this.ri=new Kr(r=>Aw(r.path),(r,o)=>r.isEqual(o)),this.garbageCollector=Lk(this,t)}static ei(e,t){return new sa(e,t)}Hr(){}Jr(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(o=>r+o))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return V.forEach(this.ri,(r,o)=>this.ir(e,r,o).next(i=>i?V.resolve():t(o)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const o=this.persistence.getRemoteDocumentCache(),i=o.newChangeBuffer();return o.Br(e,s=>this.ir(e,s,t).next(l=>{l||(r++,i.removeEntry(s,ue.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),V.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ls(e.data.value)),t}ir(e,t,r){return V.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return V.resolve(o!==void 0&&o>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,t,r,o){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=o}static zi(e,t){let r=Se(),o=Se();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:o=o.add(i.doc.key)}return new fu(e,t.fromCache,r,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Qv()?8:Iw(St())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,o){const i={result:null};return this.Xi(e,t).next(s=>{i.result=s}).next(()=>{if(!i.result)return this.es(e,t,o,r).next(s=>{i.result=s})}).next(()=>{if(i.result)return;const s=new Qk;return this.ts(e,t,s).next(l=>{if(i.result=l,this.Hi)return this.ns(e,t,s,l.size)})}).next(()=>i.result)}ns(e,t,r,o){return r.documentReadCount<this.Ji?(ro()<=ye.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",oo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),V.resolve()):(ro()<=ye.DEBUG&&J("QueryEngine","Query:",oo(t),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.Yi*o?(ro()<=ye.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",oo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(t))):V.resolve())}Xi(e,t){if(Uf(t))return V.resolve(null);let r=gn(t);return this.indexManager.getIndexType(e,r).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=hc(t,null,"F"),r=gn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const s=Se(...i);return this.Zi.getDocuments(e,s).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const d=this.rs(t,l);return this.ss(t,d,s,c.readTime)?this.Xi(e,hc(t,null,"F")):this.os(e,d,t,c)}))})))}es(e,t,r,o){return Uf(t)||o.isEqual(ue.min())?V.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const s=this.rs(t,i);return this.ss(t,s,r,o)?V.resolve(null):(ro()<=ye.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),oo(t)),this.os(e,s,t,kw(o,-1)).next(l=>l))})}rs(e,t){let r=new rt(Yg(e));return t.forEach((o,i)=>{Fa(e,i)&&(r=r.add(i))}),r}ss(e,t,r,o){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(o)>0)}ts(e,t,r){return ro()<=ye.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",oo(t)),this.Zi.getDocumentsMatchingQuery(e,t,hr.min(),r)}os(e,t,r,o){return this.Zi.getDocumentsMatchingQuery(e,r,o).next(i=>(t.forEach(s=>{i=i.insert(s.key,s)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,t,r,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new Je(we),this.cs=new Kr(i=>ou(i),iu),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Uk(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function Zk(n,e,t,r){return new Jk(n,e,t,r)}async function hm(n,e){const t=ke(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let o;return t.mutationQueue.getAllMutationBatches(r).next(i=>(o=i,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const s=[],l=[];let c=Se();for(const d of o){s.push(d.batchId);for(const u of d.mutations)c=c.add(u.key)}for(const d of i){l.push(d.batchId);for(const u of d.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(r,c).next(d=>({Ts:d,removedBatchIds:s,addedBatchIds:l}))})})}function pm(n){const e=ke(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function e1(n,e){const t=ke(n),r=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const s=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const l=[];e.targetChanges.forEach((u,p)=>{const g=o.get(p);if(!g)return;l.push(t.Gr.removeMatchingKeys(i,u.removedDocuments,p).next(()=>t.Gr.addMatchingKeys(i,u.addedDocuments,p)));let b=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(ht.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):u.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(u.resumeToken,r)),o=o.insert(p,b),function(A,P,N){return A.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(g,b,u)&&l.push(t.Gr.updateTargetData(i,b))});let c=br(),d=Se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,u))}),l.push(t1(i,s,e.documentUpdates).next(u=>{c=u.Is,d=u.ds})),!r.isEqual(ue.min())){const u=t.Gr.getLastRemoteSnapshotVersion(i).next(p=>t.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(u)}return V.waitFor(l).next(()=>s.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,d)).next(()=>c)}).then(i=>(t.us=o,i))}function t1(n,e,t){let r=Se(),o=Se();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let s=br();return t.forEach((l,c)=>{const d=i.get(l);c.isFoundDocument()!==d.isFoundDocument()&&(o=o.add(l)),c.isNoDocument()&&c.version.isEqual(ue.min())?(e.removeEntry(l,c.readTime),s=s.insert(l,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),s=s.insert(l,c)):J("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",c.version)}),{Is:s,ds:o}})}function n1(n,e){const t=ke(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let o;return t.Gr.getTargetData(r,e).next(i=>i?(o=i,V.resolve(o)):t.Gr.allocateTargetId(r).next(s=>(o=new sr(e,s,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,o).next(()=>o))))}).then(r=>{const o=t.us.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function yc(n,e,t){const r=ke(n),o=r.us.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,s=>r.persistence.referenceDelegate.removeTarget(s,o))}catch(s){if(!Mo(s))throw s;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.us=r.us.remove(e),r.cs.delete(o.target)}function Zf(n,e,t){const r=ke(n);let o=ue.min(),i=Se();return r.persistence.runTransaction("Execute query","readwrite",s=>function(c,d,u){const p=ke(c),g=p.cs.get(u);return g!==void 0?V.resolve(p.us.get(g)):p.Gr.getTargetData(d,u)}(r,s,gn(e)).next(l=>{if(l)return o=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(s,l.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(s,e,t?o:ue.min(),t?i:Se())).next(l=>(r1(r,Gw(e),l),{documents:l,Es:i})))}function r1(n,e,t){let r=n.ls.get(e)||ue.min();t.forEach((o,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ls.set(e,r)}class eh{constructor(){this.activeTargetIds=ek()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class o1{constructor(){this._o=new eh,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new eh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As=null;function xl(){return As===null?As=function(){return 268435456+Math.round(2147483648*Math.random())}():As++,"0x"+As.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class l1 extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${o}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${i}`}Oo(t,r,o,i,s){const l=xl(),c=this.No(t,r.toUriEncodedString());J("RestConnection",`Sending RPC '${t}' ${l}:`,c,o);const d={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(d,i,s),this.Lo(t,c,d,o).then(u=>(J("RestConnection",`Received RPC '${t}' ${l}: `,u),u),u=>{throw So("RestConnection",`RPC '${t}' ${l} failed with error: `,u,"url: ",c,"request:",o),u})}ko(t,r,o,i,s,l){return this.Oo(t,r,o,i,s)}Bo(t,r,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Oo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,s)=>t[s]=i),o&&o.headers.forEach((i,s)=>t[s]=i)}No(t,r){const o=s1[t];return`${this.Fo}/v1/${r}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,r,o){const i=xl();return new Promise((s,l)=>{const c=new Mg;c.setWithCredentials(!0),c.listenOnce(Vg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Bs.NO_ERROR:const u=c.getResponseJson();J(yt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),s(u);break;case Bs.TIMEOUT:J(yt,`RPC '${e}' ${i} timed out`),l(new re(G.DEADLINE_EXCEEDED,"Request time out"));break;case Bs.HTTP_ERROR:const p=c.getStatus();if(J(yt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const b=g==null?void 0:g.error;if(b&&b.status&&b.message){const k=function(P){const N=P.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(N)>=0?N:G.UNKNOWN}(b.status);l(new re(k,b.message))}else l(new re(G.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new re(G.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{J(yt,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(o);J(yt,`RPC '${e}' ${i} sending request:`,o),c.send(t,"POST",d,r,15)})}qo(e,t,r){const o=xl(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Lg(),l=Bg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Bo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const u=i.join("");J(yt,`Creating RPC '${e}' stream ${o}: ${u}`,c);const p=s.createWebChannel(u,c);let g=!1,b=!1;const k=new a1({Eo:P=>{b?J(yt,`Not sending because RPC '${e}' stream ${o} is closed:`,P):(g||(J(yt,`Opening RPC '${e}' stream ${o} transport.`),p.open(),g=!0),J(yt,`RPC '${e}' stream ${o} sending:`,P),p.send(P))},Ao:()=>p.close()}),A=(P,N,L)=>{P.listen(N,x=>{try{L(x)}catch(D){setTimeout(()=>{throw D},0)}})};return A(p,ri.EventType.OPEN,()=>{b||(J(yt,`RPC '${e}' stream ${o} transport opened.`),k.So())}),A(p,ri.EventType.CLOSE,()=>{b||(b=!0,J(yt,`RPC '${e}' stream ${o} transport closed`),k.Do())}),A(p,ri.EventType.ERROR,P=>{b||(b=!0,So(yt,`RPC '${e}' stream ${o} transport errored:`,P),k.Do(new re(G.UNAVAILABLE,"The operation could not be completed")))}),A(p,ri.EventType.MESSAGE,P=>{var N;if(!b){const L=P.data[0];Ke(!!L);const x=L,D=(x==null?void 0:x.error)||((N=x[0])===null||N===void 0?void 0:N.error);if(D){J(yt,`RPC '${e}' stream ${o} received error:`,D);const X=D.status;let Q=function(y){const w=et[y];if(w!==void 0)return rm(w)}(X),E=D.message;Q===void 0&&(Q=G.INTERNAL,E="Unknown error status: "+X+" with message "+D.message),b=!0,k.Do(new re(Q,E)),p.close()}else J(yt,`RPC '${e}' stream ${o} received:`,L),k.vo(L)}}),A(l,Ng.STAT_EVENT,P=>{P.stat===ac.PROXY?J(yt,`RPC '${e}' stream ${o} detected buffering proxy`):P.stat===ac.NOPROXY&&J(yt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{k.bo()},0),k}}function Pl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(n){return new yk(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,t,r=1e3,o=1.5,i=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=o,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-r);o>0&&J("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,t,r,o,i,s,l,c){this.li=e,this.Yo=r,this.Zo=o,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new mm(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(Nn(t.toString()),Nn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,o])=>{this.Xo===t&&this.I_(r,o)},r=>{e(()=>{const o=new re(G.UNKNOWN,"Fetching auth token failed: "+r.message);return this.d_(o)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{r(()=>this.d_(o))}),this.stream.onMessage(o=>{r(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class u1 extends c1{constructor(e,t,r,o,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,o,s),this.serializer=i}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=Ck(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ue.min():s.readTime?vo(s.readTime):ue.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=Qf(this.serializer),t.addTarget=function(i,s){let l;const c=s.target;if(l=fc(c)?{documents:Tk(i,c)}:{query:Sk(i,c).ct},l.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){l.resumeToken=_k(i,s.resumeToken);const d=mc(i,s.expectedCount);d!==null&&(l.expectedCount=d)}else if(s.snapshotVersion.compareTo(ue.min())>0){l.readTime=vk(i,s.snapshotVersion.toTimestamp());const d=mc(i,s.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=Ik(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=Qf(this.serializer),t.removeTarget=e,this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1 extends class{}{constructor(e,t,r,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new re(G.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Oo(e,bc(t,r),o,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(G.UNKNOWN,i.toString())})}ko(e,t,r,o,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,l])=>this.connection.ko(e,bc(t,r),o,s,l,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new re(G.UNKNOWN,s.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class f1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Nn(t),this.C_=!1):J("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e,t,r,o,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(s=>{r.enqueueAndForget(async()=>{Ji(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=ke(c);d.k_.add(4),await Xi(d),d.K_.set("Unknown"),d.k_.delete(4),await Ha(d)}(this))})}),this.K_=new f1(r,o)}}async function Ha(n){if(Ji(n))for(const e of n.q_)await e(!0)}async function Xi(n){for(const e of n.q_)await e(!1)}function bm(n,e){const t=ke(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),mu(t)?gu(t):Vo(t).s_()&&pu(t,e))}function hu(n,e){const t=ke(n),r=Vo(t);t.L_.delete(e),r.s_()&&ym(t,e),t.L_.size===0&&(r.s_()?r.a_():Ji(t)&&t.K_.set("Unknown"))}function pu(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Vo(n).V_(e)}function ym(n,e){n.U_.xe(e),Vo(n).m_(e)}function gu(n){n.U_=new pk({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Vo(n).start(),n.K_.F_()}function mu(n){return Ji(n)&&!Vo(n).i_()&&n.L_.size>0}function Ji(n){return ke(n).k_.size===0}function vm(n){n.U_=void 0}async function p1(n){n.K_.set("Online")}async function g1(n){n.L_.forEach((e,t)=>{pu(n,e)})}async function m1(n,e){vm(n),mu(n)?(n.K_.O_(e),gu(n)):n.K_.set("Unknown")}async function b1(n,e,t){if(n.K_.set("Online"),e instanceof im&&e.state===2&&e.cause)try{await async function(o,i){const s=i.cause;for(const l of i.targetIds)o.L_.has(l)&&(await o.remoteSyncer.rejectListen(l,s),o.L_.delete(l),o.U_.removeTarget(l))}(n,e)}catch(r){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nh(n,r)}else if(e instanceof Fs?n.U_.$e(e):e instanceof om?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(ue.min()))try{const r=await pm(n.localStore);t.compareTo(r)>=0&&await function(i,s){const l=i.U_.it(s);return l.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.L_.get(d);u&&i.L_.set(d,u.withResumeToken(c.resumeToken,s))}}),l.targetMismatches.forEach((c,d)=>{const u=i.L_.get(c);if(!u)return;i.L_.set(c,u.withResumeToken(ht.EMPTY_BYTE_STRING,u.snapshotVersion)),ym(i,c);const p=new sr(u.target,c,d,u.sequenceNumber);pu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){J("RemoteStore","Failed to raise snapshot:",r),await nh(n,r)}}async function nh(n,e,t){if(!Mo(e))throw e;n.k_.add(1),await Xi(n),n.K_.set("Offline"),t||(t=()=>pm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Ha(n)})}async function rh(n,e){const t=ke(n);t.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const r=Ji(t);t.k_.add(3),await Xi(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Ha(t)}async function y1(n,e){const t=ke(n);e?(t.k_.delete(2),await Ha(t)):e||(t.k_.add(2),await Xi(t),t.K_.set("Unknown"))}function Vo(n){return n.W_||(n.W_=function(t,r,o){const i=ke(t);return i.b_(),new u1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,o)}(n.datastore,n.asyncQueue,{Ro:p1.bind(null,n),mo:g1.bind(null,n),po:m1.bind(null,n),R_:b1.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),mu(n)?gu(n):n.K_.set("Unknown")):(await n.W_.stop(),vm(n))})),n.W_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t,r,o,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=o,this.removalCallback=i,this.deferred=new Lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,o,i){const s=Date.now()+r,l=new bu(e,t,s,o,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _m(n,e){if(Nn("AsyncQueue",`${e}: ${n}`),Mo(n))return new re(G.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{static emptySet(e){return new _o(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ie.comparator(t.key,r.key):(t,r)=>ie.comparator(t.key,r.key),this.keyedMap=oi(),this.sortedSet=new Je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof _o)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,i=r.getNext().key;if(!o.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new _o;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this.z_=new Je(ie.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):he():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class xo{constructor(e,t,r,o,i,s,l,c,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,o,i){const s=[];return t.forEach(l=>{s.push({type:0,doc:l})}),new xo(e,t,_o.emptySet(t),s,r,o,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$a(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==r[o].type||!t[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class _1{constructor(){this.queries=ih(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const o=ke(t),i=o.queries;o.queries=ih(),i.forEach((s,l)=>{for(const c of l.J_)c.onError(r)})})(this,new re(G.ABORTED,"Firestore shutting down"))}}function ih(){return new Kr(n=>Gg(n),$a)}async function w1(n,e){const t=ke(n);let r=3;const o=e.query;let i=t.queries.get(o);i?!i.Y_()&&e.Z_()&&(r=2):(i=new v1,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await t.onListen(o,!0);break;case 1:i.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(s){const l=_m(s,`Initialization of query '${oo(e.query)}' failed`);return void e.onError(l)}t.queries.set(o,i),i.J_.push(e),e.ea(t.onlineState),i.H_&&e.ta(i.H_)&&yu(t)}async function k1(n,e){const t=ke(n),r=e.query;let o=3;const i=t.queries.get(r);if(i){const s=i.J_.indexOf(e);s>=0&&(i.J_.splice(s,1),i.J_.length===0?o=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function C1(n,e){const t=ke(n);let r=!1;for(const o of e){const i=o.query,s=t.queries.get(i);if(s){for(const l of s.J_)l.ta(o)&&(r=!0);s.H_=o}}r&&yu(t)}function T1(n,e,t){const r=ke(n),o=r.queries.get(e);if(o)for(const i of o.J_)i.onError(t);r.queries.delete(e)}function yu(n){n.X_.forEach(e=>{e.next()})}var vc,sh;(sh=vc||(vc={})).na="default",sh.Cache="cache";class S1{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const o of e.docChanges)o.type!==3&&r.push(o);e=new xo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==vc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e){this.key=e}}class km{constructor(e){this.key=e}}class E1{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Se(),this.mutatedKeys=Se(),this.Va=Yg(e),this.ma=new _o(this.Va)}get fa(){return this.Ea}ga(e,t){const r=t?t.pa:new oh,o=t?t.ma:this.ma;let i=t?t.mutatedKeys:this.mutatedKeys,s=o,l=!1;const c=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,d=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((u,p)=>{const g=o.get(u),b=Fa(this.query,p)?p:null,k=!!g&&this.mutatedKeys.has(g.key),A=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let P=!1;g&&b?g.data.isEqual(b.data)?k!==A&&(r.track({type:3,doc:b}),P=!0):this.ya(g,b)||(r.track({type:2,doc:b}),P=!0,(c&&this.Va(b,c)>0||d&&this.Va(b,d)<0)&&(l=!0)):!g&&b?(r.track({type:0,doc:b}),P=!0):g&&!b&&(r.track({type:1,doc:g}),P=!0,(c||d)&&(l=!0)),P&&(b?(s=s.add(b),i=A?i.add(u):i.delete(u)):(s=s.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const u=this.query.limitType==="F"?s.last():s.first();s=s.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ma:s,pa:r,ss:l,mutatedKeys:i}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,o){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const s=e.pa.j_();s.sort((u,p)=>function(b,k){const A=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return A(b)-A(k)}(u.type,p.type)||this.Va(u.doc,p.doc)),this.wa(r),o=o!=null&&o;const l=t&&!o?this.Sa():[],c=this.Ra.size===0&&this.current&&!o?1:0,d=c!==this.Aa;return this.Aa=c,s.length!==0||d?{snapshot:new xo(this.query,e.ma,i,s,e.mutatedKeys,c===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new oh,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Se(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new km(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new wm(r))}),t}va(e){this.Ea=e.Es,this.Ra=Se();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return xo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class I1{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class A1{constructor(e){this.key=e,this.Fa=!1}}class R1{constructor(e,t,r,o,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=o,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ma={},this.xa=new Kr(l=>Gg(l),$a),this.Oa=new Map,this.Na=new Set,this.Ba=new Je(ie.comparator),this.La=new Map,this.ka=new uu,this.qa={},this.Qa=new Map,this.Ka=Ro.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function x1(n,e,t=!0){const r=Im(n);let o;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),o=i.view.Ca()):o=await Cm(r,e,t,!0),o}async function P1(n,e){const t=Im(n);await Cm(t,e,!0,!1)}async function Cm(n,e,t,r){const o=await n1(n.localStore,gn(e)),i=o.targetId,s=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await D1(n,e,i,s==="current",o.resumeToken)),n.isPrimaryClient&&t&&bm(n.remoteStore,o),l}async function D1(n,e,t,r,o){n.Ua=(p,g,b)=>async function(A,P,N,L){let x=P.view.ga(N);x.ss&&(x=await Zf(A.localStore,P.query,!1).then(({documents:E})=>P.view.ga(E,x)));const D=L&&L.targetChanges.get(P.targetId),X=L&&L.targetMismatches.get(P.targetId)!=null,Q=P.view.applyChanges(x,A.isPrimaryClient,D,X);return lh(A,P.targetId,Q.ba),Q.snapshot}(n,p,g,b);const i=await Zf(n.localStore,e,!0),s=new E1(e,i.Es),l=s.ga(i.documents),c=Qi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",o),d=s.applyChanges(l,n.isPrimaryClient,c);lh(n,t,d.ba);const u=new I1(e,t,s);return n.xa.set(e,u),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),d.snapshot}async function O1(n,e,t){const r=ke(n),o=r.xa.get(e),i=r.Oa.get(o.targetId);if(i.length>1)return r.Oa.set(o.targetId,i.filter(s=>!$a(s,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await yc(r.localStore,o.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(o.targetId),t&&hu(r.remoteStore,o.targetId),_c(r,o.targetId)}).catch(Ma)):(_c(r,o.targetId),await yc(r.localStore,o.targetId,!0))}async function M1(n,e){const t=ke(n),r=t.xa.get(e),o=t.Oa.get(r.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),hu(t.remoteStore,r.targetId))}async function Tm(n,e){const t=ke(n);try{const r=await e1(t.localStore,e);e.targetChanges.forEach((o,i)=>{const s=t.La.get(i);s&&(Ke(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?s.Fa=!0:o.modifiedDocuments.size>0?Ke(s.Fa):o.removedDocuments.size>0&&(Ke(s.Fa),s.Fa=!1))}),await Em(t,r,e)}catch(r){await Ma(r)}}function ah(n,e,t){const r=ke(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const o=[];r.xa.forEach((i,s)=>{const l=s.view.ea(e);l.snapshot&&o.push(l.snapshot)}),function(s,l){const c=ke(s);c.onlineState=l;let d=!1;c.queries.forEach((u,p)=>{for(const g of p.J_)g.ea(l)&&(d=!0)}),d&&yu(c)}(r.eventManager,e),o.length&&r.Ma.R_(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function V1(n,e,t){const r=ke(n);r.sharedClientState.updateQueryState(e,"rejected",t);const o=r.La.get(e),i=o&&o.key;if(i){let s=new Je(ie.comparator);s=s.insert(i,Ct.newNoDocument(i,ue.min()));const l=Se().add(i),c=new za(ue.min(),new Map,new Je(we),s,l);await Tm(r,c),r.Ba=r.Ba.remove(i),r.La.delete(e),vu(r)}else await yc(r.localStore,e,!1).then(()=>_c(r,e,t)).catch(Ma)}function _c(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||Sm(n,r)})}function Sm(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(hu(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),vu(n))}function lh(n,e,t){for(const r of t)r instanceof wm?(n.ka.addReference(r.key,e),N1(n,r)):r instanceof km?(J("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||Sm(n,r.key)):he()}function N1(n,e){const t=e.key,r=t.path.canonicalString();n.Ba.get(t)||n.Na.has(r)||(J("SyncEngine","New document in limbo: "+t),n.Na.add(r),vu(n))}function vu(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new ie(Ye.fromString(e)),r=n.Ka.next();n.La.set(r,new A1(t)),n.Ba=n.Ba.insert(t,r),bm(n.remoteStore,new sr(gn(su(t.path)),r,"TargetPurposeLimboResolution",Va.oe))}}async function Em(n,e,t){const r=ke(n),o=[],i=[],s=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{s.push(r.Ua(c,e,t).then(d=>{var u;if((d||t)&&r.isPrimaryClient){const p=d?!d.fromCache:(u=t==null?void 0:t.targetChanges.get(c.targetId))===null||u===void 0?void 0:u.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(d){o.push(d);const p=fu.zi(c.targetId,d);i.push(p)}}))}),await Promise.all(s),r.Ma.R_(o),await async function(c,d){const u=ke(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(d,g=>V.forEach(g.Wi,b=>u.persistence.referenceDelegate.addReference(p,g.targetId,b)).next(()=>V.forEach(g.Gi,b=>u.persistence.referenceDelegate.removeReference(p,g.targetId,b)))))}catch(p){if(!Mo(p))throw p;J("LocalStore","Failed to update sequence numbers: "+p)}for(const p of d){const g=p.targetId;if(!p.fromCache){const b=u.us.get(g),k=b.snapshotVersion,A=b.withLastLimboFreeSnapshotVersion(k);u.us=u.us.insert(g,A)}}}(r.localStore,i))}async function B1(n,e){const t=ke(n);if(!t.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const r=await hm(t.localStore,e);t.currentUser=e,function(i,s){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new re(G.CANCELLED,s))})}),i.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Em(t,r.Ts)}}function L1(n,e){const t=ke(n),r=t.La.get(e);if(r&&r.Fa)return Se().add(r.key);{let o=Se();const i=t.Oa.get(e);if(!i)return o;for(const s of i){const l=t.xa.get(s);o=o.unionWith(l.view.fa)}return o}}function Im(n){const e=ke(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Tm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=L1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=V1.bind(null,e),e.Ma.R_=C1.bind(null,e.eventManager),e.Ma.Wa=T1.bind(null,e.eventManager),e}class aa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gm(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return Zk(this.persistence,new Xk,e.initialUser,this.serializer)}ja(e){return new fm(du.ei,this.serializer)}za(e){return new o1}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}aa.provider={build:()=>new aa};class $1 extends aa{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Ke(this.persistence.referenceDelegate instanceof sa);const r=this.persistence.referenceDelegate.garbageCollector;return new Nk(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Mt.withCacheSize(this.cacheSizeBytes):Mt.DEFAULT;return new fm(r=>sa.ei(r,t),this.serializer)}}class wc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ah(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=B1.bind(null,this.syncEngine),await y1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _1}()}createDatastore(e){const t=gm(e.databaseInfo.databaseId),r=function(i){return new l1(i)}(e.databaseInfo);return function(i,s,l,c){return new d1(i,s,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,o,i,s,l){return new h1(r,o,i,s,l)}(this.localStore,this.datastore,e.asyncQueue,t=>ah(this.syncEngine,t,0),function(){return th.p()?new th:new i1}())}createSyncEngine(e,t){return function(o,i,s,l,c,d,u){const p=new R1(o,i,s,l,c,d);return u&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const i=ke(o);J("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await Xi(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}wc.provider={build:()=>new wc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Nn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e,t,r,o,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=o,this.user=_t.UNAUTHENTICATED,this.clientId=Fg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async s=>{J("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(J("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=_m(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Dl(n,e){n.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async o=>{r.isEqual(o)||(await hm(e.localStore,o),r=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ch(n,e){n.asyncQueue.verifyOperationInProgress();const t=await j1(n);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>rh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,o)=>rh(e.remoteStore,o)),n._onlineComponents=e}async function j1(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await Dl(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;So("Error using user provided cache. Falling back to memory cache: "+t),await Dl(n,new aa)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await Dl(n,new $1(void 0));return n._offlineComponents}async function z1(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await ch(n,n._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await ch(n,new wc))),n._onlineComponents}async function H1(n){const e=await z1(n),t=e.eventManager;return t.onListen=x1.bind(null,e.syncEngine),t.onUnlisten=O1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=P1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=M1.bind(null,e.syncEngine),t}function W1(n,e,t={}){const r=new Lr;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,l,c,d){const u=new F1({next:g=>{u.eu(),s.enqueueAndForget(()=>k1(i,p));const b=g.docs.has(l);!b&&g.fromCache?d.reject(new re(G.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&g.fromCache&&c&&c.source==="server"?d.reject(new re(G.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),p=new S1(su(l.path),u,{includeMetadataChanges:!0,ua:!0});return w1(i,p)}(await H1(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(n,e,t){if(!t)throw new re(G.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function q1(n,e,t,r){if(e===!0&&r===!0)throw new re(G.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function dh(n){if(!ie.isDocumentKey(n))throw new re(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function G1(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":he()}function kc(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new re(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=G1(n);throw new re(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}q1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Am((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _u{constructor(e,t,r,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hw;switch(r.type){case"firstParty":return new bw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=uh.get(t);r&&(J("ComponentProvider","Removing Datastore"),uh.delete(t),r.terminate())}(this),Promise.resolve()}}function Y1(n,e,t,r={}){var o;const i=(n=kc(n,_u))._getSettings(),s=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==s&&So("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:s,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=_t.MOCK_USER;else{l=zv(r.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new re(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new _t(d)}n._authCredentials=new pw(new $g(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wu(this.firestore,e,this._query)}}class Mn{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Oi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mn(this.firestore,e,this._key)}}class Oi extends wu{constructor(e,t,r){super(e,t,su(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mn(this.firestore,null,new ie(e))}withConverter(e){return new Oi(this.firestore,e,this._path)}}function Q1(n,e,...t){if(n=Wr(n),arguments.length===1&&(e=Fg.newId()),K1("doc","path",e),n instanceof _u){const r=Ye.fromString(e,...t);return dh(r),new Mn(n,null,new ie(r))}{if(!(n instanceof Mn||n instanceof Oi))throw new re(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ye.fromString(e,...t));return dh(r),new Mn(n.firestore,n instanceof Oi?n.converter:null,new ie(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new mm(this,"async_queue_retry"),this.fu=()=>{const r=Pl();r&&J("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=Pl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=Pl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new Lr;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Mo(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const o=function(s){let l=s.message||"";return s.stack&&(l=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),l}(r);throw Nn("INTERNAL UNHANDLED ERROR: ",o),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=bu.createAndSchedule(this,e,t,r,i=>this.Su(i));return this.Eu.push(o),o}pu(){this.Au&&he()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class Rm extends _u{constructor(e,t,r,o){super(e,t,r,o),this.type="firestore",this._queue=new hh,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hh(e),this._firestoreClient=void 0,await e}}}function X1(n,e){const t=typeof n=="object"?n:xg(),r=typeof n=="string"?n:"(default)",o=eu(t,"firestore").getImmediate({identifier:r});if(!o._initialized){const i=Uv("firestore");i&&Y1(o,...i)}return o}function J1(n){if(n._terminated)throw new re(G.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Z1(n),n._firestoreClient}function Z1(n){var e,t,r;const o=n._freezeSettings(),i=function(l,c,d,u){return new Dw(l,c,d,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Am(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=o.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new U1(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this._byteString=e}static fromBase64String(e){try{return new la(ht.fromBase64String(e))}catch(t){throw new re(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new la(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new re(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new re(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new re(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,o){if(r.length!==o.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==o[i])return!1;return!0}(this._values,e._values)}}const nC=new RegExp("[~\\*/\\[\\]]");function rC(n,e,t){if(e.search(nC)>=0)throw ph(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new xm(...e.split("."))._internalPath}catch{throw ph(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function ph(n,e,t,r,o){let i=`Function ${e}() called with invalid data`;i+=". ";let s="";return new re(G.INVALID_ARGUMENT,i+n+s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,t,r,o,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=o,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Mn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Dm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class oC extends Pm{data(){return super.data()}}function Dm(n,e){return typeof e=="string"?rC(n,e):e instanceof xm?e._internalPath:e._delegate._internalPath}class iC{convertValue(e,t="none"){switch(mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Yi(e,(o,i)=>{r[o]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,o;const i=(o=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||o===void 0?void 0:o.map(s=>Qe(s.doubleValue));return new tC(i)}convertGeoPoint(e){return new eC(Qe(e.latitude),Qe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ba(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(xi(e));default:return null}}convertTimestamp(e){const t=pr(e);return new Vt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ye.fromString(e);Ke(dm(r));const o=new Pi(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return o.isEqual(t)||Nn(`Document ${i} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Om extends Pm{constructor(e,t,r,o,i,s){super(e,t,r,o,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new aC(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Dm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class aC extends Om{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(n){n=kc(n,Mn);const e=kc(n.firestore,Rm);return W1(J1(e),n._key).then(t=>uC(e,n,t))}class cC extends iC{constructor(e){super(),this.firestore=e}convertBytes(e){return new la(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Mn(this.firestore,null,t)}}function uC(n,e,t){const r=t.docs.get(e._key),o=new cC(n);return new Om(n,o,e._key,r,new sC(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Oo=o})(Do),To(new jr("firestore",(r,{instanceIdentifier:o,options:i})=>{const s=r.getProvider("app").getImmediate(),l=new Rm(new gw(r.getProvider("auth-internal")),new vw(r.getProvider("app-check-internal")),function(d,u){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new re(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pi(d.options.projectId,u)}(s,o),s);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),ur(xf,"4.7.6",e),ur(xf,"4.7.6","esm2017")})();const dC={class:"container"},fC={key:0},hC={key:1},pC={__name:"ChildCounter",props:{counter:Number},setup(n){const e=fi("fbDatabase"),t=On();return Ra(async()=>{const r=Q1(e,"cities","SF"),o=await lC(r);o.exists()?(console.log("Document data:",o.data()),t.value=o.data().id):console.log("No such document!")}),(r,o)=>(K(),ee("div",dC,[o[0]||(o[0]=me("h3",null,"Vue Child Component",-1)),me("p",null,"You clicked "+Pe(n.counter)+" times.",1),t.value?(K(),ee("p",fC,"Got document from firebase with id: "+Pe(t.value),1)):(K(),ee("p",hC,"No document was found..."))]))}},gC=".container[data-v-d71339da]{background-color:#f9f9f9;padding:20px;border-radius:10px;text-align:center;max-width:400px;margin:auto;box-shadow:0 0 10px #0000001a}h1[data-v-d71339da]{color:#555;margin-bottom:20px}button[data-v-d71339da]{padding:10px 20px;border:none;border-radius:5px;background-color:#007bff;color:#fff;cursor:pointer}button[data-v-d71339da]:hover{background-color:#0056b3}p[data-v-d71339da]{margin-top:20px;color:#666}",ku=(n,e)=>{const t=n.__vccOpts||n;for(const[r,o]of e)t[r]=o;return t},mC={class:"container"},bC={__name:"Goodbye",emits:["increased"],setup(n,{emit:e}){const t=On("Goodbye, World!"),r=On(0),o=e,i=()=>{r.value++,o("increased",r.value)};return(s,l)=>(K(),ee("div",mC,[me("h1",null,Pe(t.value),1),me("button",{onClick:i},"Click me"),Te(pC,{counter:r.value},null,8,["counter"])]))}},yC=ku(bC,[["styles",[gC]],["__scopeId","data-v-d71339da"]]),vC=".container[data-v-f8479569]{background-color:#f0f0f0;padding:20px;border-radius:10px;text-align:center;max-width:400px;margin:auto;box-shadow:0 0 10px #0000001a}h1[data-v-f8479569]{color:#333;margin-bottom:20px}input[data-v-f8479569]{padding:10px;border:1px solid #ccc;border-radius:5px;width:calc(100% - 22px)}",_C={class:"container"},wC={__name:"HelloVue",props:{myprop:String},setup(n){const e=On("Hello, World!");return(t,r)=>(K(),ee("div",_C,[me("h1",null,Pe(e.value),1),Or(me("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=o=>e.value=o),placeholder:"Type something..."},null,512),[[Av,e.value]]),me("h3",null,"Received prop: "+Pe(n.myprop),1)]))}},kC=ku(wC,[["styles",[vC]],["__scopeId","data-v-f8479569"]]);var CC="firebase",TC="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ur(CC,TC,"app");function Cu(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]]);return t}function Mm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SC=Mm,Vm=new qi("auth","Firebase",Mm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=new Jc("@firebase/auth");function EC(n,...e){ca.logLevel<=ye.WARN&&ca.warn(`Auth (${Do}): ${n}`,...e)}function Us(n,...e){ca.logLevel<=ye.ERROR&&ca.error(`Auth (${Do}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(n,...e){throw Tu(n,...e)}function mn(n,...e){return Tu(n,...e)}function Nm(n,e,t){const r=Object.assign(Object.assign({},SC()),{[e]:t});return new qi("auth","Firebase",r).create(e,{appName:n.name})}function Fr(n){return Nm(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Vm.create(n,...e)}function le(n,e,...t){if(!n)throw Tu(e,...t)}function Rn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Us(e),new Error(e)}function Ln(n,e){n||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function IC(){return gh()==="http:"||gh()==="https:"}function gh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IC()||qv()||"connection"in navigator)?navigator.onLine:!0}function RC(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ln(t>e,"Short delay should be less than long delay!"),this.isMobile=Hv()||Gv()}get(){return AC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(n,e){Ln(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=new Zi(3e4,6e4);function Eu(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function No(n,e,t,r,o={}){return Lm(n,o,async()=>{let i={},s={};r&&(e==="GET"?s=r:i={body:JSON.stringify(r)});const l=Gi(Object.assign({key:n.config.apiKey},s)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:c},i);return Kv()||(d.referrerPolicy="no-referrer"),Bm.fetch()($m(n,n.config.apiHost,t,l),d)})}async function Lm(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},xC),e);try{const o=new OC(n),i=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Rs(n,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const l=i.ok?s.errorMessage:s.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rs(n,"credential-already-in-use",s);if(c==="EMAIL_EXISTS")throw Rs(n,"email-already-in-use",s);if(c==="USER_DISABLED")throw Rs(n,"user-disabled",s);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Nm(n,u,d);Bn(n,u)}}catch(o){if(o instanceof Un)throw o;Bn(n,"network-request-failed",{message:String(o)})}}async function DC(n,e,t,r,o={}){const i=await No(n,e,t,r,o);return"mfaPendingCredential"in i&&Bn(n,"multi-factor-auth-required",{_serverResponse:i}),i}function $m(n,e,t,r){const o=`${e}${t}?${r}`;return n.config.emulator?Su(n.config,o):`${n.config.apiScheme}://${o}`}class OC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(mn(this.auth,"network-request-failed")),PC.get())})}}function Rs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const o=mn(n,e,r);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MC(n,e){return No(n,"POST","/v1/accounts:delete",e)}async function Fm(n,e){return No(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VC(n,e=!1){const t=Wr(n),r=await t.getIdToken(e),o=Iu(r);le(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const i=typeof o.firebase=="object"?o.firebase:void 0,s=i==null?void 0:i.sign_in_provider;return{claims:o,token:r,authTime:yi(Ol(o.auth_time)),issuedAtTime:yi(Ol(o.iat)),expirationTime:yi(Ol(o.exp)),signInProvider:s||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ol(n){return Number(n)*1e3}function Iu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Us("JWT malformed, contained fewer than 3 sections"),null;try{const o=Cg(t);return o?JSON.parse(o):(Us("Failed to decode base64 JWT payload"),null)}catch(o){return Us("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function mh(n){const e=Iu(n);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Un&&NC(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function NC({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=yi(this.lastLoginAt),this.creationTime=yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(n){var e;const t=n.auth,r=await n.getIdToken(),o=await Mi(n,Fm(t,{idToken:r}));le(o==null?void 0:o.users.length,t,"internal-error");const i=o.users[0];n._notifyReloadListener(i);const s=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Um(i.providerUserInfo):[],l=$C(n.providerData,s),c=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),u=c?d:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Tc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(n,p)}async function LC(n){const e=Wr(n);await ua(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $C(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function Um(n){return n.map(e=>{var{providerId:t}=e,r=Cu(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FC(n,e){const t=await Lm(n,{},async()=>{const r=Gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:i}=n.config,s=$m(n,o,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Bm.fetch()(s,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function UC(n,e){return No(n,"POST","/v2/accounts:revokeToken",Eu(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){le(e.length!==0,"internal-error");const t=mh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:o,expiresIn:i}=await FC(e,t);this.updateTokensAndExpiration(r,o,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:o,expirationTime:i}=t,s=new wo;return r&&(le(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),o&&(le(typeof o=="string","internal-error",{appName:e}),s.accessToken=o),i&&(le(typeof i=="number","internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wo,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(n,e){le(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class xn{constructor(e){var{uid:t,auth:r,stsTokenManager:o}=e,i=Cu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Tc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Mi(this,this.stsTokenManager.getToken(this.auth,e));return le(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return VC(this,e)}reload(){return LC(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ua(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(or(this.auth.app))return Promise.reject(Fr(this.auth));const e=await this.getIdToken();return await Mi(this,MC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,o,i,s,l,c,d,u;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(o=t.email)!==null&&o!==void 0?o:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,k=(s=t.photoURL)!==null&&s!==void 0?s:void 0,A=(l=t.tenantId)!==null&&l!==void 0?l:void 0,P=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,N=(d=t.createdAt)!==null&&d!==void 0?d:void 0,L=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:x,emailVerified:D,isAnonymous:X,providerData:Q,stsTokenManager:E}=t;le(x&&E,e,"internal-error");const v=wo.fromJSON(this.name,E);le(typeof x=="string",e,"internal-error"),qn(p,e.name),qn(g,e.name),le(typeof D=="boolean",e,"internal-error"),le(typeof X=="boolean",e,"internal-error"),qn(b,e.name),qn(k,e.name),qn(A,e.name),qn(P,e.name),qn(N,e.name),qn(L,e.name);const y=new xn({uid:x,auth:e,email:g,emailVerified:D,displayName:p,isAnonymous:X,photoURL:k,phoneNumber:b,tenantId:A,stsTokenManager:v,createdAt:N,lastLoginAt:L});return Q&&Array.isArray(Q)&&(y.providerData=Q.map(w=>Object.assign({},w))),P&&(y._redirectEventId=P),y}static async _fromIdTokenResponse(e,t,r=!1){const o=new wo;o.updateFromServerResponse(t);const i=new xn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await ua(i),i}static async _fromGetAccountInfoResponse(e,t,r){const o=t.users[0];le(o.localId!==void 0,"internal-error");const i=o.providerUserInfo!==void 0?Um(o.providerUserInfo):[],s=!(o.email&&o.passwordHash)&&!(i!=null&&i.length),l=new wo;l.updateFromIdToken(r);const c=new xn({uid:o.localId,auth:e,stsTokenManager:l,isAnonymous:s}),d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:i,metadata:new Tc(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=new Map;function Pn(n){Ln(n instanceof Function,"Expected a class definition");let e=bh.get(n);return e?(Ln(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,bh.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jm.type="NONE";const yh=jm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(n,e,t){return`firebase:${n}:${e}:${t}`}class ko{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:o,name:i}=this.auth;this.fullUserKey=js(this.userKey,o.apiKey,i),this.fullPersistenceKey=js("persistence",o.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ko(Pn(yh),e,r);const o=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=o[0]||Pn(yh);const s=js(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const u=await d._get(s);if(u){const p=xn._fromJSON(e,u);d!==i&&(l=p),i=d;break}}catch{}const c=o.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ko(i,e,r):(i=c[0],l&&await i._set(s,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(s)}catch{}})),new ko(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Km(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gm(e))return"Blackberry";if(Ym(e))return"Webos";if(Hm(e))return"Safari";if((e.includes("chrome/")||Wm(e))&&!e.includes("edge/"))return"Chrome";if(qm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zm(n=St()){return/firefox\//i.test(n)}function Hm(n=St()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wm(n=St()){return/crios\//i.test(n)}function Km(n=St()){return/iemobile/i.test(n)}function qm(n=St()){return/android/i.test(n)}function Gm(n=St()){return/blackberry/i.test(n)}function Ym(n=St()){return/webos/i.test(n)}function Au(n=St()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function jC(n=St()){var e;return Au(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zC(){return Yv()&&document.documentMode===10}function Qm(n=St()){return Au(n)||qm(n)||Ym(n)||Gm(n)||/windows phone/i.test(n)||Km(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(n,e=[]){let t;switch(n){case"Browser":t=vh(St());break;case"Worker":t=`${vh(St())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Do}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((s,l)=>{try{const c=e(i);s(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WC(n,e={}){return No(n,"GET","/v2/passwordPolicy",Eu(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=6;class qC{constructor(e){var t,r,o,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=s.minPasswordLength)!==null&&t!==void 0?t:KC,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,o,i,s,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsLowercaseLetter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsNumericCharacter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,o,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,t,r,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _h(this),this.idTokenSubscription=new _h(this),this.beforeStateQueue=new HC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pn(t)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await ko.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Fm(this,{idToken:e}),r=await xn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(or(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=o==null?void 0:o._redirectEventId,c=await this.tryRedirectSignIn(e);(!s||s===l)&&(c!=null&&c.user)&&(o=c.user,i=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(o)}catch(s){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ua(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(or(this.app))return Promise.reject(Fr(this));const t=e?Wr(e):null;return t&&le(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return or(this.app)?Promise.reject(Fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return or(this.app)?Promise.reject(Fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WC(this),t=new qC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await UC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pn(e)||this._popupRedirectResolver;le(t,this,"argument-error"),this.redirectPersistenceManager=await ko.create(this,[Pn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,o){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let s=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{s||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,o);return()=>{s=!0,c()}}else{const c=e.addObserver(t);return()=>{s=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&EC(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ru(n){return Wr(n)}class _h{constructor(e){this.auth=e,this.observer=null,this.addObserver=r_(t=>this.observer=t)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YC(n){xu=n}function QC(n){return xu.loadJS(n)}function XC(){return xu.gapiScript}function JC(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(n,e){const t=eu(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),i=t.getOptions();if(ea(i,e??{}))return o;Bn(o,"already-initialized")}return t.initialize({options:e})}function eT(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Pn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function tT(n,e,t){const r=Ru(n);le(r._canInitEmulator,r,"emulator-config-failed"),le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,i=Jm(e),{host:s,port:l}=nT(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:o})}),rT()}function Jm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function nT(n){const e=Jm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const i=o[1];return{host:i,port:wh(r.substr(i.length+1))}}else{const[i,s]=r.split(":");return{host:i,port:wh(s)}}}function wh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function rT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,t){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(n,e){return DC(n,"POST","/v1/accounts:signInWithIdp",Eu(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT="http://localhost";class Hr extends Zm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Bn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=t,i=Cu(t,["providerId","signInMethod"]);if(!r||!o)return null;const s=new Hr(r,o);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Co(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Co(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Co(e,t)}buildRequest(){const e={requestUri:oT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Gi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends eb{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends es{constructor(){super("facebook.com")}static credential(e){return Hr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends es{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Hr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Zn.credential(t,r)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends es{constructor(){super("github.com")}static credential(e){return Hr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.GITHUB_SIGN_IN_METHOD="github.com";er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends es{constructor(){super("twitter.com")}static credential(e,t){return Hr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return tr.credential(t,r)}catch{return null}}}tr.TWITTER_SIGN_IN_METHOD="twitter.com";tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,o=!1){const i=await xn._fromIdTokenResponse(e,r,o),s=kh(r);return new Po({user:i,providerId:s,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const o=kh(r);return new Po({user:e,providerId:o,_tokenResponse:r,operationType:t})}}function kh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da extends Un{constructor(e,t,r,o){var i;super(t.code,t.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,da.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,o){return new da(e,t,r,o)}}function tb(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?da._fromErrorAndOperation(n,i,e,r):i})}async function iT(n,e,t=!1){const r=await Mi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Po._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sT(n,e,t=!1){const{auth:r}=n;if(or(r.app))return Promise.reject(Fr(r));const o="reauthenticate";try{const i=await Mi(n,tb(r,o,e,n),t);le(i.idToken,r,"internal-error");const s=Iu(i.idToken);le(s,r,"internal-error");const{sub:l}=s;return le(n.uid===l,r,"user-mismatch"),Po._forOperation(n,o,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Bn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aT(n,e,t=!1){if(or(n.app))return Promise.reject(Fr(n));const r="signIn",o=await tb(n,r,e),i=await Po._fromIdTokenResponse(n,r,o);return t||await n._updateCurrentUser(i.user),i}function lT(n,e,t,r){return Wr(n).onIdTokenChanged(e,t,r)}function cT(n,e,t){return Wr(n).beforeAuthStateChanged(e,t)}const fa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fa,"1"),this.storage.removeItem(fa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=1e3,dT=10;class rb extends nb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),o=this.localCache[t];r!==o&&e(t,o,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((s,l,c)=>{this.notifyListeners(s,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const s=this.storage.getItem(r);!t&&this.localCache[r]===s||this.notifyListeners(r,s)},i=this.storage.getItem(r);zC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,dT):o()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},uT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}rb.type="LOCAL";const fT=rb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob extends nb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ob.type="SESSION";const ib=ob;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const r=new Wa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:o,data:i}=t.data,s=this.handlersMap[o];if(!(s!=null&&s.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const l=Array.from(s).map(async d=>d(t.origin,i)),c=await hT(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let i,s;return new Promise((l,c)=>{const d=Pu("",20);o.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);s={messageChannel:o,onMessage(p){const g=p;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(s),o.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[o.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(){return window}function gT(n){bn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(){return typeof bn().WorkerGlobalScope<"u"&&typeof bn().importScripts=="function"}async function mT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bT(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function yT(){return sb()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab="firebaseLocalStorageDb",vT=1,ha="firebaseLocalStorage",lb="fbase_key";class ts{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ka(n,e){return n.transaction([ha],e?"readwrite":"readonly").objectStore(ha)}function _T(){const n=indexedDB.deleteDatabase(ab);return new ts(n).toPromise()}function Sc(){const n=indexedDB.open(ab,vT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ha,{keyPath:lb})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ha)?e(r):(r.close(),await _T(),e(await Sc()))})})}async function Ch(n,e,t){const r=Ka(n,!0).put({[lb]:e,value:t});return new ts(r).toPromise()}async function wT(n,e){const t=Ka(n,!1).get(e),r=await new ts(t).toPromise();return r===void 0?null:r.value}function Th(n,e){const t=Ka(n,!0).delete(e);return new ts(t).toPromise()}const kT=800,CT=3;class cb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>CT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wa._getInstance(yT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await mT(),!this.activeServiceWorker)return;this.sender=new pT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sc();return await Ch(e,fa,"1"),await Th(e,fa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ch(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>wT(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Th(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const i=Ka(o,!1).getAll();return new ts(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:i}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(i)&&(this.notifyListeners(o,i),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cb.type="LOCAL";const TT=cb;new Zi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(n,e){return e?Pn(e):(le(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends Zm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Co(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Co(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Co(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ET(n){return aT(n.auth,new Du(n),n.bypassAuthState)}function IT(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),sT(t,new Du(n),n.bypassAuthState)}async function AT(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),iT(t,new Du(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,t,r,o,i=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:o,tenantId:i,error:s,type:l}=e;if(s){this.reject(s);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ET;case"linkViaPopup":case"linkViaRedirect":return AT;case"reauthViaPopup":case"reauthViaRedirect":return IT;default:Bn(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=new Zi(2e3,1e4);class lo extends ub{constructor(e,t,r,o,i){super(e,t,o,i),this.provider=r,this.authWindow=null,this.pollId=null,lo.currentPopupAction&&lo.currentPopupAction.cancel(),lo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=Pu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RT.get())};e()}}lo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="pendingRedirect",zs=new Map;class PT extends ub{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=zs.get(this.auth._key());if(!e){try{const r=await DT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}zs.set(this.auth._key(),e)}return this.bypassAuthState||zs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DT(n,e){const t=VT(e),r=MT(n);if(!await r._isAvailable())return!1;const o=await r._get(t)==="true";return await r._remove(t),o}function OT(n,e){zs.set(n._key(),e)}function MT(n){return Pn(n._redirectPersistence)}function VT(n){return js(xT,n.config.apiKey,n.name)}async function NT(n,e,t=!1){if(or(n.app))return Promise.reject(Fr(n));const r=Ru(n),o=ST(r,e),s=await new PT(r,o,t).execute();return s&&!t&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=10*60*1e3;class LT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$T(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!db(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(mn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sh(e))}saveEventToCache(e){this.cachedEventUids.add(Sh(e)),this.lastProcessedEventTime=Date.now()}}function Sh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function db({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $T(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return db(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT(n,e={}){return No(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jT=/^https?/;async function zT(n){if(n.config.emulator)return;const{authorizedDomains:e}=await FT(n);for(const t of e)try{if(HT(t))return}catch{}Bn(n,"unauthorized-domain")}function HT(n){const e=Cc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const s=new URL(n);return s.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&s.hostname===r}if(!jT.test(t))return!1;if(UT.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=new Zi(3e4,6e4);function Eh(){const n=bn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function KT(n){return new Promise((e,t)=>{var r,o,i;function s(){Eh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Eh(),t(mn(n,"network-request-failed"))},timeout:WT.get()})}if(!((o=(r=bn().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((i=bn().gapi)===null||i===void 0)&&i.load)s();else{const l=JC("iframefcb");return bn()[l]=()=>{gapi.load?s():t(mn(n,"network-request-failed"))},QC(`${XC()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Hs=null,e})}let Hs=null;function qT(n){return Hs=Hs||KT(n),Hs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=new Zi(5e3,15e3),YT="__/auth/iframe",QT="emulator/auth/iframe",XT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZT(n){const e=n.config;le(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Su(e,QT):`https://${n.config.authDomain}/${YT}`,r={apiKey:e.apiKey,appName:n.name,v:Do},o=JT.get(n.config.apiHost);o&&(r.eid=o);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Gi(r).slice(1)}`}async function eS(n){const e=await qT(n),t=bn().gapi;return le(t,n,"internal-error"),e.open({where:document.body,url:ZT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XT,dontclear:!0},r=>new Promise(async(o,i)=>{await r.restyle({setHideOnLeave:!1});const s=mn(n,"network-request-failed"),l=bn().setTimeout(()=>{i(s)},GT.get());function c(){bn().clearTimeout(l),o(r)}r.ping(c).then(c,()=>{i(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nS=500,rS=600,oS="_blank",iS="http://localhost";class Ih{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sS(n,e,t,r=nS,o=rS){const i=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},tS),{width:r.toString(),height:o.toString(),top:i,left:s}),d=St().toLowerCase();t&&(l=Wm(d)?oS:t),zm(d)&&(e=e||iS,c.scrollbars="yes");const u=Object.entries(c).reduce((g,[b,k])=>`${g}${b}=${k},`,"");if(jC(d)&&l!=="_self")return aS(e||"",l),new Ih(null);const p=window.open(e||"",l,u);le(p,n,"popup-blocked");try{p.focus()}catch{}return new Ih(p)}function aS(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS="__/auth/handler",cS="emulator/auth/handler",uS=encodeURIComponent("fac");async function Ah(n,e,t,r,o,i){le(n.config.authDomain,n,"auth-domain-config-required"),le(n.config.apiKey,n,"invalid-api-key");const s={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Do,eventId:o};if(e instanceof eb){e.setDefaultLanguage(n.languageCode),s.providerId=e.providerId||"",n_(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,p]of Object.entries({}))s[u]=p}if(e instanceof es){const u=e.getScopes().filter(p=>p!=="");u.length>0&&(s.scopes=u.join(","))}n.tenantId&&(s.tid=n.tenantId);const l=s;for(const u of Object.keys(l))l[u]===void 0&&delete l[u];const c=await n._getAppCheckToken(),d=c?`#${uS}=${encodeURIComponent(c)}`:"";return`${dS(n)}?${Gi(l).slice(1)}${d}`}function dS({config:n}){return n.emulator?Su(n,cS):`https://${n.authDomain}/${lS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="webStorageSupport";class fS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ib,this._completeRedirectFn=NT,this._overrideRedirectResult=OT}async _openPopup(e,t,r,o){var i;Ln((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await Ah(e,t,r,Cc(),o);return sS(e,s,Pu())}async _openRedirect(e,t,r,o){await this._originValidation(e);const i=await Ah(e,t,r,Cc(),o);return gT(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:i}=this.eventManagers[t];return o?Promise.resolve(o):(Ln(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await eS(e),r=new LT(e);return t.register("authEvent",o=>(le(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ml,{type:Ml},o=>{var i;const s=(i=o==null?void 0:o[0])===null||i===void 0?void 0:i[Ml];s!==void 0&&t(!!s),Bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qm()||Hm()||Au()}}const hS=fS;var Rh="@firebase/auth",xh="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mS(n){To(new jr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:l}=r.options;le(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xm(n)},d=new GC(r,o,i,c);return eT(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),To(new jr("auth-internal",e=>{const t=Ru(e.getProvider("auth").getImmediate());return(r=>new pS(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ur(Rh,xh,gS(n)),ur(Rh,xh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=5*60,yS=Eg("authIdTokenMaxAge")||bS;let Ph=null;const vS=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>yS)return;const o=t==null?void 0:t.token;Ph!==o&&(Ph=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function _S(n=xg()){const e=eu(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ZC(n,{popupRedirectResolver:hS,persistence:[TT,fT,ib]}),r=Eg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const s=vS(i.toString());cT(t,s,()=>s(t.currentUser)),lT(t,l=>s(l))}}const o=Tg("auth");return o&&tT(t,`http://${o}`),t}function wS(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}YC({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const i=mn("internal-error");i.customData=o,t(i)},r.type="text/javascript",r.charset="UTF-8",wS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mS("Browser");const kS={id:"vue-app"},CS={key:0},Ec={__name:"App.ce",props:["fbconfig"],setup(n){const e=n,t=On(!1);if(e.fbconfig){const r=Rg(e.fbconfig),o=X1(r);_S(r),Ms("fbApp",r),Ms("fbDatabase",o),Ms("fbAuth",o),t.value=!0}return(r,o)=>(K(),ee("div",kS,[o[1]||(o[1]=me("h1",null,"My Vue App Web Component",-1)),t.value?(K(),ee("div",CS,[Te(kC,{myprop:"My received prop in vue "}),Te(yC,{onIncreased:o[0]||(o[0]=i=>console.log("increased"))})])):xe("",!0)]))}},TS={};function SS(n,e){const t=bo("DatePicker");return K(),ee("div",null,[e[0]||(e[0]=me("h3",null,"My Prime App Web Component",-1)),Te(t)])}const ES=ku(TS,[["render",SS]]);var IS=Object.defineProperty,Dh=Object.getOwnPropertySymbols,AS=Object.prototype.hasOwnProperty,RS=Object.prototype.propertyIsEnumerable,Oh=(n,e,t)=>e in n?IS(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,xS=(n,e)=>{for(var t in e||(e={}))AS.call(e,t)&&Oh(n,t,e[t]);if(Dh)for(var t of Dh(e))RS.call(e,t)&&Oh(n,t,e[t]);return n};function qr(n){return n==null||n===""||Array.isArray(n)&&n.length===0||!(n instanceof Date)&&typeof n=="object"&&Object.keys(n).length===0}function Ou(n){return!!(n&&n.constructor&&n.call&&n.apply)}function Le(n){return!qr(n)}function _n(n,e=!0){return n instanceof Object&&n.constructor===Object&&(e||Object.keys(n).length!==0)}function Kt(n,...e){return Ou(n)?n(...e):n}function Nt(n,e=!0){return typeof n=="string"&&(e||n!=="")}function Zt(n){return Nt(n)?n.replace(/(-|_)/g,"").toLowerCase():n}function Mu(n,e="",t={}){const r=Zt(e).split("."),o=r.shift();return o?_n(n)?Mu(Kt(n[Object.keys(n).find(i=>Zt(i)===o)||""],t),r.join("."),t):void 0:Kt(n,t)}function qa(n,e=!0){return Array.isArray(n)&&(e||n.length!==0)}function PS(n){return Le(n)&&!isNaN(n)}function DS(){return new Intl.Collator(void 0,{numeric:!0}).compare}function Dn(n,e){if(e){const t=e.test(n);return e.lastIndex=0,t}return!1}function OS(...n){const e=(t={},r={})=>{const o=xS({},t);return Object.keys(r).forEach(i=>{_n(r[i])&&i in t&&_n(t[i])?o[i]=e(t[i],r[i]):o[i]=r[i]}),o};return n.reduce((t,r,o)=>o===0?r:e(t,r),{})}function vi(n){return n&&n.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function MS(n){return Nt(n,!1)?n[0].toUpperCase()+n.slice(1):n}function fb(n){return Nt(n)?n.replace(/(_)/g,"-").replace(/[A-Z]/g,(e,t)=>t===0?e:"-"+e.toLowerCase()).toLowerCase():n}function Mh(n){return Nt(n)?n.replace(/[A-Z]/g,(e,t)=>t===0?e:"."+e.toLowerCase()).toLowerCase():n}function Vu(){const n=new Map;return{on(e,t){let r=n.get(e);return r?r.push(t):r=[t],n.set(e,r),this},off(e,t){let r=n.get(e);return r&&r.splice(r.indexOf(t)>>>0,1),this},emit(e,t){let r=n.get(e);r&&r.slice().map(o=>{o(t)})},clear(){n.clear()}}}var VS=Object.defineProperty,NS=Object.defineProperties,BS=Object.getOwnPropertyDescriptors,pa=Object.getOwnPropertySymbols,hb=Object.prototype.hasOwnProperty,pb=Object.prototype.propertyIsEnumerable,Vh=(n,e,t)=>e in n?VS(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,en=(n,e)=>{for(var t in e||(e={}))hb.call(e,t)&&Vh(n,t,e[t]);if(pa)for(var t of pa(e))pb.call(e,t)&&Vh(n,t,e[t]);return n},Vl=(n,e)=>NS(n,BS(e)),Sn=(n,e)=>{var t={};for(var r in n)hb.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&pa)for(var r of pa(n))e.indexOf(r)<0&&pb.call(n,r)&&(t[r]=n[r]);return t},LS=Vu(),Jt=LS;function Nh(n,e){qa(n)?n.push(...e||[]):_n(n)&&Object.assign(n,e)}function $S(n){return _n(n)&&n.hasOwnProperty("value")&&n.hasOwnProperty("type")?n.value:n}function FS(n){return n.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Ic(n="",e=""){return FS(`${Nt(n,!1)&&Nt(e,!1)?`${n}-`:n}${e}`)}function gb(n="",e=""){return`--${Ic(n,e)}`}function US(n=""){const e=(n.match(/{/g)||[]).length,t=(n.match(/}/g)||[]).length;return(e+t)%2!==0}function mb(n,e="",t="",r=[],o){if(Nt(n)){const i=/{([^}]*)}/g,s=n.trim();if(US(s))return;if(Dn(s,i)){const l=s.replaceAll(i,u=>{const g=u.replace(/{|}/g,"").split(".").filter(b=>!r.some(k=>Dn(b,k)));return`var(${gb(t,fb(g.join("-")))}${Le(o)?`, ${o}`:""})`}),c=/(\d+\s+[\+\-\*\/]\s+\d+)/g,d=/var\([^)]+\)/g;return Dn(l.replace(d,"0"),c)?`calc(${l})`:l}return s}else if(PS(n))return n}function jS(n,e,t){Nt(e,!1)&&n.push(`${e}:${t};`)}function ao(n,e){return n?`${n}{${e}}`:""}var _i=(...n)=>zS(De.getTheme(),...n),zS=(n={},e,t,r)=>{if(e){const{variable:o,options:i}=De.defaults||{},{prefix:s,transform:l}=(n==null?void 0:n.options)||i||{},d=Dn(e,/{([^}]*)}/g)?e:`{${e}}`;return r==="value"||qr(r)&&l==="strict"?De.getTokenValue(e):mb(d,void 0,s,[o.excludedKeyRegex],t)}return""};function HS(n,e={}){const t=De.defaults.variable,{prefix:r=t.prefix,selector:o=t.selector,excludedKeyRegex:i=t.excludedKeyRegex}=e,s=(d,u="")=>Object.entries(d).reduce((p,[g,b])=>{const k=Dn(g,i)?Ic(u):Ic(u,fb(g)),A=$S(b);if(_n(A)){const{variables:P,tokens:N}=s(A,k);Nh(p.tokens,N),Nh(p.variables,P)}else p.tokens.push((r?k.replace(`${r}-`,""):k).replaceAll("-",".")),jS(p.variables,gb(k),mb(A,k,r,[i]));return p},{variables:[],tokens:[]}),{variables:l,tokens:c}=s(n,r);return{value:l,tokens:c,declarations:l.join(""),css:ao(o,l.join(""))}}var Qt={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(n){return{type:"class",selector:n,matched:this.pattern.test(n.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(n){return{type:"attr",selector:`:root${n}`,matched:this.pattern.test(n.trim())}}},media:{pattern:/^@media (.*)$/,resolve(n){return{type:"media",selector:`${n}{:root{[CSS]}}`,matched:this.pattern.test(n.trim())}}},system:{pattern:/^system$/,resolve(n){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(n.trim())}}},custom:{resolve(n){return{type:"custom",selector:n,matched:!0}}}},resolve(n){const e=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[n].flat().map(t=>{var r;return(r=e.map(o=>o.resolve(t)).find(o=>o.matched))!=null?r:this.rules.custom.resolve(t)})}},_toVariables(n,e){return HS(n,{prefix:e==null?void 0:e.prefix})},getCommon({name:n="",theme:e={},params:t,set:r,defaults:o}){var i,s,l,c,d,u,p;const{preset:g,options:b}=e;let k,A,P,N,L,x,D;if(Le(g)&&b.transform!=="strict"){const{primitive:X,semantic:Q,extend:E}=g,v=Q||{},{colorScheme:y}=v,w=Sn(v,["colorScheme"]),S=E||{},{colorScheme:C}=S,_=Sn(S,["colorScheme"]),pe=y||{},{dark:Ne}=pe,Ie=Sn(pe,["dark"]),ce=C||{},{dark:ae}=ce,ot=Sn(ce,["dark"]),at=Le(X)?this._toVariables({primitive:X},b):{},Ze=Le(w)?this._toVariables({semantic:w},b):{},Oe=Le(Ie)?this._toVariables({light:Ie},b):{},ze=Le(Ne)?this._toVariables({dark:Ne},b):{},rn=Le(_)?this._toVariables({semantic:_},b):{},on=Le(ot)?this._toVariables({light:ot},b):{},sn=Le(ae)?this._toVariables({dark:ae},b):{},[Gt,_r]=[(i=at.declarations)!=null?i:"",at.tokens],[Gr,jt]=[(s=Ze.declarations)!=null?s:"",Ze.tokens||[]],[wr,T]=[(l=Oe.declarations)!=null?l:"",Oe.tokens||[]],[I,M]=[(c=ze.declarations)!=null?c:"",ze.tokens||[]],[$,B]=[(d=rn.declarations)!=null?d:"",rn.tokens||[]],[F,q]=[(u=on.declarations)!=null?u:"",on.tokens||[]],[H,z]=[(p=sn.declarations)!=null?p:"",sn.tokens||[]];k=this.transformCSS(n,Gt,"light","variable",b,r,o),A=_r;const U=this.transformCSS(n,`${Gr}${wr}`,"light","variable",b,r,o),te=this.transformCSS(n,`${I}`,"dark","variable",b,r,o);P=`${U}${te}`,N=[...new Set([...jt,...T,...M])];const Y=this.transformCSS(n,`${$}${F}color-scheme:light`,"light","variable",b,r,o),Z=this.transformCSS(n,`${H}color-scheme:dark`,"dark","variable",b,r,o);L=`${Y}${Z}`,x=[...new Set([...B,...q,...z])],D=Kt(g.css,{dt:_i})}return{primitive:{css:k,tokens:A},semantic:{css:P,tokens:N},global:{css:L,tokens:x},style:D}},getPreset({name:n="",preset:e={},options:t,params:r,set:o,defaults:i,selector:s}){var l,c,d;let u,p,g;if(Le(e)&&t.transform!=="strict"){const b=n.replace("-directive",""),k=e,{colorScheme:A,extend:P,css:N}=k,L=Sn(k,["colorScheme","extend","css"]),x=P||{},{colorScheme:D}=x,X=Sn(x,["colorScheme"]),Q=A||{},{dark:E}=Q,v=Sn(Q,["dark"]),y=D||{},{dark:w}=y,S=Sn(y,["dark"]),C=Le(L)?this._toVariables({[b]:en(en({},L),X)},t):{},_=Le(v)?this._toVariables({[b]:en(en({},v),S)},t):{},pe=Le(E)?this._toVariables({[b]:en(en({},E),w)},t):{},[Ne,Ie]=[(l=C.declarations)!=null?l:"",C.tokens||[]],[ce,ae]=[(c=_.declarations)!=null?c:"",_.tokens||[]],[ot,at]=[(d=pe.declarations)!=null?d:"",pe.tokens||[]],Ze=this.transformCSS(b,`${Ne}${ce}`,"light","variable",t,o,i,s),Oe=this.transformCSS(b,ot,"dark","variable",t,o,i,s);u=`${Ze}${Oe}`,p=[...new Set([...Ie,...ae,...at])],g=Kt(N,{dt:_i})}return{css:u,tokens:p,style:g}},getPresetC({name:n="",theme:e={},params:t,set:r,defaults:o}){var i;const{preset:s,options:l}=e,c=(i=s==null?void 0:s.components)==null?void 0:i[n];return this.getPreset({name:n,preset:c,options:l,params:t,set:r,defaults:o})},getPresetD({name:n="",theme:e={},params:t,set:r,defaults:o}){var i;const s=n.replace("-directive",""),{preset:l,options:c}=e,d=(i=l==null?void 0:l.directives)==null?void 0:i[s];return this.getPreset({name:s,preset:d,options:c,params:t,set:r,defaults:o})},applyDarkColorScheme(n){return!(n.darkModeSelector==="none"||n.darkModeSelector===!1)},getColorSchemeOption(n,e){var t;return this.applyDarkColorScheme(n)?this.regex.resolve(n.darkModeSelector===!0?e.options.darkModeSelector:(t=n.darkModeSelector)!=null?t:e.options.darkModeSelector):[]},getLayerOrder(n,e={},t,r){const{cssLayer:o}=e;return o?`@layer ${Kt(o.order||"primeui",t)}`:""},getCommonStyleSheet({name:n="",theme:e={},params:t,props:r={},set:o,defaults:i}){const s=this.getCommon({name:n,theme:e,params:t,set:o,defaults:i}),l=Object.entries(r).reduce((c,[d,u])=>c.push(`${d}="${u}"`)&&c,[]).join(" ");return Object.entries(s||{}).reduce((c,[d,u])=>{if(u!=null&&u.css){const p=vi(u==null?void 0:u.css),g=`${d}-variables`;c.push(`<style type="text/css" data-primevue-style-id="${g}" ${l}>${p}</style>`)}return c},[]).join("")},getStyleSheet({name:n="",theme:e={},params:t,props:r={},set:o,defaults:i}){var s;const l={name:n,theme:e,params:t,set:o,defaults:i},c=(s=n.includes("-directive")?this.getPresetD(l):this.getPresetC(l))==null?void 0:s.css,d=Object.entries(r).reduce((u,[p,g])=>u.push(`${p}="${g}"`)&&u,[]).join(" ");return c?`<style type="text/css" data-primevue-style-id="${n}-variables" ${d}>${vi(c)}</style>`:""},createTokens(n={},e,t="",r="",o={}){return Object.entries(n).forEach(([i,s])=>{const l=Dn(i,e.variable.excludedKeyRegex)?t:t?`${t}.${Mh(i)}`:Mh(i),c=r?`${r}.${i}`:i;_n(s)?this.createTokens(s,e,l,c,o):(o[l]||(o[l]={paths:[],computed(d,u={}){var p,g;return this.paths.length===1?(p=this.paths[0])==null?void 0:p.computed(this.paths[0].scheme,u.binding):d&&d!=="none"?(g=this.paths.find(b=>b.scheme===d))==null?void 0:g.computed(d,u.binding):this.paths.map(b=>b.computed(b.scheme,u[b.scheme]))}}),o[l].paths.push({path:c,value:s,scheme:c.includes("colorScheme.light")?"light":c.includes("colorScheme.dark")?"dark":"none",computed(d,u={}){const p=/{([^}]*)}/g;let g=s;if(u.name=this.path,u.binding||(u.binding={}),Dn(s,p)){const k=s.trim().replaceAll(p,N=>{var L;const x=N.replace(/{|}/g,""),D=(L=o[x])==null?void 0:L.computed(d,u);return qa(D)&&D.length===2?`light-dark(${D[0].value},${D[1].value})`:D==null?void 0:D.value}),A=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,P=/var\([^)]+\)/g;g=Dn(k.replace(P,"0"),A)?`calc(${k})`:k}return qr(u.binding)&&delete u.binding,{colorScheme:d,path:this.path,paths:u,value:g.includes("undefined")?void 0:g}}}))}),o},getTokenValue(n,e,t){var r;const i=(c=>c.split(".").filter(u=>!Dn(u.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(e),s=e.includes("colorScheme.light")?"light":e.includes("colorScheme.dark")?"dark":void 0,l=[(r=n[i])==null?void 0:r.computed(s)].flat().filter(c=>c);return l.length===1?l[0].value:l.reduce((c={},d)=>{const u=d,{colorScheme:p}=u,g=Sn(u,["colorScheme"]);return c[p]=g,c},void 0)},getSelectorRule(n,e,t,r){return t==="class"||t==="attr"?ao(Le(e)?`${n}${e},${n} ${e}`:n,r):ao(n,Le(e)?ao(e,r):r)},transformCSS(n,e,t,r,o={},i,s,l){if(Le(e)){const{cssLayer:c}=o;if(r!=="style"){const d=this.getColorSchemeOption(o,s);e=t==="dark"?d.reduce((u,{type:p,selector:g})=>(Le(g)&&(u+=g.includes("[CSS]")?g.replace("[CSS]",e):this.getSelectorRule(g,l,p,e)),u),""):ao(l??":root",e)}if(c){const d={name:"primeui",order:"primeui"};_n(c)&&(d.name=Kt(c.name,{name:n,type:r})),Le(d.name)&&(e=ao(`@layer ${d.name}`,e),i==null||i.layerNames(d.name))}return e}return""}},De={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(n={}){const{theme:e}=n;e&&(this._theme=Vl(en({},e),{options:en(en({},this.defaults.options),e.options)}),this._tokens=Qt.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var n;return((n=this.theme)==null?void 0:n.preset)||{}},get options(){var n;return((n=this.theme)==null?void 0:n.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(n){this.update({theme:n}),Jt.emit("theme:change",n)},getPreset(){return this.preset},setPreset(n){this._theme=Vl(en({},this.theme),{preset:n}),this._tokens=Qt.createTokens(n,this.defaults),this.clearLoadedStyleNames(),Jt.emit("preset:change",n),Jt.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(n){this._theme=Vl(en({},this.theme),{options:n}),this.clearLoadedStyleNames(),Jt.emit("options:change",n),Jt.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(n){this._layerNames.add(n)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(n){return this._loadedStyleNames.has(n)},setLoadedStyleName(n){this._loadedStyleNames.add(n)},deleteLoadedStyleName(n){this._loadedStyleNames.delete(n)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(n){return Qt.getTokenValue(this.tokens,n,this.defaults)},getCommon(n="",e){return Qt.getCommon({name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(n="",e){const t={name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Qt.getPresetC(t)},getDirective(n="",e){const t={name:n,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Qt.getPresetD(t)},getCustomPreset(n="",e,t,r){const o={name:n,preset:e,options:this.options,selector:t,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Qt.getPreset(o)},getLayerOrderCSS(n=""){return Qt.getLayerOrder(n,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(n="",e,t="style",r){return Qt.transformCSS(n,e,r,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(n="",e,t={}){return Qt.getCommonStyleSheet({name:n,theme:this.theme,params:e,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(n,e,t={}){return Qt.getStyleSheet({name:n,theme:this.theme,params:e,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(n){this._loadingStyles.add(n)},onStyleUpdated(n){this._loadingStyles.add(n)},onStyleLoaded(n,{name:e}){this._loadingStyles.size&&(this._loadingStyles.delete(e),Jt.emit(`theme:${e}:load`,n),!this._loadingStyles.size&&Jt.emit("theme:load"))}};function WS(n,e){return n?n.classList?n.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(n.className):!1}function KS(n,e){if(n&&e){const t=r=>{WS(n,r)||(n.classList?n.classList.add(r):n.className+=" "+r)};[e].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function ga(n){for(const e of document==null?void 0:document.styleSheets)try{for(const t of e==null?void 0:e.cssRules)for(const r of t==null?void 0:t.style)if(n.test(r))return{name:r,value:t.style.getPropertyValue(r).trim()}}catch{}return null}function Nl(n,e){if(n&&e){const t=r=>{n.classList?n.classList.remove(r):n.className=n.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," ")};[e].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function bb(n){let e={width:0,height:0};return n&&(n.style.visibility="hidden",n.style.display="block",e.width=n.offsetWidth,e.height=n.offsetHeight,n.style.display="none",n.style.visibility="visible"),e}function yb(){let n=window,e=document,t=e.documentElement,r=e.getElementsByTagName("body")[0],o=n.innerWidth||t.clientWidth||r.clientWidth,i=n.innerHeight||t.clientHeight||r.clientHeight;return{width:o,height:i}}function qS(){let n=document.documentElement;return(window.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}function GS(){let n=document.documentElement;return(window.pageYOffset||n.scrollTop)-(n.clientTop||0)}function YS(n,e,t=!0){var r,o,i,s;if(n){const l=n.offsetParent?{width:n.offsetWidth,height:n.offsetHeight}:bb(n),c=l.height,d=l.width,u=e.offsetHeight,p=e.offsetWidth,g=e.getBoundingClientRect(),b=GS(),k=qS(),A=yb();let P,N,L="top";g.top+u+c>A.height?(P=g.top+b-c,L="bottom",P<0&&(P=b)):P=u+g.top+b,g.left+d>A.width?N=Math.max(0,g.left+k+p-d):N=g.left+k,n.style.top=P+"px",n.style.left=N+"px",n.style.transformOrigin=L,t&&(n.style.marginTop=L==="bottom"?`calc(${(o=(r=ga(/-anchor-gutter$/))==null?void 0:r.value)!=null?o:"2px"} * -1)`:(s=(i=ga(/-anchor-gutter$/))==null?void 0:i.value)!=null?s:"")}}function QS(n,e){n&&(typeof e=="string"?n.style.cssText=e:Object.entries(e||{}).forEach(([t,r])=>n.style[t]=r))}function Ws(n,e){return n instanceof HTMLElement?n.offsetWidth:0}function XS(n,e,t=!0){var r,o,i,s;if(n){const l=n.offsetParent?{width:n.offsetWidth,height:n.offsetHeight}:bb(n),c=e.offsetHeight,d=e.getBoundingClientRect(),u=yb();let p,g,b="top";d.top+c+l.height>u.height?(p=-1*l.height,b="bottom",d.top+p<0&&(p=-1*d.top)):p=c,l.width>u.width?g=d.left*-1:d.left+l.width>u.width?g=(d.left+l.width-u.width)*-1:g=0,n.style.top=p+"px",n.style.left=g+"px",n.style.transformOrigin=b,t&&(n.style.marginTop=b==="bottom"?`calc(${(o=(r=ga(/-anchor-gutter$/))==null?void 0:r.value)!=null?o:"2px"} * -1)`:(s=(i=ga(/-anchor-gutter$/))==null?void 0:i.value)!=null?s:"")}}function ns(n){return typeof HTMLElement=="object"?n instanceof HTMLElement:n&&typeof n=="object"&&n!==null&&n.nodeType===1&&typeof n.nodeName=="string"}function ma(n,e={}){if(ns(n)){const t=(r,o)=>{var i,s;const l=(i=n==null?void 0:n.$attrs)!=null&&i[r]?[(s=n==null?void 0:n.$attrs)==null?void 0:s[r]]:[];return[o].flat().reduce((c,d)=>{if(d!=null){const u=typeof d;if(u==="string"||u==="number")c.push(d);else if(u==="object"){const p=Array.isArray(d)?t(r,d):Object.entries(d).map(([g,b])=>r==="style"&&(b||b===0)?`${g.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${b}`:b?g:void 0);c=p.length?c.concat(p.filter(g=>!!g)):c}}return c},l)};Object.entries(e).forEach(([r,o])=>{if(o!=null){const i=r.match(/^on(.+)/);i?n.addEventListener(i[1].toLowerCase(),o):r==="p-bind"||r==="pBind"?ma(n,o):(o=r==="class"?[...new Set(t("class",o))].join(" ").trim():r==="style"?t("style",o).join(";").trim():o,(n.$attrs=n.$attrs||{})&&(n.$attrs[r]=o),n.setAttribute(r,o))}})}}function JS(n,e={},...t){{const r=document.createElement(n);return ma(r,e),r.append(...t),r}}function Gn(n,e){return ns(n)?Array.from(n.querySelectorAll(e)):[]}function Xt(n,e){return ns(n)?n.matches(e)?n:n.querySelector(e):null}function Dr(n,e){if(ns(n)){const t=n.getAttribute(e);return isNaN(t)?t==="true"||t==="false"?t==="true":t:+t}}function Bh(n,e=""){let t=Gn(n,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`),r=[];for(let o of t)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&r.push(o);return r}function Lh(n){if(n){let e=n.offsetHeight,t=getComputedStyle(n);return e-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),e}return 0}function Nu(n){if(n){let e=n.parentNode;return e&&e instanceof ShadowRoot&&e.host&&(e=e.host),e}return null}function ei(n){var e;if(n){let t=(e=Nu(n))==null?void 0:e.childNodes,r=0;if(t)for(let o=0;o<t.length;o++){if(t[o]===n)return r;t[o].nodeType===1&&r++}}return-1}function ZS(n){if(n){let e=n.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function eE(n,e){return n?n.offsetHeight:0}function vb(n,e=[]){const t=Nu(n);return t===null?e:vb(t,e.concat([t]))}function tE(n){let e=[];if(n){let t=vb(n);const r=/(auto|scroll)/,o=i=>{try{let s=window.getComputedStyle(i,null);return r.test(s.getPropertyValue("overflow"))||r.test(s.getPropertyValue("overflowX"))||r.test(s.getPropertyValue("overflowY"))}catch{return!1}};for(let i of t){let s=i.nodeType===1&&i.dataset.scrollselectors;if(s){let l=s.split(",");for(let c of l){let d=Xt(i,c);d&&o(d)&&e.push(d)}}i.nodeType!==9&&o(i)&&e.push(i)}}return e}function nE(n){return!!(n!==null&&typeof n<"u"&&n.nodeName&&Nu(n))}function $h(n){if(n){let e=n.offsetWidth,t=getComputedStyle(n);return e-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),e}return 0}function Bu(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function rE(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function _b(n,e="",t){ns(n)&&t!==null&&t!==void 0&&n.setAttribute(e,t)}var xs={};function Lu(n="pui_id_"){return xs.hasOwnProperty(n)||(xs[n]=0),xs[n]++,`${n}${xs[n]}`}function oE(){let n=[];const e=(s,l,c=999)=>{const d=o(s,l,c),u=d.value+(d.key===s?0:c)+1;return n.push({key:s,value:u}),u},t=s=>{n=n.filter(l=>l.value!==s)},r=(s,l)=>o(s).value,o=(s,l,c=0)=>[...n].reverse().find(d=>!0)||{key:s,value:c},i=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:i,set:(s,l,c)=>{l&&(l.style.zIndex=String(e(s,!0,c)))},clear:s=>{s&&(t(i(s)),s.style.zIndex="")},getCurrent:s=>r(s)}}var Bl=oE(),vt={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function Vi(n){"@babel/helpers - typeof";return Vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vi(n)}function Fh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Uh(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Fh(Object(t),!0).forEach(function(r){iE(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Fh(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function iE(n,e,t){return(e=sE(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function sE(n){var e=aE(n,"string");return Vi(e)=="symbol"?e:e+""}function aE(n,e){if(Vi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Vi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function lE(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;hg()?Ra(n):e?n():Hc(n)}var cE=0;function uE(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=On(!1),r=On(n),o=On(null),i=Bu()?window.document:void 0,s=e.document,l=s===void 0?i:s,c=e.immediate,d=c===void 0?!0:c,u=e.manual,p=u===void 0?!1:u,g=e.name,b=g===void 0?"style_".concat(++cE):g,k=e.id,A=k===void 0?void 0:k,P=e.media,N=P===void 0?void 0:P,L=e.nonce,x=L===void 0?void 0:L,D=e.first,X=D===void 0?!1:D,Q=e.onMounted,E=Q===void 0?void 0:Q,v=e.onUpdated,y=v===void 0?void 0:v,w=e.onLoad,S=w===void 0?void 0:w,C=e.props,_=C===void 0?{}:C,pe=function(){},Ne=function(ae){var ot=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(l){var at=Uh(Uh({},_),ot),Ze=at.name||b,Oe=at.id||A,ze=at.nonce||x;o.value=l.querySelector('style[data-primevue-style-id="'.concat(Ze,'"]'))||l.getElementById(Oe)||l.createElement("style"),o.value.isConnected||(r.value=ae||n,ma(o.value,{type:"text/css",id:Oe,media:N,nonce:ze}),X?l.head.prepend(o.value):l.head.appendChild(o.value),_b(o.value,"data-primevue-style-id",Ze),ma(o.value,at),o.value.onload=function(rn){return S==null?void 0:S(rn,{name:Ze})},E==null||E(Ze)),!t.value&&(pe=rr(r,function(rn){o.value.textContent=rn,y==null||y(Ze)},{immediate:!0}),t.value=!0)}},Ie=function(){!l||!t.value||(pe(),nE(o.value)&&l.head.removeChild(o.value),t.value=!1)};return d&&!p&&lE(Ne),{id:A,name:b,el:o,css:r,unload:Ie,load:Ne,isLoaded:Uc(t)}}function Ni(n){"@babel/helpers - typeof";return Ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ni(n)}function jh(n,e){return pE(n)||hE(n,e)||fE(n,e)||dE()}function dE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fE(n,e){if(n){if(typeof n=="string")return zh(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?zh(n,e):void 0}}function zh(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function hE(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,i,s,l=[],c=!0,d=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(c=(r=i.call(t)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(u){d=!0,o=u}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(d)throw o}}return l}}function pE(n){if(Array.isArray(n))return n}function Hh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Ll(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Hh(Object(t),!0).forEach(function(r){gE(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Hh(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function gE(n,e,t){return(e=mE(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function mE(n){var e=bE(n,"string");return Ni(e)=="symbol"?e:e+""}function bE(n,e){if(Ni(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Ni(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var yE=function(e){var t=e.dt;return`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: `.concat(t("disabled.opacity"),`;
}

.pi {
    font-size: `).concat(t("icon.size"),`;
}

.p-icon {
    width: `).concat(t("icon.size"),`;
    height: `).concat(t("icon.size"),`;
}

.p-overlay-mask {
    background: `).concat(t("mask.background"),`;
    color: `).concat(t("mask.color"),`;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation `).concat(t("mask.transition.duration"),` forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation `).concat(t("mask.transition.duration"),` forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: `).concat(t("mask.background"),`;
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: `).concat(t("mask.background"),`;
    }
    to {
        background: transparent;
    }
}
`)},vE=function(e){var t=e.dt;return`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(t("scrollbar.width"),`;
}
`)},_E={},wE={},Fe={name:"base",css:vE,theme:yE,classes:_E,inlineStyles:wE,load:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(i){return i},o=r(Kt(e,{dt:_i}));return Le(o)?uE(vi(o),Ll({name:this.name},t)):{}},loadCSS:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.css,e)},loadTheme:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.load(this.theme,t,function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return De.transformCSS(t.name||e.name,"".concat(o).concat(r))})},getCommonTheme:function(e){return De.getCommon(this.name,e)},getComponentTheme:function(e){return De.getComponent(this.name,e)},getDirectiveTheme:function(e){return De.getDirective(this.name,e)},getPresetTheme:function(e,t,r){return De.getCustomPreset(this.name,e,t,r)},getLayerOrderThemeCSS:function(){return De.getLayerOrderCSS(this.name)},getStyleSheet:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var r=Kt(this.css,{dt:_i})||"",o=vi("".concat(r).concat(e)),i=Object.entries(t).reduce(function(s,l){var c=jh(l,2),d=c[0],u=c[1];return s.push("".concat(d,'="').concat(u,'"'))&&s},[]).join(" ");return Le(o)?'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(i,">").concat(o,"</style>"):""}return""},getCommonThemeStyleSheet:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return De.getCommonStyleSheet(this.name,e,t)},getThemeStyleSheet:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[De.getStyleSheet(this.name,e,t)];if(this.theme){var o=this.name==="base"?"global-style":"".concat(this.name,"-style"),i=Kt(this.theme,{dt:_i}),s=vi(De.transformCSS(o,i)),l=Object.entries(t).reduce(function(c,d){var u=jh(d,2),p=u[0],g=u[1];return c.push("".concat(p,'="').concat(g,'"'))&&c},[]).join(" ");Le(s)&&r.push('<style type="text/css" data-primevue-style-id="'.concat(o,'" ').concat(l,">").concat(s,"</style>"))}return r.join("")},extend:function(e){return Ll(Ll({},this),{},{css:void 0,theme:void 0},e)}},co=Vu();function Bi(n){"@babel/helpers - typeof";return Bi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bi(n)}function Wh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Ps(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Wh(Object(t),!0).forEach(function(r){kE(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Wh(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function kE(n,e,t){return(e=CE(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function CE(n){var e=TE(n,"string");return Bi(e)=="symbol"?e:e+""}function TE(n,e){if(Bi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Bi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var SE={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[vt.STARTS_WITH,vt.CONTAINS,vt.NOT_CONTAINS,vt.ENDS_WITH,vt.EQUALS,vt.NOT_EQUALS],numeric:[vt.EQUALS,vt.NOT_EQUALS,vt.LESS_THAN,vt.LESS_THAN_OR_EQUAL_TO,vt.GREATER_THAN,vt.GREATER_THAN_OR_EQUAL_TO],date:[vt.DATE_IS,vt.DATE_IS_NOT,vt.DATE_BEFORE,vt.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},EE=Symbol();function IE(n,e){var t={config:Sa(e)};return n.config.globalProperties.$primevue=t,n.provide(EE,t),AE(),RE(n,t),t}var uo=[];function AE(){Jt.clear(),uo.forEach(function(n){return n==null?void 0:n()}),uo=[]}function RE(n,e){var t=On(!1),r=function(){var d;if(((d=e.config)===null||d===void 0?void 0:d.theme)!=="none"&&!De.isStyleNameLoaded("common")){var u,p,g=((u=Fe.getCommonTheme)===null||u===void 0?void 0:u.call(Fe))||{},b=g.primitive,k=g.semantic,A=g.global,P=g.style,N={nonce:(p=e.config)===null||p===void 0||(p=p.csp)===null||p===void 0?void 0:p.nonce};Fe.load(b==null?void 0:b.css,Ps({name:"primitive-variables"},N)),Fe.load(k==null?void 0:k.css,Ps({name:"semantic-variables"},N)),Fe.load(A==null?void 0:A.css,Ps({name:"global-variables"},N)),Fe.loadTheme(Ps({name:"global-style"},N),P),De.setLoadedStyleName("common")}};Jt.on("theme:change",function(c){t.value||(n.config.globalProperties.$primevue.config.theme=c,t.value=!0)});var o=rr(e.config,function(c,d){co.emit("config:change",{newValue:c,oldValue:d})},{immediate:!0,deep:!0}),i=rr(function(){return e.config.ripple},function(c,d){co.emit("config:ripple:change",{newValue:c,oldValue:d})},{immediate:!0,deep:!0}),s=rr(function(){return e.config.theme},function(c,d){t.value||De.setTheme(c),e.config.unstyled||r(),t.value=!1,co.emit("config:theme:change",{newValue:c,oldValue:d})},{immediate:!0,deep:!1}),l=rr(function(){return e.config.unstyled},function(c,d){!c&&e.config.theme&&r(),co.emit("config:unstyled:change",{newValue:c,oldValue:d})},{immediate:!0,deep:!0});uo.push(o),uo.push(i),uo.push(s),uo.push(l)}var xE={install:function(e,t){var r=OS(SE,t);IE(e,r)}},PE={root:{transitionDuration:"{transition.duration}"},panel:{borderWidth:"0 0 1px 0",borderColor:"{content.border.color}"},header:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",padding:"1.125rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},content:{borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.125rem 1.125rem 1.125rem"}},DE={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},dropdown:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",focusColor:"{surface.800}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}}},OE={root:{width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},icon:{size:"1rem"},group:{borderColor:"{content.background}",offset:"-0.75rem"},lg:{width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},xl:{width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}}},ME={root:{borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},dot:{size:"0.5rem"},sm:{fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},lg:{fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},xl:{fontSize:"1rem",minWidth:"2rem",height:"2rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}},VE={primitive:{borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1rem",anchorGutter:"2px",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.5rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.375rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.625rem"},borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.25rem 0.25rem",gap:"2px",header:{padding:"0.5rem 1rem 0.25rem 1rem"},option:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}"},optionGroup:{padding:"0.5rem 0.75rem",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.25rem 0.25rem",gap:"2px"},item:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}",gap:"0.5rem"},submenuLabel:{padding:"0.5rem 0.75rem",fontWeight:"600"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"0.75rem",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.25rem",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledHoverBackground:"{surface.50}",filledFocusBackground:"{surface.50}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",invalidPlaceholderColor:"{red.600}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.500}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.500}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}}},NE={root:{borderRadius:"{content.border.radius}"}},BE={root:{padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},item:{color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},separator:{color:"{navigation.item.icon.color}"}},LE={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",iconOnlyWidth:"2.5rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},colorScheme:{light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.600}",activeBackground:"{sky.700}",borderColor:"{sky.500}",hoverBorderColor:"{sky.600}",activeBorderColor:"{sky.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.600}",activeBackground:"{green.700}",borderColor:"{green.500}",hoverBorderColor:"{green.600}",activeBorderColor:"{green.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.600}",activeBackground:"{orange.700}",borderColor:"{orange.500}",hoverBorderColor:"{orange.600}",activeBorderColor:"{orange.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.600}",activeBackground:"{purple.700}",borderColor:"{purple.500}",hoverBorderColor:"{purple.600}",activeBorderColor:"{purple.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.600}",activeBackground:"{red.700}",borderColor:"{red.500}",hoverBorderColor:"{red.600}",activeBorderColor:"{red.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.900}",activeBackground:"{surface.800}",borderColor:"{surface.950}",hoverBorderColor:"{surface.900}",activeBorderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.200}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.200}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.200}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.200}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.200}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.200}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.700}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.700}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}}},$E={root:{background:"{content.background}",borderRadius:"{border.radius.xl}",color:"{content.color}",shadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},body:{padding:"1.25rem",gap:"0.5rem"},caption:{gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"500"},subtitle:{color:"{text.muted.color}"}},FE={root:{transitionDuration:"{transition.duration}"},content:{gap:"0.25rem"},indicatorList:{padding:"1rem",gap:"0.5rem"},indicator:{width:"2rem",height:"0.5rem",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}}},UE={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},clearIcon:{color:"{form.field.icon.color}"}},jE={root:{borderRadius:"{border.radius.sm}",width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},icon:{size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}}},zE={root:{borderRadius:"16px",paddingX:"0.75rem",paddingY:"0.5rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},image:{width:"2rem",height:"2rem"},icon:{size:"1rem"},removeIcon:{size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},colorScheme:{light:{root:{background:"{surface.100}",color:"{surface.800}"},icon:{color:"{surface.800}"},removeIcon:{color:"{surface.800}"}},dark:{root:{background:"{surface.800}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}"}}}},HE={root:{transitionDuration:"{transition.duration}"},preview:{width:"1.5rem",height:"1.5rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},panel:{shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},colorScheme:{light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}}},WE={icon:{size:"2rem",color:"{overlay.modal.color}"},content:{gap:"1rem"}},KE={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"1rem"},icon:{size:"1.5rem",color:"{overlay.popover.color}"},footer:{gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"}},qE={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}},GE={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{datatable.border.color}",padding:"0.75rem 1rem"},footerCell:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},dropPoint:{color:"{primary.color}"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},rowToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},filter:{inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},paginatorTop:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}}},YE={root:{borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},header:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},content:{background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},footer:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"}},QE={root:{transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}"},header:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},title:{gap:"0.5rem",fontWeight:"500"},dropdown:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},inputIcon:{color:"{form.field.icon.color}"},selectMonth:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},selectYear:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},group:{borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},dayView:{margin:"0.5rem 0 0 0"},weekDay:{padding:"0.25rem",fontWeight:"500",color:"{content.color}"},date:{hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2rem",height:"2rem",borderRadius:"50%",padding:"0.25rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},monthView:{margin:"0.5rem 0 0 0"},month:{padding:"0.375rem",borderRadius:"{content.border.radius}"},yearView:{margin:"0.5rem 0 0 0"},year:{padding:"0.375rem",borderRadius:"{content.border.radius}"},buttonbar:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},timePicker:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},colorScheme:{light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}}},XE={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}",gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"}},JE={root:{borderColor:"{content.border.color}"},content:{background:"{content.background}",color:"{text.color}"},horizontal:{margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},vertical:{margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}}},ZE={root:{background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},item:{borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},eI={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}"},title:{fontSize:"1.5rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"{overlay.modal.padding}"}},tI={toolbar:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},toolbarItem:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},overlayOption:{focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},content:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"}},nI={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.125rem 1.125rem 1.125rem",transitionDuration:"{transition.duration}"},legend:{background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.5rem 0.75rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},content:{padding:"0"}},rI={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},header:{background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},content:{highlightBorderColor:"{primary.color}",padding:"0 1.125rem 1.125rem 1.125rem",gap:"1rem"},file:{padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},fileList:{gap:"0.5rem"},progressbar:{height:"0.25rem"},basic:{gap:"0.5rem"}},oI={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},over:{active:{top:"-1.25rem"}},in:{input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},active:{top:"{form.field.padding.y}"}},on:{borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}}},iI={root:{borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},navButton:{background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},navIcon:{size:"1.5rem"},thumbnailsContent:{background:"{content.background}",padding:"1rem 0.25rem"},thumbnailNavButton:{size:"2rem",borderRadius:"{content.border.radius}",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},thumbnailNavButtonIcon:{size:"1rem"},caption:{background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},indicatorList:{gap:"0.5rem",padding:"1rem"},indicatorButton:{width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},insetIndicatorList:{background:"rgba(0, 0, 0, 0.5)"},insetIndicatorButton:{background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},closeButton:{size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},closeButtonIcon:{size:"1.5rem"},colorScheme:{light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}}},sI={icon:{color:"{form.field.icon.color}"}},aI={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"{form.field.padding.y}",fontSize:"0.75rem",fontWeight:"400"},input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"}},lI={root:{transitionDuration:"{transition.duration}"},preview:{icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},toolbar:{position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},action:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},cI={handle:{size:"15px",hoverSize:"30px",background:"rgba(255,255,255,0.3)",hoverBackground:"rgba(255,255,255,0.3)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},uI={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},text:{fontWeight:"500"},icon:{size:"1rem"},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}}},dI={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},display:{hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"}},fI={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},chip:{borderRadius:"{border.radius.sm}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}}},hI={addon:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.5rem",minWidth:"2.5rem"}},pI={root:{transitionDuration:"{transition.duration}"},button:{width:"2.5rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},colorScheme:{light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}}},gI={root:{gap:"0.5rem"},input:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"}}},mI={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}}},bI={root:{transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},value:{background:"{primary.color}"},range:{background:"{content.border.color}"},text:{color:"{text.muted.color}"}},yI={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}}},vI={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},overlay:{padding:"0",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},_I={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},separator:{borderColor:"{content.border.color}"}},wI={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},kI={root:{borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},content:{padding:"0.5rem 0.75rem",gap:"0.5rem",sm:{padding:"0.375rem 0.625rem"},lg:{padding:"0.625rem 0.875rem"}},text:{fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},icon:{size:"1.125rem",sm:{size:"1rem"},lg:{size:"1.25rem"}},closeButton:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem",sm:{size:"0.875rem"},lg:{size:"1.125rem"}},outlined:{root:{borderWidth:"1px"}},simple:{content:{padding:"0"}},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.600}",borderColor:"{yellow.600}"},simple:{color:"{yellow.600}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.500}",borderColor:"{surface.500}"},simple:{color:"{surface.500}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}}},CI={root:{borderRadius:"{content.border.radius}",gap:"1rem"},meters:{background:"{content.border.color}",size:"0.5rem"},label:{gap:"0.5rem"},labelMarker:{size:"0.5rem"},labelIcon:{size:"1rem"},labelList:{verticalGap:"0.5rem",horizontalGap:"1rem"}},TI={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.5rem"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"}},SI={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}},EI={root:{gutter:"0.75rem",transitionDuration:"{transition.duration}"},node:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"0.75rem 1rem",toggleablePadding:"0.75rem 1rem 1.25rem 1rem",borderRadius:"{content.border.radius}"},nodeToggleButton:{background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},connector:{color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"}},II={root:{outline:{width:"2px",color:"{content.background}"}}},AI={root:{padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},navButton:{background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},currentPageReport:{color:"{text.muted.color}"},jumpToPageInput:{maxWidth:"2.5rem"}},RI={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},header:{background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},toggleableHeader:{padding:"0.375rem 1.125rem"},title:{fontWeight:"600"},content:{padding:"0 1.125rem 1.125rem 1.125rem"},footer:{padding:"0 1.125rem 1.125rem 1.125rem"}},xI={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"1px",color:"{content.color}",padding:"0.25rem 0.25rem",borderRadius:"{content.border.radius}",first:{borderWidth:"1px",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"1px",bottomBorderRadius:"{content.border.radius}"}},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenu:{indent:"1rem"},submenuIcon:{color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"}},PI={meter:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},icon:{color:"{form.field.icon.color}"},overlay:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},content:{gap:"0.5rem"},colorScheme:{light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}}},DI={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}},OI={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}"}},MI={root:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1.25rem"},value:{background:"{primary.color}"},label:{color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"}},VI={colorScheme:{light:{root:{"color.1":"{red.500}","color.2":"{blue.500}","color.3":"{green.500}","color.4":"{yellow.500}"}},dark:{root:{"color.1":"{red.400}","color.2":"{blue.400}","color.3":"{green.400}","color.4":"{yellow.400}"}}}},NI={root:{width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},icon:{size:"0.75rem",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.5rem"},lg:{size:"1rem"}}},BI={root:{gap:"0.25rem",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},icon:{size:"1rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},LI={colorScheme:{light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}}},$I={root:{transitionDuration:"{transition.duration}"},bar:{size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{bar:{background:"{surface.100}"}},dark:{bar:{background:"{surface.800}"}}}},FI={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"}},UI={root:{borderRadius:"{form.field.border.radius}"},colorScheme:{light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}}},jI={root:{borderRadius:"{content.border.radius}"},colorScheme:{light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}}},zI={root:{transitionDuration:"{transition.duration}"},track:{background:"{content.border.color}",borderRadius:"{content.border.radius}",size:"3px"},range:{background:"{primary.color}"},handle:{width:"20px",height:"20px",borderRadius:"50%",background:"{content.border.color}",hoverBackground:"{content.border.color}",content:{borderRadius:"50%",hoverBackground:"{content.background}",width:"16px",height:"16px",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{handle:{contentBackground:"{surface.0}"}},dark:{handle:{contentBackground:"{surface.950}"}}}},HI={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"}},WI={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"}},KI={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},gutter:{background:"{content.border.color}"},handle:{size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},qI={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},step:{padding:"0.5rem",gap:"1rem"},stepHeader:{padding:"0",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},stepTitle:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},stepNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},steppanels:{padding:"0.875rem 0.5rem 1.125rem 0.5rem"},steppanel:{background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"}},GI={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}"},itemLink:{borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},itemLabel:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},itemNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},YI={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},item:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},itemIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"}},QI={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},tab:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},tabpanel:{background:"{content.background}",color:"{content.color}",padding:"0.875rem 1.125rem 1.125rem 1.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"2.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}},XI={root:{transitionDuration:"{transition.duration}"},tabList:{background:"{content.background}",borderColor:"{content.border.color}"},tab:{borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},tabPanel:{background:"{content.background}",color:"{content.color}"},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}},JI={root:{fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},icon:{size:"0.75rem"},colorScheme:{light:{primary:{background:"{primary.100}",color:"{primary.700}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.100}",color:"{green.700}"},info:{background:"{sky.100}",color:"{sky.700}"},warn:{background:"{orange.100}",color:"{orange.700}"},danger:{background:"{red.100}",color:"{red.700}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"color-mix(in srgb, {primary.500}, transparent 84%)",color:"{primary.300}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",color:"{green.300}"},info:{background:"color-mix(in srgb, {sky.500}, transparent 84%)",color:"{sky.300}"},warn:{background:"color-mix(in srgb, {orange.500}, transparent 84%)",color:"{orange.300}"},danger:{background:"color-mix(in srgb, {red.500}, transparent 84%)",color:"{red.300}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}},ZI={root:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},prompt:{gap:"0.25rem"},commandResponse:{margin:"2px 0"}},eA={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}}},tA={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}},nA={event:{minHeight:"5rem"},horizontal:{eventContent:{padding:"1rem 0"}},vertical:{eventContent:{padding:"0 1rem"}},eventMarker:{size:"1.125rem",borderRadius:"50%",borderWidth:"2px",background:"{content.background}",borderColor:"{content.border.color}",content:{borderRadius:"50%",size:"0.375rem",background:"{primary.color}",insetShadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},eventConnector:{color:"{content.border.color}",size:"2px"}},rA={root:{width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},icon:{size:"1.125rem"},content:{padding:"{overlay.popover.padding}",gap:"0.5rem"},text:{gap:"0.5rem"},summary:{fontWeight:"500",fontSize:"1rem"},detail:{fontWeight:"500",fontSize:"0.875rem"},closeButton:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem"},colorScheme:{light:{blur:"1.5px",info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{blur:"10px",info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}}},oA={root:{padding:"0.5rem 1rem",borderRadius:"{content.border.radius}",gap:"0.5rem",fontWeight:"500",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.375rem 0.75rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.625rem 1.25rem"}},icon:{disabledColor:"{form.field.disabled.color}"},content:{left:"0.25rem",top:"0.25rem",checkedShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)"},colorScheme:{light:{root:{background:"{surface.100}",checkedBackground:"{surface.100}",hoverBackground:"{surface.100}",borderColor:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}",checkedBorderColor:"{surface.100}"},content:{checkedBackground:"{surface.0}"},icon:{color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}"}},dark:{root:{background:"{surface.950}",checkedBackground:"{surface.950}",hoverBackground:"{surface.950}",borderColor:"{surface.950}",color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}",checkedBorderColor:"{surface.950}"},content:{checkedBackground:"{surface.800}"},icon:{color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}"}}}},iA={root:{width:"2.5rem",height:"1.5rem",borderRadius:"30px",gap:"0.25rem",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},handle:{borderRadius:"50%",size:"1rem"},colorScheme:{light:{root:{background:"{surface.300}",disabledBackground:"{form.field.disabled.background}",hoverBackground:"{surface.400}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.0}",disabledBackground:"{form.field.disabled.color}",hoverBackground:"{surface.0}",checkedBackground:"{surface.0}",checkedHoverBackground:"{surface.0}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.600}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.900}",hoverBackground:"{surface.300}",checkedBackground:"{surface.900}",checkedHoverBackground:"{surface.900}",color:"{surface.900}",hoverColor:"{surface.800}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}}}},sA={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.75rem"}},aA={root:{maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"},colorScheme:{light:{root:{background:"{surface.700}",color:"{surface.0}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}}},lA={root:{background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"1rem",transitionDuration:"{transition.duration}"},node:{padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.25rem"},nodeIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},nodeToggleButton:{borderRadius:"50%",size:"1.75rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},loadingIcon:{size:"2rem"},filter:{margin:"0 0 0.5rem 0"}},cA={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},tree:{padding:"{list.padding}"},clearIcon:{color:"{form.field.icon.color}"},emptyMessage:{padding:"{list.option.padding}"},chip:{borderRadius:"{border.radius.sm}"}},uA={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},footerCell:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},nodeToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}}},dA={loader:{mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}}};function Li(n){"@babel/helpers - typeof";return Li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Li(n)}function Kh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function qh(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Kh(Object(t),!0).forEach(function(r){fA(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Kh(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function fA(n,e,t){return(e=hA(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function hA(n){var e=pA(n,"string");return Li(e)=="symbol"?e:e+""}function pA(n,e){if(Li(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Li(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var gA=qh(qh({},VE),{},{components:{accordion:PE,autocomplete:DE,avatar:OE,badge:ME,blockui:NE,breadcrumb:BE,button:LE,datepicker:QE,card:$E,carousel:FE,cascadeselect:UE,checkbox:jE,chip:zE,colorpicker:HE,confirmdialog:WE,confirmpopup:KE,contextmenu:qE,dataview:YE,datatable:GE,dialog:XE,divider:JE,dock:ZE,drawer:eI,editor:tI,fieldset:nI,fileupload:rI,iftalabel:aI,floatlabel:oI,galleria:iI,iconfield:sI,image:lI,imagecompare:cI,inlinemessage:uI,inplace:dI,inputchips:fI,inputgroup:hI,inputnumber:pI,inputotp:gI,inputtext:mI,knob:bI,listbox:yI,megamenu:vI,menu:_I,menubar:wI,message:kI,metergroup:CI,multiselect:TI,orderlist:SI,organizationchart:EI,overlaybadge:II,popover:OI,paginator:AI,password:PI,panel:RI,panelmenu:xI,picklist:DI,progressbar:MI,progressspinner:VI,radiobutton:NI,rating:BI,scrollpanel:$I,select:FI,selectbutton:UI,skeleton:jI,slider:zI,speeddial:HI,splitter:KI,splitbutton:WI,stepper:qI,steps:GI,tabmenu:YI,tabs:QI,tabview:XI,textarea:eA,tieredmenu:tA,tag:JI,terminal:ZI,timeline:nA,togglebutton:oA,toggleswitch:iA,tree:lA,treeselect:cA,treetable:uA,toast:rA,toolbar:sA,virtualscroller:dA},directives:{tooltip:aA,ripple:LI}});function $i(n){"@babel/helpers - typeof";return $i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$i(n)}function mA(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function bA(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,vA(r.key),r)}}function yA(n,e,t){return bA(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function vA(n){var e=_A(n,"string");return $i(e)=="symbol"?e:e+""}function _A(n,e){if($i(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if($i(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}var wA=function(){function n(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};mA(this,n),this.element=e,this.listener=t}return yA(n,[{key:"bindScrollListener",value:function(){this.scrollableParents=tE(this.element);for(var t=0;t<this.scrollableParents.length;t++)this.scrollableParents[t].addEventListener("scroll",this.listener)}},{key:"unbindScrollListener",value:function(){if(this.scrollableParents)for(var t=0;t<this.scrollableParents.length;t++)this.scrollableParents[t].removeEventListener("scroll",this.listener)}},{key:"destroy",value:function(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}])}();function Gh(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return Lu(n)}var nr={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(e){return this._loadedStyleNames.has(e)},setLoadedStyleName:function(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName:function(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}},Yh=Fe.extend({name:"common"});function Fi(n){"@babel/helpers - typeof";return Fi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fi(n)}function kA(n){return Cb(n)||CA(n)||kb(n)||wb()}function CA(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ti(n,e){return Cb(n)||TA(n,e)||kb(n,e)||wb()}function wb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kb(n,e){if(n){if(typeof n=="string")return Qh(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Qh(n,e):void 0}}function Qh(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function TA(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,i,s,l=[],c=!0,d=!1;try{if(i=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=i.call(t)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(u){d=!0,o=u}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(d)throw o}}return l}}function Cb(n){if(Array.isArray(n))return n}function Xh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function be(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Xh(Object(t),!0).forEach(function(r){si(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Xh(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function si(n,e,t){return(e=SA(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function SA(n){var e=EA(n,"string");return Fi(e)=="symbol"?e:e+""}function EA(n,e){if(Fi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Fi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Ga={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){e||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(e){var t=this;e?(this._loadScopedThemeStyles(e),this._themeChangeListener(function(){return t._loadScopedThemeStyles(e)})):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,$attrSelector:void 0,beforeCreate:function(){var e,t,r,o,i,s,l,c,d,u,p,g=(e=this.pt)===null||e===void 0?void 0:e._usept,b=g?(t=this.pt)===null||t===void 0||(t=t.originalValue)===null||t===void 0?void 0:t[this.$.type.name]:void 0,k=g?(r=this.pt)===null||r===void 0||(r=r.value)===null||r===void 0?void 0:r[this.$.type.name]:this.pt;(o=k||b)===null||o===void 0||(o=o.hooks)===null||o===void 0||(i=o.onBeforeCreate)===null||i===void 0||i.call(o);var A=(s=this.$primevueConfig)===null||s===void 0||(s=s.pt)===null||s===void 0?void 0:s._usept,P=A?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.originalValue:void 0,N=A?(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0||(c=c.pt)===null||c===void 0?void 0:c.value:(d=this.$primevue)===null||d===void 0||(d=d.config)===null||d===void 0?void 0:d.pt;(u=N||P)===null||u===void 0||(u=u[this.$.type.name])===null||u===void 0||(u=u.hooks)===null||u===void 0||(p=u.onBeforeCreate)===null||p===void 0||p.call(u),this.$attrSelector=Lu("pc")},created:function(){this._hook("onCreated")},beforeMount:function(){this.rootEl=Xt(this.$el,'[data-pc-name="'.concat(Zt(this.$.type.name),'"]')),this.rootEl&&(this.$attrSelector&&!this.rootEl.hasAttribute(this.$attrSelector)&&this.rootEl.setAttribute(this.$attrSelector,""),this.rootEl.$pc=be({name:this.$.type.name,attrSelector:this.$attrSelector},this.$params)),this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var t=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),r=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));t==null||t(),r==null||r()}},_mergeProps:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return Ou(e)?e.apply(void 0,r):j.apply(void 0,r)},_loadStyles:function(){var e=this,t=function(){nr.isStyleNameLoaded("base")||(Fe.loadCSS(e.$styleOptions),e._loadGlobalStyles(),nr.setLoadedStyleName("base")),e._loadThemeStyles()};t(),this._themeChangeListener(t)},_loadCoreStyles:function(){var e,t;!nr.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(t=this.$style)!==null&&t!==void 0&&t.name&&(Yh.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),nr.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);Le(e)&&Fe.load(e,be({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var e,t;if(!(this.isUnstyled||this.$theme==="none")){if(!De.isStyleNameLoaded("common")){var r,o,i=((r=this.$style)===null||r===void 0||(o=r.getCommonTheme)===null||o===void 0?void 0:o.call(r))||{},s=i.primitive,l=i.semantic,c=i.global,d=i.style;Fe.load(s==null?void 0:s.css,be({name:"primitive-variables"},this.$styleOptions)),Fe.load(l==null?void 0:l.css,be({name:"semantic-variables"},this.$styleOptions)),Fe.load(c==null?void 0:c.css,be({name:"global-variables"},this.$styleOptions)),Fe.loadTheme(be({name:"global-style"},this.$styleOptions),d),De.setLoadedStyleName("common")}if(!De.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(t=this.$style)!==null&&t!==void 0&&t.name){var u,p,g,b,k=((u=this.$style)===null||u===void 0||(p=u.getComponentTheme)===null||p===void 0?void 0:p.call(u))||{},A=k.css,P=k.style;(g=this.$style)===null||g===void 0||g.load(A,be({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(b=this.$style)===null||b===void 0||b.loadTheme(be({name:"".concat(this.$style.name,"-style")},this.$styleOptions),P),De.setLoadedStyleName(this.$style.name)}if(!De.isStyleNameLoaded("layer-order")){var N,L,x=(N=this.$style)===null||N===void 0||(L=N.getLayerOrderThemeCSS)===null||L===void 0?void 0:L.call(N);Fe.load(x,be({name:"layer-order",first:!0},this.$styleOptions)),De.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(e){var t,r,o,i=((t=this.$style)===null||t===void 0||(r=t.getPresetTheme)===null||r===void 0?void 0:r.call(t,e,"[".concat(this.$attrSelector,"]")))||{},s=i.css,l=(o=this.$style)===null||o===void 0?void 0:o.load(s,be({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=l.el},_unloadScopedThemeStyles:function(){var e;(e=this.scopedStyleEl)===null||e===void 0||(e=e.value)===null||e===void 0||e.remove()},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};nr.clearLoadedStyleNames(),Jt.on("theme:change",e)},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var t;return this[e]||((t=this._getHostInstance(this))===null||t===void 0?void 0:t[e])},_getOptionValue:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Mu(e,t,r)},_getPTValue:function(){var e,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,s=/./g.test(r)&&!!o[r.split(".")[0]],l=this._getPropValue("ptOptions")||((e=this.$primevueConfig)===null||e===void 0?void 0:e.ptOptions)||{},c=l.mergeSections,d=c===void 0?!0:c,u=l.mergeProps,p=u===void 0?!1:u,g=i?s?this._useGlobalPT(this._getPTClassValue,r,o):this._useDefaultPT(this._getPTClassValue,r,o):void 0,b=s?void 0:this._getPTSelf(t,this._getPTClassValue,r,be(be({},o),{},{global:g||{}})),k=this._getPTDatasets(r);return d||!d&&b?p?this._mergeProps(p,g,b,k):be(be(be({},g),b),k):be(be({},b),k)},_getPTSelf:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return j(this._usePT.apply(this,[this._getPT(e,this.$name)].concat(r)),this._usePT.apply(this,[this.$_attrsPT].concat(r)))},_getPTDatasets:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o="data-pc-",i=r==="root"&&Le((e=this.pt)===null||e===void 0?void 0:e["data-pc-section"]);return r!=="transition"&&be(be({},r==="root"&&be(be(si({},"".concat(o,"name"),Zt(i?(t=this.pt)===null||t===void 0?void 0:t["data-pc-section"]:this.$.type.name)),i&&si({},"".concat(o,"extend"),Zt(this.$.type.name))),Bu()&&si({},"".concat(this.$attrSelector),""))),{},si({},"".concat(o,"section"),Zt(r)))},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return Nt(e)||qa(e)?{class:e}:e},_getPT:function(e){var t=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0,i=function(l){var c,d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=o?o(l):l,p=Zt(r),g=Zt(t.$name);return(c=d?p!==g?u==null?void 0:u[p]:void 0:u==null?void 0:u[p])!==null&&c!==void 0?c:u};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:i(e.originalValue),value:i(e.value)}:i(e,!0)},_usePT:function(e,t,r,o){var i=function(A){return t(A,r,o)};if(e!=null&&e.hasOwnProperty("_usept")){var s,l=e._usept||((s=this.$primevueConfig)===null||s===void 0?void 0:s.ptOptions)||{},c=l.mergeSections,d=c===void 0?!0:c,u=l.mergeProps,p=u===void 0?!1:u,g=i(e.originalValue),b=i(e.value);return g===void 0&&b===void 0?void 0:Nt(b)?b:Nt(g)?g:d||!d&&b?p?this._mergeProps(p,g,b):be(be({},g),b):b}return i(e)},_useGlobalPT:function(e,t,r){return this._usePT(this.globalPT,e,t,r)},_useDefaultPT:function(e,t,r){return this._usePT(this.defaultPT,e,t,r)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,be(be({},this.$params),t))},ptmi:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return j(this.$_attrsWithoutPT,this.ptm(e,t))},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,t,be({instance:this},r),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,be(be({},this.$params),t))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(t){var o=this._getOptionValue(this.$style.inlineStyles,e,be(be({},this.$params),r)),i=this._getOptionValue(Yh.inlineStyles,e,be(be({},this.$params),r));return[i,o]}}},computed:{globalPT:function(){var e,t=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return Kt(r,{instance:t})})},defaultPT:function(){var e,t=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return t._getOptionValue(r,t.$name,be({},t.$params))||Kt(r,be({},t.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$primevueConfig)===null||e===void 0?void 0:e.unstyled},$inProps:function(){var e,t=Object.keys(((e=this.$.vnode)===null||e===void 0?void 0:e.props)||{});return Object.fromEntries(Object.entries(this.$props).filter(function(r){var o=ti(r,1),i=o[0];return t==null?void 0:t.includes(i)}))},$theme:function(){var e;return(e=this.$primevueConfig)===null||e===void 0?void 0:e.theme},$style:function(){return be(be({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var e;return{nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}},$primevueConfig:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var e=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:e,props:e==null?void 0:e.$props,state:e==null?void 0:e.$data,attrs:e==null?void 0:e.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var t=ti(e,1),r=t[0];return r==null?void 0:r.startsWith("pt:")}).reduce(function(e,t){var r=ti(t,2),o=r[0],i=r[1],s=o.split(":"),l=kA(s),c=l.slice(1);return c==null||c.reduce(function(d,u,p,g){return!d[u]&&(d[u]=p===g.length-1?i:{}),d[u]},e),e},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var t=ti(e,1),r=t[0];return!(r!=null&&r.startsWith("pt:"))}).reduce(function(e,t){var r=ti(t,2),o=r[0],i=r[1];return e[o]=i,e},{})}}},IA=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,AA=Fe.extend({name:"baseicon",css:IA});function Ui(n){"@babel/helpers - typeof";return Ui=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ui(n)}function Jh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Zh(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Jh(Object(t),!0).forEach(function(r){RA(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Jh(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function RA(n,e,t){return(e=xA(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function xA(n){var e=PA(n,"string");return Ui(e)=="symbol"?e:e+""}function PA(n,e){if(Ui(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Ui(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Bo={name:"BaseIcon",extends:Ga,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:AA,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var e=qr(this.label);return Zh(Zh({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e})}}},Tb={name:"CalendarIcon",extends:Bo};function DA(n,e,t,r,o,i){return K(),ee("svg",j({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[me("path",{d:"M10.7838 1.51351H9.83783V0.567568C9.83783 0.417039 9.77804 0.272676 9.6716 0.166237C9.56516 0.0597971 9.42079 0 9.27027 0C9.11974 0 8.97538 0.0597971 8.86894 0.166237C8.7625 0.272676 8.7027 0.417039 8.7027 0.567568V1.51351H5.29729V0.567568C5.29729 0.417039 5.2375 0.272676 5.13106 0.166237C5.02462 0.0597971 4.88025 0 4.72973 0C4.5792 0 4.43484 0.0597971 4.3284 0.166237C4.22196 0.272676 4.16216 0.417039 4.16216 0.567568V1.51351H3.21621C2.66428 1.51351 2.13494 1.73277 1.74467 2.12305C1.35439 2.51333 1.13513 3.04266 1.13513 3.59459V11.9189C1.13513 12.4709 1.35439 13.0002 1.74467 13.3905C2.13494 13.7807 2.66428 14 3.21621 14H10.7838C11.3357 14 11.865 13.7807 12.2553 13.3905C12.6456 13.0002 12.8649 12.4709 12.8649 11.9189V3.59459C12.8649 3.04266 12.6456 2.51333 12.2553 2.12305C11.865 1.73277 11.3357 1.51351 10.7838 1.51351ZM3.21621 2.64865H4.16216V3.59459C4.16216 3.74512 4.22196 3.88949 4.3284 3.99593C4.43484 4.10237 4.5792 4.16216 4.72973 4.16216C4.88025 4.16216 5.02462 4.10237 5.13106 3.99593C5.2375 3.88949 5.29729 3.74512 5.29729 3.59459V2.64865H8.7027V3.59459C8.7027 3.74512 8.7625 3.88949 8.86894 3.99593C8.97538 4.10237 9.11974 4.16216 9.27027 4.16216C9.42079 4.16216 9.56516 4.10237 9.6716 3.99593C9.77804 3.88949 9.83783 3.74512 9.83783 3.59459V2.64865H10.7838C11.0347 2.64865 11.2753 2.74831 11.4527 2.92571C11.6301 3.10311 11.7297 3.34371 11.7297 3.59459V5.67568H2.27027V3.59459C2.27027 3.34371 2.36993 3.10311 2.54733 2.92571C2.72473 2.74831 2.96533 2.64865 3.21621 2.64865ZM10.7838 12.8649H3.21621C2.96533 12.8649 2.72473 12.7652 2.54733 12.5878C2.36993 12.4104 2.27027 12.1698 2.27027 11.9189V6.81081H11.7297V11.9189C11.7297 12.1698 11.6301 12.4104 11.4527 12.5878C11.2753 12.7652 11.0347 12.8649 10.7838 12.8649Z",fill:"currentColor"},null,-1)]),16)}Tb.render=DA;var Sb={name:"ChevronDownIcon",extends:Bo};function OA(n,e,t,r,o,i){return K(),ee("svg",j({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[me("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"},null,-1)]),16)}Sb.render=OA;var Eb={name:"ChevronLeftIcon",extends:Bo};function MA(n,e,t,r,o,i){return K(),ee("svg",j({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[me("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1)]),16)}Eb.render=MA;var Ib={name:"ChevronRightIcon",extends:Bo};function VA(n,e,t,r,o,i){return K(),ee("svg",j({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[me("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1)]),16)}Ib.render=VA;var Ab={name:"ChevronUpIcon",extends:Bo};function NA(n,e,t,r,o,i){return K(),ee("svg",j({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[me("path",{d:"M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",fill:"currentColor"},null,-1)]),16)}Ab.render=NA;var Rb={name:"SpinnerIcon",extends:Bo};function BA(n,e,t,r,o,i){return K(),ee("svg",j({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[me("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1)]),16)}Rb.render=BA;var LA=function(e){var t=e.dt;return`
.p-badge {
    display: inline-flex;
    border-radius: `.concat(t("badge.border.radius"),`;
    align-items: center;
    justify-content: center;
    padding: `).concat(t("badge.padding"),`;
    background: `).concat(t("badge.primary.background"),`;
    color: `).concat(t("badge.primary.color"),`;
    font-size: `).concat(t("badge.font.size"),`;
    font-weight: `).concat(t("badge.font.weight"),`;
    min-width: `).concat(t("badge.min.width"),`;
    height: `).concat(t("badge.height"),`;
}

.p-badge-dot {
    width: `).concat(t("badge.dot.size"),`;
    min-width: `).concat(t("badge.dot.size"),`;
    height: `).concat(t("badge.dot.size"),`;
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: `).concat(t("badge.secondary.background"),`;
    color: `).concat(t("badge.secondary.color"),`;
}

.p-badge-success {
    background: `).concat(t("badge.success.background"),`;
    color: `).concat(t("badge.success.color"),`;
}

.p-badge-info {
    background: `).concat(t("badge.info.background"),`;
    color: `).concat(t("badge.info.color"),`;
}

.p-badge-warn {
    background: `).concat(t("badge.warn.background"),`;
    color: `).concat(t("badge.warn.color"),`;
}

.p-badge-danger {
    background: `).concat(t("badge.danger.background"),`;
    color: `).concat(t("badge.danger.color"),`;
}

.p-badge-contrast {
    background: `).concat(t("badge.contrast.background"),`;
    color: `).concat(t("badge.contrast.color"),`;
}

.p-badge-sm {
    font-size: `).concat(t("badge.sm.font.size"),`;
    min-width: `).concat(t("badge.sm.min.width"),`;
    height: `).concat(t("badge.sm.height"),`;
}

.p-badge-lg {
    font-size: `).concat(t("badge.lg.font.size"),`;
    min-width: `).concat(t("badge.lg.min.width"),`;
    height: `).concat(t("badge.lg.height"),`;
}

.p-badge-xl {
    font-size: `).concat(t("badge.xl.font.size"),`;
    min-width: `).concat(t("badge.xl.min.width"),`;
    height: `).concat(t("badge.xl.height"),`;
}
`)},$A={root:function(e){var t=e.props,r=e.instance;return["p-badge p-component",{"p-badge-circle":Le(t.value)&&String(t.value).length===1,"p-badge-dot":qr(t.value)&&!r.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]}},FA=Fe.extend({name:"badge",theme:LA,classes:$A}),UA={name:"BaseBadge",extends:Ga,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:FA,provide:function(){return{$pcBadge:this,$parentInstance:this}}},xb={name:"Badge",extends:UA,inheritAttrs:!1};function jA(n,e,t,r,o,i){return K(),ee("span",j({class:n.cx("root")},n.ptmi("root")),[Be(n.$slots,"default",{},function(){return[Vr(Pe(n.value),1)]})],16)}xb.render=jA;function ji(n){"@babel/helpers - typeof";return ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ji(n)}function ep(n,e){return KA(n)||WA(n,e)||HA(n,e)||zA()}function zA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function HA(n,e){if(n){if(typeof n=="string")return tp(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?tp(n,e):void 0}}function tp(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function WA(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,i,s,l=[],c=!0,d=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(c=(r=i.call(t)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(u){d=!0,o=u}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(d)throw o}}return l}}function KA(n){if(Array.isArray(n))return n}function np(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Ce(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?np(Object(t),!0).forEach(function(r){Ac(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):np(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Ac(n,e,t){return(e=qA(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function qA(n){var e=GA(n,"string");return ji(e)=="symbol"?e:e+""}function GA(n,e){if(ji(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(ji(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var ge={_getMeta:function(){return[_n(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],Kt(_n(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(e,t){var r,o,i;return(r=(e==null||(o=e.instance)===null||o===void 0?void 0:o.$primevue)||(t==null||(i=t.ctx)===null||i===void 0||(i=i.appContext)===null||i===void 0||(i=i.config)===null||i===void 0||(i=i.globalProperties)===null||i===void 0?void 0:i.$primevue))===null||r===void 0?void 0:r.config},_getOptionValue:Mu,_getPTValue:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,c=function(){var L=ge._getOptionValue.apply(ge,arguments);return Nt(L)||qa(L)?{class:L}:L},d=((e=r.binding)===null||e===void 0||(e=e.value)===null||e===void 0?void 0:e.ptOptions)||((t=r.$primevueConfig)===null||t===void 0?void 0:t.ptOptions)||{},u=d.mergeSections,p=u===void 0?!0:u,g=d.mergeProps,b=g===void 0?!1:g,k=l?ge._useDefaultPT(r,r.defaultPT(),c,i,s):void 0,A=ge._usePT(r,ge._getPT(o,r.$name),c,i,Ce(Ce({},s),{},{global:k||{}})),P=ge._getPTDatasets(r,i);return p||!p&&A?b?ge._mergeProps(r,b,k,A,P):Ce(Ce(Ce({},k),A),P):Ce(Ce({},A),P)},_getPTDatasets:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r="data-pc-";return Ce(Ce({},t==="root"&&Ac({},"".concat(r,"name"),Zt(e.$name))),{},Ac({},"".concat(r,"section"),Zt(t)))},_getPT:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,o=function(s){var l,c=r?r(s):s,d=Zt(t);return(l=c==null?void 0:c[d])!==null&&l!==void 0?l:c};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:o(e.originalValue),value:o(e.value)}:o(e)},_usePT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,s=function(P){return r(P,o,i)};if(t!=null&&t.hasOwnProperty("_usept")){var l,c=t._usept||((l=e.$primevueConfig)===null||l===void 0?void 0:l.ptOptions)||{},d=c.mergeSections,u=d===void 0?!0:d,p=c.mergeProps,g=p===void 0?!1:p,b=s(t.originalValue),k=s(t.value);return b===void 0&&k===void 0?void 0:Nt(k)?k:Nt(b)?b:u||!u&&k?g?ge._mergeProps(e,g,b,k):Ce(Ce({},b),k):k}return s(t)},_useDefaultPT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return ge._usePT(e,t,r,o,i)},_loadStyles:function(e,t,r){var o,i=ge._getConfig(t,r),s={nonce:i==null||(o=i.csp)===null||o===void 0?void 0:o.nonce};ge._loadCoreStyles(e.$instance,s),ge._loadThemeStyles(e.$instance,s),ge._loadScopedThemeStyles(e.$instance,s),ge._themeChangeListener(function(){return ge._loadThemeStyles(e.$instance,s)})},_loadCoreStyles:function(){var e,t,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(!nr.isStyleNameLoaded((e=r.$style)===null||e===void 0?void 0:e.name)&&(t=r.$style)!==null&&t!==void 0&&t.name){var i;Fe.loadCSS(o),(i=r.$style)===null||i===void 0||i.loadCSS(o),nr.setLoadedStyleName(r.$style.name)}},_loadThemeStyles:function(){var e,t,r,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(!(o!=null&&o.isUnstyled()||(o==null||(e=o.theme)===null||e===void 0?void 0:e.call(o))==="none")){if(!De.isStyleNameLoaded("common")){var s,l,c=((s=o.$style)===null||s===void 0||(l=s.getCommonTheme)===null||l===void 0?void 0:l.call(s))||{},d=c.primitive,u=c.semantic,p=c.global,g=c.style;Fe.load(d==null?void 0:d.css,Ce({name:"primitive-variables"},i)),Fe.load(u==null?void 0:u.css,Ce({name:"semantic-variables"},i)),Fe.load(p==null?void 0:p.css,Ce({name:"global-variables"},i)),Fe.loadTheme(Ce({name:"global-style"},i),g),De.setLoadedStyleName("common")}if(!De.isStyleNameLoaded((t=o.$style)===null||t===void 0?void 0:t.name)&&(r=o.$style)!==null&&r!==void 0&&r.name){var b,k,A,P,N=((b=o.$style)===null||b===void 0||(k=b.getDirectiveTheme)===null||k===void 0?void 0:k.call(b))||{},L=N.css,x=N.style;(A=o.$style)===null||A===void 0||A.load(L,Ce({name:"".concat(o.$style.name,"-variables")},i)),(P=o.$style)===null||P===void 0||P.loadTheme(Ce({name:"".concat(o.$style.name,"-style")},i),x),De.setLoadedStyleName(o.$style.name)}if(!De.isStyleNameLoaded("layer-order")){var D,X,Q=(D=o.$style)===null||D===void 0||(X=D.getLayerOrderThemeCSS)===null||X===void 0?void 0:X.call(D);Fe.load(Q,Ce({name:"layer-order",first:!0},i)),De.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=e.preset();if(r&&e.$attrSelector){var o,i,s,l=((o=e.$style)===null||o===void 0||(i=o.getPresetTheme)===null||i===void 0?void 0:i.call(o,r,"[".concat(e.$attrSelector,"]")))||{},c=l.css,d=(s=e.$style)===null||s===void 0?void 0:s.load(c,Ce({name:"".concat(e.$attrSelector,"-").concat(e.$style.name)},t));e.scopedStyleEl=d.el}},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};nr.clearLoadedStyleNames(),Jt.on("theme:change",e)},_hook:function(e,t,r,o,i,s){var l,c,d="on".concat(MS(t)),u=ge._getConfig(o,i),p=r==null?void 0:r.$instance,g=ge._usePT(p,ge._getPT(o==null||(l=o.value)===null||l===void 0?void 0:l.pt,e),ge._getOptionValue,"hooks.".concat(d)),b=ge._useDefaultPT(p,u==null||(c=u.pt)===null||c===void 0||(c=c.directives)===null||c===void 0?void 0:c[e],ge._getOptionValue,"hooks.".concat(d)),k={el:r,binding:o,vnode:i,prevVnode:s};g==null||g(p,k),b==null||b(p,k)},_mergeProps:function(){for(var e=arguments.length>1?arguments[1]:void 0,t=arguments.length,r=new Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];return Ou(e)?e.apply(void 0,r):j.apply(void 0,r)},_extend:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=function(s,l,c,d,u){var p,g,b,k;l._$instances=l._$instances||{};var A=ge._getConfig(c,d),P=l._$instances[e]||{},N=qr(P)?Ce(Ce({},t),t==null?void 0:t.methods):{};l._$instances[e]=Ce(Ce({},P),{},{$name:e,$host:l,$binding:c,$modifiers:c==null?void 0:c.modifiers,$value:c==null?void 0:c.value,$el:P.$el||l||void 0,$style:Ce({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},t==null?void 0:t.style),$primevueConfig:A,$attrSelector:(p=l.$pd)===null||p===void 0||(p=p[e])===null||p===void 0?void 0:p.attrSelector,defaultPT:function(){return ge._getPT(A==null?void 0:A.pt,void 0,function(x){var D;return x==null||(D=x.directives)===null||D===void 0?void 0:D[e]})},isUnstyled:function(){var x,D;return((x=l.$instance)===null||x===void 0||(x=x.$binding)===null||x===void 0||(x=x.value)===null||x===void 0?void 0:x.unstyled)!==void 0?(D=l.$instance)===null||D===void 0||(D=D.$binding)===null||D===void 0||(D=D.value)===null||D===void 0?void 0:D.unstyled:A==null?void 0:A.unstyled},theme:function(){var x;return(x=l.$instance)===null||x===void 0||(x=x.$primevueConfig)===null||x===void 0?void 0:x.theme},preset:function(){var x;return(x=l.$instance)===null||x===void 0||(x=x.$binding)===null||x===void 0||(x=x.value)===null||x===void 0?void 0:x.dt},ptm:function(){var x,D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",X=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ge._getPTValue(l.$instance,(x=l.$instance)===null||x===void 0||(x=x.$binding)===null||x===void 0||(x=x.value)===null||x===void 0?void 0:x.pt,D,Ce({},X))},ptmo:function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",X=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return ge._getPTValue(l.$instance,x,D,X,!1)},cx:function(){var x,D,X=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(x=l.$instance)!==null&&x!==void 0&&x.isUnstyled()?void 0:ge._getOptionValue((D=l.$instance)===null||D===void 0||(D=D.$style)===null||D===void 0?void 0:D.classes,X,Ce({},Q))},sx:function(){var x,D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",X=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,Q=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return X?ge._getOptionValue((x=l.$instance)===null||x===void 0||(x=x.$style)===null||x===void 0?void 0:x.inlineStyles,D,Ce({},Q)):void 0}},N),l.$instance=l._$instances[e],(g=(b=l.$instance)[s])===null||g===void 0||g.call(b,l,c,d,u),l["$".concat(e)]=l.$instance,ge._hook(e,s,l,c,d,u),l.$pd||(l.$pd={}),l.$pd[e]=Ce(Ce({},(k=l.$pd)===null||k===void 0?void 0:k[e]),{},{name:e,instance:l.$instance})},o=function(s){var l,c,d,u,p,g=(l=s.$instance)===null||l===void 0?void 0:l.watch;g==null||(c=g.config)===null||c===void 0||c.call(s.$instance,(d=s.$instance)===null||d===void 0?void 0:d.$primevueConfig),co.on("config:change",function(b){var k,A=b.newValue,P=b.oldValue;return g==null||(k=g.config)===null||k===void 0?void 0:k.call(s.$instance,A,P)}),g==null||(u=g["config.ripple"])===null||u===void 0||u.call(s.$instance,(p=s.$instance)===null||p===void 0||(p=p.$primevueConfig)===null||p===void 0?void 0:p.ripple),co.on("config:ripple:change",function(b){var k,A=b.newValue,P=b.oldValue;return g==null||(k=g["config.ripple"])===null||k===void 0?void 0:k.call(s.$instance,A,P)})};return{created:function(s,l,c,d){s.$pd||(s.$pd={}),s.$pd[e]={name:e,attrSelector:Lu("pd")},r("created",s,l,c,d)},beforeMount:function(s,l,c,d){ge._loadStyles(s,l,c),r("beforeMount",s,l,c,d),o(s)},mounted:function(s,l,c,d){ge._loadStyles(s,l,c),r("mounted",s,l,c,d)},beforeUpdate:function(s,l,c,d){r("beforeUpdate",s,l,c,d)},updated:function(s,l,c,d){ge._loadStyles(s,l,c),r("updated",s,l,c,d)},beforeUnmount:function(s,l,c,d){r("beforeUnmount",s,l,c,d)},unmounted:function(s,l,c,d){var u;(u=s.$instance)===null||u===void 0||(u=u.scopedStyleEl)===null||u===void 0||(u=u.value)===null||u===void 0||u.remove(),r("unmounted",s,l,c,d)}}},extend:function(){var e=ge._getMeta.apply(ge,arguments),t=ep(e,2),r=t[0],o=t[1];return Ce({extend:function(){var s=ge._getMeta.apply(ge,arguments),l=ep(s,2),c=l[0],d=l[1];return ge.extend(c,Ce(Ce(Ce({},o),o==null?void 0:o.methods),d))}},ge._extend(r,o))}},YA=function(e){var t=e.dt;return`
.p-ink {
    display: block;
    position: absolute;
    background: `.concat(t("ripple.background"),`;
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`)},QA={root:"p-ink"},XA=Fe.extend({name:"ripple-directive",theme:YA,classes:QA}),JA=ge.extend({style:XA});function zi(n){"@babel/helpers - typeof";return zi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zi(n)}function ZA(n){return rR(n)||nR(n)||tR(n)||eR()}function eR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tR(n,e){if(n){if(typeof n=="string")return Rc(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Rc(n,e):void 0}}function nR(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function rR(n){if(Array.isArray(n))return Rc(n)}function Rc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function rp(n,e,t){return(e=oR(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function oR(n){var e=iR(n,"string");return zi(e)=="symbol"?e:e+""}function iR(n,e){if(zi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(zi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Pb=JA.extend("ripple",{watch:{"config.ripple":function(e){e?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(e){this.remove(e)},timeout:void 0,methods:{bindEvents:function(e){e.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(e){e.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(e){var t=JS("span",rp(rp({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root")));e.appendChild(t),this.$el=t},remove:function(e){var t=this.getInk(e);t&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(e),t.removeEventListener("animationend",this.onAnimationEnd),t.remove())},onMouseDown:function(e){var t=this,r=e.currentTarget,o=this.getInk(r);if(!(!o||getComputedStyle(o,null).display==="none")){if(!this.isUnstyled()&&Nl(o,"p-ink-active"),o.setAttribute("data-p-ink-active","false"),!Lh(o)&&!$h(o)){var i=Math.max(Ws(r),eE(r));o.style.height=i+"px",o.style.width=i+"px"}var s=ZS(r),l=e.pageX-s.left+document.body.scrollTop-$h(o)/2,c=e.pageY-s.top+document.body.scrollLeft-Lh(o)/2;o.style.top=c+"px",o.style.left=l+"px",!this.isUnstyled()&&KS(o,"p-ink-active"),o.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){o&&(!t.isUnstyled()&&Nl(o,"p-ink-active"),o.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(e){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&Nl(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(e){return e&&e.children?ZA(e.children).find(function(t){return Dr(t,"data-pc-name")==="ripple"}):void 0}}});function Hi(n){"@babel/helpers - typeof";return Hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hi(n)}function ln(n,e,t){return(e=sR(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function sR(n){var e=aR(n,"string");return Hi(e)=="symbol"?e:e+""}function aR(n,e){if(Hi(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Hi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var lR=function(e){var t=e.dt;return`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(t("button.primary.color"),`;
    background: `).concat(t("button.primary.background"),`;
    border: 1px solid `).concat(t("button.primary.border.color"),`;
    padding: `).concat(t("button.padding.y")," ").concat(t("button.padding.x"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(t("button.transition.duration"),", color ").concat(t("button.transition.duration"),", border-color ").concat(t("button.transition.duration"),`,
            outline-color `).concat(t("button.transition.duration"),", box-shadow ").concat(t("button.transition.duration"),`;
    border-radius: `).concat(t("button.border.radius"),`;
    outline-color: transparent;
    gap: `).concat(t("button.gap"),`;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: `).concat(t("button.icon.only.width"),`;
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: `).concat(t("button.icon.only.width"),`;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: `).concat(t("button.sm.font.size"),`;
    padding: `).concat(t("button.sm.padding.y")," ").concat(t("button.sm.padding.x"),`;
}

.p-button-sm .p-button-icon {
    font-size: `).concat(t("button.sm.font.size"),`;
}

.p-button-lg {
    font-size: `).concat(t("button.lg.font.size"),`;
    padding: `).concat(t("button.lg.padding.y")," ").concat(t("button.lg.padding.x"),`;
}

.p-button-lg .p-button-icon {
    font-size: `).concat(t("button.lg.font.size"),`;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: `).concat(t("button.label.font.weight"),`;
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: `).concat(t("button.icon.only.width"),`;
}

.p-button:not(:disabled):hover {
    background: `).concat(t("button.primary.hover.background"),`;
    border: 1px solid `).concat(t("button.primary.hover.border.color"),`;
    color: `).concat(t("button.primary.hover.color"),`;
}

.p-button:not(:disabled):active {
    background: `).concat(t("button.primary.active.background"),`;
    border: 1px solid `).concat(t("button.primary.active.border.color"),`;
    color: `).concat(t("button.primary.active.color"),`;
}

.p-button:focus-visible {
    box-shadow: `).concat(t("button.primary.focus.ring.shadow"),`;
    outline: `).concat(t("button.focus.ring.width")," ").concat(t("button.focus.ring.style")," ").concat(t("button.primary.focus.ring.color"),`;
    outline-offset: `).concat(t("button.focus.ring.offset"),`;
}

.p-button .p-badge {
    min-width: `).concat(t("button.badge.size"),`;
    height: `).concat(t("button.badge.size"),`;
    line-height: `).concat(t("button.badge.size"),`;
}

.p-button-raised {
    box-shadow: `).concat(t("button.raised.shadow"),`;
}

.p-button-rounded {
    border-radius: `).concat(t("button.rounded.border.radius"),`;
}

.p-button-secondary {
    background: `).concat(t("button.secondary.background"),`;
    border: 1px solid `).concat(t("button.secondary.border.color"),`;
    color: `).concat(t("button.secondary.color"),`;
}

.p-button-secondary:not(:disabled):hover {
    background: `).concat(t("button.secondary.hover.background"),`;
    border: 1px solid `).concat(t("button.secondary.hover.border.color"),`;
    color: `).concat(t("button.secondary.hover.color"),`;
}

.p-button-secondary:not(:disabled):active {
    background: `).concat(t("button.secondary.active.background"),`;
    border: 1px solid `).concat(t("button.secondary.active.border.color"),`;
    color: `).concat(t("button.secondary.active.color"),`;
}

.p-button-secondary:focus-visible {
    outline-color: `).concat(t("button.secondary.focus.ring.color"),`;
    box-shadow: `).concat(t("button.secondary.focus.ring.shadow"),`;
}

.p-button-success {
    background: `).concat(t("button.success.background"),`;
    border: 1px solid `).concat(t("button.success.border.color"),`;
    color: `).concat(t("button.success.color"),`;
}

.p-button-success:not(:disabled):hover {
    background: `).concat(t("button.success.hover.background"),`;
    border: 1px solid `).concat(t("button.success.hover.border.color"),`;
    color: `).concat(t("button.success.hover.color"),`;
}

.p-button-success:not(:disabled):active {
    background: `).concat(t("button.success.active.background"),`;
    border: 1px solid `).concat(t("button.success.active.border.color"),`;
    color: `).concat(t("button.success.active.color"),`;
}

.p-button-success:focus-visible {
    outline-color: `).concat(t("button.success.focus.ring.color"),`;
    box-shadow: `).concat(t("button.success.focus.ring.shadow"),`;
}

.p-button-info {
    background: `).concat(t("button.info.background"),`;
    border: 1px solid `).concat(t("button.info.border.color"),`;
    color: `).concat(t("button.info.color"),`;
}

.p-button-info:not(:disabled):hover {
    background: `).concat(t("button.info.hover.background"),`;
    border: 1px solid `).concat(t("button.info.hover.border.color"),`;
    color: `).concat(t("button.info.hover.color"),`;
}

.p-button-info:not(:disabled):active {
    background: `).concat(t("button.info.active.background"),`;
    border: 1px solid `).concat(t("button.info.active.border.color"),`;
    color: `).concat(t("button.info.active.color"),`;
}

.p-button-info:focus-visible {
    outline-color: `).concat(t("button.info.focus.ring.color"),`;
    box-shadow: `).concat(t("button.info.focus.ring.shadow"),`;
}

.p-button-warn {
    background: `).concat(t("button.warn.background"),`;
    border: 1px solid `).concat(t("button.warn.border.color"),`;
    color: `).concat(t("button.warn.color"),`;
}

.p-button-warn:not(:disabled):hover {
    background: `).concat(t("button.warn.hover.background"),`;
    border: 1px solid `).concat(t("button.warn.hover.border.color"),`;
    color: `).concat(t("button.warn.hover.color"),`;
}

.p-button-warn:not(:disabled):active {
    background: `).concat(t("button.warn.active.background"),`;
    border: 1px solid `).concat(t("button.warn.active.border.color"),`;
    color: `).concat(t("button.warn.active.color"),`;
}

.p-button-warn:focus-visible {
    outline-color: `).concat(t("button.warn.focus.ring.color"),`;
    box-shadow: `).concat(t("button.warn.focus.ring.shadow"),`;
}

.p-button-help {
    background: `).concat(t("button.help.background"),`;
    border: 1px solid `).concat(t("button.help.border.color"),`;
    color: `).concat(t("button.help.color"),`;
}

.p-button-help:not(:disabled):hover {
    background: `).concat(t("button.help.hover.background"),`;
    border: 1px solid `).concat(t("button.help.hover.border.color"),`;
    color: `).concat(t("button.help.hover.color"),`;
}

.p-button-help:not(:disabled):active {
    background: `).concat(t("button.help.active.background"),`;
    border: 1px solid `).concat(t("button.help.active.border.color"),`;
    color: `).concat(t("button.help.active.color"),`;
}

.p-button-help:focus-visible {
    outline-color: `).concat(t("button.help.focus.ring.color"),`;
    box-shadow: `).concat(t("button.help.focus.ring.shadow"),`;
}

.p-button-danger {
    background: `).concat(t("button.danger.background"),`;
    border: 1px solid `).concat(t("button.danger.border.color"),`;
    color: `).concat(t("button.danger.color"),`;
}

.p-button-danger:not(:disabled):hover {
    background: `).concat(t("button.danger.hover.background"),`;
    border: 1px solid `).concat(t("button.danger.hover.border.color"),`;
    color: `).concat(t("button.danger.hover.color"),`;
}

.p-button-danger:not(:disabled):active {
    background: `).concat(t("button.danger.active.background"),`;
    border: 1px solid `).concat(t("button.danger.active.border.color"),`;
    color: `).concat(t("button.danger.active.color"),`;
}

.p-button-danger:focus-visible {
    outline-color: `).concat(t("button.danger.focus.ring.color"),`;
    box-shadow: `).concat(t("button.danger.focus.ring.shadow"),`;
}

.p-button-contrast {
    background: `).concat(t("button.contrast.background"),`;
    border: 1px solid `).concat(t("button.contrast.border.color"),`;
    color: `).concat(t("button.contrast.color"),`;
}

.p-button-contrast:not(:disabled):hover {
    background: `).concat(t("button.contrast.hover.background"),`;
    border: 1px solid `).concat(t("button.contrast.hover.border.color"),`;
    color: `).concat(t("button.contrast.hover.color"),`;
}

.p-button-contrast:not(:disabled):active {
    background: `).concat(t("button.contrast.active.background"),`;
    border: 1px solid `).concat(t("button.contrast.active.border.color"),`;
    color: `).concat(t("button.contrast.active.color"),`;
}

.p-button-contrast:focus-visible {
    outline-color: `).concat(t("button.contrast.focus.ring.color"),`;
    box-shadow: `).concat(t("button.contrast.focus.ring.shadow"),`;
}

.p-button-outlined {
    background: transparent;
    border-color: `).concat(t("button.outlined.primary.border.color"),`;
    color: `).concat(t("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):hover {
    background: `).concat(t("button.outlined.primary.hover.background"),`;
    border-color: `).concat(t("button.outlined.primary.border.color"),`;
    color: `).concat(t("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):active {
    background: `).concat(t("button.outlined.primary.active.background"),`;
    border-color: `).concat(t("button.outlined.primary.border.color"),`;
    color: `).concat(t("button.outlined.primary.color"),`;
}

.p-button-outlined.p-button-secondary {
    border-color: `).concat(t("button.outlined.secondary.border.color"),`;
    color: `).concat(t("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: `).concat(t("button.outlined.secondary.hover.background"),`;
    border-color: `).concat(t("button.outlined.secondary.border.color"),`;
    color: `).concat(t("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: `).concat(t("button.outlined.secondary.active.background"),`;
    border-color: `).concat(t("button.outlined.secondary.border.color"),`;
    color: `).concat(t("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-success {
    border-color: `).concat(t("button.outlined.success.border.color"),`;
    color: `).concat(t("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: `).concat(t("button.outlined.success.hover.background"),`;
    border-color: `).concat(t("button.outlined.success.border.color"),`;
    color: `).concat(t("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: `).concat(t("button.outlined.success.active.background"),`;
    border-color: `).concat(t("button.outlined.success.border.color"),`;
    color: `).concat(t("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-info {
    border-color: `).concat(t("button.outlined.info.border.color"),`;
    color: `).concat(t("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: `).concat(t("button.outlined.info.hover.background"),`;
    border-color: `).concat(t("button.outlined.info.border.color"),`;
    color: `).concat(t("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: `).concat(t("button.outlined.info.active.background"),`;
    border-color: `).concat(t("button.outlined.info.border.color"),`;
    color: `).concat(t("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-warn {
    border-color: `).concat(t("button.outlined.warn.border.color"),`;
    color: `).concat(t("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: `).concat(t("button.outlined.warn.hover.background"),`;
    border-color: `).concat(t("button.outlined.warn.border.color"),`;
    color: `).concat(t("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: `).concat(t("button.outlined.warn.active.background"),`;
    border-color: `).concat(t("button.outlined.warn.border.color"),`;
    color: `).concat(t("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-help {
    border-color: `).concat(t("button.outlined.help.border.color"),`;
    color: `).concat(t("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: `).concat(t("button.outlined.help.hover.background"),`;
    border-color: `).concat(t("button.outlined.help.border.color"),`;
    color: `).concat(t("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: `).concat(t("button.outlined.help.active.background"),`;
    border-color: `).concat(t("button.outlined.help.border.color"),`;
    color: `).concat(t("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-danger {
    border-color: `).concat(t("button.outlined.danger.border.color"),`;
    color: `).concat(t("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: `).concat(t("button.outlined.danger.hover.background"),`;
    border-color: `).concat(t("button.outlined.danger.border.color"),`;
    color: `).concat(t("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: `).concat(t("button.outlined.danger.active.background"),`;
    border-color: `).concat(t("button.outlined.danger.border.color"),`;
    color: `).concat(t("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-contrast {
    border-color: `).concat(t("button.outlined.contrast.border.color"),`;
    color: `).concat(t("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: `).concat(t("button.outlined.contrast.hover.background"),`;
    border-color: `).concat(t("button.outlined.contrast.border.color"),`;
    color: `).concat(t("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: `).concat(t("button.outlined.contrast.active.background"),`;
    border-color: `).concat(t("button.outlined.contrast.border.color"),`;
    color: `).concat(t("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-plain {
    border-color: `).concat(t("button.outlined.plain.border.color"),`;
    color: `).concat(t("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: `).concat(t("button.outlined.plain.hover.background"),`;
    border-color: `).concat(t("button.outlined.plain.border.color"),`;
    color: `).concat(t("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: `).concat(t("button.outlined.plain.active.background"),`;
    border-color: `).concat(t("button.outlined.plain.border.color"),`;
    color: `).concat(t("button.outlined.plain.color"),`;
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):hover {
    background: `).concat(t("button.text.primary.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):active {
    background: `).concat(t("button.text.primary.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.primary.color"),`;
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: `).concat(t("button.text.secondary.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: `).concat(t("button.text.secondary.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.secondary.color"),`;
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: `).concat(t("button.text.success.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):active {
    background: `).concat(t("button.text.success.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.success.color"),`;
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: `).concat(t("button.text.info.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):active {
    background: `).concat(t("button.text.info.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.info.color"),`;
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.warn.color"),`;
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: `).concat(t("button.text.warn.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.warn.color"),`;
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: `).concat(t("button.text.warn.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.warn.color"),`;
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: `).concat(t("button.text.help.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):active {
    background: `).concat(t("button.text.help.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.help.color"),`;
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: `).concat(t("button.text.danger.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: `).concat(t("button.text.danger.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.danger.color"),`;
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.contrast.color"),`;
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: `).concat(t("button.text.contrast.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.contrast.color"),`;
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: `).concat(t("button.text.contrast.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.contrast.color"),`;
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: `).concat(t("button.text.plain.hover.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: `).concat(t("button.text.plain.active.background"),`;
    border-color: transparent;
    color: `).concat(t("button.text.plain.color"),`;
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.link.color"),`;
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.link.hover.color"),`;
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.link.active.color"),`;
}
`)},cR={root:function(e){var t=e.instance,r=e.props;return["p-button p-component",ln(ln(ln(ln(ln(ln(ln(ln(ln({"p-button-icon-only":t.hasIcon&&!r.label&&!r.badge,"p-button-vertical":(r.iconPos==="top"||r.iconPos==="bottom")&&r.label,"p-button-loading":r.loading,"p-button-link":r.link||r.variant==="link"},"p-button-".concat(r.severity),r.severity),"p-button-raised",r.raised),"p-button-rounded",r.rounded),"p-button-text",r.text||r.variant==="text"),"p-button-outlined",r.outlined||r.variant==="outlined"),"p-button-sm",r.size==="small"),"p-button-lg",r.size==="large"),"p-button-plain",r.plain),"p-button-fluid",t.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(e){var t=e.props;return["p-button-icon",ln({},"p-button-icon-".concat(t.iconPos),t.label)]},label:"p-button-label"},uR=Fe.extend({name:"button",theme:lR,classes:cR}),dR={name:"BaseButton",extends:Ga,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:[String,Object],default:null},badge:{type:String,default:null},badgeClass:{type:[String,Object],default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},variant:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:uR,provide:function(){return{$pcButton:this,$parentInstance:this}}},Db={name:"Button",extends:dR,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return j(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return qr(this.fluid)?!!this.$pcFluid:this.fluid}},components:{SpinnerIcon:Rb,Badge:xb},directives:{ripple:Pb}};function fR(n,e,t,r,o,i){var s=bo("SpinnerIcon"),l=bo("Badge"),c=Kp("ripple");return n.asChild?Be(n.$slots,"default",{key:1,class:fn(n.cx("root")),a11yAttrs:i.a11yAttrs}):Or((K(),tt(Lt(n.as),j({key:0,class:n.cx("root")},i.attrs),{default:Ot(function(){return[Be(n.$slots,"default",{},function(){return[n.loading?Be(n.$slots,"loadingicon",j({key:0,class:[n.cx("loadingIcon"),n.cx("icon")]},n.ptm("loadingIcon")),function(){return[n.loadingIcon?(K(),ee("span",j({key:0,class:[n.cx("loadingIcon"),n.cx("icon"),n.loadingIcon]},n.ptm("loadingIcon")),null,16)):(K(),tt(s,j({key:1,class:[n.cx("loadingIcon"),n.cx("icon")],spin:""},n.ptm("loadingIcon")),null,16,["class"]))]}):Be(n.$slots,"icon",j({key:1,class:[n.cx("icon")]},n.ptm("icon")),function(){return[n.icon?(K(),ee("span",j({key:0,class:[n.cx("icon"),n.icon,n.iconClass]},n.ptm("icon")),null,16)):xe("",!0)]}),me("span",j({class:n.cx("label")},n.ptm("label")),Pe(n.label||" "),17),n.badge?(K(),tt(l,{key:2,value:n.badge,class:fn(n.badgeClass),severity:n.badgeSeverity,unstyled:n.unstyled,pt:n.ptm("pcBadge")},null,8,["value","class","severity","unstyled","pt"])):xe("",!0)]})]}),_:3},16,["class"])),[[c]])}Db.render=fR;var hR={name:"BaseEditableHolder",extends:Ga,emits:["update:modelValue","value-change"],props:{modelValue:{type:null,default:void 0},defaultValue:{type:null,default:void 0},name:{type:String,default:void 0},invalid:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},formControl:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0},$pcForm:{default:void 0},$pcFormField:{default:void 0}},data:function(){return{d_value:this.defaultValue||this.modelValue}},watch:{modelValue:function(e){this.d_value=e},defaultValue:function(e){this.d_value=e},$formName:{immediate:!0,handler:function(e){var t,r;this.formField=((t=this.$pcForm)===null||t===void 0||(r=t.register)===null||r===void 0?void 0:r.call(t,e,this.$formControl))||{}}},$formControl:{immediate:!0,handler:function(e){var t,r;this.formField=((t=this.$pcForm)===null||t===void 0||(r=t.register)===null||r===void 0?void 0:r.call(t,this.$formName,e))||{}}},$formDefaultValue:{immediate:!0,handler:function(e){this.d_value!==e&&(this.d_value=e)}}},formField:{},methods:{writeValue:function(e,t){var r,o;this.controlled&&(this.d_value=e,this.$emit("update:modelValue",e)),this.$emit("value-change",e),(r=(o=this.formField).onChange)===null||r===void 0||r.call(o,{originalEvent:t,value:e})}},computed:{$filled:function(){return Le(this.d_value)},$invalid:function(){var e,t,r,o;return(e=(t=this.invalid)!==null&&t!==void 0?t:(r=this.$pcFormField)===null||r===void 0||(r=r.$field)===null||r===void 0?void 0:r.invalid)!==null&&e!==void 0?e:(o=this.$pcForm)===null||o===void 0||(o=o.states)===null||o===void 0||(o=o[this.$formName])===null||o===void 0?void 0:o.invalid},$formName:function(){var e;return this.name||((e=this.$formControl)===null||e===void 0?void 0:e.name)},$formControl:function(){var e;return this.formControl||((e=this.$pcFormField)===null||e===void 0?void 0:e.formControl)},$formDefaultValue:function(){var e,t,r,o;return(e=(t=this.d_value)!==null&&t!==void 0?t:(r=this.$pcFormField)===null||r===void 0?void 0:r.initialValue)!==null&&e!==void 0?e:(o=this.$pcForm)===null||o===void 0||(o=o.initialValues)===null||o===void 0?void 0:o[this.$formName]},controlled:function(){return this.$inProps.hasOwnProperty("modelValue")||!this.$inProps.hasOwnProperty("modelValue")&&!this.$inProps.hasOwnProperty("defaultValue")},filled:function(){return this.$filled}}},Ob={name:"BaseInput",extends:hR,props:{size:{type:String,default:null},fluid:{type:Boolean,default:null},variant:{type:String,default:null}},inject:{$parentInstance:{default:void 0},$pcFluid:{default:void 0}},computed:{$variant:function(){var e;return(e=this.variant)!==null&&e!==void 0?e:this.$primevue.config.inputStyle||this.$primevue.config.inputVariant},$fluid:function(){var e;return(e=this.fluid)!==null&&e!==void 0?e:!!this.$pcFluid},hasFluid:function(){return this.$fluid}}},pR=function(e){var t=e.dt;return`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(t("inputtext.color"),`;
    background: `).concat(t("inputtext.background"),`;
    padding-block: `).concat(t("inputtext.padding.y"),`;
    padding-inline: `).concat(t("inputtext.padding.x"),`;
    border: 1px solid `).concat(t("inputtext.border.color"),`;
    transition: background `).concat(t("inputtext.transition.duration"),", color ").concat(t("inputtext.transition.duration"),", border-color ").concat(t("inputtext.transition.duration"),", outline-color ").concat(t("inputtext.transition.duration"),", box-shadow ").concat(t("inputtext.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(t("inputtext.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(t("inputtext.shadow"),`;
}

.p-inputtext:enabled:hover {
    border-color: `).concat(t("inputtext.hover.border.color"),`;
}

.p-inputtext:enabled:focus {
    border-color: `).concat(t("inputtext.focus.border.color"),`;
    box-shadow: `).concat(t("inputtext.focus.ring.shadow"),`;
    outline: `).concat(t("inputtext.focus.ring.width")," ").concat(t("inputtext.focus.ring.style")," ").concat(t("inputtext.focus.ring.color"),`;
    outline-offset: `).concat(t("inputtext.focus.ring.offset"),`;
}

.p-inputtext.p-invalid {
    border-color: `).concat(t("inputtext.invalid.border.color"),`;
}

.p-inputtext.p-variant-filled {
    background: `).concat(t("inputtext.filled.background"),`;
}

.p-inputtext.p-variant-filled:enabled:hover {
    background: `).concat(t("inputtext.filled.hover.background"),`;
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: `).concat(t("inputtext.filled.focus.background"),`;
}

.p-inputtext:disabled {
    opacity: 1;
    background: `).concat(t("inputtext.disabled.background"),`;
    color: `).concat(t("inputtext.disabled.color"),`;
}

.p-inputtext::placeholder {
    color: `).concat(t("inputtext.placeholder.color"),`;
}

.p-inputtext.p-invalid::placeholder {
    color: `).concat(t("inputtext.invalid.placeholder.color"),`;
}

.p-inputtext-sm {
    font-size: `).concat(t("inputtext.sm.font.size"),`;
    padding-block: `).concat(t("inputtext.sm.padding.y"),`;
    padding-inline: `).concat(t("inputtext.sm.padding.x"),`;
}

.p-inputtext-lg {
    font-size: `).concat(t("inputtext.lg.font.size"),`;
    padding-block: `).concat(t("inputtext.lg.padding.y"),`;
    padding-inline: `).concat(t("inputtext.lg.padding.x"),`;
}

.p-inputtext-fluid {
    width: 100%;
}
`)},gR={root:function(e){var t=e.instance,r=e.props;return["p-inputtext p-component",{"p-filled":t.$filled,"p-inputtext-sm p-inputfield-sm":r.size==="small","p-inputtext-lg p-inputfield-lg":r.size==="large","p-invalid":t.$invalid,"p-variant-filled":t.$variant==="filled","p-inputtext-fluid":t.$fluid}]}},mR=Fe.extend({name:"inputtext",theme:pR,classes:gR}),bR={name:"BaseInputText",extends:Ob,style:mR,provide:function(){return{$pcInputText:this,$parentInstance:this}}},Mb={name:"InputText",extends:bR,inheritAttrs:!1,methods:{onInput:function(e){this.writeValue(e.target.value,e)}},computed:{attrs:function(){return j(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},yR=["value","disabled","aria-invalid"];function vR(n,e,t,r,o,i){return K(),ee("input",j({type:"text",class:n.cx("root"),value:n.d_value,disabled:n.disabled,"aria-invalid":n.$invalid||void 0,onInput:e[0]||(e[0]=function(){return i.onInput&&i.onInput.apply(i,arguments)})},i.attrs),null,16,yR)}Mb.render=vR;var _R=Vu(),Vb={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=Bu()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function wR(n,e,t,r,o,i){return i.inline?Be(n.$slots,"default",{key:0}):o.mounted?(K(),tt(Xy,{key:1,to:t.appendTo},[Be(n.$slots,"default")],8,["to"])):xe("",!0)}Vb.render=wR;var kR=function(e){var t=e.dt;return`
.p-datepicker {
    display: inline-flex;
    max-width: 100%;
}

.p-datepicker-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-input {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-datepicker-dropdown {
    cursor: pointer;
    display: inline-flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: `.concat(t("datepicker.dropdown.width"),`;
    border-start-end-radius: `).concat(t("datepicker.dropdown.border.radius"),`;
    border-end-end-radius: `).concat(t("datepicker.dropdown.border.radius"),`;
    background: `).concat(t("datepicker.dropdown.background"),`;
    border: 1px solid `).concat(t("datepicker.dropdown.border.color"),`;
    border-inline-start: 0 none;
    color: `).concat(t("datepicker.dropdown.color"),`;
    transition: background `).concat(t("datepicker.transition.duration"),", color ").concat(t("datepicker.transition.duration"),", border-color ").concat(t("datepicker.transition.duration"),", outline-color ").concat(t("datepicker.transition.duration"),`;
    outline-color: transparent;
}

.p-datepicker-dropdown:not(:disabled):hover {
    background: `).concat(t("datepicker.dropdown.hover.background"),`;
    border-color: `).concat(t("datepicker.dropdown.hover.border.color"),`;
    color: `).concat(t("datepicker.dropdown.hover.color"),`;
}

.p-datepicker-dropdown:not(:disabled):active {
    background: `).concat(t("datepicker.dropdown.active.background"),`;
    border-color: `).concat(t("datepicker.dropdown.active.border.color"),`;
    color: `).concat(t("datepicker.dropdown.active.color"),`;
}

.p-datepicker-dropdown:focus-visible {
    box-shadow: `).concat(t("datepicker.dropdown.focus.ring.shadow"),`;
    outline: `).concat(t("datepicker.dropdown.focus.ring.width")," ").concat(t("datepicker.dropdown.focus.ring.style")," ").concat(t("datepicker.dropdown.focus.ring.color"),`;
    outline-offset: `).concat(t("datepicker.dropdown.focus.ring.offset"),`;
}

.p-datepicker:has(.p-datepicker-input-icon-container) {
    position: relative;
}

.p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-input {
    padding-inline-end: calc((`).concat(t("form.field.padding.x")," * 2) + ").concat(t("icon.size"),`);
}

.p-datepicker-input-icon-container {
    cursor: pointer;
    position: absolute;
    top: 50%;
    inset-inline-end: `).concat(t("form.field.padding.x"),`;
    margin-block-start: calc(-1 * (`).concat(t("icon.size"),` / 2));
    color: `).concat(t("datepicker.input.icon.color"),`;
    line-height: 1;
}

.p-datepicker-fluid {
    display: flex;
}

.p-datepicker-fluid .p-datepicker-input {
    width: 1%;
}

.p-datepicker .p-datepicker-panel {
    min-width: 100%;
}

.p-datepicker-panel {
    width: auto;
    padding: `).concat(t("datepicker.panel.padding"),`;
    background: `).concat(t("datepicker.panel.background"),`;
    color: `).concat(t("datepicker.panel.color"),`;
    border: 1px solid `).concat(t("datepicker.panel.border.color"),`;
    border-radius: `).concat(t("datepicker.panel.border.radius"),`;
    box-shadow: `).concat(t("datepicker.panel.shadow"),`;
}

.p-datepicker-panel-inline {
    display: inline-block;
    overflow-x: auto;
    box-shadow: none;
}

.p-datepicker-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: `).concat(t("datepicker.header.padding"),`;
    background: `).concat(t("datepicker.header.background"),`;
    color: `).concat(t("datepicker.header.color"),`;
    border-block-end: 1px solid `).concat(t("datepicker.header.border.color"),`;
}

.p-datepicker-next-button:dir(rtl) {
    order: -1;
}

.p-datepicker-prev-button:dir(rtl) {
    order: 1;
}

.p-datepicker-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: `).concat(t("datepicker.title.gap"),`;
    font-weight: `).concat(t("datepicker.title.font.weight"),`;
}

.p-datepicker-select-year,
.p-datepicker-select-month {
    border: none;
    background: transparent;
    margin: 0;
    cursor: pointer;
    font-weight: inherit;
    transition: background `).concat(t("datepicker.transition.duration"),", color ").concat(t("datepicker.transition.duration"),", border-color ").concat(t("datepicker.transition.duration"),", outline-color ").concat(t("datepicker.transition.duration"),", box-shadow ").concat(t("datepicker.transition.duration"),`;
}

.p-datepicker-select-month {
    padding: `).concat(t("datepicker.select.month.padding"),`;
    color: `).concat(t("datepicker.select.month.color"),`;
    border-radius: `).concat(t("datepicker.select.month.border.radius"),`;
}

.p-datepicker-select-year {
    padding: `).concat(t("datepicker.select.year.padding"),`;
    color: `).concat(t("datepicker.select.year.color"),`;
    border-radius: `).concat(t("datepicker.select.year.border.radius"),`;
}

.p-datepicker-select-month:enabled:hover {
    background: `).concat(t("datepicker.select.month.hover.background"),`;
    color: `).concat(t("datepicker.select.month.hover.color"),`;
}

.p-datepicker-select-year:enabled:hover {
    background: `).concat(t("datepicker.select.year.hover.background"),`;
    color: `).concat(t("datepicker.select.year.hover.color"),`;
}

.p-datepicker-select-month:focus-visible,
.p-datepicker-select-year:focus-visible {
    box-shadow: `).concat(t("datepicker.date.focus.ring.shadow"),`;
    outline: `).concat(t("datepicker.date.focus.ring.width")," ").concat(t("datepicker.date.focus.ring.style")," ").concat(t("datepicker.date.focus.ring.color"),`;
    outline-offset: `).concat(t("datepicker.date.focus.ring.offset"),`;
}

.p-datepicker-calendar-container {
    display: flex;
}

.p-datepicker-calendar-container .p-datepicker-calendar {
    flex: 1 1 auto;
    border-inline-start: 1px solid `).concat(t("datepicker.group.border.color"),`;
    padding-inline-end: `).concat(t("datepicker.group.gap"),`;
    padding-inline-start: `).concat(t("datepicker.group.gap"),`;
}

.p-datepicker-calendar-container .p-datepicker-calendar:first-child {
    padding-inline-start: 0;
    border-inline-start: 0 none;
}

.p-datepicker-calendar-container .p-datepicker-calendar:last-child {
    padding-inline-end: 0;
}

.p-datepicker-day-view {
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;
    margin: `).concat(t("datepicker.day.view.margin"),`;
}

.p-datepicker-weekday-cell {
    padding: `).concat(t("datepicker.week.day.padding"),`;
}

.p-datepicker-weekday {
    font-weight: `).concat(t("datepicker.week.day.font.weight"),`;
    color: `).concat(t("datepicker.week.day.color"),`;
}

.p-datepicker-day-cell {
    padding: `).concat(t("datepicker.date.padding"),`;
}

.p-datepicker-day {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    width: `).concat(t("datepicker.date.width"),`;
    height: `).concat(t("datepicker.date.height"),`;
    border-radius: `).concat(t("datepicker.date.border.radius"),`;
    transition: background `).concat(t("datepicker.transition.duration"),", color ").concat(t("datepicker.transition.duration"),", border-color ").concat(t("datepicker.transition.duration"),", box-shadow ").concat(t("datepicker.transition.duration"),", outline-color ").concat(t("datepicker.transition.duration"),`;
    border: 1px solid transparent;
    outline-color: transparent;
    color: `).concat(t("datepicker.date.color"),`;
}

.p-datepicker-day:not(.p-datepicker-day-selected):not(.p-disabled):hover {
    background: `).concat(t("datepicker.date.hover.background"),`;
    color: `).concat(t("datepicker.date.hover.color"),`;
}

.p-datepicker-day:focus-visible {
    box-shadow: `).concat(t("datepicker.date.focus.ring.shadow"),`;
    outline: `).concat(t("datepicker.date.focus.ring.width")," ").concat(t("datepicker.date.focus.ring.style")," ").concat(t("datepicker.date.focus.ring.color"),`;
    outline-offset: `).concat(t("datepicker.date.focus.ring.offset"),`;
}

.p-datepicker-day-selected {
    background: `).concat(t("datepicker.date.selected.background"),`;
    color: `).concat(t("datepicker.date.selected.color"),`;
}

.p-datepicker-day-selected-range {
    background: `).concat(t("datepicker.date.range.selected.background"),`;
    color: `).concat(t("datepicker.date.range.selected.color"),`;
}

.p-datepicker-today > .p-datepicker-day {
    background: `).concat(t("datepicker.today.background"),`;
    color: `).concat(t("datepicker.today.color"),`;
}

.p-datepicker-today > .p-datepicker-day-selected {
    background: `).concat(t("datepicker.date.selected.background"),`;
    color: `).concat(t("datepicker.date.selected.color"),`;
}

.p-datepicker-today > .p-datepicker-day-selected-range {
    background: `).concat(t("datepicker.date.range.selected.background"),`;
    color: `).concat(t("datepicker.date.range.selected.color"),`;
}

.p-datepicker-weeknumber {
    text-align: center;
}

.p-datepicker-month-view {
    margin: `).concat(t("datepicker.month.view.margin"),`;
}

.p-datepicker-month {
    width: 33.3%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: `).concat(t("datepicker.month.padding"),`;
    transition: background `).concat(t("datepicker.transition.duration"),", color ").concat(t("datepicker.transition.duration"),", border-color ").concat(t("datepicker.transition.duration"),", box-shadow ").concat(t("datepicker.transition.duration"),", outline-color ").concat(t("datepicker.transition.duration"),`;
    border-radius: `).concat(t("datepicker.month.border.radius"),`;
    outline-color: transparent;
    color: `).concat(t("datepicker.date.color"),`;
}

.p-datepicker-month:not(.p-disabled):not(.p-datepicker-month-selected):hover {
    color: `).concat(t("datepicker.date.hover.color"),`;
    background: `).concat(t("datepicker.date.hover.background"),`;
}

.p-datepicker-month-selected {
    color: `).concat(t("datepicker.date.selected.color"),`;
    background: `).concat(t("datepicker.date.selected.background"),`;
}

.p-datepicker-month:not(.p-disabled):focus-visible {
    box-shadow: `).concat(t("datepicker.date.focus.ring.shadow"),`;
    outline: `).concat(t("datepicker.date.focus.ring.width")," ").concat(t("datepicker.date.focus.ring.style")," ").concat(t("datepicker.date.focus.ring.color"),`;
    outline-offset: `).concat(t("datepicker.date.focus.ring.offset"),`;
}

.p-datepicker-year-view {
    margin: `).concat(t("datepicker.year.view.margin"),`;
}

.p-datepicker-year {
    width: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: `).concat(t("datepicker.year.padding"),`;
    transition: background `).concat(t("datepicker.transition.duration"),", color ").concat(t("datepicker.transition.duration"),", border-color ").concat(t("datepicker.transition.duration"),", box-shadow ").concat(t("datepicker.transition.duration"),", outline-color ").concat(t("datepicker.transition.duration"),`;
    border-radius: `).concat(t("datepicker.year.border.radius"),`;
    outline-color: transparent;
    color: `).concat(t("datepicker.date.color"),`;
}

.p-datepicker-year:not(.p-disabled):not(.p-datepicker-year-selected):hover {
    color: `).concat(t("datepicker.date.hover.color"),`;
    background: `).concat(t("datepicker.date.hover.background"),`;
}

.p-datepicker-year-selected {
    color: `).concat(t("datepicker.date.selected.color"),`;
    background: `).concat(t("datepicker.date.selected.background"),`;
}

.p-datepicker-year:not(.p-disabled):focus-visible {
    box-shadow: `).concat(t("datepicker.date.focus.ring.shadow"),`;
    outline: `).concat(t("datepicker.date.focus.ring.width")," ").concat(t("datepicker.date.focus.ring.style")," ").concat(t("datepicker.date.focus.ring.color"),`;
    outline-offset: `).concat(t("datepicker.date.focus.ring.offset"),`;
}

.p-datepicker-buttonbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: `).concat(t("datepicker.buttonbar.padding"),`;
    border-block-start: 1px solid `).concat(t("datepicker.buttonbar.border.color"),`;
}

.p-datepicker-buttonbar .p-button {
    width: auto;
}

.p-datepicker-time-picker {
    display: flex;
    justify-content: center;
    align-items: center;
    border-block-start: 1px solid `).concat(t("datepicker.time.picker.border.color"),`;
    padding: 0;
    gap: `).concat(t("datepicker.time.picker.gap"),`;
}

.p-datepicker-calendar-container + .p-datepicker-time-picker {
    padding: `).concat(t("datepicker.time.picker.padding"),`;
}

.p-datepicker-time-picker > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: `).concat(t("datepicker.time.picker.button.gap"),`;
}

.p-datepicker-time-picker span {
    font-size: 1rem;
}

.p-datepicker-timeonly .p-datepicker-time-picker {
    border-block-start: 0 none;
}

.p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown {
    width: `).concat(t("datepicker.dropdown.sm.width"),`;
}

.p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown .p-icon,
.p-datepicker:has(.p-inputtext-sm) .p-datepicker-input-icon {
    font-size: `).concat(t("form.field.sm.font.size"),`;
    width: `).concat(t("form.field.sm.font.size"),`;
    height: `).concat(t("form.field.sm.font.size"),`;
}

.p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown {
    width: `).concat(t("datepicker.dropdown.lg.width"),`;
}

.p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown .p-icon,
.p-datepicker:has(.p-inputtext-lg) .p-datepicker-input-icon {
    font-size: `).concat(t("form.field.lg.font.size"),`;
    width: `).concat(t("form.field.lg.font.size"),`;
    height: `).concat(t("form.field.lg.font.size"),`;
}
`)},CR={root:function(e){var t=e.props;return{position:t.appendTo==="self"?"relative":void 0}}},TR={root:function(e){var t=e.instance,r=e.state;return["p-datepicker p-component p-inputwrapper",{"p-invalid":t.$invalid,"p-inputwrapper-filled":t.$filled,"p-inputwrapper-focus":r.focused||r.overlayVisible,"p-focus":r.focused||r.overlayVisible,"p-datepicker-fluid":t.$fluid}]},pcInputText:"p-datepicker-input",dropdown:"p-datepicker-dropdown",inputIconContainer:"p-datepicker-input-icon-container",inputIcon:"p-datepicker-input-icon",panel:function(e){var t=e.props;return["p-datepicker-panel p-component",{"p-datepicker-panel-inline":t.inline,"p-disabled":t.disabled,"p-datepicker-timeonly":t.timeOnly}]},calendarContainer:"p-datepicker-calendar-container",calendar:"p-datepicker-calendar",header:"p-datepicker-header",pcPrevButton:"p-datepicker-prev-button",title:"p-datepicker-title",selectMonth:"p-datepicker-select-month",selectYear:"p-datepicker-select-year",decade:"p-datepicker-decade",pcNextButton:"p-datepicker-next-button",dayView:"p-datepicker-day-view",weekHeader:"p-datepicker-weekheader p-disabled",weekNumber:"p-datepicker-weeknumber",weekLabelContainer:"p-datepicker-weeklabel-container p-disabled",weekDayCell:"p-datepicker-weekday-cell",weekDay:"p-datepicker-weekday",dayCell:function(e){var t=e.date;return["p-datepicker-day-cell",{"p-datepicker-other-month":t.otherMonth,"p-datepicker-today":t.today}]},day:function(e){var t=e.instance,r=e.props,o=e.date,i="";return t.isRangeSelection()&&t.isSelected(o)&&o.selectable&&(i=t.isDateEquals(r.modelValue[0],o)||t.isDateEquals(r.modelValue[1],o)?"p-datepicker-day-selected":"p-datepicker-day-selected-range"),["p-datepicker-day",{"p-datepicker-day-selected":!t.isRangeSelection()&&t.isSelected(o)&&o.selectable,"p-disabled":r.disabled||!o.selectable},i]},monthView:"p-datepicker-month-view",month:function(e){var t=e.instance,r=e.props,o=e.month,i=e.index;return["p-datepicker-month",{"p-datepicker-month-selected":t.isMonthSelected(i),"p-disabled":r.disabled||!o.selectable}]},yearView:"p-datepicker-year-view",year:function(e){var t=e.instance,r=e.props,o=e.year;return["p-datepicker-year",{"p-datepicker-year-selected":t.isYearSelected(o.value),"p-disabled":r.disabled||!o.selectable}]},timePicker:"p-datepicker-time-picker",hourPicker:"p-datepicker-hour-picker",pcIncrementButton:"p-datepicker-increment-button",pcDecrementButton:"p-datepicker-decrement-button",separator:"p-datepicker-separator",minutePicker:"p-datepicker-minute-picker",secondPicker:"p-datepicker-second-picker",ampmPicker:"p-datepicker-ampm-picker",buttonbar:"p-datepicker-buttonbar",pcTodayButton:"p-datepicker-today-button",pcClearButton:"p-datepicker-clear-button"},SR=Fe.extend({name:"datepicker",theme:kR,classes:TR,inlineStyles:CR}),ER={name:"BaseDatePicker",extends:Ob,props:{selectionMode:{type:String,default:"single"},dateFormat:{type:String,default:null},inline:{type:Boolean,default:!1},showOtherMonths:{type:Boolean,default:!0},selectOtherMonths:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!1},iconDisplay:{type:String,default:"button"},icon:{type:String,default:void 0},prevIcon:{type:String,default:void 0},nextIcon:{type:String,default:void 0},incrementIcon:{type:String,default:void 0},decrementIcon:{type:String,default:void 0},numberOfMonths:{type:Number,default:1},responsiveOptions:Array,breakpoint:{type:String,default:"769px"},view:{type:String,default:"date"},minDate:{type:Date,value:null},maxDate:{type:Date,value:null},disabledDates:{type:Array,value:null},disabledDays:{type:Array,value:null},maxDateCount:{type:Number,value:null},showOnFocus:{type:Boolean,default:!0},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},showButtonBar:{type:Boolean,default:!1},shortYearCutoff:{type:String,default:"+10"},showTime:{type:Boolean,default:!1},timeOnly:{type:Boolean,default:!1},hourFormat:{type:String,default:"24"},stepHour:{type:Number,default:1},stepMinute:{type:Number,default:1},stepSecond:{type:Number,default:1},showSeconds:{type:Boolean,default:!1},hideOnDateTimeSelect:{type:Boolean,default:!1},hideOnRangeSelection:{type:Boolean,default:!1},timeSeparator:{type:String,default:":"},showWeek:{type:Boolean,default:!1},manualInput:{type:Boolean,default:!0},appendTo:{type:[String,Object],default:"body"},readonly:{type:Boolean,default:!1},placeholder:{type:String,default:null},id:{type:String,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},panelClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},todayButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,size:"small"}}},clearButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,size:"small"}}},navigatorButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},timepickerButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:SR,provide:function(){return{$pcDatePicker:this,$parentInstance:this}}};function xc(n){"@babel/helpers - typeof";return xc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xc(n)}function $l(n){return RR(n)||AR(n)||Nb(n)||IR()}function IR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function AR(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function RR(n){if(Array.isArray(n))return Pc(n)}function Fl(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=Nb(n))||e){t&&(n=t);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(d){throw d},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,s=!0,l=!1;return{s:function(){t=t.call(n)},n:function(){var d=t.next();return s=d.done,d},e:function(d){l=!0,i=d},f:function(){try{s||t.return==null||t.return()}finally{if(l)throw i}}}}function Nb(n,e){if(n){if(typeof n=="string")return Pc(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Pc(n,e):void 0}}function Pc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}var Bb={name:"DatePicker",extends:ER,inheritAttrs:!1,emits:["show","hide","input","month-change","year-change","date-select","today-click","clear-click","focus","blur","keydown"],inject:{$pcFluid:{default:null}},navigationState:null,timePickerChange:!1,scrollHandler:null,outsideClickListener:null,resizeListener:null,matchMediaListener:null,overlay:null,input:null,previousButton:null,nextButton:null,timePickerTimer:null,preventFocus:!1,typeUpdate:!1,data:function(){return{d_id:this.id,currentMonth:null,currentYear:null,currentHour:null,currentMinute:null,currentSecond:null,pm:null,focused:!1,overlayVisible:!1,currentView:this.view,query:null,queryMatches:!1}},watch:{id:function(e){this.d_id=e||Gh()},modelValue:function(e){this.updateCurrentMetaData(),!this.typeUpdate&&!this.inline&&this.input&&(this.input.value=this.inputFieldValue),this.typeUpdate=!1},showTime:function(){this.updateCurrentMetaData()},minDate:function(){this.updateCurrentMetaData()},maxDate:function(){this.updateCurrentMetaData()},months:function(){this.overlay&&(this.focused||(this.inline&&(this.preventFocus=!0),setTimeout(this.updateFocus,0)))},numberOfMonths:function(){this.destroyResponsiveStyleElement(),this.createResponsiveStyle()},responsiveOptions:function(){this.destroyResponsiveStyleElement(),this.createResponsiveStyle()},currentView:function(){var e=this;Promise.resolve(null).then(function(){return e.alignOverlay()})},view:function(e){this.currentView=e}},created:function(){this.updateCurrentMetaData()},mounted:function(){this.d_id=this.d_id||Gh(),this.createResponsiveStyle(),this.bindMatchMediaListener(),this.inline?this.disabled||(this.preventFocus=!0,this.initFocusableCell()):this.input.value=this.inputFieldValue},updated:function(){this.overlay&&(this.preventFocus=!0,setTimeout(this.updateFocus,0)),this.input&&this.selectionStart!=null&&this.selectionEnd!=null&&(this.input.selectionStart=this.selectionStart,this.input.selectionEnd=this.selectionEnd,this.selectionStart=null,this.selectionEnd=null)},beforeUnmount:function(){this.timePickerTimer&&clearTimeout(this.timePickerTimer),this.destroyResponsiveStyleElement(),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&this.autoZIndex&&Bl.clear(this.overlay),this.overlay=null},methods:{isComparable:function(){return this.d_value!=null&&typeof this.d_value!="string"},isSelected:function(e){if(!this.isComparable())return!1;if(this.d_value){if(this.isSingleSelection())return this.isDateEquals(this.d_value,e);if(this.isMultipleSelection()){var t=!1,r=Fl(this.d_value),o;try{for(r.s();!(o=r.n()).done;){var i=o.value;if(t=this.isDateEquals(i,e),t)break}}catch(s){r.e(s)}finally{r.f()}return t}else if(this.isRangeSelection())return this.d_value[1]?this.isDateEquals(this.d_value[0],e)||this.isDateEquals(this.d_value[1],e)||this.isDateBetween(this.d_value[0],this.d_value[1],e):this.isDateEquals(this.d_value[0],e)}return!1},isMonthSelected:function(e){var t=this;if(!this.isComparable())return!1;if(this.isMultipleSelection())return this.d_value.some(function(c){return c.getMonth()===e&&c.getFullYear()===t.currentYear});if(this.isRangeSelection())if(this.d_value[1]){var i=new Date(this.currentYear,e,1),s=new Date(this.d_value[0].getFullYear(),this.d_value[0].getMonth(),1),l=new Date(this.d_value[1].getFullYear(),this.d_value[1].getMonth(),1);return i>=s&&i<=l}else{var r,o;return((r=this.d_value[0])===null||r===void 0?void 0:r.getFullYear())===this.currentYear&&((o=this.d_value[0])===null||o===void 0?void 0:o.getMonth())===e}else return this.d_value.getMonth()===e&&this.d_value.getFullYear()===this.currentYear},isYearSelected:function(e){if(!this.isComparable())return!1;if(this.isMultipleSelection())return this.d_value.some(function(o){return o.getFullYear()===e});if(this.isRangeSelection()){var t=this.d_value[0]?this.d_value[0].getFullYear():null,r=this.d_value[1]?this.d_value[1].getFullYear():null;return t===e||r===e||t<e&&r>e}else return this.d_value.getFullYear()===e},isDateEquals:function(e,t){return e?e.getDate()===t.day&&e.getMonth()===t.month&&e.getFullYear()===t.year:!1},isDateBetween:function(e,t,r){var o=!1;if(e&&t){var i=new Date(r.year,r.month,r.day);return e.getTime()<=i.getTime()&&t.getTime()>=i.getTime()}return o},getFirstDayOfMonthIndex:function(e,t){var r=new Date;r.setDate(1),r.setMonth(e),r.setFullYear(t);var o=r.getDay()+this.sundayIndex;return o>=7?o-7:o},getDaysCountInMonth:function(e,t){return 32-this.daylightSavingAdjust(new Date(t,e,32)).getDate()},getDaysCountInPrevMonth:function(e,t){var r=this.getPreviousMonthAndYear(e,t);return this.getDaysCountInMonth(r.month,r.year)},getPreviousMonthAndYear:function(e,t){var r,o;return e===0?(r=11,o=t-1):(r=e-1,o=t),{month:r,year:o}},getNextMonthAndYear:function(e,t){var r,o;return e===11?(r=0,o=t+1):(r=e+1,o=t),{month:r,year:o}},daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},isToday:function(e,t,r,o){return e.getDate()===t&&e.getMonth()===r&&e.getFullYear()===o},isSelectable:function(e,t,r,o){var i=!0,s=!0,l=!0,c=!0;return o&&!this.selectOtherMonths?!1:(this.minDate&&(this.minDate.getFullYear()>r||this.minDate.getFullYear()===r&&(this.minDate.getMonth()>t||this.minDate.getMonth()===t&&this.minDate.getDate()>e))&&(i=!1),this.maxDate&&(this.maxDate.getFullYear()<r||this.maxDate.getFullYear()===r&&(this.maxDate.getMonth()<t||this.maxDate.getMonth()===t&&this.maxDate.getDate()<e))&&(s=!1),this.disabledDates&&(l=!this.isDateDisabled(e,t,r)),this.disabledDays&&(c=!this.isDayDisabled(e,t,r)),i&&s&&l&&c)},onOverlayEnter:function(e){var t=this.inline?void 0:{position:"absolute",top:"0",left:"0"};QS(e,t),this.autoZIndex&&Bl.set("overlay",e,this.baseZIndex||this.$primevue.config.zIndex.overlay),this.alignOverlay(),this.$emit("show")},onOverlayEnterComplete:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener()},onOverlayAfterLeave:function(e){this.autoZIndex&&Bl.clear(e)},onOverlayLeave:function(){this.currentView=this.view,this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onPrevButtonClick:function(e){this.navigationState={backward:!0,button:!0},this.navBackward(e)},onNextButtonClick:function(e){this.navigationState={backward:!1,button:!0},this.navForward(e)},navBackward:function(e){e.preventDefault(),this.isEnabled()&&(this.currentView==="month"?(this.decrementYear(),this.$emit("year-change",{month:this.currentMonth,year:this.currentYear})):this.currentView==="year"?this.decrementDecade():e.shiftKey?this.decrementYear():(this.currentMonth===0?(this.currentMonth=11,this.decrementYear()):this.currentMonth--,this.$emit("month-change",{month:this.currentMonth+1,year:this.currentYear})))},navForward:function(e){e.preventDefault(),this.isEnabled()&&(this.currentView==="month"?(this.incrementYear(),this.$emit("year-change",{month:this.currentMonth,year:this.currentYear})):this.currentView==="year"?this.incrementDecade():e.shiftKey?this.incrementYear():(this.currentMonth===11?(this.currentMonth=0,this.incrementYear()):this.currentMonth++,this.$emit("month-change",{month:this.currentMonth+1,year:this.currentYear})))},decrementYear:function(){this.currentYear--},decrementDecade:function(){this.currentYear=this.currentYear-10},incrementYear:function(){this.currentYear++},incrementDecade:function(){this.currentYear=this.currentYear+10},switchToMonthView:function(e){this.currentView="month",setTimeout(this.updateFocus,0),e.preventDefault()},switchToYearView:function(e){this.currentView="year",setTimeout(this.updateFocus,0),e.preventDefault()},isEnabled:function(){return!this.disabled&&!this.readonly},updateCurrentTimeMeta:function(e){var t=e.getHours();this.hourFormat==="12"&&(this.pm=t>11,t>=12&&(t=t==12?12:t-12)),this.currentHour=Math.floor(t/this.stepHour)*this.stepHour,this.currentMinute=Math.floor(e.getMinutes()/this.stepMinute)*this.stepMinute,this.currentSecond=Math.floor(e.getSeconds()/this.stepSecond)*this.stepSecond},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){e.overlayVisible&&e.isOutsideClicked(t)&&(e.overlayVisible=!1)},document.addEventListener("mousedown",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("mousedown",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new wA(this.$refs.container,function(){e.overlayVisible&&(e.overlayVisible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!rE()&&(e.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var t=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){e.queryMatches=t.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isOutsideClicked:function(e){return!(this.$el.isSameNode(e.target)||this.isNavIconClicked(e)||this.$el.contains(e.target)||this.overlay&&this.overlay.contains(e.target))},isNavIconClicked:function(e){return this.previousButton&&(this.previousButton.isSameNode(e.target)||this.previousButton.contains(e.target))||this.nextButton&&(this.nextButton.isSameNode(e.target)||this.nextButton.contains(e.target))},alignOverlay:function(){this.overlay&&(this.appendTo==="self"||this.inline?XS(this.overlay,this.$el):(this.view==="date"?(this.overlay.style.width=Ws(this.overlay)+"px",this.overlay.style.minWidth=Ws(this.$el)+"px"):this.overlay.style.width=Ws(this.$el)+"px",YS(this.overlay,this.$el)))},onButtonClick:function(){this.isEnabled()&&(this.overlayVisible?this.overlayVisible=!1:(this.input.focus(),this.overlayVisible=!0))},isDateDisabled:function(e,t,r){if(this.disabledDates){var o=Fl(this.disabledDates),i;try{for(o.s();!(i=o.n()).done;){var s=i.value;if(s.getFullYear()===r&&s.getMonth()===t&&s.getDate()===e)return!0}}catch(l){o.e(l)}finally{o.f()}}return!1},isDayDisabled:function(e,t,r){if(this.disabledDays){var o=new Date(r,t,e),i=o.getDay();return this.disabledDays.indexOf(i)!==-1}return!1},onMonthDropdownChange:function(e){this.currentMonth=parseInt(e),this.$emit("month-change",{month:this.currentMonth+1,year:this.currentYear})},onYearDropdownChange:function(e){this.currentYear=parseInt(e),this.$emit("year-change",{month:this.currentMonth+1,year:this.currentYear})},onDateSelect:function(e,t){var r=this;if(!(this.disabled||!t.selectable)){if(Gn(this.overlay,'table td span:not([data-p-disabled="true"])').forEach(function(i){return i.tabIndex=-1}),e&&e.currentTarget.focus(),this.isMultipleSelection()&&this.isSelected(t)){var o=this.d_value.filter(function(i){return!r.isDateEquals(i,t)});this.updateModel(o)}else this.shouldSelectDate(t)&&(t.otherMonth?(this.currentMonth=t.month,this.currentYear=t.year,this.selectDate(t)):this.selectDate(t));this.isSingleSelection()&&(!this.showTime||this.hideOnDateTimeSelect)&&(this.input&&this.input.focus(),setTimeout(function(){r.overlayVisible=!1},150))}},selectDate:function(e){var t=this,r=new Date(e.year,e.month,e.day);this.showTime&&(this.hourFormat==="12"&&this.currentHour!==12&&this.pm?r.setHours(this.currentHour+12):r.setHours(this.currentHour),r.setMinutes(this.currentMinute),r.setSeconds(this.currentSecond)),this.minDate&&this.minDate>r&&(r=this.minDate,this.currentHour=r.getHours(),this.currentMinute=r.getMinutes(),this.currentSecond=r.getSeconds()),this.maxDate&&this.maxDate<r&&(r=this.maxDate,this.currentHour=r.getHours(),this.currentMinute=r.getMinutes(),this.currentSecond=r.getSeconds());var o=null;if(this.isSingleSelection())o=r;else if(this.isMultipleSelection())o=this.d_value?[].concat($l(this.d_value),[r]):[r];else if(this.isRangeSelection())if(this.d_value&&this.d_value.length){var i=this.d_value[0],s=this.d_value[1];!s&&r.getTime()>=i.getTime()?s=r:(i=r,s=null),o=[i,s]}else o=[r,null];o!==null&&this.updateModel(o),this.isRangeSelection()&&this.hideOnRangeSelection&&o[1]!==null&&setTimeout(function(){t.overlayVisible=!1},150),this.$emit("date-select",r)},updateModel:function(e){this.writeValue(e)},shouldSelectDate:function(){return this.isMultipleSelection()&&this.maxDateCount!=null?this.maxDateCount>(this.d_value?this.d_value.length:0):!0},isSingleSelection:function(){return this.selectionMode==="single"},isRangeSelection:function(){return this.selectionMode==="range"},isMultipleSelection:function(){return this.selectionMode==="multiple"},formatValue:function(e){if(typeof e=="string")return this.dateFormat?this.formatDate(new Date(e),this.dateFormat):e;var t="";if(e)try{if(this.isSingleSelection())t=this.formatDateTime(e);else if(this.isMultipleSelection())for(var r=0;r<e.length;r++){var o=this.formatDateTime(e[r]);t+=o,r!==e.length-1&&(t+=", ")}else if(this.isRangeSelection()&&e&&e.length){var i=e[0],s=e[1];t=this.formatDateTime(i),s&&(t+=" - "+this.formatDateTime(s))}}catch{t=e}return t},formatDateTime:function(e){var t=null;return e&&(this.timeOnly?t=this.formatTime(e):(t=this.formatDate(e,this.datePattern),this.showTime&&(t+=" "+this.formatTime(e)))),t},formatDate:function(e,t){if(!e)return"";var r,o=function(u){var p=r+1<t.length&&t.charAt(r+1)===u;return p&&r++,p},i=function(u,p,g){var b=""+p;if(o(u))for(;b.length<g;)b="0"+b;return b},s=function(u,p,g,b){return o(u)?b[p]:g[p]},l="",c=!1;if(e)for(r=0;r<t.length;r++)if(c)t.charAt(r)==="'"&&!o("'")?c=!1:l+=t.charAt(r);else switch(t.charAt(r)){case"d":l+=i("d",e.getDate(),2);break;case"D":l+=s("D",e.getDay(),this.$primevue.config.locale.dayNamesShort,this.$primevue.config.locale.dayNames);break;case"o":l+=i("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":l+=i("m",e.getMonth()+1,2);break;case"M":l+=s("M",e.getMonth(),this.$primevue.config.locale.monthNamesShort,this.$primevue.config.locale.monthNames);break;case"y":l+=o("y")?e.getFullYear():(e.getFullYear()%100<10?"0":"")+e.getFullYear()%100;break;case"@":l+=e.getTime();break;case"!":l+=e.getTime()*1e4+this.ticksTo1970;break;case"'":o("'")?l+="'":c=!0;break;default:l+=t.charAt(r)}return l},formatTime:function(e){if(!e)return"";var t="",r=e.getHours(),o=e.getMinutes(),i=e.getSeconds();return this.hourFormat==="12"&&r>11&&r!==12&&(r-=12),this.hourFormat==="12"?t+=r===0?12:r<10?"0"+r:r:t+=r<10?"0"+r:r,t+=":",t+=o<10?"0"+o:o,this.showSeconds&&(t+=":",t+=i<10?"0"+i:i),this.hourFormat==="12"&&(t+=e.getHours()>11?" ".concat(this.$primevue.config.locale.pm):" ".concat(this.$primevue.config.locale.am)),t},onTodayButtonClick:function(e){var t=new Date,r={day:t.getDate(),month:t.getMonth(),year:t.getFullYear(),otherMonth:t.getMonth()!==this.currentMonth||t.getFullYear()!==this.currentYear,today:!0,selectable:!0};this.onDateSelect(null,r),this.$emit("today-click",t),e.preventDefault()},onClearButtonClick:function(e){this.updateModel(null),this.overlayVisible=!1,this.$emit("clear-click",e),e.preventDefault()},onTimePickerElementMouseDown:function(e,t,r){this.isEnabled()&&(this.repeat(e,null,t,r),e.preventDefault())},onTimePickerElementMouseUp:function(e){this.isEnabled()&&(this.clearTimePickerTimer(),this.updateModelTime(),e.preventDefault())},onTimePickerElementMouseLeave:function(){this.clearTimePickerTimer()},repeat:function(e,t,r,o){var i=this,s=t||500;switch(this.clearTimePickerTimer(),this.timePickerTimer=setTimeout(function(){i.repeat(e,100,r,o)},s),r){case 0:o===1?this.incrementHour(e):this.decrementHour(e);break;case 1:o===1?this.incrementMinute(e):this.decrementMinute(e);break;case 2:o===1?this.incrementSecond(e):this.decrementSecond(e);break}},convertTo24Hour:function(e,t){return this.hourFormat=="12"?e===12?t?12:0:t?e+12:e:e},validateTime:function(e,t,r,o){var i=this.isComparable()?this.d_value:this.viewDate,s=this.convertTo24Hour(e,o);this.isRangeSelection()&&(i=this.d_value[1]||this.d_value[0]),this.isMultipleSelection()&&(i=this.d_value[this.d_value.length-1]);var l=i?i.toDateString():null;return!(this.minDate&&l&&this.minDate.toDateString()===l&&(this.minDate.getHours()>s||this.minDate.getHours()===s&&(this.minDate.getMinutes()>t||this.minDate.getMinutes()===t&&this.minDate.getSeconds()>r))||this.maxDate&&l&&this.maxDate.toDateString()===l&&(this.maxDate.getHours()<s||this.maxDate.getHours()===s&&(this.maxDate.getMinutes()<t||this.maxDate.getMinutes()===t&&this.maxDate.getSeconds()<r)))},incrementHour:function(e){var t=this.currentHour,r=this.currentHour+Number(this.stepHour),o=this.pm;this.hourFormat=="24"?r=r>=24?r-24:r:this.hourFormat=="12"&&(t<12&&r>11&&(o=!this.pm),r=r>=13?r-12:r),this.validateTime(r,this.currentMinute,this.currentSecond,o)&&(this.currentHour=r,this.pm=o),e.preventDefault()},decrementHour:function(e){var t=this.currentHour-this.stepHour,r=this.pm;this.hourFormat=="24"?t=t<0?24+t:t:this.hourFormat=="12"&&(this.currentHour===12&&(r=!this.pm),t=t<=0?12+t:t),this.validateTime(t,this.currentMinute,this.currentSecond,r)&&(this.currentHour=t,this.pm=r),e.preventDefault()},incrementMinute:function(e){var t=this.currentMinute+Number(this.stepMinute);this.validateTime(this.currentHour,t,this.currentSecond,this.pm)&&(this.currentMinute=t>59?t-60:t),e.preventDefault()},decrementMinute:function(e){var t=this.currentMinute-this.stepMinute;t=t<0?60+t:t,this.validateTime(this.currentHour,t,this.currentSecond,this.pm)&&(this.currentMinute=t),e.preventDefault()},incrementSecond:function(e){var t=this.currentSecond+Number(this.stepSecond);this.validateTime(this.currentHour,this.currentMinute,t,this.pm)&&(this.currentSecond=t>59?t-60:t),e.preventDefault()},decrementSecond:function(e){var t=this.currentSecond-this.stepSecond;t=t<0?60+t:t,this.validateTime(this.currentHour,this.currentMinute,t,this.pm)&&(this.currentSecond=t),e.preventDefault()},updateModelTime:function(){var e=this;this.timePickerChange=!0;var t=this.isComparable()?this.d_value:this.viewDate;this.isRangeSelection()&&(t=this.d_value[1]||this.d_value[0]),this.isMultipleSelection()&&(t=this.d_value[this.d_value.length-1]),t=t?new Date(t.getTime()):new Date,this.hourFormat=="12"?this.currentHour===12?t.setHours(this.pm?12:0):t.setHours(this.pm?this.currentHour+12:this.currentHour):t.setHours(this.currentHour),t.setMinutes(this.currentMinute),t.setSeconds(this.currentSecond),this.isRangeSelection()&&(this.d_value[1]?t=[this.d_value[0],t]:t=[t,null]),this.isMultipleSelection()&&(t=[].concat($l(this.d_value.slice(0,-1)),[t])),this.updateModel(t),this.$emit("date-select",t),setTimeout(function(){return e.timePickerChange=!1},0)},toggleAMPM:function(e){var t=this.validateTime(this.currentHour,this.currentMinute,this.currentSecond,!this.pm);!t&&(this.maxDate||this.minDate)||(this.pm=!this.pm,this.updateModelTime(),e.preventDefault())},clearTimePickerTimer:function(){this.timePickerTimer&&clearInterval(this.timePickerTimer)},onMonthSelect:function(e,t){t.month;var r=t.index;this.view==="month"?this.onDateSelect(e,{year:this.currentYear,month:r,day:1,selectable:!0}):(this.currentMonth=r,this.currentView="date",this.$emit("month-change",{month:this.currentMonth+1,year:this.currentYear})),setTimeout(this.updateFocus,0)},onYearSelect:function(e,t){this.view==="year"?this.onDateSelect(e,{year:t.value,month:0,day:1,selectable:!0}):(this.currentYear=t.value,this.currentView="month",this.$emit("year-change",{month:this.currentMonth+1,year:this.currentYear})),setTimeout(this.updateFocus,0)},updateCurrentMetaData:function(){var e=this.viewDate;this.currentMonth=e.getMonth(),this.currentYear=e.getFullYear(),(this.showTime||this.timeOnly)&&this.updateCurrentTimeMeta(e)},isValidSelection:function(e){var t=this;if(e==null)return!0;var r=!0;return this.isSingleSelection()?this.isSelectable(e.getDate(),e.getMonth(),e.getFullYear(),!1)||(r=!1):e.every(function(o){return t.isSelectable(o.getDate(),o.getMonth(),o.getFullYear(),!1)})&&this.isRangeSelection()&&(r=e.length>1&&e[1]>=e[0]),r},parseValue:function(e){if(!e||e.trim().length===0)return null;var t;if(this.isSingleSelection())t=this.parseDateTime(e);else if(this.isMultipleSelection()){var r=e.split(",");t=[];var o=Fl(r),i;try{for(o.s();!(i=o.n()).done;){var s=i.value;t.push(this.parseDateTime(s.trim()))}}catch(d){o.e(d)}finally{o.f()}}else if(this.isRangeSelection()){var l=e.split(" - ");t=[];for(var c=0;c<l.length;c++)t[c]=this.parseDateTime(l[c].trim())}return t},parseDateTime:function(e){var t,r=e.split(" ");if(this.timeOnly)t=new Date,this.populateTime(t,r[0],r[1]);else{var o=this.datePattern;this.showTime?(t=this.parseDate(r[0],o),this.populateTime(t,r[1],r[2])):t=this.parseDate(e,o)}return t},populateTime:function(e,t,r){if(this.hourFormat=="12"&&!r)throw"Invalid Time";this.pm=r===this.$primevue.config.locale.pm||r===this.$primevue.config.locale.pm.toLowerCase();var o=this.parseTime(t);e.setHours(o.hour),e.setMinutes(o.minute),e.setSeconds(o.second)},parseTime:function(e){var t=e.split(":"),r=this.showSeconds?3:2,o=/^[0-9][0-9]$/;if(t.length!==r||!t[0].match(o)||!t[1].match(o)||this.showSeconds&&!t[2].match(o))throw"Invalid time";var i=parseInt(t[0]),s=parseInt(t[1]),l=this.showSeconds?parseInt(t[2]):null;if(isNaN(i)||isNaN(s)||i>23||s>59||this.hourFormat=="12"&&i>12||this.showSeconds&&(isNaN(l)||l>59))throw"Invalid time";return this.hourFormat=="12"&&i!==12&&this.pm?i+=12:this.hourFormat=="12"&&i==12&&!this.pm&&(i=0),{hour:i,minute:s,second:l}},parseDate:function(e,t){if(t==null||e==null)throw"Invalid arguments";if(e=xc(e)==="object"?e.toString():e+"",e==="")return null;var r,o,i,s=0,l=typeof this.shortYearCutoff!="string"?this.shortYearCutoff:new Date().getFullYear()%100+parseInt(this.shortYearCutoff,10),c=-1,d=-1,u=-1,p=-1,g=!1,b,k=function(x){var D=r+1<t.length&&t.charAt(r+1)===x;return D&&r++,D},A=function(x){var D=k(x),X=x==="@"?14:x==="!"?20:x==="y"&&D?4:x==="o"?3:2,Q=x==="y"?X:1,E=new RegExp("^\\d{"+Q+","+X+"}"),v=e.substring(s).match(E);if(!v)throw"Missing number at position "+s;return s+=v[0].length,parseInt(v[0],10)},P=function(x,D,X){for(var Q=-1,E=k(x)?X:D,v=[],y=0;y<E.length;y++)v.push([y,E[y]]);v.sort(function(C,_){return-(C[1].length-_[1].length)});for(var w=0;w<v.length;w++){var S=v[w][1];if(e.substr(s,S.length).toLowerCase()===S.toLowerCase()){Q=v[w][0],s+=S.length;break}}if(Q!==-1)return Q+1;throw"Unknown name at position "+s},N=function(){if(e.charAt(s)!==t.charAt(r))throw"Unexpected literal at position "+s;s++};for(this.currentView==="month"&&(u=1),this.currentView==="year"&&(u=1,d=1),r=0;r<t.length;r++)if(g)t.charAt(r)==="'"&&!k("'")?g=!1:N();else switch(t.charAt(r)){case"d":u=A("d");break;case"D":P("D",this.$primevue.config.locale.dayNamesShort,this.$primevue.config.locale.dayNames);break;case"o":p=A("o");break;case"m":d=A("m");break;case"M":d=P("M",this.$primevue.config.locale.monthNamesShort,this.$primevue.config.locale.monthNames);break;case"y":c=A("y");break;case"@":b=new Date(A("@")),c=b.getFullYear(),d=b.getMonth()+1,u=b.getDate();break;case"!":b=new Date((A("!")-this.ticksTo1970)/1e4),c=b.getFullYear(),d=b.getMonth()+1,u=b.getDate();break;case"'":k("'")?N():g=!0;break;default:N()}if(s<e.length&&(i=e.substr(s),!/^\s+/.test(i)))throw"Extra/unparsed characters found in date: "+i;if(c===-1?c=new Date().getFullYear():c<100&&(c+=new Date().getFullYear()-new Date().getFullYear()%100+(c<=l?0:-100)),p>-1){d=1,u=p;do{if(o=this.getDaysCountInMonth(c,d-1),u<=o)break;d++,u-=o}while(!0)}if(b=this.daylightSavingAdjust(new Date(c,d-1,u)),b.getFullYear()!==c||b.getMonth()+1!==d||b.getDate()!==u)throw"Invalid date";return b},getWeekNumber:function(e){var t=new Date(e.getTime());t.setDate(t.getDate()+4-(t.getDay()||7));var r=t.getTime();return t.setMonth(0),t.setDate(1),Math.floor(Math.round((r-t.getTime())/864e5)/7)+1},onDateCellKeydown:function(e,t,r){var o=e.currentTarget,i=o.parentElement,s=ei(i);switch(e.code){case"ArrowDown":{o.tabIndex="-1";var l=i.parentElement.nextElementSibling;if(l){var c=ei(i.parentElement),d=Array.from(i.parentElement.parentElement.children),u=d.slice(c+1),p=u.find(function(ce){var ae=ce.children[s].children[0];return!Dr(ae,"data-p-disabled")});if(p){var g=p.children[s].children[0];g.tabIndex="0",g.focus()}else this.navigationState={backward:!1},this.navForward(e)}else this.navigationState={backward:!1},this.navForward(e);e.preventDefault();break}case"ArrowUp":{if(o.tabIndex="-1",e.altKey)this.overlayVisible=!1,this.focused=!0;else{var b=i.parentElement.previousElementSibling;if(b){var k=ei(i.parentElement),A=Array.from(i.parentElement.parentElement.children),P=A.slice(0,k).reverse(),N=P.find(function(ce){var ae=ce.children[s].children[0];return!Dr(ae,"data-p-disabled")});if(N){var L=N.children[s].children[0];L.tabIndex="0",L.focus()}else this.navigationState={backward:!0},this.navBackward(e)}else this.navigationState={backward:!0},this.navBackward(e)}e.preventDefault();break}case"ArrowLeft":{o.tabIndex="-1";var x=i.previousElementSibling;if(x){var D=Array.from(i.parentElement.children),X=D.slice(0,s).reverse(),Q=X.find(function(ce){var ae=ce.children[0];return!Dr(ae,"data-p-disabled")});if(Q){var E=Q.children[0];E.tabIndex="0",E.focus()}else this.navigateToMonth(e,!0,r)}else this.navigateToMonth(e,!0,r);e.preventDefault();break}case"ArrowRight":{o.tabIndex="-1";var v=i.nextElementSibling;if(v){var y=Array.from(i.parentElement.children),w=y.slice(s+1),S=w.find(function(ce){var ae=ce.children[0];return!Dr(ae,"data-p-disabled")});if(S){var C=S.children[0];C.tabIndex="0",C.focus()}else this.navigateToMonth(e,!1,r)}else this.navigateToMonth(e,!1,r);e.preventDefault();break}case"Enter":case"NumpadEnter":case"Space":{this.onDateSelect(e,t),e.preventDefault();break}case"Escape":{this.overlayVisible=!1,e.preventDefault();break}case"Tab":{this.inline||this.trapFocus(e);break}case"Home":{o.tabIndex="-1";var _=i.parentElement,pe=_.children[0].children[0];Dr(pe,"data-p-disabled")?this.navigateToMonth(e,!0,r):(pe.tabIndex="0",pe.focus()),e.preventDefault();break}case"End":{o.tabIndex="-1";var Ne=i.parentElement,Ie=Ne.children[Ne.children.length-1].children[0];Dr(Ie,"data-p-disabled")?this.navigateToMonth(e,!1,r):(Ie.tabIndex="0",Ie.focus()),e.preventDefault();break}case"PageUp":{o.tabIndex="-1",e.shiftKey?(this.navigationState={backward:!0},this.navBackward(e)):this.navigateToMonth(e,!0,r),e.preventDefault();break}case"PageDown":{o.tabIndex="-1",e.shiftKey?(this.navigationState={backward:!1},this.navForward(e)):this.navigateToMonth(e,!1,r),e.preventDefault();break}}},navigateToMonth:function(e,t,r){if(t)if(this.numberOfMonths===1||r===0)this.navigationState={backward:!0},this.navBackward(e);else{var o=this.overlay.children[r-1],i=Gn(o,'table td span:not([data-p-disabled="true"]):not([data-p-ink="true"])'),s=i[i.length-1];s.tabIndex="0",s.focus()}else if(this.numberOfMonths===1||r===this.numberOfMonths-1)this.navigationState={backward:!1},this.navForward(e);else{var l=this.overlay.children[r+1],c=Xt(l,'table td span:not([data-p-disabled="true"]):not([data-p-ink="true"])');c.tabIndex="0",c.focus()}},onMonthCellKeydown:function(e,t){var r=e.currentTarget;switch(e.code){case"ArrowUp":case"ArrowDown":{r.tabIndex="-1";var o=r.parentElement.children,i=ei(r),s=o[e.code==="ArrowDown"?i+3:i-3];s&&(s.tabIndex="0",s.focus()),e.preventDefault();break}case"ArrowLeft":{r.tabIndex="-1";var l=r.previousElementSibling;l?(l.tabIndex="0",l.focus()):(this.navigationState={backward:!0},this.navBackward(e)),e.preventDefault();break}case"ArrowRight":{r.tabIndex="-1";var c=r.nextElementSibling;c?(c.tabIndex="0",c.focus()):(this.navigationState={backward:!1},this.navForward(e)),e.preventDefault();break}case"PageUp":{if(e.shiftKey)return;this.navigationState={backward:!0},this.navBackward(e);break}case"PageDown":{if(e.shiftKey)return;this.navigationState={backward:!1},this.navForward(e);break}case"Enter":case"NumpadEnter":case"Space":{this.onMonthSelect(e,t),e.preventDefault();break}case"Escape":{this.overlayVisible=!1,e.preventDefault();break}case"Tab":{this.trapFocus(e);break}}},onYearCellKeydown:function(e,t){var r=e.currentTarget;switch(e.code){case"ArrowUp":case"ArrowDown":{r.tabIndex="-1";var o=r.parentElement.children,i=ei(r),s=o[e.code==="ArrowDown"?i+2:i-2];s&&(s.tabIndex="0",s.focus()),e.preventDefault();break}case"ArrowLeft":{r.tabIndex="-1";var l=r.previousElementSibling;l?(l.tabIndex="0",l.focus()):(this.navigationState={backward:!0},this.navBackward(e)),e.preventDefault();break}case"ArrowRight":{r.tabIndex="-1";var c=r.nextElementSibling;c?(c.tabIndex="0",c.focus()):(this.navigationState={backward:!1},this.navForward(e)),e.preventDefault();break}case"PageUp":{if(e.shiftKey)return;this.navigationState={backward:!0},this.navBackward(e);break}case"PageDown":{if(e.shiftKey)return;this.navigationState={backward:!1},this.navForward(e);break}case"Enter":case"NumpadEnter":case"Space":{this.onYearSelect(e,t),e.preventDefault();break}case"Escape":{this.overlayVisible=!1,e.preventDefault();break}case"Tab":{this.trapFocus(e);break}}},updateFocus:function(){var e;if(this.navigationState){if(this.navigationState.button)this.initFocusableCell(),this.navigationState.backward?this.previousButton.focus():this.nextButton.focus();else{if(this.navigationState.backward){var t;this.currentView==="month"?t=Gn(this.overlay,'[data-pc-section="monthview"] [data-pc-section="month"]:not([data-p-disabled="true"])'):this.currentView==="year"?t=Gn(this.overlay,'[data-pc-section="yearview"] [data-pc-section="year"]:not([data-p-disabled="true"])'):t=Gn(this.overlay,'table td span:not([data-p-disabled="true"]):not([data-p-ink="true"])'),t&&t.length>0&&(e=t[t.length-1])}else this.currentView==="month"?e=Xt(this.overlay,'[data-pc-section="monthview"] [data-pc-section="month"]:not([data-p-disabled="true"])'):this.currentView==="year"?e=Xt(this.overlay,'[data-pc-section="yearview"] [data-pc-section="year"]:not([data-p-disabled="true"])'):e=Xt(this.overlay,'table td span:not([data-p-disabled="true"]):not([data-p-ink="true"])');e&&(e.tabIndex="0",e.focus())}this.navigationState=null}else this.initFocusableCell()},initFocusableCell:function(){var e;if(this.currentView==="month"){var t=Gn(this.overlay,'[data-pc-section="monthview"] [data-pc-section="month"]'),r=Xt(this.overlay,'[data-pc-section="monthview"] [data-pc-section="month"][data-p-selected="true"]');t.forEach(function(l){return l.tabIndex=-1}),e=r||t[0]}else if(this.currentView==="year"){var o=Gn(this.overlay,'[data-pc-section="yearview"] [data-pc-section="year"]'),i=Xt(this.overlay,'[data-pc-section="yearview"] [data-pc-section="year"][data-p-selected="true"]');o.forEach(function(l){return l.tabIndex=-1}),e=i||o[0]}else if(e=Xt(this.overlay,'span[data-p-selected="true"]'),!e){var s=Xt(this.overlay,'td[data-p-today="true"] span:not([data-p-disabled="true"]):not([data-p-ink="true"])');s?e=s:e=Xt(this.overlay,'.p-datepicker-calendar td span:not([data-p-disabled="true"]):not([data-p-ink="true"])')}e&&(e.tabIndex="0",this.preventFocus=!1)},trapFocus:function(e){e.preventDefault();var t=Bh(this.overlay);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{var r=t.indexOf(document.activeElement);if(e.shiftKey)r===-1||r===0?t[t.length-1].focus():t[r-1].focus();else if(r===-1)if(this.timeOnly)t[0].focus();else{for(var o=null,i=0;i<t.length;i++)if(t[i].tagName==="SPAN"){o=i;break}t[o].focus()}else r===t.length-1?t[0].focus():t[r+1].focus()}},onContainerButtonKeydown:function(e){switch(e.code){case"Tab":this.trapFocus(e);break;case"Escape":this.overlayVisible=!1,e.preventDefault();break}this.$emit("keydown",e)},onInput:function(e){try{this.selectionStart=this.input.selectionStart,this.selectionEnd=this.input.selectionEnd;var t=this.parseValue(e.target.value);this.isValidSelection(t)&&(this.typeUpdate=!0,this.updateModel(t),this.updateCurrentMetaData())}catch{}this.$emit("input",e)},onInputClick:function(){this.showOnFocus&&this.isEnabled()&&!this.overlayVisible&&(this.overlayVisible=!0)},onFocus:function(e){this.showOnFocus&&this.isEnabled()&&(this.overlayVisible=!0),this.focused=!0,this.$emit("focus",e)},onBlur:function(e){var t,r;this.$emit("blur",{originalEvent:e,value:e.target.value}),(t=(r=this.formField).onBlur)===null||t===void 0||t.call(r),this.focused=!1,e.target.value=this.formatValue(this.d_value)},onKeyDown:function(e){if(e.code==="ArrowDown"&&this.overlay)this.trapFocus(e);else if(e.code==="ArrowDown"&&!this.overlay)this.overlayVisible=!0;else if(e.code==="Escape")this.overlayVisible&&(this.overlayVisible=!1,e.preventDefault());else if(e.code==="Tab")this.overlay&&Bh(this.overlay).forEach(function(o){return o.tabIndex="-1"}),this.overlayVisible&&(this.overlayVisible=!1);else if(e.code==="Enter"){var t;if(this.manualInput&&e.target.value!==null&&((t=e.target.value)===null||t===void 0?void 0:t.trim())!=="")try{var r=this.parseValue(e.target.value);this.isValidSelection(r)&&(this.overlayVisible=!1)}catch{}this.$emit("keydown",e)}},overlayRef:function(e){this.overlay=e},inputRef:function(e){this.input=e?e.$el:void 0},previousButtonRef:function(e){this.previousButton=e?e.$el:void 0},nextButtonRef:function(e){this.nextButton=e?e.$el:void 0},getMonthName:function(e){return this.$primevue.config.locale.monthNames[e]},getYear:function(e){return this.currentView==="month"?this.currentYear:e.year},onOverlayClick:function(e){e.stopPropagation(),this.inline||_R.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.inline||(this.input.focus(),this.overlayVisible=!1);break}},onOverlayMouseUp:function(e){this.onOverlayClick(e)},createResponsiveStyle:function(){if(this.numberOfMonths>1&&this.responsiveOptions&&!this.isUnstyled){if(!this.responsiveStyleElement){var e;this.responsiveStyleElement=document.createElement("style"),this.responsiveStyleElement.type="text/css",_b(this.responsiveStyleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.body.appendChild(this.responsiveStyleElement)}var t="";if(this.responsiveOptions)for(var r=DS(),o=$l(this.responsiveOptions).filter(function(p){return!!(p.breakpoint&&p.numMonths)}).sort(function(p,g){return-1*r(p.breakpoint,g.breakpoint)}),i=0;i<o.length;i++){for(var s=o[i],l=s.breakpoint,c=s.numMonths,d=`
                            .p-datepicker-panel[`.concat(this.$attrSelector,"] .p-datepicker-calendar:nth-child(").concat(c,`) .p-datepicker-next-button {
                                display: inline-flex;
                            }
                        `),u=c;u<this.numberOfMonths;u++)d+=`
                                .p-datepicker-panel[`.concat(this.$attrSelector,"] .p-datepicker-calendar:nth-child(").concat(u+1,`) {
                                    display: none;
                                }
                            `);t+=`
                            @media screen and (max-width: `.concat(l,`) {
                                `).concat(d,`
                            }
                        `)}this.responsiveStyleElement.innerHTML=t}},destroyResponsiveStyleElement:function(){this.responsiveStyleElement&&(this.responsiveStyleElement.remove(),this.responsiveStyleElement=null)}},computed:{viewDate:function(){var e=this.d_value;if(e&&Array.isArray(e)&&(this.isRangeSelection()?e=this.inline?e[0]:e[1]||e[0]:this.isMultipleSelection()&&(e=e[e.length-1])),e&&typeof e!="string")return e;var t=new Date;return this.maxDate&&this.maxDate<t?this.maxDate:this.minDate&&this.minDate>t?this.minDate:t},inputFieldValue:function(){return this.formatValue(this.d_value)},months:function(){for(var e=[],t=0;t<this.numberOfMonths;t++){var r=this.currentMonth+t,o=this.currentYear;r>11&&(r=r%11-1,o=o+1);for(var i=[],s=this.getFirstDayOfMonthIndex(r,o),l=this.getDaysCountInMonth(r,o),c=this.getDaysCountInPrevMonth(r,o),d=1,u=new Date,p=[],g=Math.ceil((l+s)/7),b=0;b<g;b++){var k=[];if(b==0){for(var A=c-s+1;A<=c;A++){var P=this.getPreviousMonthAndYear(r,o);k.push({day:A,month:P.month,year:P.year,otherMonth:!0,today:this.isToday(u,A,P.month,P.year),selectable:this.isSelectable(A,P.month,P.year,!0)})}for(var N=7-k.length,L=0;L<N;L++)k.push({day:d,month:r,year:o,today:this.isToday(u,d,r,o),selectable:this.isSelectable(d,r,o,!1)}),d++}else for(var x=0;x<7;x++){if(d>l){var D=this.getNextMonthAndYear(r,o);k.push({day:d-l,month:D.month,year:D.year,otherMonth:!0,today:this.isToday(u,d-l,D.month,D.year),selectable:this.isSelectable(d-l,D.month,D.year,!0)})}else k.push({day:d,month:r,year:o,today:this.isToday(u,d,r,o),selectable:this.isSelectable(d,r,o,!1)});d++}this.showWeek&&p.push(this.getWeekNumber(new Date(k[0].year,k[0].month,k[0].day))),i.push(k)}e.push({month:r,year:o,dates:i,weekNumbers:p})}return e},weekDays:function(){for(var e=[],t=this.$primevue.config.locale.firstDayOfWeek,r=0;r<7;r++)e.push(this.$primevue.config.locale.dayNamesMin[t]),t=t==6?0:++t;return e},ticksTo1970:function(){return(1969*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*1e7},sundayIndex:function(){return this.$primevue.config.locale.firstDayOfWeek>0?7-this.$primevue.config.locale.firstDayOfWeek:0},datePattern:function(){return this.dateFormat||this.$primevue.config.locale.dateFormat},monthPickerValues:function(){for(var e=this,t=[],r=function(s){if(e.minDate){var l=e.minDate.getMonth(),c=e.minDate.getFullYear();if(e.currentYear<c||e.currentYear===c&&s<l)return!1}if(e.maxDate){var d=e.maxDate.getMonth(),u=e.maxDate.getFullYear();if(e.currentYear>u||e.currentYear===u&&s>d)return!1}return!0},o=0;o<=11;o++)t.push({value:this.$primevue.config.locale.monthNamesShort[o],selectable:r(o)});return t},yearPickerValues:function(){for(var e=this,t=[],r=this.currentYear-this.currentYear%10,o=function(l){return!(e.minDate&&e.minDate.getFullYear()>l||e.maxDate&&e.maxDate.getFullYear()<l)},i=0;i<10;i++)t.push({value:r+i,selectable:o(r+i)});return t},formattedCurrentHour:function(){return this.currentHour==0&&this.hourFormat=="12"?this.currentHour+12:this.currentHour<10?"0"+this.currentHour:this.currentHour},formattedCurrentMinute:function(){return this.currentMinute<10?"0"+this.currentMinute:this.currentMinute},formattedCurrentSecond:function(){return this.currentSecond<10?"0"+this.currentSecond:this.currentSecond},todayLabel:function(){return this.$primevue.config.locale.today},clearLabel:function(){return this.$primevue.config.locale.clear},weekHeaderLabel:function(){return this.$primevue.config.locale.weekHeader},monthNames:function(){return this.$primevue.config.locale.monthNames},switchViewButtonDisabled:function(){return this.numberOfMonths>1||this.disabled},panelId:function(){return this.d_id+"_panel"}},components:{InputText:Mb,Button:Db,Portal:Vb,CalendarIcon:Tb,ChevronLeftIcon:Eb,ChevronRightIcon:Ib,ChevronUpIcon:Ab,ChevronDownIcon:Sb},directives:{ripple:Pb}},xR=["id"],PR=["disabled","aria-label","aria-expanded","aria-controls"],DR=["id","role","aria-modal","aria-label"],OR=["disabled","aria-label"],MR=["disabled","aria-label"],VR=["disabled","aria-label"],NR=["disabled","aria-label"],BR=["data-p-disabled"],LR=["abbr"],$R=["data-p-disabled"],FR=["aria-label","data-p-today","data-p-other-month"],UR=["onClick","onKeydown","aria-selected","aria-disabled","data-p-disabled","data-p-selected"],jR=["onClick","onKeydown","data-p-disabled","data-p-selected"],zR=["onClick","onKeydown","data-p-disabled","data-p-selected"];function HR(n,e,t,r,o,i){var s=bo("InputText"),l=bo("Button"),c=bo("Portal"),d=Kp("ripple");return K(),ee("span",j({ref:"container",id:o.d_id,class:n.cx("root"),style:n.sx("root")},n.ptmi("root")),[n.inline?xe("",!0):(K(),tt(s,{key:0,ref:i.inputRef,id:n.inputId,role:"combobox",class:fn([n.inputClass,n.cx("pcInputText")]),style:Ca(n.inputStyle),defaultValue:i.inputFieldValue,placeholder:n.placeholder,name:n.name,size:n.size,invalid:n.invalid,variant:n.variant,fluid:n.fluid,unstyled:n.unstyled,autocomplete:"off","aria-autocomplete":"none","aria-haspopup":"dialog","aria-expanded":o.overlayVisible,"aria-controls":i.panelId,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,inputmode:"none",disabled:n.disabled,readonly:!n.manualInput||n.readonly,tabindex:0,onInput:i.onInput,onClick:i.onInputClick,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,pt:n.ptm("pcInputText")},null,8,["id","class","style","defaultValue","placeholder","name","size","invalid","variant","fluid","unstyled","aria-expanded","aria-controls","aria-labelledby","aria-label","disabled","readonly","onInput","onClick","onFocus","onBlur","onKeydown","pt"])),n.showIcon&&n.iconDisplay==="button"&&!n.inline?Be(n.$slots,"dropdownbutton",{key:1,toggleCallback:i.onButtonClick},function(){return[me("button",j({class:n.cx("dropdown"),disabled:n.disabled,onClick:e[0]||(e[0]=function(){return i.onButtonClick&&i.onButtonClick.apply(i,arguments)}),type:"button","aria-label":n.$primevue.config.locale.chooseDate,"aria-haspopup":"dialog","aria-expanded":o.overlayVisible,"aria-controls":i.panelId},n.ptm("dropdown")),[Be(n.$slots,"dropdownicon",{class:fn(n.icon)},function(){return[(K(),tt(Lt(n.icon?"span":"CalendarIcon"),j({class:n.icon},n.ptm("dropdownIcon")),null,16,["class"]))]})],16,PR)]}):n.showIcon&&n.iconDisplay==="input"&&!n.inline?(K(),ee(We,{key:2},[n.$slots.inputicon||n.showIcon?(K(),ee("span",j({key:0,class:n.cx("inputIconContainer")},n.ptm("inputIconContainer")),[Be(n.$slots,"inputicon",{class:fn(n.cx("inputIcon")),clickCallback:i.onButtonClick},function(){return[(K(),tt(Lt(n.icon?"i":"CalendarIcon"),j({class:[n.icon,n.cx("inputIcon")],onClick:i.onButtonClick},n.ptm("inputicon")),null,16,["class","onClick"]))]})],16)):xe("",!0)],64)):xe("",!0),Te(c,{appendTo:n.appendTo,disabled:n.inline},{default:Ot(function(){return[Te(av,j({name:"p-connected-overlay",onEnter:e[58]||(e[58]=function(u){return i.onOverlayEnter(u)}),onAfterEnter:i.onOverlayEnterComplete,onAfterLeave:i.onOverlayAfterLeave,onLeave:i.onOverlayLeave},n.ptm("transition")),{default:Ot(function(){return[n.inline||o.overlayVisible?(K(),ee("div",j({key:0,ref:i.overlayRef,id:i.panelId,class:[n.cx("panel"),n.panelClass],style:n.panelStyle,role:n.inline?null:"dialog","aria-modal":n.inline?null:"true","aria-label":n.$primevue.config.locale.chooseDate,onClick:e[55]||(e[55]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),onKeydown:e[56]||(e[56]=function(){return i.onOverlayKeyDown&&i.onOverlayKeyDown.apply(i,arguments)}),onMouseup:e[57]||(e[57]=function(){return i.onOverlayMouseUp&&i.onOverlayMouseUp.apply(i,arguments)})},n.ptm("panel")),[n.timeOnly?xe("",!0):(K(),ee(We,{key:0},[me("div",j({class:n.cx("calendarContainer")},n.ptm("calendarContainer")),[(K(!0),ee(We,null,eo(i.months,function(u,p){return K(),ee("div",j({key:u.month+u.year,class:n.cx("calendar"),ref_for:!0},n.ptm("calendar")),[me("div",j({class:n.cx("header"),ref_for:!0},n.ptm("header")),[Be(n.$slots,"header"),Or(Te(l,j({ref_for:!0,ref:i.previousButtonRef,class:n.cx("pcPrevButton"),disabled:n.disabled,"aria-label":o.currentView==="year"?n.$primevue.config.locale.prevDecade:o.currentView==="month"?n.$primevue.config.locale.prevYear:n.$primevue.config.locale.prevMonth,unstyled:n.unstyled,onClick:i.onPrevButtonClick,onKeydown:i.onContainerButtonKeydown},n.navigatorButtonProps,{pt:n.ptm("pcPrevButton"),"data-pc-group-section":"navigator"}),{icon:Ot(function(g){return[Be(n.$slots,"previcon",{},function(){return[(K(),tt(Lt(n.prevIcon?"span":"ChevronLeftIcon"),j({class:[n.prevIcon,g.class],ref_for:!0},n.ptm("pcPrevButton").icon),null,16,["class"]))]})]}),_:2},1040,["class","disabled","aria-label","unstyled","onClick","onKeydown","pt"]),[[of,p===0]]),me("div",j({class:n.cx("title"),ref_for:!0},n.ptm("title")),[n.$primevue.config.locale.showMonthAfterYear?(K(),ee(We,{key:0},[o.currentView!=="year"?(K(),ee("button",j({key:0,type:"button",onClick:e[1]||(e[1]=function(){return i.switchToYearView&&i.switchToYearView.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onContainerButtonKeydown&&i.onContainerButtonKeydown.apply(i,arguments)}),class:n.cx("selectYear"),disabled:i.switchViewButtonDisabled,"aria-label":n.$primevue.config.locale.chooseYear,ref_for:!0},n.ptm("selectYear"),{"data-pc-group-section":"view"}),Pe(i.getYear(u)),17,OR)):xe("",!0),o.currentView==="date"?(K(),ee("button",j({key:1,type:"button",onClick:e[3]||(e[3]=function(){return i.switchToMonthView&&i.switchToMonthView.apply(i,arguments)}),onKeydown:e[4]||(e[4]=function(){return i.onContainerButtonKeydown&&i.onContainerButtonKeydown.apply(i,arguments)}),class:n.cx("selectMonth"),disabled:i.switchViewButtonDisabled,"aria-label":n.$primevue.config.locale.chooseMonth,ref_for:!0},n.ptm("selectMonth"),{"data-pc-group-section":"view"}),Pe(i.getMonthName(u.month)),17,MR)):xe("",!0)],64)):(K(),ee(We,{key:1},[o.currentView==="date"?(K(),ee("button",j({key:0,type:"button",onClick:e[5]||(e[5]=function(){return i.switchToMonthView&&i.switchToMonthView.apply(i,arguments)}),onKeydown:e[6]||(e[6]=function(){return i.onContainerButtonKeydown&&i.onContainerButtonKeydown.apply(i,arguments)}),class:n.cx("selectMonth"),disabled:i.switchViewButtonDisabled,"aria-label":n.$primevue.config.locale.chooseMonth,ref_for:!0},n.ptm("selectMonth"),{"data-pc-group-section":"view"}),Pe(i.getMonthName(u.month)),17,VR)):xe("",!0),o.currentView!=="year"?(K(),ee("button",j({key:1,type:"button",onClick:e[7]||(e[7]=function(){return i.switchToYearView&&i.switchToYearView.apply(i,arguments)}),onKeydown:e[8]||(e[8]=function(){return i.onContainerButtonKeydown&&i.onContainerButtonKeydown.apply(i,arguments)}),class:n.cx("selectYear"),disabled:i.switchViewButtonDisabled,"aria-label":n.$primevue.config.locale.chooseYear,ref_for:!0},n.ptm("selectYear"),{"data-pc-group-section":"view"}),Pe(i.getYear(u)),17,NR)):xe("",!0)],64)),o.currentView==="year"?(K(),ee("span",j({key:2,class:n.cx("decade"),ref_for:!0},n.ptm("decade")),[Be(n.$slots,"decade",{years:i.yearPickerValues},function(){return[Vr(Pe(i.yearPickerValues[0].value)+" - "+Pe(i.yearPickerValues[i.yearPickerValues.length-1].value),1)]})],16)):xe("",!0)],16),Or(Te(l,j({ref_for:!0,ref:i.nextButtonRef,class:n.cx("pcNextButton"),disabled:n.disabled,"aria-label":o.currentView==="year"?n.$primevue.config.locale.nextDecade:o.currentView==="month"?n.$primevue.config.locale.nextYear:n.$primevue.config.locale.nextMonth,unstyled:n.unstyled,onClick:i.onNextButtonClick,onKeydown:i.onContainerButtonKeydown},n.navigatorButtonProps,{pt:n.ptm("pcNextButton"),"data-pc-group-section":"navigator"}),{icon:Ot(function(g){return[Be(n.$slots,"nexticon",{},function(){return[(K(),tt(Lt(n.nextIcon?"span":"ChevronRightIcon"),j({class:[n.nextIcon,g.class],ref_for:!0},n.ptm("pcNextButton").icon),null,16,["class"]))]})]}),_:2},1040,["class","disabled","aria-label","unstyled","onClick","onKeydown","pt"]),[[of,n.numberOfMonths===1?!0:p===n.numberOfMonths-1]])],16),o.currentView==="date"?(K(),ee("table",j({key:0,class:n.cx("dayView"),role:"grid",ref_for:!0},n.ptm("dayView")),[me("thead",j({ref_for:!0},n.ptm("tableHeader")),[me("tr",j({ref_for:!0},n.ptm("tableHeaderRow")),[n.showWeek?(K(),ee("th",j({key:0,scope:"col",class:n.cx("weekHeader"),ref_for:!0},n.ptm("weekHeader",{context:{disabled:n.showWeek}}),{"data-p-disabled":n.showWeek,"data-pc-group-section":"tableheadercell"}),[Be(n.$slots,"weekheaderlabel",{},function(){return[me("span",j({ref_for:!0},n.ptm("weekHeaderLabel",{context:{disabled:n.showWeek}}),{"data-pc-group-section":"tableheadercelllabel"}),Pe(i.weekHeaderLabel),17)]})],16,BR)):xe("",!0),(K(!0),ee(We,null,eo(i.weekDays,function(g){return K(),ee("th",j({key:g,scope:"col",abbr:g,ref_for:!0},n.ptm("tableHeaderCell"),{"data-pc-group-section":"tableheadercell",class:n.cx("weekDayCell")}),[me("span",j({class:n.cx("weekDay"),ref_for:!0},n.ptm("weekDay"),{"data-pc-group-section":"tableheadercelllabel"}),Pe(g),17)],16,LR)}),128))],16)],16),me("tbody",j({ref_for:!0},n.ptm("tableBody")),[(K(!0),ee(We,null,eo(u.dates,function(g,b){return K(),ee("tr",j({key:g[0].day+""+g[0].month,ref_for:!0},n.ptm("tableBodyRow")),[n.showWeek?(K(),ee("td",j({key:0,class:n.cx("weekNumber"),ref_for:!0},n.ptm("weekNumber"),{"data-pc-group-section":"tablebodycell"}),[me("span",j({class:n.cx("weekLabelContainer"),ref_for:!0},n.ptm("weekLabelContainer",{context:{disabled:n.showWeek}}),{"data-p-disabled":n.showWeek,"data-pc-group-section":"tablebodycelllabel"}),[Be(n.$slots,"weeklabel",{weekNumber:u.weekNumbers[b]},function(){return[u.weekNumbers[b]<10?(K(),ee("span",j({key:0,style:{visibility:"hidden"},ref_for:!0},n.ptm("weekLabel")),"0",16)):xe("",!0),Vr(" "+Pe(u.weekNumbers[b]),1)]})],16,$R)],16)):xe("",!0),(K(!0),ee(We,null,eo(g,function(k){return K(),ee("td",j({key:k.day+""+k.month,"aria-label":k.day,class:n.cx("dayCell",{date:k}),ref_for:!0},n.ptm("dayCell",{context:{date:k,today:k.today,otherMonth:k.otherMonth,selected:i.isSelected(k),disabled:!k.selectable}}),{"data-p-today":k.today,"data-p-other-month":k.otherMonth,"data-pc-group-section":"tablebodycell"}),[n.showOtherMonths||!k.otherMonth?Or((K(),ee("span",j({key:0,class:n.cx("day",{date:k}),onClick:function(P){return i.onDateSelect(P,k)},draggable:"false",onKeydown:function(P){return i.onDateCellKeydown(P,k,p)},"aria-selected":i.isSelected(k),"aria-disabled":!k.selectable,ref_for:!0},n.ptm("day",{context:{date:k,today:k.today,otherMonth:k.otherMonth,selected:i.isSelected(k),disabled:!k.selectable}}),{"data-p-disabled":!k.selectable,"data-p-selected":i.isSelected(k),"data-pc-group-section":"tablebodycelllabel"}),[Be(n.$slots,"date",{date:k},function(){return[Vr(Pe(k.day),1)]})],16,UR)),[[d]]):xe("",!0),i.isSelected(k)?(K(),ee("div",j({key:1,class:"p-hidden-accessible","aria-live":"polite",ref_for:!0},n.ptm("hiddenSelectedDay"),{"data-p-hidden-accessible":!0}),Pe(k.day),17)):xe("",!0)],16,FR)}),128))],16)}),128))],16)],16)):xe("",!0)],16)}),128))],16),o.currentView==="month"?(K(),ee("div",j({key:0,class:n.cx("monthView")},n.ptm("monthView")),[(K(!0),ee(We,null,eo(i.monthPickerValues,function(u,p){return Or((K(),ee("span",j({key:u,onClick:function(b){return i.onMonthSelect(b,{month:u,index:p})},onKeydown:function(b){return i.onMonthCellKeydown(b,{month:u,index:p})},class:n.cx("month",{month:u,index:p}),ref_for:!0},n.ptm("month",{context:{month:u,monthIndex:p,selected:i.isMonthSelected(p),disabled:!u.selectable}}),{"data-p-disabled":!u.selectable,"data-p-selected":i.isMonthSelected(p)}),[Vr(Pe(u.value)+" ",1),i.isMonthSelected(p)?(K(),ee("div",j({key:0,class:"p-hidden-accessible","aria-live":"polite",ref_for:!0},n.ptm("hiddenMonth"),{"data-p-hidden-accessible":!0}),Pe(u.value),17)):xe("",!0)],16,jR)),[[d]])}),128))],16)):xe("",!0),o.currentView==="year"?(K(),ee("div",j({key:1,class:n.cx("yearView")},n.ptm("yearView")),[(K(!0),ee(We,null,eo(i.yearPickerValues,function(u){return Or((K(),ee("span",j({key:u.value,onClick:function(g){return i.onYearSelect(g,u)},onKeydown:function(g){return i.onYearCellKeydown(g,u)},class:n.cx("year",{year:u}),ref_for:!0},n.ptm("year",{context:{year:u,selected:i.isYearSelected(u.value),disabled:!u.selectable}}),{"data-p-disabled":!u.selectable,"data-p-selected":i.isYearSelected(u.value)}),[Vr(Pe(u.value)+" ",1),i.isYearSelected(u.value)?(K(),ee("div",j({key:0,class:"p-hidden-accessible","aria-live":"polite",ref_for:!0},n.ptm("hiddenYear"),{"data-p-hidden-accessible":!0}),Pe(u.value),17)):xe("",!0)],16,zR)),[[d]])}),128))],16)):xe("",!0)],64)),(n.showTime||n.timeOnly)&&o.currentView==="date"?(K(),ee("div",j({key:1,class:n.cx("timePicker")},n.ptm("timePicker")),[me("div",j({class:n.cx("hourPicker")},n.ptm("hourPicker"),{"data-pc-group-section":"timepickerContainer"}),[Te(l,j({class:n.cx("pcIncrementButton"),"aria-label":n.$primevue.config.locale.nextHour,unstyled:n.unstyled,onMousedown:e[9]||(e[9]=function(u){return i.onTimePickerElementMouseDown(u,0,1)}),onMouseup:e[10]||(e[10]=function(u){return i.onTimePickerElementMouseUp(u)}),onKeydown:[i.onContainerButtonKeydown,e[12]||(e[12]=He(function(u){return i.onTimePickerElementMouseDown(u,0,1)},["enter"])),e[13]||(e[13]=He(function(u){return i.onTimePickerElementMouseDown(u,0,1)},["space"]))],onMouseleave:e[11]||(e[11]=function(u){return i.onTimePickerElementMouseLeave()}),onKeyup:[e[14]||(e[14]=He(function(u){return i.onTimePickerElementMouseUp(u)},["enter"])),e[15]||(e[15]=He(function(u){return i.onTimePickerElementMouseUp(u)},["space"]))]},n.timepickerButtonProps,{pt:n.ptm("pcIncrementButton"),"data-pc-group-section":"timepickerbutton"}),{icon:Ot(function(u){return[Be(n.$slots,"incrementicon",{},function(){return[(K(),tt(Lt(n.incrementIcon?"span":"ChevronUpIcon"),j({class:[n.incrementIcon,u.class]},n.ptm("pcIncrementButton").icon,{"data-pc-group-section":"timepickerlabel"}),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onKeydown","pt"]),me("span",j(n.ptm("hour"),{"data-pc-group-section":"timepickerlabel"}),Pe(i.formattedCurrentHour),17),Te(l,j({class:n.cx("pcDecrementButton"),"aria-label":n.$primevue.config.locale.prevHour,unstyled:n.unstyled,onMousedown:e[16]||(e[16]=function(u){return i.onTimePickerElementMouseDown(u,0,-1)}),onMouseup:e[17]||(e[17]=function(u){return i.onTimePickerElementMouseUp(u)}),onKeydown:[i.onContainerButtonKeydown,e[19]||(e[19]=He(function(u){return i.onTimePickerElementMouseDown(u,0,-1)},["enter"])),e[20]||(e[20]=He(function(u){return i.onTimePickerElementMouseDown(u,0,-1)},["space"]))],onMouseleave:e[18]||(e[18]=function(u){return i.onTimePickerElementMouseLeave()}),onKeyup:[e[21]||(e[21]=He(function(u){return i.onTimePickerElementMouseUp(u)},["enter"])),e[22]||(e[22]=He(function(u){return i.onTimePickerElementMouseUp(u)},["space"]))]},n.timepickerButtonProps,{pt:n.ptm("pcDecrementButton"),"data-pc-group-section":"timepickerbutton"}),{icon:Ot(function(u){return[Be(n.$slots,"decrementicon",{},function(){return[(K(),tt(Lt(n.decrementIcon?"span":"ChevronDownIcon"),j({class:[n.decrementIcon,u.class]},n.ptm("pcDecrementButton").icon,{"data-pc-group-section":"timepickerlabel"}),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onKeydown","pt"])],16),me("div",j(n.ptm("separatorContainer"),{"data-pc-group-section":"timepickerContainer"}),[me("span",j(n.ptm("separator"),{"data-pc-group-section":"timepickerlabel"}),Pe(n.timeSeparator),17)],16),me("div",j({class:n.cx("minutePicker")},n.ptm("minutePicker"),{"data-pc-group-section":"timepickerContainer"}),[Te(l,j({class:n.cx("pcIncrementButton"),"aria-label":n.$primevue.config.locale.nextMinute,disabled:n.disabled,unstyled:n.unstyled,onMousedown:e[23]||(e[23]=function(u){return i.onTimePickerElementMouseDown(u,1,1)}),onMouseup:e[24]||(e[24]=function(u){return i.onTimePickerElementMouseUp(u)}),onKeydown:[i.onContainerButtonKeydown,e[26]||(e[26]=He(function(u){return i.onTimePickerElementMouseDown(u,1,1)},["enter"])),e[27]||(e[27]=He(function(u){return i.onTimePickerElementMouseDown(u,1,1)},["space"]))],onMouseleave:e[25]||(e[25]=function(u){return i.onTimePickerElementMouseLeave()}),onKeyup:[e[28]||(e[28]=He(function(u){return i.onTimePickerElementMouseUp(u)},["enter"])),e[29]||(e[29]=He(function(u){return i.onTimePickerElementMouseUp(u)},["space"]))]},n.timepickerButtonProps,{pt:n.ptm("pcIncrementButton"),"data-pc-group-section":"timepickerbutton"}),{icon:Ot(function(u){return[Be(n.$slots,"incrementicon",{},function(){return[(K(),tt(Lt(n.incrementIcon?"span":"ChevronUpIcon"),j({class:[n.incrementIcon,u.class]},n.ptm("pcIncrementButton").icon,{"data-pc-group-section":"timepickerlabel"}),null,16,["class"]))]})]}),_:3},16,["class","aria-label","disabled","unstyled","onKeydown","pt"]),me("span",j(n.ptm("minute"),{"data-pc-group-section":"timepickerlabel"}),Pe(i.formattedCurrentMinute),17),Te(l,j({class:n.cx("pcDecrementButton"),"aria-label":n.$primevue.config.locale.prevMinute,disabled:n.disabled,onMousedown:e[30]||(e[30]=function(u){return i.onTimePickerElementMouseDown(u,1,-1)}),onMouseup:e[31]||(e[31]=function(u){return i.onTimePickerElementMouseUp(u)}),onKeydown:[i.onContainerButtonKeydown,e[33]||(e[33]=He(function(u){return i.onTimePickerElementMouseDown(u,1,-1)},["enter"])),e[34]||(e[34]=He(function(u){return i.onTimePickerElementMouseDown(u,1,-1)},["space"]))],onMouseleave:e[32]||(e[32]=function(u){return i.onTimePickerElementMouseLeave()}),onKeyup:[e[35]||(e[35]=He(function(u){return i.onTimePickerElementMouseUp(u)},["enter"])),e[36]||(e[36]=He(function(u){return i.onTimePickerElementMouseUp(u)},["space"]))]},n.timepickerButtonProps,{pt:n.ptm("pcDecrementButton"),"data-pc-group-section":"timepickerbutton"}),{icon:Ot(function(u){return[Be(n.$slots,"decrementicon",{},function(){return[(K(),tt(Lt(n.decrementIcon?"span":"ChevronDownIcon"),j({class:[n.decrementIcon,u.class]},n.ptm("pcDecrementButton").icon,{"data-pc-group-section":"timepickerlabel"}),null,16,["class"]))]})]}),_:3},16,["class","aria-label","disabled","onKeydown","pt"])],16),n.showSeconds?(K(),ee("div",j({key:0,class:n.cx("separatorContainer")},n.ptm("separatorContainer"),{"data-pc-group-section":"timepickerContainer"}),[me("span",j(n.ptm("separator"),{"data-pc-group-section":"timepickerlabel"}),Pe(n.timeSeparator),17)],16)):xe("",!0),n.showSeconds?(K(),ee("div",j({key:1,class:n.cx("secondPicker")},n.ptm("secondPicker"),{"data-pc-group-section":"timepickerContainer"}),[Te(l,j({class:n.cx("pcIncrementButton"),"aria-label":n.$primevue.config.locale.nextSecond,disabled:n.disabled,unstyled:n.unstyled,onMousedown:e[37]||(e[37]=function(u){return i.onTimePickerElementMouseDown(u,2,1)}),onMouseup:e[38]||(e[38]=function(u){return i.onTimePickerElementMouseUp(u)}),onKeydown:[i.onContainerButtonKeydown,e[40]||(e[40]=He(function(u){return i.onTimePickerElementMouseDown(u,2,1)},["enter"])),e[41]||(e[41]=He(function(u){return i.onTimePickerElementMouseDown(u,2,1)},["space"]))],onMouseleave:e[39]||(e[39]=function(u){return i.onTimePickerElementMouseLeave()}),onKeyup:[e[42]||(e[42]=He(function(u){return i.onTimePickerElementMouseUp(u)},["enter"])),e[43]||(e[43]=He(function(u){return i.onTimePickerElementMouseUp(u)},["space"]))]},n.timepickerButtonProps,{pt:n.ptm("pcIncrementButton"),"data-pc-group-section":"timepickerbutton"}),{icon:Ot(function(u){return[Be(n.$slots,"incrementicon",{},function(){return[(K(),tt(Lt(n.incrementIcon?"span":"ChevronUpIcon"),j({class:[n.incrementIcon,u.class]},n.ptm("pcIncrementButton").icon,{"data-pc-group-section":"timepickerlabel"}),null,16,["class"]))]})]}),_:3},16,["class","aria-label","disabled","unstyled","onKeydown","pt"]),me("span",j(n.ptm("second"),{"data-pc-group-section":"timepickerlabel"}),Pe(i.formattedCurrentSecond),17),Te(l,j({class:n.cx("pcDecrementButton"),"aria-label":n.$primevue.config.locale.prevSecond,disabled:n.disabled,unstyled:n.unstyled,onMousedown:e[44]||(e[44]=function(u){return i.onTimePickerElementMouseDown(u,2,-1)}),onMouseup:e[45]||(e[45]=function(u){return i.onTimePickerElementMouseUp(u)}),onKeydown:[i.onContainerButtonKeydown,e[47]||(e[47]=He(function(u){return i.onTimePickerElementMouseDown(u,2,-1)},["enter"])),e[48]||(e[48]=He(function(u){return i.onTimePickerElementMouseDown(u,2,-1)},["space"]))],onMouseleave:e[46]||(e[46]=function(u){return i.onTimePickerElementMouseLeave()}),onKeyup:[e[49]||(e[49]=He(function(u){return i.onTimePickerElementMouseUp(u)},["enter"])),e[50]||(e[50]=He(function(u){return i.onTimePickerElementMouseUp(u)},["space"]))]},n.timepickerButtonProps,{pt:n.ptm("pcDecrementButton"),"data-pc-group-section":"timepickerbutton"}),{icon:Ot(function(u){return[Be(n.$slots,"decrementicon",{},function(){return[(K(),tt(Lt(n.decrementIcon?"span":"ChevronDownIcon"),j({class:[n.decrementIcon,u.class]},n.ptm("pcDecrementButton").icon,{"data-pc-group-section":"timepickerlabel"}),null,16,["class"]))]})]}),_:3},16,["class","aria-label","disabled","unstyled","onKeydown","pt"])],16)):xe("",!0),n.hourFormat=="12"?(K(),ee("div",j({key:2,class:n.cx("separatorContainer")},n.ptm("separatorContainer"),{"data-pc-group-section":"timepickerContainer"}),[me("span",j(n.ptm("separator"),{"data-pc-group-section":"timepickerlabel"}),Pe(n.timeSeparator),17)],16)):xe("",!0),n.hourFormat=="12"?(K(),ee("div",j({key:3,class:n.cx("ampmPicker")},n.ptm("ampmPicker")),[Te(l,j({class:n.cx("pcIncrementButton"),"aria-label":n.$primevue.config.locale.am,disabled:n.disabled,unstyled:n.unstyled,onClick:e[51]||(e[51]=function(u){return i.toggleAMPM(u)}),onKeydown:i.onContainerButtonKeydown},n.timepickerButtonProps,{pt:n.ptm("pcIncrementButton"),"data-pc-group-section":"timepickerbutton"}),{icon:Ot(function(u){return[Be(n.$slots,"incrementicon",{class:fn(n.cx("incrementIcon"))},function(){return[(K(),tt(Lt(n.incrementIcon?"span":"ChevronUpIcon"),j({class:[n.cx("incrementIcon"),u.class]},n.ptm("pcIncrementButton").icon,{"data-pc-group-section":"timepickerlabel"}),null,16,["class"]))]})]}),_:3},16,["class","aria-label","disabled","unstyled","onKeydown","pt"]),me("span",j(n.ptm("ampm"),{"data-pc-group-section":"timepickerlabel"}),Pe(o.pm?n.$primevue.config.locale.pm:n.$primevue.config.locale.am),17),Te(l,j({class:n.cx("pcDecrementButton"),"aria-label":n.$primevue.config.locale.pm,disabled:n.disabled,onClick:e[52]||(e[52]=function(u){return i.toggleAMPM(u)}),onKeydown:i.onContainerButtonKeydown},n.timepickerButtonProps,{pt:n.ptm("pcDecrementButton"),"data-pc-group-section":"timepickerbutton"}),{icon:Ot(function(u){return[Be(n.$slots,"decrementicon",{class:fn(n.cx("decrementIcon"))},function(){return[(K(),tt(Lt(n.decrementIcon?"span":"ChevronDownIcon"),j({class:[n.cx("decrementIcon"),u.class]},n.ptm("pcDecrementButton").icon,{"data-pc-group-section":"timepickerlabel"}),null,16,["class"]))]})]}),_:3},16,["class","aria-label","disabled","onKeydown","pt"])],16)):xe("",!0)],16)):xe("",!0),n.showButtonBar?(K(),ee("div",j({key:2,class:n.cx("buttonbar")},n.ptm("buttonbar")),[Te(l,j({label:i.todayLabel,onClick:e[53]||(e[53]=function(u){return i.onTodayButtonClick(u)}),class:n.cx("pcTodayButton"),unstyled:n.unstyled,onKeydown:i.onContainerButtonKeydown},n.todayButtonProps,{pt:n.ptm("pcTodayButton"),"data-pc-group-section":"button"}),null,16,["label","class","unstyled","onKeydown","pt"]),Te(l,j({label:i.clearLabel,onClick:e[54]||(e[54]=function(u){return i.onClearButtonClick(u)}),class:n.cx("pcClearButton"),unstyled:n.unstyled,onKeydown:i.onContainerButtonKeydown},n.clearButtonProps,{pt:n.ptm("pcClearButton"),"data-pc-group-section":"button"}),null,16,["label","class","unstyled","onKeydown","pt"])],16)):xe("",!0),Be(n.$slots,"footer")],16,DR)):xe("",!0)]}),_:3},16,["onAfterEnter","onAfterLeave","onLeave"])]}),_:3},8,["appendTo","disabled"])],16,xR)}Bb.render=HR;const WR=vg(Ec,{styles:Ec.styles,shadowRoot:!0}),KR=vg(ES,{styles:Ec.styles,shadowRoot:!0,configureApp:n=>{n.use(xE,{theme:{preset:gA}}),n.component("DatePicker",Bb)}});customElements.define("vue-app",WR);customElements.define("prime-app",KR);
