const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// app.get('/', (req, res) => {
    // ------ send method with object ------- //

    // res.send(
    //     {
    //         name:"chetan",
    //         age:27,
    //         city:"jaipur"
    //     }
    // );  // send object kr rahe hain but hume response milega json format mai

    // ------ send method with array ------- //

    // res.send(
    //     ['apple', 'banana', 'cherry', 'dates'] // it returns an array
    // );

    // ------ json method ------- //

    // res.json(
    //     {
    //         name:"chetan",
    //         age:27,
    //         city:"jaipur"
    //     }
    // )

    // ------ Array with object Method ----- //
//     const users = [
//         {id:1, name:"chetan"},
//         {id:2, name:"Salman"},
//     ]

//     res.json(users);
// });

// ------ Json with padding method ------- //
app.get('/', (req, res) => {
    res.jsonp({name:"chetan", age:27, city:"jaipur"}); // yhh method hume second parameter mai ek callback function bhi return krta hai i.e agar humne route mai koi bhi parameter pass kiya hai toh vo callback function mai aajayega
}); 

// ------ Redirect Method ------- //
app.get('/about', (req, res) => {
    res.redirect(301, 'https://www.google.com'); // here 301 is a status code for permanent redirecting the page
    // res.redirect('/user');
});

app.get('/user', (req, res) => {
    res.send("Hello from user page");
});
