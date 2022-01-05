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
          <div id="protocolModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
              <span class="close">&times;</span>
                <h2 class="protocol-title">Protocolo covid</h2>
                <ul class="ulProtocol">
                  <li><h1 class="protocol-description">Para concurrir a la fiesta es obligatorio estar vacunado contra el COVID-19</h1></li>
                  <li><h1 class="protocol-description">Para que todos podamos disfrutar sin preocupaciones te pedimos que:</h1></li>
                  <li>-Lleves tapabocas.</li>
                  <li>-Adjuntes los certificados de vacunación de quienes concurriran al momento de confirmar asistencia o nos lo envíes por whatsapp al +59898500800. </li>
                  <li>-Lleves tu certificado a la fiesta en formato físico o digital.</li>
                </ul>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="events">
              <h2 class="events-title">Civil</h2>
              <div class="events-price">
                <h2 class="events-description">Ceremonia - 01.Abr.22 – 12:00​</h2>
                <h1 class="events-description">Registro Civil - Agraciada 532</h1>
                <h1 class="events-description">Rivera, Uruguay​ ​</h1>
                <div class="events-button">
                  <a href="https://goo.gl/maps/DuqaE3ndJbt33Kbz6" target="_blank" class="btn btn-default">Cómo llegar</a>
                </div>
              </div>
              <div class="events-price">
                <h2 class="events-description">Brindis - 01.Abr.22 – 13:00​</h2>
                <h1 class="events-description">La Perdiz - Av. Sepé 51</h1>
                <h1 class="events-description">Rivera, Uruguay​ ​</h1>
                <div class="events-button">
                  <a href="https://goo.gl/maps/rJgdBDUp7yyDHHVB9" target="_blank" class="btn btn-default">Cómo llegar</a>
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
                <h1 class="events-description">Vestimenta formal​ ​</h1>
              </div>
              <div class="events-button">
                <a href="#rsvp" class="smoothScroll btn btn-default">Confirmar asistencia</a><br>
                <a href="https://goo.gl/maps/g5PuB5YskT7hHGRf9" target="_blank" class="btn btn-default">Cómo llegar</a><br>
                <a id="btnProtocol" class="smoothScroll btn btn-default">Protocolo COVID</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else {
    document.getElementById("events").innerHTML = `
      <div class="container">
        <div class="row">
          <div id="protocolModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
              <span class="close">&times;</span>
              <p>Some text in the Modal..</p>
            </div>
          </div>
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

//Modal Script
// Get the modal
var modal = document.getElementById("protocolModal");

// Get the button that opens the modal
var btn = document.getElementById("btnProtocol");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
