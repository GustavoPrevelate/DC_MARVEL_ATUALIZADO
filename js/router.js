// 'use strict'

//   const routes = {
//     '/superheroes'              :   '/pages/superheroes.html',
//     '/api'                      :   '/pages/api.html',
//     '/herois'                   :   '/pages/herois.html',
// }

// const route = async () => {
//     window.event.preventDefault()
//     window.history.pushState({},"", window.event.target.href)
    
//     const path = window.location.pathname
//     const route = routes[path]

//     const response = await fetch(route)
//     const html = await response.text()

//     document.getElementById('root').innerHTML = html

//     console.log(html)
// }

// window.route = route

'use strict'

const routes = {
  '/superheroes'              :   '../pages/superheroes.html',
  '/api'                      :   '../pages/api.html',
  '/herois'                   :   '../pages/herois.html',
}

const route = async () => {
     
    window.event.preventDefault()
    window.history.pushState({},"", window.event.currentTarget.href)
        
    const path = window.location.pathname
    const route = routes[path]
    
    const response = await fetch(route)
    const html = await response.text()
    
    document.getElementById('root').innerHTML = html
    
}

window.route = route
