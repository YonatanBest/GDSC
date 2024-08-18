function increment(column, value) {
    const counterElement = document.getElementById(`${column}-counter`);
    let currentCount = parseInt(counterElement.textContent);
    currentCount += value;
    counterElement.textContent = currentCount;
}
