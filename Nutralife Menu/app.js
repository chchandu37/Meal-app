// Function to navigate to different pages
function navigateToPage(page) {
    window.location.href = page;
}
function addToFavorites(mealId, mealName, mealImage) {
    const favoriteMeals = JSON.parse(localStorage.getItem('favoriteMeals')) || [];
    favoriteMeals.push({ id: mealId, name: mealName, image: mealImage });
    localStorage.setItem('favoriteMeals', JSON.stringify(favoriteMeals));
}
function removeFromFavorites(mealId) {
    const favoriteMeals = JSON.parse(localStorage.getItem('favoriteMeals')) || [];
    const updatedFavorites = favoriteMeals.filter(meal => meal.id !== mealId);
    localStorage.setItem('favoriteMeals', JSON.stringify(updatedFavorites));
}
