const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

// Data import
const devTechSkills = require("./devSkills-data")

const musicSkills = require("./musicSkills-data")

const desingSkills = require("./desingSkills-data")

//End import data


server.use(express.static('public'))

server.set("view engine","html")

nunjucks.configure("views",{
  express: server,
  autoescape: false
})

server.get("/", function(req,res){
  const about = {
    
    avatar_url:'https://avatars2.githubusercontent.com/u/63278657?s=460&u=42aaa965dabe86523b68714bbc101e9094465fe0&v=4',
    nick_name:'Nephxlin',
    name:'Luther Marques Cordeiro',
    role:'FullStack Developer, Designer & Music Producer',
    description:"Software engineer specialist in creating Marketing applications for Musicians, models, photographers and Influencer's",
    links: [
      { name: "Github", url: "https://github.com/Nephxlin"},
      { name: "Twitter", url: "https://twitter.com/Nephxlin"},
      { name: "LinkedIn", url: 'https://www.linkedin.com/in/luther-marques-cordeiro-101a731a6/'},
      { name :"Youtube", url:'https://www.youtube.com/channel/UCLS3faRYqcVp_V9jcsxAt3w?'}
    ]
  }
  
  return res.render("about", {about})
})


server.get("/skills", function(req,res){
  return res.render("skills", {devSkills : devTechSkills , musicSkill : musicSkills, desingSkills : desingSkills })
})

server.listen(5000, function() {
  console.log("server is running")
})