const express = require("express")
const gatsbyExpress = require("gatsby-plugin-express")
const app = express()
const { exec } = require("child_process")

app.get("/webhook/ghost", function(req, res) {
  exec("npm --v", function(error, stdout, stderr) {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    console.error(`stderr: ${stderr}`)
  })

  res.send("GET request to the homepage")
})

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
