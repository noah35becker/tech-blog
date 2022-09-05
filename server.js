
// IMPORTS

const express = require('express');
    const app = express();

require('dotenv').config();

const helpers = require('./utils/helpers');

const exphbs = require('express-handlebars');
    const hbs = exphbs.create({helpers});

const sequelize = require('./config/connection');

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const path = require('path');

const routes = require('./controllers');

const PORT = process.env.PORT || 3001;



// MIDDLEWARE

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sess));

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);



// CONNECT TO SERVER
sequelize.sync({force: false}).then(() => 
    app.listen(PORT, () => console.log(`Now listening on Port ${PORT}`))
);