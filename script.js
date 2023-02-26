function toogleMode(){
    const html = document.documentElement

    //estrutura em detalhes
    //if(html.classList.contains('light')){
    //    html.classList.remove('light')
    //}
    //else{
    //    html.classList.add('light')}
    
   html.classList.toggle('light')//forma simplificada
    // pegar a tag img
    const img = document.querySelector("#profile img")
    //substituir a img
    if(html.classList.contains('light')){
    //se tiver a cond light mode, adicionar a img light
    img.setAttribute("src", "./assets/Avatar-light.png")
    }
    else{
        //se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/Avatar.png")
    }  
}