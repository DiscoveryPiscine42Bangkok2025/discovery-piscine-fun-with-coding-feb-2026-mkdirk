window.onload = function () {
	loadTodos();

	document.getElementById("new").onclick = function () {
		let text = prompt("Enter a new TO DO:");
		if (text && text.trim() !== "") {
			addTodo(text);
			saveTodos();
		}
	};
};

function addTodo(text) {
	let ft_list = document.getElementById("ft_list");

	let div = document.createElement("div");
	div.className = "todo";
	div.innerText = text;

	div.onclick = function () {
		if (confirm("Do you want to remove this TO DO?")) {
			this.remove();
			saveTodos();
		}
	};

	// เพิ่มไว้ด้านบน
	ft_list.prepend(div);
}

function saveTodos() {
	let todos = [];
	document.querySelectorAll(".todo").forEach(todo => {
		todos.push(todo.innerText);
	});
	document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/";
}

function loadTodos() {
	let cookies = document.cookie.split("; ");
	for (let i = 0; i < cookies.length; i++) {
		let parts = cookies[i].split("=");
		if (parts[0] === "todos") {
			let todos = JSON.parse(decodeURIComponent(parts[1]));
			todos.forEach(todo => addTodo(todo));
		}
	}
}