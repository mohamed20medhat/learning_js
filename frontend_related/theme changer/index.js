


const select = document.querySelector('select');
const html = document.querySelector("html")
document.body.style.padding= '10px'

function update(bgcolor, textcolor) {
    html.style.backgroundColor = bgcolor
    html.style.color = textcolor
}

//the first itteration using ternary operators
//select.addEventListener('change', () => ( select.value === 'black' ) ? update('black','white') : update('white','black'));

select.addEventListener('change', () => {
    const choice = select.value
    switch (choice) {
        case 'white':
            update('white', 'black')
            break
        case 'black':
            update('black','white')
            break
        case 'purple':
            update('purple', 'yellow')
            break
        case 'gold':
            update('gold', 'purple')
            break
        case 'pink':
            update('pink', 'black')
            break
    }

})









