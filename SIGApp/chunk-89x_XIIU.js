import{FV as $,HV as V$1,KB as g$1,KD as _$1,Nb as o$4,TI as h$2,_p as B$3,ap as N,dp as ie,hV as js,iH as q,nz as B$2,pA as o$5,rO as o$3,sI as v$1,sV as Ss,tz as A$1}from"./main-IJ4OI6P6.js";import{A as o$6,D as h$3,O as i,T as l$2,_ as f$2,j as u$1,k as l$3,v as g$2,w as t,y as h$4}from"./chunk-BTpBVdmx.js";import{$t as s$1,Bt as u$2,C as fr,E as wt,Ft as b,Qt as s$2,S as Kr,Zt as s$3,c as v$2,f as s$4,ft as yt,l as r,n as o$7,on as f$3,r as r$1,sn as i$1,t as e,u as a$1,w as mr}from"./chunk-BPLIsBmy.js";import{t as s$5}from"./chunk-CVevUV3s.js";import{i as T$1}from"./chunk-a23rT95Y.js";import{f as pt,n as Te}from"./chunk-3SE-Lrnp.js";var x$2=new s$1(`mainLightDirection`,e=>e.lighting.mainLight.direction);var V=new s$1(`mainLightIntensity`,e=>e.lighting.mainLight.intensity);function E$1(e){e.uniforms.add(x$2,V),e.code.add(o$6`vec3 applyShading(vec3 shadingNormal, float shadow) {
float dotVal = clamp(dot(shadingNormal, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function D(e){let a=.3183098861837907;e.constants.add(`PI`,`float`,3.141592653589793),e.constants.add(`LIGHT_NORMALIZATION`,`float`,a),e.constants.add(`INV_PI`,`float`,a),e.constants.add(`ONE_QUATER_PI`,`float`,.78539816339745),e.constants.add(`HALF_PI`,`float`,1.570796326794897),e.constants.add(`THREE_QUATER_PI`,`float`,2.35619449019234),e.constants.add(`TWO_PI`,`float`,6.28318530717958),e.constants.add(`PI_SQUARED`,`float`,9.86960440108936)}function I(e){e.code.add(o$6`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.code.add(o$6`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.code.add(o$6`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function u(e){e.code.add(o$6`struct PBRShadingInfo
{
float NdotV;
float NdotL;
float LdotH;
float NdotUP;
float RdotUP;
float NdotAmbDir;
float NdotH_Horizon;
float NdotH;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
vec3 reflectedView;
float averageAmbientRadiance;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`)}function U(e){e.include(u),e.include(l$2),e.uniforms.add(x$2).code.add(o$6`void calculateCommonInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo) {
vec3 h = normalize(mainLightDirection - viewDirection);
inputs.NdotV = clamp(abs(dot(normal, -viewDirection)), 0.001, 1.0);
inputs.NdotUP = clamp(dot(normal, upDirection), -1.0, 1.0);
inputs.reflectedView = normalize(reflect(-viewDirection, normal));
inputs.RdotUP = clamp(dot(inputs.reflectedView, upDirection), -1.0, 1.0);
inputs.albedoLinear = linearizeGamma(albedo);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
}`),e.code.add(o$6`vec3 mrr = vec3(0.0, 0.6, 0.2);
void calculatePBRInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo) {
calculateCommonInputs(inputs, normal, viewDirection, upDirection, albedo);
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
}`)}function re(e,a){e.include(l$2),e.include(D),e.include(u),e.include(U),(a.pbrMode===1||a.pbrMode===2||a.pbrMode===5||a.pbrMode===6)&&(e.code.add(o$6`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),e.code.add(o$6`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),(a.pbrMode===1||a.pbrMode===2)&&(e.include(I),e.code.add(o$6`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotUP);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotUP, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`)),(a.pbrMode===5||a.pbrMode===6)&&e.code.add(o$6`const vec3 fresnelReflectionSimplified = vec3(0.04);
void calculateSimplifiedInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo) {
calculateCommonInputs(inputs, normal, viewDirection, upDirection, albedo);
float lightness = 0.3 * inputs.albedoLinear[0] + 0.5 * inputs.albedoLinear[1] + 0.2 * inputs.albedoLinear[2];
inputs.f0 = (0.85 * lightness + 0.15) * fresnelReflectionSimplified;
inputs.f90 =  vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
}`)}function se(e,a){e.include(D),e.code.add(o$6`
    struct PBRShadingWater {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${a.useCustomDTRExponentForWater?`2.2`:`2.0`};
  `),e.code.add(o$6`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),e.code.add(o$6`float normalDistributionWater(float NdotH, float roughness) {
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),e.code.add(o$6`float geometricOcclusionKelemen(float LoH) {
return 0.25 / (LoH * LoH);
}`),e.code.add(o$6`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max) {
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}function le(e,{spherical:a}){e.code.add(`vec3 normalize4(vec4 vector){ return normalize(vector.xyz / vector.w); }`),e.code.add(a?`vec3 getLocalUp(in vec3 pos, in vec3 origin) { return normalize(pos + origin); }
         vec3 getLocalUp(in vec3 pos) { return normalize(pos); }`:`vec3 getLocalUp(in vec3 pos, in vec3 origin) { return vec3(0.0, 0.0, 1.0); }
         vec3 getLocalUp(in vec3 pos) { return vec3(0.0, 0.0, 1.0); }`),a?e.code.add(o$6`mat3 getTBNMatrix(in vec3 n) {
vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`):e.code.add(o$6`mat3 getTBNMatrix(in vec3 n) {
vec3 t = vec3(1.0, 0.0, 0.0);
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`)}function _(e,a){let t=g$2(a.output)&&a.receiveShadows;t&&o$7(e),e.vertex.code.add(o$6`
    void forwardLinearDepthToReadShadow() { ${h$3(t,`forwardLinearDepth(gl_Position.w);`)} }
  `)}var p=class extends i{constructor(a,t,n,i){super(a,`mat4`,2,(s,l,g,A)=>s.setUniformMatrices4fv(a,t(l,g,A),i),n)}};var f$1=class extends i{constructor(a,t,n,i){super(a,`mat4`,1,(s,l,g)=>s.setUniformMatrices4fv(a,t(l,g),i),n)}};function z$1(e){e.uniforms.add(new f$1(`shadowMapMatrix`,({origin:a},t)=>t.shadowMap.getShadowMapMatrices(a),4)),e.include(G)}function B$1(e){e.uniforms.add(new p(`shadowMapMatrix`,({origin:a},t)=>t.shadowMap.getShadowMapMatrices(a),4)),e.include(G)}function G(e){e.uniforms.add(new i$1(`cascadeDistances`,a=>a.shadowMap.cascadeDistances),new u$2(`numCascades`,a=>a.shadowMap.numCascades)).code.add(o$6`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
vec3 calculateUVZShadow(in vec3 _worldPos, in float _linearDepth, in ivec2 shadowMapSize) {
int i = _linearDepth < cascadeDistances[1] ? 0 :
_linearDepth < cascadeDistances[2] ? 1 :
_linearDepth < cascadeDistances[3] ? 2 : 3;
if (i >= numCascades) {
return invalidShadowmapUVZ;
}
vec3 lvpos = lightSpacePosition(_worldPos, shadowMapMatrix[i]);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
return invalidShadowmapUVZ;
}
vec2 uvShadow = cascadeCoordinates(i, shadowMapSize, lvpos);
return vec3(uvShadow, lvpos.z);
}`)}var h$1=class extends i{constructor(a,t){super(a,`sampler2DShadow`,0,(n,i)=>n.bindTexture(a,t(i)))}};var v=class extends e{constructor(){super(...arguments),this.hasShadowHighlights=!1,this.receiveShadows=!0}};g$1([f$2()],v.prototype,`hasShadowHighlights`,void 0),g$1([f$2()],v.prototype,`receiveShadows`,void 0);function Ee(e,a){a.receiveShadows&&e.fragment.include(z$1),T(e,a)}function Oe(e,a){a.receiveShadows&&e.fragment.include(B$1),T(e,a)}function T(e,a){e.include(_,a);let{hasShadowHighlights:t,receiveShadows:n,spherical:i}=a;n&&(F(e.fragment,t),e.fragment.code.add(o$6`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap, 0));
return readShadowMaps(uvzShadow);
}
float readShadowMap(const in vec3 _worldPos ) { return readShadowMap(_worldPos, linearDepth); }`)),e.fragment.uniforms.add(new f$3(`lightingGlobalFactor`,({lighting:s})=>s.globalFactor)).code.add(o$6`
      float getShadow(float additionalAmbientScale, float shadow) {
        float ambient = ${h$3(i,`lightingGlobalFactor * (1.0 - additionalAmbientScale)`,`0.0`)};
        return max(ambient, shadow);
      }

      float readShadow(float additionalAmbientScale, vec3 vpos) {
        return getShadow(additionalAmbientScale, ${h$3(n,`readShadowMap(vpos)`,`0.0`)});
      }
    `)}function F(e,a,t=`gl_FragCoord.xy`){a&&e.uniforms.add(new s$2(`shadowHighlight`,({shadowHighlight:n})=>n?.getTexture())),e.uniforms.add(new h$1(`shadowMap`,({shadowMap:n})=>n.getOutput(5)??n.getOutput(7))).code.add(o$6`
    float readShadowMaps(const in vec3 uvzShadow) {
      if (uvzShadow.z < 0.0) {
        return 0.0;
      }

      float shadow1 = texture(shadowMap, uvzShadow);
      ${h$3(a,`float shadow2 = texelFetch(shadowHighlight, ivec2(${t}), 0).r;
         return shadow1 > shadow2 ? shadow1 : shadow2;`,`return shadow1;`)}
    }
  `)}var c=class extends i{constructor(a,t,n,i){super(a,`float`,0,(s,l)=>s.setUniform1fv(a,n(l),i),t)}};function qe(e,a){e.uniforms.add(new c(`shR`,9,({lighting:t})=>t.sh.r),new c(`shG`,9,({lighting:t})=>t.sh.g),new c(`shB`,9,({lighting:t})=>t.sh.b)),e.code.add(o$6`vec3 calculateAmbientIrradiance(vec3 normal) {
vec3 ambientLight = 0.282095 * vec3(shR[0], shG[0], shB[0]);
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
vec4 lightingAmbientSH_R1 = vec4(shR[1], shR[2], shR[3], shR[4]);
vec4 lightingAmbientSH_G1 = vec4(shG[1], shG[2], shG[3], shG[4]);
vec4 lightingAmbientSH_B1 = vec4(shB[1], shB[2], shB[3], shB[4]);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
vec4 lightingAmbientSH_R2 = vec4(shR[5], shR[6], shR[7], shR[8]);
vec4 lightingAmbientSH_G2 = vec4(shG[5], shG[6], shG[7], shG[8]);
vec4 lightingAmbientSH_B2 = vec4(shB[5], shB[6], shB[7], shB[8]);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight;
}`),(a.pbrMode===1||a.pbrMode===2)&&e.code.add(o$6`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance()
{
vec3 ambientLight = 1.2 * (0.282095 * vec3(shR[0], shG[0], shB[0])) - 0.2;
return ambientLight *= skyTransmittance;
}`)}function o$2(e){e.include(b),e.code.add(o$6`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      if (mode == ${o$6.int(3)}) {
        return externalColor;
      }

      vec3 internalMixed = internalColor * textureColor;
      if (mode == ${o$6.int(2)}) {
        return internalMixed;
      }

      if (mode == ${o$6.int(1)}) {
        return internalMixed * externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      if (mode == ${o$6.int(3)}) {
        return externalOpacity;
      }

      float internalMixed = internalOpacity * textureOpacity;
      if (mode == ${o$6.int(2)}) {
        return internalMixed;
      }

      // multiply or tint (or something invalid)
      return internalMixed * externalOpacity;
    }
  `)}var o$1=class extends i{constructor(r,t,a){super(r,`mat4`,1,(i,m,e)=>i.setUniformMatrix4fv(r,t(m,e),a))}};function z(r){r.fragment.uniforms.add(new i$1(`projInfo`,o=>l$1(o.camera))),r.fragment.uniforms.add(new s$3(`zScale`,o=>d$2(o.camera))),r.fragment.code.add(o$6`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function l$1(r){let o=r.projectionMatrix;return o[11]===0?_$1(m,2/(r.fullWidth*o[0]),2/(r.fullHeight*o[5]),(1+o[12])/o[0],(1+o[13])/o[5]):_$1(m,-2/(r.fullWidth*o[0]),-2/(r.fullHeight*o[5]),(1-o[8])/o[0],(1-o[9])/o[5])}var m=o$3();function d$2(r){return r.projectionMatrix[11]===0?v$1(s,0,1):v$1(s,1,0)}var s=o$4();function P$1(){let t=new T$1,o=t.fragment;return t.include(a$1),t.include(z),o.include(v$2),o.include(l$2),o.uniforms.add(new f$3(`radius`,e=>g(e.camera))).code.add(o$6`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),o.code.add(o$6`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.outputs.add(`fragOcclusion`,`float`),o.uniforms.add(new u$1(`normalMap`,e=>e.normalTexture),new u$1(`depthMap`,e=>e.depthTexture),new l$3(`projScale`,e=>e.projScale),new u$1(`rnm`,e=>e.noiseTexture),new r(`rnmScale`,(e,c)=>v$1(x$1,c.camera.fullWidth/e.noiseTexture.descriptor.width,c.camera.fullHeight/e.noiseTexture.descriptor.height)),new l$3(`intensity`,e=>e.intensity),new s$3(`screenSize`,e=>v$1(x$1,e.camera.fullWidth,e.camera.fullHeight))).main.add(o$6`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragOcclusion = 1.0;
      return;
    }

    // get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 norm4 = texelFetch(normalMap, iuv, 0);
    if (norm4.a == 0.0) {
      fragOcclusion = 1.0;
      return;
    }
    vec3 norm = normalize(norm4.xyz * 2.0 - 1.0);

    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

    float sum = 0.0;
    vec3 tapPixelPos;

    vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

    // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
    // bug or deviation from CE somewhere else?
    float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

    for(int i = 0; i < ${o$6.int(16)}; ++i) {
      vec2 unitOffset = reflect(sphere[i], fres).xy;
      vec2 offset = vec2(-unitOffset * radius * ps);

      // don't use current or very nearby samples
      if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
        continue;
      }

      vec2 tc = vec2(gl_FragCoord.xy + offset);
      if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
      vec2 tcTap = tc / screenSize;
      float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

      tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

      sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
    }

    // output the result
    float A = max(1.0 - sum * intensity / float(${o$6.int(16)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * pow(A, 4.0)) * INV_GAMMA;

    fragOcclusion = A;
  `),t}function g(t){return Math.max(10,t.computeScreenPixelSizeAtDistance(Math.abs(t.relativeElevation*4))*20)}var x$1=o$4();var j=Object.freeze(Object.defineProperty({__proto__:null,build:P$1,getRadius:g},Symbol.toStringTag,{value:`Module`}));var l=class extends i{constructor(t,r,f){super(t,`vec2`,2,(a,m,w,b)=>a.setUniform2fv(t,r(m,w,b),f))}};function x(){let o=new T$1,t$1=o.fragment;return o.include(a$1),t$1.include(v$2),t$1.uniforms.add(new u$1(`depthMap`,r=>r.depthTexture),new t(`tex`,r=>r.colorTexture),new l(`blurSize`,r=>r.blurSize),new l$3(`projScale`,(r,f)=>{let a=f.camera.distance;return a>5e4?Math.max(0,r.projScale-(a-5e4)):r.projScale})),t$1.code.add(o$6`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${o$6.float(.08)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),o.outputs.add(`fragBlur`,`float`),t$1.main.add(o$6`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${o$6.int(4)}; r <= ${o$6.int(4)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),o}var M=Object.freeze(Object.defineProperty({__proto__:null,build:x},Symbol.toStringTag,{value:`Module`}));var d$1=class extends wt{constructor(){super(...arguments),this.consumes={required:[`normals`]},this.produces=`disabled`}get enabled(){return!this.destroying&&!this.destroyed&&this.produces===Kr.AMBIENT_ILLUMINATION}get _belowMaxElevation(){return(this.view.state.camera.relativeElevation??1/0)<5e5}get _useGlobalIllumination(){return this._belowMaxElevation&&this.view.stage.renderer.isFeatureEnabled(11)}get _useSSAO(){return this._belowMaxElevation&&this.view.stage.renderer.isFeatureEnabled(3)}_enable(){this.produces=Kr.AMBIENT_ILLUMINATION,this.requestRender(1)}_disable(){this.produces=`disabled`,this.requestRender(1)}};g$1([Ss()],d$1.prototype,`consumes`,void 0),g$1([Ss()],d$1.prototype,`produces`,void 0),d$1=g$1([js(`esri.views.3d.webgl-engine.effects.AmbientIllumination`)],d$1);var B=class extends fr{constructor(){super(...arguments),this.shader=new mr(M,()=>import(`./chunk-TgWnOYqB.js`))}initializePipeline(){return pt({colorWrite:Te})}};B=g$1([js(`esri.views.3d.webgl-engine.effects.ssao.SSAOBlurTechnique`)],B);var ce=`eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM`;var A=class extends s$5{constructor(){super(...arguments),this.projScale=1}};var w=class extends A{constructor(){super(...arguments),this.intensity=1}};var P=class extends s$5{};var C=class extends P{constructor(){super(...arguments),this.blurSize=o$4()}};var Y=class extends fr{constructor(){super(...arguments),this.shader=new mr(j,()=>import(`./chunk-CLzi--KC.js`))}initializePipeline(){return pt({colorWrite:Te})}};Y=g$1([js(`esri.views.3d.webgl-engine.effects.ssao.SSAOTechnique`)],Y);var he=2;var me=class extends d$1{constructor(e){super(e),this._enableTime=0,this._passParameters=new w,this._drawParameters=new C}initialize(){let e=Uint8Array.from(atob(ce),o=>o.charCodeAt(0)),i=new N(32);i.wrapMode=33071,i.pixelFormat=6407,i.wrapMode=10497,i.hasMipmap=!0,this._passParameters.noiseTexture=new ie(this.renderingContext,i,e),this.addHandles(A$1(()=>this._useSSAO,o=>{this._enableTime=0,o?this._enable():this._disable()},B$2))}destroy(){this._passParameters.noiseTexture=V$1(this._passParameters.noiseTexture)}render(e){let i=e.find(({name:Ie})=>Ie===`normals`),o=i?.getTexture(),b=i?.getTexture(B$3);if(!o||!b)return;let v=this.techniques.getCompiled(Y),n=this.techniques.getCompiled(B);if(!v||!n){this._enableTime=performance.now(),this.requestRender(1);return}this._enableTime===0&&(this._enableTime=performance.now());let a=this.renderingContext,r=this.view.qualitySettings.fadeDuration,l=this.bindParameters,h=l.camera,fe=h.relativeElevation,be=h$2((5e5-fe)/2e5,0,1),Z=r>0?Math.min(r,performance.now()-this._enableTime)/r:1,ve=Z*be;this._passParameters.normalTexture=o,this._passParameters.depthTexture=b,this._passParameters.projScale=1/h.computeScreenPixelSizeAtDistance(1),this._passParameters.intensity=4*Le/g(h)**6*ve;let u=h.fullViewport[2],g$3=h.fullViewport[3],q=this.fboCache.acquire(u,g$3,`ssao input`,2);a.bindFramebuffer(q.fbo),a.setViewport(0,0,u,g$3),a.bindTechnique(v,l,this._passParameters,this._drawParameters),a.screen.draw();let I=Math.round(u/2),E=Math.round(g$3/2),J=this.fboCache.acquire(I,E,`ssao blur`,0);a.bindFramebuffer(J.fbo),this._drawParameters.colorTexture=q.getTexture(),v$1(this._drawParameters.blurSize,0,2/g$3),a.bindTechnique(n,l,this._passParameters,this._drawParameters),a.setViewport(0,0,I,E),a.screen.draw(),q.release();let W=this.fboCache.acquire(I,E,Kr.AMBIENT_ILLUMINATION,0);return a.bindFramebuffer(W.fbo),a.setViewport(0,0,u,g$3),a.setClearColor(1,1,1,0),a.clear(16384),this._drawParameters.colorTexture=J.getTexture(),v$1(this._drawParameters.blurSize,2/u,0),a.bindTechnique(n,l,this._passParameters,this._drawParameters),a.setViewport(0,0,I,E),a.screen.draw(),a.setViewport4fv(h.fullViewport),J.release(),Z<1&&this.requestRender(2),W}};me=g$1([js(`esri.views.3d.webgl-engine.effects.ssao.SSAO`)],me);var Le=.5;function de(e,i){i.receiveAmbientOcclusion?(e.uniforms.add(new s$2(`ssaoTex`,o=>o.ssao?.getTexture())),e.constants.add(`blurSizePixelsInverse`,`float`,1/he),e.code.add(o$6`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(o$6`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function ue(e,i){i.receiveGlobalIllumination?(e.uniforms.add(new s$4(`hasGlobalIlluminationTexture`,o=>o.globalIllumination!=null),new s$2(`globalIlluminationTexture`,o=>o.globalIllumination?.getTexture())),e.constants.add(`globalIlluminationEmissionNoiseThreshold`,`float`,.01),e.code.add(o$6`vec3 readGlobalIlluminationOcclusionInverse() {
if (!hasGlobalIlluminationTexture) {
return vec3(1.0);
}
ivec2 texel = ivec2(gl_FragCoord.xy);
return vec3(texelFetch(globalIlluminationTexture, texel, 0).a);
}
vec3 readGlobalIlluminationOcclusion() {
return 1.0 - readGlobalIlluminationOcclusionInverse();
}
vec3 suppressBlackNoise(vec3 color) {
float peak = max(color.r, max(color.g, color.b));
if (peak <= globalIlluminationEmissionNoiseThreshold) {
return vec3(0.0);
}
float correctedPeak = (peak - globalIlluminationEmissionNoiseThreshold) / (1.0 - globalIlluminationEmissionNoiseThreshold);
return color * (correctedPeak / peak);
}
vec4 readGlobalIlluminationEmission() {
if (!hasGlobalIlluminationTexture) {
return vec4(0.0);
}
ivec2 texel = ivec2(gl_FragCoord.xy);
vec3 color = texelFetch(globalIlluminationTexture, texel, 0).rgb;
return vec4(suppressBlackNoise(color), 0.0);
}`)):e.code.add(o$6`vec3 readGlobalIlluminationOcclusionInverse() { return vec3(1.0); }
vec3 readGlobalIlluminationOcclusion() { return vec3(0.0); }
vec4 readGlobalIlluminationEmission() { return vec4(0.0); }`)}var f={create(){return[0,0,0,0,0,0,0,0,0]},copy(e,i){e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8]}};f.create();f.create();o$5();var ge=.4;o$5();function pe(e){e.code.add(o$6`float mapChannel(float x, vec2 p) {
if((x < p.x) && (p.x == 0.0) || !(x < p.x) && (p.x == 1.0)) {
return 0.0;
}
float result = (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
return max(result, 0.0);
}`),e.code.add(o$6`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function Se(e){e.constants.add(`ambientBoostFactor`,`float`,ge)}var ze=new f$3(`lightingGlobalFactor`,e=>e.lighting.globalFactor);function xt(e,i){let{pbrMode:o,spherical:b,hasColorTexture:v,receiveGlobalIllumination:n}=i;e.include(l$2),e.include(ue,i),e.include(de,i),o!==0&&e.include(re,i),e.include(qe,i),e.include(D),e.include(r$1,i);let a=!(o===2&&!v);a&&e.include(pe),Se(e),e.uniforms.add(x$2,ze).code.add(o$6`
    float additionalDirectedAmbientLight(float lightAlignment) {
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }

    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float lightAlignment = dot(${b?o$6`normalize(vPosWorld)`:o$6`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }
  `),e.uniforms.add(V).code.add(o$6`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`);let r=n?`globalIlluminationOcclusion`:`ssao`;switch(e.constants.add(`globalIlluminationDirectFactor`,`float`,n?.55:0),e.constants.add(`globalIlluminationAmbientFactor`,`float`,n?.85:1),e.constants.add(`mainLightIrradianceScale`,`float`,n?.75:1),e.constants.add(`ambientIrradianceScale`,`float`,n?1.5:1),n&&(e.constants.add(`globalIlluminationOcclusionBoost`,`float`,1.2),e.constants.add(`globalIlluminationEmissionBoost`,`float`,2.25),e.constants.add(`globalIlluminationEmissionCompressionWeight`,`float`,.75),e.code.add(o$6`vec3 evaluateGlobalIlluminationOcclusion() {
return min(globalIlluminationOcclusionBoost * readGlobalIlluminationOcclusion(), 1.0);
}
vec3 evaluateGlobalIlluminationEmission(vec3 albedoLinear) {
vec3 emission = globalIlluminationEmissionBoost * (0.75 * albedoLinear + 0.25) * readGlobalIlluminationEmission().rgb;
vec3 compressedEmission = emission / (emission + 1.0);
return mix(emission, compressedEmission, globalIlluminationEmissionCompressionWeight);
}`)),o){case 0:case 4:case 3:e.include(E$1),e.code.add(o$6`
        vec3 evaluateSceneLighting(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
                                   vec3 viewDirection, vec3 upDirection) {
          ${h$3(n,o$6`vec3 globalIlluminationOcclusion = evaluateGlobalIlluminationOcclusion();`)}

          vec3 mainLighting = mainLightIrradianceScale * applyShading(normal, shadow);
          vec3 ambientLighting = ambientIrradianceScale * calculateAmbientIrradiance(normal) * (1.0 - ${r});
          vec3 albedoLinear = linearizeGamma(albedo);

          vec3 totalLight = mainLighting + ambientLighting + additionalLight;
          totalLight = min(totalLight, vec3(PI));
          vec3 linearColor = vec3((albedoLinear / PI) * totalLight);
          ${h$3(n,`linearColor += evaluateGlobalIlluminationEmission(albedoLinear);`)}
          return delinearizeGamma(linearColor);
        }
      `);break;case 1:case 2:e.constants.add(`groundReflectance`,`float`,n?.35:.2),e.code.add(o$6`
        const float fillLightIntensity = 0.25;
        const float horizonLightDiffusion = 0.4;

        vec3 evaluateSceneLighting(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
                                   vec3 viewDirection, vec3 upDirection) {
          PBRShadingInfo inputs;
          calculatePBRInputs(inputs, normal, viewDirection, upDirection, albedo);
          ${h$3(n,`vec3 globalIlluminationOcclusion = evaluateGlobalIlluminationOcclusion();`)}
      `),i.useFillLights?e.uniforms.add(new s$4(`hasFillLights`,l=>l.enableFillLights)):e.constants.add(`hasFillLights`,`bool`,!1),e.code.add(o$6`
        vec3 ambientDir = vec3(5.0 * upDirection[1] - upDirection[0] * upDirection[2], - 5.0 * upDirection[0] - upDirection[2] * upDirection[1], upDirection[1] * upDirection[1] + upDirection[0] * upDirection[0]);
        ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;

        // Calculate the irradiance components: sun, fill lights and the sky.
        // Applying AO to both direct and ambient lighting enhances depth perception.
        // This is an artistic choice; physically, AO should only attenuate ambient lighting.
        vec3 directOcclusionFactor = mix(vec3(1.0), vec3(1.0 - ${r}), globalIlluminationDirectFactor);
        vec3 ambientOcclusionFactor = mix(vec3(1.0), vec3(1.0 - ${r}), globalIlluminationAmbientFactor);
        vec3 mainLightIrradianceComponent = mainLightIrradianceScale * inputs.NdotL * (1.0 - shadow) * mainLightIntensity * directOcclusionFactor;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity * directOcclusionFactor;
        // calculate ambient irradiance for localView and additionalLight for globalView
        vec3 ambientLightIrradianceComponent = ambientIrradianceScale * calculateAmbientIrradiance(normal) * ambientOcclusionFactor + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = groundReflectance * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),e.uniforms.add(new f$3(`lightingSpecularStrength`,l=>l.lighting.mainLight.specularStrength),new f$3(`lightingEnvironmentStrength`,l=>l.lighting.mainLight.environmentStrength)).code.add(o$6`
        vec3 horizonRingDir = inputs.RdotUP * upDirection - inputs.reflectedView;
        vec3 horizonRingH = normalize(horizonRingDir - viewDirection);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;

        // calculateAmbientRadiance for localView and additionalLight for global view
        vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance() * (1.0 - ${r}) + additionalLight;
        float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotUP + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;

        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radiance by the groundReflectance
        inputs.groundRadianceToSurface = 0.5 * groundReflectance * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;

        // Calculate average ambient radiance - This is used in the gamut mapping process to determine the black level for compression
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + groundReflectance);
      `),e.constants.add(`additionalAmbientIrradianceFactor`,`float`,.02),e.code.add(o$6`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 linearColor = reflectedColorComponent + additionalMaterialReflectanceComponent;

        ${h$3(n,`linearColor += evaluateGlobalIlluminationEmission(inputs.albedoLinear);`)}

      ${a?`linearColor = blackLevelSoftCompression(linearColor, inputs.averageAmbientRadiance);`:`linearColor = max(vec3(0.0), linearColor - 0.005 * inputs.averageAmbientRadiance);`}

        return delinearizeGamma(linearColor);
      }
    `);break;case 5:case 6:e.constants.add(`terrainSpecularity`,`float`,n?.35:.5),e.uniforms.add(x$2,V).code.add(o$6`
        const float roughnessTerrain = 0.5;

        vec3 evaluateSceneLighting(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
                                   vec3 viewDirection, vec3 upDirection) {
          PBRShadingInfo inputs;
          calculateSimplifiedInputs(inputs, normal, viewDirection, upDirection, albedo);

          ${h$3(n,`vec3 globalIlluminationOcclusion = evaluateGlobalIlluminationOcclusion();`)}

          // Applying AO to both direct and ambient lighting enhances depth perception.
          // This is an artistic choice; physically, AO should only attenuate ambient lighting.
          vec3 directOcclusionFactor = mix(vec3(1.0), vec3(1.0 - ${r}), globalIlluminationDirectFactor);
          vec3 ambientOcclusionFactor = mix(vec3(1.0), vec3(1.0 - ${r}), globalIlluminationAmbientFactor);
          vec3 mainLightIrradianceComponent = mainLightIrradianceScale * (1.0 - shadow) * inputs.NdotL * mainLightIntensity * directOcclusionFactor;
          vec3 ambientLightIrradianceComponent = ambientIrradianceScale * calculateAmbientIrradiance(normal) * ambientOcclusionFactor + additionalLight;
          vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;

          vec3 indirectDiffuse = ((1.0 - inputs.NdotUP) * mainLightIrradianceComponent + (1.0 + inputs.NdotUP ) * ambientSky) * 0.5;
          vec3 diffuseColor = inputs.albedoLinear * (1.0 - inputs.f0) * indirectDiffuse / PI;

          vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, roughnessTerrain) * mainLightIntensity;
          vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, inputs.NdotV);
          vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
          vec3 specularComponent = terrainSpecularity * specularColor * mainLightRadianceComponent;

          vec3 linearColor = diffuseColor + specularComponent;

          ${h$3(n,`linearColor += evaluateGlobalIlluminationEmission(inputs.albedoLinear);`)}

          return delinearizeGamma(linearColor);
        }
      `);break;case 7:e.code.add(o$6`vec3 evaluateSceneLighting(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
vec3 viewDirection, vec3 upDirection) {
return albedo;
}`)}}var d=class extends yt{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this.updateTexture(e.textureId),this._acquire(e.normalTextureId,t=>this._textureNormal=t),this._acquire(e.emissiveTextureId,t=>this._textureEmissive=t),this._acquire(e.occlusionTextureId,t=>this._textureOcclusion=t),this._acquire(e.metallicRoughnessTextureId,t=>this._textureMetallicRoughness=t)}dispose(){super.dispose(),this._texture=$(this._texture),this._textureNormal=$(this._textureNormal),this._textureEmissive=$(this._textureEmissive),this._textureOcclusion=$(this._textureOcclusion),this._textureMetallicRoughness=$(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?2:1}get textureBindParameters(){return new o(this._texture?.texture??null,this._textureNormal?.texture??null,this._textureEmissive?.texture??null,this._textureOcclusion?.texture??null,this._textureMetallicRoughness?.texture??null)}updateTexture(e){(this._texture==null||e!==this._texture.id)&&(this._texture=$(this._texture),this._acquire(e,t=>this._texture=t))}_acquire(e,t){if(e==null){t(null);return}let i=this._textures.acquire(e);if(q(i)){++this._numLoading,i.then(u=>{if(this._disposed){$(u),t(null);return}t(u)}).finally(()=>--this._numLoading);return}t(i)}};var a=class extends s$5{constructor(e=null){super(),this.textureEmissive=e}};var o=class extends a{constructor(e,t,i,u,p,g,f){super(i),this.texture=e,this.textureNormal=t,this.textureOcclusion=u,this.textureMetallicRoughness=p,this.scale=g,this.normalTextureTransformMatrix=f}};var h=class extends h$4{constructor(){super(...arguments),this.receiveShadows=!0}};g$1([f$2()],h.prototype,`receiveShadows`,void 0);function E(r,e){return r.receiveShadows&&e.shadowHighlight?.getTexture()!=null}export{se as C,re as S,Oe as _,de as a,le as b,l as c,g as d,z as f,Ee as g,D as h,Se as i,x as l,o$2 as m,d as n,xt as o,o$1 as p,o as r,ze as s,E as t,P$1 as u,U as v,x$2 as w,qe as x,V as y};