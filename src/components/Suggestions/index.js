import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { GoIssueOpened } from 'react-icons/go';
import './style.scss'

class Suggestions extends React.Component {

  static propTypes = {
    results: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.oneOfType([
              PropTypes.string,
              PropTypes.number
            ]).isRequired,
            title: PropTypes.string.isRequired,
            imgUrl: PropTypes.string.isRequired,
          })
        )
      })
    )
  }

  static defaultProps = {
    results: []
  }

  renderNoResult = () => {
    return (
      <div styleName="no-result">
        <GoIssueOpened styleName="issue-icon" />
        <span>No result is found...</span>
      </div>
    );
  }

  renderResultItem = (item) => {
    const { url, title, imgUrl } = item;

    return (
      <Link 
        to={url} 
        styleName="item-link"
      >
        <div 
          styleName="item-thumbnail"
          style={{
            backgroundImage: `url(${imgUrl})`
          }}
        >
        </div>
        {title}
      </Link>
    );
  }

  renderResultGroup = (group) => (
    <ListGroup flush>
      {
        group.map((item, index) => {
          return (
            <ListGroupItem 
              key={index} 
              styleName="list-item"
              onClick={this.props.onClick}
            >
              { this.renderResultItem(item) }
            </ListGroupItem>
          );
        })
      }
    </ListGroup>
  )

  renderSuggestions = (results) => {

    const contents = [];

    for (let ii = 0; ii < results.length; ii++) {
      const result = results[ii];
      if (result.items && result.items.length > 0) {

        let { type, items } = result;

        contents.push(
          <div
            key={`group-type-${type}`}
            styleName="suggestion-group"
          >
            <h6 styleName="group-title">{type}</h6>
            {this.renderResultGroup(items)}
            <div styleName="group-footer">
              <Link to="/" styleName="link-more">More...</Link>
            </div>
          </div>
        );
      }
    }

    return contents;
  }

  render () {

    const { results, onMouseEnter, onMouseLeave } = this.props;
    const contents = this.renderSuggestions(results);

    return (
      <div 
        styleName="suggestions"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {
          contents.length > 0
            ? contents
            : this.renderNoResult()
        }
      </div>
    );
  }
}

export default Suggestions;