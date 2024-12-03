// GET home page.
exports.getHome = async(req, res) => {
    try{
        res.send("hello from admin page");

    }catch(err){
        console.log(err.message)
    }
}
