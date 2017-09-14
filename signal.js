const Point = require('./point.js');

let Signal = function(array){
  let numberOfPoints = array.length;
  let points = array;
  let transformedPoints = array;
  let range =
  let period =

  function getRange(){return range;}
  function getPeriod(){return period;}
  function getPointArray(){return points;}

  function shiftX(value){
    for(var=0; a<numberOfPoints; a++){
      let tempx = transformedPoints[a].getX();
      let tempy = transformedPoints[a].getY();
      tempx += value;
      transformedPoints[a]= new Point(tempx, tempy);
    }
  }

  function shiftY(value){
    for(var=0; a<numberOfPoints; a++){
      let tempx = transformedPoints[a].getX();
      let tempy = transformedPoints[a].getY();
      tempy += value;
      transformedPoints[a]= new Point(tempx, tempy);

    }
  }

  function stretchX(value){
    for(var a=0; a<numberOfPoints; a++){
      let tempx = transformedPoints[a].getX();
      let tempy = transformedPoints[a].getY();
      tempx *= value;
      transformedPoints[a]= new Point(tempx, tempy);
    }
  }

  function stretchY(value){
    for(var a=0; a<numberOfPoints; a++){
      let tempx = transformedPoints[a].getX();
      let tempy = transformedPoints[a].getY();
      tempy *= value;
      transformedPoints[a]= new Point(tempx, tempy);
    }
  }

  outputOf(xvalue){
    for(let x=0; x<numberOfPoints; x++){
      if(points.getX()[x] == xvalue){
        return points.getY();
      }
    }
    console.log("Your x-value does not have a y-value")
  }

  function calculateSpan(array,coordinate){
    let min;
    let max;
    if(coordinate == "x"){
      min = points[0].getX();
      max = points[0].getX();
      for(var a=1; a<numberOfPoints; a++){
        if(points[a].getX()<min){
          min = points[a].getX();
        }
        if(points[a].getX()>max){
          max = points[a].getX();
        }
      }
      return max-min;
    }
    else if(coordinate == "y"){
      min = points[0].getX();
      max = points[0].getX();
      for(var a=1; a<numberOfPoints; a++){
        if(points[a].getX()<min){
          min = points[a].getX();
        }
        if(points[a].getX()>max){
          max = points[a].getX();
        }
      }
      return max-min;
    }
  }
}
