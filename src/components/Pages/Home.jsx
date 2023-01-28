import Main from "../Main.jsx"
import Row from "../row.jsx"
import Request from "../../Request";
const Home = () => {
    return(
        <>
          <Main></Main>
            <Row title="Upcoming" fetchURL={Request.requestUpcoming} ></Row>
            <Row title="Popular" fetchURL={Request.requestPopular} ></Row>
            <Row title="TopRated" fetchURL={Request.requestTopRated} ></Row>
            <Row title="Recommended" fetchURL={Request.requestRecommended} ></Row>
        </>
    );
}
export default Home