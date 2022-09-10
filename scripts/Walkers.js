import { getCitiesForWalker, getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            // const [walkerId] = itemClicked.id.split("--")
                const walkerId = itemClicked.id.split("--")
                [1]
                const walkerCities = getCitiesForWalker(parseInt(walkerId))
                const walkerCitiesString = walkerCities.join(',')
    
            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    window.alert(`${walker.name} services ${walkerCitiesString}`)
                    
                }
            }
        }
    }
)



export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    
    return walkerHTML

}

