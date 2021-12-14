import express from 'express';
const courseController = require('../controllers/course');
const router = express.Router();

router.get('/', courseController.getAll);
router.post('/', courseController.create);
router.get('/:id', courseController.getById);
router.put('/:id', courseController.updateById);
router.delete('/:id', courseController.deleteById);

module.exports = router;