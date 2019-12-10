import React, {Component} from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import styled, {ThemeProvider} from 'styled-components';
import theme from 'theme/theme';
import MapContainer from 'components/MapContainer';
import categories from 'constants/categories';
import Carousel from 'components/Carousel';
import {LazyImageProvider} from 'components/LazyImageContext';
import galleries from 'constants/galleries';
import LazyImage from 'components/LazyImage';
import Animation from 'components/Animation';

const Input = styled.input`
  // TODO: Stylize checkboxes
`;

class App extends Component {
  state = {
    activeCategories: [...categories],
    isCheckedCategories: Object.fromEntries(categories.map(category => [category, true])),
  };

  changeEvent = (event) => {
    let activeCategories = this.state.activeCategories;
    let selectedCategory = event.target.value;
    if (event.target.checked === true) {
      activeCategories.push(selectedCategory);
    } else {
      let categoryIndex = activeCategories.indexOf(selectedCategory);
      activeCategories.splice(categoryIndex, 1);
    }
    this.setState({
      isCheckedCategories: {
        ...this.state.isCheckedCategories,
        [selectedCategory]: !this.state.isCheckedCategories[selectedCategory]
      }
    });
  };

  render() {
    const {activeCategories, isCheckedCategories} = this.state;

    return (
      <ThemeProvider theme={theme}>
        <LazyImageProvider>
          <GlobalStyle/>
          {categories.map(category =>
            <label>
              <Input
                key={category}
                type="checkbox"
                name={category}
                value={category}
                onChange={this.changeEvent}
                checked={isCheckedCategories[category]}
              />
              {category}
            </label>
          )}
          <MapContainer activeCategories={activeCategories}/>
          <Animation
            galleries
            transitionName="fade"
            transitionAppear={true}
            transitionEnter={true}
            transitionLeave={true}
            transitionAppearTimeout={0}
            transitionEnterTimeout={0}
            transitionLeaveTimeout={0}
          >
            {galleries.map(gallery => (activeCategories.includes(gallery.border)) &&
              <Carousel>
                {gallery.photos.map(photo => <>
                  <LazyImage
                    key={photo.url}
                    src={photo.url}
                    alt={photo.title}
                    aspectRatio={[16, 9]}
                  />
                  <caption>{photo.title}</caption>
                </>)}
              </Carousel>)}
          </Animation>
        </LazyImageProvider>
      </ThemeProvider>
    );
  }
}

export default App;
