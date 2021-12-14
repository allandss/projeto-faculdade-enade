const SubjectModel = require('../models/Subject');					

module.exports = {
	getById: function(req, res, next) {
		SubjectModel.findById(req.params.id, function(err, response){
			if (err) {
				next(err);
			} else {
				res.json(response);
			}
		});
	},

	getAll: function(req, res, next) {
		SubjectModel.find({}, function(err, response){
			if (err){
				next(err);
			} else{
				res.json(response);
			}
		});
	},

	async updateById(req, res, next) {
		SubjectModel.findByIdAndUpdate(req.params.id, { ...req.body }, function(err, response){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "subject updated successfully!!!", id: response.id});
			}
		});
	},

	deleteById(req, res, next) {
		SubjectModel.findByIdAndRemove(req.params.id, function(err, response){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "subject deleted successfully!!!", data: response});
			}
		});
	},

	async create(req, res, next) {

		SubjectModel.create({ ...req.body }, function (err, response) {
			if (err) 
				next(err);
			else
				res.json({status: "success", message: "subject added successfully!!!", data: response});
		});
	}

}