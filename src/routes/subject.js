import express from 'express';
const subjectController = require('../controllers/subject');
const router = express.Router();

router.get('/', subjectController.getAll);
router.post('/', subjectController.create);
router.get('/:id', subjectController.getById);
router.put('/:id', subjectController.updateById);
router.delete('/:id', subjectController.deleteById);

module.exports = router;