"use strict";var precacheConfig=[["/original-io/index.html","34661391049c6b2997c124717be8b1c6"],["/original-io/static/css/main.459df11d.css","796ae4a340e1b86d264e439f96588f04"],["/original-io/static/js/main.8775ef7e.js","715226267805af111479146b14ff22da"],["/original-io/static/media/BolsaLoremIpsum-1.bfe29fb4.png","bfe29fb4e4c44fcaf7746d896c28e45e"],["/original-io/static/media/BolsaLoremIpsum-2.bfe29fb4.png","bfe29fb4e4c44fcaf7746d896c28e45e"],["/original-io/static/media/BolsaLoremIpsum-3.bfe29fb4.png","bfe29fb4e4c44fcaf7746d896c28e45e"],["/original-io/static/media/BolsaLoremIpsum-4.bfe29fb4.png","bfe29fb4e4c44fcaf7746d896c28e45e"],["/original-io/static/media/BolsaLoremIpsum-5.bfe29fb4.png","bfe29fb4e4c44fcaf7746d896c28e45e"],["/original-io/static/media/BolsaTresseRolete-1.9c71de2d.png","9c71de2dbde3290549cb1d68ca8780c0"],["/original-io/static/media/BolsaTresseRolete-2.9c71de2d.png","9c71de2dbde3290549cb1d68ca8780c0"],["/original-io/static/media/BolsaTresseRolete-3.9c71de2d.png","9c71de2dbde3290549cb1d68ca8780c0"],["/original-io/static/media/BolsaTresseRolete-4.9c71de2d.png","9c71de2dbde3290549cb1d68ca8780c0"],["/original-io/static/media/Montserrat-Bold-webfont.ae6651c4.woff","ae6651c494387c52a8ee06a0b948d0bd"],["/original-io/static/media/Montserrat-Regular-webfont.7b9bfe81.woff","7b9bfe81475dea2688413c87626253b5"],["/original-io/static/media/OpenSans-Bold-webfont.f9fc9780.woff","f9fc9780feed3b7444ba6277f067c7f5"],["/original-io/static/media/OpenSans-Regular-webfont.c8ffdeb3.woff","c8ffdeb3144d5055756ef01ef98e8486"],["/original-io/static/media/RasteiraDolorSit-1.d82d9aa8.png","d82d9aa82cee81a2aa5116f4752e379e"],["/original-io/static/media/RasteiraDolorSit-2.d82d9aa8.png","d82d9aa82cee81a2aa5116f4752e379e"],["/original-io/static/media/RasteiraDolorSit-3.d82d9aa8.png","d82d9aa82cee81a2aa5116f4752e379e"],["/original-io/static/media/RasteiraLoremIpsum-1.ac4f5bb7.png","ac4f5bb7b375a3d82297b0cec0f81119"],["/original-io/static/media/RasteiraLoremIpsum-2.ac4f5bb7.png","ac4f5bb7b375a3d82297b0cec0f81119"],["/original-io/static/media/RasteiraLoremIpsum-3.ac4f5bb7.png","ac4f5bb7b375a3d82297b0cec0f81119"],["/original-io/static/media/RasteiraLoremIpsum-4.ac4f5bb7.png","ac4f5bb7b375a3d82297b0cec0f81119"],["/original-io/static/media/RasteiraLoremIpsum-5.ac4f5bb7.png","ac4f5bb7b375a3d82297b0cec0f81119"],["/original-io/static/media/RasteiraTiraDedo-1.09f5c140.png","09f5c140c6d6a3e778d609942ea6b5f8"],["/original-io/static/media/RasteiraTiraDedo-2.09f5c140.png","09f5c140c6d6a3e778d609942ea6b5f8"],["/original-io/static/media/RasteiraTiraDedo-3.09f5c140.png","09f5c140c6d6a3e778d609942ea6b5f8"],["/original-io/static/media/RasteiraTiraDedo-4.09f5c140.png","09f5c140c6d6a3e778d609942ea6b5f8"],["/original-io/static/media/RasteiraTiraDedo-5.09f5c140.png","09f5c140c6d6a3e778d609942ea6b5f8"],["/original-io/static/media/cart.5c321c37.svg","5c321c3757979b987bddb3630058527e"],["/original-io/static/media/facebook.7d965122.svg","7d9651221642aed6e0f80905e6696409"],["/original-io/static/media/instagram.f7d41be8.svg","f7d41be8851c32f4b5b53cf3def8d6f2"],["/original-io/static/media/logo.4a33184c.svg","4a33184c93deb30059e232df91b091a4"],["/original-io/static/media/logo.e645bcdb.svg","e645bcdb8f2bd2fc720ca925d3c5be7c"],["/original-io/static/media/pinterest.e0cb4198.svg","e0cb41980ac819819a2aa0181b25357e"],["/original-io/static/media/search.af6723b8.svg","af6723b8d34dabeac74cfc5d8cea44fb"],["/original-io/static/media/submenu.d7462ab4.png","d7462ab43dae13c26157f06667c1fe6a"],["/original-io/static/media/video.eb4c52bb.svg","eb4c52bb3588ac8613957d3743fd2786"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var i=new URL(e);return"/"===i.pathname.slice(-1)&&(i.pathname+=a),i.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,i,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(i)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var i=new URL(a).pathname;return e.some(function(e){return i.match(e)})},stripIgnoredUrlParameters=function(e,i){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return i.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],i=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,i,/\.\w{8}\./);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(i){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!i.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var i=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!i.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,i=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(i))||(i=addDirectoryIndex(i,t),e=urlsToCacheKeys.has(i));var n="/original-io/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(i=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(i)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(i)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});