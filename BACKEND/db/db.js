const mongoose = require('mongoose')

function connectToDb(){
  mongoose.connect(process.env.DB_CONNECT).then(()=>{
        const mongoose = require('mongoose');
    
    function connectToDb() {
      const dbUri = process.env.DB_CONNECT;
    
      if (!dbUri) {
        console.error('DB_CONNECT environment variable is not set');
        process.exit(1);
      }
    
      mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
          console.log('Connected to DB');
        })
        .catch(err => {
          console.error('Failed to connect to DB', err);
          process.exit(1);
        });
    }
    
    module.exports = connectToDb;
    console.log('Connected to DB');
  }).catch(err => console.log(err));
}

module.exports = connectToDb;