"use strict";
exports.id = 5540;
exports.ids = [5540];
exports.modules = {

/***/ 6567:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ a)
/* harmony export */ });
/* unused harmony export fetchAsset */
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1366);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4143);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(375);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3802);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3466);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const i=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getLogger */ .Z.getLogger("esri.assets");function n(s,o){return t(a(s),o)}function a(t){if(!_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].assetsPath */ .Z.assetsPath)throw i.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z("assets:path-not-set","config.assetsPath is not set");return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .join */ .v_)(_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].assetsPath */ .Z.assetsPath,t)}


/***/ }),

/***/ 1355:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6663);
/* harmony import */ var _Accessor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8378);
/* harmony import */ var _handleUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3148);
/* harmony import */ var _accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(266);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class i{constructor(){this._emitter=new i.EventEmitter(this)}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}}!function(n){class o{constructor(t=null){this._target=t,this._listenersMap=null}clear(){this._listenersMap&&this._listenersMap.clear(),this._listenersMap=null}emit(t,e){const s=this._listenersMap&&this._listenersMap.get(t);if(!s)return!1;const r=this._target||this;return[...s].forEach((t=>{t.call(r,e)})),s.length>0}on(t,e){if(Array.isArray(t)){const r=t.map((t=>this.on(t,e)));return (0,_handleUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .handlesGroup */ .AL)(r)}if(t.includes(","))throw new TypeError("Evented.on() with a comma delimited string of event types is not supported");this._listenersMap||(this._listenersMap=new Map);const r=this._listenersMap.get(t)||[];return r.push(e),this._listenersMap.set(t,r),{remove:()=>{const s=this._listenersMap&&this._listenersMap.get(t)||[],r=s.indexOf(e);r>=0&&s.splice(r,1)}}}once(t,e){const s=this.on(t,(t=>{s.remove(),e.call(null,t)}));return s}hasEventListener(t){const e=this._listenersMap&&this._listenersMap.get(t);return null!=e&&e.length>0}}n.EventEmitter=o,n.EventedMixin=e=>{let s=class extends e{constructor(){super(...arguments),this._emitter=new o}destroy(){this._emitter.clear()}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}};return s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_3__._)([(0,_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_1__/* .subclass */ .j)("esri.core.Evented")],s),s};let h=class extends _Accessor_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z{constructor(){super(...arguments),this._emitter=new i.EventEmitter(this)}destroy(){this._emitter.clear()}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}};h=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_3__._)([(0,_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_1__/* .subclass */ .j)("esri.core.Evented")],h),n.EventedAccessor=h}(i||(i={}));const n=i;


/***/ }),

/***/ 4189:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ m)
/* harmony export */ });
/* unused harmony export EsriPromise */
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6663);
/* harmony import */ var _Accessor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8378);
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1681);
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4353);
/* harmony import */ var _accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(266);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var h;!function(s){s[s.PENDING=0]="PENDING",s[s.RESOLVED=1]="RESOLVED",s[s.REJECTED=2]="REJECTED"}(h||(h={}));class n{constructor(s){this.instance=s,this._resolver=(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createDeferred */ .dD)(),this._status=h.PENDING,this._resolvingPromises=[],this._resolver.promise.then((()=>{this._status=h.RESOLVED,this._cleanUp()}),(()=>{this._status=h.REJECTED,this._cleanUp()}))}addResolvingPromise(s){this._resolvingPromises.push(s),this._tryResolve()}isResolved(){return this._status===h.RESOLVED}isRejected(){return this._status===h.REJECTED}isFulfilled(){return this._status!==h.PENDING}abort(){this._resolver.reject((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createAbortError */ .zE)())}when(s,e){return this._resolver.promise.then(s,e)}_cleanUp(){this._allPromise=this._resolvingPromises=this._allPromise=null}_tryResolve(){if(this.isFulfilled())return;const s=(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createDeferred */ .dD)(),e=[...this._resolvingPromises,(0,_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .assumeNonNull */ .j0)(s.promise)],t=this._allPromise=Promise.all(e);t.then((()=>{this.isFulfilled()||this._allPromise!==t||this._resolver.resolve(this.instance)}),(s=>{this.isFulfilled()||this._allPromise!==t||(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isAbortError */ .D_)(s)||this._resolver.reject(s)})),s.resolve()}}const m=e=>{let i=class extends e{constructor(...s){super(...s),this._promiseProps=new n(this),this.addResolvingPromise(Promise.resolve())}isResolved(){return this._promiseProps.isResolved()}isRejected(){return this._promiseProps.isRejected()}isFulfilled(){return this._promiseProps.isFulfilled()}when(s,e){return new Promise(((s,e)=>{this._promiseProps.when(s,e)})).then(s,e)}catch(s){return this.when(null,s)}addResolvingPromise(s){s&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in s?s.when():s)}};return i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_4__._)([(0,_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__/* .subclass */ .j)("esri.core.Promise")],i),i};let _=class extends(m(_Accessor_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)){};_=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_4__._)([(0,_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__/* .subclass */ .j)("esri.core.Promise")],_);


/***/ }),

/***/ 9183:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L7": () => (/* binding */ e)
/* harmony export */ });
/* unused harmony exports closest, empty, insertAfter, insertBefore, remove, reparent */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e(e){return"string"==typeof e?document.getElementById(e):e??null}function t(e){for(;e.hasChildNodes();)e.removeChild(e.firstChild)}function n(e,t){const n=t.parentNode;n&&(n.lastChild===t?n.appendChild(e):n.insertBefore(e,t.nextSibling))}function o(e,t){const n=t.parentNode;n&&n.insertBefore(e,t)}function r(e,t){for(;;){const n=e.firstChild;if(!n)break;t.appendChild(n)}}function l(e){e.parentNode&&e.parentNode.removeChild(e)}const i=(()=>{if("function"==typeof Element.prototype.closest)return(e,t)=>e.closest(t);const e=Element.prototype.matches||Element.prototype.msMatchesSelector;return(t,n)=>{let o=t;do{if(e.call(o,n))return o;o=o.parentElement}while(null!==o&&1===o.nodeType);return null}})();


/***/ }),

/***/ 6868:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YP": () => (/* binding */ l),
/* harmony export */   "gx": () => (/* binding */ f),
/* harmony export */   "nn": () => (/* binding */ h)
/* harmony export */ });
/* unused harmony exports on, once, pausable, sync, syncAndInitial, whenOnce */
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9546);
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1681);
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4353);
/* harmony import */ var _accessorSupport_watch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8280);
/* harmony import */ var _accessorSupport_trackingUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3235);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function l(n,t,r={}){return m(n,t,r,y)}function f(n,t,r={}){return m(n,t,r,d)}function m(n,t,r={},e){let i=null;const u=r.once?(n,r)=>{e(n)&&((0,_maybe_js__WEBPACK_IMPORTED_MODULE_4__/* .removeMaybe */ .hw)(i),t(n,r))}:(n,r)=>{e(n)&&t(n,r)};if(i=(0,_accessorSupport_watch_js__WEBPACK_IMPORTED_MODULE_2__/* .watchTracked */ .aQ)(n,u,r.sync,r.equals),r.initial){const t=n();u(t,t)}return i}function a(r,i,u,s={}){let c=null,f=null,m=null;function a(){c&&f&&(f.remove(),s.onListenerRemove?.(c),c=null,f=null)}function p(n){s.once&&s.once&&o(m),u(n)}const j=l(r,((r,e)=>{a(),n(r)&&(c=r,f=t(r,i,p),s.onListenerAdd?.(r))}),{sync:s.sync,initial:!0});return m=e((()=>{j.remove(),a()})),m}function p(n,t){return v(n,null,t)}function j(n,t){return v(n,d,t)}function v(n,t,e){if(i(e))return Promise.reject(u());const c=n();if(t?.(c))return Promise.resolve(c);let l=null;function f(){l=o(l)}return new Promise(((o,i)=>{l=r([s(e,(()=>{f(),i(u())})),m(n,(n=>{f(),o(n)}),{sync:!1,once:!0},t??y)])}))}function y(n){return!0}function d(n){return!!n}function P(n,t,r={}){let e=!1;const o=l(n,((n,r)=>{e||t(n,r)}),r);return{remove(){o.remove()},pause(){e=!0},resume(){e=!1}}}const U={sync:!0},h={initial:!0},w={sync:!0,initial:!0};


/***/ }),

/***/ 2173:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const t="randomUUID"in crypto;function n(){if(t)return crypto.randomUUID();const n=crypto.getRandomValues(new Uint16Array(8));n[3]=4095&n[3]|16384,n[4]=16383&n[4]|32768;const r=t=>n[t].toString(16).padStart(4,"0");return r(0)+r(1)+"-"+r(2)+"-"+r(3)+"-"+r(4)+"-"+r(5)+r(6)+r(7)}


/***/ }),

