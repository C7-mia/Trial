(function clearLocalStorageOnStart() {
  if (process.env.REACT_APP_CLEAR_STORAGE === "true") {
    console.log("🧹 Clearing localStorage...");
    localStorage.clear();
  }
})();
