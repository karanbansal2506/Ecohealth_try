import React, { useState } from 'react';
import axios from 'axios';

// Configuration for activities, making the form dynamic
const activityConfig = {
    driving: {
        name: 'Driving & Transport',
        activities: {
            'driving_car_petrol': { name: 'Car (Petrol)', unit: 'km' },
            'driving_car_diesel': { name: 'Car (Diesel)', unit: 'km' },
            'driving_car_hybrid': { name: 'Car (Hybrid)', unit: 'km' },
            'driving_car_electric': { name: 'Car (Electric)', unit: 'km' },
            'driving_motorbike': { name: 'Motorbike', unit: 'km' },
            'driving_bus': { name: 'Bus', unit: 'km' },
            'driving_train': { name: 'Train', unit: 'km' },
            'cycling': { name: 'Cycling', unit: 'km' },
            'walking': { name: 'Walking', unit: 'km' },
        },
    },
    flying: {
        name: 'Flying',
        activities: {
            'flying_domestic': { name: 'Domestic Flight (Economy)', unit: 'km' },
            'flying_short_haul': { name: 'Short-Haul Flight (Economy)', unit: 'km' },
            'flying_long_haul': { name: 'Long-Haul Flight (Economy)', unit: 'km' },
            'flying_business_class': { name: 'Flight (Business Class)', unit: 'km' },
        },
    },
    energy: {
        name: 'Home Energy',
        activities: {
            'electricity_usage': { name: 'Electricity', unit: 'kWh' },
            'natural_gas': { name: 'Natural Gas', unit: 'kWh' },
            'heating_oil': { name: 'Heating Oil', unit: 'litres' },
            'lpg': { name: 'LPG', unit: 'litres' },
        },
    },
};

const CarbonFootprintCalculator = () => {
    // State to manage user inputs and the calculated result
    const [category, setCategory] = useState('');
    const [activity, setActivity] = useState('');
    const [value, setValue] = useState('');
    const [carbonFootprint, setCarbonFootprint] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setActivity(''); // Reset activity when category changes
        setValue('');
        setCarbonFootprint(null);
    };
    
    const handleActivityChange = (e) => {
        setActivity(e.target.value);
        setCarbonFootprint(null);
    }

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setCarbonFootprint(null);
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/api/v1/carbon/calculate', {
                activity: activity,
                value: parseFloat(value),
            });
            setCarbonFootprint(response.data.carbonFootprint);
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message || 'Error calculating footprint.');
            } else if (err.request) {
                setError('No response from server. Please check your backend connection.');
            } else {
                setError('An unexpected error occurred.');
            }
            console.error('API Error:', err);
        } finally {
            setLoading(false);
        }
    };

    const isFormValid = category && activity && value && !isNaN(parseFloat(value)) && parseFloat(value) >= 0;
    const currentUnit = activityConfig[category]?.activities[activity]?.unit || 'Units';

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Carbon Footprint Calculator</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Category Selection */}
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                            Category
                        </label>
                        <select
                            id="category"
                            value={category}
                            onChange={handleCategoryChange}
                            className="mt-1 block w-full pl-3 pr-10 py-2.5 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md shadow-sm"
                            required
                        >
                            <option value="">-- Choose a category --</option>
                            {Object.entries(activityConfig).map(([key, value]) => (
                                <option key={key} value={key}>{value.name}</option>
                            ))}
                        </select>
                    </div>
                    
                    {/* Activity Selection (Conditional) */}
                    {category && (
                        <div>
                            <label htmlFor="activity" className="block text-sm font-medium text-gray-700 mb-1">
                                Specific Activity
                            </label>
                            <select
                                id="activity"
                                value={activity}
                                onChange={handleActivityChange}
                                className="mt-1 block w-full pl-3 pr-10 py-2.5 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md shadow-sm"
                                required
                            >
                                <option value="">-- Choose an activity --</option>
                                {Object.entries(activityConfig[category].activities).map(([key, value]) => (
                                    <option key={key} value={key}>{value.name}</option>
                                ))}
                            </select>
                        </div>
                    )}
                    
                    {/* Value Input (Conditional) */}
                    {activity && (
                        <div>
                             <label htmlFor="value" className="block text-sm font-medium text-gray-700 mb-1">
                                Amount ({currentUnit})
                            </label>
                            <input
                                type="number"
                                id="value"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                placeholder={`Enter distance in ${currentUnit}...`}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                min="0"
                                step="any"
                                required
                            />
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white transition-colors duration-200 ${
                            isFormValid ? 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500' : 'bg-gray-400 cursor-not-allowed'
                        }`}
                        disabled={!isFormValid || loading}
                    >
                        {loading ? 'Calculating...' : 'Calculate'}
                    </button>
                </form>

                {/* Display Area for Result or Error */}
                <div className="mt-6 text-center">
                    {error && (
                        <p className="text-red-600 text-sm font-medium bg-red-50 p-3 rounded-md">{error}</p>
                    )}
                    {carbonFootprint !== null && (
                         <div className="bg-green-50 p-4 rounded-lg">
                            <p className="text-lg font-medium text-gray-700">Your estimated footprint is:</p>
                            <p className="text-3xl font-bold text-green-700">
                               {carbonFootprint.toFixed(2)} kg CO₂e
                            </p>
                         </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CarbonFootprintCalculator;