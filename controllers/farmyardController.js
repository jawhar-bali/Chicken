const Farmyard = require('../models/farmyard');

// Créer un nouveau Farmyard
const createFarmyard = async (req, res) => {
    const { name, location } = req.body;
    try {
      const farmyard = await Farmyard.create({ name, location });
      res.status(201).json(farmyard);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la création du Farmyard.' });
    }
  };
  module.exports = {
    createFarmyard,
  };
  