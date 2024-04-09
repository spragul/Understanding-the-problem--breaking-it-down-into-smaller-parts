//Write a function that finds the maximum and minimum elements in an array.

/*
[1,3,5,7,9,4]
minimum=1
maximum=9
*/

function minmax(arr){
    arr.sort((a,b)=>a-b);
    return "minimum:"+arr[0]+" "+"maximum:"+arr[arr.length-1]
}
console.log(minmax([1,5,8,6,3,2]))

function minmax1(arr){
    let minimum=arr[0];
    let maximum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>maximum){
            maximum=arr[i]
        }else if(arr[i]<minimum){
            minimum=arr[i]
        }
    }
    return "minimum:"+minimum+" "+"maximum:"+maximum
}
console.log(minmax1([1,5,8,6,3,2,9,0]))