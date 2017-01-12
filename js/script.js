ID = 0;

var data = [
    {
        "id": ID,
        "className": "CompSci",
        "classType": "1",
        "classStartTime": "10:00 am",
        "classEndTime": "12:00 am",
        "classLocation": "FG 9000",
        "classDay": ["mon"],
        "itemColour": "#ff0000"
    }
];

$(function () {
    $('#table').bootstrapTable({
        data: data,
        toggle: "table",
        columns: [
            {
                field: "id",
                visible: false
            },
            {
                field: "className",
                title: "Name",
                editable: true,
                align: 'center'
            },
            {
                field: "classType",
                title: "Type",
                editable: {
                    type: "select",
                    value: 1,    
                    source: [
                        {value: 1, text: 'Lecture'},
                        {value: 2, text: 'Tutorial'},
                        {value: 3, text: 'Laboratory'}
                    ]
                }
            },
            {
                field: "classStartTime",
                title: "Start Time",
                editable: {
                    type: "combodate",
                    format: 'h:mm a',    
                    viewformat: 'h:mm a',    
                    template: 'h : mm a',    
                    combodate: {
                        minuteStep: 15
                    }
                }
            },
            {
                field: "classEndTime",
                title: "End Time",
                editable: {
                    type: "combodate",
                    format: 'h:mm a',    
                    viewformat: 'h:mm a',    
                    template: 'h : mm a',    
                    combodate: {
                        minuteStep: 15
                    }
                }
            },
            {
                field: "classDay",
                title: "Day(s)",
                editable: {
                    type: "select2",
                    source: [
                            {id: "mon", text: 'Monday'},
                            {id: "tues", text: 'Tuesday'},
                            {id: "wed", text: 'Wednesday'},
                            {id: "th", text: 'Thursday'},
                            {id: "fri", text: 'Friday'},
                            {id: "sat", text: 'Saturday'},
                            {id: "sun", text: 'Sunday'}
                        ],
                    select2: {
                        multiple: true,
                    }
                    /*
                    select2: {
                        tags: ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                        tokenSeparators: [',', ' ']
                    }*/
                }
            },
            {
                field: "classLocation",
                title: "Location",
                editable: true
            },
            {
                field: "itemColour",
                title: "Colour",
                editable: true
            },
            {
                field: 'operate',
                title: 'Delete',
                align: 'center',
                events: operateEvents,
                formatter: operateFormatter
            }
        ]
    });
});

function operateFormatter(value, row, index) {
        return [
            '<a class="remove" href="javascript:void(0)" title="Remove">',
            '<span class="glyphicon glyphicon-remove text-danger"></span>',
            '</a>'
        ].join('');
    }


window.operateEvents = {
    'click .remove': function (e, value, row, index) {
        $('#table').bootstrapTable('remove', {
            field: "id",
            values: [row.id]    
        });
    }
};

function addItem() {
    var newItem = {
        "id": ID++,
        "className": $("#newItemName").val(),
        "classType": $("#newItemType").val(),
        "classStartTime": $("#newClassStartTime").combodate('getValue'),
        "classEndTime": $("#newClassEndTime").combodate('getValue'),
        "classLocation": $("#newClassLocation").val(),
        "classDay": $("#newClassDays").select2("val"),
        "itemColour": $("#newClassColour").val()
    }

    $('#table').bootstrapTable("append", newItem);
    $('#newClassForm')[0].reset();
}

function generateTable() {
    var tableData = $('#table').bootstrapTable('getData');

    for(var i = 0; i < tableData.length; i++)
    {
        tableData[i].classStartTime = formatDate(tableData[i].classStartTime);
        tableData[i].classEndTime = formatDate(tableData[i].classEndTime);
    }

    console.log(tableData);
}

function formatDate(time)
{
    var reg = /^(\d{1,2}):(\d{2}) (am|pm)$/g;
    var match = reg.exec(time);
    //return new Date(2000, 1, 1, match[2] == "am" ? match[0] : parseInt(match[0]) + 12, match[1], 0, 0);
    var newDate = new Date();
    newDate.setMinutes(match[2]);
    newDate.setHours(match[3] == "am" ? match[1] : parseInt(match[1]) + 12);

    return newDate;
}