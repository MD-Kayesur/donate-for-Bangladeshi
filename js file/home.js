
// start js for header
// blog btn
document.getElementById('button-1')
    .addEventListener('click', function (event) {
        event.preventDefault()
        window.location.replace('blog.html')

    })

// donate and history btn

document.getElementById('button-2').classList.add('bg-lime-300')
document.getElementById('button-2').classList.remove('hidden')

// history btn
document.getElementById('button-3')
    .addEventListener('click', function (d) {
        d.preventDefault()
        document.getElementById('button-2').classList.remove('bg-lime-300')
        document.getElementById('button-3').classList.add('bg-lime-300')
        document.getElementById('donate').classList.add('hidden')
        document.getElementById('history').classList.remove('hidden')

    })

// donate btn
document.getElementById('button-2')
    .addEventListener('click', function (y) {
        y.preventDefault()
        document.getElementById('button-3').classList.remove('bg-lime-300')
        document.getElementById('button-2').classList.add('bg-lime-300')
        document.getElementById('history').classList.add('hidden')
        document.getElementById('donate').classList.remove('hidden')

    })




// end js for header



document.getElementById('Donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault()

        const donatinput = parseFloat(document.getElementById('donat-input').value)
        if (!isNaN(donatinput)) {
            const balance = parseFloat(document.getElementById('balance').innerText)
            const newbalance = balance + donatinput
            document.getElementById('balance').innerText = newbalance 

            const element = `${donatinput} this is donated for flood at Noakhali, Bangladesh`
            document.getElementById('history-1').append(element)
            
            const row1 = ` ${new Date}`
            document.getElementById('history-1').append(row1)


            const mainbalance = parseFloat(document.getElementById('main-balance').innerText)
              
            if (mainbalance < donatinput || mainbalance === 0) {
                alert('Dont have enough Main balance so how will you donate')
                document.getElementById('balance').innerText = balance

  
                return
            }


            document.getElementById('donat-input').value = " "
            const discount = mainbalance - donatinput
            document.getElementById('main-balance').innerText = discount

            if (donatinput > mainbalance) {
                alert('its so high mor than main balance')
                document.getElementById('main-balance').innerText = mainbalance
                document.getElementById('balance').innerText = balance
                  
                return
            }
          
        } else {
            alert('its not number or maybe its so little , please donate more')

        }

    }) 

 
document.getElementById('Donate-btn-2')
.addEventListener('click', function (event) {
    event.preventDefault()

    const donatinput = parseFloat(document.getElementById('donat-input-2').value)
    if (!isNaN(donatinput)) {
        const balance = parseFloat(document.getElementById('balance-2').innerText)
        const newbalance = balance + donatinput
        document.getElementById('balance-2').innerText = newbalance 

        const element = `${donatinput} this is donated For Flood Relief in Feni, Bangladesh`
        document.getElementById('history-1').append(element)
        const row1 = ` ${new Date}`
        document.getElementById('history-1').append(row1)


        const mainbalance = parseFloat(document.getElementById('main-balance').innerText)
         
        if (mainbalance < donatinput || mainbalance === 0) {
            alert('Dont have enough Main balance so how will you donate')
            document.getElementById('balance').innerText = balance
 
            return
        }


        document.getElementById('donat-input-2').value = " "
        const discount = mainbalance - donatinput
        document.getElementById('main-balance').innerText = discount

        if (donatinput > mainbalance) {
            alert('its so high mor than main balance')
            document.getElementById('main-balance').innerText = mainbalance
            document.getElementById('balance').innerText = balance
            //    const row =`${donatinput} is donated \n ${new Date} `
            //    document.getElementById('history-1').append(row)  
            return
        }
      
    } else {
        alert('its not number or maybe its so little , please donate more')

    }

}) 

 
document.getElementById('Donate-btn-3')
.addEventListener('click', function (event) {
    event.preventDefault()

    const donatinput = parseFloat(document.getElementById('donat-input-3').value)
    if (!isNaN(donatinput)) {
        const balance = parseFloat(document.getElementById('balance-3').innerText)
        const newbalance = balance + donatinput
        document.getElementById('balance-3').innerText = newbalance 

        const element = `${donatinput} this is donated Injured in The Quata Movement `
        document.getElementById('history-1').append(element)
        const row1 = ` ${new Date}`
        document.getElementById('history-1').append(row1)


        const mainbalance = parseFloat(document.getElementById('main-balance').innerText)
        
        if (mainbalance < donatinput || mainbalance === 0) {
            alert('Dont have enough Main balance so how will you donate')
            document.getElementById('balance').innerText = balance
 
            return
        }


        document.getElementById('donat-input-3').value = " "
        const discount = mainbalance - donatinput
        document.getElementById('main-balance').innerText = discount

        if (donatinput > mainbalance) {
            alert('its so high mor than main balance')
            document.getElementById('main-balance').innerText = mainbalance
            document.getElementById('balance').innerText = balance
             
            return
        }
      
    } else {
        alert('its not number or maybe its so little , please donate more')

    }

}) 
