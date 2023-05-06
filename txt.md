then use 
products.[i].catogory?products.[i].category:products.[i].brand


in node app.js

let menu=[
    {link:'/', name:'home'},
    {link:'/category', name:'Category'},
    {link:'/products', name:'Products'},
]

in ejs
<% for(i=0;i<menu.length;i++>)%{>
<%=menu.[i].link%>
<%}%>


OR

app.js

let categoryRoute = require('./src/routes/category')(menu)
let productRoute = require('./src/routes/products')(menu)

category.js
function router(menu){
categoryRoute.route('/')
    .get((req,res)=>{
        res.send(details)
        //res.render('category.ejs,{menu})
})
categoryRoute.route('/details')
.get((req,res)=>{
    res.send('it is working')
})
return categoryRoute
}
module.exports= router




let mongoDB = require('mongoDB').mongoClient

categoryRoute.route('/products/:id)
.get((res,req)=>{
    let id = req.params.id
mongoDB.connect(url,(err,doc)=>{
    if(err){
        console.log(err)
    }
    else{
        let test = doc.db('dbName')
        test.collection('collectionName').find({category_id:Number(id)}).toArray((err,result)=>{
            if(err) throw err;
            else{
                res.render('category',{data:result})
            }
        })
    }
})
})

in ejs

<a href="/products/category/<%= data.[i]._id" />



redis < 6379

redis server
redis-cli
KEY *
set city 'delhi' ex 10000
get city
 npm i redis@3.1.2


npm i @babel/core @babel/register @babel/present-env

npm i cors body-parser mongodb swagger-jsdoc swagger-ui-express 
npm i --save-dev chai chai-http mocha

////////////////pm2

npm i -g pm2
pm2 start filename
pm2 status
pm2 stop filename