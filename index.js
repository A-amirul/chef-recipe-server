const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;


app.use(cors());

app.get('/', (req, res) => {
	res.send("Shef recipe is running")
});

app.listen(port, () => {
	console.log(`Shef Corner is running on port:${port}`);
})

