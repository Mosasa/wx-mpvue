const router = require('koa-router')()
const db = require('../db')

// 获取商品列表
router.post('/shop/goods/list', async (ctx, next) => {

  const params = ctx.request.body
  //以‘listSchema’的模型去取到Goods的数据
  const Goods = db.db.model('Goods', db.listSchema) //第一个‘db’是require来的自定义的，第二个‘db’是取到连接到mongodb的数据库，model代指实体数据(根据schema获取该字段下的数据，然后传给Goods))
  ctx.body = await new Promise((resolve, reject) => {//ctx.body是ctx.response.body的缩写,代指响应数据
    //异步，等到获取到数据之后再将body发出去
    if (params.categoryId) {
      Goods.find({categoryId: params.categoryId},(err, docs) => {
        if (err) {
          reject(err)
        }
        resolve({
          code: 0,
          errMsg: 'success',
          data: docs
        })
      })
    } else {
      Goods.find((err, docs) => {
        if (err) {
          reject(err)
        }
        resolve({
          code: 0,
          errMsg: 'success',
          data: docs
        })
      })
    }
  })
})

// 获取商品详情
router.post('/shop/goods/detail', async (ctx, next) => {//规定用post请求地址
  const params = ctx.request.body
  console.log(params)
  const Details = db.db.model('Details', db.detailSchema)
  ctx.body = await new Promise((resolve, reject) => {
    Details.findById(params.id, (err, docs) => {
      resolve({
        code: 0,
        errMsg: 'success',
        data: docs
      })
    })
  })
})

router.post('/user/shipping-address/ilist', async (ctx, next) => {
  const params = ctx.request.body
  const Addresses = db.db.model('Addresses', db.addressSchema)
  ctx.body = await new Promise((resolve, reject) => {
    if (params.id) {
      Addresses.findById(params.id,(err, docs) => {
        if (err) {
          reject(err)
        }
        resolve({
          code: 0,
          errMsg: 'success',
          data: docs
        })
      })
    } else {
      Addresses.find(params,(err, docs) => {
        if (err) {
          reject(err)
        }
        resolve({
          code: 0,
          errMsg: 'success',
          data: docs
        })
      })
    }
  })
})

router.post('/user/shipping-address/update', async (ctx, next) => {

  const params = ctx.request.body
  // console.log(params)
  const id = params.id
  delete params.id
  const Addresses = db.db.model('Addresses', db.addressSchema)
  ctx.body = await new Promise((resolve, reject) => {
    Addresses.update({uid: params.uid, isDefault: true}, {isDefault: false}, (err, docs) => {
      // console.log(docs)
      Addresses.findByIdAndUpdate(id, params, (err, docs) => {
        if (err) {
          reject(err)
        }
        resolve({
          code: 0,
          errMsg: 'success',
          data: docs
        })
      })
    })
  })
})

router.post('/user/shipping-address/add', async (ctx, next) => {
  const params = ctx.request.body
  // console.log(params)
  delete params.id
  const Addresses = db.db.model('Addresses', db.addressSchema)
  ctx.body = await new Promise((resolve, reject) => {
    Addresses.update({uid: params.uid, isDefault: true}, {isDefault: false}, (err, docs) => {
      Addresses.create(params, (err, docs) => {
        // console.log(docs)
        if (err) {
          reject(err)
        }
        resolve({
          code: 0,
          errMsg: 'success',
          data: docs
        })
      })
    })
  })
})

router.post('/user/shipping-address/delete', async (ctx, next) => {

  const params = ctx.request.body
  // console.log(params)
  const Addresses = db.db.model('Addresses', db.addressSchema)
  ctx.body = await new Promise((resolve, reject) => {
    Addresses.remove({uid: params.uid, _id: params.id}, (err, docs) => {
      // console.log(docs)
      if (err) {
        reject(err)
      }
      resolve({
        code: 0,
        errMsg: 'success',
        data: docs
      })
    })
  })
})

router.post('/order/list', async (ctx, next) => {
  const params = ctx.request.body
  // console.log(params)

  const Orders = db.db.model('Orders', db.orderSchema)
  ctx.body = await new Promise((resolve, reject) => {
    if (params.status) {
      Orders.find({
        uid: params.uid,
        status: params.status || 0
      }, (err, docs) => {
          // console.log(docs)
        if (err) {
          reject(err)
        }
        resolve({
          code: 0,
          errMsg: 'success',
          data: docs
        })
      })
    } else {
      Orders.find({
        uid: params.uid
      }, (err, docs) => {
          // console.log(docs)
        if (err) {
          reject(err)
        }
        resolve({
          code: 0,
          errMsg: 'success',
          data: docs
        })
      })
    }
  })
})

router.post('/order/create', async (ctx, next) => {
  const params = ctx.request.body
  const Orders = db.db.model('Orders', db.orderSchema)
  ctx.body = await new Promise((resolve, reject) => {
    Orders.create({
      remark: params.remark,
      uid: params.uid,
      goodsIdList: params.goodsIdList,
      goodsImg: params.goodsImg,
      amount: params.amount,
      dateAdd: new Date(),
      status: 0, // 0 待付款 1 待发货 2 待收货 4 已完成 -1 订单关闭,
      statusStr: '待支付'
    }, (err, docs) => {
        // console.log(docs)
      if (err) {
        reject(err)
      }
      resolve({
        code: 0,
        errMsg: 'success',
        data: docs
      })
    })
  })
})

router.post('/order/update', async (ctx, next) => {
  const params = ctx.request.body
  const Orders = db.db.model('Orders', db.orderSchema)
  const statusStr = {
    '0': '待付款',
    '1': '待发货',
    '2': '待收货',
    '4': '已完成',
    '-1': '订单关闭'
  }
  ctx.body = await new Promise((resolve, reject) => {
    Orders.findByIdAndUpdate(params.id, {
      status: params.status, // 0 待付款 1 待发货 2 待收货 4 已完成 -1 订单关闭,
      statusStr: statusStr[params.status]
    }, (err, docs) => {
        console.log(docs)
      if (err) {
        reject(err)
      }
      resolve({
        code: 0,
        errMsg: 'success',
        data: docs
      })
    })
  })
})



router.get('/404', async (ctx, next) => {
  ctx.body = ctx.request.query
})

router.post('/404', async (ctx, next) => {
  ctx.body = ctx.request.body
})

module.exports = router