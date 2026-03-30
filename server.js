const express = require('express');
const cors = require('cors');
const supabase = require('./supabaseClient');

const app = express();
app.use(cors());
app.use(express.json());

// Sample Route: Get data from a table
app.get('/api/data', async (req, res) => {
    try {
        // Replace 'your_table_name' with your actual Supabase table name
        const { data, error } = await supabase
            .from('your_table_name')
            .select('*');

        if (error) throw error;
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Root route to check if server is live
app.get('/', (req, res) => {
    res.send('Backend is Live and Connected to Supabase!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