/***/ 7943:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6663);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5418);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1453);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(266);
/* harmony import */ var _intl_substitute_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1547);
/* harmony import */ var _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6792);
/* harmony import */ var _widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2526);
/* harmony import */ var _widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4236);
/* harmony import */ var _widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_widgets_Widget_js__WEBPACK_IMPORTED_MODULE_5__]);
_widgets_Widget_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const a={base:"esri-identity-form",group:"esri-identity-form__group",label:"esri-identity-form__label",footer:"esri-identity-form__footer",esriInput:"esri-input",esriButton:"esri-button",esriButtonSecondary:"esri-button--secondary"},l="ArcGIS Online";let p=class extends _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z{constructor(s,e){super(s,e),this._usernameInputNode=null,this._passwordInputNode=null,this.signingIn=!1,this.server=null,this.resource=null,this.error=null,this.oAuthPrompt=!1}render(){const{error:s,server:e,resource:t,signingIn:o,oAuthPrompt:n,messages:p}=this,d=(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_7__/* .tsx */ .u)("div",{class:a.group},(0,_intl_substitute_js__WEBPACK_IMPORTED_MODULE_4__/* .substitute */ .n)(n?p.oAuthInfo:p.info,{server:e&&/\.arcgis\.com/i.test(e)?l:e,resource:`(${t||p.lblItem})`})),c=n?null:(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_7__/* .tsx */ .u)("div",{class:a.group,key:"username"},(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_7__/* .tsx */ .u)("label",{class:a.label},p.lblUser,(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_7__/* .tsx */ .u)("input",{value:"",required:!0,autocomplete:"off",spellcheck:!1,type:"text",bind:this,afterCreate:_widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .storeNode */ .Yo,"data-node-ref":"_usernameInputNode",class:a.esriInput}))),m=n?null:(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_7__/* .tsx */ .u)("div",{class:a.group,key:"password"},(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_7__/* .tsx */ .u)("label",{class:a.label},p.lblPwd,(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_7__/* .tsx */ .u)("input",{value:"",required:!0,type:"password",bind:this,afterCreate:_widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .storeNode */ .Yo,"data-node-ref":"_passwordInputNode",class:a.esriInput}))),h=(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_7__/* .tsx */ .u)("div",{class:this.classes(a.group,a.footer)},(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_7__/* .tsx */ .u)("input",{type:"submit",disabled:!!o,value:o?p.lblSigning:p.lblOk,class:a.esriButton}),(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_7__/* .tsx */ .u)("input",{type:"button",value:p.lblCancel,bind:this,onclick:this._cancel,class:this.classes(a.esriButton,a.esriButtonSecondary)})),b=s?(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_7__/* .tsx */ .u)("div",null,s.details&&s.details.httpStatus?p.invalidUser:p.noAuthService):null;return (0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_7__/* .tsx */ .u)("form",{class:a.base,bind:this,onsubmit:this._submit},d,b,c,m,h)}_cancel(){this._set("signingIn",!1),this._usernameInputNode&&(this._usernameInputNode.value=""),this._passwordInputNode&&(this._passwordInputNode.value=""),this.emit("cancel")}_submit(s){s.preventDefault(),this._set("signingIn",!0);const e=this.oAuthPrompt?{}:{username:this._usernameInputNode&&this._usernameInputNode.value,password:this._passwordInputNode&&this._passwordInputNode.value};this.emit("submit",e)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_0__/* .property */ .Cb)(),(0,_widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_9__/* .messageBundle */ .H)("esri/identity/t9n/identity")],p.prototype,"messages",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_0__/* .property */ .Cb)()],p.prototype,"signingIn",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_0__/* .property */ .Cb)()],p.prototype,"server",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_0__/* .property */ .Cb)()],p.prototype,"resource",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_0__/* .property */ .Cb)()],p.prototype,"error",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_0__/* .property */ .Cb)()],p.prototype,"oAuthPrompt",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__/* .subclass */ .j)("esri.identity.IdentityForm")],p);const d=p;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5540:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8256);
/* harmony import */ var _IdentityManagerBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4583);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_IdentityManagerBase_js__WEBPACK_IMPORTED_MODULE_1__]);
_IdentityManagerBase_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class r extends _IdentityManagerBase_js__WEBPACK_IMPORTED_MODULE_1__/* .IdentityManagerBase */ .E{}r.prototype.declaredClass="esri.identity.IdentityManager";const s=new r;(0,_kernel_js__WEBPACK_IMPORTED_MODULE_0__/* .setId */ .qh)(s);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4583:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ E)
/* harmony export */ });
/* unused harmony export Credential */
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6663);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1366);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8256);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4143);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(375);
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1355);
/* harmony import */ var _core_events_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9546);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(186);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6745);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4353);
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6868);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3466);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1977);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1453);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(266);
/* harmony import */ var _IdentityForm_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7943);
/* harmony import */ var _IdentityModal_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8142);
/* harmony import */ var _OAuthCredential_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8227);
/* harmony import */ var _OAuthInfo_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7635);
/* harmony import */ var _ServerInfo_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3248);
/* harmony import */ var _portal_support_urlUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_IdentityForm_js__WEBPACK_IMPORTED_MODULE_14__, _IdentityModal_js__WEBPACK_IMPORTED_MODULE_15__]);
([_IdentityForm_js__WEBPACK_IMPORTED_MODULE_14__, _IdentityModal_js__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const C={},b=e=>{const t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .Url */ .R9(e.owningSystemUrl).host,r=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .Url */ .R9(e.server).host,s=/.+\.arcgis\.com$/i;return s.test(t)&&s.test(r)},D=(e,t)=>!!(b(e)&&t&&t.some((t=>t.test(e.server))));let q=null,j=null;try{q=window.localStorage,j=window.sessionStorage}catch{}class E extends _core_Evented_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z{constructor(){super(),this._portalConfig=globalThis.esriGeowConfig,this.serverInfos=[],this.oAuthInfos=[],this.credentials=[],this._soReqs=[],this._xoReqs=[],this._portals=[],this._defaultOAuthInfo=null,this._defaultTokenValidity=60,this.dialog=null,this.formConstructor=_IdentityForm_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,this.tokenValidity=null,this.normalizeWebTierAuth=!1,this._appOrigin="null"!==window.origin?window.origin:window.location.origin,this._appUrlObj=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .urlToObject */ .mN)(window.location.href),this._busy=null,this._rejectOnPersistedPageShow=!1,this._oAuthLocationParams=null,this._gwTokenUrl="/sharing/rest/generateToken",this._agsRest="/rest/services",this._agsPortal=/\/sharing(\/|$)/i,this._agsAdmin=/(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i,this._adminSvcs=/\/rest\/admin\/services(\/|$)/i,this._gwDomains=[{regex:/^https?:\/\/www\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i,customBaseUrl:"mapsdev.arcgis.com",tokenServiceUrl:"https://dev.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,customBaseUrl:"mapsdevext.arcgis.com",tokenServiceUrl:"https://devext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i,customBaseUrl:"mapsqa.arcgis.com",tokenServiceUrl:"https://qaext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"}],this._legacyFed=[],this._regexSDirUrl=/http.+\/rest\/services\/?/gi,this._regexServerType=/(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|KnowledgeGraphServer|MapServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer)).*/gi,this._gwUser=/http.+\/users\/([^\/]+)\/?.*/i,this._gwItem=/http.+\/items\/([^\/]+)\/?.*/i,this._gwGroup=/http.+\/groups\/([^\/]+)\/?.*/i,this._rePortalTokenSvc=/\/sharing(\/rest)?\/generatetoken/i,this._createDefaultOAuthInfo=!0,this._hasTestedIfAppIsOnPortal=!1,this._getOAuthLocationParams(),window.addEventListener("pageshow",(e=>{this._pageShowHandler(e)}))}registerServers(e){const t=this.serverInfos;t?(e=e.filter((e=>!this.findServerInfo(e.server))),this.serverInfos=t.concat(e)):this.serverInfos=e,e.forEach((e=>{e.owningSystemUrl&&this._portals.push(e.owningSystemUrl),e.hasPortal&&this._portals.push(e.server)}))}registerOAuthInfos(e){const t=this.oAuthInfos;if(t){for(const r of e){const e=this.findOAuthInfo(r.portalUrl);e&&t.splice(t.indexOf(e),1)}this.oAuthInfos=t.concat(e)}else this.oAuthInfos=e}registerToken(e){e={...e};const t=this._sanitizeUrl(e.server),r=this._isServerRsrc(t);let s,i=this.findServerInfo(t),o=!0;i||(i=new _ServerInfo_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,i.server=this._getServerInstanceRoot(t),r?i.hasServer=!0:(i.tokenServiceUrl=this._getTokenSvcUrl(t),i.hasPortal=!0),this.registerServers([i])),s=this._findCredential(t),s?(delete e.server,Object.assign(s,e),o=!1):(s=new L({userId:e.userId,server:i.server,token:e.token,expires:e.expires,ssl:e.ssl,scope:r?"server":"portal"}),s.resources=[t],this.credentials.push(s)),s.emitTokenChange(!1),o||s.refreshServerTokens()}toJSON(){return (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_6__/* .fixJson */ .yd)({serverInfos:this.serverInfos.map((e=>e.toJSON())),oAuthInfos:this.oAuthInfos.map((e=>e.toJSON())),credentials:this.credentials.map((e=>e.toJSON()))})}initialize(e){if(!e)return;"string"==typeof e&&(e=JSON.parse(e));const t=e.serverInfos,r=e.oAuthInfos,s=e.credentials;if(t){const e=[];t.forEach((t=>{t.server&&t.tokenServiceUrl&&e.push(t.declaredClass?t:new _ServerInfo_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z(t))})),e.length&&this.registerServers(e)}if(r){const e=[];r.forEach((t=>{t.appId&&e.push(t.declaredClass?t:new _OAuthInfo_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z(t))})),e.length&&this.registerOAuthInfos(e)}s&&s.forEach((e=>{e.server&&e.token&&e.expires&&e.expires>Date.now()&&((e=e.declaredClass?e:new L(e)).emitTokenChange(),this.credentials.push(e))}))}findServerInfo(e){let t;e=this._sanitizeUrl(e);for(const r of this.serverInfos)if(this._hasSameServerInstance(r.server,e)){t=r;break}return t}findOAuthInfo(e){let t;e=this._sanitizeUrl(e);for(const r of this.oAuthInfos)if(this._hasSameServerInstance(r.portalUrl,e)){t=r;break}return t}findCredential(e,t){if(!e)return;let r;e=this._sanitizeUrl(e);const s=this._isServerRsrc(e)?"server":"portal";if(t){for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&t===i.userId&&i.scope===s){r=i;break}}else for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&-1!==this._getIdenticalSvcIdx(e,i)&&i.scope===s){r=i;break}return r}getCredential(e,t){let r,s,o=!0;t&&(r=!!t.token,s=t.error,o=!1!==t.prompt),t={...t},e=this._sanitizeUrl(e);const n=new AbortController,a=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .createResolver */ .hh)();if(t.signal&&(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .onAbort */ .fu)(t.signal,(()=>{n.abort()})),(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .onAbort */ .fu)(n,(()=>{a.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("identity-manager:user-aborted","ABORTED"))})),(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .isAborted */ .Hc)(n))return a.promise;t.signal=n.signal;const h=this._isAdminResource(e),u=r?this.findCredential(e):null;let p;if(u&&s&&s.details&&498===s.details.httpStatus)u.destroy();else if(u)return p=new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("identity-manager:not-authorized","You are currently signed in as: '"+u.userId+"'. You do not have access to this resource: "+e,{error:s}),a.reject(p),a.promise;const f=this._findCredential(e,t);if(f)return a.resolve(f),a.promise;let g=this.findServerInfo(e);if(g)!g.hasServer&&this._isServerRsrc(e)&&(g._restInfoPms=this._getTokenSvcUrl(e),g.hasServer=!0);else{const t=this._getTokenSvcUrl(e);if(!t)return p=new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("identity-manager:unknown-resource","Unknown resource - could not find token service endpoint."),a.reject(p),a.promise;g=new _ServerInfo_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,g.server=this._getServerInstanceRoot(e),"string"==typeof t?(g.tokenServiceUrl=t,g.hasPortal=!0):(g._restInfoPms=t,g.hasServer=!0),this.registerServers([g])}return g.hasPortal&&void 0===g._selfReq&&(o||(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .hasSameOrigin */ .D6)(g.tokenServiceUrl,this._appOrigin)||this._gwDomains.some((e=>e.tokenServiceUrl===g.tokenServiceUrl)))&&(g._selfReq={owningTenant:t&&t.owningTenant,selfDfd:this._getPortalSelf(g.tokenServiceUrl.replace(this._rePortalTokenSvc,"/sharing/rest/portals/self"),e)}),this._enqueue(e,g,t,a,h)}getResourceName(e){return this._isRESTService(e)?e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"")||"":this._gwUser.test(e)&&e.replace(this._gwUser,"$1")||this._gwItem.test(e)&&e.replace(this._gwItem,"$1")||this._gwGroup.test(e)&&e.replace(this._gwGroup,"$1")||""}generateToken(e,t,r){const o=this._rePortalTokenSvc.test(e.tokenServiceUrl),n=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .Url */ .R9(this._appOrigin),a=e.shortLivedTokenValidity;let h,l,c,d,u,p,g,m;t&&(m=this.tokenValidity||a||this._defaultTokenValidity,m>a&&a>0&&(m=a)),r&&(h=r.isAdmin,l=r.serverUrl,c=r.token,p=r.signal,g=r.ssl,e.customParameters=r.customParameters),h?d=e.adminTokenServiceUrl:(d=e.tokenServiceUrl,u=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .Url */ .R9(d.toLowerCase()),e.webTierAuth&&r?.serverUrl&&!g&&"http"===n.scheme&&((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .hasSameOrigin */ .D6)(n.uri,d,!0)||"https"===u.scheme&&n.host===u.host&&"7080"===n.port&&"7443"===u.port)&&(d=d.replace(/^https:/i,"http:").replace(/:7443/i,":7080")));const v={query:{request:"getToken",username:t?.username,password:t?.password,serverUrl:l,token:c,expiration:m,referer:h||o?this._appOrigin:null,client:h?"referer":null,f:"json",...e.customParameters},method:"post",authMode:"anonymous",useProxy:this._useProxy(e,r),signal:p,...r?.ioArgs};o||(v.withCredentials=!1);return (0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(d,v).then((r=>{const s=r.data;if(!s||!s.token)return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("identity-manager:authentication-failed","Unable to generate token");const o=e.server;return C[o]||(C[o]={}),t&&(C[o][t.username]=t.password),s.validity=m,s}))}isBusy(){return!!this._busy}checkSignInStatus(e){return this.checkAppAccess(e,"").then((e=>e.credential))}checkAppAccess(e,t,r){let o=!1;return this.getCredential(e,{prompt:!1}).then((n=>{let a;const h={f:"json"};if("portal"===n.scope)if(t&&(this._doPortalSignIn(e)||r&&r.force))a=n.server+"/sharing/rest/oauth2/validateAppAccess",h.client_id=t;else{if(!n.token)return{credential:n};a=n.server+"/sharing/rest"}else{if(!n.token)return{credential:n};a=n.server+"/rest/services"}return n.token&&(h.token=n.token),(0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a,{query:h,authMode:"anonymous"}).then((e=>{if(!1===e.data.valid)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("identity-manager:not-authorized",`You are currently signed in as: '${n.userId}'.`,e.data);return o=!!e.data.viewOnlyUserTypeApp,{credential:n}})).catch((e=>{if("identity-manager:not-authorized"===e.name)throw e;const t=e.details&&e.details.httpStatus;if(498===t)throw n.destroy(),new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("identity-manager:not-authenticated","User is not signed in.");if(400===t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("identity-manager:invalid-request");return{credential:n}}))})).then((e=>({credential:e.credential,viewOnly:o})))}setOAuthResponseHash(e){e&&("#"===e.charAt(0)&&(e=e.substring(1)),this._processOAuthPopupParams((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .queryToObject */ .u0)(e)))}setOAuthRedirectionHandler(e){this._oAuthRedirectFunc=e}setProtocolErrorHandler(e){this._protocolFunc=e}signIn(e,t,r={}){const s=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .createResolver */ .hh)(),o=()=>{h?.remove(),d?.remove(),p?.remove(),a?.destroy(),this.dialog?.destroy(),this.dialog=a=h=d=p=null},n=()=>{o(),this._oAuthDfd=null,s.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("identity-manager:user-aborted","ABORTED"))};r.signal&&(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .onAbort */ .fu)(r.signal,(()=>{n()}));let a=new this.formConstructor;a.resource=this.getResourceName(e),a.server=t.server,this.dialog=new _IdentityModal_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,this.dialog.content=a,this.dialog.open=!0,this.emit("dialog-create");let h=a.on("cancel",n),d=(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .watch */ .YP)((()=>this.dialog.open),n),p=a.on("submit",(e=>{this.generateToken(t,e,{isAdmin:r.isAdmin,signal:r.signal}).then((i=>{o();const n=new L({userId:e.username,server:t.server,token:i.token,expires:null!=i.expires?Number(i.expires):null,ssl:!!i.ssl,isAdmin:r.isAdmin,validity:i.validity});s.resolve(n)})).catch((e=>{a.error=e,a.signingIn=!1}))}));return s.promise}oAuthSignIn(e,t,r,s){this._oAuthDfd=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .createResolver */ .hh)();const o=this._oAuthDfd;let n;s?.signal&&(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .onAbort */ .fu)(s.signal,(()=>{const e=this._oAuthDfd&&this._oAuthDfd.oAuthWin_;e&&!e.closed?e.close():this.dialog&&f()})),o.resUrl_=e,o.sinfo_=t,o.oinfo_=r;const a=r._oAuthCred;if(a.storage&&("authorization-code"===r.flowType||"auto"===r.flowType&&!r.popup&&t.currentVersion>=8.4)){let e=crypto.getRandomValues(new Uint8Array(32));n=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .base64UrlEncode */ .rS)(e),a.codeVerifier=n,e=crypto.getRandomValues(new Uint8Array(32)),a.stateUID=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .base64UrlEncode */ .rS)(e),a.save()||(a.codeVerifier=n=null)}else a.codeVerifier=null;let h,d,p,_;this._getCodeChallenge(n).then((i=>{const o=!s||!1!==s.oAuthPopupConfirmation;r.popup&&o?(h=new this.formConstructor,h.oAuthPrompt=!0,h.server=t.server,this.dialog=new _IdentityModal_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,this.dialog.content=h,this.dialog.open=!0,this.emit("dialog-create"),d=h.on("cancel",f),p=(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .watch */ .YP)((()=>this.dialog.open),f),_=h.on("submit",(()=>{g(),this._doOAuthSignIn(e,t,r,i)}))):this._doOAuthSignIn(e,t,r,i)}));const f=()=>{g(),this._oAuthDfd=null,o.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("identity-manager:user-aborted","ABORTED"))},g=()=>{d?.remove(),p?.remove(),_?.remove(),h?.destroy(),this.dialog?.destroy(),this.dialog=null};return o.promise}destroyCredentials(){if(this.credentials){this.credentials.slice().forEach((e=>{e.destroy()}))}this.emit("credentials-destroy")}enablePostMessageAuth(e="https://www.arcgis.com/sharing/rest"){this._postMessageAuthHandle&&this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=(0,_core_events_js__WEBPACK_IMPORTED_MODULE_5__.on)(window,"message",(t=>{if((t.origin===this._appOrigin||t.origin.endsWith(".arcgis.com"))&&"arcgis:auth:requestCredential"===t.data?.type){const r=t.source;this.getCredential(e).then((e=>{r.postMessage({type:"arcgis:auth:credential",credential:{expires:e.expires,server:e.server,ssl:e.ssl,token:e.token,userId:e.userId}},t.origin)})).catch((e=>{r.postMessage({type:"arcgis:auth:error",error:{name:e.name,message:e.message}},t.origin)}))}}))}disablePostMessageAuth(){this._postMessageAuthHandle&&(this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=null)}_getOAuthLocationParams(){let e=window.location.hash;if(e){"#"===e.charAt(0)&&(e=e.substring(1));const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .queryToObject */ .u0)(e);let r=!1;if(t.access_token&&t.expires_in&&t.state&&t.hasOwnProperty("username"))try{t.state=JSON.parse(t.state),t.state.portalUrl&&(this._oAuthLocationParams=t,r=!0)}catch{}else if(t.error&&t.error_description&&(console.log("IdentityManager OAuth Error: ",t.error," - ",t.error_description),"access_denied"===t.error&&(r=!0,t.state)))try{t.state=JSON.parse(t.state)}catch{}r&&(window.location.hash=t.state?.hash||"")}let t=window.location.search;if(t){"?"===t.charAt(0)&&(t=t.substring(1));const e=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .queryToObject */ .u0)(t);let r=!1;if(e.code&&e.state)try{e.state=JSON.parse(e.state),e.state.portalUrl&&e.state.uid&&(this._oAuthLocationParams=e,r=!0)}catch{}else if(e.error&&e.error_description&&(console.log("IdentityManager OAuth Error: ",e.error," - ",e.error_description),"access_denied"===e.error&&(r=!0,e.state)))try{e.state=JSON.parse(e.state)}catch{}if(r){const t={...e};["code","error","error_description","message_code","persist","state"].forEach((e=>{delete t[e]}));const r=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .objectToQuery */ .B7)(t),s=window.location.pathname+(r?`?${r}`:"")+(e.state?.hash||"");window.history.replaceState(window.history.state,"",s)}}}_getOAuthToken(e,t,r,i,o){return e=e.replace(/^http:/i,"https:"),(0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(`${e}/sharing/rest/oauth2/token`,{authMode:"anonymous",method:"post",query:i&&o?{grant_type:"authorization_code",code:t,redirect_uri:i,client_id:r,code_verifier:o}:{grant_type:"refresh_token",refresh_token:t,client_id:r}}).then((e=>e.data))}_getCodeChallenge(e){if(e&&globalThis.isSecureContext){const t=(new TextEncoder).encode(e);return crypto.subtle.digest("SHA-256",t).then((e=>(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .base64UrlEncode */ .rS)(new Uint8Array(e))))}return Promise.resolve(null)}_pageShowHandler(e){if(e.persisted&&this.isBusy()&&this._rejectOnPersistedPageShow){const e=new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("identity-manager:user-aborted","ABORTED");this._errbackFunc(e)}}_findCredential(e,t){let r,s,i,o,n=-1;const a=t&&t.token,h=t&&t.resource,l=this._isServerRsrc(e)?"server":"portal",c=this.credentials.filter((t=>this._hasSameServerInstance(t.server,e)&&t.scope===l));if(e=h||e,c.length)if(1===c.length){if(r=c[0],i=this.findServerInfo(r.server),s=i&&i.owningSystemUrl,o=s?this.findCredential(s,r.userId):void 0,n=this._getIdenticalSvcIdx(e,r),!a)return-1===n&&r.resources.push(e),this._addResource(e,o),r;-1!==n&&(r.resources.splice(n,1),this._removeResource(e,o))}else{let t,r;if(c.some((a=>(r=this._getIdenticalSvcIdx(e,a),-1!==r&&(t=a,i=this.findServerInfo(t.server),s=i&&i.owningSystemUrl,o=s?this.findCredential(s,t.userId):void 0,n=r,!0)))),a)t&&(t.resources.splice(n,1),this._removeResource(e,o));else if(t)return this._addResource(e,o),t}}_findOAuthInfo(e){let t=this.findOAuthInfo(e);if(!t)for(const r of this.oAuthInfos)if(this._isIdProvider(r.portalUrl,e)){t=r;break}return t}_addResource(e,t){t&&-1===this._getIdenticalSvcIdx(e,t)&&t.resources.push(e)}_removeResource(e,t){let r=-1;t&&(r=this._getIdenticalSvcIdx(e,t),r>-1&&t.resources.splice(r,1))}_useProxy(e,t){return t&&t.isAdmin&&!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .hasSameOrigin */ .D6)(e.adminTokenServiceUrl,this._appOrigin)||!this._isPortalDomain(e.tokenServiceUrl)&&"10.1"===String(e.currentVersion)&&!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .hasSameOrigin */ .D6)(e.tokenServiceUrl,this._appOrigin)}_getOrigin(e){const t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .Url */ .R9(e);return t.scheme+"://"+t.host+(null!=t.port?":"+t.port:"")}_getServerInstanceRoot(e){const t=e.toLowerCase();let r=t.indexOf(this._agsRest);return-1===r&&this._isAdminResource(e)&&(r=this._agsAdmin.test(e)?e.replace(this._agsAdmin,"$1").length:e.search(this._adminSvcs)),-1!==r||(0,_portal_support_urlUtils_js__WEBPACK_IMPORTED_MODULE_19__/* .isSecureProxyService */ .P)(t)||(r=t.indexOf("/sharing")),-1===r&&"/"===t.substr(-1)&&(r=t.length-1),r>-1?e.substring(0,r):e}_hasSameServerInstance(e,t){return"/"===e.substr(-1)&&(e=e.slice(0,-1)),e=e.toLowerCase(),t=this._getServerInstanceRoot(t).toLowerCase(),e=this._normalizeAGOLorgDomain(e),t=this._normalizeAGOLorgDomain(t),(e=e.substr(e.indexOf(":")))===(t=t.substr(t.indexOf(":")))}_normalizeAGOLorgDomain(e){const t=/^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i,r=/^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,s=/^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;return t.test(e)?e=e.replace(t,"https://www.arcgis.com"):r.test(e)?e=e.replace(r,"https://devext.arcgis.com"):s.test(e)&&(e=e.replace(s,"https://qaext.arcgis.com")),e}_sanitizeUrl(e){const r=(_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].request.proxyUrl */ .Z.request.proxyUrl||"").toLowerCase(),s=r?e.toLowerCase().indexOf(r+"?"):-1;return-1!==s&&(e=e.substring(s+r.length+1)),e=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .normalize */ .Fv)(e),(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .urlToObject */ .mN)(e).path}_isRESTService(e){return e.includes(this._agsRest)}_isAdminResource(e){return this._agsAdmin.test(e)||this._adminSvcs.test(e)}_isServerRsrc(e){return this._isRESTService(e)||this._isAdminResource(e)}_isIdenticalService(e,t){let r=!1;if(this._isRESTService(e)&&this._isRESTService(t)){const s=this._getSuffix(e).toLowerCase(),i=this._getSuffix(t).toLowerCase();if(r=s===i,!r){const e=/(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi;r=s.replace(e,"$1")===i.replace(e,"$1")}}else this._isAdminResource(e)&&this._isAdminResource(t)?r=!0:this._isServerRsrc(e)||this._isServerRsrc(t)||!this._isPortalDomain(e)||(r=!0);return r}_isPortalDomain(e){const r=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .Url */ .R9(e.toLowerCase()),s=this._portalConfig;let i=this._gwDomains.some((e=>e.regex.test(r.uri)));return!i&&s&&(i=this._hasSameServerInstance(this._getServerInstanceRoot(s.restBaseUrl),r.uri)),i||_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].portalUrl */ .Z.portalUrl&&(i=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .hasSameOrigin */ .D6)(r,_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].portalUrl */ .Z.portalUrl,!0)),i||(i=this._portals.some((e=>this._hasSameServerInstance(e,r.uri)))),i=i||this._agsPortal.test(r.path),i}_isIdProvider(e,t){let r=-1,s=-1;this._gwDomains.forEach(((i,o)=>{-1===r&&i.regex.test(e)&&(r=o),-1===s&&i.regex.test(t)&&(s=o)}));let i=!1;if(r>-1&&s>-1&&(0===r||4===r?0!==s&&4!==s||(i=!0):1===r?1!==s&&2!==s||(i=!0):2===r?2===s&&(i=!0):3===r&&3===s&&(i=!0)),!i){const r=this.findServerInfo(t),s=r&&r.owningSystemUrl;s&&b(r)&&this._isPortalDomain(s)&&this._isIdProvider(e,s)&&(i=!0)}return i}_getIdenticalSvcIdx(e,t){let r=-1;for(let s=0;s<t.resources.length;s++){const i=t.resources[s];if(this._isIdenticalService(e,i)){r=s;break}}return r}_getSuffix(e){return e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"$1")}_getTokenSvcUrl(e){let t,r,i;if(this._isRESTService(e)||this._isAdminResource(e)){const i=this._getServerInstanceRoot(e);return t=i+"/admin/generateToken",r=(0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e=i+"/rest/info",{query:{f:"json"}}).then((e=>e.data)),{adminUrl:t,promise:r}}if(this._isPortalDomain(e)){let t="";if(this._gwDomains.some((r=>(r.regex.test(e)&&(t=r.tokenServiceUrl),!!t))),t||this._portals.some((r=>(this._hasSameServerInstance(r,e)&&(t=r+this._gwTokenUrl),!!t))),t||(i=e.toLowerCase().indexOf("/sharing"),-1!==i&&(t=e.substring(0,i)+this._gwTokenUrl)),t||(t=this._getOrigin(e)+this._gwTokenUrl),t){const r=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .Url */ .R9(e).port;/^http:\/\//i.test(e)&&"7080"===r&&(t=t.replace(/:7080/i,":7443")),t=t.replace(/http:/i,"https:")}return t}if(e.toLowerCase().includes("premium.arcgisonline.com"))return"https://premium.arcgisonline.com/server/tokens"}_processOAuthResponseParams(e,t,r){const s=t._oAuthCred;if(e.code){const i=s.codeVerifier;return s.codeVerifier=null,s.stateUID=null,s.save(),this._getOAuthToken(r.server,e.code,t.appId,this._getRedirectURI(t,!0),i).then((i=>{const o=new L({userId:i.username,server:r.server,token:i.access_token,expires:Date.now()+1e3*i.expires_in,ssl:i.ssl,oAuthState:e.state,_oAuthCred:s});return t.userId=o.userId,s.storage=i.persist?q:j,s.refreshToken=i.refresh_token,s.token=null,s.expires=i.refresh_token_expires_in?Date.now()+1e3*i.refresh_token_expires_in:null,s.userId=o.userId,s.ssl=o.ssl,s.save(),o}))}const i=new L({userId:e.username,server:r.server,token:e.access_token,expires:Date.now()+1e3*Number(e.expires_in),ssl:"true"===e.ssl,oAuthState:e.state,_oAuthCred:s});return t.userId=i.userId,s.storage=e.persist?q:j,s.refreshToken=null,s.token=i.token,s.expires=i.expires,s.userId=i.userId,s.ssl=i.ssl,s.save(),Promise.resolve(i)}_processOAuthPopupParams(e){const t=this._oAuthDfd;if(this._oAuthDfd=null,t)if(clearInterval(this._oAuthIntervalId),this._oAuthOnPopupHandle?.remove(),e.error){const r="access_denied"===e.error,s=new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z(r?"identity-manager:user-aborted":"identity-manager:authentication-failed",r?"ABORTED":"OAuth: "+e.error+" - "+e.error_description);t.reject(s)}else this._processOAuthResponseParams(e,t.oinfo_,t.sinfo_).then((e=>{t.resolve(e)})).catch((e=>{t.reject(e)}))}_setOAuthResponseQueryString(e){e&&("?"===e.charAt(0)&&(e=e.substring(1)),this._processOAuthPopupParams((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .queryToObject */ .u0)(e)))}_exchangeToken(e,t,r){return (0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(`${e}/sharing/rest/oauth2/exchangeToken`,{authMode:"anonymous",method:"post",query:{f:"json",client_id:t,token:r}}).then((e=>e.data.token))}_getPlatformSelf(e,t){return e=e.replace(/^http:/i,"https:"),(0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(`${e}/sharing/rest/oauth2/platformSelf`,{authMode:"anonymous",headers:{"X-Esri-Auth-Client-Id":t,"X-Esri-Auth-Redirect-Uri":window.location.href.replace(/#.*$/,"")},method:"post",query:{f:"json",expiration:30},withCredentials:!0}).then((e=>e.data))}_getPortalSelf(e,t){let r;if(this._gwDomains.some((t=>(t.regex.test(e)&&(r=t.customBaseUrl),!!r))),r)return Promise.resolve({allSSL:!0,currentVersion:"8.4",customBaseUrl:r,portalMode:"multitenant",supportsOAuth:!0});this._appOrigin.startsWith("https:")?e=e.replace(/^http:/i,"https:").replace(/:7080/i,":7443"):/^http:/i.test(t)&&(e=e.replace(/^https:/i,"http:").replace(/:7443/i,":7080"));return (0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e,{query:{f:"json"},authMode:"anonymous",withCredentials:!0}).then((e=>e.data))}_doPortalSignIn(e){const t=this._portalConfig,r=window.location.href,s=this.findServerInfo(e);return!(!t&&!this._isPortalDomain(r)||!(s?s.hasPortal||s.owningSystemUrl&&this._isPortalDomain(s.owningSystemUrl):this._isPortalDomain(e))||!(this._isIdProvider(r,e)||t&&(this._hasSameServerInstance(this._getServerInstanceRoot(t.restBaseUrl),e)||this._isIdProvider(t.restBaseUrl,e))||(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .hasSameOrigin */ .D6)(r,e,!0)))}_checkProtocol(e,t,r,s){let o=!0;const n=s?t.adminTokenServiceUrl:t.tokenServiceUrl;if(n.trim().toLowerCase().startsWith("https:")&&!this._appOrigin.startsWith("https:")&&(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .getProxyRule */ .ed)(n)&&(o=!!this._protocolFunc&&!!this._protocolFunc({resourceUrl:e,serverInfo:t}),!o)){r(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("identity-manager:aborted","Aborted the Sign-In process to avoid sending password over insecure connection."))}return o}_enqueue(e,t,r,s,i,o){return s||(s=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .createResolver */ .hh)()),s.resUrl_=e,s.sinfo_=t,s.options_=r,s.admin_=i,s.refresh_=o,this._busy?this._hasSameServerInstance(this._getServerInstanceRoot(e),this._busy.resUrl_)?(this._oAuthDfd&&this._oAuthDfd.oAuthWin_&&this._oAuthDfd.oAuthWin_.focus(),this._soReqs.push(s)):this._xoReqs.push(s):this._doSignIn(s),s.promise}_doSignIn(e){this._busy=e,this._rejectOnPersistedPageShow=!1;const t=t=>{const r=e.options_&&e.options_.resource,s=e.resUrl_,i=e.refresh_;let o=!1;this.credentials.includes(t)||(i&&this.credentials.includes(i)?(i.userId=t.userId,i.token=t.token,i.expires=t.expires,i.validity=t.validity,i.ssl=t.ssl,i.creationTime=t.creationTime,o=!0,t=i):this.credentials.push(t)),t.resources||(t.resources=[]),t.resources.includes(r||s)||t.resources.push(r||s),t.scope=this._isServerRsrc(s)?"server":"portal",t.emitTokenChange();const n=this._soReqs,a={};this._soReqs=[],n.forEach((e=>{if(!this._isIdenticalService(s,e.resUrl_)){const r=this._getSuffix(e.resUrl_);a[r]||(a[r]=!0,t.resources.push(e.resUrl_))}})),e.resolve(t),n.forEach((e=>{this._hasSameServerInstance(this._getServerInstanceRoot(s),e.resUrl_)?e.resolve(t):this._soReqs.push(e)})),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,o||this.emit("credential-create",{credential:t}),this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift())},r=t=>{e.reject(t),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift())},s=(o,a,h,l)=>{const d=e.sinfo_,u=!e.options_||!1!==e.options_.prompt,p=d.hasPortal&&this._findOAuthInfo(e.resUrl_);let f,g;if(o)t(new L({userId:o,server:d.server,token:h||null,expires:null!=l?Number(l):null,ssl:!!a}));else if(window!==window.parent&&this._appUrlObj.query?.["arcgis-auth-origin"]&&this._appUrlObj.query?.["arcgis-auth-portal"]&&this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]),e.resUrl_)){window.parent.postMessage({type:"arcgis:auth:requestCredential"},this._appUrlObj.query["arcgis-auth-origin"]);const s=(0,_core_events_js__WEBPACK_IMPORTED_MODULE_5__.on)(window,"message",(e=>{e.source===window.parent&&e.data&&("arcgis:auth:credential"===e.data.type?(s.remove(),e.data.credential.expires<Date.now()?r(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("identity-manager:credential-request-failed","Parent application's token has expired.")):t(new L(e.data.credential))):"arcgis:auth:error"===e.data.type&&(s.remove(),"tokenExpiredError"===e.data.error.name?r(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("identity-manager:credential-request-failed","Parent application's token has expired.")):r(_core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].fromJSON */ .Z.fromJSON(e.data.error))))}));(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .onAbort */ .fu)(e.options_?.signal,(()=>{s.remove()}))}else if(p){let o=p._oAuthCred;if(!o){const e=new _OAuthCredential_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z(p,q),t=new _OAuthCredential_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z(p,j);e.isValid()&&t.isValid()?e.expires>t.expires?(o=e,t.destroy()):(o=t,e.destroy()):o=e.isValid()?e:t,p._oAuthCred=o}if(o.isValid()){f=new L({userId:o.userId,server:d.server,token:o.token,expires:o.expires,ssl:o.ssl,_oAuthCred:o});const r=p.appId!==o.appId&&this._doPortalSignIn(e.resUrl_);r||o.refreshToken?(e._pendingDfd=o.refreshToken?this._getOAuthToken(d.server,o.refreshToken,o.appId).then((e=>(f.expires=Date.now()+1e3*e.expires_in,f.token=e.access_token,f))):Promise.resolve(f),e._pendingDfd.then((e=>r?this._exchangeToken(e.server,p.appId,e.token).then((t=>(e.token=t,e))).catch((()=>e)):e)).then((e=>{t(e)})).catch((()=>{o?.destroy(),s()}))):t(f)}else if(this._oAuthLocationParams&&this._hasSameServerInstance(p.portalUrl,this._oAuthLocationParams.state.portalUrl)&&(this._oAuthLocationParams.access_token||this._oAuthLocationParams.code&&this._oAuthLocationParams.state.uid===o.stateUID&&o.codeVerifier)){const s=this._oAuthLocationParams;this._oAuthLocationParams=null,e._pendingDfd=this._processOAuthResponseParams(s,p,d).then((e=>{t(e)})).catch(r)}else{const s=()=>{u?e._pendingDfd=this.oAuthSignIn(e.resUrl_,d,p,e.options_).then(t,r):(g=new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("identity-manager:not-authenticated","User is not signed in."),r(g))};this._doPortalSignIn(e.resUrl_)?e._pendingDfd=this._getPlatformSelf(d.server,p.appId).then((e=>{(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .hasSameOrigin */ .D6)(e.portalUrl,this._appOrigin,!0)?(f=new L({userId:e.username,server:d.server,expires:Date.now()+1e3*e.expires_in,token:e.token}),t(f)):s()})).catch(s):s()}}else if(u){if(this._checkProtocol(e.resUrl_,d,r,e.admin_)){let s=e.options_;e.admin_&&(s=s||{},s.isAdmin=!0),e._pendingDfd=this.signIn(e.resUrl_,d,s).then(t,r)}}else g=new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("identity-manager:not-authenticated","User is not signed in."),r(g)},o=()=>{const s=e.sinfo_,i=s.owningSystemUrl,o=e.options_;let n,a,h,l;if(o&&(n=o.token,a=o.error,h=o.prompt),l=this._findCredential(i,{token:n,resource:e.resUrl_}),!l)for(const e of this.credentials)if(this._isIdProvider(i,e.server)){l=e;break}if(l){const i=this.findCredential(e.resUrl_,l.userId);if(i)t(i);else if(D(s,this._legacyFed)){const e=l.toJSON();e.server=s.server,e.resources=null,t(new L(e))}else{(e._pendingDfd=this.generateToken(this.findServerInfo(l.server),null,{serverUrl:e.resUrl_,token:l.token,signal:e.options_.signal,ssl:l.ssl})).then((r=>{t(new L({userId:l?.userId,server:s.server,token:r.token,expires:null!=r.expires?Number(r.expires):null,ssl:!!r.ssl,isAdmin:e.admin_,validity:r.validity}))}),r)}}else{this._busy=null,n&&(e.options_.token=null);(e._pendingDfd=this.getCredential(i.replace(/\/?$/,"/sharing"),{resource:e.resUrl_,owningTenant:s.owningTenant,signal:e.options_.signal,token:n,error:a,prompt:h})).then((()=>{this._enqueue(e.resUrl_,e.sinfo_,e.options_,e,e.admin_)}),(t=>{e.resUrl_=e.sinfo_=e.refresh_=null,e.reject(t)}))}};this._errbackFunc=r;const a=e.sinfo_.owningSystemUrl,l=this._isServerRsrc(e.resUrl_),d=e.sinfo_._restInfoPms;d?d.promise.then((t=>{const r=e.sinfo_;if(r._restInfoPms){r.adminTokenServiceUrl=r._restInfoPms.adminUrl,r._restInfoPms=null,r.tokenServiceUrl=((0,_core_object_js__WEBPACK_IMPORTED_MODULE_7__/* .getDeepValue */ .hS)("authInfo.tokenServicesUrl",t)||(0,_core_object_js__WEBPACK_IMPORTED_MODULE_7__/* .getDeepValue */ .hS)("authInfo.tokenServiceUrl",t)||(0,_core_object_js__WEBPACK_IMPORTED_MODULE_7__/* .getDeepValue */ .hS)("tokenServiceUrl",t))??null,r.shortLivedTokenValidity=(0,_core_object_js__WEBPACK_IMPORTED_MODULE_7__/* .getDeepValue */ .hS)("authInfo.shortLivedTokenValidity",t)??null,r.currentVersion=t.currentVersion,r.owningTenant=t.owningTenant;const e=r.owningSystemUrl=t.owningSystemUrl;e&&this._portals.push(e)}l&&r.owningSystemUrl?o():s()}),(()=>{e.sinfo_._restInfoPms=null;const t=new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("identity-manager:server-identification-failed","Unknown resource - could not find token service endpoint.");r(t)})):l&&a?o():e.sinfo_._selfReq?e.sinfo_._selfReq.selfDfd.then((t=>{const r={};let s,i,o,n;return t&&(s=t.user&&t.user.username,r.username=s,r.allSSL=t.allSSL,i=t.supportsOAuth,n=parseFloat(t.currentVersion),"multitenant"===t.portalMode&&(o=t.customBaseUrl),e.sinfo_.currentVersion=n),e.sinfo_.webTierAuth=!!s,s&&this.normalizeWebTierAuth?this.generateToken(e.sinfo_,null,{ssl:r.allSSL}).catch((()=>null)).then((e=>(r.portalToken=e&&e.token,r.tokenExpiration=e&&e.expires,r))):!s&&i&&n>=4.4&&!this._findOAuthInfo(e.resUrl_)?this._generateOAuthInfo({portalUrl:e.sinfo_.server,customBaseUrl:o,owningTenant:e.sinfo_._selfReq.owningTenant}).catch((()=>null)).then((()=>r)):r})).catch((()=>null)).then((t=>{e.sinfo_._selfReq=null,t?s(t.username,t.allSSL,t.portalToken,t.tokenExpiration):s()})):s()}_generateOAuthInfo(e){let t,r=null,i=e.portalUrl;const o=e.customBaseUrl,n=e.owningTenant,a=!this._defaultOAuthInfo&&this._createDefaultOAuthInfo&&!this._hasTestedIfAppIsOnPortal;if(a){r=window.location.href;let e=r.indexOf("?");e>-1&&(r=r.slice(0,e)),e=r.search(/\/(apps|home)\//),r=e>-1?r.slice(0,e):null}return a&&r?(this._hasTestedIfAppIsOnPortal=!0,t=(0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r+"/sharing/rest",{query:{f:"json"}}).then((()=>{this._defaultOAuthInfo=new _OAuthInfo_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z({appId:"arcgisonline",popupCallbackUrl:r+"/home/oauth-callback.html"})}))):t=Promise.resolve(),t.then((()=>{if(this._defaultOAuthInfo)return i=i.replace(/^http:/i,"https:"),(0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(i+"/sharing/rest/oauth2/validateRedirectUri",{query:{accountId:n,client_id:this._defaultOAuthInfo.appId,redirect_uri:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .makeAbsolute */ .hF)(this._defaultOAuthInfo.popupCallbackUrl),f:"json"}}).then((e=>{if(e.data.valid){const t=this._defaultOAuthInfo.clone();e.data.urlKey&&o?t.portalUrl="https://"+e.data.urlKey.toLowerCase()+"."+o:t.portalUrl=i,t.popup=window!==window.top||!((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .hasSameOrigin */ .D6)(i,this._appOrigin)||this._gwDomains.some((e=>e.regex.test(i)&&e.regex.test(this._appOrigin)))),this.oAuthInfos.push(t)}}))}))}_doOAuthSignIn(e,t,r,s){const o=r._oAuthCred,a={portalUrl:r.portalUrl};!r.popup&&r.preserveUrlHash&&window.location.hash&&(a.hash=window.location.hash),o.stateUID&&(a.uid=o.stateUID);const h={client_id:r.appId,response_type:o.codeVerifier?"code":"token",state:JSON.stringify(a),expiration:r.expiration,locale:r.locale,redirect_uri:this._getRedirectURI(r,!!o.codeVerifier)};r.forceLogin&&(h.force_login=!0),r.forceUserId&&r.userId&&(h.prepopulatedusername=r.userId),!r.popup&&this._doPortalSignIn(e)&&(h.redirectToUserOrgUrl=!0),o.codeVerifier&&(h.code_challenge=s||o.codeVerifier,h.code_challenge_method=s?"S256":"plain");const l=r.portalUrl.replace(/^http:/i,"https:")+"/sharing/oauth2/authorize",c=l+"?"+(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .objectToQuery */ .B7)(h);if(r.popup){const e=window.open(c,"esriJSAPIOAuth",r.popupWindowFeatures);if(e)e.focus(),this._oAuthDfd.oAuthWin_=e,this._oAuthIntervalId=setInterval((()=>{if(e.closed){clearInterval(this._oAuthIntervalId),this._oAuthOnPopupHandle.remove();const e=this._oAuthDfd;if(e){const t=new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("identity-manager:user-aborted","ABORTED");e.reject(t)}}}),500),this._oAuthOnPopupHandle=(0,_core_events_js__WEBPACK_IMPORTED_MODULE_5__.on)(window,["arcgis:auth:hash","arcgis:auth:location:search"],(e=>{"arcgis:auth:hash"===e.type?this.setOAuthResponseHash(e.detail):this._setOAuthResponseQueryString(e.detail)}));else{const e=new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("identity-manager:popup-blocked","ABORTED");this._oAuthDfd.reject(e)}}else this._rejectOnPersistedPageShow=!0,this._oAuthRedirectFunc?this._oAuthRedirectFunc({authorizeParams:h,authorizeUrl:l,resourceUrl:e,serverInfo:t,oAuthInfo:r}):window.location.href=c}_getRedirectURI(e,t){const r=window.location.href.replace(/#.*$/,"");if(e.popup)return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .makeAbsolute */ .hF)(e.popupCallbackUrl);if(t){const e=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .urlToObject */ .mN)(r);return e.query&&["code","error","error_description","message_code","persist","state"].forEach((t=>{delete e.query[t]})),(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .addQueryParameters */ .fl)(e.path,e.query)}return r}}E.prototype.declaredClass="esri.identity.IdentityManagerBase";let L=class extends _core_Evented_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"].EventedAccessor */ .Z.EventedAccessor{constructor(e){super(e),this._oAuthCred=null,this.tokenRefreshBuffer=2,e&&e._oAuthCred&&(this._oAuthCred=e._oAuthCred)}initialize(){this.resources=this.resources||[],null==this.creationTime&&(this.creationTime=Date.now())}refreshToken(){const e=_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id.findServerInfo(this.server),t=e&&e.owningSystemUrl,s=!!t&&"server"===this.scope,i=s&&D(e,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id._legacyFed),o=e.webTierAuth,n=o&&_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id.normalizeWebTierAuth,a=C[this.server],h=a&&a[this.userId];let l,c=this.resources&&this.resources[0],d=s?_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id.findServerInfo(t):null,u={username:this.userId,password:h};if(o&&!n)return;s&&!d&&_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id.serverInfos.some((e=>(_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id._isIdProvider(t,e.server)&&(d=e),!!d)));const p=d?_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id.findCredential(d.server,this.userId):null;if(!s||p){if(!i){if(s)l={serverUrl:c,token:p&&p.token,ssl:p&&p.ssl};else if(n)u=null,l={ssl:this.ssl};else{if(!h){let t;return c&&(c=_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id._sanitizeUrl(c),this._enqueued=1,t=_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id._enqueue(c,e,null,null,this.isAdmin,this),t.then((()=>{this._enqueued=0,this.refreshServerTokens()})).catch((()=>{this._enqueued=0}))),t}this.isAdmin&&(l={isAdmin:!0})}return _kernel_js__WEBPACK_IMPORTED_MODULE_1__.id.generateToken(s?d:e,s?null:u,l).then((e=>{this.token=e.token,this.expires=null!=e.expires?Number(e.expires):null,this.creationTime=Date.now(),this.validity=e.validity,this.emitTokenChange(),this.refreshServerTokens()})).catch((()=>{}))}p?.refreshToken()}}refreshServerTokens(){"portal"===this.scope&&_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id.credentials.forEach((e=>{const t=_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id.findServerInfo(e.server),s=t&&t.owningSystemUrl;e!==this&&e.userId===this.userId&&s&&"server"===e.scope&&(_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id._hasSameServerInstance(this.server,s)||_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id._isIdProvider(s,this.server))&&(D(t,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id._legacyFed)?(e.token=this.token,e.expires=this.expires,e.creationTime=this.creationTime,e.validity=this.validity,e.emitTokenChange()):e.refreshToken())}))}emitTokenChange(e){clearTimeout(this._refreshTimer);const t=this.server&&_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id.findServerInfo(this.server),s=t&&t.owningSystemUrl,i=s&&_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id.findServerInfo(s);!1===e||s&&"portal"!==this.scope&&(!i||!i.webTierAuth||_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id.normalizeWebTierAuth)||null==this.expires&&null==this.validity||this._startRefreshTimer(),this.emit("token-change")}destroy(){this.userId=this.server=this.token=this.expires=this.validity=this.resources=this.creationTime=null,this._oAuthCred&&(this._oAuthCred.destroy(),this._oAuthCred=null);const e=_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id.credentials.indexOf(this);e>-1&&_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id.credentials.splice(e,1),this.emitTokenChange(),this.emit("destroy")}toJSON(){const e=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_6__/* .fixJson */ .yd)({userId:this.userId,server:this.server,token:this.token,expires:this.expires,validity:this.validity,ssl:this.ssl,isAdmin:this.isAdmin,creationTime:this.creationTime,scope:this.scope}),t=this.resources;return t&&t.length>0&&(e.resources=t.slice()),e}_startRefreshTimer(){clearTimeout(this._refreshTimer);const e=6e4*this.tokenRefreshBuffer,t=2**31-1;let r=(this.validity?this.creationTime+6e4*this.validity:this.expires)-Date.now();r<0?r=0:r>t&&(r=t),this._refreshTimer=setTimeout(this.refreshToken.bind(this),r>e?r-e:r)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],L.prototype,"creationTime",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],L.prototype,"expires",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],L.prototype,"isAdmin",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],L.prototype,"oAuthState",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],L.prototype,"resources",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],L.prototype,"scope",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],L.prototype,"server",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],L.prototype,"ssl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],L.prototype,"token",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],L.prototype,"tokenRefreshBuffer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],L.prototype,"userId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],L.prototype,"validity",void 0),L=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__/* .subclass */ .j)("esri.identity.Credential")],L);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8142:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6663);
/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3148);
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6868);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5418);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1453);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(266);
/* harmony import */ var _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6792);
/* harmony import */ var _widgets_support_widget_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7617);
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4505);
/* harmony import */ var _widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6451);
/* harmony import */ var _widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4236);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_widgets_Widget_js__WEBPACK_IMPORTED_MODULE_5__]);
_widgets_Widget_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const l={base:"esri-identity-modal",open:"esri-identity-modal--open",closed:"esri-identity-modal--closed",title:"esri-identity-modal__title",dialog:"esri-identity-modal__dialog",content:"esri-identity-modal__content",closeButton:"esri-identity-modal__close-button",iconClose:"esri-icon-close"};let p=class extends _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z{constructor(t,e){super(t,e),this.container=document.createElement("div"),this.content=null,this.open=!1,this._focusTrap=null,this._close=()=>{this.open=!1},document.body.appendChild(this.container),this.addHandles((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .watch */ .YP)((()=>this.open),(()=>this._toggleFocusTrap())))}destroy(){this._destroyFocusTrap()}get title(){return this.messages?.auth.signIn}render(){const t=this.id,{open:e,content:o,title:s,messages:i}=this,r=e&&!!o,n={[l.open]:r,[l.closed]:!r},a=(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_8__/* .tsx */ .u)("button",{class:l.closeButton,"aria-label":i.close,title:i.close,bind:this,onclick:this._close,type:"button"},(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_8__/* .tsx */ .u)("span",{"aria-hidden":"true",class:l.iconClose})),d=`${t}_title`,p=`${t}_content`,u=s?(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_8__/* .tsx */ .u)("h1",{id:d,class:l.title},s):null,m=r?(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_8__/* .tsx */ .u)("div",{bind:this,class:l.dialog,role:"dialog","aria-labelledby":d,"aria-describedby":p,afterCreate:this._createFocusTrap},a,u,this._renderContent(p)):null;return (0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_8__/* .tsx */ .u)("div",{tabIndex:-1,class:this.classes(l.base,n)},m)}_destroyFocusTrap(){this._focusTrap?.deactivate({onDeactivate:()=>{}}),this._focusTrap=null}_toggleFocusTrap(){const{_focusTrap:t,open:e}=this;t&&(e?t.activate():t.deactivate())}_createFocusTrap(t){this._destroyFocusTrap();const o=requestAnimationFrame((()=>{this._focusTrap=(0,focus_trap__WEBPACK_IMPORTED_MODULE_7__.createFocusTrap)(t,{initialFocus:"input",onDeactivate:this._close}),this._toggleFocusTrap()}));this.addHandles((0,_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .makeHandle */ .kB)((()=>cancelAnimationFrame(o))))}_renderContent(t){const e=this.content;return"string"==typeof e?(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_8__/* .tsx */ .u)("div",{class:l.content,id:t,innerHTML:e}):(0,_widgets_support_widget_js__WEBPACK_IMPORTED_MODULE_6__/* .isWidget */ .Qd)(e)?(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_8__/* .tsx */ .u)("div",{class:l.content,id:t},e.render()):e instanceof HTMLElement?(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_8__/* .tsx */ .u)("div",{class:l.content,id:t,bind:e,afterCreate:this._attachToNode}):null}_attachToNode(t){const e=this;t.appendChild(e)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({readOnly:!0})],p.prototype,"container",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],p.prototype,"content",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],p.prototype,"open",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)(),(0,_widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_11__/* .messageBundle */ .H)("esri/t9n/common")],p.prototype,"messages",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],p.prototype,"title",null),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__/* .subclass */ .j)("esri.identity.IdentityModal")],p);const u=p;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8227:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const t="esriJSAPIOAuth";class e{constructor(t,e){this.oAuthInfo=null,this.storage=null,this.appId=null,this.codeVerifier=null,this.expires=null,this.refreshToken=null,this.ssl=null,this.stateUID=null,this.token=null,this.userId=null,this.oAuthInfo=t,this.storage=e,this._init()}isValid(){let t=!1;if(this.oAuthInfo&&this.userId&&(this.refreshToken||this.token))if(null==this.expires&&this.refreshToken)t=!0;else if(this.expires){const e=Date.now();if(this.expires>e){(this.expires-e)/1e3>60*this.oAuthInfo.minTimeUntilExpiration&&(t=!0)}}return t}save(){if(!this.storage)return!1;const e=this._load(),s=this.oAuthInfo;if(s&&s.authNamespace&&s.portalUrl){let r=e[s.authNamespace];r||(r=e[s.authNamespace]={}),this.appId||(this.appId=s.appId),r[s.portalUrl]={appId:this.appId,codeVerifier:this.codeVerifier,expires:this.expires,refreshToken:this.refreshToken,ssl:this.ssl,stateUID:this.stateUID,token:this.token,userId:this.userId};try{this.storage.setItem(t,JSON.stringify(e))}catch(i){return console.warn(i),!1}return!0}return!1}destroy(){const e=this._load(),s=this.oAuthInfo;if(s&&s.appId&&s.portalUrl&&(null==this.expires||this.expires>Date.now())&&(this.refreshToken||this.token)){const t=s.portalUrl.replace(/^http:/i,"https:")+"/sharing/rest/oauth2/revokeToken",e=new FormData;if(e.append("f","json"),e.append("auth_token",this.refreshToken||this.token),e.append("client_id",s.appId),e.append("token_type_hint",this.refreshToken?"refresh_token":"access_token"),"function"==typeof navigator.sendBeacon)navigator.sendBeacon(t,e);else{const s=new XMLHttpRequest;s.open("POST",t),s.send(e)}}if(s&&s.authNamespace&&s.portalUrl&&this.storage){const r=e[s.authNamespace];if(r){delete r[s.portalUrl];try{this.storage.setItem(t,JSON.stringify(e))}catch(i){console.log(i)}}}s&&(s._oAuthCred=null,this.oAuthInfo=null)}_init(){const t=this._load(),e=this.oAuthInfo;if(e&&e.authNamespace&&e.portalUrl){let s=t[e.authNamespace];s&&(s=s[e.portalUrl],s&&(this.appId=s.appId,this.codeVerifier=s.codeVerifier,this.expires=s.expires,this.refreshToken=s.refreshToken,this.ssl=s.ssl,this.stateUID=s.stateUID,this.token=s.token,this.userId=s.userId))}}_load(){let e={};if(this.storage){const i=this.storage.getItem(t);if(i)try{e=JSON.parse(i)}catch(s){console.warn(s)}}return e}}e.prototype.declaredClass="esri.identity.OAuthCredential";


