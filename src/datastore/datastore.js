export default function query(queryName, queryParams, callback) {
    $.ajax({
        url: "/query/" + queryName,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(queryParams),
        success: (response) => {
            callback(response);
        }
    });
}
