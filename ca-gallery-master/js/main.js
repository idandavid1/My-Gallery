// console.log('Starting up')
// console.log('date:',new Date('2022-12-4').toString('dddd MMM yyyy'))
// console.log('');
$(document).ready(onInit)
$('#contact').submit(function (ev){
  return onSubmit(ev, this)
})

function onInit(){
  renderPortfolio()
}

function renderPortfolio(){
  const projects = getProjects()
  const strHTMLs = projects.map(project => {
  return ` <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" onclick="renderModal('${project.id}')" href="#portfolioModal">
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
        </div> `
  })
  $('.portfolio-container').html(strHTMLs.join(''))
}

function renderModal(projectId){
    const project = getProjectById(projectId)
    const strHTML =
    `<h2>${project.name}</h2>
    <p class="item-intro text-muted">${project.title}</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">
    <p>${project.desc}</p>
    <ul class="list-inline">
      <li>Date: ${myGetDate(project.publishedAt)}</li>
      <li>Category: ${project.labels.join(', ')}</li>
    </ul>
    <a class="btn btn-primary" target="_blank" rel="noopener" href="${project.url}">Open Project</a>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
    <i class="fa fa-times"></i>
    Close</button>`
 
  $('.modal-body').html(strHTML)
}

function myGetDate(millisecondsDate){
  const date = new Date(millisecondsDate)
  return `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`
}

function onSubmit(event, elSelect){
  event.preventDefault()
  const mail = $(elSelect).children('.mail-div').children('.mail').val()
  const subject = $(elSelect).children('.subject-div').children('.subject').val()
  const body =`${mail}${$(elSelect).children('.message-div').children('.message-body').val()}`
  if(!mail || !subject || !body) return
  window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=idand2000@gmail.com&su=${subject}&body=${body}`
}


