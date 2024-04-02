function sendNotification() {
    const bell = document.getElementById('bell');
    const circles = bell.querySelectorAll('.circle-1, .circle-2, .circle-3');
  
    circles.forEach((circle) => {
      circle.style.opacity = '1';
      setTimeout(() => {
        circle.style.opacity = '0';
      }, 1500);
    });
  }
  