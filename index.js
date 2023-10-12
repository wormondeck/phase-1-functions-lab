function distanceFromHqInBlocks(pickUpLocation) {
    
     const headquartersLocation = 42;
    
     const distance = pickUpLocation - headquartersLocation;
    
     return Math.abs(distance);
 }

 function distanceFromHqInFeet(pickUpLocation) {
    
     const headquartersLocation = 42;

     const distance = pickUpLocation - headquartersLocation;
 
     return Math.abs(distance) * 264;
    
 }

 function distanceTravelledInFeet(start, destination) {
     const headquartersLocation = start;
    
     const pickUpLocation = destination;
    
     const distance = pickUpLocation - headquartersLocation;
    
     return Math.abs(distance) * 264;
 }

function calculatesFarePrice(start, destination) {
         const distance = Math.abs(destination - start) * 264;
      
         if (distance <= 400) {
           return 0;
         }
         if (distance >= 400 && distance <= 2000) {
           return ((distance - 400) * 0.02);
         }
         if (distance > 2000 && distance <= 2500){
           return 25;
         }
         if (distance >= 2500 ) {
             return 'cannot travel that far';
         }

 }

