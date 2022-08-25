// const mongoose = require('mongoose')
// const Lyric = require('./lyric')
// const db = require('../../config/db')




// const seedLyrics = [

//     {
//         artist: "Kendrick Lamar", title: "HUMBLE", img: ". /images/IMG-0715.jpg",
//         lyrics: `Wicked or weakness
// Hol up bitch sit down
// Hol up lil bitch hol up lil bitch be humble
// Hol up bitch sit down
// Sit down hol up lil bitch
// Be humble bitch
// Hol up hol up hol up hol up bitch sit down
// Lil bitch hol up lil bitch be humble
// Hol up bitch sit down
// Hol up hol up hol up hol up be humble
// Hol up hol up hol up hol up lil bitch sit down
// Hol up lil bitch be humble
// Hol up bitch sit down
// Hol up sit down lil bitch
// Sit down lil bitch be humble
// Hol up hol up hol up hol up lil bitch bitch sit down
// Hol up bitch be humble
// Hol up bitch sit down
// Hol up hol up hol up hol up`
// }, {
// artist: "Nicki Minaj", title: "Super Freaky Girl", img: ". /images/IMG-0721.jpg",
// lyrics: `I can lick it, I can ride it
// While you slippin' and slidin'
// I can do all them little tricks and keep the dick up inside it
// You can smack it, you can grip it
// You can go down and kiss it
// And every time he leave me 'lone, he always tell me he miss it
// He want a F-R-EEEEE-A-K
// F-R-EEEEE-A-K, A-K, A-K, A-K
// EEEEE-A-K
// F-R-EEEEE-A-K`}




// ]

// mongoose.connect(db, {
//     useNewUrlParser: true
// })
//     .then(() => {
//         // first we remove all of the pets
//         // here we can add something to make sure we only delete pets without an owner
//         Lyric.deleteMany({ owner: null })
//             .then(deletedLyrics => {
//                 console.log('deletedLyrics', deletedLyrics)
//                 // the next step is to use our startPets array to create our seeded pets
//                 Lyric.create(seedLyrics)
//                     .then(newLyrics => {
//                         console.log('the new Lyrics', newLyrics)
//                         mongoose.connection.close()
//                     })
//                     .catch(error => {
//                         console.log(error)
//                         mongoose.connection.close()
//                     })
//             })
//             .catch(error => {
//                 console.log(error)
//                 mongoose.connection.close()
//             })
//     })
//     .catch(error => {
//         console.log(error)
//         mongoose.connection.close()
//     })





