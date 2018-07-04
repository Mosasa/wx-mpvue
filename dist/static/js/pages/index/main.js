global.webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(9);



const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_386d90b5_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(27);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(10)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_386d90b5_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-386d90b5", Component.options)
  } else {
    hotAPI.reload("data-v-386d90b5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_swiper__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_card__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_hotRecommend__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_hotList__ = __webpack_require__(23);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      motto: 'Hello World',
      fixImg: '/static/images/shoppingCar.png',
      userInfo: {}
    };
  },
  components: {
    card: __WEBPACK_IMPORTED_MODULE_1__components_card__["a" /* default */],
    'swiper': __WEBPACK_IMPORTED_MODULE_0__components_swiper__["a" /* default */],
    'scroll': __WEBPACK_IMPORTED_MODULE_2__components_hotRecommend__["a" /* default */],
    'hot': __WEBPACK_IMPORTED_MODULE_3__components_hotList__["a" /* default */]
  },
  methods: {
    bindViewTap() {
      const url = '../logs/main';
      wx.navigateTo({ url });
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev);
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_swiper_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a4d18188_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_swiper_vue__ = __webpack_require__(15);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(13)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a4d18188"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_swiper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a4d18188_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_swiper_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/swiper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] swiper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a4d18188", Component.options)
  } else {
    hotAPI.reload("data-v-a4d18188", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            swiperList: {
                item1: [{
                    url: "https://img.alicdn.com/imgextra/i4/2406931838/TB1vHncSFXXXXcLapXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
                }],
                item2: [{
                    url: "https://img.alicdn.com/imgextra/i2/101450072/TB1vZfxlDnI8KJjSszgXXc8ApXa_!!0-item_pic.jpg_430x430q90.jpg"
                }],
                item3: [{
                    url: "https://img.alicdn.com/imgextra/i1/3085614114/TB19R9Ocgn.PuJjSZFkXXc_lpXa_!!0-item_pic.jpg_430x430q90.jpg"
                }],
                item4: [{
                    url: "https://img.alicdn.com/imgextra/i1/2548289425/TB1brhyyVGWBuNjy0FbXXb4sXXa_!!0-item_pic.jpg_430x430q90.jpg"
                }],
                item5: [{
                    url: "https://img.alicdn.com/imgextra/i3/3161150069/TB12lCTtY9YBuNjy0FgXXcxcXXa_!!0-item_pic.jpg_430x430q90.jpg"
                }]
            }
        };
    },
    methods: {
        choose() {
            wx.showToast({
                title: '待完善',
                icon: 'success',
                duration: 2000
            });
        }
    }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('swiper', {
    staticClass: "swiperList",
    attrs: {
      "autoplay": true,
      "circular": true,
      "indicator-dots": true,
      "indicator-color": "rgba(228,228,228,1)",
      "indicator-active-color": "#ff3366"
    }
  }, _vm._l((_vm.swiperList), function(items, i) {
    return _c('swiper-item', {
      key: i,
      attrs: {
        "mpcomid": '0-' + i
      }
    }, _vm._l((items), function(item, index) {
      return _c('div', {
        key: index,
        staticClass: "swiper-info",
        attrs: {
          "eventid": '0-' + i + '-' + index
        },
        on: {
          "click": _vm.choose
        }
      }, [_c('image', {
        staticClass: "swiper-image",
        attrs: {
          "src": item.url
        }
      })])
    }))
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a4d18188", esExports)
  }
}

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_hotRecommend_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6dec559a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_hotRecommend_vue__ = __webpack_require__(22);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(20)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_hotRecommend_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6dec559a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_hotRecommend_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/hotRecommend.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] hotRecommend.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6dec559a", Component.options)
  } else {
    hotAPI.reload("data-v-6dec559a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {},
  props: {
    goods: {
      type: Array,
      default() {
        return [{
          minPrice: 0
        }];
      }
    }
  },
  mounted: function (options) {
    this.getGoodsList();
  },
  methods: {
    getGoodsList(categoryId) {
      console.log(categoryId);
      wx.request({
        url: 'http://localhost:3030/shop/goods/list',
        data: {
          categoryId: categoryId
        },
        method: 'POST',
        success: res => {
          console.log(res);
          this.goods = res.data.data;
        }
      });
    },
    tabDetails(e) {
      wx.navigateTo({
        url: '../pages/goods-details/index?id=' + e.currentTarget.dataset.id
      });
    }
  }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroll-view', {
    staticClass: "goods-scroll",
    attrs: {
      "scroll-x": "true"
    }
  }, [_c('div', {
    staticClass: "goods-container"
  }, _vm._l((_vm.goods), function(item, index) {
    return _c('div', {
      key: item,
      staticClass: "goods-box",
      attrs: {
        "data-id": item.id,
        "eventid": '0-' + index
      },
      on: {
        "click": _vm.tabDetails
      }
    }, [_c('div', {
      staticClass: "image-box"
    }, [_c('image', {
      attrs: {
        "src": item.pic
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "goods-content"
    }, [_c('span', {
      staticClass: "goods-title"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
      staticClass: "goods-price"
    }, [_vm._v("¥" + _vm._s(item.minPrice))])])])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6dec559a", esExports)
  }
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_hotList_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_cd013612_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_hotList_vue__ = __webpack_require__(26);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(24)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_hotList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_cd013612_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_hotList_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/hotList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] hotList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cd013612", Component.options)
  } else {
    hotAPI.reload("data-v-cd013612", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      icon: '/static/images/addShopping.png'
    };
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [{
          minPrice: 0
        }];
      }
    }
  },
  mounted: function (options) {
    this.getGoodList();
  },
  methods: {
    getGoodList(categoryId) {
      console.log(categoryId);
      wx.request({
        url: 'http://localhost:3030/shop/goods/list',
        data: {
          categoryId: categoryId
        },
        method: 'POST',
        success: res => {
          console.log(res);
          this.goods = res.data.data;
        }
      });
    },
    tabDetails(e) {
      wx.navigateTo({
        url: '../pages/goods-details/index?id=' + e.currentTarget.dataset.id
      });
    }
  }
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container-list"
  }, _vm._l((_vm.goods), function(item, index) {
    return _c('div', {
      key: item,
      staticClass: "container-item",
      attrs: {
        "data-id": item.id,
        "eventid": '0-' + index
      },
      on: {
        "click": _vm.tabDetails
      }
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col"
    }, [_c('div', {
      staticClass: "col-4"
    }, [_c('img', {
      staticClass: "col-img",
      attrs: {
        "src": item.pic
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "col-7"
    }, [_c('div', {
      staticClass: "goods-title"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _vm._m(0, true), _vm._v(" "), _c('div', {
      staticClass: "goods-price"
    }, [_vm._v("¥" + _vm._s(item.minPrice))])]), _vm._v(" "), _c('div', {
      staticClass: "col-1"
    }, [_c('img', {
      staticClass: "icon-img",
      attrs: {
        "src": _vm.icon,
        "alt": ""
      }
    })])])])])
  }))
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "status"
  }, [_c('span', [_vm._v("库存0")]), _vm._v(" "), _c('span', [_vm._v("月销0")]), _vm._v(" "), _c('span', [_vm._v("赞0")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-cd013612", esExports)
  }
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.clickHandle('test click', $event)
      }
    }
  }, [_c('div', {
    staticClass: "swiperList"
  }, [_c('swiper', {
    attrs: {
      "text": _vm.motto
    }
  })], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('scroll', {
    attrs: {
      "mpcomid": '0'
    }
  }), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('hot', {
    attrs: {
      "v-text": _vm.motto,
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "fixed-img"
  }, [_c('img', {
    staticClass: "fix-img",
    attrs: {
      "src": _vm.fixImg,
      "alt": ""
    }
  })])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "navTab"
  }, [_c('div', {
    staticClass: "recTab"
  }, [_c('text', [_vm._v("  ——  为你推荐  ——")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hot"
  }, [_c('span', [_vm._v(" —— 热门商品 ——")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-386d90b5", esExports)
  }
}

/***/ })
],[8]);
//# sourceMappingURL=main.js.map