const express = require('express');
const app = express();
app.listen(3005, () => {
    console.log("port running at 3005");
})
var path = require('path');
var ejs = require('ejs');
var cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);




let mainpagevisit = 0, formvist = 0, notFoundvisit = 0;

app.get("/", function (req, res, next) {
    res.clearCookie('remember');
    res.sendFile(path.join(__dirname, "views", "login.html"));
})

app.post("/login", function (req, res, next) {
    let inputvalue = req.body;
    console.log(inputvalue);
    let username = inputvalue.username;
    let password = inputvalue.password;
    if (username == "Admin" && password == "admin123") {
        res.cookie('remember', 123);

        res.redirect("/form");


    } else {
        res.redirect("/")
    }
})
app.get("/form", function (req, res, next) {
    if (req.cookies.remember) {
        res.sendFile(path.join(__dirname, 'form1.html'));
        mainpagevisit++;
    } else {
        res.redirect("/")
    }

});

app.post("/submit", function (req, res, next) {
    // inputval = req.body;
    // console.log(inputval);
    // res.render("display", { inputval });
    // console.log(req.body);
    if (req.cookies.remember) {
        res.cookie('inputval', req.body);
        let inputdata = req.cookies.inputval;
        res.render("display", { inputdata });
    } else {
        res.redirect("/");
    }


});
app.get("/stats", function (req, res, next) {
    res.send("<h1> mainpage visited:" + mainpagevisit + "</h1>" + "<h1> form submited:" + formvist + "</h1>" + "<h1> not found page visited:" + notFoundvisit + "</h1>")
})

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
    notFoundvisit++;
});
