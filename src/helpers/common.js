var _ = require("underscore");
const crypto = require("crypto");
const algorithm = "aes-256-cbc";
var randomString = require("randomstring");
const bcrypt = require("bcryptjs");
const SaltSounds = 10;
module.exports = {
	randomIntegerOtp: function () {
		if(process.env.NODE_ENV == "production")
			return Math.floor(1000 + Math.random() * 9000);
			
		return 1111;
	},
	generateRandomString: (size, type, capitalization) => {
		if (capitalization) {
			return randomString.generate({ length: size, charSet: type, capitalization: capitalization });
		} else {
			return randomString.generate({ length: size, charSet: type });
		}
	},
	verifyJoiSchema: async (data, schema) => {
		const validSchema = await schema.validate(data);
		if ((validSchema) && (validSchema.error)) {
			throw validSchema.error;
		} else {
			return validSchema.value;
		}
	},
	generateRandomNumbers: async (numberLength, excludeList) => {
		var arrayList = [];
		excludeList = excludeList || [];
		var minString = "0";
		var maxString = "9";
		for (var i = 1; i < numberLength; i++) {
			minString = minString + "0";
			maxString = maxString + "9";
		}
		var minNumber = parseInt(minString, 10);
		var maxNumber = parseInt(maxString, 10);
		for (i = minNumber; i < maxNumber; i++) {
			var digitToCheck = i.toString();
			if (digitToCheck.length < numberLength) {
				var diff = numberLength - digitToCheck.length;
				var zeros = "";
				for (var j = 0; j < diff; j++) {
					zeros += "0";
				}
				digitToCheck = zeros + digitToCheck;
			}
			if (digitToCheck < 1000)
				if (excludeList.indexOf(digitToCheck) == -1) {
					arrayList.push(digitToCheck);
				}
		}
		if (arrayList.length > 0) {
			arrayList = _.shuffle(arrayList);
			return arrayList[0];
		} else {
			return false;
		}
	},
	generateNewPassword: async (text) => {
		var hash = await bcrypt.hashSync(text, SaltSounds);
		return hash;
	},
	comparePassword: async (text, hash) => {
		var hashCode = await bcrypt.compare(text, hash);
		return hashCode;
	},
	decrypt: async (secretKey) => {
		const decipher = crypto.createDecipher(algorithm, secretKey);
		let dec = decipher.update(secretKey, "hex", "utf8 ");
		dec += decipher.final("utf8");
		return dec;
	},
	encrypt: async(secretKey) => {
		console.log("secretKey",secretKey);
		const cipher = crypto.createCipher(algorithm, secretKey);
		let encrypted = cipher.update(secretKey, "utf8", "hex");
		encrypted += cipher.final("hex");
		return encrypted;
	},
	fileUpload: async(file) =>{
		let file_name_string = file.name;
		var file_name_array = file_name_string.split(".");
		var file_ext = file_name_array[file_name_array.length - 1];
		var letters = "ABCDE1234567890FGHJK1234567890MNPQRSTUXY";
		var result = "";
		while (result.length < 28) {
		  var rand_int = Math.floor(Math.random() * 19 + 1);
		  var rand_chr = letters[rand_int];
		  if (result.substr(-1, 1) != rand_chr) result += rand_chr;
		}
		var resultExt = `${result}.${file_ext}`;
		await file.mv(
		  `src/public/images/${result}.${file_ext}`,
		  function (err) {
			if (err) {
			  throw err;
			}
		  }
		);
		return resultExt;
	  }
};