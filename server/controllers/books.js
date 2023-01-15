const Book = require('../models/Book');
const cloudinary = require('../utils/cloudinary');

const getAllBooks = async (req,res) => {
  const {name, sort, numericFilters, category} = req.query;
  const queryOptions = {};
  if(category) {
    queryOptions.category = category;
  }
  if(name) {
    queryOptions.name = { $regex:name, $options:'i'};
  }
  if(numericFilters) {
    const operatorMap = {
      '>':'$gt',
      '>=':'$gte',
      '=':'$eq',
      '<':'$lt',
      '<=':'$lte'
    }
    const regEx = /\b(<|>|>=|=|<|<=)\b/g
    let filters = numericFilters.replace(regEx,(match) => `-${operatorMap[match]}-`);
    console.log(filters);
    filters = filters.split(',').forEach(item => {
      console.log(item);
      const [field,operator,value] = item.split('-');     
      if(field === 'price') {
        queryOptions.price = { ...queryOptions.price,[operator] :Number(value) };
      }
    });
  }
  let result = Book.find(queryOptions).select('-description');
  if(sort) {
    const sortPrice = sort.split(',').find(el => el === 'price' || el ==='-price');
    result = result.sort(sortPrice);
  } else {
    result = result.sort('price');
  }
  const books = await result;
  res.status(200).json({books});
}

const createBook = async (req,res) => {
  try {
  req.body.createdBy = req.user.userId; 
  const {name,author,price,language,rating,stock,category,description,image} = req.body;
  if(!name || !author || !price || !language || !rating || !stock || !category || !description || !image) {
    console.log(req.body);
    return res.status(401).send("Please fill the missing fields");
  }
  const result = await cloudinary.uploader.upload(image, {
    folder:"products"
  });  
  const book = await Book.create({...req.body,image:{public_id:result.public_id,url:result.secure_url}});
  return res.status(201).json(book);
  } catch (error) {
    console.log(error);
  }
  
}

const getSingleBook = async (req,res) => {
  const {id:bookID} = req.params;
  const book = await Book.findOne({_id:bookID});
  if(!book) {
    return res.status(404).json({msg:`No task with id: ${bookID}`});
  }
  res.status(201).json({book});
}

const updateBook = async (req,res) => {
  try {
    const {id:bookID} = req.params;
  const currentBook = await Book.findById({_id:bookID});
  if(req.body.image && req.body.image !== '') {
    const imgId = currentBook.image.public_id;
    console.log(imgId);
    await cloudinary.uploader.destroy(imgId);

    const newImage = await cloudinary.uploader.upload(req.body.image, {
      folder:"products"
    });

    req.body.image = {
      public_id : newImage.public_id,
      url: newImage.secure_url
    }
  }
  const book = await Book.findOneAndUpdate({_id:bookID},req.body,{
    new:true,
    // runValidators:true,
  });
  if(!book) {
    return res.status(404).json({msg:`No task with id : ${bookID}`});
  }
  return res.status(200).json({book});
  } catch(error) {
    console.log(error);
  }
}

const deleteBook = async (req,res) => {
  const {id:bookID} = req.params;
  const book = await Book.findById({_id:bookID});
  if(!book) {
    return res.status(404).json({msg:`No task with id: ${bookID}`});
  }
  const imgId = book.image.public_id;
  await cloudinary.uploader.destroy(imgId);
  await Book.findByIdAndDelete({_id:bookID});
  res.status(200).json({book});  
}

module.exports = {
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
  createBook
}

