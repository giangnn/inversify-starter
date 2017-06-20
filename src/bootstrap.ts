import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as config from 'config';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import container from './ioc.config';

let server = new InversifyExpressServer(container);
server.setConfig((app) => {

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());
});

let app = server.build();
app.listen(3000);
console.log('Server started on port 3000 :)');