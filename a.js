res.status(500).send(`Internal Server Error: ${error.message}`);
res.status(500).json({ message: 'Internal server error' });

