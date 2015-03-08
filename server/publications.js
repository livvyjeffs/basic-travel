  Meteor.publish('theItinerary',function(){
  	var currentUserId = this.userId;
  	// if(currentUserId === 'P5x3cNHy7AuLwdG6J'){
  		if(this.userId){

  			var user = Meteor.users.findOne(this.userId);
  			if(user.emails[0].address === 'jeffers.olivia@gmail.com'){
  				      //un: jeffers.olivia@gmail.com
      //pw: ojeffers7
      return ItineraryList.find();
  }

}
});