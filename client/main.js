//1. Grab
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const fighterBtn = document.querySelector('#fighterButton')
const fighterList = document.querySelector("#fighter-list")


//2. Function
const baseURL = `http://localhost:4000/api/fighters`

const fightersCallback = ({ data: fighters }) => {
    alert("check")
    displayFighters(fighters)
}

const errCallback = err => console.log(err.response.data)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
}

const deleteFighter = id => {
    axios.delete(`${baseURL}/${id}`)

    .then(res => {
        // console.log(res.data)
        // fightersCallback()
        const data = res.data
        displayFighters(data)
    })
    .catch(errCallback)
}

const updateFighter = (id) => {
    axios.put(`${baseURL}/${id}`)

    .then(res => {
        // console.log(res.data)
        // fightersCallback()
        const data = res.data
        displayFighters(data)
    })
}


const getAllFighters = () => {
    axios.get(baseURL)
    .then(res => {
        const data = res.data
        displayFighters(data)
    })
}

const addHandler = (e) => {
    e.preventDefault()

    let name = document.querySelector('#fighter-name')
    let imageURL = document.querySelector('#fighter-img')
    let stars = document.querySelector('#fighter-stars')
    
    let bodyObj = {
        name: name.value,
        imageURL: imageURL.value,
        stars: stars.value
    }
    
    addFighter(bodyObj)

    name.value = ''
    imageURL.value = ''
    
}

const addFighterToList = (fighter) => {
    const fighterCard = document.createElement('div')
    fighterCard.classList.add('fighter-card')
    
    fighterCard.innerHTML = `
    <img src="${fighter.imageURL}" class="fighter-card-img"/>
    <p class="fighter-card-name">${fighter.name}</p>
    <p class="fighter-card-stars"> Stars: ${fighter.stars}</p>
    <button onclick="deleteFighter(${fighter.id})">Delete Fighter</button>
    <button onclick="updateFighter(${fighter.id})">Add a Star</button>
    `
    fighterList.appendChild(fighterCard)
}

const addFighter = (body) => {
    // alert('checkpoint')
    axios.post("http://localhost:4000/api/fighters/", body)
    .then(res => {
        // console.log(res.data)
        // fightersCallback()
        displayFighters(res.data)
    })
}

const displayFighters = (arr) => {
    fighterList.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        addFighterToList(arr[i])
    }
}

const buttonTest = () => {
    alert('works')
}


//3. Listen
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
fighterBtn.addEventListener('click', addHandler)

getAllFighters()