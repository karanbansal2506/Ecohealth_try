export  const prompt= `Analyze the food in the image to provide a single, consolidated nutritional profile for the entire dish.

Instructions:
1.  Identify the overall food item (e.g., "Cheeseburger", "Pepperoni Pizza Slice").
2.  Estimate the total weight of the entire item.
3.  Calculate the total nutritional values for the complete dish. Do NOT list the nutritional information for individual ingredients.
4.  Identify potential allergens based on the inferred typical ingredients.
5.  Output a single, clean JSON object. Do not include any markdown, explanations, or text outside of the JSON object.

Output a STRICT JSON object with this exact schema:
{
  "item_name": "string",
  "total_estimated_weight_g": number,
  "nutrition_totals": {
    "calories_kcal": number,
    "protein_g": number,
    "carbs_g": number,
    "fat_g": number,
    "fiber_g": number,
    "sugar_g": number,
    "sodium_mg": number
  },
  "allergens": ["string"],
  "dietary_suitability": {
    "vegetarian": boolean,
    "vegan": boolean
  }
}`