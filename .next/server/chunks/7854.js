"use strict";
exports.id = 7854;
exports.ids = [7854];
exports.modules = {

/***/ 6663:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e(e,t,r,o){var c,f=arguments.length,n=f<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(n=(f<3?c(n):f>3?c(t,r,n):c(t,r))||n);return f>3&&n&&Object.defineProperty(t,r,n),n}


/***/ }),

/***/ 1366:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9994);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6745);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const s={analysisTheme:{accentColor:[255,128,0],textColor:"white"},apiKey:void 0,applicationUrl:globalThis.location?.href,assetsPath:"",fontsUrl:"https://static.arcgis.com/fonts",geometryServiceUrl:"https://utility.arcgisonline.com/arcgis/rest/services/Geometry/GeometryServer",geoRSSServiceUrl:"https://utility.arcgis.com/sharing/rss",kmlServiceUrl:"https://utility.arcgis.com/sharing/kml",portalUrl:"https://www.arcgis.com",routeServiceUrl:"https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",workers:{loaderConfig:{has:{},paths:{},map:{},packages:[]}},request:{crossOriginNoCorsDomains:null,httpsDomains:["arcgis.com","arcgisonline.com","esrikr.com","premiumservices.blackbridge.com","esripremium.accuweather.com","gbm.digitalglobe.com","firstlook.digitalglobe.com","msi.digitalglobe.com"],interceptors:[],maxUrlLength:2e3,priority:"high",proxyRules:[],proxyUrl:null,timeout:6e4,trustedServers:[],useIdentity:!0},log:{interceptors:[],level:null}};if(globalThis.esriConfig&&((0,_core_object_js__WEBPACK_IMPORTED_MODULE_1__/* .deepMerge */ .RH)(s,globalThis.esriConfig,!0),delete s.has),!s.assetsPath){{const e="4.25.4";s.assetsPath=`https://js.arcgis.com/${e.slice(0,-2)}/@arcgis/core/assets`}s.defaultAssetsPath=s.assetsPath}


/***/ }),

/***/ 8378:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Accessor_m)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Handles.js + 1 modules
var Handles = __webpack_require__(9236);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(1681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/get.js
var get = __webpack_require__(1777);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/metadata.js
var metadata = __webpack_require__(1610);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(9994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js + 1 modules
var lang = __webpack_require__(186);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(3802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/ObjectPool.js
var ObjectPool = __webpack_require__(4596);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/interfaces.js
var interfaces = __webpack_require__(6175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js
var PropertyOrigin = __webpack_require__(5943);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/tracking.js
var tracking = __webpack_require__(5860);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/tracking/Flags.js
var Flags = __webpack_require__(8488);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js + 1 modules
var arrayUtils = __webpack_require__(5418);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/accessorSupport/tracking/ObservationHandle.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class ObservationHandle_s{constructor(r,s){this._observers=r,this._observer=s}remove(){(0,arrayUtils/* remove */.Od)(this._observers,this._observer)}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/accessorSupport/Property.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class Property_l{constructor(s,t,e){this.properties=s,this.propertyName=t,this.metadata=e,this._observers=null,this._accessed=null,this._handles=null,this.flags=Flags/* Flags.Dirty */.v.Dirty|(e.nonNullable?Flags/* Flags.NonNullable */.v.NonNullable:0)|(e.hasOwnProperty("value")?Flags/* Flags.HasDefaultValue */.v.HasDefaultValue:0)|(void 0===e.get?Flags/* Flags.DepTrackingInitialized */.v.DepTrackingInitialized:0)|(void 0===e.dependsOn?Flags/* Flags.AutoTracked */.v.AutoTracked:0)}destroy(){if(this.flags&Flags/* Flags.Dirty */.v.Dirty&&this._observers){const s=this._observers.slice();for(const t of s)t.onCommitted()}this._accessed=null,this._observers=null,this._clearObservationHandles()}getComputed(){(0,tracking/* trackAccess */.it)(this);const o=this.properties.store,l=this.propertyName,a=this.flags,h=o.get(l);if(a&Flags/* Flags.Computing */.v.Computing)return h;if(~a&Flags/* Flags.Dirty */.v.Dirty&&o.has(l))return h;this.flags|=Flags/* Flags.Computing */.v.Computing;const d=this.properties.host;let c;a&Flags/* Flags.AutoTracked */.v.AutoTracked?c=(0,tracking/* runTracked */.LJ)(this,this.metadata.get,d):((0,tracking/* trackExplicitDependencies */.GF)(d,this),c=this.metadata.get.call(d)),o.set(l,c,PropertyOrigin/* OriginId.COMPUTED */.s3.COMPUTED);const u=o.get(l);return u===h?this.flags&=~Flags/* Flags.Dirty */.v.Dirty:(0,tracking/* runUntracked */.gb)(this.commit,this),this.flags&=~Flags/* Flags.Computing */.v.Computing,u}onObservableAccessed(s){s!==this&&(null===this._accessed&&(this._accessed=[]),this._accessed.includes(s)||this._accessed.push(s))}onTrackingEnd(){this._clearObservationHandles(),this.flags|=Flags/* Flags.DepTrackingInitialized */.v.DepTrackingInitialized;const s=this._accessed;if(null===s)return;let t=this._handles;null===t&&(t=this._handles=[]);for(let e=0;e<s.length;++e)t.push(s[e].observe(this));s.length=0}observe(s){return null===this._observers&&(this._observers=[]),this._observers.includes(s)||this._observers.push(s),new ObservationHandle_s(this._observers,s)}notifyChange(){this.onInvalidated(),this.onCommitted()}invalidate(){this.onInvalidated()}onInvalidated(){~this.flags&Flags/* Flags.Overriden */.v.Overriden&&(this.flags|=Flags/* Flags.Dirty */.v.Dirty);const s=this._observers;if(null!==s)for(let t=0;t<s.length;++t)s[t].onInvalidated()}commit(){this.flags&=~Flags/* Flags.Dirty */.v.Dirty,this.onCommitted()}onCommitted(){if(null===this._observers)return;const s=this._observers.slice();for(let t=0;t<s.length;++t)s[t].onCommitted()}_clearObservationHandles(){const s=this._handles;if(null!==s){for(let t=0;t<s.length;++t)s[t].remove();s.length=0}}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/accessorSupport/Store.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class Store_t{constructor(){this._values=new Map,this.multipleOriginsSupported=!1}clone(s){const r=new Store_t;return this._values.forEach(((t,i)=>{s&&s.has(i)||r.set(i,(0,lang/* clone */.d9)(t))})),r}get(e){return this._values.get(e)}originOf(){return PropertyOrigin/* OriginId.USER */.s3.USER}keys(){return[...this._values.keys()]}set(e,s){this._values.set(e,s)}delete(e){this._values.delete(e)}has(e){return this._values.has(e)}forEach(e){this._values.forEach(e)}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/utils.js
var utils = __webpack_require__(5620);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/accessorSupport/Properties.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function g(t,e,s){return void 0!==t}function d(t,e,s,r){return void 0!==t&&(!(null==s&&t.flags&Flags/* Flags.NonNullable */.v.NonNullable)||(r.lifecycle,interfaces/* Lifecycle.INITIALIZING */.F.INITIALIZING,!1))}function m(t){return t&&"function"==typeof t.destroy}Logger/* default.getLogger */.Z.getLogger("esri.core.accessorSupport.Properties");class v{constructor(t){this.host=t,this.properties=new Map,this.ctorArgs=null,this.destroyed=!1,this.lifecycle=interfaces/* Lifecycle.INITIALIZING */.F.INITIALIZING,this.store=new Store_t,this._origin=PropertyOrigin/* OriginId.USER */.s3.USER;const e=this.host.constructor.__accessorMetadata__,s=e.properties;for(const i in s){const t=new Property_l(this,i,s[i]);this.properties.set(i,t)}this.metadatas=s,this._autoDestroy=e.autoDestroy}initialize(){this.lifecycle=interfaces/* Lifecycle.CONSTRUCTING */.F.CONSTRUCTING}constructed(){this.lifecycle=interfaces/* Lifecycle.CONSTRUCTED */.F.CONSTRUCTED}destroy(){if(this.destroyed=!0,this._autoDestroy)for(const[t,e]of this.properties){const s=this.internalGet(t);s&&m(s)&&(s.destroy(),~e.flags&Flags/* Flags.NonNullable */.v.NonNullable&&this._internalSet(e,null)),e.destroy()}else for(const[t,e]of this.properties)e.destroy()}get initialized(){return this.lifecycle!==interfaces/* Lifecycle.INITIALIZING */.F.INITIALIZING}get(t){const e=this.properties.get(t);if(e.metadata.get)return e.getComputed();(0,tracking/* trackAccess */.it)(e);const s=this.store;return s.has(t)?s.get(t):e.metadata.value}originOf(t){const e=this.store.originOf(t);if(void 0===e){const e=this.properties.get(t);if(void 0!==e&&e.flags&Flags/* Flags.HasDefaultValue */.v.HasDefaultValue)return"defaults"}return (0,PropertyOrigin/* idToName */.x3)(e)}has(t){return!!this.properties.has(t)&&this.store.has(t)}keys(){return[...this.properties.keys()]}internalGet(t){const e=this.properties.get(t);if(g(e))return this.store.has(t)?this.store.get(t):e.metadata.value}internalSet(t,e){const s=this.properties.get(t);g(s)&&this._internalSet(s,e)}getDependsInfo(t,e,s){const i=this.properties.get(e);if(!g(i))return"";const o=new Set,n=(0,tracking/* runTracked */.LJ)({onObservableAccessed:t=>o.add(t),onTrackingEnd:()=>{}},(()=>i.metadata.get?.call(t)));let a=`${s}${t.declaredClass.split(".").pop()}.${e}: ${n}\n`;if(0===o.size)return a;s+="  ";for(const l of o){if(!(l instanceof Property_l))continue;const t=l.properties.host,e=l.propertyName,i=(0,utils/* getProperties */.vw)(t);a+=i?i.getDependsInfo(t,e,s):`${s}${e}: undefined\n`}return a}setAtOrigin(t,e,s){const i=this.properties.get(t);if(g(i))return this._setAtOrigin(i,e,s)}isOverridden(t){const e=this.properties.get(t);return void 0!==e&&!!(e.flags&Flags/* Flags.Overriden */.v.Overriden)}clearOverride(t){const e=this.properties.get(t);void 0!==e&&e.flags&Flags/* Flags.Overriden */.v.Overriden&&(e.flags&=~Flags/* Flags.Overriden */.v.Overriden,e.notifyChange())}override(t,e){const s=this.properties.get(t);if(!d(s,t,e,this))return;const i=s.metadata.cast;if(i){const t=this._cast(i,e),{valid:s,value:r}=t;if(I.release(t),!s)return;e=r}s.flags|=Flags/* Flags.Overriden */.v.Overriden,this._internalSet(s,e)}set(t,e){const s=this.properties.get(t);if(!d(s,t,e,this))return;const i=s.metadata.cast;if(i){const t=this._cast(i,e),{valid:s,value:r}=t;if(I.release(t),!s)return;e=r}const r=s.metadata.set;r?r.call(this.host,e):this._internalSet(s,e)}setDefaultOrigin(t){this._origin=(0,PropertyOrigin/* nameToId */.M9)(t)}getDefaultOrigin(){return (0,PropertyOrigin/* idToName */.x3)(this._origin)}notifyChange(t){const e=this.properties.get(t);void 0!==e&&e.notifyChange()}invalidate(t){const e=this.properties.get(t);void 0!==e&&e.invalidate()}commit(t){const e=this.properties.get(t);void 0!==e&&e.commit()}_internalSet(t,e){const s=this.lifecycle!==interfaces/* Lifecycle.INITIALIZING */.F.INITIALIZING?this._origin:PropertyOrigin/* OriginId.DEFAULTS */.s3.DEFAULTS;this._setAtOrigin(t,e,s)}_setAtOrigin(e,s,i){const r=this.store,o=e.propertyName;r.has(o,i)&&(0,lang/* equals */.fS)(s,r.get(o))&&~e.flags&Flags/* Flags.Overriden */.v.Overriden&&i===r.originOf(o)||(e.invalidate(),r.set(o,s,i),e.commit(),(0,tracking/* initializeDependencyTracking */.mS)(this.host,e))}_cast(t,e){const s=I.acquire();return s.valid=!0,s.value=e,t&&(s.value=t.call(this.host,e,s)),s}}class y{constructor(){this.value=null,this.valid=!0}acquire(){this.valid=!0}release(){this.value=null}}const I=new ObjectPool/* default */.Z(y);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/set.js
var set = __webpack_require__(3156);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/watch.js + 8 modules
var watch = __webpack_require__(8280);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(1977);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(266);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/Accessor.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var l,p;function Accessor_d(t){if(null==t)return{value:t};if(Array.isArray(t))return{type:[t[0]],value:null};switch(typeof t){case"object":return t.constructor?.__accessorMetadata__||t instanceof Date?{type:t.constructor,value:t}:t;case"boolean":return{type:Boolean,value:t};case"string":return{type:String,value:t};case"number":return{type:Number,value:t};case"function":return{type:t,value:null};default:return}}const Accessor_y=Symbol("Accessor-Handles"),f=Symbol("Accessor-Initialized");class Accessor_m{constructor(...t){if(this[l]=null,this[p]=!1,this.constructor===Accessor_m)throw new Error("[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor");Object.defineProperty(this,"__accessor__",{enumerable:!1,value:new v(this)}),t.length>0&&this.normalizeCtorArgs&&(this.__accessor__.ctorArgs=this.normalizeCtorArgs.apply(this,t))}static createSubclass(t={}){if(Array.isArray(t))throw new Error("Multi-inheritance unsupported since 4.16");const{properties:r,declaredClass:e,constructor:s}=t;delete t.declaredClass,delete t.properties,delete t.constructor;const o=this;class c extends o{constructor(...t){super(...t),this.inherited=null,s&&s.apply(this,t)}}(0,metadata/* getOwnClassMetadata */.JT)(c.prototype);for(const i in t){const r=t[i];c.prototype[i]="function"==typeof r?function(...t){const e=this.inherited;let s;this.inherited=function(...t){if(o.prototype[i])return o.prototype[i].apply(this,t)};try{s=r.apply(this,t)}catch(c){throw this.inherited=e,c}return this.inherited=e,s}:t[i]}for(const i in r){const t=Accessor_d(r[i]);(0,property/* property */.Cb)(t)(c.prototype,i)}return (0,subclass/* subclass */.j)(e)(c)}postscript(t){const r=this.__accessor__,e=r.ctorArgs||t;r.initialize(),e&&(this.set(e),r.ctorArgs=null),r.constructed(),this.initialize(),this[f]=!0}initialize(){}destroy(){this.destroyed||(this[Accessor_y]=(0,maybe/* destroyMaybe */.SC)(this[Accessor_y]),(0,watch/* removeTarget */.BT)(this),this.__accessor__.destroy())}get constructed(){return this.__accessor__&&this.__accessor__.initialized||!1}get initialized(){return this[f]}get destroyed(){return this.__accessor__&&this.__accessor__.destroyed||!1}commitProperty(t){this.get(t)}get(t){return (0,get/* get */.U2)(this,t)}hasOwnProperty(t){return this.__accessor__?this.__accessor__.has(t):Object.prototype.hasOwnProperty.call(this,t)}keys(){return this.__accessor__?this.__accessor__.keys():[]}set(t,r){return (0,set/* set */.t)(this,t,r),this}watch(t,r,e){return (0,watch/* watch */.YP)(this,t,r,e)}own(t){this.addHandles(t)}addHandles(r,s){let o=this[Accessor_y];(0,maybe/* isNone */.Wi)(o)&&(o=this[Accessor_y]=new Handles/* default */.Z),o.add(r,s)}removeHandles(t){const r=this[Accessor_y];(0,maybe/* isNone */.Wi)(r)||r.remove(t)}hasHandles(t){const r=this[Accessor_y];return!!(0,maybe/* isSome */.pC)(r)&&r.has(t)}_override(t,r){void 0===r?this.__accessor__.clearOverride(t):this.__accessor__.override(t,r)}_clearOverride(t){return this.__accessor__.clearOverride(t)}_overrideIfSome(t,r){null==r?this.__accessor__.clearOverride(t):this.__accessor__.override(t,r)}_isOverridden(t){return this.__accessor__.isOverridden(t)}notifyChange(t){this.__accessor__.notifyChange(t)}_get(t){return this.__accessor__.internalGet(t)}_set(t,r){return this.__accessor__.internalSet(t,r),this}}l=Accessor_y,p=f;


/***/ }),

/***/ 904:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4596);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function r(e){e.length=0}class t{constructor(t=50,o=50){this._pool=new _ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(Array,void 0,r,o,t)}acquire(){return this._pool.acquire()}release(e){this._pool.release(e)}prune(){this._pool.prune(0)}static acquire(){return o.acquire()}static release(e){return o.release(e)}static prune(){o.prune()}}const o=new t(100);


/***/ }),

/***/ 375:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3802);
/* harmony import */ var _Message_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9290);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class s extends _Message_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z{constructor(e,t,r){if(super(e,t,r),!(this instanceof s))return new s(e,t,r)}toJSON(){if(null!=this.details)try{return{name:this.name,message:this.message,details:JSON.parse(JSON.stringify(this.details,((t,r)=>{if(r&&"object"==typeof r&&"function"==typeof r.toJSON)return r;try{return (0,_lang_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(r)}catch(s){return"[object]"}})))}}catch(r){throw _Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getLogger */ .Z.getLogger("esri.core.Error").error(r),r}return{name:this.name,message:this.message,details:this.details}}static fromJSON(e){return new s(e.name,e.message,e.details)}}s.prototype.type="error";


/***/ }),

/***/ 9236:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ t)
});

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/iteratorUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function n(n){const o=[];return function*(){yield*o;for(const t of n)o.push(t),yield t}}function o(n,o){for(const t of n)if(null!=t&&o(t))return t}function iteratorUtils_t(n){return null!=n&&"function"==typeof n[Symbol.iterator]}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(1681);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/Handles.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t{constructor(){this._groups=new Map}destroy(){this.removeAll()}get size(){let r=0;return this._groups.forEach((e=>{r+=e.length})),r}add(e,t){if(iteratorUtils_t(e)){const r=this._getOrCreateGroup(t);for(const t of e)this._isHandle(t)&&r.push(t)}else if(this._isHandle(e)){this._getOrCreateGroup(t).push(e)}return this}forEach(r,e){if("function"==typeof r)this._groups.forEach((e=>e.forEach(r)));else{const t=this._getGroup(r);t&&e&&t.forEach(e)}}has(r){return this._groups.has(this._ensureGroupKey(r))}remove(e){if("string"!=typeof e&&iteratorUtils_t(e)){for(const r of e)this.remove(r);return this}return this.has(e)?(this._removeAllFromGroup(this._getGroup(e)),this._groups.delete(this._ensureGroupKey(e)),this):this}removeAll(){return this._groups.forEach((r=>this._removeAllFromGroup(r))),this._groups.clear(),this}_isHandle(r){return r&&!!r.remove}_getOrCreateGroup(r){if(this.has(r))return this._getGroup(r);const e=[];return this._groups.set(this._ensureGroupKey(r),e),e}_getGroup(r){return (0,maybe/* assumeNonNull */.j0)(this._groups.get(this._ensureGroupKey(r)))}_ensureGroupKey(r){return r||"_default_"}_removeAllFromGroup(r){r.forEach((r=>r.remove()))}}


/***/ }),

/***/ 4678:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "wq": () => (/* binding */ JSONSupport_l)
});

// UNUSED EXPORTS: JSONSupportMixin, isJSONSupport

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(6663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(8378);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(1681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js + 1 modules
var lang = __webpack_require__(186);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js
var PropertyOrigin = __webpack_require__(5943);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/accessorSupport/DefaultsStore.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class DefaultsStore_s{constructor(){this._values=new Map,this.multipleOriginsSupported=!1}clone(e){const t=new DefaultsStore_s;return this._values.forEach(((s,r)=>{e&&e.has(r)||t.set(r,(0,lang/* clone */.d9)(s.value),s.origin)})),t}get(i,e){e=this._normalizeOrigin(e);const s=this._values.get(i);return null==e||s?.origin===e?s?.value:void 0}originOf(i){return this._values.get(i)?.origin??PropertyOrigin/* OriginId.USER */.s3.USER}keys(i){i=this._normalizeOrigin(i);const e=[...this._values.keys()];return null==i?e:e.filter((e=>this._values.get(e)?.origin===i))}set(i,s,r){if((r=this._normalizeOrigin(r))===PropertyOrigin/* OriginId.DEFAULTS */.s3.DEFAULTS){const e=this._values.get(i);if(e&&null!=e.origin&&e.origin>r)return}this._values.set(i,new t(s,r))}delete(i,e){null!=(e=this._normalizeOrigin(e))&&this._values.get(i)?.origin!==e||this._values.delete(i)}has(i,e){return null!=(e=this._normalizeOrigin(e))?this._values.get(i)?.origin===e:this._values.has(i)}forEach(i){this._values.forEach((({value:e},s)=>i(e,s)))}_normalizeOrigin(i){if(null!=i)return i===PropertyOrigin/* OriginId.DEFAULTS */.s3.DEFAULTS?i:PropertyOrigin/* OriginId.USER */.s3.USER}}class t{constructor(i,e){this.value=i,this.origin=e}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/accessorSupport/defaultsStoreUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e(e,r,n){r.keys().forEach((e=>{n.set(e,r.get(e),PropertyOrigin/* OriginId.DEFAULTS */.s3.DEFAULTS)}));const o=e.metadatas;Object.keys(o).forEach((r=>{e.internalGet(r)&&n.set(r,e.internalGet(r),PropertyOrigin/* OriginId.DEFAULTS */.s3.DEFAULTS)}))}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/get.js
var get = __webpack_require__(1777);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/utils.js
var utils = __webpack_require__(5620);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty.js + 6 modules
var serializableProperty = __webpack_require__(5034);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/accessorSupport/read.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function read_s(e,r,n){if(!e||!e.read||!1===e.read.enabled||!e.read.source)return!1;const o=e.read.source;if("string"==typeof o){if(o===r)return!0;if(o.includes(".")&&0===o.indexOf(r)&&(0,get/* exists */.Gg)(o,n))return!0}else for(const s of o){if(s===r)return!0;if(s.includes(".")&&0===s.indexOf(r)&&(0,get/* exists */.Gg)(s,n))return!0}return!1}function i(e){return e&&(!e.read||!1!==e.read.enabled&&!e.read.source)}function a(e,t,r,o,a){let f=(0,serializableProperty/* originSpecificReadPropertyDefinition */.HS)(t[r],a);i(f)&&(e[r]=!0);for(const i of Object.getOwnPropertyNames(t))f=(0,serializableProperty/* originSpecificReadPropertyDefinition */.HS)(t[i],a),read_s(f,r,o)&&(e[i]=!0)}function f(e,t,r,n){const s=r.metadatas,i=(0,serializableProperty/* originSpecificPropertyDefinition */.hk)(s[t],"any",n),a=i&&i.default;if(void 0===a)return;const f="function"==typeof a?a.call(e,t,n):a;void 0!==f&&r.set(t,f)}const c={origin:"service"};function read_u(t,o,s=c){if(!o||"object"!=typeof o)return;const i=(0,utils/* getProperties */.vw)(t),u=i.metadatas,d={};for(const e of Object.getOwnPropertyNames(o))a(d,u,e,o,s);i.setDefaultOrigin(s.origin);for(const r of Object.getOwnPropertyNames(d)){const a=(0,serializableProperty/* originSpecificReadPropertyDefinition */.HS)(u[r],s).read,f=a&&a.source;let c;c=f&&"string"==typeof f?(0,get/* valueOf */.$z)(o,f):o[r],a&&a.reader&&(c=a.reader.call(t,c,o,s)),void 0!==c&&i.set(r,c)}if(!s||!s.ignoreDefaults){i.setDefaultOrigin("defaults");for(const e of Object.getOwnPropertyNames(u))d[e]||f(t,e,i,s)}i.setDefaultOrigin("user")}function d(e,t,r,n=c){const o={...n,messages:[]};r(o),o.messages?.forEach((t=>{"warning"!==t.type||e.loaded?n&&n.messages&&n.messages.push(t):e.loadWarnings.push(t)}))}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js + 1 modules
var arrayUtils = __webpack_require__(5418);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var core_Error = __webpack_require__(375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(3802);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/accessorSupport/write.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function write_a(r,e,t,i,o){const n={};return e.write?.writer?.call(r,i,n,t,o),n}function write_f(r,i,s,u,l,a){if(!u||!u.write)return!1;const f=r.get(s);if(!l&&u.write.overridePolicy){const e=u.write.overridePolicy.call(r,f,s,a);void 0!==e&&(l=e)}if(l||(l=u.write),!l||!1===l.enabled)return!1;if((null===f&&!l.allowNull&&!l.writerEnsuresNonNull||void 0===f)&&l.isRequired){const i=new core_Error/* default */.Z("web-document-write:property-required",`Missing value for required property '${s}' on '${r.declaredClass}'`,{propertyName:s,target:r});return i&&a&&a.messages?a.messages.push(i):i&&!a&&Logger/* default.getLogger */.Z.getLogger("esri.core.accessorSupport.write").error(i.name,i.message),!1}if(void 0===f)return!1;if(null===f&&!l.allowNull&&!l.writerEnsuresNonNull)return!1;if((!i.store.multipleOriginsSupported||i.store.originOf(s)===PropertyOrigin/* OriginId.DEFAULTS */.s3.DEFAULTS)&&p(r,s,a,u,f))return!1;if(!l.ignoreOrigin&&a&&a.origin&&i.store.multipleOriginsSupported){if(i.store.originOf(s)<(0,PropertyOrigin/* nameToId */.M9)(a.origin))return!1}return!0}function p(e,t,i,o,n){const s=o.default;if(void 0===s)return!1;if(null!=o.defaultEquals)return o.defaultEquals(n);if("function"==typeof s){if(Array.isArray(n)){const o=s.call(e,t,i);return (0,arrayUtils/* equals */.fS)(o,n)}return!1}return s===n}function g(r,e,t,i){const o=s(r),n=o.metadatas,u=l(n[e],i);return!!u&&write_f(r,o,e,u,t,i)}function write_c(r,e,t){if(r&&"function"==typeof r.toJSON&&(!r.toJSON.isDefaultToJSON||!r.write))return (0,utils/* merge */.TS)(e,r.toJSON(t));const o=(0,utils/* getProperties */.vw)(r),n=o.metadatas;for(const s in n){const p=(0,serializableProperty/* originSpecificWritePropertyDefinition */.Ah)(n[s],t);if(!write_f(r,o,s,p,void 0,t))continue;const g=r.get(s),c=write_a(r,p,p.write&&"string"==typeof p.write.target?p.write.target:s,g,t);Object.keys(c).length>0&&(e=(0,utils/* merge */.TS)(e,c),t?.resources?.pendingOperations?.length&&Promise.all(t.resources.pendingOperations).then((()=>(0,utils/* merge */.TS)(e,c))),t&&t.writtenProperties&&t.writtenProperties.push({target:r,propName:s,oldOrigin:(0,PropertyOrigin/* idToReadableName */.Wm)(o.store.originOf(s)),newOrigin:t.origin}))}return e}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(266);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const u=t=>{let u=class extends t{constructor(...r){super(...r);const t=(0,maybe/* assumeNonNull */.j0)((0,utils/* getProperties */.vw)(this)),i=t.store,p=new DefaultsStore_s;t.store=p,e(t,i,p)}read(r,t){read_u(this,r,t)}write(r={},t){return write_c(this,r,t)}toJSON(r){return this.write({},r)}static fromJSON(r,t){return n.call(this,r,t)}};return u=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.core.JSONSupport")],u),u.prototype.toJSON.isDefaultToJSON=!0,u};function n(r,t){if(!r)return null;if(r.declaredClass)throw new Error("JSON object is already hydrated");const s=new this;return s.read(r,t),s}function m(r){return r&&"read"in r&&"write"in r&&"toJSON"in r}let JSONSupport_l=class extends(u(Accessor/* default */.Z)){};JSONSupport_l=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.core.JSONSupport")],JSONSupport_l);


/***/ }),

/***/ 3802:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1366);
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9994);
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1681);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1130);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const o={info:0,warn:1,error:2,none:3};class s{constructor(e){this.level=null,this._module="",this._parent=null,this.writer=null,this._loggedMessages={error:new Map,warn:new Map,info:new Map},null!=e.level&&(this.level=e.level),null!=e.writer&&(this.writer=e.writer),this._module=e.module,s._loggers[this.module]=this;const t=this.module.lastIndexOf(".");-1!==t&&(this._parent=s.getLogger(this.module.slice(0,t)))}get module(){return this._module}get parent(){return this._parent}error(...e){this._log("error","always",...e)}warn(...e){this._log("warn","always",...e)}info(...e){this._log("info","always",...e)}errorOnce(...e){this._log("error","once",...e)}warnOnce(...e){this._log("warn","once",...e)}infoOnce(...e){this._log("info","once",...e)}errorOncePerTick(...e){this._log("error","oncePerTick",...e)}warnOncePerTick(...e){this._log("warn","oncePerTick",...e)}infoOncePerTick(...e){this._log("info","oncePerTick",...e)}get test(){const e=this;return{loggedMessages:e._loggedMessages,clearLoggedWarnings:()=>e._loggedMessages.warn.clear()}}static get testSingleton(){return{resetLoggers(e={}){const t=s._loggers;return s._loggers=e,t},set throttlingDisabled(e){s._throttlingDisabled=e}}}static getLogger(e){let t=s._loggers[e];return t||(t=new s({module:e})),t}_log(t,r,...o){if(!this._matchLevel(t))return;if("always"!==r&&!s._throttlingDisabled){const e=this._argsToKey(o),n=this._loggedMessages[t].get(e);if("once"===r&&null!=n||"oncePerTick"===r&&n&&n>=s._tickCounter)return;this._loggedMessages[t].set(e,s._tickCounter),s._scheduleTickCounterIncrement()}for(const s of _config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].log.interceptors */ .Z.log.interceptors)if(s(t,this.module,...o))return;this._inheritedWriter()(t,this.module,...o)}_parentWithMember(e,r){let o=this;for(;(0,_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .isSome */ .pC)(o);){const r=o[e];if((0,_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .isSome */ .pC)(r))return r;o=o.parent}return r}_inheritedWriter(){return this._parentWithMember("writer",this._consoleWriter)}_consoleWriter(e,t,...r){console[e](`[${t}]`,...r)}_matchLevel(t){const r=_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].log.level */ .Z.log.level?_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].log.level */ .Z.log.level:"warn";return o[this._parentWithMember("level",r)]<=o[t]}_argsToKey(...e){const t=(e,t)=>"object"!=typeof t||Array.isArray(t)?t:"[Object]";return (0,_string_js__WEBPACK_IMPORTED_MODULE_2__/* .numericHash */ .hP)(JSON.stringify(e,t))}static _scheduleTickCounterIncrement(){s._tickCounterScheduled||(s._tickCounterScheduled=!0,Promise.resolve().then((()=>{s._tickCounter++,s._tickCounterScheduled=!1})))}}s._loggers={},s._tickCounter=0,s._tickCounterScheduled=!1,s._throttlingDisabled=!1;


/***/ }),

/***/ 9290:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6745);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e(e,r){return e.replace(/\$\{([^\s\:\}]*)(?:\:([^\s\:\}]+))?\}/g,((e,s)=>{if(""===s)return"$";const n=(0,_object_js__WEBPACK_IMPORTED_MODULE_0__/* .getDeepValue */ .hS)(s,r),i=n??"";if(void 0===i)throw new Error(`could not find key "${s}" in template`);return i.toString()}))}class r{constructor(t,s,n){this.name=t,this.details=n,this instanceof r&&(this.message=(s&&e(s,n))??"")}toString(){return"["+this.name+"]: "+this.message}}


/***/ }),

/***/ 4596:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function t(t){return t&&t.release&&"function"==typeof t.release}function i(t){return t&&t.acquire&&"function"==typeof t.acquire}class e{constructor(t,i,e,o=1,s=0){if(this._ctor=t,this._acquireFunction=i,this._releaseFunction=e,this.allocationSize=o,this._pool=new Array(s),this._initialSize=s,this._ctor)for(let n=0;n<s;n++)this._pool[n]=new this._ctor;this.allocationSize=Math.max(o,1)}destroy(){this.prune(0)}acquire(...t){let o;if(e.test.disabled)o=new this._ctor;else{if(0===this._pool.length){const t=this.allocationSize;for(let i=0;i<t;i++)this._pool[i]=new this._ctor}o=this._pool.pop()}return this._acquireFunction?this._acquireFunction(o,...t):i(o)&&o.acquire(...t),o}release(i){i&&!e.test.disabled&&(this._releaseFunction?this._releaseFunction(i):t(i)&&i.release(),this._pool.push(i))}prune(t=this._initialSize){if(!(t>=this._pool.length)){for(let i=t;i<this._pool.length;++i){const t=this._pool[i];this._dispose(t)}this._pool.length=t}}_dispose(t){t.dispose&&"function"==typeof t.dispose&&t.dispose()}}e.test={disabled:!1};


/***/ }),

/***/ 5943:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M9": () => (/* binding */ t),
/* harmony export */   "Wm": () => (/* binding */ c),
/* harmony export */   "s3": () => (/* binding */ r),
/* harmony export */   "x3": () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports OriginIdNum, idToWritableName, readableNameToId, writableNameToId */
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1681);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var r;!function(e){e[e.DEFAULTS=0]="DEFAULTS",e[e.COMPUTED=1]="COMPUTED",e[e.SERVICE=2]="SERVICE",e[e.PORTAL_ITEM=3]="PORTAL_ITEM",e[e.WEB_SCENE=4]="WEB_SCENE",e[e.WEB_MAP=5]="WEB_MAP",e[e.USER=6]="USER"}(r||(r={}));const E=r.USER+1;function t(e){switch(e){case"defaults":return r.DEFAULTS;case"service":return r.SERVICE;case"portal-item":return r.PORTAL_ITEM;case"web-scene":return r.WEB_SCENE;case"web-map":return r.WEB_MAP;case"user":return r.USER;default:return null}}function n(E){switch(E){case r.DEFAULTS:return"defaults";case r.SERVICE:return"service";case r.PORTAL_ITEM:return"portal-item";case r.WEB_SCENE:return"web-scene";case r.WEB_MAP:return"web-map";case r.USER:return"user"}return (0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .assumeNonNull */ .j0)(void 0)}function u(e){return t(e)}function c(e){return n(e)}function s(e){return t(e)}function a(e){return n(e)}


