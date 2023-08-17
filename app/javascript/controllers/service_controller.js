import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="service"
export default class extends Controller {
  connect() {
  }

  addCategory() {
    var counter = document.querySelectorAll('.category-item').length;
    var categories = document.getElementById('categories');

    var category_item = document.createElement("div");
    category_item.setAttribute("id", "category-item-" + counter);
    category_item.classList = "row flex gap-10 justify-items-center items-center category-item";

    var column_name = document.createElement("div");
    column_name.classList = "flex-auto mt-5";

    var input_id = document.createElement("input");
    input_id.setAttribute("name", `service[categories_attributes][${counter}][id]`);
    input_id.setAttribute("type", "hidden");
    input_id.setAttribute("id", `service_categories_attributes_${counter}_id`);
    
    var label_name = document.createElement("label");
    label_name.classList = "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
    label_name.setAttribute("for", `service_categories_attributes_${counter}_name`);

    var label_text_name = document.createTextNode("Name");
    label_name.appendChild(label_text_name);

    var input_name = document.createElement("input");
    input_name.classList = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
    input_name.setAttribute("placeholder", "Enter Name");
    input_name.setAttribute("type", "text");
    input_name.setAttribute("name", `service[categories_attributes][${counter}][name]`);
    input_name.setAttribute("id", `service_categories_attributes_${counter}_name`);

    column_name.appendChild(label_name);
    column_name.appendChild(input_name);

    var column_code = document.createElement("div");
    column_code.classList = "flex-auto mt-5";

    var label_code = document.createElement("label");
    label_code.classList = "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
    label_code.setAttribute("for", `service_categories_attributes_${counter}_category_code`);

    var label_text_code = document.createTextNode("Code");
    label_code.appendChild(label_text_code);
    
    var input_code = document.createElement("input");
    input_code.classList = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
    input_code.setAttribute("placeholder", "Enter Code");
    input_code.setAttribute("type", "text");
    input_code.setAttribute("name", `service[categories_attributes][${counter}][category_code]`);
    input_code.setAttribute("id", `service_categories_attributes_${counter}_category_code`);

    column_code.appendChild(label_code);
    column_code.appendChild(input_code);

    var column_description = document.createElement("div");
    column_description.classList = "flex-auto mt-5";

    var label_description = document.createElement("label");
    label_description.classList = "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
    label_name.setAttribute("for", `service_categories_attributes_${counter}_category_description`);

    var label_text_description = document.createTextNode("Name");
    label_description.appendChild(label_text_description);

    var input_description = document.createElement("input");
    input_description.classList = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
    input_description.setAttribute("placeholder", "Enter Description");
    input_description.setAttribute("type", "text");
    input_description.setAttribute("name", `service[categories_attributes][${counter}][category_description]`);
    input_description.setAttribute("id", `service_categories_attributes_${counter}_category_description`);

    column_description.appendChild(label_description);
    column_description.appendChild(input_description);

    var column_action = document.createElement("div");
    column_action.classList = "flex-auto mt-5";
    column_action.setAttribute("data-controller", "service");
    column_action.setAttribute("data-id", counter);
    
    var btn_remove = document.createElement("button");
    btn_remove.type = "button";
    btn_remove.classList = "mt-9 px-3 py-2 text-xs text-red-700 font-medium hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900";
    btn_remove.setAttribute("data-action", "service#removeCategory");

    var remove_text = document.createTextNode("Remove");
    btn_remove.appendChild(remove_text);

    column_action.appendChild(btn_remove);

    category_item.appendChild(input_id);
    category_item.appendChild(column_name);
    category_item.appendChild(column_code);
    category_item.appendChild(column_description);
    category_item.appendChild(column_action);
    categories.appendChild(category_item);
    
    counter++;

  }

  removeCategory() {
    var id = this.element.getAttribute("data-id");

    var input_name = document.getElementById(`service_categories_attributes_${id}_name`);
    var child = this.element
    var removeItem = child.closest('div.category-item');
    if(input_name.value != "") {
      if (confirm("Are you sure you want to delete this category?") == true) {
        removeItem.remove();
      }
    } else {
      removeItem.remove();
    }
  }
}