/***/ }),

/***/ 7635:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6663);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4678);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5418);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1453);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(266);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var p;let s=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_0__/* .JSONSupport */ .wq{constructor(o){super(o),this._oAuthCred=null,this.appId=null,this.authNamespace="/",this.expiration=20160,this.flowType="auto",this.forceLogin=!1,this.forceUserId=!1,this.locale=null,this.minTimeUntilExpiration=30,this.popup=!1,this.popupCallbackUrl="oauth-callback.html",this.popupWindowFeatures="height=490,width=800,resizable,scrollbars,status",this.portalUrl="https://www.arcgis.com",this.preserveUrlHash=!1,this.userId=null}clone(){return p.fromJSON(this.toJSON())}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"appId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"authNamespace",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"expiration",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"flowType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"forceLogin",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"forceUserId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"locale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"minTimeUntilExpiration",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"popup",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"popupCallbackUrl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"popupWindowFeatures",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"portalUrl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"preserveUrlHash",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"userId",void 0),s=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__/* .subclass */ .j)("esri.identity.OAuthInfo")],s);const i=s;


/***/ }),

/***/ 3248:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6663);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4678);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5418);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1453);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(266);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_0__/* .JSONSupport */ .wq{constructor(o){super(o),this.adminTokenServiceUrl=null,this.currentVersion=null,this.hasPortal=null,this.hasServer=null,this.owningSystemUrl=null,this.owningTenant=null,this.server=null,this.shortLivedTokenValidity=null,this.tokenServiceUrl=null,this.webTierAuth=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"adminTokenServiceUrl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"currentVersion",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"hasPortal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"hasServer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"owningSystemUrl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"owningTenant",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"server",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"shortLivedTokenValidity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"tokenServiceUrl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0}})],s.prototype,"webTierAuth",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_5__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__/* .subclass */ .j)("esri.identity.ServerInfo")],s);const i=s;


