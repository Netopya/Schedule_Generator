var data = [
    {
        "className": "CompSci",
        "classType": "Lecture",
        "classStartTime": "8:00AM",
        "classEndTime": "10:00AM",
        "classLocation": "FG 9000"
    }
];



$(function () {
    $('#table').bootstrapTable({
        data: data,
        columns: [
            {
                field: "className",
                title: "Name",
            },
            {
                field: "classType",
                title: "Type",
            },
            {
                field: "classStartTime",
                title: "Start Time",
            },
            {
                field: "classEndTime",
                title: "End Time",
            },
            {
                field: "classLocation",
                title: "Location",
            }
        ]
    });
});