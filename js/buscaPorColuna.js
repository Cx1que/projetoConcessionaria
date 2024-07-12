document.addEventListener('DOMContentLoaded', function() {
    new DataTable('#dataTable', {
        initComplete: function() {
            this.api().columns().every(function() {
                let column = this;
                let title = column.footer().textContent;

                // Create input element
                let input = document.createElement('input');
                input.placeholder = 'Buscar ' + title;
                input.style.width = '100%';
                column.footer().replaceChildren(input);

                // Event listener for user input
                input.addEventListener('keyup', function() {
                    if (column.search() !== this.value) {
                        column.search(this.value).draw();
                    }
                });
            });
        }
    });
});
