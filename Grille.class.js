class Grille {
    grille
    constructor(){
        this.grille=[

            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
            [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
            [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
            [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
            [0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],
            [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
            [0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],
            [0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
            [0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
            [2,2,2,2,2,2,2,0,1,1,1,0,2,2,2,2,2,2,2],
            [0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
            [0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
            [0,0,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,0],
            [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
            [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
            [0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0],
            [0,0,2,0,2,0,2,0,0,0,0,0,2,0,2,0,2,0,0],
            [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
            [0,2,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,2,0],
            [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        ]
    }
    affichegrille(){ 
        document.getElementById("grille").innerHTML=""
            for (let i=0; i<22;i++) {
                for (let j=0; j<19;j++) {
                    let elem=document.createElement("div")
                    elem.style.gridRowStart = i+1;
                    elem.style.gridColumnStart = j+1;
    
                    document.getElementById("grille").appendChild(elem)
    
                    if(this.grille[i][j]==0){
                        elem.className="mur"
                    }
    
                    else if (this.grille[i][j]==1){
                        elem.className="sol"
                    }
                
                    else {
                        elem.className="bonbon"
                    }
    
                }
            }
    
    }
}