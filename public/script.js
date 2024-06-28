const button = document.querySelector('button')

const content = {
    name: "Elias",
    age: 44
}

button.addEventListener('click', () => {
    fetch("/get-this", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({ "myContent": content })
    })
})
