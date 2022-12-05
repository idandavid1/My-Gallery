'use strict'

var gProjects = createProjects()

function createProjects(){
    const projs = [
        createProject('minesweeper', 'Minesweeper game', 'Minesweeper', 'Lorem ipsum dolor sit amet consectetur.', 'Minesweeper-game', '2022-12-4'),
        createProject('in-picture', ' In-Picture game for children', 'In-Picture', 'Lorem ipsum dolor sit amet consectetur.', 'pacman', '2022-12-4'),
        createProject('touch-nums', 'Touch Nums game', 'Touch Nums', 'Lorem ipsum dolor sit amet consectetur.', 'pacman', '2022-12-4'),
        createProject('books-shop', 'Books Shop platform to menege books', 'Books Shop', 'Lorem ipsum dolor sit amet consectetur.', 'pacman', '2022-12-4'),
        createProject('pacman', 'Pacman', 'Pacman game', 'Lorem ipsum dolor sit amet consectetur.', 'pacman', '2022-12-4')
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