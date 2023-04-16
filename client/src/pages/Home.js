import CarouselComponent from "../components/Carousel";

const Home = () => {

    return (
        <div className="container" style={{backgroundImage: 'client\src\pages\bg12.jpg', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            {/* Replace 'your-image-url.jpg' with the URL or file path of your desired image */}
            <CarouselComponent />
        </div>
    );
}

export default Home;
