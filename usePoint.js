const usePoints = (listArray) => {
  const setPoints = (x, y) => {
    if (!parseInt(x) || !parseInt(y) || x<=0 || y<=0) {
      console.error("La coordenada debe ser mayor a cero");
      return;
    }
    let point = {
      x,
      y,
    };
    listArray.push(point);
  };

  const points = () => {
    return listArray;
  };

  return [points, setPoints];
};

module.exports = usePoints;
