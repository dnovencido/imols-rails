import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="construction-permit"
export default class extends Controller {
  static targets = ["particularsSection","removeParticulars", "formDetails", "formModification"]

  connect() {
  }

  addParticulars() {
    var counter = document.querySelectorAll('.particulars-item').length;
  
    var table = document.createElement("table");
    table.setAttribute("class", "particulars-item w-full text-sm text-left text-gray-500 dark:text-gray-400");
    var tbody = document.createElement("tbody");
    var tr = document.createElement("tr");
    tr.setAttribute("class", "bg-white border-b dark:bg-gray-900 dark:border-gray-700");
  
    var th_particulars = document.createElement("th");
    th_particulars.setAttribute("class", "px-6 py-4 font-medium bg-slate-300 text-gray-900 whitespace-nowrap dark:text-white");
    th_particulars.setAttribute("scope", "col");
    th_particulars.setAttribute("colspan", "3");

    var text_particulars = document.createTextNode("Paticulars of Station/Equipment/Antenna #" + ++counter);
    th_particulars.appendChild(text_particulars);
    tr.appendChild(th_particulars);

    var th_remove = document.createElement("th");
    th_remove.setAttribute("class", "text-right px-6 py-4 font-medium bg-slate-300 text-gray-900 whitespace-nowrap dark:text-white");
    th_remove.setAttribute("scope", "col");
    th_remove.setAttribute("colspan", "3");

    var btn_remove = document.createElement("a");
    btn_remove.setAttribute("class", "btn-remove font-medium text-red-600 dark:text-red-500 hover:underline");
    btn_remove.setAttribute("data-construction-permit-target", "removeParticulars");
    btn_remove.setAttribute("data-controller", "construction-permit");
    btn_remove.setAttribute("data-action", "construction-permit#removeParticulars");
    btn_remove.setAttribute("href", "#");
    
    var text_remove = document.createTextNode("Remove");
    btn_remove.appendChild(text_remove);

    th_remove.appendChild(btn_remove);

    tr.appendChild(th_remove);
  
    tbody.appendChild(tr);

    var tr = document.createElement("tr");
    tr.setAttribute("class", "bg-white border-b dark:bg-gray-900 dark:border-gray-700");
  
    var th_station = document.createElement("th");
    th_station.setAttribute("class", "px-6 py-4 font-medium bg-slate-200 text-gray-900 whitespace-nowrap dark:text-white");
    th_station.setAttribute("scope", "col");
    th_station.setAttribute("colspan", "6");

    var text_station = document.createTextNode("Station");
    th_station.appendChild(text_station);
    tr.appendChild(th_station);
    
    tbody.appendChild(tr);

    // Exact location
    var tr = document.createElement("tr");
    tr.setAttribute("class", "bg-white border-b dark:bg-gray-900 dark:border-gray-700");
    var th_exact_location = document.createElement("th");
    th_exact_location.setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_exact_location = document.createTextNode("Exact Location");
    th_exact_location.appendChild(text_exact_location);

    var td_location_input = document.createElement("td");  
    td_location_input.setAttribute("class", "px-6 py-4");
    var input_location = document.createElement("input");
    input_location.setAttribute("type", "text");
    input_location.setAttribute("id", "service_transaction_particulars_item_exact_location");
    input_location.setAttribute("placeholder", "Enter Exact Location");
    input_location.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_location.setAttribute("name", "service_transaction[particulars][][item][exact_location]");

    td_location_input.appendChild(input_location);

    tr.appendChild(th_exact_location);
    tr.appendChild(td_location_input);

    // Long
    var th_long = document.createElement("th");
    th_long.setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_long = document.createTextNode("Longitude");
    th_long.appendChild(text_long);

    var td_long_input = document.createElement("td");  
    td_long_input.setAttribute("class", "px-6 py-4");
    var input_long = document.createElement("input")
    input_long.setAttribute("type", "text")
    input_long.setAttribute("id", "service_transaction_particulars__item_long");
    input_long.setAttribute("placeholder", "Enter Longitude");
    input_long.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_long.setAttribute("name", "service_transaction[particulars][][item][long]");
    td_long_input.appendChild(input_long);
    
    tr.appendChild(th_long);
    tr.appendChild(td_long_input);

    //Lat
    var th_lat = document.createElement("th");
    th_lat.setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_lat = document.createTextNode("Latitude");
    th_lat.appendChild(text_lat);

    var td_lat_input = document.createElement("td");  
    td_lat_input.setAttribute("class", "px-6 py-4");
    var input_lat = document.createElement("input")
    input_lat.setAttribute("type", "text")
    input_lat.setAttribute("id", "service_transaction_particulars__item_lat");
    input_lat.setAttribute("placeholder", "Enter Latitude");
    input_lat.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_lat.setAttribute("name", "service_transaction[particulars][][item][lat]");
    td_lat_input.appendChild(input_lat);
    
    tr.appendChild(th_lat);
    tr.appendChild(td_lat_input);

    tbody.appendChild(tr);

    //New table row
    var tr = document.createElement("tr");
    tr.setAttribute("class", "bg-white border-b dark:bg-gray-900 dark:border-gray-700");

    //Points Comm/Service/Area
    var th_points_comm_service_area = document.createElement("th");
    th_points_comm_service_area.setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_points_comm_service_area  = document.createTextNode("Points of Comm/Service/Area");
    th_points_comm_service_area.appendChild(text_points_comm_service_area);

    var td_points_comm_service_area_input = document.createElement("td");  
    td_points_comm_service_area_input.setAttribute("class", "px-6 py-4");
    td_points_comm_service_area_input.setAttribute("colspan", "3");
    var input_points_comm_service_area = document.createElement("input")
    input_points_comm_service_area.setAttribute("type", "text")
    input_points_comm_service_area.setAttribute("id", "service_transaction_particulars__item_points_comm_service_area");
    input_points_comm_service_area.setAttribute("placeholder", "Enter Points of Comm/Service Area");
    input_points_comm_service_area.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_points_comm_service_area.setAttribute("name", "service_transaction[particulars][][item][points_comm_service_area]");
    td_points_comm_service_area_input.appendChild(input_points_comm_service_area);

    tr.appendChild(th_points_comm_service_area);
    tr.appendChild(td_points_comm_service_area_input);

    //Assigned Frequency
    var th_assigned_frequency = document.createElement("th");
    th_assigned_frequency .setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_assigned_frequency = document.createTextNode("Assigned Frequency");
    th_assigned_frequency .appendChild(text_assigned_frequency);

    var td_assigned_frequency_input = document.createElement("td");  
    td_assigned_frequency_input .setAttribute("class", "px-6 py-4");
    var input_assigned_frequency = document.createElement("input")
    input_assigned_frequency.setAttribute("type", "text")
    input_assigned_frequency.setAttribute("id", "service_transaction_particulars__item_assigned_frequency");
    input_assigned_frequency.setAttribute("placeholder", "Enter Assigned Frequency");
    input_assigned_frequency.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_assigned_frequency.setAttribute("name", "service_transaction[particulars][][item][assigned_frequency]");
    td_assigned_frequency_input.appendChild(input_assigned_frequency);

    tr.appendChild(th_assigned_frequency);
    tr.appendChild(td_assigned_frequency_input);

    tbody.appendChild(tr);

    //New table row
    var tr = document.createElement("tr");
    tr.setAttribute("class", "bg-white border-b dark:bg-gray-900 dark:border-gray-700");

   //BW & Emission
    var th_bw_emission = document.createElement("th");
    th_bw_emission.setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_bw_emission = document.createTextNode("BW & Emission");
    th_bw_emission.appendChild(text_bw_emission);

    var td_bw_emission_input = document.createElement("td");  
    td_bw_emission_input.setAttribute("class", "px-6 py-4");
    var input_bw_emission = document.createElement("input")
    input_bw_emission.setAttribute("type", "text")
    input_bw_emission.setAttribute("id", "service_transaction_particulars__item_bw_emission");
    input_bw_emission.setAttribute("placeholder", "Enter BW & Emission");
    input_bw_emission.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_bw_emission.setAttribute("name", "service_transaction[particulars][][item][bw_emission]");
    td_bw_emission_input.appendChild(input_bw_emission);

    tr.appendChild(th_bw_emission);
    tr.appendChild(td_bw_emission_input);

    //Configuration
    var th_configuration = document.createElement("th");
    th_configuration.setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_configuration = document.createTextNode("Configuration");
    th_configuration.appendChild(text_configuration);

    var td_configuration_input = document.createElement("td");  
    td_configuration_input.setAttribute("class", "px-6 py-4");
    var input_configuration = document.createElement("input")
    input_configuration.setAttribute("type", "text")
    input_configuration.setAttribute("id", "service_transaction_particulars__item_configuration");
    input_configuration.setAttribute("placeholder", "Enter Configuration");
    input_configuration.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_configuration.setAttribute("name", "service_transaction[particulars][][item][configuration]");
    td_configuration_input.appendChild(input_configuration);

    tr.appendChild(th_configuration);
    tr.appendChild(td_configuration_input);

    //Data Rate
    var th_data_rate = document.createElement("th");
    th_data_rate.setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_data_rate = document.createTextNode("Data Rate");
    th_data_rate.appendChild(text_data_rate);

    var td_data_rate_input = document.createElement("td");  
    td_data_rate_input.setAttribute("class", "px-6 py-4");
    var input_data_rate = document.createElement("input")
    input_data_rate.setAttribute("type", "text")
    input_data_rate.setAttribute("id", "service_transaction_particulars__item_data_rate");
    input_data_rate.setAttribute("placeholder", "Enter Data Rate");
    input_data_rate.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_data_rate.setAttribute("name", "service_transaction[particulars][][item][data_rate]");
    td_data_rate_input.appendChild(input_data_rate);

    tr.appendChild(th_data_rate);
    tr.appendChild(td_data_rate_input);    

    tbody.appendChild(tr);

    //New table row
    var tr = document.createElement("tr");
    tr.setAttribute("class", "bg-white border-b dark:bg-gray-900 dark:border-gray-700");

    //Call Sign
    var th_call_sign = document.createElement("th");
    th_call_sign.setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_call_sign = document.createTextNode("Call Sign");
    th_call_sign.appendChild(text_call_sign);

    var td_call_sign_input = document.createElement("td");  
    td_call_sign_input.setAttribute("class", "px-6 py-4");
    var input_call_sign = document.createElement("input")
    input_call_sign.setAttribute("type", "text")
    input_call_sign.setAttribute("id", "service_transaction_particulars__item_call_sign");
    input_call_sign.setAttribute("placeholder", "Enter Call Sign");
    input_call_sign.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_call_sign.setAttribute("name", "service_transaction[particulars][][item][call_sign]");
    td_call_sign_input.appendChild(input_call_sign);

    tr.appendChild(th_call_sign);
    tr.appendChild(td_call_sign_input); 

    //Validity
    var th_validity = document.createElement("th");
    th_validity.setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_validity = document.createTextNode("Validity");
    th_validity.appendChild(text_validity);

    var td_validity_input = document.createElement("td");  
    td_validity_input.setAttribute("class", "px-6 py-4");
    var input_validity = document.createElement("input")
    input_validity.setAttribute("type", "text")
    input_validity.setAttribute("id", "service_transaction_particulars__item_validity");
    input_validity.setAttribute("placeholder", "Enter Validity");
    input_validity.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_validity.setAttribute("name", "service_transaction[particulars][][item][validity]");
    td_validity_input.appendChild(input_validity);

    tr.appendChild(th_validity);
    tr.appendChild(td_validity_input); 

    //Others
    var th_others = document.createElement("th");
    th_others.setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_others = document.createTextNode("Others");
    th_others.appendChild(text_others);

    var td_others_input = document.createElement("td");  
    td_others_input.setAttribute("class", "px-6 py-4");
    var input_others = document.createElement("input")
    input_others.setAttribute("type", "text")
    input_others.setAttribute("id", "service_transaction_particulars__item_others");
    input_others.setAttribute("placeholder", "Enter Others");
    input_others.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_others.setAttribute("name", "service_transaction[particulars][][item][others]");
    td_others_input.appendChild(input_others);

    tr.appendChild(th_others);
    tr.appendChild(td_others_input); 

    tbody.appendChild(tr);

    //Equipment
    var tr = document.createElement("tr");
    tr.setAttribute("class", "bg-white border-b dark:bg-gray-900 dark:border-gray-700");
  
    var th_equipment = document.createElement("th");
    th_equipment.setAttribute("class", "px-6 py-4 font-medium bg-slate-200 text-gray-900 whitespace-nowrap dark:text-white");
    th_equipment.setAttribute("scope", "col");
    th_equipment.setAttribute("colspan", "6");

    var text_equipment = document.createTextNode("Equipment");
    th_equipment.appendChild(text_equipment);
    tr.appendChild(th_equipment);
    
    tbody.appendChild(tr);

    //New table row
    var tr = document.createElement("tr");
    tr.setAttribute("class", "bg-white border-b dark:bg-gray-900 dark:border-gray-700");

    //Make/Type/Model
    var th_make_type_model = document.createElement("th");
    th_make_type_model.setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_make_type_model = document.createTextNode("Make/Type/Model");
    th_make_type_model.appendChild(text_make_type_model);

    var td_make_type_model_input = document.createElement("td");  
    td_make_type_model_input.setAttribute("class", "px-6 py-4");
    td_make_type_model_input.setAttribute("colspan", "2");
    var input_make_type_model = document.createElement("input");
    input_make_type_model.setAttribute("type", "text");
    input_make_type_model.setAttribute("id", "service_transaction_particulars__item_make_type_model");
    input_make_type_model.setAttribute("placeholder", "Enter Make/Type/Model");
    input_make_type_model.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_make_type_model.setAttribute("name", "service_transaction[particulars][][item][make_type_model]");
    td_make_type_model_input.appendChild(input_make_type_model);

    tr.appendChild(th_make_type_model);
    tr.appendChild(td_make_type_model_input); 

    //Serial No.
    var th_serial_no = document.createElement("th");
    th_serial_no.setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_serial_no = document.createTextNode("Serial No.");
    th_serial_no.appendChild(text_serial_no);

    var td_serial_no_input = document.createElement("td");  
    td_serial_no_input.setAttribute("class", "px-6 py-4");
    td_serial_no_input.setAttribute("colspan", "2");
    var input_serial_no = document.createElement("input");
    input_serial_no.setAttribute("type", "text");
    input_serial_no.setAttribute("id", "service_transaction_particulars__item_make_serial_no");
    input_serial_no.setAttribute("placeholder", "Enter Serial No.");
    input_serial_no.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_serial_no.setAttribute("name", "service_transaction[particulars][][item][serial_no]");
    td_serial_no_input.appendChild(input_serial_no);

    tr.appendChild(th_serial_no);
    tr.appendChild(td_serial_no_input); 

    tbody.appendChild(tr);

    //New table row
    var tr = document.createElement("tr");
    tr.setAttribute("class", "bg-white border-b dark:bg-gray-900 dark:border-gray-700");

    //Power Output
    var th_power_output = document.createElement("th");
    th_power_output.setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_power_output = document.createTextNode("Power Output");
    th_power_output.appendChild(text_power_output);

    var td_power_output_input = document.createElement("td");  
    td_power_output_input.setAttribute("class", "px-6 py-4");
    td_power_output_input.setAttribute("colspan", "2");
    var input_power_output = document.createElement("input");
    input_power_output.setAttribute("type", "text");
    input_power_output.setAttribute("id", "service_transaction_particulars__item_make_power_output");
    input_power_output.setAttribute("placeholder", "Enter Power Output");
    input_power_output.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_power_output.setAttribute("name", "service_transaction[particulars][][item][power_output]");
    td_power_output_input.appendChild(input_power_output);

    tr.appendChild(th_power_output);
    tr.appendChild(td_power_output_input); 

    //Frequency Range
    var th_frequency_range = document.createElement("th");
    th_frequency_range.setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_frequency_range = document.createTextNode("Frequency Range");
    th_frequency_range.appendChild(text_frequency_range );

    var td_frequency_range_input = document.createElement("td");  
    td_frequency_range_input.setAttribute("class", "px-6 py-4");
    td_frequency_range_input.setAttribute("colspan", "2");
    var input_frequency_range = document.createElement("input");
    input_frequency_range.setAttribute("type", "text");
    input_frequency_range.setAttribute("id", "service_transaction_particulars__item_make_frequency_range");
    input_frequency_range.setAttribute("placeholder", "Enter Frequency Range");
    input_frequency_range.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_frequency_range.setAttribute("name", "service_transaction[particulars][][item][frequency_range]");
    td_frequency_range_input.appendChild(input_frequency_range);

    tr.appendChild(th_frequency_range);
    tr.appendChild(td_frequency_range_input); 

    tbody.appendChild(tr);

    // New table row
    var tr = document.createElement("tr");
    tr.setAttribute("class", "bg-white border-b dark:bg-gray-900 dark:border-gray-700");

    //Antenna
    var th_station = document.createElement("th");
    th_station.setAttribute("class", "px-6 py-4 font-medium bg-slate-200 text-gray-900 whitespace-nowrap dark:text-white");
    th_station.setAttribute("scope", "col");
    th_station.setAttribute("colspan", "6");

    var text_station = document.createTextNode("Antenna");
    th_station.appendChild(text_station);
    tr.appendChild(th_station);

    tbody.appendChild(tr);
    
    //New table row
    var tr = document.createElement("tr");
    tr.setAttribute("class", "bg-white border-b dark:bg-gray-900 dark:border-gray-700");

    //Type
    var th_type = document.createElement("th");
    th_type.setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_type= document.createTextNode("Type");
    th_type.appendChild(text_type);

    var td_type_input = document.createElement("td");  
    td_type_input.setAttribute("class", "px-6 py-4");
    var input_type = document.createElement("input");
    input_type.setAttribute("type", "text");
    input_type.setAttribute("id", "service_transaction_particulars__item_type");
    input_type.setAttribute("placeholder", "Enter Type");
    input_type.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_type.setAttribute("name", "service_transaction[particulars][][item][type]");
    td_type_input.appendChild(input_type);

    tr.appendChild(th_type);
    tr.appendChild(td_type_input); 

    //Height
    var th_height = document.createElement("th");
    th_height.setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_height= document.createTextNode("Height (m)");
    th_height.appendChild(text_height);

    var td_height_input = document.createElement("td");  
    td_height_input.setAttribute("class", "px-6 py-4");
    var input_height = document.createElement("input");
    input_height.setAttribute("type", "text");
    input_height.setAttribute("id", "service_transaction_particulars__item_height");
    input_height.setAttribute("placeholder", "Enter Height");
    input_height.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_height.setAttribute("name", "service_transaction[particulars][][item][height]");
    td_height_input.appendChild(input_height);

    tr.appendChild(th_height);
    tr.appendChild(td_height_input); 

    //Gain
    var th_gain = document.createElement("th");
    th_gain.setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_gain= document.createTextNode("Gain (db)");
    th_gain.appendChild(text_gain);

    var td_gain_input = document.createElement("td");  
    td_gain_input.setAttribute("class", "px-6 py-4");
    var input_gain = document.createElement("input");
    input_gain.setAttribute("type", "text");
    input_gain.setAttribute("id", "service_transaction_particulars__item_height");
    input_gain.setAttribute("placeholder", "Enter Gain");
    input_gain.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_gain.setAttribute("name", "service_transaction[particulars][][item][gain]");
    td_gain_input.appendChild(input_gain);

    tr.appendChild(th_gain);
    tr.appendChild(td_gain_input); 

    tbody.appendChild(tr);
    
    //New table row
    var tr = document.createElement("tr");
    tr.setAttribute("class", "bg-white border-b dark:bg-gray-900 dark:border-gray-700");

    //Type
    var th_type = document.createElement("th");
    th_type.setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_type= document.createTextNode("Type");
    th_type.appendChild(text_type);

    var td_type_input = document.createElement("td");  
    td_type_input.setAttribute("class", "px-6 py-4");
    var input_type = document.createElement("input");
    input_type.setAttribute("type", "text");
    input_type.setAttribute("id", "service_transaction_particulars__item_type");
    input_type.setAttribute("placeholder", "Enter Type");
    input_type.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_type.setAttribute("name", "service_transaction[particulars][][item][type]");
    td_type_input.appendChild(input_type);

    tr.appendChild(th_type);
    tr.appendChild(td_type_input);
    
    //New table row
    var tr = document.createElement("tr");
    tr.setAttribute("class", "bg-white border-b dark:bg-gray-900 dark:border-gray-700");

    //Directivity
    var th_directivity = document.createElement("th");
    th_directivity.setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_directivity = document.createTextNode("Directivity (degrees)");
    th_directivity.appendChild(text_directivity);

    var td_directivity_input = document.createElement("td");  
    td_directivity_input.setAttribute("class", "px-6 py-4");
    var input_directivity = document.createElement("input");
    input_directivity.setAttribute("type", "text");
    input_directivity.setAttribute("id", "service_transaction_particulars__item_directivity");
    input_directivity.setAttribute("placeholder", "Enter Directivity");
    input_directivity.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_directivity.setAttribute("name", "service_transaction[particulars][][item][directivity]");
    td_directivity_input.appendChild(input_directivity);

    tr.appendChild(th_directivity);
    tr.appendChild(td_directivity_input); 

    //Diameter
    var th_diameter = document.createElement("th");
    th_diameter.setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_diameter = document.createTextNode("Diameter");
    th_diameter.appendChild(text_diameter);

    var td_diameter_input = document.createElement("td");  
    td_diameter_input.setAttribute("class", "px-6 py-4");
    var input_diameter = document.createElement("input");
    input_diameter.setAttribute("type", "text");
    input_diameter.setAttribute("id", "service_transaction_particulars__item_diameter");
    input_diameter.setAttribute("placeholder", "Enter Diameter");
    input_diameter.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_diameter.setAttribute("name", "service_transaction[particulars][][item][diameter]");
    td_diameter_input.appendChild(input_diameter);
        
    tr.appendChild(th_diameter);
    tr.appendChild(td_diameter_input); 

    //Polarization
    var th_polarization = document.createElement("th");
    th_polarization.setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_polarization = document.createTextNode("Polarization");
    th_polarization.appendChild(text_polarization);
    
    var td_polarization_input = document.createElement("td");  
    td_polarization_input.setAttribute("class", "px-6 py-4");
    var input_polarization = document.createElement("input");
    input_polarization.setAttribute("type", "text");
    input_polarization.setAttribute("id", "service_transaction_particulars__item_polarization");
    input_polarization.setAttribute("placeholder", "Enter Polarization");
    input_polarization.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_polarization.setAttribute("name", "service_transaction[particulars][][item][polarization]");
    td_polarization_input.appendChild(input_polarization);

    tr.appendChild(th_polarization);
    tr.appendChild(td_polarization_input); 

    tbody.appendChild(tr);
    
    //New table row
    var tr = document.createElement("tr");
    tr.setAttribute("class", "bg-white border-b dark:bg-gray-900 dark:border-gray-700");

    //Beamwidth
    var th_beamwidth = document.createElement("th");
    th_beamwidth.setAttribute("class", "px-6 py-4 font-medium bg-gray-100 text-gray-900 whitespace-nowrap dark:text-white");
    var text_beamwidth = document.createTextNode("Beamwidth");
    th_beamwidth.appendChild(text_beamwidth);

    var td_beamwidth_input = document.createElement("td");  
    td_beamwidth_input.setAttribute("class", "px-6 py-4");
    td_beamwidth_input.setAttribute("colspan", "2");
    var input_beamwidth = document.createElement("input");
    input_beamwidth.setAttribute("type", "text");
    input_beamwidth.setAttribute("id", "service_transaction_particulars__item_beamwidth");
    input_beamwidth.setAttribute("placeholder", "Enter Beamwidth");
    input_beamwidth.setAttribute("class", "w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500");
    input_beamwidth.setAttribute("name", "service_transaction[particulars][][item][beamwidth]");
    td_beamwidth_input.appendChild(input_beamwidth);

    tr.appendChild(th_beamwidth);
    tr.appendChild(td_beamwidth_input); 

    tbody.appendChild(tr);

    table.appendChild(tbody);

    this.particularsSectionTarget.appendChild(table);
  }

