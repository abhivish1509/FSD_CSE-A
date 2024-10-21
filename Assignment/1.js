document.getElementById("btn").addEventListener("click", function() {

    document.getElementById("btn").remove();

    let input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("id", "bulbCount");
    input.setAttribute("placeholder", "Enter number of bulbs");
    let submitBtn = document.createElement("button");
    submitBtn.innerText = "Submit";
    submitBtn.setAttribute("id", "submitBtn");

    let container = document.getElementById("bulb-container");
    container.appendChild(input);
    container.appendChild(submitBtn);

    submitBtn.addEventListener("click", function() {
        let bulbCount = document.getElementById("bulbCount").value;
        container.innerHTML = "";
        for (let i = 0; i < bulbCount; i++) {
            let bulbWrapper = document.createElement("div");
            bulbWrapper.style.display = "inline-block";
            bulbWrapper.style.textAlign = "center";
            bulbWrapper.style.margin = "10px";

            let bulb = document.createElement("div");
            bulb.classList.add("bulb");
            bulb.setAttribute("id", `bulb-${i}`);
            bulb.setAttribute("data-status", "on");

            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("id", `checkbox-${i}`);
            
            bulbWrapper.appendChild(bulb);
            bulbWrapper.appendChild(checkbox);
            container.appendChild(bulbWrapper);

            checkbox.addEventListener("change", function() {
                let bulbElement = document.getElementById(`bulb-${i}`);
                if (checkbox.checked) {
                    bulbElement.style.background = "url('https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png')";
                    bulbElement.style.backgroundSize = "contain";
                    bulbElement.style.backgroundPosition = "center";
                    bulbElement.style.backgroundRepeat = "no-repeat";
                    bulbElement.setAttribute("data-status", "off");
                } else {
                    bulbElement.style.background = "url('https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png')";
                    bulbElement.style.backgroundSize = "contain";
                    bulbElement.style.backgroundPosition = "center";
                    bulbElement.style.backgroundRepeat = "no-repeat";
                    bulbElement.setAttribute("data-status", "on");
                }
            });
        }
    });
});
