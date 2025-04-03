import './style.css'
/*
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
*/

import { dia, shapes } from '@joint/core';


const namespace = shapes;

const graph = new dia.Graph({}, { cellNamespace: namespace });

const paper = new dia.Paper({
    el: document.getElementById('app'),
    model: graph,
    width: 300,
    height: 300,
    background: { color: '#F5F5F5' },
    cellViewNamespace: namespace
});
console.log('paper', paper);

const rect1 = new shapes.standard.Rectangle();
rect1.position(25, 25);
rect1.resize(180, 50);
rect1.addTo(graph);

const rect2 = new shapes.standard.Rectangle();
rect2.position(95, 225);
rect2.resize(180, 50);
rect2.addTo(graph);

rect1.attr('body', { stroke: '#C94A46', rx: 2, ry: 2 });
rect2.attr('body', { stroke: '#C94A46', rx: 2, ry: 2 });

rect1.attr('label', { text: 'Hello', fill: '#353535' });
rect2.attr('label', { text: 'World!', fill: '#353535' });


/*
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
*/