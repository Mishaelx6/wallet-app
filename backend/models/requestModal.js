const mongoose = require('mongoose')

const requestSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    remark: {
      type: String,
      required: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },

  {
    timestamps: true,

}
)

module.exports = mongoose.model('Request', requestSchema)
