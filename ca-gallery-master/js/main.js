console.log('Starting up')
console.log('date:',new Date('2022-12-4').toString('dddd MMM yyyy'))
// console.log('');
function onInit(){
    renderGallery()
}

function renderGallery(){
    renderPortFolio()
    renderModal()
}

function renderPortFolio(){
  const projects = getProjects()
  const strHTMLs = projects.map(project => {
  return `<div class="row">
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#${project.id}">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
            </a>
            <div class="portfolio-caption">
              <h4>${project.name}</h4>
              <p class="text-muted">${project.title}</p>
            </div>
          </div>`
  })
  $('.portfolio-container').html(strHTMLs.join(''))
}

function renderModal(){
    const projects = getProjects()
    const strHTMLs = projects.map(project => {
    return `<div class="portfolio-modal modal fade" id="${project.id}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <h2>${project.name}</h2>
                <p class="item-intro text-muted">${project.title}</p>
                <!-- need to change -->
                <img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">
                <p>${project.desc}</p>
                <ul class="list-inline">
                  <li>Date: ${myGetDate(project.publishedAt)}</li>
                  <li>Category: ${project.labels.join(', ')}</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
  })
  $('.modals-container').html(strHTMLs.join(''))
}

function myGetDate(millisecondsDate){
  const date = new Date(millisecondsDate)
  return `${date.getDay} / ${date.getDate + 1} / ${date.getFullYear}`
}