/***/ }),

/***/ 2003:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _ensureType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1453);
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1610);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const r=Object.prototype.toString;function o(n){const r="__accessorMetadata__"in n?(0,_ensureType_js__WEBPACK_IMPORTED_MODULE_0__/* .ensureType */ .se)(n):n;return function(...t){if(t.push(r),"number"==typeof t[2])throw new Error("Using @cast has parameter decorator is not supported since 4.16");return e.apply(this,t)}}function e(t,r,o,e){(0,_metadata_js__WEBPACK_IMPORTED_MODULE_1__/* .getOwnPropertyMetadata */ .VZ)(t,r).cast=e}function i(t){return(r,o)=>{(0,_metadata_js__WEBPACK_IMPORTED_MODULE_1__/* .getOwnPropertyMetadata */ .VZ)(r,t).cast=r[o]}}function s(...t){if(3!==t.length||"string"!=typeof t[1])return 1===t.length&&"[object Function]"===r.call(t[0])?o(t[0]):1===t.length&&"string"==typeof t[0]?i(t[0]):void 0}


/***/ }),

/***/ 1977:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CJ": () => (/* binding */ d),
/* harmony export */   "Cb": () => (/* binding */ y)
/* harmony export */ });
/* unused harmony export ensureRange */
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3802);
/* harmony import */ var _ensureType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1453);
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1777);
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1610);
/* harmony import */ var _set_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3156);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function y(n={}){return(o,s)=>{if(o===Function.prototype)throw new Error(`Inappropriate use of @property() on a static field: ${o.name}.${s}. Accessor does not support static properties.`);const i=Object.getOwnPropertyDescriptor(o,s),a=(0,_metadata_js__WEBPACK_IMPORTED_MODULE_3__/* .getOwnPropertyMetadata */ .VZ)(o,s);i&&(i.get||i.set?(a.get=i.get||a.get,a.set=i.set||a.set):"value"in i&&("value"in n&&_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getLogger */ .Z.getLogger("esri.core.accessorSupport.decorators.property").warn(`@property() will redefine the value of "${s}" on "${o.constructor.name}" already defined in the metadata`,n),a.value=n.value=i.value)),null!=n.readOnly&&(a.readOnly=n.readOnly);const p=n.aliasOf;if(p){const t="string"==typeof p?p:p.source,e="string"==typeof p?null:!0===p.overridable;let r;a.dependsOn=[t],a.get=function(){let e=(0,_get_js__WEBPACK_IMPORTED_MODULE_2__/* .get */ .U2)(this,t);if("function"==typeof e){r||(r=t.split(".").slice(0,-1).join("."));const n=(0,_get_js__WEBPACK_IMPORTED_MODULE_2__/* .get */ .U2)(this,r);n&&(e=e.bind(n))}return e},a.readOnly||(a.set=e?function(t){this._override(s,t)}:function(e){(0,_set_js__WEBPACK_IMPORTED_MODULE_4__/* .set */ .t)(this,t,e)})}const u=n.type,c=n.types;a.cast||(u?a.cast=h(u):c&&(Array.isArray(c)?a.cast=(0,_ensureType_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureArrayTyped */ .Ls)((0,_ensureType_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureOneOfType */ .N7)(c[0])):a.cast=(0,_ensureType_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureOneOfType */ .N7)(c))),(0,_metadata_js__WEBPACK_IMPORTED_MODULE_3__/* .mergeProperty */ .tz)(a,n),n.range&&(a.cast=j(a.cast,n.range))}}function d(t,e,r){const n=(0,_metadata_js__WEBPACK_IMPORTED_MODULE_3__/* .getOwnPropertyMetadata */ .VZ)(t,r);n.json||(n.json={});let o=n.json;return void 0!==e&&(o.origins||(o.origins={}),o.origins[e]||(o.origins[e]={}),o=o.origins[e]),o}function h(t){let e=0,r=t;if((0,_ensureType_js__WEBPACK_IMPORTED_MODULE_1__/* .isLongFormType */ .AY)(t))return (0,_ensureType_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureLongFormType */ .sY)(t);for(;Array.isArray(r)&&1===r.length&&"string"!=typeof r[0]&&"number"!=typeof r[0];)r=r[0],e++;const f=r;if((0,_ensureType_js__WEBPACK_IMPORTED_MODULE_1__/* .isOneOf */ .gB)(f))return 0===e?(0,_ensureType_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureOneOf */ .i$)(f):(0,_ensureType_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureNArrayTyped */ .Iu)((0,_ensureType_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureOneOf */ .i$)(f),e);if(1===e)return (0,_ensureType_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureArray */ .rY)(f);if(e>1)return (0,_ensureType_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureNArray */ .di)(f,e);const l=t;return l.from?l.from:(0,_ensureType_js__WEBPACK_IMPORTED_MODULE_1__/* .ensureType */ .se)(l)}function j(t,e){return r=>{let n=+t(r);return null!=e.step&&(n=Math.round(n/e.step)*e.step),null!=e.min&&(n=Math.max(e.min,n)),null!=e.max&&(n=Math.min(e.max,n)),n}}


/***/ }),

/***/ 266:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ n)
/* harmony export */ });
/* unused harmony export finalizeClass */
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9994);
/* harmony import */ var _interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6175);
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1610);
/* harmony import */ var _tracking_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5860);
/* harmony import */ var _extensions_serializableProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5034);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const s=new Set,i=new Set;function n(e){return r=>{r.prototype.declaredClass=e,c(r);const o=[],n=[];let a=r.prototype;for(;a;)a.hasOwnProperty("initialize")&&!s.has(a.initialize)&&(s.add(a.initialize),o.push(a.initialize)),a.hasOwnProperty("destroy")&&!i.has(a.destroy)&&(i.add(a.destroy),n.push(a.destroy)),a=Object.getPrototypeOf(a);s.clear(),i.clear();class l extends r{constructor(...e){if(super(...e),this.constructor===l&&"function"==typeof this.postscript){if(o.length&&Object.defineProperty(this,"initialize",{enumerable:!1,configurable:!0,value(){for(let e=o.length-1;e>=0;e--)o[e].call(this)}}),n.length){let e=!1;Object.defineProperty(this,"destroy",{enumerable:!1,configurable:!0,value(){if(!e){e=!0;for(let e=0;e<n.length;e++)n[e].call(this)}}})}this.postscript(...e)}}}return l.__accessorMetadata__=(0,_metadata_js__WEBPACK_IMPORTED_MODULE_2__/* .getOwnClassMetadata */ .JT)(r.prototype),l.prototype.declaredClass=e,l}}function a(e,t){return null==t.get?function(){const t=this.__accessor__.properties.get(e);if(void 0===t)return;(0,_tracking_js__WEBPACK_IMPORTED_MODULE_3__/* .trackAccess */ .it)(t);const o=this.__accessor__.store;return o.has(e)?o.get(e):t.metadata.value}:function(){const t=this.__accessor__.properties.get(e);if(void 0!==t)return t.getComputed()}}function c(r){const s=r.prototype,i=(0,_metadata_js__WEBPACK_IMPORTED_MODULE_2__/* .getOwnClassMetadata */ .JT)(s).properties,n={};for(const t of Object.getOwnPropertyNames(i)){const r=i[t];(0,_extensions_serializableProperty_js__WEBPACK_IMPORTED_MODULE_4__/* .processPrototypePropertyMetadata */ .OM)(r),n[t]={enumerable:!0,configurable:!0,get:a(t,r),set(o){const s=this.__accessor__;if(void 0!==s){if(!Object.isFrozen(this)){if(s.initialized&&r.readOnly)throw new TypeError(`[accessor] cannot assign to read-only property '${t}' of ${this.declaredClass}`);if(s.lifecycle===_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .Lifecycle.CONSTRUCTED */ .F.CONSTRUCTED&&r.constructOnly)throw new TypeError(`[accessor] cannot assign to construct-only property '${t}' of ${this.declaredClass}`);s.set(t,o)}}else Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:o})}}}Object.defineProperties(r.prototype,n)}


/***/ }),

/***/ 1453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z8": () => (/* binding */ T),
  "rY": () => (/* binding */ w),
  "Ls": () => (/* binding */ m),
  "sY": () => (/* binding */ B),
  "di": () => (/* binding */ j),
  "Iu": () => (/* binding */ $),
  "q9": () => (/* binding */ a),
  "i$": () => (/* binding */ M),
  "N7": () => (/* binding */ S),
  "se": () => (/* binding */ b),
  "AY": () => (/* binding */ _),
  "gB": () => (/* binding */ k)
});

// UNUSED EXPORTS: ensureBoolean, ensureClass, ensureDate, ensureInteger, ensureString, isClassedType, requiresType, types

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(9994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(3802);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/MapUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function n(n,t){for(const[r,o]of n)if(t(o,r))return!0;return!1}function t(n,t){for(const[r,o]of n)if(t(o,r))return o;return null}function r(n,t,r){const o=n.get(t);if(void 0!==o)return o;const u=r();return n.set(t,u),u}function o(n){const t=n.values().next();return!0!==t.done?t.value:null}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const ensureType_r=Logger/* default.getLogger */.Z.getLogger("esri.core.accessorSupport.ensureTypes");function ensureType_t(e){return null==e?e:new Date(e)}function ensureType_o(e){return null==e?e:!!e}function u(e){return null==e?e:e.toString()}function a(e){return null==e?e:(e=parseFloat(e),isNaN(e)?0:e)}function s(e){return null==e?e:Math.round(parseFloat(e))}function i(e){return e&&e.constructor&&void 0!==e.constructor.__accessorMetadata__}function l(e,n){return null!=n&&e&&!(n instanceof e)}function c(e){return e&&"isCollection"in e}function f(e){return e&&e.Type?"function"==typeof e.Type?e.Type:e.Type.base:null}function p(e,n){if(!n||!n.constructor||!c(n.constructor))return y(e,n)?n:new e(n);const r=f(e.prototype.itemType),t=f(n.constructor.prototype.itemType);return r?t?r===t?n:r.prototype.isPrototypeOf(t.prototype)?new e(n):(y(e,n),n):new e(n):n}function y(e,n){return!!i(n)&&(ensureType_r.error("Accessor#set","Assigning an instance of '"+(n.declaredClass||"unknown")+"' which is not a subclass of '"+g(e)+"'"),!0)}function v(e,n){return null==n?n:c(e)?p(e,n):l(e,n)?y(e,n)?n:new e(n):n}function g(e){return e&&e.prototype&&e.prototype.declaredClass||"unknown"}const d=new WeakMap;function h(e){switch(e){case Number:return a;case T:return s;case Boolean:return ensureType_o;case String:return u;case Date:return ensureType_t;default:return r(d,e,(()=>v.bind(null,e)))}}function b(e,n){const r=h(e);return 1===arguments.length?r:r(n)}function m(e,n,r){return 1===arguments.length?m.bind(null,e):n?Array.isArray(n)?n.map((n=>e(n,r))):[e(n,r)]:n}function w(e,n){return 1===arguments.length?m(b.bind(null,e)):m(b.bind(null,e),n)}function A(e,n,r){return 0!==n&&Array.isArray(r)?r.map((r=>A(e,n-1,r))):e(r)}function $(e,n,r){if(2===arguments.length)return $.bind(null,e,n);if(!r)return r;let t=n,o=r=A(e,n,r);for(;t>0&&Array.isArray(o);)t--,o=o[0];if(void 0!==o)for(let u=0;u<t;u++)r=[r];return r}function j(e,n,r){return 2===arguments.length?$(b.bind(null,e),n):$(b.bind(null,e),n,r)}function k(e){return!!Array.isArray(e)&&!e.some((n=>{const r=typeof n;return!("string"===r||"number"===r||"function"===r&&e.length>1)}))}function M(e,n){if(2===arguments.length)return M(e).call(null,n);const t=new Set,o=e.filter((e=>"function"!=typeof e)),u=e.filter((e=>"function"==typeof e));for(const r of e)"string"!=typeof r&&"number"!=typeof r||t.add(r);let a=null,s=null;return(e,n)=>{if(null==e)return e;const i=typeof e,c="string"===i||"number"===i;return c&&(t.has(e)||u.some((e=>"string"===i&&e===String||"number"===i&&e===Number)))||"object"===i&&u.some((n=>!l(e,n)))?e:(c&&o.length?(a||(a=o.map((e=>"string"==typeof e?`'${e}'`:`${e}`)).join(", ")),ensureType_r.error("Accessor#set",`'${e}' is not a valid value for this property, only the following values are valid: ${a}`)):"object"==typeof e&&u.length?(s||(s=u.map((e=>g(e))).join(", ")),ensureType_r.error("Accessor#set",`'${e}' is not a valid value for this property, value must be one of ${s}`)):ensureType_r.error("Accessor#set",`'${e}' is not a valid value for this property`),n&&(n.valid=!1),null)}}function S(e,n){if(2===arguments.length)return S(e).call(null,n);const t={},o=[],u=[];for(const r in e.typeMap){const n=e.typeMap[r];t[r]=b(n),o.push(g(n)),u.push(r)}const a=()=>`'${o.join("', '")}'`,s=()=>`'${u.join("', '")}'`,c="string"==typeof e.key?n=>n[e.key]:e.key;return n=>{if(e.base&&!l(e.base,n))return n;if(null==n)return n;const o=c(n)||e.defaultKeyValue,u=t[o];if(!u)return ensureType_r.error("Accessor#set",`Invalid property value, value needs to be one of ${a()}, or a plain object that can autocast (having .type = ${s()})`),null;if(!l(e.typeMap[o],n))return n;if("string"==typeof e.key&&!i(n)){const r={};for(const t in n)t!==e.key&&(r[t]=n[t]);return u(r)}return u(n)}}class T{}const N={native:e=>({type:"native",value:e}),array:e=>({type:"array",value:e}),oneOf:e=>({type:"one-of",values:e})};function _(e){if(!e||!("type"in e))return!1;switch(e.type){case"native":case"array":case"one-of":return!0}return!1}function B(e){switch(e.type){case"native":return b(e.value);case"array":return m(B(e.value));case"one-of":return C(e);default:return null}}function C(e){let n=null;return(t,o)=>F(t,e)?t:(null==n&&(n=D(e)),ensureType_r.error("Accessor#set",`Invalid property value, value needs to be of type ${n}`),o&&(o.valid=!1),null)}function D(e){switch(e.type){case"native":switch(e.value){case Number:return"number";case String:return"string";case Boolean:return"boolean";case T:return"integer";case Date:return"date";default:return g(e.value)}case"array":return`array of ${D(e.value)}`;case"one-of":{const n=e.values.map((e=>D(e)));return`one of ${n.slice(0,n.length-1)} or ${n[n.length-1]}`}}return"unknown"}function F(e,n){if(null==e)return!0;switch(n.type){case"native":switch(n.value){case Number:case T:return"number"==typeof e;case Boolean:return"boolean"==typeof e;case String:return"string"==typeof e}return e instanceof n.value;case"array":return!!Array.isArray(e)&&!e.some((e=>!F(e,n.value)));case"one-of":return n.values.some((n=>F(e,n)))}}


/***/ }),

/***/ 5034:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "hk": () => (/* binding */ serializableProperty_a),
  "HS": () => (/* binding */ t),
  "Ah": () => (/* binding */ serializableProperty_s),
  "OM": () => (/* binding */ serializableProperty_c)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js + 1 modules
var ensureType = __webpack_require__(1453);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/originAliases.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function n(n){if(n.json&&n.json.origins){const o=n.json.origins,e={"web-document":["web-scene","web-map"]};for(const n in e)if(o[n]){const s=o[n];e[n].forEach((n=>{o[n]=s})),delete o[n]}}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(3802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(6745);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Message.js
var Message = __webpack_require__(9290);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/Warning.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class Warning_t extends Message/* default */.Z{constructor(e,s,r){if(super(e,s,r),!(this instanceof Warning_t))return new Warning_t(e,s,r)}}Warning_t.prototype.type="warning";

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/metadata.js
var metadata = __webpack_require__(1610);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/type.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function type_e(e){return!!e&&e.prototype&&e.prototype.declaredClass&&0===e.prototype.declaredClass.indexOf("esri.core.Collection")}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/reader.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const i=Logger/* default.getLogger */.Z.getLogger("esri.core.accessorSupport.extensions.serializableProperty.reader");function p(t,r,n){t&&(!n&&!r.read||r.read?.reader||!1===r.read?.enabled||l(t)&&(0,object/* setDeepValue */.RB)("read.reader",s(t),r))}function s(t){const e=t.ndimArray??0;if(e>1)return c(t);if(1===e)return a(t);if("type"in t&&d(t.type)){const e=t.type.prototype?.itemType?.Type,r=a("function"==typeof e?{type:e}:{types:e});return(e,n,o)=>{const i=r(e,n,o);return i?new t.type(i):i}}return u(t)}function u(t){return"type"in t?y(t.type):g(t.types)}function y(t){return t.prototype.read?(e,r,n)=>{if(null==e)return e;const o=typeof e;if("object"!==o)return void i.error(`Expected JSON value of type 'object' to deserialize type '${t.prototype.declaredClass}', but got '${o}'`);const p=new t;return p.read(e,n),p}:t.fromJSON}function f(t,e,r,n){return 0!==n&&Array.isArray(e)?e.map((e=>f(t,e,r,n-1))):t(e,void 0,r)}function c(t){const e=u(t),r=f.bind(null,e),n=t.ndimArray??0;return(t,e,o)=>{if(null==t)return t;t=r(t,o,n);let i=n,p=t;for(;i>0&&Array.isArray(p);)i--,p=p[0];if(void 0!==p)for(let r=0;r<i;r++)t=[t];return t}}function a(t){const e=u(t);return(t,r,n)=>{if(null==t)return t;if(Array.isArray(t)){const r=[];for(const o of t){const t=e(o,void 0,n);void 0!==t&&r.push(t)}return r}const o=e(t,void 0,n);return void 0!==o?[o]:void 0}}function d(t){if(!type_e(t))return!1;const e=t.prototype.itemType;return!(!e||!e.Type)&&("function"==typeof e.Type?m(e.Type):j(e.Type))}function l(t){return"types"in t?j(t.types):m(t.type)}function m(t){return!Array.isArray(t)&&(!!t&&t.prototype&&("read"in t.prototype||"fromJSON"in t||d(t)))}function j(t){for(const e in t.typeMap){if(!m(t.typeMap[e]))return!1}return!0}function g(t){let e=null;const n=t.errorContext??"type";return(o,p,s)=>{if(null==o)return o;const u=typeof o;if("object"!==u)return void i.error(`Expected JSON value of type 'object' to deserialize, but got '${u}'`);e||(e=v(t));const y=t.key;if("string"!=typeof y)return;const f=o[y],c=f?e[f]:t.defaultKeyValue?t.typeMap[t.defaultKeyValue]:void 0;if(!c){const t=`Type '${f||"unknown"}' is not supported`;return s&&s.messages&&o&&s.messages.push(new Warning_t(`${n}:unsupported`,t,{definition:o,context:s})),void i.error(t)}const a=new c;return a.read(o,s),a}}function v(t){const e={};for(const r in t.typeMap){const o=t.typeMap[r],i=(0,metadata/* getOwnClassMetadata */.JT)(o.prototype);if("function"==typeof t.key)continue;const p=i.properties[t.key];if(!p)continue;p.json?.type&&Array.isArray(p.json.type)&&1===p.json.type.length&&"string"==typeof p.json.type[0]&&(e[p.json.type[0]]=o);const s=p.json?.write;if(!s||!s.writer){e[r]=o;continue}const u=s.target,y="string"==typeof u?u:t.key,f={};s.writer(r,f,y),f[y]&&(e[f[y]]=o)}return e}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/shorthands.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e(e){if(e.json||(e.json={}),o(e.json),shorthands_n(e.json),r(e.json),e.json.origins)for(const t in e.json.origins)o(e.json.origins[t]),shorthands_n(e.json.origins[t]),r(e.json.origins[t]);return!0}function r(e){e.name&&(e.read&&"object"==typeof e.read?void 0===e.read.source&&(e.read.source=e.name):e.read={source:e.name},e.write&&"object"==typeof e.write?void 0===e.write.target&&(e.write.target=e.name):e.write={target:e.name})}function o(e){"boolean"==typeof e.read?e.read={enabled:e.read}:"function"==typeof e.read?e.read={enabled:!0,reader:e.read}:e.read&&"object"==typeof e.read&&void 0===e.read.enabled&&(e.read.enabled=!0)}function shorthands_n(e){"boolean"==typeof e.write?e.write={enabled:e.write}:"function"==typeof e.write?e.write={enabled:!0,writer:e.write}:e.write&&"object"==typeof e.write&&void 0===e.write.enabled&&(e.write.enabled=!0)}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(375);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/writer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function writer_i(r,e){if(!e.write||e.write.writer||!1===e.write.enabled&&!e.write.overridePolicy)return;const t=r?.ndimArray??0;r&&(1===t||"type"in r&&type_e(r.type))?e.write.writer=writer_a:t>1?e.write.writer=writer_l(t):e.types?Array.isArray(e.types)?e.write.writer=writer_f(e.types[0]):e.write.writer=writer_o(e.types):e.write.writer=writer_s}function writer_o(r){return(e,t,n,i)=>e?writer_u(e,r,i)?writer_s(e,t,n,i):void 0:writer_s(e,t,n,i)}function writer_u(t,n,i){for(const r in n.typeMap)if(t instanceof n.typeMap[r])return!0;if(i?.messages){const o=n.errorContext??"type",u=`Values of type '${("function"!=typeof n.key?t[n.key]:t.declaredClass)??"Unknown"}' cannot be written`;i&&i.messages&&t&&i.messages.push(new Error/* default */.Z(`${o}:unsupported`,u,{definition:t,context:i})),Logger/* default.getLogger */.Z.getLogger("esri.core.accessorSupport.extensions.serializableProperty.writer").error(u)}return!1}function writer_f(r){return(e,t,n,i)=>{if(!e||!Array.isArray(e))return writer_s(e,t,n,i);return writer_s(e.filter((e=>writer_u(e,r,i))),t,n,i)}}function writer_s(r,e,n,i){(0,object/* setDeepValue */.RB)(n,writer_p(r,i),e)}function writer_p(r,e){return r&&"function"==typeof r.write?r.write({},e):r&&"function"==typeof r.toJSON?r.toJSON():"number"==typeof r?writer_y(r):r}function writer_y(r){return r===-1/0?-Number.MAX_VALUE:r===1/0?Number.MAX_VALUE:isNaN(r)?null:r}function writer_a(r,e,n,i){let o;null===r?o=null:r&&"function"==typeof r.map?(o=r.map((r=>writer_p(r,i))),"function"==typeof o.toArray&&(o=o.toArray())):o=[writer_p(r,i)],(0,object/* setDeepValue */.RB)(n,o,e)}function writer_c(r,e,t){return 0!==t&&Array.isArray(r)?r.map((r=>writer_c(r,e,t-1))):writer_p(r,e)}function writer_l(r){return(e,n,i,o)=>{let u;if(null===e)u=null;else{u=writer_c(e,o,r);let t=r,n=u;for(;t>0&&Array.isArray(n);)t--,n=n[0];if(void 0!==n)for(let r=0;r<t;r++)u=[u]}(0,object/* setDeepValue */.RB)(i,u,n)}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function t(r,n){return serializableProperty_a(r,"read",n)}function serializableProperty_s(r,n){return serializableProperty_a(r,"write",n)}function serializableProperty_a(r,n,i){let e=r&&r.json;if(r&&r.json&&r.json.origins&&i){const o=i.origin&&r.json.origins[i.origin];o&&("any"===n||n in o)&&(e=o)}return e}function serializableProperty_p(r){const n=serializableProperty_y(r);if(r.json.origins)for(const e in r.json.origins){const t=r.json.origins[e],s=t.types?serializableProperty_f(t):n;p(s,t,!1),t.types&&!t.write&&r.json.write&&r.json.write.enabled&&(t.write={...r.json.write}),writer_i(s,t)}p(n,r.json,!0),writer_i(n,r.json)}function serializableProperty_y(r){return r.json.types?serializableProperty_u(r.json):r.type?serializableProperty_j(r):serializableProperty_u(r)}function serializableProperty_f(r){return r.type?serializableProperty_j(r):serializableProperty_u(r)}function serializableProperty_j(n){if(!n.type)return;let i=0,e=n.type;for(;Array.isArray(e)&&!(0,ensureType/* isOneOf */.gB)(e);)e=e[0],i++;return{type:e,ndimArray:i}}function serializableProperty_u(r){if(!r.types)return;let n=0,i=r.types;for(;Array.isArray(i);)i=i[0],n++;return{types:i,ndimArray:n}}function serializableProperty_c(r){e(r)&&(n(r),serializableProperty_p(r))}


/***/ }),

/***/ 1777:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$z": () => (/* binding */ u),
/* harmony export */   "Gg": () => (/* binding */ s),
/* harmony export */   "U2": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5620);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e(t,e){const i="?"===t[t.length-1]?t.slice(0,-1):t;if(null!=e.getItemAt||Array.isArray(e)){const t=parseInt(i,10);if(!isNaN(t))return Array.isArray(e)?e[t]:e.getItemAt(t)}const u=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getProperties */ .vw)(e);return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPropertyDeclared */ .b6)(u,i)?u.get(i):e[i]}function i(t,n,r){if(null==t)return t;const u=e(n[r],t);return!u&&r<n.length-1?void 0:r===n.length-1?u:i(u,n,r+1)}function u(n,r,u=0){return"string"!=typeof r||r.includes(".")?i(n,(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .pathToArray */ .NI)(r),u):e(r,n)}function o(t,n){return u(t,n)}function s(t,n){return void 0!==u(n,t)}


/***/ }),

/***/ 6175:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ I)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var I;!function(I){I[I.INITIALIZING=0]="INITIALIZING",I[I.CONSTRUCTING=1]="CONSTRUCTING",I[I.CONSTRUCTED=2]="CONSTRUCTED"}(I||(I={}));


/***/ }),

/***/ 1610:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JT": () => (/* binding */ n),
/* harmony export */   "VZ": () => (/* binding */ s),
/* harmony export */   "tz": () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports ClassMetadata, getOwnPropertiesMetadata, merge, setPropertyMetadata */
/* harmony import */ var _lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1681);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5620);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class o{constructor(t){this.autoDestroy=!1,this.properties=t}}function n(r){let n=r.constructor.__accessorMetadata__;const c=Object.prototype.hasOwnProperty.call(r.constructor,"__accessorMetadata__");if(n){if(!c){const e=Object.create(n.properties),c=n.autoDestroy;for(const r in e)e[r]=(0,_lang_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(e[r]);n=new o(e),n.autoDestroy=c,Object.defineProperty(r.constructor,"__accessorMetadata__",{value:n,enumerable:!1,configurable:!0,writable:!0})}}else n=new o({}),Object.defineProperty(r.constructor,"__accessorMetadata__",{value:n,enumerable:!1,configurable:!0,writable:!0});return (0,_maybe_js__WEBPACK_IMPORTED_MODULE_2__/* .assumeNonNull */ .j0)(r.constructor.__accessorMetadata__)}function c(t){return n(t).properties}function s(t,e){const r=c(t);let o=r[e];return o||(o=r[e]={}),o}function a(t,e,r){c(t)[e]=r}function u(t,e){return r(t,e,f)}function i(t,e){return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .merge */ .TS)(t,e,_)}const p=/^(?:[^.]+\.)?(?:value|type|(?:json\.type|json\.origins\.[^.]\.type))$/;function _(t){return p.test(t)?"replace":"merge"}const l=/^properties\./;function f(t){return l.test(t)?_(t.slice(11)):"merge"}


/***/ }),

/***/ 3156:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(375);
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9994);
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3802);
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1777);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function t(o,e,s){if(o&&e)if("object"==typeof e)for(const r of Object.getOwnPropertyNames(e))t(o,r,e[r]);else{if(e.includes(".")){const n=e.split("."),i=n.splice(n.length-1,1)[0];return void t((0,_get_js__WEBPACK_IMPORTED_MODULE_3__/* .get */ .U2)(o,n),i,s)}const i=o.__accessor__;null!=i&&n(e,i),o[e]=s}}function n(r,t){if((0,_has_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("esri-unknown-property-errors")&&!e(r,t))throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("set:unknown-property",s(r,t))}function e(o,r){return null!=r.metadatas[o]}function s(o,r){return"setting unknown property '"+o+"' on instance of "+r.host.declaredClass}


/***/ }),

/***/ 5860:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GF": () => (/* binding */ y),
/* harmony export */   "LJ": () => (/* binding */ f),
/* harmony export */   "gb": () => (/* binding */ g),
/* harmony export */   "it": () => (/* binding */ s),
/* harmony export */   "mS": () => (/* binding */ m)
/* harmony export */ });
/* unused harmony export runTrackedNoThrow */
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9994);
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3802);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5620);
/* harmony import */ var _tracking_Flags_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8488);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const o={onObservableAccessed:()=>{},onTrackingEnd:()=>{}},c=[];let i=o;function s(t){i.onObservableAccessed(t)}let l=!1,a=!1;function f(t,n,e){if(l)return u(t,n,e);p(t);const r=n.call(e);return d(),r}function g(t,n){return f(o,t,n)}function u(n,e,r){const o=l;l=!0,p(n);let c=null;try{c=e.call(r)}catch(i){a&&_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getLogger */ .Z.getLogger("esri.core.accessorSupport.tracking").error(i)}return d(),l=o,c}function p(t){i=t,c.push(t)}function d(){const t=c.length;if(t>1){const n=c.pop();i=c[t-2],n.onTrackingEnd()}else if(1===t){const t=c.pop();i=o,t.onTrackingEnd()}else i=o}function m(t,n){if(n.flags&_tracking_Flags_js__WEBPACK_IMPORTED_MODULE_3__/* .Flags.DepTrackingInitialized */ .v.DepTrackingInitialized)return;const e=a;a=!1,n.flags&_tracking_Flags_js__WEBPACK_IMPORTED_MODULE_3__/* .Flags.AutoTracked */ .v.AutoTracked?u(n,n.metadata.get,t):y(t,n),a=e}const k=[];function y(t,e){e.flags&_tracking_Flags_js__WEBPACK_IMPORTED_MODULE_3__/* .Flags.ExplicitlyTracking */ .v.ExplicitlyTracking||(e.flags|=_tracking_Flags_js__WEBPACK_IMPORTED_MODULE_3__/* .Flags.ExplicitlyTracking */ .v.ExplicitlyTracking,u(e,(()=>{const r=e.metadata.dependsOn||k;for(const e of r)if("string"!=typeof e||e.includes(".")){const r=(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .pathToArray */ .NI)(e);for(let n=0,e=t;n<r.length&&null!=e&&"object"==typeof e;++n)e=A(e,r[n],n!==r.length-1)}else A(t,e,!1)})),e.flags&=~_tracking_Flags_js__WEBPACK_IMPORTED_MODULE_3__/* .Flags.ExplicitlyTracking */ .v.ExplicitlyTracking)}function A(t,n,r){const o="?"===n[n.length-1]?n.slice(0,-1):n;if(null!=t.getItemAt||Array.isArray(t)){const n=parseInt(o,10);if(!isNaN(n))return Array.isArray(t)?t[n]:t.getItemAt(n)}const c=(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .getProperties */ .vw)(t)?.properties.get(o);return c&&(s(c),m(t,c)),r?t[o]:void 0}


/***/ }),

/***/ 8488:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ i)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var i;!function(i){i[i.Dirty=1]="Dirty",i[i.Overriden=2]="Overriden",i[i.Computing=4]="Computing",i[i.NonNullable=8]="NonNullable",i[i.HasDefaultValue=16]="HasDefaultValue",i[i.DepTrackingInitialized=32]="DepTrackingInitialized",i[i.AutoTracked=64]="AutoTracked",i[i.ExplicitlyTracking=128]="ExplicitlyTracking"}(i||(i={}));


/***/ }),

/***/ 4163:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ s)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class s{constructor(s){this._notify=s,this._accessed=[],this._handles=[],this._invalidCount=0}destroy(){this._accessed.length=0,this.clear()}onInvalidated(){this._invalidCount++}onCommitted(){const s=this._invalidCount;if(1===s)return this._invalidCount=0,void this._notify();this._invalidCount=s>0?s-1:0}onObservableAccessed(s){this._accessed.includes(s)||this._accessed.push(s)}onTrackingEnd(){const s=this._handles,t=this._accessed;for(let e=0;e<t.length;++e)s.push(t[e].observe(this));t.length=0}clear(){const s=this._handles;for(let t=0;t<s.length;++t)s[t].remove();s.length=0}}


/***/ }),

/***/ 3235:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U5": () => (/* binding */ o),
/* harmony export */   "Xz": () => (/* binding */ u)
/* harmony export */ });
/* unused harmony export autorun */
/* harmony import */ var _tracking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5860);
/* harmony import */ var _tracking_SimpleTrackingTarget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4163);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let r=!1;const e=[];function o(e,o){let u=new _tracking_SimpleTrackingTarget_js__WEBPACK_IMPORTED_MODULE_1__/* .SimpleTrackingTarget */ .M(s),l=null,f=!1;function s(){if(!u||f)return;if(r)return void i(s);const t=l;u.clear(),r=!0,f=!0,l=(0,_tracking_js__WEBPACK_IMPORTED_MODULE_0__/* .runTracked */ .LJ)(u,e),f=!1,r=!1,o(l,t),c()}function m(){u&&(u.destroy(),u=null,l=null)}return f=!0,l=(0,_tracking_js__WEBPACK_IMPORTED_MODULE_0__/* .runTracked */ .LJ)(u,e),f=!1,{remove:m}}function u(r,e){let o=new _tracking_SimpleTrackingTarget_js__WEBPACK_IMPORTED_MODULE_1__/* .SimpleTrackingTarget */ .M(l),u=null;function l(){e(u,c)}function i(){o&&(o.destroy(),o=null),u=null}function c(){return o?(o.clear(),u=(0,_tracking_js__WEBPACK_IMPORTED_MODULE_0__/* .runTracked */ .LJ)(o,r),u):null}return c(),{remove:i}}function l(e){let o=new t(l),u=!1;function l(){o&&!u&&(r?i(l):(o.clear(),r=!0,u=!0,n(o,e),u=!1,r=!1,c()))}function f(){o&&(o.destroy(),o=null)}return u=!0,n(o,e),u=!1,{remove:f}}function i(n){e.includes(n)||e.unshift(n)}function c(){for(;e.length;)e.pop()()}


