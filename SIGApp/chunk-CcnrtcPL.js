import{t as h}from"./chunk-B4kCyLCy.js";import{a as k,n as J,o as ur,s as ve,t as B}from"./chunk-BvTR4yVN.js";import{dp as ie}from"./main-T6FMN7WU.js";function b(t){let{options:e,value:o}=t;return typeof e[o]==`number`}function c(t){let e=``;for(let o in t){let r=t[o];if(typeof r==`boolean`)r&&(e+=`#define ${o}
`);else if(typeof r==`number`)e+=`#define ${o} ${r.toFixed()}
`;else if(typeof r==`object`)if(b(r)){let{value:f,options:n,namespace:a}=r,p=a?`${a}_`:``;for(let l in n)e+=`#define ${p}${l} ${n[l].toFixed()}
`;e+=`#define ${o} ${p}${f}
`}else{let f=r.options,n=0;for(let a in f)e+=`#define ${f[a]} ${(n++).toFixed()}
`;e+=`#define ${o} ${f[r.value]}
`}}return e}function g(t,e,o,r=``){return new ve(t,r+e.vertexShader,r+e.fragmentShader,o)}export{k as BufferObject,ve as DisposableProgram,J as FramebufferObject,h as ProgramCache,B as Renderbuffer,ie as Texture,ur as VertexArrayObject,g as createProgram,c as glslifyDefineMap};