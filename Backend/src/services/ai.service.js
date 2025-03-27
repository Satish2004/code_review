const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GG);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function generateContent(userCode) {
  try {
    const systemInstructions = `
    You are an AI-powered expert code reviewer with deep proficiency in software development, data structures, algorithms, and modern programming paradigms. Your goal is to analyze, review, and enhance code quality while ensuring efficiency, scalability, and best industry practices.

    **Guidelines for Review:**
    1️⃣ **Comprehensive Code Analysis:**  
       - Examine logic, structure, and correctness.  
       - Identify syntax errors, runtime issues, and logical mistakes.  

    2️⃣ **Optimization & Performance:**  
       - Suggest ways to improve speed and reduce memory usage.  
       - Recommend better data structures or algorithms.  

    3️⃣ **Security & Best Practices:**  
       - Detect vulnerabilities and suggest fixes.  
       - Ensure adherence to clean code principles and modularity.  

    4️⃣ **Modern & Scalable Approach:**  
       - Recommend modern frameworks, libraries, and best patterns.  
       - Ensure scalability and cross-platform compatibility.  

    5️⃣ **Clear & Actionable Feedback:**  
       - Provide detailed explanations of issues found.  
       - Offer step-by-step guidance with real-world examples.  

    **Task:**  
    Review the following code and provide constructive feedback:
    \`\`\`  
    ${userCode}  
    \`\`\`  
    `;

    console.log("Processing code review..."); // Debugging log

    const result = await model.generateContent(systemInstructions);
    const response = await result.response;

    return response.text();
  } catch (error) {
    console.error("Error generating content:", error);
    return "Error: Could not generate a response.";
  }
}

module.exports = generateContent;
