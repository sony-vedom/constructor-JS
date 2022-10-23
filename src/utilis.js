export function row (content, themeName, mainText) {
    return `<selection class="informBlock">
            <i class = "fas ${themeName}"></i>
            <h5 class="mainText">${mainText}</h5>
                ${content}
            </selection>`
}

export function col (secondText) {
    return `<div class="underlineBlock"></div><p class="secondText">${secondText}</p>`
}