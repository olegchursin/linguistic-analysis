import React from 'react'

// Highcharts
const Highcharts = require('highcharts');
// Load module after Highcharts is loaded
require('highcharts/modules/wordcloud')(Highcharts);
require('highcharts/modules/exporting')(Highcharts);


class TextWordcloud extends React.Component {

  componentDidMount = (props) => {

    const text = this.props.text

    // Highcharts Wordcloud graph
    var lines = text.split(/[,. ]+/g),
        data = Highcharts.reduce(lines, function (arr, word) {
            var obj = Highcharts.find(arr, function (obj) {
                return obj.name === word;
            });
            if (obj) {
                obj.weight += 1;
            } else {
                obj = {
                    name: word,
                    weight: 1
                };
                arr.push(obj);
            }
            return arr;
        }, []);

    Highcharts.chart('wordcloud-container', {
        series: [{
            type: 'wordcloud',
            data: data,
            name: 'Occurrences'
        }],
        title: {
            text: 'Wordcloud'
        }
    });
  }



  render(){
    return (
      <div>
        <div id="wordcloud-container"></div>
      </div>
    )
  }
}

export default TextWordcloud;
