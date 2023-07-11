console.log("this is exportable file");

function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length;
}
console.log(average([4,5,6]));

module.exports={
    avg:average,
    name:"harry"
}