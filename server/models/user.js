const { Schema, model } = require('mongoose');
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    full_name: {
      type: String,
      required: [true, "Please add a username"],
    },
    username: {
      type: String,
      required: [true, "Please add a username"],
      unique: true
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      trim: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      validate: [({ length }) => length >= 8, "Password should be longer."],
      trim: true,
      select: false,
    },
    security_ques: {
      type: String,
      required: [true, "Please add a security question."],
    },
    security_ans: {
      type: String,
      required: [true, "Please add a security answer."],
      // select: false
    },
    resume_url: {
      type: String,
      required: [true, "Please upload your resume"],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;