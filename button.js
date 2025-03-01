
//date format
document.addEventListener('DOMContentLoaded', function() {
    function formatDate() {
        const today = new Date();
        let dateFormat = today.toDateString().split(' ');
        return `${dateFormat[0]}, ${dateFormat[1]} ${dateFormat[2]} ${dateFormat[3]}`;
    }
    document.getElementById('currentDate').innerText = formatDate();  



    
    
  
    






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
            if(remainingTask === 0){
                alert('"Congrats!! You have completed all the current task"')
            }

            const taskTitle= document.querySelectorAll(".task-title")[i].innerText;
            const taskHistory = document.getElementById("task-history");
            const historyDiv = document.createElement("div")
            historyDiv.innerHTML = `            
             <div class="bg-white text-black p-2 text-justify rounded-lg space-y-2 indivisualHistory">
                <p>You have Completed the ${taskTitle} at ${formatTime()} </p>      
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