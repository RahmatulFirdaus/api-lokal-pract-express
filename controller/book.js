const dbModel = require('../models/book.js');

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
    res.status(500).json({
      message: 'Failed to get Data',
      statusError: error
    })
  }
}
const getBookById = async (req, res) => {
  const {idBuku} = req.params;
  try{
    const [data] = await dbModel.getBookById(idBuku);
    res.json({
      message: 'Data berhasil Ditampilkan sesuai ID',
      data: data
    })
  }catch(error){
    res.status(500).json({
      message: 'Data gagal ditampilkan',
    })
  }
}
const getUser = async (req, res) => {
  try {
    const [data] = await dbModel.getAllUser();
    res.json({
      message: 'Berhasil',
      data: data
    })
  }catch (error) {
    res.status(500).json({
      message: 'Failed to get Data',
    })
  }
}
const getUserById = async (req, res) => {
  const {idUser} = req.params;
  try{
    const [data] = await dbModel.getUserById(idUser);
    res.json({
      message: 'Data berhasil Ditampilkan sesuai ID',
      data: data
    })
  }catch(error){
    res.status(500).json({
      message: 'Data gagal ditampilkan',
    })
  }
}

//create
const postBook = async(req, res) => {
  const {body} = req;
  try{
    await dbModel.postBook(body);
    res.json({
      message: 'Berhasil ditambahkan',
      data : body
    })
  }catch(error){
    res.status(500).json({
      message: 'Data gagal ditambahkan',
    })
  }
}

const postUser = async(req, res) => {
  const {body} = req;
  try{
    await dbModel.postUser(body);
    res.json({
      message: 'User ditambahkan',
      data : body
    })
  }catch(error){
    res.status(500).json({
      message: 'Data gagal ditambahkan',
    })
  }
}

//update
const updateBook = async(req, res) => {
  const {idBuku} = req.params;
  const {body} = req;
  try{
    await dbModel.updateBook(body, idBuku);
    res.json({
      message: 'Update book data',
      data: {
        id: idBuku,
        ...body //menampilkan semua yang ada di body
      }
    })
  }catch(error){
    res.status(500).json({
      message: 'Data gagal diubah',
    })
  }
}
const updateUser = async(req, res) => {
  const {idUser} = req.params;
  const {body} = req;
  try{
    await dbModel.updateUser(body, idUser);
    res.json({
      message: 'Update user data',
      data: {
        id: idUser,
        ...body //menampilkan semua yang ada di body
      }
    })
  }
  catch(error){
    res.status(500).json({
      message: 'Data gagal diubah',
    })
  }
}

//delete
const deleteBook = async (req, res) => {
  const {idBuku} = req.params
  try{
    await dbModel.deleteBook(idBuku);
    res.json({
      message: 'Data berhasil di hapus',
    })
  }catch(error){
    req.status(500).json({
      message: 'Data gagal di hapus',
    })
  }
}

module.exports = {
  postBook,
  postUser,
  getUser,
  getUserById,
  getBook,
  getBookById,
  updateBook,
  updateUser,
  deleteBook
}