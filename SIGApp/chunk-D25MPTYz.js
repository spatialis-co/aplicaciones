import{Qt as s,c as v}from"./chunk-CX-pXiXp.js";import{f as z}from"./chunk-DlqieJC4.js";import{A as o,E as r,j as u$1,k as l}from"./chunk-JKEIilKO.js";function u(l){l.code.add(`
  vec4 blendColorsPremultiplied(vec4 source, vec4 dest) {
    float oneMinusSourceAlpha = 1.0 - source.a;
    return source + dest * oneMinusSourceAlpha;
  }
  `)}function A(l$1,n){let e=l$1.fragment;e.include(v),l$1.include(z),e.include(u),e.uniforms.add(new l(`globalAlpha`,o=>o.globalAlpha),new r(`glowColor`,o=>o.glowColor),new l(`glowWidth`,(o,a)=>o.glowWidth*a.camera.pixelRatio),new l(`glowFalloff`,o=>o.glowFalloff),new r(`innerColor`,o=>o.innerColor),new l(`innerWidth`,(o,a)=>o.innerWidth*a.camera.pixelRatio),new s(`depthMap`,o=>o.depth?.attachment),new u$1(`normalMap`,o=>o.normals)),e.code.add(o`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),e.code.add(o`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendColorsPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),e.code.add(o`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float angleCutoffAdjust, out float depthDiscontinuityAlpha) {
float depth = depthFromTexture(depthMap, uv);
if (depth == 1.0) {
return false;
}
float linearDepth = linearizeDepth(depth);
pos = reconstructPosition(gl_FragCoord.xy, linearDepth);
float minStep = 6e-8;
float depthStep = clamp(depth + minStep, 0.0, 1.0);
float linearDepthStep = linearizeDepth(depthStep);
float depthError = abs(linearDepthStep - linearDepth);
vec3 normalReconstructed = normalize(cross(dFdx(pos), dFdy(pos)));
vec3 normalFromTexture = normalize(texture(normalMap, uv).xyz * 2.0 - 1.0);
float blendFactor = smoothstep(0.15, 0.2, depthError);
normal = normalize(mix(normalReconstructed, normalFromTexture, blendFactor));
angleCutoffAdjust = mix(0.0, 0.004, blendFactor);
float ddepth = fwidth(linearDepth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / linearDepth);
return true;
}`),n.contrastControlEnabled?e.uniforms.add(new u$1(`colorTexture`,(o,a)=>o.colors),new l(`globalAlphaContrastBoost`,o=>o.globalAlphaContrastBoost)).code.add(o`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(colorTexture, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`):e.code.add(o`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}function F(l,n){n.hasEmissive&&(l.outputs.add(`fragEmission`,`vec4`,1),l.fragment.main.add(`fragEmission = vec4(vec3(0.0), fragColor.a);`))}export{F as n,A as t};