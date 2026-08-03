document.addEventListener('DOMContentLoaded', () => {
  const fruits = ['apple', 'banana', 'mango', 'grape'];
  const showMappedBtn = document.getElementById('showMappedBtn');
  const mappedOutput = document.getElementById('mappedOutput');

  showMappedBtn.addEventListener('click', () => {
    const uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());
    const longFruits = uppercaseFruits.filter(fruit => fruit.length > 5);
    const totalLength = longFruits.reduce((sum, fruit) => sum + fruit.length, 0);

    mappedOutput.innerHTML = `
      <p>Uppercase: ${uppercaseFruits.join(' | ')}</p>
      <p>Long fruits: ${longFruits.join(' | ')}</p>
      <p>Total length: ${totalLength}</p>
    `;
  });
});
