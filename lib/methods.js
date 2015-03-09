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
        createdBy: itinerary.userId,
        checked: false,
        createdAt: new Date,
        updatedAt: null
      });

    },'setChecked': function (itinId, setChecked) {
      ItineraryList.update(itinId, { $set: { checked: setChecked, updatedAt: new Date} });
    }, 'deleteTask': function(itinId){
      ItineraryList.remove(itinId);
    }
  });

