const express = require ('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/',userController.getAllUsers);

router.post('/',userController.createUSer);

router.get('/findByName',userController.getUserByName);

router.delete('/deleteByName', userController.deleteByName);


module.exports = router;