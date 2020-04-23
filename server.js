const gatsbyExpress = require('gatsby-plugin-express');
const app = express();

// serve static files before gatsbyExpress
app.use(express.static('public/'));
app.use(express.static("public/"))
app.use(
    gatsbyExpress("config/gatsby-express.json", {
        publicDir: "public/",
        redirectSlashes: true,
    })
)

app.listen(process.env.PORT || '8080', function () {
    console.log(`App started on port 3000 ${process.env.port}`);
});

