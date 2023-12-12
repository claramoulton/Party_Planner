let events = [];
const spanCount = document.querySelector('.spanCount');
const list = document.querySelector('ul');



function render(){
  spanCount.innerHTML = events.length;
  const html = events.map(function(event){
    console.log(event);
    return `
    <li>
    <h3>Event Name: ${event.name}</h3>
    Description: ${event.description}<br>
    Date: ${event.date}<br>
    Location: ${event.location}<br>
    </li>
    `;
  }).join('');
  list.innerHTML = html;
};

render();

async function fetchEvents(){
  try {
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2309_ftb_et_web_am/events');
    const json = await response.json();
    events = json.data;
    render();
  }
  catch(ex){
    console.log(ex);
  }
};

fetchEvents();
