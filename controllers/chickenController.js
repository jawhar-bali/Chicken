const Chicken = require('../models/chicken');
const Farmyard = require('../models/farmyard');
const { validateChicken } = require('../middlewares/validate');

// Obtenir tous les Chickens
const getAllChickens = async (req, res) => {
  try {
    const chickens = await Chicken.find();
    res.status(200).json(chickens);
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des Chickens.' });
  }
};

// Obtenir un Chicken par son ID
const getChickenById = async (req, res) => {
  const { id } = req.params;
  try {
    const chicken = await Chicken.findById(id);
    if (!chicken) {
      return res.status(404).json({ message: 'Chicken non trouvé.' });
    }
    res.status(200).json(chicken);
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération du Chicken.' });
  }
};

// Créer un nouveau Chicken
const createChicken = async (req, res) => {
  const { name, birthday, weight } = req.body;
  try {
    // Validation des données du poulet
    await validateChicken(req, res, async () => {
      const chicken = await Chicken.create({ name, birthday, weight });
      res.status(201).json(chicken);
    });
  } catch (error) {
    res.status(400).json({ error: 'Erreur lors de la création du Chicken.' });
  }
};

// Mettre à jour un Chicken
const updateChicken = async (req, res) => {
  const { id } = req.params;
  const { name, birthday, weight, steps, isRunning } = req.body;
  try {
    const chicken = await Chicken.findByIdAndUpdate(
      id,
      { name, birthday, weight, steps, isRunning },
      { new: true }
    );
    if (!chicken) {
      return res.status(404).json({ message: 'Chicken non trouvé.' });
    }
    res.status(200).json(chicken);
  } catch (error) {
    res.status(400).json({ error: 'Erreur lors de la mise à jour du Chicken.' });
  }
};

// Supprimer un Chicken
const deleteChicken = async (req, res) => {
  const { id } = req.params;
  try {
    const chicken = await Chicken.findByIdAndDelete(id);
    if (!chicken) {
      return res.status(404).json({ message: 'Chicken non trouvé.' });
    }
    res.status(200).json({ message: 'Chicken supprimé avec succès.' });
  } catch (error) {
    res.status(400).json({ error: 'Erreur lors de la suppression du Chicken.' });
  }
};

// Fonction pour augmenter la variable steps de 1
const runChicken = async (req, res) => {
  const chickenId = req.body.id; 

  try {
    const chicken = await Chicken.findById(chickenId);
    if (!chicken) {
      // Chicken non trouvé
      return res.status(404).json({ message: 'Chicken non trouvé.' });
    }
    chicken.steps += 1;
    await chicken.save();
    return res.status(200).json(chicken);
  } catch (error) {
    // Gérer les erreurs
    return res.status(500).json({ message: 'Une erreur s\'est produite lors de la mise à jour du chicken.' });
  }
};

const createChickenWithFarmyard = async (req, res) => {
  const { name, birthday, weight, farmyardId } = req.body;
  try {
    // Vérifier si le Farmyard avec l'ID spécifié existe
    const farmyard = await Farmyard.findById(farmyardId);
    if (!farmyard) {
      return res.status(404).json({ message: 'Farmyard non trouvé.' });
    }

    // Créer un nouvel objet Chicken avec le lien vers Farmyard
    const chicken = await Chicken.create({ name, birthday, weight, farmyard: farmyardId });
    res.status(201).json(chicken);
  } catch (error) {
    res.status(400).json({ error: 'Erreur lors de la création du Chicken.' });
  }
};

module.exports = {
  getAllChickens,
  getChickenById,
  createChicken,
  updateChicken,
  deleteChicken,
  runChicken,
  createChickenWithFarmyard
};