/***/ }),

/***/ 538:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: convertDateFormatToIntlOptions, convertNumberFormatToIntlOptions, createJSONLoader, fetchMessageBundle, formatDate, formatNumber, getLocale, normalizeMessageBundleLocale, onLocaleChange, prefersRTL, registerMessageBundleLoader, setLocale, substitute

// EXTERNAL MODULE: ./node_modules/@arcgis/core/intl/date.js
var date = __webpack_require__(2057);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/intl/number.js
var number = __webpack_require__(5741);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/intl/substitute.js
var substitute = __webpack_require__(1547);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/intl/locale.js
var locale = __webpack_require__(8108);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/intl/messages.js
var messages = __webpack_require__(720);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js + 1 modules
var request = __webpack_require__(4143);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(1681);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/intl/t9n.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function o(e,n,o,i){const a=n.exec(o);if(!a)throw new Error/* default */.Z("esri-intl:invalid-bundle",`Bundle id "${o}" is not compatible with the pattern "${n}"`);const c=a[1]?`${a[1]}/`:"",l=a[2],w=(0,messages/* normalizeMessageBundleLocale */.Su)(i),h=`${c}${l}.json`,u=w?`${c}${l}_${w}.json`:h;let f;try{f=await s(e(u))}catch(d){if(u===h)throw new Error/* default */.Z("intl:unknown-bundle",`Bundle "${o}" cannot be loaded`,{error:d});try{f=await s(e(h))}catch(d){throw new Error/* default */.Z("intl:unknown-bundle",`Bundle "${o}" cannot be loaded`,{error:d})}}return f}async function s(t){if((0,maybe/* isSome */.pC)(c.fetchBundleAsset))return c.fetchBundleAsset(t);const r=await (0,request["default"])(t,{responseType:"text"});return JSON.parse(r.data)}class i{constructor({base:e="",pattern:t,location:n=new URL(window.location.href)}){let r;r="string"==typeof n?e=>new URL(e,new URL(n,window.location.href)).href:n instanceof URL?e=>new URL(e,n).href:n,this.pattern="string"==typeof t?new RegExp(`^${t}`):t,this.getAssetUrl=r,e=e?e.endsWith("/")?e:e+"/":"",this.matcher=new RegExp(`^${e}(?:(.*)/)?(.*)$`)}fetchMessageBundle(e,t){return o(this.getAssetUrl,this.matcher,e,t)}}function a(e){return new i(e)}const c={};

