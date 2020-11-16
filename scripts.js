const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ];
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  
  class Player {
    constructor(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
        this.id = id;
        this.name = name;
        this.canThrowBall = canThrowBall;
        this.canDodgeBall = canDodgeBall;
        this.hasPaid = hasPaid;
        this.isHealthy = isHealthy;
        this.yearsExperience = yearsExperience;
    };
  };
  class BlueTeammate {
    constructor(id, name, teamColor, mascot){
        this.id = id;
        this.name = name;
        this.teamColor = teamColor;
        this.mascot = mascot;
    };
  };
  class RedTeammate {
    constructor(id, name, teamColor, mascot){
        this.id = id;
        this.name = name;
        this.teamColor = teamColor;
        this.mascot = mascot;
    };
  };
  
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Choose Team"
      button.addEventListener('click', function() {makePlayer(person.id)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    });
    let buttonDelete = document.getElementById('listPeople');
    buttonDelete.style.display = 'none';
  } ;

  const makePlayer = (id) => {
    console.log(`li ${id} was clicked!`)

    let person = arrOfPeople.find(player => player.id == id)
    let index = arrOfPeople.indexOf(person)
    arrOfPeople.splice(index,1)
    const newPlayer = new Player(person.id, person.name, true, true, true, true, person.yearsExperience)
    listOfPlayers.push(newPlayer)
    const listElement = document.getElementById('players')
    const li = document.createElement("li")
    const blueButton = document.createElement("button")
    blueButton.innerHTML = "Blue team"
    blueButton.style = "background: blue; color: white;"
    blueButton.addEventListener('click', () => {
        makeBlueTeam(person.id)
        listElement.removeChild(li)
    });
    const redButton = document.createElement("button")
    redButton.innerHTML = "Red team"
    redButton.style = "background: red; color: white;"
    redButton.addEventListener('click', () => {
        makeRedTeam(person.id)
        listElement.removeChild(li)
    });
    li.appendChild(blueButton)
    li.appendChild(redButton)
    listElement.append(li)
    li.appendChild(document.createTextNode(`${person.name} - Years Experience: ${person.yearsExperience}`))

};

const makeBlueTeam = (id) => {
    let person = listOfPlayers.find(player => player.id == id)
    let index = listOfPlayers.indexOf(person)
    listOfPlayers.splice(index, 1)
    const newBlueTeammate = new BlueTeammate(person.id, person.name, 'Blue', 'Average Joe')
    blueTeam.push(newBlueTeammate)
    let bluePerson = blueTeam.find(player => player.id == id)
    const listElement = document.getElementById('blue')
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(`${bluePerson.name} is an ${bluePerson.mascot}`))
    listElement.append(li)
};

const makeRedTeam = (id) => {
    let person = listOfPlayers.find(player => player.id == id)
    console.log(person)
    let index = listOfPlayers.indexOf(person)
    listOfPlayers.splice(index, 1)
    const newRedTeammate = new RedTeammate(person.id, person.name, 'Red', 'Globo Gym')
    redTeam.push(newRedTeammate)
    let redPerson = redTeam.find(player => player.id == id)
    const listElement = document.getElementById('red')
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(`${redPerson.name} is on team ${redPerson.mascot}`))
    listElement.append(li)
};

