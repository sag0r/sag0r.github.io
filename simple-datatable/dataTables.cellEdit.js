/*! CellEdit 1.0.19
 * ©2016 Elliott Beaty - datatables.net/license
 */

/**
 * @summary     CellEdit
 * @description Make a cell editable when clicked upon
 * @version     1.0.19
 * @file        dataTables.editCell.js
 * @author      Elliott Beaty
 * @contact     elliott@elliottbeaty.com
 * @copyright   Copyright 2016 Elliott Beaty
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license/mit
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */

jQuery.fn.dataTable.Api.register('MakeCellsEditable()', function (settings) {
    var table = this.table();

    jQuery.fn.extend({
        // UPDATE
        updateEditableCell: function (callingElement) {
            // Need to redeclare table here for situations where we have more than one datatable on the page. See issue6 on github

            $(callingElement).closest('td').removeClass('editing');
            var table = $(callingElement).closest("table").DataTable().table();
            var row = table.row($(callingElement).parents('tr'));
            var cell = table.cell($(callingElement).parents('td, th'));
            var columnIndex = cell.index().column;
            var inputField = getInputField(callingElement);

            // Update
            var newValue = inputField.val();
            console.log('new value inside update method', newValue);
            if (!newValue && ((settings.allowNulls) && settings.allowNulls != true)) {
                // If columns specified
                if (settings.allowNulls.columns) {
                    // If current column allows nulls
                    if (settings.allowNulls.columns.indexOf(columnIndex) > -1) {
                        _update(newValue);
                    } else {
                        _addValidationCss();
                    }
                    // No columns allow null
                } else if (!newValue) {
                    _addValidationCss();
                }
                //All columns allow null
            } else if (newValue && settings.onValidate) {
                if (settings.onValidate(cell, row, newValue)) {
                    _update(newValue);
                } else {
                    _addValidationCss();
                }
            }
            else {
                _update(newValue);
            }
            function _addValidationCss() {
                // Show validation error
                if (settings.allowNulls.errorClass) {
                    $(inputField).addClass(settings.allowNulls.errorClass);
                } else {
                    $(inputField).css({ "border": "red solid 1px" });
                }
            }
            function _update(newValue) {
                var oldValue = cell.data();
                cell.data(newValue);
                //Return cell & row.
                settings.onUpdate(cell, row, oldValue);
            }
            // Get current page
            var currentPageIndex = table.page.info().page;
            //Redraw table
            table.page(currentPageIndex).draw(false);
        },
        // CANCEL
        cancelEditableCell: function (callingElement) {
            $(callingElement).closest('td').removeClass('editing');
            var table = $(callingElement.closest("table")).DataTable().table();
            var cell = table.cell($(callingElement).parents('td, th'));
            // Set cell to it's original value
            cell.data(cell.data());

            // Redraw table
            table.draw();
        }
    });

    // Destroy
    if (settings === "destroy") {
        $(table.body()).off("click", "td");
        table = null;
    }

    if (table != null) {
        // On cell click
        $(table.body()).on('click', 'td', function () {

            // Exit edit mode for all cells that are in edit mode, 
            // --- except for elements inside the current cell
            $('.editing .form-control, .editing .form-select')
                .not($(this).find('.form-control, .form-select'))
                .trigger('change');

            // Exit edit mode for all cells on 'Esc' key press
            // note: 'off()' used to remove previous listener (if any) to avoid multiple listeners
            $(document).off().on('keydown', function (e) {
                if (e.key === 'Escape') {
                    $('.editing .form-control, .editing .form-select, .editing .form-check-input').trigger('change');
                    $('.input-group-text').trigger('click');
                }
            });

            var currentColumnIndex = table.cell(this).index().column;
            var currentRowIndex = table.cell(this).index().row;

            // DETERMINE WHAT COLUMNS CAN BE EDITED
            if ((settings.columns && settings.columns.indexOf(currentColumnIndex) > -1) || (!settings.columns)) {
                $(this).addClass('editing');
                var row = table.row($(this).parents('tr'));
                editableCellsRow = row;

                var cell = table.cell(this).node();
                var oldValue = table.cell(this).data();
                // Sanitize value
                oldValue = sanitizeCellValue(oldValue);

                // Show input
                if (!$(cell).find('input').length && !$(cell).find('select').length && !$(cell).find('textarea').length) {
                    // Input CSS
                    var input = getInputHtml(currentColumnIndex, settings, oldValue, currentRowIndex);
                    $(cell).html(input.html);
                    if (input.focus) {
                        $('#ejbeatycelledit').focus();
                    }
                }
            }
        });
    }

});

