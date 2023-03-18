import Main from "../Main.jsx"
import Row from "../row.jsx"
import Request from "../../Request";
const Home = () => {
    return(
        <>
          <Main></Main>
            <Row rowID='1' title="Upcoming" fetchURL={Request.requestUpcoming}></Row>
            <Row rowID='2' title="Popular" fetchURL={Request.requestPopular} ></Row>
            <Row rowID='3' title="TopRated" fetchURL={Request.requestTopRated}></Row>
            <Row rowID='4' title="Trending" fetchURL={Request.requestTrending}></Row>
        </>
    );
}
export default Home