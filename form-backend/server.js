const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT= 3000;

app.use(bodyParser.urlencoded({ extended:true }));

app.use(express.static('public'));

app.post('/submit', (req, res) => {
   

    const { name, dob, age } = req.body;
    
    formData = { name, dob, age };

    console.log('Form Data:', formData);

    
    res.redirect('/display');
});

app.get('/display', (req, res) => {
    if (!formData.name) {
        return res.send('No data available.');
    }

    res.send(`
        <h1>Form Submitted Successfully!</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Date of Birth:</strong> ${formData.dob}</p>
        <p><strong>Age:</strong> ${formData.age}</p>
    `);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});