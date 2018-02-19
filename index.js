express = require('express');

const app = express();

// Add config directories here... 
app.use(express.static('public'));
app.use(express.static('storybook'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))