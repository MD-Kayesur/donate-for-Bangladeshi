 function me(id) {


  document.getElementById('Donate-btn')
      .addEventListener('click', function (event) {
          event.preventDefault()
         
     const donatinput = parseFloat(document.getElementById('donat-input').value)
     if (!isNaN(donatinput)) {
         const balance = parseFloat(document.getElementById('balance').innerText)
         const newbalance = balance + donatinput
         document.getElementById('balance').innerText = newbalance
         // const row = `${donatinput} this is donated `
         //     document.getElementById('history-1').append(row) 
         //     const row1 = ` ${new Date}   `
         //                     document.getElementById('history-2').append(row1) 
         const mainbalance = parseFloat(document.getElementById('main-balance').innerText) 
         // const row = `${donatinput} this is donated `
         // document.getElementById('history-1').append(row) 
         // const row1 = ` ${new Date}   `
         //                 document.getElementById('history-2').append(row1) 
         if (mainbalance < donatinput  || mainbalance === 0) {
             alert('Dont have enough Main balance so how will you donate')
             document.getElementById('balance').innerText = balance 
             const row =`${donatinput} is donated\n${new Date} `
             document.getElementById('history-1').append(row)  
          //    const row = ` 
          //    <div>
          //    <p> ${donatinput}is donated</p> 
          //    <p> ${new Date} </p>
          //    </div> 
          //    document.getElementById('history-1').append(row) 
             return
          } 
          if (donatinput > mainbalance) {
             alert('its so high mor than main balance')
             document.getElementById('main-balance').innerText = mainbalance
             document.getElementById('balance').innerText = balance 
          //    const row =`${donatinput} is donated \n ${new Date} `
          //    document.getElementById('history-1').append(row)  
             return
         }
  document.getElementById('donat-input').value = " "
         const discount = mainbalance - donatinput
         document.getElementById('main-balance').innerText = discount
     } else {
         alert('its not number or maybe its so little , please donate more')
  
     }
         
      }) 
   
   return id
 }