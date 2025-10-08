import React, { useState } from "react";
import bgImage1 from '../../../assets/img/01-bg-grunge.jpg';
import Shop1Img from '../../../assets/img/product-04-a-400x463.jpg';
import Shop2Img from '../../../assets/img/product-offer-002.jpg';
import Shop3Img from '../../../assets/img/product-grid-06.jpg';
import Shop4Img from '../../../assets/img/shop-women-img.jpg';
import Shop5Img from '../../../assets/img/product-grid-004.jpg';
import Shop6Img from '../../../assets/img/product-grid-01.jpg';

const products = [
  {
    id: 1,
    title: "Smart Watch",
    price: "$79.00",
    image: Shop1Img,
  },
  {
    id: 2,
    title: "Headphones",
    price: "$129.00",
    image: Shop2Img,
  },
  {
    id: 3,
    title: "Smartphone",
    price: "$299.00",
    image: Shop3Img,
  },
  {
    id: 4,
    title: "Laptop",
    price: "$799.00",
    image: Shop4Img,
  },
  {
    id: 5,
    title: "Tablet",
    price: "$229.00",
    image: Shop5Img,
  },
  {
    id: 6,
    title: "Speaker",
    price: "$59.00",
    image: Shop6Img,
  },
];

const Shop = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <main>
        <div className='min-w-[100%] min-h-[100vh]'>
          <div className='h-[500px] flex justify-center text-center  text-white items-center' style={{ backgroundImage: `url(${bgImage1})` }} >
            <div className="relative text-white min-h-screen flex items-center justify-center px-4">
              {/* Text */}
              <div className="text-center">
                <h1 className="text-6xl sm:text-8xl leading-tight " id='contact'>
                  Shop
                </h1>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="w-full bg-[#000000] text-white py-10">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className=" overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div
                      className="w-full h-72 overflow-hidden cursor-pointer"
                      onClick={() => openModal(product.image)}
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h6 className="text-lg font-semibold">{product.title}</h6>
                      <p className="text-gray-400 mt-2">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal */}
          {modalImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
              onClick={closeModal}
            >
              <div
                className="bg-white p-4 rounded-lg max-w-md w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-gray-700 text-xl font-bold"
                >
                  &times;
                </button>
                <div className="w-full h-72 overflow-hidden rounded">
                  <img
                    src={modalImage}
                    alt="Modal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      
    </main>
  );
};

export default Shop;