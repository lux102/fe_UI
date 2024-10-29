const transitionContainer = document.getElementById('transition-container');
const menuItems = document.querySelectorAll('.menu-item'); // Lấy tất cả các menu item

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', (event) => {
    event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a (nếu cần)

    transitionContainer.classList.add('active');

    // Sau một thời gian nhất định, thu lại hiệu ứng
    setTimeout(() => {
      transitionContainer.classList.remove('active');
    }, 2000);
  });
});