function getInputHtml(currentColumnIndex, settings, oldValue, currentRowIndex) {
    var inputSetting, inputType, input, inputCss, confirmCss, cancelCss, startWrapperHtml = '', endWrapperHtml = '', listenToKeys = false;

    input = { "focus": true, "html": null };

    if (settings.inputTypes) {
        $.each(settings.inputTypes, function (index, setting) {
            if (setting.column == currentColumnIndex) {
                inputSetting = setting;
                inputType = inputSetting.type.toLowerCase();
            }
        });
    }

    if (settings.inputCss) { inputCss = settings.inputCss; }
    if (settings.wrapperHtml) {
        var elements = settings.wrapperHtml.split('{content}');
        if (elements.length === 2) {
            startWrapperHtml = elements[0];
            endWrapperHtml = elements[1];
        }
    }

    if (settings.confirmationButton) {
        if (settings.confirmationButton.listenToKeys) { listenToKeys = settings.confirmationButton.listenToKeys; }
        confirmCss = settings.confirmationButton.confirmCss;
        cancelCss = settings.confirmationButton.cancelCss;
        inputType = inputType + "-confirm";
    }

    switch (inputType) {
        case "list":
            input.html = startWrapperHtml + "<select class='form-select' onchange='$(this).updateEditableCell(this);'>";
            $.each(inputSetting.options, function (index, option) {
                if (oldValue == option.value) {
                    input.html = input.html + "<option value='" + option.value + "' selected>" + option.display + "</option>"
                } else {
                    input.html = input.html + "<option value='" + option.value + "' >" + option.display + "</option>"
                }
            });
            input.html = input.html + "</select>" + endWrapperHtml;
            input.focus = false;
            break;
        case "searchable-list":
            let { columnToMatchValue, options, mappings } = inputSetting;

            // get datatable reference
            const table = $('table').DataTable().table();

            // find the cell to validate options with
            const cell = table.cell(currentRowIndex, columnToMatchValue);

            // Get the text content of the cell
            const cellText = $(cell.node()).text(); // [e.g: New York]

            // Find the mapping by the text value
            const mapping = mappings?.find(x => x.location == cellText);

            if (!!mapping) {
                options = options.filter((option, index, self) =>
                    mapping.positions.includes(option.value) &&
                    index === self.findIndex(o => o.value === option.value) // Remove duplicates
                );
            }

            const uniqueId = "searchable-dropdown-" + Date.now();
            const selectedItem = options.find(o => o.value == oldValue);
            const selectedItemHtml = selectedItem
                ? `<div class="selected-item">
                        <span>${selectedItem.display}</span>
                        <hr class="mt-1 mb-2" />
                    </div>`
                : '';

            input.html = `
                    <div class="search-dropdown-wrapper" style="position: relative;">
                        <input type="text" id="${uniqueId}" class="form-control form-control-sm search-input"
                               placeholder="Type to search..." autocomplete="off" onchange="$(this).updateEditableCell(this);" />
                    </div>
                `;

            input.focus = false;

            setTimeout(() => {
                const inputField = $(`#${uniqueId}`);

                // Create dropdown list dynamically & append to body
                let dropdownList = $(`<ul class="search-dropdown bg-white p-2 rounded border-0 shadow"
                        style="display: none; position: absolute; background: white; border: 1px solid #ccc;
                        max-height: 200px; overflow-y: auto; list-style: none; padding: 0; margin: 0; width: 100%;">
                        ${selectedItemHtml}
                        ${options.map(option => `<li data-value="${option.value}" class="search-item ${oldValue == option.value ? 'is-selected' : ''}">${option.display}</li>`).join('')}
                    </ul>`).appendTo("body");

                // Function to position dropdown (supports drop-up)
                function positionDropdown() {
                    let offset = inputField.offset();
                    let inputHeight = inputField.outerHeight();
                    let dropdownHeight = dropdownList.outerHeight();
                    let windowHeight = $(window).height();
                    let spaceBelow = windowHeight - (offset.top + inputHeight);
                    let spaceAbove = offset.top;

                    let dropUp = spaceBelow < dropdownHeight && spaceAbove > dropdownHeight;

                    dropdownList.css({
                        left: offset.left,
                        width: inputField.outerWidth(),
                        top: dropUp ? offset.top - dropdownHeight : offset.top + inputHeight
                    });
                }

                // Show dropdown on focus
                inputField.on("focus", function () {
                    positionDropdown();
                    dropdownList.show();
                });

                // Hide dropdown on change
                inputField.on("change", function () {
                    dropdownList.hide();
                });

                // Filter options on input
                inputField.on("input", function () {
                    let searchText = $(this).val().toLowerCase();
                    dropdownList.children("li").each(function () {
                        let text = $(this).text().toLowerCase();
                        $(this).toggle(text.includes(searchText));
                    });
                });

                // Handle selection
                dropdownList.on("click", ".search-item", function () {
                    let selectedValue = $(this).data("value");
                    let selectedText = $(this).text();

                    // Update input value
                    inputField.val(selectedText);

                    // Manually trigger update
                    setTimeout(() => {
                        $(inputField).updateEditableCell(inputField);
                    }, 50);

                    dropdownList.hide();
                });

                // Hide dropdown when clicking outside
                $(document).on("click", function (e) {
                    if (!$(e.target).closest(".search-dropdown-wrapper, .search-dropdown").length) {
                        dropdownList.hide();
                    }
                });

                inputField.focus();
                positionDropdown();
                dropdownList.show();
            }, 10);

            break;
        case "list-confirm": // List w/ confirm
            input.html = startWrapperHtml + "<select class='" + inputCss + "'>";
            $.each(inputSetting.options, function (index, option) {
                if (oldValue == option.value) {
                    input.html = input.html + "<option value='" + option.value + "' selected>" + option.display + "</option>"
                } else {
                    input.html = input.html + "<option value='" + option.value + "' >" + option.display + "</option>"
                }
            });
            input.html = input.html + "</select>&nbsp;<a href='javascript:void(0);' class='" + confirmCss + "' onclick='$(this).updateEditableCell(this);'>Confirm</a> <a href='javascript:void(0);' class='" + cancelCss + "' onclick='$(this).cancelEditableCell(this)'>Cancel</a>" + endWrapperHtml;
            input.focus = false;
            break;
        case "datepicker":
            // Makesure jQuery UI is loaded on the page
            if (typeof jQuery.ui == 'undefined') {
                alert("jQuery UI is required for the DatePicker control but it is not loaded on the page!");
                break;
            }
            jQuery(".datepick").datepicker("destroy");
            input.html = startWrapperHtml + "<input id='ejbeatycelledit' onchange='$(this).updateEditableCell(this);' type='text' name='date' class='datepick " + inputCss + "' value='" + oldValue + "'></input>" + endWrapperHtml;
            setTimeout(function () { //Set timeout to allow the script to write the input.html before triggering the datepicker
                var icon = "https://img.icons8.com/dotty/80/calendar.png";
                // Allow the user to provide icon
                if (typeof inputSetting.options !== 'undefined' && typeof inputSetting.options.icon !== 'undefined') {
                    icon = inputSetting.options.icon;
                }
                var self = jQuery('.datepick').datepicker(
                    {
                        buttonText: "Select date"
                    }).focus();
            }, 100);
            break;
        case "datepicker-confirm":
            // Makesure jQuery UI is loaded on the page
            if (typeof jQuery.ui == 'undefined') {
                alert("jQuery UI is required for the DatePicker control but it is not loaded on the page!");
                break;
            }
            jQuery(".datepick").datepicker("destroy");
            input.html = startWrapperHtml + "<input id='ejbeatycelledit' type='text' name='date' class='datepick " + inputCss + "'   value='" + oldValue + "'></input> &nbsp;<a href='javascript:void(0);' class='" + confirmCss + "' onclick='$(this).updateEditableCell(this)'>Confirm</a> <a href='javascript:void(0);' class='" + cancelCss + "' onclick='$(this).cancelEditableCell(this)'>Cancel</a>" + endWrapperHtml;
            setTimeout(function () { //Set timeout to allow the script to write the input.html before triggering the datepicker
                var icon = "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif";
                // Allow the user to provide icon
                if (typeof inputSetting.options !== 'undefined' && typeof inputSetting.options.icon !== 'undefined') {
                    icon = inputSetting.options.icon;
                }
                var self = jQuery('.datepick').datepicker(
                    {
                        showOn: "button",
                        buttonImage: icon,
                        buttonImageOnly: true,
                        buttonText: "Select date"
                    });
            }, 100);
            break;
        case "text-confirm": // text input w/ confirm
            input.html = startWrapperHtml + "<input id='ejbeatycelledit' class='" + inputCss + "' value='" + oldValue + "'" + (listenToKeys ? " onkeyup='if(event.keyCode==13) {$(this).updateEditableCell(this);} else if (event.keyCode===27) {$(this).cancelEditableCell(this);}'" : "") + "></input>&nbsp;<a href='javascript:void(0);' class='" + confirmCss + "' onclick='$(this).updateEditableCell(this)'>Confirm</a> <a href='javascript:void(0);' class='" + cancelCss + "' onclick='$(this).cancelEditableCell(this)'>Cancel</a>" + endWrapperHtml;
            break;
        case "undefined-confirm": // text input w/ confirm
            input.html = startWrapperHtml + "<input id='ejbeatycelledit' class='" + inputCss + "' value='" + oldValue + "'" + (listenToKeys ? " onkeyup='if(event.keyCode==13) {$(this).updateEditableCell(this);} else if (event.keyCode===27) {$(this).cancelEditableCell(this);}'" : "") + "></input>&nbsp;<a href='javascript:void(0);' class='" + confirmCss + "' onclick='$(this).updateEditableCell(this)'>Confirm</a> <a href='javascript:void(0);' class='" + cancelCss + "' onclick='$(this).cancelEditableCell(this)'>Cancel</a>" + endWrapperHtml;
            break;
        case "textarea":
            input.html = startWrapperHtml + "<textarea id='ejbeatycelledit' class='" + inputCss + "'  onfocusout='$(this).updateEditableCell(this)' >" + oldValue + "</textarea>" + endWrapperHtml;
            break;
        case "textarea-confirm":
            input.html = startWrapperHtml + "<textarea id='ejbeatycelledit' class='" + inputCss + "'>" + oldValue + "</textarea><a href='javascript:void(0);' class='" + confirmCss + "' onclick='$(this).updateEditableCell(this)'>Confirm</a> <a href='javascript:void(0);' class='" + cancelCss + "' onclick='$(this).cancelEditableCell(this)'>Cancel</a>" + endWrapperHtml;
            break;
        case "number-confirm":
            input.html = startWrapperHtml + "<input id='ejbeatycelledit' type='number' class='" + inputCss + "' value='" + oldValue + "'" + (listenToKeys ? " onkeyup='if(event.keyCode==13) {$(this).updateEditableCell(this);} else if (event.keyCode===27) {$(this).cancelEditableCell(this);}'" : "") + "></input>&nbsp;<a href='javascript:void(0);' class='" + confirmCss + "' onclick='$(this).updateEditableCell(this)'>Confirm</a> <a href='javascript:void(0);' class='" + cancelCss + "' onclick='$(this).cancelEditableCell(this)'>Cancel</a>" + endWrapperHtml;
            break;
        case "checkbox":
            console.log('rendering checkbox', oldValue);
            input.html = "<input type='checkbox' id='ejbeatycelledit' class='form-check-input' " +
                (oldValue == 1 ? "checked" : "") +
                " onchange='this.value = this.checked ? 1 : 0; $(this).updateEditableCell(this)' value='" + oldValue + "'>";
            break;
        case "datalist":
            const dropdownMarkup = `<div class="input-group input-group-sm">
                <input type="text" id="ejbeatycelledit" class="form-control" data-bs-toggle="dropdown" aria-expanded="false" onkeyup="filterDropdown(this)" />  
                <span class="input-group-text"
                    onclick='$(this).updateEditableCell($(this).prev())'>
                    <i class="bi bi-check2-all"></i>
                </span>              
                <ul class="dropdown-menu border-0 shadow" id="editableDropdown" style="height: 260px; overflow-y: scroll;">
                    ${inputSetting.options.map(i => `<li>
                        <a class="dropdown-item" href="javascript:void(0);" onclick="selectDropdownItem(this)">${i.display}</a>
                    </li>`).join('')}
                </ul>
            </div>`;

            input.html = dropdownMarkup;
            break;
        default: // text input
            input.html = startWrapperHtml + "<input id='ejbeatycelledit' class='" + inputCss + "' onfocusout='$(this).updateEditableCell(this)' value='" + oldValue + "'></input>" + endWrapperHtml;
            break;
    }
    return input;
}

