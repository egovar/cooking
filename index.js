const express = require('express');
const bodyParser = require('body-parser');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: './photos/',
    filename: () => {
        return (Date.now());
    }
});
const upload = multer({ storage: storage });

const db = require('./queries');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.listen(process.env.PORT || port);

app.use(function (req, res, next) {
    let origins = [
        'http://example.com',
        'http://www.example.com'
    ];

    for(let i = 0; i < origins.length; i++){
        let origin = origins[i];

        console.log(req.headers.origin);

        if(req.headers.origin.indexOf(origin) > -1){
            res.header('Access-Control-Allow-Origin', req.headers.origin);
        }
    }

    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' });
});
//Роуты авторизации и проверки логина
app.get('/api/check_login/:login', db.checkLogin);
app.post('/api/sign_in', db.signIn);
app.delete('/api/sign_out', db.signOut);
//Роуты просмотра рецептов по категориям
app.get('/api/recipe/user/:id', db.getUsersRecipes)
app.get('/api/recipe/short', db.getShortRecipes);
app.get('/api/recipe/medium', db.getMediumRecipes);
app.get('/api/recipe/long', db.getLongRecipes);
app.get('/api/recipe/favourites', db.getFavouriteRecipes);
app.get('/api/recipe/best', db.getBestRecipes);
app.get('/api/recipe/new', db.getNewRecipes);
app.get('/api/recipe/search', db.search);
app.put('/api/recipe/like/', db.likeRecipe);
app.get('/api/recipe/:id', db.getRecipe);
//Все действия с аккаунтами пользователей
app.post('/api/user/create', db.createUser);
app.get('/api/user/get_all' );
app.delete('/api/user/delete/:id', db.deleteUser);
app.put('api/user/edit_login', db.editLogin);
app.put('api/user/edit_password', db.editPassword);
app.get('api/user/:id', db.getUserInfo);
//Все действия с рецептами
app.post('/api/recipe/create', upload.single('picture'), db.createRecipe);
app.delete('/api/recipe/delete/:id', db.deleteRecipe);
//Все действия с комментариями
app.post('/api/comment/create', db.createComment);
app.delete('/api/comment/delete/:id', db.deleteComment);
//app.post('/api/comment/like/:id')
//Все действия с записями администраторов
app.get('/api/admin/get_all', db.getAllAdmins);
app.post('/api/admin/grant', db.grantAdmin);
app.delete('/api/admin/withdraw/:id', db.withdrawAdmin);
