var select = '';
for (i=1;i<=5;i++){
    select += '<option val=' + i + '>' + i + '</option>';
}
$('#some_selector').html(select);