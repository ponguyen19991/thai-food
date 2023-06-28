export function shiftArray(arr) {
    const te = [...arr];
    const lastItem = te.pop();
  
    te.unshift(lastItem);
    return te;
  }
  
  export const unshiftArray = (arr) => {
    return arr.slice(1).concat(arr.slice(0, 1))
  };
  
  export const getImageClassName = (index) => {
    if (index === 2) {
      return "center";
    } else if (index === 1 || index === 3) {
      return "pre-center";
    } else {
      return "last";
    }
  };

  const getClassName = (index) => {
    return getImageClassName(index);
  };