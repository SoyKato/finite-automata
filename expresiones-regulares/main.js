import './style.css'

const form = document.createElement('form')
const textarea_expresion = document.createElement('textarea')
textarea_expresion.placeholder = 'Ingresa una expresión'

const textarea_oracion = document.createElement('textarea')
textarea_oracion.placeholder = 'Ingresa una oración'

const globalCheckbox = document.createElement('input')
globalCheckbox.type = 'checkbox'
globalCheckbox.id = 'flagGlobal'
const globalLabel = document.createElement('label')
globalLabel.textContent = 'Global'
globalLabel.setAttribute('for', 'flagGlobal')

const caseInsensitiveCheckbox = document.createElement('input')
caseInsensitiveCheckbox.type = 'checkbox'
caseInsensitiveCheckbox.id = 'flagCI'
const caseInsensitiveLabel = document.createElement('label')
caseInsensitiveLabel.textContent = 'Case Insensitive'
caseInsensitiveLabel.setAttribute('for', 'flagCI')

const button = document.createElement('button')
button.type = 'button'
button.textContent = 'Analizar'

const resultadoDiv = document.createElement('div')
resultadoDiv.setAttribute('id', 'resultado')
resultadoDiv.style.display = 'none'

document.body.appendChild(form)
form.appendChild(textarea_expresion)
form.appendChild(textarea_oracion)
form.appendChild(globalLabel)
form.appendChild(globalCheckbox)
form.appendChild(caseInsensitiveLabel)
form.appendChild(caseInsensitiveCheckbox)
form.appendChild(button)
form.appendChild(resultadoDiv)

// Funcion de la página
button.addEventListener('click', () => {
  const expresionRegular = textarea_expresion.value
  const oracion = textarea_oracion.value
  const flagGlobal = globalCheckbox.checked ? 'g' : ''
  const flagCI = caseInsensitiveCheckbox.checked ? 'i' : ''

  const flags = flagGlobal + flagCI

  try {
    const expresion = new RegExp(expresionRegular, flags)
    const resultado = oracion.match(expresion)

    if (resultado) {
      resultadoDiv.innerHTML = '<p>Match ✔️</p>'
      resultadoDiv.innerHTML += `<p>Palabras que hicieron Match: ${resultado.join(', ')}</p>`
    } else {
      resultadoDiv.innerHTML = '<p>No Match ❌</p>'
    }

    resultadoDiv.style.display = 'block'
  } catch (error) {
    resultadoDiv.innerHTML = '<p>Error en la expresión regular</p>'
    resultadoDiv.style.display = 'block'
  }
})
