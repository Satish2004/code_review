const app = require("./src/app.js");
require("dotenv").config();
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
