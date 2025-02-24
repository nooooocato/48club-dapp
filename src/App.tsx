import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import Header from './components/Header'
import { NotificationsList } from './components/Notifications'
import Milestone from './pages/milestone'
import Home from './pages/home'
import Governance from './pages/committee'
import ValidationNode from './pages/validation_node'
import Staking from './pages/staking'
import Voting from './pages/voting'
import Footer from './components/Footer'
import './i18n'
import { useTranslation } from 'react-i18next'
import VotingCreate from 'pages/votingCreate'
import VotingDetail from 'pages/votingDetail'
import NFT from 'pages/nft'
import NFTCreate from 'pages/nftCreate'
import Pool from 'pages/pool'
import StakeModal from './components/Modal/StakeModal'
import UnStakeModal from './components/Modal/UnStakeModal'
import Validator from 'pages/validator'

export default function App() {
  const { t } = useTranslation()

  return (
    <BrowserRouter>
      <Layout>
        <Header />
        {/* <div>test</div>
        <div>{t('app_head_title')}</div> */}
        <div className="pt-8">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/milestome" component={Milestone} />
            <Route exact path="/committee" component={Governance} />
            <Route exact path="/validation-node" component={ValidationNode} />
            <Route exact path="/staking" component={Staking} />
            <Route exact path="/nft" component={NFT} />
            <Route exact path="/nft/create" component={NFTCreate} />
            {/*<Route exact path="/manage" component={Manage} />*/}
            <Route exact path="/voting" component={Voting} />
            <Route exact path="/voting/create" component={VotingCreate} />
            <Route exact path="/voting/detail/:id" component={VotingDetail} />
            <Route exact path="/pool" component={Pool}></Route>

            <Route exact path="/validator" component={Validator}></Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
          <StakeModal />
          <UnStakeModal />
          <NotificationsList />
        </div>
        <Footer />
      </Layout>
    </BrowserRouter>
  )
}
