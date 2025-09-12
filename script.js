// Singleton Logger Class
const Logger = (function () {
  let instance; // private variable to store single instance

  function createInstance() {
    const logs = [];
    return {
      addLog: function (msg) {
        logs.push(msg);
        displayLogs(logs);
      },
      getLogs: function () {
        return logs;
      }
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
        displayOutput("✅ New Logger instance created");
      } else {
        displayOutput("⚠️ Using existing Logger instance");
      }
      return instance;
    }
  };
})();

// --- Demo functions ---
let logger;

function createLogger() {
  logger = Logger.getInstance();
}

function logMessage() {
  if (!logger) {
    displayOutput("❌ Please create a Logger instance first!");
    return;
  }
  const msg = "Log entry at " + new Date().toLocaleTimeString();
  logger.addLog(msg);
}

function displayLogs(logs) {
  const out = document.getElementById("output");
  out.innerHTML = "<b>Logger Entries:</b><br>" + logs.join("<br>");
}

function displayOutput(msg) {
  const out = document.getElementById("output");
  out.innerHTML += msg + "<br>";
}