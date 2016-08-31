import { AngularwithreduxPage } from './app.po';

describe('angularwithredux App', function() {
  let page: AngularwithreduxPage;

  beforeEach(() => {
    page = new AngularwithreduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
