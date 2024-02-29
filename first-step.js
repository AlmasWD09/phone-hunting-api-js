const loadPhone = async(parameter) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${parameter}`;
    const res = await fetch(url);
    const data = await res.json();
    const phones = displayPhones(data.data);
    // console.log(phones ,'line 6');
}

const displayPhones = (pabo) =>{
    console.log(pabo);
    const phoneList = document.getElementById('phone-list');
    phoneList.textContent = ''
    pabo.forEach(element => {
        const div = document.createElement('div');
        div.classList = `card bg-base-100 shadow-xl`
        div.innerHTML = `
        <figure class="bg-gray-200 p-8">
        <img src="${element?.image}" alt="Shoes" />
        </figure>
        <div class="flex flex-col justify-center items-center py-3 space-y-3">
          <h2 class="card-title">${element?.phone_name}</h2>
          <p class="text-center">There are many variations of passages of available, but the majority have suffered</p>
          <p class="text-2xl font-bold">$999</p>
          <div class="card-actions">
            <button class="btn btn-primary">Show Details</button>
          </div>
        </div>
      </div>
        `
        phoneList.appendChild(div)
    });
}

const handleSearch = () =>{
const searchField = document.getElementById('search-field');
const searchText = searchField.value;
loadPhone(searchText)
searchField.value = '';
}



// loadPhone()