const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

exports.generateCode = async (req, res) => {
  const { language, prompt } = req.body;

  try {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(
      `Generate ${language} code for the following: ${prompt}`
    );
    const response = await result.response;
    const generatedCode = response.text();

    res.json({ code: generatedCode });
  } catch (error) {
    console.error('Error generating code:', error);
    res.status(500).json({ message: 'Error generating code', error: error.message });
  }
};

