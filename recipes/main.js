import recipes from './recipes.mjs';

const random = (num) => Math.floor(Math.random() * num);

const getRandomListEntry = (list) => list[random(list.length)];

const tagsTemplate = (tags) => tags.map(tag => `<span>${tag}</span>`).join('');

const ratingTemplate = (rating) =>
    `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">` +
    Array.from({ length: 5 }, (_, i) => i < rating ? '⭐' : '☆').join('') +
    '</span>';

const recipeTemplate = ({ image, name, tags, rating, description }) =>
    `<div class="recipe-card">
        <img src="${image}" alt="${name}">
        <div class="recipe-info">
            <div class="tags">${tagsTemplate(tags)}</div>
            <h2>${name}</h2>
            <p>${ratingTemplate(rating)}</p>
            <p>${description}</p>
        </div>
    </div>`;

const renderRecipes = (recipes) =>
    document.getElementById('recipe-display').innerHTML = recipes.map(recipeTemplate).join('');

const filterRecipes = (query) =>
    recipes.filter(({ name, description, tags, recipeIngredient }) =>
        [name, description, ...tags, ...recipeIngredient].some(field =>
            field.toLowerCase().includes(query))
    ).sort((a, b) => a.name.localeCompare(b.name));

const searchHandler = (event) => {
    event.preventDefault();
    renderRecipes(filterRecipes(document.getElementById('search').value.toLowerCase()));
};

document.querySelector('form').addEventListener('submit', searchHandler);

renderRecipes([getRandomListEntry(recipes)]);