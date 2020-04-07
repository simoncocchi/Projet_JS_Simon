// test du onload header
console.log(document.querySelector("header").classList.value)
window.onload = function () {
    let pageactive = document.querySelector("header").classList.value; // recupération de la classe du header de la page afin d'apater le active
    let activeindex ;
    let activegallery;
    let activejeux;

    switch(pageactive){
        case 'index':
            activeindex = ' class="active"';
            break;

        case 'gallery':
            activegallery = ' class="active"';
            break;
        
        case 'jeux':
            activejeux = ' class="active"';
            break;
        
        default:
            console.log('oublie de class au header de cette page')
    }

    document.querySelector("header").innerHTML = `<div class="container" id="test1">
    <div class="row" id="test2">
      <div id="nav" class="twelve column">
        <ul>
          <li><a href="/html/gallery.html"${activegallery}>Gallery</a></li>
          <li><a href="/index.html"${activeindex}>Super Site</a></li>
          <li><a href="/html/games.html"${activejeux}>Game</a>
            <ul class="dropsown">
              <li><a href="/html/pierre_papier_ciseaux.html">Pierre</a></li>
              <li><a href="#">Jeux2</a></li>
              <li><a href="#">Jeux3</a>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>`
}