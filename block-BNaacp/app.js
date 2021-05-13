let express = require('express');
let mongoose = require('mongoose');
let User = require('./models/user');

mongoose.connect(
  'mongodb://localhost/sample',
  { useUnifiedTopology: true, useNewUrlParser: true },
  (error) => (error ? console.log(error) : console.log('Connected to database'))
);

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('From index route');
});

app.post('/users', (req, res) => {
  User.create(
    {
      name: 'Ayush Kamboj',
      email: 'ayushkamboj7@gmail.com',
      sports: ['Cricket', 'Football', 'Tennis'],
    },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.json(data);
      }
    }
  );
});

app.get('/users', (req, res) => {
  User.find({}, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
    }
  });
  //   User.findOne({}, (error, data) => {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       res.json(data);
  //     }
  //   });
});

app.get('/users/:id', (req, res) => {
  let id = req.params.id;
  //   User.find({ _id: id }, (error, data) => {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       res.json(data);
  //     }
  //   });
  //   User.findOne({ _id: id }, (error, data) => {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       res.json(data);
  //     }
  //   });
  User.findById(id, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
    }
  });
});

app.put('/users/:id', (req, res) => {
  let id = req.params.id;
  // User.update({ _id: id }, { name: 'Ayush Kamboj Updated' }, (error, data) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     res.send(data);
  //   }
  // });
  // User.updateOne({ _id: id }, { name: 'Ayush Updated 2' }, (error, data) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     res.send(data);
  //   }
  // });
  User.findByIdAndUpdate(
    id,
    { name: 'Ayush Kamboj put' },
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.delete('/users/:id', (req, res) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.send(data);
    }
  });
});

app.listen(5000, () => console.log('Server is up'));