/***/ }),

/***/ 5620:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IH": () => (/* binding */ h),
/* harmony export */   "NI": () => (/* binding */ s),
/* harmony export */   "Qc": () => (/* binding */ y),
/* harmony export */   "TS": () => (/* binding */ o),
/* harmony export */   "b6": () => (/* binding */ i),
/* harmony export */   "vw": () => (/* binding */ e)
/* harmony export */ });
/* unused harmony exports getDependsInfo, parseConditionalPath, pathToStringOrArray, splitPath */
/* harmony import */ var _handleUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3148);
/* harmony import */ var _lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1681);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e(r){return r?r.__accessor__?r.__accessor__:r.propertyInvalidated?r:null:null}function i(r,n){return null!=r&&r.metadatas&&null!=r.metadatas[n]}function u(r,n){const t=e(r);return t?t.getDependsInfo(r,n,""):""}function o(r,n,t){if(t){return l(r,n,{policy:t,path:""})}return l(r,n,null)}function l(r,e,i){return e?Object.keys(e).reduce(((r,u)=>{let o=null,a="merge";if(i&&(o=i.path?`${i.path}.${u}`:u,a=i.policy(o)),"replace"===a)return r[u]=e[u],r;if(void 0===r[u])return r[u]=(0,_lang_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(e[u]),r;let s=r[u],c=e[u];if(s===c)return r;if(Array.isArray(c)||Array.isArray(r))s=s?Array.isArray(s)?r[u]=s.concat():r[u]=[s]:r[u]=[],c&&(Array.isArray(c)||(c=[c]),c.forEach((r=>{s.includes(r)||s.push(r)})));else if(c&&"object"==typeof c)if(i){const n=i.path;i.path=(0,_maybe_js__WEBPACK_IMPORTED_MODULE_1__/* .assumeNonNull */ .j0)(o),r[u]=l(s,c,i),i.path=n}else r[u]=l(s,c,null);else r.hasOwnProperty(u)&&!e.hasOwnProperty(u)||(r[u]=c);return r}),r||{}):r}function a(r){return r&&("string"!=typeof r||r.includes("."))?s(r):r}function s(r){return Array.isArray(r)?r:r.split(".")}function c(r){return r.includes(",")?r.split(",").map((r=>r.trim())):[r.trim()]}function f(r){if(Array.isArray(r)){const n=[];for(const t of r)n.push(...c(t));return n}return c(r)}function p(r){if(!r.includes("?"))return null;const n=s(r),t=new Array(n.length);for(let e=0;e<n.length;e++){const r=n[e];t[e]="?"===r[r.length-1],t[e]&&(n[e]=r.slice(0,-1))}return{fullPath:n.join("."),conditional:t}}function y(n,t,e,i){const u=f(t);if(1!==u.length){const t=u.map((r=>i(n,r,e)));return (0,_handleUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .handlesGroup */ .AL)(t)}return i(n,u[0],e)}function h(r){let n=!1;return()=>{n||(n=!0,r())}}


/***/ }),

/***/ 8280:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BT": () => (/* binding */ watch_g),
  "YP": () => (/* binding */ watch_T),
  "aQ": () => (/* binding */ P)
});

// UNUSED EXPORTS: afterDispatch, dispatch, isValueInUse

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/ArrayPool.js
var ArrayPool = __webpack_require__(904);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js + 1 modules
var lang = __webpack_require__(186);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(1681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/ObjectPool.js
var ObjectPool = __webpack_require__(4596);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/ReentrantObjectPool.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class ReentrantObjectPool_t extends ObjectPool/* default */.Z{constructor(){super(...arguments),this._set=new Set}destroy(){super.destroy(),this._set=(0,maybe/* nullifyNonNullableForDispose */.wN)(this._set)}acquire(...e){const s=super.acquire(...e);return this._set.delete(s),s}release(e){e&&!this._set.has(e)&&(super.release(e),this._set.add(e))}_dispose(e){this._set.delete(e),super._dispose(e)}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/nextTick.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const nextTick_o=[];function nextTick_t(t){nextTick_o.push(t),1===nextTick_o.length&&queueMicrotask((()=>{const t=nextTick_o.slice();nextTick_o.length=0;for(const o of t)o()}))}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/PerformanceSampler.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class PerformanceSampler_e{constructor(s,e=30){this.name=s,this._counter=0,this._samples=new Array(e)}record(e){(0,maybe/* isSome */.pC)(e)&&(this._samples[++this._counter%this._samples.length]=e)}get median(){return this._samples.slice().sort(((s,e)=>s-e))[Math.floor(this._samples.length/2)]}get average(){return this._samples.reduce(((s,e)=>s+e),0)/this._samples.length}get last(){return this._samples[this._counter%this._samples.length]}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js + 1 modules
var arrayUtils = __webpack_require__(5418);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/HeapSort.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var HeapSort_o;!function(o){const t=(o,t,n,e)=>{let i=t,c=t;const l=n>>>1,r=o[i-1];for(;c<=l;){c=i<<1,c<n&&e(o[c-1],o[c])<0&&++c;const t=o[c-1];if(e(t,r)<=0)break;o[i-1]=t,i=c}o[i-1]=r},n=(o,t)=>o<t?-1:o>t?1:0;function e(o,e,i,c){void 0===e&&(e=0),void 0===i&&(i=o.length),void 0===c&&(c=n);for(let n=i>>>1;n>e;n--)t(o,n,i,c);const l=e+1;for(let n=i-1;n>e;n--){const i=o[e];o[e]=o[n],o[n]=i,t(o,l,n,c)}}function*i(o,e,i,c){void 0===e&&(e=0),void 0===i&&(i=o.length),void 0===c&&(c=n);for(let n=i>>>1;n>e;n--)t(o,n,i,c),yield;const l=e+1;for(let n=i-1;n>e;n--){const i=o[e];o[e]=o[n],o[n]=i,t(o,l,n,c),yield}}o.sort=e,o.iterableSort=i}(HeapSort_o||(HeapSort_o={}));const HeapSort_t=HeapSort_o;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/PooledArray.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const PooledArray_a=1.5,e=1.1;class l{constructor(h){this.data=[],this._length=0,this._allocator=void 0,this._deallocator=()=>null,this._shrink=()=>{},this._hint=new arrayUtils/* PositionHint */.SO,h&&(h.initialSize&&(this.data=new Array(h.initialSize)),h.allocator&&(this._allocator=h.allocator),void 0!==h.deallocator&&(this._deallocator=h.deallocator),h.shrink&&(this._shrink=()=>PooledArray_n(this)))}toArray(){return this.data.slice(0,this.length)}filter(t){const h=new Array;for(let i=0;i<this._length;i++){const s=this.data[i];t(s)&&h.push(s)}return h}getItemAt(t){if(!(t<0||t>=this._length))return this.data[t]}includes(t,h){const i=this.data.indexOf(t,h);return-1!==i&&i<this.length}get length(){return this._length}set length(t){if(t>this._length){if(this._allocator){for(;this._length<t;)this.data[this._length++]=this._allocator(this.data[this._length]);return}this._length=t}else{if(this._deallocator)for(let h=t;h<this._length;++h)this.data[h]=this._deallocator(this.data[h]);this._length=t,this._shrink()}}clear(){this.length=0}prune(){this.clear(),this.data=[]}push(t){this.data[this._length++]=t}pushArray(t,h=t.length){for(let i=0;i<h;i++)this.data[this._length++]=t[i]}fill(t,h){for(let i=0;i<h;i++)this.data[this._length++]=t}pushNew(){this._allocator&&(this.data[this.length]=this._allocator(this.data[this.length]));const t=this.data[this._length];return++this._length,t}unshift(t){this.data.unshift(t),this._length++,PooledArray_n(this)}pop(){if(0===this.length)return;const t=this.data[this.length-1];return this.length=this.length-1,this._shrink(),t}remove(t){const i=(0,arrayUtils/* indexOf */.cq)(this.data,t,this.length,this._hint);if(-1!==i)return this.data.splice(i,1),this.length=this.length-1,t}removeUnordered(t){return this.removeUnorderedIndex((0,arrayUtils/* indexOf */.cq)(this.data,t,this.length,this._hint))}removeUnorderedIndex(t){if(!(t>=this.length||t<0))return this.swapElements(t,this.length-1),this.pop()}removeUnorderedMany(t,h=t.length,s){this.length=(0,arrayUtils/* removeUnorderedMany */.FY)(this.data,t,this.length,h,this._hint,s),this._shrink()}front(){if(0!==this.length)return this.data[0]}back(){if(0!==this.length)return this.data[this.length-1]}swapElements(t,h){if(t>=this.length||h>=this.length||t===h)return;const i=this.data[t];this.data[t]=this.data[h],this.data[h]=i}sort(t){HeapSort_t.sort(this.data,0,this.length,t)}iterableSort(t){return HeapSort_t.iterableSort(this.data,0,this.length,t)}some(t,h){for(let i=0;i<this.length;++i)if(t.call(h,this.data[i],i,this.data))return!0;return!1}filterInPlace(t,h){let i=0;for(let s=0;s<this._length;++s){const a=this.data[s];t.call(h,a,s,this.data)&&(this.data[s]=this.data[i],this.data[i]=a,i++)}if(this._deallocator)for(let s=i;s<this._length;s++)this.data[s]=this._deallocator(this.data[s]);return this._length=i,this._shrink(),this}forAll(t,h){const i=this.length,s=this.data;for(let a=0;a<i;++a)t.call(h,s[a],a,s)}forEach(t,h){for(let i=0;i<this.length;++i)t.call(h,this.data[i],i,this.data)}map(t,h){const i=new Array(this.length);for(let s=0;s<this.length;++s)i[s]=t.call(h,this.data[s],s,this.data);return i}reduce(t,h){let i=h;for(let s=0;s<this.length;++s)i=t(i,this.data[s],s,this.data);return i}has(t){const h=this.length,i=this.data;for(let s=0;s<h;++s)if(i[s]===t)return!0;return!1}}function PooledArray_n(t){t.data.length>PooledArray_a*t.length&&(t.data.length=Math.floor(t.length*e))}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 2 modules
var promiseUtils = __webpack_require__(4353);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/time.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function time_n(n){return n}function r(r){return time_n(1e3*r)}function time_t(n){return n}function u(n){return time_t(.001*n)}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/scheduling.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class c{constructor(e){this.phases=e,this.paused=!1,this.ticks=-1,this.removed=!1}}class m{constructor(e){this.callback=e,this.isActive=!0}remove(){this.isActive=!1}}let scheduling_l=0,p=0;const scheduling_u={time:time_n(0),deltaTime:time_n(0),elapsedFrameTime:time_n(0),frameDuration:time_n(0)},f=["prepare","preRender","render","postRender","update","finish"],h=[],d=new l;class w{constructor(e){this._task=e}remove(){this._task.removed=!0}pause(){this._task.paused=!0}resume(){this._task.paused=!1}}const k={frameTasks:d,willDispatch:!1,clearFrameTasks:j,dispatch:b,executeFrameTasks:D};function v(e){const r=new m(e);return h.push(r),k.willDispatch||(k.willDispatch=!0,nextTick_t(b)),r}function A(e){const t=new c(e);return d.push(t),null==T&&(scheduling_l=performance.now(),T=requestAnimationFrame(x)),new w(t)}let T=null;function j(e=!1){d.forAll((e=>{e.removed=!0})),e&&_()}function F(e){p=Math.max(0,e)}function x(){const e=performance.now();T=null,T=d.length>0?requestAnimationFrame(x):null,k.executeFrameTasks(e)}function D(e){const t=time_n(e-scheduling_l);scheduling_l=e;const r=p>0?p:1e3/60,s=Math.max(0,t-r);for(let o=0;o<f.length;o++){const n=performance.now(),a=f[o];d.forAll((n=>{if(n.paused||n.removed)return;0===o&&n.ticks++;n.phases[a]&&(scheduling_u.time=e,scheduling_u.deltaTime=0===n.ticks?time_n(0):t,scheduling_u.elapsedFrameTime=time_n(performance.now()-e),scheduling_u.frameDuration=time_n(r-s),n.phases[a]?.call(n,scheduling_u))})),R[o].record(performance.now()-n)}_(),q.record(performance.now()-e)}const g=new l;function _(){d.forAll((e=>{e.removed&&g.push(e)})),d.removeUnorderedMany(g.data,g.length),g.clear()}function b(){for(;h.length;){const t=(0,maybe/* assumeNonNull */.j0)(h.shift());t.isActive&&t.callback()}k.willDispatch=!1}function y(e=1,r){const s=o(),i=()=>{n(r)?s.reject(a()):0===e?s():(--e,t((()=>i())))};return i(),s.promise}function M(){const e=o(),t=A({postRender:()=>{t.remove(),v(e)}});return e.promise}const R=f.map((e=>new PerformanceSampler_e(e))),q=new PerformanceSampler_e("total");

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/uid.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let uid_t=0;const uid_n=0;function uid_e(){return++uid_t}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/get.js
var get = __webpack_require__(1777);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/trackingUtils.js
var trackingUtils = __webpack_require__(3235);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/utils.js
var utils = __webpack_require__(5620);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/accessorSupport/watch.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var watch_h;!function(e){e[e.Untracked=0]="Untracked",e[e.Tracked=1]="Tracked"}(watch_h||(watch_h={}));class watch_f{constructor(){this.uid=uid_e(),this.removed=!1,this.type=null,this.oldValue=null,this.callback=null,this.getValue=null,this.target=null,this.path=null,this.equals=null}static acquireUntracked(e,r,o,l,n){return this.pool.acquire(watch_h.Untracked,e,r,o,l,n,lang/* equals */.fS)}static acquireTracked(e,t,r,o){return this.pool.acquire(watch_h.Tracked,e,t,r,null,null,o)}notify(e,t){this.type===watch_h.Untracked?this.callback.call(this.target,e,t,this.path,this.target):this.callback.call(null,e,t)}acquire(e,t,r,o,l,n,s){this.uid=uid_e(),this.removed=!1,this.type=e,this.oldValue=t,this.callback=r,this.getValue=o,this.target=l,this.path=n,this.equals=s}release(){this.target=this.path=this.oldValue=this.callback=this.getValue=null,this.uid=uid_e(),this.removed=!0}}watch_f.pool=new ReentrantObjectPool_t(watch_f);const watch_m=new ArrayPool/* default */.Z,watch_p=new Set;let watch_v;function watch_k(e){watch_p.delete(e),watch_p.add(e),watch_v||(watch_v=v(watch_q))}function watch_(e){if(e.removed)return;const t=e.oldValue,r=e.getValue();e.equals(t,r)||(e.oldValue=r,e.notify(r,t))}function watch_g(e){for(const t of watch_p.values())t.target===e&&(t.removed=!0)}function watch_q(){let e=10;for(;watch_v&&e--;){watch_v=null;const e=watch_j(),t=watch_m.acquire();for(const r of e){const e=r.uid;watch_(r),e===r.uid&&r.removed&&t.push(r)}for(const r of watch_p)r.removed&&(t.push(r),watch_p.delete(r));for(const r of t)watch_f.pool.release(r);watch_m.release(t),watch_m.release(e),V.forEach((e=>e()))}}function watch_j(){const e=watch_m.acquire();e.length=watch_p.size;let t=0;for(const r of watch_p)e[t]=r,++t;return watch_p.clear(),e}const V=new Set;function watch_y(e){return V.add(e),{remove(){V.delete(e)}}}function U(e,t,r){let o=(0,utils/* parse */.Qc)(e,t,r,((e,t,r)=>{let l,n,i=(0,trackingUtils/* reactionDeferred */.Xz)((()=>(0,get/* valueOf */.$z)(e,t)),((i,s)=>{e.__accessor__.destroyed||l&&l.uid!==n?o.remove():(l||(l=watch_f.acquireUntracked(i,r,s,e,t),n=l.uid),watch_k(l))}));return{remove:(0,utils/* once */.IH)((()=>{i.remove(),l&&(l.uid!==n||l.removed||(l.removed=!0,watch_k(l)),l=null),o=i=null}))}}));return o}function watch_b(e,r,o){const l=(0,utils/* parse */.Qc)(e,r,o,((e,r,o)=>{let n=!1;return (0,trackingUtils/* reaction */.U5)((()=>(0,get/* valueOf */.$z)(e,r)),((i,s)=>{e.__accessor__.destroyed?l.remove():n||(n=!0,(0,lang/* equals */.fS)(s,i)||o.call(e,i,s,r,e),n=!1)}))}));return l}function watch_T(e,t,r,o=!1){return!e.__accessor__||e.__accessor__.destroyed?{remove(){}}:o?watch_b(e,t,r):U(e,t,r)}function watch_w(e,t,r){let o,l,n=(0,trackingUtils/* reactionDeferred */.Xz)(e,((e,i)=>{o&&o.uid!==l?n.remove():(o||(o=watch_f.acquireTracked(e,t,i,r),l=o.uid),watch_k(o))}));return{remove:(0,utils/* once */.IH)((()=>{n.remove(),o&&(o.uid!==l||o.removed||(o.removed=!0,watch_k(o)),o=null),n=null}))}}function S(e,t,r){let o=!1;return (0,trackingUtils/* reaction */.U5)(e,((e,l)=>{o||(o=!0,r(l,e)||t(e,l),o=!1)}))}function P(e,t,o=!1,l=lang/* equalsShallow */.y7){return o?S(e,t,l):watch_w(e,t,l)}function watch_x(e){return n(watch_p,(t=>t.oldValue===e))}


/***/ }),

/***/ 5418:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SO": () => (/* binding */ x),
  "fS": () => (/* binding */ i),
  "cq": () => (/* binding */ b),
  "Od": () => (/* binding */ C),
  "FY": () => (/* binding */ j)
});

// UNUSED EXPORTS: binaryFindClosest, binaryIndexOf, constant, difference, first, groupToMap, intersect, isArrayLike, last, max, min, pickRandom, range, removeUnordered, shuffle, splitIntoChunks, unique, update

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(1681);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t{constructor(t=1){this._seed=t}set seed(e){this._seed=e??Math.random()*t._m}getInt(){return this._seed=(t._a*this._seed+t._c)%t._m,this._seed}getFloat(){return this.getInt()/(t._m-1)}getIntRange(t,e){return Math.round(this.getFloatRange(t,e))}getFloatRange(e,s){const n=s-e;return e+this.getInt()/t._m*n}}t._m=2147483647,t._a=48271,t._c=0;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e(t){if(!t)return;return t.length>0?t[0]:void 0}function r(t){if(!t)return;const n=t.length;return n>0?t[n-1]:void 0}function o(t){return t}function f(t,n=o){if(!t||0===t.length)return;let e=t[0],r=n(e);for(let o=1;o<t.length;++o){const f=t[o],l=Number(n(f));l>r&&(r=l,e=f)}return e}function l(t,n=o){return f(t,(t=>-n(t)))}function u(t,n){return n?t.filter(((t,e,r)=>r.findIndex(n.bind(null,t))===e)):t.filter(((t,n,e)=>e.indexOf(t)===n))}function i(n,e,r){if((0,maybe/* isNone */.Wi)(n)&&(0,maybe/* isNone */.Wi)(e))return!0;if((0,maybe/* isNone */.Wi)(n)||(0,maybe/* isNone */.Wi)(e)||n.length!==e.length)return!1;if(r){for(let t=0;t<n.length;t++)if(!r(n[t],e[t]))return!1}else for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function c(t,n){let e=t.length!==n.length;e&&(t.length=n.length);for(let r=0;r<n.length;++r)t[r]!==n[r]&&(t[r]=n[r],e=!0);return e}function s(t,n,e){let r,o;return e?(r=n.filter((n=>!t.some((t=>e(t,n))))),o=t.filter((t=>!n.some((n=>e(n,t)))))):(r=n.filter((n=>!t.includes(n))),o=t.filter((t=>!n.includes(t)))),{added:r,removed:o}}function h(t,n,e){return t&&n?e?t.filter((t=>n.findIndex((n=>e(t,n)))>-1)):t.filter((t=>n.includes(t))):[]}function a(t){return t&&"number"==typeof t.length}function g(t,n){const e=t.length;if(0===e)return[];const r=[];for(let o=0;o<e;o+=n)r.push(t.slice(o,o+n));return r}const d=!!Array.prototype.fill;function m(t,n){if(d)return new Array(t).fill(n);const e=new Array(t);for(let r=0;r<t;r++)e[r]=n;return e}function p(t,n){void 0===n&&(n=t,t=0);const e=new Array(n-t);for(let r=t;r<n;r++)e[r-t]=r;return e}function M(t,n,e){const r=t.length;let o=0,f=r-1;for(;o<f;){const e=o+Math.floor((f-o)/2);n>t[e]?o=e+1:f=e}const l=t[o];return e?n>=t[r-1]?-1:l===n?o:o-1:l===n?o:-1}function w(t,n,e){if(!t||0===t.length)return;const r=t.length-1,o=t[0];if(n<=e(o))return o;const f=t[r];if(n>=e(f))return f;let l=0,u=0,i=r;for(;l<i;){u=l+Math.floor((i-l)/2);const o=t[u],f=e(o);if(f===n)return o;if(n<f){if(u>0){const r=t[u-1],l=e(r);if(n>l)return n-l>=f-n?o:r}i=u}else{if(u<r){const r=t[u+1],l=e(r);if(n<l)return n-f>=l-n?r:o}l=u+1}}return t[u]}class x{constructor(){this.last=0}}const y=new x;function b(t,n,e,r){r=r||y;const o=Math.max(0,r.last-10);for(let l=o;l<e;++l)if(t[l]===n)return r.last=l,l;const f=Math.min(o,e);for(let l=0;l<f;++l)if(t[l]===n)return r.last=l,l;return-1}function v(t,n,e,r){const o=e??t.length,f=b(t,n,o,r);if(-1!==f)return t[f]=t[o-1],null==e&&t.pop(),n}const A=new Set;function j(t,n,e=t.length,r=n.length,o,f){if(0===r||0===e)return e;A.clear();for(let u=0;u<r;++u)A.add(n[u]);o=o||y;const l=Math.max(0,o.last-10);for(let u=l;u<e;++u)if(A.has(t[u])&&(f&&f.push(t[u]),A.delete(t[u]),t[u]=t[e-1],--e,--u,0===A.size||0===e))return A.clear(),e;for(let u=0;u<l;++u)if(A.has(t[u])&&(f&&f.push(t[u]),A.delete(t[u]),t[u]=t[e-1],--e,--u,0===A.size||0===e))return A.clear(),e;return A.clear(),e}function z(t,n,e){const r=t.length;if(n>=r)return t.slice(0);const o=I(e),f=new Set,l=[];for(;l.length<n;){const n=Math.floor(o()*r);f.has(n)||(f.add(n),l.push(t[n]))}return l}function I(t){return t?(S.seed=t,()=>S.getFloat()):Math.random}function O(t,n){const e=I(n);for(let r=t.length-1;r>0;r--){const n=Math.floor(e()*(r+1)),o=t[r];t[r]=t[n],t[n]=o}return t}const S=new t;function C(t,n){const e=t.indexOf(n);return-1!==e?(t.splice(e,1),n):null}function F(t,n){const e=new Map,r=t.length;for(let o=0;o<r;o++){const r=t[o],f=n(r,o,t),l=e.get(f);l?l.push(r):e.set(f,[r])}return e}


/***/ }),

/***/ 9546:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IH": () => (/* binding */ t),
/* harmony export */   "on": () => (/* binding */ r),
/* harmony export */   "vT": () => (/* binding */ e)
/* harmony export */ });
/* unused harmony exports eventKey, ieKeyNormalizationMap, pausable */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e(e){return e&&("function"==typeof e.on||"function"==typeof e.addEventListener)}function r(r,t,n){if(!e(r))throw new TypeError("target is not a Evented or EventTarget object");if("on"in r)return r.on(t,n);if(Array.isArray(t)){const e=t.slice();for(const t of e)r.addEventListener(t,n);return{remove(){for(const t of e)r.removeEventListener(t,n)}}}return r.addEventListener(t,n),{remove(){r.removeEventListener(t,n)}}}function t(t,n,o){if(!e(t))throw new TypeError("target is not a Evented or EventTarget object");if("once"in t)return t.once(n,o);const i=r(t,n,(e=>{i.remove(),o.call(t,e)}));return{remove(){i.remove()}}}function n(e,t,n){let o=!1;const i=r(e,t,(r=>{o||n.call(e,r)}));return{resume(){o=!1},pause(){o=!0},remove(){i.remove()}}}const o={Win:"Meta",Scroll:"ScrollLock",Spacebar:" ",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Del:"Delete",Apps:"ContextMenu",Esc:"Escape",Multiply:"*",Add:"+",Subtract:"-",Decimal:".",Divide:"/"};function i({key:e}){return o[e]||e}


/***/ }),

/***/ 3148:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AL": () => (/* binding */ r),
/* harmony export */   "kB": () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports asyncHandle, destroyHandle, refHandle, timeoutHandle */
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1681);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function r(r){return n((()=>r.forEach((r=>(0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .isSome */ .pC)(r)&&r.remove()))))}function n(e){return{remove:()=>{e&&(e(),e=void 0)}}}function o(r){return n((()=>{const n=r();e(n)&&n.remove()}))}function t(r){return n(e(r)?()=>r.destroy():void 0)}function u(e,r){const o=setTimeout(e,r);return n((()=>clearTimeout(o)))}function i(r,o){let t=!1,u=null;return r.then((e=>{t?e.remove():u=e})),n((()=>{t=!0,e(u)?u.remove():e(o)&&(o.abort(),o=null)}))}


/***/ }),

/***/ 9994:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ has)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let e;function has(a){return"function"==typeof e[a]?e[a]=e[a](globalThis):e[a]}e=globalThis.dojoConfig?.has||globalThis.esriConfig?.has?{...globalThis.dojoConfig?.has,...globalThis.esriConfig?.has}:{},has.add=(a,d,o,r)=>((r||void 0===e[a])&&(e[a]=d),o&&has(a)),has.cache=e,has.add("esri-deprecation-warnings",!0),(()=>{has.add("host-webworker",void 0!==globalThis.WorkerGlobalScope&&self instanceof globalThis.WorkerGlobalScope);const e="undefined"!=typeof window&&"undefined"!=typeof location&&"undefined"!=typeof document&&window.location===location&&window.document===document;if(has.add("host-browser",e),has.add("host-node","object"==typeof globalThis.process&&globalThis.process.versions?.node&&globalThis.process.versions.v8),has.add("dom",e),has("host-browser")){const e=navigator,a=e.userAgent,d=e.appVersion,o=parseFloat(d);if(has.add("wp",parseFloat(a.split("Windows Phone")[1])||void 0),has.add("msapp",parseFloat(a.split("MSAppHost/")[1])||void 0),has.add("khtml",d.includes("Konqueror")?o:void 0),has.add("edge",parseFloat(a.split("Edge/")[1])||void 0),has.add("opr",parseFloat(a.split("OPR/")[1])||void 0),has.add("webkit",!has("wp")&&!has("edge")&&parseFloat(a.split("WebKit/")[1])||void 0),has.add("chrome",!has("edge")&&!has("opr")&&parseFloat(a.split("Chrome/")[1])||void 0),has.add("android",!has("wp")&&parseFloat(a.split("Android ")[1])||void 0),has.add("safari",!d.includes("Safari")||has("wp")||has("chrome")||has("android")||has("edge")||has("opr")?void 0:parseFloat(d.split("Version/")[1])),has.add("mac",d.includes("Macintosh")),!has("wp")&&a.match(/(iPhone|iPod|iPad)/)){const e=RegExp.$1.replace(/P/,"p"),d=a.match(/OS ([\d_]+)/)?RegExp.$1:"1",o=parseFloat(d.replace(/_/,".").replace(/_/g,""));has.add(e,o),has.add("ios",o)}has.add("trident",parseFloat(d.split("Trident/")[1])||void 0),has("webkit")||(!a.includes("Gecko")||has("wp")||has("khtml")||has("trident")||has("edge")||has.add("mozilla",o),has("mozilla")&&has.add("ff",parseFloat(a.split("Firefox/")[1]||a.split("Minefield/")[1])||void 0))}})(),(()=>{if(globalThis.navigator){const e=navigator.userAgent,a=/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(e),d=/iPhone/i.test(e);a&&has.add("esri-mobile",a),d&&has.add("esri-iPhone",d),has.add("esri-geolocation",!!navigator.geolocation)}has.add("esri-canvas-svg-support",!has("trident")),has.add("esri-wasm","WebAssembly"in globalThis),has.add("esri-shared-array-buffer",(()=>{const e="SharedArrayBuffer"in globalThis,a=!1===globalThis.crossOriginIsolated;return e&&!a})),has.add("wasm-simd",(()=>{const e=[0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11];return WebAssembly.validate(new Uint8Array(e))})),has.add("esri-atomics","Atomics"in globalThis),has.add("esri-workers","Worker"in globalThis),has.add("web-feat:cache","caches"in globalThis),has.add("esri-workers-arraybuffer-transfer",!has("safari")||Number(has("safari"))>=12),has.add("featurelayer-simplify-thresholds",[.5,.5,.5,.5]),has.add("featurelayer-simplify-payload-size-factors",[1,1,4]),has.add("featurelayer-snapshot-enabled",!0),has.add("featurelayer-snapshot-point-min-threshold",8e4),has.add("featurelayer-snapshot-point-max-threshold",4e5),has.add("featurelayer-snapshot-point-coverage",.1),has.add("featurelayer-advanced-symbols",!1),has.add("featurelayer-pbf",!0),has.add("featurelayer-pbf-statistics",!1),has.add("feature-layers-workers",!0),has.add("feature-polyline-generalization-factor",1),has.add("mapview-transitions-duration",200),has.add("mapview-srswitch-adjust-rotation-scale-threshold",24e6),has.add("mapserver-pbf-enabled",!1),has.add("mapimagelayer-popup-identify-max-tolerance",20),has.add("heatmap-allow-raster-fallback",!0),has.add("heatmap-force-raster",!1),has("host-webworker")||has("host-browser")&&(has.add("esri-csp-restrictions",(()=>{try{new Function}catch{return!0}return!1})),has.add("esri-image-decode",(()=>{if("decode"in new Image){const e=new Image;return e.src='data:image/svg+xml;charset=UTF-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>',void e.decode().then((()=>{has.add("esri-image-decode",!0,!0,!0)})).catch((()=>{has.add("esri-image-decode",!1,!0,!0)}))}return!1})),has.add("esri-url-encodes-apostrophe",(()=>{const e=window.document.createElement("a");return e.href="?'",e.href.includes("?%27")})))})();


/***/ }),

/***/ 5709:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ o)
/* harmony export */ });
/* unused harmony export JSONMap */
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6745);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class s{constructor(s,o={ignoreUnknown:!1,useNumericKeys:!1}){this._jsonToAPI=s,this._options=o,this.apiValues=[],this.jsonValues=[],this._apiToJSON=this._invertMap(s),this.apiValues=this._getKeysSorted(this._apiToJSON),this.jsonValues=this._getKeysSorted(this._jsonToAPI),this.read=t=>this.fromJSON(t),this.write=(s,o,i)=>{const n=this.toJSON(s);void 0!==n&&(0,_object_js__WEBPACK_IMPORTED_MODULE_0__/* .setDeepValue */ .RB)(i,n,o)},this.write.isJSONMapWriter=!0}toJSON(t){if(this._apiToJSON.hasOwnProperty(t)){const s=this._apiToJSON[t];return this._options.useNumericKeys?+s:s}return this._options.ignoreUnknown?void 0:t}fromJSON(t){return this._jsonToAPI.hasOwnProperty(t)?this._jsonToAPI[t]:this._options.ignoreUnknown?void 0:t}_invertMap(t){const s={};for(const o in t)s[t[o]]=o;return s}_getKeysSorted(t){const s=[];for(const o in t)s.push(o);return s.sort(),s}}function o(){return function(t,o){return new s(t,{ignoreUnknown:!0,...o})}}


/***/ }),

/***/ 186:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d9": () => (/* binding */ lang_y),
  "fS": () => (/* binding */ w),
  "y7": () => (/* binding */ N),
  "yd": () => (/* binding */ p)
});

