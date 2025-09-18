const emissionFactors = {
    driving: 0.21,    // kg CO2e per km
    electricityusage: 0.93, // kg CO2e per kWh (example factor, can vary by region)
    flying: 0.25,      // kg CO2e per km
    // Add more activities and their factors as needed
};


 const calculateFootprint=(req, res) => {
    const { activity, value } = req.body;

    // Validate input
    if (!activity || !value || isNaN(value) || value <= 0) {
        return res.status(400).json({ message: 'Invalid input: activity and a positive numeric value are required.' });
    }

    const lowerCaseActivity = activity.toLowerCase();

    // Check if the activity is supported and has an emission factor
    console.log(emissionFactors[lowerCaseActivity])
    if (!emissionFactors[lowerCaseActivity]) {
        return res.status(400).json({ message: `Unknown activity: ${activity}. Please select a supported activity.` });
    }

    // Calculate carbon footprint
    const carbonFootprint = value * emissionFactors[lowerCaseActivity];

    // Return the calculated footprint
    res.status(200).json({ carbonFootprint: carbonFootprint });
}


const addFootprint=(req,res)=>{

}
export { calculateFootprint,addFootprint}