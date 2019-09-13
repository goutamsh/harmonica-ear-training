import React from 'react';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import NoteIdentificationTabs from './NoteIdentifyTabs';

class MainTabs extends React.Component{

    render(){
        return (

        <div className="container">
            <div className="row">
                <section>
                    <h5>   This site helps in training ears with Harmonica sound</h5>
                    <Tabs contentClass="tab-content-default" onSelect={(index, label) => console.log(`Selected Index: ${index}, Label: ${label}`)}>
                        <Tab label="Identifying Note"><NoteIdentificationTabs/></Tab>
                        <Tab label="Interval Detection" className="my-tab-content">This is Tab 2 with a custom content class</Tab>
                        <Tab label="Coming Soon" disabled></Tab></Tabs>
                </section>
            </div>
        </div>
        );
    }
}


export default MainTabs;