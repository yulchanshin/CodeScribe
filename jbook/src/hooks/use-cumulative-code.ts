import { useTypedSelector } from './use-typed-selector';

export const useCumulativeCode = (cellId: string) => {
  return useTypedSelector((state) => {
    const { data, order } = state.cells;
    const orderedCells = order.map(id => data[id]);

    const showFunc = `
        import _React from 'react';
        import _ReactDOM from 'react-dom/client';

        var show = (value) => {
          const root = document.querySelector('#root');
          if (!root) throw new Error('Cannot find #root element');

          if (typeof value === 'object') {
            if (value.$$typeof && value.props) {
              const rootContainer = _ReactDOM.createRoot(root);
              rootContainer.render(value);
            } else {
              root.innerHTML = JSON.stringify(value, null, 2);
            }
          } else {
            root.innerHTML = value;
          }
        };

      `;
    const showFuncNoop = 'var show = () => {}'
    const cumulativeCode = []
    for (let c of orderedCells) {
      if (c.type === 'code') {

        //if-else below disables show calls from previous cells
        if (c.id === cellId) {
          cumulativeCode.push(showFunc);
        } else {
          cumulativeCode.push(showFuncNoop);

        }
        cumulativeCode.push(c.content);
      }
      if (c.id === cellId) {
        break;
      }
    }
    return cumulativeCode;
  }).join('\n');
};
