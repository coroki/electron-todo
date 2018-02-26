import * as React from 'react';
import { Route, Switch } from 'react-router';

import { HashRouter } from 'react-router-dom';
import { TodoEditor } from '../todo-editor/todo-editor.component';
import { Todos } from '../todos/todos.component';

export class Root extends React.Component {

    public render(): JSX.Element {
        return (
            <HashRouter>
                <Switch>
                    <Route path='/todos' component={Todos} />
                    <Route path='/todo' component={TodoEditor} />
                </Switch>
            </HashRouter>
        );
    }
}
