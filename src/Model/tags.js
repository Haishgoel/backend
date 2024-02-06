module.exports = function (Sequelize, sequelize, DataTypes) {
	return sequelize.define("tags", {
		...require("./core")(Sequelize, DataTypes),
		restaurantId: {
			type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: "restaurants", // name of Target model
					key: "id", // key in Target model that we"re referencing
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
		}
	}, {
		tableName: "tags"
	});
};
    