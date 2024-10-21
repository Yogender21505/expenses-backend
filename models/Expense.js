const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  payerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  participants: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      share: { type: Number, required: true },
    },
  ],
  splitMethod: { type: String, enum: ['equal', 'exact', 'percentage'], required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Expense', expenseSchema);
