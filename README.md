# Celtx Script Generator

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Ollama](https://img.shields.io/badge/Ollama-Required-orange.svg)](https://ollama.ai/)

An autonomous AI-powered script generator that creates professional film scripts in Celtx format using local language models.

## 🎬 Overview

This script automates the complete film script generation process using an AI language model (LLM). It follows a structured, professional workflow to create publication-ready scripts without any user intervention during the generation process.

### Workflow Process
1. **Generate Title** - AI creates a compelling script title
2. **Plan Story Structure** - Organizes content into chapters, sequences, and scenes
3. **Write Scenes** - Generates detailed scene descriptions and dialogue
4. **Export Script** - Saves the complete script in industry-standard Celtx format

## ✨ Features

- ✅ **Autonomous Generation** – Complete script creation without user input
- ✅ **Professional Structure** – Follows industry-standard screenplay format
- ✅ **Celtx Format Compliance** – Generates properly formatted `.celtx` files
- ✅ **Dynamic Filenames** – Uses AI-generated titles for organized file management
- ✅ **Robust Error Handling** – Continues operation despite minor issues
- ✅ **Customizable Prompts** – Easy to modify for different genres and styles
- ✅ **Local AI Processing** – No external API dependencies or data sharing

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have:

1. **Node.js** (version 18 or higher)
   ```bash
   node --version  # Should show v18.0.0 or higher
   ```

2. **Ollama** installed and running locally
   ```bash
   # Install Ollama (macOS/Linux)
   curl -fsSL https://ollama.ai/install.sh | sh
   
   # Pull the recommended model
   ollama pull deepseek-coder:6.7b
   ```

### Installation

1. **Clone or download the project**
   ```bash
   git clone https://github.com/onkarbhojane/AI-Script-Writter
   cd AI-Script-Writter
   ```

2. **Install dependencies**
   ```bash
   npm install node-fetch
   ```

3. **Create the Scripts directory**
   ```bash
   mkdir Scripts
   ```

4. **Run the generator**
   ```bash
   node Agent.js
   ```

## 📖 Usage

### Basic Usage

Run with the default biographical software engineer prompt:
```bash
node Agent.js
```

### Custom Prompts

Modify the script or create variations:

```javascript
// Edit the main() call at the bottom of script_generator.js
const result = await main("Write a sci-fi thriller about AI taking over Hollywood");
```

### Example Prompts

```javascript
// Horror
await main("Create a psychological horror film set in an abandoned hospital");

// Comedy
await main("Write a romantic comedy about two rival food truck owners");

// Drama
await main("Generate a coming-of-age story about a teenage musician");

// Action
await main("Create an action thriller about a cybersecurity expert");
```

## 🎭 Script Structure

### Generated Format

Each script follows professional Celtx formatting:

```
TITLE: [AI-Generated Title]

FADE IN:

INT. LOCATION - TIME

[Scene description with visual and atmospheric details]

CHARACTER NAME
[Dialogue line]

CHARACTER NAME
(parenthetical direction)
[More dialogue]

FADE OUT.

THE END
```

### Example Output

```
TITLE: The Code of My Life

FADE IN:

INT. COFFEE SHOP - DAY

The clatter of keyboards fills the air as programmers hunch 
over laptops. Steam rises from coffee cups while lines of 
code scroll across multiple monitors.

JANE
(frustrated)
We need to debug this before the deadline, or we're all fired.

MARK
(sighs deeply)
Easier said than done. This code is like a house of cards.

JANE
Then we better be very careful architects.

FADE OUT.
```

## ⚙️ Configuration

### Model Selection

Change the AI model in the `executeStep()` function:

```javascript
const response = await fetch('http://localhost:11434/api/generate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: "llama3",  // Options: deepseek-coder:6.7b, llama3, mistral, etc.
    prompt: prompt,
    stream: false,
    options: {
      temperature: 0.7,  // Creativity level (0.1-1.0)
      top_p: 0.9,       // Nucleus sampling
      top_k: 40,        // Top-k sampling
    }
  })
});
```

### Output Directory

Modify the output location:

```javascript
// In the tools.write_to_file function
const filepath = path.join('./Custom_Scripts_Folder', filename);
```

### Temperature Settings

Adjust creativity levels:
- `0.1-0.3` - More predictable, consistent
- `0.4-0.6` - Balanced creativity
- `0.7-0.9` - More creative, varied
- `0.9-1.0` - Highly creative, unpredictable

## 🛠️ Advanced Usage

### Batch Generation

Create multiple scripts:

```javascript
const prompts = [
  "Write a mystery thriller set in 1920s Paris",
  "Create a space opera about interstellar diplomacy", 
  "Generate a western comedy about unlikely partners"
];

for (const prompt of prompts) {
  await main(prompt);
  await new Promise(resolve => setTimeout(resolve, 5000)); // 5-second delay
}
```

### Custom Structure Templates

Modify the planning prompt to change script structure:

```javascript
const planPrompt = `Create a TV pilot structure with:
- Teaser (2-3 minutes)
- Act 1 (12-15 minutes)
- Act 2 (15-18 minutes) 
- Act 3 (10-12 minutes)
- Tag (1-2 minutes)

For: ${userPrompt}`;
```

## 📁 File Output

### Directory Structure

```
project-root/
├── script_generator.js
├── package.json
└── Scripts/
    ├── The_Code_Of_My_Life.celtx
    ├── Digital_Dreams.celtx
    └── Silicon_Valley_Nights.celtx
```

### Filename Convention

- Titles are automatically sanitized
- Special characters become underscores
- Spaces become underscores
- Extension is always `.celtx`

Examples:
- "The Code of My Life" → `The_Code_Of_My_Life.celtx`
- "AI: The Reckoning" → `AI__The_Reckoning.celtx`

## 🎯 Use Cases

### 🎬 Film Industry
- **First Draft Generation** - Rapid prototype development
- **Concept Exploration** - Test different narrative approaches
- **Writer's Block Solutions** - Generate inspiration and starting points

### 📺 Television
- **Pilot Episodes** - Create structured TV episode formats
- **Series Development** - Generate multiple episode concepts
- **Pitch Materials** - Quick script samples for presentations

### 🎭 Theater & Performance
- **Stage Adaptations** - Convert concepts to stage format
- **Workshop Materials** - Generate scenes for acting classes
- **Experimental Theater** - Explore unconventional narratives

### 📚 Educational
- **Film School Projects** - Teaching screenplay structure
- **Creative Writing** - Demonstrate professional formatting
- **Storyboarding Reference** - Visual planning from scene descriptions

## 🐛 Troubleshooting

### Common Issues

#### Ollama Connection Failed
```bash
# Check if Ollama is running
ollama list

# Start Ollama service
ollama serve

# Test connection
curl http://localhost:11434/api/tags
```

#### Model Not Found
```bash
# List available models
ollama list

# Pull the required model
ollama pull deepseek-coder:6.7b
```

#### Permission Errors
```bash
# Create Scripts directory with proper permissions
mkdir -p Scripts
chmod 755 Scripts
```

#### Memory Issues
- Reduce temperature settings
- Use smaller models (e.g., `llama3:8b` instead of `llama3:70b`)
- Close other applications to free RAM

### Error Messages

| Error | Solution |
|-------|----------|
| `ENOENT: no such file or directory` | Create the `Scripts` directory |
| `fetch failed` | Check Ollama is running on port 11434 |
| `Invalid JSON response` | Try a different model or reduce temperature |
| `Model not found` | Pull the model with `ollama pull [model-name]` |

## 🔧 Development

### Project Structure

```
src/
├── script_generator.js    # Main application
├── package.json          # Dependencies
└── README.md            # This file
```

### Dependencies

```json
{
  "dependencies": {
    "node-fetch": "^3.3.2"
  },
  "devDependencies": {
    "eslint": "^8.0.0",
    "prettier": "^3.0.0"
  }
}
```

### Testing

Run basic functionality test:
```bash
node -e "console.log('Testing...'); require('./script_generator.js');"
```

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📊 Performance

### Typical Generation Times

| Script Length | Model | Time |
|---------------|-------|------|
| Short (10-15 scenes) | deepseek-coder:6.7b | 3-5 minutes |
| Medium (20-30 scenes) | deepseek-coder:6.7b | 8-12 minutes |
| Long (40+ scenes) | deepseek-coder:6.7b | 15-25 minutes |

### Resource Usage

- **RAM**: 4-8GB (depending on model)
- **CPU**: Moderate during generation
- **Disk**: ~50KB per script file

## 🛡️ Privacy & Security

- **Local Processing**: All AI operations run locally
- **No Data Sharing**: Scripts never leave your machine
- **Open Source**: Full code transparency
- **No Telemetry**: No usage tracking or analytics

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Celtx Script Generator

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 🤝 Support

### Getting Help

1. **GitHub Issues** - Report bugs or request features
2. **Ollama Community** - Model-specific questions
3. **Documentation** - Check this README for common solutions

### Community

- 🌟 Star this repository if you find it helpful
- 🐛 Report issues on GitHub
- 💡 Suggest improvements or new features
- 🔄 Share your generated scripts (with permission)

### Roadmap

- [ ] Support for additional script formats (Final Draft, WriterDuet)
- [ ] Web-based interface
- [ ] Character development templates
- [ ] Scene-by-scene revision tools
- [ ] Integration with other AI models
- [ ] Multi-language script generation
- [ ] Collaborative writing features

---

**🚀 Happy Scriptwriting!**

*Generate your next blockbuster with the power of AI and professional formatting.*
