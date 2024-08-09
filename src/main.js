// page loader
const loader = document.body.querySelector('#p-loader')
loader.addEventListener('transitionend', () => loader.remove())
window.addEventListener('load', () => {
  setTimeout(() => {
    loader.classList.add('opacity-0')
  }, 1000)
})
// menu
const intro = document.body.querySelector('#intro')
const menu = document.body.querySelector('#p-menu')
const init = document.body.querySelector('.link-panel')
const links = document.body.querySelectorAll('.link-panel')
init.classList.add('active-link')
let open
let loading = false
const collapse = () => {
  if (!open || loading) {
    return
  }
  loading = true
  menu.classList.add('disabled')
  menu.classList.remove('slide-menu')
  intro.classList.remove('slide-intro')
  open.classList.remove('slide-panel')
  open = undefined
  const active = document.body.querySelector('.active-link')
  active.classList.remove('active-link')
  init.classList.add('active-link')
  setTimeout(() => {
    loading = false
    menu.classList.remove('disabled')
  }, 1100)
}
const expand = (link, panel) => {
  if (loading) {
    return
  }
  if (open) {
    collapse()
  }
  loading = true
  menu.classList.add('disabled', 'slide-menu')
  intro.classList.add('slide-intro')
  open = document.body.querySelector(panel)
  open.classList.add('slide-panel')
  const active = document.body.querySelector('.active-link')
  active.classList.remove('active-link')
  link.classList.add('active-link')
  setTimeout(() => {
    loading = false
    menu.classList.remove('disabled')
  }, 1100)
}
for (const linkPanel of links) {
  linkPanel.addEventListener('click', (event) => {
    event.preventDefault()
    const ref = linkPanel.getAttribute('href')
    if (ref === '#intro') {
      collapse()
    } else {
      expand(linkPanel, ref)
    }
  })
}
