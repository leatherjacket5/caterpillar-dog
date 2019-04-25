function feedCataDog(mockCaterpillarDog, donutName) {
    const span = document.createElement('span');
    span.classList.add('part');
    span.classList.add(donutName);

    mockCaterpillarDog.appendChild(span);
}

export default feedCataDog;