const path = require('path')
const express = require('express')
const router = express.Router()
const classList = [] // our class list array

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'))
})

router.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'))
})

router.get('/delete', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'))
})

router.post('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})

module.exports = router
