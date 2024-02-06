var Sequelize = require("sequelize");
var sequelize = require("../dbConnection").sequelize;

module.exports = {
    Restaurant: require("./restaurants")(Sequelize, sequelize, Sequelize.DataTypes),
    RestaurantType: require("./restaurantType")(Sequelize, sequelize, Sequelize.DataTypes),
    Detail: require("./details")(Sequelize, sequelize, Sequelize.DataTypes),
    DetailFeature: require("./detailFeature")(Sequelize, sequelize, Sequelize.DataTypes),
    Tags: require("./tags")(Sequelize, sequelize, Sequelize.DataTypes)
}