const phoneSchema = new mongoose.Schema({
    _id: String,
    name: String,
    number: Number,
})

const Phonebook = mongoose.model('Phonebook', phoneSchema)