
Meteor.methods({
  addComment:function(comment){
      console.log("addComment method running")
    if (this.userId){//we have a user
      comment.owner = this.userId;
        return Comments.insert(comment);
    }
    return;
  },

  addDoc:function(){
    var doc;
    if (!this.userId){
      return;  
    }
    else {
      doc = {owner:this.userId, createdOn:new Date(),
        title:"My New Doc"};
        var id = Documents.insert(doc);
        console.log("addDoc Method: got an ID" +id);
        return id;
    }
  },

  updateDocPrivacy:function(doc){
    console.log("updateDocPrivacy - ");
    console.log(doc);
    var realDoc = Documents.findOne({_id:doc._id, owner:this.userId});
    if (realDoc){
      realDoc.isPrivate = doc.isPrivate;
      Documents.update({_id:doc._id}, realDoc);
    }
  },

  addEditingUser:function(docid){
    var doc, user, eusers;
    doc = Documents.findOne({_id:docid});
    if (!doc){return;}//no doc give up
    if (!this.userId){return;}//no logged in user give up
    //now I have a doc and possiby a user
    user = Meteor.user().profile;
    eusers = EditingUsers.findOne({docid:doc._id});
    if (!eusers){
      eusers = {
        docid:doc._id,
        users:{},
        };
      }
    user.lastEdit = new Date();
    eusers.users[this.userId] = user;
    EditingUsers.upsert({_id:eusers._id}, eusers);

  },
});