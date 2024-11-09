function getINputFieldBYId(id) {

   const donatinput = parseFloat(document.getElementById('donat-input').value)
   if (!isNaN(donatinput)) {
      const balance = parseFloat(document.getElementById('balance').innerText)
      const newbalance = balance + donatinput
      document.getElementById('balance').innerText = newbalance
      const mainbalance = parseFloat(document.getElementById('main-balance').innerText)

      if (mainbalance < donatinput && mainbalance === 0) {
         alert('Dont have enough Main balance so how will you donate')
         if (donatinput > mainbalance) {

            document.getElementById('balance').innerText = balance
            document.getElementById('main-balance').innerText = mainbalance
            document.getElementById('donat-input').value = donatinput
            return
         }
         return
      }
      const discount = mainbalance - donatinput
      document.getElementById('main-balance').innerText = discount
   } else {
      alert('its not number or maybe its so little , please donate more')

   }

   return id
}

