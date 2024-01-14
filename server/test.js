// //Object
// const object = {
//     name: "Rajneesh",
//     age: 21,
//     favourites: {
//         shows: ["The Boys", ["Secret Invasion", "Loki", "Miss Marvel"]],
//         movies: ["Avengers Infinity War", "Avengers Endgame",],
//         food: ["Rajma Chawal", "Chhole Bhature "],
//         electronics: {
//             phone: "Moto g71 5g",
//             tablet: "iPad 8th Gen.",
//             laptop: "ASUS TUF F15"
//         }
//     }
// };

// //Object Destructuring
// const { name: Name, age: Age, favourites: {
//     shows: [First, [Second, Third, Fourth]],// Array destructuring
//     movies: Movies,
//     food: Food, electronics: Electronics // electronics re-named/re-assigned to Electronics
// } } = object;
// const { phone, tablet, laptop } = Electronics; //Electronics destructuring
// console.log(First, Second, Third, Fourth, Movies, Food, phone, tablet, laptop);
// object.name = "Mishra";
// console.log(object.name);
// //Array Destructuring
// const arr = [1, 2, 3];
// const [one, three, two] = arr;
// //Re-assignmemnt not possible because arr is a reference variable defined as const
// //hence new memory address can't be allocated to arr as when we define arr=[3,4,6] altogether,
// //a new array at new memory address in heap is created which will not be allowed.
// arr[1] = 10; console.log(arr); //-> This is possible because we have not changed the reference 
// //variable's address.
// console.log(arr);
// //let allows us to change the address of reference variable.
// /*
//     CRUD -> Create, Read, Update and Delete commands. 
//     [ All the args are objects(query, update, options)]
//     0.0 : use dbName;    
//     0.1 : db.createCollection("collectionName");
//     {
//         acknowledged : true/false,
//         deletedCount/ObjectId/Something : Number/ObjectId/Something
//     } -> returned by deleteOne, deleteMany, insertOne, insertMany, updateOne
//     updateMany
//     Create :-
//     1.1: db.newCollection.insertOne({
//         name: "John", age: 30, city: "New York" 
//     })

//     1.2: db.newCollection.insertMany([
//     { name: "John", age: 30, city: "New York" },
//     { name: "Alice", age: 25, city: "San Francisco" },
//     { name: "Bob", age: 35, city: "Los Angeles" }
//     ])

//     Read :-
//     2.1: db.newCollection.find({}) -> To find all documents.

//     2.2: db.newCollection.find(query) -> To find all documents 
//     satisfying the query.

//     2.3: db.newCollection.findOne(query) -> To find the first
//     document satisfying the query
// Eg.: db.newCollection.findOne({_id : ObjectId("659d1997877a40c75e8548b4")})

//     2.4: db.newCollection.findOneAndUpdate(query, update, options);
//     query = {name : "Rajneesh Mishra"}
//     update = {$set: {age : 35}}, $set -> atomic operator
//     options = {new : true} -> returns the updated document

//     2.5: db.newCollection.findOneAndReplace(query, replacement, options)
//     query = {_id : ObjectId("8r7fhuirfh8er9uf")}
//     replacement = {name : "Sachin Mishra", age : 21, city: "Kota"}
//     options = {new : true} -> returns the replaced document

//     Update:-
//         3.1: db.newCollection.updateOne(query, update, options) -> Find the 
//         first document which satisfies the query
//          query = {_id :3}
//         update = {$set: {name : "Sachin", age : 55}}, $set -> atomic operator
//         options = {upsert : true, returnDocument : "after"} -> if _id = 3 matches with a documemnt
//         inside the collection then update will be applied or else
//         a new document with _id =3, name = Sachin and age = 55 will be created.
//         returnDocument : "after" -> returns updated document, 
//         "before" -> returns previous un-updated document, default value.

//         3.2: db.newCollection.updateMany(
//         { status: "Incomplete" },  // Query criteria
//         { $set: { status: "Complete" } },  // Update operation
//         { upsert: true }  // Optional: Upsert option to insert if no match is found
//         );

//         3.3: db.newCollection.findOneAndUpdate(filter, update, options);
//         filter = {name : "Rajneesh Mishra"}
//         update = {$set: {age : 35}}, $set -> atomic operator
//         options = {new : true} -> returns the updated document

//         Delete :-

//         4.1: db.newCollection.findOneAndDelete(query/filter, options)
//         returns the deleted document

//         4.2: db.newCollection.deleteOne(filter, options)
//         returns : {
//             acknowledged : true, -> true if the instruction runs successfully
//             deletedCount : 1 -> 1 if deleted, 0 if not deleted/not found
//         } 

//         4.3: db.newCollection.deleteMany({"name" : "Rajneesh Mishra"});
//         returns : {
//          acknowledged: true,
//         deletedCount: 2
//         }

//         db.newCollection.deleteMany({name : {$in : ["Sachin Mishra", "Alice"]}});
//         {
//         acknowledged: true,
//         deletedCount: 2
//         } -> deletes multiple document with different names(property) here.
//  */

// async function exampleAsyncFunction() {
//     try {
//       console.log('Start of try block');

//       // Simulate an asynchronous operation
//       await new Promise((resolve) => {setTimeout(resolve, 2000)});

//       console.log('End of try block');
//     } catch (error) {
//       console.error('Caught an error:', error);
//     }

//     console.log('Outside of try-catch block');
//   }

//   // Call the async function
//   exampleAsyncFunction();
//   console.log('Outside of the function call');
