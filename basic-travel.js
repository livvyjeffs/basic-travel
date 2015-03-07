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
      Session.set('itinLength',event.target.itinLength.value);
      Session.set('itinBudget',event.target.itinBudget.value);
    }
  });

  Template.additionalInfo.events({
    'submit form': function(event){
      event.preventDefault();
      var when = Session.get('itinWhen');
      var length = Session.get('itinLength');
      var budget = Session.get('itinBudget');
      var name = event.target.itinName.value;
      var email = event.target.itinEmail.value;
      var description = event.target.itinDescription.value;
      Meteor.call('createNewItinerary',when,length,budget,name,email,description);
    
      Router.go('confirmation'); 
    }
  });

}

if (Meteor.isServer) {

  Meteor.publish('theItinerary',function(){
    return ItineraryList.find();
  });

  Meteor.methods({
    'createNewItinerary': function(when,length,budget,name,email,description){
      var userId = Meteor.userId();
      ItineraryList.insert({
        when: when,
        length: length,
        budget: budget,
        name: name,
        email: email,
        description: description,
        createdBy: userId
      });

    }

  });

}
