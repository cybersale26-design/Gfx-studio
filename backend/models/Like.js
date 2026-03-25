const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Unique index to prevent duplicate likes
LikeSchema.index({ post: 1, user: 1 }, { unique: true });
LikeSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Like', LikeSchema);