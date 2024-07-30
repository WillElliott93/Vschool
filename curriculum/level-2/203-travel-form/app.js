const form = document.myForm

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const checkedInputs = []
    const name = form.firstName.value + " " + form.lastName.value
    const age = form.age.value
    const gender = form.gender.value
    const place = form.city.value

    

    for(let i = 0; i < form.diet.length; i++) {
        if(form.diet[i].checked) {
            checkedInputs.push(form.diet[i].value + " ")
        }
    }
    alert(`Name: ${name} 
           Age: ${age} 
           Gender: ${gender} 
           Location: ${place} 
           Dietary Restrictions: ${checkedInputs}`)
})