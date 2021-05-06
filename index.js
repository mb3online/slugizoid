!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.Builder=r():e.Builder=r()}("undefined"!=typeof self?self:this,function(){return function(e){function r(i){if(a[i])return a[i].exports;var t=a[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var a={};return r.m=e,r.c=a,r.d=function(e,a,i){r.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:i})},r.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=0)}([function(e,r,a){"use strict";function i(e){return(0,n.singular)(e.toLowerCase()).replace(/([^a-zA-Z0-9])+/g,"_")}function t(e){return(0,s.default)(e).replace(/_/g,"-")}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=i(e);return{toString:function(e){var a=Object.assign({format:"pascal",plural:!1},e),i=a.format;return(a.plural?s.default:n.singular)(u[i](r))},equals:function(e){return i(e)===r},slugify:function(){return r},urlify:function(){return t(r)}}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=o;var n=a(1),s=function(e){return e&&e.__esModule?e:{default:e}}(n),u={pascal:function(e){return e.split("_").map(function(e){return""+e.charAt(0).toUpperCase()+e.substr(1)}).join(" ")},camel:function(e){var r=e.split("_");return[r[0],u.pascal(r.slice(1).join("_")).replace(" ","")].join("")}}},function(e,r,a){!function(r,a){e.exports=function(){function e(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function r(e,r){return e===r?r:e===e.toUpperCase()?r.toUpperCase():e[0]===e[0].toUpperCase()?r.charAt(0).toUpperCase()+r.substr(1).toLowerCase():r.toLowerCase()}function a(e,r){return e.replace(/\$(\d{1,2})/g,function(e,a){return r[a]||""})}function i(e,i){return e.replace(i[0],function(t,o){var n=a(i[1],arguments);return""===t?r(e[o-1],n):r(t,n)})}function t(e,r,a){if(!e.length||c.hasOwnProperty(e))return r;for(var t=a.length;t--;){var o=a[t];if(o[0].test(r))return i(r,o)}return r}function o(e,a,i){return function(o){var n=o.toLowerCase();return a.hasOwnProperty(n)?r(o,n):e.hasOwnProperty(n)?r(o,e[n]):t(n,o,i)}}function n(e,r,a,i){return function(i){var o=i.toLowerCase();return!!r.hasOwnProperty(o)||!e.hasOwnProperty(o)&&t(o,o,a)===o}}function s(e,r,a){var i=1===r?s.singular(e):s.plural(e);return(a?r+" ":"")+i}var u=[],l=[],c={},f={},p={};return s.plural=o(p,f,u),s.isPlural=n(p,f,u),s.singular=o(f,p,l),s.isSingular=n(f,p,l),s.addPluralRule=function(r,a){u.push([e(r),a])},s.addSingularRule=function(r,a){l.push([e(r),a])},s.addUncountableRule=function(e){if("string"==typeof e)return void(c[e.toLowerCase()]=!0);s.addPluralRule(e,"$0"),s.addSingularRule(e,"$0")},s.addIrregularRule=function(e,r){r=r.toLowerCase(),e=e.toLowerCase(),p[e]=r,f[r]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["whiskey","whiskies"]].forEach(function(e){return s.addIrregularRule(e[0],e[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|tlas|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/(m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(e){return s.addPluralRule(e[0],e[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/(m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i,"$1"],[/(analy|ba|diagno|parenthe|progno|synop|the|empha|cri)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(e){return s.addSingularRule(e[0],e[1])}),["adulthood","advice","agenda","aid","alcohol","ammo","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","flounder","fun","gallows","garbage","graffiti","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","manga","news","pike","plankton","pliers","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","species","staff","swine","tennis","traffic","transporation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(s.addUncountableRule),s}()}()}])});