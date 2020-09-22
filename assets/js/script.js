const container = document.querySelector(".container");
var inputValue = document.querySelector(".input");
const add = document.querySelector(".add");
if (null == window.localStorage.getItem("todos")) { var todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos)) }
var todosEX = window.localStorage.getItem("todos");
todos = JSON.parse(todosEX);
class item { constructor(e) { this.createItem(e) }
    createItem(e) { var t = document.createElement("div");
        t.classList.add("item"); var o = document.createElement("input");
        o.type = "text", o.disabled = !0, o.value = e, o.classList.add("item_input"); var d = document.createElement("button");
        d.classList.add("edit"), d.innerHTML = "EDIT", d.addEventListener("click", () => this.edit(o, e)); var i = document.createElement("button");
        i.classList.add("remove"), i.innerHTML = "REMOVE", i.addEventListener("click", () => this.remove(t, e)), container.appendChild(t), t.appendChild(o), t.appendChild(d), t.appendChild(i) }
    edit(e, t) { if (1 == e.disabled) e.disabled = !e.disabled;
        else { e.disabled = !e.disabled; let o = todos.indexOf(t);
            todos[o] = e.value, window.localStorage.setItem("todos", JSON.stringify(todos)) } }
    remove(e, t) { e.parentNode.removeChild(e); let o = todos.indexOf(t);
        todos.splice(o, 1), window.localStorage.setItem("todos", JSON.stringify(todos)) } }

function check() { "" != inputValue.value && (new item(inputValue.value), todos.push(inputValue.value), window.localStorage.setItem("todos", JSON.stringify(todos)), inputValue.value = "") }
add.addEventListener("click", check), window.addEventListener("keydown", e => { 13 == e.which && check() });
for (var v = 0; v < todos.length; v++) new item(todos[v]);
new item("sport");