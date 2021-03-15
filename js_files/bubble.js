 async function bubbleSort(arr){
    let i,j;
    let n=arr.length;

    for(i=0;i<n;i++){
        for (j=0;j<n-i-1;j++){
            let temp_arr=[];
            let height1 , height2=0;
            temp_arr =getValFromCSS(arr[j] , arr[j+1] ,n);
            height1=temp_arr[0];
            height2=temp_arr[1];

            console.log( height1 ," : ", height2);
             arr[j].style.background="red";
             arr[j+1].style.background="red";
            if(height1>height2){
                await new Promise(resolve => {
                    setTimeout(() => {
                      resolve('resolved');
                    }, 0.5);
                });
                
                swap(arr[j], arr[j+1]);
            }          
            arr[j].style.background="turquoise";
            arr[j+1].style.background="greenyellow";
        }            
        arr[0].style.background="greenyellow";

    }
}

 