const CourseModel = require('../models/Course');					

module.exports = {
	getById: function(req, res, next) {
		CourseModel.findById(req.params.id, function(err, response){
			if (err) {
				next(err);
			} else {
				res.json(response);
			}
		});
	},

	getAll: function(req, res, next) {
		CourseModel.find({}, function(err, response){
			if (err){
				next(err);
			} else{
				res.json(response);
			}
		});
	},

	async updateById(req, res, next) {
		CourseModel.findByIdAndUpdate(req.params.id, { ...req.body }, function(err, response){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "course updated successfully!!!", id: response.id});
			}
		});
	},

	deleteById(req, res, next) {
		CourseModel.findByIdAndRemove(req.params.id, function(err, response){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "course deleted successfully!!!", data: response});
			}
		});
	},

	async create(req, res, next) {
		console.log(req )
		CourseModel.create({ name: req.body.name }, function (err, response) {
			if (err) 
				next(err);
			else
				res.json({status: "success", message: "course added successfully!!!", data: response});
		});
	}

}