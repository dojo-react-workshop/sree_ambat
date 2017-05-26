var list = require("./../controllers/namelist.js")

module.exports=(app)=>{
    app.get("/", (req, res) => {
        res.render("index");
    })

    app.post("/add", (req, res) => {
        list.add(req, res)
    })
    app.post("/update", (req, res) => {
        list.update(req, res)
    })
    app.get("/list", (req, res)=>{
        list.list(req, res);
    })

    app.get("/delete/:id", (req, res)=> {
        list.delete(req, res);
    })
}