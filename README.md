Project Setup
Prerequisites
Node.js (v14+)
npm (Node package manager)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/node-backend-project.git
cd node-backend-project
Install the required dependencies:

bash
Copy code
npm install
Running the Server
To start the server, use the following command:

bash
Copy code
node app.js
The server will start on localhost:3000.

API Endpoints
Graph Data API
GET /graph: Returns the graph structure with functions and dependencies.

Example response:

json
Copy code
[
  {
    "function": "/litellm/proxy/proxy_server.py:chat_completion",
    "params": [
      { "identifier": "request", "type": "Request" },
      { "identifier": "fastapi_response", "type": "Response" }
    ],
    "response_object": "",
    "children": [
      {
        "function": "/litellm/proxy/proxy_server.py:_get_openai",
        "params": [{ "identifier": "config", "type": "ProxyConfig" }],
        "response_object": "",
        "children": []
      }
    ]
  }
]
GET /graph/dependencies: Returns a list of graph dependencies.

Example response:

json
Copy code
[
  "ProxyConfig.load_team_config",
  "parse_cache_control",
  "select_data_generator",
  "ProxyLogging.during_call_hook",
  "ProxyLogging.post_call_failure_hook"
]
Configuration API
GET /configuration?flow=flow_name: Fetches the configuration for a specific flow.

Example request:

bash
Copy code
curl "http://localhost:3000/configuration?flow=myFlow"
POST /configuration: Creates or updates configuration data.

Example request:

bash
Copy code
curl -X POST http://localhost:3000/configuration \
-H "Content-Type: application/json" \
-d '{"flow": "myFlow", "config": {"param1": "value1"}}'
Folder Structure
bash
Copy code
/node-backend-project
│
├── /config              # Database configuration
│   └── dbConfig.js
├── /controllers         # Controllers handling API logic
│   ├── configController.js
│   └── graphController.js
├── /routes              # API routes
│   ├── configRoutes.js
│   └── graphRoutes.js
├── /services            # Business logic services
│   └── configService.js
├── /middleware          # Middleware for database mock state
│   └── mockDbMiddleware.js
├── /data                # Mock data for graph and dependencies
│   └── mockGraphData.js
├── /utils               # Utility functions
│   └── apiErrorHandler.js
├── app.js               # Main server file
└── package.json         # Project metadata and dependencies
