const guestList = [{
    "name": "Mauricio Rodriguez",
    "id": "1",
    "onlyParty": true,
    "guestsNumber": 4
  },
  {
    "name": "Gimena Berton",
    "id": "2",
    "onlyParty": false,
    "guestsNumber": 2
  }
];

loadInitialData();


function loadInitialData() {
  var guestId = getGuestId();
  var guest = getGuestData(guestList, guestId);
  loadGuestData(guest);

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
