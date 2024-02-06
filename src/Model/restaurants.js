module.exports = function (Sequelize, sequelize, DataTypes) {
	return sequelize.define("restaurants", {
		...require("./core")(Sequelize, DataTypes),
		restaurantName: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
        restaurantImage: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
        description: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
        menuFile: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		restaurantTypeId:{
			type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: "restaurantType", // name of Target model
					key: "id", // key in Target model that we"re referencing
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
		}
	}, {
		tableName: "restaurants"
	});
};
