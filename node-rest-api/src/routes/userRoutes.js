const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validateRequest = require('../middlewares/validationMiddleware');
const { userValidationSchema } = require('../utils/validationSchemas');

router.post(
    '/',
    validateRequest(userValidationSchema),
    userController.createUser
);

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserById);

router.put(
    '/:id',
    validateRequest(userValidationSchema),
    userController.updateUser
);

router.delete('/:id', userController.deleteUser);

module.exports = router;