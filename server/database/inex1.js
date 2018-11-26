var ExpressCassandra = require("express-cassandra");
var models = ExpressCassandra.createClient({
  clientOptions: {
    contactPoints: ["127.0.0.1"], //<<<<your second ip
    protocolOptions: { port: 9042 },
    keyspace: "airbnb",
    queryOptions: { consistency: ExpressCassandra.consistencies.one }
  },
  ormOptions: {
    defaultReplicationStrategy: {
      class: "SimpleStrategy",
      replication_factor: 1
    },
    migration: "alter",
    createKeyspace: true,
    createTable: true,
    udts: {
      review: {
        author: "text",
        image: "text",
        date: "text",
        body: "text",
        flagged: "text"
      },
      ratings: {
        name: "text",
        accuracy: "int",
        communication: "int",
        cleanliness: "int",
        location: "int",
        check_in: "int",
        value: "int",
        reviews: "set<frozen<review>>"
      }
    }
  }
});

var Ratings = models.loadSchema("Ratings1", {
  fields: {
    id: "int",
    ratings: {
      type: "frozen",
      typeDef: "<ratings>"
    }
  },
  key: ["id"]
});

Ratings.syncDB(function(err, result) {
  if (err) throw err;
  // result == true if any database schema was updated
  // result == false if no schema change was detected in your models
  console.log("synced!");
});

module.exports = Ratings;

// MyModel or models.instance.Person can now be used as the model instance

// sync the schema definition with the cassandra database table
// if the schema has not changed, the callback will fire immediately
// otherwise express-cassandra will try to migrate the schema and fire the callback afterwards
