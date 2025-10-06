import{R,j as A}from"./app-Xt_f-N2T.js";import{c as He,D as Gn,S as Kn,L as Yr}from"./dashboard-DE7rJL3C.js";/* empty css            *//**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Modified version of `@lit/react` for vanilla custom elements with support for SSR.
 */const qn=new Set(["style","children","ref","key","suppressContentEditableWarning","suppressHydrationWarning","dangerouslySetInnerHTML"]),Yn={className:"class",htmlFor:"for"};function Qn(t){return t.toLowerCase()}function Qr(t){if(typeof t=="boolean")return t?"":void 0;if(typeof t!="function"&&!(typeof t=="object"&&t!==null))return t}function D({react:t,tagName:e,elementClass:i,events:a,displayName:r,defaultProps:s,toAttributeName:o=Qn,toAttributeValue:l=Qr}){const u=Number.parseInt(t.version)>=19,g=t.forwardRef((b,_)=>{const h=t.useRef(null),m=t.useRef(new Map),P={},T={},f={},L={};for(const[S,k]of Object.entries(b)){if(qn.has(S)){f[S]=k;continue}const B=o(Yn[S]??S);if(i.prototype&&S in i.prototype&&!(S in(globalThis.HTMLElement?.prototype??{}))&&!i.observedAttributes?.some(me=>me===B)){L[S]=k;continue}if(S.startsWith("on")){P[S]=k;continue}const J=l(k);if(B&&J!=null&&(T[B]=String(J),u||(f[B]=J)),B&&u){const me=Qr(k);J!==me?f[B]=J:f[B]=k}}if(typeof window<"u"){for(const S in P){const k=P[S],B=S.endsWith("Capture"),J=(a?.[S]??S.slice(2).toLowerCase()).slice(0,B?-7:void 0);t.useLayoutEffect(()=>{const me=h?.current;if(!(!me||typeof k!="function"))return me.addEventListener(J,k,B),()=>{me.removeEventListener(J,k,B)}},[h?.current,k])}t.useLayoutEffect(()=>{if(h.current===null)return;const S=new Map;for(const k in L)zr(h.current,k,L[k]),m.current.delete(k),S.set(k,L[k]);for(const[k,B]of m.current)zr(h.current,k,void 0);m.current=S})}if(typeof window>"u"&&i?.getTemplateHTML&&i?.shadowRootOptions){const{mode:S,delegatesFocus:k}=i.shadowRootOptions,B=t.createElement("template",{shadowrootmode:S,shadowrootdelegatesfocus:k,dangerouslySetInnerHTML:{__html:i.getTemplateHTML(T,b)}});f.children=[B,f.children]}return t.createElement(e,{...s,...f,ref:t.useCallback(S=>{h.current=S,typeof _=="function"?_(S):_!==null&&(_.current=S)},[_])})});return g.displayName=r??i.name,g}function zr(t,e,i){t[e]=i,i==null&&e in(globalThis.HTMLElement?.prototype??{})&&t.removeAttribute(e)}const p={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},w={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},ys={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},Ms=Object.entries(ys),n=Ms.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{}),zn={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},gt=Ms.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{...zn});Object.entries(gt).reduce((t,[e,i])=>{const a=n[e];return a&&(t[i]=a),t},{userinactivechange:"userinactive"});const Zn=Object.entries(n).reduce((t,[e,i])=>{const a=gt[e];return a&&(t[i]=a),t},{userinactive:"userinactivechange"}),Se={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},_t={DISABLED:"disabled",SHOWING:"showing"},Zr={MOUSE:"mouse",TOUCH:"touch"},re={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},Le={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},Xn={FULLSCREEN:"fullscreen"};function jn(t){return t?.map(Jn).join(" ")}function Jn(t){if(t){const{id:e,width:i,height:a}=t;return[e,i,a].filter(r=>r!=null).join(":")}}function eo(t){return t?.map(to).join(" ")}function to(t){if(t){const{id:e,kind:i,language:a,label:r}=t;return[e,i,a,r].filter(s=>s!=null).join(":")}}function za(t){return typeof t=="number"&&!Number.isNaN(t)&&Number.isFinite(t)}const ks=t=>new Promise(e=>setTimeout(e,t)),Xr=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],io=(t,e)=>{const i=t===1?Xr[e].singular:Xr[e].plural;return`${t} ${i}`},$t=t=>{if(!za(t))return"";const e=Math.abs(t),i=e!==t,a=new Date(0,0,0,0,0,e,0);return`${[a.getHours(),a.getMinutes(),a.getSeconds()].map((l,u)=>l&&io(l,u)).filter(l=>l).join(", ")}${i?" remaining":""}`};function $e(t,e){let i=!1;t<0&&(i=!0,t=0-t),t=t<0?0:t;let a=Math.floor(t%60),r=Math.floor(t/60%60),s=Math.floor(t/3600);const o=Math.floor(e/60%60),l=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(s=r=a="0"),s=s>0||l>0?s+":":"",r=((s||o>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(i?"-":"")+s+r+a}const ao={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."};var jr;const va={en:ao};let Aa=((jr=globalThis.navigator)==null?void 0:jr.language)||"en";const ro=t=>{Aa=t},so=t=>{var e,i,a;const[r]=Aa.split("-");return((e=va[Aa])==null?void 0:e[t])||((i=va[r])==null?void 0:i[t])||((a=va.en)==null?void 0:a[t])||t},E=(t,e={})=>so(t).replace(/\{(\w+)\}/g,(i,a)=>a in e?String(e[a]):`{${a}}`);class Ls{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class ws extends Ls{}class Jr extends ws{constructor(){super(...arguments),this.role=null}}class no{observe(){}unobserve(){}disconnect(){}}const Rs={createElement:function(){return new Wt.HTMLElement},createElementNS:function(){return new Wt.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(t){return!1}},Wt={ResizeObserver:no,document:Rs,Node:ws,Element:Jr,HTMLElement:class extends Jr{constructor(){super(...arguments),this.innerHTML=""}get content(){return new Wt.DocumentFragment}},DocumentFragment:class extends Ls{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(t){return null},setItem(t,e){},removeItem(t){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(t){return{matches:!1,media:t}},DOMParser:class{parseFromString(e,i){return{body:{textContent:e}}}}},Ds=typeof window>"u"||typeof window.customElements>"u",Cs=Object.keys(Wt).every(t=>t in globalThis),d=Ds&&!Cs?Wt:globalThis,te=Ds&&!Cs?Rs:globalThis.document,es=new WeakMap,Za=t=>{let e=es.get(t);return e||es.set(t,e=new Set),e},Ps=new d.ResizeObserver(t=>{for(const e of t)for(const i of Za(e.target))i(e)});function xs(t,e){Za(t).add(e),Ps.observe(t)}function Os(t,e){const i=Za(t);i.delete(e),i.size||Ps.unobserve(t)}function he(t){const e={};for(const i of t)e[i.name]=i.value;return e}function oo(t){var e;return(e=lo(t))!=null?e:Xt(t,"media-controller")}function lo(t){var e;const{MEDIA_CONTROLLER:i}=w,a=t.getAttribute(i);if(a)return(e=co(t))==null?void 0:e.getElementById(a)}const Us=(t,e,i=".value")=>{const a=t.querySelector(i);a&&(a.textContent=e)},uo=(t,e)=>{const i=`slot[name="${e}"]`,a=t.shadowRoot.querySelector(i);return a?a.children:[]},Ns=(t,e)=>uo(t,e)[0],At=(t,e)=>!t||!e?!1:t?.contains(e)?!0:At(t,e.getRootNode().host),Xt=(t,e)=>{if(!t)return null;const i=t.closest(e);return i||Xt(t.getRootNode().host,e)};function $s(t=document){var e;const i=t?.activeElement;return i?(e=$s(i.shadowRoot))!=null?e:i:null}function co(t){var e;const i=(e=t?.getRootNode)==null?void 0:e.call(t);return i instanceof ShadowRoot||i instanceof Document?i:null}function Hs(t,{depth:e=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(t.checkVisibility)return t.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=t;for(;r&&e>0;){const s=getComputedStyle(r);if(i&&s.opacity==="0"||a&&s.visibility==="hidden"||s.display==="none")return!1;r=r.parentElement,e--}return!0}function ho(t,e,i,a){const r=a.x-i.x,s=a.y-i.y,o=r*r+s*s;if(o===0)return 0;const l=((t-i.x)*r+(e-i.y)*s)/o;return Math.max(0,Math.min(1,l))}function V(t,e){const i=mo(t,a=>a===e);return i||po(t,e)}function mo(t,e){var i,a;let r;for(r of(i=t.querySelectorAll("style:not([media])"))!=null?i:[]){let s;try{s=(a=r.sheet)==null?void 0:a.cssRules}catch{continue}for(const o of s??[])if(e(o.selectorText))return o}}function po(t,e){var i,a;const r=(i=t.querySelectorAll("style:not([media])"))!=null?i:[],s=r?.[r.length-1];return s?.sheet?(s?.sheet.insertRule(`${e}{}`,s.sheet.cssRules.length),(a=s.sheet.cssRules)==null?void 0:a[s.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",t),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function N(t,e,i=Number.NaN){const a=t.getAttribute(e);return a!=null?+a:i}function z(t,e,i){const a=+i;if(i==null||Number.isNaN(a)){t.hasAttribute(e)&&t.removeAttribute(e);return}N(t,e,void 0)!==a&&t.setAttribute(e,`${a}`)}function y(t,e){return t.hasAttribute(e)}function M(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}y(t,e)!=i&&t.toggleAttribute(e,i)}function $(t,e,i=null){var a;return(a=t.getAttribute(e))!=null?a:i}function H(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}const a=`${i}`;$(t,e,void 0)!==a&&t.setAttribute(e,a)}var Fs=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Re=(t,e,i)=>(Fs(t,e,"read from private field"),i?i.call(t):e.get(t)),Eo=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Jt=(t,e,i,a)=>(Fs(t,e,"write to private field"),e.set(t,i),i),ee;function vo(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}class Qi extends d.HTMLElement{constructor(){if(super(),Eo(this,ee,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=he(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[w.MEDIA_CONTROLLER,n.MEDIA_PAUSED]}attributeChangedCallback(e,i,a){var r,s,o,l,u;e===w.MEDIA_CONTROLLER&&(i&&((s=(r=Re(this,ee))==null?void 0:r.unassociateElement)==null||s.call(r,this),Jt(this,ee,null)),a&&this.isConnected&&(Jt(this,ee,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(l=Re(this,ee))==null?void 0:l.associateElement)==null||u.call(l,this)))}connectedCallback(){var e,i,a,r;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),Jt(this,ee,_o(this)),this.getAttribute(w.MEDIA_CONTROLLER)&&((i=(e=Re(this,ee))==null?void 0:e.associateElement)==null||i.call(e,this)),(a=Re(this,ee))==null||a.addEventListener("pointerdown",this),(r=Re(this,ee))==null||r.addEventListener("click",this)}disconnectedCallback(){var e,i,a,r;this.getAttribute(w.MEDIA_CONTROLLER)&&((i=(e=Re(this,ee))==null?void 0:e.unassociateElement)==null||i.call(e,this)),(a=Re(this,ee))==null||a.removeEventListener("pointerdown",this),(r=Re(this,ee))==null||r.removeEventListener("click",this),Jt(this,ee,null)}handleEvent(e){var i;const a=(i=e.composedPath())==null?void 0:i[0];if(["video","media-controller"].includes(a?.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){const{clientX:s,clientY:o}=e,{left:l,top:u,width:g,height:b}=this.getBoundingClientRect(),_=s-l,h=o-u;if(_<0||h<0||_>g||h>b||g===0&&b===0)return;const m=this._pointerType||"mouse";if(this._pointerType=void 0,m===Zr.TOUCH){this.handleTap(e);return}else if(m===Zr.MOUSE){this.handleMouseClick(e);return}}}}get mediaPaused(){return y(this,n.MEDIA_PAUSED)}set mediaPaused(e){M(this,n.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){const i=this.mediaPaused?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new d.CustomEvent(i,{composed:!0,bubbles:!0}))}}ee=new WeakMap;Qi.shadowRootOptions={mode:"open"};Qi.getTemplateHTML=vo;function _o(t){var e;const i=t.getAttribute(w.MEDIA_CONTROLLER);return i?(e=t.getRootNode())==null?void 0:e.getElementById(i):Xt(t,"media-controller")}d.customElements.get("media-gesture-receiver")||d.customElements.define("media-gesture-receiver",Qi);var Ta=Qi,Xa=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},oe=(t,e,i)=>(Xa(t,e,"read from private field"),i?i.call(t):e.get(t)),se=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Be=(t,e,i,a)=>(Xa(t,e,"write to private field"),e.set(t,i),i),le=(t,e,i)=>(Xa(t,e,"access private method"),i),Oi,rt,Vt,Et,ci,Ia,Bs,Lt,hi,Sa,Ws,ya,Vs,Gt,zi,Zi,ja,ft,Kt;const v={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function go(t){return`
    <style>
      
      :host([${n.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
      }

      :host(:not([${v.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${v.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${v.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${v.AUDIO}])[${v.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${v.AUDIO}])[${v.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${v.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${v.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${v.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${v.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${v.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${v.USER_INACTIVE}]:not([${n.MEDIA_PAUSED}]):not([${n.MEDIA_IS_AIRPLAYING}]):not([${n.MEDIA_IS_CASTING}]):not([${v.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${v.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${v.USER_INACTIVE}]:not([${v.NO_AUTOHIDE}]):not([${n.MEDIA_PAUSED}]):not([${n.MEDIA_IS_CASTING}]):not([${v.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${v.USER_INACTIVE}][${v.AUTOHIDE_OVER_CONTROLS}]:not([${v.NO_AUTOHIDE}]):not([${n.MEDIA_PAUSED}]):not([${n.MEDIA_IS_CASTING}]):not([${v.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${v.AUDIO}])[${n.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${Ta.shadowRootOptions.mode}">
          ${Ta.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}const fo=Object.values(n),bo="sm:384 md:576 lg:768 xl:960";function Ao(t){Gs(t.target,t.contentRect.width)}function Gs(t,e){var i;if(!t.isConnected)return;const a=(i=t.getAttribute(v.BREAKPOINTS))!=null?i:bo,r=To(a),s=Io(r,e);let o=!1;if(Object.keys(r).forEach(l=>{if(s.includes(l)){t.hasAttribute(`breakpoint${l}`)||(t.setAttribute(`breakpoint${l}`,""),o=!0);return}t.hasAttribute(`breakpoint${l}`)&&(t.removeAttribute(`breakpoint${l}`),o=!0)}),o){const l=new CustomEvent(gt.BREAKPOINTS_CHANGE,{detail:s});t.dispatchEvent(l)}t.breakpointsComputed||(t.breakpointsComputed=!0,t.dispatchEvent(new CustomEvent(gt.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function To(t){const e=t.split(/\s+/);return Object.fromEntries(e.map(i=>i.split(":")))}function Io(t,e){return Object.keys(t).filter(i=>e>=parseInt(t[i]))}class jt extends d.HTMLElement{constructor(){if(super(),se(this,Ia),se(this,Sa),se(this,ya),se(this,Gt),se(this,Zi),se(this,ft),se(this,Oi,0),se(this,rt,null),se(this,Vt,null),se(this,Et,void 0),this.breakpointsComputed=!1,se(this,ci,new MutationObserver(le(this,Ia,Bs).bind(this))),se(this,Lt,!1),se(this,hi,i=>{oe(this,Lt)||(setTimeout(()=>{Ao(i),Be(this,Lt,!1)},0),Be(this,Lt,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const i=he(this.attributes),a=this.constructor.getTemplateHTML(i);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(a):this.shadowRoot.innerHTML=a}const e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){oe(this,rt)&&this.mediaUnsetCallback(oe(this,rt));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[v.AUTOHIDE,v.GESTURES_DISABLED].concat(fo).filter(e=>![n.MEDIA_RENDITION_LIST,n.MEDIA_AUDIO_TRACK_LIST,n.MEDIA_CHAPTERS_CUES,n.MEDIA_WIDTH,n.MEDIA_HEIGHT,n.MEDIA_ERROR,n.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,i,a){e.toLowerCase()==v.AUTOHIDE&&(this.autohide=a)}get media(){let e=this.querySelector(":scope > [slot=media]");return e?.nodeName=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(Be(this,rt,e),e.localName.includes("-")&&await d.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;oe(this,ci).observe(this,{childList:!0,subtree:!0}),xs(this,oe(this,hi));const i=this.getAttribute(v.AUDIO)!=null,a=E(i?"audio player":"video player");this.setAttribute("role","region"),this.setAttribute("aria-label",a),this.handleMediaUpdated(this.media),this.setAttribute(v.USER_INACTIVE,""),Gs(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=d.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;oe(this,ci).disconnect(),Os(this,oe(this,hi)),this.media&&this.mediaUnsetCallback(this.media),(e=d.window)==null||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){Be(this,rt,null)}handleEvent(e){switch(e.type){case"pointerdown":Be(this,Oi,e.timeStamp);break;case"pointermove":le(this,Sa,Ws).call(this,e);break;case"pointerup":le(this,ya,Vs).call(this,e);break;case"mouseleave":le(this,Gt,zi).call(this);break;case"mouseup":this.removeAttribute(v.KEYBOARD_CONTROL);break;case"keyup":le(this,ft,Kt).call(this),this.setAttribute(v.KEYBOARD_CONTROL,"");break}}set autohide(e){const i=Number(e);Be(this,Et,isNaN(i)?0:i)}get autohide(){return(oe(this,Et)===void 0?2:oe(this,Et)).toString()}get breakpoints(){return $(this,v.BREAKPOINTS)}set breakpoints(e){H(this,v.BREAKPOINTS,e)}get audio(){return y(this,v.AUDIO)}set audio(e){M(this,v.AUDIO,e)}get gesturesDisabled(){return y(this,v.GESTURES_DISABLED)}set gesturesDisabled(e){M(this,v.GESTURES_DISABLED,e)}get keyboardControl(){return y(this,v.KEYBOARD_CONTROL)}set keyboardControl(e){M(this,v.KEYBOARD_CONTROL,e)}get noAutohide(){return y(this,v.NO_AUTOHIDE)}set noAutohide(e){M(this,v.NO_AUTOHIDE,e)}get autohideOverControls(){return y(this,v.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){M(this,v.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return y(this,v.USER_INACTIVE)}set userInteractive(e){M(this,v.USER_INACTIVE,e)}}Oi=new WeakMap;rt=new WeakMap;Vt=new WeakMap;Et=new WeakMap;ci=new WeakMap;Ia=new WeakSet;Bs=function(t){const e=this.media;for(const i of t){if(i.type!=="childList")continue;const a=i.removedNodes;for(const r of a){if(r.slot!="media"||i.target!=this)continue;let s=i.previousSibling&&i.previousSibling.previousElementSibling;if(!s||!e)this.mediaUnsetCallback(r);else{let o=s.slot!=="media";for(;(s=s.previousSibling)!==null;)s.slot=="media"&&(o=!1);o&&this.mediaUnsetCallback(r)}}if(e)for(const r of i.addedNodes)r===e&&this.handleMediaUpdated(e)}};Lt=new WeakMap;hi=new WeakMap;Sa=new WeakSet;Ws=function(t){if(t.pointerType!=="mouse"&&t.timeStamp-oe(this,Oi)<250)return;le(this,Zi,ja).call(this),clearTimeout(oe(this,Vt));const e=this.hasAttribute(v.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(t.target)||e)&&le(this,ft,Kt).call(this)};ya=new WeakSet;Vs=function(t){if(t.pointerType==="touch"){const e=!this.hasAttribute(v.USER_INACTIVE);[this,this.media].includes(t.target)&&e?le(this,Gt,zi).call(this):le(this,ft,Kt).call(this)}else t.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(e?.localName))&&le(this,ft,Kt).call(this)};Gt=new WeakSet;zi=function(){if(oe(this,Et)<0||this.hasAttribute(v.USER_INACTIVE))return;this.setAttribute(v.USER_INACTIVE,"");const t=new d.CustomEvent(gt.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(t)};Zi=new WeakSet;ja=function(){if(!this.hasAttribute(v.USER_INACTIVE))return;this.removeAttribute(v.USER_INACTIVE);const t=new d.CustomEvent(gt.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(t)};ft=new WeakSet;Kt=function(){le(this,Zi,ja).call(this),clearTimeout(oe(this,Vt));const t=parseInt(this.autohide);t<0||Be(this,Vt,setTimeout(()=>{le(this,Gt,zi).call(this)},t*1e3))};jt.shadowRootOptions={mode:"open"};jt.getTemplateHTML=go;d.customElements.get("media-container")||d.customElements.define("media-container",jt);var So=jt,Ks=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Q=(t,e,i)=>(Ks(t,e,"read from private field"),i?i.call(t):e.get(t)),St=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ei=(t,e,i,a)=>(Ks(t,e,"write to private field"),e.set(t,i),i),st,nt,Ui,Ke,ke,Pe;class qs{constructor(e,i,{defaultValue:a}={defaultValue:void 0}){St(this,ke),St(this,st,void 0),St(this,nt,void 0),St(this,Ui,void 0),St(this,Ke,new Set),ei(this,st,e),ei(this,nt,i),ei(this,Ui,new Set(a))}[Symbol.iterator](){return Q(this,ke,Pe).values()}get length(){return Q(this,ke,Pe).size}get value(){var e;return(e=[...Q(this,ke,Pe)].join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(ei(this,Ke,new Set),this.add(...(i=e?.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return[...Q(this,ke,Pe)][e]}values(){return Q(this,ke,Pe).values()}forEach(e,i){Q(this,ke,Pe).forEach(e,i)}add(...e){var i,a;e.forEach(r=>Q(this,Ke).add(r)),!(this.value===""&&!((i=Q(this,st))!=null&&i.hasAttribute(`${Q(this,nt)}`)))&&((a=Q(this,st))==null||a.setAttribute(`${Q(this,nt)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>Q(this,Ke).delete(a)),(i=Q(this,st))==null||i.setAttribute(`${Q(this,nt)}`,`${this.value}`)}contains(e){return Q(this,ke,Pe).has(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){return this.remove(e),this.add(i),e===i}}st=new WeakMap;nt=new WeakMap;Ui=new WeakMap;Ke=new WeakMap;ke=new WeakSet;Pe=function(){return Q(this,Ke).size?Q(this,Ke):Q(this,Ui)};const yo=(t="")=>t.split(/\s+/),Ys=(t="")=>{const[e,i,a]=t.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:e==="cc"?Se.CAPTIONS:Se.SUBTITLES,language:i,label:r}},Qs=(t="",e={})=>yo(t).map(i=>{const a=Ys(i);return{...e,...a}}),zs=t=>t?Array.isArray(t)?t.map(e=>typeof e=="string"?Ys(e):e):typeof t=="string"?Qs(t):[t]:[],Mo=({kind:t,label:e,language:i}={kind:"subtitles"})=>e?`${t==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(e)}`:i,Ma=(t=[])=>Array.prototype.map.call(t,Mo).join(" "),ko=(t,e)=>i=>i[t]===e,Zs=t=>{const e=Object.entries(t).map(([i,a])=>ko(i,a));return i=>e.every(a=>a(i))},Ht=(t,e=[],i=[])=>{const a=zs(i).map(Zs),r=s=>a.some(o=>o(s));Array.from(e).filter(r).forEach(s=>{s.mode=t})},Xi=(t,e=()=>!0)=>{if(!t?.textTracks)return[];const i=typeof e=="function"?e:Zs(e);return Array.from(t.textTracks).filter(i)},Lo=t=>{var e;return!!((e=t.mediaSubtitlesShowing)!=null&&e.length)||t.hasAttribute(n.MEDIA_SUBTITLES_SHOWING)},wo=t=>{var e;const{media:i,fullscreenElement:a}=t;try{const r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){const s=(e=a[r])==null?void 0:e.call(a);if(s instanceof Promise)return s.catch(()=>{})}else i?.webkitEnterFullscreen?i.webkitEnterFullscreen():i?.requestFullscreen&&i.requestFullscreen()}catch(r){console.error(r)}},ts="exitFullscreen"in te?"exitFullscreen":"webkitExitFullscreen"in te?"webkitExitFullscreen":"webkitCancelFullScreen"in te?"webkitCancelFullScreen":void 0,Ro=t=>{var e;const{documentElement:i}=t;if(ts){const a=(e=i?.[ts])==null?void 0:e.call(i);if(a instanceof Promise)return a.catch(()=>{})}},wt="fullscreenElement"in te?"fullscreenElement":"webkitFullscreenElement"in te?"webkitFullscreenElement":void 0,Do=t=>{const{documentElement:e,media:i}=t,a=e?.[wt];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===Xn.FULLSCREEN?i:a},Co=t=>{var e;const{media:i,documentElement:a,fullscreenElement:r=i}=t;if(!i||!a)return!1;const s=Do(t);if(!s)return!1;if(s===r||s===i)return!0;if(s.localName.includes("-")){let o=s.shadowRoot;if(!(wt in o))return At(s,r);for(;o?.[wt];){if(o[wt]===r)return!0;o=(e=o[wt])==null?void 0:e.shadowRoot}}return!1},Po="fullscreenEnabled"in te?"fullscreenEnabled":"webkitFullscreenEnabled"in te?"webkitFullscreenEnabled":void 0,xo=t=>{const{documentElement:e,media:i}=t;return!!e?.[Po]||i&&"webkitSupportsFullscreen"in i};let ti;const Ja=()=>{var t,e;return ti||(ti=(e=(t=te)==null?void 0:t.createElement)==null?void 0:e.call(t,"video"),ti)},Oo=async(t=Ja())=>{if(!t)return!1;const e=t.volume;t.volume=e/2+.1;const i=new AbortController,a=await Promise.race([Uo(t,i.signal),No(t,e)]);return i.abort(),a},Uo=(t,e)=>new Promise(i=>{t.addEventListener("volumechange",()=>i(!0),{signal:e})}),No=async(t,e)=>{for(let i=0;i<10;i++){if(t.volume===e)return!1;await ks(10)}return t.volume!==e},$o=/.*Version\/.*Safari\/.*/.test(d.navigator.userAgent),Xs=(t=Ja())=>d.matchMedia("(display-mode: standalone)").matches&&$o?!1:typeof t?.requestPictureInPicture=="function",js=(t=Ja())=>xo({documentElement:te,media:t}),Ho=js(),Fo=Xs(),Bo=!!d.WebKitPlaybackTargetAvailabilityEvent,Wo=!!d.chrome,Ni=t=>Xi(t.media,e=>[Se.SUBTITLES,Se.CAPTIONS].includes(e.kind)).sort((e,i)=>e.kind>=i.kind?1:-1),Js=t=>Xi(t.media,e=>e.mode===_t.SHOWING&&[Se.SUBTITLES,Se.CAPTIONS].includes(e.kind)),en=(t,e)=>{const i=Ni(t),a=Js(t),r=!!a.length;if(i.length){if(e===!1||r&&e!==!0)Ht(_t.DISABLED,i,a);else if(e===!0||!r&&e!==!1){let s=i[0];const{options:o}=t;if(!o?.noSubtitlesLangPref){const b=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),_=b?[b,...globalThis.navigator.languages]:globalThis.navigator.languages,h=i.filter(m=>_.some(P=>m.language.toLowerCase().startsWith(P.split("-")[0]))).sort((m,P)=>{const T=_.findIndex(L=>m.language.toLowerCase().startsWith(L.split("-")[0])),f=_.findIndex(L=>P.language.toLowerCase().startsWith(L.split("-")[0]));return T-f});h[0]&&(s=h[0])}const{language:l,label:u,kind:g}=s;Ht(_t.DISABLED,i,a),Ht(_t.SHOWING,i,[{language:l,label:u,kind:g}])}}},er=(t,e)=>t===e?!0:t==null||e==null||typeof t!=typeof e?!1:typeof t=="number"&&Number.isNaN(t)&&Number.isNaN(e)?!0:typeof t!="object"?!1:Array.isArray(t)?Vo(t,e):Object.entries(t).every(([i,a])=>i in e&&er(a,e[i])),Vo=(t,e)=>{const i=Array.isArray(t),a=Array.isArray(e);return i!==a?!1:i||a?t.length!==e.length?!1:t.every((r,s)=>er(r,e[s])):!0},Go=Object.values(Le);let $i;const Ko=Oo().then(t=>($i=t,$i)),qo=async(...t)=>{await Promise.all(t.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof d.HTMLElement))return;const i=e.localName;if(!i.includes("-"))return;const a=d.customElements.get(i);a&&e instanceof a||(await d.customElements.whenDefined(i),d.customElements.upgrade(e))}))},Yo=new d.DOMParser,Qo=t=>t&&(Yo.parseFromString(t,"text/html").body.textContent||t),Rt={mediaError:{get(t,e){const{media:i}=t;if(e?.type!=="playing")return i?.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(t,e){var i;const{media:a}=t;if(e?.type!=="playing")return(i=a?.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(t,e){var i,a;const{media:r}=t;if(e?.type!=="playing")return(a=(i=r?.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(t){var e;const{media:i}=t;return(e=i?.videoWidth)!=null?e:0},mediaEvents:["resize"]},mediaHeight:{get(t){var e;const{media:i}=t;return(e=i?.videoHeight)!=null?e:0},mediaEvents:["resize"]},mediaPaused:{get(t){var e;const{media:i}=t;return(e=i?.paused)!=null?e:!0},set(t,e){var i;const{media:a}=e;a&&(t?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(t,e){const{media:i}=t;return i?e?e.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(t){var e;const{media:i}=t;return(e=i?.ended)!=null?e:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(t){var e;const{media:i}=t;return(e=i?.playbackRate)!=null?e:1},set(t,e){const{media:i}=e;i&&Number.isFinite(+t)&&(i.playbackRate=+t)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(t){var e;const{media:i}=t;return(e=i?.muted)!=null?e:!1},set(t,e){const{media:i}=e;if(i){try{d.localStorage.setItem("media-chrome-pref-muted",t?"true":"false")}catch(a){console.debug("Error setting muted pref",a)}i.muted=t}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noMutedPref:i}}=e,{media:a}=e;if(!(!a||a.muted||i))try{const r=d.localStorage.getItem("media-chrome-pref-muted")==="true";Rt.mediaMuted.set(r,e),t(r)}catch(r){console.debug("Error getting muted pref",r)}}]},mediaVolume:{get(t){var e;const{media:i}=t;return(e=i?.volume)!=null?e:1},set(t,e){const{media:i}=e;if(i){try{t==null?d.localStorage.removeItem("media-chrome-pref-volume"):d.localStorage.setItem("media-chrome-pref-volume",t.toString())}catch(a){console.debug("Error setting volume pref",a)}Number.isFinite(+t)&&(i.volume=+t)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noVolumePref:i}}=e;if(!i)try{const{media:a}=e;if(!a)return;const r=d.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;Rt.mediaVolume.set(+r,e),t(+r)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(t){const{media:e}=t;return typeof e?.volume>"u"?"high":e.muted||e.volume===0?"off":e.volume<.5?"low":e.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(t){var e;const{media:i}=t;return(e=i?.currentTime)!=null?e:0},set(t,e){const{media:i}=e;!i||!za(t)||(i.currentTime=t)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(t){const{media:e,options:{defaultDuration:i}={}}=t;return i&&(!e||!e.duration||Number.isNaN(e.duration)||!Number.isFinite(e.duration))?i:Number.isFinite(e?.duration)?e.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(t){const{media:e}=t;return e?.readyState<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(t){var e;const{media:i}=t;if(!((e=i?.seekable)!=null&&e.length))return;const a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(t){var e;const{media:i}=t,a=(e=i?.buffered)!=null?e:[];return Array.from(a).map((r,s)=>[Number(a.start(s).toFixed(3)),Number(a.end(s).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(t){const{media:e,options:{defaultStreamType:i}={}}=t,a=[Le.LIVE,Le.ON_DEMAND].includes(i)?i:void 0;if(!e)return a;const{streamType:r}=e;if(Go.includes(r))return r===Le.UNKNOWN?a:r;const s=e.duration;return s===1/0?Le.LIVE:Number.isFinite(s)?Le.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(t){const{media:e}=t;if(!e)return Number.NaN;const{targetLiveWindow:i}=e,a=Rt.mediaStreamType.get(t);return(i==null||Number.isNaN(i))&&a===Le.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(t){const{media:e,options:{liveEdgeOffset:i=10}={}}=t;if(!e)return!1;if(typeof e.liveEdgeStart=="number")return Number.isNaN(e.liveEdgeStart)?!1:e.currentTime>=e.liveEdgeStart;if(!(Rt.mediaStreamType.get(t)===Le.LIVE))return!1;const r=e.seekable;if(!r)return!0;if(!r.length)return!1;const s=r.end(r.length-1)-i;return e.currentTime>=s},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(t){return Ni(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(t){return Js(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i,a;const{media:r,options:s}=e;if(!r)return;const o=l=>{var u;!s.defaultSubtitles||l&&![Se.CAPTIONS,Se.SUBTITLES].includes((u=l?.track)==null?void 0:u.kind)||en(e,!0)};return r.addEventListener("loadstart",o),(i=r.textTracks)==null||i.addEventListener("addtrack",o),(a=r.textTracks)==null||a.addEventListener("removetrack",o),()=>{var l,u;r.removeEventListener("loadstart",o),(l=r.textTracks)==null||l.removeEventListener("addtrack",o),(u=r.textTracks)==null||u.removeEventListener("removetrack",o)}}]},mediaChaptersCues:{get(t){var e;const{media:i}=t;if(!i)return[];const[a]=Xi(i,{kind:Se.CHAPTERS});return Array.from((e=a?.cues)!=null?e:[]).map(({text:r,startTime:s,endTime:o})=>({text:Qo(r),startTime:s,endTime:o}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;if(!a)return;const r=a.querySelector('track[kind="chapters"][default][src]'),s=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r?.addEventListener("load",t),s?.addEventListener("load",t),()=>{r?.removeEventListener("load",t),s?.removeEventListener("load",t)}}]},mediaIsPip:{get(t){var e,i;const{media:a,documentElement:r}=t;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(e=a.localName)!=null&&e.includes("-")?At(a,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let s=r.pictureInPictureElement.shadowRoot;for(;s?.pictureInPictureElement;){if(s.pictureInPictureElement===a)return!0;s=(i=s.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(t,e){const{media:i}=e;if(i)if(t){if(!te.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(r=>{if(r.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const s=()=>{i.removeEventListener("loadedmetadata",o),i.preload="none"},o=()=>{i.requestPictureInPicture().catch(a),s()};i.addEventListener("loadedmetadata",o),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),s()},1e3)}else throw r}else throw r})}else te.pictureInPictureElement&&te.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(t){var e;const{media:i}=t;return[...(e=i?.videoRenditions)!=null?e:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(t){var e,i,a;const{media:r}=t;return(a=(i=r?.videoRenditions)==null?void 0:i[(e=r.videoRenditions)==null?void 0:e.selectedIndex])==null?void 0:a.id},set(t,e){const{media:i}=e;if(!i?.videoRenditions){console.warn("MediaController: Rendition selection not supported by this media.");return}const a=t,r=Array.prototype.findIndex.call(i.videoRenditions,s=>s.id==a);i.videoRenditions.selectedIndex!=r&&(i.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(t){var e;const{media:i}=t;return[...(e=i?.audioTracks)!=null?e:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(t){var e,i;const{media:a}=t;return(i=[...(e=a?.audioTracks)!=null?e:[]].find(r=>r.enabled))==null?void 0:i.id},set(t,e){const{media:i}=e;if(!i?.audioTracks){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const a=t;for(const r of i.audioTracks)r.enabled=a==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(t){return Co(t)},set(t,e){t?wo(e):Ro(e)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(t){var e;const{media:i}=t;return!i?.remote||((e=i.remote)==null?void 0:e.state)==="disconnected"?!1:!!i.remote.state},set(t,e){var i,a;const{media:r}=e;if(r&&!(t&&((i=r.remote)==null?void 0:i.state)!=="disconnected")&&!(!t&&((a=r.remote)==null?void 0:a.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(t,e){const{media:i}=e;if(i){if(!(i.webkitShowPlaybackTargetPicker&&d.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(t){const{media:e}=t;if(!Ho||!js(e))return re.UNSUPPORTED}},mediaPipUnavailable:{get(t){const{media:e}=t;if(!Fo||!Xs(e))return re.UNSUPPORTED;if(e?.disablePictureInPicture)return re.UNAVAILABLE}},mediaVolumeUnavailable:{get(t){const{media:e}=t;if($i===!1||e?.volume==null)return re.UNSUPPORTED},stateOwnersUpdateHandlers:[t=>{$i==null&&Ko.then(e=>t(e?void 0:re.UNSUPPORTED))}]},mediaCastUnavailable:{get(t,{availability:e="not-available"}={}){var i;const{media:a}=t;if(!Wo||!((i=a?.remote)!=null&&i.state))return re.UNSUPPORTED;if(!(e==null||e==="available"))return re.UNAVAILABLE},stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(s=>{t({availability:s?"available":"not-available"})}).catch(s=>{s.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var s;(s=a?.remote)==null||s.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(t,e){if(!Bo)return re.UNSUPPORTED;if(e?.availability==="not-available")return re.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(s=>{t({availability:s?"available":"not-available"})}).catch(s=>{s.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var s;(s=a?.remote)==null||s.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(t){var e;const{media:i}=t;if(!i?.videoRenditions)return re.UNSUPPORTED;if(!((e=i.videoRenditions)!=null&&e.length))return re.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(t){var e,i;const{media:a}=t;if(!a?.audioTracks)return re.UNSUPPORTED;if(((i=(e=a.audioTracks)==null?void 0:e.length)!=null?i:0)<=1)return re.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(t){const{options:{mediaLang:e}={}}=t;return e??"en"}}},zo={[p.MEDIA_PREVIEW_REQUEST](t,e,{detail:i}){var a,r,s;const{media:o}=e,l=i??void 0;let u,g;if(o&&l!=null){const[m]=Xi(o,{kind:Se.METADATA,label:"thumbnails"}),P=Array.prototype.find.call((a=m?.cues)!=null?a:[],(T,f,L)=>f===0?T.endTime>l:f===L.length-1?T.startTime<=l:T.startTime<=l&&T.endTime>l);if(P){const T=/'^(?:[a-z]+:)?\/\//i.test(P.text)||(r=o?.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,f=new URL(P.text,T);g=new URLSearchParams(f.hash).get("#xywh").split(",").map(S=>+S),u=f.href}}const b=t.mediaDuration.get(e);let h=(s=t.mediaChaptersCues.get(e).find((m,P,T)=>P===T.length-1&&b===m.endTime?m.startTime<=l&&m.endTime>=l:m.startTime<=l&&m.endTime>l))==null?void 0:s.text;return i!=null&&h==null&&(h=""),{mediaPreviewTime:l,mediaPreviewImage:u,mediaPreviewCoords:g,mediaPreviewChapter:h}},[p.MEDIA_PAUSE_REQUEST](t,e){t["mediaPaused"].set(!0,e)},[p.MEDIA_PLAY_REQUEST](t,e){var i,a,r,s;const o="mediaPaused",u=t.mediaStreamType.get(e)===Le.LIVE,g=!((i=e.options)!=null&&i.noAutoSeekToLive),b=t.mediaTargetLiveWindow.get(e)>0;if(u&&g&&!b){const _=(a=t.mediaSeekable.get(e))==null?void 0:a[1];if(_){const h=(s=(r=e.options)==null?void 0:r.seekToLiveOffset)!=null?s:0,m=_-h;t.mediaCurrentTime.set(m,e)}}t[o].set(!1,e)},[p.MEDIA_PLAYBACK_RATE_REQUEST](t,e,{detail:i}){const a="mediaPlaybackRate",r=i;t[a].set(r,e)},[p.MEDIA_MUTE_REQUEST](t,e){t["mediaMuted"].set(!0,e)},[p.MEDIA_UNMUTE_REQUEST](t,e){const i="mediaMuted";t.mediaVolume.get(e)||t.mediaVolume.set(.25,e),t[i].set(!1,e)},[p.MEDIA_VOLUME_REQUEST](t,e,{detail:i}){const a="mediaVolume",r=i;r&&t.mediaMuted.get(e)&&t.mediaMuted.set(!1,e),t[a].set(r,e)},[p.MEDIA_SEEK_REQUEST](t,e,{detail:i}){const a="mediaCurrentTime",r=i;t[a].set(r,e)},[p.MEDIA_SEEK_TO_LIVE_REQUEST](t,e){var i,a,r;const s="mediaCurrentTime",o=(i=t.mediaSeekable.get(e))==null?void 0:i[1];if(Number.isNaN(Number(o)))return;const l=(r=(a=e.options)==null?void 0:a.seekToLiveOffset)!=null?r:0,u=o-l;t[s].set(u,e)},[p.MEDIA_SHOW_SUBTITLES_REQUEST](t,e,{detail:i}){var a;const{options:r}=e,s=Ni(e),o=zs(i),l=(a=o[0])==null?void 0:a.language;l&&!r.noSubtitlesLangPref&&d.localStorage.setItem("media-chrome-pref-subtitles-lang",l),Ht(_t.SHOWING,s,o)},[p.MEDIA_DISABLE_SUBTITLES_REQUEST](t,e,{detail:i}){const a=Ni(e),r=i??[];Ht(_t.DISABLED,a,r)},[p.MEDIA_TOGGLE_SUBTITLES_REQUEST](t,e,{detail:i}){en(e,i)},[p.MEDIA_RENDITION_REQUEST](t,e,{detail:i}){const a="mediaRenditionSelected",r=i;t[a].set(r,e)},[p.MEDIA_AUDIO_TRACK_REQUEST](t,e,{detail:i}){const a="mediaAudioTrackEnabled",r=i;t[a].set(r,e)},[p.MEDIA_ENTER_PIP_REQUEST](t,e){const i="mediaIsPip";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[p.MEDIA_EXIT_PIP_REQUEST](t,e){t["mediaIsPip"].set(!1,e)},[p.MEDIA_ENTER_FULLSCREEN_REQUEST](t,e){const i="mediaIsFullscreen";t.mediaIsPip.get(e)&&t.mediaIsPip.set(!1,e),t[i].set(!0,e)},[p.MEDIA_EXIT_FULLSCREEN_REQUEST](t,e){t["mediaIsFullscreen"].set(!1,e)},[p.MEDIA_ENTER_CAST_REQUEST](t,e){const i="mediaIsCasting";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[p.MEDIA_EXIT_CAST_REQUEST](t,e){t["mediaIsCasting"].set(!1,e)},[p.MEDIA_AIRPLAY_REQUEST](t,e){t["mediaIsAirplaying"].set(!0,e)}},Zo=({media:t,fullscreenElement:e,documentElement:i,stateMediator:a=Rt,requestMap:r=zo,options:s={},monitorStateOwnersOnlyWithSubscriptions:o=!0})=>{const l=[],u={options:{...s}};let g=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const b=T=>{T!=null&&(er(T,g)||(g=Object.freeze({...g,...T}),l.forEach(f=>f(g))))},_=()=>{const T=Object.entries(a).reduce((f,[L,{get:S}])=>(f[L]=S(u),f),{});b(T)},h={};let m;const P=async(T,f)=>{var L,S,k,B,J,me,vr,_r,gr,fr,br,Ar,Tr,Ir,Sr,yr;const Un=!!m;if(m={...u,...m??{},...T},Un)return;await qo(...Object.values(T));const Xe=l.length>0&&f===0&&o,Mr=u.media!==m.media,kr=((L=u.media)==null?void 0:L.textTracks)!==((S=m.media)==null?void 0:S.textTracks),Lr=((k=u.media)==null?void 0:k.videoRenditions)!==((B=m.media)==null?void 0:B.videoRenditions),wr=((J=u.media)==null?void 0:J.audioTracks)!==((me=m.media)==null?void 0:me.audioTracks),Rr=((vr=u.media)==null?void 0:vr.remote)!==((_r=m.media)==null?void 0:_r.remote),Dr=u.documentElement!==m.documentElement,Cr=!!u.media&&(Mr||Xe),Pr=!!((gr=u.media)!=null&&gr.textTracks)&&(kr||Xe),xr=!!((fr=u.media)!=null&&fr.videoRenditions)&&(Lr||Xe),Or=!!((br=u.media)!=null&&br.audioTracks)&&(wr||Xe),Ur=!!((Ar=u.media)!=null&&Ar.remote)&&(Rr||Xe),Nr=!!u.documentElement&&(Dr||Xe),$r=Cr||Pr||xr||Or||Ur||Nr,je=l.length===0&&f===1&&o,Hr=!!m.media&&(Mr||je),Fr=!!((Tr=m.media)!=null&&Tr.textTracks)&&(kr||je),Br=!!((Ir=m.media)!=null&&Ir.videoRenditions)&&(Lr||je),Wr=!!((Sr=m.media)!=null&&Sr.audioTracks)&&(wr||je),Vr=!!((yr=m.media)!=null&&yr.remote)&&(Rr||je),Gr=!!m.documentElement&&(Dr||je),Kr=Hr||Fr||Br||Wr||Vr||Gr;if(!($r||Kr)){Object.entries(m).forEach(([O,It])=>{u[O]=It}),_(),m=void 0;return}Object.entries(a).forEach(([O,{get:It,mediaEvents:Nn=[],textTracksEvents:$n=[],videoRenditionsEvents:Hn=[],audioTracksEvents:Fn=[],remoteEvents:Bn=[],rootEvents:Wn=[],stateOwnersUpdateHandlers:Vn=[]}])=>{h[O]||(h[O]={});const ie=F=>{const ae=It(u,F);b({[O]:ae})};let K;K=h[O].mediaEvents,Nn.forEach(F=>{K&&Cr&&(u.media.removeEventListener(F,K),h[O].mediaEvents=void 0),Hr&&(m.media.addEventListener(F,ie),h[O].mediaEvents=ie)}),K=h[O].textTracksEvents,$n.forEach(F=>{var ae,de;K&&Pr&&((ae=u.media.textTracks)==null||ae.removeEventListener(F,K),h[O].textTracksEvents=void 0),Fr&&((de=m.media.textTracks)==null||de.addEventListener(F,ie),h[O].textTracksEvents=ie)}),K=h[O].videoRenditionsEvents,Hn.forEach(F=>{var ae,de;K&&xr&&((ae=u.media.videoRenditions)==null||ae.removeEventListener(F,K),h[O].videoRenditionsEvents=void 0),Br&&((de=m.media.videoRenditions)==null||de.addEventListener(F,ie),h[O].videoRenditionsEvents=ie)}),K=h[O].audioTracksEvents,Fn.forEach(F=>{var ae,de;K&&Or&&((ae=u.media.audioTracks)==null||ae.removeEventListener(F,K),h[O].audioTracksEvents=void 0),Wr&&((de=m.media.audioTracks)==null||de.addEventListener(F,ie),h[O].audioTracksEvents=ie)}),K=h[O].remoteEvents,Bn.forEach(F=>{var ae,de;K&&Ur&&((ae=u.media.remote)==null||ae.removeEventListener(F,K),h[O].remoteEvents=void 0),Vr&&((de=m.media.remote)==null||de.addEventListener(F,ie),h[O].remoteEvents=ie)}),K=h[O].rootEvents,Wn.forEach(F=>{K&&Nr&&(u.documentElement.removeEventListener(F,K),h[O].rootEvents=void 0),Gr&&(m.documentElement.addEventListener(F,ie),h[O].rootEvents=ie)});const qr=h[O].stateOwnersUpdateHandlers;Vn.forEach(F=>{qr&&$r&&qr(),Kr&&(h[O].stateOwnersUpdateHandlers=F(ie,m))})}),Object.entries(m).forEach(([O,It])=>{u[O]=It}),_(),m=void 0};return P({media:t,fullscreenElement:e,documentElement:i,options:s}),{dispatch(T){const{type:f,detail:L}=T;if(r[f]&&g.mediaErrorCode==null){b(r[f](a,u,T));return}f==="mediaelementchangerequest"?P({media:L}):f==="fullscreenelementchangerequest"?P({fullscreenElement:L}):f==="documentelementchangerequest"?P({documentElement:L}):f==="optionschangerequest"&&(Object.entries(L??{}).forEach(([S,k])=>{u.options[S]=k}),_())},getState(){return g},subscribe(T){return P({},l.length+1),l.push(T),T(g),()=>{const f=l.indexOf(T);f>=0&&(P({},l.length-1),l.splice(f,1))}}}};var tr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},I=(t,e,i)=>(tr(t,e,"read from private field"),i?i.call(t):e.get(t)),ye=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},De=(t,e,i,a)=>(tr(t,e,"write to private field"),e.set(t,i),i),Ue=(t,e,i)=>(tr(t,e,"access private method"),i),qe,Dt,x,Ct,ve,mi,pi,ka,bt,qt,Ei,La;const tn=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],is=10,c={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",SEEK_TO_LIVE_OFFSET:"seektoliveoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",LANG:"lang"};let an=class extends jt{constructor(){super(),ye(this,pi),ye(this,bt),ye(this,Ei),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,ye(this,qe,new qs(this,c.HOTKEYS)),ye(this,Dt,void 0),ye(this,x,void 0),ye(this,Ct,void 0),ye(this,ve,void 0),ye(this,mi,i=>{var a;(a=I(this,x))==null||a.dispatch(i)}),this.associateElement(this);let e={};De(this,Ct,i=>{Object.entries(i).forEach(([a,r])=>{if(a in e&&e[a]===r)return;this.propagateMediaState(a,r);const s=a.toLowerCase(),o=new d.CustomEvent(Zn[s],{composed:!0,detail:r});this.dispatchEvent(o)}),e=i}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(c.NO_HOTKEYS,c.HOTKEYS,c.DEFAULT_STREAM_TYPE,c.DEFAULT_SUBTITLES,c.DEFAULT_DURATION,c.LANG)}get mediaStore(){return I(this,x)}set mediaStore(e){var i,a;if(I(this,x)&&((i=I(this,ve))==null||i.call(this),De(this,ve,void 0)),De(this,x,e),!I(this,x)&&!this.hasAttribute(c.NO_DEFAULT_STORE)){Ue(this,pi,ka).call(this);return}De(this,ve,(a=I(this,x))==null?void 0:a.subscribe(I(this,Ct)))}get fullscreenElement(){var e;return(e=I(this,Dt))!=null?e:this}set fullscreenElement(e){var i;this.hasAttribute(c.FULLSCREEN_ELEMENT)&&this.removeAttribute(c.FULLSCREEN_ELEMENT),De(this,Dt,e),(i=I(this,x))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return y(this,c.DEFAULT_SUBTITLES)}set defaultSubtitles(e){M(this,c.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return $(this,c.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){H(this,c.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return N(this,c.DEFAULT_DURATION)}set defaultDuration(e){z(this,c.DEFAULT_DURATION,e)}get noHotkeys(){return y(this,c.NO_HOTKEYS)}set noHotkeys(e){M(this,c.NO_HOTKEYS,e)}get keysUsed(){return $(this,c.KEYS_USED)}set keysUsed(e){H(this,c.KEYS_USED,e)}get liveEdgeOffset(){return N(this,c.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){z(this,c.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return y(this,c.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){M(this,c.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return y(this,c.NO_VOLUME_PREF)}set noVolumePref(e){M(this,c.NO_VOLUME_PREF,e)}get noSubtitlesLangPref(){return y(this,c.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){M(this,c.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return y(this,c.NO_DEFAULT_STORE)}set noDefaultStore(e){M(this,c.NO_DEFAULT_STORE,e)}attributeChangedCallback(e,i,a){var r,s,o,l,u,g,b,_,h;if(super.attributeChangedCallback(e,i,a),e===c.NO_HOTKEYS)a!==i&&a===""?(this.hasAttribute(c.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==i&&a===null&&this.enableHotkeys();else if(e===c.HOTKEYS)I(this,qe).value=a;else if(e===c.DEFAULT_SUBTITLES&&a!==i)(r=I(this,x))==null||r.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(c.DEFAULT_SUBTITLES)}});else if(e===c.DEFAULT_STREAM_TYPE)(o=I(this,x))==null||o.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(s=this.getAttribute(c.DEFAULT_STREAM_TYPE))!=null?s:void 0}});else if(e===c.LIVE_EDGE_OFFSET)(l=I(this,x))==null||l.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(c.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(c.LIVE_EDGE_OFFSET)}});else if(e===c.SEEK_TO_LIVE_OFFSET)(u=I(this,x))==null||u.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(c.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(c.SEEK_TO_LIVE_OFFSET):void 0}});else if(e===c.NO_AUTO_SEEK_TO_LIVE)(g=I(this,x))==null||g.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(c.NO_AUTO_SEEK_TO_LIVE)}});else if(e===c.FULLSCREEN_ELEMENT){const m=a?(b=this.getRootNode())==null?void 0:b.getElementById(a):void 0;De(this,Dt,m),(_=I(this,x))==null||_.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===c.LANG&&a!==i&&(ro(a),(h=I(this,x))==null||h.dispatch({type:"optionschangerequest",detail:{mediaLang:a}}))}connectedCallback(){var e,i;!I(this,x)&&!this.hasAttribute(c.NO_DEFAULT_STORE)&&Ue(this,pi,ka).call(this),(e=I(this,x))==null||e.dispatch({type:"documentelementchangerequest",detail:te}),super.connectedCallback(),I(this,x)&&!I(this,ve)&&De(this,ve,(i=I(this,x))==null?void 0:i.subscribe(I(this,Ct))),this.enableHotkeys()}disconnectedCallback(){var e,i,a,r;(e=super.disconnectedCallback)==null||e.call(this),I(this,x)&&((i=I(this,x))==null||i.dispatch({type:"documentelementchangerequest",detail:void 0}),(a=I(this,x))==null||a.dispatch({type:p.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),I(this,ve)&&((r=I(this,ve))==null||r.call(this),De(this,ve,void 0))}mediaSetCallback(e){var i;super.mediaSetCallback(e),(i=I(this,x))==null||i.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var i;super.mediaUnsetCallback(e),(i=I(this,x))==null||i.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,i){ss(this.mediaStateReceivers,e,i)}associateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(i.has(e))return;const a=this.registerMediaStateReceiver.bind(this),r=this.unregisterMediaStateReceiver.bind(this),s=il(e,a,r);Object.values(p).forEach(o=>{e.addEventListener(o,I(this,mi))}),i.set(e,s)}unassociateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(!i.has(e))return;i.get(e)(),i.delete(e),Object.values(p).forEach(r=>{e.removeEventListener(r,I(this,mi))})}registerMediaStateReceiver(e){if(!e)return;const i=this.mediaStateReceivers;i.indexOf(e)>-1||(i.push(e),I(this,x)&&Object.entries(I(this,x).getState()).forEach(([r,s])=>{ss([e],r,s)}))}unregisterMediaStateReceiver(e){const i=this.mediaStateReceivers,a=i.indexOf(e);a<0||i.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",Ue(this,Ei,La))}disableHotkeys(){this.removeEventListener("keydown",Ue(this,Ei,La)),this.removeEventListener("keyup",Ue(this,bt,qt))}get hotkeys(){return $(this,c.HOTKEYS)}set hotkeys(e){H(this,c.HOTKEYS,e)}keyboardShortcutHandler(e){var i,a,r,s,o;const l=e.target;if(((r=(a=(i=l.getAttribute(c.KEYS_USED))==null?void 0:i.split(" "))!=null?a:l?.keysUsed)!=null?r:[]).map(h=>h==="Space"?" ":h).filter(Boolean).includes(e.key))return;let g,b,_;if(!I(this,qe).contains(`no${e.key.toLowerCase()}`)&&!(e.key===" "&&I(this,qe).contains("nospace")))switch(e.key){case" ":case"k":g=I(this,x).getState().mediaPaused?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new d.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"m":g=this.mediaStore.getState().mediaVolumeLevel==="off"?p.MEDIA_UNMUTE_REQUEST:p.MEDIA_MUTE_REQUEST,this.dispatchEvent(new d.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"f":g=this.mediaStore.getState().mediaIsFullscreen?p.MEDIA_EXIT_FULLSCREEN_REQUEST:p.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new d.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new d.CustomEvent(p.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{const h=this.hasAttribute(c.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(c.KEYBOARD_BACKWARD_SEEK_OFFSET):is;b=Math.max(((s=this.mediaStore.getState().mediaCurrentTime)!=null?s:0)-h,0),_=new d.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:b}),this.dispatchEvent(_);break}case"ArrowRight":{const h=this.hasAttribute(c.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(c.KEYBOARD_FORWARD_SEEK_OFFSET):is;b=Math.max(((o=this.mediaStore.getState().mediaCurrentTime)!=null?o:0)+h,0),_=new d.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:b}),this.dispatchEvent(_);break}}}};qe=new WeakMap;Dt=new WeakMap;x=new WeakMap;Ct=new WeakMap;ve=new WeakMap;mi=new WeakMap;pi=new WeakSet;ka=function(){var t;this.mediaStore=Zo({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(c.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(c.DEFAULT_DURATION)?+this.getAttribute(c.DEFAULT_DURATION):void 0,defaultStreamType:(t=this.getAttribute(c.DEFAULT_STREAM_TYPE))!=null?t:void 0,liveEdgeOffset:this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(c.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(c.SEEK_TO_LIVE_OFFSET):this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(c.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(c.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(c.NO_SUBTITLES_LANG_PREF)}})};bt=new WeakSet;qt=function(t){const{key:e}=t;if(!tn.includes(e)){this.removeEventListener("keyup",Ue(this,bt,qt));return}this.keyboardShortcutHandler(t)};Ei=new WeakSet;La=function(t){const{metaKey:e,altKey:i,key:a}=t;if(e||i||!tn.includes(a)){this.removeEventListener("keyup",Ue(this,bt,qt));return}[" ","ArrowLeft","ArrowRight"].includes(a)&&!(I(this,qe).contains(`no${a.toLowerCase()}`)||a===" "&&I(this,qe).contains("nospace"))&&t.preventDefault(),this.addEventListener("keyup",Ue(this,bt,qt),{once:!0})};const Xo=Object.values(n),jo=Object.values(ys),rn=t=>{var e,i,a,r;let{observedAttributes:s}=t.constructor;!s&&((e=t.nodeName)!=null&&e.includes("-"))&&(d.customElements.upgrade(t),{observedAttributes:s}=t.constructor);const o=(r=(a=(i=t?.getAttribute)==null?void 0:i.call(t,w.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(s||o)?(s||o).filter(l=>Xo.includes(l)):[]},Jo=t=>{var e,i;return(e=t.nodeName)!=null&&e.includes("-")&&d.customElements.get((i=t.nodeName)==null?void 0:i.toLowerCase())&&!(t instanceof d.customElements.get(t.nodeName.toLowerCase()))&&d.customElements.upgrade(t),jo.some(a=>a in t)},wa=t=>Jo(t)||!!rn(t).length,as=t=>{var e;return(e=t?.join)==null?void 0:e.call(t,":")},rs={[n.MEDIA_SUBTITLES_LIST]:Ma,[n.MEDIA_SUBTITLES_SHOWING]:Ma,[n.MEDIA_SEEKABLE]:as,[n.MEDIA_BUFFERED]:t=>t?.map(as).join(" "),[n.MEDIA_PREVIEW_COORDS]:t=>t?.join(" "),[n.MEDIA_RENDITION_LIST]:jn,[n.MEDIA_AUDIO_TRACK_LIST]:eo},el=async(t,e,i)=>{var a,r;if(t.isConnected||await ks(0),typeof i=="boolean"||i==null)return M(t,e,i);if(typeof i=="number")return z(t,e,i);if(typeof i=="string")return H(t,e,i);if(Array.isArray(i)&&!i.length)return t.removeAttribute(e);const s=(r=(a=rs[e])==null?void 0:a.call(rs,i))!=null?r:i;return t.setAttribute(e,s)},tl=t=>{var e;return!!((e=t.closest)!=null&&e.call(t,'*[slot="media"]'))},We=(t,e)=>{if(tl(t))return;const i=(r,s)=>{var o,l;wa(r)&&s(r);const{children:u=[]}=r??{},g=(l=(o=r?.shadowRoot)==null?void 0:o.children)!=null?l:[];[...u,...g].forEach(_=>We(_,s))},a=t?.nodeName.toLowerCase();if(a.includes("-")&&!wa(t)){d.customElements.whenDefined(a).then(()=>{i(t,e)});return}i(t,e)},ss=(t,e,i)=>{t.forEach(a=>{if(e in a){a[e]=i;return}const r=rn(a),s=e.toLowerCase();r.includes(s)&&el(a,s,i)})},il=(t,e,i)=>{We(t,e);const a=b=>{var _;const h=(_=b?.composedPath()[0])!=null?_:b.target;e(h)},r=b=>{var _;const h=(_=b?.composedPath()[0])!=null?_:b.target;i(h)};t.addEventListener(p.REGISTER_MEDIA_STATE_RECEIVER,a),t.addEventListener(p.UNREGISTER_MEDIA_STATE_RECEIVER,r);const s=b=>{b.forEach(_=>{const{addedNodes:h=[],removedNodes:m=[],type:P,target:T,attributeName:f}=_;P==="childList"?(Array.prototype.forEach.call(h,L=>We(L,e)),Array.prototype.forEach.call(m,L=>We(L,i))):P==="attributes"&&f===w.MEDIA_CHROME_ATTRIBUTES&&(wa(T)?e(T):i(T))})};let o=[];const l=b=>{const _=b.target;_.name!=="media"&&(o.forEach(h=>We(h,i)),o=[..._.assignedElements({flatten:!0})],o.forEach(h=>We(h,e)))};t.addEventListener("slotchange",l);const u=new MutationObserver(s);return u.observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{We(t,i),t.removeEventListener("slotchange",l),u.disconnect(),t.removeEventListener(p.REGISTER_MEDIA_STATE_RECEIVER,a),t.removeEventListener(p.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};d.customElements.get("media-controller")||d.customElements.define("media-controller",an);var al=an;const Je={PLACEMENT:"placement",BOUNDS:"bounds"};function rl(t){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}class ji extends d.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!Hs(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const i=this.placement;if(i==="left"||i==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const a=getComputedStyle(this),r=(e=Xt(this,"#"+this.bounds))!=null?e:oo(this);if(!r)return;const{x:s,width:o}=r.getBoundingClientRect(),{x:l,width:u}=this.getBoundingClientRect(),g=l+u,b=s+o,_=a.getPropertyValue("--media-tooltip-offset-x"),h=_?parseFloat(_.replace("px","")):0,m=a.getPropertyValue("--media-tooltip-container-margin"),P=m?parseFloat(m.replace("px","")):0,T=l-s+h-P,f=g-b+h+P;if(T<0){this.style.setProperty("--media-tooltip-offset-x",`${T}px`);return}if(f>0){this.style.setProperty("--media-tooltip-offset-x",`${f}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=he(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[Je.PLACEMENT,Je.BOUNDS]}get placement(){return $(this,Je.PLACEMENT)}set placement(e){H(this,Je.PLACEMENT,e)}get bounds(){return $(this,Je.BOUNDS)}set bounds(e){H(this,Je.BOUNDS,e)}}ji.shadowRootOptions={mode:"open"};ji.getTemplateHTML=rl;d.customElements.get("media-tooltip")||d.customElements.define("media-tooltip",ji);var Ra=ji,ir=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},W=(t,e,i)=>(ir(t,e,"read from private field"),i?i.call(t):e.get(t)),et=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ii=(t,e,i,a)=>(ir(t,e,"write to private field"),e.set(t,i),i),sl=(t,e,i)=>(ir(t,e,"access private method"),i),_e,vt,Ne,ot,vi,Da,sn;const Ce={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function nl(t,e={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${Ra.shadowRootOptions.mode}">
          ${Ra.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(t)}
        </slot>
      </media-tooltip>
    </slot>
  `}function ol(t,e){return`
    <slot></slot>
  `}function ll(){return""}class X extends d.HTMLElement{constructor(){if(super(),et(this,Da),et(this,_e,void 0),this.preventClick=!1,this.tooltipEl=null,et(this,vt,e=>{this.preventClick||this.handleClick(e),setTimeout(W(this,Ne),0)}),et(this,Ne,()=>{var e,i;(i=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||i.call(e)}),et(this,ot,e=>{const{key:i}=e;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",W(this,ot));return}this.preventClick||this.handleClick(e)}),et(this,vi,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!this.keysUsed.includes(r)){this.removeEventListener("keyup",W(this,ot));return}this.addEventListener("keyup",W(this,ot),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=he(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",Ce.TOOLTIP_PLACEMENT,w.MEDIA_CONTROLLER,n.MEDIA_LANG]}enable(){this.addEventListener("click",W(this,vt)),this.addEventListener("keydown",W(this,vi)),this.tabIndex=0}disable(){this.removeEventListener("click",W(this,vt)),this.removeEventListener("keydown",W(this,vi)),this.removeEventListener("keyup",W(this,ot)),this.tabIndex=-1}attributeChangedCallback(e,i,a){var r,s,o,l,u;e===w.MEDIA_CONTROLLER?(i&&((s=(r=W(this,_e))==null?void 0:r.unassociateElement)==null||s.call(r,this),ii(this,_e,null)),a&&this.isConnected&&(ii(this,_e,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(l=W(this,_e))==null?void 0:l.associateElement)==null||u.call(l,this))):e==="disabled"&&a!==i?a==null?this.enable():this.disable():e===Ce.TOOLTIP_PLACEMENT&&this.tooltipEl&&a!==i?this.tooltipEl.placement=a:e===n.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),W(this,Ne).call(this)}connectedCallback(){var e,i,a;const{style:r}=V(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const s=this.getAttribute(w.MEDIA_CONTROLLER);s&&(ii(this,_e,(e=this.getRootNode())==null?void 0:e.getElementById(s)),(a=(i=W(this,_e))==null?void 0:i.associateElement)==null||a.call(i,this)),d.customElements.whenDefined("media-tooltip").then(()=>sl(this,Da,sn).call(this))}disconnectedCallback(){var e,i;this.disable(),(i=(e=W(this,_e))==null?void 0:e.unassociateElement)==null||i.call(e,this),ii(this,_e,null),this.removeEventListener("mouseenter",W(this,Ne)),this.removeEventListener("focus",W(this,Ne)),this.removeEventListener("click",W(this,vt))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return $(this,Ce.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){H(this,Ce.TOOLTIP_PLACEMENT,e)}get mediaController(){return $(this,w.MEDIA_CONTROLLER)}set mediaController(e){H(this,w.MEDIA_CONTROLLER,e)}get disabled(){return y(this,Ce.DISABLED)}set disabled(e){M(this,Ce.DISABLED,e)}get noTooltip(){return y(this,Ce.NO_TOOLTIP)}set noTooltip(e){M(this,Ce.NO_TOOLTIP,e)}handleClick(e){}}_e=new WeakMap;vt=new WeakMap;Ne=new WeakMap;ot=new WeakMap;vi=new WeakMap;Da=new WeakSet;sn=function(){this.addEventListener("mouseenter",W(this,Ne)),this.addEventListener("focus",W(this,Ne)),this.addEventListener("click",W(this,vt));const t=this.tooltipPlacement;t&&this.tooltipEl&&(this.tooltipEl.placement=t)};X.shadowRootOptions={mode:"open"};X.getTemplateHTML=nl;X.getSlotTemplateHTML=ol;X.getTooltipContentHTML=ll;d.customElements.get("media-chrome-button")||d.customElements.define("media-chrome-button",X);var dl=X;const ns=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function ul(t){return`
    <style>
      :host([${n.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${n.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${n.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${n.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${ns}</slot>
      <slot name="exit">${ns}</slot>
    </slot>
  `}function cl(){return`
    <slot name="tooltip-enter">${E("start airplay")}</slot>
    <slot name="tooltip-exit">${E("stop airplay")}</slot>
  `}const os=t=>{const e=t.mediaIsAirplaying?E("stop airplay"):E("start airplay");t.setAttribute("aria-label",e)};class Ji extends X{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_IS_AIRPLAYING,n.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),os(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===n.MEDIA_IS_AIRPLAYING&&os(this)}get mediaIsAirplaying(){return y(this,n.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){M(this,n.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return $(this,n.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){H(this,n.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){const e=new d.CustomEvent(p.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}Ji.getSlotTemplateHTML=ul;Ji.getTooltipContentHTML=cl;d.customElements.get("media-airplay-button")||d.customElements.define("media-airplay-button",Ji);var hl=Ji;const ml=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,pl=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function El(t){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${ml}</slot>
      <slot name="off">${pl}</slot>
    </slot>
  `}function vl(){return`
    <slot name="tooltip-enable">${E("Enable captions")}</slot>
    <slot name="tooltip-disable">${E("Disable captions")}</slot>
  `}const ls=t=>{t.setAttribute("aria-checked",Lo(t).toString())};class ea extends X{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_SUBTITLES_LIST,n.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",E("closed captions")),ls(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===n.MEDIA_SUBTITLES_SHOWING&&ls(this)}get mediaSubtitlesList(){return ds(this,n.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){us(this,n.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return ds(this,n.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){us(this,n.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new d.CustomEvent(p.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}ea.getSlotTemplateHTML=El;ea.getTooltipContentHTML=vl;const ds=(t,e)=>{const i=t.getAttribute(e);return i?Qs(i):[]},us=(t,e,i)=>{if(!i?.length){t.removeAttribute(e);return}const a=Ma(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};d.customElements.get("media-captions-button")||d.customElements.define("media-captions-button",ea);var _l=ea;const gl='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',fl='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function bl(t){return`
    <style>
      :host([${n.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${n.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${n.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${n.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${gl}</slot>
      <slot name="exit">${fl}</slot>
    </slot>
  `}function Al(){return`
    <slot name="tooltip-enter">${E("Start casting")}</slot>
    <slot name="tooltip-exit">${E("Stop casting")}</slot>
  `}const cs=t=>{const e=t.mediaIsCasting?E("stop casting"):E("start casting");t.setAttribute("aria-label",e)};class ta extends X{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_IS_CASTING,n.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),cs(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===n.MEDIA_IS_CASTING&&cs(this)}get mediaIsCasting(){return y(this,n.MEDIA_IS_CASTING)}set mediaIsCasting(e){M(this,n.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return $(this,n.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){H(this,n.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){const e=this.mediaIsCasting?p.MEDIA_EXIT_CAST_REQUEST:p.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}}ta.getSlotTemplateHTML=bl;ta.getTooltipContentHTML=Al;d.customElements.get("media-cast-button")||d.customElements.define("media-cast-button",ta);var Tl=ta,ar=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ye=(t,e,i)=>(ar(t,e,"read from private field"),e.get(t)),Me=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},rr=(t,e,i,a)=>(ar(t,e,"write to private field"),e.set(t,i),i),Fe=(t,e,i)=>(ar(t,e,"access private method"),i),Hi,Yt,ze,_i,Ca,Pa,nn,xa,on,Oa,ln,Ua,dn,Na,un;function Il(t){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(t)}
  `}function Sl(t){return`
    <slot id="content"></slot>
  `}const yt={OPEN:"open",ANCHOR:"anchor"};class Tt extends d.HTMLElement{constructor(){super(),Me(this,_i),Me(this,Pa),Me(this,xa),Me(this,Oa),Me(this,Ua),Me(this,Na),Me(this,Hi,!1),Me(this,Yt,null),Me(this,ze,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[yt.OPEN,yt.ANCHOR]}get open(){return y(this,yt.OPEN)}set open(e){M(this,yt.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":Fe(this,Oa,ln).call(this,e);break;case"focusout":Fe(this,Ua,dn).call(this,e);break;case"keydown":Fe(this,Na,un).call(this,e);break}}connectedCallback(){Fe(this,_i,Ca).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,i,a){Fe(this,_i,Ca).call(this),e===yt.OPEN&&a!==i&&(this.open?Fe(this,Pa,nn).call(this):Fe(this,xa,on).call(this))}focus(){rr(this,Yt,$s());const e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),i=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||i)return;const a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');a?.focus()}get keysUsed(){return["Escape","Tab"]}}Hi=new WeakMap;Yt=new WeakMap;ze=new WeakMap;_i=new WeakSet;Ca=function(){if(!Ye(this,Hi)&&(rr(this,Hi,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);const t=he(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t),queueMicrotask(()=>{const{style:e}=V(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};Pa=new WeakSet;nn=function(){var t;(t=Ye(this,ze))==null||t.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};xa=new WeakSet;on=function(){var t;(t=Ye(this,ze))==null||t.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};Oa=new WeakSet;ln=function(t){rr(this,ze,t.relatedTarget),At(this,t.relatedTarget)||(this.open=!this.open)};Ua=new WeakSet;dn=function(t){var e;At(this,t.relatedTarget)||((e=Ye(this,Yt))==null||e.focus(),Ye(this,ze)&&Ye(this,ze)!==t.relatedTarget&&this.open&&(this.open=!1))};Na=new WeakSet;un=function(t){var e,i,a,r,s;const{key:o,ctrlKey:l,altKey:u,metaKey:g}=t;l||u||g||this.keysUsed.includes(o)&&(t.preventDefault(),t.stopPropagation(),o==="Tab"?(t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()):o==="Escape"&&((s=Ye(this,Yt))==null||s.focus(),this.open=!1))};Tt.shadowRootOptions={mode:"open"};Tt.getTemplateHTML=Il;Tt.getSlotTemplateHTML=Sl;d.customElements.get("media-chrome-dialog")||d.customElements.define("media-chrome-dialog",Tt);var yl=Tt,sr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},U=(t,e,i)=>(sr(t,e,"read from private field"),i?i.call(t):e.get(t)),Z=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},xe=(t,e,i,a)=>(sr(t,e,"write to private field"),e.set(t,i),i),ue=(t,e,i)=>(sr(t,e,"access private method"),i),ge,ia,gi,fi,ce,Fi,bi,Ai,Ti,nr,cn,Ii,$a,Si,Ha,Bi,or,Fa,hn,Ba,mn,Wa,pn,Va,En;function Ml(t){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">
    </div>
    <div id="rightgap"></div>
  `}class Ze extends d.HTMLElement{constructor(){if(super(),Z(this,nr),Z(this,Ii),Z(this,Si),Z(this,Bi),Z(this,Fa),Z(this,Ba),Z(this,Wa),Z(this,Va),Z(this,ge,void 0),Z(this,ia,void 0),Z(this,gi,void 0),Z(this,fi,void 0),Z(this,ce,{}),Z(this,Fi,[]),Z(this,bi,()=>{if(this.range.matches(":focus-visible")){const{style:e}=V(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),Z(this,Ai,()=>{const{style:e}=V(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),Z(this,Ti,()=>{const e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=he(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.container=this.shadowRoot.querySelector("#container"),xe(this,gi,this.shadowRoot.querySelector("#startpoint")),xe(this,fi,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",w.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,s,o,l,u;e===w.MEDIA_CONTROLLER?(i&&((s=(r=U(this,ge))==null?void 0:r.unassociateElement)==null||s.call(r,this),xe(this,ge,null)),a&&this.isConnected&&(xe(this,ge,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(l=U(this,ge))==null?void 0:l.associateElement)==null||u.call(l,this))):(e==="disabled"||e==="aria-disabled"&&i!==a)&&(a==null?(this.range.removeAttribute(e),ue(this,Ii,$a).call(this)):(this.range.setAttribute(e,a),ue(this,Si,Ha).call(this)))}connectedCallback(){var e,i,a;const{style:r}=V(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),U(this,ce).pointer=V(this.shadowRoot,"#pointer"),U(this,ce).progress=V(this.shadowRoot,"#progress"),U(this,ce).thumb=V(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),U(this,ce).activeSegment=V(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const s=this.getAttribute(w.MEDIA_CONTROLLER);s&&(xe(this,ge,(e=this.getRootNode())==null?void 0:e.getElementById(s)),(a=(i=U(this,ge))==null?void 0:i.associateElement)==null||a.call(i,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",U(this,bi)),this.shadowRoot.addEventListener("focusout",U(this,Ai)),ue(this,Ii,$a).call(this),xs(this.container,U(this,Ti))}disconnectedCallback(){var e,i;ue(this,Si,Ha).call(this),(i=(e=U(this,ge))==null?void 0:e.unassociateElement)==null||i.call(e,this),xe(this,ge,null),this.shadowRoot.removeEventListener("focusin",U(this,bi)),this.shadowRoot.removeEventListener("focusout",U(this,Ai)),Os(this.container,U(this,Ti))}updatePointerBar(e){var i;(i=U(this,ce).pointer)==null||i.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,i;const a=this.range.valueAsNumber*100;(e=U(this,ce).progress)==null||e.style.setProperty("width",`${a}%`),(i=U(this,ce).thumb)==null||i.style.setProperty("left",`${a}%`)}updateSegments(e){const i=this.shadowRoot.querySelector("#segments-clipping");if(i.textContent="",this.container.classList.toggle("segments",!!e?.length),!e?.length)return;const a=[...new Set([+this.range.min,...e.flatMap(s=>[s.start,s.end]),+this.range.max])];xe(this,Fi,[...a]);const r=a.pop();for(const[s,o]of a.entries()){const[l,u]=[s===0,s===a.length-1],g=l?"calc(var(--segments-gap) / -1)":`${o*100}%`,_=`calc(${((u?r:a[s+1])-o)*100}%${l||u?"":" - var(--segments-gap)"})`,h=te.createElementNS("http://www.w3.org/2000/svg","rect"),m=V(this.shadowRoot,`#segments-clipping rect:nth-child(${s+1})`);m.style.setProperty("x",g),m.style.setProperty("width",_),i.append(h)}}getPointerRatio(e){return ho(e.clientX,e.clientY,U(this,gi).getBoundingClientRect(),U(this,fi).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":ue(this,Va,En).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":ue(this,Fa,hn).call(this,e);break;case"pointerdown":ue(this,Bi,or).call(this,e);break;case"pointerup":ue(this,Ba,mn).call(this);break;case"pointerleave":ue(this,Wa,pn).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}ge=new WeakMap;ia=new WeakMap;gi=new WeakMap;fi=new WeakMap;ce=new WeakMap;Fi=new WeakMap;bi=new WeakMap;Ai=new WeakMap;Ti=new WeakMap;nr=new WeakSet;cn=function(t){const e=U(this,ce).activeSegment;if(!e)return;const i=this.getPointerRatio(t),r=`#segments-clipping rect:nth-child(${U(this,Fi).findIndex((s,o,l)=>{const u=l[o+1];return u!=null&&i>=s&&i<=u})+1})`;(e.selectorText!=r||!e.style.transform)&&(e.selectorText=r,e.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};Ii=new WeakSet;$a=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};Si=new WeakSet;Ha=function(){var t,e;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),(t=d.window)==null||t.removeEventListener("pointerup",this),(e=d.window)==null||e.removeEventListener("pointermove",this)};Bi=new WeakSet;or=function(t){var e;xe(this,ia,t.composedPath().includes(this.range)),(e=d.window)==null||e.addEventListener("pointerup",this)};Fa=new WeakSet;hn=function(t){var e;t.pointerType!=="mouse"&&ue(this,Bi,or).call(this,t),this.addEventListener("pointerleave",this),(e=d.window)==null||e.addEventListener("pointermove",this)};Ba=new WeakSet;mn=function(){var t;(t=d.window)==null||t.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};Wa=new WeakSet;pn=function(){var t,e;this.removeEventListener("pointerleave",this),(t=d.window)==null||t.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(e=U(this,ce).activeSegment)==null||e.style.removeProperty("transform")};Va=new WeakSet;En=function(t){this.toggleAttribute("dragging",t.buttons===1||t.pointerType!=="mouse"),this.updatePointerBar(t),ue(this,nr,cn).call(this,t),this.dragging&&(t.pointerType!=="mouse"||!U(this,ia))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(t),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))};Ze.shadowRootOptions={mode:"open"};Ze.getTemplateHTML=Ml;d.customElements.get("media-chrome-range")||d.customElements.define("media-chrome-range",Ze);var kl=Ze,vn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ai=(t,e,i)=>(vn(t,e,"read from private field"),i?i.call(t):e.get(t)),Ll=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ri=(t,e,i,a)=>(vn(t,e,"write to private field"),e.set(t,i),i),fe;function wl(t){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}let aa=class extends d.HTMLElement{constructor(){if(super(),Ll(this,fe,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=he(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[w.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,s,o,l,u;e===w.MEDIA_CONTROLLER&&(i&&((s=(r=ai(this,fe))==null?void 0:r.unassociateElement)==null||s.call(r,this),ri(this,fe,null)),a&&this.isConnected&&(ri(this,fe,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(l=ai(this,fe))==null?void 0:l.associateElement)==null||u.call(l,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(w.MEDIA_CONTROLLER);r&&(ri(this,fe,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=ai(this,fe))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=ai(this,fe))==null?void 0:e.unassociateElement)==null||i.call(e,this),ri(this,fe,null)}};fe=new WeakMap;aa.shadowRootOptions={mode:"open"};aa.getTemplateHTML=wl;d.customElements.get("media-control-bar")||d.customElements.define("media-control-bar",aa);var Rl=aa,_n=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},si=(t,e,i)=>(_n(t,e,"read from private field"),i?i.call(t):e.get(t)),Dl=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ni=(t,e,i,a)=>(_n(t,e,"write to private field"),e.set(t,i),i),be;function Cl(t,e={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}
  `}function Pl(t,e){return`
    <slot></slot>
  `}class we extends d.HTMLElement{constructor(){if(super(),Dl(this,be,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=he(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[w.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,s,o,l,u;e===w.MEDIA_CONTROLLER&&(i&&((s=(r=si(this,be))==null?void 0:r.unassociateElement)==null||s.call(r,this),ni(this,be,null)),a&&this.isConnected&&(ni(this,be,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(l=si(this,be))==null?void 0:l.associateElement)==null||u.call(l,this)))}connectedCallback(){var e,i,a;const{style:r}=V(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const s=this.getAttribute(w.MEDIA_CONTROLLER);s&&(ni(this,be,(e=this.getRootNode())==null?void 0:e.getElementById(s)),(a=(i=si(this,be))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=si(this,be))==null?void 0:e.unassociateElement)==null||i.call(e,this),ni(this,be,null)}}be=new WeakMap;we.shadowRootOptions={mode:"open"};we.getTemplateHTML=Cl;we.getSlotTemplateHTML=Pl;d.customElements.get("media-text-display")||d.customElements.define("media-text-display",we);var xl=we,gn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},hs=(t,e,i)=>(gn(t,e,"read from private field"),i?i.call(t):e.get(t)),Ol=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ul=(t,e,i,a)=>(gn(t,e,"write to private field"),e.set(t,i),i),Pt;function Nl(t,e){return`
    <slot>${$e(e.mediaDuration)}</slot>
  `}class lr extends we{constructor(){var e;super(),Ol(this,Pt,void 0),Ul(this,Pt,this.shadowRoot.querySelector("slot")),hs(this,Pt).textContent=$e((e=this.mediaDuration)!=null?e:0)}static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_DURATION]}attributeChangedCallback(e,i,a){e===n.MEDIA_DURATION&&(hs(this,Pt).textContent=$e(+a)),super.attributeChangedCallback(e,i,a)}get mediaDuration(){return N(this,n.MEDIA_DURATION)}set mediaDuration(e){z(this,n.MEDIA_DURATION,e)}}Pt=new WeakMap;lr.getSlotTemplateHTML=Nl;d.customElements.get("media-duration-display")||d.customElements.define("media-duration-display",lr);var $l=lr;const Hl={2:E("Network Error"),3:E("Decode Error"),4:E("Source Not Supported"),5:E("Encryption Error")},Fl={2:E("A network error caused the media download to fail."),3:E("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:E("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:E("The media is encrypted and there are no keys to decrypt it.")},fn=t=>{var e,i;return t.code===1?null:{title:(e=Hl[t.code])!=null?e:`Error ${t.code}`,message:(i=Fl[t.code])!=null?i:t.message}};var bn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Bl=(t,e,i)=>(bn(t,e,"read from private field"),i?i.call(t):e.get(t)),Wl=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Vl=(t,e,i,a)=>(bn(t,e,"write to private field"),e.set(t,i),i),yi;function Gl(t){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${t.mediaerrorcode}" id="content">
      ${An({code:+t.mediaerrorcode,message:t.mediaerrormessage})}
    </slot>
  `}function Kl(t){return t.code&&fn(t)!==null}function An(t){var e;const{title:i,message:a}=(e=fn(t))!=null?e:{};let r="";return i&&(r+=`<slot name="error-${t.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${t.code}-message"><p>${a}</p></slot>`),r}const ms=[n.MEDIA_ERROR_CODE,n.MEDIA_ERROR_MESSAGE];class ra extends Tt{constructor(){super(...arguments),Wl(this,yi,null)}static get observedAttributes(){return[...super.observedAttributes,...ms]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,i,a){var r;if(super.attributeChangedCallback(e,i,a),!ms.includes(e))return;const s=(r=this.mediaError)!=null?r:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=Kl(s),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(s))}get mediaError(){return Bl(this,yi)}set mediaError(e){Vl(this,yi,e)}get mediaErrorCode(){return N(this,"mediaerrorcode")}set mediaErrorCode(e){z(this,"mediaerrorcode",e)}get mediaErrorMessage(){return $(this,"mediaerrormessage")}set mediaErrorMessage(e){H(this,"mediaerrormessage",e)}}yi=new WeakMap;ra.getSlotTemplateHTML=Gl;ra.formatErrorMessage=An;d.customElements.get("media-error-dialog")||d.customElements.define("media-error-dialog",ra);var ql=ra;const Yl=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,Ql=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function zl(t){return`
    <style>
      :host([${n.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${n.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${n.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${n.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Yl}</slot>
      <slot name="exit">${Ql}</slot>
    </slot>
  `}function Zl(){return`
    <slot name="tooltip-enter">${E("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${E("Exit fullscreen mode")}</slot>
  `}const ps=t=>{const e=t.mediaIsFullscreen?E("exit fullscreen mode"):E("enter fullscreen mode");t.setAttribute("aria-label",e)};class sa extends X{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_IS_FULLSCREEN,n.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),ps(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===n.MEDIA_IS_FULLSCREEN&&ps(this)}get mediaFullscreenUnavailable(){return $(this,n.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){H(this,n.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return y(this,n.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){M(this,n.MEDIA_IS_FULLSCREEN,e)}handleClick(){const e=this.mediaIsFullscreen?p.MEDIA_EXIT_FULLSCREEN_REQUEST:p.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}}sa.getSlotTemplateHTML=zl;sa.getTooltipContentHTML=Zl;d.customElements.get("media-fullscreen-button")||d.customElements.define("media-fullscreen-button",sa);var Xl=sa;const{MEDIA_TIME_IS_LIVE:Mi,MEDIA_PAUSED:Ft}=n,{MEDIA_SEEK_TO_LIVE_REQUEST:jl,MEDIA_PLAY_REQUEST:Jl}=p,ed='<svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg>';function td(t){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${Mi}]:not([${Ft}])) slot[name=indicator] > *,
      :host([${Mi}]:not([${Ft}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${Mi}]:not([${Ft}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${ed}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${E("live")}</slot>
  `}const Es=t=>{var e;const i=t.mediaPaused||!t.mediaTimeIsLive,a=E(i?"seek to live":"playing live");t.setAttribute("aria-label",a);const r=(e=t.shadowRoot)==null?void 0:e.querySelector('slot[name="text"]');r&&(r.textContent=E("live")),i?t.removeAttribute("aria-disabled"):t.setAttribute("aria-disabled","true")};class dr extends X{static get observedAttributes(){return[...super.observedAttributes,Mi,Ft]}connectedCallback(){super.connectedCallback(),Es(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),Es(this)}get mediaPaused(){return y(this,n.MEDIA_PAUSED)}set mediaPaused(e){M(this,n.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return y(this,n.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){M(this,n.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new d.CustomEvent(jl,{composed:!0,bubbles:!0})),this.hasAttribute(Ft)&&this.dispatchEvent(new d.CustomEvent(Jl,{composed:!0,bubbles:!0})))}}dr.getSlotTemplateHTML=td;d.customElements.get("media-live-button")||d.customElements.define("media-live-button",dr);var id=dr,Tn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Mt=(t,e,i)=>(Tn(t,e,"read from private field"),i?i.call(t):e.get(t)),vs=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},kt=(t,e,i,a)=>(Tn(t,e,"write to private field"),e.set(t,i),i),Ae,ki;const oi={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},In=500,ad=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function rd(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${In}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${n.MEDIA_LOADING}]:not([${n.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${n.MEDIA_LOADING}]:not([${n.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${n.MEDIA_LOADING}]:not([${n.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${ad}</slot>
    <div id="status" role="status" aria-live="polite">${E("media loading")}</div>
  `}class na extends d.HTMLElement{constructor(){if(super(),vs(this,Ae,void 0),vs(this,ki,In),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=he(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[w.MEDIA_CONTROLLER,n.MEDIA_PAUSED,n.MEDIA_LOADING,oi.LOADING_DELAY]}attributeChangedCallback(e,i,a){var r,s,o,l,u;e===oi.LOADING_DELAY&&i!==a?this.loadingDelay=Number(a):e===w.MEDIA_CONTROLLER&&(i&&((s=(r=Mt(this,Ae))==null?void 0:r.unassociateElement)==null||s.call(r,this),kt(this,Ae,null)),a&&this.isConnected&&(kt(this,Ae,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(l=Mt(this,Ae))==null?void 0:l.associateElement)==null||u.call(l,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(w.MEDIA_CONTROLLER);r&&(kt(this,Ae,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Mt(this,Ae))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Mt(this,Ae))==null?void 0:e.unassociateElement)==null||i.call(e,this),kt(this,Ae,null)}get loadingDelay(){return Mt(this,ki)}set loadingDelay(e){kt(this,ki,e);const{style:i}=V(this.shadowRoot,":host");i.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return y(this,n.MEDIA_PAUSED)}set mediaPaused(e){M(this,n.MEDIA_PAUSED,e)}get mediaLoading(){return y(this,n.MEDIA_LOADING)}set mediaLoading(e){M(this,n.MEDIA_LOADING,e)}get mediaController(){return $(this,w.MEDIA_CONTROLLER)}set mediaController(e){H(this,w.MEDIA_CONTROLLER,e)}get noAutohide(){return y(this,oi.NO_AUTOHIDE)}set noAutohide(e){M(this,oi.NO_AUTOHIDE,e)}}Ae=new WeakMap;ki=new WeakMap;na.shadowRootOptions={mode:"open"};na.getTemplateHTML=rd;d.customElements.get("media-loading-indicator")||d.customElements.define("media-loading-indicator",na);var sd=na;const nd=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,_s=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,od=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function ld(t){return`
    <style>
      :host(:not([${n.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${n.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${n.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${n.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${n.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${n.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${n.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${nd}</slot>
      <slot name="low">${_s}</slot>
      <slot name="medium">${_s}</slot>
      <slot name="high">${od}</slot>
    </slot>
  `}function dd(){return`
    <slot name="tooltip-mute">${E("Mute")}</slot>
    <slot name="tooltip-unmute">${E("Unmute")}</slot>
  `}const gs=t=>{const e=t.mediaVolumeLevel==="off",i=E(e?"unmute":"mute");t.setAttribute("aria-label",i)};let oa=class extends X{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),gs(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===n.MEDIA_VOLUME_LEVEL&&gs(this)}get mediaVolumeLevel(){return $(this,n.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){H(this,n.MEDIA_VOLUME_LEVEL,e)}handleClick(){const e=this.mediaVolumeLevel==="off"?p.MEDIA_UNMUTE_REQUEST:p.MEDIA_MUTE_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}};oa.getSlotTemplateHTML=ld;oa.getTooltipContentHTML=dd;d.customElements.get("media-mute-button")||d.customElements.define("media-mute-button",oa);var ud=oa;const fs=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function cd(t){return`
    <style>
      :host([${n.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${n.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${n.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${n.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${fs}</slot>
      <slot name="exit">${fs}</slot>
    </slot>
  `}function hd(){return`
    <slot name="tooltip-enter">${E("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${E("Exit picture in picture mode")}</slot>
  `}const bs=t=>{const e=t.mediaIsPip?E("exit picture in picture mode"):E("enter picture in picture mode");t.setAttribute("aria-label",e)};class la extends X{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_IS_PIP,n.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),bs(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===n.MEDIA_IS_PIP&&bs(this)}get mediaPipUnavailable(){return $(this,n.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){H(this,n.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return y(this,n.MEDIA_IS_PIP)}set mediaIsPip(e){M(this,n.MEDIA_IS_PIP,e)}handleClick(){const e=this.mediaIsPip?p.MEDIA_EXIT_PIP_REQUEST:p.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}}la.getSlotTemplateHTML=cd;la.getTooltipContentHTML=hd;d.customElements.get("media-pip-button")||d.customElements.define("media-pip-button",la);var md=la,pd=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},tt=(t,e,i)=>(pd(t,e,"read from private field"),i?i.call(t):e.get(t)),Ed=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Oe;const _a={RATES:"rates"},vd=[1,1.2,1.5,1.7,2],xt=1;function _d(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate||xt}x</slot>
  `}function gd(){return E("Playback rate")}class da extends X{constructor(){var e;super(),Ed(this,Oe,new qs(this,_a.RATES,{defaultValue:vd})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(e=this.mediaPlaybackRate)!=null?e:xt}x`}static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_PLAYBACK_RATE,_a.RATES]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===_a.RATES&&(tt(this,Oe).value=a),e===n.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,s=Number.isNaN(r)?xt:r;this.container.innerHTML=`${s}x`,this.setAttribute("aria-label",E("Playback rate {playbackRate}",{playbackRate:s}))}}get rates(){return tt(this,Oe)}set rates(e){e?Array.isArray(e)?tt(this,Oe).value=e.join(" "):typeof e=="string"&&(tt(this,Oe).value=e):tt(this,Oe).value=""}get mediaPlaybackRate(){return N(this,n.MEDIA_PLAYBACK_RATE,xt)}set mediaPlaybackRate(e){z(this,n.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,i;const a=Array.from(tt(this,Oe).values(),o=>+o).sort((o,l)=>o-l),r=(i=(e=a.find(o=>o>this.mediaPlaybackRate))!=null?e:a[0])!=null?i:xt,s=new d.CustomEvent(p.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(s)}}Oe=new WeakMap;da.getSlotTemplateHTML=_d;da.getTooltipContentHTML=gd;d.customElements.get("media-playback-rate-button")||d.customElements.define("media-playback-rate-button",da);var fd=da;const bd=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,Ad=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function Td(t){return`
    <style>
      :host([${n.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${n.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${n.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${n.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${bd}</slot>
      <slot name="pause">${Ad}</slot>
    </slot>
  `}function Id(){return`
    <slot name="tooltip-play">${E("Play")}</slot>
    <slot name="tooltip-pause">${E("Pause")}</slot>
  `}const As=t=>{const e=t.mediaPaused?E("play"):E("pause");t.setAttribute("aria-label",e)};let ua=class extends X{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_PAUSED,n.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),As(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===n.MEDIA_PAUSED||e===n.MEDIA_LANG)&&As(this)}get mediaPaused(){return y(this,n.MEDIA_PAUSED)}set mediaPaused(e){M(this,n.MEDIA_PAUSED,e)}handleClick(){const e=this.mediaPaused?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}};ua.getSlotTemplateHTML=Td;ua.getTooltipContentHTML=Id;d.customElements.get("media-play-button")||d.customElements.define("media-play-button",ua);var Sd=ua;const pe={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function yd(t){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}const Md=t=>{t.style.removeProperty("background-image")},kd=(t,e)=>{t.style["background-image"]=`url('${e}')`};class ca extends d.HTMLElement{static get observedAttributes(){return[pe.PLACEHOLDER_SRC,pe.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=he(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,i,a){e===pe.SRC&&(a==null?this.image.removeAttribute(pe.SRC):this.image.setAttribute(pe.SRC,a)),e===pe.PLACEHOLDER_SRC&&(a==null?Md(this.image):kd(this.image,a))}get placeholderSrc(){return $(this,pe.PLACEHOLDER_SRC)}set placeholderSrc(e){H(this,pe.SRC,e)}get src(){return $(this,pe.SRC)}set src(e){H(this,pe.SRC,e)}}ca.shadowRootOptions={mode:"open"};ca.getTemplateHTML=yd;d.customElements.get("media-poster-image")||d.customElements.define("media-poster-image",ca);var Ld=ca,Sn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},wd=(t,e,i)=>(Sn(t,e,"read from private field"),i?i.call(t):e.get(t)),Rd=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Dd=(t,e,i,a)=>(Sn(t,e,"write to private field"),e.set(t,i),i),Li;class yn extends we{constructor(){super(),Rd(this,Li,void 0),Dd(this,Li,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_PREVIEW_CHAPTER,n.MEDIA_LANG]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),(e===n.MEDIA_PREVIEW_CHAPTER||e===n.MEDIA_LANG)&&a!==i&&a!=null)if(wd(this,Li).textContent=a,a!==""){const r=E("chapter: {chapterName}",{chapterName:a});this.setAttribute("aria-valuetext",r)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return $(this,n.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){H(this,n.MEDIA_PREVIEW_CHAPTER,e)}}Li=new WeakMap;d.customElements.get("media-preview-chapter-display")||d.customElements.define("media-preview-chapter-display",yn);var Cd=yn,Mn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},li=(t,e,i)=>(Mn(t,e,"read from private field"),i?i.call(t):e.get(t)),Pd=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},di=(t,e,i,a)=>(Mn(t,e,"write to private field"),e.set(t,i),i),Te;function xd(t){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}class ha extends d.HTMLElement{constructor(){if(super(),Pd(this,Te,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=he(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[w.MEDIA_CONTROLLER,n.MEDIA_PREVIEW_IMAGE,n.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,i,a;const r=this.getAttribute(w.MEDIA_CONTROLLER);r&&(di(this,Te,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=li(this,Te))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=li(this,Te))==null?void 0:e.unassociateElement)==null||i.call(e,this),di(this,Te,null)}attributeChangedCallback(e,i,a){var r,s,o,l,u;[n.MEDIA_PREVIEW_IMAGE,n.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===w.MEDIA_CONTROLLER&&(i&&((s=(r=li(this,Te))==null?void 0:r.unassociateElement)==null||s.call(r,this),di(this,Te,null)),a&&this.isConnected&&(di(this,Te,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(l=li(this,Te))==null?void 0:l.associateElement)==null||u.call(l,this)))}get mediaPreviewImage(){return $(this,n.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){H(this,n.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){const e=this.getAttribute(n.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(i=>+i)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(n.MEDIA_PREVIEW_COORDS);return}this.setAttribute(n.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){const e=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!(e&&i))return;const[a,r,s,o]=e,l=i.split("#")[0],u=getComputedStyle(this),{maxWidth:g,maxHeight:b,minWidth:_,minHeight:h}=u,m=Math.min(parseInt(g)/s,parseInt(b)/o),P=Math.max(parseInt(_)/s,parseInt(h)/o),T=m<1,f=T?m:P>1?P:1,{style:L}=V(this.shadowRoot,":host"),S=V(this.shadowRoot,"img").style,k=this.shadowRoot.querySelector("img"),B=T?"min":"max";L.setProperty(`${B}-width`,"initial","important"),L.setProperty(`${B}-height`,"initial","important"),L.width=`${s*f}px`,L.height=`${o*f}px`;const J=()=>{S.width=`${this.imgWidth*f}px`,S.height=`${this.imgHeight*f}px`,S.display="block"};k.src!==l&&(k.onload=()=>{this.imgWidth=k.naturalWidth,this.imgHeight=k.naturalHeight,J()},k.src=l,J()),J(),S.transform=`translate(-${a*f}px, -${r*f}px)`}}Te=new WeakMap;ha.shadowRootOptions={mode:"open"};ha.getTemplateHTML=xd;d.customElements.get("media-preview-thumbnail")||d.customElements.define("media-preview-thumbnail",ha);var Ga=ha,kn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ts=(t,e,i)=>(kn(t,e,"read from private field"),i?i.call(t):e.get(t)),Od=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ud=(t,e,i,a)=>(kn(t,e,"write to private field"),e.set(t,i),i),Ot;class Ln extends we{constructor(){super(),Od(this,Ot,void 0),Ud(this,Ot,this.shadowRoot.querySelector("slot")),Ts(this,Ot).textContent=$e(0)}static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===n.MEDIA_PREVIEW_TIME&&a!=null&&(Ts(this,Ot).textContent=$e(parseFloat(a)))}get mediaPreviewTime(){return N(this,n.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){z(this,n.MEDIA_PREVIEW_TIME,e)}}Ot=new WeakMap;d.customElements.get("media-preview-time-display")||d.customElements.define("media-preview-time-display",Ln);var Nd=Ln;const it={SEEK_OFFSET:"seekoffset"},ga=30,$d=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${t}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function Hd(t,e){return`
    <slot name="icon">${$d(e.seekOffset)}</slot>
  `}function Fd(){return E("Seek backward")}const Bd=0;let ma=class extends X{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_CURRENT_TIME,it.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=N(this,it.SEEK_OFFSET,ga)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===it.SEEK_OFFSET&&(this.seekOffset=N(this,it.SEEK_OFFSET,ga))}get seekOffset(){return N(this,it.SEEK_OFFSET,ga)}set seekOffset(e){z(this,it.SEEK_OFFSET,e),this.setAttribute("aria-label",E("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),Us(Ns(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return N(this,n.MEDIA_CURRENT_TIME,Bd)}set mediaCurrentTime(e){z(this,n.MEDIA_CURRENT_TIME,e)}handleClick(){const e=Math.max(this.mediaCurrentTime-this.seekOffset,0),i=new d.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}};ma.getSlotTemplateHTML=Hd;ma.getTooltipContentHTML=Fd;d.customElements.get("media-seek-backward-button")||d.customElements.define("media-seek-backward-button",ma);var Wd=ma;const at={SEEK_OFFSET:"seekoffset"},fa=30,Vd=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${t}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function Gd(t,e){return`
    <slot name="icon">${Vd(e.seekOffset)}</slot>
  `}function Kd(){return E("Seek forward")}const qd=0;let pa=class extends X{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_CURRENT_TIME,at.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=N(this,at.SEEK_OFFSET,fa)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===at.SEEK_OFFSET&&(this.seekOffset=N(this,at.SEEK_OFFSET,fa))}get seekOffset(){return N(this,at.SEEK_OFFSET,fa)}set seekOffset(e){z(this,at.SEEK_OFFSET,e),this.setAttribute("aria-label",E("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),Us(Ns(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return N(this,n.MEDIA_CURRENT_TIME,qd)}set mediaCurrentTime(e){z(this,n.MEDIA_CURRENT_TIME,e)}handleClick(){const e=this.mediaCurrentTime+this.seekOffset,i=new d.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}};pa.getSlotTemplateHTML=Gd;pa.getTooltipContentHTML=Kd;d.customElements.get("media-seek-forward-button")||d.customElements.define("media-seek-forward-button",pa);var Yd=pa,wn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ba=(t,e,i)=>(wn(t,e,"read from private field"),i?i.call(t):e.get(t)),Qd=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},zd=(t,e,i,a)=>(wn(t,e,"write to private field"),e.set(t,i),i),lt;const Ve={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},Is=[...Object.values(Ve),n.MEDIA_CURRENT_TIME,n.MEDIA_DURATION,n.MEDIA_SEEKABLE],Ss=["Enter"," "],Zd="&nbsp;/&nbsp;",Ka=(t,{timesSep:e=Zd}={})=>{var i,a;const r=(i=t.mediaCurrentTime)!=null?i:0,[,s]=(a=t.mediaSeekable)!=null?a:[];let o=0;Number.isFinite(t.mediaDuration)?o=t.mediaDuration:Number.isFinite(s)&&(o=s);const l=t.remaining?$e(0-(o-r)):$e(r);return t.showDuration?`${l}${e}${$e(o)}`:l},Xd="video not loaded, unknown time.",jd=t=>{var e;const i=t.mediaCurrentTime,[,a]=(e=t.mediaSeekable)!=null?e:[];let r=null;if(Number.isFinite(t.mediaDuration)?r=t.mediaDuration:Number.isFinite(a)&&(r=a),i==null||r===null){t.setAttribute("aria-valuetext",Xd);return}const s=t.remaining?$t(0-(r-i)):$t(i);if(!t.showDuration){t.setAttribute("aria-valuetext",s);return}const o=$t(r),l=`${s} of ${o}`;t.setAttribute("aria-valuetext",l)};function Jd(t,e){return`
    <slot>${Ka(e)}</slot>
  `}let ur=class extends we{constructor(){super(),Qd(this,lt,void 0),zd(this,lt,this.shadowRoot.querySelector("slot")),ba(this,lt).innerHTML=`${Ka(this)}`}static get observedAttributes(){return[...super.observedAttributes,...Is,"disabled"]}connectedCallback(){const{style:e}=V(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",E("playback time"));const i=a=>{const{key:r}=a;if(!Ss.includes(r)){this.removeEventListener("keyup",i);return}this.toggleTimeDisplay()};this.addEventListener("keydown",a=>{const{metaKey:r,altKey:s,key:o}=a;if(r||s||!Ss.includes(o)){this.removeEventListener("keyup",i);return}this.addEventListener("keyup",i)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,i,a){Is.includes(e)?this.update():e==="disabled"&&a!==i&&(a==null?this.enable():this.disable()),super.attributeChangedCallback(e,i,a)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return y(this,Ve.REMAINING)}set remaining(e){M(this,Ve.REMAINING,e)}get showDuration(){return y(this,Ve.SHOW_DURATION)}set showDuration(e){M(this,Ve.SHOW_DURATION,e)}get noToggle(){return y(this,Ve.NO_TOGGLE)}set noToggle(e){M(this,Ve.NO_TOGGLE,e)}get mediaDuration(){return N(this,n.MEDIA_DURATION)}set mediaDuration(e){z(this,n.MEDIA_DURATION,e)}get mediaCurrentTime(){return N(this,n.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){z(this,n.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){const e=this.getAttribute(n.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(n.MEDIA_SEEKABLE);return}this.setAttribute(n.MEDIA_SEEKABLE,e.join(":"))}update(){const e=Ka(this);jd(this),e!==ba(this,lt).innerHTML&&(ba(this,lt).innerHTML=e)}};lt=new WeakMap;ur.getSlotTemplateHTML=Jd;d.customElements.get("media-time-display")||d.customElements.define("media-time-display",ur);var eu=ur,Rn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Y=(t,e,i)=>(Rn(t,e,"read from private field"),e.get(t)),Ee=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ne=(t,e,i,a)=>(Rn(t,e,"write to private field"),e.set(t,i),i),tu=(t,e,i,a)=>({set _(r){ne(t,e,r)},get _(){return Y(t,e)}}),dt,wi,ut,Ut,Ri,Di,Ci,ct,Ge,Pi;class iu{constructor(e,i,a){Ee(this,dt,void 0),Ee(this,wi,void 0),Ee(this,ut,void 0),Ee(this,Ut,void 0),Ee(this,Ri,void 0),Ee(this,Di,void 0),Ee(this,Ci,void 0),Ee(this,ct,void 0),Ee(this,Ge,0),Ee(this,Pi,(r=performance.now())=>{ne(this,Ge,requestAnimationFrame(Y(this,Pi))),ne(this,Ut,performance.now()-Y(this,ut));const s=1e3/this.fps;if(Y(this,Ut)>s){ne(this,ut,r-Y(this,Ut)%s);const o=1e3/((r-Y(this,wi))/++tu(this,Ri)._),l=(r-Y(this,Di))/1e3/this.duration;let u=Y(this,Ci)+l*this.playbackRate;u-Y(this,dt).valueAsNumber>0?ne(this,ct,this.playbackRate/this.duration/o):(ne(this,ct,.995*Y(this,ct)),u=Y(this,dt).valueAsNumber+Y(this,ct)),this.callback(u)}}),ne(this,dt,e),this.callback=i,this.fps=a}start(){Y(this,Ge)===0&&(ne(this,ut,performance.now()),ne(this,wi,Y(this,ut)),ne(this,Ri,0),Y(this,Pi).call(this))}stop(){Y(this,Ge)!==0&&(cancelAnimationFrame(Y(this,Ge)),ne(this,Ge,0))}update({start:e,duration:i,playbackRate:a}){const r=e-Y(this,dt).valueAsNumber,s=Math.abs(i-this.duration);(r>0||r<-.03||s>=.5)&&this.callback(e),ne(this,Ci,e),ne(this,Di,performance.now()),this.duration=i,this.playbackRate=a}}dt=new WeakMap;wi=new WeakMap;ut=new WeakMap;Ut=new WeakMap;Ri=new WeakMap;Di=new WeakMap;Ci=new WeakMap;ct=new WeakMap;Ge=new WeakMap;Pi=new WeakMap;var cr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},G=(t,e,i)=>(cr(t,e,"read from private field"),i?i.call(t):e.get(t)),q=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ie=(t,e,i,a)=>(cr(t,e,"write to private field"),e.set(t,i),i),j=(t,e,i)=>(cr(t,e,"access private method"),i),ht,Qe,Wi,Bt,Vi,xi,Qt,zt,mt,pt,Nt,hr,Dn,qa,Gi,mr,Ki,pr,qi,Er,Ya,Cn,Zt,Yi,Qa,Pn;const au="video not loaded, unknown time.",ru=t=>{const e=t.range,i=$t(+xn(t)),a=$t(+t.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:au;e.setAttribute("aria-valuetext",r)};function su(t){return`
    ${Ze.getTemplateHTML(t)}
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${n.MEDIA_PREVIEW_IMAGE}], [${n.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${n.MEDIA_PREVIEW_IMAGE}], [${n.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${n.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${n.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${n.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${n.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${n.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${n.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${n.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${n.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${n.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${n.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${n.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${n.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${Ga.shadowRootOptions.mode}">
            ${Ga.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}const ui=(t,e=t.mediaCurrentTime)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;if(Number.isNaN(a))return 0;const r=(e-i)/(a-i);return Math.max(0,Math.min(r,1))},xn=(t,e=t.range.valueAsNumber)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;return Number.isNaN(a)?0:e*(a-i)+i};let Ea=class extends Ze{constructor(){super(),q(this,pt),q(this,hr),q(this,Gi),q(this,Ki),q(this,qi),q(this,Ya),q(this,Zt),q(this,Qa),q(this,ht,void 0),q(this,Qe,void 0),q(this,Wi,void 0),q(this,Bt,void 0),q(this,Vi,void 0),q(this,xi,void 0),q(this,Qt,void 0),q(this,zt,void 0),q(this,mt,void 0),q(this,qa,a=>{this.dragging||(za(a)&&(this.range.valueAsNumber=a),this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),Ie(this,Wi,this.shadowRoot.querySelectorAll('[part~="box"]')),Ie(this,Vi,this.shadowRoot.querySelector('[part~="preview-box"]')),Ie(this,xi,this.shadowRoot.querySelector('[part~="current-box"]'));const i=getComputedStyle(this);Ie(this,Qt,parseInt(i.getPropertyValue("--media-box-padding-left"))),Ie(this,zt,parseInt(i.getPropertyValue("--media-box-padding-right"))),Ie(this,Qe,new iu(this.range,G(this,qa),60))}static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_PAUSED,n.MEDIA_DURATION,n.MEDIA_SEEKABLE,n.MEDIA_CURRENT_TIME,n.MEDIA_PREVIEW_IMAGE,n.MEDIA_PREVIEW_TIME,n.MEDIA_PREVIEW_CHAPTER,n.MEDIA_BUFFERED,n.MEDIA_PLAYBACK_RATE,n.MEDIA_LOADING,n.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",E("seek")),j(this,pt,Nt).call(this),Ie(this,ht,this.getRootNode()),(e=G(this,ht))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),j(this,pt,Nt).call(this),(e=G(this,ht))==null||e.removeEventListener("transitionstart",this),Ie(this,ht,null)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),i!=a&&(e===n.MEDIA_CURRENT_TIME||e===n.MEDIA_PAUSED||e===n.MEDIA_ENDED||e===n.MEDIA_LOADING||e===n.MEDIA_DURATION||e===n.MEDIA_SEEKABLE?(G(this,Qe).update({start:ui(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),j(this,pt,Nt).call(this),ru(this)):e===n.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===n.MEDIA_DURATION||e===n.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=G(this,mt),this.updateBar()))}get mediaChaptersCues(){return G(this,mt)}set mediaChaptersCues(e){var i;Ie(this,mt,e),this.updateSegments((i=G(this,mt))==null?void 0:i.map(a=>({start:ui(this,a.startTime),end:ui(this,a.endTime)})))}get mediaPaused(){return y(this,n.MEDIA_PAUSED)}set mediaPaused(e){M(this,n.MEDIA_PAUSED,e)}get mediaLoading(){return y(this,n.MEDIA_LOADING)}set mediaLoading(e){M(this,n.MEDIA_LOADING,e)}get mediaDuration(){return N(this,n.MEDIA_DURATION)}set mediaDuration(e){z(this,n.MEDIA_DURATION,e)}get mediaCurrentTime(){return N(this,n.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){z(this,n.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return N(this,n.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){z(this,n.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){const e=this.getAttribute(n.MEDIA_BUFFERED);return e?e.split(" ").map(i=>i.split(":").map(a=>+a)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(n.MEDIA_BUFFERED);return}const i=e.map(a=>a.join(":")).join(" ");this.setAttribute(n.MEDIA_BUFFERED,i)}get mediaSeekable(){const e=this.getAttribute(n.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(n.MEDIA_SEEKABLE);return}this.setAttribute(n.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;const[,i=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaSeekableStart(){var e;const[i=0]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaPreviewImage(){return $(this,n.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){H(this,n.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return N(this,n.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){z(this,n.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return y(this,n.MEDIA_ENDED)}set mediaEnded(e){M(this,n.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;const i=this.mediaBuffered;if(!i.length)return;let a;if(this.mediaEnded)a=1;else{const s=this.mediaCurrentTime,[,o=this.mediaSeekableStart]=(e=i.find(([l,u])=>l<=s&&s<=u))!=null?e:[];a=ui(this,o)}const{style:r}=V(this.shadowRoot,"#buffered");r.setProperty("width",`${a*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const i=V(this.shadowRoot,"#current-rail"),a=V(this.shadowRoot,'[part~="current-box"]'),r=j(this,Gi,mr).call(this,G(this,xi)),s=j(this,Ki,pr).call(this,r,this.range.valueAsNumber),o=j(this,qi,Er).call(this,r,this.range.valueAsNumber);i.style.transform=`translateX(${s})`,i.style.setProperty("--_range-width",`${r.range.width}`),a.style.setProperty("--_box-shift",`${o}`),a.style.setProperty("--_box-width",`${r.box.width}px`),a.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":j(this,Qa,Pn).call(this);break;case"pointermove":j(this,Ya,Cn).call(this,e);break;case"pointerup":case"pointerleave":j(this,Zt,Yi).call(this,null);break;case"transitionstart":At(e.target,this)&&setTimeout(()=>j(this,pt,Nt).call(this),0);break}}};ht=new WeakMap;Qe=new WeakMap;Wi=new WeakMap;Bt=new WeakMap;Vi=new WeakMap;xi=new WeakMap;Qt=new WeakMap;zt=new WeakMap;mt=new WeakMap;pt=new WeakSet;Nt=function(){j(this,hr,Dn).call(this)?G(this,Qe).start():G(this,Qe).stop()};hr=new WeakSet;Dn=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&Hs(this)};qa=new WeakMap;Gi=new WeakSet;mr=function(t){var e;const a=((e=this.getAttribute("bounds")?Xt(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?e:this).getBoundingClientRect(),r=this.range.getBoundingClientRect(),s=t.offsetWidth,o=-(r.left-a.left-s/2),l=a.right-r.left-s/2;return{box:{width:s,min:o,max:l},bounds:a,range:r}};Ki=new WeakSet;pr=function(t,e){let i=`${e*100}%`;const{width:a,min:r,max:s}=t.box;if(!a)return i;if(Number.isNaN(r)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(s)){const l=`calc(1 / var(--_range-width) * 100 * ${s}% - var(--media-box-padding-right))`;i=`min(${i}, ${l})`}return i};qi=new WeakSet;Er=function(t,e){const{width:i,min:a,max:r}=t.box,s=e*t.range.width;if(s<a+G(this,Qt)){const o=t.range.left-t.bounds.left-G(this,Qt);return`${s-i/2+o}px`}if(s>r-G(this,zt)){const o=t.bounds.right-t.range.right-G(this,zt);return`${s+i/2-o-t.range.width}px`}return 0};Ya=new WeakSet;Cn=function(t){const e=[...G(this,Wi)].some(b=>t.composedPath().includes(b));if(!this.dragging&&(e||!t.composedPath().includes(this))){j(this,Zt,Yi).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const a=V(this.shadowRoot,"#preview-rail"),r=V(this.shadowRoot,'[part~="preview-box"]'),s=j(this,Gi,mr).call(this,G(this,Vi));let o=(t.clientX-s.range.left)/s.range.width;o=Math.max(0,Math.min(1,o));const l=j(this,Ki,pr).call(this,s,o),u=j(this,qi,Er).call(this,s,o);a.style.transform=`translateX(${l})`,a.style.setProperty("--_range-width",`${s.range.width}`),r.style.setProperty("--_box-shift",`${u}`),r.style.setProperty("--_box-width",`${s.box.width}px`);const g=Math.round(G(this,Bt))-Math.round(o*i);Math.abs(g)<1&&o>.01&&o<.99||(Ie(this,Bt,o*i),j(this,Zt,Yi).call(this,G(this,Bt)))};Zt=new WeakSet;Yi=function(t){this.dispatchEvent(new d.CustomEvent(p.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:t}))};Qa=new WeakSet;Pn=function(){G(this,Qe).stop();const t=xn(this);this.dispatchEvent(new d.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t}))};Ea.shadowRootOptions={mode:"open"};Ea.getTemplateHTML=su;d.customElements.get("media-time-range")||d.customElements.define("media-time-range",Ea);var nu=Ea;const ou=1,lu=t=>t.mediaMuted?0:t.mediaVolume,du=t=>`${Math.round(t*100)}%`;let On=class extends Ze{static get observedAttributes(){return[...super.observedAttributes,n.MEDIA_VOLUME,n.MEDIA_MUTED,n.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{const e=this.range.value,i=new d.CustomEvent(p.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",E("volume"))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===n.MEDIA_VOLUME||e===n.MEDIA_MUTED)&&(this.range.valueAsNumber=lu(this),this.range.setAttribute("aria-valuetext",du(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return N(this,n.MEDIA_VOLUME,ou)}set mediaVolume(e){z(this,n.MEDIA_VOLUME,e)}get mediaMuted(){return y(this,n.MEDIA_MUTED)}set mediaMuted(e){M(this,n.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return $(this,n.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){H(this,n.MEDIA_VOLUME_UNAVAILABLE,e)}};d.customElements.get("media-volume-range")||d.customElements.define("media-volume-range",On);var uu=On;function C(t){if(typeof t=="boolean")return t?"":void 0;if(typeof t=="function")return;const e=i=>typeof i=="string"||typeof i=="number"||typeof i=="boolean";if(Array.isArray(t)&&t.every(e))return t.join(" ");if(!(typeof t=="object"&&t!==null))return t}D({tagName:"media-gesture-receiver",elementClass:Ta,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});D({tagName:"media-container",elementClass:So,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});const cu=D({tagName:"media-controller",elementClass:al,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});D({tagName:"media-tooltip",elementClass:Ra,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});D({tagName:"media-chrome-button",elementClass:dl,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});D({tagName:"media-airplay-button",elementClass:hl,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});D({tagName:"media-captions-button",elementClass:_l,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});D({tagName:"media-cast-button",elementClass:Tl,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});D({tagName:"media-chrome-dialog",elementClass:yl,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});D({tagName:"media-chrome-range",elementClass:kl,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});const hu=D({tagName:"media-control-bar",elementClass:Rl,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});D({tagName:"media-text-display",elementClass:xl,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});D({tagName:"media-duration-display",elementClass:$l,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});D({tagName:"media-error-dialog",elementClass:ql,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});D({tagName:"media-fullscreen-button",elementClass:Xl,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});D({tagName:"media-live-button",elementClass:id,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});D({tagName:"media-loading-indicator",elementClass:sd,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});const mu=D({tagName:"media-mute-button",elementClass:ud,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});D({tagName:"media-pip-button",elementClass:md,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});D({tagName:"media-playback-rate-button",elementClass:fd,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});const pu=D({tagName:"media-play-button",elementClass:Sd,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});D({tagName:"media-poster-image",elementClass:Ld,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});D({tagName:"media-preview-chapter-display",elementClass:Cd,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});D({tagName:"media-preview-thumbnail",elementClass:Ga,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});D({tagName:"media-preview-time-display",elementClass:Nd,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}});const Eu=D({tagName:"media-seek-backward-button",elementClass:Wd,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}}),vu=D({tagName:"media-seek-forward-button",elementClass:Yd,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}}),_u=D({tagName:"media-time-display",elementClass:eu,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}}),gu=D({tagName:"media-time-range",elementClass:nu,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}}),fu=D({tagName:"media-volume-range",elementClass:uu,react:R,toAttributeValue:C,defaultProps:{suppressHydrationWarning:!0}}),bu={"--media-primary-color":"var(--primary)","--media-secondary-color":"var(--background)","--media-text-color":"var(--foreground)","--media-background-color":"var(--background)","--media-control-hover-background":"var(--accent)","--media-font-family":"var(--font-sans)","--media-live-button-icon-color":"var(--muted-foreground)","--media-live-button-indicator-color":"var(--destructive)","--media-range-track-background":"var(--border)"},Au=({style:t,...e})=>A.jsx(cu,{style:{...bu,...t},...e}),Tu=t=>A.jsx(hu,{...t}),Iu=({className:t,...e})=>A.jsx(gu,{className:He("p-2.5",t),...e}),Su=({className:t,...e})=>A.jsx(_u,{className:He("p-2.5",t),...e}),yu=({className:t,...e})=>A.jsx(fu,{className:He("p-2.5",t),...e}),Mu=({className:t,...e})=>A.jsx(pu,{className:He("p-2.5",t),...e}),ku=({className:t,...e})=>A.jsx(Eu,{className:He("p-2.5",t),...e}),Lu=({className:t,...e})=>A.jsx(vu,{className:He("p-2.5",t),...e}),wu=({className:t,...e})=>A.jsx(mu,{className:He("p-2.5",t),...e}),Ru=({className:t,...e})=>A.jsx("video",{className:He("mt-0 mb-0",t),...e});function Yu(){return A.jsx(A.Fragment,{children:A.jsxs(Gn,{children:[A.jsxs("div",{className:"flex w-full flex-col items-center justify-center space-y-5",children:[A.jsxs(Au,{className:"overflow-hidden rounded-lg border",children:[A.jsx(Ru,{crossOrigin:"",muted:!0,preload:"auto",slot:"media",src:"./storage/assets/video/bamcargo-about.mp4"}),A.jsxs(Tu,{children:[A.jsx(Mu,{}),A.jsx(ku,{}),A.jsx(Lu,{}),A.jsx(Iu,{}),A.jsx(Su,{showDuration:!0}),A.jsx(wu,{}),A.jsx(yu,{})]})]}),A.jsx(Kn,{})]}),A.jsxs("div",{className:"p-5 lg:p-0 flex flex-col space-y-10",children:[A.jsx("div",{children:A.jsx("h2",{className:"bopb-2 scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",children:"Tentang Kami"})}),A.jsxs("div",{className:"flex flex-col -space-y-5",children:[A.jsx(Yr,{children:"BAM Cargo – Amanah, Cepat & Tepat 2014"}),A.jsx("p",{className:"text-justify leading-7 text-neutral-700 [&:not(:first-child)]:mt-6",children:"Borneo Arta Mandiri (BAM Cargo) adalah perusahaan Jasa Penyelenggaraan POS yang berdiri pada tanggal 29 Januari 2014 di Banjarmasin, Indonesia. Izin Penyelenggaraan Pos Nasional Nomor 1440 Tahun 2017, yang di keluarkan oleh Menteri Komunikasi dan Informatika Republik Indonesia."})]}),A.jsxs("div",{className:"flex flex-col -space-y-5",children:[A.jsx(Yr,{children:"BAM Cargo – Amanah, Cepat & Tepat 2023"}),A.jsxs("p",{className:"text-justify leading-7 text-neutral-700 [&:not(:first-child)]:mt-6",children:["Dengan semangat kami dalam melayani Customer Setia Bam Cargo, berkat rahmat Allah SWT, sekarang kami sudah memiliki cabang dan gerai di seluruh Kalimantan, Pulau Jawa, dan seluruh Indonesia."," ",A.jsx("br",{}),A.jsx("br",{})," Kami akan selalu memberikan pelayanan terbaik dalam proses handling dan distribusi perpindahan barang paket ke seluruh Indonesia dengan tenaga profesional yang amanah dalam menjaga paket/barang dari penjemputan hingga distribusi delivery ke penerima dengan aman dan cepat. ",A.jsx("br",{}),A.jsx("br",{}),"Cabang dan gerai kami terbaru berada di kota Balikpapan, Samarinda, Tarakan, Palangkaraya, Kota Pontianak, serta di Pulau Jawa kota Semarang, Surabaya, dan Jakarta yang siap mendistribusikan paket dan barang Anda menuju seluruh Kalimantan dan seluruh Indonesia. ",A.jsx("br",{}),A.jsx("br",{}),"Semoga kami selalu bisa memberikan pelayanan terbaik dari team kami untuk seluruh pelanggan setia dan pelanggan baru Bam Cargo seluruh Indonesia."]})]})]})]})})}export{Yu as default};
