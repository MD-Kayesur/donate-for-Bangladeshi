





document.getElementById('button-2').classList.add('bg-lime-300')



document.getElementById('button-3')
    .addEventListener('click', function (d) {
        d.preventDefault()
        document.getElementById('button-2').classList.remove('bg-lime-300')
        document.getElementById('button-3').classList.add('bg-lime-300')
    })

document.getElementById('button-2')
    .addEventListener('click', function (y) {
        y.preventDefault()
        document.getElementById('button-3').classList.remove('bg-lime-300')
        document.getElementById('button-2').classList.add('bg-lime-300')
    })


document.getElementById('Donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault()
        const donatinput = parseFloat(document.getElementById('donat-input').value)
        if (!isNaN(donatinput)) {
            const balance = parseFloat(document.getElementById('balance').innerText)
            const newbalance = balance + donatinput
            document.getElementById('balance').innerText = newbalance
            const mainbalance = parseFloat(document.getElementById('main-balance').innerText)

            if (mainbalance < donatinput && mainbalance === 0) {
                alert('Dont have enough Main balance so how will you donate')
                document.getElementById('balance').innerText = balance

                return
            }

            if (donatinput > mainbalance) {
                alert('its so high mor than main balance')
                document.getElementById('main-balance').innerText = mainbalance
                document.getElementById('balance').innerText = balance
                return
            }


            const discount = mainbalance - donatinput
            document.getElementById('main-balance').innerText = discount
        } else {
            alert('its not number or maybe its so little , please donate more')

        }
    })




// document.getElementById('button-2')
// .addEventListener('click',function(y){
//     y.preventDefault()

//  const me= document.mybutton('Donate-btn')
// return(me)
// })



