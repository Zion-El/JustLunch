
    // document.addEventListener('DOMContentLoaded', function() {
    //   var currentPage = 1;
    //   var rowsPerPage = 8;
    //   var table = document.getElementById('myTable');
    //   var rows = table.getElementsByTagName('tr');
    //   var pageCount = Math.ceil(rows.length / rowsPerPage);
      
    //   function showPage(page) {
    //     currentPage = page;
    //     var start = (currentPage - 1) * rowsPerPage;
    //     var end = start + rowsPerPage;
        
    //     for (var i = 1; i < rows.length; i++) {
    //       if (i >= start && i < end) {
    //         rows[i].style.display = 'table-row';
    //       } else {
    //         rows[i].style.display = 'none';
    //       }
    //     }
        
    //     updatePagination();
    //   }
      
    //   function updatePagination() {
    //     var paginationContainer = document.getElementById('pagination');
    //     paginationContainer.innerHTML = '';
        
    //     for (var i = 1; i <= pageCount; i++) {
    //       var link = document.createElement('a');
    //       link.href = '#';
    //       link.textContent = i;
          
    //       if (i === currentPage) {
    //         link.className = 'active';
    //       }
          
    //       link.addEventListener('click', function() {
    //         showPage(parseInt(this.textContent));
    //       });
          
    //       paginationContainer.appendChild(link);
    //     }
    //   }
      
    //   showPage(currentPage);
    // });


    // ####################################################


        document.addEventListener('DOMContentLoaded', function() {
      var currentPage = 1;
      var rowsPerPage = 10;
      var table = document.getElementById('myTable');
      var rows = table.getElementsByTagName('tr');
      var pageCount = Math.ceil(rows.length / rowsPerPage);
      
      function showPage(page) {
        currentPage = page;
        var start = (currentPage - 1) * rowsPerPage;
        var end = start + rowsPerPage;
        
        for (var i = 1; i < rows.length; i++) {
          if (i >= start && i < end) {
            rows[i].style.display = 'table-row';
          } else {
            rows[i].style.display = 'none';
          }
        }
        
        updatePagination();
      }
      
function updatePagination() {
  var paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';

  var prevLink = document.createElement('a');
  prevLink.href = '#';
prevLink.innerHTML = '<i class="fas fa-chevron-left"></i>';

  if (currentPage === 1) {
    prevLink.className = 'disabled';
  }

  prevLink.addEventListener('click', function() {
    if (currentPage > 1) {
      showPage(currentPage - 1);
    }
  });

  paginationContainer.appendChild(prevLink);

  var startPage = currentPage - 1 > 0 ? currentPage - 1 : 1;
  var endPage = startPage + 2 < pageCount ? startPage + 2 : pageCount;

  for (var i = startPage; i <= endPage; i++) {
    var link = document.createElement('a');
    link.href = '#';
    link.textContent = i;

    if (i === currentPage) {
      link.className = 'active';
    }

    link.addEventListener('click', function() {
      showPage(parseInt(this.textContent));
    });

    paginationContainer.appendChild(link);
  }

  var nextLink = document.createElement('a');
  nextLink.href = '#';
    nextLink.innerHTML = '<i class="fas fa-chevron-right"></i>';

  if (currentPage === pageCount) {
    nextLink.className = 'disabled';
  }

  nextLink.addEventListener('click', function() {
    if (currentPage < pageCount) {
      showPage(currentPage + 1);
    }
  });

  paginationContainer.appendChild(nextLink);
}
      
      showPage(currentPage);
    });