// EXTERNAL MODULE: ./node_modules/@arcgis/core/assets.js
var assets = __webpack_require__(6567);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/intl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
(0,messages/* registerMessageBundleLoader */.tz)(a({pattern:"esri/",location:assets/* getAssetUrl */.V}));


/***/ }),

/***/ 2057:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p6": () => (/* binding */ L)
/* harmony export */ });
/* unused harmony exports convertDateFormatToIntlOptions, dateFormats, dictionary, fromJSON, getDateTimeFormatter, toJSON */
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5709);
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8108);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const r={year:"numeric",month:"numeric",day:"numeric"},n={year:"numeric",month:"long",day:"numeric"},a={year:"numeric",month:"short",day:"numeric"},h={year:"numeric",month:"long",weekday:"long",day:"numeric"},m={hour:"numeric",minute:"numeric"},i={...m,second:"numeric"},s={"short-date":r,"short-date-short-time":{...r,...m},"short-date-short-time-24":{...r,...m,hour12:!1},"short-date-long-time":{...r,...i},"short-date-long-time-24":{...r,...i,hour12:!1},"short-date-le":r,"short-date-le-short-time":{...r,...m},"short-date-le-short-time-24":{...r,...m,hour12:!1},"short-date-le-long-time":{...r,...i},"short-date-le-long-time-24":{...r,...i,hour12:!1},"long-month-day-year":n,"long-month-day-year-short-time":{...n,...m},"long-month-day-year-short-time-24":{...n,...m,hour12:!1},"long-month-day-year-long-time":{...n,...i},"long-month-day-year-long-time-24":{...n,...i,hour12:!1},"day-short-month-year":a,"day-short-month-year-short-time":{...a,...m},"day-short-month-year-short-time-24":{...a,...m,hour12:!1},"day-short-month-year-long-time":{...a,...i},"day-short-month-year-long-time-24":{...a,...i,hour12:!1},"long-date":h,"long-date-short-time":{...h,...m},"long-date-short-time-24":{...h,...m,hour12:!1},"long-date-long-time":{...h,...i},"long-date-long-time-24":{...h,...i,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":m,"long-time":i},l=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__/* .strict */ .w)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),g=l.apiValues,y=l.toJSON.bind(l),d=l.fromJSON.bind(l),u={ar:"ar-u-nu-latn-ca-gregory"};let c=new WeakMap,D=s["short-date-short-time"];function T(t){const o=t||D;let r=c.get(o);if(!r){const t=(0,_locale_js__WEBPACK_IMPORTED_MODULE_1__/* .getLocale */ .Kd)(),n=u[(0,_locale_js__WEBPACK_IMPORTED_MODULE_1__/* .getLocale */ .Kd)()]||t;r=new Intl.DateTimeFormat(n,o),c.set(o,r)}return r}function S(t){return t?s[t]:null}function L(t,o){return T(o).format(t)}(0,_locale_js__WEBPACK_IMPORTED_MODULE_1__/* .beforeLocaleChange */ .Ze)((()=>{c=new WeakMap,D=s["short-date-short-time"]}));


/***/ }),

