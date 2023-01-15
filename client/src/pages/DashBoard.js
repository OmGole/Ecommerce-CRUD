import React,{useState,useEffect} from 'react'
import AddModal from '../components/AddModal';
import DashBoardItems from '../components/DashBoardItems';
import OrderDash from "../components/OrderDash"
import {useSelector,useDispatch} from "react-redux";
import {getAllProducts} from '../store/productsSlice';
import { toast } from 'react-toastify';


function DashBoard() {
  const product = useSelector(state => state.products.product);
  const error = useSelector(state => state.products.error);
  const [visibleAdd,setVisibleAdd] = useState(false);
  const dispatch = useDispatch();
  const [search,setSearch] = useState("");
  const {books} = product;

  useEffect(() => {
    dispatch(getAllProducts());
  },[]);


  const handleSearch =(e) => {
    setSearch(e.target.value);
  }

  const handleAddModal = () => {
    setVisibleAdd(true);
  }

  const handleCloseModal = (e) => {
    if(e.target.id === "add") setVisibleAdd(false);
    if(e.target.id !== "container") return;
    setVisibleAdd(false);
  }

  // useEffect(() => {
  //   if(error === '') return;
    
  // },[error])
 

  return (
    <>
    <div className='md:container mx-auto mb-5 pt-5 md:px-10 px-6'>
      <h2 className='text-center text-3xl mb-9 font-poppins'>
        DashBoard
      </h2>
      <div>
      <button className='block w-full bg-secondary text-white py-1 px-5 rounded-xl hover:bg-white hover:text-secondary border-2 border-secondary transition duration-200 box-border text-l mb-5 font-poppins' onClick={handleAddModal}>Add Product</button>
      {visibleAdd && <AddModal handleCloseModal={handleCloseModal}/>}
      {/* <input type="text" className='w-full border-2 rounded-xl py-2 px-5 font-montserrat' value={search} onChange={handleSearch} placeholder="Search by Name or Id"/> */}
    </div>
      {books && books.map((book) => <DashBoardItems book={book}/>) }
    </div>
    <div>
    <OrderDash />
    </div>
    </>
  )
}

export default DashBoard