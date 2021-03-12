const quiz_button = document.querySelector('#quiz_start');
const exit_button = document.querySelector('#exit');

const airtable = document.querySelector('#airtable_container');

quiz_button.addEventListener('click', (e)=> {
    quizMaker();

});

exit_button.addEventListener('click', (e)=>{
    exit();
});



const quizMaker = () => {
    alert("lets play quiz. if you are correct, you will ");
    let answer1 = confirm('quiz 1. Do you want to see my airtable?');
    
    if(answer1){
        let answer2 = confirm('quiz 2. Are u a human?');
        if(answer2){
            let answer3 = confirm('quiz 3. Do you want to enter now?')
            if(answer3){
                airtable.classList.remove("hidden");
                quiz_button.classList.add("hidden");
            }
        }
    }
}

const exit = () =>{

    airtable.classList.add("hidden");
    quiz_button.classList.remove("hidden");
};



