const express = require('express');

const router = express.Router();
const taskcontroller= require("../controller/taskController")
router.get('/',taskcontroller.getPost);
router.get('/complete',taskcontroller.getCompletePost);
router.get('/incomplete',taskcontroller.getincompletePost);
router.post('/createPost',taskcontroller.createPost);
router.delete('/delete/:_id', taskcontroller.delete);
router.put('/update/:id',taskcontroller.update);
module.exports = router;