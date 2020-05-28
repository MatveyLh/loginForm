import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import UiElements from "./UiElements";
import MailApplication from "./MailApplication";
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { Card, CardBody, Col } from 'reactstrap';
import HeartOutlineIcon from 'mdi-react/HeartOutlineIcon';
import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import ChatApplication from "./ChatApplication";
import Forms from "./Forms";
import Tables from "./Tables";
import Charts from "./Charts";
import Maps from "./Maps";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exit: false,
            redirect: '/login'
        }
    }

    exitClick() {
        localStorage.setItem('group', '0');
        this.setState({exit: !this.state.exit});
    }

    render() {
        const data = [{ value: 68, fill: '#ff4861' },
            { value: 32, fill: '#eeeeee' }];
        if (localStorage.getItem('group') === '0') {
            return <Redirect to={this.state.redirect}/>
        }

        return (
            <Router>
                <Route render={({ location, history }) => (
                    <div className={'content'}>
                        <SideNav
                            onSelect={(selected) => {
                                const to = '/' + selected;
                                if (location.pathname !== to) {
                                    history.push(to);
                                }
                            }}
                        >
                            <SideNav.Toggle />
                            <SideNav.Nav defaultSelected="ui_elements">
                                <NavItem eventKey="ui_elements">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Ui Elements
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="mail_application">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Mail Application
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="chat_application">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Chat Application
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="forms">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Forms
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="Tables">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Tables
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="charts">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Charts
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="maps">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Maps
                                    </NavText>
                                </NavItem>
                                <button className={'btn-exit'} onClick={this.exitClick.bind(this)}>Exit</button>
                            </SideNav.Nav>
                        </SideNav>
                        <main>
                            <Route path="/ui_elements" component={props => <UiElements />} />
                            <Route path="/mail_application" component={props => <MailApplication />} />
                            <Route path="/chat_application" component={props => <ChatApplication />} />
                            <Route path="/forms" component={props => <Forms />} />
                            <Route path="/tables" component={props => <Tables />} />
                            <Route path="/charts" component={props => <Charts />} />
                            <Route path="/maps" component={props => <Maps />} />
                            <Route path="/default_theme" >
                                <Col md={12} xl={3} lg={6} sm={12} xs={12} className={'diagrams'}>
                                    <Card>
                                        <CardBody className="dashboard__health-chart-card">
                                            <div className="card__title">
                                                <h5 className="bold-text">{('dashboard_fitness.heartrate')}</h5>
                                            </div>
                                            <div className="dashboard__health-chart">
                                                <ResponsiveContainer height={180}>
                                                    <PieChart>
                                                        <Pie data={data} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
                                                    </PieChart>
                                                </ResponsiveContainer>
                                                <div className="dashboard__health-chart-info">
                                                    <HeartOutlineIcon style={{ fill: '#ff4861' }} />
                                                    <p className="dashboard__health-chart-number">96</p>
                                                    <p className="dashboard__health-chart-units">b/min</p>
                                                </div>
                                            </div>
                                            <p className="dashboard__goal">Reference: 58-120</p>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Route>
                        </main>

                    </div>
                )}
                />
            </Router>
        );
    }
}

export default Content;