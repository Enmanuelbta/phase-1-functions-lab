// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
if (someValue>42){
   return(someValue-42)
}
else {
   return(42-someValue)
}
}
function distanceFromHqInFeet(someValue) {
 return distanceFromHqInBlocks(someValue)*264;
}

function distanceTravelledInFeet(start,destination){
   if (destination>start){
      return((destination-start)*264)
   }
   else 
   return ((start-destination)*264)
}
function calculatesFarePrice(start,destination){
   let dis = distanceTravelledInFeet(start,destination);
   if (dis<= 400){
     return 0;
   }
   if (dis>=400 && dis<=2000){
     return (dis-400)* 0.02;
   }
   else if(dis>=2000&& dis<=2500){
     return 25;
   }
   else if (dis > 2500){
     return "cannot travel that far";
   }
 }



