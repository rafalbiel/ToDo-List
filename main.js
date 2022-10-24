const tasks = [];

function renderTable() {
	console.log("rendering");
	const rootElement = document.querySelector("#root");
	rootElement.innerHTML = "";
	const tableElement = document.createElement("table");
	tableElement.setAttribute("border", "1");
	const trElement = document.createElement("tr");
	const thElement1 = document.createElement("th");
	const thElement2 = document.createElement("th");

	thElement1.textContent = "zadanie";
	thElement2.textContent = "status";
	trElement.appendChild(thElement1);
	trElement.appendChild(thElement2);

	tableElement.appendChild(trElement);
	tasks.forEach((task, index) => {
		const trTaskElement = document.createElement("tr");
		const tdTaskTextElement = document.createElement("td");
		const tdTaskStatusElement = document.createElement("td");
		const inputTaskCheckboxElement = document.createElement("input");
		inputTaskCheckboxElement.setAttribute("type", "checkbox");

		tdTaskTextElement.textContent = task.text;
		inputTaskCheckboxElement.checked = task.status;
		inputTaskCheckboxElement.onclick = () => {
			tasks[index].status = !task.status;
		};
		tdTaskStatusElement.appendChild(inputTaskCheckboxElement);

		trTaskElement.appendChild(tdTaskTextElement);
		trTaskElement.appendChild(tdTaskStatusElement);
		tableElement.appendChild(trTaskElement);
	});
	rootElement.appendChild(tableElement);
}

function addTask() {
	const taskElement = document.querySelector("#task-input");
	const taskValue = taskElement.value;
	tasks.push({
		text: taskValue,
		status: false,
	});
	console.log(tasks);
	renderTable();
}

renderTable();
