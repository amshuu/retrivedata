document.addEventListener("DOMContentLoaded", function () {
    const dataForm = document.getElementById("data-form");
    const storeButton = document.getElementById("store-button");
    const retrieveForm = document.getElementById("retrieve-form");
    const retrieveButton = document.getElementById("retrieve-button");
    const retrieveResult = document.getElementById("retrieve-result");

    const dataStorage = {};

    storeButton.addEventListener("click", function (e) {
        e.preventDefault();
        const dataInput = document.getElementById("data");
        const codeInput = document.getElementById("code");
        const data = dataInput.value.trim();
        const code = codeInput.value.trim();

        if (data !== "" && code !== "" && !isNaN(code) && code.length === 5) {
            dataStorage[code] = data;
            dataInput.value = "";
            codeInput.value = "";
            alert("Data stored successfully!");
        } else {
            alert("Invalid data or code. Please check and try again.");
        }
    });

    retrieveButton.addEventListener("click", function (e) {
        e.preventDefault();
        const retrieveCodeInput = document.getElementById("retrieve-code");
        const retrieveCode = retrieveCodeInput.value.trim();

        if (retrieveCode !== "" && !isNaN(retrieveCode) && retrieveCode.length === 5) {
            if (dataStorage.hasOwnProperty(retrieveCode)) {
                const retrievedData = dataStorage[retrieveCode];
                retrieveResult.textContent = `Retrieved data: ${retrievedData}`;
            } else {
                retrieveResult.textContent = "Code not found. Please enter a valid code.";
            }
        } else {
            retrieveResult.textContent = "Invalid code. Please enter a 5-digit numeric code.";
        }
    });
});
