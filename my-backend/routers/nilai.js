const express = require('express')
const routerNilai = express.Router()
const ctrNilai = require('../controllers/nilai')

routerNilai.get('/nilai', ctrNilai.getNilai)
routerNilai.get('/nilai/:nim', ctrNilai.getNilaiByNim)
routerNilai.get('/nilai/:nim/:semester', ctrNilai.getNilaiByNimSemester)
routerNilai.post('/nilai/:nim', ctrNilai.postNilai)
routerNilai.put('/nilai/:id_nilai',  ctrNilai.updateNilai)
routerNilai.delete('/nilai/:id_nilai', ctrNilai.deleteNilai)

module.exports = routerNilai