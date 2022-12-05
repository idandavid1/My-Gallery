'use strict'

var gProjects = createProjects()

function createProjects(){
    projs = [
        createProject('MINESWEEPER', 'Minesweeper', 'Minesweeper', 'Lorem ipsum dolor sit amet consectetur.', 'Minesweeper-game', '2022-12-4'),
        createProject('IN-PICTURE', ' In-Picture', 'In-Picture', 'Lorem ipsum dolor sit amet consectetur.', 'pacman', '2022-12-4'),
        createProject('TUOCH-NUMS', 'Touch Nums', 'Touch Nums', 'Lorem ipsum dolor sit amet consectetur.', 'pacman', '2022-12-4'),
        createProject('BOOKS-SHOP', 'Books Shop', 'Books Shop', 'Lorem ipsum dolor sit amet consectetur.', 'pacman', '2022-12-4'),
        createProject('PACMAN', 'Pacman', 'Pacman', 'Lorem ipsum dolor sit amet consectetur.', 'pacman', '2022-12-4')
    ]

    return projs
}

function createProject(id, name, title, desc, url, publishedAt){
    return {
        id,
        name,
        title,
        desc,
        url:  `https://idandavid1.github.io/${url}/`,
        publishedAt: new Date(publishedAt) - 0,
        labels: ["Matrixes", "keyboard events"],
       }
}

function getProjects(){
    return gProjects
}