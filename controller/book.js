const dbModel = require('../models/book.js');
//create
const postBook = (req, res) => {
  res.json({
    message: 'Get book data',
    data: req.body
  })
}

//read
const getBook = async (req, res) => {
  //[data] agar yang terpanggil hanya isi row
  try {
    const [data] = await dbModel.getAllBook();//implementasi async dan await karena dbpool bersifat asyncronus
    res.json({
      message: 'Berhasil',
      data: data
    })
  } catch (error) {

  }
}

//update
const updateBook = (req, res) => {
  const { id } = req.params
  console.log(req.params)
  res.json({
    message: 'Update book data',
  })
}

//delete
const deleteBook = (req, res) => {
  const { id } = req.params
  res.json({
    message: 'Delete book data',
    data: {
      id: id,
      name: 'Berchay',
      email: 'XvSf4@example.com'
    }
  })
}

module.exports = {
  postBook,
  getBook,
  updateBook,
  deleteBook
}