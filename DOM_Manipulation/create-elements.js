document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.getElementById('listContainer');
  const addItemBtn = document.getElementById('addItemBtn');
  let count = 0;

  addItemBtn.addEventListener('click', () => {
    count += 1;
    const item = document.createElement('div');
    item.className = 'item';
    item.textContent = `Item ${count}`;
    listContainer.appendChild(item);
  });
});
