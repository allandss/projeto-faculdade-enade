const QuestionModel = require('../models/Question');					

module.exports = {
	getById: function(req, res, next) {
		QuestionModel.findById(req.params.id, function(err, response){
			if (err) {
				next(err);
			} else {
				res.json(response);
			}
		});
	},

	getAll: function(req, res, next) {
		QuestionModel.find({}, function(err, response){
			let questionsList = [];
			if (err){
				next(err);
			} else{
				for (let item of response) {
					item.file = null
					questionsList.push(item);
				}
				res.json(questionsList);
			} 
		});
	},

	async updateById(req, res, next) {
		QuestionModel.findByIdAndUpdate(req.params.id,{...req.body }, function(err, response){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "question updated successfully!!!", id: response.id});
			}
		});
	},

	deleteById(req, res, next) {
		QuestionModel.findByIdAndRemove(req.params.id, function(err, response){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "question deleted successfully!!!", data: response});
			}
		});
	},

	async create(req, res, next) {

		QuestionModel.create({...req.body}, function (err, response) {
			if (err) 
				next(err);
			else
				res.json({status: "success", message: "question added successfully!!!", data: response});
		});
	},

	getByCourse: function(req, res, next) {
		console.log(req.params.id);
		QuestionModel.find({'course': req.params.id}, function(err, response){
			if (err){
				next(err);
			} else{
				res.json(response);
			}
		});
	},
	
	getBySubject: function(req, res, next) {
		console.log(req.params.id);
		QuestionModel.find({'subject': req.params.id}, function(err, response){
			if (err){
				next(err);
			} else{
				res.json(response);
			}
		});
	},
}