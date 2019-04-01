const router = require("express").Router();
const evaluationController = require("../../controllers/evaluationController.js");
// match /api/evaluation
router.route("/")
.get(evaluationController.getAllevaluation)
.post(evaluationController.saveEvaluation);

// match /api/evaluation/:id
router.route("/:id")
.get(evaluationController.getAllevaluationByPatrons)
.delete(evaluationController.deleteEvaluation);

module.exports = router;







