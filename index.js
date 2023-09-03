window.addEventListener("DOMContentLoaded",()=>{

    var view = {

        items:10,
        elements:"",

        draw(){
            let html = "";

            for(let x = 0; x < this.items; x++)
                html += `<li class="item" index="${x}">${x + 1}</li>`;

            (document.getElementById("container")).innerHTML = html;
        },

        render(){

            this.elements = (document.getElementsByClassName("item"));

            for(let x = 0; x < this.items; x++)
                this.elements[x].addEventListener("click",(event)=> this.play(event));   
        },

        play(event){
            let element = event.target.getAttribute("index");

            
        }

    }

    view.draw();
    view.render();

});