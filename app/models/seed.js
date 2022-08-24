// const mongoose = require('mongoose')
// const Lyric = require('./lyric')
// const db = require('../../config/db')




// const seedLyrics = [

//     {
//         artist: "Kendrick Lamar", title: "HUMBLE", img: ". /images/IMG-0715.jpg",
//         lyrics: `Wicked or weakness
// You gotta see this
// Waaaaay yeah yeah

// Nobody pray for me
// If you re not there for me
// Waaaaay yeah yeah

// Ayy I remember syrup sandwiches and crime allowances
// Finesse a nigga with some counterfeits
// But now Im countin this
// Parmesan where my accountant lives
// In fact Im downin this
// DUSSÉ with my boo bae tastes like Kool Aid for the analysts
// Girl I can buy yo ass the world with my paystub
// Ooh that pussy good wont you sit it on my taste bloods?
// I get way too petty once you let me do the extras
// Pull up on your block then break it down: we playin Tetris
// AM to the PM PM to the AM funk
// Piss out your per diem you just gotta hate em funk
// If I quit your BM I still ride Mercedes funk
// If I quit this season I still be the greatest funk
// My left stroke just went viral
// Right stroke put lil baby in a spiral
// Soprano C we like to keep it on a high note
// Its levels to it you and I know bitch be humble

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
// Hol up hol up hol up hol up

// Who dat nigga thinkin that he frontin on Man-Man? Man-Man
// Get the fuck off my stage Im the Sandman Sandman
// Get the fuck off my dick that aint right
// I make a play fuckin up your whole life
// Im so fuckin sick and tired of the Photoshop
// Show me somethin natural like afro on Richard Pryor
// Show me somethin natural like ass with some stretch marks
// Still will take you down right on your mamas couch in Polo socks ayy
// This shit way too crazy ayy you do not amaze me ayy
// I blew cool from AC ayy Obama just paged me ayy
// I dont fabricate it ayy most of yall be fakin ayy
// I stay modest bout it ayy she elaborate it ayy
// This that Grey Poupon that Evian that TED Talk ayy
// Watch my soul speak you let the meds talk ayy
// If I kill a nigga it wont be the alcohol ayy
// Im the realest nigga after all bitch be humble

// Hol up bitch sit down
// Hol up lil bitch hol up lil bitch be humble
// Hol up bitch sit down
// Sit down hol up lil bitch
// Be humble bitch
// Hol up hol uphol up hol up bitch sit down
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


//     }




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