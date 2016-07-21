import { ElasticDashPage } from './app.po';

describe('elastic-dash App', function() {
  let page: ElasticDashPage;

  beforeEach(() => {
    page = new ElasticDashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
