"use strict";

const button = document.querySelector("#submitButton");
const input = document.querySelector("#inputValue");
const list = document.querySelector("ul");
let li;

function inputLength() {
  return input.value.length;
}

function clearInput() {
  input.value = "";
}

function createElementLi() {
  li = document.createElement("li");
}

function addInputValueInLi() {
  li.append(document.createTextNode(firstLetterCapitalized()));
}

function addLiInUl() {
  ul.insertAdjacentElement("beforeend", li);
}

function createNewTaskInTodo() {
  createElementLi();
  addInputValueInLi();
  addLiInUl();
}

function createListElement() {
  createNewTaskInTodo();
  clearInput();
}