/***/ 8108:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kd": () => (/* binding */ l),
/* harmony export */   "Ze": () => (/* binding */ g),
/* harmony export */   "qe": () => (/* binding */ s)
/* harmony export */ });
/* unused harmony exports getDefaultLocale, getLanguage, prefersRTL, setLocale */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let n,o;const e=globalThis.esriConfig?.locale??globalThis.dojoConfig?.locale;function t(){return e??globalThis.navigator?.language??"en"}function l(){return void 0===o&&(o=t()),o}function c(o){n=o||void 0,h()}function i(n=l()){return/^([a-zA-Z]{2,3})(?:[_\-]\w+)*$/.exec(n)?.[1].toLowerCase()}const r={he:!0,ar:!0};function a(n=l()){const o=i(n);return void 0!==o&&(r[o]||!1)}const u=[];function s(n){return u.push(n),{remove(){u.splice(u.indexOf(n),1)}}}const f=[];function g(n){return f.push(n),{remove(){u.splice(f.indexOf(n),1)}}}function h(){const e=n??t();o!==e&&(o=e,[...f].forEach((n=>{n.call(null,e)})),[...u].forEach((n=>{n.call(null,e)})))}globalThis.addEventListener?.("languagechange",h);


/***/ }),

/***/ 720:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ME": () => (/* binding */ u),
/* harmony export */   "Su": () => (/* binding */ h),
/* harmony export */   "tz": () => (/* binding */ l)
/* harmony export */ });
/* unused harmony export test */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(375);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4353);
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8108);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const r=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,o={ar:!0,bg:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0};function i(t){return o[t]??!1}const a=[],c=new Map;function d(t){for(const e of c.keys())_(t.pattern,e)&&c.delete(e)}function l(t){return a.includes(t)||(d(t),a.unshift(t)),{remove(){const e=a.indexOf(t);e>-1&&(a.splice(e,1),d(t))}}}async function u(t){const e=(0,_locale_js__WEBPACK_IMPORTED_MODULE_2__/* .getLocale */ .Kd)();c.has(t)||c.set(t,f(t,e));const n=c.get(t);return n&&await m.add(n),n}function h(t){if(!r.test(t))return null;const e=r.exec(t);if(null===e)return null;const[,n,s]=e,o=n+(s?"-"+s.toUpperCase():"");return i(o)?o:i(n)?n:null}async function f(e,n){const s=[];for(const t of a)if(_(t.pattern,e))try{return await t.fetchMessageBundle(e,n)}catch(r){s.push(r)}if(s.length)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("intl:message-bundle-error",`Errors occurred while loading "${e}"`,{errors:s});throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("intl:no-message-bundle-loader",`No loader found for message bundle "${e}"`)}function _(t,e){return"string"==typeof t?e.startsWith(t):t.test(e)}(0,_locale_js__WEBPACK_IMPORTED_MODULE_2__/* .beforeLocaleChange */ .Ze)((()=>{c.clear()}));const m=new class{constructor(){this._numLoading=0,this._dfd=null}async waitForAll(){this._dfd&&await this._dfd.promise}add(t){return this._increase(),t.then((()=>this._decrease()),(()=>this._decrease())),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createDeferred */ .dD)())}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null)}},p={cache:c,loaders:a};


/***/ }),

/***/ 5741:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uf": () => (/* binding */ m)
/* harmony export */ });
/* unused harmony exports convertNumberFormatToIntlOptions, getFormatter */
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1681);
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8108);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const a={ar:"ar-u-nu-latn"};let e=new WeakMap,o={};function i(n){const i=n||o;if(!e.has(i)){const t=(0,_locale_js__WEBPACK_IMPORTED_MODULE_0__/* .getLocale */ .Kd)(),o=a[(0,_locale_js__WEBPACK_IMPORTED_MODULE_0__/* .getLocale */ .Kd)()]||t;e.set(i,new Intl.NumberFormat(o,n))}return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__/* .assumeNonNull */ .j0)(e.get(i))}function u(t={}){const n={};return null!=t.digitSeparator&&(n.useGrouping=t.digitSeparator),null!=t.places&&(n.minimumFractionDigits=n.maximumFractionDigits=t.places),n}function m(t,n){return-0===t&&(t=0),i(n).format(t)}(0,_locale_js__WEBPACK_IMPORTED_MODULE_0__/* .beforeLocaleChange */ .Ze)((()=>{e=new WeakMap,o={}}));


/***/ }),

/***/ 1547:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3802);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6745);
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1130);
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2057);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5741);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const i=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getLogger */ .Z.getLogger("esri.intl.substitute");function s(t,r,n={}){const{format:o={}}=n;return (0,_core_string_js__WEBPACK_IMPORTED_MODULE_2__/* .replace */ .gx)(t,(t=>u(t,r,o)))}function u(t,e,n){let o,i;const s=t.indexOf(":");if(-1===s?o=t.trim():(o=t.slice(0,s).trim(),i=t.slice(s+1).trim()),!o)return"";const u=(0,_core_object_js__WEBPACK_IMPORTED_MODULE_1__/* .getDeepValue */ .hS)(o,e);if(null==u)return"";const m=(i?n?.[i]:null)??n?.[o];return m?c(u,m):i?a(u,i):f(u)}function c(t,r){switch(r.type){case"date":return (0,_date_js__WEBPACK_IMPORTED_MODULE_3__/* .formatDate */ .p6)(t,r.intlOptions);case"number":return (0,_number_js__WEBPACK_IMPORTED_MODULE_4__/* .formatNumber */ .uf)(t,r.intlOptions);default:return i.warn("missing format descriptor for key {key}"),f(t)}}function a(t,r){switch(r.toLowerCase()){case"dateformat":return (0,_date_js__WEBPACK_IMPORTED_MODULE_3__/* .formatDate */ .p6)(t);case"numberformat":return (0,_number_js__WEBPACK_IMPORTED_MODULE_4__/* .formatNumber */ .uf)(t);default:return i.warn(`inline format is unsupported since 4.12: ${r}`),/^(dateformat|datestring)/i.test(r)?(0,_date_js__WEBPACK_IMPORTED_MODULE_3__/* .formatDate */ .p6)(t):/^numberformat/i.test(r)?(0,_number_js__WEBPACK_IMPORTED_MODULE_4__/* .formatNumber */ .uf)(t):f(t)}}function f(t){switch(typeof t){case"string":return t;case"number":return (0,_number_js__WEBPACK_IMPORTED_MODULE_4__/* .formatNumber */ .uf)(t);case"boolean":return""+t;default:return t instanceof Date?(0,_date_js__WEBPACK_IMPORTED_MODULE_3__/* .formatDate */ .p6)(t):""}}


/***/ }),

