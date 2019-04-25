import feedCataDog from '../src/feed-catadog.js';

const test = QUnit.test;
    
test('put donut into caterpillar dog', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const donutName = 'blue-donut';
    const mockCaterpillarDog = document.createElement('div');
    const expected = '<span class="part blue-donut"></span>';

    //Act 
    // Call the function you're testing and set the result to a const
    feedCataDog(mockCaterpillarDog, donutName);
    //Assert
    const parentInnerHTML = mockCaterpillarDog.innerHTML;
    assert.equal(parentInnerHTML, expected);
});