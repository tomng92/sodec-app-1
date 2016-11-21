import { SodecApp1Page } from './app.po';

describe('sodec-app-1 App', function() {
  let page: SodecApp1Page;

  beforeEach(() => {
    page = new SodecApp1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
