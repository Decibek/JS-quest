var current = "start";
var Rooms = {
    start: {
        title: "Комната в общаге",
        description: 'Обычное ни чем не примечательное утро. Ты проснулся в общаге.',
        buttonDescription: 'Куда пойдешь?',
        img: "image/start.jpg",
        exits: ['corridor', "window"]
    },
    corridor: {
        title: "Коридор",
        description: 'Ты открыл дверь и вышел в коридор, множество дверей окружают тебя.',
        buttonDescription: 'Куда пойдешь?',
        img: "image/corridor.jpg",
        exits: ['start', "toilet", "floor_2"]
    },
    toilet: {
        title: "Туалет",
        description: 'Ты зашел в общажный толчок. Ничего необычного, видно, что местные обитатели поддерживают его в "хорошем" состоянии. На удивление, ты не хочешь в туалет.',
        buttonDescription: 'Куда пойдешь?',
        img: "image/toilet.jpg",
        exits: ['corridor']
    },
    window: {
        title: "Выйти в окно",
        description: 'Ты вышел в окно. На самом деле ты постоянно это делаешь, ведь живешь на 2 этаже, так что ничего необычного.',
        buttonDescription: 'Куда пойдешь?',
        img: "image/window.jpg",
        exits: ["street"]
    },
    street: {
        title: "Улица",
        description: 'Ты на улице перед общагой.',
        buttonDescription: 'Куда пойдешь?',
        img: "image/street.jpg",
        exits: ["hall"]
    },
    floor_1: {
        title: "Лестница - 1 этаж",
        description: 'Ты пришел на 1 этаж.',
        buttonDescription: 'Куда пойдешь?',
        img: "image/floor.jpg",
        exits: ["floor_2", "hall"]
    },
    floor_2: {
        title: "Лестница - 2 этаж",
        description: 'Ты пришел на лесничную площадку своего 2 этажа.',
        buttonDescription: 'На какой этаж отправишься?',
        img: "image/floor.jpg",
        exits: ['corridor', "floor_1"]
    },
    hall: {
        title: "Вахта",
        description: 'Ты пришел на вахту общежития.',
        buttonDescription: 'Куда пойдешь?',
        img: "image/hall.jpg",
        exits: ['street', "floor_1"]
    },
};

function render() {
    var room = Rooms[current];
    document.getElementById('title').innerHTML = room.title;
    document.getElementById('description').innerHTML = room.description;
    document.getElementById('roomImage').src = room.img;
    document.getElementById('buttonDescription').innerHTML = room.buttonDescription;
    var exits = document.getElementById('exits');
    exits.innerHTML = " ";

    for (var i = 0; i < room.exits.length; i++) {
        (function(i) {
            var button = document.createElement('button');
            button.innerHTML = Rooms[room.exits[i]].title;
            exits.appendChild(button);
            button.addEventListener('click', function() {
                current = room.exits[i];
                render();
            });
        })(i);
    }
}

window.onload = function() {
    render();
}