import { Meteor } from 'meteor/meteor';
import '../imports/startup/simple-schema-configuration';
import { WebApp } from 'meteor/webapp';
import moment from 'moment';

import '../imports/api/users';
import '../imports/api/links';
import { Links } from '../imports/api/links';

Meteor.startup(() => {

    WebApp.connectHandlers.use((req, res, next) => {
       const _id = req.url.slice(1);
       const link = Links.findOne({_id});
       
       if (link) {
           res.statusCode = 302;
           res.setHeader ('location', 'link.url');
           res.end();
           Meteor.call('links.trackVisit',_id);
       }else {
           next();
       }
    })
});