// UNUSED EXPORTS: isAccessorLike, isPlainObject, tryClone, tryCloneBuiltInObject

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js + 1 modules
var arrayUtils = __webpack_require__(5418);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(1681);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/typedArrayUtil.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function typedArrayUtil_n(r,n){if(r.forEach)r.forEach(n);else for(let t=0;t<r.length;t++)n(r[t],t,r)}function typedArrayUtil_t(r,n,t){if(r.slice)return r.slice(n,t);void 0===n?n=0:(n<0&&(n+=r.length),n=Math.min(r.length,Math.max(0,n))),void 0===t?t=r.length:(t<0&&(t+=r.length),t=Math.min(r.length,Math.max(0,t)));const o=Math.max(0,t-n),c=new(0,r.constructor)(o);for(let e=0;e<o;e++)c[e]=r[n+e];return c}function o(r){return r instanceof ArrayBuffer||r&&r.constructor&&"ArrayBuffer"===r.constructor.name}function c(r){return r instanceof Int8Array||r&&r.constructor&&"Int8Array"===r.constructor.name}function e(r){return r instanceof Uint8Array||r&&r.constructor&&"Uint8Array"===r.constructor.name}function a(r){return r instanceof Uint8ClampedArray||r&&r.constructor&&"Uint8ClampedArray"===r.constructor.name}function u(r){return r instanceof Int16Array||r&&r.constructor&&"Int16Array"===r.constructor.name}function i(r){return r instanceof Uint16Array||r&&r.constructor&&"Uint16Array"===r.constructor.name}function f(r){return r instanceof Int32Array||r&&r.constructor&&"Int32Array"===r.constructor.name}function s(r){return r instanceof Uint32Array||r&&r.constructor&&"Uint32Array"===r.constructor.name}function y(r){return r instanceof Float32Array||r&&r.constructor&&"Float32Array"===r.constructor.name}function A(r){return r instanceof Float64Array||r&&r.constructor&&"Float64Array"===r.constructor.name}function l(r){const n=new Array(r.length);for(let t=0;t<r.length;t++)n[t]=r[t];return n}function m(n){return r(n)?0:128+n.buffer.byteLength+64}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/lang.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function p(t,n){let e;if(n)for(e in t)t.hasOwnProperty(e)&&(void 0===t[e]?delete t[e]:t[e]instanceof Object&&p(t[e],!0));else for(e in t)t.hasOwnProperty(e)&&void 0===t[e]&&delete t[e];return t}function lang_y(t){if(!t||"object"!=typeof t||"function"==typeof t)return t;const e=h(t);if((0,maybe/* isSome */.pC)(e))return e;if(b(t))return t.clone();if(g(t))return t.map(lang_y);if(O(t))return t.clone();const r={};for(const n of Object.getOwnPropertyNames(t))r[n]=lang_y(t[n]);return r}function lang_m(t){if(!t||"object"!=typeof t||"function"==typeof t||"HTMLElement"in globalThis&&t instanceof HTMLElement)return t;const e=h(t);if(n(e))return e;if(g(t)){let n=!0;const e=t.map((t=>{const e=lang_m(t);return null!=t&&null==e&&(n=!1),e}));return n?e:null}if(b(t))return t.clone();if(!O(t)){const n=new(0,Object.getPrototypeOf(t).constructor);for(const e of Object.getOwnPropertyNames(t)){const r=t[e],o=lang_m(r);if(null!=r&&null==o)return null;n[e]=o}return n}return null}function b(t){return"function"==typeof t.clone}function g(t){return"function"==typeof t.map&&"function"==typeof t.forEach}function O(t){return"function"==typeof t.notifyChange&&"function"==typeof t.watch}function j(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;const n=Object.getPrototypeOf(t);return null===n||n===Object.prototype}function h(t){if(c(t)||e(t)||a(t)||u(t)||i(t)||f(t)||s(t)||y(t)||A(t))return typedArrayUtil_t(t);if(t instanceof Date)return new Date(t.getTime());if(t instanceof ArrayBuffer){return t.slice(0,t.byteLength)}if(t instanceof Map){const n=new Map;for(const[e,r]of t)n.set(e,lang_y(r));return n}if(t instanceof Set){const n=new Set;for(const e of t)n.add(lang_y(e));return n}return null}function w(t,n){return t===n||"number"==typeof t&&isNaN(t)&&"number"==typeof n&&isNaN(n)||"function"==typeof(t||{}).getTime&&"function"==typeof(n||{}).getTime&&t.getTime()===n.getTime()||!1}function N(n,e){return n===e||(null==n||"string"==typeof n?n===e:"number"==typeof n?n===e||"number"==typeof e&&isNaN(n)&&isNaN(e):n instanceof Date?e instanceof Date&&n.getTime()===e.getTime():Array.isArray(n)?Array.isArray(e)&&(0,arrayUtils/* equals */.fS)(n,e):n instanceof Set?e instanceof Set&&d(n,e):n instanceof Map?e instanceof Map&&P(n,e):!!j(n)&&(j(e)&&T(n,e)))}function T(t,n){if(null===t||null===n)return!1;const e=Object.keys(t);if(null===n||Object.keys(n).length!==e.length)return!1;for(const r of e)if(t[r]!==n[r]||!Object.prototype.hasOwnProperty.call(n,r))return!1;return!0}function d(t,n){if(t.size!==n.size)return!1;for(const e of t)if(!n.has(e))return!1;return!0}function P(t,n){if(t.size!==n.size)return!1;for(const[e,r]of t){const t=n.get(e);if(t!==r||void 0===t&&!n.has(e))return!1}return!0}


/***/ }),

/***/ 1681:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SC": () => (/* binding */ s),
/* harmony export */   "Wg": () => (/* binding */ e),
/* harmony export */   "Wi": () => (/* binding */ t),
/* harmony export */   "hw": () => (/* binding */ h),
/* harmony export */   "j0": () => (/* binding */ x),
/* harmony export */   "pC": () => (/* binding */ r),
/* harmony export */   "wN": () => (/* binding */ d)
/* harmony export */ });
/* unused harmony exports abortMaybe, applySome, assertIsSome, disposeMaybe, equalsMaybe, filterNones, forEachSome, get, isUndefined, mapMany, mapOr, mapSome, mapSomeFirst, none, releaseMaybe, unwrapOr, unwrapOrThrow, unwrapOrValue */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const n=null;function r(n){return null!=n}function t(n){return null==n}function u(n){return void 0===n}function o(t,u){return r(t)?u(t):n}function e(n){return n}function f(n,r){return c(n,r),n}function c(n,r){if(t(n))throw new Error(r??"value is None")}function i(n,t){return r(n)?n:"function"==typeof t?t():t}function l(n,t){return r(n)?n:t}function s(n){return r(n)&&n.destroy(),null}function a(n){return r(n)&&n.dispose(),null}function h(n){return r(n)&&n.remove(),null}function p(n){return r(n)&&n.abort(),null}function w(n){return r(n)&&n.release(),null}function y(n,t,u){return r(n)&&r(t)?r(u)?u(n,t):n.equals(t):n===t}function d(n){return null}function v(n,t){const u=new Array;return n.forEach((n=>{const o=t(n);r(o)&&u.push(o)})),u}function A(n,r){const t=new Array;for(const u of n)t.push(b(u,null,r));return t}function E(n,r){for(const t of n)o(t,r)}function b(n,t,u){return r(n)?u(n):t}function g(n,t){for(const u of n){const n=t(u);if(r(n))return n}return null}function m(n){return n.filter((n=>r(n)))}function q(n,...r){let t=n;for(let u=0;u<r.length&&t;++u)t=t[r[u]];return t}function x(n){return n}


/***/ }),

/***/ 6745:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RB": () => (/* binding */ o),
/* harmony export */   "RH": () => (/* binding */ n),
/* harmony export */   "hS": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function n(r,n,t=!1){return i(r,n,t)}function t(r,n){if(null!=n)return n[r]||e(r.split("."),!1,n)}function o(r,n,t){const o=r.split("."),i=o.pop(),u=e(o,!0,t);u&&i&&(u[i]=n)}function e(r,n,t){let o=t;for(const e of r){if(null==o)return;if(!(e in o)){if(!n)return;o[e]={}}o=o[e]}return o}function i(n,t,o){return t?Object.keys(t).reduce(((n,e)=>{let u=n[e],c=t[e];return u===c?n:void 0===u?(n[e]=(0,_lang_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(c),n):(Array.isArray(c)||Array.isArray(n)?(u=u?Array.isArray(u)?n[e]=u.concat():n[e]=[u]:n[e]=[],c&&(Array.isArray(c)||(c=[c]),o?c.forEach((r=>{u.includes(r)||u.push(r)})):n[e]=c.concat())):c&&"object"==typeof c?n[e]=i(u,c,o):n.hasOwnProperty(e)&&!t.hasOwnProperty(e)||(n[e]=c),n)}),n||{}):n}


/***/ }),

/***/ 4353:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zE": () => (/* binding */ a),
  "dD": () => (/* binding */ A),
  "hh": () => (/* binding */ D),
  "Ds": () => (/* binding */ x),
  "as": () => (/* binding */ E),
  "D_": () => (/* binding */ j),
  "Hc": () => (/* binding */ p),
  "fu": () => (/* binding */ v),
  "H9": () => (/* binding */ b)
});

// UNUSED EXPORTS: after, always, create, eachAlwaysValues, filter, ignoreAbortErrors, isPromiseLike, logOnError, onAbortOrThrow, throwIfAbortError, throwIfAborted, timeout, waitTick, when, whenOrAbort, whenOrTimeout

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/clock.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function clock_e(e){return{setTimeout:(t,o)=>{const r=e.setTimeout(t,o);return{remove:()=>e.clearTimeout(r)}}}}const t=clock_e(globalThis);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var core_has = __webpack_require__(9994);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/deprecate.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const deprecate_n=new Set;function deprecate_e(e,i,o=!1){o&&deprecate_n.has(i)||(o&&deprecate_n.add(i),e.warn(`🛑 DEPRECATED - ${i}`))}function i(n,e,i={}){has("esri-deprecation-warnings")&&deprecate_r(n,`Module: ${e}`,i)}function deprecate_o(n,e,i={}){if(has("esri-deprecation-warnings")){const{moduleName:o}=i;deprecate_r(n,`Function: ${(o?o+"::":"")+e+"()"}`,i)}}function deprecate_t(n,e,i={}){if(has("esri-deprecation-warnings")){const{moduleName:o}=i;deprecate_r(n,`Property: ${(o?o+"::":"")+e}`,i)}}function deprecate_r(n,i,o={}){if(has("esri-deprecation-warnings")){const{replacement:t,version:r,see:s,warnOnce:a}=o;let c=i;t&&(c+=`\n\t🛠️ Replacement: ${t}`),r&&(c+=`\n\t⚙️ Version: ${r}`),s&&(c+=`\n\t🔗 See ${s} for more details.`),deprecate_e(n,c,a)}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/events.js
var events = __webpack_require__(9546);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(3802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(1681);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function l(t,e){const r=t.slice(),n=await Promise.all(t.map(((t,r)=>e(t,r))));return r.filter(((t,e)=>n[e]))}function m(t){return e(o.getLogger("esri.core.promiseUtils"),"create",{moduleName:"esri.core.promiseUtils",replacement:"new Promise()",version:"4.24"}),new Promise(((e,r)=>{try{t(e,r)}catch(n){Promise.resolve().then((()=>r(n)))}}))}function a(t="Aborted"){return new Error/* default */.Z("AbortError",t)}function f(t,e="Aborted"){if(p(t))throw a(e)}function h(t){return (0,maybe/* isSome */.pC)(t)?"aborted"in t?t:t.signal:t}function p(t){const e=h(t);return (0,maybe/* isSome */.pC)(e)&&e.aborted}function w(t){if(j(t))throw t}function b(t){if(!j(t))throw t}function v(t,e){const r=h(t);if(!(0,maybe/* isNone */.Wi)(r)){if(!r.aborted)return (0,events/* once */.IH)(r,"abort",(()=>e()));e()}}function d(t,e){const r=h(t);if(!s(r))return f(r),n(r,"abort",(()=>e(a())))}function y(t,e){const r=h(e);return s(r)?t:new Promise(((r,n)=>{let o=v(e,(()=>n(a())));const i=()=>o=c(o);t.then(i,i),t.then(r,n)}))}function P(t,e,n){return Promise.race([t,U(e).then((()=>{throw new r("timeout",`Did not resolve within ${e} milliseconds (${n??"timeout"})`)}))])}function j(t){return"AbortError"===t?.name}async function g(t){try{return await t}catch(e){if(!j(e))throw e;return}}async function T(t,e=o.getLogger("esri")){try{return await t}catch(r){j(r)||e.error(r)}}function A(){let t=null;const e=new Promise(((e,r)=>{t={promise:void 0,resolve:e,reject:r}}));return t.promise=e,t}async function E(t){if(!t)return;if("function"!=typeof t.forEach){const e=Object.keys(t),r=e.map((e=>t[e])),n=await E(r),o={};return e.map(((t,e)=>o[t]=n[e])),o}const e=t;return new Promise((t=>{const r=[];let n=e.length;0===n&&t(r),e.forEach((e=>{const o={promise:e||Promise.resolve(e)};r.push(o),o.promise.then((t=>{o.value=t})).catch((t=>{o.error=t})).then((()=>{--n,0===n&&t(r)}))}))}))}async function L(t){return(await E(t)).filter((t=>!!t.value)).map((t=>t.value))}function U(t,e,r){const n=new AbortController;return v(r,(()=>n.abort())),new Promise(((r,o)=>{let i=setTimeout((()=>{i=0,r(e)}),t);v(n,(()=>{i&&(clearTimeout(i),o(a()))}))}))}function k(t,e,n,o){const i=n&&"abort"in n?n:null;null!=o||i||(o=n);let s=setTimeout((()=>{s=0,i&&i.abort()}),e);const c=()=>o||new r("promiseUtils:timeout","The wrapped promise did not resolve within "+e+" ms");return t.then((t=>{if(0===s)throw c();return clearTimeout(s),t}),(t=>{throw clearTimeout(s),0===s?c():t}))}function C(t){return t&&"function"==typeof t.then}function $(t){return C(t)?t:Promise.resolve(t)}function x(t,e=-1){let r,n,o,i,s=null;const c=(...l)=>{if(r){n=l,i&&i.reject(a()),i=A();const t=(0,maybe/* assumeNonNull */.j0)(i.promise);if(s){const t=s;s=null,t.abort()}return t}if(o=i||A(),i=null,e>0){const n=new AbortController;r=$(t(...l,n.signal));const o=r;U(e).then((()=>{r===o&&(i?n.abort():s=n)}))}else r=1,r=$(t(...l));const m=()=>{const t=n;n=o=r=s=null,null!=t&&c(...t)},f=r,h=o;return f.then(m,m),f.then(h.resolve,h.reject),(0,maybe/* assumeNonNull */.j0)(h.promise)};return c}function D(){let e,r;const n=new Promise(((t,n)=>{e=t,r=n})),o=t=>{e(t)};return o.resolve=t=>e(t),o.reject=t=>r(t),o.timeout=(e,r)=>t.setTimeout((()=>o.reject(r)),e),o.promise=n,o}function N(t,e){return t.then(e,e)}async function O(t){await Promise.resolve(),f(t)}


/***/ }),

/***/ 1130:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gx": () => (/* binding */ n),
/* harmony export */   "hP": () => (/* binding */ c)
/* harmony export */ });
/* unused harmony exports escapeRegExpString, stripHTML */
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6745);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const e=/\{([^\}]+)\}/g;function r(t){return t??""}function n(n,o){return n.replace(e,"object"==typeof o?(e,n)=>r((0,_object_js__WEBPACK_IMPORTED_MODULE_0__/* .getDeepValue */ .hS)(n,o)):(t,e)=>r(o(e)))}function o(t,e){return t.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,(t=>e&&e.includes(t)?t:`\\${t}`))}function c(t){let e=0;for(let r=0;r<t.length;r++)e=(e<<5)-e+t.charCodeAt(r),e|=0;return e}function u(t){return(new DOMParser).parseFromString(t||"","text/html").body.innerText||""}


/***/ }),

/***/ 3466:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B7": () => (/* binding */ I),
/* harmony export */   "D6": () => (/* binding */ z),
/* harmony export */   "Fv": () => (/* binding */ F),
/* harmony export */   "HK": () => (/* binding */ X),
/* harmony export */   "P$": () => (/* binding */ H),
/* harmony export */   "R9": () => (/* binding */ y),
/* harmony export */   "TI": () => (/* binding */ b),
/* harmony export */   "ZN": () => (/* binding */ St),
/* harmony export */   "b7": () => (/* binding */ A),
/* harmony export */   "ed": () => (/* binding */ J),
/* harmony export */   "fl": () => (/* binding */ Bt),
/* harmony export */   "hF": () => (/* binding */ Q),
/* harmony export */   "hO": () => (/* binding */ mt),
/* harmony export */   "jc": () => (/* binding */ V),
/* harmony export */   "kl": () => (/* binding */ D),
/* harmony export */   "mN": () => (/* binding */ j),
/* harmony export */   "oh": () => (/* binding */ W),
/* harmony export */   "rS": () => (/* binding */ Z),
/* harmony export */   "tD": () => (/* binding */ E),
/* harmony export */   "u0": () => (/* binding */ L),
/* harmony export */   "v_": () => (/* binding */ G)
/* harmony export */ });
/* unused harmony exports addProxy, changeDomain, dataComponents, dataToArrayBuffer, dataToBlob, downloadBlobAsFile, downloadDataAsFile, getAppBaseUrl, getFilename, getPathExtension, hasProtocol, hasSamePortal, isAbsolute, isAppHTTPS, isHTTPSProtocol, isProtocolRelative, isSVG, makeData, makeRelative, removeFile, removeQueryParameter, removeQueryParameters, removeTrailingSlash, splitPathExtension, test, toHTTP, trustedServersUrlCache */
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1366);
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(375);
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3802);
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1681);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const s=_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getLogger */ .Z.getLogger("esri.core.urlUtils"),u=_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].request */ .Z.request,l="esri/config: esriConfig.request.proxyUrl is not set.",c=/^\s*[a-z][a-z0-9-+.]*:(?![0-9])/i,f=/^\s*http:/i,a=/^\s*https:/i,h=/^\s*file:/i,p=/:\d+$/,d=/^https?:\/\/[^/]+\.arcgis.com\/sharing(\/|$)/i,g=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),m=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$");class y{constructor(t=""){this.uri=t,this.scheme=null,this.authority=null,this.path=null,this.query=null,this.fragment=null,this.user=null,this.password=null,this.host=null,this.port=null;let n=(0,_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .assumeNonNull */ .j0)(this.uri.match(g));this.scheme=n[2]||(n[1]?"":null),this.authority=n[4]||(n[3]?"":null),this.path=n[5],this.query=n[7]||(n[6]?"":null),this.fragment=n[9]||(n[8]?"":null),null!=this.authority&&(n=(0,_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .assumeNonNull */ .j0)(this.authority.match(m)),this.user=n[3]||null,this.password=n[4]||null,this.host=n[6]||n[7],this.port=n[9]||null)}toString(){return this.uri}}const $={},x=new y(_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].applicationUrl */ .Z.applicationUrl);let w=x;const O=q();let U=O;const b=()=>w,C=()=>U;function q(){const t=(0,_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .assumeNonNull */ .j0)(w.path),n=t.substring(0,t.lastIndexOf(t.split("/")[t.split("/").length-1]));return`${`${w.scheme}://${w.host}${null!=w.port?`:${w.port}`:""}`}${n}`}const R={setAppUrl:t=>w=t,setAppBaseUrl:t=>U=t,restoreUrls:()=>{w=x,U=O}};function j(t){if(!t)return null;const n={path:null,query:null},e=new y(t),r=t.indexOf("?");return null===e.query?n.path=t:(n.path=t.substring(0,r),n.query=L(e.query)),e.fragment&&(n.hash=e.fragment,null===e.query&&(n.path=n.path.substring(0,n.path.length-(e.fragment.length+1)))),n}function L(t){const n=t.split("&"),e={};for(const r of n){if(!r)continue;const t=r.indexOf("=");let n,o;t<0?(n=decodeURIComponent(r),o=""):(n=decodeURIComponent(r.slice(0,t)),o=decodeURIComponent(r.slice(t+1)));let i=e[n];"string"==typeof i&&(i=e[n]=[i]),Array.isArray(i)?i.push(o):e[n]=o}return e}function v(t){return t&&"object"==typeof t&&"toJSON"in t&&"function"==typeof t.toJSON}function I(t,n){return t?n&&"function"==typeof n?Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(n(e,t[e])))).join("&"):Object.keys(t).map((e=>{const r=t[e];if(null==r)return"";const o=encodeURIComponent(e)+"=",i=n&&n[e];return i?o+encodeURIComponent(i(r)):Array.isArray(r)?r.map((t=>v(t)?o+encodeURIComponent(JSON.stringify(t)):o+encodeURIComponent(t))).join("&"):v(r)?o+encodeURIComponent(JSON.stringify(r)):o+encodeURIComponent(r)})).filter((t=>t)).join("&"):""}function A(t=!1){let e,r=u.proxyUrl;if("string"==typeof t){e=ht(t);const n=J(t);n&&(r=n.proxyUrl)}else e=!!t;if(!r)throw s.warn(l),new _Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z("urlutils:proxy-not-set",l);e&&$t()&&(r=mt(r));return j(r)}function S(t){const n=J(t);let e,r;if(n){const t=P(n.proxyUrl);e=t.path,r=t.query?L(t.query):null}if(e){const n=j(t);t=e+"?"+n.path;const o=I({...r,...n.query});o&&(t=`${t}?${o}`)}return t}const B={path:"",query:""};function P(t){const n=t.indexOf("?");return-1!==n?(B.path=t.slice(0,n),B.query=t.slice(n+1)):(B.path=t,B.query=null),B}function k(t){return t=(t=xt(t=bt(t=P(t).path),!0)).toLowerCase()}function E(t){const n={proxyUrl:t.proxyUrl,urlPrefix:k(t.urlPrefix)},e=u.proxyRules,r=n.urlPrefix;let o=e.length;for(let i=0;i<e.length;i++){const t=e[i].urlPrefix;if(0===r.indexOf(t)){if(r.length===t.length)return-1;o=i;break}0===t.indexOf(r)&&(o=i+1)}return e.splice(o,0,n),o}function J(t){const n=u.proxyRules,e=k(t);for(let r=0;r<n.length;r++)if(0===e.indexOf(n[r].urlPrefix))return n[r]}function N(t,n){return t=T(t),n=T(n),xt(t)===xt(n)}function T(t){const n=(t=F(t)).indexOf("/sharing");return n>0?t.substring(0,n):t.replace(/\/+$/,"")}function W(t){const n=n=>null==n||n instanceof RegExp&&n.test(t)||"string"==typeof n&&t.startsWith(n),e=u.interceptors;if(e)for(const r of e)if(Array.isArray(r.urls)){if(r.urls.some(n))return r}else if(n(r.urls))return r;return null}function z(t,n,e=!1){if(!t||!n)return!1;const r=vt(t),o=vt(n);return!(!e&&r.scheme!==o.scheme)&&(null!=r.host&&null!=o.host&&(r.host.toLowerCase()===o.host.toLowerCase()&&r.port===o.port))}function D(t){if("string"==typeof t){if(!K(t))return!0;t=vt(t)}if(z(t,w))return!0;const n=u.trustedServers||[];for(let e=0;e<n.length;e++){const r=M(n[e]);for(let n=0;n<r.length;n++)if(z(t,r[n]))return!0}return!1}function M(t){return $[t]||(at(t)||ft(t)?$[t]=[new y(Q(t))]:$[t]=[new y(`http://${t}`),new y(`https://${t}`)]),$[t]}function Q(t,n=U,e){return ft(t)?e&&e.preserveProtocolRelative?t:"http"===w.scheme&&w.authority===H(t).slice(2)?`http:${t}`:`https:${t}`:at(t)?t:(0,_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .assumeNonNull */ .j0)(G("/"===t[0]?wt(n):n,t))}function _(t,n=U,e){if(null==t||!K(t))return t;const r=F(t),o=r.toLowerCase(),i=F(n).toLowerCase().replace(/\/+$/,""),s=e?F(e).toLowerCase().replace(/\/+$/,""):null;if(s&&0!==i.indexOf(s))return t;const u=(t,n,e)=>-1===(e=t.indexOf(n,e))?t.length:e;let l=u(o,"/",o.indexOf("//")+2),c=-1;for(;o.slice(0,l+1)===i.slice(0,l)+"/"&&(c=l+1,l!==o.length);)l=u(o,"/",l+1);if(-1===c)return t;if(s&&c<s.length)return t;t=r.slice(c);const f=i.slice(c-1).replace(/[^/]+/g,"").length;if(f>0)for(let a=0;a<f;a++)t=`../${t}`;else t=`./${t}`;return t}function F(t){return t=jt(t=Rt(t=qt(t=Q(t=t.trim()))))}function G(...t){const n=t.filter(_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .isSome */ .pC);if(!n||!n.length)return;const e=[];if(K(n[0])){const t=n[0],r=t.indexOf("//");-1!==r&&(e.push(t.slice(0,r+1)),dt(n[0])&&(e[0]+="/"),n[0]=t.slice(r+2))}else"/"===n[0][0]&&e.push("");const r=n.reduce(((t,n)=>n?t.concat(n.split("/")):t),[]);for(let o=0;o<r.length;o++){const t=r[o];".."===t&&e.length>0&&".."!==e[e.length-1]?e.pop():(!t&&o===r.length-1||t&&("."!==t||0===e.length))&&e.push(t)}return e.join("/")}function H(t,n=!1){if(null==t||V(t)||X(t))return null;let e=t.indexOf("://");if(-1===e&&ft(t))e=2;else{if(-1===e)return null;e+=3}const r=t.indexOf("/",e);return-1!==r&&(t=t.slice(0,r)),n&&(t=xt(t,!0)),t}function K(t){return ft(t)||at(t)}function V(t){return null!=t&&"blob:"===t.slice(0,5)}function X(t){return null!=t&&"data:"===t.slice(0,5)}function Y(t){const n=nt(t);if(!n||!n.isBase64)return null;const e=atob(n.data),r=new Uint8Array(e.length);for(let o=0;o<e.length;o++)r[o]=e.charCodeAt(o);return r.buffer}function Z(t){return btoa(String.fromCharCode.apply(null,t)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}const tt=/^data:(.*?)(;base64)?,(.*)$/;function nt(t){const n=t.match(tt);if(!n)return null;const[,e,r,o]=n;return{mediaType:e,isBase64:!!r,data:o}}function et(t){return t.isBase64?`data:${t.mediaType};base64,${t.data}`:`data:${t.mediaType},${t.data}`}function rt(t){const n=Y(t);if(!n)return null;const e=nt(t);return new Blob([n],{type:e.mediaType})}function ot(t,n){st(t,n)||lt(t,n)}function it(t,n){ut(t,n)||ct(t,n)}function st(t,n){const e=rt(t);return!!e&&ut(e,n)}function ut(t,n){if(!t)return!1;const e=document.createElement("a");if(!("download"in e))return!1;const r=URL.createObjectURL(t);return e.download=n,e.href=r,e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e),URL.revokeObjectURL(r),!0}function lt(t,n){const e=rt(t);return!!e&&ct(e,n)}function ct(t,n){return!!window.navigator.msSaveOrOpenBlob&&window.navigator.msSaveOrOpenBlob(t,n)}function ft(t){return null!=t&&"/"===t[0]&&"/"===t[1]}function at(t){return null!=t&&c.test(t)}function ht(t){return null!=t&&a.test(t)||"https"===w.scheme&&ft(t)}function pt(t){return null!=t&&f.test(t)||"http"===w.scheme&&ft(t)}function dt(t){return null!=t&&h.test(t)}function gt(t){return ft(t)?`http:${t}`:t.replace(a,"http:")}function mt(t){return ft(t)?`https:${t}`:t.replace(f,"https:")}function yt(){return"http"===w.scheme}function $t(){return"https"===w.scheme}function xt(t,n=!1){return ft(t)?t.slice(2):(t=t.replace(c,""),n&&t.length>1&&"/"===t[0]&&"/"===t[1]&&(t=t.slice(2)),t)}function wt(t){const n=t.indexOf("//"),e=t.indexOf("/",n+2);return-1===e?t:t.slice(0,e)}function Ot(t){let n=0;if(K(t)){const e=t.indexOf("//");-1!==e&&(n=e+2)}const e=t.lastIndexOf("/");return e<n?t:t.slice(0,e+1)}function Ut(t,n){if(!t)return"";const e=j(t).path.replace(/\/+$/,""),r=e.substring(e.lastIndexOf("/")+1);if(!n?.length)return r;const o=new RegExp(`.(${n.join("|")})$`,"ig");return r.replace(o,"")}function bt(t){return t&&"/"===t[t.length-1]?t:`${t}/`}function Ct(t){return t.replace(/\/+$/,"")}function qt(t){if(/^https?:\/\//i.test(t)){const n=P(t);t=(t=n.path.replace(/\/{2,}/g,"/")).replace("/","//"),n.query&&(t+=`?${n.query}`)}return t}function Rt(t){return t.replace(/^(https?:\/\/)(arcgis\.com)/i,"$1www.$2")}function jt(t){const n=u.httpsDomains;if(!pt(t))return t;const e=t.indexOf("/",7);let r;if(r=-1===e?t:t.slice(0,e),r=r.toLowerCase().slice(7),p.test(r)){if(!r.endsWith(":80"))return t;r=r.slice(0,-3),t=t.replace(":80","")}return yt()&&r===w.authority&&!d.test(t)||($t()&&r===w.authority||n&&n.some((t=>r===t||r.endsWith(`.${t}`)))||$t()&&!J(t))&&(t=mt(t)),t}function Lt(t,n,e){if(!(n&&e&&t&&K(t)))return t;const r=t.indexOf("//"),o=t.indexOf("/",r+2),i=t.indexOf(":",r+2),s=Math.min(o<0?t.length:o,i<0?t.length:i);if(t.slice(r+2,s).toLowerCase()!==n.toLowerCase())return t;return`${t.slice(0,r+2)}${e}${t.slice(s)}`}function vt(t){return"string"==typeof t?new y(Q(t)):(t.scheme||(t.scheme=w.scheme),t)}function It(t){return Nt.test(t)}function At(t,n){const e=j(t),r=Object.keys(e.query||{});return r.length>0&&n&&n.warn("removeQueryParameters()",`Url query parameters are not supported, the following parameters have been removed: ${r.join(", ")}.`),e.path}function St(t,n,e){const r=j(t),o=r.query||{};return o[n]=String(e),`${r.path}?${I(o)}`}function Bt(t,n){const e=j(t),r=e.query||{};for(const i in n)r[i]=n[i];const o=I(r);return o?`${e.path}?${o}`:e.path}function Pt(t,n){const{path:e,query:r}=j(t);if(!r)return t;delete r[n];const o=I(r);return o?`${e}?${o}`:e}function kt(t){if(i(t))return null;const n=t.match(Jt);return n?n[2]:null}function Et(t){if(i(t))return null;const n=t.match(Jt);return n?{path:n[1],extension:n[2]}:{path:t,extension:null}}const Jt=/([^.]*)\.([^\/]*)$/,Nt=/(^data:image\/svg|\.svg$)/i;


/***/ }),

/***/ 8256:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "id": () => (/* binding */ s),
/* harmony export */   "qh": () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports addTokenParameter, version, workerMessages */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9994);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3466);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const a="4.25",r={async request(t,a){const{default:r}=await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 4143)),s=t.options,n=s.responseType;s.signal=a?.signal,s.responseType="native"===n||"native-request-init"===n?"native-request-init":n&&["blob","json","text"].includes(n)&&(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getInterceptor */ .oh)(t.url)?.after?n:"array-buffer";const o=await r(t.url,s),i={data:o.data,ssl:o.ssl};switch(o.requestOptions?.responseType){case"native-request-init":return delete i.data.signal,i;case"blob":i.data=await i.data.arrayBuffer();break;case"json":i.data=(new TextEncoder).encode(JSON.stringify(i.data)).buffer;break;case"text":i.data=(new TextEncoder).encode(i.data).buffer}return{result:i,transferList:[i.data]}}};let s;function n(e){s=e}function o(e){const a=s&&s.findCredential(e);return a&&a.token?t(e,"token",a.token):e}(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("host-webworker");


/***/ }),

/***/ 1924:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ t)
/* harmony export */ });
/* unused harmony export parseKnownArcGISOnlineDomain */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const e=/^https:\/\/([a-z\d-]+)(\.maps([^.]*))?\.arcgis\.com/i,s={devext:{customBaseUrl:"mapsdevext.arcgis.com",portalHostname:"devext.arcgis.com"},qaext:{customBaseUrl:"mapsqa.arcgis.com",portalHostname:"qaext.arcgis.com"},www:{customBaseUrl:"maps.arcgis.com",portalHostname:"www.arcgis.com"}};function a(a){const t=a?.match(e);if(!t)return null;const[,r,o,l]=t;if(!r)return null;let c=null,m=null,n=null;const{devext:u,qaext:i,www:p}=s;if(o)if(c=r,l)switch(l.toLowerCase()){case"devext":({customBaseUrl:m,portalHostname:n}=u);break;case"qa":({customBaseUrl:m,portalHostname:n}=i);break;default:return null}else({customBaseUrl:m,portalHostname:n}=p);else switch(r.toLowerCase()){case"devext":({customBaseUrl:m,portalHostname:n}=u);break;case"qaext":({customBaseUrl:m,portalHostname:n}=i);break;case"www":({customBaseUrl:m,portalHostname:n}=p);break;default:return null}return{customBaseUrl:m,isPortal:!1,portalHostname:n,urlKey:c}}function t(e){return/\/(sharing|usrsvcs)\/(appservices|servers)\//i.test(e)}


/***/ }),

