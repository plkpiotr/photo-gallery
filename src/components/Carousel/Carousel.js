import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import EmblaCarouselReact from 'embla-carousel-react';
import CarouselButton from 'components/Carousel/CarouselButton';

const Wrapper = styled.div`
  flex: 1;
  min-width: 30vw;
  max-width: 30vw;
  margin: 3vh auto;
  background-color: ${({color}) => (color)};
  color: ${({theme}) => (theme.white)};
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  -webkit-box-shadow: 5px 5px 17px 0 rgba(0,0,0,0.52); 
  box-shadow: 5px 5px 17px 0 rgba(0,0,0,0.52);
`;

const Viewport = styled(EmblaCarouselReact)`
  width: 100%;
  overflow: hidden;
    
  &.is-draggable {
    cursor: grab;
  }
  
  &.is-dragging {
    cursor: grabbing;
  }
`;

const Container = styled.div`
  display: flex;
`;

const Item = styled.div`
  position: relative;
  flex: 0 0 100%;
  background-color: ${({color}) => (color)};
  white-space: nowrap;
  text-align: center;
`;

const Panel = styled.div`
  counter-reset: section;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Carousel = ({children, color}) => {
  const [carousel, initCarousel] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(index => carousel.scrollTo(index), [carousel]);

  useEffect(() => {
    const onSelect = () => {
      setSelectedIndex(carousel.selectedScrollSnap());
    };

    if (carousel) {
      setScrollSnaps(carousel.scrollSnapList());
      carousel.on('select', onSelect);
      onSelect();
    }

    return () => carousel && carousel.destroy();
  }, [carousel]);

  return (
    <Wrapper color={color}>
      <Viewport
        emblaRef={initCarousel}
        options={{loop: false}}
        htmlTagName="div"
      >
        <Container>
          {children.map((child, index) => (
            <Item
              color={color}
              key={index}
            >
              {child}
            </Item>
          ))}
        </Container>
      </Viewport>
      <Panel>
        {scrollSnaps.map((snap, index) => (
          <CarouselButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </Panel>
    </Wrapper>
  );
};

export default Carousel;
