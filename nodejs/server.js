const express = require("express")
const app = express();
const authRouter = require("./src/routes/auth.router.js");
const productRouter = require("./src/routes/product.route.js");
const userRouter = require("./src/routes/user.route.js");
const cartRouter = require("./src/routes/cart.route.js")
const cookieRouter = require("./src/routes/cookie.route.js")
const pagesRouter = require("./src/routes/pages.route.js");
const sessionRouter = require("./src/routes/session.route.js");
const categoryRouter = require("./src/routes/category.route.js")
const session = require('express-session')
const dotenv = require('dotenv')
const cors = require('cors')
// npm install --save body-parser
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
dotenv.config();
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
app.use("/api/user",authRouter )
app.use("/api/user", userRouter)
app.use("/api/cookie", cookieRouter)
app.use("/api/products", productRouter)
app.use("/api/categories", categoryRouter)
// app.use("api/cart",cartRouter)
app.use("/api/session", sessionRouter)

app.use("/views", pagesRouter)
// app.use("/api")
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log("Start serrver")
})