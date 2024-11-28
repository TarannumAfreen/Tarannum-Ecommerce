const { app } = require("./src/index.js");
const { connectDb } = require("./src/config/db.js");
const userService = require("./src/services/user.service.js");

const PORT = 5001;
app.listen(PORT, async () => {
  await connectDb();
  console.log("DB connected successfully");
  userService.initializeAdminUser();
  console.log("ecommerce api listing on port ", PORT);
});
