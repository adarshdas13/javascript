//timeout - executes only once
// let tm = setTimeout( ()=>{
//     console.log("hello");
// },5000)
// clearTimeout(tm) //removes timeout

//interval - executes repeatedly on a loop given time
// let inter = setInterval( ()=> {
//     console.log("this is a automated message");
//     clearInterval(inter)
// },8000)

// let count = 10
// let inter = setInterval(() => {
//     if(count >= 0){
//         console.log(count);
//         count--
//     } else {
//         clearInterval(inter)
//     }
// }, 1000);

//dowload simulation progress
        let progress = 0;
        const progressFill = document.getElementById('progressFill');
        const percentText = document.getElementById('percent');
        const statusText = document.getElementById('status');

        const interval = setInterval(() => {
            progress += Math.random() * 20;
            if (progress > 100) progress = 100;

            progressFill.style.width = progress + '%';
            percentText.textContent = Math.floor(progress) + '%';

            if (progress === 100) {
                clearInterval(interval);
                statusText.textContent = 'Downloaded';
                progressFill.classList.add('completed');
            }
        }, 400);