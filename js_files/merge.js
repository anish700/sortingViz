
function merge(a, b) {

  let c = []

  while (a.length && b.length) {
             let style1 = window.getComputedStyle(a[0]);
             let style2 = window.getComputedStyle(b[0]);
             let height1 = style1.getPropertyValue("height");
             let height2 = style2.getPropertyValue("height");
             height1=parseInt(height1.substring(0,n-2) ) ;
             height2=parseInt(height2.substring(0,n-2) ) ;
    c.push(height1 > height2 ? b.shift() : a.shift())
  }

  //if we still have values, let's add them at the end of `c`
  while (a.length) {
    c.push(a.shift())
  }
  while (b.length) {
    c.push(b.shift())
  }

}

async function mergeSort(a) {
  

  if (a.length < 2) return a
  let middle = Math.floor(a.length / 2)
  let a_l = a.slice(0, middle)
  let a_r = a.slice(middle, a.length)
  let sorted_l = mergeSort(a_l)
  let sorted_r = mergeSort(a_r)
  merge(sorted_l, sorted_r)

}