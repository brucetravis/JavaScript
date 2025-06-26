const toggle = document.getElementById('notifyToggle')

// Check if there is a value in the local storage
const saved = localStorage.getItem('pushEnabled')

// if saved not null
if (saved !== null){
    // check if saved is true, If Is is boolean is true if not boolean is false
    const enabled = saved === 'true'
    toggle.checked = enabled // checked will store the value of the latest value in the local storage

    // style the bosy according to the value in enabled
    document.body.style.backgroundColor = enabled ? 'black' : 'white'
}

// React to clicks
toggle.addEventListener('change', (e) => {
    const enabled = e.target.checked
    localStorage.setItem('pushEnabled', enabled)

    document.body.style.backgroundColor = enabled ? 'black' : 'white'
})



