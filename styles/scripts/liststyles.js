document.addEventListener("DOMContentLoaded", function() {
    var listItems = document.querySelectorAll('li');

    listItems.forEach(function(item) {
      item.addEventListener('click', function() {
        // Remove the 'active' class from all list items
        listItems.forEach(function(li) {
          li.classList.remove('active');
        });

        // Add the 'active' class to the clicked list item
        this.classList.add('active');
      });
    });
  });

  
  
