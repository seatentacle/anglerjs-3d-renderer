import App from './index';

const widgets = [{
  title: 'Hello, Angler.js!',
  Component: App,
  useCase: [{
    title: '3d Renderer',
    description: 'React-based renderer for 3d dungeon',
    paths: ['/', 'index.html', 'stories.html'],
  }],
}];

export default widgets;
