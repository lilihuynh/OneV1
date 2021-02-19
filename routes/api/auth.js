// const router = require("express").Router();
// const express = require("express");
// const mongoose =require ("mongoose");
// const User = mongoose.model("User")

// //signup routes
// router.post("/signup",(req,res) =>{
//   const {username,email,password} = req.body
//   //if user does not enter username, email and password
//   if (!username || !email || !password){
//       res.json({error: "Please complete all fields"})

//   }
//   User.findOne({email:email})
//   .then((excistedUser) =>{
//       if(excistedUser){
//           return res.status(422).json({error:"Email is associated with an existed User"})
//       }
//       const user = new User({
//           username,
//           password,
//           email
//       })

//       user.save()
//       .then(user =>{
//           res.json({message:"successfuly registered"})
//       })
//       .catch (err =>{
//           console.log(err)
//       })
//   })
//   .catch(err =>{
//       console.log(err)
//   })
// })

// //signin routes
// router.post("/signin",(req,res) =>{
//     const {email, password} =req.body
//     if(!email || !password){
//         res.status(422).json({error:"please complete all fields"})
//     }
//     User.findOne({email:email})
//     .then(savedUser =>{
//         if(!savedUser){
//             return res.status(422).json({error:"Invalid"})
//         }else{
//         res.json({message:"successfully signed in"})
//         }
//     }).catch(err =>{
//         console.log(err)
//     })
// })

// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

// module.exports = router;

