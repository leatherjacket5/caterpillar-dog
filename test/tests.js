const test = QUnit.test;
    
function feedCataDog(mockCaterpillarDog, donutName) {
    const span = document.createElement('span');
    span.classList.add('part');
    span.classList.add(donutName);

    mockCaterpillarDog.appendChild(span);
}

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