import SavedShows from "./SavedShows.jsx"
const Account = () => {
    return(
        <>
            <div className="w-full text-white">
                <img className="absolute w-screen h-[400px] object-cover"
                     src="https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/2e1414e3-cdae-473f-af07-31f9b74741f6/IN-en-20230130-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                     alt="/">
                </img>
                <div className="bg-black/40 fixed  top-0 left-0 w-full h-[550px]"></div>
                <div className="absolute p-4 md:p-8 top-[20%]">
                    <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
                </div>
            </div>
            <SavedShows></SavedShows>
        </>
    )
}
export default Account