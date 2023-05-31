let title = document.getElementById("title");
let img = document.getElementById("img")
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let state = document.getElementById("state")
let country = document.getElementById("country")


let url = "https://randomuser.me/api/"


const getProfile = () => {
    fetch(url).then(response => {
        return response.json()
    }).then(data => {
        title.value = data.results[0].name.title
        img.src = data.results[0].picture.medium
        fname.value = data.results[0].name.first
        lname.value = data.results[0].name.last
        phone.value = data.results[0].phone
        email.value = data.results[0].email
        address.value = `${data.results[0].location.street.number} ${data.results[0].location.street.name} ${data.results[0].location.city}`
        state.value = data.results[0].location.state
        country.value = data.results[0].location.country
    })
}

getProfile()


