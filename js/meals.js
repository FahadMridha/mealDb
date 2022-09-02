const loadMeal = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
const displayMeals = meals => {
    const mealsContainer = document.getElementById('food-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal)
        const foodDiv = document.createElement('div')
        foodDiv.classList.add('col')
        foodDiv.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})"class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
        </div>
    </div>
`;
        mealsContainer.appendChild(foodDiv);
    })
}
const searchFood = () => {
    const searchFieldValue = document.getElementById('search-field')
    const searchText = searchFieldValue.value
    loadMeal(searchText);
    searchFieldValue.value = '';

}
const loadMealDetail = (idMeal) => {
    // console.log(idMeal)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMEalDetail(data.meals[0]))

}
const displayMEalDetail = (meal) => {
    const foodDetailContainer = document.getElementById('food-detail')
    foodDetailContainer.innerHTML = '';
    const foodDetailDiv = document.createElement('div')
    foodDetailDiv.classList.add('card')
    foodDetailContainer.innerHTML = `
    
       <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,100)}.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>`;
    foodDetailContainer.appendChild(foodDetailDiv);
}
loadMeal('');