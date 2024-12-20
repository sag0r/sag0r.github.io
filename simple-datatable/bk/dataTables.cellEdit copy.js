﻿/*! CellEdit 1.0.19
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

            var currentColumnIndex = table.cell(this).index().column;

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
                    var input = getInputHtml(currentColumnIndex, settings, oldValue);
                    $(cell).html(input.html);
                    if (input.focus) {
                        $('#ejbeatycelledit').focus();
                    }
                }
            }
        });
    }

});

function getInputHtml(currentColumnIndex, settings, oldValue) {
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
            const dropdownMarkup = `<div class="search-select dropdown">
                <div class="cursor-pointer d-flex flex-row" id="dropdownBtn" type="button" data-bs-toggle="dropdown" data-boundary="window">
                    <span class="d-flex flex-fill align-items-center">${oldValue}</span>
                    <i class="bi bi-caret-down-fill"></i>
                </div>
                <div class="dropdown-menu border-0 shadow p-0">
                    <div class="d-flex flex-column">
                        <div class="d-flex p-1 shadow-sm" style="border-top: 4px solid #FDB604;border-radius: 4px 4px 0 0;">
                            <input class="form-control form-control-sm" autofocus type="text" placeholder="Search..." id="filter-dropdown" />
                        </div>
                        <div class="d-flex flex-fill flex-column" id="search-select-filtered-options"></div>            
                    </div>
                </div>
            </div>`;
            input.html = dropdownMarkup;

            // Handle when the dropdown is shown
            $(window).on('shown.bs.dropdown', function (e) {
                var $btnDropDown = $('#dropdownBtn');
                var $listHolder = $('.search-select').find(".dropdown-menu");

                // Adjust position of the dropdown to make sure it shows outside the parent
                $listHolder.css({
                    "position": "absolute",
                    "top": ($btnDropDown.offset().top + $btnDropDown.outerHeight(true)) + "px",
                    "left": $btnDropDown.offset().left + "px",
                    "z-index": 1050  // Ensure it stays on top
                }).data("open", true);

                // Append the dropdown to the body to make sure it's not hidden by the parent table
                $('body').append($listHolder.detach());
            });

            // Handle when the dropdown is hidden
            $(window).on('hidden.bs.dropdown', function (e) {
                var $listHolder = $('.search-select').find(".dropdown-menu");

                // Move the dropdown back to its original location in the DOM
                $(e.target).append($listHolder.detach());
                $listHolder.data("open", false);
            });

            // Handle scrolling of table or container to reposition the dropdown
            $(window).scroll(function () {
                var $ddHolder = $('.search-select.dropdown');
                var $btnDropDown = $('#dropdownBtn');
                var $listHolder = $ddHolder.find(".dropdown-menu");

                // If the dropdown is open, reposition it during scroll
                if ($listHolder.data("open")) {
                    $listHolder.css({
                        "top": ($btnDropDown.offset().top + $btnDropDown.outerHeight(true)) + "px",
                        "left": $btnDropDown.offset().left + "px"
                    });
                }
            });

            $(document).off().on('keyup', '#filter-dropdown', function (e) {
                filterData(inputSetting.options, e.target.value)
            });

            setTimeout(function () {
                setSelectOptions(inputSetting.options);
            }, 0);

            // const dropdownMarkup = `<div class="input-group input-group-sm">
            //     <input type="text" id="ejbeatycelledit" class="form-control" data-bs-toggle="dropdown" aria-expanded="false" onfocus="showDropdown(this)" onkeyup="filterDropdown(this)" />
            //     <span class="input-group-text"
            //         onclick='$(this).updateEditableCell($(this).prev())'>
            //         <i class="bi bi-check2-all"></i>
            //     </span>              
            //     <ul class="dropdown-menu border-0 shadow" id="editableDropdown" style="height: 260px; overflow-y: scroll;margin-top: 32px;">
            //         ${inputSetting.options.map(i => `<li>
            //             <a class="dropdown-item" href="javascript:void(0);" onclick="selectDropdownItem(this)">${i.display}</a>
            //         </li>`).join('')}
            //     </ul>
            // </div>`;

            // input.html = dropdownMarkup;
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
