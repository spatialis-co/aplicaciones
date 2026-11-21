import{t as i}from"./chunk-9AKObplt.js";import{S as re,_ as Oe,a as de,b as le,c as l,g as Ee,i as Se,m as o$2,n as d,o as xt,p as o$1,s as ze,t as E,v as U$1,w as x,y as V}from"./chunk-89x_XIIU.js";import{$ as ii,$t as s$1,C as fr,Dn as o$3,Dt as hi,En as r,Kt as R$1,Mt as N,N as Ir,Nt as Ni,On as n$2,Pt as _$1,Q as ei,Rt as ni,Sn as uo,Vt as B$1,an as s,at as ri,bt as o$5,cn as It,d as o$4,dt as vr,en as K$1,et as it$1,gn as co,in as n$1,jt as vt,kn as a,kt as oi,l as r$1,ln as Mo,mn as _,nn as d$1,on as f,p as W$1,pt as A$1,rn as er,vt as z$1,w as mr,wt as ai,xn as po$1,y as Ae,z as Nr$1,zt as si}from"./chunk-BPLIsBmy.js";import{a as t,r as we}from"./chunk-D3zzs-ZX.js";import{A as o$6,D as h,E as r$2,_ as f$1,c as P,g as b$1,j as u,k as l$1,p as X$1,u as R$2,v as g$1,w as t$1}from"./chunk-BTpBVdmx.js";import{i as T$1,r as u$1,t as c$1}from"./chunk-a23rT95Y.js";import{$B as It$1,$b as T$2,Ab as _$2,FR as $$1,FU as A$2,IR as C,KB as g$3,KR as V$1,LA as an,NI as t$2,PA as Y,Qw as Z$1,Rv as P$1,WA as nn,WR as R$3,Xb as P$2,ZU as p,_x as v$2,cU as F,dj as t$3,dx as j$1,fA as m$1,fx as la,gA as $$2,gz as v$1,hA as t$4,hV as js,jI as T$3,lA as _$4,lj as g$2,mx as ra,pA as o$8,qU as _$3,rO as o$7,rx as Z$2,sV as Ss,sx as e$1,tO as e,vx as x$1,yx as y}from"./main-IJ4OI6P6.js";import{c as ge,f as pt,n as Te}from"./chunk-3SE-Lrnp.js";import{t as r$3}from"./chunk-D0SGLxi9.js";import{i as x$2}from"./chunk-DOCe01HE.js";import{i as ye,n as fe,s as w$1}from"./chunk-C79A0GJ0.js";import{W as z$2,n as A$3,z as w$2}from"./chunk-D8oJlTM-.js";function w(s){s.vertex.code.add(o$6`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function T(s,a){switch(a.output){case 5:case 6:case 7:case 8:s.fragment.code.add(o$6`void outputDepth(float _linearDepth){
const float slope_scale = 2.0;
const float bias = 20.0 * .000015259;
float m = max(abs(dFdx(_linearDepth)), abs(dFdy(_linearDepth)));
gl_FragDepth = _linearDepth + slope_scale * m + bias;
}`)}}function $(s,a){let n=a.pbrMode,e=s.fragment;switch(n){case 5:case 3:case 4:case 6:e.code.add(o$6`void applyPBRFactors() {}`);return;case 0:case 7:e.code.add(o$6`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);return;case 2:e.code.add(o$6`float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);return;case 1:{let{hasMetallicRoughnessTexture:c,hasMetallicRoughnessTextureTransform:v,hasOcclusionTexture:t,hasOcclusionTextureTransform:x,bindType:i}=a;(c||t)&&s.include(P,a),e.code.add(`float occlusion;`),c&&e.uniforms.add(i===1?new u(`texMetallicRoughness`,r=>r.textureMetallicRoughness):new t$1(`texMetallicRoughness`,r=>r.textureMetallicRoughness)),t&&e.uniforms.add(i===1?new u(`texOcclusion`,r=>r.textureOcclusion):new t$1(`texOcclusion`,r=>r.textureOcclusion)),e.uniforms.add(i===1?new r$2(`mrrFactors`,r=>r.mrrFactors):new b$1(`mrrFactors`,r=>r.mrrFactors)),e.include(U$1),c&&e.code.add(o$6`void applyMetallicRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`),t&&e.code.add(`void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }`),e.code.add(o$6`
          float getBakedOcclusion() {
            return ${t?`occlusion`:`1.0`};
          }

          void applyPBRFactors() {
            mrr = mrrFactors;
            occlusion = 1.0;

            ${h(c,`applyMetallicRoughness(${v?`metallicRoughnessUV`:`vuv0`});`)}
            ${h(t,`applyOcclusion(${x?`occlusionUV`:`vuv0`});`)}
          }`)}}}function I(s,a){a.snowCover&&(s.uniforms.add(new f(`snowCover`,n=>n.snowCover)).code.add(o$6`float getSnow(vec3 normal, vec3 groundNormal) {
return smoothstep(0.5, 0.55, dot(normal, groundNormal)) * snowCover;
}
float getRealisticTreeSnow(vec3 faceNormal, vec3 shadingNormal, vec3 groundNormal) {
float snow = min(1.0, smoothstep(0.5, 0.55, dot(faceNormal, groundNormal)) +
smoothstep(0.5, 0.55, dot(-faceNormal, groundNormal)) +
smoothstep(0.0, 0.1, dot(shadingNormal, groundNormal)));
return snow * snowCover;
}`),s.include(U$1),s.code.add(o$6`void applySnowToMRR(float snow) {
mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}`))}function U(o,r){switch(o.fragment.code.add(o$6`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`),r.normalType){case 1:o.attributes.add(`normalCompressed`,`vec2`),o.vertex.code.add(o$6`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:o.attributes.add(`normal`,`vec3`),o.vertex.code.add(o$6`vec3 normalModel() {
return normal;
}`);break;default:r.normalType;case 2:case 3:}}function eo(o,r){let{vertex:a,varyings:t}=o;switch(r.normalType){case 0:case 1:o.include(U,r),t.add(`vNormalWorld`,`vec3`),t.add(`vNormalView`,`vec3`),a.uniforms.add(new o$3(`transformNormalViewFromGlobal`,d=>d.transformNormalViewFromGlobal)),a.code.add(o$6`void forwardNormal() {
vNormalWorld = normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case 2:o.vertex.code.add(o$6`void forwardNormal() {}`);break;default:r.normalType;case 3:}}var oo=class extends n$1{constructor(){super(...arguments),this.transformNormalViewFromGlobal=t$2()}};var ro=class extends s{constructor(){super(...arguments),this.toMapSpace=o$7()}};var ao=t$2();function Io(o,r){let{hasModelTransformation:a,instancedDoublePrecision:t,instanced:d,output:n,hasVertexTangents:D}=r;a&&o.vertex.uniforms.add(new o$1(`model`,s=>s.modelTransformation??g$2),new o$3(`normalLocalOriginFromModel`,s=>($$1(ao,s.modelTransformation??g$2),ao))),d&&t&&(o.attributes.add(`instanceModelOriginHi`,`vec3`),o.attributes.add(`instanceModelOriginLo`,`vec3`),o.attributes.add(`instanceModel`,`mat3`),o.attributes.add(`instanceModelNormal`,`mat3`));let i=o.vertex;t&&(i.include(d$1),i.uniforms.add(new s$1(`viewOriginHi`,s=>u$1(T$2(k,s.camera.viewInverseTransposeMatrix[3],s.camera.viewInverseTransposeMatrix[7],s.camera.viewInverseTransposeMatrix[11]),k)),new s$1(`viewOriginLo`,s=>c$1(T$2(k,s.camera.viewInverseTransposeMatrix[3],s.camera.viewInverseTransposeMatrix[7],s.camera.viewInverseTransposeMatrix[11]),k)))),i.code.add(o$6`
    vec3 getVertexInLocalOriginSpace() {
      return ${a?t?`(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz`:`(model * localPosition()).xyz`:t?`instanceModel * localPosition().xyz`:`localPosition().xyz`};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${t?o$6`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:`return vpos;`}
    }

    vec3 dpNormal(vec4 _normal) {
      return normalize(${a?t?`normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)`:`normalLocalOriginFromModel * _normal.xyz`:t?`instanceModelNormal * _normal.xyz`:`_normal.xyz`});
    }
  `),n===4&&i.uniforms.add(R$1).code.add(o$6`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${a?t?`vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)`:`vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)`:t?`vec4(instanceModelNormal * _normal.xyz, 1.0)`:`_normal`}).xyz);
    }
    `),D&&i.code.add(o$6`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${a?t?`return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);`:`return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);`:t?`return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);`:`return _tangent;`}
    }`)}var k=o$8();function to(o,r){r.instancedColor?(o.attributes.add(`instanceColor`,`vec4`),o.vertex.include(_),o.vertex.include(Mo),o.vertex.include(co),o.vertex.code.add(o$6`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${`instanceColor`}));
      }
    `)):o.vertex.code.add(o$6`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}function io$1(o,r){o.varyings.add(`colorMixMode`,`float`),o.varyings.add(`opacityMixMode`,`float`),o.vertex.uniforms.add(new o$4(`symbolColorMixMode`,a=>A$1[a.colorMixMode])),r.hasSymbolColors?(o.vertex.include(_),o.vertex.include(Mo),o.vertex.include(co),o.attributes.add(`symbolColor`,`vec4`),o.vertex.code.add(o$6`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${`symbolColor`}));
    }
  `)):o.vertex.code.add(o$6`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),o.vertex.code.add(o$6`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = float(mask.r ? ${o$6.int(A$1.ignore)} : symbolColorMixMode) + 0.5;
      opacityMixMode = float(mask.a ? ${o$6.int(A$1.ignore)} : symbolColorMixMode) + 0.5;
    }
  `)}function so(o,r$4){let{vertex:a$1,fragment:t,varyings:d}=o;o.include(to,r$4),o.include(io$1,r$4),o.include(a,r$4),a$1.include(_),a$1.include(uo),a$1.include(N),a$1.uniforms.add(new r(`externalColor`,n=>n.externalColor,{supportsNaN:!0})),d.add(`vExternalColor`,`vec4`),a$1.code.add(o$6`
    void forwardDefaultMaterialExternalColor() {
      forwardVertexColor();

      MaskedColor maskedColor =
        applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

      vExternalColor = maskedColor.color;
      forwardColorMixMode(maskedColor.mask);
    }

    bool shouldCullByOpacity() {
      return int(opacityMixMode) != ${o$6.int(A$1.ignore)} && vExternalColor.a < alphaCutoff;
    }
  `),t.include(o$2),t.uniforms.add(new l$1(`opacity`,n=>n.opacity),new l$1(`layerOpacity`,n=>n.layerOpacity)),t.code.add(o$6`
    float getDefaultMaterialOpacity(float textureOpacity) {
      return layerOpacity * mixExternalOpacity(
        ${h(r$4.hasVertexColors,`vColor.a * `)} opacity,
        textureOpacity,
        vExternalColor.a,
        int(opacityMixMode)
      );
    }
  `)}function g(o,r){no(o,r,new l$1(`textureAlphaCutoff`,a=>a.textureAlphaCutoff))}function no(o,r,a){let t=o.fragment;switch(t.code.add(`void discardOrAdjustAlpha(inout vec4 color) {`),r.alphaDiscardMode){case 1:t.code.add(`color.a = 1.0;`);break;case 0:r.output!==0&&(t.include(N),t.code.add(`if (color.a < alphaCutoff) discard;`));break;case 3:r.output!==0&&t.uniforms.add(a).code.add(`if (color.a < textureAlphaCutoff) discard;`);break;case 2:t.uniforms.add(a).code.add(`
        if (color.a < textureAlphaCutoff) discard;
        color.a = 1.0;
      `);break;case 4:break;default:r.alphaDiscardMode}t.code.add(`}`)}function Tr(o,r){let{vertex:a,fragment:t,varyings:d}=o,{hasColorTexture:n,alphaDiscardMode:D}=r,i=n&&D!==1,{output:s,normalType:T$4,hasColorTextureTransform:h$2}=r;switch(s){case 3:si(a,r),o.include(er),t.include(K$1,r),o.include(R$2,r),i&&t.uniforms.add(new u(`tex`,c=>c.texture)),a.main.add(o$6`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),o.include(g,r),t.main.add(o$6`
        discardBySlice(vpos);
        ${h(i,o$6`vec4 texColor = texture(tex, ${h$2?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}`);break;case 5:case 6:case 7:case 8:case 11:si(a,r),o.include(er),o.include(R$2,r),o.include(It,r),o.include(T,r),t.include(K$1,r),o.include(n$2,r),d.add(`depth`,`float`,{invariant:!0}),i&&t.uniforms.add(new u(`tex`,c=>c.texture)),a.uniforms.add(B$1).main.add(o$6`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),o.include(g,r),t.main.add(o$6`
        discardBySlice(vpos);
        ${h(i,o$6`vec4 texColor = texture(tex, ${h$2?`colorUV`:`vuv0`});
               discardOrAdjustAlpha(texColor);`)}
        ${s===11?o$6`outputObjectAndLayerIdColor();`:o$6`outputDepth(depth);`}`);break;case 4:{si(a,r),o.include(er),o.include(U,r),o.include(eo,r),o.include(R$2,r),o.include(It,r),o.include(so,r),i&&t.uniforms.add(new u(`tex`,lo=>lo.texture)),T$4===2&&d.add(`vPositionView`,`vec3`,{invariant:!0});let c=T$4===0||T$4===1;a.main.add(o$6`
        forwardDefaultMaterialExternalColor();

        if (shouldCullByOpacity()) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = getVertexInLocalOriginSpace();
        ${c?o$6`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:o$6`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),t.include(K$1,r),o.include(g,r),t.main.add(o$6`
        discardBySlice(vpos);
        ${h(i,o$6`vec4 texColor = texture(tex, ${h$2?`colorUV`:`vuv0`});
               discardOrAdjustAlpha(texColor);`,o$6`vec4 texColor = vec4(1.0);`)}
        float opacity = getDefaultMaterialOpacity(texColor.a);

        ${T$4===2?o$6`vec3 normal = screenDerivativeNormal(vPositionView);`:o$6`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, opacity);`);break}case 10:si(a,r),o.include(er),o.include(R$2,r),o.include(It,r),i&&t.uniforms.add(new u(`tex`,c=>c.texture)),a.main.add(o$6`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),t.include(K$1,r),o.include(g,r),o.include(_$1,r),t.main.add(o$6`
        discardBySlice(vpos);
        ${h(i,o$6`vec4 texColor = texture(tex, ${h$2?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function Nr(o,r){r.hasColorTextureTransform?(o.varyings.add(`colorUV`,`vec2`),o.vertex.uniforms.add(new o$3(`colorTextureTransformMatrix`,a=>a.colorTextureTransformMatrix??T$3)).code.add(o$6`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(o$6`void forwardColorUV(){}`)}function Pr(o,r){r.hasNormalTextureTransform&&r.textureCoordinateType!==0?(o.varyings.add(`normalUV`,`vec2`),o.vertex.uniforms.add(new o$3(`normalTextureTransformMatrix`,a=>a.normalTextureTransformMatrix??T$3)).code.add(o$6`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(o$6`void forwardNormalUV(){}`)}function Ur(o,r){r.hasEmissionTextureTransform&&r.textureCoordinateType!==0?(o.varyings.add(`emissiveUV`,`vec2`),o.vertex.uniforms.add(new o$3(`emissiveTextureTransformMatrix`,a=>a.emissiveTextureTransformMatrix??T$3)).code.add(o$6`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(o$6`void forwardEmissiveUV(){}`)}function kr(o,r){r.hasOcclusionTextureTransform&&r.textureCoordinateType!==0?(o.varyings.add(`occlusionUV`,`vec2`),o.vertex.uniforms.add(new o$3(`occlusionTextureTransformMatrix`,a=>a.occlusionTextureTransformMatrix??T$3)).code.add(o$6`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(o$6`void forwardOcclusionUV(){}`)}function Dr(o,r){r.hasMetallicRoughnessTextureTransform&&r.textureCoordinateType!==0?(o.varyings.add(`metallicRoughnessUV`,`vec2`),o.vertex.uniforms.add(new o$3(`metallicRoughnessTextureTransformMatrix`,a=>a.metallicRoughnessTextureTransformMatrix??T$3)).code.add(o$6`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(o$6`void forwardMetallicRoughnessUV(){}`)}function J$1(o){let a=new T$1,{attributes:G,vertex:r,fragment:i,varyings:s}=a,{output:H,offsetBackfaces:f,pbrMode:u$2,snowCover:n}=o,K=u$2===1||u$2===2;if(si(r,o),G.add(`position`,`vec3`),r.inputs.add(`position`,()=>`position`),s.add(`vpos`,`vec3`,{invariant:!0}),a.include(It,o),a.include(Io,o),a.include(W$1,o),a.include(Nr,o),!g$1(H))return a.include(Tr,o),a;a.include(Ur,o),ni(a.vertex,o),a.include(U,o),a.include(er),f&&a.include(w),s.add(`vNormalWorld`,`vec3`),s.add(`localvpos`,`vec3`,{invariant:!0}),a.include(R$2,o),a.include(so,o),a.include(o.instancedDoublePrecision?Ee:Oe,o),r.main.add(o$6`
    forwardDefaultMaterialExternalColor();

    vpos = getVertexInLocalOriginSpace();

    localvpos = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
    vpos = addVerticalOffset(vpos, localOrigin);
    vec4 basePosition = transformPosition(proj, view, vpos);

    forwardTextureCoordinates();
    forwardColorUV();
    forwardEmissiveUV();
    forwardLinearDepthToReadShadow();

    gl_Position = shouldCullByOpacity() ? vec4(1e38, 1e38, 1e38, 1.0) :
    ${h(f,`offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);`,`basePosition;`)}
  `);let{hasColorTexture:d,hasColorTextureTransform:q}=o;return i.include(xt,o),i.include(de,o),a.include(g,o),i.include(K$1,o),a.include(Ni,o),ni(i,o),Se(i),i.uniforms.add(x,ze,r.uniforms.get(`localOrigin`),r.uniforms.get(`view`),new r$2(`ambient`,t=>t.ambient),new r$2(`diffuse`,t=>t.diffuse)),d&&i.uniforms.add(new u(`tex`,t=>t.texture)),a.include($,o),i.include(re,o),i.include(I,o),i.include(le,o),i.uniforms.add(V).main.add(o$6`
    discardBySlice(vpos);
    vec4 texColor = ${d?`texture(tex, ${q?`colorUV`:`vuv0`})`:` vec4(1.0)`};
    ${h(d,`${h(o.textureAlphaPremultiplied,`texColor.rgb /= texColor.a;`)}
      discardOrAdjustAlpha(texColor);`)}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse();
    ssao *= getBakedOcclusion();

    float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
    float shadow = readShadow(additionalAmbientScale, vpos);
    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(
      ${h(o.hasVertexColors,`vColor.rgb * `)} matColor,
      texColor.rgb,
      vExternalColor.rgb,
      int(colorMixMode)
    );
    float opacity_ = getDefaultMaterialOpacity(texColor.a);

    vec3 shadingNormal = normalize(vNormalWorld);
    vec3 viewDirection = normalize(vpos - cameraPosition);
    vec3 upNormal = getLocalUp(vpos, localOrigin);

    ${h(n,`vec3 faceNormal = screenDerivativeNormal(vpos);
        float snow = getRealisticTreeSnow(faceNormal, shadingNormal, upNormal);
        albedo = mix(albedo, vec3(1), snow);`)}

    ${o$6`albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}

    ${h(K&&n,`applySnowToMRR(snow);`)}

    vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, upNormal);
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${h(n,`, 1.0`)});
  `),a}var yo=Object.freeze(Object.defineProperty({__proto__:null,build:J$1},Symbol.toStringTag,{value:`Module`}));function n(i,a){let e=i.fragment;switch(a.doubleSidedMode){case 0:e.code.add(`vec3 shadingNormal(vec3 normalView, vec3 viewDirection) { return normalize(normalView); }`);break;case 1:e.code.add(o$6`vec3 shadingNormal(vec3 normalView, vec3 viewDirection) {
return dot(normalView, viewDirection) > 0.0 ? normalize(-normalView) : normalize(normalView);
}`);break;case 2:e.code.add(o$6`vec3 shadingNormal(vec3 normalView, vec3 viewDirection) {
return gl_FrontFacing ? normalize(normalView) : normalize(-normalView);
}`);break;default:a.doubleSidedMode;case 3:}}function io(o,a){return po(o,a)}function po(o,a){let n=o.fragment,{hasVertexTangents:s,doubleSidedMode:e,hasNormalTexture:c,textureCoordinateType:f,bindType:l$2,hasNormalTextureTransform:m}=a;s?(o.attributes.add(`tangent`,`vec4`),o.varyings.add(`vTangent`,`vec4`),e===2?n.code.add(o$6`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):n.code.add(o$6`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):n.code.add(o$6`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),c&&f!==0&&(o.include(P,a),n.uniforms.add(l$2===1?new u(`normalTexture`,r=>r.textureNormal):new t$1(`normalTexture`,r=>r.textureNormal)),m&&(n.uniforms.add(l$2===1?new r$1(`scale`,r=>r.scale??_$2):new l(`scale`,r=>r.scale??_$2)),n.uniforms.add(new o$3(`normalTextureTransformMatrix`,r=>r.normalTextureTransformMatrix??T$3))),n.code.add(o$6`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),m&&n.code.add(o$6`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),n.code.add(o$6`return tangentSpace * rawNormal;
}`))}function vo(o){let a=new T$1,{attributes:n$3,vertex:s,fragment:e,varyings:c}=a,{output:f,normalType:l,offsetBackfaces:m,snowCover:r,pbrMode:T,textureAlphaPremultiplied:so$1,instancedDoublePrecision:lo,hasVertexColors:mo,hasVertexTangents:w$3,hasColorTexture:h$1,hasNormalTexture:co,hasNormalTextureTransform:uo,hasColorTextureTransform:fo}=o;if(si(s,o),n$3.add(`position`,`vec3`),s.inputs.add(`position`,()=>`position`),c.add(`vpos`,`vec3`,{invariant:!0}),a.include(It,o),a.include(Io,o),a.include(W$1,o),a.include(Nr,o),!g$1(f))return a.include(Tr,o),a;a.include(Pr,o),a.include(Ur,o),a.include(kr,o),a.include(Dr,o),ni(s,o),a.include(U,o),a.include(er);let p=l===0||l===1;return p&&m&&a.include(w),a.include(io,o),a.include(eo,o),c.add(`vPositionLocal`,`vec3`),a.include(R$2,o),a.include(so,o),a.include(lo?Ee:Oe,o),s.main.add(o$6`
    forwardDefaultMaterialExternalColor();

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${h(p,`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`)}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${h(w$3,`vTangent = dpTransformVertexTangent(tangent);`)}
    gl_Position = transformPosition(proj, view, vpos);
    ${h(p&&m,`gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);`)}

    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (shouldCullByOpacity()) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadow();
  `),e.include(xt,o),e.include(de,o),a.include(g,o),e.include(K$1,o),a.include(Ni,o),ni(e,o),e.uniforms.add(s.uniforms.get(`localOrigin`),new r$2(`ambient`,d=>d.ambient),new r$2(`diffuse`,d=>d.diffuse)),h$1&&e.uniforms.add(new u(`tex`,d=>d.texture)),a.include($,o),e.include(re,o),a.include(n,o),e.include(I,o),e.include(le,o),Se(e),e.uniforms.add(ze),e.uniforms.add(V).main.add(o$6`
    discardBySlice(vpos);
    ${h$1?o$6`
            vec4 texColor = texture(tex, ${fo?`colorUV`:`vuv0`});
            ${h(so$1,`texColor.rgb /= texColor.a;`)}
            discardOrAdjustAlpha(texColor);`:`vec4 texColor = vec4(1.0);`}
    vec3 viewDirection = normalize(vpos - cameraPosition);
    vec3 posWorld = vpos + localOrigin;
    vec3 upNormal = getLocalUp(posWorld);
    ${l===2?`vec3 normal = screenDerivativeNormal(vPositionLocal);`:`vec3 normal = shadingNormal(vNormalWorld, viewDirection);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(
      ${h(mo,`vColor.rgb *`)} matColor,
      texColor.rgb,
      vExternalColor.rgb,
      int(colorMixMode)
    );
    float opacity_ = getDefaultMaterialOpacity(texColor.a);

    ${co?`mat3 tangentSpace = computeTangentSpace(${w$3?`normal`:`normal, vpos, vuv0`});
           vec3 shadingNormal = computeTextureNormal(tangentSpace, ${uo?`normalUV`:`vuv0`});`:`vec3 shadingNormal = normal;`}

    ${h(r,o$6`
          float snow = getSnow(normal, upNormal);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
    ${h((T===1||T===2)&&r,`applySnowToMRR(snow);`)}

    vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, upNormal);
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${h(r,`, snow`)});
  `),a}var ea=Object.freeze(Object.defineProperty({__proto__:null,build:vo},Symbol.toStringTag,{value:`Module`}));var R=class{constructor(e,s,i){this.elementSize=s.stride,this._buffer=new r$3(e,fe(s,1)),this.resize(i)}destroy(){this._buffer.dispose()}get capacity(){return this._capacity}get array(){return this._array}get buffer(){return this._buffer}get usedMemory(){return this._array.byteLength+this._buffer.usedMemory}copyRange(e,s,i,r=0){let l=new Uint8Array(this.array,e*this.elementSize,(s-e)*this.elementSize);new Uint8Array(i.array,r*this.elementSize).set(l)}transferAll(){this._buffer.setData(this._array)}transferRange(e,s){let i=e*this.elementSize,r=s*this.elementSize;this._buffer.setSubData(new Uint8Array(this._array),i,i,r)}resize(e){let s=e*this.elementSize,i=new ArrayBuffer(s);this._array&&(e>=this._capacity?new Uint8Array(i).set(new Uint8Array(this._array)):new Uint8Array(i).set(new Uint8Array(this._array).subarray(0,e*this.elementSize))),this._array=i,this._buffer.setSize(s),this._capacity=e}};var D=class{constructor(e){this.localTransform=e.localTransform,this.globalTransform=e.globalTransform,this.modelOrigin=e.modelOrigin,this.model=e.instanceModel,this.modelNormal=e.instanceModelNormal,this.modelScaleFactors=e.modelScaleFactors,this.boundingSphere=e.boundingSphere,this.featureAttribute=e.getField(`instanceFeatureAttribute`,z$2),this.color=e.getField(`instanceColor`,A$3),this.olidColor=e.getField(`instanceOlidColor`,A$3),this.state=e.getField(`state`,w$2),this.lodLevel=e.getField(`lodLevel`,w$2)}};var b=class extends It$1{constructor(t,e){super(t),this.events=new v$1,this._capacity=0,this._size=0,this._next=0,this._highlightOptionsMap=/* @__PURE__ */ new Map,this._highlightOptionsMapPrev=/* @__PURE__ */ new Map,this._layout=it(e),this._capacity=S,this._buffer=this._layout.createBuffer(this._capacity),this._view=new D(this._buffer)}get capacity(){return this._capacity}get size(){return this._size}get view(){return this._view}addInstance(){this._size+1>this._capacity&&this._grow();let t=this._findSlot();return this._view.state.set(t,1),this._size++,this.events.emit(`instances-changed`),t}removeInstance(t){let e=this._view.state;w$1(t>=0&&t<this._capacity&&!!(e.get(t)&1),`invalid instance handle`),this._getStateFlag(t,18)?this._setStateFlags(t,32):this.freeInstance(t),this.events.emit(`instances-changed`)}freeInstance(t){let e=this._view.state;w$1(t>=0&&t<this._capacity&&!!(e.get(t)&1),`invalid instance handle`),e.set(t,0),this._size--}setLocalTransform(t,e,s=!0){this._view.localTransform.setMat(t,e),s&&this.updateModelTransform(t)}getLocalTransform(t,e){this._view.localTransform.getMat(t,e)}setGlobalTransform(t,e,s=!0){this._view.globalTransform.setMat(t,e),s&&this.updateModelTransform(t)}getGlobalTransform(t,e){this._view.globalTransform.getMat(t,e)}updateModelTransform(t){let e=this._view,s=c,i=m;e.localTransform.getMat(t,Je),e.globalTransform.getMat(t,W);let r=Z$1(W,W,Je);T$2(s,r[12],r[13],r[14]),e.modelOrigin.setVec(t,s),C(i,r),e.model.setMat(t,i);let l=P$1(c,r);l.sort(),e.modelScaleFactors.set(t,0,l[1]),e.modelScaleFactors.set(t,1,l[2]),V$1(i,i),R$3(i,i),e.modelNormal.setMat(t,i),this._setStateFlags(t,64),this.events.emit(`instance-transform-changed`,{index:t})}getModelTransform(t,e){let s=this._view;s.model.getMat(t,m),s.modelOrigin.getVec(t,c),e[0]=m[0],e[1]=m[1],e[2]=m[2],e[3]=0,e[4]=m[3],e[5]=m[4],e[6]=m[5],e[7]=0,e[8]=m[6],e[9]=m[7],e[10]=m[8],e[11]=0,e[12]=c[0],e[13]=c[1],e[14]=c[2],e[15]=1}applyShaderTransformation(t,e){this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,t,e)}getCombinedModelTransform(t,e){return this.getModelTransform(t,e),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,t,e),e}getCombinedLocalTransform(t,e){this._view.localTransform.getMat(t,e),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,t,e)}getCombinedMaxScaleFactor(t){let e=this._view.modelScaleFactors.get(t,1);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(c,this,t),e*=Math.max(c[0],c[1],c[2])),e}getCombinedMedianScaleFactor(t){let e=this._view.modelScaleFactors.get(t,0);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(c,this,t),e*=tt(c[0],c[1],c[2])),e}getModel(t,e){this._view.model.getMat(t,e)}setFeatureAttribute(t,e){this._view.featureAttribute?.setVec(t,e)}getFeatureAttribute(t,e){this._view.featureAttribute?.getVec(t,e)}setColor(t,e){this._view.color?.setVec(t,e)}setObjectAndLayerIdColor(t,e){this._view.olidColor?.setVec(t,e)}setVisible(t,e){e!==this.getVisible(t)&&(this._setStateFlag(t,4,e),this.events.emit(`instance-visibility-changed`,{index:t}))}getVisible(t){return this._getStateFlag(t,4)}setHighlight(t,e){let{_highlightOptionsMap:s}=this,i=s.get(t);e?e!==i&&(s.set(t,e),this._setStateFlag(t,8,!0),this.events.emit(`instance-highlight-changed`)):i&&(s.delete(t),this._setStateFlag(t,8,!1),this.events.emit(`instance-highlight-changed`))}get highlightOptionsMap(){return this._highlightOptionsMap}getHighlightStateFlag(t){return this._getStateFlag(t,8)}geHighlightOptionsPrev(t){let e=this._highlightOptionsMapPrev.get(t)??null;return this._highlightOptionsMapPrev.delete(t),e}getHighlightName(t){let e=this.highlightOptionsMap.get(t)??null;return e?this._highlightOptionsMapPrev.set(t,e):this._highlightOptionsMapPrev.delete(t),e}getState(t){return this._view.state.get(t)}getLodLevel(t){return this._view.lodLevel.get(t)}countFlags(t){let e=0;for(let s=0;s<this._capacity;++s)this.getState(s)&t&&++e;return e}_setStateFlags(t,e){let s=this._view.state;e=s.get(t)|e,s.set(t,e)}_clearStateFlags(t,e){let s=this._view.state;e=s.get(t)&~e,s.set(t,e)}_setStateFlag(t,e,s){s?this._setStateFlags(t,e):this._clearStateFlags(t,e)}_getStateFlag(t,e){return!!(this._view.state.get(t)&e)}_grow(){this._capacity=Math.max(S,Math.floor(this._capacity*p)),this._buffer=this._layout.createBuffer(this._capacity).copyFrom(this._buffer),this._view=new D(this._buffer)}_findSlot(){let t=this._view.state,e=this._next;for(;t.get(e)&1;)e=e+1===this._capacity?0:e+1;return this._next=e+1===this._capacity?0:e+1,e}};g$3([Ss({constructOnly:!0})],b.prototype,`shaderTransformation`,void 0),g$3([Ss()],b.prototype,`_size`,void 0),g$3([Ss({readOnly:!0})],b.prototype,`size`,null),b=g$3([js(`esri.views.3d.webgl-engine.lib.lodRendering.InstanceData`)],b);function tt(t,e,s){return Math.max(Math.min(t,e),Math.min(Math.max(t,e),s))}var st=ye().mat4f64(`localTransform`).mat4f64(`globalTransform`).vec4f64(`boundingSphere`).vec3f64(`modelOrigin`).mat3f(`instanceModel`).mat3f(`instanceModelNormal`).vec2f(`modelScaleFactors`);function it(t){return j(st.clone(),t).u8(`state`).u8(`lodLevel`)}function j(t,e){return e.instancedFeatureAttribute&&t.vec4f(`instanceFeatureAttribute`),e.instancedColor&&t.vec4u8(`instanceColor`),po$1()&&t.vec4u8(`instanceOlidColor`),t}var c=o$8();var m=t$2();var Je=t$3();var W=t$3();var S=64;var Z=class{constructor(e){this.model=e.instanceModel,this.modelNormal=e.instanceModelNormal,this.modelOriginHi=e.instanceModelOriginHi,this.modelOriginLo=e.instanceModelOriginLo,this.featureAttribute=e.getField(`instanceFeatureAttribute`,z$2),this.color=e.getField(`instanceColor`,A$3),this.olidColor=e.getField(`instanceOlidColor`,A$3)}};var Qe=class{constructor(e,s){this._rctx=e,this._layout=s,this._headIndex=0,this._tailIndex=0,this._firstIndex=null,this._captureFirstIndex=!0,this._updating=!1,this._prevHeadIndex=0,this._resized=!1,this._capacity=1}destroy(){this._buffer&&this._buffer.destroy()}get buffer(){return this._buffer.buffer}get view(){return this._view}get capacity(){return this._capacity}get size(){let e=this._headIndex,s=this._tailIndex;return e>=s?e-s:e+this._capacity-s}get isEmpty(){return this._headIndex===this._tailIndex}get isFull(){return this._tailIndex===(this._headIndex+1)%this._capacity}get headIndex(){return this._headIndex}get tailIndex(){return this._tailIndex}get firstIndex(){return this._firstIndex}get usedMemory(){return this._buffer?.usedMemory??0}reset(){this._headIndex=0,this._tailIndex=0,this._firstIndex=null}startUpdateCycle(){this._captureFirstIndex=!0}beginUpdate(){w$1(!this._updating,`already updating`),this._updating=!0,this._prevHeadIndex=this._headIndex}endUpdate(){w$1(this._updating,`not updating`),this.size<.5*this.capacity&&this._shrink(),this._resized?(this._buffer.transferAll(),this._resized=!1):this._transferRange(this._prevHeadIndex,this._headIndex),this._updating=!1}allocateHead(){w$1(this._updating,`not updating`),this.isFull&&this._grow();let e=this.headIndex;return this._captureFirstIndex&&=(this._firstIndex=e,!1),this._incrementHead(),w$1(this._headIndex!==this._tailIndex,`invalid pointers`),e}freeTail(){w$1(this._updating,`not updating`),w$1(this.size>0,`invalid size`);let e=this._tailIndex===this._firstIndex;this._incrementTail(),e&&(this._firstIndex=this._tailIndex)}_grow(){let e=Math.max(S,Math.floor(this._capacity*p));this._resize(e)}_shrink(){let e=Math.max(S,Math.floor(this._capacity*A$2));this._resize(e)}_resize(e){if(w$1(this._updating,`not updating`),e===this._capacity)return;let s=new R(this._rctx,this._layout,e);if(this._buffer){this._firstIndex&&=(this._firstIndex+this._capacity-this._tailIndex)%this._capacity;let i=this.size,r=this._compactInstances(s);w$1(r===i,`invalid compaction`),this._buffer.destroy(),this._tailIndex=0,this._headIndex=r,this._prevHeadIndex=0}this._resized=!0,this._capacity=e,this._buffer=s,this._view=new Z(this._layout.createView(this._buffer.array))}_compactInstances(e){let s=this._headIndex,i=this._tailIndex;return i<s?(this._buffer.copyRange(i,s,e),s-i):i>s?(this._buffer.copyRange(i,this._capacity,e),s>0&&this._buffer.copyRange(0,s,e,this._capacity-i),s+(this._capacity-i)):0}_incrementHead(e=1){this._headIndex=(this._headIndex+e)%this._capacity}_incrementTail(e=1){this._tailIndex=(this._tailIndex+e)%this._capacity}_transferRange(e,s){e<s?this._buffer.transferRange(e,s):e>s&&(s>0&&this._buffer.transferRange(0,s),this._buffer.transferRange(e,this._capacity))}};var rt=ye().vec3f(`instanceModelOriginHi`).vec3f(`instanceModelOriginLo`).mat3f(`instanceModel`).mat3f(`instanceModelNormal`);function Xe(t){return j(rt.clone(),t)}var z=class extends oo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=x$2,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType=`normal`,this.cullFace=2,this.instanced=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.instanceColorEncodesAlphaIgnore=!1,this.emissiveStrengthFromSymbol=0,this.emissiveStrengthKHR=1,this.emissiveSource=1,this.emissiveBaseColor=m$1,this.instancedDoublePrecision=!1,this.normalType=0,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=_$4(.2,.2,.2),this.diffuse=_$4(.8,.8,.8),this.externalColor=e(1,1,1,1),this.colorMixMode=`multiply`,this.opacity=1,this.layerOpacity=1,this.origin=o$8(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.modelTransformation=null,this.drivenOpacity=!1,this.customDepthTest=0,this.textureAlphaMode=0,this.textureAlphaCutoff=t,this.textureAlphaPremultiplied=!1,this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1}get emissiveStrength(){return this.emissiveStrengthFromSymbol*this.emissiveStrengthKHR}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}};var Ye=class extends ro{constructor(){super(...arguments),this.origin=o$8(),this.slicePlaneLocalOrigin=this.origin}get localOrigin(){return this.origin}};var v=class extends fr{constructor(t,e){let s=fe(K(e));e.instanced&&e.instancedDoublePrecision&&(s=s.concat(fe(Xe(e)))),super(t,e,s),this.shader=new mr(ea,()=>import(`./chunk-BLY-UkgH.js`)),this.ignoreUnused=!0}_makePipeline(t,e){let{output:s,transparent:i,cullFace:r,customDepthTest:l,hasOccludees:h}=t;return pt({blending:i?oi(s,!1,t.emissionDimmingPass):null,culling:ot(t)?ge(r):null,depthTest:hi(s,at(l)),depthWrite:ai(t),colorWrite:Te,stencilWrite:h?ei:null,stencilTest:h?e?ii:ri:null,polygonOffset:vt(t)})}initializePipeline(t){return this._occludeePipelineState=this._makePipeline(t,!0),this._makePipeline(t,!1)}getPipeline(t,e,s){return s?this._occludeePipelineState:super.getPipeline(t,e,s)}};v=g$3([js(`esri.views.3d.webgl-engine.shaders.DefaultMaterialTechnique`)],v);function at(t){switch(t){case 1:return 515;case 0:return 513;case 2:return 516;case 3:return 514;case 4:return 513}}function ot(t){return t.cullFace!==0||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}function K(t){let e=ye().vec3f(`position`);return t.normalType===1?e.vec2i16(`normalCompressed`,{glNormalized:!0}):e.vec3f(`normal`),t.hasVertexTangents&&e.vec4f(`tangent`),t.hasTextures&&e.vec2f16(`uv0`),t.hasVertexColors&&e.vec4u8(`color`,{glNormalized:!0}),t.hasSymbolColors&&e.vec4u8(`symbolColor`),!t.instanced&&po$1()&&e.vec4u8(`olidColor`),e}var o=class extends o$5{constructor(e){super(),this.spherical=e,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.pbrMode=0,this.cullFace=0,this.normalType=0,this.customDepthTest=0,this.emissionSource=0,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.instanced=!1,this.instancedDoublePrecision=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.receiveShadows=!1,this.hasShadowHighlights=!1,this.receiveAmbientOcclusion=!1,this.receiveGlobalIllumination=!1,this.textureAlphaPremultiplied=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.writeDepth=!0,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0,this.draped=!1,this.renderOccluded=!1}get textureCoordinateType(){return+!!this.hasTextures}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||this.emissionSource===3||this.hasOcclusionTexture}get hasVVInstancing(){return this.instanced}};g$3([f$1({count:4})],o.prototype,`alphaDiscardMode`,void 0),g$3([f$1({count:3})],o.prototype,`doubleSidedMode`,void 0),g$3([f$1({count:8})],o.prototype,`pbrMode`,void 0),g$3([f$1({count:3})],o.prototype,`cullFace`,void 0),g$3([f$1({count:3})],o.prototype,`normalType`,void 0),g$3([f$1({count:4})],o.prototype,`customDepthTest`,void 0),g$3([f$1({count:8})],o.prototype,`emissionSource`,void 0),g$3([f$1()],o.prototype,`hasVertexColors`,void 0),g$3([f$1()],o.prototype,`hasSymbolColors`,void 0),g$3([f$1()],o.prototype,`hasVerticalOffset`,void 0),g$3([f$1()],o.prototype,`hasColorTexture`,void 0),g$3([f$1()],o.prototype,`hasMetallicRoughnessTexture`,void 0),g$3([f$1()],o.prototype,`hasOcclusionTexture`,void 0),g$3([f$1()],o.prototype,`hasNormalTexture`,void 0),g$3([f$1()],o.prototype,`hasScreenSizePerspective`,void 0),g$3([f$1()],o.prototype,`hasVertexTangents`,void 0),g$3([f$1()],o.prototype,`hasOccludees`,void 0),g$3([f$1()],o.prototype,`instanced`,void 0),g$3([f$1()],o.prototype,`instancedDoublePrecision`,void 0),g$3([f$1()],o.prototype,`hasModelTransformation`,void 0),g$3([f$1()],o.prototype,`offsetBackfaces`,void 0),g$3([f$1()],o.prototype,`hasVVSize`,void 0),g$3([f$1()],o.prototype,`hasVVColor`,void 0),g$3([f$1()],o.prototype,`receiveShadows`,void 0),g$3([f$1()],o.prototype,`hasShadowHighlights`,void 0),g$3([f$1()],o.prototype,`receiveAmbientOcclusion`,void 0),g$3([f$1()],o.prototype,`receiveGlobalIllumination`,void 0),g$3([f$1()],o.prototype,`textureAlphaPremultiplied`,void 0),g$3([f$1()],o.prototype,`instancedFeatureAttribute`,void 0),g$3([f$1()],o.prototype,`instancedColor`,void 0),g$3([f$1()],o.prototype,`writeDepth`,void 0),g$3([f$1()],o.prototype,`snowCover`,void 0),g$3([f$1()],o.prototype,`hasColorTextureTransform`,void 0),g$3([f$1()],o.prototype,`hasEmissionTextureTransform`,void 0),g$3([f$1()],o.prototype,`hasNormalTextureTransform`,void 0),g$3([f$1()],o.prototype,`hasOcclusionTextureTransform`,void 0),g$3([f$1()],o.prototype,`hasMetallicRoughnessTextureTransform`,void 0);var A=class extends v{constructor(){super(...arguments),this.shader=new mr(yo,()=>import(`./chunk-C53YDHYg.js`))}};A=g$3([js(`esri.views.3d.webgl-engine.shaders.RealisticTreeTechnique`)],A);var $e=class extends it$1{constructor(e,s){super(e,X),this.materialType=`default`,this.supportsEdges=!0,this.intersectRayDraped=void 0,this.intersectScreenPolygonDraped=void 0,this.produces=/* @__PURE__ */ new Map([[2,i=>X$1(i)&&!this.transparent],[4,i=>X$1(i)&&this.transparent]]),this._layout=K(this.parameters),this._configuration=new o(s.spherical)}isVisibleForOutput(e){return e===5||e===7||e===6?this.parameters.castShadows:!0}get visible(){let{layerOpacity:e,colorMixMode:s,opacity:i,externalColor:r}=this.parameters,l=s===`replace`?1:i,h=s===`ignore`||isNaN(r[3])?1:r[3];return e*l*h>=t}get _hasEmissiveBase(){return!!this.parameters.emissiveTextureId||!la(this.parameters.emissiveBaseColor,m$1)}get emissions(){return this.parameters.emissiveStrength>0&&(this.parameters.emissiveSource===0&&this._hasEmissiveBase||this.parameters.emissiveSource===1)?this.transparent?2:1:0}updateConfiguration(e){super.updateConfiguration(e);let{parameters:s,_configuration:i}=this;i.hasNormalTexture=s.hasNormalTexture,i.hasColorTexture=s.hasColorTexture,i.hasMetallicRoughnessTexture=s.hasMetallicRoughnessTexture,i.hasOcclusionTexture=s.hasOcclusionTexture;let{treeRendering:r,doubleSided:l,doubleSidedType:h}=s;i.hasVertexTangents=!r&&s.hasVertexTangents,i.instanced=s.instanced,i.instancedDoublePrecision=s.instancedDoublePrecision,i.hasVVColor=!!s.vvColor,i.hasVVSize=!!s.vvSize,i.hasVerticalOffset=s.verticalOffset!=null,i.hasScreenSizePerspective=s.screenSizePerspective!=null,i.hasSlicePlane=s.hasSlicePlane,i.alphaDiscardMode=s.textureAlphaMode,i.normalType=r?0:s.normalType,i.transparent=this.transparent,i.enableOITOffset=e.enableOITOffset,i.customDepthTest=s.customDepthTest??0,i.hasOccludees=e.hasOccludees,i.cullFace=s.hasSlicePlane?0:s.cullFace,i.hasModelTransformation=!r&&s.modelTransformation!=null,i.hasVertexColors=s.hasVertexColors,i.hasSymbolColors=s.hasSymbolColors,i.doubleSidedMode=r?2:l&&h===`normal`?1:l&&h===`winding-order`?2:0,i.instancedFeatureAttribute=s.instancedFeatureAttribute,i.instancedColor=s.instancedColor,g$1(e.output)?(i.receiveShadows=s.receiveShadows,i.hasShadowHighlights=E(i,e),i.receiveAmbientOcclusion=s.receiveAmbientOcclusion&&e.ssao!=null,i.receiveGlobalIllumination=s.receiveAmbientOcclusion&&e.globalIlluminationEnabled):i.receiveShadows=i.hasShadowHighlights=i.receiveAmbientOcclusion=i.receiveGlobalIllumination=!1,i.textureAlphaPremultiplied=!!s.textureAlphaPremultiplied,i.pbrMode=s.usePBR?s.unlit?7:s.isSchematic?2:1:0,i.emissionSource=s.emissionSource,i.offsetBackfaces=!!(this.transparent&&s.offsetTransparentBackfaces),i.snowCover=e.snowCover>0,i.hasColorTextureTransform=!!s.colorTextureTransformMatrix,i.hasNormalTextureTransform=!!s.normalTextureTransformMatrix,i.hasEmissionTextureTransform=!!s.emissiveTextureTransformMatrix,i.hasOcclusionTextureTransform=!!s.occlusionTextureTransformMatrix,i.hasMetallicRoughnessTextureTransform=!!s.metallicRoughnessTextureTransformMatrix}intersectRay(e,s,i,r,l,h){let p=this._getMaterialVerticalOffset(s,i);p!=null&&(r=v$2(nt,r,p),l=v$2(lt,l,p)),h=Ir(h,this._configuration,r,l),we(e,i,r,l,Ae(i.verticalOffset),h)}intersectScreenPolygon(e,s,i,r){return Nr$1(vr(e,i,s,r,this._createScreenPolygonVertexDisplacement(s,i)),this._configuration,i.camera.eye)}createGLMaterial(e){return new Q(e)}createBufferWriter(){return new i(this._layout)}get transparent(){let{drivenOpacity:e,opacity:s,externalColor:i,layerOpacity:r,texture:l,textureId:h,textureAlphaMode:p,colorMixMode:f}=this.parameters,L=i[3];return e||s<1&&f!==`replace`||L<1&&f!==`ignore`||r<1||(l!=null||h!=null)&&p!==1&&p!==2&&f!==`replace`}_createScreenPolygonVertexDisplacement(e,s){let i=this._getMaterialVerticalOffset(e,s);return i==null?null:{applyToVertex:(r,l,h,p)=>(r[0]=l+i[0],r[1]=h+i[1],r[2]=p+i[2],r),applyToAabb:r=>(nn(r,j$1(B,Y(r,B),i)),an(r,j$1(B,$$2(r,B),i)),r)}}_getMaterialVerticalOffset(e,s){if(this.parameters.verticalOffset==null)return null;let i=s.camera;T$2(J,e[12],e[13],e[14]);let r=null;switch(s.viewingMode){case 1:r=e$1(et,J);break;case 2:r=P$2(et,ht)}let l=v$2(ct,J,i.eye),h=x$1(l),p=y(l,l,1/h),f=null;this.parameters.screenSizePerspective&&(f=Z$2(r,p));let L=z$1(i,h,this.parameters.verticalOffset,f??0,this.parameters.screenSizePerspective,null);return y(r,r,L),ra(ut,r,s.transform.inverseRotation)}};var Q=class extends d{constructor(e){super(F(F({},e),e.material.parameters))}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});let s=this._material.parameters;this.updateTexture(s.textureId);let i=e.camera.viewInverseTransposeMatrix;return T$2(s.origin,i[3],i[7],i[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(s.treeRendering?A:v,e)}};var X=class extends z{constructor(){super(...arguments),this.treeRendering=!1,this.useIndexing=!1,this.hasVertexTangents=!1,this.unlit=!1}get hasNormalTexture(){return!this.treeRendering&&!!this.normalTextureId}get hasColorTexture(){return!!this.textureId}get hasMetallicRoughnessTexture(){return!this.treeRendering&&!!this.metallicRoughnessTextureId}get hasOcclusionTexture(){return!this.treeRendering&&!!this.occlusionTextureId}get emissionSource(){return this.emissiveTextureId!=null&&this.emissiveSource===0?3:this.emissiveSource===0?2:1}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||this.emissionSource===3||this.hasOcclusionTexture}};var nt=o$8();var lt=o$8();var ht=t$4(0,0,1);var et=o$8();var J=o$8();var ct=o$8();var ut=o$8();var B=o$8();export{b as a,n as c,I as d,T as f,Ye as i,J$1 as l,Qe as n,ot as o,w as p,Xe as r,vo as s,$e as t,$ as u};