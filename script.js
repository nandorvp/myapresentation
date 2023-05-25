function myFooter() {
    let copyDate = new Date()
    let yearNow = copyDate.getFullYear()

    document.getElementById("footer").innerHTML = `Made by <a href="#" target="_blank">Fernando Monteiro</a> &copy;${yearNow}`
}

function darkLight() {
    const getHtml = document.documentElement
    
    getHtml.classList.toggle("light")

    const getImg = document.querySelector("#profile img")
    

    if(getHtml.classList.contains("light")){
        getImg.setAttribute('src','./assets/fm-light.png')
        getImg.setAttribute('alt','Light Picture of Fernando Monteiro')
        
    } else {
        getImg.setAttribute('src','./assets/fm-dark.png')
        getImg.setAttribute('alt','Dark Picture of Fernando Monteiro')
      
    }
}