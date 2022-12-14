const express = require('express');
const router = express.Router();

// Controller
const {
    register, 
    getCurrentUser,
    login, 
    update,
    getUserById,
} = require('../controllers/UserController');

// Middlewares
const validate = require('../middlewares/handleValidation');
const { userCreateValidation, loginValidation, userUpdateValidation, 
} = require('../middlewares/useValidations');
const authGuard = require('../middlewares/authGuard');
//const { update } = require('../models/User');

// Routes
router.post('/register', userCreateValidation(), validate, register);
router.post('/login', loginValidation(), validate, login);
router.get('/profile', authGuard, getCurrentUser);
router.put('/', authGuard, userUpdateValidation(), validate, update);
router.get('/:id', getUserById);

module.exports = router;