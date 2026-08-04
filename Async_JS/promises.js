document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('promiseBtn');

  button.addEventListener('click', () => {
    const outputLines = [];

    outputLines.push('Start promise flow');

    fetchFakeData(600, 'user data')
      .then(response => {
        outputLines.push(response);
        return fetchFakeData(300, 'settings');
      })
      .then(response => {
        outputLines.push(response);
        return Promise.all([
          fetchFakeData(200, 'notifications'),
          fetchFakeData(250, 'messages'),
        ]);
      })
      .then(([notifications, messages]) => {
        outputLines.push(notifications);
        outputLines.push(messages);
        outputLines.push('Promise flow complete');
        renderOutput('promiseOutput', createLog('Promise Example', ...outputLines));
      })
      .catch(error => {
        renderOutput('promiseOutput', createLog('Promise Example', error.message));
      });
  });
});
