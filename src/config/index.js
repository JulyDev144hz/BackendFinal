require("dotenv").config();

console.log("CARGANDO DOTENV")
console.log("MONGODB:"+process.env.mongo_uri )
const config = {
  port: process.env.PORT,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_SECRET_KEY: process.env.GITHUB_SECRET_KEY,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  GITHUB_CALLBACK_URL: process.env.GITHUB_CALLBACK_URL,
  SESSION_SECRET: process.env.SESSION_SECRET,

  PERSISTENCE:process.env.PERSISTENCE,

  jwt_algorithm:process.env.JWT_ALGORITHM,
  jwt_secret:process.env.JWT_SECRET,
  jwt_experies_in:process.env.JWT_EXPERIES_IN,


  nodemailer_user : process.env.NODE_MAILER_USER,
  nodemailer_pass : process.env.NODE_MAILER_PASSWORD,

  dns_frontend:process.env.DNS_FRONTEND,

  isProd:process.env.NODE_ENV === "production"

  // port: 80,
  // GITHUB_CLIENT_ID: "Iv1.f24bf717968854c2",
  // GITHUB_SECRET_KEY: "SHA256:q9wkN8GAy8ZafjYc2JoNHGeiyaTNSArC/lY5e5XAvpg=",
  // GITHUB_CLIENT_SECRET: "d6f38dda585c3f1352194269d292c476d66465dc",
  // GITHUB_CALLBACK_URL: "http://localhost:3001/auth/login/github",
  // SESSION_SECRET: "coder25525",

  // PERSISTENCE:"MONGO",

  // jwt_algorithm:"HS256",
  // jwt_secret:"secretCoder",
  // jwt_experies_in:"3600",


  // nodemailer_user : "julianippolitopruebas@gmail.com",
  // nodemailer_pass : "wazzgfrskjbldjzk",

  // dns_frontend:"http://localhost:80",

  // isProd:"development" === "production"
};

const mongo = {
  atlas: process.env.mongo_uri,
  // atlas: "mongodb+srv://admin:admin@cluster0.ni5ti26.mongodb.net/ecommerce?retryWrites=true&w=majority",
};

module.exports = { config, mongo };
