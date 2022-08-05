type Currency = 'EUR' | 'HUF';
type Color = 'white' | 'black' | 'grey' | 'red' | 'green' | 'blue' | 'yellow';
type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface SearchListItemInterface {
  id: string;
  title: string;
  cost: {
    currency: Currency;
    value: number;
  }
  imageUrls: Array<string>;
  colors: Array<Color>;
  sizes: Array<Sizes>;
}
