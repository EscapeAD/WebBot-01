const mongoose = require('mongoose');
const URI = `mongodb://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBURI}/${process.env.DBNAME}`
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
mongoose.connect(URI, options)

mongoose.connection.once('open', () => {
    console.log('conneted to database');
});
