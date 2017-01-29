import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has class comment-box', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a textarea', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('Entering some text', () => {

    beforeEach(() => {
      component.find('textarea').simulate('change','New comment');
    });

    it('show the text in the textarea', ()=> {
      expect(component.find('textarea')).to.have.value('New comment');
    });

    it('when submitted clear the input', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
});
