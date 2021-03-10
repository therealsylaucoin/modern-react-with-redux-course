import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Are you sure you want to do this?
                </div>
                
            </ApprovalCard>

            < ApprovalCard >
                < CommentDetail 
                    avatar={faker.image.image()}
                    author='Sam'
                    timeAgo='Today at 4:15pm'
                    comment='Nice blog post!'
                />
            </ ApprovalCard>

            < ApprovalCard>
                < CommentDetail 
                    avatar={faker.image.image()}
                    author='Alex'
                    timeAgo='Today at 2:00am'
                    comment='Great read!'
                />
            </ApprovalCard>

            < ApprovalCard >
                < CommentDetail 
                    avatar={faker.image.image()}
                    author='Mary'
                    timeAgo='Yesterday at 1:15pm'
                    comment='I found this post really helpful. Good work!'
                />
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(< App />, document.querySelector('#root'))
