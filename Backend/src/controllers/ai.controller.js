const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  //   res.send("Hello World");
  const code = req.body;
  if (!code) {
    return res.status(400).send("Prompt is required");
  }
  const response = await aiService(code);
  res.send(response);
};
