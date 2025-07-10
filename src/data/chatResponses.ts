export interface ChatResponse {
  text: string;
  delay?: number;
}

export const chatResponses = {
  greeting: [
    { text: "Hi there! 👋 I'm Pragadheesh's virtual assistant.", delay: 500 },
    { text: "I can help you learn more about my work, skills, or how we can collaborate.", delay: 1000 },
    { text: "Feel free to ask me anything!", delay: 1500 }
  ],
  
  about: [
    { text: "I'm a Full Stack Developer with expertise in React, Node.js, and TypeScript.", delay: 500 },
    { text: "I love building scalable web applications and solving complex problems.", delay: 1000 },
    { text: "Currently, I'm pursuing my B.Tech in Computer Science at SASTRA Deemed University.", delay: 1500 }
  ],

  skills: [
    { text: "My core skills include:", delay: 500 },
    { text: "• Frontend: React, TypeScript, Tailwind CSS", delay: 800 },
    { text: "• Backend: Node.js, Express, MongoDB", delay: 1100 },
    { text: "• Tools: Git, Docker, AWS", delay: 1400 }
    
  ],

  contact: [
    { text: "You can reach me at pragadheesharumugam@gmail.com", delay: 500 },
    { text: "Or connect with me on LinkedIn!", delay: 1000 },
    { text: "Thank you 🤞Feel free to ask me anything else!", delay: 1500 }
  ],

  default: [
    { text: "I'm not sure I understand. Could you rephrase that?.Any how thank you so much for you questions.", delay: 500 },
    { text: "You can ask me about my skills, projects, or how to get in touch.", delay: 1000 },
    { text: "If you have any specific questions, feel free to ask!", delay: 1500 },
    { text: "Thank you for visiting my portfolio!", delay: 2000 },
    { text: "Have a great day! 😊", delay: 2500 },
    { text: "If you need help with anything else, just let me know!", delay: 3000 }
  ]
};