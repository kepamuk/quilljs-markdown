!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}(window,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t);var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.quillJS=t,this.name="header",this.pattern=/^(#){1,6}\s/g,this.getAction.bind(this)}var t,n,r;return t=e,(n=[{key:"getAction",value:function(){var e=this;return{name:this.name,pattern:this.pattern,action:function(t,n,i){var r=i.exec(t);if(r){var o=r[0].length;setTimeout((function(){e.quillJS.formatLine(n.index,0,"header",o-1),e.quillJS.deleteText(n.index-o,o)}),0)}}}}}])&&i(t.prototype,n),r&&i(t,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.quillJS=t,this.name="blockquote",this.pattern=/^(>)\s/g,this.getAction.bind(this)}var t,n,i;return t=e,(n=[{key:"getAction",value:function(){var e=this;return{name:this.name,pattern:this.pattern,action:function(t,n,i){var r=i.exec(t);if(r){var o=r[0]||"";setTimeout((function(){e.quillJS.formatText(n.index,1,"blockquote",!0),e.quillJS.deleteText(n.index-o.length,o.length)}),0)}},release:function(){setTimeout((function(){e.quillJS.format("blockquote",!1);var t=e.quillJS.getSelection().index,n=e.quillJS.getLine(t-1)[0];""===n.domNode.textContent&&n.format("blockquote",!1)}),0)}}}}])&&o(t.prototype,n),i&&o(t,i),e}();function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.quillJS=t,this.name="bold",this.pattern=/(?:\*|_){2}(.+?)(?:\*|_){2}/g,this.getAction.bind(this)}var t,n,i;return t=e,(n=[{key:"getAction",value:function(){var e=this;return{name:this.name,pattern:this.pattern,action:function(t,n,i,r){var o=i.exec(t),a=o[0],l=o[1],u=r+o.index;t.match(/^([*_ \n]+)$/g)||setTimeout((function(){e.quillJS.deleteText(u,a.length),e.quillJS.insertText(u,l,{bold:!0}),e.quillJS.format("bold",!1)}),0)}}}}])&&l(t.prototype,n),i&&l(t,i),e}();function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.quillJS=t,this.name="code",this.pattern=/(`){1}(.+?)(`){1}/g,this.getAction.bind(this)}var t,n,i;return t=e,(n=[{key:"getAction",value:function(){var e=this;return{name:this.name,pattern:this.pattern,action:function(t,n,i,r){var o=i.exec(t),a=o[0],l=(o[1],r+o.index);setTimeout((function(){e.quillJS.deleteText(l,a.length);var t=a.replace(/`/g,"");e.quillJS.insertText(l,t,{code:!0}),e.quillJS.insertText(l+t.length," ",{code:!1})}),0)}}}}])&&c(t.prototype,n),i&&c(t,i),e}();function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.quillJS=t,this.name="link",this.pattern=/(?:\[(.+?)\])(?:\((.+?)\))/g,this.getAction.bind(this)}var t,n,i;return t=e,(n=[{key:"getAction",value:function(){var e=this;return{name:this.name,pattern:this.pattern,action:function(t,n,i){var r=t.search(i),o=t.match(i)[0],a=t.match(/(?:\[(.*?)\])/g)[0],l=t.match(/(?:\((.*?)\))/g)[0],u=n.index-o.length-1;-1!==r&&setTimeout((function(){e.quillJS.deleteText(u,o.length),e.quillJS.insertText(u,a.slice(1,a.length-1),"link",l.slice(1,l.length-1))}),0)}}}}])&&f(t.prototype,n),i&&f(t,i),e}();function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.quillJS=t,this.name="pre",this.pattern=/^(```)\s/g,this.getAction.bind(this)}var t,n,i;return t=e,(n=[{key:"getAction",value:function(){var e=this;return{name:this.name,pattern:this.pattern,action:function(t,n,i){var r=i.exec(t);if(r){var o=r[0]||"";setTimeout((function(){var t=n.index-o.length-1;e.quillJS.deleteText(t,o.length),setTimeout((function(){e.quillJS.insertText(t,"\n");var n=t+1+"\n".length+1;e.quillJS.insertText(n,"\n"),e.quillJS.formatLine(n-2,1,"code-block",!0)}),0)}),0)}},release:function(){setTimeout((function(){var t=e.quillJS.getSelection().index,n=e.quillJS.getLine(t)[0],i=n.domNode.textContent;n&&i&&i.replace("\n","").length<=0&&e.quillJS.format("code-block",!1)}),0)}}}}])&&d(t.prototype,n),i&&d(t,i),e}();function g(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.quillJS=t,this.getOperatorsAll.bind(this),this.tags=[new r(this.quillJS).getAction(),new a(this.quillJS).getAction(),new u(this.quillJS).getAction(),new h(this.quillJS).getAction(),new v(this.quillJS).getAction(),new s(this.quillJS).getAction()]}var t,n,i;return t=e,(n=[{key:"getOperatorsAll",value:function(){return this.tags}}])&&g(t.prototype,n),i&&g(t,i),e}();function p(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=b(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw o}}}}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],i=!0,r=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(i=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{i||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||b(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function x(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var w=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.quillJS=t,this.options=n,this.quillJS.on("text-change",this.onTextChange.bind(this)),this.actionCharacters={whiteSpace:" ",newLine:"\n",asterisk:"*",rightParenthesis:")",grave:"`"},this.ignoreTags=["PRE"],this.tags=new m(this.quillJS),this.matches=this.tags.getOperatorsAll()}var t,n,i;return t=e,(n=[{key:"onTextChange",value:function(e,t,n){var i=this;console.log("dd ",e),e.ops.filter((function(e){return e.hasOwnProperty("insert")})).forEach((function(e){switch(e.insert){case i.actionCharacters.whiteSpace:i.onInlineExecute.bind(i)();break;case i.actionCharacters.asterisk:case i.actionCharacters.rightParenthesis:case i.actionCharacters.grave:case i.actionCharacters.newLine:i.onFullTextExecute.bind(i)()}})),e.ops.filter((function(e){return e.hasOwnProperty("delete")})).forEach((function(e){i.onRemoveElement(e)}))}},{key:"isValid",value:function(e,t){return void 0!==e&&e&&!this.ignoreTags.find((function(e){return e===t}))}},{key:"onInlineExecute",value:function(){var e=this.quillJS.getSelection();if(e){var t=y(this.quillJS.getLine(e.index),2),n=t[0],i=t[1],r=n.domNode.textContent,o=e.index-i;if(this.isValid(r,n.domNode.tagName)){var a,l=p(this.matches);try{for(l.s();!(a=l.n()).done;){var u=a.value;if(r.match(u.pattern))return void u.action(r,e,u.pattern,o)}}catch(e){l.e(e)}finally{l.f()}}}}},{key:"onFullTextExecute",value:function(){var e=this.quillJS.getSelection();if(e){var t=y(this.quillJS.getLine(e.index),2),n=t[0],i=t[1],r=e.index-i,o=this.quillJS.getLine(r-1)[0],a=o&&o.domNode.textContent,l=n.domNode.textContent+" ";if(e.length=e.index++,this.isValid(l,n.domNode.tagName)){if("string"==typeof a&&a.length>0&&" "===l){var u=this.matches.find((function(e){return e.name===n.domNode.tagName.toLowerCase()}));if(u&&u.release)return void u.release(e)}var c,s=p(this.matches);try{for(s.s();!(c=s.n()).done;){var f=c.value;if(l.match(f.pattern))return void f.action(l,e,f.pattern,r)}}catch(e){s.e(e)}finally{s.f()}}}}},{key:"onRemoveElement",value:function(e){var t=this.quillJS.getSelection();if(e&&1===e.delete){var n=this.quillJS.getLine(t.index)[0],i=this.matches.find((function(e){return e.name===n.domNode.tagName.toLowerCase()}));i&&i.release&&i.release(t)}}}])&&x(t.prototype,n),i&&x(t,i),e}();"undefined"!=typeof window&&(window.QuillMarkdown=w);t.default=w}])}));
//# sourceMappingURL=quilljs-markdown.js.map