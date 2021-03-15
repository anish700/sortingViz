async function insertionSort(arr){
    let i,j;
    let n=arr.length;

    for( i=1;i<n;++i){
        let key=arr[i] ;
        let j=i-1;
        while (j>=0 && arr[j]>key){
             let style1 = window.getComputedStyle(arr[j+1]);
             let style2 = window.getComputedStyle(arr[j]);
             let height1 = style1.getPropertyValue("height");
             let height2 = style2.getPropertyValue("height");
             height1=parseInt(height1.substring(0,n-2) ) ;
             height2=parseInt(height2.substring(0,n-2) ) ;

             arr[i].style.background="red";
             arr[j].style.background="red";
                height1=height2;
                j=j-1;
            }
            height1=key;          
            arr[i].style.background="greenyellow";
            arr[j].style.background="turquoise";
        }            

    }
    arr[n-1].style.background="greenyellow";

}

 