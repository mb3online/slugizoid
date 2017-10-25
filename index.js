!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.Builder=r():e.Builder=r()}(this,function(){return function(e){function r(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}var t={};return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=0)}([function(e,r,t){t(1),e.exports=t(3)},function(e,r,t){"use strict";function i(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function a(e){return(0,s.singular)(e).replace(/(-|_|\.)+/g,"_")}function n(e){return(0,u.default)(e).replace("_","-")}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,r){for(var t=0;t<r.length;t++){var i=r[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(r,t,i){return t&&e(r.prototype,t),i&&e(r,i),r}}(),s=t(2),u=function(e){return e&&e.__esModule?e:{default:e}}(s),l={pascal:function(e){return e.split("_").map(function(e){return""+e.charAt(0).toUpperCase()+e.substr(1)}).join(" ")},camel:function(e){var r=e.split("_");return[r[0],l.pascal(r.slice(1).join("_")).replace(" ","")].join("")}},c=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";i(this,e),this._original=r,this._normalized=a(r)}return o(e,[{key:"toString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{format:"pascal"};return l[e.format](this._normalized)}},{key:"equals",value:function(e){return a(e)===this._normalized}},{key:"slugify",value:function(){return this._normalized}},{key:"urlify",value:function(){return n(this._normalized)}}]),e}();r.default=c},function(e,r,t){!function(r,t){e.exports=function(){function e(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function r(e,r){return e===r?r:e===e.toUpperCase()?r.toUpperCase():e[0]===e[0].toUpperCase()?r.charAt(0).toUpperCase()+r.substr(1).toLowerCase():r.toLowerCase()}function t(e,r){return e.replace(/\$(\d{1,2})/g,function(e,t){return r[t]||""})}function i(e,i){return e.replace(i[0],function(a,n){var o=t(i[1],arguments);return""===a?r(e[n-1],o):r(a,o)})}function a(e,r,t){if(!e.length||c.hasOwnProperty(e))return r;for(var a=t.length;a--;){var n=t[a];if(n[0].test(r))return i(r,n)}return r}function n(e,t,i){return function(n){var o=n.toLowerCase();return t.hasOwnProperty(o)?r(n,o):e.hasOwnProperty(o)?r(n,e[o]):a(o,n,i)}}function o(e,r,t,i){return function(i){var n=i.toLowerCase();return!!r.hasOwnProperty(n)||!e.hasOwnProperty(n)&&a(n,n,t)===n}}function s(e,r,t){var i=1===r?s.singular(e):s.plural(e);return(t?r+" ":"")+i}var u=[],l=[],c={},f={},p={};return s.plural=n(p,f,u),s.isPlural=o(p,f,u),s.singular=n(f,p,l),s.isSingular=o(f,p,l),s.addPluralRule=function(r,t){u.push([e(r),t])},s.addSingularRule=function(r,t){l.push([e(r),t])},s.addUncountableRule=function(e){if("string"==typeof e)return void(c[e.toLowerCase()]=!0);s.addPluralRule(e,"$0"),s.addSingularRule(e,"$0")},s.addIrregularRule=function(e,r){r=r.toLowerCase(),e=e.toLowerCase(),p[e]=r,f[r]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["whiskey","whiskies"]].forEach(function(e){return s.addIrregularRule(e[0],e[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|tlas|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/(m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(e){return s.addPluralRule(e[0],e[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/(m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i,"$1"],[/(analy|ba|diagno|parenthe|progno|synop|the|empha|cri)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(e){return s.addSingularRule(e[0],e[1])}),["adulthood","advice","agenda","aid","alcohol","ammo","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","flounder","fun","gallows","garbage","graffiti","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","manga","news","pike","plankton","pliers","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","species","staff","swine","tennis","traffic","transporation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(s.addUncountableRule),s}()}()},function(e,r,t){"use strict";(function(e){var t,i,a,n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(o,s){"object"==n(r)&&"object"==n(e)?e.exports=s():(i=[],t=s,void 0!==(a="function"==typeof t?t.apply(r,i):t)&&(e.exports=a))}(0,function(){return function(e){function r(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}var t={};return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=0)}([function(e,r,t){t(1),e.exports=t(3)},function(e,r,t){function i(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function a(e){return(0,s.singular)(e).replace(/(-|_|\.)+/g,"_")}function n(e){return(0,u.default)(e).replace("_","-")}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,r){for(var t=0;t<r.length;t++){var i=r[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(r,t,i){return t&&e(r.prototype,t),i&&e(r,i),r}}(),s=t(2),u=function(e){return e&&e.__esModule?e:{default:e}}(s),l={pascal:function(e){return e.split("_").map(function(e){return""+e.charAt(0).toUpperCase()+e.substr(1)}).join(" ")},camel:function(e){var r=e.split("_");return[r[0],l.pascal(r.slice(1).join("_")).replace(" ","")].join("")}},c=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";i(this,e),this._original=r,this._normalized=a(r)}return o(e,[{key:"toString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{format:"pascal"};return l[e.format](this._normalized)}},{key:"equals",value:function(e){return a(e)===this._normalized}},{key:"slugify",value:function(){return this._normalized}},{key:"urlify",value:function(){return n(this._normalized)}}]),e}();r.default=c},function(e,r,t){!function(r,t){e.exports=function(){function e(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function r(e,r){return e===r?r:e===e.toUpperCase()?r.toUpperCase():e[0]===e[0].toUpperCase()?r.charAt(0).toUpperCase()+r.substr(1).toLowerCase():r.toLowerCase()}function t(e,r){return e.replace(/\$(\d{1,2})/g,function(e,t){return r[t]||""})}function i(e,i){return e.replace(i[0],function(a,n){var o=t(i[1],arguments);return""===a?r(e[n-1],o):r(a,o)})}function a(e,r,t){if(!e.length||c.hasOwnProperty(e))return r;for(var a=t.length;a--;){var n=t[a];if(n[0].test(r))return i(r,n)}return r}function n(e,t,i){return function(n){var o=n.toLowerCase();return t.hasOwnProperty(o)?r(n,o):e.hasOwnProperty(o)?r(n,e[o]):a(o,n,i)}}function o(e,r,t,i){return function(i){var n=i.toLowerCase();return!!r.hasOwnProperty(n)||!e.hasOwnProperty(n)&&a(n,n,t)===n}}function s(e,r,t){var i=1===r?s.singular(e):s.plural(e);return(t?r+" ":"")+i}var u=[],l=[],c={},f={},p={};return s.plural=n(p,f,u),s.isPlural=o(p,f,u),s.singular=n(f,p,l),s.isSingular=o(f,p,l),s.addPluralRule=function(r,t){u.push([e(r),t])},s.addSingularRule=function(r,t){l.push([e(r),t])},s.addUncountableRule=function(e){if("string"==typeof e)return void(c[e.toLowerCase()]=!0);s.addPluralRule(e,"$0"),s.addSingularRule(e,"$0")},s.addIrregularRule=function(e,r){r=r.toLowerCase(),e=e.toLowerCase(),p[e]=r,f[r]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["whiskey","whiskies"]].forEach(function(e){return s.addIrregularRule(e[0],e[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|tlas|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/(m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(e){return s.addPluralRule(e[0],e[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/(m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i,"$1"],[/(analy|ba|diagno|parenthe|progno|synop|the|empha|cri)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(e){return s.addSingularRule(e[0],e[1])}),["adulthood","advice","agenda","aid","alcohol","ammo","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","flounder","fun","gallows","garbage","graffiti","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","manga","news","pike","plankton","pliers","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","species","staff","swine","tennis","traffic","transporation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(s.addUncountableRule),s}()}()},function(e,r){e.exports={name:"slugizoid",version:"0.0.1",description:"A package for managing REST API slugs",scripts:{build:"webpack -p",test:"jest","test:watch":"jest --watch","test:coverage":"jest --coverage",precommit:"lint-staged"},main:"index.js",repository:"git@github.com:mb3online/slugizoid.git",author:"Eric Adamski <er.adamski@gmail.com>",license:"MIT",devDependencies:{"babel-jest":"^21.2.0","babel-loader":"^7.1.2","babel-preset-env":"^1.6.1","babel-preset-flow":"^6.23.0","babel-preset-stage-2":"^6.24.1",chai:"^4.1.2","cz-conventional-changelog":"^2.0.0","flow-bin":"^0.57.3",husky:"^0.14.3",jest:"^21.2.1","lint-staged":"^4.3.0",prettier:"^1.7.4","regenerator-runtime":"^0.11.0",webpack:"^3.8.1"},jest:{rootDir:"./",testMatch:["**/__tests__/**/*.spec.js?(x)"]},config:{commitizen:{path:"./node_modules/cz-conventional-changelog"}},"lint-staged":{"*.{js,json}":["prettier --write --config ./.prettierrc.json --config-precedence prefer-file","yarn build","git add"]},dependencies:{pluralize:"^7.0.0"}}}])})}).call(r,t(4)(e))},function(e,r){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}])});