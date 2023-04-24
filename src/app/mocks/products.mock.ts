import { Observable, of } from 'rxjs';
import { Product } from '../core/models/product';

export const mockProducts = [
  {
    id: 71,
    title: 'Generic Granite Chair',
    price: 763,
    description:
      'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    images: [
      'https://api.lorem.space/image?w=640&h=480&r=2092',
      'https://api.lorem.space/image?w=640&h=480&r=8016',
      'https://api.lorem.space/image?w=640&h=480&r=529',
    ],
    creationAt: '2023-01-20T04:15:13.000Z',
    updatedAt: '2023-01-20T04:15:13.000Z',
    category: {
      id: 5,
      name: 'Others',
      image: 'https://api.lorem.space/image?w=640&h=480&r=8733',
      creationAt: '2023-01-20T04:15:12.000Z',
      updatedAt: '2023-01-20T04:15:12.000Z',
    },
  },
  {
    id: 101,
    title: 'Generic Plastic Shoes',
    price: 254,
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    images: [
      'https://api.lorem.space/image/furniture?w=640&h=480&r=7767',
      'https://api.lorem.space/image/furniture?w=640&h=480&r=7918',
      'https://api.lorem.space/image/furniture?w=640&h=480&r=550',
    ],
    creationAt: '2023-01-20T04:15:13.000Z',
    updatedAt: '2023-01-20T04:15:13.000Z',
    category: {
      id: 3,
      name: 'Furniture',
      image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=203',
      creationAt: '2023-01-20T04:15:12.000Z',
      updatedAt: '2023-01-20T04:15:12.000Z',
    },
  },
  {
    id: 106,
    title: 'Generic Fresh Towels',
    price: 369,
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    images: [
      'https://api.lorem.space/image/fashion?w=640&h=480&r=2332',
      'https://api.lorem.space/image/fashion?w=640&h=480&r=3838',
      'https://api.lorem.space/image/fashion?w=640&h=480&r=5409',
    ],
    creationAt: '2023-01-20T04:15:13.000Z',
    updatedAt: '2023-01-20T04:15:13.000Z',
    category: {
      id: 1,
      name: 'Clothes',
      image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=1849',
      creationAt: '2023-01-20T04:15:12.000Z',
      updatedAt: '2023-01-20T04:15:12.000Z',
    },
  },
  {
    id: 122,
    title: 'Generic Bronze Mouse',
    price: 876,
    description: 'The Football Is Good For Training And Recreational Purposes',
    images: [
      'https://api.lorem.space/image?w=640&h=480&r=6784',
      'https://api.lorem.space/image?w=640&h=480&r=629',
      'https://api.lorem.space/image?w=640&h=480&r=9424',
    ],
    creationAt: '2023-01-20T04:15:13.000Z',
    updatedAt: '2023-01-20T04:15:13.000Z',
    category: {
      id: 5,
      name: 'Others',
      image: 'https://api.lorem.space/image?w=640&h=480&r=8733',
      creationAt: '2023-01-20T04:15:12.000Z',
      updatedAt: '2023-01-20T04:15:12.000Z',
    },
  },
  {
    id: 127,
    title: 'Generic Concrete Computer',
    price: 422,
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    images: [
      'https://api.lorem.space/image/fashion?w=640&h=480&r=5596',
      'https://api.lorem.space/image/fashion?w=640&h=480&r=1417',
      'https://api.lorem.space/image/fashion?w=640&h=480&r=445',
    ],
    creationAt: '2023-01-20T04:15:13.000Z',
    updatedAt: '2023-01-20T04:15:13.000Z',
    category: {
      id: 1,
      name: 'Clothes',
      image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=1849',
      creationAt: '2023-01-20T04:15:12.000Z',
      updatedAt: '2023-01-20T04:15:12.000Z',
    },
  },
  {
    id: 153,
    title: 'Generic Metal Keyboard',
    price: 796,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    images: [
      'https://api.lorem.space/image/fashion?w=640&h=480&r=8858',
      'https://api.lorem.space/image/fashion?w=640&h=480&r=5355',
      'https://api.lorem.space/image/fashion?w=640&h=480&r=6083',
    ],
    creationAt: '2023-01-20T04:15:13.000Z',
    updatedAt: '2023-01-20T04:15:13.000Z',
    category: {
      id: 1,
      name: 'Clothes',
      image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=1849',
      creationAt: '2023-01-20T04:15:12.000Z',
      updatedAt: '2023-01-20T04:15:12.000Z',
    },
  },
];

export class MockProductsApiService {
  public getProductsByFilters(): Observable<Product[]> {
    return of(mockProducts);
  }

  public getProduct(): Observable<Product> {
    return of(mockProducts[0]);
  }
}
