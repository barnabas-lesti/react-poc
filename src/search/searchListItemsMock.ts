import { SearchListItemInterface } from './SearchListItemInterface';

export const searchListItemsMock: Array<SearchListItemInterface> = [
  {
    id: '1',
    title: 'Calvin Klein T-shirt',
    cost: {
      currency: 'EUR',
      value: 13.99,
    },
    imageUrls: [
      'https://cdn.aboutstatic.com/file/b3252910cdab4e53cde6585cdff8789f?bg=F4F4F5&quality=75&height=400',
      'https://cdn.aboutstatic.com/file/a2f42b7b740d06977aedd52028e87e5e?quality=75&height=400',
    ],
    colors: ['red', 'green', 'blue', 'yellow', 'white', 'black', 'grey'],
    sizes: ['XS', 'S', 'M']
  },
  {
    id: '2',
    title: 'EDITED',
    cost: {
      currency: 'EUR',
      value: 15.99,
    },
    imageUrls: [
      'https://cdn.aboutstatic.com/file/images/f19c6e4691a964839426fa2621fc5cb8.png?bg=F4F4F5&quality=75&height=400',
    ],
    colors: ['white', 'black', 'grey', 'red'],
    sizes: ['S', 'M']
  }
];