/***/ 748:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* binding */ projector_s)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/widgets/support/widgetUtils.js
var widgetUtils = __webpack_require__(2526);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/libs/maquette/projection.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const t="http://www.w3.org/",projection_r=`${t}2000/svg`,o=`${t}1999/xlink`;let i,l=[],n=(e,t)=>{let r={};return Object.keys(e).forEach((t=>{r[t]=e[t]})),t&&Object.keys(t).forEach((e=>{r[e]=t[e]})),r},s=(e,t)=>e.vnodeSelector===t.vnodeSelector&&(e.properties&&t.properties?e.properties.key===t.properties.key&&e.properties.bind===t.properties.bind:!e.properties&&!t.properties),p=e=>{if("string"!=typeof e)throw new Error("Style values must be strings")},d=(e,t,r)=>{if(""!==t.vnodeSelector)for(let o=r;o<e.length;o++)if(s(e[o],t))return o;return-1},a=(e,t,r,o)=>{let i=e[t];if(""===i.vnodeSelector)return;let l=i.properties;if(!(l?void 0===l.key?l.bind:l.key:void 0))for(let n=0;n<e.length;n++)if(n!==t){let t=e[n];if(s(t,i))throw new Error(`${r.vnodeSelector} had a ${i.vnodeSelector} child ${"added"===o?o:"removed"}, but there is now more than one. You must add unique key properties to make them distinguishable.`)}},f=e=>{if(e.properties){let t=e.properties.enterAnimation;t&&t(e.domNode,e.properties)}},c=[],u=!1,h=e=>{(e.children||[]).forEach(h),e.properties&&e.properties.afterRemoved&&e.properties.afterRemoved.apply(e.properties.bind||e.properties,[e.domNode])},m=()=>{u=!1,c.forEach(h),c.length=0},v=e=>{c.push(e),u||(u=!0,"undefined"!=typeof window&&"requestIdleCallback"in window?window.requestIdleCallback(m,{timeout:16}):setTimeout(m,16))},y=e=>{let t=e.domNode;if(e.properties){let r=e.properties.exitAnimation;if(r){t.style.pointerEvents="none";let o=()=>{t.parentNode&&(t.parentNode.removeChild(t),v(e))};return void r(t,o,e.properties)}}t.parentNode&&(t.parentNode.removeChild(t),v(e))},g=(t,i,l)=>{if(!i)return;let n=l.eventHandlerInterceptor,s=Object.keys(i),d=s.length;for(let a=0;a<d;a++){let d=s[a],f=i[d];if("className"===d)throw new Error('Property "className" is not supported, use "class".');if("class"===d)x(t,f,!0);else if("classes"===d){let e=Object.keys(f),r=e.length;for(let o=0;o<r;o++){let r=e[o];f[r]&&t.classList.add(r)}}else if("styles"===d){let e=Object.keys(f),r=e.length;for(let o=0;o<r;o++){let r=e[o],i=f[r];i&&(p(i),l.styleApplyer(t,r,i))}}else if("key"!==d&&null!=f){let s=typeof f;"function"===s?(0===d.lastIndexOf("on",0)&&(n&&(f=n(d,f,t,i)),"oninput"===d&&function(){let e=f;f=function(t){e.apply(this,[t]),t.target["oninput-value"]=t.target.value}}()),t[d]=f):l.namespace===projection_r?"href"===d?t.setAttributeNS(o,d,f):t.setAttribute(d,f):"string"===s&&"value"!==d?"innerHTML"===d?t[d]=widgetUtils/* renderingSanitizer.sanitize */.w3.sanitize(f):t.setAttribute(d,f):t[d]=f}}},b=(e,t,r)=>{if(t)for(let o of t)w(o,e,void 0,r)},N=(e,t,r)=>{b(e,t.children,r),t.text&&(e.textContent=t.text),g(e,t.properties,r),t.properties&&t.properties.afterCreate&&t.properties.afterCreate.apply(t.properties.bind||t.properties,[e,r,t.vnodeSelector,t.properties,t.children])},w=(e,t,o,i)=>{let l,s=0,p=e.vnodeSelector,d=t.ownerDocument;if(""===p)l=e.domNode=d.createTextNode(e.text),void 0!==o?t.insertBefore(l,o):t.appendChild(l);else{for(let a=0;a<=p.length;++a){let f=p.charAt(a);if(a===p.length||"."===f||"#"===f){let f=p.charAt(s-1),c=p.slice(s,a);"."===f?l.classList.add(c):"#"===f?l.id=c:("svg"===c&&(i=n(i,{namespace:projection_r})),void 0!==i.namespace?l=e.domNode=d.createElementNS(i.namespace,c):(l=e.domNode=e.domNode||d.createElement(c),"input"===c&&e.properties&&void 0!==e.properties.type&&l.setAttribute("type",e.properties.type)),void 0!==o?t.insertBefore(l,o):l.parentNode!==t&&t.appendChild(l)),s=a+1}}N(l,e,i)}},x=(e,t,r)=>{t&&t.split(" ").forEach((t=>{t&&e.classList.toggle(t,r)}))},k=(t,i,l,n)=>{if(!l)return;let s=!1,d=Object.keys(l),a=d.length;for(let f=0;f<a;f++){let a=d[f],c=l[a],u=i[a];if("class"===a)u!==c&&(x(t,u,!1),x(t,c,!0));else if("classes"===a){let e=t.classList,r=Object.keys(c),o=r.length;for(let t=0;t<o;t++){let o=r[t],i=!!c[o];i!==!!u[o]&&(s=!0,i?e.add(o):e.remove(o))}}else if("styles"===a){let e=Object.keys(c),r=e.length;for(let o=0;o<r;o++){let r=e[o],i=c[r];i!==u[r]&&(s=!0,i?(p(i),n.styleApplyer(t,r,i)):n.styleApplyer(t,r,""))}}else if(c||"string"!=typeof u||(c=""),"value"===a){let e=t[a];e!==c&&(t["oninput-value"]?e===t["oninput-value"]:c!==u)&&(t[a]=c,t["oninput-value"]=void 0),c!==u&&(s=!0)}else if(c!==u){let i=typeof c;"function"===i&&n.eventHandlerInterceptor||(n.namespace===projection_r?"href"===a?t.setAttributeNS(o,a,c):t.setAttribute(a,c):"string"===i?"innerHTML"===a?t[a]=widgetUtils/* renderingSanitizer.sanitize */.w3.sanitize(c):"role"===a&&""===c?t.removeAttribute(a):t.setAttribute(a,c):t[a]!==c&&(t[a]=c),s=!0)}}return s},A=(e,t,r,o,n)=>{if(r===o)return!1;o=o||l;let p,c=(r=r||l).length,u=o.length,h=0,m=0,v=!1;for(;m<u;){let l=h<c?r[h]:void 0,u=o[m];if(void 0!==l&&s(l,u))v=i(l,u,n)||v,h++;else{let l=d(r,u,h+1);if(l>=0){for(p=h;p<l;p++)y(r[p]),a(r,p,e,"removed");v=i(r[l],u,n)||v,h=l+1}else w(u,t,h<c?r[h].domNode:void 0,n),f(u),a(o,m,e,"added")}m++}if(c>h)for(p=h;p<c;p++)y(r[p]),a(r,p,e,"removed");return v};i=(e,t,o)=>{let i=e.domNode,l=!1;if(e===t)return!1;let s=!1;if(""===t.vnodeSelector){if(t.text!==e.text){let e=i.ownerDocument.createTextNode(t.text);return i.parentNode.replaceChild(e,i),t.domNode=e,l=!0,l}t.domNode=i}else 0===t.vnodeSelector.lastIndexOf("svg",0)&&(o=n(o,{namespace:projection_r})),e.text!==t.text&&(s=!0,void 0===t.text?i.removeChild(i.firstChild):i.textContent=t.text),t.domNode=i,s=A(t,i,e.children,t.children,o)||s,s=k(i,e.properties,t.properties,o)||s,t.properties&&t.properties.afterUpdate&&t.properties.afterUpdate.apply(t.properties.bind||t.properties,[i,o,t.vnodeSelector,t.properties,t.children]);return s&&t.properties&&t.properties.updateAnimation&&t.properties.updateAnimation(i,t.properties,e.properties),l};let S=(e,t)=>({getLastRender:()=>e,update:r=>{if(e.vnodeSelector!==r.vnodeSelector)throw new Error("The selector for the root VNode may not be changed. (consider using dom.merge and add one extra level to the virtual DOM)");let o=e;e=r,i(o,r,t)},domNode:e.domNode});

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/libs/maquette/dom.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const dom_p={namespace:void 0,performanceLogger:()=>{},eventHandlerInterceptor:void 0,styleApplyer:(e,r,o)=>{"-"===r.charAt(0)?e.style.setProperty(r,o):e.style[r]=o}};let dom_d=r=>n(dom_p,r),dom_n={create:(e,t)=>(t=dom_d(t),w(e,document.createElement("div"),void 0,t),S(e,t)),append:(e,t,p)=>(p=dom_d(p),w(t,e,void 0,p),S(t,p)),insertBefore:(e,t,p)=>(p=dom_d(p),w(t,e.parentNode,e,p),S(t,p)),merge:(e,r,p)=>(p=dom_d(p),r.domNode=e,N(e,r,p),S(r,p)),replace:(e,t,p)=>(p=dom_d(p),w(t,e.parentNode,e,p),e.parentNode.removeChild(e),S(t,p))};

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/libs/maquette/projector.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let projector_t,projector_n=(e,r)=>{let t=[];for(;e&&e!==r;)t.push(e),e=e.parentNode;return t};projector_t=Array.prototype.find?(e,r)=>e.find(r):(e,r)=>e.filter(r)[0];let projector_o=(e,r)=>{let n=e;return r.forEach((e=>{n=n&&n.children?projector_t(n.children,(r=>r.domNode===e)):void 0})),n},projector_d=(e,r,t)=>{let d=function(d){t("domEvent",d);let i=r(),p=projector_n(d.currentTarget,i.domNode);p.reverse();let l,a=projector_o(i.getLastRender(),p);return e.scheduleRender(),a&&(l=a.properties[`on${d.type}`].apply(a.properties.bind||this,arguments)),t("domEventProcessed",d),l};return(e,r,t,n)=>d},projector_i=t=>{let n,o,i=e(t),p=i.performanceLogger,l=!0,a=!1,s=[],c=[],u=(e,r,t)=>{let o,l=()=>o;i.eventHandlerInterceptor=projector_d(n,l,p),o=e(r,t(),i),s.push(o),c.push(t)},f=()=>{if(o=void 0,l){l=!1,p("renderStart",void 0);for(let e=0;e<s.length;e++){let r=c[e]();p("rendered",void 0),s[e].update(r),p("patched",void 0)}p("renderDone",void 0),l=!0}};return n={renderNow:f,scheduleRender:()=>{o||a||(o=requestAnimationFrame(f))},stop:()=>{o&&(cancelAnimationFrame(o),o=void 0),a=!0},resume:()=>{a=!1,l=!0,n.scheduleRender()},append:(e,t)=>{u(r.append,e,t)},insertBefore:(e,t)=>{u(r.insertBefore,e,t)},merge:(e,t)=>{u(r.merge,e,t)},replace:(e,t)=>{u(r.replace,e,t)},detach:e=>{for(let r=0;r<c.length;r++)if(c[r]===e)return c.splice(r,1),s.splice(r,1)[0];throw new Error("renderFunction was not found")}},n};

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/libs/maquette-advanced-projector/advanced-projector-options.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const advanced_projector_options_e={handleInterceptedEvent:(e,p,t,n)=>(e.scheduleRender(),p.properties[`on${n.type}`].apply(p.properties.bind||t,[n]))};

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/libs/maquette-advanced-projector/utils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const utils_e={namespace:void 0,performanceLogger:()=>{},eventHandlerInterceptor:void 0,styleApplyer:(e,r,o)=>{e.style[r]=o}},utils_r=r=>({...utils_e,...r});

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/libs/maquette-advanced-projector/projector.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const maquette_advanced_projector_projector_o=(e,t)=>{const r=[];for(;e&&e!==t;)r.push(e),e=e.parentNode;return r},maquette_advanced_projector_projector_n=(e,t)=>e.find(t),maquette_advanced_projector_projector_d=(e,t,r=!1)=>{let o=e;return t.forEach(((e,d)=>{const s=o?.children?maquette_advanced_projector_projector_n(o.children,(t=>t.domNode===e)):void 0;r&&!s&&d!==t.length-1||(o=s)})),o},projector_s=n=>{let s;const i={...advanced_projector_options_e,...n},c=utils_r(i),a=c.performanceLogger;let m,p=!0,l=!1;const f=[],u=[],h=(e,t,r)=>{let n;c.eventHandlerInterceptor=(e,t,r,c)=>function(e){let t;a("domEvent",e);const r=maquette_advanced_projector_projector_o(e.currentTarget,n.domNode),c=r.some((e=>customElements.get(e?.tagName?.toLowerCase())));if(e.eventPhase===Event.CAPTURING_PHASE||!c)r.reverse(),t=maquette_advanced_projector_projector_d(n.getLastRender(),r);else{const r=e.composedPath(),o=r.slice(r.indexOf(e.currentTarget),r.indexOf(n.domNode)).filter((e=>e.getRootNode()===e.ownerDocument)).reverse();t=maquette_advanced_projector_projector_d(n.getLastRender(),o,!0)}let m;return t&&(m=i.handleInterceptedEvent(s,t,this,e)),a("domEventProcessed",e),m},i.postProcessProjectionOptions?.(c);const m=r();n=e(t,m,c),f.push(n),u.push(r),i.afterFirstVNodeRendered&&i.afterFirstVNodeRendered(n,m)};let v=()=>{if(m=void 0,p){p=!1,a("renderStart",void 0);for(let e=0;e<f.length;e++){const t=u[e]();a("rendered",void 0),f[e].update(t),a("patched",void 0)}a("renderDone",void 0),p=!0}};return i.modifyDoRenderImplementation&&(v=i.modifyDoRenderImplementation(v,f,u)),s={renderNow:v,scheduleRender:()=>{m||l||(m=requestAnimationFrame(v))},stop:()=>{m&&(cancelAnimationFrame(m),m=void 0),l=!0},resume:()=>{l=!1,p=!0,s.scheduleRender()},append:(t,r)=>{h(dom_n.append,t,r)},insertBefore:(t,r)=>{h(dom_n.insertBefore,t,r)},merge:(t,r)=>{h(dom_n.merge,t,r)},replace:(t,r)=>{h(dom_n.replace,t,r)},detach:e=>{for(let t=0;t<u.length;t++)if(u[t]===e)return u.splice(t,1),f.splice(t,1)[0];throw new Error("renderFunction was not found")}},s};


/***/ }),

