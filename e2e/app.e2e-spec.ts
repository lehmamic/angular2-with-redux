import { AngularwithreactPage } from './app.po';

describe('angularwithreact App', function() {
  let page: AngularwithreactPage;

  beforeEach(() => {
    page = new AngularwithreactPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