function getInputField(callingElement) {
    // Update datatables cell value
    var inputField;
    switch ($(callingElement).prop('nodeName').toLowerCase()) {
        case 'a': // This means they're using confirmation buttons
            if ($(callingElement).siblings('input').length > 0) {
                inputField = $(callingElement).siblings('input');
            }
            if ($(callingElement).siblings('select').length > 0) {
                inputField = $(callingElement).siblings('select');
            }
            if ($(callingElement).siblings('textarea').length > 0) {
                inputField = $(callingElement).siblings('textarea');
            }
            break;
        default:
            inputField = $(callingElement);
    }
    return inputField;
}

function sanitizeCellValue(cellValue) {
    if (typeof (cellValue) === 'undefined' || cellValue === null || cellValue.length < 1) {
        return "";
    }

    // If not a number
    if (isNaN(cellValue)) {
        // escape single quote
        cellValue = cellValue.replace(/'/g, "&#39;");
    }
    return cellValue;
}

function setSelectOptions(data = []) {
    console.log('setSelectOpt', data);
    const $selectOptions = $('#search-select-filtered-options');
    $selectOptions.empty(); // Clear the existing options

    if (data.length < 1) {
        const $option = $('<a class="dropdown-item disabled" href="javascript:void(0);">No match</a>');
        $selectOptions.append($option);
    } else {
        $.each(data, function (i, val) {
            const $option = $(`<a class="dropdown-item" href="javascript:void(0);">${val.display}</a>`);
            $option.off().on('click', function () {
                selectValue(val);
            });
            $selectOptions.append($option);
        });
    }
}

function selectValue(val) {
    $('#dropdownBtn span').text(val.display); // Update button text
}

function filterData(options, value) {
    const filtered = options.filter(option => option.display.toLowerCase().includes(value.toLowerCase()));
    setSelectOptions(filtered);
}
