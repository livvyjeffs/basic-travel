  Meteor.publish('theItinerary',function(){
  	var currentUserId = this.userId;
  	if(currentUserId === 's7NXe9uYCFEngX5ke'){
      //un: jeffers.olivia@gmail.com
      //pw: ojeffers7
      return ItineraryList.find();
  }
});