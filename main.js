'use strict';
let fileInput = document.querySelector('#csvSelector');

fileInput.addEventListener('change', parseInput);

function parseInput(event) {
  Papa.parse(event.target.files[0], {
    header: true,
    //worker: true,
    preview: 20,
    //skipEmptyLines: 'greedy',
    dynamicTyping: true,
    step: function(row) {
      let container = document.querySelector('.section');
      let newDiv = document.createElement('div');
      newDiv.className = 'container box';
      for (const key in row.data) {
        if (row.data.hasOwnProperty(key)) {
          const element = row.data[key];
          if (element === null || element === '') {
            continue;
          }
          const textBox = document.createElement('div');
          textBox.className = '';
          const label = document.createElement('span');
          label.innerText = key;
          label.className = 'tag is-light';
          const value = document.createElement('div');
          value.innerText = element;
          value.className = 'tag is-primary';
          textBox.appendChild(label);
          textBox.appendChild(value);
          newDiv.appendChild(textBox);
        }
      }
      container.appendChild(newDiv);
      console.log('Step is done', row);
    },
    error: function(err, file, inputElem, reason) {
      console.error(
        `Something(${reason}) whent wrong in while parsing ${file} and we got an error - ${err}`
      );
    },
    complete: function(results, file) {}
  });
}
