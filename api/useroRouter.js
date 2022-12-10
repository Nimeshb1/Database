import express from "express";
import {
  deleteuser,
  getuser,
  insertuser,
  updateUsers,
} from "./model/user/UserModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await getuser();
    res.json({
      status: "sucess",
      message: "here are the users",
      result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "Sucess",
      message: error.message,
    });
  }
});
router.post("/", async (req, res) => {
  try {
    const user = req.body;

    const result = await insertuser(req.body);

    result?._id
      ? res.json({
          status: "sucess",
          message: "user create sucessfully",
        })
      : res.json({
          status: "error",
          message: "unable to create user, try again later",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "Sucess",
      message: error.message,
    });
  }
});
router.put("/", async (req, res) => {
  try {
    const { _id, ...rest } = req.body;
    const filter = { _id };

    const result = await updateUsers(filter, rest);

    result?._id
      ? res.json({
          status: "sucess",
          message: "user create sucessfully",
        })
      : res.json({
          status: "error",
          message: "unable to create user, try again later",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "Sucess",
      message: error.message,
    });
  }
});
router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const result = await deleteuser(_id);

    result?._id
      ? res.json({
          status: "sucess",
          message: "user create sucessfully",
        })
      : res.json({
          status: "error",
          message: "unable to create user, try again later",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "Sucess",
      message: error.message,
    });
  }
});

export default router;
