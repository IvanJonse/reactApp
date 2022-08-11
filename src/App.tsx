import React, {useContext, useEffect} from 'react';
import ParallaxItem from './Components/ProductsItem';
import { Products } from './data/Products';
import { useProduct } from './useProduct/useProduct';
import { Modal } from './Components/Modal/Modal';
import { CreateProduct } from './Components/CreateProduct';
import { ModalContext } from './context/ModalContext';
import { IProduct } from './models';
import add from './assets/add.png'

function App() {

const {load, error, prodLoad} = useProduct()

const {open, close, modal} = useContext(ModalContext)


const CreateHandler = (product: IProduct) => {
  close()
}

  return (

    <div className="w-full h-screen box-border">
     
     { load && <h1 className='text-gray-800 text-6xl font-[400] h-screen flex items-center justify-center'>Loading...</h1>}

     { error && <h1 className='text-gray-800 text-6xl font-[400] h-screen flex items-center justify-center'>{error}</h1>}
     <header className='px-8 fixed top-0 flex items-center justify-between bg-gray-900 h-14 w-full text-white'>
          <ul className='list-none flex text-lg font-[700] gap-5 cursor-pointer'>
            <li>About us</li>
            <li>Product</li>
            <li>Support</li>
          </ul>
      </header>

     {modal && <Modal onClose={close} title='ModalPr'><CreateProduct/></Modal> }



      { prodLoad.map((p, i) => <ParallaxItem product={p} key={i}/>) }
      {!modal &&  <button onClick={open} className='block fixed bottom-10 right-14 min-w-[56px] w-14 h-14 max-h-[56px] max-w-[56px] min-h-[56px] rounded-full box-border items-center outline-none border-none justify-center'>
        <img className='min-w-[56px] w-14 h-14 max-h-[56px] max-w-[56px] min-h-[56px] block box-border object-cover' src={add} alt="" />
      </button>}
    </div>
  );
}

export default App;
