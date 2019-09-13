import React from 'react';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import NoteIdentifyPractice from './NoteIdentifyPractice';

class NoteIdentificationTabs extends React.Component{

    render(){
        return (

        <div className="container">
            <div className="row">
                <section>
                    <h5>This is for helping practicing harmonica note identification</h5>
                    <Tabs contentClass="tab-content-default" onSelect={(index, label) => console.log(`Selected Index: ${index}, Label: ${label}`)}>
                        <Tab label="Practice"><NoteIdentifyPractice/></Tab>
                        <Tab label="Quiz" className="my-tab-content">Quiz</Tab>
                    </Tabs>
                </section>
            </div>
        </div>
        );
    }
}


export default NoteIdentificationTabs;