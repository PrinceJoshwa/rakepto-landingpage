const logError = (error, context = {}) => {
    // In a real application, you might want to send this to a logging service
    console.error("Error occurred:", error.message, "Context:", context)
  
    // You could also send this to a backend API for logging
    // fetch('/api/log', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ error: error.message, context })
    // });
  }
  
  export { logError }
  
  