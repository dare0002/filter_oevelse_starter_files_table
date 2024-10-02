const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];


const tbodyPointer = document.querySelector("tbody");
// Viser alle køretøjer ved start
showTheseVehicles(vehicles); 

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
  });
}


//  Step 1: Hardcodede filtreringer 


// Viser alle el drevne fartøjer

const electricVehicles = vehicles.filter(vehicle => vehicle.isElectric);
showTheseVehicles(electricVehicles);

// Viser alle fartøjer der har mere end 2 sæder

const moreThanTwoSeats = vehicles.filter(vehicles => vehicle.passengers > 2);
showTheseVehicles(moreThanTwoSeats);

// Alle el-drevne fartøjer ejet af Jonas

const electricOwnedByJonas = vehicles.filter(vehicles => vehicle.isElectric && vehicle.ownedBy === "Jonas");
showTheseVehicles(electricOwnedByJonas);

// Alle rugbrøds drevne fartøjer med plads til mere end en 

const allRugbrodMoreThanOneSeat = vehicles.filter(vehicles => vehicles.fuel ==="Rugbrød" && vehicle.passengers > 1);
showTheseVehicles(allRugbrodMoreThanOneSeat);


// Step 2: 