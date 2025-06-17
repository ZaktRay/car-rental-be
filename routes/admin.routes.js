const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/admin.auth.middleware');
const { registerAdmin, loginAdmin, getProfile, updateProfile, changePassword } = require('../controllers/admin.controller');
const {addCar} = require('../controllers/car.controller');
const {updateBookingStatus} = require('../controllers/booking.controller')
const upload = require('../utils/multer')


router.post('/login', loginAdmin);
router.post('/register', registerAdmin);


router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);
router.put('/change-password', protect, changePassword);

router.post('/addcar', protect , upload.single('image') ,addCar);

router.put('/updateBookingStatus',protect,updateBookingStatus);

module.exports = router;