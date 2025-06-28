const Booking = require('../models/Booking');
const Bus = require('../models/Bus');

exports.bookBus = async (req, res) => {
    try {
        const { busId, date } = req.body;
        const booking = new Booking({ user: req.user.id, bus: busId, date });
        await booking.save();
        res.status(201).json(booking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.cancelBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await Booking.findOne({ _id: id, user: req.user.id });
        if (!booking) return res.status(404).json({ message: 'Booking not found' });
        booking.status = 'cancelled';
        await booking.save();
        res.json({ message: 'Booking cancelled', booking });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}; 