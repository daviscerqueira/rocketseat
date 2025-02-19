import { Router } from "./router.js"


const router = new Router()


router.handle()

window.route = () => router.route()
window.onpopstate = () => router.handle()