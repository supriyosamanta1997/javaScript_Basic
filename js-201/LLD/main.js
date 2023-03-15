class Vehical{
    constructor(type,regNumber,color)
    {
        this._type=type;
        this._regNumber=regNumber;
        this._color=color;
    }
    get type()
    {
        return this._type
    }
    set type(value)
    {
        return this._type=value
    }
}

// Car

 class Car extends Vehical{
     constructor(regNumber,color)
     {
        super("Car",regNumber,color)
     }
 }

//  Bike

class Bike extends Vehical{
    constructor(regNumber,color)
    {
       super("Bike",regNumber,color)
    }
}
// truck

class Truck extends Vehical{
    constructor(regNumber,color)
    {
       super("Car",regNumber,color)
    }
}



//  let c1= new Car ("DL-1234","Black")
//  let b1= new Bike ("MH-2342","Blue");
//  let t1= new Truck ("WB-8997","white");
//  console.log(c1,b1,t1);



class Slot{
    constructor(type,number)
    {
        this.type=type;
        this.number=number;
        this._isBooked=false;
    }

    get isBooked()
    {
        return this._isBooked
    }
    set isBooked(value)
    {
         return this._isBooked=value
    }
}
// let s1=new Slot("Bike",1);
// s1.isBooked=true;
// console.log(s1.isBooked)

// parkingFloor
class parkingFloor{
    constructor(floorNumber,maxSpots)
    {
        this.floorNumber=floorNumber;
        this._parkingSpots=[];

        for(var i=0;i<maxSpots;i++)
        {
            if (i === 0) {
                this._parkingSpots.push(new Slot("car", i));
              } else if (i === 1) {
                this._parkingSpots.push(new Slot("bike", i));
              } else {
                this._parkingSpots.push(new Slot("truck", i));
              } 
        }
    
    }


   
    get parkingSpots()
    {
        return this._parkingSpots;
    }
    set parkingSpots(value)
    {
        this._parkingSpots=value
    }
}

// let p1=new parkingFloor(0,3)
// console.log(p1)

class ParkingLot {
    constructor(number) {
      this._floors = [];
      this._numberOfFloors = number;
  
      for (let i = 0; i < number; i++) {
        this._floors.push(new parkingFloor(i, 3));
      }
    }
  
    get numberOfFloors() {
      return this._numberOfFloors;
    }
  
    get floors() {
      return this._floors;
    }
}
// let pl1=new ParkingLot(3);
// console.log(pl1)

// ticket

class Ticket {
    constructor(floorNumber, slotNumber) {
      this.floorNumber = floorNumber;
      this.slotNumber = slotNumber;
      this.issuedAt = new Date();
    }
  }
  