# Email Template Generator with AI Integration

An intelligent email composition system powered by Google's Gemini AI that automatically crafts contextual email messages based on user requirements. This full-stack application combines a RESTful API backend with an interactive web interface for seamless email generation.

## Overview

This application streamlines email writing by leveraging artificial intelligence to generate professional and personalized email content. Users specify the purpose, recipient, and desired communication style, and the system produces ready-to-use email templates in seconds. The architecture follows modern design patterns with clear separation between presentation, business logic, and external service integration.

## Key Capabilities

**AI-Driven Content Generation**
- Powered by Google Gemini 1.5 Flash model for natural language generation
- Contextual understanding of email purpose and recipient relationship
- Adaptive tone adjustment (professional formal vs. polite friendly)
- Real-time performance metrics tracking

**Robust Architecture**
- RESTful API design with Express.js framework
- Controller-Service-Route layered architecture
- Automatic fallback mechanism when AI services are unavailable
- Environment-based configuration management

**User Experience**
- Browser-based interface requiring no additional tools
- Real-time email generation feedback
- Response time visibility for performance transparency
- Minimal and intuitive input requirements

## Technology Foundation

**Backend Infrastructure**
- Runtime: Node.js
- Web Framework: Express.js (v4.18.2)
- HTTP Client: Axios (v1.6.0)
- Environment Management: dotenv (v16.3.1)
- Development Tool: Nodemon (v3.0.1)

**Frontend Components**
- Pure HTML5 for structure
- CSS3 for styling and responsive design
- Vanilla JavaScript with Fetch API for asynchronous communication

**AI Integration**
- Provider: Google Generative Language API
- Model: Gemini 1.5 Flash
- Authentication: API Key-based

## Installation & Setup

**Prerequisites**
- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Google Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))

**Step 1: Clone the Repository**
```bash
git clone https://github.com/Partha7797/Ai-Email-Template.git
cd Ai-Email-Template
```

**Step 2: Install Dependencies**
```bash
npm install
```

**Step 3: Configure Environment Variables**

Create a `.env` file in the project root directory:
```env
GEMINI_API_KEY=your_actual_gemini_api_key
PORT=3000
```

**Step 4: Start the Application**

For production:
```bash
npm start
```

For development (with auto-reload):
```bash
npm run dev
```

The server will launch at `http://localhost:3000`

## Application Structure

```
Ai-Email-Template/
│
├── src/                          # Source code directory
│   ├── app.js                    # Express application configuration
│   ├── server.js                 # Server entry point
│   │
│   ├── controllers/              # Request handlers
│   │   └── emailController.js    # Email generation endpoint logic
│   │
│   ├── routes/                   # API route definitions
│   │   └── emailRoutes.js        # Email-related routes
│   │
│   └── services/                 # Business logic layer
│       └── aiEmailService.js     # Gemini AI integration service
│
├── public/                       # Static frontend assets
│   ├── index.html                # Main application page
│   │
│   ├── css/                      # Stylesheets
│   │   └── style.css             # Application styling
│   │
│   └── js/                       # Client-side scripts
│       └── script.js             # Frontend interaction logic
│
├── .env                          # Environment variables (not tracked)
├── .gitignore                    # Git exclusion rules
├── package.json                  # Project dependencies and scripts
└── README.md                     # Project documentation
```

## API Documentation

### Generate Email Template

**Endpoint:** `POST /api/email/generate`

**Request Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "purpose": "requesting a refund for a defective product",
  "recipient_name": "Sarah Johnson",
  "tone": "professional"
}
```

**Request Parameters:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| purpose | string | Yes | The reason or context for the email |
| recipient_name | string | Yes | Name of the person receiving the email |
| tone | string | Yes | Communication style: "polite" or "professional" |

**Success Response (200 OK):**
```json
{
  "email": "Subject: Refund Request\n\nDear Sarah Johnson,\n\nI am writing to formally request...",
  "ai_response_time_ms": 1247
}
```

**Error Responses:**

*400 Bad Request* - Missing required fields:
```json
{
  "error": "purpose, recipient_name and tone are required"
}
```

*500 Internal Server Error* - Server-side processing error:
```json
{
  "error": "Internal server error"
}
```

## Using the Web Interface

1. Navigate to `http://localhost:3000` in your web browser
2. Fill in the three input fields:
   - **Purpose**: Describe what the email should address (e.g., "meeting invitation", "order confirmation")
   - **Recipient Name**: Enter the person's name
   - **Tone**: Choose either "polite" or "professional"
