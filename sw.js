if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const f=e=>n(e,c),t={module:{uri:c},exports:o,require:f};i[c]=Promise.all(r.map((e=>t[e]||f(e)))).then((e=>(s(...e),o)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-6e8c7d00.js",revision:null},{url:"assets/index-e1a6ce41.css",revision:null},{url:"index.html",revision:"0d7fec27f7a5dac9f510ba3aafb41b77"},{url:"registerSW.js",revision:"ff6b4200ca4f4eb80e381f561977e0c8"},{url:"favicon.ico",revision:"874c9492ae7ec69d833b681c93e74413"},{url:"apple-touch-icon.png",revision:"ad5b5bbcf01aa5ed75eda9052c5e3986"},{url:"android-chrome-192x192.png",revision:"f5c07975292c1a9cc8aa0341ab90410e"},{url:"android-chrome-512x512.png",revision:"68be7fd99c7b3d5667d67cbdc393fec3"},{url:"maskable_icon.png",revision:"05473c4c0d924cf19a947dea27c78fef"},{url:"manifest.webmanifest",revision:"bf788e072a3af506e12349d3c2b101f4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
