const mongoose = require('mongoose')
const Lyric = require('./lyric')
const db = require('../../config/db')




const seedLyrics = [

    {
        artist: "Kendrick Lamar", title: "HUMBLE", img: ". /images/IMG-0715.jpg",
        lyrics: `Wicked or weakness
Hol up bitch sit down
Hol up lil bitch hol up lil bitch be humble
Hol up bitch sit down
Sit down hol up lil bitch
Be humble bitch
Hol up hol up hol up hol up bitch sit down
Lil bitch hol up lil bitch be humble
Hol up bitch sit down
Hol up hol up hol up hol up be humble
Hol up hol up hol up hol up lil bitch sit down
Hol up lil bitch be humble
Hol up bitch sit down
Hol up sit down lil bitch
Sit down lil bitch be humble
Hol up hol up hol up hol up lil bitch bitch sit down
Hol up bitch be humble
Hol up bitch sit down
Hol up hol up hol up hol up`
}, {
artist: "Nicki Minaj", title: "Super Freaky Girl", img: ". /images/IMG-0721.jpg",
lyrics: `I can lick it, I can ride it
While you slippin' and slidin'
I can do all them little tricks and keep the dick up inside it
You can smack it, you can grip it
You can go down and kiss it
And every time he leave me 'lone, he always tell me he miss it
He want a F-R-EEEEE-A-K
F-R-EEEEE-A-K, A-K, A-K, A-K
EEEEE-A-K
F-R-EEEEE-A-K`},

// {artist: "DJ Khaled feat. Fridayy, Rick Ross, & Lil Wayne", title: "GOD DID", img: ". /images/IMG-0721.jpg",
// lyrics:`[Pre-Chorus: Fridayy & Rick Ross]
// They wanted us down, ooh-woah
// But look at us now, oh
// They counted us out (Time to say a prayer, M-M-M—)
// They didn't think that we would make it, oh (May we bow our heads)
// They didn't believe in us, oh (Huh)

// [Chorus: Fridayy & Rick Ross]
// But I know God did, God did (Oh, yes, He did)
// Oh, God did (Oh-oh, Khaled)
// Oh, yes, God did (Oh-oh, Khaled)
// Oh, God did (God is great)
// But I know God did`},

// { artist: "Pink Venom", title: "BLACKPINK", img: ". /images/IMG-0721.jpg",
// lyrics:`This that pink venom
// This that pink venom
// This that pink venom
// Get 'em, get 'em, get 'em
// Straight to ya dome like whoa whoa whoa
// Straight to ya dome like ah ah ah

// Taste that pink venom
// Taste that pink venom
// Taste that pink venom
// Get 'em, get 'em, get 'em
// Straight to ya dome like whoa whoa whoa
// Straight to ya dome like ah ah ah` },
// {artist: "CORPSE & Scarlxrd", title: "Misa Misa!", img: ". /images/IMG-0721.jpg",
//  lyrics:`[Chorus: CORPSE & Scarlxrd]
//  Look like Misa Misa, but she bite like Dimitresc' (Okay)
//  My bitch's bitch gon' bring her bitch, that shit a triple threat (CORPSE!)
//  Me and Scar kick all the doors in, come in steppin' on some necks (What?)
//  You tried to snake your fuckin' brothers, pussy, you get no respect, ooh
 
//  `},
//  {artist: "Lil Tjay", title: "Beat The Odds", img: ". /images/IMG-0721.jpg",
//  lyrics:`[Chorus]
//  Grateful for the shit I got 'cause I come from a hard life
//  Demons on my mental, saw some shit I wanna archive
//  Feds lookin' out tryna bring a nigga down
//  Just thinkin' 'bout the possibility, I frown
//  Far out on that water, Father, don't let me drown
//  I can hear my grandma sayin', "Don't let me down"
//  People wanna kill me, always keep my gun 'round
//  Pray I squeeze first, I can't lose the millies I found`},
//  {artist: "Ghost", title: "Mary on a Cross", img: ". /images/IMG-0726.jpg",
//  lyrics:`[Pre-Chorus: Papa Nihil]
//  You go down just like Holy Mary, Mary on a, Mary on a cross
//  Not just another bloody Mary, Mary on a, Mary on a...
 
//  [Chorus: Papa Nihil]
//  You go down just like Holy Mary, Mary on a, Mary on a cross
//  Your beauty never ever scared me, Mary on a, Mary on a cross
//  If you choose to run away with me, I will tickle you internally
//  And I see nothing wrong with that`},
//  {artist: "Kate Bush", title: "Running Up That Hill (A Deal with God)", img: ". /images/IMG-0721.jpg",
//  lyrics:`[Pre-Chorus]
//  You
//  It's you and me
 
//  [Chorus]
//  And if I only could
//  I'd make a deal with God
//  And I'd get him to swap our places
//  Be runnin' up that road
//  Be runnin' up that hill
//  Be runnin' up that buildin'
//  Say, if I only could, oh`},
//  {artist: "DJ Khaled Juice WRLD", title: "Juice WRLD DID", img: ". /images/IMG-0721.jpg",
//  lyrics:`[Intro: DJ Khaled & Juice WRLD]
//  We The Best Music
//  They ain't believe in us
//  Juice WRLD did (We, nigga, haha)
//  DJ Khaled
 
//  [Chorus: Juice WRLD]
//  DJ Khaled with them straps, I got another one, uh-huh (On God)
//  DJ Khaled, a hundred racks, I made another one, uh-huh (On God)
//  DJ Khaled with the tats, I got another one, uh-huh (On God)
//  DJ Khaled, we the best, bitch, I'm number one, uh-huh (Let's go, let's go, let's go, let's go, let's go)
//  Bitch, I'm rookie of the year, ain't no runnin' u-u-up (On God)
//  We ain't runnin' away from shit, we the ones runnin' u-u-up (That's on God)
//  No Limit gang the only gang, ain't no other one (Nigga, that's on God)
//  I'm gon' bang what I bang, ain't no changin' up (On God)
//  Ain't no changin' up (On God, on God)`},
//  {artist: "JID", title: "Stars", img: ". /images/IMG-0721.jpg",
//  lyrics:`[Chorus: JID]
//  Heavy way to hold the head and notice
//  Just a long and cold and scary
//  But I don't even feel a thing no more
//  I set my goals and I'm prepared (Look-look-look-look-look, uh, look, uh)`},
//  {artist: "Queen", title: "Bohemian Rhapsody ", img: ". /images/IMG-0727.jpg",
//  lyrics:`[Intro]
//  Is this the real life? Is this just fantasy?
//  Caught in a landslide, no escape from reality
//  Open your eyes, look up to the skies and see
//  I'm just a poor boy, I need no sympathy
//  Because I'm easy come, easy go, little high, little low
//  Any way the wind blows doesn't really matter to me, to me
 
//  [Verse 1]
//  Mama, just killed a man
//  Put a gun against his head, pulled my trigger, now he's dead
//  Mama, life had just begun
//  But now I've gone and thrown it all away
//  Mama, ooh, didn't mean to make you cry
//  If I'm not back again this time tomorrow
//  Carry on, carry on as if nothing really matters`},
//  {artist: "Future, Drake, & Tems", title: "WAIT FOR U", img: ". /images/IMG-0742.jpg",
//  lyrics:`[Intro: Future & Tems]
//  I will wait for you, for you
//  Early in the mornin', late at night (I will wait for you)
//  It doesn't even matter what time it is (I will wait for you)
//  Presidential Rollie, RM, wait (Higher, sayin' higher-er-er-er)
//  Whenever I find time, it's okay (Ayy)`}

]

mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => {
        // first we remove all of the pets
        // here we can add something to make sure we only delete pets without an owner
        Lyric.deleteMany({ owner: null })
            .then(deletedLyrics => {
                console.log('deletedLyrics', deletedLyrics)
                // the next step is to use our startPets array to create our seeded pets
                Lyric.create(seedLyrics)
                    .then(newLyrics => {
                        console.log('the new Lyrics', newLyrics)
                        mongoose.connection.close()
                    })
                    .catch(error => {
                        console.log(error)
                        mongoose.connection.close()
                    })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    })
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })





