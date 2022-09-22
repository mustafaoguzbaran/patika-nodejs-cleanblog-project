/* CleanBlog proje klasörünü oluşturalım.
Package.json dosyasını oluşturalım.
Prettier ayarlarını yapalım.(İsteğe bağlı)
Express ve Nodemon modüllerini indirelim.
git init ile lokal repomuzu oluşturalım.
get request içerisinde const blog = { id: 1, title: "Blog title", description: "Blog description" }, içeriğini gönderelim.
.gitignore dosyası oluşturalım ve ilk repomuzu gönderelim.
*/
const express = require("express");
const app = express();
const port = 3000;
const ejs = require("ejs")
//Template Engine
app.set("view engine", "ejs")
//Middleware
app.use(express.static("public"))
//Routers
app.get("/", (req, res) => {
    res.render("index")
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/contact", (req, res) => {
    res.render("contact")
})
app.get("/add_post", (req, res) => {
    res.render("add_post")
})
app.listen(port, () => console.log(`Server listening on port ${port}`));