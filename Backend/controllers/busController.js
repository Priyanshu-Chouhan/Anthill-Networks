const Bus = require('../models/Bus');
const Route = require('../models/Route');

exports.addBus = async (req, res) => {
    try {
        const { busNumber, capacity, route } = req.body;
        const bus = new Bus({ busNumber, capacity, route });
        await bus.save();
        res.status(201).json(bus);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateBus = async (req, res) => {
    try {
        const { id } = req.params;
        const { busNumber, capacity, route } = req.body;
        const bus = await Bus.findByIdAndUpdate(id, { busNumber, capacity, route }, { new: true });
        if (!bus) return res.status(404).json({ message: 'Bus not found' });
        res.json(bus);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.searchBuses = async (req, res) => {
    try {
        const { source, destination } = req.query;
        const buses = await Bus.find().populate({
            path: 'route',
            match: { source, destination }
        });
        const filteredBuses = buses.filter(bus => bus.route);
        res.json(filteredBuses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}; 