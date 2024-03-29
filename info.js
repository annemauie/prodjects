const leftDiv = (title, para, button) => {
    let mydiv = document.createElement("mydiv")
    mydiv.className = "leftClass"
    mydiv.innerHTML = `<h1 class="title1">${title}</h1>
                        <p>${para}</p>
                        <button class="sec1btn"><a href="https://www.facebook.com/mediantequeenannelasdoce" class="contact">${button}</a></button>
                        `
    return mydiv
}

export {leftDiv}

