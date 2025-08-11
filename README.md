# 🎬 Movie Recommendation App (Gemini API)
This project is a Movie Recommendation Web App powered by Google's Gemini API.
Users can enter a prompt (e.g., "Suggest me 5 sci-fi movies") and get AI-powered movie recommendations directly in their browser.

# Features
AI-generated movie recommendations using Gemini API.

Simple HTML/CSS/JS frontend.

Node.js backend for API calls.

Environment variables for secure API key storage.




# 📂 Project Structure

- public
  - index.html
  - script.js
- .env
- llama.js
- package.json
- server.js
- README.md
└── README.md




# ⚙️ Installation & Setup
1. Clone the repository

Bash

git clone https://github.com/your-username/movie-recommendation-app.git

cd movie-recommendation-app

2. Install dependencies

Bash

npm install

3. Configure environment variables

Create a .env file in the project root and add your Gemini API key:

GEMINI_API_KEY=your_api_key_here

4. Run the server

Bash

node server.js

5. Open in browser
6. 
Visit http://localhost:3000 in your web browser.

# 📦 Dependencies
The following dependencies are required for this project:

express: for running the server

dotenv: for loading environment variables from the .env file

@google/generative-ai: for interacting with the Gemini API

You can install them with the following command:

Bash

npm install express dotenv @google/generative-ai

# 🖼️ Example Usage
Prompt: Recommend 5 romantic comedies

Output: A list of movie titles and AI-generated descriptions.
