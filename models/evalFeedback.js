module.exports = function (mongoose, DataTypes) {
  var EvaluationFeedback = mongoose.define("EvaluationFeedback", {
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    suggestions: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: 1
    },
    feedback: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: 0
    }
  });
  // Comments association with patron and evaluation-feedback
  evalutionFeedback.associate = models => {
    // A comment belongs to a evaluation
    // and can't be created without an review id associate as the foreign key constraint
    evaluation.belongsTo(models.evaluationFeedback, {
      foreignKey: {
        allowNull: false
      }
    });

    // Patron/guests has to be registered as a guest to be able to give feedback and evaluation.
    // needs a login as  a guest to be able to get a login - associated as  foreign key constraint
    EvaluationFeedback.belongsTo(models.Patrons, {
      foreignKey: {
        allowNull: false
      }
    });

  };
  return EvaluationFeedback;
};