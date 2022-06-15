import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selected:
      {
        id: {
          videoId: ''
        },
        snippet: {
          thumbnails: {
            default: {
              url: ''
            }
          },
          title: '',
          description: ''
        }
      }
    };

    this.onSearch = this.onSearch.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.onSearch('');
  }

  onSearch(query) {
    searchYouTube(query, (data) => {
      this.setState({
        videos: data,
        selected: data[0]
      });
    });
  }

  onSelect(video) {
    this.setState({
      selected: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search onSearch={this.onSearch}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.selected} /></div>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onSelect={this.onSelect}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
