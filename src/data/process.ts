import { ProcessStep } from '../types';

export const processData: ProcessStep[] = [
  {
    id: 'discover',
    number: '01',
    title: 'Discover & Align',
    description: 'We start by understanding your business, market position, and technical constraints to define clear, measurable objectives for the engagement.',
    order: 1,
  },
  {
    id: 'strategize',
    number: '02',
    title: 'Strategize & Architect',
    description: 'We map out the user journey, design the information architecture, and select the optimal technology stack to support your growth goals.',
    order: 2,
  },
  {
    id: 'design',
    number: '03',
    title: 'Design & Prototype',
    description: 'We create high-fidelity, interactive prototypes that establish the visual direction and user experience before writing a single line of code.',
    order: 3,
  },
  {
    id: 'develop',
    number: '04',
    title: 'Develop & Engineer',
    description: 'Our engineering team translates designs into a robust, accessible, and performant digital product using modern development practices.',
    order: 4,
  },
  {
    id: 'test',
    number: '05',
    title: 'Test & Optimize',
    description: 'Rigorous QA testing across devices and browsers ensures performance, accessibility compliance, and flawless functionality.',
    order: 5,
  },
  {
    id: 'launch',
    number: '06',
    title: 'Launch & Scale',
    description: 'We handle the deployment seamlessly and provide ongoing support, analytics monitoring, and iteration to maximize ROI.',
    order: 6,
  },
];
