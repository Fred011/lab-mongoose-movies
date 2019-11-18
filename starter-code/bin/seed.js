const mongoose = require('mongoose');
const Celebrity = require('./../models/Celebrity');

const dbName = 'celebrities'

const celebrities = [
    {
      name: 'Casey Neistat',
      occupation: 'Youtuber', 
      catchPhrase: 'Free time is the enemy of progress.',
    },
    {
      name: 'Nekfeu',
      occupation: 'Singer',
      catchPhrase: 'Le studio est allemand, italiennes sont les bagnoles, les concerts sont américains, les branlettes sont espagnoles',
    },
    {
      name: 'Zinedine Zidane',
      occupation: 'football player',
      catchPhrase: 'Harper Lee',
    },
    
  ];

mongoose
    .connect('mongodb://localhost:27017/celebrities', {useNewUrlParser: true})
    .then( () => { return Celebrity.create(celebrities);
    })
    .then(( insertedDocuments ) => { console.log('Inserted documents:', insertedDocuments.length);
    mongoose.connection.close();
    })
    .catch( (err) => console.log(err));