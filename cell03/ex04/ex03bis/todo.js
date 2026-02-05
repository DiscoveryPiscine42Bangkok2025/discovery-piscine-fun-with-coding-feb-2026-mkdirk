$(document).ready(function () {
	loadTodos();

	$("#new").on("click", function () {
		let text = prompt("Enter a new TO DO");
		if (text && text.trim() !== "") {
			addTodo(text);
			saveTodos();
		}
	});
});

function addTodo(text) {
	let $div = $("<div></div>")
		.addClass("todo")
		.text(text)
		.on("click", function () {
			if (confirm("Do you want to remove this TO DO?")) {
				$(this).remove();
				saveTodos();
			}
		});

	$("#ft_list").prepend($div);
}

function saveTodos() {
	let todos = [];

	$(".todo").each(function () {
		todos.push($(this).text());
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
