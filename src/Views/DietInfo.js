import React, { Component } from 'react';

import { 
    Row,
    Col,
    CardPanel,
    CardTitle, 
    Input,
    Button,
   } from 'react-materialize';

class DietInfo extends Component {
  state = {
    BMI: 'Calculated BMI',
    Height: 0,
    Weight: 0,
    Sex: 'Male',
    LoseWeightCardDisplay: 'none',
    GainWeightCardDisplay: 'none',
    GainMuscleMassCardDisplay: 'none',
    GainMuscleMassRadio: 'checked',
  }

  valueChanged = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

 calculateBMI = (event) => {
   console.log(event)
  this.setState({
    BMI: 703*(this.state.Weight/(this.state.Height * this.state.Height))
  });
}
  showTips = (event) => {
    console.log(event.target.value+'Card')
    if(event.target.value+'Card'==='LoseWeightCard'){
      this.setState({
        LoseWeightCardDisplay: '',
        GainWeightCardDisplay: 'none',
        GainMuscleMassCardDisplay: 'none'
      });
    } else if(event.target.value+'Card'==='GainWeightCard'){
      this.setState({
        LoseWeightCardDisplay: 'none',
        GainWeightCardDisplay: '',
        GainMuscleMassCardDisplay: 'none'
      });
    } else if(event.target.value+'Card'==='GainMuscleMassCard'){
      this.setState({
        LoseWeightCardDisplay: 'none',
        GainWeightCardDisplay: 'none',
        GainMuscleMassCardDisplay: ''
      });
    }
    return;
  }

render() {
    return (
      <main className='main' id='main' style={{paddingTop: '2%'}}>
        <Row>
          <Col s={4}>
            <Row id='Inputs'>
              <Input onChange={this.valueChanged} id='Height' placeholder='Height' s={6} label="Height:" />
              <Input onChange={this.valueChanged} id='Weight' placeholder='Weight' s={6} label="Weight:" />
              <Input onChange={this.valueChanged} name='sex' type='radio' value='Male' label='Male' />
              <Input onChange={this.valueChanged} name='sex' type='radio' value='Female' label='Female' />
              <Input s={12} label="Calculated BMI:" disabled placeholder={this.state.BMI}/>
            </Row>
            <Button onClick={this.calculateBMI} waves='light'>Calculate BMI</Button>
          </Col>
          <Col s={4}>
            <Row id='Inputs'>
                <Input onClick={this.showTips} name='dietStyle' type='radio' value='LoseWeight' label='Lose Weight' />
                <Input onClick={this.showTips} name='dietStyle' type='radio' value='GainWeight' label='Gain Weight' />
                <Input onClick={this.showTips} name='dietStyle' type='radio' value='GainMuscleMass' label='Gain Muscle Mass' />
              </Row>
          </Col>
          <Col s={4} id='GainWeightCard' style = {{display: this.state.GainWeightCardDisplay}}>
            <CardPanel className="teal lighten-4 black-text">
              {/* {<CardTitle image='https://media.giphy.com/media/Xy2iikCuZ9li8/giphy.gif'><br/>Tips To Gain Weight</CardTitle>}                   */}
              {<CardTitle image='https://i.gifer.com/7hhR.gif'><br/>Tips To Gain Weight Placeholder</CardTitle>}
              1. Add healthy calories. You don’t need to drastically change your diet. You can increase calories by adding nut or seed toppings, cheese, and healthy side dishes. Try almonds, sunflower seeds, fruit, or whole-grain, wheat toast.<br/>
              2. Go nutrient dense. Instead of eating empty calories and junk food, eat foods that are rich in nutrients. Consider high-protein meats, which can help you to build muscle. Also, choose nutritious carbohydrates, such as brown rice and other whole grains. This helps ensure your body is receiving as much nourishment as possible, even if you’re dealing with a reduced appetite.<br/>
              3. Snack away. Enjoy snacks that contain plenty of protein and healthy carbohydrates. Consider options like trail mix, protein bars or drinks, and crackers with hummus or peanut butter. Also, enjoy snacks that contain “good fats,” which are important for a healthy heart. Examples include nuts and avocados.<br/>
              4. Eat mini-meals. If you’re struggling with a poor appetite, due to medical or emotional issues, eating large amounts of food may not seem appealing. Consider eating smaller meals throughout the day to increase your calorie intake.<br/>
              5. Bulk up. While too much aerobic exercise will burn calories and work against your weight goal, strength training can help. This includes weightlifting or yoga. You gain weight by building muscle.                
              </CardPanel>
          </Col>
          <Col s={4} id='LoseWeightCard' style = {{display: this.state.LoseWeightCardDisplay}}>
            <CardPanel className="teal lighten-4 black-text">
              {/* {<CardTitle image='https://img.buzzfeed.com/buzzfeed-static/static/2015-01/13/12/enhanced/webdr03/anigif_original-grid-image-9796-1421168722-30.gif?crop=362:239;0,16}'><br/>Tips To Lose Weight</CardTitle>} */}
              {<CardTitle image='https://i.gifer.com/7hhR.gif'><br/>Tips To Lose Weight Placeholder</CardTitle>}
              1. Eat a high-protein breakfast. <br/>
              2. Avoid sugary drinks and fruit juice. <br/>
              3. Drink water a half hour before meals. <br/>
              4. Choose weight loss-friendly foods (see list). <br/>
              5. Eat soluble fiber. <br/>
              6. Drink coffee or tea.<br/>
              7. Eat mostly whole, unprocessed foods. <br/>
              8. Eat your food slowly. <br/>
              9. Weigh yourself every day.<br/>
              10. Get a good night's sleep, every night.<br/>
            </CardPanel>
          </Col>
          
          
          <Col s={4} id='GainMuscleMassCard' style = {{display: this.state.GainMuscleMassCardDisplay}}>
            <CardPanel className="teal lighten-4 black-text">
              {<CardTitle image='https://i.gifer.com/7hhR.gif'><br/>Tips To Gain Muscle Mass</CardTitle>}
              1. Maximize muscle building.<br/>
              2. Eat meat.<br/>
              3. Eat more.<br/>
              4. Work your biggest muscles.<br/>
              5. But first, have a stiff drink.<br/>
              6. Lift every other day.<br/>
              7. Down the carbs after your workout.<br/>
              8. Eat something every 3 hours.<br/>
              9. Make one snack ice cream.<br/>
              10. Have some milk before bed.<br/>             
              </CardPanel>
          </Col>
        </Row>
      </main>
    );
  }
}

export default DietInfo;