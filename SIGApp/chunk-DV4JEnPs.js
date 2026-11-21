import{A as t,C as c,F as x,k as ye,n as Ft,u as lt$1,y as st}from"./chunk-DLmMmQN5.js";import{t as ct$1}from"./chunk-BwKabSgx.js";import{_ as Oe$1,a as de$1,b as le$2,f as z$2,h as D,i as Se$2,m as o,n as d,o as xt,r as o$1,s as ze$1,t as E$1,y as V$2}from"./chunk-DlqieJC4.js";import{$ as ii,A as Ce$2,At as ti,B as Pt,C as fr$1,Cn as vo,Dt as hi,En as r,F as Jt$1,Ft as b,G as Wt,Gt as N,H as Ur,I as Kr,It as ci,Jt as g,Lt as m$1,Mt as N$1,Nt as Ni$1,O as $t$1,P as It$1,Q as ei,Rt as ni,Tn as zo,Ut as F$1,V as Qr,Vt as B,W as Wr,Wt as H$1,X as bt,Y as at,Z as dr$1,_ as m,_t as u,at as ri,cn as It,dn as R,en as K$1,et as it,ft as yt,gt as s,it as pr$1,k as Bt,kt as oi,l as r$1,lt as ti$1,nt as jt$1,on as f,ot as se$3,pn as Vo,q as Yt$2,qt as V$3,rt as oi$1,s as i,st as si$1,ut as ut$1,v as z$3,vt as z$4,w as mr$1,wn as y,wt as ai,xn as po,yt as i$1,zt as si}from"./chunk-CX-pXiXp.js";import{A as o$2,D as h,E as r$2,O as i$2,_ as f$1,a as M$1,f as V$4,i as K$2,j as u$1,k as l,l as Q$1,m as Y$2,r as J$1,v as g$1,y as h$1}from"./chunk-JKEIilKO.js";import{$D as U,$b as T$2,AI as x$2,Ab as _$4,EA as M$2,Gk as M$3,Gw as L$1,Hb as D$1,Hv as _$3,IR as C$2,Jv as G$4,Jw as Q$2,KB as g$2,KD as _$1,Kb as H$3,LF as F$3,NI as t$2,Nb as o$4,Op as e,PH as g$3,PI as A$2,Pb as r$3,QI as m$2,RI as G$5,TI as h$2,Vb as C$1,WR as R$2,Ww as H$2,XD as I$1,Xb as P$1,ZB as G$3,ZD as N$2,Zb as Q$3,_H as p$2,_x as v$2,ax as aa,bp as E$2,cU as F$2,dj as t$1,dx as j$2,fU as M$4,fy as p$3,hA as t$4,hV as js,lx as fa,mM as u$2,mx as ra,pA as o$5,pM as i$3,qb as K$3,qk as R$3,qv as En,rO as o$3,rx as Z$2,sI as v$1,sx as e$1,sy as W$1,t as e$3,tI as g$4,vx as x$1,wp as R$1,xN as t$3,yx as y$1,yy as _$2,zA as e$2,zV as M$5}from"./main-T6FMN7WU.js";import{a as g$5,i as T$3}from"./chunk-CndN17Br.js";import{i as ye$1,n as fe$1,o as T$4,s as w}from"./chunk-COayRJnX.js";import{t as L$2}from"./chunk-D1xd6dTi.js";import{f as pt$1,n as Te,s as de$2}from"./chunk-MojC2FA7.js";import{a as t$5}from"./chunk-DrodIJlo.js";import{h as ft$1,m as d$1,n as Dt,v as ot,y as st$1}from"./chunk-LUWUl4uf.js";import{c as W$2,f as x$3,i as Q$4,l as X$2,s as U$1,t as $$1}from"./chunk-BqbLg2VX.js";import{O as k$1,P as q$2,j as ne$1,r as Ae$1,t as $$2}from"./chunk-DRAtQZKr.js";function Pe$1(r,a){let{vertex:e}=r;e.uniforms.add(new l(`intrinsicWidth`,i=>i.width));let{hasScreenSizePerspective:t,spherical:o}=a;t?(r.include(m,a),z$3(e),ni(e,a),e.uniforms.add(new m$1(`inverseViewMatrix`,(i,s)=>Q$2(_,L$1(_,s.camera.viewMatrix,i.origin)))),e.code.add(o$2`
      float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
        vec3 worldPos = (inverseViewMatrix * vec4(pos, 1)).xyz;
        vec3 groundUp = ${o?o$2`normalize(worldPos + localOrigin)`:o$2`vec3(0.0, 0.0, 1.0)`};
        float absCosAngle = abs(dot(groundUp, normalize(worldPos - cameraPosition)));

        return screenSizePerspectiveScaleFloat(size, absCosAngle, length(pos), screenSizePerspective);
      }
    `)):e.code.add(o$2`float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
return size;
}`),a.hasVVSize?(e.uniforms.add(new r$2(`vvSizeMinSize`,i=>i.vvSize.minSize),new r$2(`vvSizeMaxSize`,i=>i.vvSize.maxSize),new r$2(`vvSizeOffset`,i=>i.vvSize.offset),new r$2(`vvSizeFactor`,i=>i.vvSize.factor),new r$2(`vvSizeFallback`,i=>i.vvSize.fallback)),e.code.add(o$2`
    float getSize(${h(t,`vec3 pos`)}) {
      float value = ${e.inputs.get(`sizeFeatureAttribute`)};
      float size = isnan(value)
        ? vvSizeFallback.x
        : intrinsicWidth * clamp(vvSizeOffset + value * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;

      return ${h(t,`applyLineSizeScreenSizePerspective(size, pos)`,`size`)};
    }
    `)):e.code.add(o$2`
    float getSize(${h(t,`vec3 pos`)}) {
      float fullSize = intrinsicWidth * ${e.inputs.get(`size`)};
      return ${h(t,`applyLineSizeScreenSizePerspective(fullSize, pos)`,`fullSize`)};
    }
    `),a.hasVVOpacity?(e.constants.add(`vvOpacityNumber`,`int`,8),e.uniforms.add(new R(`vvOpacityValues`,8,i=>i.vvOpacity.values),new R(`vvOpacityOpacities`,8,i=>i.vvOpacity.opacityValues),new l(`vvOpacityFallback`,i=>i.vvOpacity.fallback,{supportsNaN:!0})),e.code.add(o$2`
    float interpolateOpacity(float value) {
      if (value <= vvOpacityValues[0]) {
        return vvOpacityOpacities[0];
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
        }
      }

      return vvOpacityOpacities[vvOpacityNumber - 1];
    }

    vec4 applyOpacity(vec4 color) {
      float value = ${e.inputs.get(`opacityFeatureAttribute`)};
      if (isnan(value)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${h(a.hasVVColor,`color`,`vec4(color.rgb, vvOpacityFallback)`)};
      }

      return vec4(color.rgb, interpolateOpacity(value));
    }
    `)):e.code.add(o$2`vec4 applyOpacity(vec4 color) {
return color;
}`),a.hasVVColor?(r.include(It,a),e.code.add(o$2`
    vec4 getColor() {
      vec4 color = interpolateVVColor(${e.inputs.get(`colorFeatureAttribute`)});

      // if we encounter NaN in the color it means the color is in the fallback case where the symbol color
      // is not defined and there is no valid color visual variable override. In this case just return a fully
      // transparent color
      if (isnan(color.r)) {
        return vec4(0);
      }

      return applyOpacity(color);
    }
    `)):e.code.add(o$2`
    vec4 getColor() {
      return applyOpacity(${e.inputs.get(`color`)});
    }
    `)}var _=t$1();function G$2(r){r.include(z$2),r.fragment.uniforms.add(new m$1(`inverseViewMatrix`,(a,e)=>{let t=L$1(re$1,e.camera.viewMatrix,a.localOrigin);return H$2(t,t)})).code.add(o$2`vec4 reconstructLocalPosition(vec2 coord, float linearDepth) {
vec4 cameraSpace = vec4(reconstructPosition(coord, linearDepth), 1.0);
return inverseViewMatrix * cameraSpace;
}`)}var re$1=t$1();function H(r,a){r.include(Oe$1,a),r.include(G$2),r.fragment.include(i),r.fragment.code.add(o$2`float readFragmentShadow(float additionalAmbientScale) {
vec3 pos = reconstructLocalPosition(gl_FragCoord.xy, linearizeDepth(gl_FragCoord.z)).xyz;
return readShadow(additionalAmbientScale, pos);
}`)}function Be(r,a){let{vertex:e,fragment:t}=r;r.include(H,a),t.include(xt,a),t.include(de$1,a),Se$2(t),ni(t,a),e.main.add(`forwardLinearDepthToReadShadow();`),t.uniforms.add(V$2,ze$1,e.uniforms.get(`localOrigin`)).code.add(o$2`vec4 evaluateSceneLightingFragment(vec3 vpos, vec3 normal, vec4 albedo) {
vec3 posWorld = vpos + localOrigin;
float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
float shadow = readFragmentShadow(additionalAmbientScale);
float ssao = evaluateAmbientOcclusionInverse();
vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
vec3 viewDirection = normalize(vpos - cameraPosition);
return vec4(
evaluateSceneLighting(normal, albedo.rgb, shadow, 1.0 - ssao, additionalLight, viewDirection, normal),
albedo.a);
}`)}function Ge$1(r){r.vertex.code.add(`#define noPerspectiveWrite(x, w) (x * w)`)}function He$1(r){r.fragment.code.add(`#define noPerspectiveRead(x) (x * gl_FragCoord.w)`)}var p$1=.5;var Ye$1=N$2(p$1/2,p$1/2,1-p$1/2,1-p$1/2);function Ze$1(r){return r===`cross`||r===`x`}function ea(r,a=128,e=a*p$1,t=0){let{data:o,parameters:i}=te(r,a,e,t);return new ct$1(o,i)}function te(r,a=128,e$4=a*p$1,t=0){return{data:j$1(r,a,e$4,t),parameters:{mipmap:!1,wrap:{s:33071,t:33071},width:a,height:a,noUnpackFlip:!0,dataType:e.FLOAT,pixelFormat:6403,internalFormat:R$1.R16F,reloadable:!0}}}function j$1(r,a=128,e=a*p$1,t=0){switch(r){case`circle`:return E(a,e);case`square`:return ie$1(a,e);case`cross`:return ne(a,e,t);case`x`:return se$2(a,e,t);case`kite`:return oe$1(a,e);case`triangle`:return ce$2(a,e);case`arrow`:return le$1(a,e);default:return E(a,e)}}function E(r,a){let e=r/2-.5;return v(r,J(e,e,a/2))}function ie$1(r,a){return K(r,a,!1)}function oe$1(r,a){return K(r,a,!0)}function ne(r,a,e=0){return X$1(r,a,!1,e)}function se$2(r,a,e=0){return X$1(r,a,!0,e)}function ce$2(r,a){return v(r,Y$1(r/2,a,a/2))}function le$1(r,a){let e=a,t=a/2,o=r/2,i=.8*e,s=J(o,(r-a)/2-i,Math.sqrt(i*i+t*t)),c=Y$1(o,e,t);return v(r,(l,m)=>Math.max(c(l,m),-s(l,m)))}function K(r,a,e){return e&&(a/=Math.SQRT2),v(r,(t,o)=>{let i=t-.5*r+.25,s=-o+.5*r-.75;if(e){let c=(i+s)/Math.SQRT2;s=(s-i)/Math.SQRT2,i=c}return Math.max(Math.abs(i),Math.abs(s))-.5*a})}function X$1(r,a,e,t=0){a-=t,e&&(a*=Math.SQRT2);let o=.5*a;return v(r,(i,s)=>{let c=i-.5*r,l=-s+.5*r-1;if(e){let ee=(c+l)/Math.SQRT2;l=(l-c)/Math.SQRT2,c=ee}let m;return c=Math.abs(c),l=Math.abs(l),m=c>l?c>o?Math.sqrt((c-o)*(c-o)+l*l):l:l>o?Math.sqrt(c*c+(l-o)*(l-o)):c,m-=t/2,m})}function J(r,a,e){return(t,o)=>{let i=t-r,s=o-a;return Math.sqrt(i*i+s*s)-e}}function Y$1(r,a,e){let t=Math.sqrt(a*a+e*e);return(o,i)=>{let s=Math.abs(o-r)-e,c=i-r+a/2+.75,l=(a*s+e*c)/t,m=-c;return Math.max(l,m)}}function v(r,a){let e=new Float32Array(r*r);for(let t=0;t<r;t++)for(let o=0;o<r;o++){let i=o+r*t;e[i]=a(o,t)/r}return e}var Z$1=64/(32/5);var da=.25;function za(r,a){let e=r.vertex,t=a.hasScreenSizePerspective,o=a.worldSized,i=o&&!a.draped;ci(e),e.constants.add(`markerSizePerLineWidth`,`float`,Z$1),e.uniforms.add(new l(`markerScale`,({markerScale:s})=>s)),o&&e.uniforms.add(new f(`groundMetersToScreenRatio`,s=>1/(s.screenToPlanarDistanceRatio*s.planarDistanceToGroundRatio))),e.code.add(o$2`float getScreenMarkerSize(float lineWidth) {
return markerScale * markerSizePerLineWidth * lineWidth;
}`),e.code.add(h(i,o$2`
        float getLineWidth(vec3 pos) {
          float size = getSize(${h(t,`pos`)});
          float metersPerScreenPixel = max(-pos.z, nearFar[0]) * metersPerRenderUnit * screenPixelSizePerDistance;
          return max(size / metersPerScreenPixel, 1.0) * pixelRatio;
        }
    `,o$2`
        float getLineWidth(${h(a.lineWidthRequiresPosition,`vec3 pos`)}) {
          float size = max(getSize(${h(t,`pos`)}), 1.0);
          return ${h(o,`size * pixelRatio * groundMetersToScreenRatio`,`size * pixelRatio`)};
        }
    `)),i?e.uniforms.add(B,H$1,g):e.uniforms.add(N),e.code.add(h(i,o$2`
        float getWorldMarkerSize(vec3 pos) {
          return markerScale * markerSizePerLineWidth * getSize(${h(t,`pos`)}) * 0.5 / metersPerRenderUnit;
        }
      `,o$2`
        float getWorldMarkerSize(vec3 pos) {
          float distanceToCamera = length(pos);
          float screenToWorldRatio = renderPixelSizePerDistance * distanceToCamera * 0.5;
          return getScreenMarkerSize(getLineWidth(${h(t,`pos`)})) * screenToWorldRatio;
        }
      `)),e.constants.add(`maxSegmentLengthFraction`,`float`,.45),e.code.add(h(i,o$2`bool areWorldMarkersHidden(vec3 pos, vec3 other) {
return getWorldMarkerSize(pos) > maxSegmentLengthFraction * length(pos - other);
}`,o$2`
        bool areWorldMarkersHidden(vec3 pos, vec3 other) {
          vec3 midPoint = mix(pos, other, 0.5);
          float distanceToCamera = length(midPoint);
          float screenToWorldRatio = renderPixelSizePerDistance * distanceToCamera * 0.5;
          float worldMarkerSize = getScreenMarkerSize(getLineWidth(${h(t,`pos`)})) * screenToWorldRatio;
          float segmentLen = length(pos - other);
          return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
        }
      `))}function j(t){switch(t.elementType){case`float`:switch(t.elementCount){case 1:return o$2`float`;case 2:return o$2`vec2`;case 3:return o$2`vec3`;case 4:return o$2`vec4`;case 9:return o$2`mat3`;default:t.elementCount}break;case`int`:switch(t.elementCount){case 1:return o$2`int`;case 2:return o$2`ivec2`;case 3:return o$2`ivec3`;case 4:return o$2`ivec4`;case 9:throw Error(`Invalid element count 9 for type int`);default:t.elementCount}break;case`uint`:switch(t.elementCount){case 1:return o$2`uint`;case 2:return o$2`uvec2`;case 3:return o$2`uvec3`;case 4:return o$2`uvec4`;case 9:throw Error(`Invalid element count 9 for type uint`);default:t.elementCount}break;default:t.elementType}throw Error(`unsupported field`)}var O=new f(`constNaN`,()=>NaN,{supportsNaN:!0});var $=class extends h$1{constructor(n){super(),this.supportNaN=n}};g$2([f$1()],$.prototype,`supportNaN`,void 0);function W(t,n){let a=n?.supportNaN;a&&(t.uniforms.add(O),t.code.add(o$2`bool bitsEncodeFloat16NaN(highp uint bits) {
const highp uint nanExponent = 0x00007c00u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x000003ffu;
return exponent == nanExponent && mantissa != 0u;
}`)),t.code.add(o$2`
    mediump float unpackHalf1x16(highp uint bits) {
      ${h(a,o$2`
        if (bitsEncodeFloat16NaN(bits)) {
          return constNaN;
        }`)}
      return unpackHalf2x16(bits).x;
    }`),t.code.add(o$2`
    mediump vec2 unpackHalf2x16NaNSupport(highp uint bits) {
      vec2 result = unpackHalf2x16(bits);
      ${h(a,o$2`
        if (bitsEncodeFloat16NaN(bits)) {
          result.x = constNaN;
        }
        if (bitsEncodeFloat16NaN(bits >> ${o$2.uint(p[2])})) {
          result.y = constNaN;
        }
        `)}
      return result;
    }`)}function X(t,n){let a=n?.supportNaN;a&&(t.uniforms.add(O),t.code.add(o$2`bool bitsEncodeFloat32NaN(highp uint bits) {
const highp uint nanExponent = 0x7f800000u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x007fffffu;
return exponent == nanExponent && mantissa != 0u;
}`)),t.code.add(o$2`
    highp float unpackFloat1x32(highp uint bits) {
      ${h(a,o$2`
        if (bitsEncodeFloat32NaN(bits)) {
          return constNaN;
        }`)}
      return uintBitsToFloat(bits);
    }`)}function Y(t){t.code.add(o$2`mediump int unpackInt1x16(highp uint bits) {
highp uint signExtendedBits = (bits & 0x8000u) != 0u ? (bits | 0xffff0000u) : bits;
return int(signExtendedBits);
}`)}function q$1(t,n){let{fieldType:a}=t,r=ie[a];return`${r(ue$2(t,n))}`}function S(t,n){let a=[];for(let r of t){let i=o$2`unpackFloat1x32(${r})`;a.push(i)}return a.join(n)}var ae$1=t=>o$2`${t[0]}`;var re=t=>o$2`uvec4(${t.join(`, `)})`;var z$1=t=>o$2`${t[0]}`;var V$1=t=>{let n=t[0],a=o$2`uvec4(${o$2.uint(p[0])}, ${o$2.uint(p[1])}, ${o$2.uint(p[2])}, ${o$2.uint(p[3])})`,r=o$2`uvec4(${o$2.hexuint(A$1[1])})`;return o$2`((uvec4(${n}) >> ${a}) & ${r})`};var ie={u8:z$1,u32:ae$1,vec4u32:re,unorm8:t=>o$2`(float(${z$1(t)})/${o$2.float(255)})`,vec4unorm8:t=>o$2`(vec4(${V$1(t)})/${o$2.float(255)})`,snorm16:t=>o$2`unpackSnorm2x16(${t[0]}).x`,vec2snorm16:t=>o$2`unpackSnorm2x16(${t[0]})`,f16:t=>o$2`unpackHalf1x16(${t[0]})`,vec4f16:t=>o$2`vec4(unpackHalf2x16NaNSupport(${t[0]}), unpackHalf2x16NaNSupport(${t[1]}))`,f32:t=>o$2`unpackFloat1x32(${t[0]})`,vec4u8:V$1,vec2f32:t=>o$2`vec2(${S(t,`, `)})`,vec3f32:t=>o$2`vec3(${S(t,`, `)})`,vec4f32:t=>o$2`vec4(${S(t,`, `)})`,mat3f32:t=>o$2`mat3(${S(t,`,
`)})`};function ue$2(t,n){let{byteOffset:a,byteSize:r}=t,i=n.channelByteStride,u=n.byteStride,f=Math.ceil(r/C),o=se$1[n.channels],c=[];for(let l=0;l<f;++l){let m=l*C,g=a+m,N=r-m,h=Math.min(N,C),d=0,b=[];for(;d<h;){let v=g+d,s=Math.floor(v/u),x=v%u,J=Math.floor(x/i),k=x%i,K=i-k,L=h-d,F=Math.min(K,L),Q=o$2`texel${o$2.int(s)}${o[J]}`,R=F===4?``:o$2` & ${o$2.hexuint(A$1[F])}`,Z=k===0?``:o$2` >> ${o$2.uint(p[k])}`,ee=o$2`((${Q}${Z})${R})`,te=d===0?``:o$2` << ${o$2.uint(p[d])}`,ne=o$2`(${ee})${te}`;b.push(ne),d+=F}c.push(o$2`(${b.join(` | `)})`)}return c}var C=4;var p=[0,8,16,24];var A$1=[0,255,65535,16777215,4294967295];var se$1={1:[o$2``],2:[o$2`.x`,o$2`.y`],4:[o$2`.x`,o$2`.y`,o$2`.z`,o$2`.w`]};var oe=new $(!0);var ce$1=new $(!1);var T$1=class{constructor(n,a){this._shader=n,this._namespace=a,this._used=/* @__PURE__ */ new Map}getItemSuffix(n){return n===0?``:`${n<0?`Minus`:`Plus`}${Math.abs(n)}`}getItemDataName(n=0){return`${this._namespace}ItemData${this.getItemSuffix(n)}`}getStructName(n=0){return`${this._namespace}TextureBackedBufferItemData${this.getItemSuffix(n)}`}getFetchName(n=0){return`${this._namespace}fetchTextureBackedBufferItemData${this.getItemSuffix(n)}`}getStrideName(){return`${this._namespace}tbbStride`}getTextureAttribute(n,a=0){let r=this._used,i=this.getItemDataName(a),u=r.get(a);return u??(u=/* @__PURE__ */ new Set,r.set(a,u)),u.add(n),o$2`${i}.${n}`}generateVertexCode(n){let{_shader:a,_used:r}=this,i=new g$5(a.vertex);for(let u of r.keys())this._generateFetchFunction(u,i,n);return i.generateSource()}generateVertexMainCode(n){let{_shader:a,_used:r}=this,i=new g$5(a.vertex);for(let u of r.keys())this._generateFetchFunctionCall(u,i,n);return i.generateSource()}_generateFetchFunctionCall(n,a,r){let{itemIndexExpression:i}=r,u=this._used.get(n);if(u==null||u.size===0)return;let f=this.getItemDataName(n),o=this.getFetchName(n);a.add(o$2`${f} = ${o}(${i});`)}_getIndexOffset(n=0){return n===0?o$2``:o$2`${n<0?`-`:`+`}${o$2.uint(Math.abs(n))}`}_generateFetchFunction(n,a,r){let{bufferUniform:i,layout:u}=r,{texelFormatInfo:f}=u,o=this._used.get(n);if(o==null||o.size===0)return;let c=this.getStrideName(),l=this.getStructName(n),m=this.getItemDataName(n),g=this.getFetchName(n),N=this._getIndexOffset(n),h=[];for(let s of u.fields.values())o.has(s.name)&&h.push(s);if(h.length===0)return;let d=[];for(let s=0;s<u.texelStride;++s)d.push(!1);for(let s of h)for(let x=0;x<s.numTexels;++x)d[s.startTexel+x]=!0;a.add(o$2`
  struct ${l} {`);for(let s of h)a.add(o$2`\t${j(s)} ${s.name};`);a.add(o$2`};`),a.add(o$2`\n${l} ${g}( highp uint baseIndex ) {
    ${l} itemData;
    highp uint index = (baseIndex${N}) * ${c};
    highp uint rowWidth = uint(textureSize(${i.name}, 0).x);
    int coordX = int(index % rowWidth);
    int coordY = int(index / rowWidth);\n`);let b=le[f.channels],v=de[f.channels];for(let s=0;s<d.length;++s)d[s]!==!1&&a.add(o$2`highp ${b} texel${o$2.int(s)} = texelFetch(${i.name}, ivec2(coordX + ${o$2.int(s)}, coordY), 0)${v};`);for(let s of h)a.add(o$2`itemData.${s.name} = ${q$1(s,f)};`);a.add(o$2`return itemData;\n}`),a.add(o$2`${l} ${m};`)}};var P=class{constructor(n){this._parameters=n,this.moduleId=G$3(),this.namespace=`_tbb_${this.moduleId}_`}createBuilder(n,a){let r=null,i=u=>{r=this._buildTextureBackedBufferShaderCode(u)};return a?n.include(i,a):n.include(i),w(r!=null,`Valid builder expected.`),r}_buildTextureBackedBufferShaderCode(n){let{namespace:a,_parameters:r}=this,{bufferUniform:i,layout:u}=r,f=r.enableNaNSupport?oe:ce$1,{vertex:o}=n,c=new T$1(n,a);o.include(X,f),o.include(W,f),o.include(Y);let l=c.getStrideName(),m=c.getStructName(),g=c.getFetchName(),N=c.getItemDataName();for(let h of[l,m,g,N])w(h.length<1024,`Identifiers do not have a valid length`);return o.constants.add(l,`uint`,u.texelStride),o.uniforms.add(i),o.code.add(()=>c.generateVertexCode(r)),o.main.add(()=>c.generateVertexMainCode(r)),c}};var le={1:o$2`uint`,2:o$2`uvec2`,4:o$2`uvec4`};var de={1:o$2`.x`,2:o$2`.xy`,4:``};var G$1=class extends i$2{constructor(n,a){super(n,`usampler2D`,2,(r,i,u)=>r.bindTexture(n,a(i,u)))}};function Ce$1(t){return t.pattern.map(n=>Math.round(n*t.pixelRatio))}function me$1(t){if(t==null)return 1;let n=Ce$1(t);return Math.floor(n.reduce((u,o)=>u+o,0))}function fe(t){return t==null?I$1:t.length===4?t:_$1(be,t[0],t[1],t[2],1)}var be=o$3();function he(t,n){if(!n.stippleEnabled){t.fragment.code.add(o$2`float getStippleAlpha(float lineWidth) { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);return}let u=!(n.draped&&n.stipplePreferContinuous),{vertex:o$6,fragment:i}=t;n.draped||(ni(o$6,n),o$6.uniforms.add(new f(`worldToScreenPerDistanceRatio`,({camera:s})=>1/s.screenPixelSizePerDistance)).code.add(o$2`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),t.varyings.add(`vStippleDistance`,`float`),t.varyings.add(`vStippleLimitsAndCaps`,`vec4`),t.varyings.add(`vStipplePatternStretch`,`float`),o$6.code.add(o$2`
    float discretizeStippleDistanceToScreenRatio(float stippleDistanceToScreenRatio) {
      float step = ${o$2.float(Fe)};

      float discreteStippleDistanceToScreenRatio = log(stippleDistanceToScreenRatio);
      discreteStippleDistanceToScreenRatio = ceil(discreteStippleDistanceToScreenRatio / step) * step;
      discreteStippleDistanceToScreenRatio = exp(discreteStippleDistanceToScreenRatio);
      return discreteStippleDistanceToScreenRatio;
    }
  `),ci(o$6),o$6.code.add(o$2`
    vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {

      // First check if the segment is long enough to support fully screen space patterns.
      // Force sparse mode for segments that are very large in screen space even if it is not allowed,
      // to avoid imprecision from calculating with large floats.
      if (segmentLengthPseudoScreen >= ${u?`patternLength`:`1e4`}) {
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        float stretch = repetitions / flooredRepetitions;

        // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
        // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
        vStipplePatternStretch = max(0.75, stretch);

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),i.uniforms.add(new u$1(`stipplePatternTexture`,s=>s.stippleTexture),new l(`stipplePatternPixelSizeInv`,s=>1/A(s))),n.stippleOffColorEnabled&&i.uniforms.add(new r(`stippleOffColor`,s=>fe(s.stippleOffColor))),t.include(He$1);let r$4=n.worldSized&&n.imagePattern,{usePerspectiveCorrectStipple:c}=n;c&&t.varyings.add(`vStipplePerspective`,`vec4`),r$4?(t.varyings.add(`vStippleV`,`float`),t.fragment.include(o),i.code.add(o$2`vec4 getStippleColor(out bool isClamped) {
vec2 aaCorrectedLimits = vStippleLimitsAndCaps.xy + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = (vStippleLimitsAndCaps.z <= 0.0 && vStippleDistance < aaCorrectedLimits.x) ||
(vStippleLimitsAndCaps.w <= 0.0 && vStippleDistance > aaCorrectedLimits.y);
float u = vStippleDistance * stipplePatternPixelSizeInv;
float v = vStippleV == -1.0 ? 0.5 : vStippleV;
return texture(stipplePatternTexture, vec2(u, v));
}
vec4 getStippleColor() {
bool ignored;
return getStippleColor(ignored);
}
float getStippleSDF() {
vec4 color = getStippleColor();
return color.a == 0.0 ? -0.5 : 0.5;
}
float getStippleAlpha(float lineWidth) {
return getStippleColor().a;
}
vec4 blendStipple(vec4 color, float stippleAlpha) {
vec4 stippleColor = getStippleColor();
int mixMode  = 1;
vec3 col = mixExternalColor(color.rgb, vec3(1.0), stippleColor.rgb, mixMode);
float opacity = mixExternalOpacity(color.a, 1.0, stippleColor.a, mixMode);
return vec4(col, opacity);
}`)):i.code.add(o$2`
    float getStippleSDF(out bool isClamped) {
      ${h(n.worldSized,o$2`
          float unclampedStippleDistance = noPerspectiveRead(vStippleDistance);
          float stippleDistancePerPixel = length(vec2(dFdx(unclampedStippleDistance), dFdy(unclampedStippleDistance)));
        `,o$2`float stippleDistancePerPixel = 1.0;`)}

      bool clampStart = vStippleLimitsAndCaps.z <= 0.0;
      bool clampEnd = vStippleLimitsAndCaps.w <= 0.0;
      float stippleDistance = vStippleDistance;
      if (clampStart) {
        stippleDistance = max(stippleDistance, vStippleLimitsAndCaps.x);
      }
      if (clampEnd) {
        stippleDistance = min(stippleDistance, vStippleLimitsAndCaps.y);
      }
      stippleDistance = noPerspectiveRead(stippleDistance);
      float lineSizeInv = noPerspectiveRead(vLineSizeInv);

      ${h(c,o$2`
          // Convert screen-space progress to progress along the 3D segment using the endpoints' inverse clip-W values.
          // This keeps dash lengths constant in world units, so farther dashes appear shorter on screen.
          vec4 stipplePerspective = noPerspectiveRead(vStipplePerspective);
          float segmentLength = stipplePerspective.y - stipplePerspective.x;
          float segmentFactor = segmentLength > 0.0 ? (stippleDistance - stipplePerspective.x) / segmentLength : 0.0;
          float interpolatedInverseW = mix(stipplePerspective.z, stipplePerspective.w, segmentFactor);
          float perspectiveFactor = segmentFactor * stipplePerspective.w / interpolatedInverseW;
          stippleDistance = mix(stipplePerspective.x, stipplePerspective.y, perspectiveFactor);
        `)}

        vec2 aaCorrectedLimits = vStippleLimitsAndCaps.xy + vec2(1.0, -1.0) * stippleDistancePerPixel / gl_FragCoord.w;
      isClamped = (clampStart && vStippleDistance < aaCorrectedLimits.x) ||
          (clampEnd && vStippleDistance > aaCorrectedLimits.y);

      float u = stippleDistance * stipplePatternPixelSizeInv * lineSizeInv;
      u = fract(u);

      float sdf = texture(stipplePatternTexture, vec2(u, 0.5)).r;

      return sdf;
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha(float lineWidth) {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);
      float antiAliasedResult = clamp(stippleSDF * lineWidth + 0.5, 0.0, 1.0);
      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${n.stippleOffColorEnabled?`mix(color, stippleOffColor, stippleAlpha)`:`vec4(color.rgb, color.a * stippleAlpha)`};
    }
  `),i.code.add(o$2`
    float getStippleCapDistance() {
      return (getStippleSDF() * 2.0 - 1.0) * vStipplePatternStretch;
    }

    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${h(!n.stippleOffColorEnabled,`if (stippleAlpha < threshold) { discard; }`)}
    }
  `)}function A(t){let n=t.stipplePattern;return c(n)?n.length:n?me$1(n)/n.pixelRatio:1}var Fe=.4;var ue$1=1;var ve=1;function ge$1(t,n){let{animation:u}=n,{varyings:o,vertex:i,fragment:r}=t;o.add(`vTimeStamp`,`float`),o.add(`vFirstTime`,`float`),o.add(`vLastTime`,`float`),o.add(`vTransitionType`,`float`),i.main.add(o$2`vTimeStamp = animatedAlphaTimeStamps.x;
vFirstTime = animatedAlphaTimeStamps.y;
vLastTime = animatedAlphaTimeStamps.z;
vTransitionType = animatedAlphaTimeStamps.w;`),u===3&&r.constants.add(`decayRate`,`float`,2.3),r.code.add(o$2`
    float getTrailOpacity(float x) {
      if (x < 0.0) {
        return 0.0;
      }

      ${Ae(u)}
    }`),r.uniforms.add(new l(`timeElapsed`,c=>c.timeElapsed),new l(`trailLength`,c=>c.trailLength),new l(`speed`,c=>c.animationSpeed),new r$1(`startEndTime`,c=>v$1(we$1,c.startTime,c.endTime))),r.constants.add(`fadeInTime`,`float`,ve),r.constants.add(`fadeOutTime`,`float`,ue$1),r.constants.add(`incomingTransition`,`int`,0),r.constants.add(`outgoingTransition`,`int`,2),r.code.add(o$2`float fadeIn(float x) {
return smoothstep(0.0, fadeInTime, x);
}
float fadeOut(float x) {
return isinf(fadeOutTime) ? 1.0 : smoothstep(fadeOutTime, 0.0, x);
}
void updateAlphaIf(inout float alpha, bool condition, float newAlpha) {
alpha = condition ? min(alpha, newAlpha) : alpha;
}
float animatedAlpha() {
float startTime = startEndTime[0];
float endTime = startEndTime[1];
float totalTime = vLastTime - vFirstTime;
float actualFadeOutTime = min(fadeOutTime * speed, trailLength);
float longStreamlineThreshold = (fadeInTime + 1.0) * speed + actualFadeOutTime;
bool longStreamline = totalTime > longStreamlineThreshold;
float totalTimeWithFadeOut = longStreamline && actualFadeOutTime != trailLength ? totalTime : totalTime + actualFadeOutTime;
float fadeOutStartTime = longStreamline ? totalTime - actualFadeOutTime : totalTime;
float originTime =  -vFirstTime;
float actualEndTime = int(vTransitionType) == outgoingTransition ? min(endTime, startTime + vLastTime / speed) : endTime;
if (speed == 0.0) {
float alpha = getTrailOpacity((totalTimeWithFadeOut - (vTimeStamp - vFirstTime)) / trailLength);
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
return alpha;
}
float relativeStartTime = mod(startTime, totalTimeWithFadeOut);
float shiftedTimeElapsed = timeElapsed - relativeStartTime + originTime;
float headRelativeToFirst = mod(shiftedTimeElapsed * speed, totalTimeWithFadeOut);
float vRelativeToHead = headRelativeToFirst - originTime - vTimeStamp;
float vAbsoluteTime = timeElapsed - vRelativeToHead / speed;
if (startTime > timeElapsed) {
return 0.0;
}
float alpha = getTrailOpacity(vRelativeToHead / trailLength);
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, int(vTransitionType) != incomingTransition, step(startTime, vAbsoluteTime));
updateAlphaIf(alpha, headRelativeToFirst > fadeOutStartTime, fadeOut((headRelativeToFirst - fadeOutStartTime) / speed));
alpha *= fadeIn(vTimeStamp - vFirstTime);
return alpha;
}`)}function Ae(t){switch(t){case 2:return`return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;`;case 3:return`float cutOff = exp(-decayRate);
        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);`;default:return`return 1.0;`}}var we$1=o$4();function Tt(t){return ye$1().u32(`textureElementIndex`,{integer:!0}).vec2f16(`lineParameters`)}var We=[{type:`vec3f32`,name:`position`},{type:`f32`,name:`u0`}];function Se$1(t){let n=[...We];return t.hasVVColor?n.push({type:`f32`,name:`colorFeatureAttribute`}):n.push({type:`vec4unorm8`,name:`color`}),t.hasVVSize?n.push({type:`f32`,name:`sizeFeatureAttribute`}):n.push({type:`f32`,name:`size`}),t.hasVVOpacity&&n.push({type:`f32`,name:`opacityFeatureAttribute`}),po()&&n.push({type:`vec4unorm8`,name:`olidColor`}),t.hasAnimation&&n.push({type:`vec4f16`,name:`timeStamps`}),new L$2(n)}var Re=new G$1(`componentTextureBuffer`,t=>t.textureBuffer);function xe(t){return new P({layout:Se$1(t),itemIndexExpression:`textureElementIndex`,bufferUniform:Re})}var Yt$1=1;function ze(t$6){let n=new T$3,{attributes:u,varyings:o,vertex:i,fragment:r$5}=n,{applyMarkerOffset:c,draped:s,shadingEnabled:De,output:w,capType:W,stippleEnabled:h$3,falloffEnabled:R,wireframe:z,innerColorEnabled:Te,hasAnimation:Le,hasScreenSizePerspective:C,worldSized:m,imagePattern:ye,useFlatJoinVarying:D$2}=t$6,g$6=W===2,S=h$3&&g$6,b$1=R||S,Pe=h$3||g$6,p=m&&!s,v=t$6.usePerspectiveCorrectStipple,d=xe(t$6).createBuilder(n,t$6);i.inputs.add(`position`,()=>d.getTextureAttribute(`position`)),t$6.hasVVSize?i.inputs.add(`sizeFeatureAttribute`,()=>d.getTextureAttribute(`sizeFeatureAttribute`)):i.inputs.add(`size`,()=>d.getTextureAttribute(`size`)),t$6.hasVVOpacity&&i.inputs.add(`opacityFeatureAttribute`,()=>d.getTextureAttribute(`opacityFeatureAttribute`)),t$6.hasVVColor?i.inputs.add(`colorFeatureAttribute`,()=>d.getTextureAttribute(`colorFeatureAttribute`)):i.inputs.add(`color`,()=>d.getTextureAttribute(`color`)),r$5.include(D),n.include(Pe$1,t$6),n.include(he,t$6),w===11?(n.varyings.add(`objectAndLayerIdColorVarying`,`vec4`),i.code.add(o$2`
      vec4 getOlidColor() {
        return ${d.getTextureAttribute(`olidColor`)};
      }

      void forwardObjectAndLayerIdColor() {
        objectAndLayerIdColorVarying = getOlidColor();
      }
    `),r$5.code.add(o$2`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)):(i.code.add(o$2`void forwardObjectAndLayerIdColor() {}`),r$5.code.add(o$2`void outputObjectAndLayerIdColor() {}`));let I=c&&!s;if(I&&n.include(za,t$6),si(i,t$6),s&&(m||h$3)){let l=m?`groundMetersToScreenRatio`:`planarDistanceToScreenRatio`;i.uniforms.add(new f(l,T=>1/(T.screenToPlanarDistanceRatio*(m?T.planarDistanceToGroundRatio:1))))}return p&&i.uniforms.add(H$1,g),i.uniforms.add(F$1,B,V$3,new l(`miterLimit`,l=>l.join===`miter`?l.miterLimit:0)),i.constants.add(`LARGE_HALF_FLOAT`,`float`,65500),i.constants.add(`EPS`,`float`,.001),i.constants.add(`NUM_JOIN_SUBDIVISIONS`,`float`,t$6.numJoinSubdivisions),u.add(`textureElementIndex`,`uint`),u.add(`lineParameters`,`vec2`),o.add(`vColor`,`vec4`),o.add(`vpos`,`vec3`,{invariant:!0}),o.add(`vLineDistance`,`float`),o.add(`vLineWidth`,`float`),D$2?o.add(`vIsInsideJoin`,`int`,{flat:!0}):o.add(`vIsInsideJoin`,`float`),o.add(`vStretchFactor`,`float`),o.add(`vJoinCenterLineSDFs`,`vec2`),p&&o.add(`vJoinLineWidths`,`vec2`),o.add(`vSubdivisionFactor`,`float`),h$3&&o.add(`vLineSizeInv`,`float`),b$1&&o.add(`vLineDistanceNorm`,`float`),g$6&&(o.add(`vSegmentSDF`,`float`),o.add(`vReverseSegmentSDF`,`float`)),i.code.add(o$2`vec3 perpendicular(vec3 v) {
return vec3(v.y, -v.x, 0.0);
}
float nearPlaneInterpolationFactor(float nearPlaneDistance, vec4 start, vec4 end) {
return (-nearPlaneDistance - start.z) / (end.z - start.z);
}
vec3 rotateZ(vec3 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return vec3(m * v.xy, v.z);
}`),i.code.add(o$2`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
posNdc.z /= posNdc.w;
return posNdc;
}`),i.code.add(o$2`
    void clip(
      inout vec4 pos,
      inout vec4 prev,
      inout vec4 next,
      ${h(v,o$2`inout float u0, inout float prevU0, inout float nextU0,`)}
      bool isStartVertex
    ) {
      float adjustedNearPlaneDistance = nearFar[0] * 0.99;

      if (pos.z > -nearFar[0]) {
        // Current position behind near plane, so we need to clip
        if (!isStartVertex) {
          if (prev.z < -nearFar[0]) {
            // Previous position in front of near plane
            float clipFactor = nearPlaneInterpolationFactor(adjustedNearPlaneDistance, prev, pos);
            ${h(v,o$2`u0 = mix(prevU0, u0, clipFactor); nextU0 = u0;`)}
            pos = mix(prev, pos, clipFactor);
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if (next.z < -nearFar[0]) {
            // Next position in front of near plane
            float clipFactor = nearPlaneInterpolationFactor(adjustedNearPlaneDistance, pos, next);
            ${h(v,o$2`u0 = mix(u0, nextU0, clipFactor); prevU0 = u0;`)}
            pos = mix(pos, next, clipFactor);
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        // Current position visible
        if (prev.z > -nearFar[0]) {
          // Previous position behind near plane
          float clipFactor = nearPlaneInterpolationFactor(adjustedNearPlaneDistance, pos, prev);
          ${h(v,o$2`prevU0 = mix(u0, prevU0, clipFactor);`)}
          prev = mix(pos, prev, clipFactor);
        }

        if (next.z > -nearFar[0]) {
          // Next position behind near plane
          float clipFactor = nearPlaneInterpolationFactor(adjustedNearPlaneDistance, next, pos);
          ${h(v,o$2`nextU0 = mix(nextU0, u0, clipFactor);`)}
          next = mix(next, pos, clipFactor);
        }
      }
    }
  `),ci(i),i.constants.add(`aaWidth`,`float`,1),r$5.constants.add(`aaWidth`,`float`,1),i.main.add(o$2`
    vec3 position = ${d.getTextureAttribute(`position`)};
    float u0 = ${d.getTextureAttribute(`u0`)};
    ${h(m,o$2`
        float prevU0 = ${d.getTextureAttribute(`u0`,-1)};
        float nextU0 = ${d.getTextureAttribute(`u0`,1)};
        ${h(!s,o$2`
            u0 *= metersPerRenderUnit;
            prevU0 *= metersPerRenderUnit;
            nextU0 *= metersPerRenderUnit;
          `)}
      `)}

    // unpack values from vertex type
    float vertexType = abs(lineParameters.y);
    ${h(!D$2,o$2`
      bool isInsideJoin = vertexType > 8.0;
      vertexType -= isInsideJoin ? 8.0 : 0.0;
    `)}
    float lineSide = sign(lineParameters.y);
    bool isStartVertex = vertexType == 2.0 || vertexType == 4.0;
    vec3 prevPosition = ${d.getTextureAttribute(`position`,-1)};
    vec3 nextPosition = ${d.getTextureAttribute(`position`,1)};

    // Check for special value of lineParameters.y which is used by the Renderer when graphics are removed before the
    // VBO is recompacted. If this is the case, then we just project outside of clip space.
    if (lineParameters.y == 0.0) {
      gl_Position = ${t};
    }
    else {
      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);

      bool isJoin = vertexType < 3.0;
  `),I&&i.main.add(o$2`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos.xyz, other.xyz);
if (!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos.xyz) * 0.5;
}`),n.include(Ge$1),p&&i.code.add(o$2`vec2 computePerspectiveInnerJoin(
vec2 leftDirection,
vec2 rightDirection,
float leftLength,
float rightLength,
float previousWidth,
float currentWidth,
float nextWidth,
float lineSide,
bool isStartVertex
) {
vec2 leftNormal = vec2(leftDirection.y, -leftDirection.x) * lineSide;
vec2 rightNormal = vec2(rightDirection.y, -rightDirection.x) * lineSide;
vec2 segmentOffset = (isStartVertex ? rightNormal : leftNormal) * currentWidth;
if (min(leftLength, rightLength) <= EPS) {
return segmentOffset;
}
vec2 leftEdge = leftDirection + leftNormal * ((currentWidth - previousWidth) / leftLength);
vec2 rightEdge = rightDirection + rightNormal * ((nextWidth - currentWidth) / rightLength);
vec2 offset = (rightNormal - leftNormal) * currentWidth;
float determinant = leftEdge.x * rightEdge.y - leftEdge.y * rightEdge.x;
float determinantScale = length(leftEdge) * length(rightEdge);
const float parallelTolerance = EPS * EPS;
if (!(abs(determinant) > parallelTolerance * determinantScale)) {
return segmentOffset;
}
float leftDistance = (offset.x * rightEdge.y - offset.y * rightEdge.x) / determinant;
float rightDistance = (offset.x * leftEdge.y - offset.y * leftEdge.x) / determinant;
if (!(leftDistance >= -leftLength && leftDistance <= 0.0 &&
rightDistance >= 0.0 && rightDistance <= rightLength)) {
return segmentOffset;
}
return leftNormal * currentWidth + leftDistance * leftEdge;
}`),p&&i.code.add(o$2`float perspectiveWidthAtOffset(vec2 offset, vec2 segment, float widthAtOrigin, float widthChange) {
float segmentFraction = dot(offset, segment) / max(dot(segment, segment), EPS * EPS);
return widthAtOrigin + segmentFraction * widthChange;
}`),i.code.add(o$2`
    vec2 computeJoinAndCapDisplacement(
      bool isJoin,
      bool isStartVertex,
      inout vec3 left,
      inout vec3 right,
      float lineSide,
      float lineWidth,
      ${h(p,`vec2 neighborWidths,`)}
      float subdivisionFactor,
      float perspectiveDivisor
    ) {
      float leftLen = length(${h(p,o$2`left.xy`,o$2`left`)});
      float rightLen = length(${h(p,o$2`right.xy`,o$2`right`)});
      left = leftLen > EPS ? left / leftLen : vec3(0.0);
      right = rightLen > EPS ? right / rightLen : vec3(0.0);

      vec3 capDisplacementDir = vec3(0.0);
      vec3 joinDisplacementDir = vec3(0.0);
      float displacementLen = lineWidth;
      float miterDisplacementLen = lineWidth;
      float innerDisplacementLen = lineWidth;
      bool isOutside = false;
      ${h(p,`vec2 innerDisplacement = vec2(0.0);`)}

      if (isJoin) {
        // Determine if the vertex is on the outside or inside of the join.
        isOutside = (left.x * right.y - left.y * right.x) * lineSide > 0.0;

        // Compute the miter join position first.
        ${h(p,o$2`
            vec2 bisector = left.xy + right.xy;
            vec2 segmentDirection = isStartVertex ? right.xy : left.xy;
            vec3 joinDirection = vec3(length(bisector) > EPS ? normalize(bisector) : segmentDirection, 0.0);
            joinDisplacementDir = perpendicular(joinDirection);

            if (leftLen > EPS && rightLen > EPS) {
              float nDotSeg = dot(joinDisplacementDir, left);
              displacementLen /= length(nDotSeg * left.xy - joinDisplacementDir.xy);
              miterDisplacementLen = displacementLen;
            }

            innerDisplacement = computePerspectiveInnerJoin(
              left.xy, right.xy, leftLen, rightLen,
              neighborWidths.x, lineWidth, neighborWidths.y,
              isOutside ? -lineSide : lineSide, isStartVertex
            );
            innerDisplacementLen = length(innerDisplacement);
          `,o$2`
            vec3 joinDirection = normalize(left + right);
            joinDisplacementDir = perpendicular(joinDirection);

            if (leftLen > EPS && rightLen > EPS) {
              float nDotSeg = dot(joinDisplacementDir, left);
              displacementLen /= length(nDotSeg * left - joinDisplacementDir);
              miterDisplacementLen = displacementLen;
              innerDisplacementLen = min(displacementLen, min(leftLen, rightLen) / abs(nDotSeg));

              // Limit displacement of inner vertices.
              if (!isOutside) {
                displacementLen = innerDisplacementLen;
              }
            }
          `)}

        // Compute stretch compensation for feathering.
        ${h(D$2,o$2`
          if (subdivisionFactor > 0.0) {
            vIsInsideJoin = 1;
          }
        `)}
        vSubdivisionFactor = isOutside ? subdivisionFactor : 0.5;

        if (miterDisplacementLen > miterLimit * lineWidth) {
          vec2 leftScreenDir = left.xy;
          vec2 rightScreenDir = right.xy;
          float leftScreenLen = length(leftScreenDir);
          float rightScreenLen = length(rightScreenDir);

          if (leftScreenLen > EPS && rightScreenLen > EPS) {
            leftScreenDir /= leftScreenLen;
            rightScreenDir /= rightScreenLen;

            /**
             * Feathering AA needs special considerations on join triangles because these can get stretched a lot at acute angles.
             * We use the triangle height to determine by how much they get stretched.
             */
            float theta = acos(clamp(dot(leftScreenDir, rightScreenDir), -1.0, 1.0));
            /**
             * The argument of cos here is half the angle of a join triangle.
             * We start with one triangle, and every subdivision adds another triangle.
             */
            float subdividedTriangleHeight = (innerDisplacementLen + lineWidth) * cos(theta / (2.0 + 2.0 * NUM_JOIN_SUBDIVISIONS));
            float bevelTriangleHeight = innerDisplacementLen + lineWidth * cos(theta * 0.5);
            float triangleHeight = NUM_JOIN_SUBDIVISIONS > 0.0 ? subdividedTriangleHeight : bevelTriangleHeight;
            vStretchFactor = noPerspectiveWrite(max(triangleHeight / (2.0 * lineWidth), 1.0), perspectiveDivisor);
          }
        }

        if (isOutside && displacementLen > miterLimit * lineWidth) {
          ${h(t$6.roundJoins,o$2`
              vec3 startDir = perpendicular(leftLen < EPS ? right : left);
              vec3 endDir = perpendicular(rightLen < EPS ? left : right);
              float factor = ${h$3?o$2`min(1.0, subdivisionFactor * ((NUM_JOIN_SUBDIVISIONS + 1.0) / NUM_JOIN_SUBDIVISIONS))`:o$2`subdivisionFactor`};

              float rotationAngle = acos(clamp(dot(startDir.xy, endDir.xy), -1.0, 1.0));
              joinDisplacementDir = rotateZ(startDir, -lineSide * factor * rotationAngle);
            `,o$2`
              /**
               * Convert to bevel join if miterLimit is exceeded.
               * Here vertices with a subdivisionFactor > 0 are either START vertices or
               * an additional END vertex to fix line pattern interpolation.
               * The additional vertex is considered to be the END of the previous segment.
               * However, it is pushed to the position of the START of the next segment,
               * so that the entire bevel join will be part of the first segment, pattern-wise.
               */
              vec3 startDir = perpendicular(leftLen < EPS ? right : left);
              vec3 endDir = perpendicular(rightLen < EPS ? left : right);

              ${h(h$3,o$2`joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? endDir : startDir;`,o$2`joinDisplacementDir = mix(startDir, endDir, subdivisionFactor);`)}
            `)}
          displacementLen = lineWidth;
        }
      } else {
        joinDisplacementDir = perpendicular(isStartVertex ? right : left);
        ${W===0?``:o$2`capDisplacementDir = vec3((isStartVertex ? -right : left).xy, 0.0);`}
      }

      ${h(p,o$2`
        if (isJoin && !isOutside) {
          return innerDisplacement;
        }
      `)}
      return (joinDisplacementDir.xy * lineSide + capDisplacementDir.xy) * displacementLen;
    }
  `),i.main.add(o$2`
      clip(pos, prev, next, ${h(v,o$2`u0, prevU0, nextU0,`)} isStartVertex);

      vec3 clippedPos = pos.xyz;
      vec3 clippedCenter = mix(pos.xyz, isStartVertex ? next.xyz : prev.xyz, 0.5);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);

      vec3 left = (pos.xyz - prev.xyz);
      vec3 right = (next.xyz - pos.xyz);

      float lineSize = getSize(${h(C,`clippedPos`)});
      ${h(h$3&&C,`float patternLineSize = getSize(clippedCenter);`)}
      ${h(h$3&&!C,`float patternLineSize = lineSize;`)}

      ${h(m,o$2`
          ${h(s,o$2`float lineSizeScreen = lineSize * groundMetersToScreenRatio;`,o$2`
              float widthPerInverseDepth = lineSize / (metersPerRenderUnit * screenPixelSizePerDistance);
              float lineSizeScreen = widthPerInverseDepth / max(-clippedPos.z, nearFar[0]);
            `)}
          float lineWidth = lineSizeScreen * pixelRatio + aaWidth;
        `,o$2`
          float lineWidth = lineSize * pixelRatio + aaWidth;
        `)}

      vLineWidth = noPerspectiveWrite(lineWidth, pos.w);
      ${h$3?o$2`vLineSizeInv = noPerspectiveWrite(1.0 / ${m?`lineSize`:`max(lineSize, 1.0)`}, pos.w);`:``}
  `),Pe&&i.main.add(o$2`
      float isEndVertex = float(!isStartVertex);
      vec3 segmentOrigin = mix(pos.xyz, prev.xyz, isEndVertex);
      vec3 segment = mix(right, left, isEndVertex);
      ${g$6?o$2`vec3 segmentEnd = mix(next.xyz, pos.xyz, isEndVertex);`:``}
    `),i.main.add(o$2`
    vIsInsideJoin = ${D$2?o$2`0`:o$2`float(isInsideJoin)`};
    vStretchFactor = 1.0;
    vSubdivisionFactor = 0.0;
    vJoinCenterLineSDFs = vec2(LARGE_HALF_FLOAT);

    ${h(p,o$2`
        vec2 neighborWidths = widthPerInverseDepth / max(vec2(prev.w, next.w), vec2(nearFar[0])) * pixelRatio + aaWidth;
      `)}

    vec2 displacementXY = computeJoinAndCapDisplacement(
      isJoin,
      isStartVertex,
      left,
      right,
      lineSide,
      lineWidth,
      ${h(p,`neighborWidths,`)}
      lineParameters.x,
      pos.w
    );
    ${h(p,o$2`
        // Feathering must use each strip's width at the displaced vertex, not at the original join.
        float leftWidth = perspectiveWidthAtOffset(displacementXY, pos.xy - prev.xy, lineWidth, lineWidth - neighborWidths.x);
        float rightWidth = perspectiveWidthAtOffset(displacementXY, next.xy - pos.xy, lineWidth, neighborWidths.y - lineWidth);
        // Match vJoinCenterLineSDFs: right first, selected when vSubdivisionFactor > 0.5.
        vJoinLineWidths = noPerspectiveWrite(vec2(rightWidth, leftWidth), pos.w);
      `)}
    vec3 segmentDirection = isStartVertex ? right : left;

    /**
     * To prevent z-fighting between layers, we also adjust the z value.
     * We want to ensure that the orientation of the final triangles is the same, regardless of the line width.
     * To do so, the below formula projects the xy displacement onto the original segment direction
     * to find the z-offset necessary so the triangle orientation is independent of the width.
     */
    float displacementZ = dot(displacementXY, segmentDirection.xy) / dot(segmentDirection.xy, segmentDirection.xy) * segmentDirection.z;
    vec3 displacement = vec3(displacementXY, displacementZ);

    float lineDistNorm = noPerspectiveWrite(lineSide, pos.w);

    vLineDistance = lineWidth * lineDistNorm;
    ${b$1?o$2`vLineDistanceNorm = lineDistNorm;`:``}

    pos.xyz += displacement;
  `),i.main.add(o$2`if (isJoin) {
vec2 joinCenterToVertex = displacementXY;
vec2 leftCenterlineDir = left.xy;
vec2 rightCenterlineDir = right.xy;
float leftCenterlineLen = length(leftCenterlineDir);
float rightCenterlineLen = length(rightCenterlineDir);
leftCenterlineDir = leftCenterlineLen > EPS ? leftCenterlineDir / leftCenterlineLen : vec2(1.0, 0.0);
rightCenterlineDir = rightCenterlineLen > EPS ? rightCenterlineDir / rightCenterlineLen : leftCenterlineDir;
vJoinCenterLineSDFs = noPerspectiveWrite(
vec2(
dot(vec2(rightCenterlineDir.y, -rightCenterlineDir.x), joinCenterToVertex),
dot(vec2(leftCenterlineDir.y, -leftCenterlineDir.x), joinCenterToVertex)
),
pos.w
);
}`),g$6&&i.main.add(o$2`vec2 segmentDir = normalize(segment.xy);
vSegmentSDF = noPerspectiveWrite((isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin.xy, segmentDir)), pos.w);
vReverseSegmentSDF = noPerspectiveWrite((isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd.xy, -segmentDir)), pos.w);`),h$3&&(s?i.main.add(o$2`float stippleDistanceToScreenRatio = ${m?`groundMetersToScreenRatio`:`planarDistanceToScreenRatio`};`):i.main.add(o$2`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float stippleDistanceToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),i.main.add(o$2`
      float segmentLengthScreenDouble = length(segment.xy);
      float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
      float discreteStippleDistanceToScreenRatio = discretizeStippleDistanceToScreenRatio(stippleDistanceToScreenRatio);
      float segmentLengthRender = ${h(m,o$2`abs(mix(nextU0 - u0, u0 - prevU0, isEndVertex))`,o$2`length(mix(nextPosition - position, position - prevPosition, isEndVertex))`)};

      ${h(!s||m,o$2`
          float segmentStartRender = ${h(m,o$2`mix(u0, prevU0, isEndVertex)`,o$2`mix(u0, u0 - segmentLengthRender, isEndVertex)`)};
        `)}

      vStipplePatternStretch = stippleDistanceToScreenRatio / discreteStippleDistanceToScreenRatio;
    `),s?i.main.add(o$2`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteStippleDistanceToScreenRatio / stippleDistanceToScreenRatio;
float startPseudoScreen = u0 * discreteStippleDistanceToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):i.main.add(o$2`float startPseudoScreen = segmentStartRender * discreteStippleDistanceToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteStippleDistanceToScreenRatio;`),i.uniforms.add(new l(`stipplePatternPixelSize`,l=>A(l))),i.main.add(o$2`
      float patternLength = patternLineSize * stipplePatternPixelSize;
      vec2 stippleDistanceLimits;

      ${h(m,o$2`
          stippleDistanceLimits = vec2(segmentStartRender, segmentStartRender + segmentLengthRender);
          vStipplePatternStretch = 1.0;

          ${h(ye,o$2`
              // The v-coordinate used in case of an image pattern.
              bool isLeft = lineSide < 0.0;
              vStippleV = isLeft ? 0.0 : 1.0;
            `)}
        `,o$2`
          // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the
          // fragment shader
          stippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
        `)}

      vStippleDistance = mix(stippleDistanceLimits.x, stippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of
      // joins)
      if (segmentLengthScreenDouble >= EPS) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1]
        // at the original vertex positions, and slightly outside of that range at the displaced positions
        vec3 stippleDisplacement = pos.xyz - segmentOrigin;
        float stippleDisplacementFactor = dot(segment.xy, stippleDisplacement.xy) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (stippleDistanceLimits.y - stippleDistanceLimits.x);
      }

      ${h(v,o$2`
          float segmentStartInverseW = 1.0 / mix(pos.w, prev.w, isEndVertex);
          float segmentEndInverseW = 1.0 / mix(next.w, pos.w, isEndVertex);
          vStipplePerspective = noPerspectiveWrite(
            vec4(stippleDistanceLimits, segmentStartInverseW, segmentEndInverseW),
            pos.w
          );
        `)}

      // Cancel out perspective-correct interpolation for screen-space stipple distances.
      vStippleLimitsAndCaps.xy = noPerspectiveWrite(stippleDistanceLimits, pos.w);
      vStippleDistance = noPerspectiveWrite(vStippleDistance, pos.w);

      // Disable stipple distance limits on caps
      vStippleLimitsAndCaps.zw = isJoin ? vec2(0.0) :
               isStartVertex ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    `)),i.main.add(o$2`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;
      pos.z = pos.z * pos.w;

      vColor = getColor();
      vColor.a = noPerspectiveWrite(vColor.a, pos.w);

      ${z&&!s?`pos.z -= EPS * pos.w;`:``}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),n.include(Ni$1,t$6),n.include(He$1),r$5.include(b),r$5.include(N$1),r$5.include(K$1,t$6),r$5.main.add(`discardBySlice(vpos);`),r$5.code.add(o$2`
    float lineFeatheringFactor(float lineWidth, float lineDistance) {
      /**
       * Determine whether we are inside the feathering region or not, under
       * consideration of triangle stretch and the distance to the centerline.
       */
      float stretchFactor = float(vIsInsideJoin) > 0.5 ? noPerspectiveRead(vStretchFactor) : 1.0;
      float featherWidth = 2.0;
      // Keep the filter in render-target pixels, including when its two sides overlap on a subpixel stroke.
      float featherStartDistance = lineWidth - featherWidth / stretchFactor;
      float straightLineWidth = ${p?o$2`noPerspectiveRead(vSubdivisionFactor > 0.5 ? vJoinLineWidths.x : vJoinLineWidths.y)`:`lineWidth`};
      float straightFeatherStartDistance = straightLineWidth - featherWidth;
      float value = abs(lineDistance);
      float feather = (value - featherStartDistance) / (lineWidth - featherStartDistance);
      vec2 joinCenterSDFs = noPerspectiveRead(vJoinCenterLineSDFs);
      float joinCenterDistance = abs(vSubdivisionFactor > 0.5 ? joinCenterSDFs.x : joinCenterSDFs.y);
      float straightFeather = (joinCenterDistance - straightFeatherStartDistance) / featherWidth;
      feather = float(vIsInsideJoin) > 0.5 ? max(feather, straightFeather) : feather;
      float coverage = min(lineWidth - aaWidth, 1.0);
      return clamp(1.0 - feather, 0.0, coverage);
    }
  `),r$5.main.add(o$2`
    float lineWidth = noPerspectiveRead(vLineWidth);
    float lineDistance = noPerspectiveRead(vLineDistance);
    ${h(b$1,o$2`float lineDistanceNorm = noPerspectiveRead(vLineDistanceNorm);`)}
  `),S&&r$5.main.add(o$2`float nominalLineWidth = lineWidth - aaWidth;`),z?r$5.main.add(o$2`vec4 albedo = vec4(1.0, 0.0, 1.0, 1.0);
vec4 finalColor = albedo;`):(g$6&&r$5.main.add(o$2`
        float sdf = noPerspectiveRead(min(vSegmentSDF, vReverseSegmentSDF));
        vec2 fragmentPosition = vec2(min(sdf, 0.0), lineDistance);

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - ${S?`nominalLineWidth`:`lineWidth`}) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < alphaCutoff) {
          discard;
        }
      `),S?r$5.main.add(o$2`vec2 stipplePosition = vec2(
min(getStippleCapDistance(), 0.0) * nominalLineWidth,
lineDistance
);
float stippleRadius = length(stipplePosition);
float stippleCapSDF = (stippleRadius - nominalLineWidth) * 0.5;
float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
float lineCoverage = min(lineFeatheringFactor(lineWidth, lineDistance), capCoverage);
float stippleAlpha = lineCoverage > 0.0 ? min(stippleCoverage, lineCoverage) / lineCoverage : 0.0;`):r$5.main.add(o$2`float stippleAlpha = getStippleAlpha(lineWidth);`),w!==11&&r$5.main.add(o$2`discardByStippleAlpha(stippleAlpha, alphaCutoff);`),r$5.uniforms.add(new r(`intrinsicColor`,l=>l.color)).main.add(o$2`vec4 color = intrinsicColor * vColor;
color.a = noPerspectiveRead(color.a);`),Te&&r$5.uniforms.add(new r(`innerColor`,l=>l.innerColor??l.color),new l(`innerWidth`,(l,T)=>l.innerWidth*T.camera.pixelRatio)).main.add(o$2`float distToInner = abs(lineDistance) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),r$5.main.add(`vec4 albedo = blendStipple(color, stippleAlpha);`),R&&(r$5.uniforms.add(new l(`falloff`,l=>l.falloff)),r$5.main.add(o$2`albedo.a *= pow(max(0.0, 1.0 - abs(lineDistanceNorm)), falloff);`)),r$5.main.add(o$2`albedo.a *= ${S?`lineCoverage`:`lineFeatheringFactor(lineWidth, lineDistance)`};`),Le&&(i.main.add(`vec4 animatedAlphaTimeStamps = ${d.getTextureAttribute(`timeStamps`)};`),n.include(ge$1,t$6),r$5.main.add(`albedo.a *= animatedAlpha();`)),De?(o.add(`vnormal`,`vec3`),i.include(le$2,t$6),i.main.add(`vnormal = getLocalUp(vpos, localOrigin);`),n.include(Be,t$6),r$5.main.add(`vec4 finalColor = evaluateSceneLightingFragment(vpos, vnormal, albedo);`)):r$5.main.add(`vec4 finalColor = albedo;`)),r$5.main.add(o$2`outputColorHighlightOLID(applySlice(finalColor, vpos), albedo.rgb);`),n}var Xt$1=Object.freeze(Object.defineProperty({__proto__:null,build:ze,numRoundJoinSubdivisions:1},Symbol.toStringTag,{value:`Module`}));var Mi=class extends y{constructor(){super(...arguments),this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.shadingEnabled=!1,this.isDecoration=!1,this.worldSized=!1}};var lt=class extends it{constructor(){super(...arguments),this.primitiveVertexCount=1}updateConfiguration(e){super.updateConfiguration(e),this._configuration.pbrMode=this.parameters.shadingEnabled?2:0,this._configuration.draped=e.slot===18,this._configuration.shadingEnabled=this.parameters.shadingEnabled,this._configuration.worldSized=this.parameters.worldSized,this._configuration.emissionSource=+!!this.emissions,this._configuration.hasVVSize=this.parameters.hasVVSize,this._configuration.hasVVColor=this.parameters.hasVVColor,this._configuration.hasVVOpacity=this.parameters.hasVVOpacity,this._configuration.hasOccludees=e.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===8,g$1(e.output)&&this.parameters.shadingEnabled?(this._configuration.receiveShadows=e.shadowMap.enabled,this._configuration.hasShadowHighlights=E$1(this._configuration,e),this._configuration.receiveAmbientOcclusion=e.ssao!=null,this._configuration.receiveGlobalIllumination=e.globalIlluminationEnabled):this._configuration.receiveShadows=this._configuration.hasShadowHighlights=this._configuration.receiveAmbientOcclusion=this._configuration.receiveGlobalIllumination=!1}computeAttachmentOrigin(e,t,r){return Jt$1(e,t,r,this._isClosed(r))}_isClosed(e){return(this.parameters.isClosed??!1)&&e>2}};function Li(i,e,t,r,s,a){ot(s,0,1/0,Q);for(let m of[0,1,2])if(!ft$1(m,Math.min(i[m],e[m])-t,Math.max(i[m],e[m])+t,Q))return null;if(!En(r.frustum[4],Q)||!En(r.frustum[5],Q))return null;let o=Di(i,e,r,ee,k,a);if(o===0)return null;v$2(se,s.origin,i);let n=Z$2(se,a),l=Z$2(s.direction,a),u=Ri(s.direction,a);if(Math.abs(l)>u){let m=-n/l;return m<Q.c0||m>Q.c1?null:(C$1(se,se,s.direction,m),Wi(Z$2(se,ee),Z$2(se,k),o,t*t)?m:null)}if(Math.abs(n)>Ri(se,a))return null;let c=Z$2(se,ee),d=Z$2(se,k),p=Z$2(s.direction,ee),S=Z$2(s.direction,k);return T$2(Q.ray.origin,c,d,0),T$2(Q.ray.direction,p,S,0),!ft$1(0,-t,o+t,Q)||!ft$1(1,-t,t,Q)?null:vs(Q,o,t)}function vs(i,e,t){let r=st$1(i,se);if(Wi(r[0],r[1],e,t*t))return i.c0;T$2(Gt.center,r[0]<0?0:e,0,0),Gt.radius=t;let s=i.ray.direction;if(!Gt.intersectRay(_$2(r,s),Ii))return null;let a=Math.abs(s[0])>Math.abs(s[1])?0:1,o=i.c0+(Ii[a]-r[a])/s[a];return o<=i.c1?o:null}function Fi(i,e,t,r,s){let a=Ui(i,e,t,Bi);if(!Dt(s.broadPhaseFrustum,a,null)||Di(i,e,r,ee,k,bs)===0)return!1;let[o,n,l,u]=jt;return Pe(o,i,ee,k,-t,-t),Pe(n,e,ee,k,t,-t),Pe(l,e,ee,k,t,t),Pe(u,i,ee,k,-t,t),It$1(s,jt,r,Jt)?(C$1(o,i,k,-t),C$1(n,e,k,-t),C$1(l,e,k,t),C$1(u,i,k,t),It$1(s,jt,r,Jt)?!0:Ai(i,-t,ee,k,r,s)||Ai(e,t,ee,k,r,s)):!1}function Ai(i,e,t,r,s,a){let o=Math.abs(e);if(!Dt(a.broadPhaseFrustum,Ui(i,i,o,Bi),null))return!1;He.length=0,P$1(He.pushNew(),i),Pe(He.pushNew(),i,t,r,0,o);for(let[n,l]of _s)Pe(He.pushNew(),i,t,r,n*e,l*o);return It$1(a,He,s,Jt)}function Di(i,e,t,r,s,a){v$2(r,e,i);let o=x$1(r);if(o===0)return 0;y$1(r,r,1/o);let n=t.viewMatrix;aa(ut,i,n),C$2(Ne,n),ra(ct,r,Ne);let l=t.projectionMatrix,u=l[11]*ut[2]+l[15],c=l[11]*ct[2],d=l[0]*(ct[0]*u-ut[0]*c),p=l[5]*(ct[1]*u-ut[1]*c),S=t.fullViewport,m=p*S[3]/(l[0]*S[2]),g=-d*S[2]/(l[5]*S[3]),x=Math.hypot(m,g);if(x===0)return 0;let v=m/x,b=g/x;return T$2(s,v,b,0),R$2(Ne,Ne),ra(s,s,Ne),H$3(a,r,s),Q$3(a)===0?0:(e$1(a,a),H$3(s,a,r),o)}function Ui(i,e,t,r){return e$2(Math.min(i[0],e[0])-t,Math.min(i[1],e[1])-t,Math.min(i[2],e[2])-t,Math.max(i[0],e[0])+t,Math.max(i[1],e[1])+t,Math.max(i[2],e[2])+t,r)}function Ri(i,e){return 16*2**-52*(Math.abs(i[0]*e[0])+Math.abs(i[1]*e[1])+Math.abs(i[2]*e[2]))}function Pe(i,e,t,r,s,a){C$1(i,e,t,s),C$1(i,i,r,a)}function Wi(i,e,t,r){let s=i<0?i:i>t?i-t:0;return s*s+e*e<=r}var ee=o$5();var k=o$5();var bs=o$5();var se=o$5();var ut=o$5();var Ne=t$2();var ct=o$5();var Q=d$1();var Gt=new _$3;var Ii=o$5();var Bi=M$2();var _s=Array.from({length:3},(i,e)=>{let t=(e+1)*Math.PI/3;return e===2?[0,-1]:[Math.sin(t),Math.cos(t)]});var jt=[o$5(),o$5(),o$5(),o$5()];var He=new p$2({allocator:i=>i??o$5()});var Jt=new p$2({allocator:i=>i??o$5()});var pt=class extends fr$1{constructor(i,e){super(i,e,fe$1(Tt())),this.shader=new mr$1(Xt$1,()=>import(`./chunk-rgwyCkQG.js`)),this.ignoreUnused=!0,this.primitiveType=e.wireframe?E$2.LINES:E$2.TRIANGLE_STRIP}_makePipelineState(i,e){let{output:t,hasOccludees:r}=i;return pt$1({blending:oi(t,!1,i.emissionDimmingPass),depthTest:hi(t),depthWrite:ai(i),colorWrite:Te,stencilWrite:r?ei:null,stencilTest:r?e?ii:ri:null,polygonOffset:ti(i)})}initializePipeline(i){if(i.occluder){let{hasOccludees:e}=i;this._occluderPipelineTransparent=pt$1({blending:de$2,polygonOffset:ti(i),depthTest:Qr,depthWrite:null,colorWrite:Te,stencilWrite:null,stencilTest:e?oi$1:null}),this._occluderPipelineOpaque=pt$1({blending:de$2,polygonOffset:ti(i),depthTest:e?Qr:Kr,depthWrite:null,colorWrite:Te,stencilWrite:e?ti$1:null,stencilTest:e?si$1:null}),this._occluderPipelineMaskWrite=pt$1({blending:null,polygonOffset:ti(i),depthTest:Kr,depthWrite:null,colorWrite:null,stencilWrite:e?ei:null,stencilTest:e?ii:null})}return this._occludeePipeline=this._makePipelineState(i,!0),this._makePipelineState(i,!1)}getPipeline(i,e,t){if(t)return this._occludeePipeline;switch(i.occluder){case 11:return this._occluderPipelineTransparent??super.getPipeline(i,e,t);case 10:return this._occluderPipelineOpaque??super.getPipeline(i,e,t);default:i.occluder;case void 0:case null:return this._occluderPipelineMaskWrite??super.getPipeline(i,e,t)}}};pt=g$2([js(`esri.views.3d.webgl-engine.shaders.RibbonLineTechnique`)],pt);var I=class extends i$1{constructor(e){super(),this.spherical=e,this.emissionSource=0,this.pbrMode=0,this.draped=!1,this.shadingEnabled=!1,this.worldSized=!1,this.hasScreenSizePerspective=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVVOpacity=!1,this.hasOccludees=!1,this.occluder=!1,this.receiveShadows=!0,this.hasShadowHighlights=!1,this.receiveAmbientOcclusion=!0,this.receiveGlobalIllumination=!0,this.textureCoordinateType=0,this.hasVVInstancing=!1,this.hasSliceTranslatedView=!0,this.overlayEnabled=!1,this.snowCover=!1,this.renderOccluded=!1,this.useCustomDTRExponentForWater=!1,this.hasColorTexture=!1,this.useFillLights=!1}get lineWidthRequiresPosition(){return this.hasScreenSizePerspective||this.worldSized&&!this.draped}};g$2([f$1({count:8})],I.prototype,`emissionSource`,void 0),g$2([f$1({count:8})],I.prototype,`pbrMode`,void 0),g$2([f$1()],I.prototype,`draped`,void 0),g$2([f$1()],I.prototype,`shadingEnabled`,void 0),g$2([f$1()],I.prototype,`worldSized`,void 0),g$2([f$1()],I.prototype,`hasScreenSizePerspective`,void 0),g$2([f$1()],I.prototype,`hasVVSize`,void 0),g$2([f$1()],I.prototype,`hasVVColor`,void 0),g$2([f$1()],I.prototype,`hasVVOpacity`,void 0),g$2([f$1()],I.prototype,`hasOccludees`,void 0),g$2([f$1()],I.prototype,`occluder`,void 0),g$2([f$1()],I.prototype,`receiveShadows`,void 0),g$2([f$1()],I.prototype,`hasShadowHighlights`,void 0),g$2([f$1()],I.prototype,`receiveAmbientOcclusion`,void 0),g$2([f$1()],I.prototype,`receiveGlobalIllumination`,void 0);var z=class extends I{constructor(){super(...arguments),this.capType=0,this.animation=2,this.polygonOffsetIndex=0,this.numJoinSubdivisions=1,this.polygonOffset=0,this.writeDepth=!1,this.transparent=!1,this.enableOITOffset=!0,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.wireframe=!1,this.imagePattern=!1,this.useFlatJoinVarying=!1}get hasAnimation(){return this.animation!==0}get usePerspectiveCorrectStipple(){return this.worldSized&&!this.draped}};g$2([f$1({count:3})],z.prototype,`capType`,void 0),g$2([f$1({count:4})],z.prototype,`animation`,void 0),g$2([f$1({count:16})],z.prototype,`polygonOffsetIndex`,void 0),g$2([f$1({count:8})],z.prototype,`numJoinSubdivisions`,void 0),g$2([f$1({count:5})],z.prototype,`polygonOffset`,void 0),g$2([f$1()],z.prototype,`writeDepth`,void 0),g$2([f$1()],z.prototype,`transparent`,void 0),g$2([f$1()],z.prototype,`enableOITOffset`,void 0),g$2([f$1()],z.prototype,`stippleEnabled`,void 0),g$2([f$1()],z.prototype,`stippleOffColorEnabled`,void 0),g$2([f$1()],z.prototype,`stipplePreferContinuous`,void 0),g$2([f$1()],z.prototype,`roundJoins`,void 0),g$2([f$1()],z.prototype,`applyMarkerOffset`,void 0),g$2([f$1()],z.prototype,`falloffEnabled`,void 0),g$2([f$1()],z.prototype,`innerColorEnabled`,void 0),g$2([f$1()],z.prototype,`wireframe`,void 0),g$2([f$1()],z.prototype,`imagePattern`,void 0),g$2([f$1()],z.prototype,`useFlatJoinVarying`,void 0);var Ni=class extends lt{constructor(e,t){super(e,ir),this.produces=/* @__PURE__ */ new Map([[2,r=>V$4(r)||g$1(r)&&this.parameters.renderOccluded===8],[3,r=>Q$1(r)],[10,r=>J$1(r)&&this.parameters.renderOccluded===8],[11,r=>J$1(r)&&this.parameters.renderOccluded===8],[4,r=>g$1(r)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[8,r=>g$1(r)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[18,r=>Y$2(r)]]),this._configuration=new z(t.state.isGlobal),this._isAssumedMetalDriver=t.stage.renderer.renderContext.rctx.isAssumedMetalDriver}updateConfiguration(e){super.updateConfiguration(e),this._configuration.useFlatJoinVarying=!this._isAssumedMetalDriver;let t=this.parameters.stipplePattern!=null&&this.parameters.stippleTexture!=null&&e.output!==10,r=t&&this.parameters.isImagePattern()&&this._configuration.draped,s=this.parameters.usesWorldSizedWidth(r);this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.stippleEnabled=t,this._configuration.stippleOffColorEnabled=t&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=t&&this.parameters.stipplePreferContinuous,this._configuration.numJoinSubdivisions=$i(this.parameters.join,t),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join===`round`,this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&Ps(this.parameters.markerParameters),this._configuration.polygonOffsetIndex=this.parameters.polygonOffsetIndex,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.wireframe=this.parameters.wireframe,this._configuration.animation=this.parameters.animation,this._configuration.emissionSource=+!!this.emissions,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective&&!s,this._configuration.worldSized=s,this._configuration.imagePattern=r}get visible(){return this.parameters.color[3]>=.003913894324853229||this.parameters.stipplePattern!=null&&(this.parameters.stippleOffColor?.[3]??0)>.003913894324853229}get emissions(){return this.parameters.emissiveStrength>0?this.parameters.renderOccluded===8?1:2:0}setParameters(e,t){e.animation=this.parameters.animation,super.setParameters(e,t)}intersectRayDraped({attributes:e},t,r,s,a,o,n){if(!t.options.selectionMode)return;let l=this._getLineSize(e,!0),u=r[0],c=r[1],d=Hi(l,o,n,this.parameters.usesWorldSizedWidth()),p=Number.MAX_VALUE,S=0;for(let m of ki(me,ke,this.parameters,e)){let g=u-me[0],x=c-me[1],v=ke[0]-me[0],b=ke[1]-me[1],P=v*g+b*x,w=v*v+b*b,_=h$2(P/w,0,1),O=v*_-g,D=b*_-x,A=O*O+D*D;A<p&&(p=A,S=m)}p<d*d&&s(a.distance,a.renderDistance,a.normal,S)}intersectRay(e,t,r,s,a,o){let{options:n,camera:l}=r;if(!n.selectionMode||!e.visible||!l)return;if(!T$4(t)){g$3.getLogger(`esri.views.3d.webgl-engine.materials.RibbonLineMaterial`).error(`intersection assumes a translation-only matrix`);return}let u=this._getLineSize(e.attributes);this.parameters.worldSized?this._intersectRayWithWorldSizedLine(e,t,r,u,o):this._intersectRayWithScreenSizedLine(e,t,r,u,o)}_intersectRayWithScreenSizedLine(e,t,r,s,a){let{camera:o}=r,n=e.attributes,l=n.get(`position`).data,u=Xt;g$4(u,r.point);let c=s*o.pixelRatio,d=dt*o.pixelRatio,p=c/2+d;T$2(je[0],u[0]-p,u[1]+p,0),T$2(je[1],u[0]+p,u[1]+p,0),T$2(je[2],u[0]+p,u[1]-p,0),T$2(je[3],u[0]-p,u[1]-p,0);for(let g=0;g<4;g++)if(!o.unprojectFromRenderScreen(je[g],ce[g]))return;W$1(o.eye,ce[0],ce[1],$t),W$1(o.eye,ce[1],ce[2],Qt),W$1(o.eye,ce[2],ce[3],er),W$1(o.eye,ce[3],ce[0],tr);let S=Number.MAX_VALUE,m=0;for(let g of this._forEachTransformedLineSegment(T,M,l,t,we(this.parameters,n))){if(p$3($t,T)<0&&p$3($t,M)<0||p$3(Qt,T)<0&&p$3(Qt,M)<0||p$3(er,T)<0&&p$3(er,M)<0||p$3(tr,T)<0&&p$3(tr,M)<0)continue;let x=o.projectToRenderScreen(T,qe),v=o.projectToRenderScreen(M,Ge);if(x==null||v==null)continue;if(x[2]<0&&v[2]>0){v$2(ae,T,M);let w=o.frustum,_=-p$3(w[4],T)/Z$2(ae,w[4]);if(y$1(ae,ae,_),j$2(T,T,ae),!o.projectToRenderScreen(T,x))continue}else if(x[2]>0&&v[2]<0){v$2(ae,M,T);let w=o.frustum,_=-p$3(w[4],M)/Z$2(ae,w[4]);if(y$1(ae,ae,_),j$2(M,M,ae),!o.projectToRenderScreen(M,v))continue}else if(x[2]<0&&v[2]<0)continue;x[2]=0,v[2]=0;let b=Q$4(x,v,Zt),P=U$1(b,u);if(!(P>=S)){if(this.parameters.screenSizePerspective){let w=this.computeScreenSizePerspectiveWidth(b,T,M,u,o,s,d);if(P>=w*w)continue}S=P,P$1(Yi,T),P$1(Xi,M),m=g}}if(S<p*p){let{rayBegin:g,rayEnd:x}=r,v=Number.MAX_VALUE;if($$1(Q$4(Yi,Xi,Zt),Q$4(g,x,Kt),Z)){v$2(Z,Z,g);let b=x$1(Z);y$1(Z,Z,1/b),v=b/D$1(g,x)}a(v,v,Z,m)}}_intersectRayWithWorldSizedLine(e,t,r,s,a){let{camera:o,ray:n,metersPerRenderUnit:l}=r,u=e.attributes,c=u.get(`position`).data,d=s/(2*l),p=1/0,S=0;for(let m of this._forEachTransformedLineSegment(T,M,c,t,we(this.parameters,u))){let g=Li(T,M,d,o,n,Zi);if(g!=null&&g<p&&(p=g,S=m,P$1(Z,Zi),g===0))break}p<1/0&&a(p,p,Z,S)}intersectScreenPolygon(e,t,r,s){let{options:a}=r;if(!a.selectionMode||!e.visible)return null;if(!T$4(t))return g$3.getLogger(`esri.views.3d.webgl-engine.materials.RibbonLineMaterial`).error(`intersection assumes a translation-only matrix`),null;let o=this._getLineSize(e.attributes);return this.parameters.worldSized?this._intersectWorldSizedPolygon(e,t,r,s,o):this._intersectScreenSizedPolygon(e,t,r,s,o)}_intersectScreenSizedPolygon(e,t,r,s,a){let{camera:o,screenPolygonPrimitiveProcessor:n}=r,l=e.attributes,u=l.get(`position`).data,c=dt,d=c*o.pixelRatio,p=new se$3(4);for(let S of this._forEachTransformedLineSegment(T,M,u,t,we(this.parameters,l)))for(let[m,g]of n.processLineSegment(Ki,T,M)){if(!pr$1(o,m,g,qe,Ge))continue;let x=Q$4(qe,Ge,Zt),v=a/2+c;this.parameters.screenSizePerspective&&(K$3(Xt,qe,Ge,.5),v=Math.max(v,this.computeScreenSizePerspectiveWidth(x,m,g,Xt,o,a,d)/o.pixelRatio)),o.renderToScreen(qe,ji),o.renderToScreen(Ge,Ji),dr$1(s,ji,Ji,v)&&(W$2(Q$4(m,g,Kt),o.eye,ue),p.updateIfCloserFromValues(D$1(o.eye,ue),S,ue,null))}return p}_intersectWorldSizedPolygon(e,t,r,s,a){let{camera:o,screenPolygonPrimitiveProcessor:n,metersPerRenderUnit:l}=r,{attributes:u}=e,c=u.get(`position`).data,d=a/(2*l),p=new se$3(4);for(let S of this._forEachTransformedLineSegment(T,M,c,t,we(this.parameters,u)))for(let[m,g]of n.processLineSegment(Ki,T,M)){W$2(Q$4(m,g,Kt),o.eye,ue);let x=D$1(o.eye,ue);p.valid&&x>=p.distance||Fi(m,g,d,o,s)&&p.updateIfCloserFromValues(x,S,ue,null)}return p}intersectScreenPolygonDraped({attributes:e},t,r,s,a,o){if(!r.options.selectionMode)return null;let n=Hi(this._getLineSize(e,!0),a,o,this.parameters.usesWorldSizedWidth());for(let l of ki(me,ke,this.parameters,e,t))if(dr$1(s,me,ke,n))return new ut$1(l);return null}createBufferWriter(){return new sr(Tt(this.parameters),Se$1(this.parameters),this.parameters,this._isAssumedMetalDriver)}createGLMaterial(e){return new rr(e)}validateParameters(e){e.join!==`miter`&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}update(e){return this.parameters.hasAnimation?(this.setParameters({timeElapsed:e$3(e.time)},!1),e.dt!==0):!1}computeScreenSizePerspectiveWidth(e,t,r,s,a,o,n){let l=X$2(e,s);K$3(ue,t,r,l),aa(Gi,ue,a.viewMatrix);let u=x$1(Gi),c=this.computeCameraAbsCosAngle(ue,a,this._configuration.spherical);return qi.update(c,u,this.parameters.screenSizePerspective,this.parameters.screenSizePerspectiveMinPixelReferenceSize),qi.apply(o)*a.pixelRatio/2+n}computeCameraAbsCosAngle(e,t,r){return r?e$1(Z,e):T$2(Z,0,0,1),v$2(ht,e,t.eye),e$1(ht,ht),Math.abs(Z$2(Z,ht))}_getLineSize(e,t=!1){let r=this.parameters.width;if(this.parameters.vvSize){let s=e.get(`sizeFeatureAttribute`).data[0];Number.isNaN(s)?t&&(r*=this.parameters.vvSize.fallback[0]):r*=h$2(this.parameters.vvSize.offset[0]+s*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else e.has(`size`)&&(r*=e.get(`size`).data[0]);return r}*_forEachTransformedLineSegment(e,t,r,s,a){let o=a?r.length-2:r.length-5;for(let n=0;n<o;n+=3){e[0]=r[n]+s[12],e[1]=r[n+1]+s[13],e[2]=r[n+2]+s[14];let l=(n+3)%r.length;t[0]=r[l]+s[12],t[1]=r[l+1]+s[13],t[2]=r[l+2]+s[14],yield n/3}}};var rr=class extends yt{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures?.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){let{stipplePattern:t}=this._material.parameters;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.getTechnique(pt,e)}};var ir=class extends zo{constructor(){super(...arguments),this._width=0,this.color=U,this.join=`miter`,this.cap=0,this.miterLimit=5,this.shadingEnabled=!1,this.writeDepth=!0,this.polygonOffset=0,this.polygonOffsetIndex=0,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1,this.timeElapsed=0,this.animation=0,this.animationSpeed=1,this.trailLength=1,this.startTime=0,this.endTime=1/0,this.worldSized=!1}get width(){return this.isImagePattern()?this.stipplePattern.width:this._width}set width(e){this._width=e}get transparent(){return this.color[3]<1||this.hasAnimation||this.stipplePattern!=null&&(this.stippleOffColor?.[3]??0)<1}get hasAnimation(){return this.animation!==0}usesWorldSizedWidth(e=this.isImagePattern()){return this.worldSized||e}isImagePattern(){return c(this.stipplePattern)&&this.stippleTexture!=null}};var sr=class{constructor(e,t,r,s){this.layout=e,this.textureBufferLayout=t,this._parameters=r,this._isAssumedMetalDriver=s,this.numJoinSubdivisions=$i(this._parameters.join,this._parameters.stipplePattern!=null)}_isClosed(e){return we(this._parameters,e)}allocate(e){return this.layout.createBuffer(e)}elementCountTextureBuffer(e){return e.get(`position`).data.length/3+(this._isClosed(e)?3:2)}elementCount(e){let t=e.get(`position`).indices.length/2+1,r=this._isClosed(e),s=r?2:4,a=+!r,o=r?t:t-1,n=this.numJoinSubdivisions*2+(this._isAssumedMetalDriver?8:4);return s+=(o-a)*n,s+=2,this._parameters.wireframe&&(s=2+(s-2)*4),s}write(e,t,r,s,a,o){o!=null&&this._writeTextureBuffer(e,r,o),s!=null&&this._writeVertexBuffer(e,r,s,a)}_writeTextureBuffer(e,t,r){let s=t.get(`position`),a=s.data.length/3,o=this._isClosed(t),{buffer:n,offset:l}=r,u=n.getField(`position`,k$1),c=n.getField(`u0`,$$2),d=n.getField(`sizeFeatureAttribute`,$$2),p=n.getField(`size`,$$2),S=n.getField(`colorFeatureAttribute`,$$2),m=n.getField(`color`,Ae$1),g=n.getField(`olidColor`,Ae$1),x=n.getField(`timeStamps`,q$2),v=n.getField(`opacityFeatureAttribute`,$$2),b=t.get(`sizeFeatureAttribute`)?.data,P=t.get(`size`)?.data,w$1=t.get(`colorFeatureAttribute`)?.data,_=t.get(`color`)?.data,O=t.get(`opacityFeatureAttribute`)?.data,D=t.get(`distanceToStart`)?.data,A=t.get(`timeStamps`);w(u!==null,`Expected valid position field in texture buffer`),w(c!==null,`Expected valid u0 field in texture buffer`);let J=0;for(let C=0;C<a;++C){this._getTransformedPosition(Oe,s.data,C,e),C>0&&(D==null?J+=D$1(ft,Oe):J=D[C]??J);let E=l+C+1;if(u.setVec(E,Oe),c.set(E,J),P$1(ft,Oe),d&&d.set(E,b?.length===1?b[0]:b?.[C]??0),p&&p.set(E,P?.length===1?P[0]:P?.[C]??1),S&&S.set(E,w$1?.length===1?w$1[0]:w$1?.[C]??0),m)if(_!=null){let R=Math.min(C*4,_.length-4);m.setValues(E,_[R],_[R+1],_[R+2],_[R+3])}else m.setValues(E,1,1,1,1);v&&v.set(E,O?.length===1?O[0]:O?.[C]??0)}if(x!=null&&A!=null){w(A.size===4);let C=A.data;for(let E=0;E<a;++E){let R=E*4,j=l+E+1;x.set(j,0,C[R]),x.set(j,1,C[R+1]),x.set(j,2,C[R+2]),x.set(j,3,C[R+3])}}if(o){let C=l,E=l+1,R=l+2,j=l+a,ye=j+1,ys=j+2;n.copyItem(j,C),n.copyItem(E,ye),n.copyItem(R,ys),u.getVec(j,ft),u.getVec(E,Oe);let xs=D?.[a]??J+D$1(ft,Oe);c.set(ye,xs)}else{let C=l,E=l+1,R=l+a,j=R+1;n.copyItem(E,C),n.copyItem(R,j)}let U=t.get(`olidColor`);po()&&U!=null&&g!=null&&Bt(U,4,g,l)}_writeVertexBuffer(e,t,r,s){let{buffer:a,offset:o}=r,{layout:n}=this,l=t.get(`position`),u=l.indices,c=l.data.length/3,d=this._isClosed(t),p=c+(d?3:2);u&&u.length!==2*(c-1)&&console.warn(`RibbonLineMaterial does not support indices`);let S=a.getField(`textureElementIndex`,ne$1);w(S!=null,`Missing texture buffer index field`),w(s!=null,`Using a texture layout, but the texture range for this instance was not provided`);let m=s.from;w(s.numElements===p,`Expected number of elements in TextureBuffer to equal number of points`);let g=new Float32Array(a.buffer),x=new Float16Array(a.buffer),v=new Uint32Array(a.buffer),b=n.stride/4,P=o*b,w$2=P,_=g.BYTES_PER_ELEMENT/x.BYTES_PER_ELEMENT,O=(U,C,E,R=!1)=>{let j=E+1;v[P]=m+j,P++;let ye=P*_;x[ye++]=U,x[ye++]=C+(R?Math.sign(C)*8:0),P=Math.ceil(ye/_)};P+=b;let D=0,A=0;d?(D=0,A=c):(O(1,-4,0),O(1,4,0),D=1,A=c-1);let J=this._isAssumedMetalDriver;for(let U=D;U<A;U++){O(0,-1,U),O(0,1,U),J&&(O(0,-1,U,!0),O(0,1,U,!0));let C=this.numJoinSubdivisions;for(let E=0;E<C;++E){let R=(E+1)/(C+1);O(R,-1,U,J),O(R,1,U,J)}O(1,-2,U,J),O(1,2,U,J),J&&(O(1,-2,U),O(1,2,U))}d?(O(0,-1,A),O(0,1,A)):(O(0,-5,A),O(0,5,A)),Yt(g,w$2+b,g,w$2,b),P=Yt(g,P-b,g,P,b),this._parameters.wireframe&&this._addWireframeVertices(a,w$2,P,b)}_getTransformedPosition(e,t,r,s){let a=r*3;T$2(e,t[a+0],t[a+1],t[a+2]),s&&aa(e,e,s)}_addWireframeVertices(e,t,r,s){let a=new Uint8Array(e.buffer,r*Float32Array.BYTES_PER_ELEMENT),o=new Uint8Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,(r-t)*Float32Array.BYTES_PER_ELEMENT),n=s*Float32Array.BYTES_PER_ELEMENT,l=0,u=c=>l=Yt(o,c,a,l,n);for(let c=0;c<=o.length-4*n;c+=n*2)u(c),u(c+2*n),u(c+1*n),u(c+2*n),u(c+1*n),u(c+3*n)}};function Yt(i,e,t,r,s){for(let a=0;a<s;a++)t[r++]=i[e++];return r}function we(i,e){return i.isClosed?e.get(`position`).indices.length>2:!1}function Hi(i,e,t,r){return r?i/(2*t)+dt*e:(i/2+dt)*e}function*ki(i,e,t,r,s){let a=r.get(`position`).data,o=we(t,r)?a.length-2:a.length-5,n=s?.[0]??0,l=s?.[1]??0;v$1(i,a[0]+n,a[1]+l);for(let u=3;u<o+3;u+=3){let c=u%a.length;v$1(e,a[c]+n,a[c+1]+l),yield u/3,g$4(i,e)}}function Ps(i){return i.anchor===1&&i.hideOnShortSegments&&i.placement===`begin-end`&&i.worldSpace}function $i(i,e){let t=+!!e;switch(i){case`miter`:case`bevel`:return t;case`round`:return 1+t}}var qi=new s;var T=o$5();var M=o$5();var me=o$4();var ke=o$4();var ue=o$5();var Gi=o$5();var ht=o$5();var ae=o$5();var Z=o$5();var Xt=o$5();var qe=M$3();var Ge=M$3();var ji=R$3();var Ji=R$3();var Yi=o$5();var Xi=o$5();var Zi=o$5();var Zt=x$3();var Kt=x$3();var ft=o$5();var Oe=o$5();var je=[M$3(),M$3(),M$3(),M$3()];var ce=[o$5(),o$5(),o$5(),o$5()];var $t=G$4();var Qt=G$4();var er=G$4();var tr=G$4();var dt=4;var Ki=[o$5(),o$5()];var Os=()=>g$3.getLogger(`esri.views.3d.layers.graphics.featureExpressionInfoUtils`);function Qi(i){return{cachedResult:i.cachedResult,arcade:i.arcade?{func:i.arcade.func,context:i.arcade.modules.arcadeUtils.createExecContext(null,{sr:i.arcade.context.spatialReference}),modules:i.arcade.modules}:null}}function eo(i,e,t,r){return M$4(this,null,function*(){let s=i?.expression;if(typeof s!=`string`)return null;let a=ws(s);if(a!=null)return{cachedResult:a};let o=yield t$3();M$5(t);let n=o.arcadeUtils,l=n.createSyntaxTree(s);if(!l)return null;if(n.dependsOnView(l))return r?.error(`Expressions containing '$view' are not supported on ElevationInfo`),{cachedResult:0};let u=n.createFunction(l);return u?{arcade:{modules:o,func:u,context:n.createExecContext(null,{sr:e})}}:null})}function es(i,e,t){return i.arcadeUtils.arcadeFeature.createFromGraphicLikeObject(i.arcadeUtils.createArcadeGeometryFromDehydratedGeometry(e.geometry),e.attributes,t,null)}function ts(i,e){if(i!=null&&!is(i)){if(!e||!i.arcade){Os().errorOncePerTick(`Arcade support required but not provided`);return}i.arcade.modules.arcadeUtils.updateExecContext(i.arcade.context,e)}}function rs(i){if(i!=null){if(is(i))return i.cachedResult;let e=i.arcade,t=e?.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof t!=`number`&&(i.cachedResult=0,t=0),t}return 0}function to(i,e=!1){let t=i?.featureExpressionInfo,r=t?.expression;return!e&&r!==`0`&&(t=null),t??null}var ro={cachedResult:0};function is(i){return i.cachedResult!=null}function ws(i){return i===`0`?0:null}var ss=class i{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit=`meters`,this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.mode=null,this.centerInElevationSR=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=u$2(e)}get requiresSampledElevationInfo(){return this.mode!==`absolute-height`}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit=`meters`}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){let r=this.calculateOffsetRenderUnits(t);return this.featureExpressionInfoContext==null?e+r:r}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset,r=this.featureExpressionInfoContext;return r!=null&&(t+=rs(r)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=i$3(e.unit)?e.unit:`meters`,this.offsetElevationInfoUnits=e.offset??0}setFeatureExpressionInfoContext(e){this._featureExpressionInfoContext=e}updateFeatureExpressionInfoContextForGraphic(e,t,r){e.arcade?(this._featureExpressionInfoContext=Qi(e),this.updateFeatureExpressionFeature(t,r)):this._featureExpressionInfoContext=e}updateFeatureExpressionFeature(e,t){let r=this.featureExpressionInfoContext;r?.arcade&&(r.cachedResult=void 0,ts(this._featureExpressionInfoContext,e.geometry?es(r.arcade.modules,e,t):null))}static fromElevationInfo(e){let t=new i;return e!=null&&t.setFromElevationInfo(e),t}};function Je(i,e){return i.size===e?new ar(i):null}var ar=class{constructor(e){this._attribute=e}get count(){return this._attribute.indices.length}get(e,t=0){let{data:r,indices:s,stride:a}=this._attribute;return r[s[e]*a+t]}getVec(e,t){let{data:r,indices:s,size:a,stride:o}=this._attribute,n=s[e]*o;for(let l=0;l<a;l++)t[l]=r[n+l];return t}};function or(i,e){return mt(i,e,1,Je)}function nr(i,e){return mt(i,e,2,Je)}function Ye(i,e){return mt(i,e,3,Je)}function lr(i,e){return mt(i,e,4,Je)}function mt(i,e,t,r){if(i.type===1){let{vertex:a}=i.buffers,o=a.layout.fields.get(e);return o==null||o.constructor.ElementCount!==t?null:a.getField(e,o.constructor)}let s=i.attributes.get(e);return s==null?null:r(s,t)}var gt=class extends it{constructor(){super(...arguments),this.primitiveVertexCount=1}computeAttachmentOrigin(e,t,r){return Yt$2(e,t,r)}};var V=class extends i$1{constructor(e,t){super(),this.spherical=e,this.polygonOffset=0,this.enableOITOffset=!1,this.screenCenterOffsetUnitsEnabled=!1,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.occludedFragmentFade=!1,this.hasOcclusionTexture=!1,this.hasFocusAreaStyle=!1,this.hasVertexColor=!0,this.hasVertexSize=!0,this.hasVertexRotation=!0,this.hasVertexUVi=!0,this.hasVertexCenterOffset=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.hasVVInstancing=!1,this.snowCover=!1,this.renderOccluded=!1,this.transparentOccluded=t}};g$2([f$1()],V.prototype,`transparentOccluded`,void 0),g$2([f$1({count:5})],V.prototype,`polygonOffset`,void 0),g$2([f$1()],V.prototype,`enableOITOffset`,void 0),g$2([f$1()],V.prototype,`screenCenterOffsetUnitsEnabled`,void 0),g$2([f$1()],V.prototype,`signedDistanceFieldEnabled`,void 0),g$2([f$1()],V.prototype,`sampleSignedDistanceFieldTexelCenter`,void 0),g$2([f$1()],V.prototype,`hasVVSize`,void 0),g$2([f$1()],V.prototype,`hasVVColor`,void 0),g$2([f$1()],V.prototype,`hasVerticalOffset`,void 0),g$2([f$1()],V.prototype,`hasScreenSizePerspective`,void 0),g$2([f$1()],V.prototype,`hasRotation`,void 0),g$2([f$1()],V.prototype,`debugDrawLabelBorder`,void 0),g$2([f$1()],V.prototype,`depthTestEnabled`,void 0),g$2([f$1()],V.prototype,`pixelSnappingEnabled`,void 0),g$2([f$1()],V.prototype,`draped`,void 0),g$2([f$1()],V.prototype,`occludedFragmentFade`,void 0),g$2([f$1()],V.prototype,`hasOcclusionTexture`,void 0),g$2([f$1()],V.prototype,`hasFocusAreaStyle`,void 0),g$2([f$1()],V.prototype,`hasVertexColor`,void 0),g$2([f$1()],V.prototype,`hasVertexSize`,void 0),g$2([f$1()],V.prototype,`hasVertexRotation`,void 0),g$2([f$1()],V.prototype,`hasVertexUVi`,void 0),g$2([f$1()],V.prototype,`hasVertexCenterOffset`,void 0);var as=class extends gt{constructor(e,t,r=!1){super(e,gr),this.produces=/* @__PURE__ */ new Map([[12,s=>M$1(s)&&!this.parameters.drawAsLabel&&!this._configuration.transparentOccluded],[13,s=>M$1(s)&&!this.parameters.drawAsLabel&&this._configuration.transparentOccluded],[14,s=>M$1(s)&&this.parameters.drawAsLabel],[18,s=>this.parameters.draped&&M$1(s)]]),this._visible=!0,this._configuration=new V(t,r)}updateConfiguration(e){super.updateConfiguration(e);let{parameters:t,_configuration:r}=this,s=t.draped;r.enableOITOffset=e.enableOITOffset,r.hasSlicePlane=this.parameters.hasSlicePlane,r.hasVerticalOffset=!!this.parameters.verticalOffset,r.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,r.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits===`screen`,r.polygonOffset=this.parameters.polygonOffset,r.draped=s,r.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,r.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,r.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,r.hasRotation=this.parameters.hasRotation,r.hasVVSize=!!this.parameters.vvSize,r.hasVVColor=!!this.parameters.vvColor,r.occludedFragmentFade=!s&&!!this.parameters.occludedFragmentOpacity,r.hasFocusAreaStyle=this.parameters.focusAreaStyle!=null,r.depthTestEnabled=this.parameters.depthEnabled,r.hasVertexColor=this.parameters.hasVertexColor,r.hasVertexSize=this.parameters.hasVertexSize,r.hasVertexRotation=this.parameters.hasVertexRotation,r.hasVertexUVi=this.parameters.hasVertexUVi,r.hasVertexCenterOffset=this.parameters.hasVertexCenterOffset,g$1(e.output)&&(r.debugDrawLabelBorder=!!vo.LABELS_SHOW_BORDER),r.hasOcclusionTexture=!t.drawAsLabel&&r.transparentOccluded&&K$2(e.output)}intersectRay(e,t,r,s,a,o){let{options:{selectionMode:n,hud:l,excludeLabels:u},point:c,camera:d}=r,{parameters:p}=this;if(n&&l&&(!u||!p.isLabel)&&e.visible&&c&&d){for(let{renderScreenPosition:S,screenSize:m,pixelRatioTolerance:g,halfOutlineSize:x,rotationAngle:v,anchor:b,centerView:P}of this._forEachScreenSpaceHUDInstance(ps,e,t,d))if(ns(c,S[0],S[1],m,g,x,v,p,b)){let w=r.ray;if(St[0]=c[0],St[1]=c[1],St[2]=S[2],d.unprojectFromRenderScreen(St,L)){let _=o$5();P$1(_,w.direction);let O=1/x$1(_);y$1(_,_,O);let D=D$1(w.origin,L)*O,A=o$5();aa(A,P,d.inverseViewMatrix),o(D,D,_,-1,A)}}}}*_forEachScreenSpaceHUDInstance(e,t,r,s){let{parameters:a}=this,o=Ye(t,`position`),n=nr(t,`size`),l=Ye(t,`normal`),u=or(t,`rotation`),c=Ye(t,`centerOffset`),d=lr(t,`featureAttribute`),p=a.size,S=C$2(us,r),m=a.centerOffsetUnits===`screen`;for(let g=0;g<o.count;g++){let{scaleX:x,scaleY:v}=ds(d?.getVec(g,cs)??null,a,s.pixelRatio);if(o.getVec(g,L),aa(L,L,r),aa(L,L,s.viewMatrix),c?c.getVec(g,G):T$2(G,0,0,0),!m&&(L[0]+=G[0],L[1]+=G[1],G[2]!==0)){let _=G[2];e$1(G,L),v$2(L,L,y$1(G,G,_))}l.getVec(g,ge),ra(ge,ge,S);let{normal:b,cosAngle:P}=os(ge,s,fs),w=ms(a,L,P,s,ur);if(C$1(L,L,b,w),s.applyProjection(L,q),q[0]>-1){m&&(G[0]||G[1])&&(q[0]+=G[0]*s.pixelRatio,G[1]!==0&&(q[1]+=ur.alignmentEvaluator.apply(G[1])*s.pixelRatio),s.unapplyProjection(q,L)),q[0]+=a.screenOffset[0]*s.pixelRatio,q[1]+=a.screenOffset[1]*s.pixelRatio,q[0]=Math.floor(q[0]),q[1]=Math.floor(q[1]),F[0]=p[0],F[1]=p[1],n!=null&&(F[0]*=n.get(g,0),F[1]*=n.get(g,1)),ur.evaluator.applyVec2(F,F);let _=0;a.textureIsSignedDistanceField&&(_=Math.min(a.outlineSize,.5*F[0])*s.pixelRatio/2),F[0]*=x,F[1]*=v,P$1(e.centerView,L),T$2(e.renderScreenPosition,q[0],q[1],q[2]),g$4(e.screenSize,F),e.pixelRatioTolerance=Cs*s.pixelRatio,e.halfOutlineSize=_,e.rotationAngle=a.rotation+(u?.get(g)??0),e.anchor=ye(a),yield e}}}*_forEachDrapedHUDInstance(e,t,r){let s=Ye(t,`position`),a=nr(t,`size`),o=or(t,`rotation`),n=lr(t,`featureAttribute`),l=this.parameters,u=l.size;e.pixelRatioTolerance=Es*r,e.anchor=ye(l);for(let c=0;c<s.count;c++){let{scaleX:d,scaleY:p}=ds(n?.getVec(c,cs)??null,l,r);e.x=s.get(c,0),e.y=s.get(c,1),F[0]=u[0],F[1]=u[1],a!=null&&(F[0]*=a.get(c,0),F[1]*=a.get(c,1)),e.halfOutlineSize=0,l.textureIsSignedDistanceField&&(e.halfOutlineSize=Math.min(l.outlineSize,.5*F[0])*r/2),F[0]*=d,F[1]*=p,g$4(e.screenSize,F),e.rotationAngle=l.rotation+(o?.get(c)??0),yield e}}intersectRayDraped(e,t,r,s,a,o){let n=this.parameters;for(let{x:l,y:u,screenSize:c,pixelRatioTolerance:d,halfOutlineSize:p,rotationAngle:S,anchor:m}of this._forEachDrapedHUDInstance(hs,e,o))ns(r,l,u,c,d,p,S,n,m)&&s(a.distance,a.renderDistance,a.normal,-1)}intersectScreenPolygonDraped(e,t,r,s,a){if(!r.options.selectionMode||r.options.excludeLabels&&this.parameters.isLabel)return null;let o=this.parameters;for(let{x:n,y:l,screenSize:u,pixelRatioTolerance:c,halfOutlineSize:d,rotationAngle:p,anchor:S}of this._forEachDrapedHUDInstance(hs,e,a))if(ls(s,n+t[0],l+t[1],u,c,d,p,o,S,!1))return new ut$1(-1);return null}intersectScreenPolygon(e,t,r,s){let{options:{selectionMode:a,hud:o,excludeLabels:n},camera:l}=r,{parameters:u}=this;if(!a||!o||n&&u.isLabel||!e.visible||t==null)return null;let c=new se$3(1),d=1/l.pixelRatio;for(let{renderScreenPosition:p,screenSize:S,pixelRatioTolerance:m,halfOutlineSize:g,rotationAngle:x,anchor:v,centerView:b}of this._forEachScreenSpaceHUDInstance(ps,e,t,l)){let P=aa(L,b,l.inverseViewMatrix);if(!r.screenPolygonPrimitiveProcessor?.validatePoint(P))continue;let w=p[0]*d,_=(l.fullHeight-p[1])*d;if(hr[0]=S[0]*d,hr[1]=S[1]*d,ls(s,w,_,hr,m*d,g*d,x,u,v,!0)){let O=D$1(l.eye,P);c.updateIfCloserFromValues(O,-1,P,null)}}return c.valid?c:null}createBufferWriter(){return new Sr(this.parameters)}createPrimitivePositionReader(e,t){w(t!=null,`HUD geometry requires instancing`);let r=e.vertex.getField(`position`,k$1);return s=>r.getVec(0,s)}applyShaderOffsets(e,t,r,s,a,o,n,l){ra(cr,r,C$2(us,s));let u=os(cr,n,fs),c=Ts(x$1(t),n),d=ms(this.parameters,t,u.cosAngle,n,l);C$1(t,t,u.normal,d+c),C$1(e,e,cr,d+c);let p=o+d;this._applyPolygonOffsetView(t,u,p,n,t),this._applyCenterOffsetView(t,a,t)}applyShaderOffsetsNDC(e,t,r,s,a,o){return this._applyCenterOffsetNDC(e,t,s,a),o!=null&&P$1(o,a),this._applyPolygonOffsetNDC(a,r,s,a),a}_applyPolygonOffsetView(e,t,r,s,a){let o=s.aboveGround?1:-1,n=Math.sign(r);n===0&&(n=o);let l=o*n;if(this.parameters.shaderPolygonOffset<=0)return P$1(a,e);let u=h$2(Math.abs(t.cosAngle),.01,1),c=1-Math.sqrt(1-u*u)/u/s.viewport[2];return l>0?y$1(a,e,c):y$1(a,e,1/c),a}_applyCenterOffsetView(e,t,r){let s=this.parameters.centerOffsetUnits!==`screen`;return r!==e&&P$1(r,e),s&&(r[0]+=t[0],r[1]+=t[1],t[2]&&(e$1(ge,r),fa(r,r,y$1(ge,ge,t[2])))),r}_applyCenterOffsetNDC(e,t,r,s){let a=this.parameters.centerOffsetUnits!==`screen`;return s!==e&&P$1(s,e),a||(s[0]+=t[0]/r.fullWidth*2,s[1]+=t[1]/r.fullHeight*2),s}_applyPolygonOffsetNDC(e,t,r,s){let a=this.parameters.shaderPolygonOffset;if(e!==s&&P$1(s,e),a){let o=r.aboveGround?1:-1,n=o*Math.sign(t);s[2]-=(n||o)*a}return s}set visible(e){this._visible=e}get visible(){let{color:e,outlineSize:t,outlineColor:r}=this.parameters,s=e[3]>=.003913894324853229||t>=.003913894324853229&&r[3]>=.003913894324853229;return this._visible&&s}createGLMaterial(e){return new fr(e)}calculateRelativeScreenBounds(e,t,r=m$2()){return Vs(this.parameters,e,t,r),r[2]=r[0]+e[0],r[3]=r[1]+e[1],r}};var fr=class extends d{constructor(e){super(F$2(F$2({},e),e.material.parameters))}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(st,e)}};function Vs(i,e,t,r){r[0]=i.anchorPosition[0]*-e[0]+i.screenOffset[0]*t,r[1]=i.anchorPosition[1]*-e[1]+i.screenOffset[1]*t}function os(i,e,t){return aa(t.normal,i,e.viewInverseTransposeMatrix),t.cosAngle=Z$2(t.normal,zs),t}function ns(i,e,t,r,s,a,o,n,l){let u=gs(e,t,r,s,a,n,l,Ss);return v$1(Se,e,t),F$3(Xe,i,Se,x$2(o)),Xe[0]>u[0]&&Xe[0]<u[2]&&Xe[1]>u[1]&&Xe[1]<u[3]}function ls(i,e,t,r,s,a,o,n,l,u){let c=gs(e,t,r,s,a,n,l,Ss,u);if(v$1(Ve,c[0],c[1]),v$1(Ze,c[2],c[1]),v$1(Ce,c[2],c[3]),v$1(Ke,c[0],c[3]),o!==0){let d=x$2(o);v$1(Se,e,t),F$3(Ve,Ve,Se,d),F$3(Ze,Ze,Se,d),F$3(Ce,Ce,Se,d),F$3(Ke,Ke,Se,d),G$5(c),A$2(c,Ve),A$2(c,Ze),A$2(c,Ce),A$2(c,Ke)}return bt(i,c)?at(i,Ve,Ze,Ce)||at(i,Ve,Ce,Ke):!1}function gs(i,e,t,r,s,a,o,n,l=!1){let u=i-r-t[0]*o[0],c=u+t[0]+2*r,d=l?1-o[1]:o[1],p=e-r-t[1]*d,S=p+t[1]+2*r,m=a.distanceFieldBoundingBox;return a.textureIsSignedDistanceField&&m!=null&&(u+=t[0]*m[0],p+=t[1]*(l?1-m[3]:m[1]),c-=t[0]*(1-m[2]),S-=t[1]*(l?m[1]:1-m[3]),u-=s,c+=s,p-=s,S+=s),n[0]=u,n[1]=p,n[2]=c,n[3]=S,n}var ur=new u;var L=o$5();var ge=o$5();var q=o$3();var St=M$3();var cr=o$5();var Xe=o$4();var Se=o$4();var us=t$2();var G=o$5();var pr=o$5();var cs=o$3();var Ss=m$2();var Ve=o$4();var Ze=o$4();var Ce=o$4();var Ke=o$4();var hr=o$4();var dr=class{constructor(){this.renderScreenPosition=o$5(),this.screenSize=o$4(),this.centerView=o$5(),this.pixelRatioTolerance=0,this.halfOutlineSize=0,this.rotationAngle=0,this.anchor=o$4()}};var mr=class{constructor(){this.x=0,this.y=0,this.screenSize=o$4(),this.pixelRatioTolerance=0,this.halfOutlineSize=0,this.rotationAngle=0,this.anchor=o$4()}};var ps=new dr;var hs=new mr;var fs={normal:o$5(),cosAngle:0};var Cs=1;var Es=2;var F=r$3(0,0);var zs=t$4(0,0,1);var gr=class extends o$1{constructor(){super(...arguments),this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1,this.color=U,this.size=_$4,this.polygonOffset=0,this.anchorPosition=r$3(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=U,this.outlineSize=0,this.distanceFieldBoundingBox=o$3(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.hasVertexColor=!1,this.hasVertexSize=!1,this.hasVertexRotation=!1,this.hasVertexUVi=!1,this.hasVertexCenterOffset=!1,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.centerOffsetUnits=`world`,this.drawAsLabel=!1,this.depthEnabled=!0,this.focusAreaStyle=null,this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}};var Sr=class{constructor(e){this.baseInstanceLayout=lt$1,this.layout=Ft(e)}elementCount(e){return e.get(`position`).indices.length}elementCountBaseInstance(e){return e.get(`uv0`).indices.length}write(e,t,r,s){if(s==null)return;let{buffer:a,offset:o}=s,{position:n,normal:l,color:u,size:c,rotation:d,centerOffset:p,groundDistance:S,featureAttribute:m,uvi:g,olidColor:x}=a;Wt(r.get(`position`),e,n,o),$t$1(r.get(`normal`),t,l,o);let v=r.get(`position`).indices.length;if(g){let b=r.get(`uvi`)?.data;if(b&&b.length>=4){let[P,w,_,O]=b;for(let D=0;D<v;++D){let A=o+D;g.setValues(A,P,w,_,O)}}}if(u&&Bt(r.get(`color`),4,u,o),c&&Ce$2(r.get(`size`),c,o),d&&Wr(r.get(`rotation`),d,o),p&&(r.get(`centerOffset`)?Pt(r.get(`centerOffset`),p,o):Ur(p,o,v)),r.get(`groundDistance`)?Wr(r.get(`groundDistance`),S,o):Ur(S,o,v),m&&(r.get(`featureAttribute`)?jt$1(r.get(`featureAttribute`),m,o):Ur(m,o,v)),x!=null){let b=r.get(`olidColor`);b==null?Ur(x,o,v):Bt(b,4,x,o)}}writeBaseInstance(e,t){let{uv0:r}=t;Ce$2(e.get(`uv0`),r,0)}rebaseBuffers(e,t){if(t==null)return;let{buffer:r,offset:s}=t;r.copyFrom(e.vertex,0,s)}};function ds(i,e,t){return i==null||e.vvSize==null?{scaleX:t,scaleY:t}:(Vo(pr,e,i),{scaleX:pr[0]*t,scaleY:pr[1]*t})}function Ts(i,e){let t=e.computeRenderPixelSizeAtDistance(i)*x;return(e.aboveGround?1:-1)*t}function ms(i,e,t,r,s){if(!i.verticalOffset?.screenLength){let l=x$1(e);return s.update(t,l,i.screenSizePerspective,i.screenSizePerspectiveMinPixelReferenceSize,i.screenSizePerspectiveAlignment,null),0}let a=x$1(e),o=i.screenSizePerspectiveAlignment??i.screenSizePerspective,n=z$4(r,a,i.verticalOffset,t,o,i.screenSizePerspectiveMinPixelReferenceSize);return s.update(t,a,i.screenSizePerspective,i.screenSizePerspectiveMinPixelReferenceSize,i.screenSizePerspectiveAlignment,null),n}export{za as C,p$1 as S,Pe$1 as _,eo as a,da as b,ss as c,ze as d,G$1 as f,He$1 as g,Ge$1 as h,as as i,to as l,Be as m,Mi as n,lt as o,P as p,Ni as r,ro as s,I as t,Yt$1 as u,Ye$1 as v,ea as x,Ze$1 as y};