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

router.get('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})

// RESTful api
router.get('/api/list', function (req, res) {
  res.json(classList) // Respond with JSON
})

router.get('/api/get/:id', function (req, res) {
  res.json(classList[req.params.id]) // Notice the wildcard in the URL?
  // Try browsing to /api/get/0 once you've added some entries
})

router.post('/api/create', function (req, res) {
  console.log('Creating the following student:', req.body.studentname)
  const student = {
    name: req.body.studentname,
    studentNumber: req.body.studentnum,
    electives: [req.body.studentCourse]
  }
  classList.push(student)
  res.redirect(req.baseUrl + '/api/list')
})

router.post('/api/delete', function (req, res) {
  console.log('deleting a student at entry: ', req.body.studentrow)
  const row = req.body.studentrow - 1
  if (!(row > classList.length) && (row > 0)) {
    classList.splice(row, 1)
    res.redirect(req.baseUrl + '/api/list')
  } else {
    console.log('There is no student at index ', row)
    res.redirect(req.baseUrl + '/delete')
  }
})

router.post('/api/edit', function (req, res) {
  const row = req.body.studentnew.split(',')[0] - 1
  const details = req.body.studentnew.split(',')[1]
  console.log('editing a student entry at index ', row)
  if (!(row > classList.length) && (row >= 0)) {
    classList[row] = details
    res.redirect(req.baseUrl + '/api/list')
  } else {
    console.log('There is no student at index ', row)
    res.redirect(req.baseUrl + '/edit')
  }
})

module.exports = router
