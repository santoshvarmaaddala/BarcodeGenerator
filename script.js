document.getElementById("btn").addEventListener("click", function() {
    var text = document.getElementById("text").value;
    generateBarcode(text);
    });

    function generateBarcode(text) {
        JsBarcode("#barcode", text, {
            format: "CODE128",
            width: 2,
            height: 100,
            displayValue: true
            });
        }