/***/ 6792:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ M)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(6663);
/* harmony import */ var _intl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(538);
/* harmony import */ var _core_domUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9183);
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1355);
/* harmony import */ var _core_events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9546);
/* harmony import */ var _core_Handles_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(9236);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9994);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(186);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3802);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(1681);
/* harmony import */ var _core_Promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4189);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4353);
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6868);
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2173);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1977);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2003);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(266);
/* harmony import */ var _core_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5860);
/* harmony import */ var _core_accessorSupport_tracking_SimpleTrackingTarget_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(4163);
/* harmony import */ var _libs_maquette_advanced_projector_projector_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(748);
/* harmony import */ var _support_componentsUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3583);
/* harmony import */ var _support_jsxWidgetSupport_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7181);
/* harmony import */ var _support_tests_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5048);
/* harmony import */ var _support_vnodeCache_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7842);
/* harmony import */ var _support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2526);
/* harmony import */ var _intl_locale_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8108);
/* harmony import */ var _intl_messages_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(720);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_support_componentsUtils_js__WEBPACK_IMPORTED_MODULE_16__]);
_support_componentsUtils_js__WEBPACK_IMPORTED_MODULE_16__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const U="esri.widgets.Widget";let $=0;const x={widgetIcon:"esri-icon-checkbox-unchecked"};function z(e,t){for(const r in t)null!=e[r]&&("object"==typeof e[r]&&"object"==typeof t[r]?z(e[r],t?.[r]):e[r]=t[r]);return e}const A=(0,_libs_maquette_advanced_projector_projector_js__WEBPACK_IMPORTED_MODULE_15__/* .createAdvancedProjector */ .g)({postProcessProjectionOptions(e){const t=e.eventHandlerInterceptor,r=/capture$/i;e.eventHandlerInterceptor=(e,o,s,i)=>{const n=t?.(e,o,s,i),a=r.test(e);if(!((e=e.replace(r,"")).toLowerCase()in s)||a){const t=e[2].toLowerCase()+e.slice(3),r=e=>n?.call(s,e);s.addEventListener(t,r,a);const o=()=>s.removeEventListener(t,r,a),c=i.afterRemoved;i.afterRemoved=e=>{c?.(e),o()}}return n}},handleInterceptedEvent(e,t,r,o){const{eventPhase:s,type:i}=o,n=s===Event.CAPTURING_PHASE;let a=`on${i}${n?"capture":""}`;const c=t.properties;(c&&a in c||(a=`on${i[0].toUpperCase()}${i.slice(1)}${n?"Capture":""}`,c&&a in c))&&((0,_support_vnodeCache_js__WEBPACK_IMPORTED_MODULE_19__/* .clearVNodeCache */ .Uy)(),e.scheduleRender(),c[a].call(c.bind||r,o))}});let B=!1,D=class extends((0,_core_Promise_js__WEBPACK_IMPORTED_MODULE_7__/* .EsriPromiseMixin */ .v)(_core_Evented_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].EventedAccessor */ .Z.EventedAccessor)){constructor(e,t){super(e,t),this._attached=!1,this._internalHandles=new _core_Handles_js__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z,this._projector=A,this._readyForTrueRender=!1,this.iconClass=x.widgetIcon,this.key=this,this._loadLocale=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .debounce */ .Ds)((async()=>{if(this._messageBundleProps&&this._messageBundleProps.length){const e=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .eachAlways */ .as)(this._messageBundleProps.map((async({bundlePath:e,propertyName:t})=>{let r=await (0,_intl_messages_js__WEBPACK_IMPORTED_MODULE_22__/* .fetchMessageBundle */ .ME)(e);this.uiStrings&&Object.keys(this.uiStrings)&&(r=z((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__/* .clone */ .d9)(r),this.uiStrings)),this[t]=r})));for(const t of e)t.error&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getLogger */ .Z.getLogger(this.declaredClass).error("widget-intl:locale-error",this.declaredClass,t.error)}await this.loadLocale()})),(0,_support_componentsUtils_js__WEBPACK_IMPORTED_MODULE_16__/* .commitAssetPath */ .B)();const r="esri-widget-uid-"+(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_10__/* .generateUUID */ .D)(),o=this.render.bind(this);this._trackingTarget=new _core_accessorSupport_tracking_SimpleTrackingTarget_js__WEBPACK_IMPORTED_MODULE_24__/* .SimpleTrackingTarget */ .M((()=>this.scheduleRender()));const s=()=>{if(!this._readyForTrueRender||this.destroyed)return null;if(!this.visible)return{vnodeSelector:"div",properties:{key:r,class:"",styles:{display:"none"}},domNode:null,children:void 0,text:void 0};const e=o();let{properties:t}=e;t||(e.properties=t={});let{key:s,styles:i}=t;s||(t.key=r),i||(t.styles=i={}),i.display||(i.display="");let n=0;return e.children?.forEach((e=>{if((0,_support_jsxWidgetSupport_js__WEBPACK_IMPORTED_MODULE_17__/* .isWidgetConstructor */ .ZJ)(e.vnodeSelector))return;let{properties:t}=e;t||(e.properties=t={}),t.key||(t.key=`${this.id}--${n++}`)})),(0,_support_jsxWidgetSupport_js__WEBPACK_IMPORTED_MODULE_17__/* .processWidgets */ .dh)(this,e)};this.render=()=>{if(B)return s();let e=(0,_support_vnodeCache_js__WEBPACK_IMPORTED_MODULE_19__/* .getVNodeCache */ .O9)(this)??null;if(e)return e;this._trackingTarget.clear(),B=!0;try{e=(0,_core_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_14__/* .runTracked */ .LJ)(this._trackingTarget,s)}catch(t){throw console.error(t),t}finally{B=!1}return e&&(0,_support_vnodeCache_js__WEBPACK_IMPORTED_MODULE_19__/* .setVNodeCache */ .KF)(this,e),e},this.addResolvingPromise(this._resourcesFetch=this.beforeFirstRender().then((()=>{this._readyForTrueRender=!0,this._postInitialize()}))),(0,_support_tests_js__WEBPACK_IMPORTED_MODULE_18__/* .registerLoading */ .y)(this._resourcesFetch)}normalizeCtorArgs(e,t){const r={...e};return t&&(r.container=t),r}postInitialize(){}beforeFirstRender(){return Promise.all([this.loadDependencies(),this._loadLocale()]).then((()=>{})).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .throwIfNotAbortError */ .H9)}async loadDependencies(){}async loadLocale(){}destroy(){this.destroyed||((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_25__/* .destroyMaybe */ .SC)(this._trackingTarget),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_25__/* .destroyMaybe */ .SC)(this.viewModel),this._detach(this.container),this._set("container",null),this._internalHandles.destroy(),this._emitter.clear(),this.render=()=>null,this._projector=null,(0,_support_vnodeCache_js__WEBPACK_IMPORTED_MODULE_19__/* .deleteVNodeCache */ .w7)(this))}set container(e){this._get("container")||this._set("container",e)}castContainer(e){return (0,_core_domUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .byId */ .L7)(e)}get domNode(){return this.container}set domNode(e){this.container=e}get id(){return this._get("id")||this.get("container.id")||Date.now().toString(16)+"-widget-"+$++}set id(e){e&&this._set("id",e)}get label(){return this.declaredClass.split(".").pop()}set label(e){this._overrideIfSome("label",e)}get renderable(){return this._resourcesFetch}get visible(){return this._get("visible")}set visible(e){this._set("visible",e)}get test(){return{projector:this._projector}}render(){throw new Error("not implemented")}scheduleRender(){this.destroyed||((0,_support_vnodeCache_js__WEBPACK_IMPORTED_MODULE_19__/* .deleteVNodeCache */ .w7)(this),this._projector.scheduleRender())}classes(...e){return _support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_20__/* .classes.apply */ .Sh.apply(this,e)}renderNow(){(0,_support_vnodeCache_js__WEBPACK_IMPORTED_MODULE_19__/* .deleteVNodeCache */ .w7)(this),this._projector.renderNow()}_postInitialize(){if(this.destroyed)return;this.scheduleRender(),this._delegatedEventNames?.length&&this._internalHandles.add((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .watch */ .YP)((()=>this.viewModel),((e,t)=>{t&&this._internalHandles.remove("delegated-events"),e&&(0,_core_events_js__WEBPACK_IMPORTED_MODULE_3__/* .isEventTarget */ .vT)(e)&&this._internalHandles.add(this._delegatedEventNames.map((t=>(0,_core_events_js__WEBPACK_IMPORTED_MODULE_3__.on)(e,t,(e=>{this.emit(t,e)})))),"delegated-events")}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .initial */ .nn)),this.postInitialize();const e=async()=>{await this._loadLocale().catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .throwIfNotAbortError */ .H9),this.scheduleRender()};this._internalHandles.add([(0,_intl_locale_js__WEBPACK_IMPORTED_MODULE_21__/* .onLocaleChange */ .qe)(e),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .watch */ .YP)((()=>this.uiStrings),e),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .when */ .gx)((()=>this.container),(e=>{this.destroyed||this._attach(e)}),{initial:!0,once:!0})])}_attach(e){e&&(this._projector.merge(e,this.render),this._attached=!0)}_detach(e){this._attached&&(this._projector.detach(this.render),this._attached=!1),e?.parentNode?.removeChild(e)}};D[_support_jsxWidgetSupport_js__WEBPACK_IMPORTED_MODULE_17__/* .WIDGET_SYMBOL */ .$X]=!0,(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_26__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],D.prototype,"_readyForTrueRender",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_26__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)({value:null})],D.prototype,"container",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_26__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_12__/* .cast */ .p)("container")],D.prototype,"castContainer",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_26__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],D.prototype,"domNode",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_26__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],D.prototype,"iconClass",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_26__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],D.prototype,"id",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_26__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],D.prototype,"label",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_26__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],D.prototype,"renderable",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_26__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],D.prototype,"uiStrings",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_26__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],D.prototype,"viewModel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_26__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)({value:!0})],D.prototype,"visible",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_26__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],D.prototype,"key",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_26__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],D.prototype,"children",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_26__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],D.prototype,"afterCreate",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_26__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],D.prototype,"afterUpdate",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_26__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],D.prototype,"afterRemoved",void 0),D=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_26__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__/* .subclass */ .j)(U)],D);const M=D;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3583:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _esri_calcite_components_dist_components_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(926);
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6567);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9994);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3466);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_esri_calcite_components_dist_components_index_js__WEBPACK_IMPORTED_MODULE_0__]);
_esri_calcite_components_dist_components_index_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let e;function r(){(0,_esri_calcite_components_dist_components_index_js__WEBPACK_IMPORTED_MODULE_0__.setAssetPath)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .makeAbsolute */ .hF)((0,_assets_js__WEBPACK_IMPORTED_MODULE_1__/* .getAssetUrl */ .V)(e)))}e="components/assets";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4236:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e(e){return(s,r)=>{s.hasOwnProperty("_messageBundleProps")||(s._messageBundleProps=s._messageBundleProps?s._messageBundleProps.slice():[]);s._messageBundleProps.push({bundlePath:e,propertyName:r})}}


/***/ }),

/***/ 6451:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ n)
/* harmony export */ });
/* unused harmony export tsxFragment */
/* harmony import */ var _jsxWidgetSupport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7181);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var e=function(r){return{vnodeSelector:"",properties:void 0,children:void 0,text:r.toString(),domNode:null}},o=function(r,t){for(var n=0,i=r.length;n<i;n++){var d=r[n];Array.isArray(d)?o(d,t):null!=d&&!1!==d&&(d.hasOwnProperty("vnodeSelector")||(d=e(d)),t.push(d))}},t=function(r,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];if(1===t.length&&"string"==typeof t[0])return{vnodeSelector:r,properties:e||void 0,children:void 0,text:t[0],domNode:null};var i=[];return o(t,i),{vnodeSelector:r,properties:e||void 0,children:i,text:void 0,domNode:null}};function n(e,o,...n){return"function"!=typeof e||(0,_jsxWidgetSupport_js__WEBPACK_IMPORTED_MODULE_0__/* .isWidgetConstructor */ .ZJ)(e)?t(e,o,...n):e(o,...n)}function i(...r){return r}


/***/ }),

/***/ 7181:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$X": () => (/* binding */ t),
/* harmony export */   "ZJ": () => (/* binding */ a),
/* harmony export */   "dh": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3148);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const t=Symbol("widget"),r=[],n={},o=new WeakMap;function i(e,t){let o=t.children;if(o&&o.length)for(let r=0;r<o.length;++r)o[r]=i(e,o[r]);else o=r;const l=t.vnodeSelector;if(a(l)){const r=t.properties||n,i=r.key||l;return{vnodeSelector:"div",properties:{key:i,afterCreate:d,afterUpdate:c,afterRemoved:s,parentWidget:e,widgetConstructor:l,widgetProperties:{...r,key:i,children:o}},children:void 0,text:void 0,domNode:null}}return t}function d(t,r,n,{parentWidget:i,widgetConstructor:d,widgetProperties:c}){const a=new d(c);a.container=t,o.set(t,a),a.afterCreate?.(a,t),i._internalHandles.add((0,_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .makeHandle */ .kB)((()=>s(t))))}function c(e,t,r,{widgetProperties:n}){const i=o.get(e);i&&(i.set(n),i.afterUpdate?.(i,e))}function s(e){const t=o.get(e);t&&(t.destroy(),o.delete(e))}function a(e){return"function"==typeof e&&e[t]}


/***/ }),

/***/ 5048:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ n)
/* harmony export */ });
/* unused harmony export hasPendingLoading */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const e=new Set;function n(n){e.add(n),n.finally((()=>e.delete(n)))}function t(){return e.size>0}


/***/ }),

/***/ 7842:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KF": () => (/* binding */ c),
/* harmony export */   "O9": () => (/* binding */ e),
/* harmony export */   "Uy": () => (/* binding */ t),
/* harmony export */   "w7": () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const n=new Map;function t(){n.clear()}function e(t){return n.get(t)}function c(t,e){n.set(t,e)}function o(t){n.delete(t)}


/***/ }),

/***/ 7617:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Qd": () => (/* binding */ widget_e)
});

// UNUSED EXPORTS: accessibleHandler, additionalAllowedTags, classes, cssTransition, discardNode, getCalciteThemeClass, getDir, hasDomNode, isActivationKey, isDarkTheme, isRTL, keepMenuItemWithinView, messageBundle, onResize, renderingSanitizer, safeAttrs, setCalciteThemeClass, storeNode, tsx, tsxFragment, vmEvent

// EXTERNAL MODULE: ./node_modules/@arcgis/core/widgets/support/widgetUtils.js
var widgetUtils = __webpack_require__(2526);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/widgets/support/decorators/accessibleHandler.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function t(){return function(n,t){if(!n[t])throw new TypeError(`Cannot auto bind undefined function '${t}'`);return{value:o(n[t])}}}function e(n){const{type:t}=n;return n instanceof KeyboardEvent||"keyup"===t||"keydown"===t||"keypress"===t}function o(t){return function(o,...r){e(o)?n(o.key)&&(o.preventDefault(),o.stopPropagation(),o.target.click()):t.call(this,o,...r)}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/widgets/support/jsxFactory.js
var jsxFactory = __webpack_require__(6451);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/widgets/support/widget.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function widget_e(e){return e&&"function"==typeof e.render}function widget_t(e){return e&&"function"==typeof e.postMixInProperties&&"function"==typeof e.buildRendering&&"function"==typeof e.postCreate&&"function"==typeof e.startup}


/***/ }),

/***/ 2526:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sh": () => (/* binding */ p),
/* harmony export */   "Yo": () => (/* binding */ v),
/* harmony export */   "w3": () => (/* binding */ E)
/* harmony export */ });
/* unused harmony exports additionalAllowedTags, cssTransition, discardNode, getDir, isActivationKey, isRTL, keepMenuItemWithinView, onResize, safeAttrs */
/* harmony import */ var _esri_arcgis_html_sanitizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8416);
/* harmony import */ var _core_ArrayPool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(904);
/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3148);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9994);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3802);
/* harmony import */ var _vnodeCache_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7842);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var o,s,a=function(e){if("WebkitTransition"in e.style)o="webkitTransitionEnd",s="webkitAnimationEnd";else{if(!("transition"in e.style))throw new Error("Your browser is not supported!");o="transitionend",s="animationend"}},c=function(e){o||a(e)},l=function(e,t){return void 0===t&&(t=e+"-active"),function(n){c(n);var r=!1,i=function(a){r||(r=!0,n.removeEventListener(o,i),n.removeEventListener(s,i),n.classList.remove(e),n.classList.remove(t))};n.classList.add(e),n.addEventListener(o,i),n.addEventListener(s,i),requestAnimationFrame((function(){n.classList.add(t)}))}},d=function(e,t){return void 0===t&&(t=e+"-active"),function(n,r){c(n);var i=!1,a=function(e){i||(i=!0,n.removeEventListener(o,a),n.removeEventListener(s,a),r())};n.classList.add(e),n.addEventListener(o,a),n.addEventListener(s,a),requestAnimationFrame((function(){n.classList.add(t)}))}};const u=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getLogger */ .Z.getLogger("esri.widgets.support.widgetUtils");function p(e){const n=_core_ArrayPool_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].acquire */ .Z.acquire();for(let t=0;t<arguments.length;t++){const e=arguments[t],r=typeof e;if("string"===r)n.push(e);else if(Array.isArray(e))n.push.apply(n,e);else if("object"===r)for(const t in e)e[t]&&n.push(t)}const r=n.join(" ");return _core_ArrayPool_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].release */ .Z.release(n),r}const g=(()=>{const e=new Map,t=new ResizeObserver((t=>{(0,_vnodeCache_js__WEBPACK_IMPORTED_MODULE_4__/* .clearVNodeCache */ .Uy)();for(const n of t)e.get(n.target)?.(n)}));return(r,i,o)=>(e.has(r)&&u.error("Already observing element",r),e.set(r,i),t.observe(r,o),(0,_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .makeHandle */ .kB)((()=>{t.unobserve(r),e.delete(r)})))})();function f(e){const t=e?.closest("[dir]");return null!==t&&t instanceof HTMLElement&&"rtl"===t.dir||"rtl"===document.dir}function m(e){return f(e)?"rtl":"ltr"}function h(e){const t="data-node-ref";this[e.getAttribute(t)]=null}function v(e){const t="data-node-ref";this[e.getAttribute(t)]=e}function w(e,t){return("enter"===e?l:d)(t)}const L=["dd","dl","dt","h1","h2","h3","h4","h5","h6","sub","sup",...["animate","animatetransform","circle","clippath","defs","ellipse","g","image","line","lineargradient","marker","mask","path","pattern","polygon","polyline","radialgradient","rect","stop","svg","switch","symbol","text","textpath","tspan","use"]],b=L.reduce(((e,t)=>(e[t]=[],e)),{}),y=["align","alink","alt","bgcolor","border","cellpadding","cellspacing","class","color","cols","colspan","coords","d","dir","face","height","hspace","ismap","lang","marginheight","marginwidth","multiple","nohref","noresize","noshade","nowrap","ref","rel","rev","rows","rowspan","scrolling","shape","span","summary","tabindex","title","usemap","valign","value","vlink","vspace","width"],E=new _esri_arcgis_html_sanitizer__WEBPACK_IMPORTED_MODULE_0__({whiteList:b,onTagAttr:(e,t,n)=>{const r=`${t}="${n}"`;if(y.includes(t))return r},stripIgnoreTag:!0,stripIgnoreTagBody:["script","style"]},!0);function A(e,t){const n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=n.top+n.height,o=r.top+r.height,s=n.top,a=r.top;(i>o||s<a)&&e.scrollIntoView({block:"end"})}function k(e){return"Enter"===e||" "===e}


/***/ })

};
;