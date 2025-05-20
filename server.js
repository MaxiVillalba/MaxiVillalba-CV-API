import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const profile = {
  fullName: "Maximiliano Villalba",
  role: "Fullstack Developer",
  location: "Barcelona, Spain",
  contact: {
    email: "massevillalba@gmail.com",
    phone: "+34 694 28 16 65",
    citizenStatus: { NIE: "Z2100883E" },
  },
  languages: {
    spanish: "Native",
    english: "Advanced",
    catalan: "Mitjà-alt",
  },
  skills: {
    general: [
      "CRMs and Management Systems",
      "Microsoft Office - Advanced",
      "Google Workspace (Docs, Sheets) - Advanced",
      "Recruitment Platforms: Hiring Room, Bumeran, LinkedIn, Indeed",
    ],
    technical: [
      "Backend Development, APIs, Testing, Architecture",
      "MongoDB, AWS, Google Services",
      "Dockerhub, Kubernetes",
      "JavaScript, React.js, HTML, CSS, Bootstrap",
    ],
  },
  github: "https://github.com/MaxiVillalb",
  certifications: {
    javascript: "https://bit.ly/44vliNL",
    reactJs: "https://bit.ly/42EztOc",
    webDevelopment: "https://bit.ly/4lBtQcc",
    backendDevelopment: "https://bit.ly/4cyf3La",
    frontendCareer: "https://bit.ly/4ihNt67",
  },
};

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "cv.html"));
});

app.get("/profile", (req, res) => {
  res.json(profile);
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
