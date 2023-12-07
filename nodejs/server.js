const express = require("express")
const app = express();
const router = require("./src/routes/router.js");
const productRouter = require("./src/routes/product.route.js");
const userRouter = require("./src/routes/user.route.js");
const cookieRouter = require("./src/routes/cookie.route.js")
const pagesRouter = require("./src/routes/pages.route.js");
const sessionRouter = require("./src/routes/session.route.js");
const session = require('express-session')
const cors = require('cors')
// npm install --save body-parser
var bodyParser = require('body-parser')

var cookieParser = require('cookie-parser');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'somesecret',
  cookie: { maxAge: 60000 }
}));
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}))
const port = 8000

app.use(cors())
app.use(cookieParser())
app.use("/api", router)
app.use("/api/user", userRouter)
app.use("/api/cookie", cookieRouter)
app.use("/api/products", productRouter)
app.use("/api/session", sessionRouter)

app.use("/views", pagesRouter)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log("Start serrver")
})