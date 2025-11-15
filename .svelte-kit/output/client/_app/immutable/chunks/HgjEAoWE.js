import{k as fe,l as Be,o as ze,b as Ae,a as v,c as E,f as Y,s as pe}from"./COY4ROKi.js";import{t as G,h as g,a as U,N as xe,aH as Le,I as K,C as Me,D as Te,aI as He,aJ as Oe,G as X,B as J,aK as Pe,b as Re,E as We,aL as De,A as je,F as _e,k as Fe,p as ye,c as N,d as ke,s as C,v as ge,y as j,r as y,f as k,g as l,av as P,aM as Ge}from"./DczrQvZ7.js";import{B as Je,i as M}from"./I1M-dJc7.js";import{e as $e,i as Ne}from"./X7EjPee-.js";import{c as de}from"./C8_B-ZC4.js";import{c as we,s as F,a as me}from"./D1odLJxG.js";import{l as V,p,s as ve}from"./nd4PGHSd.js";import"./Dw-KHM77.js";import{i as Ke}from"./feDueHwK.js";function Ue(m,e,s=!1,o=!1,u=!1){var c=m,a="";G(()=>{var t=xe;if(a===(a=e()??"")){g&&U();return}if(t.nodes_start!==null&&(Le(t.nodes_start,t.nodes_end),t.nodes_start=t.nodes_end=null),a!==""){if(g){K.data;for(var i=U(),w=i;i!==null&&(i.nodeType!==Me||i.data!=="");)w=i,i=Te(i);if(i===null)throw He(),Oe;fe(K,w),c=X(i);return}var r=a+"";s?r=`<svg>${r}</svg>`:o&&(r=`<math>${r}</math>`);var d=Be(r);if((s||o)&&(d=J(d)),fe(J(d),d.lastChild),s||o)for(;J(d);)c.before(J(d));else c.before(d)}})}function Z(m,e,s,o,u){g&&U();var c=e.$$slots?.[s],a=!1;c===!0&&(c=e.children,a=!0),c===void 0||c(m,a?()=>o:o)}function Ve(m,e,s,o,u,c){let a=g;g&&U();var t=null;g&&K.nodeType===Pe&&(t=K,U());var i=g?K:m,w=new Je(i,!1);Re(()=>{const r=e()||null;var d=De;if(r===null){w.ensure(null,null);return}return w.ensure(r,I=>{if(r){if(t=g?t:document.createElementNS(d,r),fe(t,t),o){g&&ze(r)&&t.append(document.createComment(""));var S=g?J(t):t.appendChild(je());g&&(S===null?_e(!1):X(S)),o(t,S)}xe.nodes_end=t,I.before(t)}g&&X(I)}),()=>{}},We),Fe(()=>{}),a&&(_e(!0),X(i))}/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Ye={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var qe=Ae("<svg><!><!></svg>");function ue(m,e){const s=V(e,["children","$$slots","$$events","$$legacy"]),o=V(s,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);ye(e,!1);let u=p(e,"name",8,void 0),c=p(e,"color",8,"currentColor"),a=p(e,"size",8,24),t=p(e,"strokeWidth",8,2),i=p(e,"absoluteStrokeWidth",8,!1),w=p(e,"iconNode",24,()=>[]);const r=(...B)=>B.filter((z,A,T)=>!!z&&T.indexOf(z)===A).join(" ");Ke();var d=qe();we(d,(B,z)=>({...Ye,...o,width:a(),height:a(),stroke:c(),"stroke-width":B,class:z}),[()=>(j(i()),j(t()),j(a()),ge(()=>i()?Number(t())*24/Number(a()):t())),()=>(j(u()),j(s),ge(()=>r("lucide-icon","lucide",u()?`lucide-${u()}`:"",s.class)))]);var I=N(d);$e(I,1,w,Ne,(B,z)=>{var A=P(()=>Ge(l(z),2));let T=()=>l(A)[0],q=()=>l(A)[1];var _=E(),n=k(_);Ve(n,T,!0,(h,Q)=>{we(h,()=>({...q()}))}),v(B,_)});var S=C(I);Z(S,e,"default",{}),y(d),v(m,d),ke()}function Qe(m,e){const s=V(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const o=[["path",{d:"m9 18 6-6-6-6"}]];ue(m,ve({name:"chevron-right"},()=>s,{get iconNode(){return o},children:(u,c)=>{var a=E(),t=k(a);Z(t,e,"default",{}),v(u,a)},$$slots:{default:!0}}))}function Xe(m,e){const s=V(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const o=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];ue(m,ve({name:"ellipsis"},()=>s,{get iconNode(){return o},children:(u,c)=>{var a=E(),t=k(a);Z(t,e,"default",{}),v(u,a)},$$slots:{default:!0}}))}function be(m,e){const s=V(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const o=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];ue(m,ve({name:"house"},()=>s,{get iconNode(){return o},children:(u,c)=>{var a=E(),t=k(a);Z(t,e,"default",{}),v(u,a)},$$slots:{default:!0}}))}var Ze=Y("<span><!></span>"),et=Y('<a itemprop="item"><!> <!> <span itemprop="name" class="truncate max-w-[80px] sm:max-w-[120px] md:max-w-none"> </span> <meta itemprop="position"/></a>'),tt=Y('<span aria-current="page" itemprop="item"><!> <!> <span itemprop="name" class="truncate max-w-[80px] sm:max-w-[120px] md:max-w-none"> </span> <meta itemprop="position"/></span>'),at=Y('<li class="flex items-center gap-1.5 md:gap-2" itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><!> <!></li>'),rt=Y('<!> <nav aria-label="Breadcrumb"><div><ol class="flex items-center gap-1.5 md:gap-2 flex-wrap" itemscope="" itemtype="https://schema.org/BreadcrumbList"></ol></div></nav>',1);function vt(m,e){ye(e,!0);let s=p(e,"items",19,()=>[]),o=p(e,"variant",3,"light"),u=p(e,"separator",3,Qe),c=p(e,"showHome",3,!0),a=p(e,"maxItems",3,null),t=p(e,"customClass",3,""),i=p(e,"enableSchema",3,!0);const w={light:{nav:"bg-white/80 backdrop-blur-md border border-white/20",link:"text-gray-600 hover:text-primary-500",active:"text-gray-900 font-semibold",separator:"text-gray-400",icon:"text-gray-500"},dark:{nav:"bg-white/10 backdrop-blur-md border border-white/20",link:"text-white/70 hover:text-white",active:"text-white font-semibold",separator:"text-white/50",icon:"text-white/60"},transparent:{nav:"bg-transparent",link:"text-gray-600 hover:text-primary-500",active:"text-gray-900 font-semibold",separator:"text-gray-400",icon:"text-gray-500"},solid:{nav:"bg-gray-100 border border-gray-200",link:"text-gray-600 hover:text-primary-500",active:"text-primary-600 font-semibold",separator:"text-gray-400",icon:"text-gray-500"}},r=w[o()]||w.light,d=P(()=>{if(!a()||s().length<=a())return s();const _=s().slice(0,1),n=s().slice(-(a()-2));return[..._,{label:"...",isCollapsed:!0},...n]}),I=P(()=>{if(!i())return null;const _=typeof window<"u"?window.location.origin:"";return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:s().filter(n=>!n.isCollapsed).map((n,h)=>({"@type":"ListItem",position:h+1,name:n.label,item:n.href?`${_}${n.href}`:void 0}))}});var S=rt(),B=k(S);{var z=_=>{var n=E(),h=k(n);Ue(h,()=>`<script type="application/ld+json">${JSON.stringify(l(I))}<\/script>`),v(_,n)};M(B,_=>{i()&&l(I)&&_(z)})}var A=C(B,2),T=N(A),q=N(T);$e(q,21,()=>l(d),Ne,(_,n,h)=>{var Q=at(),he=N(Q);{var Ce=b=>{const $=P(u);var O=E(),ee=k(O);de(ee,()=>l($),(te,L)=>{L(te,{get class(){return`w-3 h-3 md:w-4 md:h-4 ${r.separator??""}`}})}),v(b,O)};M(he,b=>{h>0&&b(Ce)})}var Ee=C(he,2);{var Ie=b=>{var $=Ze(),O=N($);Xe(O,{class:"w-4 h-4"}),y($),G(()=>F($,1,`${r.separator??""} text-sm`)),v(b,$)},Se=b=>{var $=E(),O=k($);{var ee=L=>{var x=et(),R=N(x);{var ae=f=>{be(f,{get class(){return`w-3.5 h-3.5 md:w-4 md:h-4 ${r.icon??""}`}})};M(R,f=>{c()&&h===0&&f(ae)})}var W=C(R,2);{var re=f=>{const oe=P(()=>l(n).icon);var D=E(),ie=k(D);de(ie,()=>l(oe),(le,ce)=>{ce(le,{get class(){return`w-3.5 h-3.5 md:w-4 md:h-4 ${r.icon??""}`}})}),v(f,D)};M(W,f=>{l(n).icon&&h>0&&f(re)})}var H=C(W,2),se=N(H,!0);y(H);var ne=C(H,2);me(ne,"content",h+1),y(x),G(()=>{me(x,"href",l(n).href),F(x,1,`${r.link??""} transition-colors duration-200 text-xs md:text-sm font-medium flex items-center gap-1 md:gap-1.5`),pe(se,l(n).label)}),v(L,x)},te=L=>{var x=tt(),R=N(x);{var ae=f=>{be(f,{get class(){return`w-3.5 h-3.5 md:w-4 md:h-4 ${r.icon??""}`}})};M(R,f=>{c()&&h===0&&f(ae)})}var W=C(R,2);{var re=f=>{const oe=P(()=>l(n).icon);var D=E(),ie=k(D);de(ie,()=>l(oe),(le,ce)=>{ce(le,{get class(){return`w-3.5 h-3.5 md:w-4 md:h-4 ${r.icon??""}`}})}),v(f,D)};M(W,f=>{l(n).icon&&h>0&&f(re)})}var H=C(W,2),se=N(H,!0);y(H);var ne=C(H,2);me(ne,"content",h+1),y(x),G(()=>{F(x,1,`${r.active??""} text-xs md:text-sm flex items-center gap-1 md:gap-1.5`),pe(se,l(n).label)}),v(L,x)};M(O,L=>{l(n).href?L(ee):L(te,!1)},!0)}v(b,$)};M(Ee,b=>{l(n).isCollapsed?b(Ie):b(Se,!1)})}y(Q),v(_,Q)}),y(q),y(T),y(A),G(()=>{F(A,1,`py-2 ${t()??""}`),F(T,1,`${r.nav??""} rounded-full px-3 md:px-4 py-1.5 md:py-2 inline-flex shadow-sm max-w-full`)}),v(m,S),ke()}export{vt as B,be as H,ue as I,Z as s};
