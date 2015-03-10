Meteor.subscribe('theItinerary');

Template.itineraries.helpers({
  'itinerary': function(){
    var currentUserId = Meteor.userId();
    return ItineraryList.find();
  }
});

Template.admin.helpers({
  'isAdmin': function(){
    var user = Meteor.users.findOne(Meteor.userId());
    if(user){
     if(user.emails[0].address==='jeffers.olivia@gmail.com'){
       return true;
     }else{
      return false;
    }
  }

}
});

Template.itineraries.events({
 "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      console.log('clicked')
      Meteor.call("setChecked", this._id, ! this.checked);
    },
    "click .delete": function () {
      Meteor.call("deleteTask", this._id);
    }
  });

Template.mainForm.events({
  'submit form': function(event){
    event.preventDefault();
    Router.go('secondaryForm');
    Session.set('itinWhen',event.target.itinWhen.value);
    Session.set('itinDuration',event.target.itinDuration.value);
    Session.set('itinBudget',event.target.itinBudget.value);
  },
  'click .smallForm': function(event){
    event.preventDefault();
    alert('smallForm')
    $('.cover').show();
    $('.mainForm').hide();
  }
});

Template.smallForm.events({
  'click .close': function(event){
    alert('close')
    $('.cover').hide();
    $('.mainForm').show();
  }
});

Template.secondaryForm.events({
  'submit form': function(event){
    event.preventDefault();

    var itinerary = new Object();

    itinerary.when = Session.get('itinWhen');
    itinerary.duration = Session.get('itinDuration');
    itinerary.budget = Session.get('itinBudget');
    itinerary.name = event.target.itinName.value;
    itinerary.email = event.target.itinEmail.value;
    itinerary.description = event.target.itinDescription.value;

    Meteor.call('createNewItinerary',itinerary, function(err, data){
     if(err){
       console.log(err);
     }
     Router.go('confirmation');
   });

  }
});

Template.smallForm.events({
  'submit form': function(event){
    event.preventDefault();

    alert('clicked submit')

    var itinerary = new Object();

    itinerary.when = event.target.itinWhen.value;
    itinerary.duration = event.target.itinDuration.value;
    itinerary.budget = event.target.itinBudget.value;
    itinerary.name = event.target.itinName.value;
    itinerary.email = event.target.itinEmail.value;
    itinerary.description = event.target.itinDescription.value;

    Meteor.call('createNewItinerary',itinerary, function(err, data){
     if(err){
       console.log(err);
     }
     Router.go('confirmation');
   });

  }
});

Template.mainForm.rendered=function() {
  $('#my-main-datepicker').datepicker();
}

Template.smallForm.rendered=function() {
  $('#my-small-datepicker').datepicker();
}