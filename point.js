var Point = function(xcor,ycor){
  let x = xcor;
  let y = ycor;

  function getX(){return x;}
  function getY(){return y;}

  function magnitude(){
    let dist = Math.sqrt(x*x + y*y);
    return dist;
  }

}
