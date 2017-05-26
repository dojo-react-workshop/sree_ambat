module.exports=((req, res)=>{
    return {
        home: (req, res)=>{
            res.render("index", {'displayResults':'no'})
        },
        result: (req, res) => {
            var obj = req.body;
            obj.displayResults = "yes"
            res.render("index", obj)
        }

    }
})();