"use strict";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const Models = require("../Model");
const Response = require("../config/response");
const baseService = require("./base");

exports.saveData = async (objToSave) => {
	return await baseService.saveData(Models.Restaurant, objToSave);
};

exports.getListing = (criteria, limit, offset) => {
	return new Promise((resolve, reject) => {
		let where = {};		

		where.isDeleted = 0;
		where.isBlocked = 0;
		Models
			.Restaurant
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

