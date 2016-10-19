var animatePoints = function() {

//WORKING CODE
    var points = document.getElementsByClassName('point');
    
    var revealPoint = function(index){
        points[index].style.opacity = 1;
        points[index].style.transform = "scaleX(1) translateY(0)";
        points[index].style.msTransform = "scaleX(1) translateY(0)";
        points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
    }
    
    for(var i = 0; i < points.length; i++){
        revealPoint(i);
        
    };
    
// MY ATTEMPT
//    
//    var points = document.querySelectorAll('point');
//    
//    for(var i = 0; i < points.length; i++){
//        point[i].style.opacity = 1;
//        point[i].style.transform = "scaleX(1) translateY(0)";
//        point[i].style.msTransform = "scaleX(1) translateY(0)";
//        point[i].style.WebkitTransform = "scaleX(1) translateY(0)";
//    };
//    
    
// ORIGINAL
//     var points = document.getElementsByClassName('point');
// 
//     var revealFirstPoint = function() {
//         points[0].style.opacity = 1;
//         points[0].style.transform = "scaleX(1) translateY(0)";
//         points[0].style.msTransform = "scaleX(1) translateY(0)";
//         points[0].style.WebkitTransform = "scaleX(1) translateY(0)";
//     };
// 
//     var revealSecondPoint = function() {
//         points[1].style.opacity = 1;
//         points[1].style.transform = "scaleX(1) translateY(0)";
//         points[1].style.msTransform = "scaleX(1) translateY(0)";
//         points[1].style.WebkitTransform = "scaleX(1) translateY(0)";
//     };
// 
//     var revealThirdPoint = function() {
//         points[2].style.opacity = 1;
//         points[2].style.transform = "scaleX(1) translateY(0)";
//         points[2].style.msTransform = "scaleX(1) translateY(0)";
//         points[2].style.WebkitTransform = "scaleX(1) translateY(0)";
//     };
// 
//     revealFirstPoint();
//     revealSecondPoint();
//     revealThirdPoint();
 
 };

//animatePoints();