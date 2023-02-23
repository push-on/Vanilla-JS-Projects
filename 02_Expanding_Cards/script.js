const panels = document.querySelectorAll('.panel')

function removeActiveClasses(y) {
  y.forEach((x) => {
    x.classList.remove('active')
    console.log("remove");
  })
}

panels.forEach((x) => {
  x.addEventListener('click', () => {
    removeActiveClasses(panels)
    x.classList.add('active')
    console.log("add");
  })
})