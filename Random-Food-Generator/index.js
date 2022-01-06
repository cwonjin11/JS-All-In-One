document.addEventListener("click", (event) => {console.log("ʘ CLICKED ʘ👀", event.target)})


document.addEventListener("DOMContentLoaded", () => {

    const getMealBtn = document.getElementById("get_meal")
    const mealContainer = document.getElementById("meal")
    
    
    getMealBtn.addEventListener('click', () => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(res => {
            createMeal(res.meals[0])
        })
    })
    
    const createMeal = (meal) => {
    
        const ingredients = []
        for(let i=1; i<=20; i++){
            if(meal[`strIngredient${i}`]){
                ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
            } else {
                break
            }
        }
    
        mealContainer.innerHTML = `
        <div class="row">
            <div class="five columns">
                <img src="${meal.strMealThumb}" alt="Meal Img">
                <div id="category">               
                    ${meal.strCategory ? `<p><strong>✦Category:</strong> ${meal.strCategory}</p>` : ''}
                    ${meal.strArea ? `<p><strong>✦Area:</strong> ${meal.strArea}</p>` : ''}
                </div> 
                <div id="ingredient">
                  <h5><u>Ingredients</u></h5>
                    <ul>
                        ${ingredients.map(ingredient => `
                        <li>${ingredient}</li>
                        `).join('')}
                    </ul>
                </div>

            </div>
    
            <div class="seven columns" id="description">
                <h4 style="text-align:center"> <u>${meal.strMeal}</u> </h4>
                <p> ${meal.strInstructions}</p>
            </div>
        </div>
    
		${meal.strYoutube ? `
		<div class="row">
			<h5><u>Video Recipe</u></h5>
			<div class="videoWrapper">
				<iframe width="420" height="315"
				src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
				</iframe>
			</div>
		</div>` : ''}
        `
    
    }

})



