import { servicesData } from './src/data/services';
console.log('Total services:', servicesData.length);
servicesData.forEach((s, i) => {
  if (!s) {
    console.log('Index', i, 'is undefined or null');
  } else if (!s.slug) {
    console.log('Index', i, 'has no slug:', s);
  }
});
