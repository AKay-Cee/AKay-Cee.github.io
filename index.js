const express = require('express');
const app = express();
app.listen(3005, () => {
    console.log("port running at 3005");
})
var path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


let notFoundvisit = 0, formvist = 0, mainpagevisit = 0;
// app.get("/", function (req, res, next) {
//     res.send("welcome here");
// });

app.get("/", function (req, res, next) {
    res.sendFile(path.join(__dirname, 'form1.html'));
    mainpagevisit++;
    console.log(mainpagevisit);
    //res.sendfile(path.join(__dirname, "/html/error.html"))//send html file to brwoser. the html file is error.html./html/error.html is the path given for the error. html file.
});

app.post("/submit", function (req, res, next) {
    console.log(req.body);
    res.send("<h1> name:" + req.body.name + "</h1>" + "<h1> email:" + req.body.email + "</h1>" + "<h1> Degree:" + req.body.degree + "</h1>" + "<h1> Hobby:" + req.body.hobby + "</h1>" + "<h1> About:"
        + req.body.description + "</h1>");
    formvist++


    //res.sendFile(path.join(__dirname, 'view.html'));
    // res.sendStatus(200);

});
app.get("/stats", function (req, res, next) {
    res.send("<h1> mainpage visited:" + mainpagevisit + "</h1>" + "<h1> form submited:" + formvist + "</h1>" + "<h1> not found page visited:" + notFoundvisit + "</h1>")
})

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
    notFoundvisit++;
});
