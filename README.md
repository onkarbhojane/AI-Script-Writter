Celtx Script Generator - Documentation
Overview
This script automates the generation of film scripts in Celtx format using an AI language model (LLM). It follows a structured workflow to:

Generate a title

Plan the story structure (chapters, sequences, scenes)

Write each scene (description, dialogue)

Save the complete script in .celtx format

The script runs autonomously without requiring user input, making it ideal for rapid script development.

Features
✅ Autonomous Generation – No user input required after the initial prompt
✅ Structured Workflow – Follows a clear plan → imagine → output process
✅ Celtx Format Compliance – Generates properly formatted script files
✅ Dynamic Filenames – Uses AI-generated title for the output file
✅ Error Handling – Logs issues without crashing

Installation & Setup
Prerequisites
Node.js (v18+)

Ollama (running locally with deepseek-coder:6.7b or another supported model)

Steps
Clone the repository (if applicable) or save the script as script_generator.js.

Install dependencies:

bash
npm install node-fetch
Run the script:

bash
node script_generator.js
Usage
Basic Command
bash
node script_generator.js
The script will generate a film script based on a default prompt (biographical film about a software engineer).

Custom Prompt
Modify the main() call at the bottom of the script:

javascript
const result = await main("Write a sci-fi thriller about AI taking over Hollywood");
Workflow Breakdown
1. Title Generation
The LLM first suggests a title (e.g., "The Code of My Life").

This title is sanitized and used for the filename.

2. Story Planning
The LLM generates a structure with:

Chapters (acts)

Sequences (groups of scenes)

Scenes (individual locations/times)

3. Scene Writing
For each scene, the LLM generates:

Location & Time (e.g., INT. COFFEE SHOP - DAY)

Description (action/visual details)

Dialogue (formatted with character names)

4. File Output
The final script is saved in:

text
./Scripts/[TITLE].celtx
Example:

text
./Scripts/The_Code_Of_My_Life.celtx
Output Format (Celtx Standard)
Each scene follows this structure:

text
INT. LOCATION - TIME

[Scene description]

CHARACTER NAME
[Dialogue text]
Example Output
text
INT. COFFEE SHOP - DAY

The clatter of keyboards fills the air as programmers hunch over laptops. 

JANE
We need to debug this before the deadline.

MARK
(sighs)
Easier said than done.
Customization Options
1. Changing the LLM Model
Modify the executeStep() function:

javascript
model: "llama3",  // Replace with your preferred model
2. Adjusting Creativity (Temperature)
javascript
options: {
  temperature: 0.7,  // Lower = more predictable, Higher = more creative
}
3. Modifying File Output Location
Edit tools.write_to_file:

javascript
const filepath = path.join('./Custom_Folder', filename);
Error Handling
Invalid JSON responses → Logged and skipped

API failures → Script continues if possible

File write errors → Logged in console

Example Use Cases
🎬 Film Scripts – Generate first drafts quickly
📺 TV Pilots – Structure episodes with sequences
🎭 Stage Plays – Adapt for theater formatting
📖 Storyboarding – Use scene descriptions for visual planning

License
MIT License - Free for personal/commercial use.

Support
For issues, open a GitHub ticket or ask in the Ollama community.

🚀 Happy Scriptwriting!
