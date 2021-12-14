import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import Header from './components/Header'
import { NotificationsList } from './components/Notifications'
import Milestone from './pages/milestone'
import Home from './pages/home'
import Governance from './pages/governance'
import ValidationNode from './pages/validation_node'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <div className="pt-2">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/milestome" component={Milestone} />
            <Route exact path="/governance" component={Governance} />
            <Route exact path="/validation-node" component={ValidationNode} />
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
          <NotificationsList />
        </div>
        <Footer/>
      </Layout>
    </BrowserRouter>
  )
}
