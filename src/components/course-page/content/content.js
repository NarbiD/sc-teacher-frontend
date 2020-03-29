import React from 'react';

import Tasks from './tasks';
import {  Route, Redirect } from 'react-router-dom';

const Content = ({ courseId, items }) => {
    const baseLink=`/courses/${courseId}/`;
    const tasks =  [
        {id: 1, label: 'task1', comment: 'Comment for task 1',
            startDate: '2020-01-28', endDate: '2020-01-31'},
        {id: 2, label: 'task2', comment: 'Comment for task 2',
            startDate: '2020-01-31', endDate: '2020-02-04'},
        {id: 3, label: 'task3', comment: 'Comment for task 2',
            startDate: '2020-02-05', endDate: '2020-02-10'},
        {id: 4, label: 'task4', comment: 'Comment for task 2',
            startDate: '2020-02-11', endDate: '2020-02-04'}
    ]

    const mailing=[
        {id: 1, label: 'mailing1', comment: 'Comment for task 1',
            startDate: '2020-01-28', time: '11:00'},
        {id: 2, label: 'mailing2', comment: 'Comment for task 2',
            startDate: '2020-01-31', time: '10:00'},
        {id: 3, label: 'mailing3', comment: 'Comment for task 2',
            startDate: '2020-02-05', time: '19:30'}
    ]
        return (
            <div className="content">
                <Route path={`${baseLink}`}
                    exact >
                        <Redirect to={`${baseLink}tasks`} />
                    </Route>
                    <Route path={`${baseLink}tasks`}>
                        <Tasks courseId={courseId} items={tasks} />
                    </Route>
                    <Route path={`${baseLink}mailing`}>
                        <Tasks courseId={courseId} items={mailing} />
                    </Route>
            </div>);
}

export default Content;