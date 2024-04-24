
const navbar = document.getElementById('navbar');
window.onscroll = function () {
    scrollFunction()
}
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')

    }
}


const scrollrevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1500,
}

ScrollReveal().reveal('.home h1',scrollrevealOption)
ScrollReveal().reveal('.home h4',{
    ...scrollrevealOption,
    delay:800,
})
ScrollReveal().reveal('.home .btn-explore',{
    ...scrollrevealOption,
    delay:1200,
})

ScrollReveal().reveal('.about .about-title',scrollrevealOption)
ScrollReveal().reveal('.about .about-desc',{
    ...scrollrevealOption,
    delay:600,
})
ScrollReveal().reveal('.about .item-data',{
    ...scrollrevealOption,
    delay:1200,
})
ScrollReveal().reveal('.btn-explore',{
    ...scrollrevealOption,
    delay:2000,
})
ScrollReveal().reveal('.btn-more',{
    ...scrollrevealOption,
    delay:2000,
})
ScrollReveal().reveal('.card',scrollrevealOption)

ScrollReveal().reveal('.card .image',{
    ...scrollrevealOption,
    delay:600,
})
ScrollReveal().reveal('.card .content-card h4',{
    ...scrollrevealOption,
    delay:1600,
})
ScrollReveal().reveal('.next .card .content-card  p',{
    ...scrollrevealOption,
    delay:2000,
})



ScrollReveal().reveal('.next .card .content-card p',{
    ...scrollrevealOption,
    delay:600,
})


ScrollReveal().reveal('form .input',scrollrevealOption)
ScrollReveal().reveal('row .card',scrollrevealOption)

function calculateBudget() {
    const location = document.getElementById('location').value;
    const days = parseInt(document.getElementById('days').value);
    const hotel = document.getElementById('hotel').value;
    const people = parseInt(document.getElementById('people').value);

    let hotelCostPerNight = 0;

    switch(hotel) {
        case 'budget':
            hotelCostPerNight = 50;
            break;
        case 'standard':
            hotelCostPerNight = 100;
            break;
        case 'luxury':
            hotelCostPerNight = 200;
            break;
        default:
            break;
    }

    const totalHotelCost = hotelCostPerNight * days;
    const totalTransportationCost = calculateTransportationCost(location, people);
    const totalCost = totalHotelCost + totalTransportationCost;

    alert('Total Cost: ' + totalCost);

  //   const resultElement = document.getElementById('result');
  //   resultElement.innerHTML = `
  //   <h3>Total Budget</h3>
  //   <p>Hotel Cost: $${totalHotelCost}</p>
  //   <p>Transportation Cost: $${totalTransportationCost}</p>
  //   <h4>Total Cost: $${totalCost}</h4>
  // `;
}

function calculateTransportationCost(location, people) {
    // Just a placeholder function for calculating transportation cost
    // You can implement this function according to your requirements
    let transportationCost = 0;
    switch(location) {
        case 'paris':
            transportationCost = 50;
            break;
        case 'london':
            transportationCost = 100;
            break;
        case 'tokyo':
            transportationCost = 150;
            break;
        default:
            break;
    }
    return transportationCost * people;
}


