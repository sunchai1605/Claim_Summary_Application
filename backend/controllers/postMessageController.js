const express = require('express')
const router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId

var { PostMessage } = require('../models/message') // schema connection

router.get('/', (req, res) => {
    PostMessage.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while retribg all records: ')
    })
})
router.get('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('no record found')

    PostMessage.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while getting by id all records:')
    })
})

router.post('/', (req, res) => {
    var newRecord = new PostMessage({
        empid: req.body.empid,
        name: req.body.name,
        claimno: req.body.claimno,
        claimtype: req.body.claimtype,
        claimprogram: req.body.claimprogram,
        startdate: req.body.startdate,
        enddate: req.body.enddate
    })
    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while creating new record: ')
    })
})

router.put('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('no record found')
    
        var updateRecord = {
            empid: req.body.empid,
            name: req.body.name,
            claimno: req.body.claimno,
            claimtype: req.body.claimtype,
            claimprogram: req.body.claimprogram,
            startdate: req.body.startdate,
            enddate: req.body.enddate
        }
        PostMessage.findByIdAndUpdate(req.params.id, { $set: updateRecord }, {new: true}, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while updating records: ')
    })
})

router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('no record found')

    PostMessage.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while deleting records: ')
    })
})

module.exports = router
