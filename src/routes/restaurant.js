var express = require("express");
var router = express.Router();
const Controllers = require("../controller");
const sendResponse = require("../helpers/response");

router.post("/saveRestaurant",  (req, res) => {
	return sendResponse.executeMethod(Controllers.RestaurantController.saveRestaurant, req.body, req, res);
});

router.get("/getListRestaurant",  (req, res) => {
	let payload = req.query;
	if ((payload.skip) && (payload.limit) && (payload.skip > 0)) {
		payload.skip = (payload.skip - 1) * payload.limit;
	}
	return sendResponse.executeMethod(Controllers.RestaurantController.getListRestaurant, payload, req, res);
});


router.post("/saveRestaurantType",  (req, res) => {
	return sendResponse.executeMethod(Controllers.RestaurantController.saveRestaurantType, req.body, req, res);
});

router.get("/getListRestaurantType",  (req, res) => {
	let payload = req.query;
	if ((payload.skip) && (payload.limit) && (payload.skip > 0)) {
		payload.skip = (payload.skip - 1) * payload.limit;
	}
	return sendResponse.executeMethod(Controllers.RestaurantController.getListRestaurantType, payload, req, res);
});


router.post("/saveTags",  (req, res) => {
	return sendResponse.executeMethod(Controllers.RestaurantController.saveTags, req.body, req, res);
});

router.get("/getTags",  (req, res) => {
	let payload = req.query;
	if ((payload.skip) && (payload.limit) && (payload.skip > 0)) {
		payload.skip = (payload.skip - 1) * payload.limit;
	}
	return sendResponse.executeMethod(Controllers.RestaurantController.getTags, payload, req, res);
});

router.post("/saveDetail",  (req, res) => {
	return sendResponse.executeMethod(Controllers.RestaurantController.saveDetail, req.body, req, res);
});

router.get("/getDetail",  (req, res) => {
	let payload = req.query;
	if ((payload.skip) && (payload.limit) && (payload.skip > 0)) {
		payload.skip = (payload.skip - 1) * payload.limit;
	}
	return sendResponse.executeMethod(Controllers.RestaurantController.getDetail, payload, req, res);
});

router.post("/saveDetailFeature",  (req, res) => {
	return sendResponse.executeMethod(Controllers.RestaurantController.saveDetailFeature, req.body, req, res);
});

router.get("/getDetailFeature",  (req, res) => {
	let payload = req.query;
	if ((payload.skip) && (payload.limit) && (payload.skip > 0)) {
		payload.skip = (payload.skip - 1) * payload.limit;
	}
	return sendResponse.executeMethod(Controllers.RestaurantController.getDetailFeature, payload, req, res);
});

module.exports = router;