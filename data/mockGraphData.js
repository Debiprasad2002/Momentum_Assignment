// data/mockGraphData.js

// Mock graph data
const mockGraphData = [
    {
      function: "/litellm/proxy/proxy_server.py:chat_completion",
      params: [
        { identifier: "request", type: "Request" },
        { identifier: "fastapi_response", type: "Response" }
      ],
      response_object: "",
      children: [
        {
          function: "/litellm/proxy/proxy_server.py:_get_openai",
          params: [{ identifier: "config", type: "ProxyConfig" }],
          response_object: "",
          children: []
        }
      ]
    }
  ];
  
  // Mocked dependencies
  const mockDependencies = [
    "ProxyConfig.load_team_config",
    "parse_cache_control",
    "select_data_generator",
    "ProxyLogging.during_call_hook",
    "ProxyLogging.post_call_failure_hook"
  ];
  
  module.exports = {
    mockGraphData,
    mockDependencies
  };
  