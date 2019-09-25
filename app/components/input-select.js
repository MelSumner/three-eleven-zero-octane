import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class InputSelectComponent extends Component {
  selectId = 'select-' + guidFor(this); 

  selectOptions = ['optionOne', 'optionTwo', 'optionThree'];
}