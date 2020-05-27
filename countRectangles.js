"use strict";

const countRec = (points) => {
  let count = 0;

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      // console.log(points[i], points[j])
      if (points[i].x === points[j].x) {
        console.log(points[i], points[j]);

        count++;
      }
    }
  }
  console.log(count / 2);
};

module.exports = countRec;
