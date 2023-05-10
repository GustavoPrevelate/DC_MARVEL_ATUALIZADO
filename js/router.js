'use strict'

  const routes = {
    '/marvel'              :   '/pages/marvel.html',
    '/dc'                  :   '/pages/dc.html',
    '/herois'              :   '/pages/herois.html',
    '/index'               :   '/index.html'
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({},"", window.event.target.href)
    
    const path = window.location.pathname
    const route = routes[path]

    const response = await fetch(route)
    const html = await response.text()

    document.getElementById('root').innerHTML = html

    console.log(html)
}

window.route = route