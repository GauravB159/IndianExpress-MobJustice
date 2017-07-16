import React from 'react';
import PykQuery from '../../lib/PykQuery.2.0.0.min.js';

class Filters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: [],
      state: [],
      state_ruling_party: [],
      victim_religion: [],
      accused_religion: [],
      does_the_state_criminalise_victims_actions: [],
      menu_value: '',
      state_value: '',
      ruling_party_value: '',
      victim_religion_value: '',
      accused_religion_value: '',
      criminalise_victims_value: '',
      date: [],
      count_injured: [],
      count_dead:[]
    }
  }

  componentWillMount() {
    PykQuery.PykQuery.createTable("MobTable", "inbrowser", this.props.dataJSON);

    let menu_query = PykQuery.PykQuery.createQuery("menu_query"),
      menu = menu_query.select('menu').from("MobTable").groupBy().exec();

    let state_query = PykQuery.PykQuery.createQuery("state_query"),
      state = state_query.select('state').from("MobTable").groupBy().exec();

    let state_ruling_party_query = PykQuery.PykQuery.createQuery("state_ruling_party_query"),
      state_ruling_party = state_ruling_party_query.select('state_ruling_party').from("MobTable").groupBy().exec();

    let victim_religion_query = PykQuery.PykQuery.createQuery("victim_religion_query"),
      victim_religion = victim_religion_query.select('victim_religion').from("MobTable").groupBy().exec();

    let accused_religion_query = PykQuery.PykQuery.createQuery("accused_religion_query"),
      accused_religion = accused_religion_query.select('accused_religion').from("MobTable").groupBy().exec();

    let does_the_state_criminalise_victims_actions_query = PykQuery.PykQuery.createQuery("does_the_state_criminalise_victims_actions_query"),
      does_the_state_criminalise_victims_actions = does_the_state_criminalise_victims_actions_query.select('does_the_state_criminalise_victims_actions').from("MobTable").groupBy().exec();

    this.setState({
      menu: menu,
      state: state,
      state_ruling_party: state_ruling_party,
      victim_religion: victim_religion,
      accused_religion: accused_religion,
      does_the_state_criminalise_victims_actions: does_the_state_criminalise_victims_actions
    })
  }

  handleOnChange(e) {
    console.log(e, e.target, e.target.value, "eeeeeee")
    this.setState({
      menu_value: e.target['data-menu-value']
    });
    console.log("onchange value", this.state.menu_value)
    let menu_query = PykQuery.PykQuery.createQuery("menu_query");
    let filterd = menu_query.select().from("MobTable").where("menu","equal",this.state.menu_value).exec();
    console.log(filterd, "filtered data")
  }

  render() {
    // console.log(this.props.dataJSON,"this.props.dataJSON")
    if (this.props.dataJSON === undefined) {
      return(<div></div>)
    } else {
      let menuOptions = this.state.menu.map((value, i) => {
        return (
          <option key={i} value={value.menu}>{value.menu}</option>
        )
      })
      let stateOptions = this.state.state.map((value, i) => {
        return (
          <option key={i} value={value.state}>{value.state}</option>
        )
      })
      let rulingPartyOptions = this.state.state_ruling_party.map((value, i) => {
        return (
          <option key={i} value={value.state_ruling_party}>{value.state_ruling_party}</option>
        )
      })
      let victimReligionOptions = this.state.victim_religion.map((value, i) => {
        return (
          <option key={i} value={value.victim_religion}>{value.victim_religion}</option>
        )
      })
      let accusedReligionOptions = this.state.accused_religion.map((value, i) => {
        return (
          <option key={i} value={value.accused_religion}>{value.accused_religion}</option>
        )
      })
      let criminaliseVictimsOptions = this.state.does_the_state_criminalise_victims_actions.map((value, i) => {
        return (
          <option key={i} value={value.does_the_state_criminalise_victims_actions}>{value.does_the_state_criminalise_victims_actions}</option>
        )
      })
      return (
        <div className="protograph-filters-container">
          <div className="protograph-filters">
            <select 
              onChange={(e) => this.handleOnChange(e)}
              data-menu-value={this.state.menu_value}
            >
              {menuOptions}
            </select>
          </div>
          <div className="protograph-filters">
            <select
              onChange={(e) => this.handleOnChange(e)}
              value={this.state.state_value}
            >
              {stateOptions}
            </select>
          </div>
          <div className="protograph-filters">
            <select
              onChange={(e) => this.handleOnChange(e)}
              value={this.state.ruling_party_value}
            >
              {rulingPartyOptions}
            </select>
          </div>
          <div className="protograph-filters">
            <select
              onChange={(e) => this.handleOnChange(e)}
              value={this.state.victim_religion_value}
            >
              {victimReligionOptions}
            </select>
          </div>
          <div className="protograph-filters">
            <select
              onChange={(e) => this.handleOnChange(e)}
              value={this.state.accused_religion_value}
            >
              {accusedReligionOptions}
            </select>
          </div>
          <div className="protograph-filters">
            <select
              onChange={(e) => this.handleOnChange(e)}
              value={this.state.criminalise_victims_value}
            >
              {criminaliseVictimsOptions}
            </select>
          </div>
        </div>
      )
    }
  }
}

export default Filters;