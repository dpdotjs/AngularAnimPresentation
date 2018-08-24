import { AnimPlanePage } from './app.po';

describe('anim-plane App', function() {
  let page: AnimPlanePage;

  beforeEach(() => {
    page = new AnimPlanePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
