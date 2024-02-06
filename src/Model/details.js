module.exports = function (Sequelize, sequelize, DataTypes) {
	return sequelize.define("details", {
		...require("./core")(Sequelize, DataTypes),
		heading: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
        detailImage: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
        description: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		restaurantId:{
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
		tableName: "details"
	});
};
