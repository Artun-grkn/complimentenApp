//fetch compliments
async function fetchCompliments() {
   try {
        const response = await fetch('./data/complimenten.json')
        console.log(response);
        if (!response.ok) {
            throw new Error("ik kan de json file niet laden. Check spelling en pad")
        }
        const data = await response.json(); 
        console.log(data);
        return data.complimenten;
   } catch (error) {
    console.error("ik kan de complimenten niet verkrijgen",error);
    return["je bent geweldig! , Blijf stralen , Code met passie"];

   } finally { //finally = close file / break

   };
}
   



//display compliments
function displayRandomCompliment(compliments) {
    const complimentElement = document.getElementById('compliment');
    
    const randomCompliment = compliments [Math.floor(Math.random() * compliments.length)];
    console.log(randomCompliment);
    complimentElement.textContent = randomCompliment;

    
};



// main function IIFE (immediately invoked function expression)
(async()=>{  //async = HOLD/WAIT
    const compliments = await fetchCompliments();
    const button = document.getElementById('generate-btn');
    //luister naar de button
    button.addEventListener('click', () => displayRandomCompliment(compliments) ); //luister naar de button als er geklikt wordt wordt er een compliment gegeven
})();

