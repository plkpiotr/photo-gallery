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

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  // height: 100%;
  width: 100%;
`;

const Input = styled.input`
  display: none;
  
  + span {
    cursor: pointer;
    display: flex;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: ${({theme}) => (theme.quaternary)};
    align-items: center;
    justify-content: center;
    margin: 3vh 2vw;
    border: 5px solid ${({color}) => (color)};
    box-sizing: border-box;
    transition: all .4s;
    
    &::before {
      content: 'ac_unit';
      font-family: 'Material Icons', fantasy;
      font-size: 50px;
      color: ${({theme}) => (theme.secondary)};
      transition: all .4s;
    }
  }
  
  &:checked {
    + span {
      border-width: 25px;
      
      &::before {
        content: 'ac_unit';
        font-family: 'Material Icons', fantasy;
        font-size: 50px;
        color: ${({theme}) => (theme.quaternary)};
      }
    }
  }
`;

class App extends Component {
  state = {
    activeCategories: [...categories],
    isCheckedCategories: Object.fromEntries(categories.map(category => [category, true])),
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
          {categories.map(category => <label>
              <Input
                color={category}
                key={category}
                type="checkbox"
                name={category}
                value={category}
                onChange={this.changeCategories}
                checked={isCheckedCategories[category]}
              />
            <span/>
            </label>
          )}
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
              <Carousel>
                {gallery.photos.map(photo =>
                  <>
                    <LazyImage
                      key={photo.url}
                      src={photo.url}
                      alt={photo.title}
                      aspectRatio={[16, 9]}
                    />
                    <figcaption id={`${gallery.index}`}>{photo.title}</figcaption>
                  </>
                )}
              </Carousel>
            )}
          </Animation>
        </LazyImageProvider>
      </ThemeProvider>
    );
  }
}

export default App;
