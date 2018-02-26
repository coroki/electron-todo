import * as React from 'react';

import { ITodoEditorState } from './todo-editor.state.interface';

export class TodoEditor extends React.Component<{}, ITodoEditorState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            text: ''
        };
    }

    public render(): JSX.Element {
        const { text } = this.state;
        return (
            <div>
                <h1>Enter Todo:</h1>
                <input type='text' value={text} onChange={this.onTextChange} />
                <button onClick={this.onAdd}>Add</button>
            </div>
        );
    }

    private onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ text: e.target.value });

    // tslint:disable-next-line:no-console
    private onAdd = () => console.log(this.state.text);
}
