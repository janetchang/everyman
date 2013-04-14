if (Meteor.isServer) {
  self= this;
  clinics = new Meteor.Collection("clinics");
  users = new Meteor.Collection("user");
  Meteor.startup(function () {
    
    if (Org.find().count() === 0) {
      
      var names = ["Jack Chi",
                   "Zak Zibrat",
                   "Marie Curie",
                   "Carl Friedrich Gauss",
                   "Nikola Tesla",
                   "Claude Shannon",
                   "Ronaldo Barbachano"];
      for (var i = 0; i < names.length; i++)
        Org.insert({name: names[i], score: Math.floor(Random.fraction()*10)*5});
    }
  });
}