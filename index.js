const path = require("path");
const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

const app = express();
app.set("view engine", "ejs"); 

app.get('/', function (req, res) {
    res.render('posts/new.ejs')
})
app.get('')



app.use(logger("dev")); 
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser()); 



app.use( 
    methodOverride((request, response) => {
        if (request.body && request.body._method) {
            const method = request.body._method;
            return method;
        }
    })
);


app.use((request, response, next) => {
    console.log("Cookies:", request.cookies);
    const username = request.cookies.username;
    response.locals.username = "";

    if (username) {
        response.locals.username = username;
        console.log(`Username: ${username}`);
    }
    next();
});


app.use((request, response, next) => {
    console.log("Cookies:", request.cookies);
    const username = request.cookies.username;
    response.locals.username = "";

    if (username) {
        response.locals.username = username;
        console.log(`Username: ${username}`);
    }
    next();
});


const postsRouter = require("./routes/posts");
const rootRouter = require("./routes/root");


app.use("/posts", postsRouter);
app.use("/", rootRouter);


const PORT = 8080;
const HOST = "localhost";
app.listen(PORT, HOST, () => {

    console.log(`Server is running and listening on http://${HOST}:${PORT}`);
});