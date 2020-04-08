module.exports = function(app) {

    const fs = require('fs');
    var notesArr = [];

    app.get('/api/notes', function(req, res) {
        res.json(notesArr);
    });

    app.post('/api/notes', function(req, res) {
        var newNote = req.body;
        notesArr.push(newNote);
        fs.writeFile(__dirname + '/db/db.json', JSON.stringify(notesArr), function(notesArr) {
            res.json(newNote);
        })
        
    });

    app.delete('/api/notes/:id', function(req, res) {
        var id = req.params.id;
        var note = notesArr[id];
        var notesArr = notesArr.slice(parseInt(id) + 1);
        fs.writeFile(__dirname + '/db/db.json', JSON.stringify(notesArr), function(notesArr) {
            if(err) throw err;
            res.json(note);
        })   
    });
}