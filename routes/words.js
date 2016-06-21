var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('gre', ['words']);

// GET ALL Words
router.get('/', function(request, response){
	console.log("Fetching Words...");
	db.words.find(function(error, docs){
		if(error){
			response.send(error);
		}
		else{
			console.log("Sending Words...");
			response.json(docs);
		}
	})
});

// GET Word
router.get('/:id', function(request, response){
	console.log("Fetching Word...");
	db.words.findOne({_id: mongojs.ObjectId(request.params.id)}, function(error, doc){
		if(error){
			response.send(error);
		}
		else{
			console.log("Sending Word...");
			response.json(doc);
		}
	})
});

// Add Word
router.post('/', function(request, response){
	db.words.insert(request.body, function(error, doc){
		if(error){
			response.send(error);
		}
		else{
			console.log('Adding Word...');
			response.json(doc);
		}
	});
});

// Update Word
router.put('/:id', function(request, response){
	db.words.findAndModify({query: {_id: mongojs.ObjectId(request.params.id)},
		update: {
			$set: {
				word: request.body.word,
				meaning: request.body.meaning
			}
		},
		new: true
	}, function(error, doc){
		if(error){
			response.send(error);
		}
		else{
			console.log('Updating Word...');
			response.json(doc);
		}
	});
});

// Remove Word
router.delete('/:id', function(request, response){
	console.log("Fetching Word...");
	db.words.remove({_id: mongojs.ObjectId(request.params.id)}, function(error, doc){
		if(error){
			response.send(error);
		}
		else{
			console.log("Removing Word...");
			response.json(doc);
		}
	})
});

module.exports = router;
