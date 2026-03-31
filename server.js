// path: server.js
const express = require('express');
const cors = require('cors');
const path = require('path'); // Added to handle file paths
const supabase = require('./supabaseClient');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 1. Tell the server to serve files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// API Route: Get data from a table
app.get('/api/data', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('your_table_name')
            .select('*');

        if (error) throw error;
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 2. Root route: This now sends the index.html file to the user
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Port configuration for Render (defaulting to 10000)
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
