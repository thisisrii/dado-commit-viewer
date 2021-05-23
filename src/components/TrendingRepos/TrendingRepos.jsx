import './trendingrepos.scss'

const TrendingRepos = ({ trending, onSelectTrendingRepo }) => {
    console.log('trending', trending);

    const handleTrendingButtonClick = (e) => {
        console.log('handleTrendingButtonClick', e.target);
        onSelectTrendingRepo(e.target.name)
    }

    const trendingButtons = trending.map((item) => {
        return (
            <button key={item.id} className="trending-button" name={item.full_name} link={item.url} onClick={handleTrendingButtonClick}>
                {item.full_name}
            </button>
        )
    })
    return (
        <div className="trending-container">
            {trendingButtons}
        </div>
    )
}

export default TrendingRepos;