/***/ 4143:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ U)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/config.js
var config = __webpack_require__(1366);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/kernel.js
var kernel = __webpack_require__(8256);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var core_Error = __webpack_require__(375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(9994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js + 1 modules
var lang = __webpack_require__(186);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(1681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 2 modules
var promiseUtils = __webpack_require__(4353);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(3466);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/support/urlUtils.js
var support_urlUtils = __webpack_require__(1924);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/apiKeyUtils.js
var apiKeyUtils = __webpack_require__(9522);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/support/requestUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function c(r,t,n=!1,s){return new Promise(((i,c)=>{if((0,promiseUtils/* isAborted */.Hc)(s))return void c(a());let m=()=>{f(),c(new Error(`Unable to load ${t}`))},u=()=>{const e=r;f(),i(e)},d=()=>{if(!r)return;const e=r;f(),e.src="",c(a())};const f=()=>{(0,has/* default */.Z)("esri-image-decode")||(r.removeEventListener("error",m),r.removeEventListener("load",u)),m=null,u=null,r=null,(0,maybe/* isSome */.pC)(s)&&s.removeEventListener("abort",d),d=null,n&&URL.revokeObjectURL(t)};(0,maybe/* isSome */.pC)(s)&&s.addEventListener("abort",d),(0,has/* default */.Z)("esri-image-decode")?r.decode().then(u,m):(r.addEventListener("error",m),r.addEventListener("load",u))}))}function a(){try{return new DOMException("Aborted","AbortError")}catch{const r=new Error;return r.name="AbortError",r}}function m(e){config/* default.request.crossOriginNoCorsDomains */.Z.request.crossOriginNoCorsDomains||(config/* default.request.crossOriginNoCorsDomains */.Z.request.crossOriginNoCorsDomains={});const o=config/* default.request.crossOriginNoCorsDomains */.Z.request.crossOriginNoCorsDomains;for(let r of e)r=r.toLowerCase(),/^https?:\/\//.test(r)?o[(0,urlUtils/* getOrigin */.P$)(r)??""]=0:(o[(0,urlUtils/* getOrigin */.P$)("http://"+r)??""]=0,o[(0,urlUtils/* getOrigin */.P$)("https://"+r)??""]=0)}function requestUtils_u(e){const o=config/* default.request.crossOriginNoCorsDomains */.Z.request.crossOriginNoCorsDomains;if(o){let r=(0,urlUtils/* getOrigin */.P$)(e);if(r)return r=r.toLowerCase(),!(0,urlUtils/* hasSameOrigin */.D6)(r,(0,urlUtils/* getAppUrl */.TI)())&&o[r]<Date.now()-36e5}return!1}async function requestUtils_d(e){const o=config/* default.request.crossOriginNoCorsDomains */.Z.request.crossOriginNoCorsDomains,n=(0,urlUtils/* getOrigin */.P$)(e);o&&n&&(o[n.toLowerCase()]=Date.now());const s=(0,urlUtils/* urlToObject */.mN)(e);e=s.path,"json"===s.query?.f&&(e+="?f=json");try{await fetch(e,{mode:"no-cors",credentials:"include"})}catch{}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/request.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function U(e,r){const t=(0,urlUtils/* isDataProtocol */.HK)(e),s=(0,urlUtils/* isBlobProtocol */.jc)(e);s||t||(e=(0,urlUtils/* normalize */.Fv)(e));const n={url:e,requestOptions:{...(0,maybe/* unwrap */.Wg)(r)}};let i=(0,urlUtils/* getInterceptor */.oh)(e);if(i){const e=await G(i,n);if(null!=e)return{data:e,getHeader:M,requestOptions:n.requestOptions,url:n.url};i.after||i.error||(i=null)}if(e=n.url,"image"===(r=n.requestOptions).responseType){if((0,has/* default */.Z)("host-webworker")||(0,has/* default */.Z)("host-node"))throw N("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),n)}else if(t)throw N("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+r.responseType),n);if("head"===r.method){if(r.body)throw N("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),n);if(t||s)throw N("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),n)}if(await B(),j)return j.execute(e,r);const l=new AbortController;(0,promiseUtils/* onAbort */.fu)(r,(()=>l.abort()));const m={controller:l,credential:void 0,credentialToken:void 0,fetchOptions:void 0,hasToken:!1,interceptor:i,params:n,redoRequest:!1,useIdentity:P.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},h=await Q(m);return i?.after?.(h),h}let j;const P=config/* default.request */.Z.request,D="FormData"in globalThis,_=[499,498,403,401],F=["COM_0056","COM_0057","SB_0008"],I=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],M=()=>null,R=Symbol();function A(e){const r=(0,urlUtils/* getOrigin */.P$)(e);r&&!U._corsServers.includes(r)&&U._corsServers.push(r)}function H(e){const r=(0,urlUtils/* getOrigin */.P$)(e);return!r||r.endsWith(".arcgis.com")||U._corsServers.includes(r)||(0,urlUtils/* isTrustedServer */.kl)(r)}function N(e,r,o,a){let l="Error";const u={url:o.url,requestOptions:o.requestOptions,getHeader:M,ssl:!1};if(r instanceof core_Error/* default */.Z)return r.details?(r.details=(0,lang/* clone */.d9)(r.details),r.details.url=o.url,r.details.requestOptions=o.requestOptions):r.details=u,r;if(r){const e=a&&(e=>a.headers.get(e)),t=a&&a.status,s=r.message;s&&(l=s),e&&(u.getHeader=e),u.httpStatus=(null!=r.httpCode?r.httpCode:r.code)||t||0,u.subCode=r.subcode,u.messageCode=r.messageCode,"string"==typeof r.details?u.messages=[r.details]:u.messages=r.details,u.raw=R in r?r[R]:r}return (0,promiseUtils/* isAbortError */.D_)(r)?(0,promiseUtils/* createAbortError */.zE)():new core_Error/* default */.Z(e,l,u)}async function B(){(0,has/* default */.Z)("host-webworker")?j||(j=await __webpack_require__.e(/* import() */ 3714).then(__webpack_require__.bind(__webpack_require__, 3714))):U._abortableFetch||(U._abortableFetch=globalThis.fetch.bind(globalThis))}async function $(){kernel.id||await __webpack_require__.e(/* import() */ 5540).then(__webpack_require__.bind(__webpack_require__, 5540))}async function z(t){const s=t.params.url,o=t.params.requestOptions,a=t.controller.signal,n=o.body;let i=null,u=null;if(D&&"HTMLFormElement"in globalThis&&(n instanceof FormData?i=n:n instanceof HTMLFormElement&&(i=new FormData(n))),"string"==typeof n&&(u=n),t.fetchOptions={cache:o.cacheBust&&!U._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:o.headers||{},method:"head"===o.method?"HEAD":"GET",mode:"cors",priority:P.priority,redirect:"follow",signal:a},(i||u)&&(t.fetchOptions.body=i||u),"anonymous"===o.authMode&&(t.useIdentity=!1),t.hasToken=!!(/token=/i.test(s)||o.query?.token||i?.get("token")),!t.hasToken&&config/* default.apiKey */.Z.apiKey&&(0,apiKeyUtils/* supportsApiKey */.r)(s)&&(o.query||(o.query={}),o.query.token=config/* default.apiKey */.Z.apiKey,t.hasToken=!0),t.useIdentity&&!t.hasToken&&!t.credentialToken&&!K(s)&&!(0,promiseUtils/* isAborted */.Hc)(a)){let e;"immediate"===o.authMode?(await $(),e=await kernel.id.getCredential(s,{signal:a}),t.credential=e):"no-prompt"===o.authMode?(await $(),e=await kernel.id.getCredential(s,{prompt:!1,signal:a}).catch((()=>{})),t.credential=e):kernel.id&&(e=kernel.id.findCredential(s)),e&&(t.credentialToken=e.token,t.useSSL=!!e.ssl)}}function K(e){return I.some((r=>r.test(e)))}async function W(e){let t=e.params.url;const s=e.params.requestOptions,o=e.fetchOptions??{},a=(0,urlUtils/* isBlobProtocol */.jc)(t)||(0,urlUtils/* isDataProtocol */.HK)(t),n=s.responseType||"json",l=a?0:null!=s.timeout?s.timeout:P.timeout;let d=!1;if(!a){e.useSSL&&(t=(0,urlUtils/* toHTTPS */.hO)(t)),s.cacheBust&&"default"===o.cache&&(t=(0,urlUtils/* addQueryParameter */.ZN)(t,"request.preventCache",Date.now()));let a={...s.query};e.credentialToken&&(a.token=e.credentialToken);let n=(0,urlUtils/* objectToQuery */.B7)(a);(0,has/* default */.Z)("esri-url-encodes-apostrophe")&&(n=n.replace(/'/g,"%27"));const i=t.length+1+n.length;let l;d="delete"===s.method||"post"===s.method||"put"===s.method||!!s.body||i>P.maxUrlLength;const u=s.useProxy||!!(0,urlUtils/* getProxyRule */.ed)(t);if(u){const e=(0,urlUtils/* getProxyUrl */.b7)(t);l=e.path,!d&&l.length+1+i>P.maxUrlLength&&(d=!0),e.query&&(a={...e.query,...a})}if("HEAD"===o.method&&(d||u)){if(d){if(i>P.maxUrlLength)throw N("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw N("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(u)throw N("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(d?(o.method="delete"===s.method?"DELETE":"put"===s.method?"PUT":"POST",s.body?t=(0,urlUtils/* addQueryParameters */.fl)(t,a):(o.body=(0,urlUtils/* objectToQuery */.B7)(a),o.headers||(o.headers={}),o.headers["Content-Type"]="application/x-www-form-urlencoded")):t=(0,urlUtils/* addQueryParameters */.fl)(t,a),u&&(e.useProxy=!0,t=`${l}?${t}`),a.token&&D&&o.body instanceof FormData&&!(0,support_urlUtils/* isSecureProxyService */.P)(t)&&o.body.set("token",a.token),s.hasOwnProperty("withCredentials"))e.withCredentials=s.withCredentials;else if(!(0,urlUtils/* hasSameOrigin */.D6)(t,(0,urlUtils/* getAppUrl */.TI)()))if((0,urlUtils/* isTrustedServer */.kl)(t))e.withCredentials=!0;else if(kernel.id){const s=kernel.id.findServerInfo(t);s&&s.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(o.credentials="include",requestUtils_u(t)&&await requestUtils_d(d?(0,urlUtils/* addQueryParameters */.fl)(t,a):t))}let p,v,C=0,L=!1;l>0&&(C=setTimeout((()=>{L=!0,e.controller.abort()}),l));try{if("native-request-init"===s.responseType)v=o,v.url=t;else if("image"!==s.responseType||"default"!==o.cache||"GET"!==o.method||d||J(s.headers)||!a&&!e.useProxy&&P.proxyUrl&&!H(t)){if(p=await U._abortableFetch(t,o),e.useProxy||A(t),"native"===s.responseType)v=p;else if("HEAD"!==o.method)if(p.ok){switch(n){case"array-buffer":v=await p.arrayBuffer();break;case"blob":case"image":v=await p.blob();break;default:v=await p.text()}if(C&&(clearTimeout(C),C=0),"json"===n||"xml"===n||"document"===n)if(v)switch(n){case"json":v=JSON.parse(v);break;case"xml":v=X(v,"application/xml");break;case"document":v=X(v,"text/html")}else v=null;if(v){if("array-buffer"===n||"blob"===n){const e=p.headers.get("Content-Type");if(e&&/application\/json|text\/plain/i.test(e)&&v["blob"===n?"size":"byteLength"]<=750)try{const e=await new Response(v).json();e.error&&(v=e)}catch{}}"image"===n&&v instanceof Blob&&(v=await Y(URL.createObjectURL(v),e,!0))}}else v=await p.text()}else v=await Y(t,e)}catch(j){if("AbortError"===j.name){if(L)throw new Error("Timeout exceeded");throw (0,promiseUtils/* createAbortError */.zE)("Request canceled")}if(!(!p&&j instanceof TypeError&&P.proxyUrl)||s.body||"delete"===s.method||"head"===s.method||"post"===s.method||"put"===s.method||e.useProxy||H(t))throw j;e.redoRequest=!0,(0,urlUtils/* addProxyRule */.tD)({proxyUrl:P.proxyUrl,urlPrefix:(0,urlUtils/* getOrigin */.P$)(t)??""})}finally{C&&clearTimeout(C)}return[p,v]}async function G(e,r){if(null!=e.responseData)return e.responseData;if(e.headers&&(r.requestOptions.headers={...r.requestOptions.headers,...e.headers}),e.query&&(r.requestOptions.query={...r.requestOptions.query,...e.query}),e.before){let o,a;try{a=await e.before(r)}catch(s){o=N("request:interceptor",s,r)}if((a instanceof Error||a instanceof core_Error/* default */.Z)&&(o=N("request:interceptor",a,r)),o)throw e.error&&e.error(o),o;return a}}function J(e){if(e)for(const r of Object.getOwnPropertyNames(e))if(e[r])return!0;return!1}function X(e,r){let t;try{t=(new DOMParser).parseFromString(e,r)}catch{}if(!t||t.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return t}async function Q(e){let t,s;await z(e);try{do{[t,s]=await W(e)}while(!await V(e,t,s))}catch(n){const r=N("request:server",n,e.params,t);throw r.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(r),r}const o=e.params.url;if(s&&/\/sharing\/rest\/(accounts|portals)\/self/i.test(o)){if(!e.hasToken&&!e.credentialToken&&s.user?.username&&!(0,urlUtils/* isTrustedServer */.kl)(o)){const e=(0,urlUtils/* getOrigin */.P$)(o,!0);e&&P.trustedServers.push(e)}Array.isArray(s.authorizedCrossOriginNoCorsDomains)&&m(s.authorizedCrossOriginNoCorsDomains)}const a=e.credential;if(a&&kernel.id){const e=kernel.id.findServerInfo(a.server);let t=e&&e.owningSystemUrl;if(t){t=t.replace(/\/?$/,"/sharing");const e=kernel.id.findCredential(t,a.userId);e&&-1===kernel.id._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:s,getHeader:t?e=>t?.headers.get(e):M,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}async function V(e,t,s){if(e.redoRequest)return e.redoRequest=!1,!1;const o=e.params.requestOptions;if(!t||"native"===o.responseType||"native-request-init"===o.responseType)return!0;let a,n;if(!t.ok)throw a=new Error(`Unable to load ${t.url} status: ${t.status}`),a[R]=s,a;s&&(s.error?a=s.error:"error"===s.status&&Array.isArray(s.messages)&&(a={...s},a[R]=s,a.details=s.messages));let i,l=null;a&&(n=Number(a.code),l=a.hasOwnProperty("subcode")?Number(a.subcode):null,i=a.messageCode,i=i&&i.toUpperCase());const u=o.authMode;if(403===n&&(4===l||a.message&&a.message.toLowerCase().includes("ssl")&&!a.message.toLowerCase().includes("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==u||498===n)&&void 0!==n&&_.includes(n)&&!K(e.params.url)&&(403!==n||i&&!F.includes(i)&&(null==l||2===l&&e.credentialToken))){await $();try{const t=await kernel.id.getCredential(e.params.url,{error:N("request:server",a,e.params),prompt:"no-prompt"!==u,signal:e.controller.signal,token:e.credentialToken});return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(c){if("no-prompt"===u)return e.credential=void 0,e.credentialToken=void 0,!1;a=c}}if(a)throw a;return!0}function Y(e,r,t=!1){const s=r.controller.signal,o=new Image;return r.withCredentials?o.crossOrigin="use-credentials":o.crossOrigin="anonymous",o.alt="",o.fetchPriority=P.priority,o.src=e,c(o,e,t,s)}U._abortableFetch=null,U._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"];


/***/ }),

/***/ 7854:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "wC": () => (/* reexport */ locationToAddress_n)
});

// UNUSED EXPORTS: addressToLocations, addressesToLocations, suggestLocations

// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js + 1 modules
var request = __webpack_require__(4143);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/config.js
var config = __webpack_require__(1366);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/kernel.js
var kernel = __webpack_require__(8256);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js + 1 modules
var lang = __webpack_require__(186);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(3466);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/apiKeyUtils.js
var apiKeyUtils = __webpack_require__(9522);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/utils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function utils_i(r,t){return t?{...t,query:{...r,...t.query}}:{query:r}}function utils_f(r){return"string"==typeof r?(0,urlUtils/* urlToObject */.mN)(r):(0,lang/* clone */.d9)(r)}function utils_s(r,t,o){const e={};for(const n in r){if("declaredClass"===n)continue;const i=r[n];if(null!=i&&"function"!=typeof i)if(Array.isArray(i)){e[n]=[];for(let r=0;r<i.length;r++)e[n][r]=utils_s(i[r])}else if("object"==typeof i)if(i.toJSON){const r=i.toJSON(o&&o[n]);e[n]=t?r:JSON.stringify(r)}else e[n]=t?i:JSON.stringify(i);else e[n]=i}return e}function u(o,e){return n(o)&&(e||r.apiKey)?e||r.apiKey:t?.findCredential(o)?.token}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(6663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 4 modules
var JSONSupport = __webpack_require__(4678);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(1977);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js + 1 modules
var arrayUtils = __webpack_require__(5418);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js + 1 modules
var ensureType = __webpack_require__(1453);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(1681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/string.js
var string = __webpack_require__(1130);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function reader_o(o,e,t){let a,c;return void 0===e||Array.isArray(e)?(c=o,t=e,a=[void 0]):(c=e,a=Array.isArray(o)?o:[o]),(o,e)=>{const d=o.constructor.prototype;a.forEach((a=>{const s=(0,property/* propertyJSONMeta */.CJ)(o,a,c);s.read&&"object"==typeof s.read||(s.read={}),s.read.reader=d[e],t&&(s.read.source=(s.read.source||[]).concat(t))}))}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function writer_r(r,o,e){let i,n;return void 0===o?(n=r,i=[void 0]):"string"!=typeof o?(n=r,i=[void 0],e=o):(n=o,i=Array.isArray(r)?r:[r]),(r,o)=>{const p=r.constructor.prototype;for(const c of i){const i=(0,property/* propertyJSONMeta */.CJ)(r,c,n);i.write&&"object"==typeof i.write||(i.write={}),e&&(i.write.target=e),i.write.writer=p[o]}}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/SupportedGCSWkids.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var S;!function(S){S[S.CGCS2000=4490]="CGCS2000",S[S.GCSMARS2000=104971]="GCSMARS2000",S[S.GCSMARS2000_SPHERE=104905]="GCSMARS2000_SPHERE",S[S.GCSMOON2000=104903]="GCSMOON2000"}(S||(S={}));

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/WKIDUnitConversion.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let WKIDUnitConversion_o;const WKIDUnitConversion_r={values:[1,.3048,.3048006096012192,.3047972654,.9143917962,.201166195164,.9143984146160287,.3047994715386762,20.11676512155263,20.11678249437587,.9143985307444408,.91439523,.3047997101815088,20.1168,20.116756,5e4,15e4],units:["Meter","Foot","Foot_US","Foot_Clarke","Yard_Clarke","Link_Clarke","Yard_Sears","Foot_Sears","Chain_Sears","Chain_Benoit_1895_B","Yard_Indian","Yard_Indian_1937","Foot_Gold_Coast","Chain","Chain_Sears_1922_Truncated","50_Kilometers","150_Kilometers"],2066:5,2136:12,2155:2,2157:0,2158:0,2159:12,2160:12,2204:2,2219:0,2220:0,2254:2,2255:2,2256:1,2265:1,2266:1,2267:2,2268:2,2269:1,2270:1,2271:2,2272:2,2273:1,2294:0,2295:0,2314:3,2899:2,2900:2,2901:1,2909:1,2910:1,2911:2,2912:2,2913:1,2914:1,2992:1,2993:0,2994:1,3080:1,3089:2,3090:0,3091:2,3102:2,3141:0,3142:0,3167:14,3359:2,3360:0,3361:1,3362:0,3363:2,3364:0,3365:2,3366:3,3404:2,3405:0,3406:0,3407:3,3439:0,3440:0,3479:1,3480:0,3481:1,3482:0,3483:1,3484:0,3485:2,3486:0,3487:2,3488:0,3489:0,3490:2,3491:0,3492:2,3493:0,3494:2,3495:0,3496:2,3497:0,3498:2,3499:0,3500:2,3501:0,3502:2,3503:0,3504:2,3505:0,3506:2,3507:0,3508:2,3509:0,3510:2,3511:0,3512:2,3513:0,3514:0,3515:2,3516:0,3517:2,3518:0,3519:2,3520:0,3521:2,3522:0,3523:2,3524:0,3525:2,3526:0,3527:2,3528:0,3529:2,3530:0,3531:2,3532:0,3533:2,3534:0,3535:2,3536:0,3537:2,3538:0,3539:2,3540:0,3541:2,3542:0,3543:2,3544:0,3545:2,3546:0,3547:2,3548:0,3549:2,3550:0,3551:2,3552:0,3553:2,3582:2,3583:0,3584:2,3585:0,3586:2,3587:0,3588:1,3589:0,3590:1,3591:0,3592:0,3593:1,3598:2,3599:0,3600:2,3605:1,3606:0,3607:0,3608:2,3609:0,3610:2,3611:0,3612:2,3613:0,3614:2,3615:0,3616:2,3617:0,3618:2,3619:0,3620:2,3621:0,3622:2,3623:0,3624:2,3625:0,3626:2,3627:0,3628:2,3629:0,3630:2,3631:0,3632:2,3633:0,3634:1,3635:0,3636:1,3640:2,3641:0,3642:2,3643:0,3644:1,3645:0,3646:1,3647:0,3648:1,3649:0,3650:2,3651:0,3652:2,3653:0,3654:2,3655:0,3656:1,3657:0,3658:2,3659:0,3660:2,3661:0,3662:2,3663:0,3664:2,3668:2,3669:0,3670:2,3671:0,3672:2,3673:0,3674:2,3675:0,3676:1,3677:2,3678:0,3679:1,3680:2,3681:0,3682:1,3683:2,3684:0,3685:0,3686:2,3687:0,3688:2,3689:0,3690:2,3691:0,3692:2,3696:2,3697:0,3698:2,3699:0,3700:2,3793:0,3794:0,3812:0,3854:0,3857:0,3920:0,3978:0,3979:0,3991:2,3992:2,4026:0,4037:0,4038:0,4071:0,4082:0,4083:0,4087:0,4088:0,4217:2,4414:0,4415:0,4417:0,4434:0,4437:0,4438:2,4439:2,4462:0,4467:0,4471:0,4474:0,4559:0,4647:0,4822:0,4826:0,4839:0,5018:0,5048:0,5167:0,5168:0,5221:0,5223:0,5234:0,5235:0,5243:0,5247:0,5266:0,5316:0,5320:0,5321:0,5325:0,5337:0,5361:0,5362:0,5367:0,5382:0,5383:0,5396:0,5456:0,5457:0,5469:0,5472:4,5490:0,5513:0,5514:0,5523:0,5559:0,5588:1,5589:3,5596:0,5627:0,5629:0,5641:0,5643:0,5644:0,5646:2,5654:2,5655:2,5659:0,5700:0,5825:0,5836:0,5837:0,5839:0,5842:0,5844:0,5858:0,5879:0,5880:0,5887:0,5890:0,6128:1,6129:1,6141:1,6204:0,6210:0,6211:0,6307:0,6312:0,6316:0,6362:0,6391:1,6405:1,6406:0,6407:1,6408:0,6409:1,6410:0,6411:2,6412:0,6413:2,6414:0,6415:0,6416:2,6417:0,6418:2,6419:0,6420:2,6421:0,6422:2,6423:0,6424:2,6425:0,6426:2,6427:0,6428:2,6429:0,6430:2,6431:0,6432:2,6433:0,6434:2,6435:0,6436:2,6437:0,6438:2,6439:0,6440:0,6441:2,6442:0,6443:2,6444:0,6445:2,6446:0,6447:2,6448:0,6449:2,6450:0,6451:2,6452:0,6453:2,6454:0,6455:2,6456:0,6457:2,6458:0,6459:2,6460:0,6461:2,6462:0,6463:2,6464:0,6465:2,6466:0,6467:2,6468:0,6469:2,6470:0,6471:2,6472:0,6473:2,6474:0,6475:2,6476:0,6477:2,6478:0,6479:2,6484:2,6485:0,6486:2,6487:0,6488:2,6489:0,6490:2,6491:0,6492:2,6493:0,6494:1,6495:0,6496:1,6497:0,6498:0,6499:1,6500:0,6501:2,6502:0,6503:2,6504:0,6505:2,6506:0,6507:2,6508:0,6509:0,6510:2,6515:1,6516:0,6518:0,6519:2,6520:0,6521:2,6522:0,6523:2,6524:0,6525:2,6526:0,6527:2,6528:0,6529:2,6530:0,6531:2,6532:0,6533:2,6534:0,6535:2,6536:0,6537:2,6538:0,6539:2,6540:0,6541:2,6542:0,6543:2,6544:0,6545:1,6546:0,6547:1,6548:0,6549:2,6550:0,6551:2,6552:0,6553:2,6554:0,6555:2,6556:0,6557:1,6558:0,6559:1,6560:0,6561:1,6562:0,6563:2,6564:0,6565:2,6566:0,6567:0,6568:2,6569:0,6570:1,6571:0,6572:2,6573:0,6574:2,6575:0,6576:2,6577:0,6578:2,6582:2,6583:0,6584:2,6585:0,6586:2,6587:0,6588:2,6589:0,6590:2,6591:0,6592:0,6593:2,6594:0,6595:2,6596:0,6597:2,6598:0,6599:2,6600:0,6601:2,6602:0,6603:2,6605:2,6606:0,6607:2,6608:0,6609:2,6610:0,6611:0,6612:2,6613:0,6614:2,6615:0,6616:2,6617:0,6618:2,6633:2,6646:0,6703:0,6784:0,6785:1,6786:0,6787:1,6788:0,6789:1,6790:0,6791:1,6792:0,6793:1,6794:0,6795:1,6796:0,6797:1,6798:0,6799:1,6800:0,6801:1,6802:0,6803:1,6804:0,6805:1,6806:0,6807:1,6808:0,6809:1,6810:0,6811:1,6812:0,6813:1,6814:0,6815:1,6816:0,6817:1,6818:0,6819:1,6820:0,6821:1,6822:0,6823:1,6824:0,6825:1,6826:0,6827:1,6828:0,6829:1,6830:0,6831:1,6832:0,6833:1,6834:0,6835:1,6836:0,6837:1,6838:0,6839:1,6840:0,6841:1,6842:0,6843:1,6844:0,6845:1,6846:0,6847:1,6848:0,6849:1,6850:0,6851:1,6852:0,6853:1,6854:0,6855:1,6856:0,6857:1,6858:0,6859:1,6860:0,6861:1,6862:0,6863:1,6867:0,6868:1,6870:0,6875:0,6876:0,6879:0,6880:2,6884:0,6885:1,6886:0,6887:1,6915:0,6922:0,6923:2,6924:0,6925:2,6962:0,6984:0,6991:0,7128:2,7131:0,7132:2,7142:0,7257:0,7258:2,7259:0,7260:2,7261:0,7262:2,7263:0,7264:2,7265:0,7266:2,7267:0,7268:2,7269:0,7270:2,7271:0,7272:2,7273:0,7274:2,7275:0,7276:2,7277:0,7278:2,7279:0,7280:2,7281:0,7282:2,7283:0,7284:2,7285:0,7286:2,7287:0,7288:2,7289:0,7290:2,7291:0,7292:2,7293:0,7294:2,7295:0,7296:2,7297:0,7298:2,7299:0,7300:2,7301:0,7302:2,7303:0,7304:2,7305:0,7306:2,7307:0,7308:2,7309:0,7310:2,7311:0,7312:2,7313:0,7314:2,7315:0,7316:2,7317:0,7318:2,7319:0,7320:2,7321:0,7322:2,7323:0,7324:2,7325:0,7326:2,7327:0,7328:2,7329:0,7330:2,7331:0,7332:2,7333:0,7334:2,7335:0,7336:2,7337:0,7338:2,7339:0,7340:2,7341:0,7342:2,7343:0,7344:2,7345:0,7346:2,7347:0,7348:2,7349:0,7350:2,7351:0,7352:2,7353:0,7354:2,7355:0,7356:2,7357:0,7358:2,7359:0,7360:2,7361:0,7362:2,7363:0,7364:2,7365:0,7366:2,7367:0,7368:2,7369:0,7370:2,7877:0,7878:0,7882:0,7883:0,7887:0,7899:0,7991:0,7992:0,8035:2,8036:2,8058:0,8059:0,8082:0,8083:0,8088:0,8090:0,8091:2,8092:0,8093:2,8095:0,8096:2,8097:0,8098:2,8099:0,8100:2,8101:0,8102:2,8103:0,8104:2,8105:0,8106:2,8107:0,8108:2,8109:0,8110:2,8111:0,8112:2,8113:0,8114:2,8115:0,8116:2,8117:0,8118:2,8119:0,8120:2,8121:0,8122:2,8123:0,8124:2,8125:0,8126:2,8127:0,8128:2,8129:0,8130:2,8131:0,8132:2,8133:0,8134:2,8135:0,8136:2,8137:0,8138:2,8139:0,8140:2,8141:0,8142:2,8143:0,8144:2,8145:0,8146:2,8147:0,8148:2,8149:0,8150:2,8151:0,8152:2,8153:0,8154:2,8155:0,8156:2,8157:0,8158:2,8159:0,8160:2,8161:0,8162:2,8163:0,8164:2,8165:0,8166:2,8167:0,8168:2,8169:0,8170:2,8171:0,8172:2,8173:0,8177:2,8179:0,8180:2,8181:0,8182:2,8184:0,8185:2,8187:0,8189:2,8191:0,8193:2,8196:0,8197:2,8198:0,8200:2,8201:0,8202:2,8203:0,8204:2,8205:0,8206:2,8207:0,8208:2,8209:0,8210:2,8212:0,8213:2,8214:0,8216:2,8218:0,8220:2,8222:0,8224:2,8225:0,8226:2,8311:0,8312:1,8313:0,8314:1,8315:0,8316:1,8317:0,8318:1,8319:0,8320:1,8321:0,8322:1,8323:0,8324:1,8325:0,8326:1,8327:0,8328:1,8329:0,8330:1,8331:0,8332:1,8333:0,8334:1,8335:0,8336:1,8337:0,8338:1,8339:0,8340:1,8341:0,8342:1,8343:0,8344:1,8345:0,8346:1,8347:0,8348:1,8352:0,8353:0,8379:0,8380:2,8381:0,8382:2,8383:0,8384:2,8385:0,8387:2,8391:0,8395:0,8433:0,8441:0,8455:0,8456:0,8531:2,8682:0,8686:0,8687:0,8692:0,8693:0,8826:0,8903:0,8950:0,8951:0,9039:0,9040:0,9141:0,9149:0,9150:0,9191:0,9221:0,9222:0,9249:0,9250:0,9252:0,9254:0,9265:0,9284:0,9285:0,9300:0,9354:0,9367:0,9373:0,9377:0,9387:0,9391:0,9456:0,9473:0,9498:0,9674:0,9678:0,9680:0,9709:0,9712:0,9713:0,9716:0,9741:0,9748:2,9749:2,9761:0,9766:0,20499:0,20538:0,20539:0,20790:0,20791:0,21291:0,21292:0,21500:0,21817:0,21818:0,22032:0,22033:0,22091:0,22092:0,22332:0,22391:0,22392:0,22700:0,22770:0,22780:0,22832:0,23090:0,23095:0,23239:0,23240:0,23433:0,23700:0,24047:0,24048:0,24100:3,24200:0,24305:0,24306:0,24382:10,24383:0,24500:0,24547:0,24548:0,24571:9,24600:0,25e3:0,25231:0,25884:0,25932:0,26237:0,26331:0,26332:0,26432:0,26591:0,26592:0,26632:0,26692:0,27120:0,27200:0,27291:6,27292:6,27429:0,27492:0,27493:0,27500:0,27700:0,28232:0,28600:0,28991:0,28992:0,29100:0,29101:0,29220:0,29221:0,29333:0,29635:0,29636:0,29701:0,29738:0,29739:0,29849:0,29850:0,29871:8,29872:7,29873:0,29874:0,30200:5,30339:0,30340:0,30591:0,30592:0,30791:0,30792:0,30800:0,31028:0,31121:0,31154:0,31170:0,31171:0,31370:0,31528:0,31529:0,31600:0,31700:0,31838:0,31839:0,31900:0,31901:0,32061:0,32062:0,32098:0,32099:2,32100:0,32104:0,32161:0,32766:0,53048:0,53049:0,54090:0,54091:0,65061:2,65062:2,65161:0,65163:0,102041:2,102064:11,102068:15,102069:16,102118:2,102119:1,102120:2,102121:2,102217:2,102218:0,102219:2,102220:2,102378:1,102379:1,102380:0,102381:1,102589:2,102599:2,102600:2,102604:2,102647:0,102704:2,102705:2,102706:0,102759:1,102760:1,102761:2,102762:0,102763:2,102764:0,102765:0,102766:2,102970:1,102974:2,102993:0,102994:0,102995:2,102996:2,103015:0,103016:2,103017:0,103018:2,103025:0,103026:0,103027:2,103028:2,103035:0,103036:0,103037:2,103038:2,103039:0,103040:0,103041:2,103042:2,103043:0,103044:0,103045:2,103046:2,103047:0,103048:0,103049:2,103050:2,103051:0,103052:2,103053:0,103054:2,103055:0,103056:2,103057:0,103058:0,103059:2,103060:2,103061:0,103062:0,103063:2,103064:2,103069:2,103070:0,103071:0,103072:2,103073:2,103086:0,103087:0,103088:2,103089:2,103094:1,103095:0,103096:2,103103:0,103104:2,103105:0,103106:2,103121:0,103122:2,103123:0,103124:0,103125:1,103126:1,103127:0,103128:0,103129:2,103130:2,103131:0,103132:0,103133:2,103134:2,103135:0,103136:0,103137:1,103138:1,103139:0,103140:2,103141:0,103142:2,103143:0,103144:2,103145:0,103146:1,103147:0,103148:0,103149:2,103150:2,103151:0,103152:2,103172:0,103173:2,103174:0,103175:0,103176:2,103177:2,103178:0,103179:0,103180:2,103181:2,103182:0,103183:0,103184:2,103185:2,103228:0,103229:0,103230:2,103231:2,103250:0,103251:2,103252:0,103253:2,103260:0,103261:0,103262:2,103263:2,103270:0,103271:0,103272:2,103273:2,103274:0,103275:0,103276:2,103277:2,103278:0,103279:0,103280:2,103281:2,103282:0,103283:0,103284:2,103285:2,103286:0,103287:2,103288:0,103289:2,103290:0,103291:2,103292:0,103293:0,103294:2,103295:2,103296:0,103297:0,103298:2,103299:2,103376:2,103377:0,103378:0,103379:2,103380:2,103393:0,103394:0,103395:2,103396:2,103472:0,103473:1,103474:0,103475:2,103482:0,103483:2,103484:0,103485:2,103500:0,103501:2,103502:0,103503:0,103504:1,103505:1,103506:0,103507:0,103508:2,103509:2,103510:0,103511:0,103512:2,103513:2,103514:0,103515:2,103516:0,103517:2,103518:0,103519:2,103520:0,103521:1,103522:0,103523:0,103524:2,103525:2,103526:0,103527:2,103561:2,103562:2,103563:0,103564:0,103565:2,103566:2,103567:0,103568:0,103569:2,103570:2,103584:0,103585:2,103586:0,103587:2,103588:1,103589:0,103590:2,103591:1,103592:0,103593:2,103594:1,103695:2};for(WKIDUnitConversion_o=2e3;WKIDUnitConversion_o<=2045;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=2056;WKIDUnitConversion_o<=2065;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=2067;WKIDUnitConversion_o<=2135;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=2137;WKIDUnitConversion_o<=2154;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=2161;WKIDUnitConversion_o<=2170;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=2172;WKIDUnitConversion_o<=2193;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=2195;WKIDUnitConversion_o<=2198;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=2200;WKIDUnitConversion_o<=2203;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=2205;WKIDUnitConversion_o<=2217;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=2222;WKIDUnitConversion_o<=2224;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=1;for(WKIDUnitConversion_o=2225;WKIDUnitConversion_o<=2250;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=2251;WKIDUnitConversion_o<=2253;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=1;for(WKIDUnitConversion_o=2257;WKIDUnitConversion_o<=2264;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=2274;WKIDUnitConversion_o<=2279;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=2280;WKIDUnitConversion_o<=2282;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=1;for(WKIDUnitConversion_o=2283;WKIDUnitConversion_o<=2289;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=2290;WKIDUnitConversion_o<=2292;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=2308;WKIDUnitConversion_o<=2313;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=2315;WKIDUnitConversion_o<=2491;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=2494;WKIDUnitConversion_o<=2866;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=2867;WKIDUnitConversion_o<=2869;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=1;for(WKIDUnitConversion_o=2870;WKIDUnitConversion_o<=2888;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=2891;WKIDUnitConversion_o<=2895;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=2896;WKIDUnitConversion_o<=2898;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=1;for(WKIDUnitConversion_o=2902;WKIDUnitConversion_o<=2908;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=2915;WKIDUnitConversion_o<=2920;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=2921;WKIDUnitConversion_o<=2923;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=1;for(WKIDUnitConversion_o=2924;WKIDUnitConversion_o<=2930;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=2931;WKIDUnitConversion_o<=2962;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=2964;WKIDUnitConversion_o<=2968;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=2969;WKIDUnitConversion_o<=2973;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=2975;WKIDUnitConversion_o<=2991;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=2995;WKIDUnitConversion_o<=3051;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3054;WKIDUnitConversion_o<=3079;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3081;WKIDUnitConversion_o<=3088;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3092;WKIDUnitConversion_o<=3101;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3106;WKIDUnitConversion_o<=3138;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3146;WKIDUnitConversion_o<=3151;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3153;WKIDUnitConversion_o<=3166;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3168;WKIDUnitConversion_o<=3172;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3174;WKIDUnitConversion_o<=3203;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3294;WKIDUnitConversion_o<=3358;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3367;WKIDUnitConversion_o<=3403;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3408;WKIDUnitConversion_o<=3416;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3417;WKIDUnitConversion_o<=3438;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=3441;WKIDUnitConversion_o<=3446;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=3447;WKIDUnitConversion_o<=3450;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3451;WKIDUnitConversion_o<=3459;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=3460;WKIDUnitConversion_o<=3478;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3554;WKIDUnitConversion_o<=3559;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3560;WKIDUnitConversion_o<=3570;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=3571;WKIDUnitConversion_o<=3581;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3594;WKIDUnitConversion_o<=3597;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3601;WKIDUnitConversion_o<=3604;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3637;WKIDUnitConversion_o<=3639;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3665;WKIDUnitConversion_o<=3667;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3693;WKIDUnitConversion_o<=3695;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3701;WKIDUnitConversion_o<=3727;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3728;WKIDUnitConversion_o<=3739;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=3740;WKIDUnitConversion_o<=3751;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3753;WKIDUnitConversion_o<=3760;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=3761;WKIDUnitConversion_o<=3773;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3775;WKIDUnitConversion_o<=3777;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3779;WKIDUnitConversion_o<=3781;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3783;WKIDUnitConversion_o<=3785;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3788;WKIDUnitConversion_o<=3791;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3797;WKIDUnitConversion_o<=3802;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3814;WKIDUnitConversion_o<=3816;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3825;WKIDUnitConversion_o<=3829;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3832;WKIDUnitConversion_o<=3841;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3844;WKIDUnitConversion_o<=3852;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3873;WKIDUnitConversion_o<=3885;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3890;WKIDUnitConversion_o<=3893;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3907;WKIDUnitConversion_o<=3912;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3942;WKIDUnitConversion_o<=3950;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3968;WKIDUnitConversion_o<=3970;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3973;WKIDUnitConversion_o<=3976;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3986;WKIDUnitConversion_o<=3989;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=3994;WKIDUnitConversion_o<=3997;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=4048;WKIDUnitConversion_o<=4051;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=4056;WKIDUnitConversion_o<=4063;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=4093;WKIDUnitConversion_o<=4096;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=4390;WKIDUnitConversion_o<=4398;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=4399;WKIDUnitConversion_o<=4413;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=4418;WKIDUnitConversion_o<=4433;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=4455;WKIDUnitConversion_o<=4457;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=4484;WKIDUnitConversion_o<=4489;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=4491;WKIDUnitConversion_o<=4554;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=4568;WKIDUnitConversion_o<=4589;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=4652;WKIDUnitConversion_o<=4656;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=4766;WKIDUnitConversion_o<=4800;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5014;WKIDUnitConversion_o<=5016;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5069;WKIDUnitConversion_o<=5072;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5105;WKIDUnitConversion_o<=5130;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5173;WKIDUnitConversion_o<=5188;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5253;WKIDUnitConversion_o<=5259;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5269;WKIDUnitConversion_o<=5275;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5292;WKIDUnitConversion_o<=5311;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5329;WKIDUnitConversion_o<=5331;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5343;WKIDUnitConversion_o<=5349;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5355;WKIDUnitConversion_o<=5357;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5387;WKIDUnitConversion_o<=5389;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5459;WKIDUnitConversion_o<=5463;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5479;WKIDUnitConversion_o<=5482;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5518;WKIDUnitConversion_o<=5520;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5530;WKIDUnitConversion_o<=5539;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5550;WKIDUnitConversion_o<=5552;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5562;WKIDUnitConversion_o<=5583;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5623;WKIDUnitConversion_o<=5625;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=5631;WKIDUnitConversion_o<=5639;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5649;WKIDUnitConversion_o<=5653;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5663;WKIDUnitConversion_o<=5680;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5682;WKIDUnitConversion_o<=5685;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5875;WKIDUnitConversion_o<=5877;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5896;WKIDUnitConversion_o<=5899;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=5921;WKIDUnitConversion_o<=5940;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=6050;WKIDUnitConversion_o<=6125;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=6244;WKIDUnitConversion_o<=6275;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=6328;WKIDUnitConversion_o<=6348;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=6350;WKIDUnitConversion_o<=6356;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=6366;WKIDUnitConversion_o<=6372;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=6381;WKIDUnitConversion_o<=6387;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=6393;WKIDUnitConversion_o<=6404;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=6480;WKIDUnitConversion_o<=6483;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=6511;WKIDUnitConversion_o<=6514;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=6579;WKIDUnitConversion_o<=6581;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=6619;WKIDUnitConversion_o<=6624;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=6625;WKIDUnitConversion_o<=6627;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=6628;WKIDUnitConversion_o<=6632;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=6634;WKIDUnitConversion_o<=6637;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=6669;WKIDUnitConversion_o<=6692;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=6707;WKIDUnitConversion_o<=6709;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=6720;WKIDUnitConversion_o<=6723;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=6732;WKIDUnitConversion_o<=6738;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=6931;WKIDUnitConversion_o<=6933;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=6956;WKIDUnitConversion_o<=6959;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=7005;WKIDUnitConversion_o<=7007;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=7057;WKIDUnitConversion_o<=7070;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=7074;WKIDUnitConversion_o<=7082;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=7109;WKIDUnitConversion_o<=7118;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=7119;WKIDUnitConversion_o<=7127;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=1;for(WKIDUnitConversion_o=7374;WKIDUnitConversion_o<=7376;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=7528;WKIDUnitConversion_o<=7586;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=7587;WKIDUnitConversion_o<=7645;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=7692;WKIDUnitConversion_o<=7696;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=7755;WKIDUnitConversion_o<=7787;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=7791;WKIDUnitConversion_o<=7795;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=7799;WKIDUnitConversion_o<=7801;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=7803;WKIDUnitConversion_o<=7805;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=7825;WKIDUnitConversion_o<=7831;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=7845;WKIDUnitConversion_o<=7859;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=8013;WKIDUnitConversion_o<=8032;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=8065;WKIDUnitConversion_o<=8068;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=1;for(WKIDUnitConversion_o=8518;WKIDUnitConversion_o<=8529;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=8533;WKIDUnitConversion_o<=8536;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=8538;WKIDUnitConversion_o<=8540;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=8677;WKIDUnitConversion_o<=8679;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=8836;WKIDUnitConversion_o<=8840;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=8857;WKIDUnitConversion_o<=8859;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=8908;WKIDUnitConversion_o<=8910;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=9154;WKIDUnitConversion_o<=9159;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=9205;WKIDUnitConversion_o<=9218;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=9271;WKIDUnitConversion_o<=9273;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=9295;WKIDUnitConversion_o<=9297;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=9356;WKIDUnitConversion_o<=9360;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=9404;WKIDUnitConversion_o<=9407;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=9476;WKIDUnitConversion_o<=9482;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=9487;WKIDUnitConversion_o<=9494;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=9697;WKIDUnitConversion_o<=9699;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=20002;WKIDUnitConversion_o<=20032;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=20062;WKIDUnitConversion_o<=20092;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=20135;WKIDUnitConversion_o<=20138;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=20248;WKIDUnitConversion_o<=20258;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=20348;WKIDUnitConversion_o<=20358;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=20436;WKIDUnitConversion_o<=20440;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=20822;WKIDUnitConversion_o<=20824;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=20904;WKIDUnitConversion_o<=20932;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=20934;WKIDUnitConversion_o<=20936;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=21004;WKIDUnitConversion_o<=21032;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=21035;WKIDUnitConversion_o<=21037;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=21095;WKIDUnitConversion_o<=21097;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=21148;WKIDUnitConversion_o<=21150;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=21207;WKIDUnitConversion_o<=21264;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=21307;WKIDUnitConversion_o<=21364;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=21413;WKIDUnitConversion_o<=21423;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=21453;WKIDUnitConversion_o<=21463;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=21473;WKIDUnitConversion_o<=21483;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=21780;WKIDUnitConversion_o<=21782;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=21891;WKIDUnitConversion_o<=21894;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=21896;WKIDUnitConversion_o<=21899;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=22171;WKIDUnitConversion_o<=22177;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=22181;WKIDUnitConversion_o<=22187;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=22191;WKIDUnitConversion_o<=22197;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=22234;WKIDUnitConversion_o<=22236;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=22521;WKIDUnitConversion_o<=22525;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=22991;WKIDUnitConversion_o<=22994;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=23028;WKIDUnitConversion_o<=23038;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=23830;WKIDUnitConversion_o<=23853;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=23866;WKIDUnitConversion_o<=23872;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=23877;WKIDUnitConversion_o<=23884;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=23886;WKIDUnitConversion_o<=23894;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=23946;WKIDUnitConversion_o<=23948;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=24311;WKIDUnitConversion_o<=24313;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=24342;WKIDUnitConversion_o<=24347;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=24370;WKIDUnitConversion_o<=24374;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=10;for(WKIDUnitConversion_o=24375;WKIDUnitConversion_o<=24381;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=24718;WKIDUnitConversion_o<=24721;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=24817;WKIDUnitConversion_o<=24821;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=24877;WKIDUnitConversion_o<=24882;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=24891;WKIDUnitConversion_o<=24893;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=25391;WKIDUnitConversion_o<=25395;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=25828;WKIDUnitConversion_o<=25838;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=26191;WKIDUnitConversion_o<=26195;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=26391;WKIDUnitConversion_o<=26393;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=26701;WKIDUnitConversion_o<=26722;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=26729;WKIDUnitConversion_o<=26799;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=26801;WKIDUnitConversion_o<=26803;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=26811;WKIDUnitConversion_o<=26813;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=26847;WKIDUnitConversion_o<=26870;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=26891;WKIDUnitConversion_o<=26899;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=26901;WKIDUnitConversion_o<=26923;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=26929;WKIDUnitConversion_o<=26946;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=26948;WKIDUnitConversion_o<=26998;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=27037;WKIDUnitConversion_o<=27040;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=27205;WKIDUnitConversion_o<=27232;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=27258;WKIDUnitConversion_o<=27260;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=27391;WKIDUnitConversion_o<=27398;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=27561;WKIDUnitConversion_o<=27564;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=27571;WKIDUnitConversion_o<=27574;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=27581;WKIDUnitConversion_o<=27584;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=27591;WKIDUnitConversion_o<=27594;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=28191;WKIDUnitConversion_o<=28193;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=28348;WKIDUnitConversion_o<=28358;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=28402;WKIDUnitConversion_o<=28432;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=28462;WKIDUnitConversion_o<=28492;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=29118;WKIDUnitConversion_o<=29122;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=29168;WKIDUnitConversion_o<=29172;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=29177;WKIDUnitConversion_o<=29185;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=29187;WKIDUnitConversion_o<=29195;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=29900;WKIDUnitConversion_o<=29903;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=30161;WKIDUnitConversion_o<=30179;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=30491;WKIDUnitConversion_o<=30494;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=30729;WKIDUnitConversion_o<=30732;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=31251;WKIDUnitConversion_o<=31259;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=31265;WKIDUnitConversion_o<=31268;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=31275;WKIDUnitConversion_o<=31279;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=31281;WKIDUnitConversion_o<=31297;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=31461;WKIDUnitConversion_o<=31469;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=31491;WKIDUnitConversion_o<=31495;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=31917;WKIDUnitConversion_o<=31922;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=31965;WKIDUnitConversion_o<=32e3;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=32001;WKIDUnitConversion_o<=32003;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=32005;WKIDUnitConversion_o<=32031;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=32033;WKIDUnitConversion_o<=32060;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=32064;WKIDUnitConversion_o<=32067;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=32074;WKIDUnitConversion_o<=32077;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=32081;WKIDUnitConversion_o<=32086;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=32107;WKIDUnitConversion_o<=32130;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=32133;WKIDUnitConversion_o<=32158;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=32164;WKIDUnitConversion_o<=32167;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=32180;WKIDUnitConversion_o<=32199;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=32201;WKIDUnitConversion_o<=32260;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=32301;WKIDUnitConversion_o<=32360;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=32601;WKIDUnitConversion_o<=32662;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=32664;WKIDUnitConversion_o<=32667;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=32701;WKIDUnitConversion_o<=32761;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=53001;WKIDUnitConversion_o<=53004;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=53008;WKIDUnitConversion_o<=53019;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=53021;WKIDUnitConversion_o<=53032;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=53034;WKIDUnitConversion_o<=53037;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=53042;WKIDUnitConversion_o<=53046;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=53074;WKIDUnitConversion_o<=53080;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=54001;WKIDUnitConversion_o<=54004;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=54008;WKIDUnitConversion_o<=54019;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=54021;WKIDUnitConversion_o<=54032;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=54034;WKIDUnitConversion_o<=54037;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=54042;WKIDUnitConversion_o<=54046;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=54048;WKIDUnitConversion_o<=54053;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=54074;WKIDUnitConversion_o<=54080;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=54098;WKIDUnitConversion_o<=54101;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102001;WKIDUnitConversion_o<=102040;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102042;WKIDUnitConversion_o<=102063;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102065;WKIDUnitConversion_o<=102067;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102070;WKIDUnitConversion_o<=102117;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102122;WKIDUnitConversion_o<=102216;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102221;WKIDUnitConversion_o<=102377;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102382;WKIDUnitConversion_o<=102388;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102389;WKIDUnitConversion_o<=102398;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=102399;WKIDUnitConversion_o<=102444;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102445;WKIDUnitConversion_o<=102447;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=102448;WKIDUnitConversion_o<=102458;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102459;WKIDUnitConversion_o<=102468;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=102469;WKIDUnitConversion_o<=102499;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102500;WKIDUnitConversion_o<=102519;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=1;for(WKIDUnitConversion_o=102520;WKIDUnitConversion_o<=102524;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102525;WKIDUnitConversion_o<=102529;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=102530;WKIDUnitConversion_o<=102588;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102590;WKIDUnitConversion_o<=102598;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102601;WKIDUnitConversion_o<=102603;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102605;WKIDUnitConversion_o<=102628;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102629;WKIDUnitConversion_o<=102646;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=102648;WKIDUnitConversion_o<=102700;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=102701;WKIDUnitConversion_o<=102703;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102707;WKIDUnitConversion_o<=102730;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=102733;WKIDUnitConversion_o<=102758;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=102767;WKIDUnitConversion_o<=102900;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102901;WKIDUnitConversion_o<=102933;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=102934;WKIDUnitConversion_o<=102950;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=13;for(WKIDUnitConversion_o=102951;WKIDUnitConversion_o<=102955;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102961;WKIDUnitConversion_o<=102963;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102965;WKIDUnitConversion_o<=102969;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102971;WKIDUnitConversion_o<=102973;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102975;WKIDUnitConversion_o<=102989;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=102990;WKIDUnitConversion_o<=102992;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=1;for(WKIDUnitConversion_o=102997;WKIDUnitConversion_o<=103002;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103003;WKIDUnitConversion_o<=103008;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103009;WKIDUnitConversion_o<=103011;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103012;WKIDUnitConversion_o<=103014;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103019;WKIDUnitConversion_o<=103021;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103022;WKIDUnitConversion_o<=103024;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103029;WKIDUnitConversion_o<=103031;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103032;WKIDUnitConversion_o<=103034;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103065;WKIDUnitConversion_o<=103068;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103074;WKIDUnitConversion_o<=103076;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103077;WKIDUnitConversion_o<=103079;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=1;for(WKIDUnitConversion_o=103080;WKIDUnitConversion_o<=103082;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103083;WKIDUnitConversion_o<=103085;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103090;WKIDUnitConversion_o<=103093;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103097;WKIDUnitConversion_o<=103099;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103100;WKIDUnitConversion_o<=103102;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103107;WKIDUnitConversion_o<=103109;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103110;WKIDUnitConversion_o<=103112;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103113;WKIDUnitConversion_o<=103116;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103117;WKIDUnitConversion_o<=103120;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103153;WKIDUnitConversion_o<=103157;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103158;WKIDUnitConversion_o<=103162;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103163;WKIDUnitConversion_o<=103165;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103166;WKIDUnitConversion_o<=103168;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=1;for(WKIDUnitConversion_o=103169;WKIDUnitConversion_o<=103171;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103186;WKIDUnitConversion_o<=103188;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103189;WKIDUnitConversion_o<=103191;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103192;WKIDUnitConversion_o<=103195;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103196;WKIDUnitConversion_o<=103199;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103200;WKIDUnitConversion_o<=103224;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103225;WKIDUnitConversion_o<=103227;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=1;for(WKIDUnitConversion_o=103232;WKIDUnitConversion_o<=103237;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103238;WKIDUnitConversion_o<=103243;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103244;WKIDUnitConversion_o<=103246;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103247;WKIDUnitConversion_o<=103249;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103254;WKIDUnitConversion_o<=103256;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103257;WKIDUnitConversion_o<=103259;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103264;WKIDUnitConversion_o<=103266;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103267;WKIDUnitConversion_o<=103269;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103300;WKIDUnitConversion_o<=103375;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103381;WKIDUnitConversion_o<=103383;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103384;WKIDUnitConversion_o<=103386;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=1;for(WKIDUnitConversion_o=103387;WKIDUnitConversion_o<=103389;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103390;WKIDUnitConversion_o<=103392;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103397;WKIDUnitConversion_o<=103399;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103400;WKIDUnitConversion_o<=103471;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103476;WKIDUnitConversion_o<=103478;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103479;WKIDUnitConversion_o<=103481;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103486;WKIDUnitConversion_o<=103488;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103489;WKIDUnitConversion_o<=103491;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103492;WKIDUnitConversion_o<=103495;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103496;WKIDUnitConversion_o<=103499;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103528;WKIDUnitConversion_o<=103543;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103544;WKIDUnitConversion_o<=103548;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103549;WKIDUnitConversion_o<=103551;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103552;WKIDUnitConversion_o<=103554;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=1;for(WKIDUnitConversion_o=103555;WKIDUnitConversion_o<=103557;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103558;WKIDUnitConversion_o<=103560;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103571;WKIDUnitConversion_o<=103573;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103574;WKIDUnitConversion_o<=103576;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103577;WKIDUnitConversion_o<=103580;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103581;WKIDUnitConversion_o<=103583;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103595;WKIDUnitConversion_o<=103694;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103696;WKIDUnitConversion_o<=103699;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103700;WKIDUnitConversion_o<=103793;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;for(WKIDUnitConversion_o=103794;WKIDUnitConversion_o<=103887;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=0;for(WKIDUnitConversion_o=103900;WKIDUnitConversion_o<=103971;WKIDUnitConversion_o++)WKIDUnitConversion_r[WKIDUnitConversion_o]=2;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const spatialReferenceUtils_t={102113:!0,102100:!0,3857:!0,3785:!0},_={4326:!0,3785:!0,3857:!0,102113:!0,102100:!0,104905:!0,104971:!0},spatialReferenceUtils_l='PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator_Auxiliary_Sphere"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],PARAMETER["Auxiliary_Sphere_Type",0.0],UNIT["Meter",1.0]]',M=[-20037508.342788905,20037508.342788905],spatialReferenceUtils_S=[-20037508.342787,20037508.342787],d={102113:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:M,origin:spatialReferenceUtils_S,dx:1e-5},102100:{wkTemplate:spatialReferenceUtils_l,valid:M,origin:spatialReferenceUtils_S,dx:1e-5},3785:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:M,origin:spatialReferenceUtils_S,dx:1e-5},3857:{wkTemplate:spatialReferenceUtils_l,valid:M,origin:spatialReferenceUtils_S,dx:1e-5},4326:{wkTemplate:'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",{Central_Meridian}],UNIT["Degree",0.0174532925199433]]',altTemplate:'PROJCS["WGS_1984_Plate_Carree",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Plate_Carree"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],UNIT["Degrees",111319.491]]',valid:[-180,180],origin:[-180,90],dx:1e-5},104971:{wkTemplate:'GEOGCS["Mars_2000_(Sphere)",DATUM["Mars_2000_(Sphere)",SPHEROID["Mars_2000_(Sphere)",3396190.0,0.0]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',valid:[-180,180],origin:[-180,90],dx:1e-5},104905:{wkTemplate:'GEOGCS["GCS_Mars_2000",DATUM["D_Mars_2000",SPHEROID["Mars_2000_IAU_IAG",3396190.0,169.8944472236118]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',valid:[-180,180],origin:[-180,90],dx:1e-5}};function E(r,i){return r===i||!(0,maybe/* isNone */.Wi)(r)&&!(0,maybe/* isNone */.Wi)(i)&&(null!=r.wkid||null!=i.wkid?r.wkid===i.wkid||k(r)&&k(i)||null!=i.latestWkid&&r.wkid===i.latestWkid||null!=r.latestWkid&&i.wkid===r.latestWkid:!(!r.wkt||!i.wkt)&&r.wkt.toUpperCase()===i.wkt.toUpperCase())}function R(e){return I(e)&&e.wkid&&d[e.wkid]||null}function spatialReferenceUtils_o(e){return!!I(e)&&(e.wkid?null==WKIDUnitConversion_r[e.wkid]:!!e.wkt&&!!/^\s*GEOGCS/i.test(e.wkt))}function A(e){return!(P(e)||spatialReferenceUtils_s(e))}function G(e){return I(e)&&4326===e.wkid}function spatialReferenceUtils_u(e){return I(e)&&e.wkid===n.CGCS2000}function k(e){return I(e)&&null!=e.wkid&&!0===spatialReferenceUtils_t[e.wkid]}function T(e){return I(e)&&32662===e.wkid}function w(e){return e===n.GCSMARS2000||e===n.GCSMARS2000_SPHERE}function P(e){return I(e)&&null!=e.wkid&&w(e.wkid)}function C(e){return e===n.GCSMOON2000}function spatialReferenceUtils_s(e){return I(e)&&null!=e.wkid&&C(e.wkid)}function p(e){return I(e)&&null!=e.wkid&&!0===_[e.wkid]}function I(e){return (0,maybe/* isSome */.pC)(e)&&(null!=e.wkid&&e.wkid>=2e3||null!=e.wkt)}const c={wkid:4326,wkt:(0,string/* replace */.gx)(d[4326].wkTemplate,{Central_Meridian:"0.0"})},D={wkid:102100,latestWkid:3857},O={wkid:32662};

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var y;let SpatialReference_S=y=class extends JSONSupport/* JSONSupport */.wq{constructor(e){super(e),this.latestWkid=null,this.wkid=null,this.wkt=null,this.vcsWkid=null,this.latestVcsWkid=null,this.imageCoordinateSystem=null}static fromJSON(e){if(!e)return null;if(e.wkid){if(102100===e.wkid)return y.WebMercator;if(4326===e.wkid)return y.WGS84}const t=new y;return t.read(e),t}normalizeCtorArgs(e){if(e&&"object"==typeof e)return e;return{["string"==typeof e?"wkt":"wkid"]:e}}get isWGS84(){return G(this)}get isWebMercator(){return k(this)}get isGeographic(){return spatialReferenceUtils_o(this)}get isWrappable(){return p(this)}writeWkt(e,t){this.wkid||(t.wkt=e)}clone(){if(this===y.WGS84)return y.WGS84;if(this===y.WebMercator)return y.WebMercator;const e=new y;return null!=this.wkid?(e.wkid=this.wkid,null!=this.latestWkid&&(e.latestWkid=this.latestWkid),null!=this.vcsWkid&&(e.vcsWkid=this.vcsWkid),null!=this.latestVcsWkid&&(e.latestVcsWkid=this.latestVcsWkid)):null!=this.wkt&&(e.wkt=this.wkt),this.imageCoordinateSystem&&(e.imageCoordinateSystem=(0,lang/* clone */.d9)(this.imageCoordinateSystem)),e}equals(e){if(null==e)return!1;if(this.imageCoordinateSystem||e.imageCoordinateSystem){if(null==this.imageCoordinateSystem||null==e.imageCoordinateSystem)return!1;const{id:t,referenceServiceName:r}=e.imageCoordinateSystem,{geodataXform:i}=e.imageCoordinateSystem,o=this.imageCoordinateSystem;return null==t||i?JSON.stringify(o)===JSON.stringify(e.imageCoordinateSystem):r?o.id===t&&o.referenceServiceName===r:o.id===t}return E(this,e)}toJSON(e){return this.write(void 0,e)}};SpatialReference_S.GCS_NAD_1927=null,SpatialReference_S.WGS84=null,SpatialReference_S.WebMercator=null,SpatialReference_S.PlateCarree=null,(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],SpatialReference_S.prototype,"isWGS84",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],SpatialReference_S.prototype,"isWebMercator",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],SpatialReference_S.prototype,"isGeographic",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],SpatialReference_S.prototype,"isWrappable",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:ensureType/* Integer */.z8,json:{write:!0}})],SpatialReference_S.prototype,"latestWkid",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:ensureType/* Integer */.z8,json:{write:!0,origins:{"web-scene":{write:{overridePolicy(){return{isRequired:null===this.wkt}}}}}}})],SpatialReference_S.prototype,"wkid",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{origins:{"web-scene":{write:{overridePolicy(){return{isRequired:null===this.wkid}}}}}}})],SpatialReference_S.prototype,"wkt",void 0),(0,tslib_es6._)([writer_r("wkt"),writer_r("web-scene","wkt")],SpatialReference_S.prototype,"writeWkt",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:ensureType/* Integer */.z8,json:{write:!0}})],SpatialReference_S.prototype,"vcsWkid",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:ensureType/* Integer */.z8,json:{write:!0}})],SpatialReference_S.prototype,"latestVcsWkid",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],SpatialReference_S.prototype,"imageCoordinateSystem",void 0),SpatialReference_S=y=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.geometry.SpatialReference")],SpatialReference_S),SpatialReference_S.prototype.toJSON.isDefaultToJSON=!0,SpatialReference_S.GCS_NAD_1927=new SpatialReference_S({wkid:4267,wkt:'GEOGCS["GCS_North_American_1927",DATUM["D_North_American_1927",SPHEROID["Clarke_1866",6378206.4,294.9786982]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]'}),SpatialReference_S.WGS84=new SpatialReference_S(c),SpatialReference_S.WebMercator=new SpatialReference_S(D),SpatialReference_S.PlateCarree=new SpatialReference_S(O),Object.freeze&&(Object.freeze(SpatialReference_S.GCS_NAD_1927),Object.freeze(SpatialReference_S.WGS84),Object.freeze(SpatialReference_S.WebMercator));const SpatialReference_k=SpatialReference_S;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/Geometry.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let Geometry_c=class extends JSONSupport/* JSONSupport */.wq{constructor(...e){super(...e),this.type=null,this.hasM=!1,this.hasZ=!1,this.spatialReference=SpatialReference_k.WGS84}get cache(){return this.commitProperty("spatialReference"),{}}get extent(){return null}readSpatialReference(e,r){if(e instanceof SpatialReference_k)return e;if(null!=e){const t=new SpatialReference_k;return t.read(e,r),t}return e}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}clearCache(){this.notifyChange("cache")}getCacheValue(e){return this.cache[e]}setCacheValue(e,r){this.cache[e]=r}};(0,tslib_es6._)([(0,property/* property */.Cb)()],Geometry_c.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],Geometry_c.prototype,"cache",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],Geometry_c.prototype,"extent",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],Geometry_c.prototype,"hasM",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],Geometry_c.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:SpatialReference_k,json:{write:!0}})],Geometry_c.prototype,"spatialReference",void 0),(0,tslib_es6._)([reader_o("spatialReference")],Geometry_c.prototype,"readSpatialReference",null),Geometry_c=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.geometry.Geometry")],Geometry_c);const Geometry_p=Geometry_c;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(3802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(2003);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/pointUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function pointUtils_t(t,n){const s=t.x-n.x,r=t.y-n.y,a=t.hasZ&&n.hasZ?t.z-n.z:0;return Math.sqrt(s*s+r*r+a*a)}function pointUtils_n(t,n){const s=t.x-n.x,r=t.y-n.y,a=t.hasZ&&n.hasZ?t.z-n.z:0;return s*s+r*r+a*a}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/Ellipsoid.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class Ellipsoid_i{constructor(i,s,t,e){this.semiMajorAxis=i,this.flattening=s,this.outerAtmosphereRimWidth=t;const h=1-this.flattening;this.semiMinorAxis=this.semiMajorAxis*h,this.halfSemiMajorAxis=this.semiMajorAxis/2,this.halfCircumference=Math.PI*this.semiMajorAxis,this.metersPerDegree=this.halfCircumference/180,this.inverseFlattening=1/(1-this.flattening)-1,this.eccentricitySquared=e||2*this.flattening-this.flattening*this.flattening,this.meanRadiusSemiAxes=(2*this.semiMajorAxis+this.semiMinorAxis)/3}get radius(){return this.semiMajorAxis}}const Ellipsoid_s=new Ellipsoid_i(6378137,1/298.257223563,3e5,.006694379990137799),Ellipsoid_t=new Ellipsoid_i(3396190,1/169.8944472236118,23e4),Ellipsoid_e=new Ellipsoid_i(1737400,0,0);

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/webMercatorUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const webMercatorUtils_o=57.29577951308232,webMercatorUtils_u=.017453292519943;function webMercatorUtils_l(n){return n*webMercatorUtils_o}function webMercatorUtils_p(n){return n*webMercatorUtils_u}function f(n){return n/i.radius}function webMercatorUtils_c(n){return Math.PI/2-2*Math.atan(Math.exp(-n/i.radius))}function h(n){return null!=n.wkid||null!=n.wkt}const webMercatorUtils_m=[0,0];function x(n,t,e,i,r){const s=n,a=r;if(a.spatialReference=e,"x"in s&&"x"in a)[a.x,a.y]=t(s.x,s.y,webMercatorUtils_m,i);else if("xmin"in s&&"xmin"in a)[a.xmin,a.ymin]=t(s.xmin,s.ymin,webMercatorUtils_m,i),[a.xmax,a.ymax]=t(s.xmax,s.ymax,webMercatorUtils_m,i);else if("paths"in s&&"paths"in a||"rings"in s&&"rings"in a){const n="paths"in s?s.paths:s.rings,e=[];let r;for(let s=0;s<n.length;s++){const a=n[s];r=[],e.push(r);for(let n=0;n<a.length;n++)r.push(t(a[n][0],a[n][1],[0,0],i)),a[n].length>2&&r[n].push(a[n][2]),a[n].length>3&&r[n].push(a[n][3])}"paths"in a?a.paths=e:a.rings=e}else if("points"in s&&"points"in a){const n=s.points,e=[];for(let r=0;r<n.length;r++)e[r]=t(n[r][0],n[r][1],[0,0],i),n[r].length>2&&e[r].push(n[r][2]),n[r].length>3&&e[r].push(n[r][3]);a.points=e}return r}function g(n,t){const e=n&&(h(n)?n:n.spatialReference),i=t&&(h(t)?t:t.spatialReference);return!(n&&"type"in n&&"mesh"===n.type||t&&"type"in t&&"mesh"===t.type||!e||!i)&&(!!E(i,e)||(k(i)&&G(e)||k(e)&&G(i)))}function webMercatorUtils_M(i,o){if((0,maybe/* isNone */.Wi)(i))return null;const u=i.spatialReference,l=o&&(h(o)?o:o.spatialReference);return g(u,l)?E(u,l)?(0,lang/* clone */.d9)(i):k(l)?x(i,webMercatorUtils_y,SpatialReference_k.WebMercator,!1,(0,lang/* clone */.d9)(i)):G(l)?x(i,webMercatorUtils_d,SpatialReference_k.WGS84,!1,(0,lang/* clone */.d9)(i)):null:null}function webMercatorUtils_y(n,t,e=[0,0]){t>89.99999?t=89.99999:t<-89.99999&&(t=-89.99999);const r=webMercatorUtils_p(t);return e[0]=webMercatorUtils_p(n)*Ellipsoid_s.radius,e[1]=Ellipsoid_s.halfSemiMajorAxis*Math.log((1+Math.sin(r))/(1-Math.sin(r))),e}function webMercatorUtils_d(n,t,e=[0,0],r=!1){const s=webMercatorUtils_l(n/Ellipsoid_s.radius);return e[0]=r?s:s-360*Math.floor((s+180)/360),e[1]=webMercatorUtils_l(Math.PI/2-2*Math.atan(Math.exp(-t/Ellipsoid_s.radius))),e}function webMercatorUtils_R(t,i=!1,r=(0,lang/* clone */.d9)(t)){return x(t,webMercatorUtils_y,SpatialReference_k.WebMercator,i,r)}function j(t,i=!1,r=(0,lang/* clone */.d9)(t)){return x(t,webMercatorUtils_d,SpatialReference_k.WGS84,i,r)}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/Point.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var Point_m;const Point_f=[0,0];function Point_g(e){return e&&("esri.geometry.SpatialReference"===e.declaredClass||null!=e.wkid)}let Point_x=Point_m=class extends Geometry_p{constructor(...e){super(...e),this.x=0,this.y=0,this.z=void 0,this.m=void 0,this.type="point"}static copy(e,t){t._set("x",e._get("x")),t._set("y",e._get("y")),t._set("z",e._get("z")),t._set("m",e._get("m"));const r=e._get("spatialReference");t._set("spatialReference",Object.isFrozen(r)?r:r.clone())}normalizeCtorArgs(e,r,s,i,o){let a;if(Array.isArray(e))a=e,o=r,e=a[0],r=a[1],s=a[2],i=a[3];else if(e&&"object"==typeof e){if(a=e,e=null!=a.x?a.x:a.longitude,r=null!=a.y?a.y:a.latitude,s=a.z,i=a.m,(o=a.spatialReference)&&"esri.geometry.SpatialReference"!==o.declaredClass&&(o=new SpatialReference_k(o)),null!=a.longitude||null!=a.latitude)if(null==a.longitude)Logger/* default.getLogger */.Z.getLogger(this.declaredClass).warn(".longitude=","Latitude was defined without longitude");else if(null==a.latitude)Logger/* default.getLogger */.Z.getLogger(this.declaredClass).warn(".latitude=","Longitude was defined without latitude");else if(!a.declaredClass&&o&&o.isWebMercator){const t=webMercatorUtils_y(a.longitude,a.latitude,Point_f);e=t[0],r=t[1]}}else Point_g(s)?(o=s,s=null):Point_g(i)&&(o=i,i=null);const l={x:e,y:r};return null==l.x&&null!=l.y?Logger/* default.getLogger */.Z.getLogger(this.declaredClass).warn(".y=","Y coordinate was defined without an X coordinate"):null==l.y&&null!=l.x&&Logger/* default.getLogger */.Z.getLogger(this.declaredClass).warn(".x=","X coordinate was defined without a Y coordinate"),null!=o&&(l.spatialReference=o),null!=s&&(l.z=s),null!=i&&(l.m=i),l}get cache(){return this.commitProperty("x"),this.commitProperty("y"),this.commitProperty("z"),this.commitProperty("m"),this.commitProperty("spatialReference"),{}}get hasM(){return void 0!==this.m}set hasM(e){e!==(void 0!==this._get("m"))&&(this._set("m",e?0:void 0),this._set("hasM",e))}get hasZ(){return void 0!==this.z}set hasZ(e){e!==(void 0!==this._get("z"))&&(this._set("z",e?0:void 0),this._set("hasZ",e))}get latitude(){const{spatialReference:e,x:t,y:r}=this;if(e){if(e.isWebMercator)return webMercatorUtils_d(t,r,Point_f)[1];if(e.isGeographic)return r}return null}set latitude(e){const{spatialReference:t,x:r}=this;null!=e&&t&&(t.isWebMercator?this._set("y",webMercatorUtils_y(r,e,Point_f)[1]):t.isGeographic&&this._set("y",e),this._set("latitude",e))}get longitude(){const{x:e,y:t,spatialReference:r}=this;if(r){if(r.isWebMercator)return webMercatorUtils_d(e,t,Point_f)[0];if(r.isGeographic)return e}return null}set longitude(e){const{y:t,spatialReference:r}=this;null!=e&&r&&(r.isWebMercator?this._set("x",webMercatorUtils_y(e,t,Point_f)[0]):r.isGeographic&&this._set("x",e),this._set("longitude",e))}writeX(e,t,r){t[r]=isNaN(e)?"NaN":e}readX(e){return"string"==typeof e?NaN:e}clone(){const e=new Point_m;return e.x=this.x,e.y=this.y,e.z=this.z,e.m=this.m,e.spatialReference=this.spatialReference,e}copy(e){return Point_m.copy(e,this),this}equals(e){if((0,maybe/* isNone */.Wi)(e))return!1;const{x:t,y:s,z:i,m:o,spatialReference:a}=this,{z:l,m:n}=e;let{x:c,y:u,spatialReference:p}=e;if(!a.equals(p))if(a.isWebMercator&&p.isWGS84)[c,u]=webMercatorUtils_y(c,u),p=a;else{if(!a.isWGS84||!p.isWebMercator)return!1;[c,u]=webMercatorUtils_d(c,u),p=a}return t===c&&s===u&&i===l&&o===n&&a.wkid===p.wkid}offset(e,t,r){return this.x+=e,this.y+=t,null!=r&&(this.z=(this.z??0)+r),this}normalize(){if(!this.spatialReference)return this;const e=R(this.spatialReference);if(!e)return this;let t=this.x;const[r,s]=e.valid,i=2*s;let o;return t>s?(o=Math.ceil(Math.abs(t-s)/i),t-=o*i):t<r&&(o=Math.ceil(Math.abs(t-r)/i),t+=o*i),this._set("x",t),this}distance(e){return pointUtils_t(this,e)}toArray(){const e=this.hasZ,t=this.hasM;return e&&t?[this.x,this.y,this.z,this.m]:e?[this.x,this.y,this.z]:t?[this.x,this.y,this.m]:[this.x,this.y]}toJSON(e){return this.write({},e)}};(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],Point_x.prototype,"cache",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],Point_x.prototype,"hasM",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],Point_x.prototype,"hasZ",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number})],Point_x.prototype,"latitude",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number})],Point_x.prototype,"longitude",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{type:[Number,String],write:{isRequired:!0,allowNull:!0}}}),(0,cast/* cast */.p)((e=>isNaN(e)?e:(0,ensureType/* ensureNumber */.q9)(e)))],Point_x.prototype,"x",void 0),(0,tslib_es6._)([writer_r("x")],Point_x.prototype,"writeX",null),(0,tslib_es6._)([reader_o("x")],Point_x.prototype,"readX",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{write:!0}})],Point_x.prototype,"y",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{write:{overridePolicy(){return{enabled:this.hasZ}}}}})],Point_x.prototype,"z",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{write:{overridePolicy(){return{enabled:this.hasM}}}}})],Point_x.prototype,"m",void 0),Point_x=Point_m=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.geometry.Point")],Point_x),Point_x.prototype.toJSON.isDefaultToJSON=!0;const Point_w=Point_x;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/contains.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const contains_t=[0,0];function contains_r(t,r){return!!(0,maybe/* isSome */.pC)(r)&&contains_f(t,r.x,r.y,r.z)}function contains_i(n,t){if(!t.points||t.points.length)return!1;for(const r of t.points)if(!contains_u(n,r))return!1;return!0}function contains_o(n,t){const{xmin:r,ymin:i,zmin:o,xmax:u,ymax:e,zmax:c}=t;return n.hasZ&&t.hasZ?contains_f(n,r,i,o)&&contains_f(n,r,e,o)&&contains_f(n,u,e,o)&&contains_f(n,u,i,o)&&contains_f(n,r,i,c)&&contains_f(n,r,e,c)&&contains_f(n,u,e,c)&&contains_f(n,u,i,c):contains_f(n,r,i)&&contains_f(n,r,e)&&contains_f(n,u,e)&&contains_f(n,u,i)}function contains_u(n,t){return contains_f(n,t[0],t[1])}function contains_e(n,t){return contains_f(n,t[0],t[1],t[2])}function contains_f(n,t,r,i){return t>=n.xmin&&t<=n.xmax&&r>=n.ymin&&r<=n.ymax&&(null==i||!n.hasZ||i>=n.zmin&&i<=n.zmax)}function contains_c(n,r){return contains_t[1]=r.y,contains_t[0]=r.x,contains_m(n,contains_t)}function contains_m(n,t){return contains_s(n.rings,t)}function contains_s(n,t){if(!n)return!1;if(contains_x(n))return contains_a(!1,n,t);let r=!1;for(let i=0,o=n.length;i<o;i++)r=contains_a(r,n[i],t);return r}function contains_x(n){return!Array.isArray(n[0][0])}function contains_a(n,t,r){const[i,o]=r;let u=n,e=0;for(let f=0,c=t.length;f<c;f++){e++,e===c&&(e=0);const[n,r]=t[f],[m,s]=t[e];(r<o&&s>=o||s<o&&r>=o)&&n+(o-r)/(s-r)*(m-n)<i&&(u=!u)}return u}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/intersectsBase.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function intersectsBase_i(t,e){return contains_r(t,e)}function intersectsBase_o(n,t){const e=n.hasZ&&t.hasZ;let r,i,o;if(n.xmin<=t.xmin){if(r=t.xmin,n.xmax<r)return!1}else if(r=n.xmin,t.xmax<r)return!1;if(n.ymin<=t.ymin){if(i=t.ymin,n.ymax<i)return!1}else if(i=n.ymin,t.ymax<i)return!1;if(e&&t.hasZ)if(n.zmin<=t.zmin){if(o=t.zmin,n.zmax<o)return!1}else if(o=n.zmin,t.zmax<o)return!1;return!0}function intersectsBase_f(n,t){const{points:i,hasZ:o}=t,f=o?contains_e:contains_u;for(const e of i)if(f(n,e))return!0;return!1}const intersectsBase_s=[0,0],intersectsBase_u=[0,0],intersectsBase_c=[0,0],intersectsBase_m=[0,0],intersectsBase_l=[intersectsBase_s,intersectsBase_u,intersectsBase_c,intersectsBase_m],intersectsBase_a=[[intersectsBase_c,intersectsBase_s],[intersectsBase_s,intersectsBase_u],[intersectsBase_u,intersectsBase_m],[intersectsBase_m,intersectsBase_c]];function intersectsBase_x(n,t){return intersectsBase_y(n,t.rings)}function intersectsBase_y(n,r){intersectsBase_s[0]=n.xmin,intersectsBase_s[1]=n.ymax,intersectsBase_u[0]=n.xmax,intersectsBase_u[1]=n.ymax,intersectsBase_c[0]=n.xmin,intersectsBase_c[1]=n.ymin,intersectsBase_m[0]=n.xmax,intersectsBase_m[1]=n.ymin;for(const e of intersectsBase_l)if(contains_s(r,e))return!0;for(const t of r){if(!t.length)continue;let r=t[0];if(contains_u(n,r))return!0;for(let i=1;i<t.length;i++){const o=t[i];if(contains_u(n,o)||z(r,o,intersectsBase_a))return!0;r=o}}return!1}function intersectsBase_h(n,t){intersectsBase_s[0]=n.xmin,intersectsBase_s[1]=n.ymax,intersectsBase_u[0]=n.xmax,intersectsBase_u[1]=n.ymax,intersectsBase_c[0]=n.xmin,intersectsBase_c[1]=n.ymin,intersectsBase_m[0]=n.xmax,intersectsBase_m[1]=n.ymin;const r=t.paths;for(const i of r){if(!r.length)continue;let t=i[0];if(contains_u(n,t))return!0;for(let r=1;r<i.length;r++){const o=i[r];if(contains_u(n,o)||z(t,o,intersectsBase_a))return!0;t=o}}return!1}const intersectsBase_g=[0,0];function intersectsBase_p(n){for(let t=0;t<n.length;t++){const e=n[t];for(let i=0;i<e.length-1;i++){const r=e[i],o=e[i+1];for(let e=t+1;e<n.length;e++)for(let t=0;t<n[e].length-1;t++){const i=n[e][t],f=n[e][t+1];if(intersectsBase_G(r,o,i,f,intersectsBase_g)&&!(intersectsBase_g[0]===r[0]&&intersectsBase_g[1]===r[1]||intersectsBase_g[0]===i[0]&&intersectsBase_g[1]===i[1]||intersectsBase_g[0]===o[0]&&intersectsBase_g[1]===o[1]||intersectsBase_g[0]===f[0]&&intersectsBase_g[1]===f[1]))return!0}}const r=e.length;if(!(r<=4))for(let n=0;n<r-3;n++){let t=r-1;0===n&&(t=r-2);const i=e[n],o=e[n+1];for(let r=n+2;r<t;r++){const n=e[r],t=e[r+1];if(intersectsBase_G(i,o,n,t,intersectsBase_g)&&!(intersectsBase_g[0]===i[0]&&intersectsBase_g[1]===i[1]||intersectsBase_g[0]===n[0]&&intersectsBase_g[1]===n[1]||intersectsBase_g[0]===o[0]&&intersectsBase_g[1]===o[1]||intersectsBase_g[0]===t[0]&&intersectsBase_g[1]===t[1]))return!0}}}return!1}function z(n,t,e){for(let r=0;r<e.length;r++)if(intersectsBase_G(n,t,e[r][0],e[r][1]))return!0;return!1}function intersectsBase_G(n,t,e,r,i){const[o,f]=n,[s,u]=t,[c,m]=e,[l,a]=r,x=l-c,y=o-c,h=s-o,g=a-m,p=f-m,z=u-f,G=g*h-x*z;if(0===G)return!1;const Z=(x*p-g*y)/G,P=(h*p-z*y)/G;return Z>=0&&Z<=1&&P>=0&&P<=1&&(i&&(i[0]=o+Z*(s-o),i[1]=f+Z*(u-f)),!0)}function Z(n){switch(n){case"esriGeometryEnvelope":case"extent":return intersectsBase_o;case"esriGeometryMultipoint":case"multipoint":return intersectsBase_f;case"esriGeometryPoint":case"point":return intersectsBase_i;case"esriGeometryPolygon":case"polygon":return intersectsBase_x;case"esriGeometryPolyline":case"polyline":return intersectsBase_h}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var Extent_f;function Extent_d(t){return t&&("esri.geometry.SpatialReference"===t.declaredClass||null!=t.wkid)}function Extent_z(t,i,e){return null==i?e:null==e?i:t(i,e)}let Extent_M=Extent_f=class extends Geometry_p{constructor(...t){super(...t),this.type="extent",this.xmin=0,this.ymin=0,this.mmin=void 0,this.zmin=void 0,this.xmax=0,this.ymax=0,this.mmax=void 0,this.zmax=void 0}normalizeCtorArgs(t,i,e,s,n){return Extent_d(t)?{spatialReference:t,xmin:0,ymin:0,xmax:0,ymax:0}:"object"==typeof t?(t.spatialReference=null==t.spatialReference?SpatialReference_k.WGS84:t.spatialReference,t):{xmin:t,ymin:i,xmax:e,ymax:s,spatialReference:n??SpatialReference_k.WGS84}}static fromBounds(t,i){return new Extent_f({xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3],spatialReference:i})}static fromPoint(t){return new Extent_f({xmin:t.x,ymin:t.y,zmin:t.z,xmax:t.x,ymax:t.y,zmax:t.z,spatialReference:t.spatialReference})}get cache(){return this.commitProperty("xmin"),this.commitProperty("ymin"),this.commitProperty("zmin"),this.commitProperty("mmin"),this.commitProperty("xmax"),this.commitProperty("ymax"),this.commitProperty("zmax"),this.commitProperty("mmax"),this.commitProperty("spatialReference"),{}}get center(){const t=new Point_w({x:.5*(this.xmin+this.xmax),y:.5*(this.ymin+this.ymax),spatialReference:this.spatialReference});return this.hasZ&&(t.z=.5*(this.zmin+this.zmax)),this.hasM&&(t.m=.5*(this.mmin+this.mmax)),t}get extent(){return this.clone()}get hasM(){return null!=this.mmin&&null!=this.mmax}get hasZ(){return null!=this.zmin&&null!=this.zmax}get height(){return Math.abs(this.ymax-this.ymin)}get width(){return Math.abs(this.xmax-this.xmin)}centerAt(t){const i=this.center;return null!=t.z&&this.hasZ?this.offset(t.x-i.x,t.y-i.y,t.z-i.z):this.offset(t.x-i.x,t.y-i.y)}clone(){const t=new Extent_f;return t.xmin=this.xmin,t.ymin=this.ymin,t.xmax=this.xmax,t.ymax=this.ymax,t.spatialReference=this.spatialReference,null!=this.zmin&&(t.zmin=this.zmin,t.zmax=this.zmax),null!=this.mmin&&(t.mmin=this.mmin,t.mmax=this.mmax),t}contains(t){if(!t)return!1;const i=this.spatialReference,e=t.spatialReference;return i&&e&&!i.equals(e)&&g(i,e)&&(t=i.isWebMercator?webMercatorUtils_R(t):j(t,!0)),"point"===t.type?contains_r(this,t):"extent"===t.type&&contains_o(this,t)}equals(t){if(this===t)return!0;if((0,maybe/* isNone */.Wi)(t))return!1;const e=this.spatialReference,s=t.spatialReference;return e&&s&&!e.equals(s)&&g(e,s)&&(t=e.isWebMercator?webMercatorUtils_R(t):j(t,!0)),this.xmin===t.xmin&&this.ymin===t.ymin&&this.zmin===t.zmin&&this.mmin===t.mmin&&this.xmax===t.xmax&&this.ymax===t.ymax&&this.zmax===t.zmax&&this.mmax===t.mmax}expand(t){const i=.5*(1-t),e=this.width*i,s=this.height*i;if(this.xmin+=e,this.ymin+=s,this.xmax-=e,this.ymax-=s,this.hasZ){const t=(this.zmax-this.zmin)*i;this.zmin+=t,this.zmax-=t}if(this.hasM){const t=(this.mmax-this.mmin)*i;this.mmin+=t,this.mmax-=t}return this}intersects(t){if((0,maybe/* isNone */.Wi)(t))return!1;"mesh"===t.type&&(t=t.extent);const e=this.spatialReference,s=t.spatialReference;e&&s&&!E(e,s)&&g(e,s)&&(t=e.isWebMercator?webMercatorUtils_R(t):j(t,!0));return Z(t.type)(this,t)}normalize(){const t=this._normalize(!1,!0);return Array.isArray(t)?t:[t]}offset(t,i,e){return this.xmin+=t,this.ymin+=i,this.xmax+=t,this.ymax+=i,null!=e&&(this.zmin+=e,this.zmax+=e),this}shiftCentralMeridian(){return this._normalize(!0)}union(t){return this===t||(this.xmin=Math.min(this.xmin,t.xmin),this.ymin=Math.min(this.ymin,t.ymin),this.xmax=Math.max(this.xmax,t.xmax),this.ymax=Math.max(this.ymax,t.ymax),(this.hasZ||t.hasZ)&&(this.zmin=Extent_z(Math.min,this.zmin,t.zmin),this.zmax=Extent_z(Math.max,this.zmax,t.zmax)),(this.hasM||t.hasM)&&(this.mmin=Extent_z(Math.min,this.mmin,t.mmin),this.mmax=Extent_z(Math.max,this.mmax,t.mmax))),this}intersection(t){return this===t?this:(0,maybe/* isNone */.Wi)(t)||!this.intersects(t)?null:(this.xmin=Math.max(this.xmin,t.xmin),this.ymin=Math.max(this.ymin,t.ymin),this.xmax=Math.min(this.xmax,t.xmax),this.ymax=Math.min(this.ymax,t.ymax),(this.hasZ||t.hasZ)&&(this.zmin=Extent_z(Math.max,this.zmin,t.zmin),this.zmax=Extent_z(Math.min,this.zmax,t.zmax)),(this.hasM||t.hasM)&&(this.mmin=Extent_z(Math.max,this.mmin,t.mmin),this.mmax=Extent_z(Math.min,this.mmax,t.mmax)),this)}toJSON(t){return this.write({},t)}_shiftCM(t=R(this.spatialReference)){if(!t||!this.spatialReference)return this;const i=this.spatialReference,s=this._getCM(t);if(s){const n=i.isWebMercator?j(s):s;this.xmin-=s.x,this.xmax-=s.x,i.isWebMercator||(n.x=this._normalizeX(n.x,t).x),this.spatialReference=new SpatialReference_k((0,string/* replace */.gx)((i.isWGS84?t.altTemplate:null)??t.wkTemplate,{Central_Meridian:n.x}))}return this}_getCM(t){let i=null;const[e,s]=t.valid,n=this.xmin,m=this.xmax;return n>=e&&n<=s&&(m>=e&&m<=s)||(i=this.center),i}_normalize(t,i,e){const s=this.spatialReference;if(!s)return this;const n=e??R(s);if(null==n)return this;const m=this._getParts(n).map((t=>t.extent));if(m.length<2)return m[0]||this;if(m.length>2)return t?this._shiftCM(n):this.set({xmin:n.valid[0],xmax:n.valid[1]});if(t)return this._shiftCM(n);if(i)return m;let r=!0,a=!0;return m.forEach((t=>{t.hasZ||(r=!1),t.hasM||(a=!1)})),{rings:m.map((t=>{const i=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]];if(r){const e=(t.zmax-t.zmin)/2;for(let t=0;t<i.length;t++)i[t].push(e)}if(a){const e=(t.mmax-t.mmin)/2;for(let t=0;t<i.length;t++)i[t].push(e)}return i})),hasZ:r,hasM:a,spatialReference:s}}_getParts(t){let i=this.cache._parts;if(!i){i=[];const{ymin:e,ymax:s,spatialReference:n}=this,m=this.width,r=this.xmin,a=this.xmax;let h;t=t||R(n);const[o,x]=t.valid;h=this._normalizeX(this.xmin,t);const l=h.x,c=h.frameId;h=this._normalizeX(this.xmax,t);const y=h.x,u=h.frameId,d=l===y&&m>0;if(m>2*x){const t=new Extent_f(r<a?l:y,e,x,s,n),m=new Extent_f(o,e,r<a?y:l,s,n),h=new Extent_f(0,e,x,s,n),p=new Extent_f(o,e,0,s,n),d=[],z=[];t.contains(h)&&d.push(c),t.contains(p)&&z.push(c),m.contains(h)&&d.push(u),m.contains(p)&&z.push(u);for(let i=c+1;i<u;i++)d.push(i),z.push(i);i.push({extent:t,frameIds:[c]},{extent:m,frameIds:[u]},{extent:h,frameIds:d},{extent:p,frameIds:z})}else l>y||d?i.push({extent:new Extent_f(l,e,x,s,n),frameIds:[c]},{extent:new Extent_f(o,e,y,s,n),frameIds:[u]}):i.push({extent:new Extent_f(l,e,y,s,n),frameIds:[c]});this.cache._parts=i}const e=this.hasZ,s=this.hasM;if(e||s){const t={};e&&(t.zmin=this.zmin,t.zmax=this.zmax),s&&(t.mmin=this.mmin,t.mmax=this.mmax);for(let e=0;e<i.length;e++)i[e].extent.set(t)}return i}_normalizeX(t,i){const[e,s]=i.valid,n=2*s;let m,r=0;return t>s?(m=Math.ceil(Math.abs(t-s)/n),t-=m*n,r=m):t<e&&(m=Math.ceil(Math.abs(t-e)/n),t+=m*n,r=-m),{x:t,frameId:r}}};(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],Extent_M.prototype,"cache",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],Extent_M.prototype,"center",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],Extent_M.prototype,"extent",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],Extent_M.prototype,"hasM",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],Extent_M.prototype,"hasZ",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],Extent_M.prototype,"height",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],Extent_M.prototype,"width",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{type:[Number,String],write:{enabled:!0,allowNull:!0}}})],Extent_M.prototype,"xmin",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{write:!0}})],Extent_M.prototype,"ymin",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],Extent_M.prototype,"mmin",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],Extent_M.prototype,"zmin",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{write:!0}})],Extent_M.prototype,"xmax",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{write:!0}})],Extent_M.prototype,"ymax",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],Extent_M.prototype,"mmax",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],Extent_M.prototype,"zmax",void 0),Extent_M=Extent_f=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.geometry.Extent")],Extent_M),Extent_M.prototype.toJSON.isDefaultToJSON=!0;const Extent_w=Extent_M;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/support/AddressCandidate.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let AddressCandidate_i=class extends JSONSupport/* JSONSupport */.wq{constructor(t){super(t),this.address=null,this.attributes=null,this.extent=null,this.location=null,this.score=null}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],AddressCandidate_i.prototype,"address",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Object,json:{write:!0}})],AddressCandidate_i.prototype,"attributes",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Extent_w,json:{write:!0}})],AddressCandidate_i.prototype,"extent",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Point_w,json:{write:!0}})],AddressCandidate_i.prototype,"location",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{write:!0}})],AddressCandidate_i.prototype,"score",void 0),AddressCandidate_i=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.rest.support.AddressCandidate")],AddressCandidate_i);const AddressCandidate_c=AddressCandidate_i;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/zmUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function zmUtils_h(h,a,s=!1){let{hasM:t,hasZ:e}=h;Array.isArray(a)?4!==a.length||t||e?3===a.length&&s&&!t?(e=!0,t=!1):3===a.length&&t&&e&&(t=!1,e=!1):(t=!0,e=!0):(e=!e&&a.hasZ&&(!t||a.hasM),t=!t&&a.hasM&&(!e||a.hasZ)),h.hasZ=e,h.hasM=t}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/Multipoint.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var Multipoint_h;function Multipoint_l(t){return(s,e)=>null==s?e:null==e?s:t(s,e)}function Multipoint_c(t){return t&&("esri.geometry.SpatialReference"===t.declaredClass||null!=t.wkid)}let Multipoint_m=Multipoint_h=class extends Geometry_p{constructor(...t){super(...t),this.points=[],this.type="multipoint"}normalizeCtorArgs(t,s){if(!t&&!s)return{};const e={};Array.isArray(t)?(e.points=t,e.spatialReference=s):Multipoint_c(t)?e.spatialReference=t:(t.points&&(e.points=t.points),t.spatialReference&&(e.spatialReference=t.spatialReference),t.hasZ&&(e.hasZ=t.hasZ),t.hasM&&(e.hasM=t.hasM));const i=e.points&&e.points[0];return i&&(void 0===e.hasZ&&void 0===e.hasM?(e.hasZ=i.length>2,e.hasM=!1):void 0===e.hasZ?e.hasZ=i.length>3:void 0===e.hasM&&(e.hasM=i.length>3)),e}get cache(){return this.commitProperty("points"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const t=this.points;if(!t.length)return null;const s=new Extent_w,e=this.hasZ,i=this.hasM,r=e?3:2,n=t[0],a=Multipoint_l(Math.min),p=Multipoint_l(Math.max);let h,c,m,u,[f,y]=n,[d,g]=n;for(let o=0,l=t.length;o<l;o++){const s=t[o],[n,l]=s;if(f=a(f,n),y=a(y,l),d=p(d,n),g=p(g,l),e&&s.length>2){const t=s[2];h=a(h,t),m=p(m,t)}if(i&&s.length>r){const t=s[r];c=a(c,t),u=p(u,t)}}return s.xmin=f,s.ymin=y,s.xmax=d,s.ymax=g,s.spatialReference=this.spatialReference,e?(s.zmin=h,s.zmax=m):(s.zmin=void 0,s.zmax=void 0),i?(s.mmin=c,s.mmax=u):(s.mmin=void 0,s.mmax=void 0),s}writePoints(t,e){e.points=(0,lang/* clone */.d9)(this.points)}addPoint(t){return zmUtils_h(this,t),Array.isArray(t)?this.points.push(t):this.points.push(t.toArray()),this.notifyChange("points"),this}clone(){const t={points:(0,lang/* clone */.d9)(this.points),spatialReference:this.spatialReference};return this.hasZ&&(t.hasZ=!0),this.hasM&&(t.hasM=!0),new Multipoint_h(t)}getPoint(t){if(!this._validateInputs(t))return null;const s=this.points[t],e={x:s[0],y:s[1],spatialReference:this.spatialReference};let i=2;return this.hasZ&&(e.z=s[2],i=3),this.hasM&&(e.m=s[i]),new Point_w(e)}removePoint(t){if(!this._validateInputs(t))return null;const s=new Point_w(this.points.splice(t,1)[0],this.spatialReference);return this.notifyChange("points"),s}setPoint(t,s){return this._validateInputs(t)?(zmUtils_h(this,s),Array.isArray(s)||(s=s.toArray()),this.points[t]=s,this.notifyChange("points"),this):this}toJSON(t){return this.write({},t)}_validateInputs(t){return null!=t&&t>=0&&t<this.points.length}};(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],Multipoint_m.prototype,"cache",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],Multipoint_m.prototype,"extent",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[[Number]],json:{write:{isRequired:!0}}})],Multipoint_m.prototype,"points",void 0),(0,tslib_es6._)([writer_r("points")],Multipoint_m.prototype,"writePoints",null),Multipoint_m=Multipoint_h=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.geometry.Multipoint")],Multipoint_m),Multipoint_m.prototype.toJSON.isDefaultToJSON=!0;const Multipoint_u=Multipoint_m;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/coordsUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function coordsUtils_r(n){if(!n)return null;if(Array.isArray(n))return n;const t=n.hasZ,r=n.hasM;if("point"===n.type)return r&&t?[n.x,n.y,n.z,n.m]:t?[n.x,n.y,n.z]:r?[n.x,n.y,n.m]:[n.x,n.y];if("polygon"===n.type)return n.rings.slice(0);if("polyline"===n.type)return n.paths.slice(0);if("multipoint"===n.type)return n.points.slice(0);if("extent"===n.type){const t=n.clone().normalize();if(!t)return null;let r=!1,e=!1;return t.forEach((n=>{n.hasZ&&(r=!0),n.hasM&&(e=!0)})),t.map((n=>{const t=[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]];if(r&&n.hasZ){const r=.5*(n.zmax-n.zmin);for(let n=0;n<t.length;n++)t[n].push(r)}if(e&&n.hasM){const r=.5*(n.mmax-n.mmin);for(let n=0;n<t.length;n++)t[n].push(r)}return t}))}return null}function coordsUtils_e(n,t){const r=t[0]-n[0],e=t[1]-n[1];if(n.length>2&&t.length>2){const o=n[2]-t[2];return Math.sqrt(r*r+e*e+o*o)}return Math.sqrt(r*r+e*e)}function coordsUtils_o(n,t,r){const e=n[0]+r*(t[0]-n[0]),o=n[1]+r*(t[1]-n[1]);return n.length>2&&t.length>2?[e,o,n[2]+r*(t[2]-n[2])]:[e,o]}function coordsUtils_i(n,t,r,e){const[o,i]=t,[s,l]=r[e],[f,c]=r[e+1],u=f-s,h=c-l,a=u*u+h*h,g=(o-s)*u+(i-l)*h,m=Math.min(1,Math.max(0,g/a));return n[0]=s+u*m,n[1]=l+h*m,n}function coordsUtils_s(n,t,r){const e=r.rings;let o,i,s=!1,f=1/0;for(let c=0;c<e.length;c++){const r=e[c];for(let e=0,c=r.length-1;e<r.length;c=e++)o=r[e],i=r[c],o[1]>t!=i[1]>t&&n<(i[0]-o[0])*(t-o[1])/(i[1]-o[1])+o[0]&&(s=!s),f=Math.min(f,coordsUtils_l(n,t,o,i))}return 0===f?0:(s?1:-1)*Math.sqrt(f)}function coordsUtils_l(n,t,r,e){let o=r[0],i=r[1],s=e[0]-o,l=e[1]-i;if(0!==s||0!==l){const r=((n-o)*s+(t-i)*l)/(s*s+l*l);r>1?(o=e[0],i=e[1]):r>0&&(o+=s*r,i+=l*r)}return s=n-o,l=t-i,s*s+l*l}function coordsUtils_f(n,t){return coordsUtils_o(n,t,.5)}function coordsUtils_c(n){const t=n.length;let r=0;for(let o=0;o<t-1;++o)r+=coordsUtils_e(n[o],n[o+1]);return r}function coordsUtils_u(n,t){if(t<=0)return n[0];const r=n.length;let i=0;for(let s=0;s<r-1;++s){const r=coordsUtils_e(n[s],n[s+1]);if(t-i<r){const e=(t-i)/r;return coordsUtils_o(n[s],n[s+1],e)}i+=r}return n[r-1]}function coordsUtils_h(n,t,r){const e=n.length;let o=0,i=0,s=0;for(let l=0;l<e;l++){const f=n[l],c=n[(l+1)%e];let u=2;o+=f[0]*c[1]-c[0]*f[1],f.length>2&&c.length>2&&r&&(i+=f[0]*c[2]-c[0]*f[2],u=3),f.length>u&&c.length>u&&t&&(s+=f[0]*c[u]-c[0]*f[u])}return o<=0&&i<=0&&s<=0}function coordsUtils_a(t){const r=t.length;return r>2&&n(t[0],t[r-1])}function coordsUtils_g(n){if("rings"in n&&(coordsUtils_m(n),n.rings.length>0&&!coordsUtils_h(n.rings[0],n.hasM??!1,n.hasZ??!1)))for(const t of n.rings)t.reverse()}function coordsUtils_m(n){if("rings"in n)for(const t of n.rings)coordsUtils_a(t)||t.push(t[0].slice())}function coordsUtils_p(n){if("polygon"!==n.type&&"polyline"!==n.type)return n;return coordsUtils_y("polygon"===n.type?n.rings:n.paths,n.spatialReference),n}function coordsUtils_y(n,r){const e=t(r);if(!e)return;const o=e.valid[0],i=e.valid[1],s=i-o;for(const t of n){let n=1/0,r=-1/0;for(const s of t){const t=coordsUtils_x(s[0],o,i);n=Math.min(n,t),r=Math.max(r,t),s[0]=t}const e=r-n;s-e<e&&t.forEach((n=>{n[0]<0&&(n[0]+=s)}))}}function coordsUtils_x(n,t,r){const e=r-t;return n<t?r-(t-n)%e:n>r?t+(n-t)%e:n}function coordsUtils_M(n){if(!n||n.length<3)return 0;let t=0;const r=n.length-1;for(let e=0;e<r;e++)t+=(n[e][0]-n[e+1][0])*(n[e][1]+n[e+1][1]);return t+=(n[r][0]-n[0][0])*(n[r][1]+n[0][1]),-.5*t}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/centroid.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function centroid_e(n){return n?n.hasZ?[n.xmax-n.xmin/2,n.ymax-n.ymin/2,n.zmax-n.zmin/2]:[n.xmax-n.xmin/2,n.ymax-n.ymin/2]:null}function centroid_r(n){return n?centroid_o(n.rings,n.hasZ??!1):null}function centroid_o(n,t){if(!n||!n.length)return null;const l=[],e=[],r=t?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0];for(let o=0,i=n.length;o<i;o++){const l=centroid_u(n[o],t,r);l&&e.push(l)}if(e.sort(((n,l)=>{let e=n[2]-l[2];return 0===e&&t&&(e=n[4]-l[4]),e})),e.length&&(l[0]=e[0][0],l[1]=e[0][1],t&&(l[2]=e[0][3]),(l[0]<r[0]||l[0]>r[1]||l[1]<r[2]||l[1]>r[3]||t&&(l[2]<r[4]||l[2]>r[5]))&&(l.length=0)),!l.length){const e=n[0]&&n[0].length?centroid_i(n[0],t):null;if(!e)return null;l[0]=e[0],l[1]=e[1],t&&e.length>2&&(l[2]=e[2])}return l}function centroid_u(n,t,l){let e=0,r=0,o=0,u=0,i=0;const s=n.length?n[0][0]:0,g=n.length?n[0][1]:0,h=n.length&&t?n[0][2]:0;for(let f=0;f<n.length;f++){const c=n[f],m=n[(f+1)%n.length],[x,a,y]=c,p=x-s,z=a-g,[Z,d,j]=m,U=Z-s,b=d-g,k=p*b-U*z;if(u+=k,e+=(p+U)*k,r+=(z+b)*k,t&&c.length>2&&m.length>2){const n=y-h,t=j-h,l=p*t-U*n;o+=(n+t)*l,i+=l}x<l[0]&&(l[0]=x),x>l[1]&&(l[1]=x),a<l[2]&&(l[2]=a),a>l[3]&&(l[3]=a),t&&(y<l[4]&&(l[4]=y),y>l[5]&&(l[5]=y))}if(u>0&&(u*=-1),i>0&&(i*=-1),!u)return null;u*=.5,i*=.5;const c=[e/(6*u)+s,r/(6*u)+g,u];return t&&(l[4]===l[5]||0===i?(c[3]=(l[4]+l[5])/2,c[4]=0):(c[3]=o/(6*i)+h,c[4]=i)),c}function centroid_i(l,e){const r=e?[0,0,0]:[0,0],o=e?[0,0,0]:[0,0];let u=0,i=0,s=0,g=0;for(let h=0,c=l.length;h<c-1;h++){const c=l[h],f=l[h+1];if(c&&f){r[0]=c[0],r[1]=c[1],o[0]=f[0],o[1]=f[1],e&&c.length>2&&f.length>2&&(r[2]=c[2],o[2]=f[2]);const l=coordsUtils_e(r,o);if(l){u+=l;const n=coordsUtils_f(c,f);i+=l*n[0],s+=l*n[1],e&&n.length>2&&(g+=l*n[2])}}}return u>0?e?[i/u,s/u,g/u]:[i/u,s/u]:l.length?l[0]:null}const centroid_s=1e-6;function centroid_g(n){if(!n||!n.rings)return null;const{rings:t}=n;let e=0;for(let o=0;o<t.length;o++)e+=l(t[o]);if(e<centroid_s)return centroid_o(t,!1);const r=[0,0],u=t[0][0];for(let l=0;l<t.length;l++)centroid_c(r,u,t[l]);return r[0]*=1/e,r[1]*=1/e,r[0]+=u[0],r[1]+=u[1],r}const centroid_h=(/* unused pure expression or super */ null && (1/3));function centroid_c(n,t,e){if(!n||!e||e.length<3)return null;const r=e[0],o=[0,0],u=[e[1][0]-r[0],e[1][1]-r[1]];let i;for(let l=2;l<e.length;l++)o[0]=e[l][0]-r[0],o[1]=e[l][1]-r[1],i=.5*centroid_h*(o[0]*u[1]-o[1]*u[0]),n[0]+=i*(u[0]+o[0]),n[1]+=i*(u[1]+o[1]),u[0]=o[0],u[1]=o[1];const s=l(e),g=[r[0],r[1]];return g[0]-=t[0],g[1]-=t[1],g[0]*=s,g[1]*=s,n[0]+=g[0],n[1]+=g[1],n}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/boundsUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function boundsUtils_n(n){return void 0!==n.xmin&&void 0!==n.ymin&&void 0!==n.xmax&&void 0!==n.ymax}function boundsUtils_t(n){return void 0!==n.points}function boundsUtils_e(n){return void 0!==n.x&&void 0!==n.y}function boundsUtils_o(n){return void 0!==n.paths}function boundsUtils_r(n){return void 0!==n.rings}function boundsUtils_i(n){function t(t,e){return null==t?e:null==e?t:n(t,e)}return t}const boundsUtils_l=boundsUtils_i(Math.min),boundsUtils_u=boundsUtils_i(Math.max);function boundsUtils_c(i,l){return boundsUtils_o(l)?boundsUtils_h(i,l.paths,!1,!1):boundsUtils_r(l)?boundsUtils_h(i,l.rings,!1,!1):boundsUtils_t(l)?boundsUtils_s(i,l.points,!1,!1,!1,!1):boundsUtils_n(l)?boundsUtils_g(i,l):(boundsUtils_e(l)&&(i[0]=l.x,i[1]=l.y,i[2]=l.x,i[3]=l.y),i)}function boundsUtils_f(i,l){return boundsUtils_o(l)?boundsUtils_h(i,l.paths,!0,!1):boundsUtils_r(l)?boundsUtils_h(i,l.rings,!0,!1):boundsUtils_t(l)?boundsUtils_s(i,l.points,!0,!1,!0,!1):boundsUtils_n(l)?boundsUtils_g(i,l,!0,!1,!0,!1):(boundsUtils_e(l)&&(i[0]=l.x,i[1]=l.y,i[2]=l.z,i[3]=l.x,i[4]=l.y,i[5]=l.z),i)}function boundsUtils_h(n,t,e,o){const r=e?3:2;if(!t.length||!t[0].length)return null;let i,c,f,h,[g,s]=t[0][0],[x,m]=t[0][0];for(let a=0;a<t.length;a++){const n=t[a];for(let t=0;t<n.length;t++){const a=n[t],[d,v]=a;if(g=boundsUtils_l(g,d),s=boundsUtils_l(s,v),x=boundsUtils_u(x,d),m=boundsUtils_u(m,v),e&&a.length>2){const n=a[2];i=boundsUtils_l(i,n),c=boundsUtils_u(c,n)}if(o&&a.length>r){const n=a[r];f=boundsUtils_l(i,n),h=boundsUtils_u(c,n)}}}return e?o?(n[0]=g,n[1]=s,n[2]=i,n[3]=f,n[4]=x,n[5]=m,n[6]=c,n[7]=h,n.length=8,n):(n[0]=g,n[1]=s,n[2]=i,n[3]=x,n[4]=m,n[5]=c,n.length=6,n):o?(n[0]=g,n[1]=s,n[2]=f,n[3]=x,n[4]=m,n[5]=h,n.length=6,n):(n[0]=g,n[1]=s,n[2]=x,n[3]=m,n.length=4,n)}function boundsUtils_g(n,t,e,o,r,i){const l=t.xmin,u=t.xmax,c=t.ymin,f=t.ymax;let h=t.zmin,g=t.zmax,s=t.mmin,x=t.mmax;return r?(h=h||0,g=g||0,i?(s=s||0,x=x||0,n[0]=l,n[1]=c,n[2]=h,n[3]=s,n[4]=u,n[5]=f,n[6]=g,n[7]=x,n):(n[0]=l,n[1]=c,n[2]=h,n[3]=u,n[4]=f,n[5]=g,n)):i?(s=s||0,x=x||0,n[0]=l,n[1]=c,n[2]=s,n[3]=u,n[4]=f,n[5]=x,n):(n[0]=l,n[1]=c,n[2]=u,n[3]=f,n)}function boundsUtils_s(n,t,e,o,r,i){const c=e?3:2,f=o&&i,h=e&&r;if(!t.length||!t[0].length)return null;let g,s,x,m,[a,d]=t[0],[v,y]=t[0];for(let p=0;p<t.length;p++){const n=t[p],[e,o]=n;if(a=boundsUtils_l(a,e),d=boundsUtils_l(d,o),v=boundsUtils_u(v,e),y=boundsUtils_u(y,o),h&&n.length>2){const t=n[2];g=boundsUtils_l(g,t),s=boundsUtils_u(s,t)}if(f&&n.length>c){const t=n[c];x=boundsUtils_l(g,t),m=boundsUtils_u(s,t)}}return r?(g=g||0,s=s||0,i?(x=x||0,m=m||0,n[0]=a,n[1]=d,n[2]=g,n[3]=x,n[4]=v,n[5]=y,n[6]=s,n[7]=m,n):(n[0]=a,n[1]=d,n[2]=g,n[3]=v,n[4]=y,n[5]=s,n)):i?(x=x||0,m=m||0,n[0]=a,n[1]=d,n[2]=x,n[3]=v,n[4]=y,n[5]=m,n):(n[0]=a,n[1]=d,n[2]=v,n[3]=y,n)}function boundsUtils_x(n){if(!n.length||!n[0].length)return null;let[t]=n[0],[e]=n[0];for(let o=0;o<n.length;o++){const r=n[o],[i]=r;t=boundsUtils_l(t,i),e=boundsUtils_u(e,i)}return e-t}function boundsUtils_m(n){if(!n.length||!n[0].length)return null;let[t]=n[0],[e]=n[0];for(let o=0;o<n.length;o++){const r=n[o],[i]=r;t=boundsUtils_l(t,i),e=boundsUtils_u(e,i)}return t+.5*(e-t)}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/extentUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function extentUtils_t(n){return void 0!==n.xmin&&void 0!==n.ymin&&void 0!==n.xmax&&void 0!==n.ymax}function extentUtils_u(n){return void 0!==n.points}function extentUtils_m(n){return void 0!==n.x&&void 0!==n.y}function extentUtils_o(n){return void 0!==n.paths}function extentUtils_r(n){return void 0!==n.rings}const extentUtils_x=[];function extentUtils_a(n,i,t,u){return{xmin:n,ymin:i,xmax:t,ymax:u}}function extentUtils_c(n,i,t,u,m,o){return{xmin:n,ymin:i,zmin:t,xmax:u,ymax:m,zmax:o}}function extentUtils_s(n,i,t,u,m,o){return{xmin:n,ymin:i,mmin:t,xmax:u,ymax:m,mmax:o}}function extentUtils_e(n,i,t,u,m,o,r,x){return{xmin:n,ymin:i,zmin:t,mmin:u,xmax:m,ymax:o,zmax:r,mmax:x}}function extentUtils_f(n,i=!1,t=!1){return i?t?extentUtils_e(n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]):extentUtils_c(n[0],n[1],n[2],n[3],n[4],n[5]):t?extentUtils_s(n[0],n[1],n[2],n[3],n[4],n[5]):extentUtils_a(n[0],n[1],n[2],n[3])}function extentUtils_l(n){return n?extentUtils_t(n)?n:extentUtils_m(n)?extentUtils_d(n):extentUtils_r(n)?v(n):extentUtils_o(n)?extentUtils_h(n):extentUtils_u(n)?extentUtils_y(n):null:null}function extentUtils_y(i){const{hasZ:t,hasM:u,points:m}=i;return extentUtils_f(n(extentUtils_x,m,t??!1,u??!1),t,u)}function extentUtils_d(n){const{x:i,y:t,z:u,m}=n,o=null!=m;return null!=u?o?extentUtils_e(i,t,u,m,i,t,u,m):extentUtils_c(i,t,u,i,t,u):o?extentUtils_s(i,t,m,i,t,m):extentUtils_a(i,t,i,t)}function v(n){const{hasZ:t,hasM:u,rings:m}=n,o=boundsUtils_h(extentUtils_x,m,t??!1,u??!1);return o?extentUtils_f(o,t,u):null}function extentUtils_h(n){const{hasZ:t,hasM:u,paths:m}=n,o=boundsUtils_h(extentUtils_x,m,t??!1,u??!1);return o?extentUtils_f(o,t,u):null}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/Polygon.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var Polygon_x;function Polygon_j(t){return!Array.isArray(t[0])}let Polygon_w=Polygon_x=class extends Geometry_p{constructor(...t){super(...t),this.rings=[],this.type="polygon"}static fromExtent(t){const r=t.clone().normalize(),e=t.spatialReference;let s=!1,i=!1;for(const o of r)o.hasZ&&(s=!0),o.hasM&&(i=!0);const n={rings:r.map((t=>{const r=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]];if(s&&t.hasZ){const e=t.zmin+.5*(t.zmax-t.zmin);for(let t=0;t<r.length;t++)r[t].push(e)}if(i&&t.hasM){const e=t.mmin+.5*(t.mmax-t.mmin);for(let t=0;t<r.length;t++)r[t].push(e)}return r})),spatialReference:e};return s&&(n.hasZ=!0),i&&(n.hasM=!0),new Polygon_x(n)}normalizeCtorArgs(t,r){let e,s,i=null,n=null;return t&&!Array.isArray(t)?(i=t.rings?t.rings:null,r||(t.spatialReference?r=t.spatialReference:t.rings||(r=t)),e=t.hasZ,s=t.hasM):i=t,i=i||[],r=r||SpatialReference_k.WGS84,i.length&&i[0]&&null!=i[0][0]&&"number"==typeof i[0][0]&&(i=[i]),n=i[0]&&i[0][0],n&&(void 0===e&&void 0===s?(e=n.length>2,s=n.length>3):void 0===e?e=s?n.length>3:n.length>2:void 0===s&&(s=e?n.length>3:n.length>2)),{rings:i,spatialReference:r,hasZ:e,hasM:s}}get cache(){return this.commitProperty("rings"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get centroid(){const t=centroid_r(this);if(!t||isNaN(t[0])||isNaN(t[1])||this.hasZ&&isNaN(t[2]))return null;const r=new Point_w;return r.x=t[0],r.y=t[1],r.spatialReference=this.spatialReference,this.hasZ&&(r.z=t[2]),r}get extent(){const{spatialReference:t}=this,r=v(this);if(!r)return null;const e=new Extent_w(r);return e.spatialReference=t,e}get isSelfIntersecting(){return intersectsBase_p(this.rings)}writeRings(t,r){r.rings=(0,lang/* clone */.d9)(this.rings)}addRing(t){if(!t)return;const r=this.rings,e=r.length;if(Polygon_j(t)){const s=[];for(let r=0,e=t.length;r<e;r++)s[r]=t[r].toArray();r[e]=s}else r[e]=t.concat();return this.notifyChange("rings"),this}clone(){const t=new Polygon_x;return t.spatialReference=this.spatialReference,t.rings=(0,lang/* clone */.d9)(this.rings),t.hasZ=this.hasZ,t.hasM=this.hasM,t}equals(t){if(this===t)return!0;if((0,maybe/* isNone */.Wi)(t))return!1;const e=this.spatialReference,n=t.spatialReference;if((0,maybe/* isSome */.pC)(e)!==(0,maybe/* isSome */.pC)(n))return!1;if((0,maybe/* isSome */.pC)(e)&&(0,maybe/* isSome */.pC)(n)&&!e.equals(n))return!1;if(this.rings.length!==t.rings.length)return!1;const o=([t,r,e,s],[i,n,o,a])=>t===i&&r===n&&(null==e&&null==o||e===o)&&(null==s&&null==a||s===a);for(let s=0;s<this.rings.length;s++){const e=this.rings[s],i=t.rings[s];if(!(0,arrayUtils/* equals */.fS)(e,i,o))return!1}return!0}contains(t){if(!t)return!1;const r=webMercatorUtils_M(t,this.spatialReference);return contains_c(this,(0,maybe/* isSome */.pC)(r)?r:t)}isClockwise(t){let r;return r=Polygon_j(t)?t.map((t=>this.hasZ?this.hasM?[t.x,t.y,t.z,t.m]:[t.x,t.y,t.z]:[t.x,t.y])):t,coordsUtils_h(r,this.hasM,this.hasZ)}getPoint(t,r){if(!this._validateInputs(t,r))return null;const e=this.rings[t][r],s=this.hasZ,i=this.hasM;return s&&!i?new Point_w(e[0],e[1],e[2],void 0,this.spatialReference):i&&!s?new Point_w(e[0],e[1],void 0,e[2],this.spatialReference):s&&i?new Point_w(e[0],e[1],e[2],e[3],this.spatialReference):new Point_w(e[0],e[1],this.spatialReference)}insertPoint(t,r,e){return this._validateInputs(t,r,!0)?(zmUtils_h(this,e),Array.isArray(e)||(e=e.toArray()),this.rings[t].splice(r,0,e),this.notifyChange("rings"),this):this}removePoint(t,r){if(!this._validateInputs(t,r))return null;const e=new Point_w(this.rings[t].splice(r,1)[0],this.spatialReference);return this.notifyChange("rings"),e}removeRing(t){if(!this._validateInputs(t,null))return null;const r=this.rings.splice(t,1)[0],e=this.spatialReference,s=r.map((t=>new Point_w(t,e)));return this.notifyChange("rings"),s}setPoint(t,r,e){return this._validateInputs(t,r)?(zmUtils_h(this,e),Array.isArray(e)||(e=e.toArray()),this.rings[t][r]=e,this.notifyChange("rings"),this):this}_validateInputs(t,r,e=!1){if(null==t||t<0||t>=this.rings.length)return!1;if(null!=r){const s=this.rings[t];if(e&&(r<0||r>s.length))return!1;if(!e&&(r<0||r>=s.length))return!1}return!0}toJSON(t){return this.write({},t)}};(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],Polygon_w.prototype,"cache",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],Polygon_w.prototype,"centroid",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],Polygon_w.prototype,"extent",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],Polygon_w.prototype,"isSelfIntersecting",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[[[Number]]],json:{write:{isRequired:!0}}})],Polygon_w.prototype,"rings",void 0),(0,tslib_es6._)([writer_r("rings")],Polygon_w.prototype,"writeRings",null),Polygon_w=Polygon_x=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.geometry.Polygon")],Polygon_w),Polygon_w.prototype.toJSON.isDefaultToJSON=!0;const Polygon_v=Polygon_w;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/Polyline.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var Polyline_c;function Polyline_u(t){return!Array.isArray(t[0])}let Polyline_f=Polyline_c=class extends Geometry_p{constructor(...t){super(...t),this.paths=[],this.type="polyline"}normalizeCtorArgs(t,e){let s,r,i=null,a=null;return t&&!Array.isArray(t)?(i=t.paths?t.paths:null,e||(t.spatialReference?e=t.spatialReference:t.paths||(e=t)),s=t.hasZ,r=t.hasM):i=t,i=i||[],e=e||SpatialReference_k.WGS84,i.length&&i[0]&&null!=i[0][0]&&"number"==typeof i[0][0]&&(i=[i]),a=i[0]&&i[0][0],a&&(void 0===s&&void 0===r?(s=a.length>2,r=!1):void 0===s?s=!r&&a.length>3:void 0===r&&(r=!s&&a.length>3)),{paths:i,spatialReference:e,hasZ:s,hasM:r}}get cache(){return this.commitProperty("paths"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const{spatialReference:t}=this,e=extentUtils_h(this);if(!e)return null;const s=new Extent_w(e);return s.spatialReference=t,s}writePaths(t,s){s.paths=(0,lang/* clone */.d9)(this.paths)}addPath(t){if(!t)return;const e=this.paths,s=e.length;if(Polyline_u(t)){const r=[];for(let e=0,s=t.length;e<s;e++)r[e]=t[e].toArray();e[s]=r}else e[s]=t.concat();return this.notifyChange("paths"),this}clone(){const t=new Polyline_c;return t.spatialReference=this.spatialReference,t.paths=(0,lang/* clone */.d9)(this.paths),t.hasZ=this.hasZ,t.hasM=this.hasM,t}getPoint(t,e){if(!this._validateInputs(t,e))return null;const s=this.paths[t][e],r=this.hasZ,i=this.hasM;return r&&!i?new Point_w(s[0],s[1],s[2],void 0,this.spatialReference):i&&!r?new Point_w(s[0],s[1],void 0,s[2],this.spatialReference):r&&i?new Point_w(s[0],s[1],s[2],s[3],this.spatialReference):new Point_w(s[0],s[1],this.spatialReference)}insertPoint(t,e,s){return this._validateInputs(t,e,!0)?(zmUtils_h(this,s),Array.isArray(s)||(s=s.toArray()),this.paths[t].splice(e,0,s),this.notifyChange("paths"),this):this}removePath(t){if(!this._validateInputs(t,null))return null;const e=this.paths.splice(t,1)[0],s=this.spatialReference,r=e.map((t=>new Point_w(t,s)));return this.notifyChange("paths"),r}removePoint(t,e){if(!this._validateInputs(t,e))return null;const s=new Point_w(this.paths[t].splice(e,1)[0],this.spatialReference);return this.notifyChange("paths"),s}setPoint(t,e,s){return this._validateInputs(t,e)?(zmUtils_h(this,s),Array.isArray(s)||(s=s.toArray()),this.paths[t][e]=s,this.notifyChange("paths"),this):this}_validateInputs(t,e,s=!1){if(null==t||t<0||t>=this.paths.length)return!1;if(null!=e){const r=this.paths[t];if(s&&(e<0||e>r.length))return!1;if(!s&&(e<0||e>=r.length))return!1}return!0}toJSON(t){return this.write({},t)}};(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],Polyline_f.prototype,"cache",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],Polyline_f.prototype,"extent",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[[[Number]]],json:{write:{isRequired:!0}}})],Polyline_f.prototype,"paths",void 0),(0,tslib_es6._)([writer_r("paths")],Polyline_f.prototype,"writePaths",null),Polyline_f=Polyline_c=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.geometry.Polyline")],Polyline_f),Polyline_f.prototype.toJSON.isDefaultToJSON=!0;const Polyline_m=Polyline_f;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(5709);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/typeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function typeUtils_e(o){return"point"===o||"multipoint"===o||"polyline"===o||"polygon"===o}const typeUtils_i=(0,jsonMap/* strict */.w)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),typeUtils_t=(0,jsonMap/* strict */.w)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"});

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/jsonUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function jsonUtils_u(o){return void 0!==o.xmin&&void 0!==o.ymin&&void 0!==o.xmax&&void 0!==o.ymax}function jsonUtils_l(o){return void 0!==o.points}function jsonUtils_s(o){return void 0!==o.x&&void 0!==o.y}function jsonUtils_f(o){return void 0!==o.paths}function jsonUtils_y(o){return void 0!==o.rings}function jsonUtils_p(o){return void 0!==o.vertexAttributes}function jsonUtils_v(p){return o(p)?null:p instanceof e?p:jsonUtils_s(p)?i.fromJSON(p):jsonUtils_f(p)?m.fromJSON(p):jsonUtils_y(p)?n.fromJSON(p):jsonUtils_l(p)?t.fromJSON(p):jsonUtils_u(p)?r.fromJSON(p):null}function jsonUtils_c(o){return o?jsonUtils_s(o)?"esriGeometryPoint":jsonUtils_f(o)?"esriGeometryPolyline":jsonUtils_y(o)?"esriGeometryPolygon":jsonUtils_u(o)?"esriGeometryEnvelope":jsonUtils_l(o)?"esriGeometryMultipoint":null:null}const jsonUtils_G={esriGeometryPoint:Point_w,esriGeometryPolyline:Polyline_m,esriGeometryPolygon:Polygon_v,esriGeometryEnvelope:Extent_w,esriGeometryMultipoint:Multipoint_u};function jsonUtils_d(o){return o&&jsonUtils_G[o]||null}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function geometry_s(e){return e instanceof t}const geometry_i={base:Geometry_p,key:"type",typeMap:{extent:Extent_w,multipoint:Multipoint_u,point:Point_w,polyline:Polyline_m,polygon:Polygon_v}},geometry_n=(0,ensureType/* ensureOneOfType */.N7)(geometry_i);

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/support/commonProperties.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const commonProperties_t={type:String,json:{read:{source:"token"},write:{target:"token"}}};

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/support/AddressToLocationsParameters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let AddressToLocationsParameters_a=class extends JSONSupport/* JSONSupport */.wq{constructor(t){super(t),this.address=null,this.apiKey=null,this.categories=null,this.countryCode=null,this.forStorage=null,this.location=null,this.locationType=null,this.magicKey=null,this.maxLocations=null,this.outFields=null,this.outSpatialReference=null,this.searchExtent=null}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:Object,json:{write:!0}})],AddressToLocationsParameters_a.prototype,"address",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties_t)],AddressToLocationsParameters_a.prototype,"apiKey",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[String],json:{read:{source:"category",reader:t=>t?t.split(","):null},write:{target:"category",writer:(t,o)=>{o.category=t?t.join(","):null}}}})],AddressToLocationsParameters_a.prototype,"categories",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],AddressToLocationsParameters_a.prototype,"countryCode",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Boolean,json:{write:!0}})],AddressToLocationsParameters_a.prototype,"forStorage",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Point_w,json:{write:{writer:(t,o)=>{o.location=t?t.clone().normalize():null}}}})],AddressToLocationsParameters_a.prototype,"location",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],AddressToLocationsParameters_a.prototype,"locationType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],AddressToLocationsParameters_a.prototype,"magicKey",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{write:!0}})],AddressToLocationsParameters_a.prototype,"maxLocations",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[String],json:{write:{writer:(t,o)=>{o.outFields=t?t.join(","):null}}}})],AddressToLocationsParameters_a.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:SpatialReference_k,json:{read:{source:"outSR"},write:{target:"outSR"}}})],AddressToLocationsParameters_a.prototype,"outSpatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Extent_w,json:{write:{writer:(t,o)=>{const e=t?t.shiftCentralMeridian():null;o.searchExtent=e}}}})],AddressToLocationsParameters_a.prototype,"searchExtent",void 0),AddressToLocationsParameters_a=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.rest.support.AddressToLocationsParameters")],AddressToLocationsParameters_a),AddressToLocationsParameters_a.from=(0,ensureType/* ensureType */.se)(AddressToLocationsParameters_a);const AddressToLocationsParameters_c=(/* unused pure expression or super */ null && (AddressToLocationsParameters_a));

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/locator/addressToLocations.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function addressToLocations_d(o,n,a){n=i.from(n);const d=t(o),{address:p,...m}=n.toJSON(),u={...p,...m,f:"json"},c=e({...d.query,...u}),j=s(c,a),l=`${d.path}/findAddressCandidates`;return r(l,j).then(addressToLocations_f)}function addressToLocations_f({data:r}){if(!r)return[];const{candidates:t,spatialReference:e}=r;return t?t.map((r=>{if(!r)return;const{extent:t,location:s}=r,i=!t||o(t);return n(s)&&i?(t&&(t.spatialReference=e),s.spatialReference=e,a.fromJSON(r)):void 0})):[]}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/support/AddressesToLocationsParameters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let AddressesToLocationsParameters_p=class extends JSONSupport/* JSONSupport */.wq{constructor(r){super(r),this.addresses=null,this.categories=null,this.countryCode=null,this.locationType=null,this.outSpatialReference=null}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:[Object],json:{read:{reader:r=>r&&r.records?r.records.map((r=>r.attributes)):null},write:{writer:(r,e)=>{const t=[];Array.isArray(r)&&r.forEach((r=>{t.push({attributes:r})})),e.addresses={records:t}}}}})],AddressesToLocationsParameters_p.prototype,"addresses",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[String],json:{read:{source:"category",reader:r=>r?r.split(","):null},write:{target:"category",writer:(r,e)=>{e.category=r?r.join(","):null}}}})],AddressesToLocationsParameters_p.prototype,"categories",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{read:{source:"sourceCountry"},write:{target:"sourceCountry"}}})],AddressesToLocationsParameters_p.prototype,"countryCode",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],AddressesToLocationsParameters_p.prototype,"locationType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:SpatialReference_k,json:{read:{source:"outSR"},write:{target:"outSR"}}})],AddressesToLocationsParameters_p.prototype,"outSpatialReference",void 0),AddressesToLocationsParameters_p=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.rest.support.AddressesToLocationsParameters")],AddressesToLocationsParameters_p),AddressesToLocationsParameters_p.from=(0,ensureType/* ensureType */.se)(AddressesToLocationsParameters_p);const AddressesToLocationsParameters_i=(/* unused pure expression or super */ null && (AddressesToLocationsParameters_p));

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/locator/addressesToLocations.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function addressesToLocations_a(s,a,c){a=n.from(a);const p=r(s),f={...a.toJSON(),f:"json"},m=t({...p.query,...f}),u=e(m,c),d=`${p.path}/geocodeAddresses`;return o(d,u).then(addressesToLocations_i)}function addressesToLocations_i(o){const{data:r}=o;if(!r)return[];const{locations:t,spatialReference:e}=r;return t?t.map((o=>{const{location:r}=o;return r&&(r.spatialReference=e),s.fromJSON(o)})):[]}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/support/LocationToAddressParameters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let LocationToAddressParameters_a=class extends JSONSupport/* JSONSupport */.wq{constructor(o){super(o),this.apiKey=null,this.location=null,this.locationType=null,this.outSpatialReference=null}};(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties_t)],LocationToAddressParameters_a.prototype,"apiKey",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Point_w,json:{write:{writer:(o,r)=>{const t=o?o.clone().normalize():null,e=void 0!==t;r.location=e?t:null}}}})],LocationToAddressParameters_a.prototype,"location",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],LocationToAddressParameters_a.prototype,"locationType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:SpatialReference_k,json:{read:{source:"outSR"},write:{target:"outSR"}}})],LocationToAddressParameters_a.prototype,"outSpatialReference",void 0),LocationToAddressParameters_a=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.rest.support.LocationToAddressParameters")],LocationToAddressParameters_a),LocationToAddressParameters_a.from=(0,ensureType/* ensureType */.se)(LocationToAddressParameters_a);const LocationToAddressParameters_n=LocationToAddressParameters_a;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/locator/locationToAddress.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function locationToAddress_n(e,n,i){n=LocationToAddressParameters_n.from(n);const c=utils_f(e),m={...n.toJSON(),f:"json"},u=utils_s({...c.query,...m}),f=utils_i(u,i),p=`${c.path}/reverseGeocode`;return (0,request["default"])(p,f).then(locationToAddress_d)}function locationToAddress_d({data:r}){if(!r)return;const{address:o,location:t}=r,s=o&&o.Match_addr||"";return AddressCandidate_c.fromJSON({address:s,attributes:o||{},location:t,score:100})}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/support/SuggestionCandidate.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let SuggestionCandidate_e=class extends JSONSupport/* JSONSupport */.wq{constructor(o){super(o),this.isCollection=null,this.magicKey=null,this.text=null}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:Boolean,json:{write:!0}})],SuggestionCandidate_e.prototype,"isCollection",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],SuggestionCandidate_e.prototype,"magicKey",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],SuggestionCandidate_e.prototype,"text",void 0),SuggestionCandidate_e=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.rest.support.SuggestionCandidate")],SuggestionCandidate_e);const SuggestionCandidate_p=(/* unused pure expression or super */ null && (SuggestionCandidate_e));

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/support/SuggestLocationsParameters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let SuggestLocationsParameters_c=class extends JSONSupport/* JSONSupport */.wq{constructor(t){super(t),this.apiKey=null,this.categories=null,this.countryCode=null,this.location=null,this.maxSuggestions=null,this.outSpatialReference=null,this.searchExtent=null,this.text=null}};(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties_t)],SuggestLocationsParameters_c.prototype,"apiKey",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[String],json:{read:{source:"category",reader:t=>t?t.split(","):null},write:{target:"category",writer:(t,o)=>{o.category=t?t.join(","):null}}}})],SuggestLocationsParameters_c.prototype,"categories",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],SuggestLocationsParameters_c.prototype,"countryCode",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Point_w,json:{write:{writer:(t,o)=>{o.location=t?t.clone().normalize():null}}}})],SuggestLocationsParameters_c.prototype,"location",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{write:!0}})],SuggestLocationsParameters_c.prototype,"maxSuggestions",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:SpatialReference_k,json:{read:{source:"outSR"},write:{target:"outSR"}}})],SuggestLocationsParameters_c.prototype,"outSpatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Extent_w,json:{write:{writer:(t,o)=>{const e=t?t.shiftCentralMeridian():null;o.searchExtent=JSON.stringify(e)}}}})],SuggestLocationsParameters_c.prototype,"searchExtent",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],SuggestLocationsParameters_c.prototype,"text",void 0),SuggestLocationsParameters_c=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.rest.support.SuggestLocationsParameters")],SuggestLocationsParameters_c),SuggestLocationsParameters_c.from=(0,ensureType/* ensureType */.se)(SuggestLocationsParameters_c);const SuggestLocationsParameters_l=(/* unused pure expression or super */ null && (SuggestLocationsParameters_c));

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/locator/suggestLocations.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function suggestLocations_u(n,u,m){const p=o(n),a={...(u=e.from(u)).toJSON(),f:"json"},f=r({...p.query,...a}),g=s(f,m),c=`${p.path}/suggest`;return t(c,g).then(suggestLocations_i)}function suggestLocations_i(t){const{data:o}=t;if(!o)return[];const{suggestions:r}=o;return r?r.map((t=>new n(t))):[]}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/rest/locator.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/



/***/ }),

/***/ 9522:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ r)
/* harmony export */ });
/* unused harmony export isApiKey */
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3466);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const t=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function c(s){return!!s&&s.length>4&&s.startsWith("AAPK")}function r(c){const r=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getOrigin */ .P$)(c,!0);return!!r&&(r.endsWith(".arcgis.com")&&!t.includes(r)&&!c.endsWith("/sharing/rest/generateToken"))}


/***/ })

};
;