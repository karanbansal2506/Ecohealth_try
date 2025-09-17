// models/CarbonFootprintEntry.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const carbonFootprintEntrySchema = new Schema({
    // Reference to the User model
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User', // This creates the link to the User schema
        required: true,
        index: true // Adds an index for faster queries by user
    },
    activity: {
        type: String,
        required: true, // e.g., 'driving', 'electricity', 'flying'
        trim: true
    },
    value: {
        type: Number,
        required: true // e.g., 50 (for 50 km)
    },
    unit: {
        type: String,
        required: true // e.g., 'km', 'kWh'
    },
    carbonFootprint: {
        type: Number,
        required: true // The calculated CO2e value
    }
}, {
    // Automatically adds createdAt and updatedAt timestamps
    timestamps: true
});

module.exports = mongoose.model('CarbonFootprintEntry', carbonFootprintEntrySchema);