
async function msort(arr){
    if (arr.length < 2) {
        return arr;
          }
    
      const mid = Math.floor(arr.length / 2);
      const left = arr.slice(0, mid);
      const right = arr.slice(mid);
    
      return merge(msort(left), msort(right));
    }



async function merge(arr, left , mid , right){
    let arr = [];
    let n=arr.length;

    while (left.length && right.length) {
        let temp_arr=[];
        temp_arr =getValFromCSS(arr[j] , arr[j+1] ,n);
           let height1=temp_arr[0];
           let height2=temp_arr[1];

        if (left[0] < right[0]) {
          arr.push(left.shift());
        } else {
          arr.push(right.shift());
        }
      }
      return arr.concat(left.slice().concat(right.slice()));
  
    

}

