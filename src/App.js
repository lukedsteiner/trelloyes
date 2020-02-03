import React from 'react';
import List from './List';

function App(props) {
    render() {
       return (
        <main class="App">
            <header class="App-header">
                <h1>Trelloyes!</h1>
            </header>
            <div className='App-list'>
                {props.lists.map(list => (
                    <List 
                    {list.id}
                    {list.header}
                    {list.cardIds}
                    />
                )
                )
            </div>
        </main>
       )}
}

export default App;

