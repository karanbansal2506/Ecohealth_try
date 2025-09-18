


import { GoogleGenerativeAI } from "@google/generative-ai"; // Use the correct, modern package
import * as fs from "node:fs";
import path from "path";
import { prompt } from "../config/prompt.js";
import mealModel from "../model/food.model.js";

const nutritionData = async (req, res) => {
    if (!req.file) {
        return res.status(400).send("No file uploaded.");
    }

    try {
        // Initialize with the correct class and your .env API key
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const imagePath = path.join(process.cwd(), 'uploads', req.file.filename);

        const imagePart = {
            inlineData: {
                data: fs.readFileSync(imagePath).toString("base64"),
                mimeType: req.file.mimetype,
            },
        };

        // const prompt = "Analyze the food in this image and provide an estimated nutritional breakdown, including calories, protein, carbohydrates, and fat.";

        const result = await model.generateContent([prompt, imagePart]);
        const response = result.response;
        const text = response.text();

        const cleanedString = text.replace(/``````/g, '');
        const parsedData = JSON.parse(cleanedString);



        // Clean up the uploaded file 
        fs.unlinkSync(imagePath);

        res.status(200).json({ nutritionInfo: text });

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        res.status(500).send("Failed to analyze image.");
    }
};

const give_all_meals = async (req, res) => {
    const meals = await mealModel.find({})
    res.json({
        meals
    })
}

const save_meal = async (req, res) => {
    const saving_meal = req.body
    await mealModel.create({
        item_name,
        total_estimated_weight_g,
        nutrition_totals: {
            calories_kcal,
            protein_g,
            carbs_g,
            fat_g,
            fiber_g,
            sugar_g,
            sodium_mg
        },
        allergens,
        dietary_suitability: {
            vegetarian,
            vegan
        }
    })
}

export { nutritionData, give_all_meals, save_meal };