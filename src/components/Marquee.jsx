import FlowingMenu from "./FlowingMenu"

const demoItems = [
    { text: 'Skills', image: 'https://picsum.photos/600/400?random=3' },
    { text: 'Consistency', image: 'https://picsum.photos/600/400?random=1' },
    { text: 'Expert', image: 'https://picsum.photos/600/400?random=4' },
    { text: 'Scalable', image: 'https://picsum.photos/600/400?random=2' },
];

const Marquee = () => {
    return (
        <div id="" className="relative h-screen">
            <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-gradient-to-l from-white to-violet-600 blur-3xl"></div>
            <div className="absolute top-10 right-0 w-1/6 h-1/2 bg-gradient-to-br from-white to-yellow-300 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-gradient-to-br from-white to-green-400 blur-3xl"></div>
            <FlowingMenu items={demoItems} />
        </div>
    )
}

export default Marquee