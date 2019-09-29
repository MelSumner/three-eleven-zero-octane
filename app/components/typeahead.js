import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class TypeaheadComponent extends Component {
  inputId = 'typeaheadInput-' + guidFor(this); 
  comboboxId = 'combobox-' + guidFor(this);
  listboxId = 'listbox-' + guidFor(this);
  labelId = 'label-' + guidFor(this);


  listboxOptions = [ 
    // options here 
  ];

  listboxOptions = [
    'Apple',
    'Artichoke',
    'Asparagus',
    'Banana',
    'Beets',
    'Bell pepper',
    'Broccoli',
    'Brussels sprout',
    'Cabbage',
    'Carrot',
    'Cauliflower',
    'Celery',
    'Chard',
    'Chicory',
    'Corn',
    'Cucumber',
    'Daikon',
    'Date',
    'Edamame',
    'Eggplant',
    'Elderberry',
    'Fennel',
    'Fig',
    'Garlic',
    'Grape',
    'Honeydew melon',
    'Iceberg lettuce',
    'Jerusalem artichoke',
    'Kale',
    'Kiwi',
    'Leek',
    'Lemon',
    'Mango',
    'Mangosteen',
    'Melon',
    'Mushroom',
    'Nectarine',
    'Okra',
    'Olive',
    'Onion',
    'Orange',
    'Parship',
    'Pea',
    'Pear',
    'Pineapple',
    'Potato',
    'Pumpkin',
    'Quince',
    'Radish',
    'Rhubarb',
    'Shallot',
    'Spinach',
    'Squash',
    'Strawberry',
    'Sweet potato',
    'Tomato',
    'Turnip',
    'Ugli fruit',
    'Victoria plum',
    'Watercress',
    'Watermelon',
    'Yam',
    'Zucchini'
  ];
}