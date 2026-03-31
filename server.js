// path: server.js
const express = require('express');
const cors = require('cors');
const path = require('path'); 
const supabase = require('./supabaseClient');

const app = express();

app.use(cors());
app.use(express.json());

// 1. UPDATED: Tell the server to look at the ROOT directory for files
app.use(express.static(__dirname));

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

// 2. UPDATED: Send the index.html from the ROOT directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
