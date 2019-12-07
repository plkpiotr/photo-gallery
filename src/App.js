import React, {Component} from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import styled, {ThemeProvider} from 'styled-components';
import theme from 'theme/theme';
import MapContainer from 'components/MapContainer';
import categories from "./constants/categories";

const Input = styled.input`
  border: mediumvioletred;
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
        </>
      </ThemeProvider>
    );
  }
}

export default App;
