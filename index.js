// Your code here
class Polygon {
    constructor(Array){
        this.Array=Array;
        this.count= Array.length;
    }

    get countSides(){
        return this.Array.length;
    }

    get perimeter(){
        if (!Array.isArray(this.Array)) return;
    let sum = 0;
    for (var i of this.Array) {
      sum += i
    }
    return sum
  }

}

class Triangle extends Polygon {
        get isValid() {
            if (!Array.isArray(this.Array)) return;
            if (this.count !== 3) return;
            let side1 = this.Array[0];
            let side2 = this.Array[1];
            let side3 = this.Array[2];
            return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1));
          }
  }
  
  class Square extends Polygon {
  
    get isValid() {
      if (!Array.isArray(this.Array)) return;
      if (this.count !== 4) return;
      let side1 = this.Array[0]
      let side2 = this.Array[1]
      let side3 = this.Array[2]
      let side4 = this.Array[3]
      return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }
  
    get area() {
      if (!Array.isArray(this.Array)) return;
      if (this.count !== 4) return;
      return this.Array[0] * this.Array[0]
    }
  }