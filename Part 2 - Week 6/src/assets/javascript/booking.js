let adultCount = 0;
let childCount = 0;
let seniorCount = 0;

function updateAdultCost() {
    const adultCountInput = document.getElementById("Adult");
    const adultCostPreview = document.getElementById("Adult-cost-preview");
    adultCount = adultCountInput.value;
    adultCostPreview.innerText = `£ ${adultCount * 50}`;
    updateTotal();
}

function updateChildCost() {
    const childCountInput = document.getElementById("Child");
    const childCostPreview = document.getElementById("Child-cost-preview");
    childCount = childCountInput.value;
    childCostPreview.innerText = `£ ${childCount * 40}`;
    updateTotal();
}

function updateSeniorCost() {
    const seniorCountInput = document.getElementById("Senior");
    const seniorCostPreview = document.getElementById("Senior-cost-preview");
    seniorCount = seniorCountInput.value;
    seniorCostPreview.innerText = `£ ${seniorCount * 40}`;
    updateTotal();
}

function updateTotal() {
    const subtotal = document.getElementById("subtotal");
    const tax = document.getElementById("tax");
    const total = document.getElementById("total");
    const totalCost = (adultCount * 50) + (childCount * 40) + (seniorCount * 40);
    subtotal.innerText = `£ ${totalCost}.00`;
    tax.innerText = `£ ${(totalCost * 0.0786).toFixed(2)}`;
    total.innerText = `£ ${(totalCost * 1.0786).toFixed(2)}`;

}