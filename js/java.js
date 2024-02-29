const loadPhone = async(searchText,isShowAll) =>{
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url)
  const data = await res.json()
  const phones = data.data;
  displayPnones(phones,isShowAll)
}
const displayPnones = (phones,isShowAll) =>{
  console.log(phones);
  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.textContent = ''; 

  const showAllContainer = document.getElementById('show-all-container');
  if(phones.length > 7 && !isShowAll){
    showAllContainer.classList.remove('hidden')
  }
  else{
    showAllContainer.classList.add('hidden')
  }
  if(!isShowAll){
    phones = phones.slice(0, 7);
  }


  phones.forEach(item => {
  const div = document.createElement('div');
  div.classList=`card bg-base-200 shadow-xl`
  div.innerHTML = `
  <figure><img src="${item?.image} " alt="Shoes" /></figure>
  <div class="card-body text-center">
    <h2 class="text-2xl font-bold">${item?.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button onclick="showDetailsButton('${item?.slug}')"  class="btn btn-primary w-full">Buy Now</button>
    </div>
</div>
  `
  phoneContainer.appendChild(div)
  });
  toggoleLoading(false)
}

// search phone
const handleSearch = (isShowAll) =>{
  toggoleLoading(true)
  const searchFiend = document.getElementById('search-field');
  const searchText = searchFiend.value;
  loadPhone(searchText,isShowAll)
}

// loading spnear
const toggoleLoading = (isLoading) =>{
  const loadingSpinner = document.getElementById('loading-spinner');
  if(isLoading){
    loadingSpinner.classList.remove('hidden')
  }else{
    loadingSpinner.classList.add('hidden')
  }
}

// show all phones
const handleShowAll = () =>{
  handleSearch(true)
}

// show details button
const showDetailsButton = async(id) =>{
  const url = `https://openapi.programming-hero.com/api/phone/${id}`
  const res = await fetch(url)
  const data2 = await res.json()
  const phone2 = data2.data;
  showdetailsModal(phone2)
}


// show detaisl modal
const showdetailsModal = (phone) =>{
const showImage = document.getElementById('show_image');
showImage.innerHTML = `<img src="${phone.image}" alt="">`
const showDetailsName = document.getElementById('show_details_name');
showDetailsName.innerText = phone?.name
const showDetailsStroge = document.getElementById('show_details_stroge');
showDetailsStroge.innerText = phone?.mainFeatures.storage
  show_details_modal.showModal()
}


loadPhone('13');
