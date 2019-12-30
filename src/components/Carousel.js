import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import EmblaCarouselReact from 'embla-carousel-react';
import CarouselButtons from 'components/CarouselButtons';

const Wrapper = styled.div`
  flex: 1;
  min-width: 30vw;
  max-width: 30vw;
  margin: 2vh auto;
  background-color: ${({color}) => (color)};
  color: ${({theme}) => (theme.white)};
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 27px;
`;

const Viewport = styled(EmblaCarouselReact)`
  width: 100%;
  overflow: hidden;
  border-radius: 27px 27px 0 0;
  
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

const Dots = styled.div`
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
      <Dots>
        {scrollSnaps.map((snap, index) => (
          <CarouselButtons
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </Dots>
    </Wrapper>
  );
};

export default Carousel;
