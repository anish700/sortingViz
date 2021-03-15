
//working 
async function selectionSort(arr){
    let i,j;
    let n=arr.length;

    for( i=0;i<n;i++){
        let min_idx=i ;
        for (j=i+1;j<n;j++){
             let style1 = window.getComputedStyle(arr[min_idx]);
             let style2 = window.getComputedStyle(arr[j]);
             let height1 = style1.getPropertyValue("height");
             let height2 = style2.getPropertyValue("height");
             height1=parseInt(height1.substring(0,n-2) ) ;
             height2=parseInt(height2.substring(0,n-2) ) ;

             arr[i].style.background="red";
             arr[j].style.background="red";
            if(height2 < height1){
                await new Promise(resolve => {
                    setTimeout(() => {
                      resolve('resolved');
                    }, 2);
                });
                swap(arr[i], arr[j]);
                min_idx=j;

            }          
            arr[i].style.background="greenyellow";
            arr[j].style.background="turquoise";
        }            

    }
    arr[n-1].style.background="greenyellow";

}

 