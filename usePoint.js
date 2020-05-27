const usePoints = (listArray) => {
    const setPoints = (x,y) => {
        if(!parseInt(x) || !parseInt(y)){
            console.error('Point not valid')
            return ;
        }
        const point = {
            x, 
            y
        }
        listArray.push(point)  
    } 

    const points = () => {
        return listArray
    }
    
    
return [
        points,
        setPoints
    ]
    
}


module.exports= usePoints;