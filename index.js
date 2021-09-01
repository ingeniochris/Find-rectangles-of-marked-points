const usePoints = require('./usePoint');
const countRec = require ('./countRectangles');

const [points, setPoints] = usePoints([])


const Main = _ =>{    
    setPoints(2,2);
    setPoints(2,4);
    setPoints(7,2);
    setPoints(2,8); 
    setPoints(3,3);
    setPoints(3,6);
    setPoints(4,2);
    setPoints(4,4);
    setPoints(4,8);
    setPoints(5,3);
    setPoints(5,6);
    setPoints(3,3);
    setPoints(7,2);
    setPoints(7,8);
    setPoints(8,2);
    setPoints(8,6);
    setPoints(10,6); 
    
    countRec(points())
};

Main();