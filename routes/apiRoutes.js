module.exports = function(app) {

    var notesArr = [];

    app.get('/api/notes', function(req, res) {
        res.json(notesArr);
    });

    app.post('/api/notes', function(req, res) {
        var newNote = req.body;
        notesArr.push(req.body);
        fs.writeFile(__dirname + '/db/db.json', JSON.stringify(notesArr), function(notesArr) {
            res.json(newNote);
        })
        
    });

    app.delete('/api/notes/:id', function(req, res) {
        var id = req.params.id;
        var note = notesArr[id];
        var notesArr = notesArr.slice(parseInt(id), parseInt(id) + 1);
        fs.writeFile(__dirname + '/db/db.json', JSON.stringify(notesArr), function(notesArr) {
            if(err) throw err;
            res.json(note);
        })   
    });
}