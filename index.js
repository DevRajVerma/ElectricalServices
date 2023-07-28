const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Change this to the desired port number

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Contact Form Data (temporary storage)
let contactFormSubmissions = [];

// Contact Form Submission
app.post('/submit-form', (req, res) => {
  const { name, phone, requirements } = req.body;

  // Perform validation on the form data if needed
  // ...

  // Store the form data in the temporary array
  const submission = { name, phone, requirements };
  contactFormSubmissions.push(submission);

  res.status(200).json({ message: 'Form data saved successfully!' });
});

// Service Data Retrieval (dummy data - modify as needed)
const services = [
  { id: 1, name: 'Electrical Control Panel and Boxes', image: 'service1.jpg' },
  { id: 2, name: 'Electrical Services', image: 'service2.jpg' },
  { id: 3, name: 'AMF Panel Repair and Service', image: 'service3.jpg' },
  // Add more services here...
];

app.get('/services', (req, res) => {
  res.status(200).json(services);
});

app.get('/services/:id', (req, res) => {
  const serviceId = parseInt(req.params.id);

  const service = services.find((service) => service.id === serviceId);
  if (service) {
    res.status(200).json(service);
  } else {
    res.status(404).json({ error: 'Service not found' });
  }
});


// ... (previous code remains unchanged)

// Home Page
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
  
  // ... (previous code remains unchanged)
  
// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
