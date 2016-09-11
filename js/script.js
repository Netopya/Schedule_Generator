var data = [
    {
        "className": "CompSci",
        "classType": 1,
        "classStartTime": "10:00AM",
        "classEndTime": "12:00AM",
        "classLocation": "FG 9000"
    }
];

$(function () {
    $('#table').bootstrapTable({
        data: data,
        toggle: "table",
        columns: [
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
                field: "classLocation",
                title: "Location",
                editable: true
            }
        ]
    });
});

function locationFormatter() {

}