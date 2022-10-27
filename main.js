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
	const thElement3 = document.createElement("th");

	thElement1.textContent = "zadanie";
	thElement2.textContent = "status";
	thElement3.textContent = "usuń zadanie";
	trElement.appendChild(thElement1);
	trElement.appendChild(thElement2);
	trElement.appendChild(thElement3);

	tableElement.appendChild(trElement);
	tasks.forEach((task, index) => {
		const trTaskElement = document.createElement("tr");
		const tdTaskTextElement = document.createElement("td");
		const tdTaskStatusElement = document.createElement("td");
		const tdTaskDeleteElement = document.createElement("td");
		const inputTaskCheckboxElement = document.createElement("input");
		inputTaskCheckboxElement.setAttribute("type", "checkbox");
		const deleteButtonElement = document.createElement("button");
		deleteButtonElement.textContent = "usuń zadanie";

		tdTaskTextElement.textContent = task.text;
		inputTaskCheckboxElement.checked = task.status;
		inputTaskCheckboxElement.onclick = () => {
			tasks[index].status = !task.status;
		};

		deleteButtonElement.onclick = () => {
			tasks.splice(index, 1);
			renderTable();
		};

		tdTaskStatusElement.appendChild(inputTaskCheckboxElement);
		tdTaskDeleteElement.appendChild(deleteButtonElement);

		trTaskElement.appendChild(tdTaskTextElement);
		trTaskElement.appendChild(tdTaskStatusElement);
		trTaskElement.appendChild(tdTaskDeleteElement);
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
