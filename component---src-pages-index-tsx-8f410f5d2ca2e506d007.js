(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{7228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.default=t.exports,t.exports.__esModule=!0},2858:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.default=t.exports,t.exports.__esModule=!0},3646:function(t,e,r){var n=r(7228);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.default=t.exports,t.exports.__esModule=!0},6860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},3884:function(t){t.exports=function(t,e){var r=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var n,a,o=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(o.push(n.value),!e||o.length!==e);i=!0);}catch(c){u=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw a}}return o}},t.exports.default=t.exports,t.exports.__esModule=!0},521:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},8206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},3038:function(t,e,r){var n=r(2858),a=r(3884),o=r(379),i=r(521);t.exports=function(t,e){return n(t)||a(t,e)||o(t,e)||i()},t.exports.default=t.exports,t.exports.__esModule=!0},319:function(t,e,r){var n=r(3646),a=r(6860),o=r(379),i=r(8206);t.exports=function(t){return n(t)||a(t)||o(t)||i()},t.exports.default=t.exports,t.exports.__esModule=!0},379:function(t,e,r){var n=r(7228);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},7091:function(t){"use strict";var e="%[a-f0-9]{2}",r=new RegExp(e,"gi"),n=new RegExp("("+e+")+","gi");function a(t,e){try{return decodeURIComponent(t.join(""))}catch(o){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],a(r),a(n))}function o(t){try{return decodeURIComponent(t)}catch(o){for(var e=t.match(r),n=1;n<e.length;n++)e=(t=a(e,n).join("")).match(r);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"��","%FF%FE":"��"},a=n.exec(t);a;){try{r[a[0]]=decodeURIComponent(a[0])}catch(e){var i=o(a[0]);i!==a[0]&&(r[a[0]]=i)}a=n.exec(t)}r["%C2"]="�";for(var u=Object.keys(r),c=0;c<u.length;c++){var s=u[c];t=t.replace(new RegExp(s,"g"),r[s])}return t}(t)}}},8616:function(t){"use strict";t.exports=function(t,e){for(var r={},n=Object.keys(t),a=Array.isArray(e),o=0;o<n.length;o++){var i=n[o],u=t[i];(a?-1!==e.indexOf(i):e(i,u,t))&&(r[i]=u)}return r}},2203:function(t,e,r){"use strict";var n=r(3038),a=r(319);function o(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){c=!0,o=t},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw o}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u=r(8936),c=r(7091),s=r(4734),l=r(8616);function f(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function p(t,e){return e.encode?e.strict?u(t):encodeURIComponent(t):t}function d(t,e){return e.decode?c(t):t}function g(t){return Array.isArray(t)?t.sort():"object"==typeof t?g(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}function m(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function y(t){var e=(t=m(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function x(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function v(t,e){f((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var a="string"==typeof r&&r.includes(t.arrayFormatSeparator),o="string"==typeof r&&!a&&d(r,t).includes(t.arrayFormatSeparator);r=o?d(r,t):r;var i=a||o?r.split(t.arrayFormatSeparator).map((function(e){return d(e,t)})):null===r?r:d(r,t);n[e]=i};case"bracket-separator":return function(e,r,n){var a=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),a){var o=null===r?[]:r.split(t.arrayFormatSeparator).map((function(e){return d(e,t)}));void 0!==n[e]?n[e]=[].concat(n[e],o):n[e]=o}else n[e]=r?d(r,t):r};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),a=Object.create(null);if("string"!=typeof t)return a;if(!(t=t.trim().replace(/^[?#&]/,"")))return a;var i,u=o(t.split("&"));try{for(u.s();!(i=u.n()).done;){var c=i.value;if(""!==c){var l=s(e.decode?c.replace(/\+/g," "):c,"="),p=n(l,2),m=p[0],y=p[1];y=void 0===y?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?y:d(y,e),r(d(m,e),y,a)}}}catch(I){u.e(I)}finally{u.f()}for(var v=0,h=Object.keys(a);v<h.length;v++){var b=h[v],w=a[b];if("object"==typeof w&&null!==w)for(var k=0,j=Object.keys(w);k<j.length;k++){var Z=j[k];w[Z]=x(w[Z],e)}else a[b]=x(w,e)}return!1===e.sort?a:(!0===e.sort?Object.keys(a).sort():Object.keys(a).sort(e.sort)).reduce((function(t,e){var r=a[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=g(r):t[e]=r,t}),Object.create(null))}e.extract=y,e.parse=v,e.stringify=function(t,e){if(!t)return"";f((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var r=function(r){return e.skipNull&&null==t[r]||e.skipEmptyString&&""===t[r]},n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var o=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[p(e,t),"[",o,"]"].join("")]:[[p(e,t),"[",p(o,t),"]=",p(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[p(e,t),"[]"].join("")]:[[p(e,t),"[]=",p(n,t)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===t.arrayFormat?"[]=":"=";return function(r){return function(n,a){return void 0===a||t.skipNull&&null===a||t.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[p(r,t),e,p(a,t)].join("")]:[[n,p(a,t)].join(t.arrayFormatSeparator)])}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[p(e,t)]:[[p(e,t),"=",p(n,t)].join("")])}}}}(e),o={},i=0,u=Object.keys(t);i<u.length;i++){var c=u[i];r(c)||(o[c]=t[c])}var s=Object.keys(o);return!1!==e.sort&&s.sort(e.sort),s.map((function(r){var a=t[r];return void 0===a?"":null===a?p(r,e):Array.isArray(a)?0===a.length&&"bracket-separator"===e.arrayFormat?p(r,e)+"[]":a.reduce(n(r),[]).join("&"):p(r,e)+"="+p(a,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){e=Object.assign({decode:!0},e);var r=s(t,"#"),a=n(r,2),o=a[0],i=a[1];return Object.assign({url:o.split("?")[0]||"",query:v(y(t),e)},e&&e.parseFragmentIdentifier&&i?{fragmentIdentifier:d(i,e)}:{})},e.stringifyUrl=function(t,r){r=Object.assign({encode:!0,strict:!0},r);var n=m(t.url).split("?")[0]||"",a=e.extract(t.url),o=e.parse(a,{sort:!1}),i=Object.assign(o,t.query),u=e.stringify(i,r);u&&(u="?".concat(u));var c=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(c="#".concat(p(t.fragmentIdentifier,r))),"".concat(n).concat(u).concat(c)},e.pick=function(t,r,n){n=Object.assign({parseFragmentIdentifier:!0},n);var a=e.parseUrl(t,n),o=a.url,i=a.query,u=a.fragmentIdentifier;return e.stringifyUrl({url:o,query:l(i,r),fragmentIdentifier:u},n)},e.exclude=function(t,r,n){var a=Array.isArray(r)?function(t){return!r.includes(t)}:function(t,e){return!r(t,e)};return e.pick(t,a,n)}},4734:function(t){"use strict";t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},8936:function(t){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},305:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return U}});var n=r(7294),a=r(6771),o=r(1496),i=r(3431);var u=(0,a.Z)(o.Z,{target:"e1n1u3tj0"})({name:"1on2x4e",styles:"width:120px;height:120px;margin-bottom:30px;border-radius:50%;@media (max-width: 768px){width:80px;height:80px;}"}),c=function(t){var e=t.profileImage;return(0,i.tZ)(u,{fluid:e,alt:"Profile Image"})};var s=(0,a.Z)("div",{target:"e6xlcdb3"})({name:"1u7ncg7",styles:"width:100%;background-image:linear-gradient(60deg, #29323c 0%, #485563 100%);color:#ffffff"}),l=(0,a.Z)("header",{target:"e6xlcdb2"})({name:"1ib3zlp",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:768px;height:400px;margin:0 auto;padding:0 20px;@media (max-width: 768px){width:100%;height:300px;}"}),f=(0,a.Z)("div",{target:"e6xlcdb1"})({name:"1mgdphf",styles:"margin-top:5px;font-size:35px;font-weight:700;@media (max-width: 768px){font-size:25px;}"}),p=(0,a.Z)("div",{target:"e6xlcdb0"})({name:"1h8u8jj",styles:"font-size:20px;font-weight:400;@media (max-width: 768px){font-size:15px;}"}),d=function(t){var e=t.profileImage;return(0,i.tZ)(s,null,(0,i.tZ)(l,null,(0,i.tZ)(c,{profileImage:e}),(0,i.tZ)("div",null,(0,i.tZ)(f,null,"Super Awesome Blog"),(0,i.tZ)(p,null,"superLipbalm의 개발블로그!"))))},g=r(2122);var m=r(5444),y=["active","to"];var x=(0,a.Z)("div",{target:"e1kn8q5k1"})({name:"1israo0",styles:"display:flex;flex-wrap:wrap;width:768px;margin:50px auto 10px;padding:0 20px;@media (max-width: 768px){width:100%;margin-top:25px;}"}),v=(0,a.Z)((function(t){t.active;var e=t.to,r=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,y);return(0,i.tZ)(m.Link,(0,g.Z)({to:e},r))}),{target:"e1kn8q5k0"})("margin-right:25px;padding:5px 0;font-size:18px;font-weight:",(function(t){return t.active?"800":"600"}),";cursor:pointer;transform:",(function(t){return t.active?"scale(1.2)":"scale(1)"}),";transition:0.3s transform,0.3s font-weight;&:last-of-type{margin-right:0;}"),h=function(t){var e=t.selectedCategory,r=t.categoryList;return(0,i.tZ)(x,null,r&&Object.entries(r).map((function(t){var r=t[0],n=t[1];return(0,i.tZ)(v,{to:"/?category="+r,key:r,active:r===e},"#",r,"(",n,")")})))};var b=10,w=function(t,e){var r=(0,n.useRef)(null),a=(0,n.useRef)(null),o=(0,n.useState)(1),i=o[0],u=o[1],c=(0,n.useMemo)((function(){return e.filter((function(e){var r=e.node.frontmatter.categories;return"All"===t||r.includes(t)}))}),[t]);return(0,n.useEffect)((function(){a.current=new IntersectionObserver((function(t,e){t[0].isIntersecting&&(u((function(t){return t+1})),e.unobserve(t[0].target))}))}),[]),(0,n.useEffect)((function(){return u(1)}),[t]),(0,n.useEffect)((function(){b*i>=c.length||null===r.current||0===r.current.children.length||null===a.current||a.current.observe(r.current.children[r.current.children.length-1])}),[i,t]),{containerRef:r,postList:c.slice(0,i*b)}};var k=(0,a.Z)(m.Link,{target:"e1eg5kak7"})({name:"8755cs",styles:"display:flex;flex-direction:row;max-height:200px;border-radius:10px;transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}@media (max-width: 768px){max-height:150px;}"}),j=(0,a.Z)(o.Z,{target:"e1eg5kak6"})({name:"19r9o9r",styles:"width:200px;height:200px;border-radius:10px;@media (max-width: 768px){width:150px;height:100%;}"}),Z=(0,a.Z)("div",{target:"e1eg5kak5"})({name:"uzvpx7",styles:"display:flex;flex:1;flex-direction:column;padding:15px 30px"}),I=(0,a.Z)("div",{target:"e1eg5kak4"})({name:"xcfjgh",styles:"display:-webkit-box;overflow:hidden;margin-bottom:5px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),S=(0,a.Z)("div",{target:"e1eg5kak3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),A=(0,a.Z)("div",{target:"e1eg5kak2"})({name:"1d0t8b7",styles:"display:flex;flex-wrap:wrap;margin:5px -5px;margin-top:auto"}),O=(0,a.Z)("div",{target:"e1eg5kak1"})({name:"5wctyy",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:5px;background:#29323c;font-size:14px;font-weight:700;color:white"}),F=(0,a.Z)("div",{target:"e1eg5kak0"})({name:"x4p831",styles:"display:-webkit-box;margin-top:5px;overflow:hidden;overflow-wrap:break-word;text-overflow:ellipsis;white-space:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"}),_=function(t){var e=t.title,r=t.date,n=t.categories,a=t.summary,o=t.thumbnail.childImageSharp.fluid,u=t.link;return(0,i.tZ)(k,{to:u},(0,i.tZ)(j,{fluid:o,alt:"Post Item Image"}),(0,i.tZ)(Z,null,(0,i.tZ)(I,null,e),(0,i.tZ)(F,null,a),(0,i.tZ)(A,null,n.map((function(t){return(0,i.tZ)(O,{key:t},t)}))),(0,i.tZ)(S,null,r)))};var E=(0,a.Z)("div",{target:"es8e92y0"})({name:"wb4axt",styles:"display:grid;grid-template-columns:1fr;grid-gap:20px;width:768px;margin:0 auto;padding:10px 20px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;}"}),C=function(t){var e=t.selectedCategory,r=t.posts,n=w(e,r),a=n.containerRef,o=n.postList;return(0,i.tZ)(E,{ref:a},o.map((function(t){var e=t.node,r=e.id,n=e.fields.slug,a=e.frontmatter;return(0,i.tZ)(_,(0,g.Z)({},a,{link:n,key:r}))})))},M=r(2203),R=r(5490);var U=function(t){var e=t.location.search,r=t.data,a=r.site.siteMetadata,o=a.title,u=a.description,c=a.siteUrl,s=r.allMarkdownRemark.edges,l=r.file,f=l.publicURL,p=l.childImageSharp.fluid,g=M.parse(e),m="string"==typeof g.category&&g.category?g.category:"All",y=(0,n.useMemo)((function(){return s.reduce((function(t,e){return e.node.frontmatter.categories.forEach((function(e){void 0===t[e]?t[e]=1:t[e]++})),t.All++,t}),{All:0})}),[]);return(0,i.tZ)(R.Z,{title:o,description:u,url:c,image:f},(0,i.tZ)(d,{profileImage:p}),(0,i.tZ)(h,{selectedCategory:m,categoryList:y}),(0,i.tZ)(C,{selectedCategory:m,posts:s}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-8f410f5d2ca2e506d007.js.map