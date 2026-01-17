from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow the Website to talk to Python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- YOUR DATA (Raksha Shield Removed) ---
projects_data = [
    {
        "title": "CareerOps Project",
        "description": "Developed a comprehensive career development platform using full-stack skills.",
        "icon": "📂",
        "color": "bg-blue-100 text-blue-600"
    },
    {
        "title": "Intune Expertise",
        "description": "Years of hands-on experience in MDM/MAM with Microsoft Intune. Enterprise deployment & policy management.",
        "icon": "☁️",
        "color": "bg-purple-100 text-purple-600"
    }
]

@app.get("/api/projects")
def get_projects():
    return projects_data