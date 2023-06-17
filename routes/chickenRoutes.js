const express = require('express');
const router = express.Router();
const chickenController = require('../controllers/chickenController');

// obtenir tous les Chickens
router.get('/', chickenController.getAllChickens);

// obtenir un Chicken par son ID
router.get('/:id', chickenController.getChickenById);

// créer un nouveau Chicken
router.post('/', chickenController.createChicken);

// mettre à jour un Chicken (PATCH)
router.patch('/:id', chickenController.updateChicken);

// supprimer un Chicken
router.delete('/:id', chickenController.deleteChicken);

// augmenter la variable steps de 1
router.post('/run', chickenController.runChicken);

// créer un nouveau Chicken
router.post('/farmyard', chickenController.createChickenWithFarmyard);





module.exports = router;
