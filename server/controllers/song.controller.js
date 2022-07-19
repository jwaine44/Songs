// option 1 - refer to model
const Song = require('./../models/song.model')

// option 2 - refer to model
// const {Song} = require('./../models/song.model')

module.exports.testApi = (req, res) => {
    res.json({status: 'ok'})
}

// GET ALL
module.exports.allSongs = (req, res) => {
    Song.find()
        .then(songs => res.json(songs))
        .catch(err => res.json(err))
}

// GET Song by artist
// Case-sensitive, has to be exact match to the artist field
module.exports.songsByArtist = (req, res) => {
    Song.find({artist: req.params.artist})
        .then(songs => res.json(songs))
        .catch(err => res.json(err))
}

// GET ONE
module.exports.oneSong = (req, res) => {
    // need to get the ID from params
    Song.findOne({_id: req.params.id})
        .then(oneSong => res.json(oneSong))
        .catch(err =>  res.json(err))
}


// CREATE
module.exports.addSong = (req, res) => {
    const newSong = req.body
    Song.create(newSong)
        .then(song => res.json(song))
        .catch(err => res.status(400).json(err))
}

// CREATE song via the save() method
module.exports.addSong2 = (req, res) => {
    const newSong = new Song(req.body)
    // Can specify a artist for this particular addition, so the artist will be put in this way no matter what you enter in artist in Postman
    // newSong.artist = "Justin Bieber"
    newSong.save()
        .then(song => res.json(song))
        .catch(err => res.json(err))
}

// UPDATE -- a combination of Get One and Create
module.exports.updateSong = (req, res) => {
    // grab the id from params
    const idFromParams = req.params.id
    const updatedValue = req.body
    // update needs 3 things: the criteria, the value to be updated, and options we need to do
    Song.findOneAndUpdate(
        {_id: req.params.id},
        updatedValue,
        {new: true, runValidators: true}
    )
        .then(updatedSong => res.json(updatedSong))
        .catch(err => res.json(err))
}

// DELETE
module.exports.deleteSong = (req, res) => {
    Song.deleteOne({_id: req.params.id})
        .then(message => res.json(message))
        .catch(err => res.json(err))
}