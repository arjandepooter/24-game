import React, { Component } from 'react';
import { connect } from 'react-redux';
import Display from '../components/display';
import Number from '../components/number';
import Operator from '../components/operator';
import { addInput, startGame } from '../actions';
import {
  isInputValid,
  operators,
  PLUS,
  MINUS,
  MULTIPLY,
  DIVIDE,
  BRACKET_OPEN,
  BRACKET_CLOSE,
  generateNumbers,
} from '../game';


class Game extends Component {
  componentWillMount() {
    this.props.startGame(generateNumbers());
  }

  onOperator(operator) {
    if (this.isOperatorValid(operator)) {
      this.props.addInput(operator);
    }
  }

  onNumber(number) {
    if (this.isNumberValid(number)) {
      this.props.addInput(number);
    }
  }

  isNumberValid(number) {
    const prevInput = this.props.game.input.slice(-1).pop();

    return (
      typeof prevInput !== 'number'
      && prevInput !== BRACKET_CLOSE
      && this.props.game.numbers.filter(n => n === number).length
         > this.props.game.input.filter(n => n === number).length
    );
  }

  isOperatorValid(operator) {
    const prevInput = this.props.game.input.slice(-1).pop();
    const numberOfOpenBrackets = this.props.game.input.filter(n => n === BRACKET_OPEN).length;
    const numberOfCloseBrackets = this.props.game.input.filter(n => n === BRACKET_CLOSE).length;

    switch (operator) {
      case PLUS:
      case MINUS:
      case MULTIPLY:
      case DIVIDE:
        return typeof prevInput === 'number' || prevInput === BRACKET_CLOSE;
      case BRACKET_OPEN:
        return typeof prevInput !== 'number' && prevInput !== BRACKET_CLOSE;
      case BRACKET_CLOSE:
        return (
          (typeof prevInput === 'number' || prevInput === BRACKET_CLOSE)
          && numberOfOpenBrackets > numberOfCloseBrackets
        );
      default:
        return false;
    }
  }

  renderNumbers() {
    return this.props.game.numbers.map((number, idx) => (
      <div className="col-xs-6" key={idx}>
        <Number
          onClick={n => this.onNumber(n)}
          number={number}
          isEnabled={!this.props.isValid && this.isNumberValid(number)}
        />
      </div>
    ));
  }

  renderOperators() {
    return operators.map((operator, idx) => (
      <div className="col-xs-4" key={idx}>
        <Operator
          onClick={n => this.onOperator(n)}
          operator={operator}
          isEnabled={!this.props.isValid && this.isOperatorValid(operator)}
        />
      </div>
    ));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Display
              input={this.props.game.input}
              isValid={this.props.isValid}
            />
          </div>
        </div>
        <div className="row">
          {this.renderNumbers()}
          {this.renderOperators()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  game: state.game,
  isValid: isInputValid(state.game.input),
});
const mapDispatchToProps = { addInput, startGame };

export default connect(mapStateToProps, mapDispatchToProps)(Game);
