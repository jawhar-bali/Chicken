const yup = require('yup');
const Chicken = require('../models/chicken');

const validateChicken = async function (req, res, next) {
  try {
    const schema = yup.object().shape({
      name: yup.string().required("Name is required!"),
      birthday: yup.date().nullable(),
      weight: yup.number().required("Weight is required!"),
      steps: yup.number().default(0),
      isRunning: yup.boolean().default(false),
    });

    await schema.validate(req.body);
    next();
  } catch (err) {
    res.send(err.errors);
  }
};

module.exports = { validateChicken };
