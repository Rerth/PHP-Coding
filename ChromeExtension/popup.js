const noteInput = document.getElementById('noteInput');
const saveBtn = document.getElementById('saveBtn');
const clearBtn = document.getElementById('clearBtn');
const statusEl = document.getElementById('status');
const savedNotePreview = document.getElementById('savedNotePreview');
const STORAGE_KEY = 'quickNote';

function updatePreview(note) {
  savedNotePreview.textContent = note ? note : 'No note saved yet.';
}

function loadNote() {
  if (chrome?.storage?.local) {
    chrome.storage.local.get([STORAGE_KEY], (result) => {
      const savedNote = result[STORAGE_KEY] || '';
      noteInput.value = savedNote;
      updatePreview(savedNote);
      statusEl.textContent = savedNote
        ? 'Loaded your saved note.'
        : 'Your note is stored locally.';
    });
  } else {
    const savedNote = localStorage.getItem(STORAGE_KEY) || '';
    noteInput.value = savedNote;
    updatePreview(savedNote);
    statusEl.textContent = savedNote
      ? 'Loaded your saved note.'
      : 'Your note is stored locally.';
  }
}

function saveNote() {
  const note = noteInput.value.trim();

  try {
    if (chrome?.storage?.local) {
      chrome.storage.local.set({ [STORAGE_KEY]: note }, () => {
        updatePreview(note);
        statusEl.textContent = note ? 'Note saved.' : 'Note cleared.';
      });
    } else {
      localStorage.setItem(STORAGE_KEY, note);
      updatePreview(note);
      statusEl.textContent = note ? 'Note saved.' : 'Note cleared.';
    }
  } catch (error) {
    console.error('Could not save note:', error);
    statusEl.textContent = 'Could not save note.';
  }
}

function clearNote() {
  noteInput.value = '';

  try {
    if (chrome?.storage?.local) {
      chrome.storage.local.remove(STORAGE_KEY, () => {
        updatePreview('');
        statusEl.textContent = 'Note cleared.';
      });
    } else {
      localStorage.removeItem(STORAGE_KEY);
      updatePreview('');
      statusEl.textContent = 'Note cleared.';
    }
  } catch (error) {
    console.error('Could not clear note:', error);
    statusEl.textContent = 'Could not clear note.';
  }
}

document.addEventListener('DOMContentLoaded', loadNote);
saveBtn?.addEventListener('click', saveNote);
clearBtn?.addEventListener('click', clearNote);

noteInput.addEventListener('keydown', (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === 's') {
    event.preventDefault();
    saveNote();
  }
});
