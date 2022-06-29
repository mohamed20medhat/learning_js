
const select = document.getElementById('select')
const list = document.getElementById('days-list')
const h1 = document.getElementById('month')


select.addEventListener('change', ()=>{
    const choice = select.value
    let days = 31;

    if (choice === 'February') {
        days = 28;
    } else if (choice === 'April' || choice === 'June' || choice === 'September' || choice === 'November') {
        days = 30;
    }

    createCalender(days, choice)
})


function createCalender(days, choice){
    list.innerHTML= ''
    h1.textContent = choice

    for(let i = 1; i <= days ; i++){
        const listItem = document.createElement('li')
        listItem.textContent = i
        list.appendChild(listItem)
    }

}