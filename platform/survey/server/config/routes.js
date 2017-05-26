const survey = require('./../controllers/survey.js')
module.exports=(app)=>{
    app.get("/", (req, res)=>{
        survey.home(req, res);
    });
    app.post("/", (req, res) => {
        survey.result(req, res)
    })
}