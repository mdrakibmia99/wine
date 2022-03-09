// fetch the api
const cocktailDB = async (letter) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
    const request = await fetch(url);
    const response = await request.json();
    cocktailCard(response.drinks)
}
// toggle spinner
const spinner = (displayProperty) => {
    document.getElementById('spinner').style.display = displayProperty;
};
// execute the api
function cocktailCard(drinks) {
    const row = document.getElementById('row');
    for (const drink of drinks) {
        const div = document.createElement('div');
        div.classList.add('col-md-4');
        div.innerHTML = `
            <div class="card text-white card-has-bg click-col"
                style="background-image:url('${drink.strDrinkThumb}');">
                <img class="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street"
                    alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?">
                <div class="card-img-overlay d-flex flex-column">
                    <div class="card-body">
                        <small class="card-meta mb-2">${drink.strGlass}</small>
                        <h4 class="card-title mt-0 "><a class="text-white" herf="#">${drink.strInstructions.slice(0, 100)}</a></h4>
                        <small><i class="far fa-clock"></i>${drink.dateModified}</small>
                    </div>
                    <div class="card-footer">
                        <div class="media">
                            <img class="mr-3 rounded-circle"
                                src="${drink.strDrinkThumb}"
                                alt="Generic placeholder image" style="max-width:50px">
                            <div class="media-body">
                                <h6 class="my-0 text-white d-block">${drink.strAlcoholic}</h6>
                                <small>${drink.strCategory}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        row.appendChild(div);
        spinner('none');
    }
}

const inputBox = document.getElementById('input-box');
const searchBtn = document.getElementById('search-btn');
let firstLetter;
// define first letter
inputBox.addEventListener('keyup', () => {
    firstLetter = inputBox.value;
    console.log(firstLetter);
});
// execute first letter
searchBtn.addEventListener('click', () => {
    document.getElementById('row').textContent = '';
    cocktailDB(firstLetter);
    spinner('block');
});