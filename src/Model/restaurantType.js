module.exports = function (Sequelize, sequelize, DataTypes) {
	return sequelize.define("restaurantType", {
		...require("./core")(Sequelize, DataTypes),
		restaurantType: {
			type: DataTypes.STRING(150),
			allowNull: true
		}
	}, {
		tableName: "restaurantType"
	});
};
    