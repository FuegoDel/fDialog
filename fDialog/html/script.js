let keys = {
  false: 'decline-btn',
  true: 'agree-btn'
}

let colors = {
  false: 'rgb(196, 4, 4)',
  true: 'rgb(122, 203, 0)',
}

window.addEventListener('message', startNotification)

function startNotification(e) {
  if (e.data.msg == 'delete') {
    if (e.data.answer != 'undefined') {
      document.getElementsByClassName(keys[e.data.answer])[0].style.filter = `drop-shadow(0px 0px 1vw ${colors[e.data.answer]})`
    } setTimeout(() => {
      window.location.reload()
    }, 300)
    return;
  }

  let sound = new Audio('sound.mp3');
  sound.play();
  document.getElementById('main').innerHTML = `<div class="container">
  <div class="header-text">
    <div></div><span>CONFRIMATION REQUIRED <div class="right-line"></div></span>
  </div>
  <div class="center">
    <div class="container-message">${e.data.msg}</div>
  </div>
  <div class="center">
    <div class="btns">
      <div class="center">
        <div class="agree-btn"><span>ACCEPT</span><button>Y</button></div>
        <div class="decline-btn"><button>N</button><span>DECLINE</span></div>
      </div>
    </div>
  </div>
</div>`
}
