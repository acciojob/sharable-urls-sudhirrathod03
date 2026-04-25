// your code here
 const nameInput = document.getElementById("name");
    const yearInput = document.getElementById("year");
    const button = document.getElementById("button");
    const urlText = document.getElementById("url");

    button.addEventListener("click", function () {
      let baseURL = "https://localhost:8080/";
      let params = [];

      if (nameInput.value.trim() !== "") {
        params.push(`name=${encodeURIComponent(nameInput.value.trim())}`);
      }

      if (yearInput.value.trim() !== "") {
        params.push(`year=${encodeURIComponent(yearInput.value.trim())}`);
      }

      // Build final URL
      if (params.length > 0) {
        baseURL += "?" + params.join("&");
      }

      urlText.textContent = baseURL;
    });