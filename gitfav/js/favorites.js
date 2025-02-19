import { GithubUser } from "./GithubUser.js"

export class FavoritesUtils {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    save() {
        localStorage.setItem("@favorites:", JSON.stringify(this.entries))
    }

    delete(user) {
        this.entries = this.entries.filter( entry => entry.login !== user.login )
        this.save()
        this.update()
    }

    load() {
        this.entries = JSON.parse(localStorage.getItem("@favorites:")) || []
    }

    async add(username) {
        try {
            const userExists = this.entries.find( entry => entry.login === username)

            if (userExists) {
                throw new Error("Usuário já cadastrado")
            }

            const user = await GithubUser.search(username)

            if(user.name === undefined) {
                throw new Error("Usuário não encontrado")
            }

            this.entries = [user, ...this.entries]
            
            this.save()
            this.update()

        } catch(error) {
            alert(error.message)
        }
    }

    setupAddButton() {
        this.root.querySelector("#search button").onclick = () => {
            const input = this.root.querySelector("#search input")
            this.add(input.value)
            input.value = ""
        }
    }

    removeAllRows() {
        this.tbody.querySelectorAll("tr").forEach( tr => tr.remove() )
    }

    createRow() {
        const content = `
            <td class="user">
                <img src="https://github.com/daviscerqueira.png" alt="Imagem de usuário de Davi Cerqueira">
                <a href="https://github.com/daviscerqueira" target="_blank">
                    <p>Davi Cerqueira</p>
                    <span>/daviscerqueira</span>
                </a>
            </td>

            <td class="repositories">6</td>

            <td class="followers">0</td>

            <td>
                <button>Remover</button>
            </td>
        `

        const row = document.createElement("tr")

        row.innerHTML = content

        return row
    }

    update() {

        if (localStorage.getItem('@favorites:') == "[]") {
            document.getElementById("empty-state").classList.remove('hide')
        } else {
            document.getElementById("empty-state").classList.add('hide')
        }

        this.removeAllRows()
        this.save()


        this.entries.forEach( entry => {
            const row = this.createRow()
            
            row.querySelector(".user img").src = `https://github.com/${entry.login}.png`
            row.querySelector(".user img").alt = `Imagem de usuário de ${entry.name}`

            row.querySelector(".user a p").textContent = entry.name
            row.querySelector(".user a span").textContent = `/${entry.login}`

            row.querySelector(".repositories").textContent = entry.public_repos

            row.querySelector(".followers").textContent = entry.followers

            row.querySelector("td button").onclick = () => {
                const confirmed = confirm("Remover dos favoritos?") 

                if (confirmed) {
                    this.delete(entry)
                }
            }

            
            this.tbody.append(row)
        })
    }
}

export class Favorites extends FavoritesUtils {
    constructor(root) {
        super(root)
        
        this.tbody = this.root.querySelector("tbody")

        this.update()
        
        this.setupAddButton()
    }
}