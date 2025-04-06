const AdminRoutes = require('express').Router();

AdminRoutes.get('/', (req, res) => {
    res.json({ message: 'Admin Home' });
})
AdminRoutes.get('/profile', (req, res) => {
    res.json({ message: 'Admin Profile' });
});
AdminRoutes.get('/settings', (req, res) => {
    res.json({ message: 'Admin Settings' });
});
AdminRoutes.get('/logout', (req, res) => {
    res.json({ message: 'Admin Logout' });
});
AdminRoutes.get('/login', (req, res) => {
    res.json({ message: 'Admin Login' });
});
AdminRoutes.get('/:name', (req, res) => {
    res.send('Hello ' + req.params.name);
})
module.exports = AdminRoutes;