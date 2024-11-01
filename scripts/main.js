var hp = 10; 
var current = "start"; 

function dead() {
    renderRoom("Смерть", "image/dead.jpg", 'Ты помер с голоду', 'Начинай с начала', hp);
    var button = document.createElement('button'); 
    button.innerHTML = "Начать сначала"; 
    exits.appendChild(button); 
    button.addEventListener('click', function() { 
        current = "start"
        hp = 10;
        render();
    }); 
}

function renderRoom(title, img, description, buttonDescription, hp) {
    document.getElementById('title').innerHTML = title; 
    document.getElementById('description').innerHTML = description; 
    document.getElementById('roomImage').src = img; 
    document.getElementById('buttonDescription').innerHTML = buttonDescription; 
    document.getElementById('hp').innerHTML = hp + " HP"; 
    var exits = document.getElementById('exits'); 
    exits.innerHTML = "";
}

function render() { 
    var room = Rooms[current]; 

    if (hp <= 0) {
        dead();
        return;
    }
    renderRoom(room.title, room.img, room.description, room.buttonDescription, hp);
 
    for (var i = 0; i < room.exits.length; i++) { 
        (function(i) { 
            var button = document.createElement('button'); 
            button.innerHTML = Rooms[room.exits[i]].title; 
            exits.appendChild(button); 
            button.addEventListener('click', function() { 
                hp = hp - 1; 
                console.log('hp', hp) 
                current = room.exits[i]; 
                render(); 
            }); 
        })(i); 
    } 
} 


window.onload = function() { 
    render(); 
} 

