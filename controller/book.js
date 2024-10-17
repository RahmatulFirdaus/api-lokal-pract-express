const postBook = (req, res) => {
  console.log(req.body);
  res.json({
     message: 'Get book data',
     data: req.body
    })
}
const getBook = (req, res) => {
  res.json({
     status: 'Berhasil',
     data: req.body
    })
}

module.exports = {
  postBook,
  getBook
}