<<<<<<< HEAD
const express  = require('express');
const router = express.Router();

const { registerUser,loginUser,getCurrentUser} = require ('../controllers/userControllers');


const {protect} = require('../middleware/authMiddleware');

router.post('/',registerUser);
router.post('/login',loginUser);
router.get('/current' ,protect,getCurrentUser);

module.exports = router;
=======
const express = require('express');
const router = express.Router();

const { registerUser, loginUser, getCurrentUser } = require('../controllers/userController');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/current', getCurrentUser);

module.exports = router;
>>>>>>> 30b6188a690a815cbeb90b1ad82b6649f9070bac
