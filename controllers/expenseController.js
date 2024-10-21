const Expense = require('../models/Expense');

exports.addExpense = async (req, res) => {
  try {
    const { payerId, amount, participants, splitMethod } = req.body;
    let totalShare = participants.reduce((sum, p) => sum + p.share, 0);

    if (splitMethod === 'percentage' && totalShare !== 100) {
      return res.status(400).json({ error: 'Percentages must sum to 100%' });
    }

    const expense = new Expense({ payerId, amount, participants, splitMethod });
    await expense.save();
    res.status(201).json({ message: 'Expense added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add expense' });
  }
};
