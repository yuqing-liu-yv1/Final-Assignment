// Simple interactive bar chart for blood type distribution

document.addEventListener("DOMContentLoaded", () => {
  const chart = document.getElementById("chart");
  if (!chart) return;

  const data = [
    { type: "O", value: 51, description: "About 51% are Type O." },
    { type: "A", value: 26, description: "Roughly a quarter are Type A." },
    { type: "B", value: 17, description: "Type B is less common but still significant." },
    { type: "AB", value: 6, description: "Type AB is the rarest group." }
  ];

  data.forEach(item => {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = `${item.value * 3}px`;

    const label = document.createElement("div");
    label.className = "bar-label";
    label.textContent = item.type;

    const value = document.createElement("div");
    value.className = "bar-value";
    value.textContent = `${item.value}%`;

    bar.appendChild(label);
    bar.appendChild(value);

    bar.setAttribute("aria-label", item.description);
    bar.setAttribute("role", "img");
    bar.title = item.description;

    chart.appendChild(bar);
  });
});