console.log("ttt.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-button");
  const installDirInput = document.getElementById("install-dir-input");
  const serverNameInput = document.getElementById("servername-input");
  const browseButton = document.getElementById("browse-button");

  if (browseButton && installDirInput) {
    browseButton.addEventListener("click", async () => {
      try {
        const directoryPath = await window.electronAPI.selectDirectory();
        if (directoryPath) {
          installDirInput.value = directoryPath;
        }
      } catch (error) {
        console.error("Error selecting directory:", error);
        alert("Failed to open directory dialog.");
      }
    });
  } else {
    console.error("Browse button or install directory input not found.");
  }

  if (startButton && installDirInput && serverNameInput) {
    startButton.addEventListener("click", () => {
      const installPath = installDirInput.value;
      const serverName = serverNameInput.value;

      if (!installPath || !serverName) {
        alert(
          "Please provide both an installation directory and a server name."
        );
        return;
      }

      const nextPageUrl = `ttt_conf.html?installPath=${encodeURIComponent(
        installPath
      )}&serverName=${encodeURIComponent(serverName)}`;

      window.location.href = nextPageUrl;
    });
  } else {
    console.error(
      "Required elements (start button, install dir input, or servername input) not found."
    );
  }
});
