//const marvel_heros=["thor" , "ironman", "spiderman"]
//const dc_heros=["superman","flash","batman"]
/*marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3] [2]);*/


/*const allheros =marvel_heros.concat(dc_heros)
console.log(allheros);*/



// spread oprater  more than batter  concat
//const all_new_heros =[...marvel_heros,...dc_heros]
//console.log(all_new_heros);





//if array ke andar array ho to single array mai convert karenge 
const real_array=[1,2,3,[3,2,4],7,8,[6,9,3,5,[3,4,7]]]
const real_another_array= real_array.flat(Infinity)
console.log(real_another_array);