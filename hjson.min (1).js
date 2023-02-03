/*!
 * Hjson v3.2.1
 * https://hjson.github.io
 *
 * Copyright 2014-2017 Christian Zangl, MIT license
 * Details and documentation:
 * https://github.com/hjson/hjson-js
 *
 * This code is based on the the JSON version by Douglas Crockford:
 * https://github.com/douglascrockford/JSON-js (json_parse.js, json2.js)
 */
!function(n){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.Hjson=n()}}(function(){return function(){function n(r,e,t){function o(a,s){if(!e[a]){if(!r[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}var c=e[a]={exports:{}};r[a][0].call(c.exports,function(n){return o(r[a][1][n]||n)},c,c.exports,n,r,e,t)}return e[a].exports}for(var i="function"==typeof require&&require,a=0;a<t.length;a++)o(t[a]);return o}return n}()({1:[function(n,r,e){"use strict";function t(n,r,e){var t;return n&&(t={b:n}),r&&((t=t||{}).a=r),e&&((t=t||{}).x=e),t}function o(n,r){if(null!==n&&"object"==typeof n){var e=h.getComment(n);e&&h.removeComment(n);var i,a,u,f;if("[object Array]"===Object.prototype.toString.apply(n)){for(f={a:{}},i=0,a=n.length;i<a;i++)s(f.a,i,e.a[i],o(n[i]))&&(u=!0);!u&&e.e&&(f.e=t(e.e[0],e.e[1]),u=!0)}else{f={s:{}};var c,l=Object.keys(n);for(e&&e.o?(c=[],e.o.concat(l).forEach(function(r){Object.prototype.hasOwnProperty.call(n,r)&&c.indexOf(r)<0&&c.push(r)})):c=l,f.o=c,i=0,a=c.length;i<a;i++){var p=c[i];s(f.s,p,e.c[p],o(n[p]))&&(u=!0)}!u&&e.e&&(f.e=t(e.e[0],e.e[1]),u=!0)}return r&&e&&e.r&&(f.r=t(e.r[0],e.r[1])),u?f:void 0}}function i(){var n="";return[].forEach.call(arguments,function(r){r&&""!==r.trim()&&(n&&(n+="; "),n+=r.trim())}),n}function a(n,r){var e=[];if(c(n,r,e,[]),e.length>0){var t=l(r,null,1);t+="\n# Orphaned comments:\n",e.forEach(function(n){t+=("# "+n.path.join("/")+": "+i(n.b,n.a,n.e)).replace("\n","\\n ")+"\n"}),l(r,t,1)}}function s(n,r,e,o){var i=t(e?e[0]:void 0,e?e[1]:void 0,o);return i&&(n[r]=i),i}function u(n,r){var e=t(r.b,r.a);return e.path=n,e}function f(n,r,e){if(n){var t,o;if(n.a)for(t=0,o=n.a.length;t<o;t++){var i=e.slice().concat([t]),a=n.a[t];a&&(r.push(u(i,a)),f(a.x,r,i))}else n.o&&n.o.forEach(function(t){var o=e.slice().concat([t]),i=n.s[t];i&&(r.push(u(o,i)),f(i.x,r,o))});n.e&&r.push(u(e,n.e))}}function c(n,r,e,t){if(n){if(null===r||"object"!=typeof r)return void f(n,e,t);var o,i=h.createComment(r);if(0===t.length&&n.r&&(i.r=[n.r.b,n.r.a]),"[object Array]"===Object.prototype.toString.apply(r)){i.a=[];var a=n.a||{};for(var s in a)if(a.hasOwnProperty(s)){o=parseInt(s);var l=n.a[s];if(l){var p=t.slice().concat([o]);o<r.length?(i.a[o]=[l.b,l.a],c(l.x,r[o],e,p)):(e.push(u(p,l)),f(l.x,e,p))}}0===o&&n.e&&(i.e=[n.e.b,n.e.a])}else i.c={},i.o=[],(n.o||[]).forEach(function(o){var a=t.slice().concat([o]),s=n.s[o];Object.prototype.hasOwnProperty.call(r,o)?(i.o.push(o),s&&(i.c[o]=[s.b,s.a],c(s.x,r[o],e,a))):s&&(e.push(u(a,s)),f(s.x,e,a))}),n.e&&(i.e=[n.e.b,n.e.a])}}function l(n,r,e){var t=h.createComment(n,h.getComment(n));return t.r||(t.r=["",""]),(r||""===r)&&(t.r[e]=h.forceComment(r)),t.r[e]||""}var h=n("./hjson-common");r.exports={extract:function(n){return o(n,!0)},merge:a,header:function(n,r){return l(n,r,0)},footer:function(n,r){return l(n,r,1)}}},{"./hjson-common":2}],2:[function(n,r,e){"use strict";function t(n,r){function e(){return o=n.charAt(u),u++,o}var t,o,i="",a=0,s=!0,u=0;for(e(),"-"===o&&(i="-",e());o>="0"&&o<="9";)s&&("0"==o?a++:s=!1),i+=o,e();if(s&&a--,"."===o)for(i+=".";e()&&o>="0"&&o<="9";)i+=o;if("e"===o||"E"===o)for(i+=o,e(),"-"!==o&&"+"!==o||(i+=o,e());o>="0"&&o<="9";)i+=o,e();for(;o&&o<=" ";)e();return r&&(","!==o&&"}"!==o&&"]"!==o&&"#"!==o&&("/"!==o||"/"!==n[u]&&"*"!==n[u])||(o=0)),t=+i,o||a||!isFinite(t)?void 0:t}function o(n,r){return Object.defineProperty&&Object.defineProperty(n,"__COMMENTS__",{enumerable:!1,writable:!0}),n.__COMMENTS__=r||{}}function i(n){Object.defineProperty(n,"__COMMENTS__",{value:void 0})}function a(n){return n.__COMMENTS__}function s(n){if(!n)return"";var r,e,t,o,i=n.split("\n");for(t=0;t<i.length;t++)for(r=i[t],o=r.length,e=0;e<o;e++){var a=r[e];if("#"===a)break;if("/"===a&&("/"===r[e+1]||"*"===r[e+1])){"*"===r[e+1]&&(t=i.length);break}if(a>" "){i[t]="# "+r;break}}return i.join("\n")}var u=n("os");r.exports={EOL:u.EOL||"\n",tryParseNumber:t,createComment:o,removeComment:i,getComment:a,forceComment:s}},{os:8}],3:[function(n,r,e){"use strict";function t(n,r){function e(n){return"[object Function]"==={}.toString.call(n)}if("[object Array]"!==Object.prototype.toString.apply(n)){if(n)throw new Error("dsf option must contain an array!");return i}if(0===n.length)return i;var t=[];return n.forEach(function(n){if(!n.name||!e(n.parse)||!e(n.stringify))throw new Error("extension does not match the DSF interface");t.push(function(){try{if("parse"==r)return n.parse.apply(null,arguments);if("stringify"==r){var e=n.stringify.apply(null,arguments);if(void 0!==e&&("string"!=typeof e||0===e.length||'"'===e[0]||[].some.call(e,function(n){return a(n)})))throw new Error("value may not be empty, start with a quote or contain a punctuator character except colon: "+e);return e}throw new Error("Invalid type")}catch(r){throw new Error("DSF-"+n.name+" failed; "+r.message)}})}),o.bind(null,t)}function o(n,r){if(n)for(var e=0;e<n.length;e++){var t=n[e](r);if(void 0!==t)return t}}function i(){}function a(n){return"{"===n||"}"===n||"["===n||"]"===n||","===n}function s(){return{name:"math",parse:function(n){switch(n){case"+inf":case"inf":case"+Inf":case"Inf":return 1/0;case"-inf":case"-Inf":return-1/0;case"nan":case"NaN":return NaN}},stringify:function(n){if("number"==typeof n)return 1/n==-1/0?"-0":n===1/0?"Inf":n===-1/0?"-Inf":isNaN(n)?"NaN":void 0}}}function u(n){var r=n&&n.out;return{name:"hex",parse:function(n){if(/^0x[0-9A-Fa-f]+$/.test(n))return parseInt(n,16)},stringify:function(n){if(r&&Number.isInteger(n))return"0x"+n.toString(16)}}}function f(){return{name:"date",parse:function(n){if(/^\d{4}-\d{2}-\d{2}$/.test(n)||/^\d{4}-\d{2}-\d{2}T\d{2}\:\d{2}\:\d{2}(?:.\d+)(?:Z|[+-]\d{2}:\d{2})$/.test(n)){var r=Date.parse(n);if(!isNaN(r))return new Date(r)}},stringify:function(n){if("[object Date]"===Object.prototype.toString.call(n)){var r=n.toISOString();return-1!==r.indexOf("T00:00:00.000Z",r.length-14)?r.substr(0,10):r}}}}s.description="support for Inf/inf, -Inf/-inf, Nan/naN and -0",u.description="parse hexadecimal numbers prefixed with 0x",f.description="support ISO dates",r.exports={loadDsf:t,std:{math:s,hex:u,date:f}}},{}],4:[function(n,r,e){"use strict";r.exports=function(r,e){function t(){j=0,w=" "}function o(n){return"{"===n||"}"===n||"["===n||"]"===n||","===n||":"===n}function i(n){var r,e=0,t=1;for(r=j-1;r>0&&"\n"!==b[r];r--,e++);for(;r>0;r--)"\n"===b[r]&&t++;throw new Error(n+" at line "+t+","+e+" >>>"+b.substr(j-e,20)+" ...")}function a(){return w=b.charAt(j),j++,w}function s(n){return b.charAt(j+n)}function u(n){for(var r="",e=w;a();){if(w===e)return a(),n&&"'"===e&&"'"===w&&0===r.length?(a(),f()):r;if("\\"===w)if(a(),"u"===w){for(var t=0,o=0;o<4;o++){a();var s,u=w.charCodeAt(0);w>="0"&&w<="9"?s=u-48:w>="a"&&w<="f"?s=u-97+10:w>="A"&&w<="F"?s=u-65+10:i("Bad \\u char "+w),t=16*t+s}r+=String.fromCharCode(t)}else{if("string"!=typeof C[w])break;r+=C[w]}else"\n"===w||"\r"===w?i("Bad string containing newline"):r+=w}i("Bad string")}function f(){function n(){for(var n=t;w&&w<=" "&&"\n"!==w&&n-- >0;)a()}for(var r="",e=0,t=0;;){var o=s(-t-5);if(!o||"\n"===o)break;t++}for(;w&&w<=" "&&"\n"!==w;)a();for("\n"===w&&(a(),n());;){if(w){if("'"===w){if(e++,a(),3===e)return"\n"===r.slice(-1)&&(r=r.slice(0,-1)),r;continue}for(;e>0;)r+="'",e--}else i("Bad multiline string");"\n"===w?(r+="\n",a(),n()):("\r"!==w&&(r+=w),a())}}function c(){if('"'===w||"'"===w)return u(!1);for(var n="",r=j,e=-1;;){if(":"===w)return n?e>=0&&e!==n.length&&(j=r+e,i("Found whitespace in your key name (use quotes to include)")):i("Found ':' but no key name (for an empty key name use quotes)"),n;w<=" "?w?e<0&&(e=n.length):i("Found EOF while looking for a key name (check your syntax)"):o(w)?i("Found '"+w+"' where a key name was expected (check your syntax or use quotes if the key name includes {}[],: or whitespace)"):n+=w,a()}}function l(){for(;w;){for(;w&&w<=" ";)a();if("#"===w||"/"===w&&"/"===s(0))for(;w&&"\n"!==w;)a();else{if("/"!==w||"*"!==s(0))break;for(a(),a();w&&("*"!==w||"/"!==s(0));)a();w&&(a(),a())}}}function h(){var n=w;for(o(w)&&i("Found a punctuator character '"+w+"' when expecting a quoteless string (check your syntax)");;){a();var r="\r"===w||"\n"===w||""===w;if(r||","===w||"}"===w||"]"===w||"#"===w||"/"===w&&("/"===s(0)||"*"===s(0))){var e=n[0];switch(e){case"f":if("false"===n.trim())return!1;break;case"n":if("null"===n.trim())return null;break;case"t":if("true"===n.trim())return!0;break;default:if("-"===e||e>="0"&&e<="9"){var t=k.tryParseNumber(n);if(void 0!==t)return t}}if(r){n=n.trim();var u=O(n);return void 0!==u?u:n}}n+=w}}function p(n,r){var e;for(n--,e=j-2;e>n&&b[e]<=" "&&"\n"!==b[e];e--);"\n"===b[e]&&e--,"\r"===b[e]&&e--;var t=b.substr(n,e-n+1);for(e=0;e<t.length;e++)if(t[e]>" "){var o=t.indexOf("\n");if(o>=0){var i=[t.substr(0,o),t.substr(o+1)];return r&&0===i[0].trim().length&&i.shift(),i}return[t]}return[]}function m(n){function r(n,e){var t,o,i,a;switch(typeof n){case"string":n.indexOf(e)>=0&&(a=n);break;case"object":if("[object Array]"===Object.prototype.toString.apply(n))for(t=0,i=n.length;t<i;t++)a=r(n[t],e)||a;else for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(a=r(n[o],e)||a)}return a}function e(e){var t=r(n,e);return t?"found '"+e+"' in a string value, your mistake could be with:\n  > "+t+"\n  (unquoted strings contain everything up to the next line!)":""}return e("}")||e("]")}function d(){var n,r,e,t=[];try{if(x&&(n=k.createComment(t,{a:[]})),a(),r=j,l(),n&&(e=p(r,!0).join("\n")),"]"===w)return a(),n&&(n.e=[e]),t;for(;w;){if(t.push(v()),r=j,l(),","===w&&(a(),r=j,l()),n){var o=p(r);n.a.push([e||"",o[0]||""]),e=o[1]}if("]"===w)return a(),n&&(n.a[n.a.length-1][1]+=e||""),t;l()}i("End of input while parsing an array (missing ']')")}catch(n){throw n.hint=n.hint||m(t),n}}function g(n){var r,e,t,o="",s={};try{if(x&&(r=k.createComment(s,{c:{},o:[]})),n?e=1:(a(),e=j),l(),r&&(t=p(e,!0).join("\n")),"}"===w&&!n)return r&&(r.e=[t]),a(),s;for(;w;){if(o=c(),l(),":"!==w&&i("Expected ':' instead of '"+w+"'"),a(),s[o]=v(),e=j,l(),","===w&&(a(),e=j,l()),r){var u=p(e);r.c[o]=[t||"",u[0]||""],t=u[1],r.o.push(o)}if("}"===w&&!n)return a(),r&&(r.c[o][1]+=t||""),s;l()}if(n)return s;i("End of input while parsing an object (missing '}')")}catch(n){throw n.hint=n.hint||m(s),n}}function v(){switch(l(),w){case"{":return g();case"[":return d();case"'":case'"':return u(!0);default:return h()}}function y(n,r){var e=j;if(l(),w&&i("Syntax error, found trailing characters"),x){var t=r.join("\n"),o=p(e).join("\n");if(o||t){k.createComment(n,k.getComment(n)).r=[t,o]}}return n}var b,j,w,x,O,k=n("./hjson-common"),E=n("./hjson-dsf"),C={'"':'"',"'":"'","\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"};if("string"!=typeof r)throw new Error("source is not a string");var q=null,S=!0;return e&&"object"==typeof e&&(x=e.keepWsc,q=e.dsf,S=!1!==e.legacyRoot),O=E.loadDsf(q,"parse"),b=r,t(),S?function(){l();var n=x?p(1):null;switch(w){case"{":return y(g(),n);case"[":return y(d(),n)}try{return y(g(!0),n)}catch(r){t();try{return y(v(),n)}catch(n){throw r}}}():function(){l();var n=x?p(1):null;switch(w){case"{":return y(g(),n);case"[":return y(d(),n);default:return y(v(),n)}}()}},{"./hjson-common":2,"./hjson-dsf":3}],5:[function(n,r,e){"use strict";r.exports=function(r,e){function t(n,r){return L+=n[0].length+n[1].length-n[2]-n[3],n[0]+r+n[1]}function o(n){return n.replace(N,function(n){var r=A[n];return"string"==typeof r?t(O.esc,r):t(O.uni,("0000"+n.charCodeAt(0).toString(16)).slice(-4))})}function i(n,r,e,i){return n?(I.lastIndex=0,F.lastIndex=0,v||e||I.test(n)||void 0!==f.tryParseNumber(n,!0)||F.test(n)?(N.lastIndex=0,_.lastIndex=0,N.test(n)?_.test(n)||i||!b?t(O.qstr,o(n)):a(n,r):t(O.qstr,n)):t(O.str,n)):t(O.qstr,"")}function a(n,r){var e,o=n.replace(/\r/g,"").split("\n");if(r+=p,1===o.length)return t(O.mstr,o[0]);var i=h+r+O.mstr[0];for(e=0;e<o.length;e++)i+=h,o[e]&&(i+=r+o[e]);return i+h+r+O.mstr[1]}function s(n){return n?g||P.test(n)?(N.lastIndex=0,t(O.qkey,N.test(n)?o(n):n)):t(O.key,n):'""'}function u(n,r,e,o){function a(n){return n&&"\n"===n["\r"===n[0]?1:0]}function c(n){return n&&!a(n)}function l(n,r,e){if(!n)return"";n=f.forceComment(n);var o,i=n.length;for(o=0;o<i&&n[o]<=" ";o++);return e&&o>0&&(n=n.substr(o)),o<i?r+t(O.rem,n):n}var g=q(n);if(void 0!==g)return t(O.dsf,g);switch(typeof n){case"string":return i(n,D,r,o);case"number":return isFinite(n)?t(O.num,String(n)):t(O.lit,"null");case"boolean":return t(O.lit,String(n));case"object":if(!n)return t(O.lit,"null");var w;m&&(w=f.getComment(n));var k="[object Array]"===Object.prototype.toString.apply(n),E=D;D+=p;var C,S,N,I,_,F,A,P,M,T,$=h+E,R=h+D,B=e||d?"":$,W=[],U=y?[]:null,Z=v,H=b,z=j?"":O.com[0],G=0;if(k){for(S=0,N=n.length;S<N;S++){if(C=S<N-1,w?(A=w.a[S]||[],P=c(A[1]),W.push(l(A[0],"\n")+R),U&&(A[0]||A[1]||P)&&(U=null)):W.push(R),L=0,_=n[S],W.push(u(_,!!w&&P,!0)+(C?j:"")),U){switch(typeof _){case"string":L=0,v=!0,b=0,U.push(u(_,!1,!0)+(C?O.com[0]:"")),v=Z,b=H;break;case"object":if(_){U=null;break}default:U.push(W[W.length-1]+(C?z:""))}C&&(L+=O.com[0].length-O.com[2]),G+=L}w&&A[1]&&W.push(l(A[1],P?" ":"\n",P))}0===N?w&&w.e&&W.push(l(w.e[0],"\n")+$):W.push($),0===W.length?M=t(O.arr,""):(M=B+t(O.arr,W.join("")),U&&(T=U.join(" "),T.length-G<=y&&(M=t(O.arr,T))))}else{var J=w?w.o.slice():[],K=[];for(I in n)Object.prototype.hasOwnProperty.call(n,I)&&J.indexOf(I)<0&&K.push(I);x&&K.sort();var Q=J.concat(K);for(S=0,N=Q.length;S<N;S++)if(C=S<N-1,I=Q[S],w?(A=w.c[I]||[],P=c(A[1]),W.push(l(A[0],"\n")+R),U&&(A[0]||A[1]||P)&&(U=null)):W.push(R),L=0,_=n[I],F=u(_,w&&P),W.push(s(I)+O.col[0]+(a(F)?"":" ")+F+(C?j:"")),w&&A[1]&&W.push(l(A[1],P?" ":"\n",P)),U){switch(typeof _){case"string":L=0,v=!0,b=0,F=u(_,!1),v=Z,b=H,U.push(s(I)+O.col[0]+" "+F+(C?O.com[0]:""));break;case"object":if(_){U=null;break}default:U.push(W[W.length-1]+(C?z:""))}L+=O.col[0].length-O.col[2],C&&(L+=O.com[0].length-O.com[2]),G+=L}0===N?w&&w.e&&W.push(l(w.e[0],"\n")+$):W.push($),0===W.length?M=t(O.obj,""):(M=B+t(O.obj,W.join("")),U&&(T=U.join(" "),T.length-G<=y&&(M=t(O.obj,T))))}return D=E,M}}var f=n("./hjson-common"),c=n("./hjson-dsf"),l={obj:["{","}"],arr:["[","]"],key:["",""],qkey:['"','"'],col:[":",""],com:[",",""],str:["",""],qstr:['"','"'],mstr:["'''","'''"],num:["",""],lit:["",""],dsf:["",""],esc:["\\",""],uni:["\\u",""],rem:["",""]},h=f.EOL,p="  ",m=!1,d=!1,g=!1,v=!1,y=0,b=1,j="",w=null,x=!1,O=l;if(e&&"object"==typeof e){e.quotes="always"===e.quotes?"strings":e.quotes,"\n"!==e.eol&&"\r\n"!==e.eol||(h=e.eol),m=e.keepWsc,y=e.condense||0,d=e.bracesSameLine,g="all"===e.quotes||"keys"===e.quotes,v="all"===e.quotes||"strings"===e.quotes||!0===e.separator,b=v||"off"==e.multiline?0:"no-tabs"==e.multiline?2:1,j=!0===e.separator?O.com[0]:"",w=e.dsf,x=e.sortProps,"number"==typeof e.space?p=new Array(e.space+1).join(" "):"string"==typeof e.space&&(p=e.space),!0===e.colors&&(O={obj:["[37m{[0m","[37m}[0m"],arr:["[37m[[0m","[37m][0m"],key:["[33m","[0m"],qkey:['[33m"','"[0m'],col:["[37m:[0m",""],com:["[37m,[0m",""],str:["[37;1m","[0m"],qstr:['[37;1m"','"[0m'],mstr:["[37;1m'''","'''[0m"],num:["[36;1m","[0m"],lit:["[36m","[0m"],dsf:["[37m","[0m"],esc:["[31m\\","[0m"],uni:["[31m\\u","[0m"],rem:["[35m","[0m"]});var k,E=Object.keys(l);for(k=E.length-1;k>=0;k--){var C=E[k];O[C].push(l[C][0].length,l[C][1].length)}}var q,S="-­؀-؄܏឴឵‌-‏\u2028- ⁠-⁯\ufeff￰-￿",N=new RegExp('[\\\\\\"\0-'+S+"]","g"),I=new RegExp("^\\s|^\"|^'|^#|^\\/\\*|^\\/\\/|^\\{|^\\}|^\\[|^\\]|^:|^,|\\s$|[\0-"+S+"]","g"),_=new RegExp("'''|^[\\s]+$|[\0-"+(2===b?"\t":"\b")+"\v\f-"+S+"]","g"),F=new RegExp("^(true|false|null)\\s*((,|\\]|\\}|#|//|/\\*).*)?$"),A={"\b":"b","\t":"t","\n":"n","\f":"f","\r":"r",'"':'"',"\\":"\\"},P=/[,\{\[\}\]\s:#"']|\/\/|\/\*/,D="",L=0;q=c.loadDsf(w,"stringify");var M="",T=m?T=(f.getComment(r)||{}).r:null;return T&&T[0]&&(M=T[0]+"\n"),M+=u(r,null,!0,!0),T&&(M+=T[1]||""),M}},{"./hjson-common":2,"./hjson-dsf":3}],6:[function(n,r,e){r.exports="3.2.1"},{}],7:[function(n,r,e){/*!
 * Hjson v3.2.1
 * https://hjson.github.io
 *
 * Copyright 2014-2017 Christian Zangl, MIT license
 * Details and documentation:
 * https://github.com/hjson/hjson-js
 *
 * This code is based on the the JSON version by Douglas Crockford:
 * https://github.com/douglascrockford/JSON-js (json_parse.js, json2.js)
 */
"use strict";var t=n("./hjson-common"),o=n("./hjson-version"),i=n("./hjson-parse"),a=n("./hjson-stringify"),s=n("./hjson-comments"),u=n("./hjson-dsf");r.exports={parse:i,stringify:a,endOfLine:function(){return t.EOL},setEndOfLine:function(n){"\n"!==n&&"\r\n"!==n||(t.EOL=n)},version:o,rt:{parse:function(n,r){return(r=r||{}).keepWsc=!0,i(n,r)},stringify:function(n,r){return(r=r||{}).keepWsc=!0,a(n,r)}},comments:s,dsf:u.std}},{"./hjson-comments":1,"./hjson-common":2,"./hjson-dsf":3,"./hjson-parse":4,"./hjson-stringify":5,"./hjson-version":6}],8:[function(n,r,e){},{}]},{},[7])(7)});
