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