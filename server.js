const express = require("express")
const gatsbyExpress = require("gatsby-plugin-express")
const app = express()
//const { spawn } = require("child_process")
//const CLEVER_TOKEN = process.env.CLEVER_TOKEN || ""
//const CLEVER_SECRET = process.env.CLEVER_SECRET || ""
/*
app.get("/webhook/ghost", function(req, res) {
  var child = spawn(
    "./node_modules/clever-tools/bin/clever.js login --token " +
      CLEVER_TOKEN +
      " --secret " +
      CLEVER_SECRET +
      " && ./node_modules/clever-tools/bin/clever.js link app_a23540e1-a005-409a-9c57-d0feb6fcc5b4 --alias ubeers-gatsby && ./node_modules/clever-tools/bin/clever.js restart",
    {
      shell: true,
    }
  )
  child.stderr.on("data", function(data) {
    console.error("", data.toString())
  })
  child.stdout.on("data", function(data) {
    console.log("", data.toString())
  })
  child.on("exit", function(exitCode) {
    console.log("Child exited with code: " + exitCode)
  })

  res.send("GET request to the homepage")
})
*/
// serve static files before gatsbyExpress
app.use(express.static("public/"))
app.use(
  gatsbyExpress("config/gatsby-express.json", {
    publicDir: "public/",
    redirectSlashes: true,
  })
)

app.listen(8080, function() {
  console.log("App started on port 8080")
})
