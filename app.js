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
app.get("/", (req, res) => {
    const blog = { id: 1, title: "Blog title", description: "Blog description" };
    res.send(blog)
})
app.listen(port, () => console.log(`Server listening on port ${port}`));