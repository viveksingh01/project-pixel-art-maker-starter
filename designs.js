
function makeGrid(rows, columns) {
	const N = rows;
	const M = columns;
	
	for(let i = 1; i <= N; i++) {
		$('#pixel_canvas').append('<tr></tr>');
		for(let j = 1; j <= M; j++) {
			$('tr').last().append('<td></td>');
		}
	}
}
$('form').submit(function(e) {
	e.preventDefault();
	let rows = $('#input_height').val();
	let cols = $('#input_width').val();
	$('tr').each(function() {
		$(this).remove();
	});
	makeGrid(rows,cols);
});

$('table').on("click","td", function() {
	let color = $('#colorPicker').val();
	$(this).css("background-color", color);
});