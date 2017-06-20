import 'reflect-metadata';
import { interfaces, Controller, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import { Container } from 'inversify';
import TAGS from './constants/tags';
import { HomeController } from './controllers/home.controller';

// load everything needed to the Container
let container = new Container();

container.bind<interfaces.Controller>(TYPE.Controller).to(HomeController).whenTargetNamed(TAGS.HomeController);

export default container;