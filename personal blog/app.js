const express= require("express");
const morgan =require('morgan');
const mongoose=require('mongoose');
//const Blog=require('./models/blog');
const blogRoutes = require('./routes/blogRoutes');
//express app
const app=express();
//connect to mongodb
const dbURI='mongodb+srv://admin:admin123@cluster0.nvpps.mongodb.net/note-tuts?retryWrites=true&w=majority';
// mongoose.connect(dbURI,{useNewUrlParser: true,useUnifiedTopology: true})
//  .then((result)=> console.log("connected to db"))
//  .catch((err)=>console.log(err));
// //register view engine
// app.set('view engine','ejs');


//listen
// app.listen(3000);

// app.get('/',(req,res)=>{
//     //tis does not need in express
//     //res.setHeader('Content-Type',"text/html");

//     //res.sendFile('./views/index.html',{root: __dirname});  fro html
//     res.render('index');
// });


// app.get('/about',(req,res)=>{
//     //tis does not need in express
//     //res.setHeader('Content-Type',"text/html");

//     //res.sendFile('./views/about.html',{root: __dirname});  for html
//     res.render('about');
// });
// //redirect
// app.get('/about-us',(req,res)=>{
//     res.redirect('/about');
// });

// //404 for every incoming request
// app.use((req,res)=>{
//     res.status(404).sendFile('./views/404.html',{root:__dirname});
// });


//<% const name='shubham %> in ejs ists easy <p><%= name %></p>  or in javascript res.render('index',{title:'Home'});








// listen for requests
//app.listen(3000);


//middleware used
// app.use((req,res,next)=>{
//     console.log('new request mode');
//     console.log('host :',req.hostname);
//     console.log("path :",req.path);
//     console.log("method :",req.method);
//     next();
// });

// app.use((req,res,next)=>{
//     console.log('in the next middleware');

//     next();
// });
//static middleware
// app.use(express.static('public'));
// app.use(morgan('tiny'));

//mongodb added data
// app.get('/add-blog',(req,res)=>{
//     const blog =new Blog({
//         title: 'new blog',
//         snippet: 'about my new blog',
//         body:'more about my new blog'
//     });
//     blog.save()
//         .then((result)=>{
//             res.send(result)
//         })
//         .catch((err)=>{
//             console.log(err);
//         });
// });
// app.get('/add-blogs',(req,res)=>{
//     Blog.find()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
// });
// app.get('/single-blog',(req,res)=>{
//     Blog.findById('61b86789c7f94e4f7bce382d')
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
// });





// // register view engine
// app.set('view engine', 'ejs');
// // app.set('views', 'myviews');

// app.get('/', (req, res) => {
//   // res.send('<p>home page</p>');
// //   res.sendFile('./views/index.html', { root: __dirname });
// //   const blogs = [
// //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
// //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
// //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
// //   ];
// //   res.render('index', { title: 'Home', blogs });
//     res.redirect('/blog');
// });

// app.get('/about', (req, res) => {
//   // res.send('<p>about page</p>');
//   res.sendFile('./views/about.html', { root: __dirname });
//   res.render('about', { title: 'About' });
// });

// //blog routes
// app.use('/blogs', blogRoutes);
// // redirects
// // app.get('/about-us', (req, res) => {
// //   res.redirect('/about');
// // });

// // app.get('/blog' ,(req,res)=>{
// //     Blog.find().sort({createdAd: -1})
// //         .then((result)=>{
// //             res.render('index',{title:'All Blogs', blogs: result})
// //         })
// //         .catch((err)=>{
// //             console.log(err);
// //         })
// // });


// // app.get('/blogs/create', (req, res) => {
// //   res.render('create', { title: 'Create a new blog' });
// // });

// // 404 page
// app.use((req, res) => {
//   res.status(404).sendFile('./views/404.html', { root: __dirname });
//   res.status(404).render('404', { title: '404' });
// });



// // register view engine
// app.set('view engine', 'ejs');
// // middleware & static files
// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan('dev'));
// app.use((req, res, next) => {
//   res.locals.path = req.path;
//   next();
// });
// // routes
// app.get('/', (req, res) => {
//   res.redirect('/blogs');
// });
// app.get('/about', (req, res) => {
//   res.render('about', { title: 'About' });
// });
// app.use('/blogs', blogRoutes);

// // 404 page
// app.use((req, res) => {
//   res.status(404).render('404', { title: '404' });
// });



mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.static( 'public/css'));
//important for post method in node js middleware
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});