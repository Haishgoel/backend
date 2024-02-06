const Response = require("../config/response");


exports.saveData = (model, objToSave) => {
	return new Promise((resolve, reject) => {
		model
			.create(objToSave)
			.then((result) => {
				resolve(result);
			}).catch((err) => {
				console.log(err);
				reject(Response.error_msg.implementationError);
			});
	});
};

exports.getListing = (model,criteria, limit, offset) => {
	return new Promise((resolve, reject) => {
		let where = {};		

		where.isDeleted = 0;
		where.isBlocked = 0;
		model
			.findAll({
				limit,
				offset,
				where: where,
			}).then(result => {
				resolve(result);
			}).catch((err) => {
				console.log(err);
				reject(Response.error_msg.implementationError);
			});
	});
};