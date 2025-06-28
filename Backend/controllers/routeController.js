const Route = require('../models/Route');

exports.addRoute = async (req, res) => {
    try {
        const { source, destination, stops } = req.body;
        const route = new Route({ source, destination, stops });
        await route.save();
        res.status(201).json(route);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateRoute = async (req, res) => {
    try {
        const { id } = req.params;
        const { source, destination, stops } = req.body;
        const route = await Route.findByIdAndUpdate(id, { source, destination, stops }, { new: true });
        if (!route) return res.status(404).json({ message: 'Route not found' });
        res.json(route);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}; 