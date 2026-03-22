import InfiniteSlider from './infiniteSlider.js';

var sliderConfig = {
    sliderControls: {
        autoStart: true, // set to "true" if the slider should run automatically
        moveDirection: 'left', // left or right
        step: 0.5, // how far you want to move with each interval step
        intervalTime: 10, // the interval amount of the movement in milliseconds
        developmentMode: false, // if you want to see borders for easier debugging
    },
    outerContainer: {
        selector: '.inf-slider__outer-container', // where you want to insert the slider
        height: 400, // height of parent container
        margin: '0 auto', // margin of parent container
        padding: 20, // padding of parent container
        maxWidth: 1500, // max width of parent container
        background: 'inherit', // background color of parent container
        sideGradientRGB: '230,216,192', // // gradient at the sides of parent container - format: 255/255/255
    },
    title: {
        text: '', // title
        fontSize: 74, // font size
        fontFamily: "'Open Sans', sans-serif", // font-type - 'Open Sans' by default
        colorCode: '#333', // text color
        textAlign: 'center', // text alignment
        padding: 25, // text padding
    },
    elements: {
        width: 250, // elements width
        margin: 20, // elements margin
        padding: 0, // elements padding
        background: 'inherit', // elements background color
        color: '#333', // text color (if you display text)
        items:
        // array of items, containing the link to an image and/or text content
        [
            {src: '/assets/Images/Brands/Odraz.png', content: '1'},
            {src: '/assets/Images/Brands/Milo.png', content: '2'},
            {src: '/assets/Images/Brands/WWNW.png', content: '3'},
            {src: '/assets/Images/Brands/Gemeente Amsterdam.png', content: '4'},
            {src: '/assets/Images/Brands/Praxis.png', content: '5'},
            {src: '/assets/Images/Brands/VTi.png', content: '6'},
            {src: '/assets/Images/Brands/H&P.png', content: '7'},
            {src: '/assets/Images/Brands/UniqueNL.png', content: '8'},
            {src: '/assets/Images/Brands/Growgo.png', content: '9'},
            {src: '/assets/Images/Brands/Visma.png', content: '10'},
            {src: '/assets/Images/Brands/BigBrother.png', content: '11'},
            {src: '/assets/Images/Brands/New10.png', content: '12'},
        ]
    }
}

var logoSlider = new InfiniteSlider(sliderConfig);
