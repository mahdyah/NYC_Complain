let bronx = document.getElementById('bronx')
let manhattan = document.getElementById('manhattan')
let brooklyn = document.getElementById('brooklyn')
let queens = document.getElementById('queens')
let statenIsland = document.getElementById('staten-island')
let num = document.querySelector('input')
const container = document.querySelector('.container')
const container2 = document.querySelector('.container2')
function getData(input) {
    let number = num.value || 10
    fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${number}&borough=${input}`)
        .then(response => response.json()) //parsing the res to json
        .then(result => {
            console.log(result)
            for (let i = 0; i < number; i++) {
                const div1 = document.createElement('div')
                div1.id = 'div1'
                const div2 = document.createElement('div')
                const p1 = document.createElement('p')
                p1.id = 'p1'
                const p2 = document.createElement('p')
                p2.id = 'p2'
                const btn = document.createElement('button')
                btn.id = 'buttons'
                const numbers=document.createElement('p')
                numbers.id='p3'


                const container2=document.querySelector('.container2')
              let count=1
                for (let j=i+1;j<number-1;j++){
                    if(result[i].descriptor==result[j].descriptor){
                        count++
                    }
                    if(result[i].descriptor !=result[i+1].descriptor )
                 numbers.textContent=result[i].descriptor +` : `+ count   
                }
                
     container2.append(numbers)


                const container=document.querySelector('.container')
                p1.textContent = (result[i].descriptor)
                p2.textContent = result[i].resolution_description
                btn.textContent = "WHAT DID THE POLICE DO?"
                div2.appendChild(btn)
                div1.appendChild(p1)  
                div2.appendChild(p2)
                div1.append(div2)
              container.append(div1)
                p2.style.visibility = 'hidden'
                
               
          
                } 
          
           const div1=document.querySelectorAll('#div1')
            const container=document.querySelector('.container')
        
            var list=[].slice.call(div1).sort(function(a,b){
                return a.textContent>b.textContent? 1:-1;
            });
            list.forEach(function(p) {
                container.appendChild(p)
                
            });
            const button=document.querySelectorAll('#buttons')
            const resolution=document.querySelectorAll('#p2')
           
            for (let i = 0; i < number; i++) {
                button[i].addEventListener('click', ()=>{ 
                    resolution[i].style.visibility = 'visible'
                    
                     }
                        )
            }



        })
 
           
.catch(err => console.log(err)) // handle errors
}
bronx.addEventListener('click', ()=>{

    getData('BRONX')

})
manhattan.addEventListener('click', ()=>{

    getData('MANHATTAN')
})
brooklyn.addEventListener('click', ()=>{

    getData('BROOKLYN')
})
queens.addEventListener('click', ()=>{

    getData('QUEENS')
})
statenIsland.addEventListener('click', ()=>{

    getData('STATEN ISLAND')
})

