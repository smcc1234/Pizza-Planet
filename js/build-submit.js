document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("buildPizza");
    const receiptDiv = document.getElementById("receipt");

    // Form Page (Build Your Pizza)
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const size = document.querySelector('input[name="size"]:checked')?.value || "";
            const crust = document.querySelector('input[name="crust"]:checked')?.value || "";
            const cheese = document.querySelector('input[name="cheese"]:checked')?.value || "";
            const quantity = document.getElementById("quantity")?.value || "1";

            const toppings = [];
            document.querySelectorAll('input[name="toppings"]:checked').forEach(t => toppings.push(t.value));

            const params = new URLSearchParams({
                size,
                crust,
                cheese,
                quantity,
                toppings: toppings.join(",")
            });

            window.location.href = `receipt.html?${params.toString()}`;
        });
    }

    // Receipt Page (Not sure how the menu page will work out, probably going to need a separate script for that)
    if (receiptDiv) {
        const params = new URLSearchParams(window.location.search);
        const size = params.get("size");
        const crust = params.get("crust");
        const cheese = params.get("cheese");
        const quantity = params.get("quantity");
        const toppings = params.get("toppings");

        receiptDiv.innerHTML = `
            <p><strong>Size:</strong> ${size}</p>
            <p><strong>Crust:</strong> ${crust}</p>
            <p><strong>Cheese:</strong> ${cheese}</p>
            <p><strong>Quantity:</strong> ${quantity}</p>
            <p><strong>Toppings:</strong> ${toppings ? toppings.replaceAll(",", ", ") : "None"}</p>
        `;
    }
});
