import React, {Component} from 'react';
import {LazyImageProvider} from 'components/LazyImage/LazyImageContext';
import styled, {ThemeProvider} from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import theme from 'theme/theme';
import MapContainer from 'components/Map/MapContainer';
import categories from 'constants/categories';
import Carousel from 'components/Carousel/Carousel';
import galleries from 'constants/galleries';
import LazyImage from 'components/LazyImage/LazyImage';
import Animation from 'components/Animation/Animation';
import Checkbox from 'components/Checkbox/Checkbox';

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
`;

class App extends Component {
  state = {
    activeCategories: categories.map(category => category.color),
    isCheckedCategories: Object.fromEntries(categories.map(category => [category.color, true])),
  };

  changeCategories = event => {
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
          <Wrapper>
            {categories.map(category => (
              <label>
                <Checkbox
                  color={category.color}
                  icon={category.icon}
                  key={category.color}
                  type="checkbox"
                  name={category.color}
                  value={category.color}
                  onChange={this.changeCategories}
                  checked={isCheckedCategories[category.color]}
                />
                <span/>
              </label>
            ))}
          </Wrapper>
          <MapContainer activeCategories={activeCategories}/>
          <Animation
            galleries="true"
            transitionName="fade"
            transitionAppear={true}
            transitionEnter={true}
            transitionLeave={true}
            transitionAppearTimeout={0}
            transitionEnterTimeout={0}
            transitionLeaveTimeout={0}
          >
            {galleries.map(gallery => (activeCategories.includes(gallery.border)) &&
              <Carousel color={gallery.border}>
                {gallery.photos.map(photo => (
                  <>
                    <figcaption id={`${gallery.index}`}>{photo.title}</figcaption>
                    <LazyImage
                      key={photo.url}
                      src={photo.url}
                      alt={photo.title}
                      aspectRatio={[16, 9]}
                    />
                  </>
                ))}
              </Carousel>
            )}
          </Animation>
        </LazyImageProvider>
      </ThemeProvider>
    );
  }
}

export default App;
