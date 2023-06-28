export function goToPrevious(setImages, setCurrentIndex, setTranslate, images, currentIndex) {
    setImages(unshiftArray(images));
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTranslate("left");
  }
  
  export function goToNext(setImages, setCurrentIndex, setTranslate, images, currentIndex) {
    setImages(shiftArray(images));
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setTranslate("right");
  }
  
  export function handleImageClick(setActiveIndex, index) {
    setActiveIndex(index);
  }
  
  export function unshiftArray(arr) {
    return arr.slice(1).concat(arr.slice(0, 1));
  }

  function shiftArray(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    
    const te = [...arr];
    const lastItem = te.pop();
  
    te.unshift(lastItem);
    return te;
  }