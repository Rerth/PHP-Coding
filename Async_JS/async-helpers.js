function fetchFakeData(delayMs, value, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(new Error(`Failed to fetch ${value}`));
      } else {
        resolve(`Fetched ${value} after ${delayMs}ms`);
      }
    }, delayMs);
  });
}

function renderOutput(targetId, text) {
  const target = document.getElementById(targetId);
  target.textContent = text;
}

function createLog(title, ...messages) {
  return `${title}\n${messages.join('\n')}`;
}
