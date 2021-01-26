
// let nn=15;
let div = [];


function createBars(array_size=100){
    let nn=array_size;
    // let div = new Array(15);
//to refresh every time we click new-array btn
    var element = document.getElementById("bars-div");
    element.replaceChildren([]);

    var makeARandomNumber = function(){
        return 1+Math.floor(Math.random() *nn*3);
    }
    var array1=[];
    for (let i = 0; i < nn; i++) {
        var element = document.getElementById("bars-div"); //bars-div is the container
        array1[i]=makeARandomNumber() ;
        div[i] = document.createElement("div");
        div[i].className ="div-bar-class";
        div[i].style.height = array1[i]+"px";
        console.log(div[i].style.width);
        div[i].style.width = "10px";
        element.appendChild(div[i]);
    }
}

    var arr_size=document.querySelector("#arr-sz"); 
    var no_of_bar=arr_size.value;
    var speed=document.querySelector("#bar-spd"); 
    var bar_speed=arr_size.value;
    console.log(no_of_bar,bar_speed );
//getElementsByClassName returns an array of elements, addEventListener exists on elements.
document.getElementsByClassName("new_array")[0].addEventListener("click", function(){
        createBars();
});
arr_size.addEventListener("input",createBars(no_of_bar));

document.getElementsByClassName("bubble-sort")[0].addEventListener("click", function(){
    bubbleSort(div);
});
document.getElementsByClassName("selection-sort")[0].addEventListener("click", function(){
    selectionSort(div);
});
async function delay(){
    await new Promise(resolve => {
        setTimeout(() => {
          resolve('resolved');
        }, 2000);
    });
}


function swap(el1,el2)
    { 

      const style1 = window.getComputedStyle(el1);
      const style2 = window.getComputedStyle(el2);

      const transform1 = style1.getPropertyValue("height");
      const transform2 = style2.getPropertyValue("height");

      el1.style.height = transform2;
      el2.style.height = transform1;

    }
function getValFromCSS(el1 , el2,n){
    arr=[];
                 let style1 = window.getComputedStyle(el1);
                 let style2 = window.getComputedStyle(el2);
                 let height1 = style1.getPropertyValue("height");
                 let height2 = style2.getPropertyValue("height");
                 height1=parseInt(height1.substring(0,n-2) ) ;
                 height2=parseInt(height2.substring(0,n-2) ) ;
                 arr[0]=height1 ;
                 arr[1]=height2 ;

                 return arr;
    }    

function getValFromSpan(){

}    