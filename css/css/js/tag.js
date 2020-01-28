const colors = {
    p: "#38823c",
    div: "#231bc5",
    span: "#1ad3ad",
    section: "#asd172",
    ul: "#8000aa",
    ol: "#952832",
    header: "#abcede",
    nav: "#182631",
    main: "#faf234",
    footer: "#cadesa",
    form: "#bababa",
    body: "#fa1da1",
    padrao: "#616161",
    
    get(tag) {
        return this[tag] || this[padrao]
    }
}

document.querySelectorAll('.tag').forEach(tag => {
    const tagName = tag.tagName.toLowerCase()
    tag.style.borderColor = colors.get(tagName)

    if (!tag.classList.contains('no-label')) {
        const label = document.createElement('label')
        label.style.background = colors.get(tagName)
        label.innerHTML = tagName
        tag.insertBefore(label, tag.childNodes[0])
    }
})