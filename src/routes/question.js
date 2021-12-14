import express from 'express';
const questionController = require('../controllers/question');
const router = express.Router();

router.get('/', questionController.getAll);
router.post('/', questionController.create);
router.get('/:id', questionController.getById);
router.put('/:id', questionController.updateById);
router.delete('/:id', questionController.deleteById);
router.get('/course/:id', questionController.getByCourse);
router.get('/subject/:id', questionController.getBySubject);

module.exports = router;