ItineraryList = new Meteor.Collection('itineraries');

Router.map(function(){
  this.route('home', {path: '/'});
  this.route('additionalInfo');
  this.route('confirmation');
});

if (Meteor.isClient) {

  Meteor.subscribe('theItineraries');

  Template.itineraries.helpers({
    'itinerary': function(){
      var currentUserId = Meteor.userId();
      return ItineraryList.find();
    }
  });

  Template.formFirst.helpers({

  });

  Template.formFirst.events({
    'submit form': function(event){
      event.preventDefault();
      Router.go('additionalInfo');
      // var currentUserId = Meteor.userId();
      ItineraryList.insert({
        when: event.target.itinWhen.value,
        length: event.target.itinLength.value,
        budget: event.target.itinBudget.value
        // createdBy: currentUserId
      });
    }
  });

  Template.additionalInfo.events({
    'submit form': function(event){
      event.preventDefault();
      Router.go('confirmation');
      // var currentUserId = Meteor.userId();
      ItineraryList.insert({
        name: event.target.itinName.value,
        email: event.target.itinEmail.value,
        description: event.target.itinDescription.value
        // createdBy: currentUserId
      });
    }
  });

}

if (Meteor.isServer) {
  Meteor.publish('theItineraries',function(){
    return PlayersList.find(); //remove this before deploy
  });
  Meteor.methods({
    'insertItineraryFirst': function(){
      PlayersList.insert({
        when: playerNameVar,
        length: 0,
        budget: Session.get('currentUserId')
      });
      Session.set('itinID',this._id);
      console.log(Session.get('itinID'));
    },
    'insertItinerarySecond': function(itinID){
      var currentUserId = Meteor.userId();
      PlayersList.insert({
        name: playerNameVar,
        email: 0,
        description: currentUserId
      });
    }
  });
}
