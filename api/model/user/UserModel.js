import userSchema from "./UserSchema.js";

// create

export const insertuser = (userObj) => {
  return userSchema(userObj).save();
};
// read
export const getuser = () => {
  return userSchema.find();
};
// update
export const updateUsers = (filter, updateobj) => {
  return userSchema.findOneAndUpdate(filter, updateobj, { new: true }); //
};
// delete
export const deleteuser = (_id) => {
  return userSchema.findByIdAndDelete(_id);
};
