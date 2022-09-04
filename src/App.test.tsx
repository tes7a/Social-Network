import { RenderApp } from './RenderApp';
import ReactDOM from 'react-dom';

it.skip('render without crashing', (state: any) => {
    const div = document.createElement('div');
    ReactDOM.render(<RenderApp state={state}/> , div);
    ReactDOM.unmountComponentAtNode(div);
})