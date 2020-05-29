"use strict";

const countRec = (points) => {
  let count = 0;
  let result = [];

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        for (let l = k + 1; l < points.length; l++) {
          // console.log(points[i], points[j], points[k], points[l])
          //(2,2) i
          //(2,4) j
          //(2,4) k
          //(4,2) l
          if (
            points[i].x === points[j].x &&
            points[k].x === points[l].x &&
            points[i].y === points[k].y &&
            points[j].y === points[l].y
          ) {
            count++;
            //console.log("puntos :", points[i], points[j], points[k], points[l]);
            result.push([points[i], points[j], points[k], points[l]]);
          }
        }
      }
    }
  }
  console.log("Rectangles #", count);
  console.log(result)
  return result;
};

module.exports = countRec;

//ordena el array de menor a mayor
/*  points.sort((a,b)=>{
      if(a.x>b.x){return 1}
      if(a.x<b.x){return -1}
      return 0
  }) */
