
//date format
document.addEventListener('DOMContentLoaded', function() {
    function formatDate() {
        const today = new Date();
        let dateFormat = today.toDateString().split(' ');
        return `${dateFormat[0]}, ${dateFormat[1]} ${dateFormat[2]} ${dateFormat[3]}`;
    }
    document.getElementById('currentDate').innerText = formatDate();  


    
    document.getElementById('nextPage').addEventListener('click', function goNextPage(){
        window.location.href = "./newpage.html";
        goNextPage()
    })
  
    






    const completeButtons = document.querySelectorAll('.complete-btn');

    for (let i = 0; i < completeButtons.length; i++) {
        let singleButton = completeButtons[i];

        singleButton.addEventListener('click', function(event) {
            
            singleButton.setAttribute('disabled', true);
            alert("Board Updated Successful...");
            const completedTask= singleButton.getAttribute("disabled") === "true" ? 1 : 0;
            const remainingTask = parseInt(document.getElementById("task-assigned-number").innerText);
            const totalTaskAssigned =  remainingTask - completedTask;
            document.getElementById("task-assigned-number").innerText = totalTaskAssigned;
            const currentJob = parseInt(document.getElementById('total-job').innerText);
            const remainingJob = currentJob + completedTask;
            document.getElementById('total-job').innerText = remainingJob;
            if(totalTaskAssigned === 0){
                alert('"Congrats!! You have completed all the current task"')
            }
            const taskTitle= document.querySelectorAll(".task-title")[i].innerText;
            const taskHistory = document.getElementById("task-history");
            const historyDiv = document.createElement("div")
            historyDiv.innerHTML = `            
             <div class=" text-black p-2 text-justify rounded-lg space-y-12   indivisualHistory bg-[#F4F7FF]  ">
                <p class = "font-bold max-w-96 p-6  ">You have Completed the ${taskTitle} at ${formatTime()} </p>      
            </div> `
            taskHistory.appendChild(historyDiv);

            
        });
    }
});

//time format
function formatTime() {
    const today = new Date();
    return today.toLocaleTimeString();  
}

document.getElementById("clear-history").addEventListener("click", function(event){
    const histories = document.getElementsByClassName("indivisualHistory");
    for(let i= 0; i < histories.length; i++){
        const history= histories[i];
        history.classList.add("hidden");
    }

});


//color change 

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)})`;
}

document.getElementById("color-change").addEventListener('click', function(){
    document.body.style.backgroundColor = getRandomColor();
})
    


