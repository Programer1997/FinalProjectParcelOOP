const departureCode = document.querySelector('#departure');
const arriveCode = document.querySelector('#arrive');
const airLine = document.querySelector('#airLine');
const limitResults = document.querySelector('#limit');
const searchButton = document.querySelector('#buttonSearch');

const container = document.querySelector('#containerCards');

    let departureIata = '';
    let arriveIata= '';
    let airLineName = '';
    let limitFligths = 0;

searchButton.addEventListener('click',()=>{

    /*if(departureCode.value=='' || arriveCode.value=='' || airLine.value=='' || limitResults.value==''){
        alert('Please, fill in all the fields before proceding');
    }else {}*/
    console.log(departureCode.value);
    console.log(arriveCode.value);
    console.log(airLine.value);
    console.log(limitResults.value);

    departureIata = departureCode.value;
    arriveIata= arriveCode.value;
    airLineName = airLine.value;
    limitFligths = limitResults.value;

    fetchFlights();

});


async function fetchFlights(){

    let params = new URLSearchParams({
        access_key:'022a1cb9c06283b5452c80c0832d38ee',
        limit:limitFligths,
        //flight_date:'2019-02-31'
        //flight_status:'active',
        dep_iata: departureIata,
        arr_iata: arriveIata,
        airline_name: airLineName,
        
    });

    await fetch(`http://api.aviationstack.com/v1/flights?${params}`)
    .then(res => res.json())
    .then(data => {
         let products=data.data;

        console.log(products);

        let card="";

        products.forEach(element => {
            if (element.length !==0){
                card+= `
                <div class="individualFlight">
                    <h4>${element.airline.name}</h4>
                    <div class="trip">
                        <div class="departureTime">
                            <p class="timeD">${element.departure.scheduled}</p>
                            <p class="iataD">${element.departure.iata}</p>
                        </div>
                        <div class="iconFly">
                            <img src = "./img/airplaneCard.png"/>
                            <span></span>
                        </div>
                        <div class="arriveTime">
                            <p class="timeA">${element.arrival.estimated}</p>
                            <p class="iataA">${element.arrival.iata}</p>
                        </div>

                    </div>
                    <div class="flightThings">
                        <p>${element.flight_date}</p>
                        <p>${element.flight_status}</p>
                        <button class="btn btn-success" id = "buttonBuy" value="">Buy Now</button>
                    </div>
                
                </div>`;
            }
            container.innerHTML = card;
            
        });
    });
    
};

