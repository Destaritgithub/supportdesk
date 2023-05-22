const express = require('express')
const router = express.Router({mergeParams:true})
const {getNotes, addNote} = require('../controller/noteController')


const {protect} = require('../middleware/authMiddlewere')
router.route('/').get(protect, getNotes).post(protect, addNote)


module.exports =router