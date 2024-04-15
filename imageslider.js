let image=["a.jpg","b.jpg","c.jpg","d.jpg"]
let index=0

document.getElementById("slider").src=image[index]


const next=()=>{
    index=index+1
    if (index==image.length)
    {
        index=0
    }
    
    document.getElementById("slider").src=image[index]
  
}

const previous=()=>{
    index=index-1
    if (index<0)
    {
        index=image.length-1
    }
    
    document.getElementById("slider").src=image[index]
  
}