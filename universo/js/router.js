import { highlightButton } from "./functions.js"

export class Router {

    routes = {
        "/": "/pages/home.html",
        "/universe": "/pages/universe.html",
        "/exploration": "/pages/exploration.html"
    }

    route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname]

        highlightButton(pathname)

        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector("#app").innerHTML = html
        })
    }
}