const guestList = [{
    "name": "Mauricio Rodriguez",
    "id": "1",
    "onlyParty": false,
    "guestsNumber": 4
  },
  {
    "name": "Gimena Berton",
    "id": "2",
    "onlyParty": true,
    "guestsNumber": 2
  }
];

loadInitialData();
window.onscroll = function() {
  navbarChangeBackground(document.getElementById('navbarId'))
};


function loadInitialData() {
  var guestId = getGuestId();
  var guest = getGuestData(guestList, guestId);
  loadGuestData(guest);
  loadEventList(guest);

}

function loadGuestData(guest) {
  if (guest != null) {
    loadGuestName(guest);
    loadGuestsNumber(guest);
  } else {
    window.location.href = "errorPage.html";
  }
  return;
}



function getGuestData(guestList, guestId) {
  let guest = null
  for (let i = 0; i < guestList.length; i++) {
    if (guestList[i].id == guestId) {
      guest = guestList[i];
    }
  }
  return guest;
}


function getGuestId() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const guestId = urlParams.get('id');
  return guestId
}


function loadGuestName(guest) {
  document.getElementById("guestName").value = guest.name;
  return
}


function loadGuestsNumber(guest) {
  document.getElementById("guestsNumber").innerHTML = '';
  var attend = document.getElementById('guestAttend').value;
  var firstOpt = document.createElement('option');
  firstOpt.value = '';
  firstOpt.innerHTML = 'Invitados';
  firstOpt.className = 'first-option';
  firstOpt.selected = true;
  firstOpt.disabled = true;
  document.getElementById('guestsNumber').appendChild(firstOpt);
  if (attend != "no") {
    for (let i = 0; i < guest.guestsNumber; i++) {
      var opt = document.createElement('option');
      opt.value = i + 1;
      opt.innerHTML = i + 1;
      document.getElementById('guestsNumber').appendChild(opt);
    }
  }
  return
}

function navbarChangeBackground(myNav) {
  if (document.body.scrollTop > Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) || document.documentElement.scrollTop > Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");

  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
}

function loadEventList(guest) {
  if (guest.onlyParty == false) {
    document.getElementById("events").innerHTML = `
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="events">
              <h2 class="events-title">Civil</h2>
              <div class="events-price">
                <h2 class="events-description">Ceremonia - 01.Abr.22 – 12:00​</h2>
                <h1 class="events-description">Registro Civil - Agraciada 532</h1>
                <h1 class="events-description">Rivera, Uruguay​ ​</h1>
                <div class="events-button">
                  <a href="https://goo.gl/maps/D8F11KJwszPEKGrW8" target="_blank" class="btn btn-default">Cómo llegar</a>
                </div>
              </div>
              <div class="events-price">
                <h2 class="events-description">Brindis - 01.Abr.22 – 13:00​</h2>
                <h1 class="events-description">La Perdiz - Av. Sepé 51</h1>
                <h1 class="events-description">Rivera, Uruguay​ ​</h1>
                <div class="events-button">
                  <a href="https://goo.gl/maps/D8F11KJwszPEKGrW8" target="_blank" class="btn btn-default">Cómo llegar</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="events">
              <h2 class="events-title">Fiesta</h2>
              <div class="events-price">
                <h1 class="events-description">Sábado 02 de Abril – 21:00<br>​​</h1>
                <h1 class="events-description">Solar Dom Pedro​​</h1>
                <h1 class="events-description">R. Jose Fernandes Mendes,161 ​</h1>
                <h1 class="events-description">Armour, Livramento, Brasil​ ​</h1>
              </div>
              <div class="events-button">
                <a href="#rsvp" class="smoothScroll btn btn-default">Confirmar asistencia</a><br>
                <a href="https://goo.gl/maps/g5PuB5YskT7hHGRf9" target="_blank" class="btn btn-default">Cómo llegar</a>

              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  else{
    document.getElementById("events").innerHTML = `
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-md-offset-3 col-sm-offset-3 wow fadeInUp" data-wow-delay="0.3s">
            <div class="events">
              <h2 class="events-title">Fiesta</h2>
              <div class="events-price">
                <h1 class="events-description">Sábado 02 de Abril – 21:00<br>​​</h1>
                <h1 class="events-description">Solar Dom Pedro​​</h1>
                <h1 class="events-description">R. Jose Fernandes Mendes,161 ​</h1>
                <h1 class="events-description">Armour, Livramento, Brasil​ ​</h1>
              </div>
              <div class="events-button">
                <a href="#rsvp" class="smoothScroll btn btn-default">Confirmar asistencia</a><br>
                <a href="https://goo.gl/maps/g5PuB5YskT7hHGRf9" target="_blank" class="btn btn-default">Cómo llegar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
