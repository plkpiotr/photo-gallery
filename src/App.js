import React, {Component} from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import styled, {ThemeProvider} from 'styled-components';
import theme from 'theme/theme';
import MapContainer from 'components/MapContainer';
import categories from "./constants/categories";
import galleries from "./constants/galleries";
import Carousel from "./components/Carousel";

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
        <>
          <GlobalStyle/>
          {categories.map(category =>
            <Input
              key={category}
              type="checkbox"
              name={category}
              value={category}
              onChange={this.changeEvent}
              checked={isCheckedCategories[category]}
            />
          )}
          <MapContainer activeCategories={activeCategories}/>
          <Carousel>
            <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 3</div>
            <div>Slide 4</div>
            <div>Slide 5</div>
            <div>Slide 6</div>
            <div>Slide 7</div>
            <div>Slide 8</div>
            <div>Slide 9</div>
            <div>Slide 10</div>
            <div>Slide 11</div>
          </Carousel>
          {/*<div>*/}
          {/*  {galleries.filter(gallery => activeCategories*/}
          {/*    .includes(gallery.border))*/}
          {/*    .map(gallery => gallery.photos*/}
          {/*      .map(photo => <img*/}
          {/*        key={photo.url}*/}
          {/*        src={photo.url}*/}
          {/*        alt={photo.title}*/}
          {/*      />))}*/}
          {/*</div>*/}
        </>
      </ThemeProvider>
    );
  }
}

export default App;
