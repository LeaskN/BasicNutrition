import React, { Component } from 'react';

import { 
    Row,
    Col,
   } from 'react-materialize';

class NutritionFacts extends Component {
    render() {
        const {nutrients} = this.props
        return (
            <Row>
                <Col s={4} id='GainWeightCard'>
                <section className="nutritionCard">
                <header className="nutritionCard-header">
                    <h1 className="nutritionCard-title">Nutrition Facts</h1>
                    <p>Serving Size {nutrients.nf_serving_weight_grams} grams</p>
                    <p>Serving Per Container {nutrients.nf_serving_weight_grams}</p>
                </header>
                <table className="nutritionCard-table">
                    <thead>
                    <tr>
                        <th colSpan="3" className="small-info">
                        Amount Per Serving
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th colSpan="2">
                        <b>Calories </b>
                        {nutrients.nf_calories}
                        </th>
                        <td>
                        Calories from Fat 
                        {' ' + nutrients.nf_calories_from_fat}
                        </td>
                    </tr>
                    <tr className="thick-row">
                        <td colSpan="3" className="small-info">
                        <b>% Daily Value*</b>
                        </td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                        <b>Total Fat </b>
                        {' ' + nutrients.nf_total_fat}g
                        </th>
                        <td>
                        <b>{(Math.round(nutrients.nf_total_fat)/65).toFixed(2)*100}%</b>
                        </td>
                    </tr>
                    <tr>
                        <td className="blank-cell">
                        </td>
                        <th>
                        Saturated Fat
                        {' ' + nutrients.nf_saturated_fat}g
                        </th>
                        <td>
                        <b>{(Math.round(nutrients.nf_saturated_fat)/41).toFixed(2)*100}%</b>
                        </td>
                    </tr>
                    <tr>
                        <td className="blank-cell">
                        </td>
                        <th>
                        Trans Fat
                        {' ' + nutrients.nf_trans_fatty_acid}g
                        </th>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                        <b>Cholesterol </b>
                        {' ' + nutrients.nf_cholesterol}
                        </th>
                        <td>
                        <b>{(Math.round(nutrients.nf_cholesterol)/305).toFixed(2)*100}%</b>
                        </td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                        <b>Sodium </b>
                        {' ' + nutrients.nf_sodium}mg
                        </th>
                        <td>
                        <b>{(Math.round(nutrients.nf_sodium)/2400).toFixed(2)*100}%</b>
                        </td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                        <b>Total Carbohydrate </b>
                        {' ' + nutrients.nf_total_carbohydrate}g
                        </th>
                        <td>
                        <b>{(Math.round(nutrients.nf_total_carbohydrate)/265).toFixed(2)*100}%</b>
                        </td>
                    </tr>
                    <tr>
                        <td className="blank-cell">
                        </td>
                        <th>
                        Dietary Fiber
                        {' ' + nutrients.nf_dietary_fiber}g
                        </th>
                        <td>
                        <b>{(Math.round(nutrients.nf_dietary_fiber)/25).toFixed(2)*100}%</b>
                        </td>
                    </tr>
                    <tr>
                        <td className="blank-cell">
                        </td>
                        <th>
                        Sugars
                        {' ' + nutrients.nf_sugars}g
                        </th>
                        <td>
                        </td>
                    </tr>
                    <tr className="thick-end">
                        <th colSpan="2">
                        <b>Protein </b>
                        {' ' + nutrients.nf_protein}g
                        </th>
                        <td>
                        </td>
                    </tr>
                    </tbody>
                    </table>
                
                <table className="nutritionCard-table--grid">
                    <tbody>
                    <tr>
                        <td colSpan="2">
                        Vitamin A
                        {' ' + nutrients.nf_vitamin_a_dv}%
                        </td>
                        <td>
                        Vitamin C
                        {' ' + nutrients.nf_vitamin_c_dv}%
                        </td>
                    </tr>
                    <tr className="thin-end">
                        <td colSpan="2">
                        Calcium
                        {' ' + nutrients.nf_calcium_dv}%
                        </td>
                        <td>
                        Iron
                        {' ' + nutrients.nf_iron_dv}%
                        </td>
                    </tr>
                    </tbody>
                </table>
                
                <p className="small-info">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs:</p>
                
                <table className="nutritionCard-table--small small-info">
                    <thead>
                    <tr>
                        <td colSpan="2"></td>
                        <th>Calories:</th>
                        <th>2,000</th>
                        <th>2,500</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th colSpan="2">Total Fat</th>
                        <td>Less than</td>
                        <td>65g</td>
                        <td>80g</td>
                    </tr>
                    <tr>
                        <td className="blank-cell"></td>
                        <th>Saturated Fat</th>
                        <td>Less than</td>
                        <td>20g</td>
                        <td>25g</td>
                    </tr>
                    <tr>
                        <th colSpan="2">Cholesterol</th>
                        <td>Less than</td>
                        <td>300mg</td>
                        <td>300 mg</td>
                    </tr>
                    <tr>
                        <th colSpan="2">Sodium</th>
                        <td>Less than</td>
                        <td>2,400mg</td>
                        <td>2,400mg</td>
                    </tr>
                    <tr>
                        <th colSpan="3">Total Carbohydrate</th>
                        <td>300g</td>
                        <td>375g</td>
                    </tr>
                    <tr>
                        <td className="blank-cell"></td>
                        <th colSpan="2">Dietary Fiber</th>
                        <td>25g</td>
                        <td>30g</td>
                    </tr>
                    </tbody>
                </table>
                
                <p className="small-info">
                    Calories per gram:
                </p>
                <p className="small-info text-center">
                    Fat 9
                    &bull;
                    Carbohydrate 4
                    &bull;
                    Protein 4
                </p>
                </section>
                </Col>
            </Row>
     );
    }
  }
  
  export default NutritionFacts;