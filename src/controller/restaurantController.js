const _ = require("underscore");
const Joi = require("joi");
let commonHelper = require("../helpers/common");
let Model=require("../Model/index")
let Services = require("../services");
module.exports = {
	saveRestaurant: async (payloadData,req,res) => {
		try {
			const schema = Joi.object().keys({
				restaurantName: Joi.string().optional(),
				restaurantImage: Joi.string().optional(),
				description: Joi.string().optional(),
				menuFile: Joi.string().optional(),
				restaurantTypeId:Joi.string().optional()
			});
			if (req.files && req.files.restaurantImage) {
				var image = req.files.restaurantImage;
				if (image) {
				  image = await commonHelper.fileUpload(image);
				}
			  }
			  if (req.files && req.files.menuFile) {
				var menuImage = req.files.menuFile;
				if (menuImage) {
					menuImage = await commonHelper.fileUpload(menuImage);
				}
			  }
			let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
			let objToSave = {};
			if (_.has(payloadData, "restaurantName") && payloadData.restaurantName !== "") objToSave.restaurantName = payload.restaurantName;
			if (_.has(payloadData, "restaurantImage") && payloadData.restaurantImage !== "") objToSave.restaurantImage = image;
			if (_.has(payloadData, "menuFile") && payloadData.menuFile !== "") objToSave.menuFile = menuImage;
			if (_.has(payloadData, "description") && payloadData.description !== "") objToSave.description = payload.description;
			if (_.has(payloadData, "restaurantTypeId") && payloadData.restaurantTypeId !== "") objToSave.restaurantTypeId = payload.restaurantTypeId;
            
			let create = await Services.BaseService.saveData(Model.Restaurant,objToSave)
			if (create) {
				return message.success.ADDED;
			}
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	getListRestaurant: async (payloadData) => {
		try {
			const schema = Joi.object().keys({
				limit: Joi.number().optional(),
				skip: Joi.number().optional(),
				sortBy: Joi.string().optional(),
				orderBy: Joi.string().optional(),
				search: Joi.string().optional().allow(""),
			});
			let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
			let result = {};
			result.data = await Services.RestaurantServices.getListing(payload, parseInt(payload.limit, 10) || 10, parseInt(payload.skip, 10) || 0);;
			
			return result;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	saveRestaurantType: async (payloadData,req,res) => {
		try {
			const schema = Joi.object().keys({
				restaurantType: Joi.string().optional(),
			});
			let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
			let objToSave = {};
			if (_.has(payloadData, "restaurantType") && payloadData.restaurantType !== "") objToSave.restaurantType = payload.restaurantType;  
			let create = await Services.BaseService.saveData(Model.RestaurantType,objToSave)
			if (create) {
				return message.success.ADDED;
			}
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	getListRestaurantType: async (payloadData) => {
		try {
			const schema = Joi.object().keys({
				limit: Joi.number().optional(),
				skip: Joi.number().optional(),
				sortBy: Joi.string().optional(),
				orderBy: Joi.string().optional(),
				search: Joi.string().optional().allow(""),
			});
			let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
			let result = {};
			result.data = await Services.BaseService.getListing(Model.RestaurantType,payload, parseInt(payload.limit, 10) || 10, parseInt(payload.skip, 10) || 0);;
			
			return result;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	saveTags: async (payloadData,req,res) => {
		try {
			const schema = Joi.object().keys({
				restaurantId: Joi.string().optional(),
			});
			let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
			let objToSave = {};
			if (_.has(payloadData, "restaurantId") && payloadData.restaurantId !== "") objToSave.restaurantId = payload.restaurantId;  
			let create = await Services.BaseService.saveData(Model.Tags,objToSave)
			if (create) {
				return message.success.ADDED;
			}
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	getTags: async (payloadData) => {
		try {
			const schema = Joi.object().keys({
				limit: Joi.number().optional(),
				skip: Joi.number().optional(),
				sortBy: Joi.string().optional(),
				orderBy: Joi.string().optional(),
				search: Joi.string().optional().allow(""),
			});
			let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
			let result = {};
			result.data = await Services.BaseService.getListing(Model.Tags,payload, parseInt(payload.limit, 10) || 10, parseInt(payload.skip, 10) || 0);;
			
			return result;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	saveDetail: async (payloadData,req,res) => {
		try {
			const schema = Joi.object().keys({
				restaurantId: Joi.string().optional(),
				feature:Joi.string().optional(),
				description: Joi.string().optional(),
				heading: Joi.string().optional()
			});
			let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
			let objToSave = {};
			if (req.files && req.files.detailImage) {
				var image = req.files.detailImage;
				if (image) {
				  image = await commonHelper.fileUpload(detailImage);
				}
			  }
			if (_.has(payloadData, "restaurantId") && payloadData.restaurantId !== "") objToSave.restaurantId = payload.restaurantId;  
			if (_.has(payloadData, "detailImage") && payloadData.detailImage !== "") objToSave.detailImage = image;  
			if (_.has(payloadData, "description") && payloadData.description !== "") objToSave.description = payload.description;  
			if (_.has(payloadData, "heading") && payloadData.heading !== "") objToSave.heading = payload.heading;  
			let create = await Services.BaseService.saveData(Model.Detail,objToSave)
			if (create) {
				return message.success.ADDED;
			}
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	getDetail: async (payloadData) => {
		try {
			const schema = Joi.object().keys({
				limit: Joi.number().optional(),
				skip: Joi.number().optional(),
				sortBy: Joi.string().optional(),
				orderBy: Joi.string().optional(),
				search: Joi.string().optional().allow(""),
			});
			let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
			let result = {};
			result.data = await Services.BaseService.getListing(Model.Detail,payload, parseInt(payload.limit, 10) || 10, parseInt(payload.skip, 10) || 0);;
			
			return result;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	saveDetailFeature: async (payloadData,req,res) => {
		try {
			const schema = Joi.object().keys({
				detailId: Joi.string().optional(),
				feature:Joi.string().optional(),
			});
			let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
			let objToSave = {};

			if (_.has(payloadData, "detailId") && payloadData.detailId !== "") objToSave.detailId = payload.detailId;  
			if (_.has(payloadData, "feature") && payloadData.feature !== "") objToSave.feature = payload.feature;  
			let create = await Services.BaseService.saveData(Model.DetailFeature,objToSave)
			if (create) {
				return message.success.ADDED;
			}
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	getDetailFeature: async (payloadData) => {
		try {
			const schema = Joi.object().keys({
				limit: Joi.number().optional(),
				skip: Joi.number().optional(),
				sortBy: Joi.string().optional(),
				orderBy: Joi.string().optional(),
				search: Joi.string().optional().allow(""),
			});
			let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
			let result = {};
			result.data = await Services.BaseService.getListing(Model.DetailFeature,payload, parseInt(payload.limit, 10) || 10, parseInt(payload.skip, 10) || 0);;
			
			return result;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
};

