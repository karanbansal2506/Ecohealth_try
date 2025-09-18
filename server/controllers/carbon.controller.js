const emissionFactors = {
    // Driving (kg CO2e per km)
    'driving_car_petrol': 0.192,
    'driving_car_diesel': 0.171,
    'driving_car_hybrid': 0.120,
    'driving_car_electric': 0.05, // Varies based on the electricity grid's carbon intensity
    'driving_motorbike': 0.103,
    'driving_bus': 0.105,
    'driving_train': 0.041,
    'cycling': 0.0, // Human-powered
    'walking': 0.0, // Human-powered

    // Home Energy
    'electricity_usage': 0.475, // kg CO2e per kWh (Updated to a more global average)
    'natural_gas': 0.181,     // kg CO2e per kWh
    'heating_oil': 2.5,       // kg CO2e per litre
    'lpg': 1.5,               // kg CO2e per litre

    // Flying (kg CO2e per km)
    'flying_domestic': 0.25,       // Short-haul, economy
    'flying_short_haul': 0.15,     // e.g., within Europe
    'flying_long_haul': 0.12,      // Intercontinental
    'flying_business_class': 0.45, // Factor is often 3-4x economy
};

const calculateFootprint = (req, res) => {
    const { activity, value } = req.body;

    // Validate input
    if (!activity || value === undefined || isNaN(value) || value < 0) {
        return res.status(400).json({ message: 'Invalid input: activity and a non-negative numeric value are required.' });
    }

    // Check if the activity is supported and has an emission factor
    // The key is checked for existence, including for activities with a 0 factor like cycling.
    if (emissionFactors[activity] === undefined) {
        return res.status(400).json({ message: `Unknown activity: ${activity}. Please select a supported activity.` });
    }

    // Calculate carbon footprint
    const carbonFootprint = value * emissionFactors[activity];

    // Return the calculated footprint
    res.status(200).json({ carbonFootprint: carbonFootprint });
}

const addFootprint = (req, res) => {
    // This function is not implemented as per your original code.
    // In a real app, this would save the footprint data to a user's profile in a database.
    res.status(501).json({ message: 'Not Implemented' });
}

export { calculateFootprint, addFootprint };
