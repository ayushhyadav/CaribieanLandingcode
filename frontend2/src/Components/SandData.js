import React from 'react'

const SandData = () => {

    const scriptURL = 'https://script.google.com/macros/s/AKfycbw7Fx_zyn7f_faZXwYohFGlgTHrGcC1uVlV9wCkNxjWMdNg0dDHKcmbQIB-OjpwP4mA/exec'
    const form = document.forms['google-sheet']

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thanks for Joining the Waitlist..! We Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
    })
  return (
    <div>
      
    </div>
  )
}

export default SandData
