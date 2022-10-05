import React, { useState } from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseUser,
  faEllipsis,
  faHashtag,
  faRetweet,
  faArrowUpFromBracket,
  faEarthAmericas,
} from '@fortawesome/free-solid-svg-icons';
import {
  faBell,
  faComment,
  faEnvelope,
  faHeart,
  faImage,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { feeds } from '../data/feeds';
import Feed from '../components/Feed';
import { AppContext } from '../context/AppContext';

const Dashboard = () => {
  let navigate = useNavigate();
  const [tweetText, setTweetText] = useState('');
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem('bird-app')).loggedIn
  );
  const [localState, setLocalState] = useState(() =>
    JSON.parse(localStorage.getItem('bird-app'))
  );

  if (!localState.hasOwnProperty('feed')) {
    setLocalState((current) => {
      return { ...current, feed: feeds };
    });
  }

  localStorage.setItem('bird-app', JSON.stringify(localState));

  function handleTweet() {
    if (tweetText.length > 0) {
      let currentFeeds = localState.feed;
      let currentTime = Date.now();
      let lastPostId = localState.feed[0].postId;

      let feedObj = {
        postId: lastPostId + 1,
        content: tweetText,
        user,
        createdOn: currentTime,
        updateOn: '',
      };

      currentFeeds.unshift(feedObj);

      setLocalState((current) => {
        return { ...current, feed: currentFeeds };
      });

      let updatedState = {
        ...localState,
        feed: currentFeeds,
      };
      localStorage.setItem('bird-app', JSON.stringify(localState));
      setTweetText('');
    }
  }

  function handleLogout() {
    let { loggedIn, ...rest } = localState;
    setLocalState((current) => {
      const { loggedIn, ...rest } = current;

      return rest;
    });
    localStorage.setItem('bird-app', JSON.stringify(rest));
    navigate('/login');
  }

  function handleFileChange(e) {
    console.log(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <AppContext.Provider
        value={{
          user,
          setUser,
          localState,
          setLocalState,
        }}
      >
        <div className="wrapper">
          <header>
            <div className="twitter-logo">
              <div className="twitter-right-top-logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="twitter-top-svg"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </div>
            </div>
            <div className="home-div">Home</div>
            <div className="search-div">
              <input
                type="search"
                placeholder="Search Twitter"
                className="search-input"
              />
            </div>
          </header>
          <div className="dashboard-container">
            <div className="list-links-div">
              <div className="nav-links">
                <div className="nav-link">
                  <div className="link-icon">
                    <FontAwesomeIcon icon={faHouseUser} size="lg" />
                  </div>
                  <div className="link-title">Home</div>
                </div>
                <div className="nav-link">
                  <div className="link-icon">
                    <FontAwesomeIcon icon={faHashtag} size="lg" />
                  </div>
                  <div className="link-title">Explore</div>
                </div>
                <div className="nav-link">
                  <div className="link-icon">
                    <FontAwesomeIcon icon={faBell} size="lg" />
                  </div>
                  <div className="link-title">Notifications</div>
                </div>
                <div className="nav-link">
                  <div className="link-icon">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  </div>
                  <div className="link-title">Messages</div>
                </div>
                <div className="nav-link">
                  <div className="link-icon">
                    <FontAwesomeIcon icon={faUser} size="lg" />
                  </div>
                  <div className="link-title">Profile</div>
                </div>
                <div className="nav-link">
                  <div className="link-icon">
                    <FontAwesomeIcon icon={faEllipsis} size="lg" />
                  </div>
                  <div className="link-title">More</div>
                </div>
              </div>
              <div className="tweets-btn-div">
                <div className="login-btn tweet-btn">Tweet</div>
              </div>
              <div className="profile-btn-div">
                <div className="about-profile">
                  <div className="follow-profile-pic">
                    <img src={user.profilePic} alt="profile picture" />
                  </div>
                  <div className="about-profile-div">
                    <div>{user.name}</div>
                    <div className="follow-username">@{user.username}</div>
                  </div>
                  <div className="three-dots">
                    <div className="link-icon">
                      <FontAwesomeIcon icon={faEllipsis} size="lg" />
                    </div>
                  </div>
                </div>
                <div className="tweets-btn-div">
                  <div className="login-btn tweet-btn" onClick={handleLogout}>
                    Logout
                  </div>
                </div>
              </div>
            </div>
            <div className="feeds-div">
              <div className="create-tweet-div">
                <div className="feed-profile-div">
                  <img
                    src="https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg"
                    alt="profile picture"
                  />
                </div>
                <div className="create-div">
                  <div className="input-tweet-div">
                    <input
                      type="text"
                      placeholder="What's happening?"
                      value={tweetText}
                      onChange={(e) => setTweetText(e.target.value)}
                    />
                  </div>
                  <div className="tweet-scope">
                    <FontAwesomeIcon icon={faEarthAmericas} /> Everyone can
                    reply
                  </div>
                  <div className="tweet-btn-div">
                    {/*  <input type="file" onChange={handleFileChange} /> */}
                    <div className="tweet-options">
                      <FontAwesomeIcon icon={faImage} size="lg" />
                    </div>
                    <div
                      className="tweet-btn create-tweet-btn"
                      onClick={handleTweet}
                    >
                      Tweet
                    </div>
                  </div>
                </div>
              </div>
              <div className="post-feed num_tweets">
                <div>Show 345 Tweets</div>
              </div>

              {localState.feed &&
                localState.feed.map((item) => (
                  <Feed data={item} key={item.postId} />
                ))}
            </div>
            <div className="trending-div">
              <div className="trending-section">
                <div className="trending-title">What’s happening</div>
                <div className="trending-feeds">
                  <div className="trending-feed">
                    <div className="feed-data">
                      <div className="feed-category">
                        India National News . LIVE
                      </div>
                      <div className="feed-title">
                        Tributes pour in for Kargil martyrs on the 23rd
                        anniversary of the war
                      </div>
                      <div className="feed-tweets">
                        Trending with{' '}
                        <span className="text-blue">#IndianAry</span>,{' '}
                        <span className="text-blue"> #KargilVijayDiwas</span>
                      </div>
                    </div>
                    <div className="feed-img">
                      <img
                        src="https://pbs.twimg.com/semantic_core_img/1551595760184987648/Pxz7dn3b?format=jpg&name=120x120"
                        alt="feed image"
                      />
                    </div>
                  </div>

                  <div className="trending-feed">
                    <div className="feed-data">
                      <div className="feed-category">News · Last night</div>
                      <div className="feed-title">
                        Health experts explain the difference between monkeypox
                        and COVID-19
                      </div>
                    </div>
                    <div className="feed-img">
                      <img
                        src="https://pbs.twimg.com/semantic_core_img/1529038027091169280/KkaBuo64?format=jpg&name=120x120"
                        alt="feed image"
                      />
                    </div>
                  </div>

                  <div className="trending-feed">
                    <div className="feed-data">
                      <div className="feed-category">War in Ukraine · LIVE</div>
                      <div className="feed-title">
                        Latest updates on the war in Ukraine
                      </div>
                    </div>
                    <div className="feed-img">
                      <img
                        src="https://pbs.twimg.com/semantic_core_img/1551548666204147713/3RBFvyaQ?format=jpg&name=120x120"
                        alt="feed image"
                      />
                    </div>
                  </div>

                  <div className="trending-feed">
                    <div className="feed-data">
                      <div className="feed-category">Trending in India</div>
                      <div className="feed-title">#5GAution</div>
                      <div className="feed-tweets">7894 Tweets</div>
                    </div>
                  </div>

                  <div className="trending-feed">
                    <div className="feed-data">
                      <div className="feed-category">News . Trending</div>
                      <div className="feed-title">Breaking News</div>
                      <div className="feed-tweets">7894 Tweets</div>
                    </div>
                  </div>
                </div>
                <div className="show-more">Show more</div>
              </div>
              <div className="follow-section">
                <div className="follow-title">Who to follow</div>
                <div className="follow-feeds">
                  <div className="follow-feed">
                    <div className="follow-profile-pic">
                      <img
                        src="https://pbs.twimg.com/profile_images/1418658538688155648/CREA-CYu_400x400.jpg"
                        alt="profile picture"
                      />
                    </div>
                    <div className="follow-profile-div">
                      <div>Mehul Mohan</div>
                      <div className="follow-username">@mehulmpt</div>
                    </div>
                    <div className="follow-btn-div">
                      <div>Follow</div>
                    </div>
                  </div>

                  <div className="follow-feed">
                    <div className="follow-profile-pic">
                      <img
                        src="https://pbs.twimg.com/profile_images/1284167924123500545/5cloQkyv_400x400.jpg"
                        alt="profile picture"
                      />
                    </div>
                    <div className="follow-profile-div">
                      <div>Sachin Mahesh</div>
                      <div className="follow-username">@sachin</div>
                    </div>
                    <div className="follow-btn-div">
                      <div>Follow</div>
                    </div>
                  </div>
                </div>
                <div className="show-more">Show more</div>
              </div>
            </div>
          </div>
        </div>
      </AppContext.Provider>
    </>
  );
};

export default Dashboard;
