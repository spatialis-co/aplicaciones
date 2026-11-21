import{$D as U,$b as T$1,AI as x$1,BB as he,BV as N$1,CL as de$1,Hb as D$1,Hv as _,JB as Ar,Jv as G$2,KB as g$4,Kb as H$2,Lv as O,NB as e$2,Nb as o$2,PA as Y$1,Qw as Z$1,SI as b$1,TU as l,Vw as D1,WU as T,XD as I,Xb as P$2,YA as tn,YC as jl,ZB as G,ZF as Y$3,Zw as Y$2,_x as v$2,ax as aa,ay as U$1,bp as E$1,cU as F$1,dA as l$1,dj as t$2,dx as j$2,fx as la,gA as $,gz as v,hA as t$3,hV as js,ij as f,jL as L,kA as T$2,lU as G$1,lj as g$3,ly as bn,mV as j$1,pA as o$1,rx as Z$2,sI as v$1,sV as Ss,sx as e$3,tI as g$5,tz as A,uv as h$3,vp as C$1,wp as R$1,xA as H$1,yx as y,yy as _$1}from"./main-IJ4OI6P6.js";import{A as o$3,D as h$4,_ as f$1,b as j$3,d as T$3,j as u$3,k as l$2,v as g$6}from"./chunk-BTpBVdmx.js";import{C as fr,E as wt$1,En as r$1,Ft as b$2,It as ci,Kt as R$2,Mt as N$2,Nt as Ni,On as n$3,Ot as ht$1,Pt as _$2,Qt as s$1,Rt as ni,S as Kr,St as O$1,Tt as dt$1,_ as m$1,a as o$5,cn as It$1,d as o$4,f as s,g as d$2,h as h$5,i as A$1,jt as vt$1,kt as oi,l as r,on as f$2,qt as V$1,s as i$1,tn as Q,u as a$1,v as z$1,w as mr,xn as po$1,xt as D$2,zt as si}from"./chunk-BPLIsBmy.js";import{t as s$2}from"./chunk-CVevUV3s.js";import{i as T$4,n as l$3}from"./chunk-a23rT95Y.js";import{f as pt$1,i as be$1,n as Te$1,r as _e$1}from"./chunk-3SE-Lrnp.js";import{i as ye$1,n as fe,s as w}from"./chunk-C79A0GJ0.js";import{a as m$2,n as U$2}from"./chunk-DUZ0LjxZ.js";import{r as Ma}from"./chunk-DyJdeIjM.js";import{t as Q$1}from"./chunk-DNrul0wK.js";import{n as o$6,r as r$2,t as f$3}from"./chunk-nk9jdfmD.js";var c$1=[`layerObjectAdded`,`layerObjectRemoved`,`layerObjectsAdded`,`layerObjectsRemoved`,`transformationChanged`,`shaderTransformationChanged`,`visibilityChanged`,`occlusionChanged`,`highlightChanged`,`geometriesChanged`,`attributesChanged`];var n$2=class{constructor(e,t,s=``){this.stage=e,this.apiLayerViewUid=s,this.id=G(),this.events=new v,this.visible=!0,this.sliceable=!1,this._objectsAdded=[],this._handles=new j$1,this._objects=/* @__PURE__ */ new Map,this._pickable=!0,this.visible=t?.visible??!0,this._pickable=t?.pickable??!0,this.updatePolicy=t?.updatePolicy??0,e.addLayer(this);for(let o of c$1)this._handles.add(this.events.on(o,b=>e.handleEvent(o,b)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.removeLayer(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}getObject(e){return this._objects.get(e)}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.set(e.id,e),e.layer=this,this.events.emit(`layerObjectAdded`,e),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.delete(e.id)&&(this.events.emit(`layerObjectRemoved`,e),e.layer=null,this._octree!=null&&(T(this._objectsAdded,e)||this._octree.remove([e])))}addMany(e){for(let t of e)this._objects.set(t.id,t),t.layer=this;this.events.emit(`layerObjectsAdded`,e),this._octree!=null&&this._objectsAdded.push(...e)}removeMany(e){let t=[];for(let s of e)this._objects.delete(s.id)&&t.push(s);if(t.length!==0&&(this.events.emit(`layerObjectsRemoved`,t),t.forEach(s=>s.layer=null),this._octree!=null)){for(let s=0;s<t.length;)T(this._objectsAdded,t[s])?(t[s]=t[t.length-1],--t.length):++s;this._octree.remove(t)}}commit(){this.stage.commitLayer(this)}sync(){this.updatePolicy!==1&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){this._octree!=null&&!this._objectsAdded.includes(e)&&this._octree.update(e,t)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.size>50?(this._octree=new Q$1(e=>e.boundingVolumeWorldSpace.sphere),this._octree.add(this._objects.values())):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded),this._objectsAdded.length=0),this._octree}invalidateSpatialQueryAccelerator(){this._octree=N$1(this._octree),this._objectsAdded.length=0}get test(){}};function H(r){return N.has(r)}var N=new Set(`position.normal.normalCompressed.uv0.size.rotation.offset.perspectiveDivide.centerOffset.groundDistance.previousDelta.lineParameters.sizeFeatureAttribute.profileRight.profileUp.pathVertexInfo.profileRotation.pathRotationUp.pathMaxStretchDistance.featureAttribute.position.size.sizeFeatureAttribute.profileRight.profileUp.profileRotation.pathRotationUp.pathMaxStretchDistance`.split(`.`));var g$2=class{constructor(){this.box=tn(),this.sphere=new _}};function z(r,t,e){let s=Y$1(t,Y),i=$(t,J$1);if(D1(e)){let o=T$1(P$1,e[12],e[13],e[14]);j$2(h$2,s,o),j$2(n$1,i,o),T$2(r,h$2),T$2(r,n$1);return}if(aa(h$2,s,e),T$2(r,h$2),!la(s,i)){aa(n$1,i,e),T$2(r,n$1);for(let o=0;o<3;++o)P$2(h$2,s),P$2(n$1,i),h$2[o]=i[o],n$1[o]=s[o],aa(h$2,h$2,e),aa(n$1,n$1,e),T$2(r,h$2),T$2(r,n$1)}}var P$1=o$1();var h$2=o$1();var n$1=o$1();var Y=o$1();var J$1=o$1();function M(r,t){return r??=[],r.push(t),r}function R(r,t){if(r==null)return null;let e=r.filter(s=>s!==t);return e.length===0?null:e}function rt$1(r,t,e,s,i){u$2[0]=r.get(t,0),u$2[1]=r.get(t,1),u$2[2]=r.get(t,2),l$3(u$2,d$1,3),e.set(i,0,d$1[0]),s.set(i,0,d$1[1]),e.set(i,1,d$1[2]),s.set(i,1,d$1[3]),e.set(i,2,d$1[4]),s.set(i,2,d$1[5])}var u$2=o$1();var d$1=/* @__PURE__ */ new Float32Array(6);var E=class{constructor(t={}){this.id=G(),this.type=0,this._highlightIds=/* @__PURE__ */ new Set,this._shaderTransformation=null,this._visible=!0,this.castShadow=t.castShadow??!0,this.usesVerticalDistanceToGround=t.usesVerticalDistanceToGround??!1,this.graphicUid=t.graphicUid,this.layerViewUid=t.layerViewUid,t.isElevationSource&&(this.lastValidElevationBB=tn()),this._geometries=t.geometries?Array.from(t.geometries):[]}dispose(){this._geometries.length=0}get layer(){return this._layer}set layer(t){w(this._layer==null||t==null,`Object3D can only be added to a single Layer`),this._layer=t}addGeometry(t){t.visible=this._visible,this._geometries.push(t);for(let e of this._highlightIds)t.addHighlight(e);this._emit(`geometriesChanged`,{object:this,removed:[],added:[t]}),this._highlightIds.size&&this._emit(`highlightChanged`,this),this._invalidateBoundingVolume()}removeGeometry(t){let e=this._geometries.splice(t,1)[0];if(e){for(let s of this._highlightIds)e.removeHighlight(s);this._emit(`geometriesChanged`,{object:this,removed:[e],added:[]}),this._highlightIds.size&&this._emit(`highlightChanged`,this),this._invalidateBoundingVolume()}}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}replaceGeometries(t){let e=this._geometries,s=Array.from(t);for(let i of e)for(let o of this._highlightIds)i.removeHighlight(o);for(let i of s){i.visible=this._visible;for(let o of this._highlightIds)i.addHighlight(o)}this._geometries=s,this._invalidateBoundingVolume(),this._emit(`geometriesChanged`,{object:this,removed:e,added:s}),this._highlightIds.size&&this._emit(`highlightChanged`,this)}geometryVertexAttributeUpdated(t,e,s=!1){this._emit(`attributesChanged`,{object:this,geometry:t,attribute:e,sync:s}),H(e)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(t){if(this._visible!==t){this._visible=t;for(let e of this._geometries)e.visible=this._visible;this._emit(`visibilityChanged`,this)}}maskOccludee(){let t=new ht$1;for(let e of this._geometries)e.occludees=M(e.occludees,t);return this._emit(`occlusionChanged`,this),t}removeOcclude(t){for(let e of this._geometries)e.occludees=R(e.occludees,t);this._emit(`occlusionChanged`,this)}highlight(t){let e=new D$2(t);for(let s of this._geometries)s.addHighlight(e);return this._emit(`highlightChanged`,this),this._highlightIds.add(e),e}removeHighlight(t){this._highlightIds.delete(t);for(let e of this._geometries)e.removeHighlight(t);this._emit(`highlightChanged`,this)}removeStateID(t){t.channel===0?this.removeHighlight(t):this.removeOcclude(t)}getCombinedStaticTransformation(t,e){return Z$1(e,this.transformation,t.transformation)}getCombinedShaderTransformation(t,e=t$2()){return Z$1(e,this.effectiveTransformation,t.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=new g$2,this._validateBoundingVolume(this._bvWorldSpace,0)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=new g$2,this._validateBoundingVolume(this._bvObjectSpace,1)),this._bvObjectSpace}_validateBoundingVolume(t,e){let s=e===1;for(let i of this._geometries){let o=i.boundingInfo;o&&z(t.box,o.box,s?i.transformation:this.getCombinedShaderTransformation(i))}H$1(t.box,t.sphere.center);for(let i of this._geometries){let o=i.boundingInfo;if(o==null)continue;let S=s?i.transformation:this.getCombinedShaderTransformation(i),k=O(S);aa(F,o.sphere.center,S);let q=D$1(F,t.sphere.center),L=o.sphere.radius*k;t.sphere.radius=Math.max(t.sphere.radius,q+L)}}_invalidateBoundingVolume(){let t=this._bvWorldSpace?.sphere;this._bvObjectSpace=this._bvWorldSpace=void 0,this.layer&&t&&this.layer.notifyObjectBBChanged(this,t)}_emit(t,e){this.layer?.events.emit(t,e)}get geometries(){return this._geometries}get transformation(){return this._transformation??g$3}set transformation(t){this._transformation=Y$2(this._transformation??t$2(),t),this._invalidateBoundingVolume(),this._emit(`transformationChanged`,this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(t){this._shaderTransformation=t?Y$2(this._shaderTransformation??t$2(),t):null,this._invalidateBoundingVolume(),this._emit(`shaderTransformationChanged`,this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}get test(){}};var F=o$1();function g$1(o){o.uniforms.add(new s(`alignPixelEnabled`,e=>e.alignPixelEnabled)),o.code.add(o$3`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),o.code.add(o$3`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}var x=.5;function D(o,e){let t=o.vertex;o.include(m$1),o.attributes.add(`position`,`vec3`),o.vertex.inputs.add(`position`,()=>`position`),o.attributes.add(`normal`,`vec3`),e.hasVertexCenterOffset?o.attributes.add(`centerOffset`,`vec3`):t.constants.add(`centerOffset`,`vec3`,[0,0,0]),o.attributes.add(`groundDistance`,`float`),si(t,e),ni(t,e),t.uniforms.add(V$1,new l$2(`polygonOffset`,i=>i.shaderPolygonOffset),new f$2(`aboveGround`,i=>i.camera.aboveGround?1:-1)),e.hasVerticalOffset&&h$5(t),t.code.add(o$3`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),t.code.add(o$3`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = aboveGround;
}
float groundRelative = aboveGround * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),(!e.draped||e.hasVerticalOffset)&&t.uniforms.add(R$2),e.draped||(t.uniforms.add(new f$2(`hudPixelSizePerDistance`,i=>Math.tan(i.camera.fovY/2)/(i.camera.fullViewport[2]/2))),t.code.add(o$3`
      void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
        float distanceToCamera = length(posView);

        // Compute offset in world units for a half pixel shift
        float pixelOffset = distanceToCamera * hudPixelSizePerDistance * ${o$3.float(.5)};

        // Apply offset along normal in the direction away from the ground surface
        vec3 modelOffset = normalModel * aboveGround * pixelOffset;

        // Apply the same offset also on the view space position
        vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

        posModel += modelOffset;
        posView += viewOffset;
      }
    `)),e.screenCenterOffsetUnitsEnabled&&ci(t),e.hasScreenSizePerspective&&d$2(t),t.code.add(o$3`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      float pointGroundDistance = groundDistance;
      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?``:`applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);`}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?`vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);`:``}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?`float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);`:`float verticalOffsetScreenHeight = verticalOffset.x;`:``}

      ${e.hasVerticalOffset?o$3`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:``}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?``:o$3`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?`float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);`:`float centerOffsetY = centerOffset.y;`:``}

      ${e.screenCenterOffsetUnitsEnabled?`posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;`:``}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}var a=class extends s$2{constructor(){super(...arguments),this.effect=0,this.fadeFactor=h$3(1)}};function u$1(t){let o=new T$4;return o.include(a$1),o.outputs.add(`fragColor`,`vec4`,0),o.fragment.uniforms.add(new u$3(`colorTexture`,e=>e.color),new u$3(`emissionTexture`,e=>e.emission),new u$3(`focusArea`,e=>e.focusArea),new o$4(`focusAreaEffectMode`,e=>e.effect),new l$2(`fadeFactor`,e=>e.fadeFactor.value)).constants.add(`EffectBright`,`int`,0).code.add(`float getLuminance(in vec4 color) { return color.r * 0.25 + color.g * 0.5 + color.b * 0.25; }`).main.add(`
      float mask = texture(focusArea, uv).r;
      
      if (focusAreaEffectMode == EffectBright) {
        vec4 color = texture(colorTexture, uv);
        float luminance = getLuminance(color);
        fragColor = mask > 0.0 ? color : mix(color, vec4(0.55 * luminance + 0.45), fadeFactor);
      } else {
        if(mask > 0.0) discard;
        fragColor = vec4(vec3(0.0), fadeFactor * 0.67);
      }
  `),t.hasEmissive&&(o.outputs.add(`fragEmission`,`vec4`,1),o.fragment.main.add(o$3`if (focusAreaEffectMode == EffectBright) {
vec4 color = texture(emissionTexture, uv);
float luminance = getLuminance(color);
fragEmission = mask > 0.0 ? color : mix(color, vec4(0.67 * luminance), fadeFactor);
} else
fragEmission = vec4(vec3(0.0), fadeFactor * 0.9);`)),o}var h$1=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaPassParameters:a,build:u$1},Symbol.toStringTag,{value:`Module`}));var t$1=o$3`vec4(0.0, 0.0, 2.0, 1.0)`;var S=class extends fr{constructor(){super(...arguments),this.shader=new mr(h$1,()=>import(`./chunk-BHeXDc_C.js`)),this.ignoreUnused=!0}initializePipeline(){return pt$1({colorWrite:Te$1,blending:_e$1})}};S=g$4([js(`esri.views.3d.webgl-engine.effects.focusArea.FocusAreaTechnique`)],S);var C=class extends T$3{constructor(){super(...arguments),this.hasFog=!1}};g$4([f$1()],C.prototype,`hasFog`,void 0);var P=class extends C{constructor(){super(...arguments),this.hasEmissive=!1}};g$4([f$1()],P.prototype,`hasEmissive`,void 0);var b=class extends wt$1{constructor(e){super(G$1(F$1({},e),{view:e.focusAreasView.view})),this.consumes={required:[Kr.FOCUSAREA,Kr.FOCUSAREA_MASK]},this.produces=Kr.FOCUSAREA,this._fadeDirection=0,this._configuration=new P,this._passParameters=new a}fadeOut(e){this.removeAllHandles(),this._startTime=null,this._fadeDirection=1,this.addHandles(A(()=>this._passParameters.fadeFactor.value,t=>{t===0&&(this.removeAllHandles(),e())})),this.requestRender(2)}precompile(){this._configuration.hasEmissive=this.bindParameters.emissions!==0,this.techniques.precompile(S,this._configuration)}render(e){let t=this.bindParameters;this._startTime??=this.view.stage?.renderer.renderContext.time;let s=this.view.qualitySettings.fadeDuration,d=s>0?Math.min(s,this.view.stage?.renderer.renderContext.time-this._startTime)/s:1,l=this.renderingContext,w=this.techniques.get(S,this._configuration),p=this.input,A=e.find(({name:v})=>v===Kr.FOCUSAREA_MASK),f=this.focusAreasView.style===`bright`;this._passParameters.color=this._passParameters.emission=l.emptyTexture,this._passParameters.focusArea=A.getTexture(),this._passParameters.effect=V[this.focusAreasView.style],this._passParameters.fadeFactor.value=this._fadeDirection===0?d:1-d;let g=t.camera,z=g.fullViewport[2],R=g.fullViewport[3],m=f?this.fboCache.acquire(z,R,this.produces):p;if(f){if(this._passParameters.color=p.getTexture(),this._configuration.hasEmissive){this._passParameters.emission=p.getTexture(C$1);let v=this._passParameters.emission?.descriptor.internalFormat===R$1.RGBA16F?8:5;m.acquireColor(C$1,v,`emissive`)}m.moveAttachments(p),l.bindFramebuffer(m.fbo),l.setClearColor(0,0,0,0),l.clear(16384)}else l.bindFramebuffer(m.fbo);return l.bindTechnique(w,t,this._passParameters),l.screen.draw(),d<1&&this.requestRender(2),m}};g$4([Ss()],b.prototype,`consumes`,void 0),g$4([Ss()],b.prototype,`produces`,void 0),g$4([Ss({constructOnly:!0})],b.prototype,`focusAreasView`,void 0),b=g$4([js(`esri.views.3d.webgl-engine.effects.focusArea.FocusArea`)],b);var V={bright:0,dark:1};var Oe=e=>e?V[e]:0;function _e(e){let t=new T$4;t.include(D,e),t.vertex.include(Q,e);let{output:s,hasOcclusionTexture:d,signedDistanceFieldEnabled:l,pixelSnappingEnabled:w,hasEmission:p,hasScreenSizePerspective:A,debugDrawLabelBorder:f,hasVVSize:g,hasVVColor:z,hasRotation:R,occludedFragmentFade:m,sampleSignedDistanceFieldTexelCenter:v,hasVertexColor:$,hasVertexSize:I$1,hasVertexRotation:H,hasVertexUVi:k}=e;t.include(m$1),t.include(It$1,e),t.include(n$3,e),t.include(Ni,e);let{vertex:c,fragment:r$3}=t;r$3.include(b$2),r$3.code.add(o$3`
    vec4 applyFocusAreaStyle(vec4 color, int style) {
      const float factor = 0.46;
      const float factorBright = 0.32;

      if (style == ${o$3.int(0)}) {
        float luma = (color.r + color.g + color.b) / 3.0;
        float bright = luma * (1.0 - 0.6 * factorBright) + 0.6 * factorBright * color.a;
        float brightScaled = bright * factorBright;
        return vec4(brightScaled, brightScaled, brightScaled, color.a * factorBright);
      }

      float darkScaled = factor * factor;
      return vec4(color.rgb * darkScaled, color.a * factor);
    }
  `),t.varyings.add(`vcolor`,`vec4`),t.varyings.add(`vtc`,`vec2`),t.varyings.add(`vsize`,`vec2`);let u=s===10;c.uniforms.add(V$1,new r(`screenOffset`,(o,M)=>v$1(B,o.screenOffset[0]*2*M.camera.pixelRatio,o.screenOffset[1]*2*M.camera.pixelRatio)),new r(`anchorPosition`,o=>ye(o)),new r$1(`materialColor`,({color:o})=>o),new l$2(`materialRotation`,o=>o.rotation),new r(`materialSize`,o=>o.size),new u$3(`tex`,o=>o.texture)),ci(c),l&&(c.uniforms.add(new r$1(`outlineColor`,o=>o.outlineColor)),r$3.uniforms.add(new r$1(`outlineColor`,o=>ze(o)?o.outlineColor:I),new l$2(`outlineSize`,o=>ze(o)?o.outlineSize:0))),w&&c.include(g$1),A&&(z$1(c),d$2(c)),f&&t.varyings.add(`debugBorderCoords`,`vec4`),t.attributes.add(`uv0`,`vec2`),k&&t.attributes.add(`uvi`,`vec4`),$&&t.attributes.add(`color`,`vec4`),I$1&&t.attributes.add(`size`,`vec2`),H&&t.attributes.add(`rotation`,`float`),(g||z)&&t.attributes.add(`featureAttribute`,`vec4`),c.main.add(o$3`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${t$1};
      return;
    }

    vec2 vertexSize = materialSize${h$4(I$1,` * size`)};
    vec2 inputSize;
    ${h$4(A,o$3`
        inputSize = screenSizePerspectiveScaleVec2(vertexSize, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,o$3`
        inputSize = vertexSize;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${h$4(g,o$3`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);
  `);let Fe=o$3`
  ${h$4(k,o$3`
    vec2 texSize = vec2(textureSize(tex, 0));
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0)) / texSize;
    `,o$3`
    vec2 uv = mix(vec2(0.), vec2(1.), bvec2(uv0));
    `)}

    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${h$4(R,o$3`
        float angle = radians(materialRotation${h$4(H,` + rotation`)});
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,De=w?l?o$3`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:o$3`posProj += quadOffset;
if (inputSize.x == vertexSize.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:o$3`posProj += quadOffset;`;c.include(N$2),c.main.add(o$3`
    ${Fe}
    ${z?`vcolor = interpolateVVColor(featureAttribute.y) * materialColor;`:$?`vcolor = color * materialColor;`:`vcolor = materialColor;`}

    ${h$4(s===11,o$3`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < alphaCutoff;
    ${h$4(l,`alphaDiscard = alphaDiscard && outlineColor.a < alphaCutoff;`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${De}
      gl_Position = posProj;
    }

    vtc = uv;

    ${h$4(f,o$3`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `);let L=g$6(s)&&e.hasFocusAreaStyle&&!e.draped;switch(r$3.uniforms.add(new u$3(`tex`,o=>o.texture)),L&&r$3.uniforms.add(new o$4(`focusAreaStyle`,o=>Oe(o.focusAreaStyle))),m&&!u&&(r$3.include(i$1),r$3.uniforms.add(new s$1(`depthMap`,o=>o.mainDepth),new l$2(`occludedOpacity`,o=>o.occludedFragmentOpacity?.value??1))),d&&r$3.uniforms.add(new s$1(`texOcclusion`,o=>o.hudOcclusion?.attachment)),f?r$3.main.add(`
        float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));
        // don't discard fragments on debug border
        float textureAlphaCutoff = isBorder > 0.0 ? 0.0 : alphaCutoff;
      `):r$3.main.add(`float textureAlphaCutoff = alphaCutoff;`),r$3.main.add(`vec2 samplePos = vtc;`),v&&r$3.main.add(o$3`float txSize = float(textureSize(tex, 0).x);
float texelSize = 1.0 / txSize;
vec2 scaleFactor = (vsize - txSize) * texelSize;
samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`),l?r$3.main.add(o$3`
      vec4 fillPixelColor = vcolor;

      // Get distance in output units (i.e. pixels)

      float sdf = texture(tex, samplePos).r;
      float pixelDistance = sdf * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - pixelDistance, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(pixelDistance) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < textureAlphaCutoff ||
          fillPixelColor.a + outlinePixelColor.a < alphaCutoff
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
                              vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${h$4(!u,o$3`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < textureAlphaCutoff) {
          discard;
        }

        ${h$4(!u,o$3`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `):r$3.main.add(o$3`
        vec4 texColor = texture(tex, samplePos, -0.5);
        if (texColor.a < textureAlphaCutoff) {
          discard;
        }
        ${h$4(!u,o$3`fragColor = texColor * premultiplyAlpha(vcolor);`)}
      `),m&&!u&&r$3.main.add(o$3`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${o$3.float(1-qe)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `),d&&r$3.main.add(`fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;`),!u&&f&&r$3.main.add(`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`),s===2&&r$3.main.add(o$3`if (fragColor.a < alphaCutoff) {
discard;
}`),L&&r$3.main.add(o$3`fragColor = applyFocusAreaStyle(fragColor, focusAreaStyle);`),g$6(s)&&p&&r$3.main.add(`fragEmission = vec4(0.0);`),s){case 1:r$3.main.add(`
        fragColor = vec4(fragColor.rgb * floatBlendOutputScale, fragColor.a);
        fragAlpha = fragColor.a * floatBlendOutputScale;
      `);break;case 2:r$3.main.add(`fragColor.rgb /= fragColor.a;`);break;case 11:r$3.main.add(`outputObjectAndLayerIdColor();`);break;case 10:t.include(_$2,e),r$3.main.add(`outputHighlight(false);`)}return t}function ze(e){return e.outlineColor[3]>0&&e.outlineSize>0}function ye(e){return e.textureIsSignedDistanceField?Te(e.anchorPosition,e.distanceFieldBoundingBox,B):g$5(B,e.anchorPosition),B}var B=o$2();function Te(e,t,s){v$1(s,e[0]*(t[2]-t[0])+t[0],e[1]*(t[3]-t[1])+t[1])}var qe=.08;var lo$1=Object.freeze(Object.defineProperty({__proto__:null,anchorPosition:ye,build:_e},Symbol.toStringTag,{value:`Module`}));var n={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]};var d={dash:n.dash,"dash-dot":[...n.dash,...n.dot],dot:n.dot,"long-dash":n[`long-dash`],"long-dash-dot":[...n[`long-dash`],...n.dot],"long-dash-dot-dot":[...n[`long-dash`],...n.dot,...n.dot],none:null,"short-dash":n[`short-dash`],"short-dash-dot":[...n[`short-dash`],...n[`short-dot`]],"short-dash-dot-dot":[...n[`short-dash`],...n[`short-dot`],...n[`short-dot`]],"short-dot":n[`short-dot`],solid:null};var e$1=class{constructor(s,r,l){this.image=s,this.width=r,this.length=l,this.uuid=e$2()}};function c(t){return t!=null&&`image`in t}function o(t,s){return t==null?t:{pattern:t.slice(),pixelRatio:s}}function g(t){return{pattern:[t,t],pixelRatio:2}}function p(t){switch(t?.type){case`style`:return h(t.style);case`template`:return i(t.normalizedDashTemplate);case`image`:return new e$1(t.image,t.width,t.length);case void 0:case null:return null}return null}function h(t){return t==null?null:o(d[t],8)}function i({dashTemplate:t,hidesLine:s}){return o(s||t.length===0?null:t,8)}function m(t){switch(t?.type){case`style`:return t.style===`none`;case`template`:return t.normalizedDashTemplate.hidesLine;case`image`:case void 0:case null:return!1}return!1}function te(r,t,o){r.push([`olidColor`,new Ma(t,o,4,!0)])}function tt(r,t=!1){return r<=1024?t?Array(r).fill(0):Array(r):new Float16Array(r)}function rt(r,t,o){let e=r.isGeographic&&t,{metersPerUnit:a}=r,s=0;return e?(a=1,s=x$1(o)):r.isGeographic?a=L(r).metersPerDegree:r.isWebMercator&&(s=de$1(o)),a*Math.max(.2,Math.cos(s))}function hr(r,t,o=null){let e=[],a=t.mapPositions,s=yt(t,e),i=s.data,g=s.indices.length,y=m$2(g);return wt(t,e,y),At(t,e,y),dt(t,e,y),bt(t,e,s.indices,y),Mt(t,e,s.indices,y),vt(t,e),xt(t,e,s.indices,y),St(r,t,e,i),o!=null&&te(e,o,y),new dt$1(r,e,a)}function yt(r,t){let{attributeData:{position:o},removeDuplicateStartEnd:e}=r,a=o.length/3,s=a>2&&Dt(o)&&e,i=a-+!!s,g=Array(2*(i-1)),y=s?o.slice(0,-3):o,n=0;for(let f=0;f<i-1;f++)g[n++]=f,g[n++]=f+1;let u=new Ma(y,g,3,s);return t.push([`position`,u]),u}function wt(r,t,o){if(r.attributeData.colorFeature!=null)return;let e=r.attributeData.color;t.push([`color`,new Ma(e??U,o,4)])}function dt(r,t,o){r.attributeData.normal&&t.push([`normal`,new Ma(r.attributeData.normal,o,3)])}function bt(r,t,o,e){let a=r.attributeData.colorFeature;a!=null&&(typeof a==`number`?t.push([`colorFeatureAttribute`,new Ma([a],e,1,!0)]):t.push([`colorFeatureAttribute`,new Ma(a,o,1,!0)]))}function At(r,t,o){r.attributeData.sizeFeature??t.push([`size`,new Ma([r.attributeData.size??1],o,1,!0)])}function Mt(r,t,o,e){let a=r.attributeData.sizeFeature;a!=null&&(typeof a==`number`?t.push([`sizeFeatureAttribute`,new Ma([a],e,1,!0)]):t.push([`sizeFeatureAttribute`,new Ma(a,o,1,!0)]))}function vt(r,t){let{attributeData:{position:o,timeStamps:e}}=r;if(!e)return;let a=o.length/3,s=Array(2*(a-1)),i=0;for(let g=0;g<a-1;g++)s[i++]=g,s[i++]=g+1;t.push([`timeStamps`,new Ma(e,s,de,!0)])}function xt(r,t,o,e){let a=r.attributeData.opacityFeature;a!=null&&(typeof a==`number`?t.push([`opacityFeatureAttribute`,new Ma([a],e,1,!0)]):t.push([`opacityFeatureAttribute`,new Ma(a,o,1,!0)]))}function St(r,{overlayInfo:t},o,e){let a=r.parameters;if(t==null||!Pt(a)||a.stipplePattern==null)return;let{renderCoordsHelper:s,spatialReference:i}=t,g=i.isGeographic&&s.viewingMode===1,y=a.worldSized||c(a.stipplePattern);if(!y&&!g)return;let n=e;if(g){let d=f(e.length),h=L(i);for(let P=0;P<d.length;P+=3)jl(e,P,d,P,h);n=d}let u=e.length/3,f$4=o$5(u+1),v=s.viewingMode===1,A=Tt,w=It,m=0,p=0,c$2=0;v$1(A,n[p++],n[p++]),p++,f$4[0]=0;for(let d=1;d<u+1;++d){d===u&&(p=0);let h=p;v$1(w,n[p++],n[p++]),p++;let P=(e[c$2+1]+e[h+1])/2,l=y?rt(i,v,P):1;m+=Y$3(A,w)*l,f$4[d]=m,[A,w]=[w,A],c$2=h}o.push([`distanceToStart`,new Ma(f$4,o[0][1].indices,1,!0)])}function Dt(r){let t=r.length;return r[0]===r[t-3]&&r[1]===r[t-2]&&r[2]===r[t-1]}function Pt(r){return`stipplePattern`in r}var Tt=o$2();var It=o$2();var de=4;function ot(r,t){let o=tt(r.length*4),e=r[0],a=r[r.length-1];for(let s=0;s<r.length;s++)o[s*4]=r[s],o[s*4+1]=e,o[s*4+2]=a,o[s*4+3]=t+.5;return o}function be(r,t){let o=r[t],e=r[t+1],a=r[t+2];return Math.sqrt(o*o+e*e+a*a)}function at(r,t){let o=r[t],e=r[t+1],a=r[t+2],s=1/Math.sqrt(o*o+e*e+a*a);r[t]*=s,r[t+1]*=s,r[t+2]*=s}function Ae(r,t,o){r[t]*=o,r[t+1]*=o,r[t+2]*=o}function nt(r,t,o,e,a,s=t){a||=r,a[s]=r[t]+o[e],a[s+1]=r[t+1]+o[e+1],a[s+2]=r[t+2]+o[e+2]}var st=class extends fr{constructor(r,t){super(r,t,fe(lt).concat(fe(Ft(t)))),this.shader=new mr(lo$1,()=>import(`./chunk-DgEK2kZt.js`)),this.ignoreUnused=!0,this.primitiveType=E$1.TRIANGLE_STRIP}initializePipeline(r){let{draped:t,output:o,depthTestEnabled:e}=r,a=j$3(o),s=e&&!t&&!a&&o!==10;return pt$1({blending:oi(o,!0),depthTest:e&&!t?{func:515}:null,depthWrite:s?be$1:null,colorWrite:Te$1,polygonOffset:vt$1(r)})}};st=g$4([js(`esri.views.3d.webgl-engine.shaders.HUDMaterialTechnique`)],st);var lt=ye$1().vec2u8(`uv0`,{glNormalized:!0});function Ft(r){let t=ye$1().vec3f(`position`).vec3f(`normal`).f32(`groundDistance`);return r.hasVertexCenterOffset&&(t=t.vec3f(`centerOffset`)),r.hasVertexColor&&(t=t.vec4u8(`color`,{glNormalized:!0})),r.hasVertexSize&&(t=t.vec2f(`size`)),r.hasVertexRotation&&(t=t.f32(`rotation`)),(r.hasVVColor||r.hasVVSize)&&(t=t.vec4f(`featureAttribute`)),r.hasVertexUVi&&(t=t.vec4i16(`uvi`)),po$1()?t.vec4u8(`olidColor`):t}function ut(){return it??=Gt(),it}function Gt(){let r=new Ma([0,0,0,255,255,0,255,255],[0,1,2,3],2,!0);return new O$1([[`uv0`,r]])}var it=null;var Me=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]];var zt=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1];var Vt=[0,0,1,0,1,1,0,1];var Ct=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5];var ft=Array(36);for(let r=0;r<6;r++)for(let t=0;t<6;t++)ft[r*6+t]=r;var q=Array(36);for(let r=0;r<6;r++)q[r*6]=0,q[r*6+1]=1,q[r*6+2]=2,q[r*6+3]=2,q[r*6+4]=3,q[r*6+5]=0;function ro(r,t){Array.isArray(t)||(t=[t,t,t]);let o=Array(24);for(let e=0;e<8;e++)o[e*3]=Me[e][0]*t[0],o[e*3+1]=Me[e][1]*t[1],o[e*3+2]=Me[e][2]*t[2];return new dt$1(r,[[`position`,new Ma(o,Ct,3,!0)],[`normal`,new Ma(zt,ft,3)],[`uv0`,new Ma(Vt,q,2)]])}var ve=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]];var Et=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0];var Bt=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0];var Ot=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function oo(r,t){Array.isArray(t)||(t=[t,t,t]);let o=Array(18);for(let e=0;e<6;e++)o[e*3]=ve[e][0]*t[0],o[e*3+1]=ve[e][1]*t[1],o[e*3+2]=ve[e][2]*t[2];return new dt$1(r,[[`position`,new Ma(o,Bt,3,!0)],[`normal`,new Ma(Et,Ot,3)]])}var re=r$2(-.5,0,-.5);var oe=r$2(.5,0,-.5);var ae=r$2(0,0,.5);var ne=r$2(0,.5,0);var k=o$6();var W=o$6();var Z=o$6();var K=o$6();var J=o$6();v$2(k,re,ne),v$2(W,re,oe),H$2(Z,k,W),e$3(Z,Z),v$2(k,oe,ne),v$2(W,oe,ae),H$2(K,k,W),e$3(K,K),v$2(k,ae,ne),v$2(W,ae,re),H$2(J,k,W),e$3(J,J);var xe=[re,oe,ae,ne];var _t=[0,-1,0,Z[0],Z[1],Z[2],K[0],K[1],K[2],J[0],J[1],J[2]];var Ht=[0,1,2,3,1,0,3,2,1,3,0,2];var Lt=[0,0,0,1,1,1,2,2,2,3,3,3];function ao(r,t){Array.isArray(t)||(t=[t,t,t]);let o=Array(12);for(let e=0;e<4;e++)o[e*3]=xe[e][0]*t[0],o[e*3+1]=xe[e][1]*t[1],o[e*3+2]=xe[e][2]*t[2];return new dt$1(r,[[`position`,new Ma(o,Ht,3,!0)],[`normal`,new Ma(_t,Lt,3)]])}function no(r,t,o,e,a={uv:!0}){let s=-Math.PI,i=Math.PI*2,g=-Math.PI/2,y=Math.PI,n=Math.max(3,Math.floor(o)),u=Math.max(2,Math.floor(e)),f=(n+1)*(u+1),v=o$5(f*3),A=o$5(f*3),w=o$5(f*2),m=[],p=0;for(let h=0;h<=u;h++){let P=[],l=h/u,S=g+l*y,D=Math.cos(S);for(let F=0;F<=n;F++){let R=F/n,M=s+R*i,V=Math.cos(M)*D,T=Math.sin(S),Y=-Math.sin(M)*D;v[3*p]=V*t,v[3*p+1]=T*t,v[3*p+2]=Y*t,A[3*p]=V,A[3*p+1]=T,A[3*p+2]=Y,w[2*p]=R,w[2*p+1]=l,P.push(p),++p}m.push(P)}let c=[];for(let h=0;h<u;h++)for(let P=0;P<n;P++){let l=m[h][P],S=m[h][P+1],D=m[h+1][P+1],F=m[h+1][P];h===0?(c.push(l),c.push(D),c.push(F)):h===u-1?(c.push(l),c.push(S),c.push(D)):(c.push(l),c.push(S),c.push(D),c.push(D),c.push(F),c.push(l))}let d=[[`position`,new Ma(v,c,3,!0)],[`normal`,new Ma(A,c,3,!0)]];return a.uv&&d.push([`uv0`,new Ma(w,c,2,!0)]),a.offset&&(d[0][0]=`offset`,d.push([`position`,new Ma(Float64Array.from(a.offset),m$2(c.length),3,!0)])),new dt$1(r,d)}function so(r,t,o,e){let a=Rt(t,o,e);return new dt$1(r,a)}function Rt(r,t,o){let e=r,a,s;if(o)a=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],s=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];else{let n=e*(1+Math.sqrt(5))/2;a=[-e,n,0,e,n,0,-e,-n,0,e,-n,0,0,-e,n,0,e,n,0,-e,-n,0,e,-n,n,0,-e,n,0,e,-n,0,-e,-n,0,e],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]}for(let n=0;n<a.length;n+=3)Ae(a,n,r/be(a,n));let i={};function g(n,u){n>u&&([n,u]=[u,n]);let f=n.toString()+`.`+u.toString();if(i[f])return i[f];let v=a.length;return a.length+=3,nt(a,n*3,a,u*3,a,v),Ae(a,v,r/be(a,v)),v/=3,i[f]=v,v}for(let n=0;n<t;n++){let u=s.length,f=Array(u*4);for(let v=0;v<u;v+=3){let A=s[v],w=s[v+1],m=s[v+2],p=g(A,w),c=g(w,m),d=g(m,A),h=v*4;f[h]=A,f[h+1]=p,f[h+2]=d,f[h+3]=w,f[h+4]=c,f[h+5]=p,f[h+6]=m,f[h+7]=d,f[h+8]=c,f[h+9]=p,f[h+10]=c,f[h+11]=d}s=f,i={}}let y=A$1(a);for(let n=0;n<y.length;n+=3)at(y,n);return[[`position`,new Ma(A$1(a),s,3,!0)],[`normal`,new Ma(y,s,3,!0)]]}function lo(r,{normal:t,position:o,color:e,rotation:a,size:s,centerOffset:i,groundDistance:g,uvi:y,featureAttribute:n,olidColor:u=null}={}){let f=o?l$1(o):o$1(),v=t?l$1(t):t$3(0,0,1),A=g==null?[1]:[g],w=m$2(1),m=[[`position`,new Ma(f,w,3,!0)],[`normal`,new Ma(v,w,3,!0)]],p=s!=null&&s.length===2?s:null;if(p&&m.push([`size`,new Ma(p,w,2)]),a!=null&&m.push([`rotation`,new Ma([a],w,1,!0)]),e){let c=[e[0],e[1],e[2],e.length>3?e[3]:255];m.push([`color`,new Ma(c,w,4,!0)])}if(y&&m.push([`uvi`,new Ma(y,w,y.length)]),i&&m.push([`centerOffset`,new Ma(i,w,3)]),m.push([`groundDistance`,new Ma(A,w,1)]),n){let c=[n[0],n[1],n[2],n[3]];m.push([`featureAttribute`,new Ma(c,w,4)])}return u!=null&&te(m,u,w),new dt$1(r,m,null,void 0,ut())}function Ut(r,t,o,e,a=!0,s=!0){let i=0,g=t,y=r,n=r$2(0,i,0),u=r$2(0,i+y,0),f=r$2(0,-1,0),v=r$2(0,1,0);e&&(i=y,u=r$2(0,0,0),n=r$2(0,i,0),f=r$2(0,1,0),v=r$2(0,-1,0));let A=[u,n],w=[f,v],m=o+2,p=Math.sqrt(y*y+g*g);if(e)for(let l=o-1;l>=0;l--){let S=2*Math.PI/o*l,D=r$2(Math.cos(S)*g,i,Math.sin(S)*g);A.push(D);let F=r$2(y*Math.cos(S)/p,-g/p,y*Math.sin(S)/p);w.push(F)}else for(let l=0;l<o;l++){let S=2*Math.PI/o*l,D=r$2(Math.cos(S)*g,i,Math.sin(S)*g);A.push(D);let F=r$2(y*Math.cos(S)/p,g/p,y*Math.sin(S)/p);w.push(F)}let c=[],d=[];if(a){for(let l=3;l<A.length;l++)c.push(1),c.push(l-1),c.push(l),d.push(0),d.push(0),d.push(0);c.push(A.length-1),c.push(2),c.push(1),d.push(0),d.push(0),d.push(0)}if(s){for(let l=3;l<A.length;l++)c.push(l),c.push(l-1),c.push(0),d.push(l),d.push(l-1),d.push(1);c.push(0),c.push(2),c.push(A.length-1),d.push(1),d.push(2),d.push(w.length-1)}let h=o$5(m*3);for(let l=0;l<m;l++)h[l*3]=A[l][0],h[l*3+1]=A[l][1],h[l*3+2]=A[l][2];let P=o$5(m*3);for(let l=0;l<m;l++)P[l*3]=w[l][0],P[l*3+1]=w[l][1],P[l*3+2]=w[l][2];return[[`position`,new Ma(h,c,3,!0)],[`normal`,new Ma(P,d,3,!0)]]}function io(r,t,o,e,a,s=!0,i=!0){return new dt$1(r,Ut(t,o,e,a,s,i))}function uo(r,t,o,e,a,s,i){let g=a?f$3(a):r$2(1,0,0),y$1=s?f$3(s):r$2(0,0,0);i??=!0;let n=o$6();e$3(n,g);let u=o$6();y(u,n,Math.abs(t));let f=o$6();y(f,u,-.5),j$2(f,f,y$1);let v=r$2(0,1,0);Math.abs(1-Z$2(n,v))<.2&&T$1(v,0,0,1);let A=o$6();H$2(A,n,v),e$3(A,A),H$2(v,A,n);let w=e*2+(i?2:0),m=e+(i?2:0),p=o$5(w*3),c=o$5(m*3),d=o$5(w*2),h=Array(e*3*(i?4:2)),P=Array(e*3*(i?4:2));i&&(p[(w-2)*3]=f[0],p[(w-2)*3+1]=f[1],p[(w-2)*3+2]=f[2],d[(w-2)*2]=0,d[(w-2)*2+1]=0,p[(w-1)*3]=p[(w-2)*3]+u[0],p[(w-1)*3+1]=p[(w-2)*3+1]+u[1],p[(w-1)*3+2]=p[(w-2)*3+2]+u[2],d[(w-1)*2]=1,d[(w-1)*2+1]=1,c[(m-2)*3]=-n[0],c[(m-2)*3+1]=-n[1],c[(m-2)*3+2]=-n[2],c[(m-1)*3]=n[0],c[(m-1)*3+1]=n[1],c[(m-1)*3+2]=n[2]);let l=(M,V,T)=>{h[M]=V,P[M]=T},S=0,D=o$6(),F=o$6();for(let M=0;M<e;M++){let V=2*Math.PI/e*M;y(D,v,Math.sin(V)),y(F,A,Math.cos(V)),j$2(D,D,F),c[M*3]=D[0],c[M*3+1]=D[1],c[M*3+2]=D[2],y(D,D,o),j$2(D,D,f),p[M*3]=D[0],p[M*3+1]=D[1],p[M*3+2]=D[2],d[M*2]=M/e,d[M*2+1]=0,p[(M+e)*3]=p[M*3]+u[0],p[(M+e)*3+1]=p[M*3+1]+u[1],p[(M+e)*3+2]=p[M*3+2]+u[2],d[(M+e)*2]=M/e,d[M*2+1]=1;let T=(M+1)%e;l(S++,M,M),l(S++,M+e,M),l(S++,T,T),l(S++,T,T),l(S++,M+e,M),l(S++,T+e,T)}if(i){for(let M=0;M<e;M++){let V=(M+1)%e;l(S++,w-2,m-2),l(S++,M,m-2),l(S++,V,m-2)}for(let M=0;M<e;M++){let V=(M+1)%e;l(S++,M+e,m-1),l(S++,w-1,m-1),l(S++,V+e,m-1)}}let R=[[`position`,new Ma(p,h,3,!0)],[`normal`,new Ma(c,P,3,!0)],[`uv0`,new Ma(d,h,2,!0)]];return new dt$1(r,R)}function po(r,t,o,e,a,s){e||=10,a??=!0,w(t.length>1);let i=[[0,0,0]],g=[],y=[];for(let n=0;n<e;n++){g.push([0,-n-1,-((n+1)%e)-1]);let u=n/e*2*Math.PI;y.push([Math.cos(u)*o,Math.sin(u)*o])}return qt(r,y,t,i,g,a,s)}function qt(r,t,o,e,a,s,i=r$2(0,0,0)){let g=t.length,y$2=o$5(o.length*g*3+(e.length*6||0)),n=o$5(o.length*g*3+(e?6:0)),u=[],f=[],v=0,A=0,w=o$1(),m=o$1(),p=o$1(),c=o$1(),d=o$1(),h=o$1(),P=o$1(),l=o$1(),S=o$1(),D=o$1(),F=o$1(),R=o$1(),M=o$1(),V=G$2();T$1(S,0,1,0),v$2(m,o[1],o[0]),e$3(m,m),s?(j$2(l,o[0],i),e$3(p,l)):T$1(p,0,0,1),pt(m,p,S,S,d,p,ht),P$2(c,p),P$2(R,d);for(let x=0;x<e.length;x++)y(h,d,e[x][0]),y(l,p,e[x][2]),j$2(h,h,l),j$2(h,h,o[0]),y$2[v++]=h[0],y$2[v++]=h[1],y$2[v++]=h[2];n[A++]=-m[0],n[A++]=-m[1],n[A++]=-m[2];for(let x=0;x<a.length;x++)u.push(a[x][0]>0?a[x][0]:-a[x][0]-1+e.length),u.push(a[x][1]>0?a[x][1]:-a[x][1]-1+e.length),u.push(a[x][2]>0?a[x][2]:-a[x][2]-1+e.length),f.push(0),f.push(0),f.push(0);let T=e.length,Y=e.length-1;for(let x=0;x<o.length;x++){let De=!1;x>0&&(P$2(w,m),x<o.length-1?(v$2(m,o[x+1],o[x]),e$3(m,m)):De=!0,j$2(D,w,m),e$3(D,D),j$2(F,o[x-1],c),U$1(o[x],D,V),bn(V,_$1(F,w),l)?(v$2(l,l,o[x]),e$3(p,l),H$2(d,D,p),e$3(d,d)):pt(D,c,R,S,d,p,ht),P$2(c,p),P$2(R,d)),s&&(j$2(l,o[x],i),e$3(M,l));for(let U=0;U<g;U++)if(y(h,d,t[U][0]),y(l,p,t[U][1]),j$2(h,h,l),e$3(P,h),n[A++]=P[0],n[A++]=P[1],n[A++]=P[2],j$2(h,h,o[x]),y$2[v++]=h[0],y$2[v++]=h[1],y$2[v++]=h[2],!De){let ie=(U+1)%g;u.push(T+U),u.push(T+g+U),u.push(T+ie),u.push(T+ie),u.push(T+g+U),u.push(T+g+ie);for(let ue=0;ue<6;ue++){let gt=u.length-6;f.push(u[gt+ue]-Y)}}T+=g}let mt=o[o.length-1];for(let x=0;x<e.length;x++)y(h,d,e[x][0]),y(l,p,e[x][1]),j$2(h,h,l),j$2(h,h,mt),y$2[v++]=h[0],y$2[v++]=h[1],y$2[v++]=h[2];let se=A/3;n[A++]=m[0],n[A++]=m[1],n[A++]=m[2];let le=T-g;for(let x=0;x<a.length;x++)u.push(a[x][0]>=0?T+a[x][0]:-a[x][0]-1+le),u.push(a[x][2]>=0?T+a[x][2]:-a[x][2]-1+le),u.push(a[x][1]>=0?T+a[x][1]:-a[x][1]-1+le),f.push(se),f.push(se),f.push(se);let ct=[[`position`,new Ma(y$2,u,3,!0)],[`normal`,new Ma(n,f,3,!0)]];return new dt$1(r,ct)}function ho(r,t,o,e,a){let s=f(t.length*3),i=Array(2*(t.length-1)),g=0,y=0;for(let u=0;u<t.length;u++){for(let f=0;f<3;f++)s[g++]=t[u][f];u>0&&(i[y++]=u-1,i[y++]=u)}let n=[[`position`,new Ma(s,i,3,!0)]];if(o?.length===t.length&&o[0].length===3){let u=o$5(o.length*3),f=0;for(let v=0;v<t.length;v++)for(let A=0;A<3;A++)u[f++]=o[v][A];n.push([`normal`,new Ma(u,i,3,!0)])}if(e&&n.push([`color`,new Ma(e,U$2(e.length/4),4)]),a?.length===t.length){let u=ot(a,1);n.push([`timeStamps`,new Ma(u,i,de,!0)])}return new dt$1(r,n,null)}function fo(r,t,o,e,a,s=0){let i=Array(18),g=[[-o,s,a/2],[e,s,a/2],[0,t+s,a/2],[-o,s,-a/2],[e,s,-a/2],[0,t+s,-a/2]],y=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let n=0;n<6;n++)i[n*3]=g[n][0],i[n*3+1]=g[n][1],i[n*3+2]=g[n][2];return new dt$1(r,[[`position`,new Ma(i,y,3,!0)]])}function mo(r,t){let o=r.getMutableAttribute(`position`).data;for(let e=0;e<o.length;e+=3){let a=o[e],s=o[e+1],i=o[e+2];T$1(j,a,s,i),aa(j,j,t),o[e]=j[0],o[e+1]=j[1],o[e+2]=j[2]}}function co(r,t=r){let o=r.attributes,e=o.get(`position`).data,a=o.get(`normal`).data;if(a){let s=t.getMutableAttribute(`normal`).data;for(let i=0;i<a.length;i+=3){let g=a[i+1];s[i+1]=-a[i+2],s[i+2]=g}}if(e){let s=t.getMutableAttribute(`position`).data;for(let i=0;i<e.length;i+=3){let g=e[i+1];s[i+1]=-e[i+2],s[i+2]=g}}}function Se(r,t,o,e,a){return Math.abs(Z$2(t,r))>a?!1:(H$2(o,r,t),e$3(o,o),H$2(e,o,r),e$3(e,e),!0)}function pt(r,t,o,e,a,s,i){return Se(r,t,a,s,i)||Se(r,o,a,s,i)||Se(r,e,a,s,i)}var ht=.99619469809;var j=o$1();var t;var e=class extends he{static{t=this}constructor(g){super(g),this.type=`foggy`,this.fogStrength=.5}clone(){return new t({fogStrength:this.fogStrength})}get scattering(){return b$1(t.minScattering,t.maxScattering,this.fogStrength**3)}static{this.minScattering=3e-5}static{this.maxScattering=.005}};g$4([Ar({foggy:`foggy`}),Ss({json:{write:{isRequired:!0}}})],e.prototype,`type`,void 0),g$4([Ss({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],e.prototype,`fogStrength`,void 0),e=t=g$4([js(`esri.views.3d.environment.FoggyWeather`)],e);var u=e;export{t$1 as A,c as C,P as D,p as E,x as F,E as I,H as L,u$1 as M,D as N,_e as O,g$1 as P,rt$1 as R,uo as S,m as T,ro as _,fo as a,te as b,io as c,mo as d,no as f,qt as g,pt as h,co as i,a as j,ye as k,lo as l,po as m,Ft as n,ho as o,oo as p,ao as r,hr as s,u as t,lt as u,so as v,g as w,tt as x,st as y,n$2 as z};