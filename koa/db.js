const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/test')
const db = mongoose.createConnection('mongodb://localhost/shop') //建立与shop数据库的连接

// 模型通过Schema界面定义。
var Schema = mongoose.Schema;

const listSchema = new Schema({
  barCode: String,
  categoryId: Number,
  characteristic: String,
  commission: Number,
  commissionType: Number,
  dateAdd: String,
  dateStart: String,
  id: Schema.Types.ObjectId,
  logisticsId: Number,
  minPrice: Number,
  minScore: Number,
  name: String,
  numberFav: Number,
  numberGoodReputation: Number,
  numberOrders: Number,
  originalPrice: Number,
  paixu: Number,
  pic: String,
  pingtuan: Boolean,
  pingtuanPrice: Number,
  propertyIds: String,
  recommendStatus: Number,
  recommendStatusStr: String,
  shopId: Number,
  status: Number,
  statusStr: String,
  stores: Number,
  userId: Number,
  videoId: String,
  views: Number,
  weight: Number,
})

const detailSchema = new Schema({
  "logistics" : {
      "isFree" : Boolean,
      "feeType" : Number,
      "feeTypeStr" : String
  },
  "category" : {
      "dateAdd" : Date,
      "icon" : String,
      "id" : Number,
      "isUse" : Boolean,
      "key" : String,
      "name" : String,
      "paixu" : Number,
      "pid" : Number,
      "type" : String,
      "userId" : Number,
  },
  "pics" : [ 
      {
          "goodsId" : Number,
          "id" : Number,
          "pic" : String,
          "userId" : Number,
      }
  ],
  "content" : String,
  "properties" : [ 
      {
          "childsCurGoods" : [ 
              {
                  "dateAdd" : Date,
                  "id" : Number,
                  "name" : String,
                  "paixu" : Number,
                  "propertyId" : Number,
                  "remark" : String,
                  "userId" : Number,
                  price: Number
              }
          ],
          "dateAdd" : Date,
          "dateUpdate" : Date,
          "id" : Number,
          "name" : String,
          "paixu" : Number,
          "userId" : Number,
      }
  ],
  "basicInfo" : {
      "barCode" :String,
      "categoryId" : Number,
      "characteristic" : String,
      "commission" : Number,
      "commissionType" : Number,
      "dateAdd" : Date,
      "dateStart" : Date,
      "dateUpdate" : Date,
      "id" : Schema.Types.ObjectId,
      "logisticsId" : Number,
      "minPrice" : Number,
      "minScore" : Number,
      "name" : String,
      "numberFav" : Number,
      "numberGoodReputation" : Number,
      "numberOrders" : Number,
      "originalPrice" : Number,
      "paixu" : Number,
      "pic" : String,
      "pingtuan" : Boolean,
      "pingtuanPrice" : Number,
      "propertyIds" : String,
      "recommendStatus" : Number,
      "recommendStatusStr" : String,
      "shopId" : Number,
      "status" : Number,
      "statusStr" : String,
      "stores" : Number,
      "userId" : Number,
      "videoId" : String,
      "views" : Number,
      "weight" : Number,
  }
})

const userSchema = new Schema({
  username: String,
  password: String
})

const addressSchema = new Schema({
  "address" : String,
  "cityId" : Number,
  "cityStr" : String,
  "code" : String,
  "dateAdd" : Date,
  "dateUpdate" : Date,
  "id" : Number,
  "isDefault" : Boolean,
  "linkMan" : String,
  "mobile" : String,
  "provinceId" : Number,
  "provinceStr" : String,
  "status" : Number,
  "statusStr" : String,
  "uid" : Schema.Types.ObjectId,
  "userId" : Number,
})

const orderSchema = new Schema({
    remark: String,
    uid: Schema.Types.ObjectId,
    goodsIdList: [Schema.Types.ObjectId],
    amount: Number,
    dateAdd: Date,
    status: Number,
    statusStr: String,
    goodsImg: [String]
})

module.exports = {
  db,
  listSchema,
  detailSchema,
  userSchema,
  addressSchema,
  orderSchema
}
