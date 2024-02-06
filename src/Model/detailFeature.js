module.exports = function (Sequelize, sequelize, DataTypes) {
	return sequelize.define("detailFeature", {
		...require("./core")(Sequelize, DataTypes),
        feature:{
            type: DataTypes.STRING(150),
			allowNull: true
        },
		detailId: {
			type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: "details", // name of Target model
					key: "id", // key in Target model that we"re referencing
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
		}
	}, {
		tableName: "detailFeature"
	});
};
    