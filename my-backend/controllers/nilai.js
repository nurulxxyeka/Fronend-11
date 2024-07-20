const connection = require('../db/db.js')

module.exports = {

    getNilai:(req, res) => {
        connection.query('SELECT * FROM nilai', (error, result) => {
            if (error) {
                console.log("error: ", error);
                res.status(500).send({
                    message: error.message || "Terjadi kesalahan saat mengambil data matakuliah"
                });
            } else {
                res.json(result);
            }
        });
    },

    getNilaiByNim : (req,res) => {
        const qstring = `SELECT matakuliah.kdMk, matakuliah.matakuliah, nilai.dosen, matakuliah.sks,nilai.semester, nilai.nilai
                        FROM nilai
                        INNER JOIN matakuliah
                        ON nilai.kdMk = matakuliah.kdMk
                        WHERE nilai.nim = ${req.params.nim};`;
        connection.query(qstring, (err,data )=> {
            if(err) {
                console.log("error: ", err);
                res.status(500).send({
                    message : err.message || "Terjadi kesalahan saat get data"
                });
            }
            else res.send(data)
        });
    },

    getNilaiByNimSemester : (req,res) => {
        const qstring = `SELECT matakuliah.kdMk, matakuliah.matakuliah, nilai.dosen, matakuliah.sks,nilai.semester, nilai.nilai
                        FROM nilai
                        INNER JOIN matakuliah
                        ON nilai.kdMk = matakuliah.kdMk
                        WHERE nilai.nim = ${req.params.nim} AND nilai.semester = ${req.params.semester};`;
        connection.query(qstring, (err,data) => {
            if(err) {
                console.log("error: ", err);
                req.status(500).send({
                    message : err.message || "Terjadi saat kealahan get data"
                });
            }
            else res.send(data)
        });
    },

    postNilai : (req,res) => {
        const {nim, kdMk, semester, dosen, nilai} = req.body;
        const qstring = `INSERT INTO nilai (nim, kdMk, semester, dosen, nilai)
                            VALUES (?, ?, ?, ?, ?)`;
        const values = [nim, kdMk, semester, dosen, nilai];

        connection.query(qstring, values, (err, data) => {
            if (err) {
                console.log("error: ", err)
                res.status(500).send({
                    message: err.message || "Terjadi kesalahaan saat manambahkan data"
                });
            }
            else res.send(data)
        })
    },

    updateNilai : (req, res) => {

        const id_nilai = req.params.id_nilai;
        const _nilai = req.body;
        const qstring = `UPDATE nilai
                        SET nim = '${_nilai.nim}',
                        kdMk = '${_nilai.kdmk}', 
                        semester = '${_nilai.semester}', 
                        dosen = '${_nilai.dosen}', 
                        nilai = '${_nilai.nilai}'

                        WHERE id_nilai = '${id_nilai}'`;

        connection.query(qstring, (err, data) => {
            if (err) {
                console.log("error: ", err)
                res.status(500).send({
                    message: err.message || "Terjadi kesalahaan saat manambahkan data"
                });
            }
            else res.send(data)
        })
    },
    deleteNilai : (req, res) => {
        
        const id_nilai = req.params.id_nilai;
        const qstring = `DELETE FROM nilai
                        WHERE id_nilai = ${id_nilai};`;

        connection.query(qstring, (err, data) => {
            if (err) {
                console.log("error: ", err)
                res.status(500).send({
                    message: err.message || "Terjadi kesalahaan saat menghapus data"
                });
            }
            else res.send(data)
        })
    }

}