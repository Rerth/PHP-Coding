document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('asyncAwaitBtn');

  button.addEventListener('click', async () => {
    const outputLines = ['Start async/await flow'];

    try {
      const userData = await fetchFakeData(500, 'user data');
      outputLines.push(userData);

      const settings = await fetchFakeData(400, 'settings');
      outputLines.push(settings);

      const [notifications, messages] = await Promise.all([
        fetchFakeData(200, 'notifications'),
        fetchFakeData(250, 'messages'),
      ]);

      outputLines.push(notifications);
      outputLines.push(messages);
      outputLines.push('Async/await flow complete');
      renderOutput('asyncAwaitOutput', createLog('Async/Await Example', ...outputLines));
    } catch (error) {
      renderOutput('asyncAwaitOutput', createLog('Async/Await Example', error.message));
    }
  });
});
