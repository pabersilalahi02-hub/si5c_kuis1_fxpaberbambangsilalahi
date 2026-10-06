const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');
const apiKeyMiddleware = require('../middlewares/apiKeyMiddleware');

// Endpoint GET (Publik)
router.get('/', tourController.getAllTourPackages);
router.get('/:id', tourController.getTourPackageById);

// Endpoint POST, PUT, DELETE (Terproteksi API Key)
router.post('/', apiKeyMiddleware, tourController.createTourPackage);
router.put('/:id', apiKeyMiddleware, tourController.updateTourPackage);
router.delete('/:id', apiKeyMiddleware, tourController.deleteTourPackage);

module.exports = router;