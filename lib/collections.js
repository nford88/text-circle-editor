EditingUsers = new Mongo.Collection("editingUsers");
Documents = new Mongo.Collection("documents");
Comments = new Mongo.Collection("comments");
Comments.attachSchema(new SimpleSchema({
	title: {
		type: String,
		label:"Title",
		max: 200
	},
	body:{
		type: String,
		label:"Comment",
		max: 1000
	},
	docid:{
		type: String,
	},
}));