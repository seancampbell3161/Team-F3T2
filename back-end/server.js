const express = require('express')
const app = express()
const mongoose = require("mongoose")
const passport = require("passport")
const session = require("express-session")
const MongoStore = require("connect-mongo") (session)
const connectDB = require("./config/database")
const authRoutes = require("./routes/auth")
const landingRoutes = require("./routes/landing")
const homeRoutes = require("./routes/home")
const profileRoutes = require("./routes/profile")

require("dotenv").config({ path: "./config/.env" })

require("./config/passport")(passport)

connectDB()

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Sessions
app.use(
  session({
    secret: "very secret",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use("/", landingRoutes)
app.use("/auth", authRoutes)
app.use("/homepage", homeRoutes)
app.use("/profile", profileRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server is now running on PORT: ${process.env.PORT}`)
})
