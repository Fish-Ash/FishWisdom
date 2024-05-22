function loadNavbar() {
    fetch('navibar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar-container').innerHTML = data;
      });
  }
  
  window.onload = loadNavbar;