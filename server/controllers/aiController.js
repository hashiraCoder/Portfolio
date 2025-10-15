const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize the Google AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Hard-code your resume/skills data here. This is the "context" for the AI.
const shivamResumeData = `
  Name: Shivam
  Role: MERN Stack Developer & Certified Cybersecurity Expert
  
  Skills:
  - Frontend: React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS
  - Backend: Node.js, Express.js
  - Database: MongoDB, Mongoose
  - Tools: Git, GitHub, VS Code, Postman, Docker
  - Cybersecurity: Network Security, Penetration Testing, Hashcat, OWASP Top 10

  Projects:
  - E-Commerce Platform: A full-stack MERN e-commerce site with user auth and payment integration.
  - Cyber Threat Intel Platform: A real-time dashboard for visualizing cyber threats, built with React and various APIs.
  - College CTF Website: A vulnerable website designed for a Capture The Flag event to teach security principles.

  Achievements:
  - Certified Cybersecurity Expert (CompTIA)
  - Smart India Hackathon 2025 Winner
`;

exports.analyzeJobDescription = async (req, res) => {
  try {
    const { jobDescription } = req.body;

    if (!jobDescription) {
      return res.status(400).json({ message: "Job description is required." });
    }

    // Use a supported Gemini model
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

    // This is the prompt we send to the AI. It's highly detailed.
    const prompt = `
      You are an expert HR assistant. Your task is to analyze a job description and compare it against the resume of a candidate named Shivam.

      Here is Shivam's resume:
      ---
      ${shivamResumeData}
      ---

      Here is the job description you need to analyze:
      ---
      ${jobDescription}
      ---

      Please provide a detailed analysis in Markdown format with the following sections:
      1.  **Match Score:** A percentage of how well Shivam matches the role.
      2.  **Summary:** A short paragraph explaining why Shivam is a strong or weak candidate.
      3.  **Key Skill Matches:** A bulleted list of skills and experiences Shivam has that are directly mentioned in the job description.
      4.  **Potential Gaps:** A bulleted list of required skills from the job description that are not explicitly listed in Shivam's resume.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ analysis: text });

  } catch (error) {
    console.error("Error in AI analysis:", error);
    res.status(500).json({ message: "Failed to perform AI analysis." });
  }
};