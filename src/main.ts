const counter = document.querySelector<HTMLButtonElement>("[data-collatz-counter]");
const value = counter?.querySelector<HTMLSpanElement>("span");

if (counter) counter.disabled = false;

counter?.addEventListener("click", () => {
	if (!value) return;

	const current = Number(value.textContent);
	value.textContent = String(current % 2 === 0 ? current / 2 : current * 3 + 1);
});
