import { useState } from 'react';
import { motion } from 'framer-motion';
import { generateCode } from '../services/api';

const CodeGeneration = () => {
  const [language, setLanguage] = useState('');
  const [prompt, setPrompt] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { code } = await generateCode(language, prompt);
      setGeneratedCode(code);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred while generating code');
      setGeneratedCode('');
    }
  };

  return (
    <motion.div 
      className="code-generation-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="content-wrapper"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="title">Generate Code</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="form-container">
          <div className="input-group">
            <label htmlFor="language">Programming Language</label>
            <input
              type="text"
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="prompt">Prompt</label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows="4"
              required
            ></textarea>
          </div>
          <motion.button 
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Generate Code
          </motion.button>
        </form>
        {generatedCode && (
          <motion.div 
            className="generated-code"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3>Generated Code:</h3>
            <pre><code>{generatedCode}</code></pre>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CodeGeneration;


