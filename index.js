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

    //test 1 rectangle
    /*setPoints(1,1)
    setPoints(3,3)
    setPoints(1,3)
    setPoints(3,1)*/

    //test 10 rectangles
    /*setPoints(2,1)
    setPoints(2,1)
    setPoints(2,2)
    setPoints(4,2)
    setPoints(4,1)
    setPoints(4,4)
    setPoints(2,4)
    setPoints(2,3)
    setPoints(4,-1)
    setPoints(4,3)*/

    //test 8 rectangles
   /*setPoints(-4,3)
    setPoints(-2,1)
    setPoints(-2,2)
    setPoints(-2,5)
    setPoints(-2,6)
    setPoints(0,4)
    setPoints(1,2)
    setPoints(3,2)
    setPoints(1,5)
    setPoints(3,5)
    setPoints(2,0)
    setPoints(4,0)
    setPoints(6,3)
    setPoints(2,-3)
    setPoints(4,-3)
    setPoints(0,5)
    setPoints(0,2)*/

    //test for 9 rectangles
    /*setPoints(-2,4)
    setPoints(2,4)
    setPoints(-2,-2)
    setPoints(4,7)
    setPoints(2,7)
    setPoints(-2,7)
    setPoints(4,4)
    setPoints(4,-2)
    setPoints(2,-2)*/

    //test for 1 rectangle
   /* setPoints(-2,1)
    setPoints(0,0)
    setPoints(2,1)
    setPoints(4,1)
    setPoints(4,3)
    setPoints(2,2)
    setPoints(1,4)
    setPoints(3,5)
    setPoints(1,2)*/
    
    countRec(
        points() 
    )
};

Main();