const noteInput = document.getElementById('noteInput');
const saveBtn = document.getElementById('saveBtn');
const clearBtn = document.getElementById('clearBtn');
const statusEl = document.getElementById('status');

function loadNote() {
  chrome.storage.local.get(['quickNote'], (result) => {
    noteInput.value = result.quickNote || '';
    statusEl.textContent = result.quickNote
      ? 'Loaded your saved note.'
      : 'Your note is stored locally.';
  });
}

function saveNote() {
  const note = noteInput.value.trim();
  chrome.storage.local.set({ quickNote: note }, () => {
    statusEl.textContent = note ? 'Note saved.' : 'Note cleared.';
  });
}

function clearNote() {
  noteInput.value = '';
  chrome.storage.local.remove('quickNote', () => {
    statusEl.textContent = 'Note cleared.';
  });
}

document.addEventListener('DOMContentLoaded', loadNote);
saveBtn.addEventListener('click', saveNote);
clearBtn.addEventListener('click', clearNote);

noteInput.addEventListener('keydown', (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === 's') {
    event.preventDefault();
    saveNote();
  }
});
