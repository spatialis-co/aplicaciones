import{DH as $$1,PH as g$1}from"./main-T6FMN7WU.js";var _=()=>g$1.getLogger(`esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder`);var c$1=class{constructor(){this._includedModules=/* @__PURE__ */ new Map}include(e,r){if(this._includedModules.has(e)){this._includedModules.get(e);return}this._includedModules.set(e,r),e(this.builder,r)}};var T=class extends c$1{constructor(){super(...arguments),this.vertex=new m,this.fragment=new m,this.attributes=new f,this.varyings=new b,this.outputs=new $}get attributeNames(){return this.attributes.names}get builder(){return this}generate(e,r=!1){let t=this.attributes.generateSource(e),s=this.varyings.generateSource(e),n=e===`vertex`?this.vertex:this.fragment,a=n.uniforms.generateSource(),o=n.code.generateSource(),u=n.main.generateSource(r),w=this.debugName?`// ${this.debugName}
`:``,y=e===`vertex`?I:D,F=n.constants.generateSource(),E=this.outputs.generateSource(e);return`#version 300 es
${w}
${y}
${F.join(`
`)}
${a.join(`
`)}
${t.join(`
`)}
${s.join(`
`)}
${E.join(`
`)}
${o.join(`
`)}
${u.join(`
`)}`}generateBind(e){let r=/* @__PURE__ */ new Map;this.vertex.uniforms.entries.forEach(n=>{let a=n.bind[0];a&&r.set(n.name,a)}),this.fragment.uniforms.entries.forEach(n=>{let a=n.bind[0];a&&r.set(n.name,a)});let t=Array.from(r.values()),s=t.length;return n=>{for(let a=0;a<s;++a)t[a](e,n)}}generateBindPass(e){let r=/* @__PURE__ */ new Map;this.vertex.uniforms.entries.forEach(n=>{let a=n.bind[1];a&&r.set(n.name,a)}),this.fragment.uniforms.entries.forEach(n=>{let a=n.bind[1];a&&r.set(n.name,a)});let t=Array.from(r.values()),s=t.length;return(n,a)=>{for(let o=0;o<s;++o)t[o](e,a,n)}}generateBindDraw(e){let r=/* @__PURE__ */ new Map;this.vertex.uniforms.entries.forEach(n=>{let a=n.bind[2];a&&r.set(n.name,a)}),this.fragment.uniforms.entries.forEach(n=>{let a=n.bind[2];a&&r.set(n.name,a)});let t=Array.from(r.values()),s=t.length;return(n,a,o)=>{for(let u=0;u<s;++u)t[u](e,o,n,a)}}};var l$1=class{constructor(e){this._stage=e,this._entries=/* @__PURE__ */ new Map}add(...e){for(let r of e)this._add(r);return this._stage}get(e){return this._entries.get(e)}_add(e){if(e==null){_().error(`Trying to add null Uniform from ${Error().stack}.`);return}if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new $$1(`shaderbuilder:duplicate-uniform`,`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}generateSource(){return Array.from(this._entries.values()).map(({name:e,arraySize:r,type:t})=>r==null?`uniform ${t} ${e};`:`uniform ${t} ${e}[${r}];`)}get entries(){return Array.from(this._entries.values())}};var d=class{constructor(){this._entries=/* @__PURE__ */ new Map}add(e,r){if(this._entries.has(e))throw new $$1(`shaderbuilder:duplicate-input`,`Duplicate input for ${e}`);this._entries.set(e,r)}get(e){let r=this._entries.get(e);if(r==null)throw new $$1(`shaderbuilder:input-resolver-error`,`No resolver for input ${e} found.`);return r()}};var p=class{constructor(e){this._stage=e,this._bodies=[]}add(e){return this._bodies.push(e),this._stage}generateSource(e){if(this._bodies.length>0){let r=[];for(let t of this._bodies)typeof t==`string`?r.push(t):r.push(...t());return[`void main() {
 ${r.join(`
`)||``} 
}`]}if(e)throw new $$1(`shaderbuilder:missing-main`,`Shader does not contain main function body.`);return[]}};var g=class{constructor(e){this._stage=e,this._entries=[]}add(e){return this._entries.push(e),this._stage}generateSource(){let e=[];for(let r of this._entries)typeof r==`string`?e.push(r):e.push(...r());return e}};var m=class extends c$1{constructor(){super(...arguments),this.uniforms=new l$1(this),this.main=new p(this),this.code=new g(this),this.constants=new S(this),this.inputs=new d}get builder(){return this}};var f=class{constructor(){this._entries=[]}add(e,r){this._entries.push([e,r])}generateSource(e){return e===`fragment`?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}get names(){return this._entries.map(([e])=>e)}};var b=class{constructor(){this._entries=/* @__PURE__ */ new Map}add(e,r,t){if(this._entries.has(e)){_().warn(`Ignoring duplicate varying ${r} ${e}`);return}this._entries.set(e,{type:r,flat:t?.flat??!1,invariant:t?.invariant??!1})}generateSource(e){let r=[];return this._entries.forEach((t,s)=>r.push((t.invariant&&e===`vertex`?`invariant `:``)+(t.flat?`flat `:``)+(e===`vertex`?`out`:`in`)+` ${t.type} ${s};`)),r}};var $=class i{constructor(){this._entries=/* @__PURE__ */ new Map}add(e,r,t=0){let s=this._entries.get(t);if(s?.name===e&&s?.type===r){_().warn(`Fragment shader output location ${t} occupied`);return}this._entries.set(t,{name:e,type:r})}static{this.DEFAULT_TYPE=`vec4`}static{this.DEFAULT_NAME=`fragColor`}generateSource(e){if(e===`vertex`)return[];this._entries.size===0&&this._entries.set(0,{name:i.DEFAULT_NAME,type:i.DEFAULT_TYPE});let r=[];return this._entries.forEach((t,s)=>r.push(`layout(location = ${s}) out ${t.type} ${t.name};`)),r}};var S=class i{constructor(e){this._stage=e,this._entries=/* @__PURE__ */ new Set}add(e,r,t){let s=`ERROR_CONSTRUCTOR_STRING`;switch(r){case`float`:s=i._numberToFloatStr(t);break;case`int`:s=i._numberToIntStr(t);break;case`uint`:s=i._numberToUintStr(t);break;case`bool`:s=t.toString();break;case`vec2`:s=`vec2(${i._numberToFloatStr(t[0])},                            ${i._numberToFloatStr(t[1])})`;break;case`vec3`:s=`vec3(${i._numberToFloatStr(t[0])},                            ${i._numberToFloatStr(t[1])},                            ${i._numberToFloatStr(t[2])})`;break;case`vec4`:s=`vec4(${i._numberToFloatStr(t[0])},                            ${i._numberToFloatStr(t[1])},                            ${i._numberToFloatStr(t[2])},                            ${i._numberToFloatStr(t[3])})`;break;case`ivec2`:s=`ivec2(${i._numberToIntStr(t[0])},                             ${i._numberToIntStr(t[1])})`;break;case`ivec3`:s=`ivec3(${i._numberToIntStr(t[0])},                             ${i._numberToIntStr(t[1])},                             ${i._numberToIntStr(t[2])})`;break;case`ivec4`:s=`ivec4(${i._numberToIntStr(t[0])},                             ${i._numberToIntStr(t[1])},                             ${i._numberToIntStr(t[2])},                             ${i._numberToIntStr(t[3])})`;break;case`uvec2`:s=`uvec2(${i._numberToUintStr(t[0])},                             ${i._numberToUintStr(t[1])})`;break;case`uvec3`:s=`uvec3(${i._numberToUintStr(t[0])},                             ${i._numberToUintStr(t[1])},                             ${i._numberToUintStr(t[2])})`;break;case`uvec4`:s=`uvec4(${i._numberToUintStr(t[0])},                             ${i._numberToUintStr(t[1])},                             ${i._numberToUintStr(t[2])},                             ${i._numberToUintStr(t[3])})`;break;case`mat2`:case`mat3`:case`mat4`:s=`${r}(${Array.prototype.map.call(t,n=>i._numberToFloatStr(n)).join(`, `)})`}return this._entries.add(`const ${r} ${e} = ${s};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToUintStr(e){return`${e.toFixed(0)}u`}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}};var D=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp int;
  precision highp sampler2D;
  precision highp usampler2D;
  precision highp sampler2DArray;
  precision highp sampler2DShadow;
#else
  precision mediump float;
  precision mediump int;
  precision mediump sampler2D;
  precision mediump usampler2D;
  precision mediump sampler2DArray;
  precision mediump sampler2DShadow;
#endif`;var I=`precision highp float;
 precision highp int;
 precision highp sampler2D;
 precision highp usampler2D;
 precision highp sampler2DArray;
 precision highp sampler2DShadow;


 invariant gl_Position;
 `;function l(n,o,t){for(let e=0;e<t;++e)o[e*2]=n[e],o[e*2+1]=n[e]-o[e*2]}function u(n,o){let t=n.length;for(let e=0;e<t;++e)r[0]=n[e],o[e]=r[0];return o}function c(n,o){let t=n.length;for(let e=0;e<t;++e)r[0]=n[e],r[1]=n[e]-r[0],o[e]=r[1];return o}var r=/* @__PURE__ */ new Float32Array(2);export{g as a,T as i,l as n,u as r,c as t};