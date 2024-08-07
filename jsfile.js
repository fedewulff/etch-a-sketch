

const button =document.querySelector(`.button`);
const container=document.querySelector(`.container`);
const input=document.querySelector(`input`);
const title=document.querySelectorAll(`span`)
const error=document.querySelector(`.error`)

container.style.display=`flex`;
container.style.padding=`5px`;
container.style.justifyContent=`center`
//container.style.border=`2px solid green`




function randomColor(){
    const array = [0,1,2,3,4,5,6,7,8,9,`A`,`B`,`C`,`D`,`E`,`F`];
    let background = ``;
    for(let i=0; i<6; i++){
        background = background + array[Math.floor(Math.random()*16)];
    }
    return `#${background}`
}

title.forEach(function(item){
    item.style.color=randomColor()
    setInterval(function(){
        item.style.color = randomColor();    
    },1500) 
})


input.addEventListener(`keyup`,function(enter){
    if (enter.key === `Enter`){
        button.click();
    }
    
})

button.addEventListener(`click`,function(){
    
    button.style.background = `#1589FF`;
    button.style.transform = `translateY(2.5px)`
    button.style.border = `0.2rem solid #0059FF`;
    button.style.boxShadow =`0px 0.1rem #00BFFF`;
    button.style.transition = `0.6s`;
    setTimeout(function(){
        button.style.transform = `translateY(-2.5px)`
        button.style.background = `#08A04B`;
        button.style.border = `0.2rem solid #27742C`;
        button.style.boxShadow =`0px 0.4rem #4CC417`;
        button.style.transition = `0.6s`;
    },600)


    if(input.value>30 || input.value <= 0){
        container.textContent = ``
        error.textContent = `Number must be between 1 and 30`  
        return;
    }

    if(isNaN(input.value)){
        container.textContent = ``
        error.textContent = `Please enter a number`
        return;    
    }

    container.textContent = ``

    if(input.value<=30 || input.value > 0){

     error.textContent = ``
    
    for(x=1; x<=input.value; x++){
        const row = document.createElement(`div`);
        // row.classList.add(`row`);
        // row.textContent = x + `i`;
        // row.style.border=`1px solid red`
        // row.style.width=`${400/number}px`
        // row.style.height= `${400/number}px`
        // row.style.border =`1px solid red`
        // row.style.marginBottom=`1rem`
        container.appendChild(row);
        
        for(y=0; y<input.value; y++){
            const column = document.createElement(`div`);
            column.classList.add(`column`)
            // column.textContent = y + `i`;
            column.style.width=`${400/input.value}px`
            column.style.height= `${400/input.value}px`
            column.style.margin=`0.2rem 0.2rem 0 0`
            column.style.border =`1px solid #F8F6F0`
            column.style.borderRadius=`15%`
            //column.setAttribute(`style`,`width:30px;height:30px;margin:0.2rem 0.2rem;border :1px solid blue`)
            row.appendChild(column)



          
            //let color = randomColor();

            //column.style.borderColor= randomColor();
            
            // function darkSquare(){
            //     const darkening = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]
            //     let colorDark = 0
            //     for ( let c=0; c<darkening.length; c++){
            //          colorDark=darkening[c];
            //          console.log(colorDark)
            //     }
            // }
           
            const darkening = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]
            let opac = darkening[Math.floor(Math.random()*darkening.length)]
            console.log(opac)

            column.addEventListener(`mouseenter`,(event)=>{
                event.target.style.opacity = opac;
                event.target.style.backgroundColor = randomColor();
               
                setTimeout(function(){
                    event.target.style.backgroundColor = ``;
                    event.target.style.opacity=``;
                },800) 
            })
            // column.addEventListener(`mouseout`,(event)=>{
            //     event.target.style.backgroundColor = ""; 
            // })
            
        }
    }
    
    }

}); 



