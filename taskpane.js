!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=310)}({122:function(e,n){function t(e,n){if(e=e.replace(/\s+/g,""),n=n.replace(/\s+/g,""),!e.length&&!n.length)return 1;if(!e.length||!n.length)return 0;if(e===n)return 1;if(1===e.length&&1===n.length)return 0;if(e.length<2||n.length<2)return 0;let t=new Map;for(let n=0;n<e.length-1;n++){const r=e.substring(n,n+2),i=t.has(r)?t.get(r)+1:1;t.set(r,i)}let r=0;for(let e=0;e<n.length-1;e++){const i=n.substring(e,e+2),o=t.has(i)?t.get(i):0;o>0&&(t.set(i,o-1),r++)}return 2*r/(e.length+n.length-2)}e.exports={compareTwoStrings:t,findBestMatch:function(e,n){if(!function(e,n){return"string"==typeof e&&(!!Array.isArray(n)&&(!!n.length&&!n.find(e=>"string"!=typeof e)))}(e,n))throw new Error("Bad arguments: First argument should be a string, second should be an array of strings");const r=[];let i=0;for(let o=0;o<n.length;o++){const s=n[o],a=t(e,s);r.push({target:s,rating:a}),a>r[i].rating&&(i=o)}const o=r[i];return{ratings:r,bestMatch:o,bestMatchIndex:i}}}},123:function(e,n,t){
/*!

 diff v4.0.1

Software License Agreement (BSD License)

Copyright (c) 2009-2015, Kevin Decker <kpdecker@gmail.com>

All rights reserved.

Redistribution and use of this software in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above
  copyright notice, this list of conditions and the
  following disclaimer.

* Redistributions in binary form must reproduce the above
  copyright notice, this list of conditions and the
  following disclaimer in the documentation and/or other
  materials provided with the distribution.

* Neither the name of Kevin Decker nor the names of its
  contributors may be used to endorse or promote products
  derived from this software without specific prior
  written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
@license
*/
!function(e){"use strict";function n(){}function t(e,n,t,r,i){for(var o=0,s=n.length,a=0,l=0;o<s;o++){var u=n[o];if(u.removed){if(u.value=e.join(r.slice(l,l+u.count)),l+=u.count,o&&n[o-1].added){var c=n[o-1];n[o-1]=n[o],n[o]=c}}else{if(!u.added&&i){var f=t.slice(a,a+u.count);f=f.map((function(e,n){var t=r[l+n];return t.length>e.length?t:e})),u.value=e.join(f)}else u.value=e.join(t.slice(a,a+u.count));a+=u.count,u.added||(l+=u.count)}}var d=n[s-1];return s>1&&"string"==typeof d.value&&(d.added||d.removed)&&e.equals("",d.value)&&(n[s-2].value+=d.value,n.pop()),n}function r(e){return{newPos:e.newPos,components:e.components.slice(0)}}n.prototype={diff:function(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i.callback;"function"==typeof i&&(o=i,i={}),this.options=i;var s=this;function a(e){return o?(setTimeout((function(){o(void 0,e)}),0),!0):e}e=this.castInput(e),n=this.castInput(n),e=this.removeEmpty(this.tokenize(e));var l=(n=this.removeEmpty(this.tokenize(n))).length,u=e.length,c=1,f=l+u,d=[{newPos:-1,components:[]}],p=this.extractCommon(d[0],n,e,0);if(d[0].newPos+1>=l&&p+1>=u)return a([{value:this.join(n),count:n.length}]);function h(){for(var i=-1*c;i<=c;i+=2){var o=void 0,f=d[i-1],p=d[i+1],h=(p?p.newPos:0)-i;f&&(d[i-1]=void 0);var g=f&&f.newPos+1<l,v=p&&0<=h&&h<u;if(g||v){if(!g||v&&f.newPos<p.newPos?(o=r(p),s.pushComponent(o.components,void 0,!0)):((o=f).newPos++,s.pushComponent(o.components,!0,void 0)),h=s.extractCommon(o,n,e,i),o.newPos+1>=l&&h+1>=u)return a(t(s,o.components,n,e,s.useLongestToken));d[i]=o}else d[i]=void 0}c++}if(o)!function e(){setTimeout((function(){if(c>f)return o();h()||e()}),0)}();else for(;c<=f;){var g=h();if(g)return g}},pushComponent:function(e,n,t){var r=e[e.length-1];r&&r.added===n&&r.removed===t?e[e.length-1]={count:r.count+1,added:n,removed:t}:e.push({count:1,added:n,removed:t})},extractCommon:function(e,n,t,r){for(var i=n.length,o=t.length,s=e.newPos,a=s-r,l=0;s+1<i&&a+1<o&&this.equals(n[s+1],t[a+1]);)s++,a++,l++;return l&&e.components.push({count:l}),e.newPos=s,a},equals:function(e,n){return this.options.comparator?this.options.comparator(e,n):e===n||this.options.ignoreCase&&e.toLowerCase()===n.toLowerCase()},removeEmpty:function(e){for(var n=[],t=0;t<e.length;t++)e[t]&&n.push(e[t]);return n},castInput:function(e){return e},tokenize:function(e){return e.split("")},join:function(e){return e.join("")}};var i=new n;function o(e,n){if("function"==typeof e)n.callback=e;else if(e)for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}var s=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,a=/\S/,l=new n;l.equals=function(e,n){return this.options.ignoreCase&&(e=e.toLowerCase(),n=n.toLowerCase()),e===n||this.options.ignoreWhitespace&&!a.test(e)&&!a.test(n)},l.tokenize=function(e){for(var n=e.split(/(\s+|[()[\]{}'"]|\b)/),t=0;t<n.length-1;t++)!n[t+1]&&n[t+2]&&s.test(n[t])&&s.test(n[t+2])&&(n[t]+=n[t+2],n.splice(t+1,2),t--);return n};var u=new n;function c(e,n,t){return u.diff(e,n,t)}u.tokenize=function(e){var n=[],t=e.split(/(\n|\r\n)/);t[t.length-1]||t.pop();for(var r=0;r<t.length;r++){var i=t[r];r%2&&!this.options.newlineIsToken?n[n.length-1]+=i:(this.options.ignoreWhitespace&&(i=i.trim()),n.push(i))}return n};var f=new n;f.tokenize=function(e){return e.split(/(\S.+?[.!?])(?=\s+|$)/)};var d=new n;function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}d.tokenize=function(e){return e.split(/([{}:;,]|\s+)/)};var g=Object.prototype.toString,v=new n;function m(e,n,t,r,i){var o,s;for(n=n||[],t=t||[],r&&(e=r(i,e)),o=0;o<n.length;o+=1)if(n[o]===e)return t[o];if("[object Array]"===g.call(e)){for(n.push(e),s=new Array(e.length),t.push(s),o=0;o<e.length;o+=1)s[o]=m(e[o],n,t,r,i);return n.pop(),t.pop(),s}if(e&&e.toJSON&&(e=e.toJSON()),"object"===p(e)&&null!==e){n.push(e),s={},t.push(s);var a,l=[];for(a in e)e.hasOwnProperty(a)&&l.push(a);for(l.sort(),o=0;o<l.length;o+=1)s[a=l[o]]=m(e[a],n,t,r,a);n.pop(),t.pop()}else s=e;return s}v.useLongestToken=!0,v.tokenize=u.tokenize,v.castInput=function(e){var n=this.options,t=n.undefinedReplacement,r=n.stringifyReplacer,i=void 0===r?function(e,n){return void 0===n?t:n}:r;return"string"==typeof e?e:JSON.stringify(m(e,null,null,i),i,"  ")},v.equals=function(e,t){return n.prototype.equals.call(v,e.replace(/,([\r\n])/g,"$1"),t.replace(/,([\r\n])/g,"$1"))};var y=new n;function b(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.split(/\r\n|[\n\v\f\r\x85]/),r=e.match(/\r\n|[\n\v\f\r\x85]/g)||[],i=[],o=0;function s(){var e={};for(i.push(e);o<t.length;){var r=t[o];if(/^(\-\-\-|\+\+\+|@@)\s/.test(r))break;var s=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(r);s&&(e.index=s[1]),o++}for(a(e),a(e),e.hunks=[];o<t.length;){var u=t[o];if(/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(u))break;if(/^@@/.test(u))e.hunks.push(l());else{if(u&&n.strict)throw new Error("Unknown line "+(o+1)+" "+JSON.stringify(u));o++}}}function a(e){var n=/^(---|\+\+\+)\s+(.*)$/.exec(t[o]);if(n){var r="---"===n[1]?"old":"new",i=n[2].split("\t",2),s=i[0].replace(/\\\\/g,"\\");/^".*"$/.test(s)&&(s=s.substr(1,s.length-2)),e[r+"FileName"]=s,e[r+"Header"]=(i[1]||"").trim(),o++}}function l(){for(var e=o,i=t[o++].split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),s={oldStart:+i[1],oldLines:+i[2]||1,newStart:+i[3],newLines:+i[4]||1,lines:[],linedelimiters:[]},a=0,l=0;o<t.length&&!(0===t[o].indexOf("--- ")&&o+2<t.length&&0===t[o+1].indexOf("+++ ")&&0===t[o+2].indexOf("@@"));o++){var u=0==t[o].length&&o!=t.length-1?" ":t[o][0];if("+"!==u&&"-"!==u&&" "!==u&&"\\"!==u)break;s.lines.push(t[o]),s.linedelimiters.push(r[o]||"\n"),"+"===u?a++:"-"===u?l++:" "===u&&(a++,l++)}if(a||1!==s.newLines||(s.newLines=0),l||1!==s.oldLines||(s.oldLines=0),n.strict){if(a!==s.newLines)throw new Error("Added line count did not match for hunk at line "+(e+1));if(l!==s.oldLines)throw new Error("Removed line count did not match for hunk at line "+(e+1))}return s}for(;o<t.length;)s();return i}function w(e,n,t){var r=!0,i=!1,o=!1,s=1;return function a(){if(r&&!o){if(i?s++:r=!1,e+s<=t)return s;o=!0}if(!i)return o||(r=!0),n<=e-s?-s++:(i=!0,a())}}function x(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n&&(n=b(n)),Array.isArray(n)){if(n.length>1)throw new Error("applyPatch only works with a single input.");n=n[0]}var r,i,o=e.split(/\r\n|[\n\v\f\r\x85]/),s=e.match(/\r\n|[\n\v\f\r\x85]/g)||[],a=n.hunks,l=t.compareLine||function(e,n,t,r){return n===r},u=0,c=t.fuzzFactor||0,f=0,d=0;function p(e,n){for(var t=0;t<e.lines.length;t++){var r=e.lines[t],i=r.length>0?r[0]:" ",s=r.length>0?r.substr(1):r;if(" "===i||"-"===i){if(!l(n+1,o[n],i,s)&&++u>c)return!1;n++}}return!0}for(var h=0;h<a.length;h++){for(var g=a[h],v=o.length-g.oldLines,m=0,y=d+g.oldStart-1,x=w(y,f,v);void 0!==m;m=x())if(p(g,y+m)){g.offset=d+=m;break}if(void 0===m)return!1;f=g.offset+g.oldStart+g.oldLines}for(var S=0,C=0;C<a.length;C++){var k=a[C],L=k.oldStart+k.offset+S-1;S+=k.newLines-k.oldLines,L<0&&(L=0);for(var T=0;T<k.lines.length;T++){var E=k.lines[T],N=E.length>0?E[0]:" ",A=E.length>0?E.substr(1):E,F=k.linedelimiters[T];if(" "===N)L++;else if("-"===N)o.splice(L,1),s.splice(L,1);else if("+"===N)o.splice(L,0,A),s.splice(L,0,F),L++;else if("\\"===N){var j=k.lines[T-1]?k.lines[T-1][0]:null;"+"===j?r=!0:"-"===j&&(i=!0)}}}if(r)for(;!o[o.length-1];)o.pop(),s.pop();else i&&(o.push(""),s.push("\n"));for(var P=0;P<o.length-1;P++)o[P]=o[P]+s[P];return o.join("")}function S(e,n,t,r,i,o,s){s||(s={}),void 0===s.context&&(s.context=4);var a=c(t,r,s);function l(e){return e.map((function(e){return" "+e}))}a.push({value:"",lines:[]});for(var u=[],f=0,d=0,p=[],g=1,v=1,m=function(e){var n=a[e],i=n.lines||n.value.replace(/\n$/,"").split("\n");if(n.lines=i,n.added||n.removed){var o;if(!f){var c=a[e-1];f=g,d=v,c&&(p=s.context>0?l(c.lines.slice(-s.context)):[],f-=p.length,d-=p.length)}(o=p).push.apply(o,h(i.map((function(e){return(n.added?"+":"-")+e})))),n.added?v+=i.length:g+=i.length}else{if(f)if(i.length<=2*s.context&&e<a.length-2){var m;(m=p).push.apply(m,h(l(i)))}else{var y,b=Math.min(i.length,s.context);(y=p).push.apply(y,h(l(i.slice(0,b))));var w={oldStart:f,oldLines:g-f+b,newStart:d,newLines:v-d+b,lines:p};if(e>=a.length-2&&i.length<=s.context){var x=/\n$/.test(t),S=/\n$/.test(r),C=0==i.length&&p.length>w.oldLines;!x&&C&&p.splice(w.oldLines,0,"\\ No newline at end of file"),(x||C)&&S||p.push("\\ No newline at end of file")}u.push(w),f=0,d=0,p=[]}g+=i.length,v+=i.length}},y=0;y<a.length;y++)m(y);return{oldFileName:e,newFileName:n,oldHeader:i,newHeader:o,hunks:u}}function C(e,n,t,r,i,o,s){var a=S(e,n,t,r,i,o,s),l=[];e==n&&l.push("Index: "+e),l.push("==================================================================="),l.push("--- "+a.oldFileName+(void 0===a.oldHeader?"":"\t"+a.oldHeader)),l.push("+++ "+a.newFileName+(void 0===a.newHeader?"":"\t"+a.newHeader));for(var u=0;u<a.hunks.length;u++){var c=a.hunks[u];l.push("@@ -"+c.oldStart+","+c.oldLines+" +"+c.newStart+","+c.newLines+" @@"),l.push.apply(l,c.lines)}return l.join("\n")+"\n"}function k(e,n){if(n.length>e.length)return!1;for(var t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function L(e){var n=function e(n){var t=0,r=0;return n.forEach((function(n){if("string"!=typeof n){var i=e(n.mine),o=e(n.theirs);void 0!==t&&(i.oldLines===o.oldLines?t+=i.oldLines:t=void 0),void 0!==r&&(i.newLines===o.newLines?r+=i.newLines:r=void 0)}else void 0===r||"+"!==n[0]&&" "!==n[0]||r++,void 0===t||"-"!==n[0]&&" "!==n[0]||t++})),{oldLines:t,newLines:r}}(e.lines),t=n.oldLines,r=n.newLines;void 0!==t?e.oldLines=t:delete e.oldLines,void 0!==r?e.newLines=r:delete e.newLines}function T(e,n){if("string"==typeof e){if(/^@@/m.test(e)||/^Index:/m.test(e))return b(e)[0];if(!n)throw new Error("Must provide a base reference or pass in a patch");return S(void 0,void 0,n,e)}return e}function E(e){return e.newFileName&&e.newFileName!==e.oldFileName}function N(e,n,t){return n===t?n:(e.conflict=!0,{mine:n,theirs:t})}function A(e,n){return e.oldStart<n.oldStart&&e.oldStart+e.oldLines<n.oldStart}function F(e,n){return{oldStart:e.oldStart,oldLines:e.oldLines,newStart:e.newStart+n,newLines:e.newLines,lines:e.lines}}function j(e,n,t,r,i){var o={offset:n,lines:t,index:0},s={offset:r,lines:i,index:0};for(_(e,o,s),_(e,s,o);o.index<o.lines.length&&s.index<s.lines.length;){var a=o.lines[o.index],l=s.lines[s.index];if("-"!==a[0]&&"+"!==a[0]||"-"!==l[0]&&"+"!==l[0])if("+"===a[0]&&" "===l[0]){var u;(u=e.lines).push.apply(u,h(z(o)))}else if("+"===l[0]&&" "===a[0]){var c;(c=e.lines).push.apply(c,h(z(s)))}else"-"===a[0]&&" "===l[0]?O(e,o,s):"-"===l[0]&&" "===a[0]?O(e,s,o,!0):a===l?(e.lines.push(a),o.index++,s.index++):R(e,z(o),z(s));else P(e,o,s)}M(e,o),M(e,s),L(e)}function P(e,n,t){var r,i,o=z(n),s=z(t);if(H(o)&&H(s)){var a,l;if(k(o,s)&&W(t,o,o.length-s.length))return void(a=e.lines).push.apply(a,h(o));if(k(s,o)&&W(n,s,s.length-o.length))return void(l=e.lines).push.apply(l,h(s))}else if(i=s,(r=o).length===i.length&&k(r,i)){var u;return void(u=e.lines).push.apply(u,h(o))}R(e,o,s)}function O(e,n,t,r){var i,o=z(n),s=function(e,n){for(var t=[],r=[],i=0,o=!1,s=!1;i<n.length&&e.index<e.lines.length;){var a=e.lines[e.index],l=n[i];if("+"===l[0])break;if(o=o||" "!==a[0],r.push(l),i++,"+"===a[0])for(s=!0;"+"===a[0];)t.push(a),a=e.lines[++e.index];l.substr(1)===a.substr(1)?(t.push(a),e.index++):s=!0}if("+"===(n[i]||"")[0]&&o&&(s=!0),s)return t;for(;i<n.length;)r.push(n[i++]);return{merged:r,changes:t}}(t,o);s.merged?(i=e.lines).push.apply(i,h(s.merged)):R(e,r?s:o,r?o:s)}function R(e,n,t){e.conflict=!0,e.lines.push({conflict:!0,mine:n,theirs:t})}function _(e,n,t){for(;n.offset<t.offset&&n.index<n.lines.length;){var r=n.lines[n.index++];e.lines.push(r),n.offset++}}function M(e,n){for(;n.index<n.lines.length;){var t=n.lines[n.index++];e.lines.push(t)}}function z(e){for(var n=[],t=e.lines[e.index][0];e.index<e.lines.length;){var r=e.lines[e.index];if("-"===t&&"+"===r[0]&&(t="+"),t!==r[0])break;n.push(r),e.index++}return n}function H(e){return e.reduce((function(e,n){return e&&"-"===n[0]}),!0)}function W(e,n,t){for(var r=0;r<t;r++){var i=n[n.length-t+r].substr(1);if(e.lines[e.index+r]!==" "+i)return!1}return e.index+=t,!0}y.tokenize=function(e){return e.slice()},y.join=y.removeEmpty=function(e){return e},e.Diff=n,e.diffChars=function(e,n,t){return i.diff(e,n,t)},e.diffWords=function(e,n,t){return t=o(t,{ignoreWhitespace:!0}),l.diff(e,n,t)},e.diffWordsWithSpace=function(e,n,t){return l.diff(e,n,t)},e.diffLines=c,e.diffTrimmedLines=function(e,n,t){var r=o(t,{ignoreWhitespace:!0});return u.diff(e,n,r)},e.diffSentences=function(e,n,t){return f.diff(e,n,t)},e.diffCss=function(e,n,t){return d.diff(e,n,t)},e.diffJson=function(e,n,t){return v.diff(e,n,t)},e.diffArrays=function(e,n,t){return y.diff(e,n,t)},e.structuredPatch=S,e.createTwoFilesPatch=C,e.createPatch=function(e,n,t,r,i,o){return C(e,e,n,t,r,i,o)},e.applyPatch=x,e.applyPatches=function(e,n){"string"==typeof e&&(e=b(e));var t=0;!function r(){var i=e[t++];if(!i)return n.complete();n.loadFile(i,(function(e,t){if(e)return n.complete(e);var o=x(t,i,n);n.patched(i,o,(function(e){if(e)return n.complete(e);r()}))}))}()},e.parsePatch=b,e.merge=function(e,n,t){e=T(e,t),n=T(n,t);var r={};(e.index||n.index)&&(r.index=e.index||n.index),(e.newFileName||n.newFileName)&&(E(e)?E(n)?(r.oldFileName=N(r,e.oldFileName,n.oldFileName),r.newFileName=N(r,e.newFileName,n.newFileName),r.oldHeader=N(r,e.oldHeader,n.oldHeader),r.newHeader=N(r,e.newHeader,n.newHeader)):(r.oldFileName=e.oldFileName,r.newFileName=e.newFileName,r.oldHeader=e.oldHeader,r.newHeader=e.newHeader):(r.oldFileName=n.oldFileName||e.oldFileName,r.newFileName=n.newFileName||e.newFileName,r.oldHeader=n.oldHeader||e.oldHeader,r.newHeader=n.newHeader||e.newHeader)),r.hunks=[];for(var i=0,o=0,s=0,a=0;i<e.hunks.length||o<n.hunks.length;){var l=e.hunks[i]||{oldStart:1/0},u=n.hunks[o]||{oldStart:1/0};if(A(l,u))r.hunks.push(F(l,s)),i++,a+=l.newLines-l.oldLines;else if(A(u,l))r.hunks.push(F(u,a)),o++,s+=u.newLines-u.oldLines;else{var c={oldStart:Math.min(l.oldStart,u.oldStart),oldLines:0,newStart:Math.min(l.newStart+s,u.oldStart+a),newLines:0,lines:[]};j(c,l.oldStart,l.lines,u.oldStart,u.lines),o++,i++,r.hunks.push(c)}}return r},e.convertChangesToDMP=function(e){for(var n,t,r=[],i=0;i<e.length;i++)t=(n=e[i]).added?1:n.removed?-1:0,r.push([t,n.value]);return r},e.convertChangesToXML=function(e){for(var n=[],t=0;t<e.length;t++){var r=e[t];r.added?n.push("<ins>"):r.removed&&n.push("<del>"),n.push((i=r.value,void 0,i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"))),r.added?n.push("</ins>"):r.removed&&n.push("</del>")}var i;return n.join("")},e.canonicalize=m,Object.defineProperty(e,"__esModule",{value:!0})}(n)},310:function(e,n,t){"use strict";t.r(n);var r=t(88),i=t(122),o=t(123);function s(e,n,t,r,i,o,s){try{var a=e[o](s),l=a.value}catch(e){return void t(e)}a.done?n(l):Promise.resolve(l).then(r,i)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){s(o,r,i,a,l,"next",e)}function l(e){s(o,r,i,a,l,"throw",e)}a(void 0)}))}}function l(){return u.apply(this,arguments)}function u(){return(u=a(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Word.run(function(){var e=a(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=n.document.body).load("text"),e.next=4,n.sync();case 4:return n.document.body.clear(),e.next=7,n.sync();case 7:return(r=n.document.body.insertTable(1,2,"Start")).getCell(0,0).body.insertText(t.text,"Start"),r.getCell(0,0).body.getRange().select(Word.SelectionMode.select),e.next=12,n.sync();case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return f.apply(this,arguments)}function f(){return(f=a(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Word.run(function(){var e=a(regeneratorRuntime.mark((function e(n){var t,i,o,s,a,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=n.document.body.tables.getFirst().getCell(0,0).body).load("text"),(i=n.document.body.tables.getFirst().getCell(0,1).body).load("text"),n.document.body.clear(),e.next=7,n.sync();case 7:for(o=Object(r.sentences)(t.text),s=Object(r.sentences)(i.text),(a=n.document.body.insertTable(1,2,"Start",[["Source","Translate"]])).styleBuiltIn="GridTable2_Accent2",l=0;l<o.length;l++)a.addRows("End",1,[[o[l],s[l]]]);return e.next=14,n.sync();case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){for(var n=e.length;n--;){var t=Math.floor(Math.random()*(n+1)),r=[e[t],e[n]];e[n]=r[0],e[t]=r[1]}return e.join(" | ")}function p(){return h.apply(this,arguments)}function h(){return(h=a(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 1,5,e.next=4,Word.run(function(){var e=a(regeneratorRuntime.mark((function e(n){var t,r,s,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.document.getSelection().parentTable,e.next=3,n.sync();case 3:return(r=t.getCell(1,0).body).load("text"),(s=t.getCell(4,0).body).load("text"),e.next=9,n.sync();case 9:return t.getCell(5,0).body.clear(),t.getCell(0,0).body.clear(),(a=Object(i.compareTwoStrings)(r.text,s.text))>.85&&t.getCell(1,0).body.font.set({color:"white"}),t.getCell(0,0).body.insertText("Total grade (of 10): "+(Math.round(100*a)/10).toString(),"End"),Object(o.diffWords)(r.text,s.text,{ignoreCase:!0,ignoreWhitespace:!0}).forEach((function(e){if(e.removed)t.getCell(5,0).body.insertText("???????????????".substr(0,e.value.trim().length)+" ","End").font.set({bold:!1,italic:!1,color:"blue",size:12});else if(e.added){t.getCell(5,0).body.insertText(e.value,"End").font.set({bold:!1,italic:!1,color:"red",size:12})}else{t.getCell(5,0).body.insertText(e.value,"End").font.set({bold:!1,italic:!1,color:"green",size:12})}})),t.getCell(4,0).body.select("End"),e.next=19,n.sync();case 19:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return v.apply(this,arguments)}function v(){return(v=a(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Word.run(function(){var e=a(regeneratorRuntime.mark((function e(n){var t,r,i,o,s,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=n.document.body.tables.getFirst()).load("rows"),e.next=4,n.sync();case 4:n.document.body.insertParagraph("Tasks start on the next page","End"),n.document.body.insertBreak(Word.BreakType.page,"End"),n.document.body.insertParagraph("Writing Tasks","End").styleBuiltIn="Heading1",r=1;case 9:if(!(r<=t.rows.items.length)){e.next=32;break}return(i=t.getCell(r,0).body).load("text"),(o=t.getCell(r,1).body).load("text"),e.next=16,n.sync();case 16:return s=d(i.text.split(" ")),(a=n.document.body.insertTable(6,1,"End")).styleBuiltIn="GridTable5Dark",a.styleFirstColumn=!1,a.getCell(0,0).body.insertText("Total grade (of 10): 0","End"),a.getCell(1,0).body.insertText(i.text,"End"),a.getCell(2,0).body.insertText(o.text,"End"),a.getCell(3,0).body.insertText(s,"End"),a.getCell(4,0).body.insertText("(Type text here)","End"),a.getCell(5,0).body.insertText("(Results)","End"),a.getCell(1,0).body.font.set({color:"darkgray",size:10}),e.next=29,n.sync();case 29:r++,e.next=9;break;case 32:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Office.onReady((function(e){e.host===Office.HostType.Word&&(document.getElementById("sideload-msg").style.display="none",document.getElementById("app-body").style.display="flex",document.getElementById("setupStep1").onclick=l,document.getElementById("setupStep2").onclick=c,document.getElementById("setupStep3").onclick=g,document.getElementById("check").onclick=p)}))},311:function(e,n){e.exports=function(e,n){if(("string"==typeof e||e instanceof String)&&"undefined"!=typeof document){var t=document.createElement("DIV");t.innerHTML=e,e=(t.textContent||"").trim()}else"object"==typeof e&&e.textContent&&(e=(e.textContent||"").trim());return e}},312:function(e,n){n.endsWithChar=function(e,n){return n.length>1?n.indexOf(e.slice(-1))>-1:e.slice(-1)===n},n.endsWith=function(e,n){return e.slice(e.length-n.length)===n}},313:function(e,n){var t,r=["al","adj","assn","Ave","BSc","MSc","Cell","Ch","Co","cc","Corp","Dem","Dept","ed","eg","Eq","Eqs","est","est","etc","Ex","ext","Fig","fig","Figs","figs","i.e","ie","Inc","inc","Jan","Feb","Mar","Apr","Jun","Jul","Aug","Sep","Sept","Oct","Nov","Dec","jr","mi","Miss","Mrs","Mr","Ms","Mol","mt","mts","no","Nos","PhD","MD","BA","MA","MM","pl","pop","pp","Prof","Dr","pt","Ref","Refs","Rep","repr","rev","Sec","Secs","Sgt","Col","Gen","Rep","Sen","Gov","Lt","Maj","Capt","St","Sr","sr","Jr","jr","Rev","Sun","Mon","Tu","Tue","Tues","Wed","Th","Thu","Thur","Thurs","Fri","Sat","trans","Univ","Viz","Vol","vs","v"];n.setAbbreviations=function(e){t=e||r};var i=n.isCapitalized=function(e){return/^[A-Z][a-z].*/.test(e)||o(e)};n.isSentenceStarter=function(e){return i(e)||/``|"|'/.test(e.substring(0,2))},n.isCommonAbbreviation=function(e){var n=e.replace(/[-'`~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/]/gi,"");return~t.indexOf(n)},n.isTimeAbbreviation=function(e,n){if(("a.m."===e||"p.m."===e)&&"day"===n.replace(/\W+/g,"").slice(-3).toLowerCase())return!0;return!1},n.isDottedAbbreviation=function(e){var n=e.replace(/[\(\)\[\]\{\}]/g,"").match(/(.\.)*/);return n&&n[0].length>0},n.isCustomAbbreviation=function(e){return e.length<=3||i(e)},n.isNameAbbreviation=function(e,n){return n.length>0&&(!!(e<5&&n[0].length<6&&i(n[0]))||n.filter((function(e){return/[A-Z]/.test(e.charAt(0))})).length>=3)};var o=n.isNumber=function(e,n){return n&&(e=e.slice(n-1,n+2)),!isNaN(e)};n.isPhoneNr=function(e){return e.match(/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/)},n.isURL=function(e){return e.match(/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)},n.isConcatenated=function(e){var n=0;if(((n=e.indexOf("."))>-1||(n=e.indexOf("!"))>-1||(n=e.indexOf("?"))>-1)&&e.charAt(n+1).match(/[a-zA-Z].*/))return[e.slice(0,n),e.slice(n+1)];return!1},n.isBoundaryChar=function(e){return"."===e||"!"===e||"?"===e}},88:function(e,n,t){var r=t(311),i=t(312),o=t(313),s=" @~@ ".trim(),a=new RegExp("\\S",""),l=new RegExp("\\n+|[-#=_+*]{4,}","g"),u=new RegExp("\\S+|\\n","g");n.sentences=function(e,n){if(!e||"string"!=typeof e||!e.length)return[];if(!a.test(e))return[];var t,c,f={newline_boundaries:!1,html_boundaries:!1,html_boundaries_tags:["p","div","ul","ol"],sanitize:!1,allowed_tags:!1,preserve_whitespace:!1,abbreviations:null};if("boolean"==typeof n)f.newline_boundaries=!0;else for(var d in n)f[d]=n[d];if(o.setAbbreviations(f.abbreviations),f.newline_boundaries&&(e=e.replace(l," @~@ ")),f.html_boundaries){var p="(<br\\s*\\/?>|<\\/("+f.html_boundaries_tags.join("|")+")>)",h=new RegExp(p,"g");e=e.replace(h,"$1 @~@ ")}(f.sanitize||f.allowed_tags)&&(f.allowed_tags||(f.allowed_tags=[""]),e=r(e,{allowedTags:f.allowed_tags}));var g=0,v=0,m=[],y=[],b=[];if(!(t=f.preserve_whitespace?(c=e.split(/(<br\s*\/?>|\S+|\n+)/)).filter((function(e,n){return n%2})):e.trim().match(u))||!t.length)return[];for(var w=0,x=t.length;w<x;w++)if(g++,b.push(t[w]),~t[w].indexOf(",")&&(g=0),o.isBoundaryChar(t[w])||i.endsWithChar(t[w],"?!")||t[w]===s)(f.newline_boundaries||f.html_boundaries)&&t[w]===s&&b.pop(),y.push(b),g=0,b=[];else if((i.endsWithChar(t[w],'"')||i.endsWithChar(t[w],"”"))&&(t[w]=t[w].slice(0,-1)),i.endsWithChar(t[w],".")){if(w+1<x){if(2===t[w].length&&isNaN(t[w].charAt(0)))continue;if(o.isCommonAbbreviation(t[w]))continue;if(o.isSentenceStarter(t[w+1])){if(o.isTimeAbbreviation(t[w],t[w+1]))continue;if(o.isNameAbbreviation(g,t.slice(w,6)))continue;if(o.isNumber(t[w+1])&&o.isCustomAbbreviation(t[w]))continue}else{if(i.endsWith(t[w],".."))continue;if(o.isDottedAbbreviation(t[w]))continue;if(o.isNameAbbreviation(g,t.slice(w,5)))continue}}y.push(b),b=[],g=0}else{if((v=t[w].indexOf("."))>-1){if(o.isNumber(t[w],v))continue;if(o.isDottedAbbreviation(t[w]))continue;if(o.isURL(t[w])||o.isPhoneNr(t[w]))continue}(m=o.isConcatenated(t[w]))&&(b.pop(),b.push(m[0]),y.push(b),g=0,(b=[]).push(m[1]))}return b.length&&y.push(b),(y=y.filter((function(e){return e.length>0}))).slice(1).reduce((function(e,n){var t=e[e.length-1];return 1===t.length&&/^.{1,2}[.]$/.test(t[0])&&!/[.]/.test(n[0])?(e.pop(),e.push(t.concat(n)),e):(e.push(n),e)}),[y[0]]).map((function(e,n){if(f.preserve_whitespace&&!f.newline_boundaries&&!f.html_boundaries){var t=2*e.length;return 0===n&&(t+=1),c.splice(0,t).join("")}return e.join(" ")}))}}});
//# sourceMappingURL=taskpane.js.map