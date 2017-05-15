import { JavascriptGamePage } from './app.po';

describe('javascript-game App', () => {
  let page: JavascriptGamePage;

  beforeEach(() => {
    page = new JavascriptGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
