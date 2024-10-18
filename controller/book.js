const e = require("express")

//create
const postBook = (req, res) => {
  res.json({
     message: 'Get book data',
     data: req.body
    })
}

//read
const getBook = (req, res) => {
  const data = {
    id: 1,
    name: 'Berchay',
    email: 'XvSf4@example.com'
  }
  res.json({
     message: 'Berhasil',
     data: data
    })
}

//update
const updateBook = (req, res) =>{
  const { id } = req.params
  console.log(req.params)
  res.json({
    message: 'Update book data',
  })
}

//delete
const deleteBook = (req, res) =>{
  const { id } = req.params
  res.json({
    message: 'Delete book data',
    data:{
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