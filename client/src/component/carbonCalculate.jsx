
import React, { useState } from 'react';
import axios from 'axios';

const CarbonFootprintCalculator = () => {
    // State to manage user inputs and the calculated result
    const [activity, setActivity] = useState('');
    const [value, setValue] = useState('');
    const [carbonFootprint, setCarbonFootprint] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Predefined activities for the dropdown
    const activities = [
        { name: 'Driving', unit: 'km', factor: 0.21 }, // Example factor
        { name: 'Electricity Usage', unit: 'kWh', factor: 0.93 }, // Example factor
        { name: 'Flying', unit: 'km', factor: 0.25 }, // Example factor
    ];

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setLoading(true);
        setCarbonFootprint(null); // Reset previous result
        setError(''); // Clear previous errors

        try {
            // Make API call to the backend
            const response = await axios.post('http://localhost:5000/api/calculate', {
                activity: activity,
                value: parseFloat(value), // Ensure value is a number
            });
            setCarbonFootprint(response.data.carbonFootprint);
        } catch (err) {
            // Handle different types of errors
            if (err.response) {
                // Server responded with a status other than 2xx
                setError(err.response.data.message || 'Error calculating footprint.');
            } else if (err.request) {
                // Request was made but no response received
                setError('No response from server. Please check the backend.');
            } else {
                // Something else happened in setting up the request
                setError('An unexpected error occurred.');
            }
            console.error('API Error:', err);
        } finally {
            setLoading(false); // Stop loading regardless of success or failure
        }
    };

    const isFormValid = activity && value && !isNaN(parseFloat(value)) && parseFloat(value) > 0;

    return (
        // Main container with gradient background inspired by Image 1, but for the content area
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-4">
            {/* Card-like container for the calculator, matching a clean UI */}
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Calculate Your Carbon Footprint</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Activity Selection */}
                    <div>
                        <label htmlFor="activity" className="block text-sm font-medium text-gray-700 mb-1">
                            Select Activity
                        </label>
                        <select
                            id="activity"
                            name="activity"
                            value={activity}
                            onChange={(e) => setActivity(e.target.value)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md shadow-sm"
                            required
                        >
                            <option value="">-- Choose an activity --</option>
                            {activities.map((act) => (
                                <option key={act.name} value={act.name.toLowerCase().replace(/\s/g, '')}>
                                    {act.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Value Input */}
                    <div>
                        <label htmlFor="value" className="block text-sm font-medium text-gray-700 mb-1">
                            Value ({activity ? activities.find(a => a.name.toLowerCase().replace(/\s/g, '') === activity)?.unit : 'Units'})
                        </label>
                        <input
                            type="number"
                            id="value"
                            name="value"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Enter amount"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            min="0"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                            isFormValid ? 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500' : 'bg-gray-400 cursor-not-allowed'
                        }`}
                        disabled={!isFormValid || loading}
                    >
                        {loading ? 'Calculating...' : 'Calculate Carbon Footprint'}
                    </button>
                </form>

                {/* Display Area for Result or Error */}
                <div className="mt-6 p-4 rounded-md text-center">
                    {error && (
                        <p className="text-red-600 text-sm font-medium">{error}</p>
                    )}
                    {carbonFootprint !== null && (
                        <p className="text-xl font-semibold text-gray-800">
                            Your carbon footprint is: <span className="text-green-700 font-bold">{carbonFootprint.toFixed(2)} kg CO2e</span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CarbonFootprintCalculator;