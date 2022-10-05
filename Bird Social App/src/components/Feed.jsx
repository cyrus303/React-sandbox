import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faEllipsis, faHashtag, faRetweet, faArrowUpFromBracket, faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faBell, faComment, faEnvelope, faFloppyDisk, faHeart, faImage, faPenToSquare, faTrashCan, faUser } from '@fortawesome/free-regular-svg-icons'

const Feed = ({ data }) => {
  const [isContentImg, setIsContentImg] = useState(data.hasOwnProperty('contentImg') ? true : false)
  const [editState, setEditState] = useState(false)
  const [editText, setEditText] = useState(data.content)

  const { user, localState, setLocalState } = useContext(AppContext)

  function handleEdit() {

    let updatedFeeds = localState.feed.map(item => {
      if (item.postId === data.postId) {
        return { ...item, content: editText }
      } else {
        return item
      }
    })

    setLocalState(current => {
      return { ...current, feed: updatedFeeds }
    })
    localStorage.setItem('bird-app', JSON.stringify({ ...localState, feed: updatedFeeds }))
    setEditState(current => !current)
  }

  function handleDelete(postId) {
    let updatedFeeds = localState.feed.filter(item => item.postId !== postId)

    setLocalState(current => {
      return { ...current, feed: updatedFeeds }
    })

    localStorage.setItem('bird-app', JSON.stringify({ ...localState, feed: updatedFeeds }))
  }

  return (
    <>
      <div className="post-feed">

        <div className="feed-profile-div">
          <img src={data.user.profilePic}
            alt="profile picture" />
        </div>

        <div className="feed-body">
          <div className="feed-title-div">
            <div className="feed-profile-info">
              <div className="feed-profile-name"><span className="profile-name">{data.user.name}</span> @<span
                className="profile-username">{data.user.username}
              </span> . 19h </div>
              {
                user.userId === data.user.userId
                  ? (<div className="feed-operation">
                    {
                      editState
                        ? (<div onClick={handleEdit}><FontAwesomeIcon icon={faFloppyDisk} /></div>)
                        : (<>
                          <div onClick={() => setEditState(current => !current)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                          <div onClick={() => handleDelete(data.postId)}><FontAwesomeIcon icon={faTrashCan} /></div>
                        </>
                        )
                    }

                  </div>)
                  : null
              }

            </div>
            {
              editState
                ? (<textarea className="feed-title-input"
                  value={editText}
                  autoFocus
                  rows={4}
                  onChange={(e) => setEditText(e.target.value)}
                />)
                : (<div className="feed-title">{data.content}</div>)
            }
          </div>
          {
            isContentImg &&
            <div className="content-img">
              <img src={data.contentImg} alt="content picture" />
            </div>
          }
          <div className="feed-reaction">
            <div className="feed-action">
              <div className="reaction-icon"><FontAwesomeIcon icon={faComment} /></div>
              <div className="reaction-num">3</div>
            </div>
            <div className="feed-action">
              <div className="reaction-icon"><FontAwesomeIcon icon={faRetweet} /></div>
              <div className="reaction-num">3</div>
            </div>
            <div className="feed-action">
              <div className="reaction-icon"><FontAwesomeIcon icon={faHeart} /></div>
              <div className="reaction-num">3</div>
            </div>
            <div className="feed-action">
              <div className="reaction-icon"><FontAwesomeIcon icon={faArrowUpFromBracket} /></div>
              <div className="reaction-num">3</div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Feed