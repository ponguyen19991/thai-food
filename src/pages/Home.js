import React, { useState } from 'react';
import { AiFillPlusSquare } from "react-icons/ai"
import { FaShoppingBasket } from "react-icons/fa"
import { shiftArray, unshiftArray, getImageClassName } from '../utils/carouselUtils';
import { ToastContainer, toast } from 'react-toastify';
import CarouselButtons from "../components/Button-Carousel/Button.jsx"
import 'react-toastify/dist/ReactToastify.css';
import '../styles/scss/home.scss'

// import images1 from '../dummy-data';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tranSlate, setTranslate] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  
  const images1 = [
    { 
      id: 0,
      title: 'ผัดไทย',
      subtitle: "Pad Thai",
      description: "Made by shrimp, tofu, eggs and rice noodles",
      descriptionFood: "It is often garnished with crushed peanuts and served with lime wedges and fresh herbs. The specific chef or cook who prepares Pad Thai can vary depending on the restaurant or household where it is being made.",
      src: "/images/Thai Papaya Salad.png"
    },
    {
      id: 1,
      title: 'ต้มยำ',
      subtitle: "Tom Yum",
      description: "Made by chili peppers, mushrooms, shrimp or chicken,...",
      descriptionFood: "Tom Yum can be made by individuals at home using fresh ingredients and traditional Thai seasonings. It is also commonly served in Thai restaurants and can be found in various regions of Thailand. The soup is known for its tangy, aromatic, and spicy taste, which is a signature characteristic of Thai cuisine.",
      src: "/images/Sour Sausage Thai.png",
    },
    {
      id: 2,
      title: 'ข้าวผัด',
      subtitle: "Thai Fried Rice",
      description: "Made by stir-frying cooked rice with various ingredients",
      descriptionFood: "Thai Fried Rice can be made by both home cooks and professional chefs. It is a versatile dish that can be customized with different ingredients and spice levels according to personal preferences. It is widely available in Thai restaurants worldwide and is a popular choice for both locals and visitors.",
      src: "/images/padThai.png",
    },
    {
      id: 3,
      title: 'ยำส้มโอ',
      subtitle: "Thai Papaya Salad",
      description: "Made by green papaya, tomatoes, fish sauce,...",
      descriptionFood: "The ingredients are mixed together in a mortar and pestle, which helps to release the flavors and textures of the ingredients. Som Tam can be made by individuals at home, as well as by street food vendors, restaurants, and food establishments in Thailand. It is a refreshing and flavorful salad that is enjoyed by many people.",
      src: "/images/TomYum.png",
    },
    {
      id: 4,
      title: 'ไส้อั่ว',
      subtitle: "Sour Sausage",
      description: "Made by pork or beef with cooked rice",
      descriptionFood: "The specific individual or establishment that makes sour sausage can vary, as it is a popular homemade dish in Thailand and Laos. Commercially produced sour sausage may also be available from specialty food manufacturers.",
      src: "/images/THAI FRIED RICE.png",
    },
  ];

  const [images, setImages] = useState(images1);
  const currentImage = images[activeIndex];

  const notify = () => toast("Thank you for your interest in my website. Currently, this feature is being developed and will be available soon.");

  function shiftArray(arr) {
    const te = [...arr];
    const lastItem = te.pop();

    te.unshift(lastItem);
    return te;
  }

  const unshiftArray = (arr) => {
    return arr.slice(1).concat(arr.slice(0, 1))
  };

  const goToPrevious = () => {
    setImages(unshiftArray(images));
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTranslate("left");
  };

  const goToNext = () => {
    setImages(shiftArray(images));
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setTranslate("right");
  };

  const getImageClassName = (index) => {
    if (index === 2) {
      return "center";
    } else if (index === 1 || index === 3) {
      return "pre-center";
    } else {
      return "last";
    }
  };

  const handleImageClick = (index) => {
    setActiveIndex(index); // Cập nhật giá trị activeIndex khi người dùng nhấp vào một hình ảnh
  };

  return (
    <div className="carousel">
      {currentImage && ( // Kiểm tra nếu currentImage tồn tại
        <div className="image-title content">
          <h1>{currentImage.title}</h1>
          <h3>{currentImage.subtitle}</h3>
          <p>{currentImage.description}</p>
        </div>
      )}

      <div className="carousel-images">
        {images.map((image, index) => (
          <div className="container-img" key={image.id}>
            <img
              width={200}
              className={`carousel-image ${tranSlate} ${getImageClassName(index)}`}
              src={image.src}
              alt={`Image ${image.id}`}
            />
            
          </div>
        ))}
      </div>

      {/* Các nút điều hướng */}
      <CarouselButtons
        goToPrevious={goToPrevious}
        goToNext={goToNext}
        images={images}
        currentIndex={currentIndex}
        handleImageClick={handleImageClick}
      />

      <div className="description-food">
        {currentImage && (
          <span>
            {currentImage.descriptionFood}
          </span>
        )}
      </div>

      <div className="clients-rated">
          <img src='/images/clients/meow1.jpg' alt='client 1' width={50} height={50}/>
          <img src='/images/clients/meow2.jpg' alt='client 2' width={50} height={50}/>
          <img src='/images/clients/meow3.jpg' alt='client 3' width={50} height={50}/>
          <img src='/images/clients/meow4.jpg' alt='client 4' width={50} height={50}/>
          <span>
            100+
          </span>
          <a href="#">Reviewed this <AiFillPlusSquare/></a>
      </div>

        <div className="order-food" onClick={notify}>
          <a href="#"><FaShoppingBasket /> ORDER NOW</a>
          <ToastContainer
            newestOnTop={false}
            rtl={false}
            autoClose={2000}
            draggable
            closeOnClick={true}
            pauseOnHover
          />
        </div>
    </div>
  );
}
