ItineraryList = new Meteor.Collection('itineraries');

Router.map(function(){
  this.route('home', {path: '/'});
  this.route('additionalInfo');
  this.route('confirmation');
});

if (Meteor.isClient) {

  Meteor.subscribe('theItinerary');

  Template.itineraries.helpers({
    'itinerary': function(){
      var currentUserId = Meteor.userId();
      return ItineraryList.find();
    }
  });

  Template.formFirst.events({
    'submit form': function(event){
      event.preventDefault();
      Router.go('additionalInfo');
      Session.set('itinWhen',event.target.itinWhen.value);
      Session.set('itinDuration',event.target.itinDuration.value);
      Session.set('itinBudget',event.target.itinBudget.value);
    }
  });

  Template.additionalInfo.events({
    'submit form': function(event){
      event.preventDefault();
      
      var itinerary = new Object();

      itinerary.when = Session.get('itinWhen');
      itinerary.duration = Session.get('itinDuration');
      itinerary.budget = Session.get('itinBudget');
      itinerary.name = event.target.itinName.value;
      itinerary.email = event.target.itinEmail.value;
      itinerary.description = event.target.itinDescription.value;

      Meteor.call('createNewItinerary',itinerary);

      Router.go('confirmation'); 
    }
  });

}

if (Meteor.isServer) {

  Meteor.publish('theItinerary',function(){
    var currentUserId = this.userId;
    if(currentUserId === 's7NXe9uYCFEngX5ke'){
      //un: jeffers.olivia@gmail.com
      //pw: ojeffers7
      return ItineraryList.find();
    }
  });

  Meteor.methods({
    'createNewItinerary': function(itinerary){
      var userId = Meteor.userId();
      ItineraryList.insert({
        when: itinerary.when,
        duration: itinerary.duration,
        budget: itinerary.budget,
        name: itinerary.name,
        email: itinerary.email,
        description: itinerary.description,
        createdBy: itinerary.userId
      });

    }

  });

}
