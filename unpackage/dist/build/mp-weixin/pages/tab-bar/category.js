(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tab-bar/category"],{"028a":function(t,e,a){"use strict";a.r(e);var o=a("ba75"),n=a.n(o);for(var r in o)"default"!==r&&function(t){a.d(e,t,function(){return o[t]})}(r);e["default"]=n.a},"0d51":function(t,e,a){"use strict";a.r(e);var o=a("8d7e"),n=a("028a");for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);a("7126");var s=a("2877"),i=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports},"2afd":function(t,e,a){},7126:function(t,e,a){"use strict";var o=a("2afd"),n=a.n(o);n.a},"8d7e":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("header-bar",{attrs:{isSearchBar:!0,mpcomid:"88c1024a-0"}}),a("view",{staticClass:"category-list"},[a("scroll-view",{staticClass:"left",attrs:{"scroll-y":"true"}},t._l(t.categoryList,function(e,o){return a("view",{key:e.id,staticClass:"row",class:[o==t.showCategoryIndex?"on":""],attrs:{eventid:"88c1024a-0-"+o},on:{tap:function(e){t.showCategory(o)}}},[a("view",{staticClass:"text"},[a("view",{staticClass:"block"}),t._v(t._s(e.categoryName))])])})),a("scroll-view",{staticClass:"right",attrs:{"scroll-y":"true"}},t._l(t.categoryList,function(e,o){return a("view",{directives:[{name:"show",rawName:"v-show",value:o==t.showCategoryIndex,expression:"index==showCategoryIndex"}],key:e.id,staticClass:"category"},[a("view",{staticClass:"list"},t._l(e.subCategories,function(e,n){return a("view",{key:n,staticClass:"box",attrs:{eventid:"88c1024a-1-"+o+"-"+n},on:{tap:function(a){t.toCategory(e)}}},[a("image",{attrs:{src:e.imageUrl}}),a("view",{staticClass:"text"},[t._v(t._s(e.categoryName))])])}))])}))],1)],1)},n=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return n})},ba75:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(a("063c"));function n(t){return t&&t.__esModule?t:{default:t}}var r={components:{"header-bar":o.default},data:function(){return{showCategoryIndex:0,headerPosition:"fixed",categoryList:[]}},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onLoad:function(){this.loadCategories()},methods:{showCategory:function(t){this.showCategoryIndex=t},toCategory:function(e){t.navigateTo({url:"../product/product-list?categoryId="+e.id+"&categoryName="+e.categoryName})},loadCategories:function(){var e=this;this.$pin.request("GET","/commons/product/category/all",null,function(t){e.categoryList=t.data.list},function(e){console.log(e),t.showToast({icon:"none",title:"加载商品分类时出错"})})}}};e.default=r}).call(this,a("543d")["default"])},f4de:function(t,e,a){"use strict";a("6a7a");var o=r(a("b0ce")),n=r(a("0d51"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(n.default))}},[["f4de","common/runtime","common/vendor"]]]);