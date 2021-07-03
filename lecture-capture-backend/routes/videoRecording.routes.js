const router = require('express').Router();
let VideoRecording = require('../models/videoRecording.models');


//get recording by id
router.route('/').get((req, res) => {
    VideoRecording.find()
        .then(recordings => res.json(recordings))
        .catch(err => res.status(400).json('Error:' +err));
});

// add a recoridng
router.route('/add').post((req, res) => {
    const moduleCode = req.body.moduleCode;
    const moduleName = req.body.moduleName;
    const videoPath = req.body.videoPath;

    const newRecording = new VideoRecording({
        moduleCode,
        moduleName,
        videoPath,});

    newRecording.save()
        .then(() => res.json('VideoRecording added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});
//get data by id
router.route('/:id').get ((req, res) => {
    VideoRecording.findById(req.params.id)
        .then(recordings => res.json(recordings))
        .catch(err => res.status(400).json('Error:' + err));

});

//delete data
router.route('/:id').delete ((req, res) => {
    VideoRecording.findByIdAndDelete(req.params.id)
        .then(() => res.json('VideoRecording Deleted '))
        .catch(err => res.status(400).json('Error:' + err));

});
module.exports = router;