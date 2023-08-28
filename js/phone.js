
const loadPhone = async (searchText='13', isShowAll) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data =  await res.json();
    const phones = data.data;

    // console.log(phones);

    displayPhone(phones, isShowAll);

}

const displayPhone = (phones, isShowAll) => {

                 
    const phoneContainer = document.getElementById('phone-container');

    phoneContainer.textContent = '';

    const showAllContainer = document.getElementById('show-all-container');

    if(phones.length > 12 && !isShowAll){

        showAllContainer.classList.remove('hidden');

    }
    else{

        showAllContainer.classList.add('hidden')

    }
    
    if(!isShowAll){

        phones = phones.slice(0,12);

    }
    

   

    // console.log(phones.length)

    phones.forEach(phone => {

        

        // console.log(phone);

        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
        phoneCard.innerHTML =`
        
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-center">
                        <button onclick="handleShowDetail('${phone.slug}');show_details_modal.showModal()" class="btn btn-primary">Show Details</button>
                      </div>
                    </div>
        
        `

        phoneContainer.appendChild(phoneCard);


    });

    toggleLoadingSpinner(false);

}

const handleShowDetail = async(id) => {

    // console.log(id);

    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    // console.log(data);

    const phone = data.data;

    showPhoneDetails(phone);

}

const showPhoneDetails = (phone) => {

    console.log(phone);

    const phoneName = document.getElementById('phone-name');
    phoneName.innerText = phone.name;

    const showDetailContainer = document.getElementById('show-detail-container');

    showDetailContainer.innerHTML = `
    
    <img src="${phone.image}" alt="Loading..." />
    <p><span> Storage: </span>${phone?.mainFeatures?.storage}</p>

    <p><span> GPS: </span>${phone?.others?.GPS}</p>
    
    `


    show_details_modal.showModal();

}

const handleSearch = (isShowAll) => {

    toggleLoadingSpinner(true);

    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText, isShowAll);

}

const toggleLoadingSpinner = (isLoading) =>{

    const loadingSpinner = document.getElementById('loading');
    if(isLoading){

        loadingSpinner.classList.remove('hidden')

    }

    else{

        loadingSpinner.classList.add('hidden');

    }

}

const handleShowAll = () => {

    handleSearch(true);


}

 loadPhone();