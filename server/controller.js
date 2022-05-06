let globalID = 2;

// const fighters = []
const fighters = require('./db.json');

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Adventure can be real happiness.", "You will enjoy good health.", "Your quick wits will get you out of a tough situation.", "Get your mind set, confidence will lead you on.", "Now is a good time to buy stock."]


        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune)
    },

    addFighter: (req, res) => {
        console.log(req.data)

        let {name, imageURL, stars} = req.body;

        newFighter = {
            id: globalID,
            name,
            imageURL,
            stars,
        }

        fighters.push(newFighter);
        res.status(200).send(fighters);
        globalID++
        console.log(fighters)
    },

    deleteFighter: (req, res) => {
        let index = fighters.findIndex((fighter) => {
            return fighter.id === +req.params.id;
        })

        fighters.splice(index, 1);

        res.status(200).send(fighters);

    },

    updateFighter: (req, res) => {
        let {id} = req.params
        let {stars} = req.body

        let index = fighters.findIndex((fighter) => {
            return fighter.id === +id;
        })

        fighters[index].stars++;
        res.status(200).send(fighters)
    },

    getAllFighters: (req, res) => {
        res.status(200).send(fighters)
    }


}