  Meteor.publish('theItinerary',function(){
  	var currentUserId = this.userId;
  	if(currentUserId === 'P5x3cNHy7AuLwdG6J'){
      //un: jeffers.olivia@gmail.com
      //pw: ojeffers7
      return ItineraryList.find();
  }
});