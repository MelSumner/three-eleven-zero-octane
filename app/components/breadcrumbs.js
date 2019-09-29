import Component from '@glimmer/component';

export default class BreadcrumbsComponent extends Component {
  breadcrumbs = [{
    "route": '/alpha',
    "name": 'Alpha'
  }, {
    "route": '/bravo',
    "name": 'Bravo'
  }];
}
