const router = require("express").Router();
const evalFeedbackController = require("../../controllers/evalFeedbackController.js");

//todo: make the reservation controller method.

router.route("/")
.get(evalFeedbackController.getAllEvalFeedback)
.post(evalFeedbackController.createevalFeedback)


router.route("/:id")
.get(evalFeedbackController.getAllevalFeedbackByPatrons)
.delete(evalFeedbackController.deleteevalFeedback);

module.exports = router;