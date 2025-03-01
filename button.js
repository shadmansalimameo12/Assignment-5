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
            
        });
    }
});
