const course={
    coursename: "javascript",
    course_price:1999,
    courseteachername: "vikram yadav"

}
// course.ccourseteachername
const { courseteachername}=course//  courseteachername ko destructute   karenge ab 
// console.log(courseteachername);
const { courseteachername: apple}=course // courseteachername ka apple karna hi destructur karna kehte hai
console.log(apple);


