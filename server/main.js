import { Meteor } from 'meteor/meteor';

Meteor.startup(function() {
  // code to run on server at startup
  if (!Documents.findOne()){//no documents yet!
    Documents.insert({title:"my new document"});
    }
  });

 
