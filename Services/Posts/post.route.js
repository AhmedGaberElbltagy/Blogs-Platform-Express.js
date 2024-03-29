const express = require("express");
const router = express.Router();
const postController = require("./post.controller");
const validateSchema = require("../../Middlewares/validateSchema");
const {updatepostSchema,CreatepostSchema} = require("./post.validation");

// Middlewares
const granted = require('../../middlewares/granted');
const isAuth = require('../../middlewares/is-Auth');
const upload = require('../../upload/imagesUpload');



router.get("/",isAuth(),granted("readOwn","posts"),postController.getPosts);

router.get("/:id",isAuth(),granted("readOwn","posts"),postController.getPost);

router.post("/create",isAuth(),granted("createOwn","posts"),postController.createPost);

router.delete("/:id",isAuth(),granted("deleteOwn","posts"),postController.deletePost);

router.put("/:id",isAuth(),validateSchema(updatepostSchema),postController.updatePost);

router.put('/uploadImage/:id',upload.single('image'),postController.uploadImage)


module.exports = router
