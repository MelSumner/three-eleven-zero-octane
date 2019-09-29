import Component from '@glimmer/component';

export default class NavbarComponent extends Component {
  navLinks = [{
    "href": '/alpha',
    "name": 'Alpha'
  }, {
    "href": '/bravo',
    "name": 'Bravo'
  }];
}
