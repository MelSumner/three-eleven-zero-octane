import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ButtonComponent extends Component {

	@action
	handleClick() {
    console.log('click!');
	}
}

		// if (this.args.action) {
		// 	this.args.action();
    // }