  removeParticulars(e) {
    e.preventDefault();
    if (confirm("Are you sure you want to remove this particulars") == true) {
      this.element.closest("table.particulars-item").remove();
    }
  }

  modification(event) {
    var selectedItem = event.target.selectedOptions[0].value

    if(selectedItem == 3) {
      var div = document.createElement("div");
      div.setAttribute("id", "form-modification");
      div.setAttribute("class", "mt-3");

      var table = document.createElement("table");
      table.setAttribute("class", "w-full text-sm text-left text-gray-500 dark:text-gray-400");
      var tbody = document.createElement("tbody");
      
      //New table row
      var tr = document.createElement("tr");
      tr.setAttribute("class", "bg-white border-b dark:bg-gray-900 dark:border-gray-700");
      var th_modification = document.createElement("th");
      th_modification.setAttribute("class", "px-6 py-4 font-medium uppercase bg-slate-400 text-gray-900 whitespace-nowrap dark:text-white");
      th_modification.setAttribute("colspan", "3");
      var text_modification  = document.createTextNode("For Modification");
      th_modification .appendChild(text_modification);
  
      tr.appendChild(th_modification);
  
      tbody.appendChild(tr);
      
      //New table row
      var tr = document.createElement("tr");
      tr.setAttribute("class", "bg-white border-b dark:bg-gray-900 dark:border-gray-700");
      var th_particulars = document.createElement("th");
      th_particulars.setAttribute("class", "px-6 py-4 font-medium bg-slate-300 text-gray-900 whitespace-nowrap dark:text-white");
      th_particulars.setAttribute("colspan", "3");
      var text_particulars = document.createTextNode("Particulars");
      th_particulars.appendChild(text_particulars);
  
      tr.appendChild(th_particulars);
  
      tbody.appendChild(tr);

      //New table row
      var tr = document.createElement("tr");
      tr.setAttribute("class", "bg-white border-b dark:bg-gray-900 dark:border-gray-700");
      
      var th_station = document.createElement("th");
      th_station.setAttribute("class", "px-6 py-4 font-medium bg-slate-200 text-gray-900 whitespace-nowrap dark:text-white");
      var text_station = document.createTextNode("Station");
      th_station.appendChild(text_station);
  
      tr.appendChild(th_station);

      var th_authorized = document.createElement("th");
      th_authorized.setAttribute("class", "px-6 py-4 font-medium bg-slate-200 text-gray-900 whitespace-nowrap dark:text-white");
      var text_authorized = document.createTextNode("Authorized");
      th_authorized.appendChild(text_authorized);
  
      tr.appendChild(th_authorized);

      var th_proposed = document.createElement("th");
      th_proposed.setAttribute("class", "px-6 py-4 font-medium bg-slate-200 text-gray-900 whitespace-nowrap dark:text-white");
      var text_proposed = document.createTextNode("Proposed");
      th_proposed.appendChild(text_proposed);
  
      tr.appendChild(th_proposed);

      tbody.appendChild(tr);

      table.appendChild(tbody);

      div.appendChild(table);
  
      this.formDetailsTarget.appendChild(div);

    } else {
      var form = document.getElementById("form-modification");
      
      if(form) 
        form.remove()
    }

  }
}
