import React from 'react';
import  LinkList  from './LinkList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinkListFilters from './LinkListFilters';

export default () => {
    return (
        <div>
            <PrivateHeader title = 'Your Links'/>
            <div className='page-content'>
                <LinkListFilters/>
                <AddLink/>
                <LinkList/>
            </div>
        </div>
    );
};