3. Click the "Generate Email" button
4. View the generated email content along with the AI processing time

The interface provides immediate visual feedback and displays both the email content and performance metrics.

## Architecture Highlights

**Layered Design Pattern**
- **Routes Layer** (`emailRoutes.js`): Defines API endpoints and maps them to controllers
- **Controller Layer** (`emailController.js`): Handles HTTP requests, validates input, and coordinates responses
- **Service Layer** (`aiEmailService.js`): Contains business logic and external API integration

**Tone-Based Prompt Engineering**
The system dynamically constructs prompts based on the selected tone:
- **Polite Mode**: Generates friendly, approachable communication
- **Professional Mode**: Creates formal, business-appropriate correspondence
- **Default Mode**: Provides balanced, neutral messaging

**Resilience and Reliability**
- Automatic fallback response when Gemini API is unavailable
- Error logging for debugging and monitoring
- Input validation to prevent malformed requests
- Performance timing for service quality tracking

## Configuration Options

The application uses environment variables for flexible deployment:

| Variable | Purpose | Default |
|----------|---------|---------|
| GEMINI_API_KEY | Authentication for Google Gemini API | (required) |
| PORT | HTTP server listening port | 3000 |

## Development Workflow

**Running in Development Mode:**
```bash
npm run dev
```
This uses Nodemon to automatically restart the server when code changes are detected.

**Project Scripts:**
- `npm start` - Runs the production server
- `npm run dev` - Starts development server with hot-reload

## Error Handling Strategy

The application implements multi-level error handling:

1. **Input Validation**: Rejects requests with missing or invalid parameters
2. **API Error Catching**: Captures and logs Gemini API failures
3. **Graceful Degradation**: Returns informative fallback messages when AI is unavailable
4. **Error Logging**: Console outputs for debugging and troubleshooting

## Performance Considerations

- Response time tracking built into every request
- Asynchronous processing prevents request blocking
- Efficient HTTP client configuration with Axios
- Minimal frontend dependencies for fast page loads

## Security Notes

- API keys stored in environment variables, never in source code
- `.env` file excluded from version control via `.gitignore`
- Input trimming to prevent injection attacks
- HTTPS recommended for production deployments

## Future Enhancement Possibilities

- Support for additional language models (OpenAI, Claude, etc.)
- Multi-language email generation
- Email template saving and history
- Advanced formatting options (HTML emails, attachments)
- User authentication and personalized preferences
- Rate limiting and usage analytics
- Batch email generation capabilities

## Troubleshooting

**Server won't start:**
- Verify Node.js installation: `node --version`
- Check if port 3000 is already in use
- Ensure all dependencies are installed: `npm install`

**AI generation fails:**
- Confirm GEMINI_API_KEY is correctly set in `.env`
- Verify API key is active at Google AI Studio
- Check internet connectivity
- Review server console for detailed error messages

**Frontend doesn't load:**
- Ensure server is running
- Clear browser cache
- Check browser console for JavaScript errors
- Verify static file serving is working

## Contributing

This project follows standard open-source contribution practices. When contributing:
- Maintain the existing code structure and style
- Include descriptive commit messages
- Test changes thoroughly before submitting
- Update documentation for new features

## License

This project is available for educational and demonstration purposes.

## Contact & Support

For issues, questions, or suggestions:
- Open an issue on the GitHub repository
- Contact the maintainer through GitHub

---

**Built with ❤️ using Node.js and Google Gemini AI**
