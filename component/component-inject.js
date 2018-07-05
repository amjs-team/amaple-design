// Component.inject可让一个页面中多个有相同props的相同组件得到重用，而不用每个地方使用时都单独传入相同的props.
const TimelineMotion = import ("./Component");
const FadeTimelineMotion = am.inject (TimelineMotion, {
    name: "fade",
    duration: {
        enter: 2000,
        leave: 3000
    }
});