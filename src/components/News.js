import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
    static defaultProps = {
        country: "",
        pagesize: 3,
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string,
        page: PropTypes.number,
    }
    articles = [
        // {
        //     "source": {
        //         "id": "medical-news-today",
        //         "name": "Medical News Today"
        //     },
        //     "author": "Robby Berman",
        //     "title": "Could beet juice and other nitrate-rich foods make muscles stronger?",
        //     "description": "A recent study suggests that nitrates can help increase muscle strength. Why might that be, and what are the potential pitfalls?",
        //     "url": "http://www.medicalnewstoday.com/articles/could-beet-juice-and-other-nitrate-rich-foods-make-muscles-stronger",
        //     "urlToImage": "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2023/01/beet-juice-glass-muscles-732x549-thumbnail.jpg",
        //     "publishedAt": "2023-01-31T17:10:00Z",
        //     "content": "<ul><li>A new study finds that consuming dietary nitrates before exercise can enhance the amount of force that quadricep muscles can produce.</li><li>Biopsies of study participants revealed that the … [+5818 chars]"
        // },
        // {
        //     "source": {
        //         "id": "abc-news",
        //         "name": "ABC News"
        //     },
        //     "author": "JONEL ALECCIA AP Health Writer",
        //     "title": "FDA revamping foods program to move past ‘constant turmoil’",
        //     "description": "The head of the Food and Drug Administration has announced an overhaul of the agency's food safety and nutrition division",
        //     "url": "https://abcnews.go.com/US/wireStory/fda-revamping-foods-program-move-past-constant-turmoil-96792084",
        //     "urlToImage": "https://s.abcnews.com/images/US/wirestory_963a3e590c1055f8be3132f237ad5108_12x5_992.jpg",
        //     "publishedAt": "2023-01-31T16:06:11Z",
        //     "content": "The head of the Food and Drug Administration on Tuesday announced an overhaul of the agencys food safety and nutrition division, vowing that a new structure will better protect consumers and the U.S.… [+3930 chars]"
        // },
        // {
        //     "source": {
        //         "id": "the-wall-street-journal",
        //         "name": "The Wall Street Journal"
        //     },
        //     "author": "Jaewon Kang",
        //     "title": "Whole Foods Asks Suppliers to Lower Prices",
        //     "description": "Grocery chain says it wants price tags to reflect easing inflation",
        //     "url": "https://www.wsj.com/articles/whole-foods-asks-suppliers-to-lower-prices-as-costs-ebb-11675115155?mod=hp_lead_pos3",
        //     "urlToImage": "https://images.wsj.net/im-712359/social",
        //     "publishedAt": "2023-01-31T12:00:00Z",
        //     "content": null
        // },
        // {
        //     "source": {
        //         "id": "the-washington-post",
        //         "name": "The Washington Post"
        //     },
        //     "author": "Jessica Wapner",
        //     "title": "The link between our food, gut microbiome and depression",
        //     "description": "A new study takes an important step forward in understanding the link between the gut bacteria, what we eat and how we feel",
        //     "url": "https://www.washingtonpost.com/wellness/2023/01/31/gut-microbiome-anxiety-depression/",
        //     "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YNNESNYOOJF7FFUBMLKAV4YRTI.jpg&w=1440",
        //     "publishedAt": "2023-01-31T11:00:58Z",
        //     "content": "Comment on this story\r\nResearch has long suggested a link between our diet and our mental health. The gut microbiome the collective genome of trillions of bacteria that live in the intestinal tract t… [+8103 chars]"
        // },
        // {
        //     "source": {
        //         "id": "abc-news-au",
        //         "name": "ABC News (AU)"
        //     },
        //     "author": "Sam Bradbrook",
        //     "title": "Colourful phytoplankton bloom grows off South Australian coast, providing food for ocean life",
        //     "description": "They are microscopic in size on their own, but groups of brightly coloured organisms are currently putting on a light show off South Australia's coast that can be seen from space.",
        //     "url": "http://www.abc.net.au/news/2023-01-31/phytoplankton-blooms-south-australia-seen-from-space/101910470",
        //     "urlToImage": "https://live-production.wcms.abc-cdn.net.au/d8f863f2b703fa23af6fc4df59fbd221?impolicy=wcms_crop_resize&cropH=1080&cropW=1920&xPos=0&yPos=0&width=862&height=485",
        //     "publishedAt": "2023-01-31T04:16:48Z",
        //     "content": "They are microscopic in size on their own, but groups of brightly coloured organisms are currently putting on a light show off South Australia's coast which can be seen from space.    \r\nKey points:\r\n… [+2954 chars]"
        // },
        // {
        //     "source": {
        //         "id": "new-scientist",
        //         "name": "New Scientist"
        //     },
        //     "author": null,
        //     "title": "US proposes to ease blood donor restrictions on gay and bisexual men",
        //     "description": "The US Food and Drug Administration has proposed that blood donor assessments measure individual risk and do not exclude people based on their sexual orientation or gender",
        //     "url": "https://www.newscientist.com/article/2356842-us-proposes-to-ease-blood-donor-restrictions-on-gay-and-bisexual-men/",
        //     "urlToImage": "https://images.newscientist.com/wp-content/uploads/2023/01/30205513/SEI_142285830.jpg",
        //     "publishedAt": "2023-01-30T00:00:00Z",
        //     "content": "By Grace Wade\r\nThe US is proposing new rules that do not limit blood donation based on gender or sexual orientation\r\nBelish/Shutterstock\r\nOn 27 January, the US Food and Drug Administration (FDA) prop… [+3833 chars]"
        // },
        // {
        //     "source": {
        //         "id": "the-times-of-india",
        //         "name": "The Times of India"
        //     },
        //     "author": "Dipak K Dash",
        //     "title": "Government to provide 5 kg free food grains to poor for May & June",
        //     "description": "India News: The government on Friday announced to provide 5 kg free food grains to the poor for May and June 2021. This will cover nearly 80 crore beneficiaries u",
        //     "url": "http://timesofindia.indiatimes.com/india/government-to-provide-5-kg-free-food-grains-to-poor-for-may-june/articleshow/82213582.cms",
        //     "urlToImage": "https://static.toiimg.com/thumb/msid-82213583,width-1070,height-580,imgsize-1921513,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        //     "publishedAt": "2021-04-23T04:23:00Z",
        //     "content": null
        // }
    ]
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        console.log("This is constructor from News Component")
        this.state = {
            articles: this.articles,
            loading: true,
            page: 1,
            totalResults: 0,

        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewZing`
    }
    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=14e5aa9e8c0e47d096cebf7e898e60bf&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(40);
        let parsedData = await data.json();
        this.props.setProgress(70);
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        })
        this.props.setProgress(100);
    }


    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=14e5aa9e8c0e47d096cebf7e898e60bf&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData)
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // })
        this.updateNews();
    }
    handlePrevclick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=14e5aa9e8c0e47d096cebf7e898e60bf&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData)
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false,
        // })
        this.setState({ page: this.state.page - 1 })
        this.updateNews()
    }
    handleNextclick = async () => {
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))) {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=14e5aa9e8c0e47d096cebf7e898e60bf&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
        //     this.setState({ loading: true })
        //     let data = await fetch(url);
        //     let parsedData = await data.json();

        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parsedData.articles,
        //         loading: false,
        //     })
        // }
        this.setState({ page: this.state.page + 1 });
        this.updateNews();

    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=14e5aa9e8c0e47d096cebf7e898e60bf&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
        // this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
    };
    render() {

        return (

            <>
                <h2 className='d-flex justify-content-center' style={{marginTop:'60px'}}>NewZing - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length != this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className='row d-flex justify-content-center'>
                            {this.state.articles.map((element) => {

                                return <div className='col-md-3 mx-4 my-1' key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={!element.author || !element.publishedAt ? "" : element.author} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark mx-2" onClick={this.handlePrevclick}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>

                </div> */}


            </>
        )
    }
}

export default News