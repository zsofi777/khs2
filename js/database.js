$(document).ready(function() {



    // DataTable
    var table = $('#example').DataTable( {
        "ajax": "tabla_1217.json",
        "columns": [
            { "data": "ID" },
            { "data": "ORSZAG", "className": "selectable", "editField":"ORSZAG" },
            { "data": "KAT1", "className": "selectable", "editField":"KAT1" },
            { "data": "KAT2", "className": "selectable", "editField":"KAT2" },
            { "data": "KAT3", "className": "selectable", "editField":"KAT3" },
            { "data": "MUTATO", "className": "selectable", "editField":"MUTATO" },
            { "data": "MUTATO_AL" },
            { "data": "DIM", "className": "selectable", "editField":"DIM" },
            { "data": "KEZDO_EV", "className": "selectable", "editField":"KEZDO_EV" },
            { "data": "ZARO_EV", "className": "selectable", "editField":"ZARO_EV" },
            { "data": "LAU2", "className": "selectable", "editField":"LAU2" },
            { "data": "LAU1", "className": "selectable", "editField":"LAU1" },
            { "data": "NUTS3", "className": "selectable", "editField":"NUTS3" },
            { "data": "NUTS2", "className": "selectable", "editField":"NUTS2" },
            { "data": "NUTS0", "className": "selectable", "editField":"NUTS0" },
            { "data": "FORRAS", "className": "selectable", "editField":"FORRAS" }
        ],  
        columnDefs: [
            {
            targets: 6,
            className: "dt-nowrap"
            }
        ],    
        "processing" : true,      
        "orderCellsTop": true,
        "select": true,
        "dom": "<'row'<'col-md-6'l><'col-md-6'Bf>>" +
               "<'row'<'col-md-12't>><'row'<'col-md-12'ip>>",
        "aLengthMenu": [[25, 50, 100, 250, 500, -1], [25, 50, 100, 250, 500, "Összes"]],
        "oLanguage": {
            "sSearch": "KERESÉS:",
            "sInfo": "Megjelenítve _START_ - _END_ (összesen _TOTAL_)",
            "sInfoEmpty": "Nincs találat",
            "sZeroRecords": "Nincs adat",
            "sInfoFiltered": " ",
            "sInfoThousands": " ",
            "sLoadingRecords": "Dolgozunk rajta...",
            "sProcessing": "DOLGOZUNK RAJTA...",
            "sLengthMenu": "MEGJELENÍTVE  _MENU_ SOR",
            "oPaginate": {
                "sNext": "Következő",
                "sPrevious": "Előző"
              }
          },
          responsive: {
            breakpoints: [
              {name: 'bigdesktop', width: Infinity},
              {name: 'meddesktop', width: 1480},
              {name: 'smalldesktop', width: 1280},
              {name: 'medium', width: 1188},
              {name: 'tabletl', width: 1024},
              {name: 'btwtabllandp', width: 848},
              {name: 'tabletp', width: 768},
              {name: 'mobilel', width: 480},
              {name: 'mobilep', width: 320}
            ]
          },



        // SZŰRŐK  
        initComplete: function () {
            this.api().columns(".selectable").every( function () {
                var column = this;
                var select = $('<select><option value=""></option></select>')
                .appendTo( $("#example thead tr:eq(2) th").eq(column.index()).empty() )
                .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );
 
                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    } );
                    
                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' );
                } );
            } );
        
            var input = $('.dataTables_filter input').unbind(),
                self = this.api(),
                $searchButton = $('<button id="search">')
                           .text('KERESÉS')
                           .click(function() {
                              self.search(input.val()).draw();
                           }),
                $clearButton = $('<button id="clear">')
                           .text('ALAPHELYZETBE')
                           .click(function() {
                              input.val('');
                              $searchButton.click(); 
                           }) 
            $('.dataTables_filter').append($searchButton, $clearButton);
        }         
        
    } );



    // Oszloponként KERESÉS
    $('#example thead tr:eq(1) th.filterhead').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Keresés: '+title+'" class="column_search" />' );
    } );

    $( '#example thead' ).on( 'keyup', "tr:eq(1) input",function () {  
        table
            .column( $(this).parent().index() )
            .search( this.value )
            .draw();
    } );

       
    
} );
