var Rooms = { 
    start: { 
        title: "Комната в общаге", 
        hp: [hp], 
        description: 'Обычное ни чем не примечательное утро. Ты проснулся в общаге.', 
        buttonDescription: 'Куда пойдешь?', 
        img: "image/start.jpg", 
        exits: ['corridor', "window"] 
    }, 
    corridor: { 
        title: "Коридор", 
        hp: [hp], 
        description: 'Ты открыл дверь и вышел в коридор, множество дверей окружают тебя.', 
        buttonDescription: 'Куда пойдешь?', 
        img: "image/corridor.jpg", 
        exits: ['start', "toilet", "floor_2"] 
    }, 
    toilet: { 
        title: "Туалет", 
        hp: [hp], 
        description: 'Ты зашел в общажный толчок. Ничего необычного, видно, что местные обитатели поддерживают его в "хорошем" состоянии. На удивление, ты не хочешь в туалет.', 
        buttonDescription: 'Куда пойдешь?', 
        img: "image/toilet.jpg", 
        exits: ['corridor'] 
    }, 
    window: { 
        title: "Выйти в окно", 
        hp: [hp], 
        description: 'Ты вышел в окно. На самом деле ты постоянно это делаешь, ведь живешь на 2 этаже, так что ничего необычного.', 
        buttonDescription: 'Куда пойдешь?', 
        img: "image/window.jpg", 
        exits: ["street"] 
    }, 
    street: { 
        title: "Улица", 
        hp: [hp], 
        description: 'Ты на улице перед общагой.', 
        buttonDescription: 'Куда пойдешь?', 
        img: "image/street.jpg", 
        exits: ["hall", "kb"] 
    }, 
    floor_1: { 
        title: "Лестница - 1 этаж", 
        hp: [hp], 
        description: 'Ты пришел на 1 этаж.', 
        buttonDescription: 'Куда пойдешь?', 
        img: "image/floor.jpg", 
        exits: ["floor_2", "hall"] 
    }, 
    floor_2: { 
        title: "Лестница - 2 этаж", 
        hp: [hp], 
        description: 'Ты пришел на лесничную площадку своего 2 этажа.', 
        buttonDescription: 'На какой этаж отправишься?', 
        img: "image/floor.jpg", 
        exits: ['corridor', "floor_1"] 
    }, 
    hall: { 
        title: "Вахта", 
        hp: [hp], 
        description: 'Ты пришел на вахту общежития.', 
        buttonDescription: 'Куда пойдешь?', 
        img: "image/hall.jpg", 
        exits: ['street', "floor_1"] 
    }, 
    death_screen: { 
        title: "Смерть", 
        description: 'Ты помер с голоду', 
        buttonDescription: 'Начинай с начала', 
        img: "image/dead.jpg", 
        exits: ['start'] 
    }, 
    kb: { 
        title: "Красное-Белое", 
        hp: [hp], 
        description: 'Ты пришел в КБ и захавал вкусняшку.', 
        buttonDescription: 'Куда пойдешь?', 
        img: "image/kb.jpg", 
        exits: ['street'] 
    } 
}; 