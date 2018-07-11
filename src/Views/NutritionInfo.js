import React, { Component } from 'react';
import { debounce } from 'lodash';
import { 
    Col,
    CardPanel,
    CardTitle, 
    Row,
    Autocomplete,
   } from 'react-materialize';

import NutritionFacts from './NutritionFacts';

class MyNutritionInfo extends Component {
  state = {
    BMI: 'Calculated BMI',
    Height: 0,
    Weight: 0,
    Sex: 'Male',
    LoseWeightCardDisplay: '',
    GainWeightCardDisplay: '',
    GainMuscleMassCardDisplay: '',
    GainMuscleMassRadio: 'checked',
    searchTerm: '',
    searchData: {},
    responses: [],
    nutrients: null,
    display: 'hidden',
    listOfFoods: [],
  }


searchingForFood = debounce((event) => {
    this.setState({
        searchTerm: event.target.value
    })
    this.autocomplete()
  }, 500)

  autocomplete(){
    fetch(`https://api.nutritionix.com/v1_1/search/${this.state.searchTerm}?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=089440e9&appKey=ed454587e1d4c8fd1a342baa62633e61`)
    .then((req)=> req.json())
    .then((response) => {
        const searchData = {}
        response.hits.forEach(hit => searchData[hit.fields.item_name] = null)
        this.setState({searchData, responses:response.hits})
    })
  }
  showFacts = (itemName) => {
      const clickedItem = this.state.responses.find(item => itemName.toLowerCase() === item.fields.item_name.toLowerCase())
      const itemID = clickedItem.fields.item_id
    this.setState({
        clickedItem,
        itemID,
        listOfFoods: [...this.state.listOfFoods, clickedItem],
    })
    this.getIndividualFacts(itemID)
  }
  getIndividualFacts = (itemID) => {
    fetch(`https://api.nutritionix.com/v1/item/${itemID}?appId=089440e9&appKey=ed454587e1d4c8fd1a342baa62633e61`)
    .then((req)=> req.json())
    .then((response)=>
    {
        this.setState({nutrients: response})
    })
    
  }

render() {
    console.log(this.state.listOfFoods)
    return (
      <main className='main' id='main' style={{paddingTop: '2%'}}>
        <Row>
          <Col s={4} id='DropdownFoods' style = {{display: this.state.GainWeightCardDisplay}}>
            <Row>
                <Autocomplete onAutocomplete={this.showFacts} onChange={(e) => {
                    e.persist()
                    this.searchingForFood(e)
                }}
                    title='Food'
                    data = {
                        this.state.searchData
                    }
                />
            </Row>
            {this.state.nutrients ? <NutritionFacts nutrients = {this.state.nutrients}/> : ''}

          </Col>

          <Col s={4} id='LoseWeightCard' style = {{display: this.state.LoseWeightCardDisplay}}>
            <CardPanel className="teal lighten-4 black-text">
              {<CardTitle image='https://i.gifer.com/7hhR.gif'><br/>Tips To Lose Weight Placeholder</CardTitle>}
              {this.state.listOfFoods.map(item => item.fields.item_name)}
            </CardPanel>
          </Col>
        </Row>
     </main>
    );
  }
}

export default MyNutritionInfo;