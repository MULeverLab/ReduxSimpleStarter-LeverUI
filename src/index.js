import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//Import Promise from Redux-Promise to handle the promise
import promise from 'redux-promise';

//Import BrowserRouter (Interacts with the history library and decides action when URL is changed)
//Import Route which sis the workhorse of ReactRouter - If URL looks like this show this
//Import Switch component which handles the lazily routing of pages
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import GetAnimal from './components/get_animals';
import SavePhenotype from './components/save_phenotype';
import SaveGenotype from './components/save_genotype';
import SaveUser from './components/save_user';
import SaveCompetency from './components/save_competency';
import SaveColony from './components/save_colony';
import SaveProject from './components/save_project';
import RenderTable from './components/table_bootstrap';


import reducers from './reducers';
import GetPhenotype from "./components/get_phenotype";
import GetUsers from "./components/get_users";
import GetGenotypes from "./components/get_genotypes";
import GetProjects from "./components/get_projects";
import GetColonies from "./components/get_colonies";
import AddPage from "./components/add_page";


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
          <Switch>
              <Route path="/animals/get" component={GetAnimal}/>
              <Route path="/genotype/new" component={SaveGenotype}/>
              <Route path="/phenotype/new" component={SavePhenotype}/>
              <Route path="/user/new" component={SaveUser}/>
              <Route path="/competency/new" component={SaveCompetency}/>
              <Route path="/colony/new" component={SaveColony}/>
              <Route path="/project/new" component={SaveProject}/>
              <Route path="/phenotype/get" component={GetPhenotype}/>
              <Route path="/table" component={RenderTable}/>
              <Route path="/users/get" component={GetUsers}/>
              <Route path="/genotypes/get" component={GetGenotypes}/>
              <Route path="/projects/get" component={GetProjects}/>
              <Route path="/colonies/get" component={GetColonies}/>
              <Route path="/addPage" component={AddPage}/>


          </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
