global.webpackJsonp([6],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(10);



const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_140bf36e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(20);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(11)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_140bf36e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/goods-details/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-140bf36e", Component.options)
  } else {
    hotAPI.reload("data-v-140bf36e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_swiper__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_footerBox__ = __webpack_require__(16);
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
      goodsDetail: {
        name: '',
        minPrice: '',
        goodsDescribe: ''
      }, //商品详情对象
      goodsLabel: {
        pic: '',
        name: '',
        selectSizePrice: 0
      },
      saveShopCar: {}, //需要保存到购物车的商品
      propertyChildIds: '', //规格属性id
      propertyChildNames: '', //规格属性名
      shopCarInfo: {}, //设置在缓存的购物车信息   
      hideShopPopup: true, //规格弹出框
      hasMoreSelect: false, //是否有多种规格可选
      selectSizePrice: 0, //单个选择商品价格
      buyNumMin: 0, //最小购买数量
      buyNumMax: 0, //最大购买数量
      swiperlist: {
        item1: [{
          url: "https://img.alicdn.com/imgextra/i4/1987905011/TB2zQTdhborBKNjSZFjXXc_SpXa_!!1987905011-0-item_pic.jpg_430x430q90.jpg"
        }],
        item2: [{
          url: "https://img.alicdn.com/imgextra/i2/2406931838/TB2BL3QbgFkpuFjSspnXXb4qFXa_!!2406931838.jpg_430x430q90.jpg"
        }],
        item3: [{
          url: "https://img.alicdn.com/imgextra/i3/2406931838/TB2RecrXNxmpuFjSZFNXXXrRXXa_!!2406931838.jpg_430x430q90.jpg"
        }],
        item4: [{
          url: "https://img.alicdn.com/imgextra/i2/2406931838/TB2ZlHoXNXkpuFjy0FiXXbUfFXa_!!2406931838.jpg_430x430q90.jpg"
        }],
        item5: [{
          url: "https://img.alicdn.com/imgextra/i2/2406931838/TB2wITFXY8kpuFjy0FcXXaUhpXa_!!2406931838.jpg_430x430q90.jpg"
        }]
      },
      styleobject: 'width:100%;height:750rpx;position:absolute;top:0;z-index:3'
    };
  },
  components: {
    'd-swiper': __WEBPACK_IMPORTED_MODULE_0__components_swiper__["a" /* default */],
    footerBox: __WEBPACK_IMPORTED_MODULE_1__components_footerBox__["a" /* default */]
  },
  onLoad: function (options) {
    // console.log(this.styleobject)
    // console.log(options)
    wx.getStorage({
      key: 'shopCarInfo',
      success: res => {
        // success
        console.log(`initshopCarInfo:${res.data}`);
        this.shopCarInfo = res.data;
        this.shopNum = res.data.shopNum;
      }
    });
    wx.request({
      url: 'http://localhost:3030/shop/goods/detail',
      method: 'POST',
      data: {
        id: options.id
      },
      success: res => {
        // console.log(res);
        const dataInfo = res.data.data.basicInfo;
        this.saveShopCar = dataInfo;
        this.goodsDetail.name = dataInfo.name;
        this.goodsDetail.minPrice = dataInfo.minPrice;
        this.goodsDetail.goodsDescribe = dataInfo.characteristic;

        let goodsLabel = this.goodsLabel;
        goodsLabel = res.data.data;
        // console.log(goodsLabel);
        this.selectSizePrice = dataInfo.minPrice;
        this.goodsLabel.pic = dataInfo.pic;
        this.goodsLabel.name = dataInfo.name;
        this.buyNumMax = dataInfo.stores;
        this.buyNumMin = dataInfo.stores > 0 ? 1 : 0;
      }
    });
  }
});

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_footerBox_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_039a3dc8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_footerBox_vue__ = __webpack_require__(19);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(17)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-039a3dc8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_footerBox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_039a3dc8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_footerBox_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/footerBox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] footerBox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-039a3dc8", Component.options)
  } else {
    hotAPI.reload("data-v-039a3dc8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
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
      shopNum: 0, //全部购买数量
      buyNumber: 0, //单个购买数量
      hasMoreSelect: false, //是否有多种规格可选
      selectSize: '选择:', //选择规格
      //selectSizePrice: 0,单个选择商品价格
      selectSize: '选择: ', //选择规格
      canSubmit: false, //是否能添加到购物车,
      isBuy: false
    };
  },
  props: {
    goodsLabel: {
      type: Object
    },
    selectSizePrice: {
      type: Number
    },
    buyNumMax: {
      type: Number
    },
    buyNumMin: {
      type: Number
    },
    propertyChildIds: {
      type: Number
    },
    propertyChildNames: {
      type: String
    },
    hideShopPopup: {
      type: Boolean,
      default() {
        return true;
      }
    },
    shopCarInfo: {
      type: Object
    },
    saveShopCar: {
      type: Object
    }
  },
  methods: {
    addBtn() {
      this.hideShopPopup = false;
    },
    closePopupTap() {
      this.hideShopPopup = true;
    },
    numincreaseTap() {
      let buyNumber = this.buyNumber;
      if (buyNumber < this.buyNumMax) {
        buyNumber++;
      }
      // console.log(buyNumber)
      this.buyNumber = buyNumber;
    },
    numdecreaseTap() {
      let buyNumber = this.buyNumber;
      if (buyNumber > this.buyNumMin) {
        buyNumber--;
      }
      this.buyNumber = buyNumber;
    },
    labelItemTap(e) {
      console.log(e);
      let propertyindex = e.currentTarget.dataset.propertyindex;
      let propertiesArr = this.goodsLabel.property;
      let curProperty = propertiesArr[propertyindex];
      let curProperty_childs = curProperty.childsCurGoods;
      for (let i = 0; i < curProperty_childs.length; i++) {
        curProperty_childs[i].active = false;
      }
      curProperty_childs[e.currentTarget.dataset.propertyid].active = true;
      let needSelectNum = propertiesArr.length;
      let curSelectNum = 0;
      let propertyChildIds = '';
      let propertyChildNames = '';
      let canSubmit = false;
      for (let i = 0; i < propertiesArr.length; i++) {
        canSelectNum++;
        let properties_childs = propertiesArr[i].childsCurGoods;
        for (let j = 0; j < properties_childs.length; j++) {
          if (properties_childs[j].active) {
            properties_childs += propertiesArr[i].id + ':' + properties_childs[j].id + ',';
            propertyChildNames += propertiesArr[i].name + properties_childs[j].name + '';
          }
        }
      }
      if (needSelectNum == curSelectNum) {
        canSubmit = true;
      }
      this.selectSizePrice = curProperty_childs[e.currentTarget.dataset.propertyid].price;
      this.buyNumMax = 1000;
      this.propertyChildIds = propertyChildIds;
      this.propertyChildNames = propertyChildNames;
      this.buyNumber = 1;
      this.goodsLabel = this.goodsLabel;
      this.canSubmit = canSubmit;
    },
    addShopCar() {
      let shopCarMap = {};
      const save = this.saveShopCar;
      shopCarMap.goodsId = save.id;
      shopCarMap.pic = save.pic;
      shopCarMap.name = save.name;
      shopCarMap.label = this.propertyChildNames;
      shopCarMap.propertyChildIds = this.propertyChildIds;
      shopCarMap.price = this.selectSizePrice;
      shopCarMap.left = '';
      shopCarMap.active = true;
      shopCarMap.number = this.buyNumber;
      shopCarMap.logisticsType = save.logisticsId;
      shopCarMap.logistics = save.logistics;
      this.closePopupTap();
      var shopCarInfo = this.shopCarInfo;
      if (!shopCarInfo.shopNum) {
        shopCarInfo.shopNum = 0;
      }
      if (!shopCarInfo.shoplist) {
        shopCarInfo.shoplist = [];
      }
      var hasSameGoodsindex = -1;
      for (var i = 0; i < shopCarInfo.shoplist.length; i++) {
        var tamShopCarMap = shopCarInfo.shoplist[i];
        if (tamShopCarMap.goodsId === shopCarMap.goodsId && shopCarMap.propertyChildIds == tamShopCarMap.propertyChildIds) {
          shopCarMap.number = shopCarMap.number + tamShopCarMap.number;
          hasSameGoodsindex = i;
          break;
        }
      }
      shopCarInfo.shopNum = shopCarInfo.shopNum + this.buyNumber;
      if (hasSameGoodsindex > -1) {
        shopCarInfo.shoplist.splice(hasSameGoodsindex, 1, shopCarMap);
      } else {
        shopCarInfo.shoplist.push(shopCarMap);
      }
      this.shopCarInfo = shopCarInfo;
      this.shopNum = shopCarInfo.shopNum;
      // this.closePopupTap();
      wx.showToast({
        title: '加入购物车🛒成功！',
        icon: 'success',
        duration: 2000
      });
      wx.setStorage({
        key: 'shopCarInfo',
        data: shopCarInfo,
        success: function (res) {
          //success
        }
      });
    },
    tobuy() {
      console.log(this.canSubmit);
      if (this.buyNumber < 1) {
        wx.showModal({
          title: '提示',
          content: '暂时缺货哦',
          showCancel: false
        });
        return;
      }
      let shopCarMap = {};
      const save = this.saveShopCar;
      shopCarMap.goodsId = save.id;
      shopCarMap.pic = save.pic;
      shopCarMap.name = save.name;
      shopCarMap.label = this.propertyChildNames;
      shopCarMap.propertyChildIds = this.propertyChildIds;
      shopCarMap.price = this.selectSizePrice;
      shopCarMap.left = '';
      shopCarMap.active = true;
      shopCarMap.number = this.buyNumber;
      shopCarMap.logisticsType = save.logisticsId;
      shopCarMap.logistics = save.logistics;

      wx.navigateTo({
        url: `订单页面路径?detail=${JSON.stringify(shopCarMap)}`
      });
    },
    goShopCar() {
      wx.getStorage({
        key: 'shopCarInfo',
        success: function (res) {
          console.log(res.data.shoplist);
        }
      });
      wx.reLaunch({
        url: '../order/main'
      });
    }
  }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "footer-box"
  }, [_c('div', {
    staticClass: "shop-cart-btn",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.goShopCar
    }
  }, [_c('div', {
    staticClass: "shop-num"
  }, [_vm._v(_vm._s(_vm.shopNum))]), _vm._v("\n      购物车\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "join-shop-cart",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.addBtn
    }
  }, [_vm._v("加入购物车")]), _vm._v(" "), _c('div', {
    staticClass: "now-buy",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.tobuy
    }
  }, [_vm._v("立即购买")])]), _vm._v(" "), _c('div', {
    staticClass: "show-popup",
    attrs: {
      "hidden": _vm.hideShopPopup
    }
  }, [_c('div', {
    staticClass: "popup-mask",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.closePopupTap
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "popup-contents"
  }, [_c('div', {
    staticClass: "pop-goods-info"
  }, [_c('div', {
    staticClass: "pop-img-box"
  }, [_c('image', {
    staticClass: "goods-thumbnail",
    attrs: {
      "src": _vm.goodsLabel.pic
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "pop-goods-des"
  }, [_c('div', {
    staticClass: "pop-goods-title"
  }, [_vm._v(_vm._s(_vm.goodsLabel.name))]), _vm._v(" "), _c('div', {
    staticClass: "pop-goods-price"
  }, [_vm._v("¥ " + _vm._s(_vm.selectSizePrice))])]), _vm._v(" "), _c('div', {
    staticClass: "pop-goods-close",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.closePopupTap
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "size-label-box"
  }, _vm._l((_vm.goodsLabel), function(property, x) {
    return (property.name) ? _c('div', {
      key: x
    }, [_c('div', {
      staticClass: "label"
    }, [_vm._v(_vm._s(property.name))]), _vm._v(" "), _c('div', {
      staticClass: "label-item-box"
    }, _vm._l((property), function(p, i) {
      return _c('div', {
        key: i,
        staticClass: "label-item",
        class: p.active ? 'active' : '',
        attrs: {
          "data-propertyindex": _vm.idx,
          "data-propertyid": _vm.index,
          "data-propertyname": property.name,
          "data-propertychildindex": _vm.index,
          "data-propertychildid": p.id,
          "data-propertychildname": p.name,
          "eventid": '5-' + x + '-' + i
        },
        on: {
          "click": _vm.labelItemTap
        }
      }, [_vm._v("\n                      " + _vm._s(p.name) + "\n                  ")])
    }))]) : _vm._e()
  })), _vm._v(" "), _c('div', {
    staticClass: "buy-num-box"
  }, [_c('div', {
    staticClass: "num-label"
  }, [_vm._v("购买数量")]), _vm._v(" "), _c('div', {
    staticClass: "num-box"
  }, [_c('div', {
    staticClass: "num-decrease",
    class: _vm.buyNumber == _vm.buyNumMin ? 'hui' : '',
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.numdecreaseTap
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('div', {
    staticClass: "num-input"
  }, [_c('input', {
    attrs: {
      "type": "number",
      "value": _vm.buyNumber,
      "disabled": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "num-increase",
    class: _vm.buyNumber == _vm.buyNumMax ? 'hui' : '',
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.numincreaseTap
    }
  }, [_vm._v("+")])])]), _vm._v(" "), (!_vm.isBuy) ? _c('div', {
    staticClass: "popup-join-btn",
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": _vm.addShopCar
    }
  }, [_vm._v("\n              加入购物车\n           ")]) : _c('div', {
    staticClass: "popup-join-btn",
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": _vm.tobuy
    }
  }, [_vm._v("\n              立即购买\n          ")])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-039a3dc8", esExports)
  }
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "swiper-list"
  }, [_c('d-swiper', {
    attrs: {
      "swiperList": _vm.swiperlist,
      "styleObject": _vm.styleobject,
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "goods-info"
  }, [_c('div', {
    staticClass: "goods-title"
  }, [_vm._v(_vm._s(_vm.goodsDetail.name))]), _vm._v(" "), _c('div', {
    staticClass: "goods-price"
  }, [_vm._v("¥ " + _vm._s(_vm.goodsDetail.minPrice))])]), _vm._v(" "), _c('div', {
    staticClass: "goods-des-info"
  }, [_c('div', {
    staticClass: "goods-text"
  }, [_c('span', [_vm._v(_vm._s(_vm.goodsDetail.goodsDescribe))])])]), _vm._v(" "), _c('footer-box', {
    attrs: {
      "hideShopPopup": _vm.hideShopPopup,
      "goodsLabel": _vm.goodsLabel,
      "buyNumMin": _vm.buyNumMin,
      "buyNumMax": _vm.buyNumMax,
      "selectSizePrice": _vm.selectSizePrice,
      "propertyChildIds": _vm.propertyChildIds,
      "propertyChildNames": _vm.propertyChildNames,
      "shopCarInfo": _vm.shopCarInfo,
      "saveShopCar": _vm.saveShopCar,
      "mpcomid": '1'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-140bf36e", esExports)
  }
}

/***/ })
],[9]);
//# sourceMappingURL=main.js.map