const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bus: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ['booked', 'cancelled'], default: 'booked' },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema); 