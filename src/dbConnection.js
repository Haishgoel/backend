const Sequelize = require("sequelize");

const sequelize = new Sequelize('TestProject', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });


var connectDB = async () => {
	await sequelize
		.authenticate()
		.then(async () => {
			await sequelize.sync({ alter: false });
			sequelize.sync({alter:false})
			console.log("Connection has been established successfully.");
		})
		.catch((err) => {
			console.error("Unable to connect to the database:", err);
		});
};
module.exports = {
	connectDB: connectDB,
	sequelize: sequelize,
};
