var React = require('react');
var Actions = require('../actions');
var ImageStore = require('../stores/topic-store');
var Reflux = require('reflux');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      images: []
    }
  },
  componentWillMount: function() {
    Actions.getImages(this.props.params.id);
  },
  render: function() {
    return <div>

    </div>
  },
  onChange: function() {
    this.setState({
      images: images
    })
  }
})
