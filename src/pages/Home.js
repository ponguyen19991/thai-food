import React, { useState, useEffect } from 'react';
import { AiFillPlusSquare } from "react-icons/ai"
import { FaShoppingBasket } from "react-icons/fa"
import { shiftArray, unshiftArray, getImageClassName } from '../utils/carouselUtils';
import { ToastContainer, toast } from 'react-toastify';
import i18n from '../i18n';
import CarouselButtons from "../components/Button-Carousel/Button.jsx"
import 'react-toastify/dist/ReactToastify.css';
import '../styles/scss/home.scss'

import { useTranslation } from 'react-i18next';

// import images1 from '../dummy-data';

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tranSlate, setTranslate] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const { t, i18n } = useTranslation();

  const images1 = [
    { 
      id: 0,
      title: 'ผัดไทย',
      subtitle: "Pad Thai",
      description: 'description-pad-thai',
      descriptionFood: 'main-description-pad-thai',
      src: "/images/Thai Papaya Salad.png",
    },
    {
      id: 1,
      title: 'ต้มยำ',
      subtitle: "Tom Yum",
      description: 'description-tom-yum',
      descriptionFood: "main-description-tom-yum",
      src: "/images/Sour Sausage Thai.png",
    },
    {
      id: 2,
      title: 'ข้าวผัด',
      subtitle: "Thai Fried Rice",
      description: "description-thai-rice",
      descriptionFood: "main-description-thai-rice",
      src: "/images/padThai.png",
    },
    {
      id: 3,
      title: 'ยำส้มโอ',
      subtitle: "Thai Papaya Salad",
      description: "description-papaya-salad",
      descriptionFood: "main-description-papaya-salad",
      src: "/images/TomYum.png",
    },
    {
      id: 4,
      title: 'ไส้อั่ว',
      subtitle: "Sour Sausage",
      description: "description-sour-sausage",
      descriptionFood: "main-description-sour-sausage",
      src: "/images/THAI FRIED RICE.png",
    },
  ];

  const [images, setImages] = useState(images1);
  
  const currentImage = images[activeIndex];
  

  const notify = () => toast(t("notification-coming-soon"));

  useEffect(() => {
    // Lấy giá trị đã lưu trong localStorage nếu có
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage);
    }
  }, []);

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    setSelectedLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('selectedLanguage', selectedLanguage); // Lưu giá trị vào localStorage
  }

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
          <p>{t(currentImage.description)}</p>
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
              {t(currentImage.descriptionFood)}
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
          <a href="#" onClick={notify}>{t('review')} <AiFillPlusSquare/></a>
      </div>

        <div className="order-food">
          <a href="#" onClick={notify}><FaShoppingBasket /> {t('order-now')}</a>
          <ToastContainer
            newestOnTop={false}
            rtl={false}
            autoClose={2000}
            draggable
            closeOnClick={true}
            pauseOnHover
          />
        </div>


        <div className='languages'>
          <select value={selectedLanguage} onChange={changeLanguage}>
            <option value="th">Thai</option>
            <option value="en">English</option>
            <option value='vn'>Vietnamese</option>
          </select>
        </div>

    </div>
  );
}
