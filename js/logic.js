let guest=null
var guests = [
  {
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


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const guestId = urlParams.get('id')

for (let i = 0; i < guests.length; i++) {
  if (guests[i].id == guestId) {
    guest = guests[i];
  }
}
if (guest==null){
    window.location.href="errorPage.html";
}

document.getElementById("guestName").value = guest.name;
select = document.getElementById('guestsNumber');
if (guest != null) {
  for (let i = 0; i < guest.guestsNumber; i++) {
    var opt = document.createElement('option');
    opt.value = i+1;
    opt.innerHTML = i+1;
    select.appendChild(opt);
  }
}
